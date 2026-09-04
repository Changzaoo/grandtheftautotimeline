/* ============ NÚCLEO DE I18N (Urban Universe — Dossiê GTA) ============
 * Posição no bundle: DEPOIS dos data-*.jsx e ANTES de todas as sections-*.jsx
 * (ver SOURCES em build.js). Este módulo é o dono canônico de:
 *   window.I18N_LANGS      — os 13 idiomas oficiais da Rockstar/GTA
 *   window.I18N_CATALOGS   — catálogos de tradução por código de idioma
 *   window.__lang          — idioma ativo (padrão "pt-BR")
 *   window.__t / __tt      — lookup de chave com fallback pt-BR inline
 *   window.__setLang       — troca de idioma (lazy-load de i18n/<code>.js)
 *   window.__i18nVersion   — contador que invalida a árvore React
 *   useI18n()              — hook React { lang, version, setLang }
 *   <VILanguagePicker/>    — dropdown de idiomas (CSS: .vi-lang-* em theme-vi.css)
 *
 * pt-BR NÃO tem catálogo: todo texto visível do código já é escrito em
 * português como fallback inline de __t/__tt — o catálogo "pt-BR" fica {}.
 *
 * Formato dos catálogos externos — arquivo i18n/<code>.js:
 *   (function(){
 *     window.I18N_CATALOGS = window.I18N_CATALOGS || {};
 *     window.I18N_CATALOGS["fr"] = { "chave": "valor", ... };
 *   })();
 * Esquema de chaves documentado em i18n/KEYS.md; a lista canônica de chaves
 * será extraída de i18n/en.js (a ser gerado na próxima fase).
 */

/* Helpers curtos compartilhados (guarda em window: outros módulos declaram o
 * mesmo par e o escopo do bundle é único — nunca usar const aqui). */
window.__T = window.__T || ((k, f) => (window.__t ? window.__t(k, f) : f));
window.__TT = window.__TT || ((p, id, field, fb) => (window.__tt ? window.__tt(p, id, field, fb) : fb));

/* ---------- 1. Idiomas oficiais (nomes NATIVOS, ordem do menu) ---------- */
window.I18N_LANGS = [
  { code: "pt-BR", name: "Português (Brasil)" },
  { code: "en",    name: "English" },
  { code: "fr",    name: "Français" },
  { code: "it",    name: "Italiano" },
  { code: "de",    name: "Deutsch" },
  { code: "es",    name: "Español (España)" },
  { code: "es-MX", name: "Español (México)" },
  { code: "pl",    name: "Polski" },
  { code: "ru",    name: "Русский" },
  { code: "ja",    name: "日本語" },
  { code: "ko",    name: "한국어" },
  { code: "zh-CN", name: "中文（简体）" },
  { code: "zh-TW", name: "中文（繁體）" }
];

/* ---------- 2. Catálogos ---------- */
window.I18N_CATALOGS = window.I18N_CATALOGS || {};
if (!window.I18N_CATALOGS["pt-BR"]) window.I18N_CATALOGS["pt-BR"] = {}; /* pt-BR = fallbacks inline */

const i18nDefaultLang = "pt-BR";
const i18nStorageKey = "gta.lang";

const i18nFindLang = (code) =>
  window.I18N_LANGS.find((item) => item.code === code) || null;
const i18nIsValid = (code) => !!i18nFindLang(code);
/* pt-BR está sempre "pronto"; os demais dependem do catálogo já registrado. */
const i18nCatalogReady = (code) =>
  code === i18nDefaultLang || !!window.I18N_CATALOGS[code];
/* Disponível = tem catálogo em disco (window.I18N_AVAILABLE, gerado pelo build)
 * ou já foi carregado nesta sessão. Idiomas ainda sem tradução aparecem no
 * menu como "em breve" e desabilitados, em vez de virarem cliques mortos. */
const i18nIsAvailable = (code) =>
  code === i18nDefaultLang ||
  (Array.isArray(window.I18N_AVAILABLE) && window.I18N_AVAILABLE.indexOf(code) !== -1) ||
  i18nCatalogReady(code);

