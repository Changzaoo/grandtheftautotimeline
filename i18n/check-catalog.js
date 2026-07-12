/* Verificador de catálogos i18n.
 * Uso:
 *   node i18n/check-catalog.js i18n/fr.js            -> compara com i18n/en.js
 *   node i18n/check-catalog.js i18n/en.js i18n/_skeleton.json -> compara com o esqueleto
 * Sai com código 1 se houver chaves faltando/sobrando, valores vazios ou não-string. */
const fs = require("fs");
const path = require("path");

const target = process.argv[2];
const refFile = process.argv[3] || path.join(__dirname, "en.js");
if (!target) { console.error("uso: node i18n/check-catalog.js <alvo.js> [ref.js|_skeleton.json]"); process.exit(2); }

global.window = global;

function loadCatalogJs(file) {
  window.I18N_CATALOGS = {};
  const code = fs.readFileSync(file, "utf8");
  eval(code);
  const codes = Object.keys(window.I18N_CATALOGS);
  if (codes.length !== 1) {
    console.error(`ERRO: esperava exatamente 1 catálogo em ${file}; achou: [${codes.join(", ")}]`);
    process.exit(1);
  }
  return { code: codes[0], cat: window.I18N_CATALOGS[codes[0]] };
}

function loadRef(file) {
  if (file.endsWith(".json")) {
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    return { code: "(skeleton)", cat: data };
  }
  return loadCatalogJs(file);
}

const ref = loadRef(refFile);
const tgt = loadCatalogJs(target);

const refKeys = new Set(Object.keys(ref.cat));
const tgtKeys = new Set(Object.keys(tgt.cat));

const missing = [...refKeys].filter((k) => !tgtKeys.has(k));
const extra = [...tgtKeys].filter((k) => !refKeys.has(k));
const bad = [...tgtKeys].filter((k) => typeof tgt.cat[k] !== "string" || !tgt.cat[k].trim());

let problems = 0;
if (missing.length) { console.error(`FALTANDO ${missing.length} chave(s):`); missing.slice(0, 30).forEach((k) => console.error("  -", k)); problems++; }
if (extra.length) { console.error(`SOBRANDO ${extra.length} chave(s):`); extra.slice(0, 30).forEach((k) => console.error("  +", k)); problems++; }
if (bad.length) { console.error(`VALORES vazios/não-string: ${bad.length}`); bad.slice(0, 30).forEach((k) => console.error("  !", k)); problems++; }

console.log(`${target}: catálogo "${tgt.code}" com ${tgtKeys.size} chaves (ref ${ref.code}: ${refKeys.size}).`);
console.log(problems ? "REPROVADO" : "APROVADO");
process.exit(problems ? 1 : 0);
