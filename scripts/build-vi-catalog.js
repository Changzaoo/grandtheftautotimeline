/* ============ Catálogo de GTA VI (GTA Wiki → live/vi-catalog.json) ============
 * Lê as categorias públicas do GTA Wiki sobre Grand Theft Auto VI — veículos,
 * armas, personagens, gangues, locais (por condado), negócios, animais e
 * rádios — e gera um JSON pronto para a seção "Catálogo de GTA VI" do site.
 *
 * Para cada página: ficha (infobox) + primeiro parágrafo + a MELHOR imagem
 * específica de GTA VI (arquivo com "GTAVI" no nome). Se a página só tem
 * imagem de outro jogo, o item fica sem foto — nunca mostramos um carro de
 * GTA Online como se fosse de GTA VI.
 *
 * Rodado pela GitHub Action (.github/workflows/vi-catalog.yml) e por `npm run catalog`.
 * Node 18+. Sem dependências. Só usa a API pública (api.php) do GTA Wiki.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const API = "https://gta.fandom.com/api.php";
const UA = "Mozilla/5.0 (compatible; GTA-Dossie-Catalog/1.0; +https://grandtheftautotimeline.vercel.app)";

const GROUPS = [
  { key: "vehicles", label: "Veículos", cats: ["Category:Vehicles in GTA VI"] },
  { key: "weapons", label: "Armas", cats: ["Category:Weapons in GTA VI"] },
  { key: "characters", label: "Personagens", cats: ["Category:Characters in GTA VI"] },
  { key: "gangs", label: "Gangues e organizações", cats: ["Category:Gangs in GTA VI", "Category:Organizations in GTA VI"] },
  { key: "locations", label: "Cidades e locais", cats: ["Category:Locations in GTA VI"], recursive: true },
  { key: "businesses", label: "Marcas e negócios", cats: ["Category:Businesses in GTA VI"] },
  { key: "animals", label: "Fauna", cats: ["Category:Animals in GTA VI"] },
  { key: "radio", label: "Rádios", cats: ["Category:Radio Stations in GTA VI", "Category:Radio stations in GTA VI"] }
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function api(params, tries = 3) {
  const url = `${API}?format=json&` + Object.entries(params).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { "user-agent": UA } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();
    } catch (err) {
      if (i === tries - 1) throw err;
      await sleep(800 * (i + 1));
    }
  }
}

/* ---------- categorias (com recursão opcional) ---------- */
async function categoryMembers(cat, recursive, seen = new Set(), depth = 0) {
  const pages = [];
  let cont = "";
  do {
    const j = await api({ action: "query", list: "categorymembers", cmtitle: cat, cmlimit: 500, cmprop: "title|type", ...(cont ? { cmcontinue: cont } : {}) });
    for (const m of (j.query && j.query.categorymembers) || []) {
      if (m.ns === 0 && !seen.has(m.title)) { seen.add(m.title); pages.push({ title: m.title, cat }); }
      else if (m.ns === 14 && recursive && depth < 3) pages.push(...await categoryMembers(m.title, true, seen, depth + 1));
    }
    cont = (j.continue && j.continue.cmcontinue) || "";
  } while (cont);
  return pages;
}

/* ---------- wikitext ---------- */
function chunk(arr, n) { const out = []; for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n)); return out; }

async function loadWikitext(titles) {
  const out = new Map();
  for (const c of chunk(titles, 50)) {
    const j = await api({ action: "query", prop: "revisions", rvprop: "content|timestamp", rvslots: "main", titles: c.join("|") });
    for (const p of Object.values((j.query && j.query.pages) || {})) {
      const rev = p.revisions && p.revisions[0];
      if (!rev) continue;
      out.set(p.title, { text: (rev.slots && rev.slots.main && rev.slots.main["*"]) || "", ts: rev.timestamp, pageid: p.pageid });
    }
    await sleep(120);
  }
  return out;
}

