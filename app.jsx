/* ============ App root ============ */

/* Memoized sections.
 * The whole dossier (~hundreds of cards) lives under these components. Without
 * memo, every scroll-spy update or modal open/close would re-render the entire
 * tree -> heavy jank on weak devices. `setDossier` from useState has a stable
 * identity, so with React.memo these subtrees only render once. */
const M = (C) => React.memo(C);
const TimelineSec    = M(TimelineDossierSection);
const GamesSec       = M(GamesDossierSection);
const MissionsSec    = M(MissionsDossierSection);
const VehiclesSec    = M(VehiclesDossierSection);
const WeaponsSec     = M(WeaponsDossierSection);
const DevelopmentSec = M(DevelopmentDossierSection);
const CharactersSec  = M(CharactersDossierSection);
const CitiesSec      = M(CitiesDossierSection);
const FactionsSec    = M(FactionsDossierSection);
const UniversesSec   = M(UniversesDossierSection);
const RockstarSec    = M(RockstarDossierSection);
const GTAOnlineSec   = M(GTAOnlineDossierSection);
const GTA6Sec        = M(GTA6DossierSection);
const GlossarySec    = M(GlossaryDossierSection);
const ConnectionsSec = M(ConnectionsImpactSection);
const HeroSec        = M(DossierHero);
const FooterSec      = M(DossierFooter);

/* Novos módulos VI (tolerantes a ausência: se um módulo não estiver no bundle,
 * o app usa o equivalente antigo ou simplesmente não renderiza a seção). */
const VIHeroSec   = typeof VIHero !== "undefined" ? M(VIHero) : null;
const VICharsSec  = typeof VICharactersSection !== "undefined" ? M(VICharactersSection) : null;
const VIPlacesSec = typeof VIPlacesSection !== "undefined" ? M(VIPlacesSection) : null;
const VIInfoSec   = typeof VIInfoSection !== "undefined" ? M(VIInfoSection) : null;
const EggsSec     = typeof EasterEggsSection !== "undefined" ? M(EasterEggsSection) : null;
const MystSec     = typeof MysteriesSection !== "undefined" ? M(MysteriesSection) : null;
const VIMechSec   = typeof VIMechanicsSection !== "undefined" ? M(VIMechanicsSection) : null;
const VICatSec    = typeof VICatalogSection !== "undefined" ? M(VICatalogSection) : null;
const MissionVideosSec = typeof MissionVideosSection !== "undefined" ? M(MissionVideosSection) : null;

/* ---- Scroll reveal ----
 * One shared IntersectionObserver toggles a class as elements enter/leave the
 * viewport. Animation is pure opacity+transform (see styles.css), so it is
 * GPU-composited and stays cheap even with many cards. Respects reduced-motion.
 * Re-runs when `version` changes (troca de idioma remonta a árvore). */
function useScrollReveal(version){
  React.useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = document.querySelectorAll(
      ".dossier-section .dossier-section-head, .dossier-section .card"
    );
    if (!targets.length) return;

    // Per-group stagger index (capped) for a cascading entrance.
    const STAGGER_CAP = 8;
    const counters = new Map();
    targets.forEach((el) => {
      const parent = el.parentElement;
      const n = (counters.get(parent) || 0);
      counters.set(parent, n + 1);
      if (n) el.style.setProperty("--ri", Math.min(n, STAGGER_CAP));
      el.classList.add("reveal");
    });

    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        e.target.classList.toggle("reveal--in", e.isIntersecting);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [version]);
}

/* Seções novas (códigos e rádios), também tolerantes a ausência. */
const CheatsSec = typeof CheatsSection !== "undefined" ? M(CheatsSection) : null;
const RadiosSec = typeof RadiosSection !== "undefined" ? M(RadiosSection) : null;

/* Cabeçalho das páginas de tema (/games/, /en/easter-eggs/ …): o <h1> e a
 * descrição próprios da página, mais a trilha de volta ao dossiê completo. */
const RouteHead = ({ route }) => {
  const homeHref = window.__seoHomeHref ? window.__seoHomeHref() : "#overview";
  return (
    <header className="route-head dossier-shell">
      <div className="wrap">
        <nav className="route-crumbs" aria-label="Breadcrumb">
          <a href={homeHref}>Dossiê GTA</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{route.label}</span>
        </nav>
        <h1>{route.heading}</h1>
        <p>{route.description}</p>
        <a className="vi-btn vi-btn--ghost vi-btn--sm" href={homeHref}>Ver o dossiê completo</a>
      </div>
    </header>
  );
};

/* Rodapé das páginas de tema: links para todos os outros temas. */
const RouteIndex = ({ current }) => (
  <nav className="route-index dossier-shell" aria-label="Mais do dossiê">
    <div className="wrap">
      <h2>Mais do dossiê</h2>
      <ul>
        {(window.SEO_ROUTES || []).filter((r) => r.id !== current.id).map((r) => (
          <li key={r.id}><a href={window.__seoPath(window.__lang, r.slug)}>{r.label}</a></li>
        ))}
      </ul>
    </div>
  </nav>
);

