/* ============ Modal + Orgs + Footer + Trivia ============ */

const Dossier = ({open,onClose})=>{
  if(!open) return null;
  const title = open.type==="game" ? (open.t?.title||open.g?.name) :
                open.type==="character" ? open.c?.name :
                open.type==="city" ? open.c?.name :
                open.type==="gang" ? open.g?.name : "DOSSIÊ";
  const sub = open.type==="game" ? (open.t?.city||open.g?.city) :
              open.type==="character" ? `${open.c?.nick} · ${open.c?.faction}` :
              open.type==="city" ? open.c?.sub :
              open.type==="gang" ? `${open.g?.type} · ${open.g?.city}` : "";
  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" onClick={e=>e.stopPropagation()}>
        <div className="head">
          <div>
            <div className="mono" style={{fontSize:10,letterSpacing:".22em",color:"var(--grit)"}}>DOSSIÊ COMPLETO · FILE Nº {Math.floor(Math.random()*9000+1000)}</div>
            <div className="display" style={{fontSize:34,lineHeight:.9,marginTop:4}}>{title}</div>
            <div className="mono" style={{fontSize:11,letterSpacing:".22em",color:"var(--neon)",marginTop:4}}>{sub?.toString().toUpperCase()}</div>
          </div>
          <button className="x" onClick={onClose}>✕</button>
        </div>
        <div className="body">
          <div style={{display:"grid",gridTemplateColumns:"280px 1fr",gap:18}}>
            <div>
              <Placeholder label={open.type==="character"?"MUGSHOT":open.type==="city"?"SKYLINE":"COVER ART"} className="tall"/>
              <div className="mono" style={{fontSize:10,letterSpacing:".22em",color:"var(--grit)",marginTop:8}}>// inserir imagem oficial substituta</div>
              <div style={{marginTop:14,display:"flex",flexDirection:"column",gap:8}}>
                <Tag tone="yellow">CONTEÚDO PENDENTE</Tag>
                <Tag tone="pink">EM CURADORIA</Tag>
                <Tag tone="blue">RELACIONAMENTOS A MAPEAR</Tag>
              </div>
            </div>
            <div>
              <div className="mono" style={{fontSize:11,letterSpacing:".22em",color:"var(--evidence)"}}>RESUMO</div>
              <p style={{color:"var(--bone-2)",lineHeight:1.6,marginTop:6}}>
                Este espaço será preenchido com o conteúdo bruto da franquia: histórico, eventos-chave, conexões com outros personagens e cidades, missões marcantes, easter eggs e referências cruzadas.
              </p>
              <hr className="rule" style={{margin:"14px 0"}}/>

              <div className="grid" style={{gridTemplateColumns:"1fr 1fr",gap:10}}>
                {[
                  ["EVENTOS-CHAVE","// timeline pessoal"],
                  ["RELACIONAMENTOS","// gráfico de conexões"],
                  ["MISSÕES MARCANTES","// lista de operações"],
                  ["CITAÇÕES","// frases icônicas"],
                  ["CONEXÕES CRUZADAS","// outros jogos"],
                  ["EASTER EGGS","// referências"],
                ].map(([k,v],i)=>(
                  <div key={i} style={{padding:14,border:"1px dashed var(--line-2)"}}>
                    <div className="mono" style={{fontSize:10,letterSpacing:".22em",color:"var(--evidence)"}}>{k}</div>
                    <div style={{color:"var(--grit)",fontFamily:"Space Mono",fontSize:12,marginTop:6}}>{v}</div>
                  </div>
                ))}
              </div>

              <hr className="rule" style={{margin:"14px 0"}}/>
              <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                <button className="btn solid" style={{padding:"10px 14px",fontSize:13}}>Editar Conteúdo</button>
                <button className="btn" style={{padding:"10px 14px",fontSize:13}}>Exportar Ficha</button>
                <button className="btn neon" style={{padding:"10px 14px",fontSize:13}}>Adicionar Conexão</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ----- Organizations ----- */
const ORGS = [
  {name:"Tridente Holdings",  type:"Empresarial Criminosa", color:"#a855f7", desc:"Conglomerado que lava capital em quatro cidades."},
  {name:"DEPT 17 — INTERNA",  type:"Polícia Corrupta",      color:"#3b6cff", desc:"Divisão sombria, opera fora da lei."},
  {name:"Black Anchor PMC",   type:"Militar Privado",       color:"#bdbab1", desc:"Operações de extração ao redor do mundo."},
  {name:"Coral Bank Group",   type:"Financeiro",            color:"#4ade80", desc:"Fachada para movimentação de fundos."},
  {name:"Estúdios Mojo",      type:"Mídia & Sátira",        color:"#ff3d8a", desc:"Produtora-mãe das emissoras fictícias."},
  {name:"Cabal dos Cinco",    type:"Sociedade Secreta",     color:"#f5c518", desc:"Cinco famílias controlam metade da costa."},
];

const OrgsSection = ({onOpenDossier})=>(
  <section id="orgs" style={{padding:"96px 0"}}>
    <div className="wrap">
      <div className="sec-head">
        <div>
          <Eyebrow color="var(--neon-2)">Capítulo 07b · sindicatos</Eyebrow>
          <h2>Organizações <em>Criminosas</em></h2>
        </div>
        <div className="right">empresas-fachada · PMCs · sociedades secretas</div>
      </div>
      <div className="grid g-3">
        {ORGS.map((o,i)=>(
          <div key={i} className="card" style={{padding:18}}>
            <Corners/>
            <div style={{display:"flex",gap:14,alignItems:"flex-start"}}>
              <div style={{
                width:54,height:54,border:`1px solid ${o.color}`,borderRadius:2,
                display:"grid",placeItems:"center",color:o.color,
                background:`radial-gradient(closest-side, ${o.color}22, transparent)`,
                fontFamily:"Big Shoulders Display",fontWeight:900,fontSize:24
              }}>{o.name.split(" ").map(w=>w[0]).slice(0,2).join("")}</div>
              <div style={{flex:1}}>
                <div className="mono" style={{fontSize:10,letterSpacing:".22em",color:o.color}}>{o.type.toUpperCase()}</div>
                <div className="headline" style={{fontSize:22,marginTop:4,color:"var(--bone)"}}>{o.name}</div>
                <div style={{color:"var(--bone-2)",fontSize:12,marginTop:8,lineHeight:1.5}}>{o.desc}</div>
              </div>
            </div>
            <hr className="rule" style={{margin:"14px 0"}}/>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <span className="mono" style={{fontSize:10,letterSpacing:".22em",color:"var(--grit)"}}>CONEXÕES: 12 ENTIDADES</span>
              <button className="btn" style={{padding:"6px 10px",fontSize:10}} onClick={()=>onOpenDossier({type:"org",o})}>Abrir →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ----- Weapons & Radios anchor anchors (already inside arsenal) — small trivia ----- */
const TriviaSection = ()=>(
  <section id="trivia" style={{padding:"96px 0",background:"linear-gradient(180deg, #0a0a0d, #0c0d12)"}}>
    <div className="wrap">
      <div className="sec-head">
        <div>
          <Eyebrow color="var(--evidence)">Capítulo 11 · culture log</Eyebrow>
          <h2>Curiosidades <em>& Cultura</em></h2>
        </div>
        <div className="right">trivia · referências · easter eggs</div>
      </div>

      <div className="grid g-4">
        {[
          {n:"248", l:"Empresas fictícias inventadas pelo universo"},
          {n:"79",  l:"Manchetes de jornais escritos à mão"},
          {n:"412", l:"Faixas musicais únicas em emissoras"},
          {n:"~1k", l:"Diálogos paralelos de pedestres"},
        ].map((s,i)=>(
          <div key={i} className="card" style={{padding:18}}>
            <Corners/>
            <div className="display" style={{fontSize:60,color:"var(--neon)",lineHeight:.9,textShadow:"0 0 24px rgba(255,61,138,.45)"}}>{s.n}</div>
            <div style={{color:"var(--bone-2)",fontSize:13,marginTop:10}}>{s.l}</div>
          </div>
        ))}
      </div>

      <div className="grid" style={{gridTemplateColumns:"2fr 1fr",gap:18,marginTop:18}}>
        <div className="card" style={{padding:22}}>
          <Corners/>
          <div className="eyebrow">SÁTIRA URBANA</div>
          <div className="display" style={{fontSize:46,marginTop:6}}>“Toda cidade tem o crime que merece.”</div>
          <div className="mono" style={{color:"var(--grit)",marginTop:14,fontSize:11,letterSpacing:".22em"}}>// linha-tema editorial · trocar quando o conteúdo final entrar</div>
        </div>
        <div className="card" style={{padding:18}}>
          <Corners/>
          <div className="eyebrow">PRÓXIMOS</div>
          <ul style={{listStyle:"none",margin:0,padding:0,fontFamily:"Space Mono",fontSize:12,letterSpacing:".06em",color:"var(--bone-2)"}}>
            {["histórias completas","relações cruzadas","mapa interativo real","timeline animada","trilha sonora por cidade"].map((x,i)=>(
              <li key={i} style={{display:"flex",justifyContent:"space-between",padding:"10px 0",borderBottom:"1px dashed var(--line)"}}>
                <span>· {x}</span><span style={{color:"var(--evidence)"}}>PENDENTE</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Footer = ()=>(
  <footer>
    <div className="wrap">
      <div className="grid-foot">
        <div>
          <div className="display" style={{fontSize:46,lineHeight:.9}}>URBAN<br/><span style={{color:"var(--evidence)"}}>UNIVERSE</span></div>
          <div className="mono" style={{fontSize:11,letterSpacing:".22em",color:"var(--grit)",marginTop:14}}>
            ARQUIVO VISUAL FICTÍCIO · INSPIRADO NO GÊNERO DE MUNDO ABERTO URBANO. ESTE É UM PROTÓTIPO DE FÃ; NENHUMA MARCA, LOGO OU ARTE OFICIAL É UTILIZADA.
          </div>
        </div>
        <div>
          <div className="eyebrow">SEÇÕES</div>
          <ul style={{listStyle:"none",margin:"12px 0 0",padding:0,fontFamily:"Space Mono",fontSize:12,letterSpacing:".06em"}}>
            {NAV.slice(0,6).map(n=><li key={n.id}><a href={`#${n.id}`} style={{color:"var(--bone-2)",textDecoration:"none",padding:"6px 0",display:"block"}}>· {n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="eyebrow">MAIS</div>
          <ul style={{listStyle:"none",margin:"12px 0 0",padding:0,fontFamily:"Space Mono",fontSize:12,letterSpacing:".06em"}}>
            {NAV.slice(6).map(n=><li key={n.id}><a href={`#${n.id}`} style={{color:"var(--bone-2)",textDecoration:"none",padding:"6px 0",display:"block"}}>· {n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <div className="eyebrow">STATUS</div>
          <div style={{marginTop:12,fontFamily:"Space Mono",fontSize:12,letterSpacing:".06em",color:"var(--bone-2)",lineHeight:1.8}}>
            <div>BUILD v0.1 — PROTÓTIPO</div>
            <div>CONTEÚDO TEXTUAL: <span style={{color:"var(--evidence)"}}>PENDENTE</span></div>
            <div>VISUAL: <span style={{color:"var(--money)"}}>OK</span></div>
            <div>HUMOR: <span style={{color:"var(--neon)"}}>SATÍRICO</span></div>
          </div>
        </div>
      </div>

      <hr className="rule" style={{margin:"30px 0"}}/>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10}}>
        <div className="mono" style={{fontSize:10,letterSpacing:".22em",color:"var(--grit)"}}>© ANO XXXX — TODOS OS DIREITOS NÃO RESERVADOS · FAN-ART</div>
        <div className="mono" style={{fontSize:10,letterSpacing:".22em",color:"var(--grit)"}}>MADE WITH ◆ CONCRETE, NEON & A LITTLE BIT OF CRIME</div>
      </div>
    </div>
  </footer>
);

Object.assign(window,{Dossier,OrgsSection,TriviaSection,Footer});
