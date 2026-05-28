/* ============ Big page sections ============ */

const HUDNav = ({active, onJump})=>{
  const [open,setOpen] = React.useState(false);
  return (
    <header className="hud">
      <div className="hud-inner">
        <div className="lock">
          <div className="badge">U</div>
          <div style={{lineHeight:1.1}}>
            <div style={{fontSize:14,letterSpacing:".22em"}}>URBAN UNIVERSE</div>
            <div className="mono" style={{fontSize:10,letterSpacing:".22em",color:"var(--grit)"}}>FRANCHISE ARCHIVE / v.0.1</div>
          </div>
        </div>
        <nav className={open?"open":""}>
          {NAV.map(n=>(
            <a key={n.id} href={`#${n.id}`} className={active===n.id?"active":""}
               onClick={(e)=>{setOpen(false); onJump && onJump(n.id);}}>
              <span className="k">{n.k}</span> {n.label}
            </a>
          ))}
        </nav>
        <button className="burger" onClick={()=>setOpen(v=>!v)} aria-label="Menu">≡</button>
      </div>
    </header>
  );
};

/* ----- Hero ----- */
const Hero = ()=>{
  return (
    <section id="overview" style={{position:"relative",overflow:"hidden",borderBottom:"1px solid var(--line)"}}>
      {/* Background skyline */}
      <div style={{position:"absolute",inset:0,zIndex:0}}>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,transparent 30%,rgba(0,0,0,.55) 70%,#0a0a0c 100%)",zIndex:2}}/>
        <div style={{position:"absolute",inset:"auto 0 0 0",height:"55%"}}>
          <Skyline palette={{sky:"#0e0e18",a:"#16161e",b:"#1d1d28",c2:"#262633",win:"#ffd24a"}}/>
        </div>
        {/* Neon glow */}
        <div style={{position:"absolute",left:"-10%",top:"10%",width:"60%",height:"60%",background:"radial-gradient(closest-side, rgba(255,61,138,.32), transparent)",filter:"blur(20px)"}}/>
        <div style={{position:"absolute",right:"-10%",top:"5%",width:"55%",height:"65%",background:"radial-gradient(closest-side, rgba(59,108,255,.28), transparent)",filter:"blur(20px)"}}/>
        {/* Siren bottom */}
        <div className="siren-fx"><div className="r"/><div className="b"/></div>
      </div>

      <div className="wrap" style={{position:"relative",zIndex:3,paddingTop:64,paddingBottom:64}}>
        {/* Tape header */}
        <div style={{display:"flex",alignItems:"center",gap:18,marginBottom:30,flexWrap:"wrap"}}>
          <span className="tape">DO NOT CROSS · CENA DE INVESTIGAÇÃO</span>
          <span className="mono" style={{color:"var(--bone-2)",fontSize:12,letterSpacing:".22em"}}>FILE Nº 04-77-Ω · CONFIDENCIAL</span>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1.4fr .9fr",gap:42,alignItems:"end"}}>
          {/* LEFT */}
          <div>
            <Eyebrow color="var(--neon)">Arquivo Visual da Franquia · Universo Não-Oficial</Eyebrow>
            <h1 className="display" style={{fontSize:"clamp(64px,9vw,168px)",margin:"14px 0 8px"}}>
              GRAND <span style={{color:"var(--evidence)",WebkitTextStroke:"2px #1a1300"}}>THEFT</span>
              <br/>AUTO <em style={{fontStyle:"normal",color:"var(--neon)",textShadow:"0 0 30px rgba(255,61,138,.5)"}}>UNIVERSE</em>
            </h1>
            <p style={{maxWidth:560,color:"var(--bone-2)",fontSize:18,lineHeight:1.5,marginTop:18}}>
              Uma timeline visual da criminalidade, das cidades, dos personagens e das histórias que moldaram o gênero do mundo aberto urbano.
              <span style={{color:"var(--grit)"}}> Conteúdo editorial fictício — visual original e seguro.</span>
            </p>

            <div style={{display:"flex",gap:12,marginTop:30,flexWrap:"wrap"}}>
              <a className="btn solid" href="#timeline"><span>Explorar Timeline</span><span className="arr">→</span></a>
              <a className="btn neon"  href="#characters"><span>Ver Personagens</span><span className="arr">→</span></a>
              <a className="btn blue"  href="#cities"><span>Mapa das Cidades</span><span className="arr">→</span></a>
            </div>

            {/* Marquee strip */}
            <div className="marquee" style={{marginTop:46}}>
              <div className="track">
                {Array.from({length:2}).map((_,k)=>(
                  <React.Fragment key={k}>
                    <span>Boletim das 22h <span className="sep">◆</span></span>
                    <span>Fuga em Vice Boulevard <span className="sep">◆</span></span>
                    <span>Tiroteio no porto de Liberty <span className="sep">◆</span></span>
                    <span>Cassino de Las Venturas é assaltado <span className="sep">◆</span></span>
                    <span>Helicóptero rastreia suspeito em Los Santos <span className="sep">◆</span></span>
                    <span>Cripto Mafia movimenta milhões <span className="sep">◆</span></span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Wanted Panel */}
          <div>
            <div className="card" style={{padding:22}}>
              <Corners/>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
                <div className="eyebrow">WANTED · NÍVEL DE PROCURADO</div>
                <span className="mono" style={{color:"var(--siren)",fontSize:11}}>LIVE</span>
              </div>
              <div className="headline" style={{fontSize:42,color:"var(--evidence)"}}>4 ESTRELAS</div>
              <div style={{margin:"10px 0 14px"}}><Stars n={4}/></div>
              <div style={{fontFamily:"Space Mono",fontSize:11,color:"var(--bone-2)",lineHeight:1.6}}>
                Suspeito visto na zona 17. Unidades aéreas a caminho. Bloqueios em Sunset & 4th.
              </div>
              <hr className="rule" style={{margin:"14px 0"}}/>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                <Tag tone="red">Armado</Tag>
                <Tag tone="yellow">Em Fuga</Tag>
                <Tag tone="blue">Polícia</Tag>
                <Tag tone="pink">Influência</Tag>
              </div>
            </div>

            {/* Mini stats */}
            <div className="grid" style={{gridTemplateColumns:"repeat(3,1fr)",gap:10,marginTop:14}}>
              {[
                {n:"08",  l:"Jogos\nprincipais"},
                {n:"12",  l:"Cidades\nfictícias"},
                {n:"240+",l:"Personagens\nregistrados"},
                {n:"46",  l:"Gangues\ne máfias"},
                {n:"32",  l:"Organizações\ncriminosas"},
                {n:"28",  l:"Décadas\ndocumentadas"},
              ].map((s,i)=>(
                <div key={i} className="card" style={{padding:"12px"}}>
                  <Corners/>
                  <div className="display" style={{fontSize:34,lineHeight:1,color:"var(--bone)"}}>{s.n}</div>
                  <div className="mono" style={{whiteSpace:"pre-line",fontSize:10,letterSpacing:".18em",textTransform:"uppercase",color:"var(--grit)",marginTop:6}}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----- Timeline ----- */
const TimelineSection = ({onOpenDossier})=>(
  <section id="timeline" style={{padding:"96px 0",position:"relative"}}>
    <div className="wrap">
      <div className="sec-head">
        <div>
          <Eyebrow color="var(--siren)">Capítulo 02 · Linha de investigação</Eyebrow>
          <h2><em>Timeline</em> da Franquia</h2>
        </div>
        <div className="right"><span style={{width:8,height:8,background:"var(--siren)",borderRadius:"50%",boxShadow:"0 0 10px var(--siren)"}}/> 1997 → 2025 · em ordem cronológica</div>
      </div>

      <div className="timeline">
        <div className="spine"/>
        {TIMELINE.map((t,i)=>{
          const left = i%2===0;
          return (
            <div key={i} className={`row ${left?"":"flip"}`}>
              <div className="side-l">
                {left ? <TimelineCard t={t} onOpen={()=>onOpenDossier({type:"game",t})} side="left"/> : null}
              </div>
              <div className="pin" style={{position:"relative"}}>
                <span className="dot"/>
                <span className="yr">{t.year}</span>
              </div>
              <div className="side-r">
                {!left ? <TimelineCard t={t} onOpen={()=>onOpenDossier({type:"game",t})} side="right"/> : null}
                {left && <SidebarBeat t={t}/>}
              </div>
              {!left && (
                <div className="side-l" style={{order:-1}}>
                  <SidebarBeat t={t}/>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const SidebarBeat = ({t})=>(
  <div className="mono" style={{color:"var(--grit)",fontSize:11,letterSpacing:".18em",padding:14,border:"1px dashed var(--line)",borderRadius:2,background:"rgba(255,255,255,.01)"}}>
    <div style={{color:"var(--evidence)",marginBottom:6}}>EVENTO · {t.year}</div>
    Reabertura do caso. Conexões cruzadas detectadas com {t.city}. Pista visual reforçada por testemunha sob proteção.
  </div>
);

const TimelineCard = ({t,onOpen,side})=>(
  <div className="card" style={{padding:16}}>
    <Corners/>
    <div style={{display:"grid",gridTemplateColumns:"120px 1fr",gap:14}}>
      <div className="ph" style={{aspectRatio:"3/4"}}>
        <Corners/>
        <span>{t.city}</span>
      </div>
      <div>
        <div style={{display:"flex",gap:8,alignItems:"center",justifyContent:"space-between"}}>
          <Tag tone="yellow">{t.badge}</Tag>
          <span className="mono" style={{fontSize:10,letterSpacing:".22em",color:"var(--grit)"}}>{t.era}</span>
        </div>
        <div className="headline" style={{fontSize:30,marginTop:8,color:"var(--bone)"}}>{t.title}</div>
        <div className="mono" style={{color:"var(--neon)",fontSize:11,letterSpacing:".22em",marginTop:4}}>{t.city.toUpperCase()}</div>
        <div style={{color:"var(--bone-2)",fontSize:13,marginTop:8,lineHeight:1.5}}>
          Protagonista: <strong style={{color:"#fff"}}>{t.protag}</strong>.<br/>
          <span style={{color:"var(--grit)"}}>// resumo curto — inserir conteúdo completo depois.</span>
        </div>
        <button className="btn" style={{marginTop:14,padding:"8px 14px",fontSize:12}} onClick={onOpen}>
          <span>Abrir Dossiê</span><span className="arr">→</span>
        </button>
      </div>
    </div>
  </div>
);

Object.assign(window,{HUDNav,Hero,TimelineSection});
