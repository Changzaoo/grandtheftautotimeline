/* ============ GTA VI — motor "ao vivo" (compartilhado) ============
 * Agrega, sem chave de API, tudo que a Rockstar e a cobertura oficial soltam
 * sobre GTA VI:
 *   1. Canal oficial da Rockstar Games no YouTube (feed RSS público)
 *   2. Newswire da Rockstar (descoberta via Google News RSS restrito ao
 *      domínio rockstargames.com + leitura das meta tags Open Graph)
 *   3. Imprensa em pt-BR e em inglês (Google News RSS)
 *   4. GTA Wiki: páginas de GTA VI editadas mais recentemente (API MediaWiki)
 *
 * Usado por:  api/vi-live.js (função serverless da Vercel, cache de 30 min)
 *             scripts/refresh-vi-live.js (snapshot estático live/vi-live.json,
 *             regenerado pela GitHub Action a cada 6 horas)
 * Node 18+ (fetch nativo). Sem dependências.
 */
"use strict";

const ROCKSTAR_YT_CHANNEL = "UC6VcWc1rAoWdBCM0JxrRQ3A"; /* youtube.com/@RockstarGames */
const UA = "Mozilla/5.0 (compatible; GTA-Dossie-Live/1.0; +https://grandtheftautotimeline.vercel.app)";

const SOURCES = {
  youtube: `https://www.youtube.com/feeds/videos.xml?channel_id=${ROCKSTAR_YT_CHANNEL}`,
  newswire: "https://news.google.com/rss/search?q=%22Grand+Theft+Auto+VI%22+OR+%22GTA+VI%22+OR+%22GTA+Online%22+site:rockstargames.com&hl=en-US&gl=US&ceid=US:en",
  pressBR: "https://news.google.com/rss/search?q=%22GTA+6%22+OR+%22GTA+VI%22+when:14d&hl=pt-BR&gl=BR&ceid=BR:pt-419",
  pressEN: "https://news.google.com/rss/search?q=%22GTA+6%22+OR+%22GTA+VI%22+Rockstar+when:7d&hl=en-US&gl=US&ceid=US:en",
  wiki: "https://gta.fandom.com/api.php?action=query&format=json&list=recentchanges&rcnamespace=0&rctype=edit|new&rctoprevonly=1&rclimit=500&rcprop=title|timestamp|comment|ids",
  wikiCats: ["Category:Vehicles in GTA VI", "Category:Weapons in GTA VI", "Category:Characters in GTA VI", "Category:Gangs in GTA VI", "Category:Locations in GTA VI in Leonida", "Category:Locations in GTA VI in Vice City", "Category:Businesses in GTA VI", "Category:Animals in GTA VI"]
};

const VI_RX = /(gta\s?vi\b|gta\s?6\b|grand theft auto vi\b|leonida|vice city|jason|lucia|extended look|olhar estendido)/i;

const TAG_RULES = [
  ["mecânica", /(gameplay|mechanic|mecânic|feature|sistema|system|wanted|procurado|física|physics|combat|combate|heist|assalto|fuel|combust)/i],
  ["trailer", /(trailer|teaser|extended look|olhar estendido|showcase|gameplay reveal)/i],
  ["lançamento", /(release date|launch|lançamento|data de|pre-?load|pré-?load|delay|adiamento|november|novembro)/i],
  ["pré-venda", /(pre-?order|pré-?venda|edition|edição|price|preço|bonus|bônus)/i],
  ["vazamento", /(leak|vazamento|vazou|leaked)/i],
  ["online", /(gta online|online)/i],
  ["hardware", /(dualsense|controller|controle|ps5 pro|console|xbox series)/i],
  ["mapa", /(map|mapa|leonida|vice city|county|condado)/i],
  ["trilha", /(soundtrack|trilha|song|música|radio|rádio)/i],
  ["pc", /(\bpc\b|steam|nvidia|amd)/i]
];

function tagsFor(text) {
  const out = [];
  for (const [tag, rx] of TAG_RULES) if (rx.test(text || "")) out.push(tag);
  return out.slice(0, 4);
}

function decodeEntities(s) {
  return String(s || "")
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (m, n) => String.fromCharCode(Number(n)))
    .trim();
}

