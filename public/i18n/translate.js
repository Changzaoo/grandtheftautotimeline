/* Tradução AUTOMÁTICA e incremental do conteúdo do site.
 *
 * Lê i18n/_content.json (chave "c<hash>" -> texto pt-BR; gerado por
 * extract-content.js), descobre o que ainda não tem tradução em cada idioma,
 * traduz por máquina em lotes, guarda em i18n/parts/<code>.mt.json (cache
 * persistente — rodar de novo só traduz o que é novo) e monta os catálogos
 * i18n/<code>.content.js (via build-content.js), copiando para public/i18n.
 *
 * Partes traduzidas à mão (i18n/parts/<code>.<n>.json) têm prioridade sobre
 * a tradução automática: só as chaves ausentes em todas as partes vão ao MT.
 *
 * Uso:
 *   node i18n/translate.js                 -> todos os idiomas
 *   node i18n/translate.js fr de           -> só os indicados
 *   node i18n/translate.js --force         -> ignora o cache .mt.json (retraduz tudo)
 *   node i18n/translate.js --dry           -> só mostra o que falta, não traduz
 *   node i18n/translate.js --provider=X    -> força um provedor (ver abaixo)
 *
 * Provedores (auto-seleção por variável de ambiente, nesta ordem):
 *   DEEPL_API_KEY                -> DeepL (melhor qualidade; free tier 500k chars/mês)
 *   GOOGLE_TRANSLATE_API_KEY     -> Google Cloud Translation v2
 *   LIBRETRANSLATE_URL [+_KEY]   -> instância LibreTranslate
 *   (nenhuma)                    -> Google Translate público (sem chave; pode
 *                                   limitar por IP — o script recua e retoma)
 */
"use strict";
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const DIR = __dirname;
const ROOT = path.join(DIR, "..");
const PARTS = path.join(DIR, "parts");
const CONTENT = path.join(DIR, "_content.json");
const LIVE = path.join(DIR, "_live.json");

const ALL_LANGS = ["en", "fr", "it", "de", "es", "es-MX", "pl", "ru", "ja", "ko", "zh-CN", "zh-TW"];
/* pt-BR não traduz o site (é a fonte), mas TRADUZ o conteúdo dos JSON ao
 * vivo, que vêm do GTA Wiki em inglês. */
const LIVE_LANGS = ALL_LANGS.concat(["pt-BR"]);
/* Idiomas que reaproveitam a tradução de outro (MT não distingue variantes). */
const ALIAS = { "es-MX": "es" };

/* Códigos por provedor. */
const CODES = {
  google:  { "pt-BR": "pt", en: "en", fr: "fr", it: "it", de: "de", es: "es", pl: "pl", ru: "ru", ja: "ja", ko: "ko", "zh-CN": "zh-CN", "zh-TW": "zh-TW" },
  deepl:   { "pt-BR": "PT-BR", en: "EN-US", fr: "FR", it: "IT", de: "DE", es: "ES", pl: "PL", ru: "RU", ja: "JA", ko: "KO", "zh-CN": "ZH-HANS", "zh-TW": "ZH-HANT" },
  libre:   { "pt-BR": "pt", en: "en", fr: "fr", it: "it", de: "de", es: "es", pl: "pl", ru: "ru", ja: "ja", ko: "ko", "zh-CN": "zh", "zh-TW": "zt" }
};

/* Termos que NUNCA devem ser traduzidos (nomes próprios que o MT costuma
 * distorcer). Comparação exata do texto inteiro. */
const KEEP = new Set([
  "Grand Theft Auto", "Rockstar Games", "Rockstar North", "Take-Two Interactive",
  "GTA Online", "GTA VI", "GTA V", "GTA IV", "GTA III", "Vice City", "Liberty City",
  "San Andreas", "Los Santos", "San Fierro", "Las Venturas", "Leonida", "Vice City Stories",
  "Liberty City Stories", "Chinatown Wars", "The Lost and Damned", "The Ballad of Gay Tony",
  "HD Universe", "3D Universe", "2D Universe"
]);

