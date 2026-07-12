/* Smoke de i18n: executa o bundle com DOM stubado, registra um catálogo e
 * verifica que a troca de idioma re-renderiza o site traduzido.
 * Uso: node i18n/smoke-lang.js [codigo=en] ["texto esperado no HTML"]
 * (rode `npm run build` antes). */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const code = process.argv[2] || "en";
const expected = process.argv[3] || (code === "en" ? "The dark side of the sunniest place in America" : null);

const noop = () => {};
const proxyNoop = new Proxy(function () {}, { get: () => proxyNoop, apply: () => proxyNoop, construct: () => proxyNoop });
const fakeEl = () => ({
  style: { setProperty: noop, cssText: "" },
  classList: { add: noop, remove: noop, toggle: noop, contains: () => false },
  setAttribute: noop, getAttribute: () => null, removeAttribute: noop,
  appendChild: noop, removeChild: noop, remove: noop, insertBefore: noop,
  addEventListener: noop, removeEventListener: noop,
  getContext: () => proxyNoop, querySelector: () => null, querySelectorAll: () => [],
  getBoundingClientRect: () => ({ top: 0, left: 0, width: 0, height: 0 }),
  dataset: {}, children: [], parentElement: null, offsetWidth: 0, offsetHeight: 0,
  textContent: "", innerHTML: "", id: "", onload: null, onerror: null, src: "",
});

global.window = global;
window.matchMedia = () => ({ matches: false, addEventListener: noop, removeEventListener: noop, addListener: noop, removeListener: noop });
window.localStorage = { getItem: () => null, setItem: noop, removeItem: noop };
window.addEventListener = noop; window.removeEventListener = noop; window.dispatchEvent = noop;
window.CustomEvent = function (t, o) { this.type = t; this.detail = o && o.detail; };
window.requestAnimationFrame = () => 0; window.cancelAnimationFrame = noop;
window.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
window.MutationObserver = class { observe() {} disconnect() {} takeRecords() { return []; } };
window.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
window.innerWidth = 1440; window.innerHeight = 900; window.devicePixelRatio = 1;
window.scrollTo = noop; window.scrollY = 0;
window.location = { hash: "", href: "http://localhost/", search: "" };
window.navigator = { userAgent: "smoke", language: "pt-BR" };
window.fetch = () => Promise.resolve({ ok: false, json: () => Promise.resolve({}), text: () => Promise.resolve("") });
window.Image = function () { return fakeEl(); };
global.document = {
  getElementById: () => ({ nodeType: 1 }),
  querySelector: () => null, querySelectorAll: () => [],
  createElement: () => fakeEl(), createElementNS: () => fakeEl(), createTextNode: () => ({}),
  addEventListener: noop, removeEventListener: noop,
  documentElement: Object.assign(fakeEl(), { lang: "pt-BR" }),
  body: fakeEl(), head: fakeEl(),
  fonts: { ready: Promise.resolve() }, hidden: false, visibilityState: "visible", currentScript: null,
};

global.React = require(path.join(ROOT, "node_modules/react"));
const ReactDOMServer = require(path.join(ROOT, "node_modules/react-dom/server"));
let captured = null;
global.ReactDOM = { createRoot: () => ({ render: (el) => { captured = el; } }) };
global.THREE = proxyNoop;

eval(fs.readFileSync(path.join(ROOT, "public/dist/app.bundle.js"), "utf8"));

// registra o catálogo e troca o idioma (catálogo já carregado -> aplicação síncrona)
eval(fs.readFileSync(path.join(__dirname, code + ".js"), "utf8"));
window.__setLang(code);

let bad = 0;
const assert = (cond, msg) => { if (!cond) { console.error("FALHOU:", msg); bad++; } else console.log("ok:", msg); };

assert(window.__lang === code, `__lang == "${code}"`);
const html = ReactDOMServer.renderToString(captured);
assert(html.length > 100000, "HTML substancial (" + html.length + " chars)");
if (expected) assert(html.includes(expected), `texto traduzido presente: "${expected}"`);

// heurística: título de seção do dossiê deve mudar em relação ao pt
const ptTitle = "Cronologia interna e lançamentos";
const trTitle = window.__t("section.timeline.title", ptTitle);
assert(trTitle !== ptTitle, `section.timeline.title traduzido ("${trTitle}")`);
assert(html.includes(trTitle.replace(/&/g, "&amp;").replace(/</g, "&lt;")), "título traduzido aparece no HTML");

console.log(bad ? "\nSMOKE-LANG FALHOU (" + code + ")" : "\nSMOKE-LANG OK (" + code + ")");
process.exit(bad ? 1 : 0);
