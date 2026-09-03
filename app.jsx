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

function App(){
  const [dossier, setDossier] = React.useState(null);
  const [active, setActive] = React.useState("overview");
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
    const ids = (window.dossierNavData || NAV).map((n) => n.id);
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
    const id = decodeURIComponent(window.location.hash.replace("#", ""));
    if (!id) return;
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ block: "start" });
    }, 350);
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
      {VIHeroSec ? <VIHeroSec /> : <HeroSec />}
      <TimelineSec onOpenDossier={setDossier} />
      <GamesSec onOpenDossier={setDossier} />
      <MissionsSec onOpenDossier={setDossier} />
      <VehiclesSec onOpenDossier={setDossier} />
      <WeaponsSec onOpenDossier={setDossier} />
      <DevelopmentSec />
      <CharactersSec onOpenDossier={setDossier} />
      <CitiesSec onOpenDossier={setDossier} />
      <FactionsSec onOpenDossier={setDossier} />
      <UniversesSec />
      <RockstarSec />
      <GTAOnlineSec onOpenDossier={setDossier} />
      {VICharsSec && <VICharsSec />}
      {VIPlacesSec && <VIPlacesSec />}
      {VIInfoSec ? <VIInfoSec /> : <GTA6Sec />}
      {VIMechSec && <VIMechSec />}
      {VICatSec && <VICatSec />}
      {EggsSec && <EggsSec />}
      {MystSec && <MystSec />}
      <GlossarySec onOpenDossier={setDossier} />
      <ConnectionsSec />
      <FooterSec />
      <DossierRecordModal record={dossier} onClose={() => setDossier(null)} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