/* ------------------------------------------------------------------ args */
const argv = process.argv.slice(2);
const flags = new Set(argv.filter((a) => a.startsWith("--")));
const providerArg = (argv.find((a) => a.startsWith("--provider=")) || "").split("=")[1];
const wanted = argv.filter((a) => !a.startsWith("--"));
const FORCE = flags.has("--force");
const DRY = flags.has("--dry");
const CONCURRENCY = Number(process.env.I18N_CONCURRENCY || 3);
const BATCH_ITEMS = Number(process.env.I18N_BATCH || 40);
const BATCH_CHARS = 3500;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const decodeEntities = (s) => s
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&apos;/g, "'")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");
/* Normaliza placeholders {0} que o MT às vezes espaça ou fullwidth-iza. */
const fixPlaceholders = (s) => s.replace(/[{｛]\s*(\d+)\s*[}｝]/g, "{$1}");
const clean = (s) => fixPlaceholders(decodeEntities(String(s))).trim();

/* ------------------------------------------------------------- provedores */
async function postJson(url, body, headers) {
  const res = await fetch(url, { method: "POST", headers: Object.assign({ "Content-Type": "application/json" }, headers || {}), body: JSON.stringify(body) });
  const text = await res.text();
  if (!res.ok) throw new Error("HTTP " + res.status + " " + text.slice(0, 200));
  return JSON.parse(text);
}

const providers = {
  /* Google Translate público (endpoint da extensão do Chrome). Sem chave. */
  "google-free": {
    code: (c) => CODES.google[c],
    async translate(texts, target, source) {
      const params = new URLSearchParams();
      for (const q of texts) params.append("q", q);
      const url = "https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=" + encodeURIComponent(source || "pt") + "&tl=" + encodeURIComponent(target);
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=utf-8", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36" },
        body: params.toString()
      });
      const body = await res.text();
      if (!res.ok || body.trim().startsWith("<")) throw new Error("bloqueado/limitado (HTTP " + res.status + ")");
      let data = JSON.parse(body);
      if (typeof data === "string") data = [data];
      /* Formato pode vir como ["t1","t2"] ou [["t1","pt"],["t2","pt"]]. */
      return data.map((d) => Array.isArray(d) ? d[0] : d);
    }
  },
  deepl: {
    code: (c) => CODES.deepl[c],
    async translate(texts, target, source) {
      const key = process.env.DEEPL_API_KEY;
      const host = key.endsWith(":fx") ? "https://api-free.deepl.com" : "https://api.deepl.com";
      const data = await postJson(host + "/v2/translate", { text: texts, source_lang: (source || "pt").toUpperCase() === "AUTO" ? undefined : (source || "pt").toUpperCase(), target_lang: target, preserve_formatting: true },
        { Authorization: "DeepL-Auth-Key " + key });
      return data.translations.map((x) => x.text);
    }
  },
  "google-cloud": {
    code: (c) => CODES.google[c],
    async translate(texts, target, source) {
      const data = await postJson("https://translation.googleapis.com/language/translate/v2?key=" + process.env.GOOGLE_TRANSLATE_API_KEY,
        { q: texts, source: source === "auto" ? undefined : (source || "pt"), target, format: "text" });
      return data.data.translations.map((x) => x.translatedText);
    }
  },
  libre: {
    code: (c) => CODES.libre[c],
    async translate(texts, target, source) {
      const base = process.env.LIBRETRANSLATE_URL.replace(/\/$/, "");
      const body = { q: texts, source: source || "pt", target, format: "text" };
      if (process.env.LIBRETRANSLATE_KEY) body.api_key = process.env.LIBRETRANSLATE_KEY;
      const data = await postJson(base + "/translate", body);
      return Array.isArray(data.translatedText) ? data.translatedText : [data.translatedText];
    }
  }
};

