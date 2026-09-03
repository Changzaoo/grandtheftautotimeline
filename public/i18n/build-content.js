/* Monta os catálogos de CONTEÚDO i18n/<code>.content.js a partir das partes em
 * i18n/parts/:
 *   <code>.mt.json   — tradução automática (translate.js), carregada PRIMEIRO
 *   <code>.<n>.json  — partes traduzidas à mão, carregadas DEPOIS (têm prioridade)
 * Todas são JSON plano { "c<hash>": "tradução" }. Valida contra i18n/_content.json.
 *
 * Uso: node i18n/build-content.js            (todos os idiomas com partes)
 *      node i18n/build-content.js fr de      (apenas os indicados)
 */
const fs = require("fs");
const path = require("path");
const DIR = __dirname;
const PARTS = path.join(DIR, "parts");

const contentPath = path.join(DIR, "_content.json");
if (!fs.existsSync(contentPath)) { console.error("i18n/_content.json ausente — rode node i18n/extract-content.js"); process.exit(2); }
const contentRef = JSON.parse(fs.readFileSync(contentPath, "utf8"));
const livePath = path.join(DIR, "_live.json");
if (fs.existsSync(livePath)) Object.assign(contentRef, JSON.parse(fs.readFileSync(livePath, "utf8")));
const refKeys = Object.keys(contentRef);
const refCount = refKeys.length;

/* Idiomas que herdam o conteúdo de outro (a máquina não distingue a variante).
 * es-MX reaproveita TUDO de es, inclusive as partes traduzidas à mão. */
const ALIAS = { "es-MX": "es" };
/* pt-BR é o idioma-fonte do site: só precisa das chaves dos JSON ao vivo
 * (live/*.json, escritos em inglês). O resto já está em português no código. */
const livePath0 = path.join(DIR, "_live.json");
const LIVE_ONLY = fs.existsSync(livePath0) ? Object.keys(JSON.parse(fs.readFileSync(livePath0, "utf8"))) : [];

const wanted = process.argv.slice(2);
const codes = new Set();
if (fs.existsSync(PARTS)) {
  for (const f of fs.readdirSync(PARTS)) {
    const m = /^(.+)\.(\d+|mt)\.json$/.exec(f);
    if (m) codes.add(m[1]);
  }
}

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
let anyBad = false;
for (const code of [...codes].sort()) {
  if (wanted.length && !wanted.includes(code)) continue;
  const merged = {};
  const all = fs.readdirSync(PARTS);
  const from = ALIAS[code] || code; /* es-MX lê tudo de es, inclusive as partes manuais */
  const mt = all.filter((f) => f === from + ".mt.json" || f === code + ".mt.json");
  const manual = all
    .filter((f) => new RegExp("^" + esc(from) + "\\.\\d+\\.json$").test(f) ||
                   new RegExp("^" + esc(code) + "\\.\\d+\\.json$").test(f))
    .sort();
  for (const pf of mt.concat(manual)) {
    let obj;
    try { obj = JSON.parse(fs.readFileSync(path.join(PARTS, pf), "utf8")); }
    catch (e) { console.error("  ! parte inválida (ignorada):", pf, e.message.slice(0, 80)); continue; }
    for (const k of Object.keys(obj)) if (typeof obj[k] === "string" && obj[k] && k in contentRef) merged[k] = obj[k];
  }
  const have = Object.keys(merged).length;
  const expected = code === "pt-BR" ? LIVE_ONLY : refKeys;
  const missing = expected.filter((k) => !(k in merged));
  /* I18N_CONTENT_LOADED marca que o catálogo de CONTEÚDO deste idioma já está
   * em memória — o runtime usa isso para não buscar o arquivo de novo. */
  const body = "(function(){window.I18N_CATALOGS=window.I18N_CATALOGS||{};var c=window.I18N_CATALOGS[" +
    JSON.stringify(code) + "]=window.I18N_CATALOGS[" + JSON.stringify(code) + "]||{};Object.assign(c," +
    JSON.stringify(merged) + ");window.I18N_CONTENT_LOADED=window.I18N_CONTENT_LOADED||{};window.I18N_CONTENT_LOADED[" +
    JSON.stringify(code) + "]=true;})();\n";
  fs.writeFileSync(path.join(DIR, code + ".content.js"), body, "utf8");
  const status = missing.length ? "INCOMPLETO" : "OK";
  if (status !== "OK") anyBad = true;
  console.log(`${code}.content.js: ${have}/${expected.length} chaves${missing.length ? " · faltam " + missing.length : ""} — ${status}`);
}
if (!codes.size) console.log("Nenhuma parte encontrada em i18n/parts/.");
process.exit(anyBad ? 1 : 0);
