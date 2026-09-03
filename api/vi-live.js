/* Função serverless da Vercel: GET /api/vi-live
 * Agrega YouTube oficial, Newswire, imprensa e GTA Wiki (ver lib/vi-live-core.js)
 * e devolve JSON. A CDN da Vercel guarda a resposta por 30 min e serve a versão
 * antiga enquanto revalida por até 24 h — o site fica atualizado sozinho, sem
 * build, sem commit e sem chave de API. */
const { buildLive } = require("../lib/vi-live-core.js");

module.exports = async (req, res) => {
  try {
    const data = await buildLive();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Cache-Control", "public, s-maxage=1800, stale-while-revalidate=86400");
    res.setHeader("Access-Control-Allow-Origin", "https://grandtheftautotimeline.vercel.app");
    res.status(200).send(JSON.stringify(data));
  } catch (err) {
    res.setHeader("Cache-Control", "no-store");
    res.status(500).json({ error: String(err && err.message || err) });
  }
};
