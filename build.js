const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const babel = require("@babel/core");

const ROOT = __dirname;
const PUBLIC = path.join(ROOT, "public");
const DIST = path.join(PUBLIC, "dist");
const VENDOR = path.join(PUBLIC, "vendor");

const STATIC_FILES = ["index.html", "styles.css", "theme-neo.css", "theme-vi.css"];
const STATIC_DIRS = ["assets", "i18n", "live"];

const { SOURCES, JSX_AUTOTEXT_FILES } = require("./sources.js");
const autotext = require("./i18n/babel-plugin-autotext.js");
const AUTOTEXT = new Set(JSX_AUTOTEXT_FILES);

function ensureDir(dir){ fs.mkdirSync(dir, { recursive: true }); }

/* Todo texto literal do JSX passa pelo plugin i18n/babel-plugin-autotext.js,
 * que o envolve em window.__T("c<hash>", "texto pt-BR"). É o que permite
 * traduzir o site inteiro sem anotar centenas de pontos de render à mão. */
function transpile(file){
  const code = fs.readFileSync(path.join(ROOT, file), "utf8");
  const plugins = AUTOTEXT.has(file) ? [[autotext, {}]] : [];
  const out = babel.transformSync(code, {
    filename: file,
    presets: [["@babel/preset-react", { runtime: "classic" }]],
    plugins,
    compact: false, comments: false, sourceMaps: false
  });
  return out.code;
}

/* Idiomas realmente disponíveis = pt-BR (fonte) + todo i18n/<code>.js que
 * registra um catálogo. Injetado no topo do bundle como window.I18N_AVAILABLE
 * para o seletor desabilitar idiomas ainda sem tradução. Auto-mantido: basta
 * um novo i18n/<code>.js aparecer e rodar o build para liberá-lo. */
/* Carrega um catálogo num sandbox e conta as chaves. Retorna {code,keys}.
 * Blinda o build contra arquivos parciais/sintáticamente quebrados (um agente
 * de tradução ainda escrevendo i18n/<code>.js): se não avaliar ou não bater a
 * contagem canônica, o idioma NÃO é anunciado no seletor. */
function catalogKeyCount(file){
  try {
    const sandbox = {};
    new Function("window", fs.readFileSync(file, "utf8"))(sandbox);
    const cats = sandbox.I18N_CATALOGS || {};
    const codes = Object.keys(cats);
    if (codes.length !== 1) return { code: null, keys: 0 };
    return { code: codes[0], keys: Object.keys(cats[codes[0]]).length };
  } catch (err) {
    return { code: null, keys: 0 };
  }
}

function availableLangs(){
  const dir = path.join(ROOT, "i18n");
  const avail = ["pt-BR"]; /* fonte, sempre disponível (fallbacks inline) */
  const SKIP = new Set(["check-catalog", "smoke-lang"]);
  if (!fs.existsSync(dir)) return avail;

  const enPath = path.join(dir, "en.js");
  const refCount = fs.existsSync(enPath) ? catalogKeyCount(enPath).keys : 0;

  for (const f of fs.readdirSync(dir)){
    if (!f.endsWith(".js") || f.endsWith(".content.js")) continue;
    const code = f.slice(0, -3);
    if (code.startsWith("_") || SKIP.has(code) || avail.includes(code)) continue;
    const info = catalogKeyCount(path.join(dir, f));
    /* só anuncia se o catálogo carrega, casa o código do arquivo e tem a
     * contagem canônica de chaves (== en.js) — parciais ficam de fora. */
    const hasContent = fs.existsSync(path.join(dir, code + ".content.js"));
    if (info.code === code && (info.keys === refCount || (hasContent && info.keys > 0))) {
      avail.push(code);
      if (refCount > 0 && info.keys !== refCount) {
        process.stdout.write("  ~ i18n/" + f + ": UI " + info.keys + "/" + refCount + " chaves (resto cai no pt-BR)\n");
      }
    } else if (info.code === code && info.keys > 0) {
      process.stdout.write("  ! i18n/" + f + " incompleto (" + info.keys + "/" + refCount + " chaves) — não anunciado\n");
    }
  }
  return avail;
}

/* Preâmbulo do bundle (roda antes de tudo): expõe versão de build para o
 * cache-busting dos catálogos i18n e remove service workers/caches de versões
 * antigas do site — sem isso, um SW ou bundle em cache serviria JS obsoleto e a
 * troca de idioma "não faz nada". CSP é script-src 'self', então isto vive no
 * bundle (mesma origem), não como <script> inline no HTML. */
