/* Smoke da navegação, num DOM real (jsdom). Existe porque uma regressão exata
 * daqui foi para produção: a classe de arrasto entrava já no `pointerdown` e o
 * `pointer-events:none` dela desligava os links, então clicar no menu não ia a
 * lugar nenhum. Uso: node _smoke-nav.js (depois de `npm run build`).
 *
 * Testa que clicar num item do menu leva à seção:
 *   1. clique simples  -> rola até a seção
 *   2. clique logo depois de um arrasto -> NÃO rola (era rolagem, não escolha)
 *   3. arrasto move a barra na horizontal
 * Roda o bundle de verdade, montando a App com react-dom/client.
 */
const fs = require("fs");
const path = require("path");
const ROOT = __dirname;
let JSDOM;
try { JSDOM = require(path.join(ROOT, "node_modules/jsdom")).JSDOM; }
catch (e) {
  console.error("jsdom não instalado — rode `npm install` (é devDependency).");
  process.exit(2);
}

const dom = new JSDOM(
  `<!doctype html><html><head><title>t</title><meta name="description" content="d"></head>
   <body><div id="root"></div></body></html>`,
  { url: "https://example.org/", pretendToBeVisual: true, runScripts: "outside-only" }
);
const { window } = dom;

global.window = window;
global.document = window.document;
global.navigator = window.navigator;
global.HTMLElement = window.HTMLElement;
global.Element = window.Element;
global.Node = window.Node;
global.getComputedStyle = window.getComputedStyle;
global.requestAnimationFrame = window.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 0);
global.cancelAnimationFrame = window.cancelAnimationFrame = (id) => clearTimeout(id);
window.matchMedia = () => ({ matches: false, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} });
window.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
window.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
window.fetch = () => Promise.resolve({ ok: false, json: () => Promise.resolve({}), text: () => Promise.resolve("") });
window.scrollTo = function (opts) { window.__scrolled = opts; };
window.THREE = new Proxy(function () {}, { get: () => window.THREE, apply: () => window.THREE, construct: () => window.THREE });
global.THREE = window.THREE;

global.React = window.React = require(path.join(ROOT, "node_modules/react"));
const ReactDOMClient = require(path.join(ROOT, "node_modules/react-dom/client"));
global.ReactDOM = window.ReactDOM = ReactDOMClient;

/* O bundle roda como script clássico dentro deste escopo. */
const code = fs.readFileSync(path.join(ROOT, "public/dist/app.bundle.js"), "utf8");
const { act } = require(path.join(ROOT, "node_modules/react-dom/test-utils"));
global.IS_REACT_ACT_ENVIRONMENT = true;
window.IS_REACT_ACT_ENVIRONMENT = true;

let bad = 0;
const check = (cond, msg) => { if (cond) console.log("ok:", msg); else { console.error("FALHOU:", msg); bad++; } };

(async () => {
  /* eval DENTRO da janela: o bundle é script clássico e conta com
   * `window.X = ...` virando global — isso só vale no escopo do window. */
  await act(async () => { window.eval(code); });
  await act(async () => { await new Promise((r) => setTimeout(r, 60)); });

  const nav = document.querySelector(".dossier-hud nav");
  check(!!nav, "menu do topo renderizado");
  const links = nav ? [...nav.querySelectorAll("a")] : [];
  check(links.length > 5, `itens no menu (${links.length})`);

  /* As seções existem? */
  const target = links[3] && links[3].getAttribute("href").slice(1);
  check(!!document.getElementById(target), `seção alvo existe (#${target})`);

  /* 1. clique simples deve rolar */
  window.__scrolled = null;
  await act(async () => {
    links[3].dispatchEvent(new window.MouseEvent("click", { bubbles: true, cancelable: true }));
  });
  check(window.__scrolled && typeof window.__scrolled.top === "number",
    `clique simples rolou a página (top=${window.__scrolled && window.__scrolled.top})`);

  /* 2. arrasto: a barra anda e o clique seguinte é ignorado */
  const pd = (type, x) => new window.PointerEvent(type, { bubbles: true, cancelable: true, clientX: x, button: 0, pointerType: "mouse" });
  if (!window.PointerEvent) { console.log("(jsdom sem PointerEvent — pulando teste de arrasto)"); }
  else {
    Object.defineProperty(nav, "scrollWidth", { value: 2000, configurable: true });
    Object.defineProperty(nav, "clientWidth", { value: 600, configurable: true });
    nav.scrollLeft = 100;
    await act(async () => {
      nav.dispatchEvent(pd("pointerdown", 500));
      nav.dispatchEvent(pd("pointermove", 400));
      nav.dispatchEvent(pd("pointerup", 400));
    });
    check(nav.scrollLeft === 200, `arrasto moveu a barra (scrollLeft=${nav.scrollLeft})`);

    window.__scrolled = null;
    await act(async () => {
      links[5].dispatchEvent(new window.MouseEvent("click", { bubbles: true, cancelable: true }));
    });
    check(window.__scrolled === null, "clique logo após arrastar não navega");

    /* 3. passado o intervalo de guarda, volta a navegar */
    await act(async () => { await new Promise((r) => setTimeout(r, 300)); });
    window.__scrolled = null;
    await act(async () => {
      links[5].dispatchEvent(new window.MouseEvent("click", { bubbles: true, cancelable: true }));
    });
    check(window.__scrolled !== null, "clique normal depois do arrasto volta a navegar");
  }

  console.log(bad ? "\nNAV-CLICK FALHOU" : "\nNAV-CLICK OK");
  process.exit(bad ? 1 : 0);
})().catch((err) => { console.error(err); process.exit(1); });
