/* Gera o snapshot estático live/vi-live.json (fallback de /api/vi-live).
 * Rodado pela GitHub Action .github/workflows/vi-live.yml a cada 6 horas e
 * também manualmente: `npm run live`. O build copia live/ para public/live/. */
const fs = require("fs");
const path = require("path");
const { buildLive } = require("../lib/vi-live-core.js");

(async () => {
  const out = path.join(__dirname, "..", "live", "vi-live.json");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const data = await buildLive();
  const okSources = Object.values(data.sources).filter((s) => s === "ok").length;
  if (okSources === 0 && fs.existsSync(out)) {
    process.stdout.write("vi-live: nenhuma fonte respondeu; mantendo snapshot anterior.\n");
    process.exit(0);
  }
  fs.writeFileSync(out, JSON.stringify(data, null, 2) + "\n", "utf8");
  process.stdout.write(`vi-live: ${data.official.length} oficiais, ${data.press.length} notícias, ${data.wiki.length} páginas wiki (${data.tookMs} ms) -> ${path.relative(process.cwd(), out)}\n`);
  process.stdout.write("fontes: " + JSON.stringify(data.sources) + "\n");
})().catch((err) => { console.error(err); process.exit(1); });
