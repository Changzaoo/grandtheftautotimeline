/* Pré-renderização + SEO técnico.
 *
 * O dossiê é uma SPA: sem isto, o HTML que os buscadores recebem é um
 * <div id="root"></div> vazio. Este script roda no fim do build e gera, para
 * cada idioma (13) e cada rota de data-seo.jsx (dossiê completo + páginas de
 * tema), um HTML com:
 *   - o conteúdo já renderizado dentro de #root (React montado num jsdom);
 *   - <title>, descrição, canonical, hreflang, Open Graph/Twitter e JSON-LD
 *     próprios da página e do idioma;
 *   - os catálogos do idioma por <script> antes do bundle, para o app montar
 *     já traduzido (sem piscar em português).
 * Gera também sitemap.xml (com alternates por idioma), robots.txt e 404.html.
 *
 * Uso:  node scripts/prerender.js            (todos os idiomas — chamado por build.js)
 *       node scripts/prerender.js --lang en  (um idioma; é o que cada worker roda)
 *
 * Se o render de um idioma falhar, as páginas dele saem como "casca" (head
 * completo, #root vazio — o app monta no navegador como antes) e o build
 * continua; com PRERENDER_STRICT=1 a falha derruba o build.
 */
"use strict";
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawn } = require("child_process");

const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const LANGS = ["pt-BR", "en", "fr", "it", "de", "es", "es-MX", "pl", "ru", "ja", "ko", "zh-CN", "zh-TW"];
const OG_LOCALE = {
  "pt-BR": "pt_BR", en: "en_US", fr: "fr_FR", it: "it_IT", de: "de_DE", es: "es_ES", "es-MX": "es_MX",
  pl: "pl_PL", ru: "ru_RU", ja: "ja_JP", ko: "ko_KR", "zh-CN": "zh_CN", "zh-TW": "zh_TW"
};
const OG_IMAGE = { path: "assets/og-cover.jpg", width: 1200, height: 630 };

/* ---------- rotas: lidas de data-seo.jsx (JS puro, fonte única) ---------- */
function loadSeo() {
  const sandbox = { location: { pathname: "/", protocol: "https:" } };
  new Function("window", fs.readFileSync(path.join(ROOT, "data-seo.jsx"), "utf8"))(sandbox);
  return { site: sandbox.SEO_SITE, routes: sandbox.SEO_ROUTES, pathFor: sandbox.__seoPath };
}
const SEO = loadSeo();
const ORIGIN = SEO.site.origin;
const pathFor = (lang, slug) => {
  let p = "/";
  if (lang !== "pt-BR") p += lang.toLowerCase() + "/";
  if (slug) p += slug + "/";
  return p;
};
const urlFor = (lang, slug) => ORIGIN + pathFor(lang, slug);

const esc = (value) => String(value == null ? "" : value)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
/* JSON-LD embutido: "<" escapado para nunca fechar a tag <script>. */
const ld = (obj) => '<script type="application/ld+json">' + JSON.stringify(obj).replace(/</g, "\\u003c") + "</script>";

function buildVersion() {
  const bundle = fs.readFileSync(path.join(PUBLIC, "dist", "app.bundle.js"), "utf8").slice(0, 2000);
  const m = bundle.match(/__BUILD_VERSION = "([^"]+)"/);
  return m ? m[1] : String(Date.now());
}