function stripTags(s) { return decodeEntities(String(s || "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim(); }

function tag(block, name) {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, "i"));
  return m ? decodeEntities(m[1]) : "";
}

function attr(block, tagName, attrName) {
  const m = block.match(new RegExp(`<${tagName}[^>]*\\s${attrName}="([^"]*)"`, "i"));
  return m ? decodeEntities(m[1]) : "";
}

async function fetchText(url, ms = 7000) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), ms);
  try {
    const res = await fetch(url, { signal: ctl.signal, headers: { "user-agent": UA, "accept-language": "pt-BR,pt;q=0.9,en;q=0.8" }, redirect: "follow" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.text();
  } finally { clearTimeout(timer); }
}

/* ---------- 1. YouTube (Atom) ---------- */
async function loadYouTube() {
  const xml = await fetchText(SOURCES.youtube);
  const entries = xml.split("<entry>").slice(1);
  return entries.map((e) => {
    const id = tag(e, "yt:videoId");
    const title = tag(e, "title");
    return {
      kind: "video",
      id: `yt-${id}`,
      videoId: id,
      title,
      url: `https://www.youtube.com/watch?v=${id}`,
      publishedAt: tag(e, "published"),
      thumb: id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : "",
      source: "Rockstar Games · YouTube",
      vi: VI_RX.test(title),
      tags: tagsFor(title)
    };
  }).filter((v) => v.videoId);
}

/* ---------- Google News RSS (genérico) ---------- */
function parseGoogleNews(xml, sourceLabel) {
  const items = xml.split("<item>").slice(1);
  return items.map((it) => {
    const rawTitle = tag(it, "title");
    const sourceName = stripTags(tag(it, "source")) || sourceLabel;
    const title = rawTitle.replace(new RegExp(`\\s+-\\s+${sourceName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`), "").trim();
    const link = tag(it, "link") || attr(it, "link", "href");
    const pub = tag(it, "pubDate");
    return {
      kind: "news",
      id: `gn-${Buffer.from(link).toString("base64url").slice(0, 24)}`,
      title,
      url: link,
      publishedAt: pub ? new Date(pub).toISOString() : "",
      source: sourceName,
      tags: tagsFor(title)
    };
  }).filter((n) => n.title && n.url);
}

/* ---------- 2. Newswire (descoberta + Open Graph) ---------- */
async function loadNewswire() {
  const xml = await fetchText(SOURCES.newswire);
  const items = parseGoogleNews(xml, "Rockstar Newswire")
    .filter((n) => !/customer support|submit a request|suporte/i.test(n.title));
  /* Google News entrega links de redirecionamento; seguimos até rockstargames.com
   * e lemos og:title / og:description / og:image de cada artigo (máx. 8). */
  const top = items.slice(0, 8);
  const enriched = await Promise.allSettled(top.map(async (n) => {
    const html = await fetchText(n.url, 6000);
    const og = (p) => { const m = html.match(new RegExp(`<meta[^>]+property="og:${p}"[^>]+content="([^"]*)"`, "i")) || html.match(new RegExp(`<meta[^>]+content="([^"]*)"[^>]+property="og:${p}"`, "i")); return m ? decodeEntities(m[1]) : ""; };
    const canonical = (html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i) || [])[1] || (html.match(/property="og:url"[^>]+content="([^"]+)"/i) || [])[1] || "";
    const url = /rockstargames\.com/.test(canonical) ? canonical : n.url;
    return {
      ...n,
      kind: "newswire",
      title: og("title").replace(/\s+-\s+Rockstar Games$/i, "") || n.title,
      desc: og("description"),
      image: og("image"),
      url,
      isNewswire: /\/newswire\//.test(url),
      source: "Rockstar Newswire",
      tags: tagsFor(`${og("title")} ${og("description")}`)
    };
  }));
  return enriched.map((r, i) => {
    const base = { ...top[i], kind: "newswire", source: "Rockstar Newswire", title: top[i].title.replace(/\s+-\s+Rockstar Games$/i, "") };
    if (r.status !== "fulfilled") return base;
    /* Se o redirecionamento do Google News não chegou ao artigo (página JS),
     * mantém o item do feed — o link continua funcionando no navegador. */
    return r.value.isNewswire ? r.value : { ...base, image: base.image || "" };
  })
    .filter((n) => VI_RX.test(`${n.title} ${n.desc || ""}`) || /gta online/i.test(n.title));
}

/* ---------- 3. Imprensa ---------- */
async function loadPress(url, lang) {
  const xml = await fetchText(url);
  return parseGoogleNews(xml, lang === "pt" ? "Imprensa" : "Press").map((n) => ({ ...n, lang }));
}

/* ---------- 4. GTA Wiki ---------- */
/* Títulos de páginas de GTA VI: catálogo local (live/vi-catalog.json) quando
 * existir, senão categorias do wiki. Cacheado em memória por 1 h. */
