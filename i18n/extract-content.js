/* Extrai TODO o texto pt-BR traduzível do site e gera i18n/_content.json
 * ({ "c<hash>": "texto" }), a fonte de verdade para translate.js:
 *   1. campos de EXIBIÇÃO das estruturas de dados (registro window.__i18nData,
 *      mesma allowlist/hash do runtime — lê public/dist/app.bundle.js);
 *   2. textos literais do JSX (mesmo plugin Babel que o build usa, em modo
 *      "collect" — garante que a chave gerada é a mesma que está no bundle).
 *
 * Uso:
 *   node i18n/extract-content.js            -> estatísticas + grava i18n/_content.json
 *   node i18n/extract-content.js --merge    -> além disso, mescla as chaves no _skeleton.json
 * (rode `npm run build` antes.) */
const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");
const autotext = require("./babel-plugin-autotext");
const { keyFor, isTranslatable } = require("./hash");
const ROOT = path.join(__dirname, "..");
const noop = () => {};
const P = new Proxy(function () {}, { get: () => P, apply: () => P, construct: () => P });

global.window = global;
window.matchMedia = () => ({ matches: false, addEventListener: noop, removeEventListener: noop });
window.localStorage = { getItem: () => null, setItem: noop };
window.addEventListener = noop; window.removeEventListener = noop; window.dispatchEvent = noop;
window.CustomEvent = function () {}; window.location = { hash: "" }; window.navigator = { language: "pt-BR" };
window.setTimeout = () => 0; window.setInterval = () => 0; window.requestAnimationFrame = () => 0;
window.cancelAnimationFrame = noop; window.IntersectionObserver = class { observe() {} disconnect() {} unobserve() {} };
window.devicePixelRatio = 1; window.innerWidth = 1440; window.innerHeight = 900;
const fe = () => ({ style: { setProperty: noop }, classList: { add: noop, remove: noop, toggle: noop, contains: () => false }, setAttribute: noop, getAttribute: () => null, appendChild: noop, removeChild: noop, remove: noop, insertBefore: noop, addEventListener: noop, removeEventListener: noop, getContext: () => P, querySelector: () => null, querySelectorAll: () => [], getBoundingClientRect: () => ({ top: 0, left: 0, width: 0, height: 0 }), dataset: {}, children: [] });
global.document = { getElementById: () => fe(), querySelector: () => null, querySelectorAll: () => [], createElement: () => fe(), createElementNS: () => fe(), createTextNode: () => ({}), addEventListener: noop, documentElement: Object.assign(fe(), { lang: "" }), head: fe(), body: fe() };
global.React = require(path.join(ROOT, "node_modules/react"));
global.ReactDOM = { createRoot: () => ({ render: noop }) };
global.THREE = P;

eval(fs.readFileSync(path.join(ROOT, "public/dist/app.bundle.js"), "utf8"));

const FIELDS = window.__i18nTrFields;
const DATA = window.__i18nData;
if (!FIELDS || !DATA) { console.error("Bundle não expôs __i18nTrFields/__i18nData — rode npm run build primeiro."); process.exit(1); }

const out = {}; // key -> pt string
let dataHits = 0;
function walk(v, field) {
  if (typeof v === "string") {
    if (!field || !FIELDS.has(field)) return;
    if (!isTranslatable(v)) return;
    dataHits++;
    out[keyFor(v)] = v.trim();
    return;
  }
  if (Array.isArray(v)) { v.forEach((x) => walk(x, field)); return; }
  if (v && typeof v === "object") { for (const k of Object.keys(v)) walk(v[k], k); }
}
const globalsHit = Object.keys(DATA).filter((n) => DATA[n]);
for (const n of globalsHit) walk(DATA[n], null);
const dataKeys = Object.keys(out).length;