/* ---------- JSON-LD por página ---------- */
function structuredData(lang, route, meta, extra) {
  const url = urlFor(lang, route.slug);
  const home = urlFor(lang, "");
  /* O dossiê faz parte do ecossistema vnmax.org: declarar o publicador liga o
   * subdomínio à organização (mesma entidade em todos os sites do grupo). */
  const publisher = { "@type": "Organization", "@id": "https://www.vnmax.org/#organization", name: "VNMAX", url: "https://www.vnmax.org/" };
  const site = { "@type": "WebSite", "@id": ORIGIN + "/#site", name: SEO.site.name, url: ORIGIN + "/", inLanguage: LANGS, publisher };
  const page = {
    "@type": route.slug ? "CollectionPage" : "WebPage",
    "@id": url + "#page", url, name: meta.title, description: meta.description, inLanguage: lang,
    isPartOf: { "@id": ORIGIN + "/#site" },
    primaryImageOfPage: { "@type": "ImageObject", url: ORIGIN + "/" + OG_IMAGE.path, width: OG_IMAGE.width, height: OG_IMAGE.height },
    dateModified: extra.buildDate
  };
  const graph = [site, page];

  if (route.slug) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SEO.site.name, item: home },
        { "@type": "ListItem", position: 2, name: meta.label, item: url }
      ]
    });
  }
  const faqOf = (items) => ({
    "@type": "FAQPage",
    mainEntity: items.filter((f) => f.q && f.a).map((f) => ({
      "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  });
  if (route.id === "home" || route.id === "gta-6") {
    graph.push({
      "@type": "VideoGame", name: "Grand Theft Auto VI", alternateName: ["GTA VI", "GTA 6"],
      datePublished: "2026-11-19", gamePlatform: ["PlayStation 5", "Xbox Series X|S"],
      genre: ["Action-adventure", "Open world"],
      publisher: { "@type": "Organization", name: "Rockstar Games", url: "https://www.rockstargames.com/" },
      url: "https://www.rockstargames.com/VI"
    });
  }
  if (route.id === "gta-6" && extra.viFaq.length) graph.push(faqOf(extra.viFaq));
  if (route.id === "cheats" && extra.cheatFaq.length) graph.push(faqOf(extra.cheatFaq));
  if (route.id === "games" && extra.games.length) {
    graph.push({
      "@type": "ItemList", name: meta.heading, numberOfItems: extra.games.length,
      itemListElement: extra.games.map((g, i) => ({
        "@type": "ListItem", position: i + 1,
        item: {
          "@type": "VideoGame", name: g.title, description: g.summary,
          ...(g.releaseYear ? { datePublished: String(g.releaseYear) } : {}),
          publisher: { "@type": "Organization", name: "Rockstar Games" }
        }
      }))
    });
  }
  return ld({ "@context": "https://schema.org", "@graph": graph });
}

/* ---------- HTML da página ---------- */
function pageHtml({ lang, route, meta, src, body, extra, version }) {
  const url = urlFor(lang, route.slug);
  const v = "?v=" + version;
  const alternates = LANGS.map((code) =>
    '  <link rel="alternate" hreflang="' + code + '" href="' + urlFor(code, route.slug) + '"/>').join("\n");
  const ogAlt = LANGS.filter((c) => c !== lang).map((code) =>
    '  <meta property="og:locale:alternate" content="' + OG_LOCALE[code] + '"/>').join("\n");
  const catalogs = (lang === "pt-BR" ? [] : ["i18n/" + lang + ".js"]).concat(["i18n/" + lang + ".content.js"])
    .filter((file) => fs.existsSync(path.join(ROOT, file)))
    .map((file) => '  <script src="' + file + v + '" data-i18n-src="' + file + '" data-i18n-done="1"></script>').join("\n");
  const image = ORIGIN + "/" + OG_IMAGE.path;

  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <base href="/"/>
  <title data-i18n-src="${esc(src.title)}">${esc(meta.title)}</title>
  <meta name="description" content="${esc(meta.description)}" data-i18n-src="${esc(src.description)}"/>
  <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"/>
  <meta name="theme-color" content="#0b0d2a"/>
  <meta name="color-scheme" content="dark"/>
  <meta name="referrer" content="strict-origin-when-cross-origin"/>
  <link rel="canonical" href="${url}"/>
${alternates}
  <link rel="alternate" hreflang="x-default" href="${urlFor("pt-BR", route.slug)}"/>
  <meta property="og:site_name" content="${esc(SEO.site.name)}"/>
  <meta property="og:type" content="website"/>
  <meta property="og:url" content="${url}"/>
  <meta property="og:title" content="${esc(meta.title)}" data-i18n-src="${esc(src.title)}"/>
  <meta property="og:description" content="${esc(meta.description)}" data-i18n-src="${esc(src.description)}"/>
  <meta property="og:image" content="${image}"/>
  <meta property="og:image:width" content="${OG_IMAGE.width}"/>
  <meta property="og:image:height" content="${OG_IMAGE.height}"/>
  <meta property="og:locale" content="${OG_LOCALE[lang]}"/>
${ogAlt}
  <meta name="twitter:card" content="summary_large_image"/>
  <meta name="twitter:title" content="${esc(meta.title)}"/>
  <meta name="twitter:description" content="${esc(meta.description)}"/>
  <meta name="twitter:image" content="${image}"/>
  <link rel="manifest" href="manifest.json"/>
  <link rel="icon" type="image/png" sizes="192x192" href="assets/icon-192.png"/>
  <link rel="apple-touch-icon" href="assets/icon-192.png"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Big+Shoulders+Display:wght@700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&family=Playfair+Display:ital,wght@0,500;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="styles.css${v}"/>
  <link rel="stylesheet" href="theme-neo.css${v}"/>
  <link rel="stylesheet" href="theme-vi.css${v}"/>
  <link rel="stylesheet" href="theme-glass.css${v}"/>
  ${structuredData(lang, route, meta, extra)}
</head>
<body>
  <div id="root">${body}</div>
  <div id="neo-boot" aria-hidden="true"><div class="neo-boot-inner"><div class="neo-boot-badge">Arquivo Confidencial · Carregando</div><div class="neo-boot-title">GRAND THEFT <em>ARCHIVE</em></div><div class="neo-boot-bar"><i></i></div><div class="neo-boot-tip"></div></div></div>
  <noscript><style>#neo-boot{display:none}.reveal{opacity:1!important;transform:none!important}</style></noscript>
  <script src="vendor/react.production.min.js${v}"></script>
  <script src="vendor/react-dom.production.min.js${v}"></script>
${catalogs}
  <script src="dist/app.bundle.js${v}"></script>
</body>
</html>
`;
}

function writePage(lang, slug, html) {
  const dir = path.join(PUBLIC, pathFor(lang, slug));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html, "utf8");
  return Buffer.byteLength(html);
}

/* ====================================================================== *
 * WORKER — um idioma: monta a App no jsdom, uma vez por rota.
 * ====================================================================== */
async function renderLang(lang) {
  const version = buildVersion();
  const buildDate = new Date().toISOString().slice(0, 10);
  const srcById = {};
  SEO.routes.forEach((r) => { srcById[r.id] = { title: r.title, description: r.description }; });

  const { JSDOM } = require(path.join(ROOT, "node_modules/jsdom"));
  const dom = new JSDOM('<!doctype html><html><head><title>t</title></head><body><div id="root"></div></body></html>',
    { url: urlFor(lang, ""), pretendToBeVisual: true, runScripts: "outside-only" });
  const { window } = dom;

  /* O bundle e o React esperam globais de navegador. */
  for (const key of ["window", "document", "navigator", "HTMLElement", "Element", "Node", "getComputedStyle"]) {
    Object.defineProperty(global, key, { value: key === "window" ? window : window[key], configurable: true, writable: true });
  }
  global.requestAnimationFrame = window.requestAnimationFrame = (cb) => setTimeout(() => cb(Date.now()), 0);
  global.cancelAnimationFrame = window.cancelAnimationFrame = (id) => clearTimeout(id);
  /* "prefers-reduced-motion: reduce" = true: o HTML sai sem as classes de
   * animação de entrada (que esconderiam o conteúdo até o JS rodar). */
  window.matchMedia = (query) => ({
    matches: /prefers-reduced-motion/.test(String(query)), media: String(query),
    addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {}
  });
  window.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
  window.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };
  window.scrollTo = () => {};
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.HTMLCanvasElement.prototype.getContext = () => null;
  /* Só os JSON do próprio site (live/…) são servidos; rede externa, nunca. */
  window.fetch = (input) => {
    const rel = String(input).split("?")[0].replace(/^\/+/, "");
    const file = path.join(ROOT, rel);
    if (/^live\/[\w.-]+\.json$/.test(rel) && fs.existsSync(file)) {
      const text = fs.readFileSync(file, "utf8");
      return Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve(JSON.parse(text)), text: () => Promise.resolve(text) });
    }
    return Promise.resolve({ ok: false, status: 404, json: () => Promise.resolve({}), text: () => Promise.resolve("") });
  };
  window.__PRERENDER = true;

  const React = require(path.join(ROOT, "node_modules/react"));
  const ReactDOMClient = require(path.join(ROOT, "node_modules/react-dom/client"));
  const { act } = require(path.join(ROOT, "node_modules/react-dom/test-utils"));
  global.React = window.React = React;
  global.ReactDOM = window.ReactDOM = ReactDOMClient;
  global.IS_REACT_ACT_ENVIRONMENT = window.IS_REACT_ACT_ENVIRONMENT = true;
  /* React avisa em console.error sobre coisas irrelevantes aqui (act, keys). */
  const realError = console.error;
  console.error = (...args) => { if (!/Warning:|Not implemented/.test(String(args[0]))) realError(...args); };

  /* Catálogos do idioma ANTES do bundle — como na página final. */
  const catalogs = (lang === "pt-BR" ? [] : ["i18n/" + lang + ".js"]).concat(["i18n/" + lang + ".content.js"]);
  for (const file of catalogs) {
    const full = path.join(ROOT, file);
    if (fs.existsSync(full)) window.eval(fs.readFileSync(full, "utf8"));
  }
  await act(async () => { window.eval(fs.readFileSync(path.join(PUBLIC, "dist", "app.bundle.js"), "utf8")); });
  if (typeof window.__AppRoot !== "function") throw new Error("bundle não expôs window.__AppRoot");
  if (window.__lang !== lang) throw new Error('idioma ativo "' + window.__lang + '" != "' + lang + '"');

  const data = window.__i18nData || {};
  const extra = {
    buildDate,
    viFaq: ((window.VI_DATA && window.VI_DATA.faq) || []).map((f) => ({ q: f.q || f.question, a: f.a || f.answer })),
    cheatFaq: ((window.CHEATS_DATA && window.CHEATS_DATA.faq) || []).map((f) => ({ q: f.q, a: f.a })),
    games: (data.gamesData || []).map((g) => ({ title: g.title, summary: g.summary, releaseYear: g.releaseYear }))
  };

  const rootEl = window.document.getElementById("root");
  let bytes = 0;
  for (const route of window.SEO_ROUTES) {
    window.__ROUTE = { lang: lang === "pt-BR" ? null : lang, route };
    const root = ReactDOMClient.createRoot(rootEl);
    await act(async () => { root.render(React.createElement(window.__AppRoot)); });
    /* efeitos com fetch (catálogo VI, missões) resolvem em microtarefas */
    await act(async () => { await new Promise((r) => setTimeout(r, 40)); });
    const body = rootEl.innerHTML;
    await act(async () => { root.unmount(); });
    if (body.length < 2000) throw new Error("render vazio em /" + route.slug);
    const meta = { title: route.title, description: route.description, label: route.label, heading: route.heading };
    bytes += writePage(lang, route.slug, pageHtml({ lang, route, meta, src: srcById[route.id], body, extra, version }));
  }
  console.error = realError;
  return { pages: window.SEO_ROUTES.length, bytes };
}

/* Casca sem conteúdo pré-renderizado (fallback se o worker falhar). */
function writeShells(lang) {
  const version = buildVersion();
  const extra = { buildDate: new Date().toISOString().slice(0, 10), viFaq: [], cheatFaq: [], games: [] };
  for (const route of SEO.routes) {
    const meta = { title: route.title, description: route.description, label: route.label, heading: route.heading };
    writePage(lang, route.slug, pageHtml({ lang, route, meta, src: meta, body: "", extra, version }));
  }
}

/* ====================================================================== *
 * ORQUESTRADOR — um processo por idioma + sitemap/robots/404.
 * ====================================================================== */
function writeSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = [];
  for (const route of SEO.routes) {
    for (const lang of LANGS) {
      const links = LANGS.map((code) =>
        '    <xhtml:link rel="alternate" hreflang="' + code + '" href="' + urlFor(code, route.slug) + '"/>').join("\n");
      urls.push([
        "  <url>",
        "    <loc>" + urlFor(lang, route.slug) + "</loc>",
        "    <lastmod>" + lastmod + "</lastmod>",
        "    <changefreq>" + (route.id === "home" || /^gta-6/.test(route.id) ? "daily" : "weekly") + "</changefreq>",
        "    <priority>" + (route.id === "home" ? "1.0" : lang === "pt-BR" ? "0.8" : "0.6") + "</priority>",
        links,
        '    <xhtml:link rel="alternate" hreflang="x-default" href="' + urlFor("pt-BR", route.slug) + '"/>',
        "  </url>"
      ].join("\n"));
    }
  }
  fs.writeFileSync(path.join(PUBLIC, "sitemap.xml"),
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    urls.join("\n") + "\n</urlset>\n", "utf8");
  return urls.length;
}

function writeRobots() {
  fs.writeFileSync(path.join(PUBLIC, "robots.txt"), [
    "# Dossiê GTA — todo o conteúdo é público e pode ser rastreado.",
    "User-agent: *",
    "Allow: /",
    "# ferramentas de build publicadas junto com os catálogos de idioma",
    "Disallow: /i18n/parts/",
    "",
    "Sitemap: " + ORIGIN + "/sitemap.xml",
    ""
  ].join("\n"), "utf8");
}

function write404() {
  const version = buildVersion();
  const links = SEO.routes.map((r) => '<li><a href="' + pathFor("pt-BR", r.slug) + '">' + esc(r.label) + "</a></li>").join("");
  fs.writeFileSync(path.join(PUBLIC, "404.html"), `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <base href="/"/>
  <title>Página não encontrada — Dossiê GTA</title>
  <meta name="robots" content="noindex,follow"/>
  <meta name="theme-color" content="#0b0d2a"/>
  <link rel="icon" type="image/png" href="assets/icon-192.png"/>
  <link rel="stylesheet" href="styles.css?v=${version}"/>
  <link rel="stylesheet" href="theme-neo.css?v=${version}"/>
  <link rel="stylesheet" href="theme-vi.css?v=${version}"/>
</head>
<body>
  <main class="route-head dossier-shell" style="min-height:100vh;padding-top:12vh">
    <div class="wrap">
      <div class="route-crumbs"><span>Erro 404 · Wasted</span></div>
      <h1>Esta página saiu do mapa</h1>
      <p>O endereço que você abriu não existe (ou mudou de lugar). O arquivo completo continua aqui:</p>
      <a class="vi-btn vi-btn--sm" href="/">Abrir o Dossiê GTA</a>
      <nav class="route-index" aria-label="Seções do dossiê"><ul>${links}</ul></nav>
    </div>
  </main>
</body>
</html>
`, "utf8");
}

function runWorker(lang) {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, [__filename, "--lang", lang], { cwd: ROOT, stdio: ["ignore", "pipe", "pipe"] });
    let out = "", err = "";
    child.stdout.on("data", (d) => { out += d; });
    child.stderr.on("data", (d) => { err += d; });
    child.on("close", (code) => resolve({ lang, code, out: out.trim(), err: err.trim() }));
  });
}

async function run() {
  const started = Date.now();
  const queue = LANGS.slice();
  const results = [];
  const width = Math.max(1, Math.min(4, os.cpus().length - 1));
  await Promise.all(Array.from({ length: width }, async () => {
    while (queue.length) results.push(await runWorker(queue.shift()));
  }));

  let failed = 0;
  for (const lang of LANGS) {
    const r = results.find((x) => x.lang === lang);
    if (r.code === 0) { process.stdout.write("  - " + lang + ": " + r.out + "\n"); continue; }
    failed++;
    process.stdout.write("  ! " + lang + ": pré-render falhou — páginas saem sem conteúdo embutido\n    " +
      (r.err.split("\n").slice(-4).join("\n    ")) + "\n");
    writeShells(lang);
  }
  const count = writeSitemap();
  writeRobots();
  write404();
  process.stdout.write("  => " + count + " URLs no sitemap.xml, robots.txt, 404.html (" + ((Date.now() - started) / 1000).toFixed(1) + " s)\n");
  if (failed && process.env.PRERENDER_STRICT) throw new Error(failed + " idioma(s) sem pré-render");
}

if (require.main === module) {
  const i = process.argv.indexOf("--lang");
  if (i !== -1) {
    renderLang(process.argv[i + 1]).then((r) => {
      process.stdout.write(r.pages + " páginas, " + (r.bytes / 1024 / 1024).toFixed(1) + " MB\n");
      process.exit(0);
    }).catch((err) => { process.stderr.write(String(err && err.stack || err) + "\n"); process.exit(1); });
  } else {
    run().catch((err) => { process.stderr.write(String(err && err.stack || err) + "\n"); process.exit(1); });
  }
}

module.exports = { run };