/* ---------- 4/5. Lookup ---------- */
window.__t = function (key, fallback) {
  const catalog = window.I18N_CATALOGS[window.__lang];
  const value = catalog ? catalog[key] : undefined;
  if (typeof value === "string" && value !== "") return value;
  /* Chave nomeada ausente do catálogo de UI: tenta o catálogo de CONTEÚDO pela
   * hash do próprio texto pt-BR. É o que faz um __T("vi.cat.loading", "Abrindo
   * o arquivo…") ainda traduzir quando ninguém escreveu essa chave à mão. */
  if (catalog && typeof fallback === "string" && fallback.trim() && key.charAt(0) !== "c") {
    const byHash = catalog["c" + i18nHash(fallback.trim())];
    if (typeof byHash === "string" && byHash !== "") {
      i18nRemember(byHash, fallback);
      return byHash;
    }
  }
  return fallback;
};

window.__tt = function (prefix, id, field, fallback) {
  return window.__t(prefix + "." + id + "." + field, fallback);
};

/* ---------- 5b. Tradução do CONTEÚDO (dados do bundle + JSON ao vivo) ----------
 * O conteúdo do dossiê (personagens, cidades, jogos, glossário…) vive em
 * estruturas de dados renderizadas cruas. Para traduzir 100% do site sem editar
 * centenas de pontos de render, traduzimos por MUTAÇÃO in-place: cada string de
 * um campo de EXIBIÇÃO vira a tradução da chave "c"+hash(texto original).
 * Campos de LÓGICA (id, gameId, universe, URLs, datas, cor, mídia) ficam
 * intactos. Como a App remonta na troca de idioma (key=version), ela relê os
 * dados já traduzidos.
 *
 * IMPORTANTE: os data-*.jsx declaram `const universeData = …` no topo do bundle.
 * Em script clássico, `const` de topo NÃO vira propriedade de window — por isso
 * o registro abaixo referencia os identificadores DIRETAMENTE (mesmo escopo de
 * script), com typeof para tolerar um módulo ausente. Ler window["universeData"]
 * devolvia undefined e a tradução de conteúdo nunca era aplicada no navegador. */
function i18nHash(str) {
  var h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (var i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507); h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507); h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}
window.__i18nHash = i18nHash;
window.__i18nKey = function (text) { return "c" + i18nHash(String(text).trim()); };

/* __TF: texto com placeholders {0},{1}… vindo de template literals do JSX
 * (gerado pelo plugin i18n/babel-plugin-autotext.js). */
window.__TF = function (key, pattern, values) {
  var tpl = window.__t(key, pattern);
  return String(tpl).replace(/\{(\d+)\}/g, function (m, i) {
    var v = values[Number(i)];
    return v === undefined || v === null ? "" : String(v);
  });
};

/* Mapa reverso tradução -> original. As heurísticas do site que classificam por
 * PALAVRA (tons de badge, filtros de tipo de missão/veículo/arma) precisam do
 * texto original, senão deixam de casar quando o idioma muda. */
var i18nBackMap = new Map();
function i18nRemember(translated, original) {
  if (translated && original && translated !== original) i18nBackMap.set(translated, original);
}
/* __PT(valor): texto de origem (ou o próprio valor). Aceita string, array ou
 * objeto e mapeia recursivamente. */
window.__PT = function (v) {
  if (typeof v === "string") return i18nBackMap.get(v) || v;
  if (Array.isArray(v)) return v.map(window.__PT);
  if (v && typeof v === "object") {
    var o = {};
    for (var k in v) if (Object.prototype.hasOwnProperty.call(v, k)) o[k] = window.__PT(v[k]);
    return o;
  }
  return v;
};

