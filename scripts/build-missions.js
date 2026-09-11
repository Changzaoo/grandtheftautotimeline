/* ============ Missões em vídeo (GTA Wiki + YouTube → live/missions.json) ============
 * Para cada jogo: a lista de missões do GTA Wiki (nome, contato, descrição e
 * screenshot da missão) casada com playlists de passo a passo SEM COMENTÁRIOS
 * (GTA Series Videos e canais equivalentes), na ordem em que a campanha é jogada.
 *
 *  - Missão sem vídeo na playlist → busca no YouTube, aceitando só canais de
 *    gameplay sem narração conhecidos ou vídeos com "no commentary" no título,
 *    e que citem o jogo e o nome da missão.
 *  - Todo vídeo escolhido passa pelo oEmbed: precisa permitir incorporação, porque
 *    o site toca no próprio player (a pessoa não sai da página).
 *  - Vídeos das playlists de atividades paralelas/assaltos que não existem na
 *    lista do wiki entram como itens próprios (ex.: Strangers and Freaks, heists).
 *
 * Uso: node scripts/build-missions.js [gta-iii,san-andreas] [--cache=<dir>]
 *      (--cache guarda wiki/playlists/buscas em disco para rodar de novo rápido) */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "live", "missions.json");
const args = process.argv.slice(2);
const CACHE = (args.find((a) => a.startsWith("--cache=")) || "").slice(8);
const ONLY = new Set((args.find((a) => !a.startsWith("--")) || "").split(",").filter(Boolean));
const UA = {
  "accept-language": "en-US,en;q=0.9",
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36",
  cookie: "CONSENT=YES+1; SOCS=CAI"
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* Canais de passo a passo sem narração. */
const TRUSTED = /^(GTA Series Videos|Willzyyy|Zombuoy123|Games Walkthrough|MKIceAndFire|Shirrako|Gamer's Little Playground)$/i;
const BAD_VIDEO = /(reaction|funny|fails?\b|glitch|speed ?run|trailer|\bmods?\b|remake|top \d+|all missions|full game|longplay|rtx|beta\b|cheat|explained|theory|#shorts|\bvs\.?\b|comparison|livestream|live stream|let'?s play|first time)/i;
const JUNK_EXTRA = /(end credits|full movie|all endings|location guide|locations\b|points of interest|all entrance|cutting powder|vault contents|how to|purchase|guide and tips|tips & tricks|payout|mastermind guide|challenge guide|therapy sessions|100% completion|stunt jumps|creation system|trailer|intro, creation)/i;

const GAMES = [
  { id: "gta-1", name: "Grand Theft Auto", wiki: "Missions in GTA", noSide: true,
    prefix: /^gta \(1997\)\s*/i, search: "GTA 1997", keywords: ["gta 1997", "gta 1", "grand theft auto 1997", "gta1"],
    playlists: [{ id: "PLMnFiCK45u-CLsRhMlRH0njXk9zIIvGfG", part: "story", order: true, extras: true }] },
  { id: "london-1969", name: "GTA: London 1969", mode: "playlist", splitIn: true,
    prefix: /^gta london 1969\s*/i, search: "GTA London 1969", keywords: ["london 1969"],
    playlists: [{ id: "PL82C3D1F2EA05B0A4", part: "story", order: true, extras: true }] },
  { id: "london-1961", name: "GTA: London 1961", mode: "playlist", splitIn: true,
    prefix: /^gta london 1961\s*/i, search: "GTA London 1961", keywords: ["london 1961"],
    playlists: [{ id: "PL5232EFAB4CADF338", part: "story", order: true, extras: true }] },
  { id: "gta-2", name: "Grand Theft Auto 2", wiki: "Missions in GTA 2", noSide: true, matrix: true,
    prefix: /^gta 2( \(pc\))?\s*/i, search: "GTA 2", keywords: ["gta 2", "gta2", "grand theft auto 2"],
    playlists: [{ id: "PLgnZ23rxsl2ggtawtowXpuCyjcHqPfobq", part: "story", order: true, extras: true }] },
  { id: "gta-iii", name: "Grand Theft Auto III", wiki: "Missions in GTA III",
    prefix: /^gta 3\s*/i, search: "GTA 3", keywords: ["gta 3", "gta iii", "grand theft auto 3", "grand theft auto iii"],
    playlists: [{ id: "PL7BCD02E7D8C6D564", part: "story", order: true }] },
  { id: "vice-city", name: "GTA: Vice City", wiki: "Missions in GTA Vice City",
    prefix: /^gta vice city\s*/i, search: "GTA Vice City", keywords: ["vice city"],
    playlists: [
      { id: "PL-0Zm2zo61NWxKJzUKWLeZUzDVQJ014Jm", part: "story", order: true },
      { id: "PLQ3KzJPBsAHkbc6rDMyokzqEbF2IxSx5k", part: "story" },
      { id: "PLQ3KzJPBsAHkuYnbTyC0mKUlTxa-2o96O", part: "side", extras: true }
    ] },
  { id: "san-andreas", name: "GTA: San Andreas", wiki: "Missions in GTA San Andreas",
    prefix: /^gta san andreas\s*/i, search: "GTA San Andreas", keywords: ["san andreas", "gta sa"],
    playlists: [{ id: "PL04A9CC6447FC2540", part: "story", order: true }] },
  { id: "gta-advance", name: "GTA Advance", wiki: "Missions in GTA Advance",
    prefix: /^gta advance\s*/i, search: "GTA Advance", keywords: ["gta advance", "grand theft auto advance"],
    playlists: [{ id: "PLE4E69AB941414D2A", part: "story", order: true }] },
  { id: "liberty-city-stories", name: "GTA: Liberty City Stories", wiki: "Missions in GTA Liberty City Stories",
    prefix: /^gta:? liberty city stories( \(ps2\))?( mobile)?:?\s*/i, search: "GTA Liberty City Stories", keywords: ["liberty city stories", "gta lcs"],
    playlists: [
      { id: "PL-0Zm2zo61NXnd6t7dzaly5SWEtvmyca0", part: "story", order: true },
      { id: "PLQ3KzJPBsAHlKXDE-RW8pEOnR6JfhgoB9", part: "story" },
      { id: "PLQ3KzJPBsAHmDcXN153_aqrmTBgzKiC2X", part: "side", extras: true }
    ] },
  { id: "vice-city-stories", name: "GTA: Vice City Stories", wiki: "Missions in GTA Vice City Stories",
    prefix: /^gta vice city stories\s*/i, search: "GTA Vice City Stories", keywords: ["vice city stories", "gta vcs"],
    playlists: [
      { id: "PL-0Zm2zo61NXBqHDbmSh9l8GCrE_oRTUl", part: "story", order: true },
      { id: "PL48D198267076A5EF", part: "side", extras: true }
    ] },
  { id: "gta-iv", name: "Grand Theft Auto IV", wiki: "Missions in GTA IV",
    prefix: /^gta (4|iv)\s*/i, search: "GTA 4", keywords: ["gta 4", "gta iv", "grand theft auto iv", "grand theft auto 4"],
    playlists: [{ id: "PLQ3KzJPBsAHkMJWvYcco1fXsR3JhMRSjm", part: "story", order: true }] },
  { id: "lost-and-damned", name: "The Lost and Damned", wiki: "Missions in TLAD",
    prefix: /^gta:? the lost and damned\s*/i, search: "GTA The Lost and Damned", keywords: ["lost and damned", "tlad"],
    playlists: [{ id: "PLQ3KzJPBsAHkJ5xZPYa5PkN42Kbbz7dwB", part: "story", order: true }] },
  { id: "ballad-gay-tony", name: "The Ballad of Gay Tony", wiki: "Missions in TBOGT",
    prefix: /^gta:? the ballad of gay tony\s*/i, search: "GTA The Ballad of Gay Tony", keywords: ["ballad of gay tony", "tbogt"],
    playlists: [
      { id: "PL66B7A2BB2B106E05", part: "story", order: true },
      { id: "PLC562CD86BDA1D6D5", part: "side", extras: true }
    ] },
  { id: "chinatown-wars", name: "GTA: Chinatown Wars", wiki: "Missions in GTA Chinatown Wars",
    prefix: /^gta chinatown wars\s*/i, search: "GTA Chinatown Wars", keywords: ["chinatown wars"],
    playlists: [
      { id: "PLQ3KzJPBsAHmSBXe_LusHbIpnOZoi2SUy", part: "story", order: true },
      { id: "PL7E9EB0FCCE99E20D", part: "side", extras: true }
    ] },
  { id: "gta-v", name: "Grand Theft Auto V", wiki: "Missions in GTA V",
    prefix: /^gta (5|v)( ps5| pc)?\s*/i, search: "GTA 5", keywords: ["gta 5", "gta v", "grand theft auto v", "grand theft auto 5"],
    playlists: [
      { id: "PLQ3KzJPBsAHnNmaulPFn2hWw0Lw6p7_h1", part: "story", order: true },
      { id: "PLQ3KzJPBsAHmYsPHuwVmunI0gwFanLLDh", part: "side", extras: true }
    ] },
  { id: "gta-online", name: "GTA Online", wiki: "Missions in GTA Online", defaultPart: "contact", noSide: true, maxSearch: 160,
    prefix: /^gta online:?\s*/i, search: "GTA Online", keywords: ["gta online", "gta 5 online", "gta v online"],
    playlists: [
      { id: "PLQ3KzJPBsAHlIT-8YtVjN-5aJGd3fvJ3o", part: "contact", order: true },
      { id: "PLQ3KzJPBsAHl6DzV3l8uzfTW7oJkkRc5c", part: "heist", extras: true, group: "Heists" },
      { id: "PLQ3KzJPBsAHkNYZgt16SUzA4iFQbDmO1U", part: "heist", extras: true, group: "The Doomsday Heist" },
      { id: "PLQ3KzJPBsAHlEKnOhfF9Gq-TAbWG3Xsfs", part: "heist", extras: true, group: "The Diamond Casino Heist" },
      { id: "PLQ3KzJPBsAHkBTt-LMO-b-xP3CFO3y-Wm", part: "heist", extras: true, group: "The Cayo Perico Heist" },
      { id: "PLRJ1gWQ7WzAI", part: "heist", extras: true, group: "The Kortz Center Heist" },
      { id: "PLQ3KzJPBsAHk1OJhGTJLCGEk5snTzm4qz", part: "heist", extras: true, group: "The Contract" },
      { id: "PLQ3KzJPBsAHk59U7Y-BTBS4Qw0lf8Mjfz", part: "heist", extras: true, group: "Los Santos Tuners" },
      { id: "PLQ3KzJPBsAHlNVT08seCywss3wor9RAiI", part: "contact" },
      { id: "PLQ3KzJPBsAHktSLssv1UaRn3exiMalZUf", part: "contact" },
      { id: "PLQ3KzJPBsAHku_KHlH7zchoqGSiBpGyzD", part: "heist", extras: true, group: "Mission Strands" }
    ] }
];

/* ------------------------------------------------------------------ rede + cache */
async function get(url, opts = {}, tries = 5) {
  let last;
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { ...opts, headers: { ...UA, ...(opts.headers || {}) } });
      if (r.status === 429 || r.status >= 500) throw new Error("HTTP " + r.status);
      return r;
    } catch (e) { last = e; await sleep(2500 * (i + 1)); }
  }
  throw last;
}
const cachePath = (kind, key) => CACHE && path.join(CACHE, kind, String(key).replace(/[^\w.-]+/g, "_").slice(0, 150) + ".json");
async function cached(kind, key, fn) {
  const file = cachePath(kind, key);
  if (file && fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, "utf8"));
  const value = await fn();
  if (file) { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, JSON.stringify(value)); }
  return value;
}
const walk = (o, fn) => { if (o && typeof o === "object") { fn(o); for (const k in o) walk(o[k], fn); } };
const initialData = (html) => { const m = html.match(/var ytInitialData = (\{.*?\});<\/script>/s); return m ? JSON.parse(m[1]) : null; };
const toSecs = (t) => String(t || "").split(":").map(Number).reduce((a, x) => a * 60 + (x || 0), 0);

