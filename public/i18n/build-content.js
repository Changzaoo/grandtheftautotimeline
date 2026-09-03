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
  const mt = all.filter((f) => f === code + ".mt.json");
  const manual = all.filter((f) => new RegExp("^" + esc(code) + "\\.\\d+\\.json$").test(f)).sort();
  for (const pf of mt.concat(manual)) {
    let obj;
    try { obj = JSON.parse(fs.readFileSync(path.join(PARTS, pf), "utf8")); }
    catch (e) { console.error("  ! parte inválida (ignorada):", pf, e.message.slice(0, 80)); continue; }
    for (const k of Object.keys(obj)) if (typeof obj[k] === "string" && obj[k] && k in contentRef) merged[k] = obj[k];
  }
  const have = Object.keys(merged).length;
  const missing = refKeys.filter((k) => !(k in merged));
  const body = "(function(){window.I18N_CATALOGS=window.I18N_CATALOGS||{};var c=window.I18N_CATALOGS[" +
    JSON.stringify(code) + "]=window.I18N_CATALOGS[" + JSON.stringify(code) + "]||{};Object.assign(c," +
    JSON.stringify(merged) + ");})();\n";
  fs.writeFileSync(path.join(DIR, code + ".content.js"), body, "utf8");
  const status = missing.length ? "INCOMPLETO" : "OK";
  if (status !== "OK") anyBad = true;
  console.log(`${code}.content.js: ${have}/${refCount} chaves${missing.length ? " · faltam " + missing.length : ""} — ${status}`);
}
if (!codes.size) console.log("Nenhuma parte encontrada em i18n/parts/.");
process.exit(anyBad ? 1 : 0);
