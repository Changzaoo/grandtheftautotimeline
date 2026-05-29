/* ============================================================================
 * Build step: pre-compile JSX -> a single classic-script bundle.
 *
 * The page used to ship raw .jsx and transpile it in the browser with
 * @babel/standalone on every load. That is the main reason it was slow to
 * appear and janky on weak devices. This script does the transpile ONCE,
 * ahead of time, so the browser only ever downloads plain JS + React (prod).
 *
 * Everything is assembled into a single `public/` directory so that static
 * hosts (Vercel, Netlify, GitHub Pages, ...) can serve it as-is. Vercel uses
 * `public` as its default Output Directory, so no extra config is required.
 *
 * Outputs (all under public/):
 *   public/index.html            - copied from the repo root
 *   public/styles.css            - copied from the repo root
 *   public/assets/*              - copied from the repo root (favicon, logo, ...)
 *   public/dist/app.bundle.js    - all JSX files transpiled and concatenated
 *   public/vendor/react*.js      - React / ReactDOM production UMD builds (no CDN)
 *
 * Run with:  npm run build   (or)  node build.js
 * ========================================================================== */

const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");

const ROOT = __dirname;
const PUBLIC = path.join(ROOT, "public");
const DIST = path.join(PUBLIC, "dist");
const VENDOR = path.join(PUBLIC, "vendor");

/* Static files copied verbatim from the repo root into public/. The relative
 * paths inside index.html (vendor/..., dist/..., styles.css, assets/...) keep
 * working because the whole tree is mirrored under public/. */
const STATIC_FILES = ["index.html", "styles.css"];
const STATIC_DIRS = ["assets"];

/* Load order must match how index.html loaded the scripts: dependencies first
 * (shared components + data), then the section components, then app.jsx last. */
const SOURCES = [
  "components.jsx",
  "data.jsx",
  "data-gta.jsx",
  "data-dossier.jsx",
  "data-missions.jsx",
  "data-vehicles.jsx",
  "data-weapons.jsx",
  "sections-1.jsx",
  "sections-2.jsx",
  "sections-3.jsx",
  "sections-4.jsx",
  "sections-expanded.jsx",
  "sections-rockstar.jsx",
  "sections-dossier.jsx",
  "app.jsx"
];

function ensureDir(dir){
  fs.mkdirSync(dir, { recursive: true });
}

function transpile(file){
  const code = fs.readFileSync(path.join(ROOT, file), "utf8");
  const out = babel.transformSync(code, {
    filename: file,
    presets: [["@babel/preset-react", { runtime: "classic" }]],
    // No preset-env: modern browsers run optional chaining / nullish natively,
    // which keeps the bundle small and avoids extra helper code.
    compact: false,
    comments: false,
    sourceMaps: false
  });
  return out.code;
}

function buildBundle(){
  ensureDir(DIST);
  const parts = SOURCES.map((file) => {
    process.stdout.write("  - " + file + "\n");
    // Leading ";" guards against ASI hazards when files are concatenated.
    return "/* >>> " + file + " */\n;" + transpile(file);
  });
  const bundle = parts.join("\n\n");
  fs.writeFileSync(path.join(DIST, "app.bundle.js"), bundle, "utf8");
  const kb = (Buffer.byteLength(bundle) / 1024).toFixed(0);
  process.stdout.write("  => dist/app.bundle.js (" + kb + " KB)\n");
}

function copyReact(){
  ensureDir(VENDOR);
  const files = [
    ["react/umd/react.production.min.js", "react.production.min.js"],
    ["react-dom/umd/react-dom.production.min.js", "react-dom.production.min.js"]
  ];
  for(const [from, to] of files){
    const src = path.join(ROOT, "node_modules", from);
    if(!fs.existsSync(src)){
      throw new Error("Missing " + from + " - run `npm install` first.");
    }
    fs.copyFileSync(src, path.join(VENDOR, to));
    process.stdout.write("  - vendor/" + to + "\n");
  }
}

function copyStatic(){
  ensureDir(PUBLIC);
  for(const file of STATIC_FILES){
    const src = path.join(ROOT, file);
    if(!fs.existsSync(src)){
      throw new Error("Missing static file " + file);
    }
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
process.stdout.write("Transpiling JSX...\n");
buildBundle();
process.stdout.write("Done.\n");
