/* ============ Sections part 2 — Games, Characters ============ */

const GameCard = ({g,onOpen})=>{
  const t = TONE[g.tone];
  return (
    <div className="card" style={{padding:0,overflow:"hidden"}}>
      <Corners/>
      <div style={{position:"relative",aspectRatio:"4/3",background:`linear-gradient(180deg, ${t.a}, ${t.b})`,overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:`radial-gradient(closest-side, ${t.accent}33, transparent 70%)`}}/>
        <div style={{position:"absolute",left:0,right:0,bottom:0,height:"70%"}}>
          <Skyline palette={{sky:t.a,a:t.b,b:t.a,c2:"#0c0c14",win:t.accent}}/>
        </div>
        <div style={{position:"absolute",top:14,left:14,display:"flex",gap:8,alignItems:"center"}}>
          <Tag tone={t.tag}>{g.city}</Tag>
        </div>
        <div style={{position:"absolute",top:14,right:14,color:t.accent,fontFamily:"Big Shoulders Display",fontWeight:900,fontSize:34,lineHeight:1,opacity:.85,textShadow:`0 0 24px ${t.accent}55`}}>
          {g.year}
        </div>
        <div style={{position:"absolute",bottom:14,left:14,right:14}}>
          <div className="display" style={{fontSize:42,lineHeight:.9,color:"#fff"}}>{g.name}</div>
          <div className="mono" style={{fontSize:11,letterSpacing:".22em",color:"#e9e7df",marginTop:6,opacity:.8}}>
            {g.pals.join(" · ")}
          </div>
        </div>
        {/* scan line decoration */}
        <div style={{position:"absolute",inset:0,background:"repeating-linear-gradient(0deg, rgba(255,255,255,.025) 0 1px, transparent 1px 4px)",pointerEvents:"none"}}/>
      </div>
      <div style={{padding:16,borderTop:"1px solid var(--line)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,flexWrap:"wrap"}}>
          <div style={{color:"var(--bone-2)",fontSize:13,maxWidth:380,lineHeight:1.5}}>{g.desc}</div>
          <button className="btn" style={{padding:"8px 12px",fontSize:11}} onClick={()=>onOpen({type:"game",g})}>Ver História <span className="arr">→</span></button>
        </div>
      </div>
    </div>
  );
};

const GamesSection = ({onOpenDossier})=>(
  <section id="games" style={{padding:"96px 0",background:"linear-gradient(180deg,#0a0a0d, #0e0e14 30%, #0a0a0d)"}}>
    <div className="wrap">
      <div className="sec-head">
        <div>
          <Eyebrow color="var(--evidence)">Capítulo 03 · catálogo</Eyebrow>
          <h2>Jogos <em>Principais</em></h2>
        </div>
        <div className="right">6 títulos · 4 eras · 1 universo</div>
      </div>
      <div className="grid g-3">
        {GAMES.map(g=><GameCard key={g.key} g={g} onOpen={onOpenDossier}/>)}
      </div>
    </div>
  </section>
);

/* ----- Characters ----- */

const ROLE_TONE = {
  protagonist:"yellow", antagonist:"red", ally:"green",
  authority:"blue", secondary:"neutral", gang:"pink", mafia:"red", police:"blue", traitor:"red"
};
const ROLE_LABEL = {
  protagonist:"Protagonista", antagonist:"Antagonista", ally:"Aliado",
  authority:"Autoridade", secondary:"Secundário"
};

const CharacterCard = ({c,onOpen})=>(
  <div className="card" style={{padding:0,cursor:"pointer"}} onClick={()=>onOpen({type:"character",c})}>
    <Corners/>
    {/* TOP: mugshot + ID strip */}
    <div style={{display:"grid",gridTemplateColumns:"110px 1fr",gap:0}}>
      <div style={{padding:12,borderRight:"1px solid var(--line)"}}>
        <div className="ph" style={{aspectRatio:"3/4",margin:0}}>
          <Corners/>
          <span>MUGSHOT</span>
        </div>
        <div className="mono" style={{fontSize:9,letterSpacing:".22em",color:"var(--grit)",marginTop:8,textAlign:"center"}}>ID · {c.id.toUpperCase()}</div>
      </div>
      <div style={{padding:"12px 14px",position:"relative"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Tag tone={ROLE_TONE[c.role]||"neutral"}>{ROLE_LABEL[c.role]}</Tag>
          <span className="mono" style={{fontSize:10,letterSpacing:".22em",color:"var(--grit)"}}>{c.game}</span>
        </div>
        <div className="headline" style={{fontSize:22,marginTop:8,lineHeight:1,color:"var(--bone)"}}>{c.name}</div>
        <div className="mono" style={{color:"var(--neon)",fontSize:11,letterSpacing:".22em",marginTop:4}}>“{c.nick}”</div>
        <hr className="rule" style={{margin:"12px 0"}}/>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,fontFamily:"Space Mono",fontSize:11,color:"var(--bone-2)"}}>
          <div><span style={{color:"var(--grit)"}}>CIDADE</span><br/>{c.city}</div>
          <div><span style={{color:"var(--grit)"}}>FAÇÃO</span><br/>{c.faction}</div>
          <div><span style={{color:"var(--grit)"}}>STATUS</span><br/><span style={{color: c.status==="Falecido"?"var(--siren)":c.status==="Foragida"||c.status==="Procurado"?"var(--evidence)":"var(--money)"}}>{c.status}</span></div>
          <div><span style={{color:"var(--grit)"}}>AMEAÇA</span><br/><Stars n={c.threat} max={5}/></div>
        </div>
      </div>
    </div>
    <div style={{padding:"12px 14px",borderTop:"1px solid var(--line)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <span className="mono" style={{fontSize:10,letterSpacing:".22em",color:"var(--grit)"}}>ABRIR FICHA COMPLETA →</span>
      <span style={{color:"var(--bone-2)"}}>↗</span>
    </div>
  </div>
);

const CharactersSection = ({onOpenDossier})=>{
  const [filter,setFilter] = React.useState("all");
  const [q,setQ] = React.useState("");
  const filtered = CHARACTERS.filter(c=>(filter==="all"||c.role===filter) && (q===""||(c.name+c.nick+c.city+c.faction).toLowerCase().includes(q.toLowerCase())));
  return (
    <section id="characters" style={{padding:"96px 0"}}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <Eyebrow color="var(--neon)">Capítulo 04 · base de dados</Eyebrow>
            <h2>Dossiê de <em>Personagens</em></h2>
          </div>
          <div className="right">240+ fichas · busca cruzada por facção, status e ameaça</div>
        </div>

        {/* Filter bar */}
        <div className="card" style={{padding:14,display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",marginBottom:18}}>
          <Corners/>
          <div className="mono" style={{fontSize:11,letterSpacing:".22em",color:"var(--evidence)"}}>FILTROS ▾</div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {ROLE_FILTERS.map(r=>(
              <button key={r.id} onClick={()=>setFilter(r.id)}
                className="mono"
                style={{
                  fontSize:11,letterSpacing:".22em",textTransform:"uppercase",
                  padding:"8px 12px",border:"1px solid var(--line-2)",borderRadius:2,cursor:"pointer",
                  background: filter===r.id?"var(--evidence)":"transparent",
                  color: filter===r.id?"#1a1300":"var(--bone-2)"
                }}>
                {r.label}
              </button>
            ))}
          </div>
          <div style={{flex:1}}/>
          <div style={{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",border:"1px solid var(--line-2)",borderRadius:2,minWidth:260}}>
            <span style={{color:"var(--grit)"}}>⌕</span>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="BUSCAR · nome, apelido, facção..."
              style={{background:"transparent",border:0,outline:0,color:"var(--bone)",fontFamily:"Space Mono",fontSize:11,letterSpacing:".22em",width:"100%"}}/>
          </div>
        </div>

        <div className="grid g-3">
          {filtered.map(c=><CharacterCard key={c.id} c={c} onOpen={onOpenDossier}/>)}
        </div>
        {filtered.length===0 && (
          <div className="mono" style={{padding:30,textAlign:"center",color:"var(--grit)"}}>NENHUM PERFIL ENCONTRADO ·  ARQUIVO VAZIO</div>
        )}
      </div>
    </section>
  );
};

Object.assign(window,{GamesSection,CharactersSection});