/* Campos de EXIBIÇÃO traduzidos (allowlist — o resto passa intacto). */
var I18N_TR_FIELDS = new Set([
  "title","subtitle","heading","headline","subhead","kicker","lead","body",
  "summary","description","desc","overview","intro","importance","biography","bio",
  "storyArc","fate","role","details","detail","impact","contributions","narrativeImportance",
  "uncertainty","fullStory","developmentHistory","precisionNotes","relationships","totalLabel",
  "label","caption","alt","credit","definition","expanded","whyItMatters","note","notes",
  "quote","tagline","blurb","context","meaning","text","beats","protagonist","game","era",
  "status","coverage","brought","story","plot","trivia","aliases","tags",
  "highlights","facts","examples","importantEvents","systems","modes","businesses","themes",
  "enemies","allies","antagonists","leaders","supportingCharacters","characters","factions",
  "affiliations","districts","vehicles","relatedTerms","appearsIn","relatedGames","games",
  "features","points","bullets","items","modules","perks","objectives",
  /* --- campos que faltavam e deixavam blocos inteiros em português --- */
  "where","how","clues","theories","resolution","q","a","content","development","vibe",
  "protagonista","antagonistas","aliados","inimigos","visualStyle","certainty","rarity",
  "realWorldInspiration","characteristics","quoteSource","sub","occupation","kind","species",
  "genre","class","legacy","curiosity","curiosities","reason","result","verdict","evidence",
  "conclusion","period","scope","focus","goal","warning","type","category","universeAppearances",
  "weapons","animals","radio","locations","home","voice","manufacturer","source",
  "business","sizeNote","storyYear","subtitleNote","answer","question","hint","empty","cta"
]);
/* Campos NUNCA traduzidos (lógica, ids, URLs, mídia, datas). Vence a allowlist. */
var I18N_SKIP_FIELDS = new Set([
  /* NOMES PRÓPRIOS não se traduzem. "Leonida Keys" virava "Leonida Chaves" e
   * "Grassrivers" virava "Rios de grama" — além de errado, quebrava buscas e
   * casamentos por nome (a foto de cada região deixava de ser encontrada).
   * É também como a própria Rockstar localiza: topônimos e personagens ficam. */
  "name","nick",
  "id","gameId","url","src","href","image","page","pageTitle","apiPage","sourcePage",
  "officialSource","color","grad","icon","key","code","lang","editedAt","date","releaseDate",
  "releaseYear","year","dateLabel","priceBR","universe","tone","group","capacity"
]);

/* Registro dos dados do bundle: identificadores do MESMO escopo de script
 * (data-*.jsx vêm antes deste arquivo), com typeof para tolerar ausência. */