function App(){
  const [dossier, setDossier] = React.useState(null);
  /* Rota atual (data-seo.jsx): no dossiê completo `only` é null e tudo é
   * renderizado; numa página de tema, só as seções daquela rota. */
  const route = (window.__ROUTE && window.__ROUTE.route) || null;
  const only = route && route.sections;
  const show = (id) => !only || only.indexOf(id) !== -1;
  const [active, setActive] = React.useState(only ? only[0] : "overview");
  /* i18n: quando o idioma muda, `version` muda e a árvore inteira remonta
   * (key no Fragment abaixo), reavaliando todos os fallbacks __t/__tt. */
  const i18n = typeof useI18n !== "undefined" ? useI18n() : { version: 0 };
  const version = i18n.version || 0;

  useScrollReveal(version);

  // Scroll-spy: a seção ativa é a ÚLTIMA cujo topo já passou de uma linha a
  // ~38% da altura da tela. Diferente do IntersectionObserver anterior, nunca
  // "perde" a seção (seções muito longas ou muito curtas também são marcadas)
  // e o menu acompanha exatamente onde o usuário está. Só <App> + nav
  // re-renderizam; as seções memoizadas não são tocadas.
  React.useEffect(() => {
    const ids = (window.dossierNavData || NAV).map((n) => n.id).filter((id) => document.getElementById(id));
    if (!ids.length) return;
    let raf = 0;
    const compute = () => {
      raf = 0;
      const line = window.scrollY + Math.min(window.innerHeight * 0.38, 340);
      let current = ids[0], best = -Infinity;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= line && top > best) { best = top; current = id; }
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = ids[ids.length - 1];
      setActive((prev) => (prev === current ? prev : current));
    };
    const onScroll = () => { if (!raf) raf = window.requestAnimationFrame(compute); };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [version]);

  React.useEffect(() => {
    let id = "";
    try { id = decodeURIComponent(window.location.hash.replace("#", "")); } catch (e) { /* hash malformado */ }
    if (!id) return;
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    }, 350);
  }, []);

  /* Âncoras "#id" fora do menu (botões do herói, atalhos). As páginas têm
   * <base href="/">, então sozinho um href="#games" sairia de /en/ para a raiz.
   * Aqui: se o alvo está na página, rola; se não, vai para a página do tema. */
  React.useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target && event.target.closest ? event.target.closest("a[href]") : null;
      const href = link ? link.getAttribute("href") : "";
      if (!href || href.charAt(0) !== "#" || href.length < 2) return;
      let id = href.slice(1);
      try { id = decodeURIComponent(id); } catch (e) { /* usa como veio */ }
      const target = document.getElementById(id);
      event.preventDefault();
      if (target) {
        target.scrollIntoView({ block: "start" });
        try { window.history.replaceState(null, "", window.location.pathname + window.location.search + "#" + id); } catch (e) { /* file:// */ }
      } else if (window.__seoHref) {
        window.location.assign(window.__seoHref(id));
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Close modal on Escape
  React.useEffect(() => {
    const k = (e) => { if (e.key === "Escape") setDossier(null); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  return (
    <React.Fragment key={version}>
      <DossierHUDNav active={active} onJump={setActive} />
      <main id="conteudo">
        {only && <RouteHead route={route} />}
        {show("overview") && (VIHeroSec ? <VIHeroSec /> : <HeroSec />)}
        {show("timeline") && <TimelineSec onOpenDossier={setDossier} />}
        {show("games") && <GamesSec onOpenDossier={setDossier} />}
        {show("missions") && (MissionVideosSec ? <MissionVideosSec onOpenDossier={setDossier} /> : <MissionsSec onOpenDossier={setDossier} />)}
        {show("vehicles") && <VehiclesSec onOpenDossier={setDossier} />}
        {show("weapons") && <WeaponsSec onOpenDossier={setDossier} />}
        {show("development") && <DevelopmentSec onOpenDossier={setDossier} />}
        {show("characters") && <CharactersSec onOpenDossier={setDossier} />}
        {show("cities") && <CitiesSec onOpenDossier={setDossier} />}
        {show("gangs") && <FactionsSec onOpenDossier={setDossier} />}
        {show("universes") && <UniversesSec onOpenDossier={setDossier} />}
        {show("rockstar") && <RockstarSec onOpenDossier={setDossier} />}
        {show("gtaonline") && <GTAOnlineSec onOpenDossier={setDossier} />}
        {show("vi-characters") && VICharsSec && <VICharsSec />}
        {show("vi-places") && VIPlacesSec && <VIPlacesSec />}
        {show("gta6") && (VIInfoSec ? <VIInfoSec /> : <GTA6Sec />)}
        {show("vi-mechanics") && VIMechSec && <VIMechSec />}
        {show("vi-catalog") && VICatSec && <VICatSec />}
        {show("cheats") && CheatsSec && <CheatsSec />}
        {show("radios") && RadiosSec && <RadiosSec />}
        {show("eastereggs") && EggsSec && <EggsSec />}
        {show("mysteries") && MystSec && <MystSec />}
        {show("glossary") && <GlossarySec onOpenDossier={setDossier} />}
        {!only && <ConnectionsSec />}
        {only && <RouteIndex current={route} />}
      </main>
      <FooterSec />
      <DossierRecordModal record={dossier} onClose={() => setDossier(null)} onOpen={setDossier} />
      <DzLightbox />
    </React.Fragment>
  );
}

/* scripts/prerender.js monta a App por conta própria (uma vez por rota). */
window.__AppRoot = App;
if (!window.__PRERENDER) ReactDOM.createRoot(document.getElementById("root")).render(<App />);