/* ------------------------------------------------------------------ YouTube */
async function fetchPlaylist(id) {
  return cached("pl", id, async () => {
    const page = await (await get(`https://www.youtube.com/playlist?hl=en&gl=US&list=${id}`)).text();
    const key = (page.match(/"INNERTUBE_API_KEY":"([^"]+)"/) || [])[1];
    const ctx = page.match(/"INNERTUBE_CONTEXT":(\{.*?\}),"INNERTUBE_CONTEXT_CLIENT_NAME"/s);
    const data = initialData(page);
    if (!data) return { id, title: "", videos: [] };
    let title = "";
    walk(data, (o) => { if (!title && o.pageHeaderViewModel) title = o.pageHeaderViewModel.title?.dynamicTextViewModel?.text?.content || ""; });
    const videos = []; const seen = new Set();
    const grab = (d) => {
      let token = null;
      walk(d, (o) => {
        if (o.lockupViewModel && o.lockupViewModel.contentType !== "LOCKUP_CONTENT_TYPE_PLAYLIST") {
          const l = o.lockupViewModel;
          if (l.contentId && !seen.has(l.contentId)) {
            seen.add(l.contentId);
            let dur = ""; walk(l.contentImage, (x) => { if (x.thumbnailBadgeViewModel && !dur) dur = x.thumbnailBadgeViewModel.text; });
            let channel = ""; walk(l.metadata, (x) => { if (x.metadataParts && !channel) channel = x.metadataParts.map((p) => p.text?.content).filter(Boolean)[0] || ""; });
            videos.push({ id: l.contentId, title: l.metadata?.lockupMetadataViewModel?.title?.content || "", secs: toSecs(dur), channel });
          }
        }
        if (o.playlistVideoRenderer && !seen.has(o.playlistVideoRenderer.videoId)) {
          const v = o.playlistVideoRenderer; seen.add(v.videoId);
          videos.push({ id: v.videoId, title: (v.title?.runs || []).map((r) => r.text).join(""), secs: Number(v.lengthSeconds || 0), channel: v.shortBylineText?.runs?.[0]?.text || "" });
        }
        if (o.continuationCommand) token = o.continuationCommand.token;
      });
      return token;
    };
    let token = grab(data);
    for (let n = 0; token && key && ctx && n < 30; n++) {
      await sleep(500);
      const before = videos.length;
      const r = await (await get(`https://www.youtube.com/youtubei/v1/browse?key=${key}`, {
        method: "POST", headers: { "content-type": "application/json" },
        body: JSON.stringify({ context: JSON.parse(ctx[1]), continuation: token })
      })).json();
      token = grab(r);
      if (videos.length === before) break;
    }
    return { id, title, videos };
  });
}