function i18nCollectData() {
  var reg = {};
  var put = function (name, value) { if (value && typeof value === "object") reg[name] = value; };
  put("universeData", typeof universeData !== "undefined" ? universeData : null);
  put("rockstarHistoryData", typeof rockstarHistoryData !== "undefined" ? rockstarHistoryData : null);
  put("rockstarPeopleData", typeof rockstarPeopleData !== "undefined" ? rockstarPeopleData : null);
  put("timelineChronologicalData", typeof timelineChronologicalData !== "undefined" ? timelineChronologicalData : null);
  put("releaseTimelineData", typeof releaseTimelineData !== "undefined" ? releaseTimelineData : null);
  put("gamesData", typeof gamesData !== "undefined" ? gamesData : null);
  put("charactersData", typeof charactersData !== "undefined" ? charactersData : null);
  put("citiesData", typeof citiesData !== "undefined" ? citiesData : null);
  put("factionsData", typeof factionsData !== "undefined" ? factionsData : null);
  put("developmentData", typeof developmentData !== "undefined" ? developmentData : null);
  put("onlineTimelineData", typeof onlineTimelineData !== "undefined" ? onlineTimelineData : null);
  put("onlineDlcData", typeof onlineDlcData !== "undefined" ? onlineDlcData : null);
  put("gta6FactsData", typeof gta6FactsData !== "undefined" ? gta6FactsData : null);
  put("connectionsData", typeof connectionsData !== "undefined" ? connectionsData : null);
  put("recommendedOrderData", typeof recommendedOrderData !== "undefined" ? recommendedOrderData : null);
  put("impactData", typeof impactData !== "undefined" ? impactData : null);
  put("glossaryData", typeof glossaryData !== "undefined" ? glossaryData : null);
  put("glossaryDetailData", typeof glossaryDetailData !== "undefined" ? glossaryDetailData : null);
  put("missionDossierData", typeof missionDossierData !== "undefined" ? missionDossierData : null);
  put("vehicleDossierData", typeof vehicleDossierData !== "undefined" ? vehicleDossierData : null);
  put("weaponDossierData", typeof weaponDossierData !== "undefined" ? weaponDossierData : null);
  put("dossierNavData", typeof dossierNavData !== "undefined" ? dossierNavData : null);
  put("dossierSourcesData", typeof dossierSourcesData !== "undefined" ? dossierSourcesData : null);
  put("CHARACTERS", typeof CHARACTERS !== "undefined" ? CHARACTERS : null);
  put("CITIES", typeof CITIES !== "undefined" ? CITIES : null);
  put("GAMES", typeof GAMES !== "undefined" ? GAMES : null);
  put("GANGS", typeof GANGS !== "undefined" ? GANGS : null);
  put("TIMELINE", typeof TIMELINE !== "undefined" ? TIMELINE : null);
  put("WEAPONS", typeof WEAPONS !== "undefined" ? WEAPONS : null);
  put("VEHICLES", typeof VEHICLES !== "undefined" ? VEHICLES : null);
  put("CLASSIFIED", typeof CLASSIFIED !== "undefined" ? CLASSIFIED : null);
  put("NAV", typeof NAV !== "undefined" ? NAV : null);
  put("PERSONAGENS_COMPLETOS", typeof PERSONAGENS_COMPLETOS !== "undefined" ? PERSONAGENS_COMPLETOS : null);
  put("CIDADES_COMPLETAS", typeof CIDADES_COMPLETAS !== "undefined" ? CIDADES_COMPLETAS : null);
  put("ORGANIZACOES_COMPLETAS", typeof ORGANIZACOES_COMPLETAS !== "undefined" ? ORGANIZACOES_COMPLETAS : null);
  put("UNIVERSOS_GTA", typeof UNIVERSOS_GTA !== "undefined" ? UNIVERSOS_GTA : null);
  put("GAMES_COMPLETE", typeof GAMES_COMPLETE !== "undefined" ? GAMES_COMPLETE : null);
  put("ROCKSTAR_HISTORY", typeof ROCKSTAR_HISTORY !== "undefined" ? ROCKSTAR_HISTORY : null);
  put("RADIOS", typeof RADIOS !== "undefined" ? RADIOS : null);
  put("ROLE_FILTERS", typeof ROLE_FILTERS !== "undefined" ? ROLE_FILTERS : null);
  /* Mapas de mídia: guardam alt/caption/credit/note exibidos nos cards. */
  put("officialMediaData", typeof officialMediaData !== "undefined" ? officialMediaData : null);
  put("officialMediaByGameId", typeof officialMediaByGameId !== "undefined" ? officialMediaByGameId : null);
  put("officialMediaByCharacterId", typeof officialMediaByCharacterId !== "undefined" ? officialMediaByCharacterId : null);
  put("officialMediaByCityId", typeof officialMediaByCityId !== "undefined" ? officialMediaByCityId : null);
  put("gtaWikiGameMediaById", typeof gtaWikiGameMediaById !== "undefined" ? gtaWikiGameMediaById : null);
  put("gtaWikiCharacterMediaById", typeof gtaWikiCharacterMediaById !== "undefined" ? gtaWikiCharacterMediaById : null);
  put("gtaWikiCityMediaById", typeof gtaWikiCityMediaById !== "undefined" ? gtaWikiCityMediaById : null);
  put("gtaWikiFactionMediaById", typeof gtaWikiFactionMediaById !== "undefined" ? gtaWikiFactionMediaById : null);
  put("gtaWikiUniverseMediaById", typeof gtaWikiUniverseMediaById !== "undefined" ? gtaWikiUniverseMediaById : null);
  put("gtaWikiGlossaryMediaByTerm", typeof gtaWikiGlossaryMediaByTerm !== "undefined" ? gtaWikiGlossaryMediaByTerm : null);
  put("glossaryDetailsByTerm", typeof glossaryDetailsByTerm !== "undefined" ? glossaryDetailsByTerm : null);
  put("rockstarHistoryMedia", typeof rockstarHistoryMedia !== "undefined" ? rockstarHistoryMedia : null);
  put("gtaOnlineTimelineMedia", typeof gtaOnlineTimelineMedia !== "undefined" ? gtaOnlineTimelineMedia : null);
  put("gtaOnlineDlcMediaById", typeof gtaOnlineDlcMediaById !== "undefined" ? gtaOnlineDlcMediaById : null);
  put("vehicleMediaById", typeof vehicleMediaById !== "undefined" ? vehicleMediaById : null);
  put("weaponMediaById", typeof weaponMediaById !== "undefined" ? weaponMediaById : null);
  put("cityGalleryMediaById", typeof cityGalleryMediaById !== "undefined" ? cityGalleryMediaById : null);
  put("cityUniverseGalleryMediaById", typeof cityUniverseGalleryMediaById !== "undefined" ? cityUniverseGalleryMediaById : null);
  put("curatedCityMediaById", typeof curatedCityMediaById !== "undefined" ? curatedCityMediaById : null);
  put("refinedCityGalleryMediaById", typeof refinedCityGalleryMediaById !== "undefined" ? refinedCityGalleryMediaById : null);
  put("refinedCityUniverseGalleryMediaById", typeof refinedCityUniverseGalleryMediaById !== "undefined" ? refinedCityUniverseGalleryMediaById : null);
  put("VI_DATA", window.VI_DATA);
  put("EASTER_EGGS_DATA", window.EASTER_EGGS_DATA);
  put("MYSTERIES_DATA", window.MYSTERIES_DATA);
  return reg;
}