/* 2. JSX — mesma lista de arquivos que o build passa pelo plugin. */
const { JSX_AUTOTEXT_FILES } = require(path.join(ROOT, "sources.js"));
const jsxCollect = new Map();
for (const file of JSX_AUTOTEXT_FILES) {
  const code = fs.readFileSync(path.join(ROOT, file), "utf8");
  babel.transformSync(code, { filename: file, presets: [["@babel/preset-react", { runtime: "classic" }]], plugins: [[autotext, { collect: jsxCollect }]], compact: false, comments: false });
}
for (const [k, v] of jsxCollect) if (!(k in out)) out[k] = v;

/* 3. JSON ao vivo (live/*.json) — conteúdo do GTA Wiki, fonte em INGLÊS.
 * Vai para i18n/_live.json: translate.js traduz com detecção de idioma e
 * também gera pt-BR (o site em português também precisa desses textos). */
const SKIP = window.__i18nSkipFields || new Set();
const liveOut = {};
const liveDir = path.join(ROOT, "live");
function walkLive(v, field) {
  if (typeof v === "string") {
    if (!field || !FIELDS.has(field) || SKIP.has(field)) return;
    if (!isTranslatable(v)) return;
    liveOut[keyFor(v)] = v.trim();
    return;
  }
  if (Array.isArray(v)) { v.forEach((x) => walkLive(x, field)); return; }
  if (v && typeof v === "object") { for (const k of Object.keys(v)) { if (!SKIP.has(k)) walkLive(v[k], k); } }
}
if (fs.existsSync(liveDir)) {
  for (const f of fs.readdirSync(liveDir)) {
    if (!f.endsWith(".json")) continue;
    try { walkLive(JSON.parse(fs.readFileSync(path.join(liveDir, f), "utf8")), null); }
    catch (e) { console.log("  ! live/" + f + " ilegível:", e.message.slice(0, 60)); }
  }
}
const liveKeys = Object.keys(liveOut).sort();
const liveSorted = {}; for (const k of liveKeys) liveSorted[k] = liveOut[k];
fs.writeFileSync(path.join(__dirname, "_live.json"), JSON.stringify(liveSorted, null, 0), "utf8");
console.log("JSON ao vivo:", liveKeys.length, "chaves ·", liveKeys.reduce((a, k) => a + liveOut[k].length, 0), "caracteres (fonte em inglês)");

/* Chaves que também existem no conteúdo ao vivo saem do mapa pt: a fonte
 * delas é o GTA Wiki, em inglês (o bridge de GTA VI traz esse texto para
 * dentro dos dados do bundle). Traduzir com origem pt estragaria o resultado. */
let movedToLive = 0;
for (const k of Object.keys(liveOut)) if (k in out) { delete out[k]; movedToLive++; }
if (movedToLive) console.log("Chaves com fonte em inglês movidas para _live.json:", movedToLive);

const keys = Object.keys(out);
console.log("Globais de dados:", globalsHit.length, "·", dataHits, "ocorrências ·", dataKeys, "chaves únicas");
console.log("Textos JSX:", jsxCollect.size, "chaves (" + (keys.length - dataKeys) + " novas além dos dados)");
console.log("TOTAL chaves de conteúdo:", keys.length, "·", keys.reduce((a, k) => a + out[k].length, 0), "caracteres");

const contentPath = path.join(__dirname, "_content.json");
const sorted = {}; for (const k of keys.sort()) sorted[k] = out[k];
fs.writeFileSync(contentPath, JSON.stringify(sorted, null, 0), "utf8");
console.log("Gravado:", path.relative(ROOT, contentPath));

if (process.argv.includes("--merge")) {
  const skelPath = path.join(__dirname, "_skeleton.json");
  const skel = fs.existsSync(skelPath) ? JSON.parse(fs.readFileSync(skelPath, "utf8")) : {};
  let added = 0;
  for (const k of keys) if (!(k in skel)) { skel[k] = out[k]; added++; }
  fs.writeFileSync(skelPath, JSON.stringify(skel, null, 0), "utf8");
  console.log("Mescladas no _skeleton.json:", added, "novas |", Object.keys(skel).length, "total");
}
