/* Extrai as strings de EXIBIÇÃO das estruturas de dados do dossiê e gera as
 * chaves de tradução "c"+hash (as mesmas que window.__L usa em runtime).
 * Usa o hash/allowlist/globais expostos pelo próprio bundle, garantindo sincronia.
 *
 * Uso:
 *   node i18n/extract-content.js            -> imprime estatísticas + grava i18n/_content.json
 *   node i18n/extract-content.js --merge    -> além disso, mescla as chaves no _skeleton.json
 */
const fs = require("fs");
const path = require("path");
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

const hash = window.__i18nHash;
const FIELDS = window.__i18nTrFields;
const GLOBALS = window.__i18nDataGlobals;
if (!hash || !FIELDS || !GLOBALS) { console.error("Bundle não expôs __i18nHash/__i18nTrFields/__i18nDataGlobals — rode npm run build primeiro."); process.exit(1); }

// Mesmas heurísticas do runtime + salvaguardas para não gerar chaves de lixo.
const looksNonText = (s) => (
  /^https?:\/\//.test(s) || /^#[0-9a-f]{3,8}$/i.test(s) ||
  /^[\d.,:/\-\s]+$/.test(s) || /\.(png|jpg|jpeg|webp|svg|gif)$/i.test(s)
);

const out = {}; // key -> pt string
let total = 0;
function walk(v, field) {
  if (typeof v === "string") {
    if (!field || !FIELDS.has(field)) return;
    const s = v.trim();
    if (s.length < 2 || looksNonText(s)) return;
    total++;
    out["c" + hash(s)] = s;
    return;
  }
  if (Array.isArray(v)) { v.forEach((x) => walk(x, field)); return; }
  if (v && typeof v === "object") { for (const k of Object.keys(v)) walk(v[k], k); }
}
for (const n of GLOBALS) { if (window[n]) walk(window[n], null); }

const keys = Object.keys(out);
console.log("Globais processados:", GLOBALS.filter((n) => window[n]).length);
console.log("Ocorrências de campos-texto:", total);
console.log("Chaves de conteúdo ÚNICAS:", keys.length);
console.log("Caracteres (únicos):", keys.reduce((a, k) => a + out[k].length, 0));

const contentPath = path.join(__dirname, "_content.json");
fs.writeFileSync(contentPath, JSON.stringify(out, null, 0), "utf8");
console.log("Gravado:", path.relative(ROOT, contentPath));

if (process.argv.includes("--merge")) {
  const skelPath = path.join(__dirname, "_skeleton.json");
  const skel = fs.existsSync(skelPath) ? JSON.parse(fs.readFileSync(skelPath, "utf8")) : {};
  let added = 0;
  for (const k of keys) if (!(k in skel)) { skel[k] = out[k]; added++; }
  fs.writeFileSync(skelPath, JSON.stringify(skel, null, 0), "utf8");
  console.log("Mescladas no _skeleton.json:", added, "novas |", Object.keys(skel).length, "total");
}