var i18nData = i18nCollectData();
var i18nDataOriginals = null; /* snapshot da fonte, capturado no 1º apply */

/* Percorre `live` espelhando `orig` (snapshot da fonte) e troca in-place cada
 * campo de exibição pela tradução. Traduzir sempre a partir do snapshot evita
 * traduzir uma tradução ao alternar idiomas. */
function i18nWalkInto(live, orig, field, tr) {
  if (Array.isArray(orig)) {
    for (var i = 0; i < orig.length; i++) {
      if (typeof orig[i] === "string") {
        if (field && I18N_TR_FIELDS.has(field) && typeof live[i] === "string") live[i] = tr(orig[i]);
      } else if (orig[i] && typeof orig[i] === "object" && live[i]) i18nWalkInto(live[i], orig[i], field, tr);
    }
    return;
  }
  if (orig && typeof orig === "object") {
    for (var k in orig) {
      if (!Object.prototype.hasOwnProperty.call(orig, k)) continue;
      if (I18N_SKIP_FIELDS.has(k)) continue;
      var ov = orig[k];
      if (typeof ov === "string") {
        if (I18N_TR_FIELDS.has(k) && typeof live[k] === "string") live[k] = tr(ov);
      } else if (ov && typeof ov === "object" && live[k]) i18nWalkInto(live[k], ov, k, tr);
    }
  }
}

/* Tradutor de uma string pela chave de hash, memorizando o caminho de volta. */
function i18nTr(s) {
  var t = String(s).trim();
  if (!t) return s;
  var out = window.__t("c" + i18nHash(t), s);
  if (out !== s) i18nRemember(out, s);
  return out;
}
window.__TX = i18nTr;

function i18nApplyData() {
  try {
    if (!i18nDataOriginals) {
      i18nDataOriginals = {};
      for (var n in i18nData) {
        if (!Object.prototype.hasOwnProperty.call(i18nData, n)) continue;
        try { i18nDataOriginals[n] = JSON.parse(JSON.stringify(i18nData[n])); } catch (e) {}
      }
    }
    /* Mesmo em pt-BR traduzimos: o catálogo pt-BR contém só as chaves do
     * conteúdo vindo do GTA Wiki (inglês). Texto que já nasce em português não
     * tem chave e volta intacto pelo fallback do __t. */
    var tr = i18nTr;
    for (var g in i18nData) {
      if (!Object.prototype.hasOwnProperty.call(i18nData, g)) continue;
      if (i18nDataOriginals[g]) i18nWalkInto(i18nData[g], i18nDataOriginals[g], null, tr);
    }
  } catch (e) { /* nunca deixar a tradução de dados quebrar a troca de idioma */ }
}

/* Tradução de JSON buscado em runtime (live/vi-catalog.json, live/vi-live.json).
 * Esses arquivos vêm do GTA Wiki em INGLÊS; a chave continua sendo o hash do
 * texto original, então o pt-BR TAMBÉM recebe tradução quando há catálogo.
 * Uso: setState({ data: window.__i18nLive(json) }). */
window.__i18nLive = function (obj) {
  try {
    if (!obj || typeof obj !== "object") return obj;
    var copy = JSON.parse(JSON.stringify(obj));
    /* Nos JSON do wiki, `title` é o NOME do item ("Golf Driver", "Fire
     * Bottle"). Traduzir virava "Motorista de golfe" e "Garrafa de Fogo".
     * Fora dessa volta, só a descrição e a ficha mudam de idioma. */
    I18N_SKIP_FIELDS.add("title");
    try { i18nWalkInto(copy, obj, null, i18nTr); }
    finally { I18N_SKIP_FIELDS.delete("title"); }
    return copy;
  } catch (e) { return obj; }
};

