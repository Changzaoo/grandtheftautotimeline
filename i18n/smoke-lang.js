/* Smoke de i18n: executa o bundle com DOM stubado, carrega os catálogos de UI e
 * de CONTEÚDO de um idioma, troca o idioma e confere que o site inteiro muda —
 * texto do JSX, conteúdo dos dados e JSON ao vivo — e que os filtros que
 * classificam por palavra-chave continuam funcionando.
 *
 * Uso: node i18n/smoke-lang.js [codigo=en]
 * (rode `npm run build` e a tradução antes.) */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const code = process.argv[2] || "en";

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

let bad = 0;
const assert = (cond, msg) => { if (!cond) { console.error("FALHOU:", msg); bad++; } else console.log("ok:", msg); };

/* Baseline em pt-BR, antes de trocar de idioma. */
const htmlPt = ReactDOMServer.renderToString(captured);
const missionsData = (window.__i18nData || {}).missionDossierData || [];
const summariesPt = missionsData.map((m) => m.summary).filter((x) => typeof x === "string");
const universes = (window.__i18nData || {}).universeData || [];
const universesPt = universes.map((u) => u.description);

/* Carrega catálogo de UI + catálogo de conteúdo e troca o idioma. */
const uiFile = path.join(__dirname, code + ".js");
const contentFile = path.join(__dirname, code + ".content.js");
if (fs.existsSync(uiFile)) eval(fs.readFileSync(uiFile, "utf8"));
assert(fs.existsSync(contentFile), "existe i18n/" + code + ".content.js (catálogo de conteúdo)");
if (fs.existsSync(contentFile)) eval(fs.readFileSync(contentFile, "utf8"));
window.__setLang(code);

assert(window.__lang === code, `__lang == "${code}"`);

/* 1. Dados: o registro tem de enxergar os `const` do bundle (bug histórico: em
 * script clássico eles não viram propriedade de window e nada era traduzido). */
const registered = Object.keys(window.__i18nData || {}).length;
assert(registered > 20, `registro de dados com ${registered} coleções`);
const uniTranslated = universes.filter((u, i) => u.description && u.description !== universesPt[i]).length;
assert(uniTranslated > 0, `conteúdo dos dados traduzido (${uniTranslated}/${universes.length} universos)`);

const html = ReactDOMServer.renderToString(captured);
assert(html.length > 100000, "HTML substancial (" + html.length + " chars)");
assert(html !== htmlPt, "HTML mudou em relação ao pt-BR");

/* 2. Texto do JSX envolvido automaticamente pelo plugin. */
const jsxProbe = window.__T("c" + window.__i18nHash("Ordem de lançamento"), "Ordem de lançamento");
assert(jsxProbe !== "Ordem de lançamento", `texto do JSX traduzido ("${jsxProbe}")`);

/* 3. Conteúdo dos dados traduzido de fato dentro da árvore renderizada. */
const ptLeftovers = ["Ordem de lançamento", "Abrir dossiê", "Nome, cidade, protagonista"]
  .filter((t) => html.includes(t));
assert(ptLeftovers.length === 0, "sem texto pt-BR remanescente na UI" + (ptLeftovers.length ? ": " + ptLeftovers.join(" | ") : ""));

/* 4. Filtros por palavra-chave: eles normalizam via window.__PT, que devolve o
 * texto pt-BR de origem. Sem isso, "story"/"side" parariam de casar. */
const summariesNow = missionsData.map((m) => m.summary).filter((x) => typeof x === "string");
const changedSum = summariesNow.filter((t, i) => t !== summariesPt[i]).length;
assert(changedSum > 0, `campo summary traduzido (${changedSum}/${summariesNow.length})`);
const backOk = summariesNow.filter((t, i) => window.__PT(t) === summariesPt[i]).length;
assert(backOk === summariesNow.length, `__PT reconstrói o texto de origem (${backOk}/${summariesNow.length})`);

/* 5. Tradução de JSON buscado em runtime. O catálogo já vem em inglês, então
 * só faz sentido conferir mudança em um idioma diferente de "en". */
const catalogPath = path.join(ROOT, "live/vi-catalog.json");
if (code !== "en" && fs.existsSync(catalogPath)) {
  const raw = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
  const tr = window.__i18nLive(raw);
  const changed = tr.items.filter((it, i) => it.desc && it.desc !== raw.items[i].desc).length;
  assert(changed > 0, `JSON ao vivo traduzido (${changed}/${raw.items.length} descrições)`);
}

console.log(bad ? "\nSMOKE-LANG FALHOU (" + code + ")" : "\nSMOKE-LANG OK (" + code + ")");
process.exit(bad ? 1 : 0);
