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

/* ---- Scroll reveal ----
 * One shared IntersectionObserver toggles a class as elements enter/leave the
 * viewport. Animation is pure opacity+transform (see styles.css), so it is
 * GPU-composited and stays cheap even with many cards. Respects reduced-motion. */
function useScrollReveal(){
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
  }, []);
}

function App(){
  const [dossier, setDossier] = React.useState(null);
  const [active, setActive] = React.useState("overview");

  useScrollReveal();

  // Scroll-spy (highlights the active nav item). Only <App> + the small nav
  // re-render here; the memoized sections above are untouched.
  React.useEffect(() => {
    const ids = (window.dossierNavData || NAV).map((n) => n.id);
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

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
    <>
      <DossierHUDNav active={active} onJump={setActive} />
      <HeroSec />
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
      <GTA6Sec />
      <GlossarySec onOpenDossier={setDossier} />
      <ConnectionsSec />
      <FooterSec />
      <DossierRecordModal record={dossier} onClose={() => setDossier(null)} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