async function searchYouTube(query) {
  return cached("search", query, async () => {
    await sleep(900);
    const html = await (await get(`https://www.youtube.com/results?hl=en&gl=US&search_query=${encodeURIComponent(query)}`)).text();
    const data = initialData(html);
    const out = [];
    walk(data, (o) => {
      if (!o.videoRenderer) return;
      const r = o.videoRenderer;
      out.push({ id: r.videoId, title: (r.title?.runs || []).map((x) => x.text).join(""), channel: r.ownerText?.runs?.[0]?.text || "", secs: toSecs(r.lengthText?.simpleText) });
    });
    return out;
  });
}

const embedCache = new Map();
async function embeddable(id) {
  if (embedCache.has(id)) return embedCache.get(id);
  const promise = cached("oembed", id, async () => {
    const r = await get(`https://www.youtube.com/oembed?format=json&url=${encodeURIComponent("https://www.youtube.com/watch?v=" + id)}`, {}, 3);
    return { ok: r.status === 200 };
  }).then((v) => v.ok).catch(() => false);
  embedCache.set(id, promise);
  return promise;
}

/* ------------------------------------------------------------------ GTA Wiki */
const WIKI_API = "https://gta.fandom.com/api.php";
async function wikiText(page) {
  return cached("wiki", page, async () => {
    const url = `${WIKI_API}?action=parse&prop=wikitext&redirects=1&format=json&page=${encodeURIComponent(page)}`;
    const j = await (await get(url)).json();
    return j.parse?.wikitext?.["*"] || "";
  });
}
async function wikiImages(files) {
  const map = {};
  const list = [...new Set(files.filter(Boolean))];
  for (let i = 0; i < list.length; i += 50) {
    const batch = list.slice(i, i + 50);
    const res = await cached("imageinfo", batch.join("|").slice(0, 120) + "_" + batch.length + "_" + i, async () => {
      const url = `${WIKI_API}?action=query&format=json&prop=imageinfo&iiprop=url&iiurlwidth=480&titles=${encodeURIComponent(batch.map((f) => "File:" + f).join("|"))}`;
      return (await get(url)).json();
    });
    const back = {};
    (res.query?.normalized || []).forEach((n) => { back[n.to] = n.from; });
    Object.values(res.query?.pages || {}).forEach((p) => {
      const info = p.imageinfo && p.imageinfo[0];
      if (!info) return;
      const original = (back[p.title] || p.title).replace(/^File:/, "");
      map[original] = info.thumburl || info.url;
    });
  }
  return map;
}