function pickProvider() {
  if (providerArg) return providerArg;
  if (process.env.I18N_PROVIDER) return process.env.I18N_PROVIDER;
  if (process.env.DEEPL_API_KEY) return "deepl";
  if (process.env.GOOGLE_TRANSLATE_API_KEY) return "google-cloud";
  if (process.env.LIBRETRANSLATE_URL) return "libre";
  return "google-free";
}

/* Traduz um lote com retentativas; se a contagem não bater, divide o lote. */
async function translateBatch(provider, texts, target, source, attempt) {
  attempt = attempt || 0;
  try {
    const out = await provider.translate(texts, target, source);
    if (!Array.isArray(out) || out.length !== texts.length) throw new Error("contagem divergente " + (out && out.length) + "/" + texts.length);
    return out.map(clean);
  } catch (err) {
    if (texts.length > 1 && /contagem|JSON/.test(err.message)) {
      const mid = Math.ceil(texts.length / 2);
      return (await translateBatch(provider, texts.slice(0, mid), target, source, attempt))
        .concat(await translateBatch(provider, texts.slice(mid), target, source, attempt));
    }
    if (attempt < 5) {
      const wait = [2000, 6000, 15000, 40000, 90000][attempt];
      process.stdout.write("    ! " + err.message + " — aguardando " + (wait / 1000) + "s\n");
      await sleep(wait);
      return translateBatch(provider, texts, target, source, attempt + 1);
    }
    throw err;
  }
}

function makeBatches(entries) {
  const batches = []; let cur = [], chars = 0;
  for (const e of entries) {
    if (cur.length && (cur.length >= BATCH_ITEMS || chars + e.text.length > BATCH_CHARS)) { batches.push(cur); cur = []; chars = 0; }
    cur.push(e); chars += e.text.length;
  }
  if (cur.length) batches.push(cur);
  return batches;
}

function readJsonTolerant(file) {
  try { return JSON.parse(fs.readFileSync(file, "utf8")); }
  catch (err) { process.stdout.write("  ! " + path.basename(file) + " inválido (" + err.message.slice(0, 60) + ") — ignorado\n"); return null; }
}

