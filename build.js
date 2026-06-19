const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");

const ROOT = __dirname;
const PUBLIC = path.join(ROOT, "public");
const DIST = path.join(PUBLIC, "dist");
const VENDOR = path.join(PUBLIC, "vendor");

const STATIC_FILES = ["index.html", "styles.css", "theme-neo.css"];
const STATIC_DIRS = ["assets"];

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
  "app.jsx",
  "enhance.jsx"
];

function ensureDir(dir){ fs.mkdirSync(dir, { recursive: true }); }

function transpile(file){
  const code = fs.readFileSync(path.join(ROOT, file), "utf8");
  const out = babel.transformSync(code, {
    filename: file,
    presets: [["@babel/preset-react", { runtime: "classic" }]],
    compact: false, comments: false, sourceMaps: false
  });
  return out.code;
}

function buildBundle(){
  ensureDir(DIST);
  const parts = SOURCES.map((file) => {
    process.stdout.write("  - " + file + "\n");
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
