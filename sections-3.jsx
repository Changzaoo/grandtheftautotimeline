/* ============ Sections part 3 — Gangs, Cities, Vehicles/Weapons/Radio, Classified ============ */

const GangCard = ({g,onOpen})=>(
  <div className="card" style={{padding:16,position:"relative"}}>
    <Corners/>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:8}}>
      <div>
        <div className="mono" style={{fontSize:10,letterSpacing:".22em",color:g.color}}>● {g.type.toUpperCase()}</div>
        <div className="headline" style={{fontSize:24,marginTop:6,color:"var(--bone)"}}>{g.name}</div>
      </div>
      <div style={{
        width:42,height:42,borderRadius:2,border:`1px solid ${g.color}`,
        display:"grid",placeItems:"center",color:g.color,fontFamily:"Big Shoulders Display",fontWeight:900,fontSize:22,
        boxShadow:`0 0 18px ${g.color}55`
      }}>
        {g.name.split(" ").map(w=>w[0]).slice(0,2).join("")}
      </div>
    </div>
    <hr className="rule" style={{margin:"12px 0"}}/>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,fontFamily:"Space Mono",fontSize:11,color:"var(--bone-2)"}}>
      <div><span style={{color:"var(--grit)"}}>CIDADE</span><br/>{g.city}</div>
      <div><span style={{color:"var(--grit)"}}>TERRITÓRIO</span><br/>{g.territory}</div>
      <div><span style={{color:"var(--grit)"}}>LIDERANÇA</span><br/>{g.leaders}</div>
      <div><span style={{color:"var(--grit)"}}>RIVAIS</span><br/><span style={{color:"var(--siren)"}}>{g.rivals}</span></div>
    </div>
    <button className="btn" style={{marginTop:14,padding:"8px 12px",fontSize:11}} onClick={()=>onOpen({type:"gang",g})}>Painel Criminal <span className="arr">→</span></button>
  </div>
);

const GangsSection = ({onOpenDossier})=>(
  <section id="gangs" style={{padding:"96px 0",position:"relative",background:"linear-gradient(180deg, #0a0a0d, #0c0a12)"}}>
    {/* faint connector lines across the whole section */}
    <div className="wrap" style={{position:"relative"}}>
      <div className="sec-head">
        <div>
          <Eyebrow color="var(--siren)">Capítulo 06 · painel de investigação</Eyebrow>
          <h2>Gangues, <em>Máfias</em> e Facções</h2>
        </div>
        <div className="right">linhas vermelhas conectam rivais · clique para abrir</div>
      </div>

      <div style={{position:"relative"}}>
        {/* Decorative SVG connector lines */}
        <svg className="connector" viewBox="0 0 100 100" preserveAspectRatio="none" style={{width:"100%",height:"100%",position:"absolute"}}>
          {[
            {x1:18,y1:18,x2:42,y2:18},
            {x1:42,y1:42,x2:66,y2:65},
            {x1:66,y1:18,x2:90,y2:42},
            {x1:18,y1:65,x2:42,y2:82},
          ].map((l,i)=>(
            <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#ff2a2a" strokeWidth=".15" strokeDasharray=".6 .6" opacity=".5"/>
          ))}
        </svg>

        <div className="grid g-4">
          {GANGS.map((g,i)=><GangCard key={i} g={g} onOpen={onOpenDossier}/>)}
        </div>
      </div>
    </div>
  </section>
);