/* Expostos para i18n/extract-content.js (mesma hash/allowlist/dados). */
window.__i18nTrFields = I18N_TR_FIELDS;
window.__i18nSkipFields = I18N_SKIP_FIELDS;
window.__i18nData = i18nData;
window.__i18nDataGlobals = Object.keys(i18nData);

/* ---------- 6. Troca de idioma ---------- */
/* <title> e <meta name=description> vivem no HTML, fora da árvore React —
 * sem isto a aba do navegador e o compartilhamento ficam sempre em português. */
function i18nApplyHead() {
  try {
    var title = document.querySelector("title");
    var desc = document.querySelector('meta[name="description"]');
    var ogt = document.querySelector('meta[property="og:title"]');
    var ogd = document.querySelector('meta[property="og:description"]');
    var each = [[title, "textContent"], [desc, "content"], [ogt, "content"], [ogd, "content"]];
    for (var i = 0; i < each.length; i++) {
      var el = each[i][0], prop = each[i][1];
      if (!el) continue;
      if (!el.getAttribute("data-i18n-src")) el.setAttribute("data-i18n-src", prop === "content" ? el.getAttribute("content") : el.textContent);
      var src = el.getAttribute("data-i18n-src");
      var out = window.__lang === i18nDefaultLang ? src : i18nTr(src);
      if (prop === "content") el.setAttribute("content", out); else el.textContent = out;
    }
  } catch (e) { /* head opcional */ }
}

function i18nApply(code) {
  window.__lang = code;
  i18nApplyData();
  i18nApplyHead();
  try { window.localStorage.setItem(i18nStorageKey, code); } catch (err) { /* modo privado etc. */ }
  document.documentElement.lang = code;
  window.__i18nVersion = (window.__i18nVersion || 0) + 1;
  window.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang: code } }));
}

/* Carrega um script de catálogo uma vez (dedup por src), com cache-busting.
 * Erro NÃO bloqueia: o arquivo de conteúdo é opcional (pode ainda não existir
 * para um idioma) e a UI já traduz com o catálogo base. */
function i18nLoadScript(src, onDone) {
  const full = src + (window.__BUILD_VERSION ? "?v=" + window.__BUILD_VERSION : "");
  const existing = document.querySelector('script[data-i18n-src="' + src + '"]');
  if (existing) {
    if (existing.getAttribute("data-i18n-done")) { onDone(); return; }
    existing.addEventListener("load", onDone);
    existing.addEventListener("error", onDone);
    return;
  }
  const script = document.createElement("script");
  script.src = full;
  script.async = true;
  script.setAttribute("data-i18n-src", src);
  const done = function () { script.setAttribute("data-i18n-done", "1"); onDone(); };
  script.addEventListener("load", done);
  script.addEventListener("error", function () {
    console.warn('[i18n] falha/ausência de ' + src + " — seguindo com o que houver.");
    script.setAttribute("data-i18n-done", "1");
    onDone();
  });
  document.head.appendChild(script);
}

const i18nContentLoaded = {}; /* code -> true quando i18n/<code>.content.js já tentou carregar */
/* O próprio arquivo de conteúdo marca window.I18N_CONTENT_LOADED[code]; assim,
 * se ele já estiver em memória (pré-carregado ou embutido), não buscamos de novo. */
const i18nContentReady = (code) =>
  !!i18nContentLoaded[code] || !!(window.I18N_CONTENT_LOADED && window.I18N_CONTENT_LOADED[code]);

/* Carrega o catálogo base (UI) e, em seguida, o de conteúdo (cards do dossiê),
 * depois aplica. Conteúdo é opcional: se faltar, a UI ainda traduz. */
window.__setLang = function (code) {
  if (!i18nIsValid(code)) {
    console.warn('[i18n] código de idioma desconhecido: "' + code + '"');
    return;
  }
  if (i18nCatalogReady(code) && i18nContentReady(code)) { i18nApply(code); return; }
  /* pt-BR não tem catálogo de UI (fallbacks inline), mas TEM catálogo de
   * conteúdo: os JSON ao vivo (live/vi-catalog.json) vêm em inglês. */
  if (code === i18nDefaultLang) {
    if (i18nContentReady(code)) { i18nApply(code); return; }
    i18nLoadScript("i18n/pt-BR.content.js", function () {
      i18nContentLoaded[code] = true;
      i18nApply(code);
    });
    return;
  }

  i18nLoadScript("i18n/" + code + ".js", function () {
    if (!i18nCatalogReady(code)) {
      console.warn('[i18n] i18n/' + code + '.js não registrou o catálogo; mantendo "' + window.__lang + '".');
      return;
    }
    if (i18nContentReady(code)) { i18nApply(code); return; }
    i18nLoadScript("i18n/" + code + ".content.js", function () {
      i18nContentLoaded[code] = true;
      i18nApply(code);
    });
  });
};