/* Templates de nome de jogo viram texto antes da limpeza (senão sobra "in ."). */
const GAME_TPL = {
  VI: "Grand Theft Auto VI", V: "GTA V", O: "GTA Online", IV: "GTA IV", TLAD: "The Lost and Damned", TBOGT: "The Ballad of Gay Tony",
  EFLC: "Episodes from Liberty City", CW: "Chinatown Wars", SA: "GTA San Andreas", VC: "GTA Vice City", III: "GTA III", LCS: "Liberty City Stories",
  VCS: "Vice City Stories", "1": "GTA 1", "2": "GTA 2", A: "GTA Advance", L69: "London 1969", L61: "London 1961", DE: "The Definitive Edition"
};
function expandGameTemplates(s) {
  return String(s || "")
    .replace(/\{\{\s*(VI|V|O|IV|TLAD|TBOGT|EFLC|CW|SA|VC|III|LCS|VCS|A|L69|L61|DE|1|2)\s*\}\}/g, (m, k) => GAME_TPL[k] || m)
    .replace(/\{\{\s*WP\s*\|([^|}]*)\|([^}]*)\}\}/g, "$2").replace(/\{\{\s*WP\s*\|([^}]*)\}\}/g, "$1")
    .replace(/\{\{\s*Small\s*\|([^}]*)\}\}/gi, "$1")
    .replace(/\{\{\s*PAGENAME\s*\}\}/g, "");
}
/* Remove templates {{...}} (aninhados), refs, comentários. */
function stripTemplates(s) {
  let prev; let t = expandGameTemplates(s).replace(/<!--[\s\S]*?-->/g, "").replace(/<ref[^>]*\/>/gi, "").replace(/<ref[^>]*>[\s\S]*?<\/ref>/gi, "");
  do { prev = t; t = t.replace(/\{\{[^{}]*\}\}/g, ""); } while (t !== prev);
  return t;
}
function plain(s) {
  return String(s || "")
    .replace(/\[\[(?:File|Image|Category):[^\]]*\]\]/gi, "")
    .replace(/\[\[([^\]|]*)\|([^\]]*)\]\]/g, "$2").replace(/\[\[([^\]]*)\]\]/g, "$1")
    .replace(/\[https?:[^\s\]]+\s([^\]]*)\]/g, "$1")
    .replace(/'''''|'''|''/g, "").replace(/<br\s*\/?>/gi, ", ").replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ").replace(/\s+/g, " ").replace(/\s+,/g, ",").trim();
}
function firstParagraph(text) {
  const body = stripTemplates(text);
  const para = body.split(/\n\s*\n|\n(?==)/).map((x) => x.trim())
    .find((x) => x.length > 40 && !/^[|{}[<*#=!]/.test(x) && !/^Category:/i.test(x));
  let s = plain(para || "");
  /* "due to appear in ." fica sem o nome do jogo (era template) — corrige. */
  s = s.replace(/\s+,/g, ",").replace(/\(\s*\)/g, "").replace(/\bin\s*,\s*and\b/gi, "in earlier titles, and")
    .replace(/\b(in|to)\s+and\b/gi, "$1 earlier titles and")
    .replace(/appearing in\s*(and|,)?\s*(due to appear in)?\s*\./i, "appearing in Grand Theft Auto VI.")
    .replace(/due to appear in\s*\./i, "due to appear in Grand Theft Auto VI.")
    .replace(/(in|to)\s+\.\s*$/, "$1 Grand Theft Auto VI.")
    .replace(/mentioned in\s*\./i, "mentioned in Grand Theft Auto VI.")
    .replace(/\s{2,}/g, " ").trim();
  return s.slice(0, 420);
}
/* Campos da infobox: |chave = valor (até a próxima |chave= ou fim do template) */
function infobox(text) {
  const start = text.search(/\{\{\s*Infobox/i);
  if (start < 0) return {};
  /* pega o template principal balanceando chaves */
  let depth = 0, end = start;
  for (let i = start; i < text.length; i++) {
    if (text.startsWith("{{", i)) { depth++; i++; }
    else if (text.startsWith("}}", i)) { depth--; i++; if (depth === 0) { end = i + 1; break; } }
  }
  const box = text.slice(start, end);
  const fields = {};
  const rx = /\|\s*([a-zA-Z_0-9]+)\s*=([\s\S]*?)(?=\n\s*\|\s*[a-zA-Z_0-9]+\s*=|\}\}\s*$)/g;
  let m;
  while ((m = rx.exec(box))) {
    const val = m[2].trim();
    if (val && !/^<!--/.test(val) && !/^\[\[#/.test(val)) fields[m[1].toLowerCase()] = val;
  }
  return fields;
}
const fieldText = (v) => plain(stripTemplates(String(v || ""))).replace(/^\*\s*/, "").replace(/\s*\*\s*/g, ", ").slice(0, 160);
const gamesField = (v) => String(v || "");
function viStatus(fields, text) {
  const g = gamesField(fields.games) + " " + gamesField(fields.mentioned);
  if (/mentioned\s*=\s*\{\{games\|[^}]*VI/i.test(text) && !/\|\s*games\s*=\s*\{\{games\|[^}]*VI=y/i.test(text)) return "mencionado";
  if (/VI\s*=\s*y/i.test(g) || /\{\{VI\}\}/.test(text)) return "confirmado";
  return "confirmado";
}
/* Imagem: só arquivos com GTAVI no nome. Prioriza screenshot oficial/trailer. */
function imageScore(name) {
  const n = name.toLowerCase();
  if (!/gtavi/.test(n)) return -1;
  let s = 10;
  if (/portrait|frontquarter|front\b|-front/.test(n)) s += 8;
  if (/officialscreenshot|extendedlook|trailer|artwork|postcard|promotional/.test(n)) s += 5;
  if (/map|logo|icon|sign|texture|badge|radar|hud|comparison|leak|beta/.test(n)) s -= 6;
  if (/\.(png|jpg|jpeg)$/.test(n)) s += 1;
  return s;
}
function infoboxImages(fields) {
  return ["image", "front_image", "front_image2", "image2", "logo", "sign", "map"].map((k) => fields[k]).filter(Boolean)
    .map((v) => plain(stripTemplates(v)).replace(/^File:/i, "").split("|")[0].trim()).filter((v) => /\.(png|jpe?g|gif|webp)$/i.test(v));
}

async function loadPageImages(titles) {
  const out = new Map(); /* title -> [file names] */
  for (const c of chunk(titles, 50)) {
    let cont = {};
    do {
      const j = await api({ action: "query", prop: "images", imlimit: "max", titles: c.join("|"), ...cont });
      for (const p of Object.values((j.query && j.query.pages) || {})) {
        if (!out.has(p.title)) out.set(p.title, []);
        for (const im of p.images || []) out.get(p.title).push(im.title.replace(/^File:/i, ""));
      }
      cont = j.continue ? { imcontinue: j.continue.imcontinue } : {};
    } while (cont.imcontinue);
    await sleep(120);
  }
  return out;
}
async function resolveFiles(fileNames) {
  const out = new Map();
  for (const c of chunk([...new Set(fileNames)], 50)) {
    const j = await api({ action: "query", prop: "imageinfo", iiprop: "url", iiurlwidth: 520, titles: c.map((f) => `File:${f}`).join("|") });
    for (const p of Object.values((j.query && j.query.pages) || {})) {
      const ii = p.imageinfo && p.imageinfo[0];
      if (ii) out.set(p.title.replace(/^File:/i, ""), ii.thumburl || ii.url);
    }
    await sleep(120);
  }
  return out;
}

function locationKind(fields, title) {
  const t = String(fields.type || "").toLowerCase();
  if (/state/.test(t) || /^State of/.test(title)) return "estado";
  if (/county/.test(t) || /County$/.test(title)) return "condado";
  if (/city/.test(t)) return "cidade";
  if (/town|village|hamlet/.test(t)) return "cidade";
  if (/neighbou?rhood|district|beach|island|archipelago|keys/.test(t)) return "bairro / região";
  if (/park|forest|swamp|wetland|lake|ocean|gulf|river/.test(t) || /Park$|Lake |Ocean|Gulf/.test(title)) return "natureza";
  if (/road|highway|bridge|street|avenue|freeway/.test(t)) return "via";
  if (/prison|airport|stadium|port|base|raceway|speedway|hospital|station|refinery|club|store|shop/.test(t)) return "ponto de interesse";
  return t ? t : "local";
}

async function main() {
  const started = Date.now();
  const seen = new Set();
  const groups = [];
  for (const g of GROUPS) {
    let pages = [];
    for (const cat of g.cats) {
      try { pages.push(...await categoryMembers(cat, !!g.recursive, seen)); }
      catch (err) { process.stderr.write(`  ! ${cat}: ${err.message}\n`); }
    }
    groups.push({ ...g, pages });
    process.stdout.write(`  - ${g.label}: ${pages.length} páginas\n`);
  }

  const allTitles = groups.flatMap((g) => g.pages.map((p) => p.title));
  process.stdout.write(`Lendo ${allTitles.length} páginas...\n`);
  const wikitext = await loadWikitext(allTitles);
  /* Personagens de GTA VI guardam a ficha em "Título/infobox" ({{/infobox}}). */
  const subTitles = allTitles.filter((t) => /\{\{\s*\/infobox\s*\}\}/i.test((wikitext.get(t) || {}).text || "")).map((t) => `${t}/infobox`);
  if (subTitles.length) {
    process.stdout.write(`Lendo ${subTitles.length} fichas em subpágina...\n`);
    const subs = await loadWikitext(subTitles);
    subs.forEach((v, k) => {
      const base = wikitext.get(k.replace(/\/infobox$/, ""));
      if (base) base.text = v.text + "\n" + base.text;
    });
  }
  const pageImages = await loadPageImages([...allTitles, ...subTitles]);
  subTitles.forEach((st) => {
    const base = st.replace(/\/infobox$/, "");
    pageImages.set(base, [...(pageImages.get(st) || []), ...(pageImages.get(base) || [])]);
  });

  const items = [];
  const wanted = new Set();
  for (const g of groups) {
    for (const p of g.pages) {
      const w = wikitext.get(p.title);
      if (!w) continue;
      const f = infobox(w.text);
      const candidates = [...infoboxImages(f), ...(pageImages.get(p.title) || [])];
      const best = candidates.map((n) => ({ n, s: imageScore(n) })).filter((x) => x.s > 0).sort((a, b) => b.s - a.s)[0];
      if (best) wanted.add(best.n);
      const base = {
        group: g.key,
        title: p.title.replace(/\s*\((HD|3D|2D) Universe\)$/i, ""),
        pageTitle: p.title,
        url: `https://gta.fandom.com/wiki/${encodeURIComponent(p.title.replace(/ /g, "_"))}`,
        imageFile: best ? best.n : "",
        desc: firstParagraph(w.text),
        status: viStatus(f, w.text),
        leak: /\bleak(ed|s)?\b/i.test(w.text),
        editedAt: w.ts,
        sub: p.cat.replace(/^Category:Locations in GTA VI in\s*/i, "").replace(/^Category:.*$/, "")
      };
      const meta = {};
      if (g.key === "vehicles") {
        meta.manufacturer = fieldText(f.manufacturer);
        meta.class = fieldText(f.class).replace(/\s*\(.*?\)\s*/g, " ").trim();
        meta.body = fieldText(f.body_style);
        meta.capacity = fieldText(f.capacity);
        meta.type = fieldText(f.type);
      } else if (g.key === "weapons") {
        meta.type = fieldText(f.type);
        meta.class = fieldText(f.class);
        meta.manufacturer = fieldText(f.manufacturer);
      } else if (g.key === "characters") {
        meta.gender = fieldText(f.gender);
        meta.status = fieldText(f.status);
        meta.home = fieldText(f.home || f.location);
        meta.affiliations = fieldText(f.affiliations);
        meta.occupation = fieldText(f.occupation || f.business);
        meta.voice = fieldText(f.voice);
      } else if (g.key === "gangs") {
        meta.type = fieldText(f.gang_type || f.org_type || f.type);
        meta.location = fieldText(f.locations || f.location);
        meta.leader = fieldText(f.leader);
        meta.vehicles = fieldText(f.vehicles);
        meta.weapons = fieldText(f.weapons);
        meta.founded = fieldText(f.founded);
      } else if (g.key === "locations") {
        meta.kind = locationKind(f, p.title);
        meta.location = fieldText(f.location || f.locations || f.county || f.state);
        meta.type = fieldText(f.type);
      } else if (g.key === "businesses") {
        meta.type = fieldText(f.business_type || f.type);
        meta.location = fieldText(f.locations || f.location);
        meta.tagline = fieldText(f.taglines);
      } else if (g.key === "animals") {
        meta.species = fieldText(f.species);
        meta.type = fieldText(f.type);
        meta.location = fieldText(f.locations);
      } else if (g.key === "radio") {
        meta.genre = fieldText(f.genre);
        meta.host = fieldText(f.host);
        meta.tracks = fieldText(f.radio_tracks);
      }
      items.push({ ...base, meta });
    }
  }

  process.stdout.write(`Resolvendo ${wanted.size} imagens...\n`);
  const urls = await resolveFiles([...wanted]);
  for (const it of items) {
    it.image = it.imageFile ? (urls.get(it.imageFile) || "") : "";
    delete it.imageFile;
  }

  const counts = {};
  for (const g of GROUPS) counts[g.key] = items.filter((i) => i.group === g.key).length;
  const withImage = items.filter((i) => i.image).length;
  const out = {
    generatedAt: new Date().toISOString(),
    source: "GTA Wiki (gta.fandom.com) — categorias públicas de GTA VI",
    note: "Conteúdo enciclopédico da comunidade, em inglês. Itens marcados como 'menção' só foram citados; itens com aviso de vazamento têm informações vindas de builds vazadas e podem mudar até o lançamento.",
    groups: GROUPS.map((g) => ({ key: g.key, label: g.label })),
    counts,
    items: items.sort((a, b) => a.title.localeCompare(b.title, "en"))
  };
  const file = path.join(__dirname, "..", "live", "vi-catalog.json");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  if (items.length < 50 && fs.existsSync(file)) {
    process.stdout.write("Poucos itens retornados; mantendo catálogo anterior.\n");
    return;
  }
  fs.writeFileSync(file, JSON.stringify(out) + "\n", "utf8");
  process.stdout.write(`OK: ${items.length} itens (${withImage} com imagem de GTA VI) em ${((Date.now() - started) / 1000).toFixed(1)}s -> live/vi-catalog.json\n`);
}

main().catch((err) => { console.error(err); process.exit(1); });