/* ----- Cities ----- */
const CityCard = ({c,onOpen})=>{
  const t = TONE[c.tone];
  return (
    <div className="card" style={{padding:0,gridColumn: c.name==="Liberty City"||c.name==="Los Santos"||c.name==="Costa Tropical"?"span 2":"span 1"}}>
      <Corners/>
      <div style={{position:"relative",aspectRatio:"16/9",background:`linear-gradient(180deg, ${t.a}, ${t.b})`,overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,opacity:.55}}><Skyline palette={{sky:t.a,a:t.b,b:t.a,c2:"#101018",win:t.accent}}/></div>
        <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse at 20% 0%, ${t.accent}33, transparent 50%)`}}/>
        <div style={{position:"absolute",top:14,left:14,right:14,display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <Tag tone={t.tag}>{c.crime}</Tag>
            <div className="display" style={{fontSize:46,marginTop:10,color:"#fff",lineHeight:.9}}>{c.name}</div>
            <div className="mono" style={{color:"var(--bone-2)",fontSize:11,letterSpacing:".22em",marginTop:6}}>{c.sub.toUpperCase()} · POP. {c.pop}</div>
          </div>
          <div style={{width:110,height:90,border:"1px solid var(--line-2)",borderRadius:2,overflow:"hidden",background:"#080810"}}>
            <MiniMap pins={c.pins}/>
          </div>
        </div>
      </div>
      <div style={{padding:16,display:"flex",justifyContent:"space-between",alignItems:"center",borderTop:"1px solid var(--line)",gap:10,flexWrap:"wrap"}}>
        <div style={{color:"var(--bone-2)",fontSize:13,maxWidth:520}}>{c.note} <span style={{color:"var(--grit)"}}> // espaço para história da cidade.</span></div>
        <button className="btn" style={{padding:"8px 12px",fontSize:11}} onClick={()=>onOpen({type:"city",c})}>Explorar Cidade <span className="arr">→</span></button>
      </div>
    </div>
  );
};

const CitiesSection = ({onOpenDossier})=>(
  <section id="cities" style={{padding:"96px 0"}}>
    <div className="wrap">
      <div className="sec-head">
        <div>
          <Eyebrow color="var(--copper)">Capítulo 07 · mapa visual</Eyebrow>
          <h2>Mapa das <em>Cidades</em></h2>
        </div>
        <div className="right">8 zonas · rotas · territórios</div>
      </div>
      <div className="grid g-3" style={{gridAutoRows:"min-content"}}>
        {CITIES.map((c,i)=><CityCard key={i} c={c} onOpen={onOpenDossier}/>)}
      </div>
    </div>
  </section>
);

/* ----- Vehicles + Weapons + Radio ----- */
const SmallItemCard = ({title,sub,right,icon,color})=>(
  <div className="card" style={{padding:14}}>
    <Corners/>
    <div style={{display:"flex",alignItems:"center",gap:12}}>
      <div style={{width:42,height:42,display:"grid",placeItems:"center",border:`1px solid ${color||"var(--line-2)"}`,borderRadius:2,color:color||"var(--bone)"}}>
        {icon}
      </div>
      <div style={{flex:1,minWidth:0}}>
        <div className="headline" style={{fontSize:16,color:"var(--bone)",lineHeight:1}}>{title}</div>
        <div className="mono" style={{fontSize:10,letterSpacing:".22em",color:"var(--grit)",marginTop:4}}>{sub}</div>
      </div>
      {right && <div className="mono" style={{fontSize:11,color:color||"var(--bone-2)"}}>{right}</div>}
    </div>
  </div>
);

const Icon = {
  car: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 16h18M5 16l1.5-5h11L19 16M7 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>,
  gun: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 9h12l3 3v4h-3l-2-2H3z M5 9V7"/></svg>,
  radio: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="8" width="18" height="11" rx="2"/><circle cx="16" cy="13.5" r="2"/><path d="M7 13h4M7 15h3M8 8 17 4"/></svg>,
  money:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="6" width="18" height="12" rx="1"/><circle cx="12" cy="12" r="3"/></svg>,
};

const ArsenalSection = ()=>(
  <section id="vehicles" style={{padding:"96px 0",background:"linear-gradient(180deg, #0a0a0d, #0a0c12 50%, #0a0a0d)"}}>
    <div className="wrap">
      <div className="sec-head">
        <div>
          <Eyebrow color="var(--money)">Capítulo 08 · inventário</Eyebrow>
          <h2><em>Garagem</em>, Arsenal & Rádio</h2>
        </div>
        <div className="right">cards reutilizáveis · ícones · placeholders</div>
      </div>

      <div className="grid" style={{gridTemplateColumns:"1.1fr 1fr 1fr",gap:18}}>
        {/* Garagem */}
        <div className="card" style={{padding:18}}>
          <Corners/>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div className="headline" style={{fontSize:28,color:"var(--bone)"}}>GARAGEM</div>
            <Tag tone="yellow">VEÍCULOS</Tag>
          </div>
          <div className="mono" style={{fontSize:11,letterSpacing:".22em",color:"var(--grit)",marginTop:6}}>frota ICÔNICA · 100+ unidades</div>
          <div style={{marginTop:14,display:"flex",flexDirection:"column",gap:10}}>
            {VEHICLES.map((v,i)=><SmallItemCard key={i} title={v.name} sub={`${v.class.toUpperCase()} · TOP ${v.top}`} icon={Icon.car} color="var(--evidence)" right="◆◆◆◇"/>)}
          </div>
        </div>

        {/* Arsenal */}
        <div className="card" style={{padding:18}}>
          <Corners/>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div className="headline" style={{fontSize:28,color:"var(--bone)"}}>ARSENAL</div>
            <Tag tone="red">ARMAS</Tag>
          </div>
          <div className="mono" style={{fontSize:11,letterSpacing:".22em",color:"var(--grit)",marginTop:6}}>equipamento · 80+ itens</div>
          <div style={{marginTop:14,display:"flex",flexDirection:"column",gap:10}}>
            {WEAPONS.map((w,i)=><SmallItemCard key={i} title={w.name} sub={`${w.class.toUpperCase()} · ${w.rarity.toUpperCase()}`} icon={Icon.gun} color="var(--siren)" right={w.rarity==="Lendário"?"★★★":w.rarity==="Raro"?"★★":"★"}/>)}
          </div>
        </div>

        {/* Rádio */}
        <div className="card" style={{padding:18}}>
          <Corners/>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div className="headline" style={{fontSize:28,color:"var(--bone)"}}>RÁDIO</div>
            <Tag tone="pink">EMISSORAS</Tag>
          </div>
          <div className="mono" style={{fontSize:11,letterSpacing:".22em",color:"var(--grit)",marginTop:6}}>estações · cultura sonora</div>
          <div style={{marginTop:14,display:"flex",flexDirection:"column",gap:10}}>
            {RADIOS.map((r,i)=><SmallItemCard key={i} title={r.name} sub={`${r.genre.toUpperCase()} · ${r.host.toUpperCase()}`} icon={Icon.radio} color={r.color} right={<span className="bars"><span/><span/><span/><span/><span/></span>}/>)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* placeholders for ids weapons + radios (anchors) */
const Anchor = ({id})=>(<span id={id} style={{display:"block",position:"relative",top:-80}}/>);

/* ----- Classified files ----- */
const ClassifiedSection = ()=>(
  <section id="classified" style={{padding:"96px 0",background:"linear-gradient(180deg, #0a0a0d, #110707)"}}>
    <div className="wrap">
      <div className="sec-head">
        <div>
          <Eyebrow color="var(--classified)">Capítulo 12 · classified</Eyebrow>
          <h2>Arquivos <em>Secretos</em> & Curiosidades</h2>
        </div>
        <div className="right">recortes · teorias · easter eggs</div>
      </div>

      <div className="grid g-3">
        {CLASSIFIED.map((d,i)=>(
          <div key={d.id} className="dossier" style={{padding:22,transform:`rotate(${(i%2===0?-0.4:0.4)}deg)`}}>
            <div className={`stamp ${d.stamp==="TEORIA"?"green":""}`}>{d.stamp}</div>
            <div style={{fontSize:11,letterSpacing:".22em"}}>{d.file}</div>
            <h4>{d.title}</h4>
            <div className="line"/>
            <p style={{fontSize:13,lineHeight:1.5,margin:0}}>
              {d.body.split(" ").map((w,k)=>{
                // randomly redact a few words for fun
                const redact = ([4,7,12,18].includes(k));
                return redact ? <span key={k}><span className="redact">{w}</span> </span> : <span key={k}>{w} </span>;
              })}
            </p>
            <div className="line" style={{marginTop:12}}/>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:6,fontSize:10,letterSpacing:".22em"}}>
              <span>ARQUIVADO · 24/0X/197X</span>
              <span>// ESPAÇO PARA CONTEÚDO</span>
            </div>
          </div>
        ))}
      </div>

      {/* Strip of newspaper headlines */}
      <div className="grid g-3" style={{marginTop:18}}>
        {["MAFIOSO DESAPARECE EM ILHA","COMISSARIO ENVOLVIDO EM ESQUEMA","BANCO É ASSALTADO EM PLENO MEIO-DIA"].map((h,i)=>(
          <div key={i} className="card" style={{padding:18,background:"linear-gradient(180deg,#1a1a1d,#0f0f12)"}}>
            <Corners/>
            <div className="mono" style={{fontSize:10,letterSpacing:".22em",color:"var(--grit)"}}>JORNAL · EDIÇÃO Nº {120+i}</div>
            <div className="display" style={{fontSize:30,lineHeight:.95,marginTop:8,color:"var(--bone)"}}>{h}</div>
            <div style={{marginTop:10,fontSize:12,color:"var(--bone-2)",lineHeight:1.5,fontFamily:"'Times New Roman',serif"}}>
              Testemunhas oculares descrevem cena caótica. Polícia recusou-se a comentar. <span className="hl">A investigação continua aberta.</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window,{GangsSection,CitiesSection,ArsenalSection,ClassifiedSection,Anchor});