let viTitlesCache = { at: 0, set: null };
async function viWikiTitles() {
  if (viTitlesCache.set && Date.now() - viTitlesCache.at < 3600e3) return viTitlesCache.set;
  const set = new Set(["Grand Theft Auto VI", "Grand Theft Auto VI/Trailers", "Grand Theft Auto VI/Screenshots", "Vehicles in GTA VI", "Weapons in GTA VI", "State of Leonida", "Vice City (HD Universe)", "Jason Duval", "Lucia Caminos"]);
  try {
    const fs = require("fs"); const path = require("path");
    const file = path.join(__dirname, "..", "live", "vi-catalog.json");
    if (fs.existsSync(file)) JSON.parse(fs.readFileSync(file, "utf8")).items.forEach((i) => set.add(i.pageTitle));
  } catch (e) { /* segue para as categorias */ }
  if (set.size < 50) {
    await Promise.allSettled(SOURCES.wikiCats.map(async (cat) => {
      const j = JSON.parse(await fetchText(`https://gta.fandom.com/api.php?action=query&format=json&list=categorymembers&cmtitle=${encodeURIComponent(cat)}&cmlimit=500&cmnamespace=0`));
      ((j.query && j.query.categorymembers) || []).forEach((m) => set.add(m.title));
    }));
  }
  viTitlesCache = { at: Date.now(), set };
  return set;
}

async function loadWiki() {
  const [json, viTitles] = await Promise.all([fetchText(SOURCES.wiki).then(JSON.parse), viWikiTitles()]);
  const seen = new Set();
  const hits = (((json.query && json.query.recentchanges) || [])
    .filter((rc) => viTitles.has(rc.title) && !seen.has(rc.title) && seen.add(rc.title))
    .slice(0, 14)
    .map((rc) => ({ title: rc.title, pageid: rc.pageid, timestamp: rc.timestamp, snippet: rc.comment || "", wordcount: 0 })));
  const titles = hits.map((h) => h.title);
  let thumbs = {};
  if (titles.length) {
    try {
      const q = await fetchText(`https://gta.fandom.com/api.php?action=query&format=json&prop=pageimages&piprop=thumbnail&pithumbsize=360&titles=${encodeURIComponent(titles.join("|"))}`);
      const pj = JSON.parse(q);
      Object.values((pj.query && pj.query.pages) || {}).forEach((p) => { if (p.thumbnail) thumbs[p.title] = p.thumbnail.source; });
    } catch (e) { /* miniaturas são opcionais */ }
  }
  return hits.map((h) => ({
    kind: "wiki",
    id: `wiki-${h.pageid}`,
    title: h.title,
    url: `https://gta.fandom.com/wiki/${encodeURIComponent(h.title.replace(/ /g, "_"))}`,
    publishedAt: h.timestamp || "",
    snippet: stripTags(h.snippet || ""),
    words: h.wordcount || 0,
    thumb: thumbs[h.title] || "",
    source: "GTA Wiki",
    tags: tagsFor(`${h.title} ${stripTags(h.snippet || "")}`)
  }));
}

function byDateDesc(a, b) { return String(b.publishedAt || "").localeCompare(String(a.publishedAt || "")); }

function dedupe(list) {
  const seen = new Set();
  return list.filter((n) => {
    const key = (n.title || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().slice(0, 80);
    if (!key || seen.has(key)) return false;
    seen.add(key); return true;
  });
}

/* ---------- Agregador ---------- */
async function buildLive() {
  const started = Date.now();
  const [yt, nw, br, en, wiki] = await Promise.allSettled([
    loadYouTube(), loadNewswire(), loadPress(SOURCES.pressBR, "pt"), loadPress(SOURCES.pressEN, "en"), loadWiki()
  ]);
  const pick = (r) => (r.status === "fulfilled" ? r.value : []);
  const status = (r) => (r.status === "fulfilled" ? "ok" : `erro: ${String(r.reason && r.reason.message || r.reason).slice(0, 80)}`);

  const videos = dedupe(pick(yt).sort(byDateDesc));
  const newswire = pick(nw).sort(byDateDesc);
  const official = [
    ...videos.filter((v) => v.vi).slice(0, 8),
    ...newswire.slice(0, 8)
  ].sort(byDateDesc);
  const otherRockstar = videos.filter((v) => !v.vi).slice(0, 6);
  const press = dedupe([...pick(br), ...pick(en)]).sort(byDateDesc).slice(0, 24);

  return {
    generatedAt: new Date().toISOString(),
    tookMs: Date.now() - started,
    sources: { youtube: status(yt), newswire: status(nw), pressBR: status(br), pressEN: status(en), wiki: status(wiki) },
    official,
    otherRockstar,
    press,
    wiki: pick(wiki)
  };
}

module.exports = { buildLive, tagsFor, SOURCES, ROCKSTAR_YT_CHANNEL };
