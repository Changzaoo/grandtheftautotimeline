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
  return typeof value === "string" && value !== "" ? value : fallback;
};

window.__tt = function (prefix, id, field, fallback) {
  return window.__t(prefix + "." + id + "." + field, fallback);
};

/* ---------- 5b. Tradução do CONTEÚDO dos dados (cards do dossiê) ----------
 * O conteúdo do dossiê original (personagens, cidades, jogos, glossário, etc.)
 * vive em estruturas de dados renderizadas cruas, sem __tt. Para traduzir 100%
 * do site sem editar centenas de pontos de render, traduzimos o conteúdo por
 * MUTAÇÃO in-place das estruturas quando o idioma muda: cada string de um campo
 * de EXIBIÇÃO é trocada pela tradução (chave "c"+hash do texto pt). Campos de
 * LÓGICA (tone, universe, category, type, id, gameId, URLs, datas, mídia, cor)
 * ficam intactos — filtros, classes e vínculos continuam funcionando. Como a
 * App remonta na troca de idioma (key=version), ela relê os dados traduzidos. */
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

/* Campos de EXIBIÇÃO que devem ser traduzidos (allowlist — o resto passa
 * intacto). Mantenha em sincronia com i18n/extract-content.js. */
var I18N_TR_FIELDS = new Set([
  "name","nick","title","subtitle","heading","headline","subhead","kicker","lead","body",
  "summary","description","desc","overview","intro","importance","biography","bio",
  "storyArc","fate","role","details","detail","impact","contributions","narrativeImportance",
  "uncertainty","fullStory","developmentHistory","precisionNotes","relationships","totalLabel",
  "label","caption","alt","credit","definition","expanded","whyItMatters","note","notes",
  "quote","tagline","blurb","context","meaning","text","beats","protagonist","game","era",
  "status","coverage","brought","story","plot","trivia","aliases","tags",
  "highlights","facts","examples","importantEvents","systems","modes","businesses","themes",
  "enemies","allies","antagonists","leaders","supportingCharacters","characters","factions",
  "affiliations","districts","vehicles","relatedTerms","appearsIn","relatedGames","games",
  "features","points","bullets","items","modules","perks","objectives"
]);
/* Globais de dados do dossiê a traduzir (definidos antes deste módulo no bundle). */
var I18N_DATA_GLOBALS = [
  "universeData","rockstarHistoryData","rockstarPeopleData","timelineChronologicalData",
  "releaseTimelineData","gamesData","charactersData","citiesData","factionsData",
  "developmentData","onlineTimelineData","onlineDlcData","gta6FactsData","connectionsData",
  "recommendedOrderData","impactData","glossaryData","missionDossierData",
  "vehicleDossierData","weaponDossierData"
];
var i18nDataOriginals = null; /* snapshot pt-BR (fonte) capturado no 1º apply */

function i18nApplyData() {
  try {
    if (!i18nDataOriginals) {
      i18nDataOriginals = {};
      for (var j = 0; j < I18N_DATA_GLOBALS.length; j++) {
        var nm = I18N_DATA_GLOBALS[j];
        if (window[nm]) { try { i18nDataOriginals[nm] = JSON.parse(JSON.stringify(window[nm])); } catch (e) {} }
      }
    }
    var pt = window.__lang === i18nDefaultLang;
    var tr = function (s) { var t = s.trim(); return pt || !t ? s : window.__t("c" + i18nHash(t), s); };
    var into = function (live, orig, field) {
      if (Array.isArray(orig)) {
        for (var i = 0; i < orig.length; i++) {
          if (typeof orig[i] === "string") { if (field && I18N_TR_FIELDS.has(field) && typeof live[i] === "string") live[i] = tr(orig[i]); }
          else if (orig[i] && typeof orig[i] === "object" && live[i]) into(live[i], orig[i], field);
        }
      } else if (orig && typeof orig === "object") {
        for (var k in orig) {
          if (!Object.prototype.hasOwnProperty.call(orig, k)) continue;
          var ov = orig[k];
          if (typeof ov === "string") { if (I18N_TR_FIELDS.has(k) && typeof live[k] === "string") live[k] = tr(ov); }
          else if (ov && typeof ov === "object" && live[k]) into(live[k], ov, k);
        }
      }
    };
    for (var g = 0; g < I18N_DATA_GLOBALS.length; g++) {
      var n = I18N_DATA_GLOBALS[g];
      if (window[n] && i18nDataOriginals[n]) into(window[n], i18nDataOriginals[n], null);
    }
  } catch (e) { /* nunca deixar a tradução de dados quebrar a troca de idioma */ }
}
/* Expostos para i18n/extract-content.js (mesma hash/allowlist/globais). */
window.__i18nTrFields = I18N_TR_FIELDS;
window.__i18nDataGlobals = I18N_DATA_GLOBALS;

/* ---------- 6. Troca de idioma ---------- */
function i18nApply(code) {
  window.__lang = code;
  i18nApplyData();
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

/* Carrega o catálogo base (UI) e, em seguida, o de conteúdo (cards do dossiê),
 * depois aplica. Conteúdo é opcional: se faltar, a UI ainda traduz. */
window.__setLang = function (code) {
  if (!i18nIsValid(code)) {
    console.warn('[i18n] código de idioma desconhecido: "' + code + '"');
    return;
  }
  if (code === i18nDefaultLang) { i18nApply(code); return; } /* pt-BR: fallbacks inline */
  if (i18nCatalogReady(code) && i18nContentLoaded[code]) { i18nApply(code); return; }

  i18nLoadScript("i18n/" + code + ".js", function () {
    if (!i18nCatalogReady(code)) {
      console.warn('[i18n] i18n/' + code + '.js não registrou o catálogo; mantendo "' + window.__lang + '".');
      return;
    }
    if (i18nContentLoaded[code]) { i18nApply(code); return; }
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
  if (i18nCatalogReady(window.__lang)) {
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