const TEMPLATE_NAMES = { 1: "GTA", 2: "GTA 2", III: "GTA III", VC: "GTA Vice City", SA: "GTA San Andreas", LCS: "GTA Liberty City Stories", VCS: "GTA Vice City Stories", IV: "GTA IV", TLAD: "The Lost and Damned", TBOGT: "The Ballad of Gay Tony", CW: "GTA Chinatown Wars", V: "GTA V", O: "GTA Online", L69: "GTA London 1969", L61: "GTA London 1961", A: "GTA Advance" };
const cleanMarkup = (value = "") => String(value)
  .replace(/<ref[^>]*\/>/gi, "").replace(/<ref[^>]*>[\s\S]*?<\/ref>/gi, "")
  .replace(/<sup>[\s\S]*?<\/sup>/gi, "")
  .replace(/\[\[:?(?:File|Image|Category):[^\]]*\]\]/gi, "")
  .replace(/\{\{For\|[^{}]*?\|(?:mystery)?([A-Za-z]+)\}\}/g, (_, n) => n.charAt(0).toUpperCase() + n.slice(1))
  .replace(/\{\{(?:HUDIcons|Radar|Icon|Spoiler|Disambiglink)[^{}]*\}\}/gi, "")
  .replace(/\{\{([^{}|]+)\}\}/g, (_, n) => TEMPLATE_NAMES[n.trim()] || "")
  .replace(/\{\{[^{}]*\|([^{}|]+)\}\}/g, "$1")
  .replace(/\[\[([^\]|]+)\|([^\]]*)\]\]/g, "$2")
  .replace(/\[\[([^\]]+)\]\]/g, "$1")
  .replace(/\[https?:[^\s\]]+\s([^\]]+)\]/g, "$1")
  .replace(/<br\s*\/?\s*>/gi, " ")
  .replace(/<[^>]+>/g, "")
  .replace(/'{2,}/g, "")
  .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
  .replace(/\s+/g, " ")
  .replace(/^[=\s]+|[=\s]+$/g, "")
  .trim();
const norm = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
  .replace(/&amp;/g, "&").replace(/&/g, " and ").replace(/['’`´]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const JUNK_LINK = /^(money|\$|playstation.*|pc|xbox.*|grand theft auto.*|gta online|rockstar editor|director mode|n\/a|none|safehouse|ammu-nation)$/i;
const fileIn = (s) => { const m = String(s).match(/\[\[:?(?:File|Image):([^\]|]+)/i); return m ? m[1].trim() : ""; };
const linksIn = (s) => [...String(s).replace(/\[\[:?(?:File|Image|Category):[^\]]*\]\]/gi, "").matchAll(/\[\[([^\]|]+)(?:\|([^\]]*))?\]\]/g)]
  .map((m) => ({ target: m[1].trim(), label: cleanMarkup(m[2] || m[1]) }))
  .filter((l) => l.label && !JUNK_LINK.test(l.label) && !/^(category|wikipedia|w):/i.test(l.target));
const stripAttrs = (c) => {
  const m = String(c).match(/^\s*((?:[a-z-]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s|]+)\s*)+)\|(?!\|)([\s\S]*)$/i);
  return (m ? m[2] : String(c)).trim();
};
const shortDesc = (s) => {
  let t = cleanMarkup(String(s || "").replace(/^\s*\*+\s*/gm, "")).replace(/\s\*\s?/g, " ").trim();
  if (/^(n\/a|-|none|tba)?$/i.test(t)) return "";
  if (t.length <= 260) return t;
  const cut = t.slice(0, 260);
  const dot = cut.lastIndexOf(". ");
  return dot > 110 ? cut.slice(0, dot + 1) : cut.replace(/\s+\S*$/, "") + "…";
};
const STOP = /^(navigation|trivia|see also|notes?|references|gallery|mission tree|timetable|soundtracks?|changes|description|rewards|video walkthrough|videos?|removed missions|contents)$/i;
/* Os títulos chegam aqui já sem o sufixo "Missions" ("Side Missions" → "Side"). */
const SIDE = /(^|\W)(side|optional|other)(\W|$)|off-road|remote controlled|races|stadium|schools|vice street racer|sparrow|strangers and freaks|property management|flight school|friedlander|assassinations|random|vehicle challenge|empire building|odd jobs/i;
const GENERIC = /(phone|phonebox|vehicle|ending|hidden|walkie|introduction|chapter|story|main|side|other|races?|schools?|asset|stadium|missions?|off-road|remote|sparrow|empire|heists?$)/i;
const EMPTY = { text: "", proper: false };

