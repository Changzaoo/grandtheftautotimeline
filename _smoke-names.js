/* Smoke de nomes próprios. Existe porque a tradução automática chegou a
 * converter topônimos: "Leonida Keys" virou "Leonida Chaves" e "Grassrivers"
 * virou "Rios de grama" — o que, além de errado, quebrava o casamento por nome
 * que busca a foto de cada região.
 *
 * Uso: node _smoke-names.js [idioma]  (depois de `npm run build`)
 *
 * Confere, com o bundle carregado e o idioma trocado, que:
 *   - nomes próprios NÃO são traduzidos (topônimos, personagens, gangues);
 *   - a foto de cada região/personagem de GTA VI continua sendo encontrada.
 */
const fs = require("fs");
const path = require("path");
const ROOT = __dirname;
const noop = () => {};
const P = new Proxy(function () {}, { get: () => P, apply: () => P, construct: () => P });
const fe = () => ({ style: { setProperty: noop }, classList: { add: noop, remove: noop, toggle: noop, contains: () => false }, setAttribute: noop, getAttribute: () => null, appendChild: noop, removeChild: noop, remove: noop, insertBefore: noop, addEventListener: noop, removeEventListener: noop, getContext: () => P, querySelector: () => null, querySelectorAll: () => [], getBoundingClientRect: () => ({ top: 0, left: 0, width: 0, height: 0 }), dataset: {}, children: [] });

global.window = global;
window.matchMedia = () => ({ matches: false, addEventListener: noop, removeEventListener: noop });
window.localStorage = { getItem: () => null, setItem: noop };
window.addEventListener = noop; window.removeEventListener = noop; window.dispatchEvent = noop;
window.CustomEvent = function () {}; window.location = { hash: "" }; window.navigator = { language: "pt-BR" };
window.setTimeout = () => 0; window.setInterval = () => 0; window.requestAnimationFrame = () => 0;
window.cancelAnimationFrame = noop; window.IntersectionObserver = class { observe() {} disconnect() {} unobserve() {} };
window.devicePixelRatio = 1; window.innerWidth = 1440; window.innerHeight = 900;
global.document = { getElementById: () => fe(), querySelector: () => null, querySelectorAll: () => [], createElement: () => fe(), createElementNS: () => fe(), createTextNode: () => ({}), addEventListener: noop, documentElement: Object.assign(fe(), { lang: "" }), head: fe(), body: fe() };
global.React = require(path.join(ROOT, "node_modules/react"));
global.ReactDOM = { createRoot: () => ({ render: noop }) };
global.THREE = P;

eval(fs.readFileSync(path.join(ROOT, "public/dist/app.bundle.js"), "utf8"));

/* Textos-fonte antes de trocar o idioma, para comparar depois. */
const srcDescs = (window.VI_DATA.places.list || []).map((p) => p.desc);
const code = process.argv[2] || "pt-BR";
if (fs.existsSync(path.join(ROOT, "i18n", code + ".js"))) eval(fs.readFileSync(path.join(ROOT, "i18n", code + ".js"), "utf8"));
eval(fs.readFileSync(path.join(ROOT, "i18n", code + ".content.js"), "utf8"));
window.__setLang(code);

let bad = 0;
const check = (cond, msg) => { if (cond) console.log("ok:", msg); else { console.error("FALHOU:", msg); bad++; } };

const places = (window.VI_DATA.places.list || []);
const expected = ["Vice City", "Leonida Keys", "Grassrivers", "Port Gellhorn", "Ambrosia", "Mount Kalaga National Park"];
places.forEach((p, i) => check(p.name === expected[i], `nome preservado: "${p.name}" (esperado "${expected[i]}")`));

const chars = window.VI_DATA.characters || [];
check(chars[0].name === "Jason Duval" && chars[1].name === "Lucia Caminos", `protagonistas: ${chars[0].name} / ${chars[1].name}`);

/* Cidades e gangues do dossiê também não podem ter o nome traduzido. */
const cities = (window.__i18nData.citiesData || []);
const vc = cities.find((c) => c.id === "vice-city");
check(vc && vc.name === "Vice City", `cidade do dossiê: ${vc && vc.name}`);
const gangs = (window.__i18nData.factionsData || []);
const mc = gangs.find((f) => f.id === "vi-gang-final-chapter-mc");
check(!mc || mc.name === "Final Chapter MC", `gangue de GTA VI: ${mc && mc.name}`);

/* E a descrição CONTINUA traduzida (é o que o idioma deve mudar). */
const changed = places.filter((p, i) => p.desc !== srcDescs[i]).length;
check(code === "pt-BR" ? changed === 0 : changed === places.length,
  `descrições seguem o idioma (${changed}/${places.length} alteradas em ${code})`);

/* Foto encontrada para todas as regiões, mesmo com o idioma trocado. */
const norm = (s) => String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const lookup = (kind, name, id) => {
  const map = window.VI_BRIDGE.media[kind];
  const fromId = id ? norm(String(id).replace(/^vi-/, "").replace(/-/g, " ")) : "";
  const key = fromId && map[fromId] ? fromId : norm(name);
  if (map[key]) return map[key];
  const hit = Object.keys(map).find((k) => k.indexOf(key) === 0 || key.indexOf(k) === 0);
  return hit ? map[hit] : null;
};
places.forEach((p) => check(!!lookup("locations", p.name, p.id), `foto da região ${p.name}`));
chars.slice(0, 8).forEach((c) => check(!!lookup("characters", c.name, c.id), `foto de ${c.name}`));

console.log(bad ? `\nFALHOU (${code})` : `\nNOMES OK (${code})`);
process.exit(bad ? 1 : 0);
