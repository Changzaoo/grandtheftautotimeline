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

/* ---------- 6. Troca de idioma ---------- */
function i18nApply(code) {
  window.__lang = code;
  try { window.localStorage.setItem(i18nStorageKey, code); } catch (err) { /* modo privado etc. */ }
  document.documentElement.lang = code;
  window.__i18nVersion = (window.__i18nVersion || 0) + 1;
  window.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang: code } }));
}

window.__setLang = function (code) {
  if (!i18nIsValid(code)) {
    console.warn('[i18n] código de idioma desconhecido: "' + code + '"');
    return;
  }
  if (i18nCatalogReady(code)) { i18nApply(code); return; }

  const i18nOnCatalogLoad = function () {
    if (i18nCatalogReady(code)) i18nApply(code);
    else console.warn('[i18n] i18n/' + code + '.js carregou mas não registrou I18N_CATALOGS["' + code + '"]; mantendo "' + window.__lang + '".');
  };

  const existing = document.querySelector('script[data-i18n-lang="' + code + '"]');
  if (existing) {
    /* Já injetado e ainda carregando: apenas pega carona no load em andamento. */
    existing.addEventListener("load", i18nOnCatalogLoad);
    return;
  }

  const script = document.createElement("script");
  /* ?v=<build> evita catálogo obsoleto em cache após um deploy (o arquivo
   * i18n/<code>.js mantém a mesma URL entre versões). */
  script.src = "i18n/" + code + ".js" + (window.__BUILD_VERSION ? "?v=" + window.__BUILD_VERSION : "");
  script.async = true;
  script.setAttribute("data-i18n-lang", code);
  script.addEventListener("load", i18nOnCatalogLoad);
  script.addEventListener("error", function () {
    console.warn('[i18n] falha ao carregar i18n/' + code + ".js — mantendo \"" + window.__lang + '".');
    script.remove(); /* permite nova tentativa num próximo clique */
  });
  document.head.appendChild(script);
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
