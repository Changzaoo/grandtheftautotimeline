/* Servidor estático mínimo para conferir o build localmente (public/).
 * As páginas usam <base href="/"> e caminhos por diretório (/en/games/), então
 * abrir o index.html direto do disco não reproduz o site publicado.
 * Uso: npm run serve   (porta: PORT ou 4173)
 */
"use strict";
const fs = require("fs");
const http = require("http");
const path = require("path");

const PUBLIC = path.join(__dirname, "..", "public");
const PORT = Number(process.env.PORT) || 4173;
const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8", ".xml": "application/xml; charset=utf-8", ".txt": "text/plain; charset=utf-8",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml",
  ".mp4": "video/mp4", ".webm": "video/webm", ".ico": "image/x-icon", ".woff2": "font/woff2"
};

http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname); }
  catch (e) { res.writeHead(400); res.end("Bad request"); return; }
  let file = path.normalize(path.join(PUBLIC, pathname));
  /* nunca servir nada fora de public/ */
  if (file !== PUBLIC && !file.startsWith(PUBLIC + path.sep)) { res.writeHead(403); res.end("Forbidden"); return; }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    if (!pathname.endsWith("/")) { res.writeHead(308, { Location: pathname + "/" }); res.end(); return; }
    file = path.join(file, "index.html");
  }
  let status = 200;
  if (!fs.existsSync(file)) { file = path.join(PUBLIC, "404.html"); status = 404; }
  if (!fs.existsSync(file)) { res.writeHead(404); res.end("Not found"); return; }

  const type = TYPES[path.extname(file).toLowerCase()] || "application/octet-stream";
  const size = fs.statSync(file).size;
  const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || "");
  if (range && status === 200) { /* vídeo: o navegador pede por faixas */
    const start = range[1] ? Number(range[1]) : 0;
    const end = range[2] ? Math.min(Number(range[2]), size - 1) : size - 1;
    if (start > end || start >= size) { res.writeHead(416, { "Content-Range": "bytes */" + size }); res.end(); return; }
    res.writeHead(206, { "Content-Type": type, "Content-Range": "bytes " + start + "-" + end + "/" + size, "Accept-Ranges": "bytes", "Content-Length": end - start + 1 });
    fs.createReadStream(file, { start, end }).pipe(res);
    return;
  }
  res.writeHead(status, { "Content-Type": type, "Content-Length": size, "Accept-Ranges": "bytes", "Cache-Control": "no-cache" });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => process.stdout.write("Dossiê GTA em http://localhost:" + PORT + "/\n"));