function headingInfo(raw) {
  const noFiles = String(raw).replace(/\[\[:?(?:File|Image):[^\]]*\]\]/gi, "");
  let text = cleanMarkup(noFiles).replace(/\s+Missions?$/i, "").trim();
  const linked = /\[\[|\{\{For\|/.test(noFiles);
  return { text, proper: linked && !GENERIC.test(text) };
}

function parseWiki(text, cfg) {
  const entries = [];
  const seen = new Set();
  let area = EMPTY, sub = EMPTY, subsub = EMPTY;
  let skipArea = true, skipSub = false;
  let inTable = false, headers = [], row = null, lastWasHeader = false;

  const add = (entry) => {
    if (!entry || !entry.name) return;
    const key = norm(entry.name) + "|" + norm(entry.page);
    if (seen.has(key)) return;
    seen.add(key);
    const scope = [area, sub, subsub];
    const proper = scope.filter((s) => s.proper && s.text);
    const generic = scope.filter((s) => !s.proper && s.text && !/^(main )?story$|^main$/i.test(s.text));
    const who = proper.length ? proper[proper.length - 1].text : "";
    const where = area.proper && area.text !== who ? area.text : "";
    const label = generic.length ? generic[generic.length - 1].text : "";
    const part = !cfg.noSide && SIDE.test(scope.map((s) => s.text).join(" | ")) ? "side" : (cfg.defaultPart || "story");
    entries.push({ ...entry, who, where, label, part, wikiIdx: entries.length });
  };

  const titleEntry = (cell) => {
    const image = fileIn(cell);
    const links = linksIn(cell);
    let name = links.length ? links[0].label : cleanMarkup(cell);
    const page = (links.length ? links[0].target : name).replace(/#.*$/, "").replace(/_/g, " ");
    name = name.replace(/\s+\/\s+.+$/, "").trim();
    if (!name || name.length > 80 || /^(title|mission)$/i.test(name)) return null;
    return { name, page, image };
  };

  const flushRow = () => {
    const cells = row; row = null;
    if (!cells || !cells.length || skipArea || skipSub) return;
    const hdr = headers.map((h) => cleanMarkup(h).toLowerCase());
    const ti = hdr.findIndex((h) => /^(title|mission|mission name|name)\b/.test(h));
    const di = hdr.findIndex((h) => /^description/.test(h));
    if (ti < 0) {
      if (!cfg.matrix || !hdr.length) return;
      cells.forEach((cell) => linksIn(cell).forEach((l) => add({ name: l.label.replace(/\s+\/\s+.+$/, "").trim(), page: l.target, image: "", desc: "" })));
      return;
    }
    const entry = titleEntry(cells[ti] || "");
    if (!entry) return;
    entry.desc = di >= 0 ? shortDesc(cells[di]) : "";
    add(entry);
  };

  for (const raw of String(text).split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (inTable) {
      if (/^\|\}/.test(line)) { flushRow(); inTable = false; continue; }
      if (/^\{\|/.test(line) || /^\|\+/.test(line)) continue;
      if (/^\|-/.test(line)) { flushRow(); row = []; lastWasHeader = false; continue; }
      if (/^!/.test(line)) { line.replace(/^!/, "").split("!!").forEach((h) => headers.push(stripAttrs(h))); lastWasHeader = true; continue; }
      if (/^\|/.test(line)) {
        if (!row) row = [];
        line.replace(/^\|\|?/, "").split("||").forEach((c) => row.push(stripAttrs(c)));
        lastWasHeader = false;
        continue;
      }
      if (lastWasHeader && headers.length) { headers[headers.length - 1] += " " + line; continue; }
      if (row && row.length) row[row.length - 1] += "\n" + line;
      continue;
    }
    if (/^\{\|/.test(line)) { inTable = true; headers = []; row = null; lastWasHeader = false; continue; }
    const h = line.match(/^(={2,6})\s*(.+?)\s*\1\s*$/);
    if (h) {
      const level = h[1].length;
      const info = headingInfo(h[2]);
      if (level === 2) { area = info; sub = EMPTY; subsub = EMPTY; skipArea = STOP.test(info.text); skipSub = false; }
      else if (level === 3) { sub = info; subsub = EMPTY; skipSub = STOP.test(info.text); }
      else { subsub = info; }
      continue;
    }
    if (skipArea || skipSub) continue;
    if (/^;/.test(line)) { subsub = headingInfo(line.replace(/^;+/, "")); continue; }
    if (/^('''.*'''|\[\[[^\]]+\]\])$/.test(line) && !/File:|target score/i.test(line)) { subsub = headingInfo(line); continue; }
    const b = line.match(/^(\*+)\s*(.*)$/);
    if (b) {
      const content = b[2];
      const links = linksIn(content);
      if (!links.length) continue;
      const start = content.search(/\[\[(?!:?(?:File|Image):)/i);
      const close = start >= 0 ? content.indexOf("]]", start) : -1;
      let rest = cleanMarkup(close >= 0 ? content.slice(close + 2) : "").replace(/^[^\p{L}\p{N}(]*/u, "");
      const loc = rest.match(/^\(([^)]*)\)\s*/);
      if (loc) rest = rest.slice(loc[0].length);
      rest = rest.replace(/^[–—:\-]\s*/, "");
      add({ name: links[0].label.replace(/\s+\/\s+.+$/, "").trim(), page: links[0].target.replace(/#.*$/, ""), image: "", desc: shortDesc(rest) });
    }
  }
  return entries;
}

/* ------------------------------------------------------------------ títulos dos vídeos */
const NOISE_TAIL = /^(hd|1080p|720p|4k.*|60fps|100%|\d+%|solo.*|full movie|pc|ps2|ps4|ps5|psp|xbox.*|mobile|ipad|redux|remastered|criminal mastermind.*|elite.*|hard.*|.*trophy.*|.*achievement.*|.*walkthrough.*|.*players?\b.*|.*medal.*|(first|second|third|fourth|fifth|bonus) mission|winning.*|losing.*|alternate method|.*payout.*|.*stealth.*|all missions|.*difficulty.*|los santos drug wars|cutscene|no spoiler|.*edition.*|part \d+.*|\d+ of \d+)$/i;
const MARKER = /^((intro(duction)?\s*&\s*)?((final|bonus)\s+)?mission\s*#?\s*\d*|intro(duction)?|walkthrough|ipad walkthrough|random character|mission|(ending\s*\/\s*)?final mission(\s*#?\s*\d+)?|final mission\s*\/\s*[\w ]+ending|ending|heist\s*#\s*\d+|side mission)$/i;
function parseVideoTitle(title, cfg) {
  let t = String(title).replace(/\s+/g, " ").trim();
  const tails = [];
  let m;
  while ((m = t.match(/\s*[[(]([^[\]()]*)[\])]\s*$/))) { tails.unshift(m[1].trim()); t = t.slice(0, m.index).trim(); }
  const hints = tails.filter((x) => x && !NOISE_TAIL.test(x));
  const aliases = /intro(duction)?\s*&/i.test(t) ? ["Introduction", "In the Beginning"] : [];
  let segs = t.split(/\s+[-–—]\s+|\s+\\\s+/).map((s) => s.trim()).filter(Boolean);
  const groups = [];
  segs = segs.map((s, i) => {
    if (i > 0) return s;
    let rest = s.replace(cfg.prefix, "").replace(/^(gta|grand theft auto)\b[^:]*?:\s*/i, "").trim();
    return rest;
  }).map((s) => s.replace(/\s*mission\s*#\s*\d+\s*:?\s*/i, (x) => (s.trim() === x.trim() ? "" : " · ")).replace(/^\s*·\s*|\s*·\s*$/g, "").trim()).filter(Boolean);
  segs = segs.filter((s, i) => !(MARKER.test(s) && (i < segs.length - 1 || segs.length > 1)));
  if (!segs.length) return { name: "", group: "", aliases, hints };
  let name = segs[segs.length - 1];
  groups.push(...segs.slice(0, -1));
  let where = "";
  if (cfg.splitIn) { const inm = name.match(/^(.*?)\s+in\s+(.+)$/i); if (inm) { name = inm[1]; where = inm[2]; } }
  return { name, group: groups.join(" · ") || hints.join(" · "), where, aliases, hints };
}

const tokens = (s) => norm(s).split(" ").filter((w) => w && !/^(gta|grand|theft|auto|walkthrough|hd|1080p|4k|60fps|mission|missions|intro|the|a|of|and|in|pc|ps2|mobile|ipad|gold|medal|100|\d{4})$/.test(w));
const sameSet = (a, b) => a.length && a.length === b.length && a.every((x) => b.includes(x));

function scoreMatch(entry, video) {
  const ne = norm(entry.name);
  const np = norm(entry.page.replace(/\s*\([^)]*\)\s*$/, ""));
  const nv = norm(video.parsed.name);
  if (!ne || !nv) return 0;
  if (nv === ne || nv === np) return 100;
  if (video.parsed.aliases.some((a) => norm(a) === ne)) return 90;
  if (nv.split(/ and |,/).length > 1 && video.parsed.name.split(/\s*,\s*|\s+&\s+|\s+and\s+|\s*\/\s*/).some((p) => norm(p) === ne)) return 92;
  const words = ne.split(" ");
  if (words.length >= 2 && ` ${nv} `.includes(` ${ne} `)) return 85;
  /* "Crims On Wings - Checkpoint Race": o nome da missão fica no trecho do meio */
  const ng = norm(video.parsed.group);
  if (ng && (ng === ne || String(video.parsed.group).split(" · ").some((g) => norm(g) === ne))) return 88;
  if (ng && words.length >= 2 && ` ${ng} `.includes(` ${ne} `)) return 82;
  const vt = tokens(`${video.parsed.name} ${video.parsed.hints.join(" ")}`);
  if (sameSet(tokens(entry.page), vt) || sameSet(tokens(entry.name), vt)) return 95;
  const et = tokens(entry.name);
  if (et.length >= 2 && et.every((x) => vt.includes(x)) && vt.length - et.length <= 1) return 80;
  return 0;
}

async function searchFor(cfg, entry) {
  const query = `${cfg.search} "${entry.name}" mission no commentary`;
  let results = [];
  try { results = await searchYouTube(query); } catch (e) { return null; }
  const ne = norm(entry.name);
  const ok = results.filter((r) => {
    const nt = ` ${norm(r.title)} `;
    return r.secs >= 25 && r.secs <= 3 * 3600 && nt.includes(` ${ne} `) &&
      cfg.keywords.some((k) => nt.includes(` ${norm(k)} `)) && !BAD_VIDEO.test(r.title);
  }).sort((a, b) => Number(/definitive|remaster/i.test(a.title)) - Number(/definitive|remaster/i.test(b.title)));
  const picks = [...ok.filter((r) => TRUSTED.test(r.channel)), ...ok.filter((r) => !TRUSTED.test(r.channel) && /no\s*-?\s*commentary|nocommentary/i.test(r.title))];
  for (const pick of picks) if (await embeddable(pick.id)) return pick;
  return null;
}

const videoOut = (v, via) => ({ id: v.id, vt: v.title, ch: v.channel, secs: v.secs || 0, via });

async function buildGame(cfg) {
  const started = Date.now();
  const playlists = [];
  for (const pl of cfg.playlists) {
    const data = await fetchPlaylist(pl.id);
    playlists.push({ ...pl, title: data.title, videos: data.videos.map((v, i) => ({ ...v, pos: playlists.length * 10000 + i, pl, parsed: parseVideoTitle(v.title, cfg) })) });
  }
  const videos = playlists.flatMap((p) => p.videos).filter((v) => v.title && !/^\[(private|deleted)/i.test(v.title));
  const entries = cfg.mode === "playlist" ? [] : parseWiki(await wikiText(cfg.wiki), cfg);

  const used = new Set();
  for (const entry of entries) {
    entry.candidates = videos
      .map((v) => ({ v, s: scoreMatch(entry, v) }))
      .filter((x) => x.s >= 80)
      .sort((a, b) => b.s - a.s || Number(!a.v.pl.order) - Number(!b.v.pl.order) || a.v.pos - b.v.pos);
    entry.candidates.forEach((c) => used.add(c.v.id));
  }

  /* vídeos que viram itens próprios (fora da lista do wiki) */
  const extras = videos.filter((v) => v.pl.extras && !used.has(v.id) && v.parsed.name && !JUNK_EXTRA.test(v.title));
  const extraSeen = new Set();
  const extraEntries = [];
  for (const v of extras) {
    const key = norm(`${v.parsed.group}|${v.parsed.name}|${v.parsed.where}|${v.parsed.hints.join(" ")}`);
    if (extraSeen.has(key)) continue;
    extraSeen.add(key);
    extraEntries.push({
      name: v.parsed.name, page: "", image: "", desc: "",
      who: v.pl.group ? (v.parsed.group ? `${v.pl.group} · ${v.parsed.group}` : v.pl.group) : v.parsed.group,
      where: v.parsed.where || "", label: "", part: v.pl.part, pos: v.pos,
      candidates: [{ v, s: 100 }], extra: true
    });
  }

  /* posição: missões casadas com a playlist principal seguem a ordem do vídeo;
   * as demais ficam logo depois da vizinha anterior na lista do wiki. */
  const byPart = {};
  entries.forEach((e) => { (byPart[e.part] = byPart[e.part] || []).push(e); });
  Object.values(byPart).forEach((list) => {
    let last = -1, k = 0;
    list.forEach((e) => {
      const primary = e.candidates.find((c) => c.v.pl.order);
      if (primary) { e.pos = primary.v.pos + e.wikiIdx * 1e-4; last = e.pos; k = 0; }
      else { k += 1; e.pos = last + k * 1e-3; }
    });
  });

  /* vídeo final: primeiro candidato incorporável; sem candidato → busca */
  let searches = 0;
  const all = [...entries, ...extraEntries];
  for (const e of all) {
    for (const c of e.candidates) {
      if (await embeddable(c.v.id)) { e.video = videoOut(c.v, "playlist"); break; }
    }
    if (!e.video && !e.extra && searches < (cfg.maxSearch || 90)) {
      searches += 1;
      const found = await searchFor(cfg, e);
      if (found) e.video = videoOut(found, "search");
    }
  }

  /* "Ending"/"Introduction" dos capítulos 2D são cenas de pontuação, não missões: só ficam se houver vídeo */
  for (let i = all.length - 1; i >= 0; i--) if (/^(ending|introduction|intro)$/i.test(all[i].name) && !all[i].video) all.splice(i, 1);
  const images = await wikiImages(all.map((e) => e.image));
  const PART_ORDER = { story: 0, contact: 1, heist: 2, side: 3 };
  all.sort((a, b) => (PART_ORDER[a.part] - PART_ORDER[b.part]) || a.pos - b.pos);
  const counters = {};
  const missions = all.map((e) => {
    counters[e.part] = (counters[e.part] || 0) + 1;
    const out = { n: counters[e.part], name: e.name, part: e.part };
    if (e.page) out.page = e.page;
    if (e.who) out.who = e.who;
    if (e.where) out.area = e.where; /* "where" é campo traduzido pelo i18n; topônimo não se traduz */
    if (e.label) out.label = e.label;
    if (e.desc) out.description = e.desc;
    if (e.image && images[e.image]) out.image = images[e.image];
    if (e.video) out.video = e.video;
    return out;
  });
  const withVideo = missions.filter((m) => m.video).length;
  const viaSearch = missions.filter((m) => m.video && m.video.via === "search").length;
  process.stdout.write(`${cfg.id}: ${missions.length} missões · ${withVideo} com vídeo (${viaSearch} por busca) · ${searches} buscas · ${((Date.now() - started) / 1000).toFixed(0)}s\n`);
  const missing = missions.filter((m) => !m.video).map((m) => `${m.part}:${m.name}`);
  if (missing.length) process.stdout.write(`   sem vídeo: ${missing.slice(0, 40).join(" | ")}${missing.length > 40 ? " …" : ""}\n`);
  return {
    id: cfg.id, name: cfg.name,
    wiki: cfg.wiki ? `https://gta.fandom.com/wiki/${cfg.wiki.replace(/ /g, "_")}` : "",
    playlists: playlists.map((p) => ({ id: p.id, name: p.title, part: p.part, ch: (p.videos.find((v) => v.channel) || {}).channel || "" })),
    total: missions.length, withVideo, missions
  };
}

(async () => {
  const started = Date.now();
  let previous = null;
  try { previous = JSON.parse(fs.readFileSync(OUT, "utf8")); } catch (e) { previous = null; }
  const games = [];
  for (const cfg of GAMES) {
    if (ONLY.size && !ONLY.has(cfg.id)) {
      const kept = previous && (previous.games || []).find((g) => g.id === cfg.id);
      if (kept) games.push(kept);
      continue;
    }
    try { games.push(await buildGame(cfg)); }
    catch (e) {
      process.stdout.write(`${cfg.id}: FALHOU (${e.message}) — mantendo a versão anterior\n`);
      const kept = previous && (previous.games || []).find((g) => g.id === cfg.id);
      if (kept) games.push(kept);
    }
  }
  const total = games.reduce((a, g) => a + g.total, 0);
  const withVideo = games.reduce((a, g) => a + g.withVideo, 0);
  const out = {
    generatedAt: new Date().toISOString(),
    note: "Mission lists come from the GTA Wiki. Videos are no-commentary walkthroughs embedded from YouTube (mostly GTA Series Videos); each one is credited to its channel.",
    total, withVideo, games
  };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(out));
  process.stdout.write(`OK: ${total} missões, ${withVideo} com vídeo, ${games.length} jogos em ${((Date.now() - started) / 1000).toFixed(0)}s -> live/missions.json (${(fs.statSync(OUT).size / 1024).toFixed(0)} KB)\n`);
})().catch((e) => { console.error(e); process.exit(1); });