/* ---------- 3. Estado inicial (NÃO detecta navigator.language) ---------- */
(function i18nBoot() {
  let stored = null;
  try { stored = window.localStorage.getItem(i18nStorageKey); } catch (err) { /* ignora */ }
  window.__lang = i18nIsValid(stored) ? stored : i18nDefaultLang;
  window.__i18nVersion = window.__i18nVersion || 0;
  if (window.__lang === i18nDefaultLang) {
    document.documentElement.lang = window.__lang;
    window.__setLang(window.__lang); /* busca i18n/pt-BR.content.js (JSON ao vivo) */
  } else if (i18nCatalogReady(window.__lang)) {
    document.documentElement.lang = window.__lang;
  } else {
    /* Idioma salvo depende de catálogo externo: injeta já; quando o arquivo
     * carregar, i18nApply dispara "i18n:changed" e o app remonta traduzido.
     * Enquanto isso a página exibe os fallbacks pt-BR. */
    window.__setLang(window.__lang);
  }
})();

/* ---------- 7. Hook React ---------- */
const useI18n = () => {
  const [snap, setSnap] = React.useState(() => ({
    lang: window.__lang,
    version: window.__i18nVersion || 0
  }));
  React.useEffect(() => {
    const sync = () => setSnap({ lang: window.__lang, version: window.__i18nVersion || 0 });
    window.addEventListener("i18n:changed", sync);
    return () => window.removeEventListener("i18n:changed", sync);
  }, []);
  return { lang: snap.lang, version: snap.version, setLang: window.__setLang };
};

/* ---------- 8. Picker de idiomas (estrutura casa com .vi-lang-* do theme-vi.css) ---------- */
const I18nGlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <ellipse cx="12" cy="12" rx="4" ry="9" />
  </svg>
);

/* { compact } → mostra só o código do idioma no botão (uso na nav);
 * sem compact → nome nativo completo (uso no rodapé). O CSS abre o menu para
 * baixo por padrão e automaticamente para CIMA dentro de .dossier-footer /
 * .dossier-bottom-nav; a prop `up` força a variante .vi-lang-menu--up. */
function VILanguagePicker({ compact, up }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef(null);
  const btnRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) return undefined;
    const onDocClick = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) setOpen(false);
    };
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        if (btnRef.current) btnRef.current.focus();
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = i18nFindLang(lang) || i18nFindLang(i18nDefaultLang);
  const pickerLabel = window.__T("ui.lang.picker-aria", "Escolher idioma do site");

  return (
    <div className="vi-lang-picker" ref={rootRef}>
      <button
        type="button"
        ref={btnRef}
        className="vi-lang-btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={pickerLabel + " — " + window.__T("ui.lang.current", "idioma atual:") + " " + current.name}
        onClick={() => setOpen((v) => !v)}
      >
        <I18nGlobeIcon />
        {compact ? current.code : current.name}
        <span className="caret" aria-hidden="true">▾</span>
      </button>
      {open && (
        <div
          className={"vi-lang-menu" + (up ? " vi-lang-menu--up" : "")}
          role="listbox"
          aria-label={pickerLabel}
        >
          {window.I18N_LANGS.map((item) => {
            const ready = i18nIsAvailable(item.code);
            return (
              <button
                key={item.code}
                type="button"
                role="option"
                lang={item.code}
                aria-selected={item.code === lang}
                aria-disabled={!ready}
                disabled={!ready}
                className={"vi-lang-item" + (item.code === lang ? " active" : "") + (ready ? "" : " vi-lang-item--soon")}
                onClick={() => { if (!ready) return; setLang(item.code); setOpen(false); }}
              >
                {item.name} <small>{item.code}</small>
                {!ready && <em className="vi-lang-soon">{window.__T("ui.lang.soon", "em breve")}</em>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