/* Chaves já cobertas por partes manuais (<code>.<n>.json). */
function manualKeys(code) {
  const m = {};
  if (!fs.existsSync(PARTS)) return m;
  for (const f of fs.readdirSync(PARTS).sort()) {
    if (!new RegExp("^" + code.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\.\\d+\\.json$").test(f)) continue;
    const obj = readJsonTolerant(path.join(PARTS, f));
    if (obj) for (const k of Object.keys(obj)) if (typeof obj[k] === "string" && obj[k]) m[k] = obj[k];
  }
  return m;
}

async function translateLang(code, content, providerName, live) {
  const provider = providers[providerName];
  const target = provider.code(code);
  if (!target) { process.stdout.write(`[${code}] sem código no provedor ${providerName} — pulado\n`); return true; }
  const mtFile = path.join(PARTS, code + ".mt.json");
  const cache = (!FORCE && fs.existsSync(mtFile) && readJsonTolerant(mtFile)) || {};
  const manual = manualKeys(code);
  const keys = Object.keys(content).concat(Object.keys(live));

  const todo = [];
  const wantPt = code === "pt-BR"; /* pt-BR só precisa do conteúdo ao vivo (inglês) */
  const sources = wantPt ? [["en", live]] : [["pt", content], ["en", live]];
  for (const [src, map] of sources) {
    for (const k of Object.keys(map)) {
      if (manual[k] || cache[k] || todo.some((e) => e.key === k)) continue;
      const text = map[k];
      if (KEEP.has(text)) { cache[k] = text; continue; }
      todo.push({ key: k, text, source: src });
    }
  }
  todo.sort((a, b) => (a.source < b.source ? -1 : a.source > b.source ? 1 : 0)); /* lotes homogêneos */
  const chars = todo.reduce((a, e) => a + e.text.length, 0);
  process.stdout.write(`[${code}] ${keys.length} chaves · manual ${Object.keys(manual).length} · cache ${Object.keys(cache).length} · a traduzir ${todo.length} (${chars} chars)\n`);
  if (DRY || !todo.length) { if (todo.length === 0) save(mtFile, cache); return true; }

  /* Um lote não pode misturar idiomas de origem. */
  const batches = [];
  for (const src of ["pt", "en"]) {
    const part = todo.filter((e) => e.source === src);
    if (part.length) batches.push(...makeBatches(part));
  }
  let done = 0, failed = false, next = 0;
  const save0 = () => save(mtFile, cache);
  async function worker() {
    while (next < batches.length && !failed) {
      const b = batches[next++];
      try {
        const out = await translateBatch(provider, b.map((e) => e.text), target, b[0].source);
        b.forEach((e, i) => { if (out[i]) cache[e.key] = out[i]; });
        done += b.length;
        if (done % 200 < b.length) { save0(); process.stdout.write(`    ${code}: ${done}/${todo.length}\n`); }
        await sleep(120);
      } catch (err) {
        failed = true;
        process.stdout.write("    !! " + code + ": desistindo neste idioma — " + err.message + "\n");
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, batches.length) }, worker));
  save0();
  process.stdout.write(`    ${code}: ${done}/${todo.length} traduzidas${failed ? " (INCOMPLETO — rode de novo para retomar)" : ""}\n`);
  return !failed;
}

function save(file, obj) {
  fs.mkdirSync(PARTS, { recursive: true });
  const sorted = {};
  for (const k of Object.keys(obj).sort()) sorted[k] = obj[k];
  fs.writeFileSync(file, JSON.stringify(sorted, null, 0), "utf8");
}

(async function main() {
  if (!fs.existsSync(CONTENT)) {
    console.error("i18n/_content.json não existe — rode: npm run build && node i18n/extract-content.js");
    process.exit(2);
  }
  const content = JSON.parse(fs.readFileSync(CONTENT, "utf8"));
  const live = fs.existsSync(LIVE) ? JSON.parse(fs.readFileSync(LIVE, "utf8")) : {};
  const providerName = pickProvider();
  if (!providers[providerName]) { console.error("provedor desconhecido:", providerName); process.exit(2); }
  process.stdout.write("Provedor: " + providerName + " · conteúdo pt " + Object.keys(content).length + " · conteúdo ao vivo (en) " + Object.keys(live).length + "\n");

  const langs = LIVE_LANGS.filter((c) => !wanted.length || wanted.includes(c));
  let ok = true;
  for (const code of langs) {
    if (ALIAS[code]) continue; /* tratado depois, copiando do idioma base */
    ok = (await translateLang(code, content, providerName, live)) && ok;
  }
  for (const code of langs) {
    if (!ALIAS[code]) continue;
    const src = path.join(PARTS, ALIAS[code] + ".mt.json");
    if (fs.existsSync(src)) { fs.copyFileSync(src, path.join(PARTS, code + ".mt.json")); process.stdout.write(`[${code}] reaproveita ${ALIAS[code]}.mt.json\n`); }
  }
  if (DRY) return;

  /* Monta i18n/<code>.content.js e copia para public/i18n. */
  const r = spawnSync(process.execPath, [path.join(DIR, "build-content.js"), ...langs], { stdio: "inherit" });
  const pub = path.join(ROOT, "public", "i18n");
  if (fs.existsSync(pub)) {
    for (const code of langs) {
      const f = path.join(DIR, code + ".content.js");
      if (fs.existsSync(f)) fs.copyFileSync(f, path.join(pub, code + ".content.js"));
    }
  }
  process.exit(ok && r.status === 0 ? 0 : 1);
})().catch((err) => { console.error(err); process.exit(1); });
