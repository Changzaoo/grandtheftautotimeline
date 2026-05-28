/* ============ App root ============ */

function App(){
  const [dossier,setDossier] = React.useState(null);
  const [active,setActive] = React.useState("overview");

  // Scroll-spy
  React.useEffect(()=>{
    const ids = (window.dossierNavData || NAV).map(n=>n.id);
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) setActive(e.target.id);
      });
    },{rootMargin:"-40% 0px -55% 0px",threshold:0});
    ids.forEach(id=>{ const el=document.getElementById(id); if(el) obs.observe(el); });
    return ()=>obs.disconnect();
  },[]);

  React.useEffect(()=>{
    const id = decodeURIComponent(window.location.hash.replace("#",""));
    if(!id) return;
    window.setTimeout(()=>{
      document.getElementById(id)?.scrollIntoView({block:"start"});
    },350);
  },[]);

  // Close modal on Escape
  React.useEffect(()=>{
    const k = (e)=>{ if(e.key==="Escape") setDossier(null); };
    window.addEventListener("keydown",k);
    return ()=>window.removeEventListener("keydown",k);
  },[]);

  return (
    <>
      <DossierHUDNav active={active} onJump={setActive}/>
      <DossierHero/>
      <TimelineDossierSection onOpenDossier={setDossier}/>
      <GamesDossierSection onOpenDossier={setDossier}/>
      <MissionsDossierSection onOpenDossier={setDossier}/>
      <VehiclesDossierSection onOpenDossier={setDossier}/>
      <WeaponsDossierSection onOpenDossier={setDossier}/>
      <DevelopmentDossierSection/>
      <CharactersDossierSection onOpenDossier={setDossier}/>
      <CitiesDossierSection onOpenDossier={setDossier}/>
      <FactionsDossierSection onOpenDossier={setDossier}/>
      <UniversesDossierSection/>
      <RockstarDossierSection/>
      <GTAOnlineDossierSection onOpenDossier={setDossier}/>
      <GTA6DossierSection/>
      <GlossaryDossierSection onOpenDossier={setDossier}/>
      <ConnectionsImpactSection/>
      <DossierFooter/>
      <DossierRecordModal record={dossier} onClose={()=>setDossier(null)}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
