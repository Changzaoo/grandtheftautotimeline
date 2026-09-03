/* Monta os catálogos de CONTEÚDO i18n/<code>.content.js a partir das partes
 * traduzidas em i18n/parts/<code>.<n>.json (JSON plano { "c<hash>": "tradução" }).
 * Junta todas as partes de um idioma num único arquivo de merge e valida a
 * contagem contra i18n/_content.json.
 *
 * Uso: node i18n/build-content.js            (todos os idiomas com partes)
 *      node i18n/build-content.js fr de      (apenas os indicados)
 */
const fs = require("fs");
const path = require("path");
const DIR = __dirname;
const PARTS = path.join(DIR, "parts");

const contentRef = JSON.parse(fs.readFileSync(path.join(DIR, "_content.json"), "utf8"));
const refKeys = Object.keys(contentRef);
const refCount = refKeys.length;

const wanted = process.argv.slice(2);
const codes = new Set();
if (fs.existsSync(PARTS)) {
  for (const f of fs.readdirSync(PARTS)) {
    const m = /^(.+)\.(\d+)\.json$/.exec(f);
    if (m) codes.add(m[1]);
  }
}

let anyBad = false;
for (const code of [...codes].sort()) {
  if (wanted.length && !wanted.includes(code)) continue;
  const merged = {};
  const partFiles = fs.readdirSync(PARTS).filter((f) => new RegExp("^" + code.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\.\\d+\\.json$").test(f)).sort();
  for (const pf of partFiles) {
    let obj;
    try { obj = JSON.parse(fs.readFileSync(path.join(PARTS, pf), "utf8")); }
    catch (e) { console.error("  ! parte inválida:", pf, e.message); anyBad = true; continue; }
    for (const k of Object.keys(obj)) if (typeof obj[k] === "string" && obj[k]) merged[k] = obj[k];
  }
  const have = Object.keys(merged).length;
  const missing = refKeys.filter((k) => !(k in merged));
  const extra = Object.keys(merged).filter((k) => !(k in contentRef));
  const body = "(function(){window.I18N_CATALOGS=window.I18N_CATALOGS||{};var c=window.I18N_CATALOGS[" +
    JSON.stringify(code) + "]=window.I18N_CATALOGS[" + JSON.stringify(code) + "]||{};Object.assign(c," +
    JSON.stringify(merged) + ");})();\n";
  fs.writeFileSync(path.join(DIR, code + ".content.js"), body, "utf8");
  const status = (have === refCount && !missing.length && !extra.length) ? "OK" : "INCOMPLETO";
  if (status !== "OK") anyBad = true;
  console.log(`${code}.content.js: ${have}/${refCount} chaves${missing.length ? " · faltam " + missing.length : ""}${extra.length ? " · sobram " + extra.length : ""} — ${status}`);
}
if (!codes.size) console.log("Nenhuma parte encontrada em i18n/parts/.");
process.exit(anyBad ? 1 : 0);