function bundlePreamble(avail, version){
  return [
    "/* >>> generated */",
    'window.I18N_AVAILABLE = ' + JSON.stringify(avail) + ";",
    'window.__BUILD_VERSION = ' + JSON.stringify(version) + ";",
    "try{",
    "  if(navigator.serviceWorker&&navigator.serviceWorker.getRegistrations){",
    "    navigator.serviceWorker.getRegistrations().then(function(rs){rs.forEach(function(r){r.unregister();});}).catch(function(){});",
    "  }",
    "  if(window.caches&&caches.keys){caches.keys().then(function(ks){ks.forEach(function(k){caches.delete(k);});}).catch(function(){});}",
    "}catch(e){}",
    ""
  ].join("\n");
}

/* Reescreve public/index.html carimbando ?v=<version> nos assets locais que
 * mudam a cada build (CSS + bundle). index.html é servido com max-age=0, então
 * a nova query invalida o cache do navegador/CDN e força o JS/CSS novo. */
function stampIndexHtml(version){
  const idx = path.join(PUBLIC, "index.html");
  if (!fs.existsSync(idx)) return;
  let html = fs.readFileSync(idx, "utf8");
  const assets = ["styles.css", "theme-neo.css", "theme-vi.css", "dist/app.bundle.js"];
  for (const a of assets){
    const esc = a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    html = html.replace(new RegExp('("' + esc + ')(\\?v=[^"]*)?(")', "g"), '$1?v=' + version + '$3');
  }
  fs.writeFileSync(idx, html, "utf8");
  process.stdout.write("  - public/index.html (assets carimbados ?v=" + version + ")\n");
}

function buildBundle(){
  ensureDir(DIST);
  const avail = availableLangs();
  const parts = SOURCES.map((file) => {
    process.stdout.write("  - " + file + "\n");
    return "/* >>> " + file + " */\n;" + transpile(file);
  });
  const body = parts.join("\n\n");
  const version = crypto.createHash("md5").update(body).digest("hex").slice(0, 10);
  const bundle = bundlePreamble(avail, version) + "\n" + body;
  fs.writeFileSync(path.join(DIST, "app.bundle.js"), bundle, "utf8");
  stampIndexHtml(version);
  const kb = (Buffer.byteLength(bundle) / 1024).toFixed(0);
  process.stdout.write("  => dist/app.bundle.js (" + kb + " KB) v" + version + " — idiomas: " + avail.join(", ") + "\n");
}

function copyReact(){
  ensureDir(VENDOR);
  const files = [
    ["react/umd/react.production.min.js", "react.production.min.js"],
    ["react-dom/umd/react-dom.production.min.js", "react-dom.production.min.js"]
  ];
  for(const pair of files){
    const from = pair[0], to = pair[1];
    const src = path.join(ROOT, "node_modules", from);
    if(!fs.existsSync(src)){ throw new Error("Missing " + from + " - run npm install first."); }
    fs.copyFileSync(src, path.join(VENDOR, to));
    process.stdout.write("  - vendor/" + to + "\n");
  }
}

function copyThree(){
  const src = path.join(ROOT, "node_modules", "three", "build", "three.min.js");
  if(!fs.existsSync(src)){ throw new Error("Missing three/build/three.min.js - run npm install three@0.149.0 first."); }
  ensureDir(VENDOR);
  fs.copyFileSync(src, path.join(VENDOR, "three.min.js"));
  process.stdout.write("  - vendor/three.min.js\n");
  ensureDir(path.join(ROOT, "vendor"));
  fs.copyFileSync(src, path.join(ROOT, "vendor", "three.min.js"));
  process.stdout.write("  - root vendor/three.min.js\n");
}

function copyStatic(){
  ensureDir(PUBLIC);
  for(const file of STATIC_FILES){
    const src = path.join(ROOT, file);
    if(!fs.existsSync(src)){ throw new Error("Missing static file " + file); }
    fs.copyFileSync(src, path.join(PUBLIC, file));
    process.stdout.write("  - public/" + file + "\n");
  }
  for(const dir of STATIC_DIRS){
    const src = path.join(ROOT, dir);
    if(!fs.existsSync(src)) continue;
    fs.cpSync(src, path.join(PUBLIC, dir), { recursive: true });
    process.stdout.write("  - public/" + dir + "/\n");
  }
}

process.stdout.write("Copying static files...\n");
copyStatic();
process.stdout.write("Copying React production build...\n");
copyReact();
process.stdout.write("Copying Three.js build...\n");
copyThree();
process.stdout.write("Transpiling JSX...\n");
buildBundle();
process.stdout.write("Done.\n");
