/* ============ EXPANDED CHARACTERS & CITIES SECTIONS ============ */

// ----- Enhanced Character Modal with Full Details -----
const CharacterDetailModal = ({character, onClose})=>{
  if(!character) return null;
  return (
    <div style={{
      position:"fixed",inset:0,background:"rgba(0,0,0,.85)",display:"flex",alignItems:"center",
      justifyContent:"center",zIndex:1000,backdropFilter:"blur(8px)",padding:20
    }} onClick={onClose}>
      <div className="card" style={{
        padding:0,maxWidth:800,maxHeight:"85vh",overflow:"auto",position:"relative"
      }} onClick={(e)=>e.stopPropagation()}>
        <Corners/>
        <div style={{padding:32,position:"sticky",top:0,background:"linear-gradient(180deg,rgba(28,28,34,.95),rgba(15,15,19,.85))",borderBottom:"1px solid var(--line)"}}>
          <button onClick={onClose} style={{
            position:"absolute",top:16,right:16,background:"transparent",border:"1px solid var(--line-2)",
            color:"var(--bone)",cursor:"pointer",width:36,height:36,fontSize:18,borderRadius:2
          }}>×</button>
          <div className="display" style={{fontSize:42,marginBottom:8,lineHeight:1}}>{character.name}</div>
          <div style={{color:"var(--neon)",fontSize:13}}>"{character.aliases?.[0] || character.aliases || 'Sem apelido'}"</div>
        </div>
        <div style={{padding:32,display:"grid",gridTemplateColumns:"1fr 1fr",gap:32}}>
          <div>
            <h3 className="headline" style={{fontSize:14,marginBottom:12}}>Dados Pessoais</h3>
            <div style={{display:"grid",gap:12,fontSize:12}}>
              <div><span style={{color:"var(--grit)"}}>UNIVERSO</span><br/><strong>{character.universe}</strong></div>
              <div><span style={{color:"var(--grit)"}}>CIDADE</span><br/><strong>{character.city}</strong></div>
              <div><span style={{color:"var(--grit)"}}>PAPEL</span><br/><strong>{character.role}</strong></div>
              <div><span style={{color:"var(--grit)"}}>IMPORTÂNCIA</span><br/><strong>{character.importance}</strong></div>
            </div>
          </div>
          <div>
            <h3 className="headline" style={{fontSize:14,marginBottom:12}}>Status & Filiações</h3>
            <div style={{display:"grid",gap:12,fontSize:12}}>
              <div><span style={{color:"var(--grit)"}}>STATUS</span><br/><strong style={{color:character.fate?.includes("Morto")?"var(--siren)":"var(--money)"}}>{character.fate?.split(".")[0] || "Desconhecido"}</strong></div>
              <div><span style={{color:"var(--grit)"}}>FILIAÇÕES</span><br/><strong>{character.affiliations?.[0] || "Independente"}</strong></div>
              <div><span style={{color:"var(--grit)"}}>INIMIGOS</span><br/><strong>{character.enemies?.[0] || "Ninguém notável"}</strong></div>
            </div>
          </div>
        </div>
        <div style={{padding:32,borderTop:"1px solid var(--line)"}}>
          <h3 className="headline" style={{fontSize:14,marginBottom:12}}>Biografia</h3>
          <div style={{color:"var(--bone-2)",fontSize:13,lineHeight:1.7}}>{character.biography}</div>
        </div>
        {character.storyArc && (
          <div style={{padding:32,borderTop:"1px solid var(--line)"}}>
            <h3 className="headline" style={{fontSize:14,marginBottom:12}}>Arco Narrativo</h3>
            <div style={{color:"var(--bone-2)",fontSize:13,lineHeight:1.7}}>{character.storyArc}</div>
          </div>
        )}
      </div>
    </div>
  );
};

// ----- Enhanced Characters Section -----
const CharactersExpandedSection = ({onOpenDossier})=>{
  const [filterRole, setFilterRole] = React.useState("all");
  const [filterGame, setFilterGame] = React.useState("all");

  const games = [...new Set(PERSONAGENS_COMPLETOS.map(c=>c.games?.[0] || "Unknown"))];
  
  const filtered = PERSONAGENS_COMPLETOS.filter(c=>
    (filterRole==="all" || c.role===filterRole) &&
    (filterGame==="all" || c.games?.includes(filterGame))
  );

  return (
    <section id="characters" style={{padding:"96px 0",background:"linear-gradient(180deg,#0a0a0d, #0e0e14 30%, #0a0a0d)"}}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <Eyebrow color="var(--neon)">Capítulo 04 · dossiê criminal</Eyebrow>
            <h2>Personagens da Saga <em>Completa</em></h2>
          </div>
          <div className="right">{filtered.length} personagens</div>
        </div>

        {/* Filters */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:32}}>
          <div>
            <label className="eyebrow" style={{marginBottom:8,display:"block"}}>Papel</label>
            <select value={filterRole} onChange={(e)=>setFilterRole(e.target.value)} style={{
              width:"100%",padding:"10px 12px",background:"linear-gradient(180deg,#1c1c22,#121217)",
              border:"1px solid var(--line-2)",borderRadius:2,color:"var(--bone)",fontFamily:"Space Mono",fontSize:12,cursor:"pointer"
            }}>
              <option value="all">Todos os papéis</option>
              <option value="Protagonista">Protagonistas</option>
              <option value="Antagonista">Antagonistas</option>
              <option value="Aliado">Aliados</option>
              <option value="Secundário">Secundários</option>
            </select>
          </div>
          <div>
            <label className="eyebrow" style={{marginBottom:8,display:"block"}}>Jogo</label>
            <select value={filterGame} onChange={(e)=>setFilterGame(e.target.value)} style={{
              width:"100%",padding:"10px 12px",background:"linear-gradient(180deg,#1c1c22,#121217)",
              border:"1px solid var(--line-2)",borderRadius:2,color:"var(--bone)",fontFamily:"Space Mono",fontSize:12,cursor:"pointer"
            }}>
              <option value="all">Todos os jogos</option>
              {games.map(g=><option key={g} value={g}>{g}</option>)}
            </select>
          </div>
        </div>

        {/* Characters grid */}
        <div className="grid g-3">
          {filtered.map(c=>(
            <div key={c.id} className="card" style={{padding:0,cursor:"pointer"}} onClick={()=>onOpenDossier({type:"character",c})}>
              <Corners/>
              <div style={{display:"grid",gridTemplateColumns:"100px 1fr",gap:0}}>
                <div style={{padding:12,borderRight:"1px solid var(--line)",background:"rgba(255,61,138,.06)"}}>
                  <div className="ph" style={{aspectRatio:"3/4",margin:0,background:"linear-gradient(135deg, rgba(255,61,138,.2), rgba(59,108,255,.1))"}}><Corners/></div>
                  <div className="mono" style={{fontSize:9,color:"var(--grit)",marginTop:8,textAlign:"center"}}>{c.id}</div>
                </div>
                <div style={{padding:14}}>
                  <Tag tone={c.role==="Protagonista"?"yellow":c.role==="Antagonista"?"red":"blue"}>{c.role}</Tag>
                  <div className="headline" style={{fontSize:16,marginTop:8,lineHeight:1}}>{c.name}</div>
                  <div style={{color:"var(--neon)",fontSize:10,marginTop:4}}>"{c.aliases?.[0] || ""}"</div>
                  <hr className="rule" style={{margin:"10px 0"}}/>
                  <div style={{fontSize:11,color:"var(--bone-2)",lineHeight:1.5}}>
                    <div><span style={{color:"var(--grit)"}}>Cidade:</span> {c.city}</div>
                    <div><span style={{color:"var(--grit)"}}>Status:</span> {c.fate?.split(".")[0] || "Vivo"}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----- Enhanced Cities Section -----
const CitiesExpandedSection = ({onOpenDossier})=>{
  const [selectedCity, setSelectedCity] = React.useState(null);

  return (
    <section id="cities" style={{padding:"96px 0",background:"linear-gradient(180deg,#0a0a0d 0%, #1a0a0d 50%, #0a0a0d 100%)"}}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <Eyebrow color="var(--evidence)">Capítulo 05 · mapa criminal</Eyebrow>
            <h2>Cidades & Locais <em>da Franquia</em></h2>
          </div>
          <div className="right">{CIDADES_COMPLETAS.length} localizações principais</div>
        </div>

        {/* City cards */}
        <div className="grid g-3" style={{marginBottom:42}}>
          {CIDADES_COMPLETAS.map(city=>(
            <div key={city.id} className="card" style={{padding:22,cursor:"pointer"}} onClick={()=>setSelectedCity(city)}>
              <Corners/>
              <div className="headline" style={{fontSize:20,marginBottom:8,color:"var(--evidence)"}}>{city.name}</div>
              <div style={{color:"var(--bone-2)",fontSize:12,marginBottom:12}}>Inspiração: <strong>{city.realWorldInspiration}</strong></div>
              <hr className="rule" style={{margin:"12px 0"}}/>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,fontSize:11,color:"var(--bone-2)"}}>
                <div><span style={{color:"var(--grit)"}}>Jogos:</span> {city.games.length}</div>
                <div><span style={{color:"var(--grit)"}}>Facções:</span> {city.factions.length}</div>
                <div><span style={{color:"var(--grit)"}}>Universos:</span> {city.universeAppearances.length}</div>
                <div><span style={{color:"var(--grit)"}}>Distritos:</span> {city.districts.length}</div>
              </div>
              <div style={{marginTop:12,padding:8,background:"rgba(245,197,24,.08)",borderRadius:2,fontSize:11,color:"var(--evidence)"}}>
                Clique para detalhes →
              </div>
            </div>
          ))}
        </div>

        {/* City detail modal */}
        {selectedCity && (
          <div style={{
            position:"fixed",inset:0,background:"rgba(0,0,0,.85)",display:"flex",alignItems:"center",
            justifyContent:"center",zIndex:1000,backdropFilter:"blur(8px)",padding:20
          }} onClick={()=>setSelectedCity(null)}>
            <div className="card" style={{
              padding:0,maxWidth:900,maxHeight:"85vh",overflow:"auto",position:"relative"
            }} onClick={(e)=>e.stopPropagation()}>
              <Corners/>
              <div style={{padding:32,position:"sticky",top:0,background:"linear-gradient(180deg,rgba(28,28,34,.95),rgba(15,15,19,.85))",borderBottom:"1px solid var(--line)",display:"flex",justifyContent:"space-between",alignItems:"start"}}>
                <div>
                  <div className="display" style={{fontSize:42,marginBottom:8,lineHeight:1,color:"var(--evidence)"}}>{selectedCity.name}</div>
                  <div style={{color:"var(--bone-2)",fontSize:13}}>Baseada em: <strong>{selectedCity.realWorldInspiration}</strong></div>
                </div>
                <button onClick={()=>setSelectedCity(null)} style={{
                  background:"transparent",border:"1px solid var(--line-2)",color:"var(--bone)",cursor:"pointer",
                  width:36,height:36,fontSize:18,borderRadius:2
                }}>×</button>
              </div>
              <div style={{padding:32,display:"grid",gridTemplateColumns:"1fr 1fr",gap:32}}>
                <div>
                  <h3 className="headline" style={{fontSize:14,marginBottom:12}}>Sobre</h3>
                  <div style={{color:"var(--bone-2)",fontSize:12,lineHeight:1.7,marginBottom:20}}>{selectedCity.description}</div>
                  
                  <h3 className="headline" style={{fontSize:14,marginBottom:12}}>Aparições</h3>
                  <div style={{display:"grid",gap:6,marginBottom:20}}>
                    {selectedCity.universeAppearances.map(u=><Tag key={u} tone="blue">{u}</Tag>)}
                  </div>

                  <h3 className="headline" style={{fontSize:14,marginBottom:12}}>Jogos</h3>
                  <div style={{display:"grid",gap:4,fontSize:11,color:"var(--bone-2)"}}>
                    {selectedCity.games.map(g=><div key={g}>• {g}</div>)}
                  </div>
                </div>
                <div>
                  <h3 className="headline" style={{fontSize:14,marginBottom:12}}>Distritos</h3>
                  <div style={{display:"grid",gap:4,fontSize:11,color:"var(--bone-2)",marginBottom:20}}>
                    {selectedCity.districts.map(d=><div key={d}>◆ {d}</div>)}
                  </div>

                  <h3 className="headline" style={{fontSize:14,marginBottom:12}}>Facções Locais</h3>
                  <div style={{display:"grid",gap:4,fontSize:11,color:"var(--bone-2)",marginBottom:20}}>
                    {selectedCity.factions.map(f=><div key={f}>⚔ {f}</div>)}
                  </div>

                  <h3 className="headline" style={{fontSize:14,marginBottom:12}}>Personagens</h3>
                  <div style={{display:"grid",gap:4,fontSize:11,color:"var(--bone-2)"}}>
                    {selectedCity.characters.map(ch=><div key={ch}>→ {ch}</div>)}
                  </div>
                </div>
              </div>
              <div style={{padding:32,borderTop:"1px solid var(--line)"}}>
                <h3 className="headline" style={{fontSize:14,marginBottom:12}}>Estilo Visual & Temas</h3>
                <div style={{color:"var(--bone-2)",fontSize:12,lineHeight:1.7,marginBottom:12}}>{selectedCity.visualStyle}</div>
                <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(100px,1fr))",gap:8}}>
                  {selectedCity.themes.map(t=><Tag key={t} tone="pink">{t}</Tag>)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

Object.assign(window,{CharacterDetailModal,CharactersExpandedSection,CitiesExpandedSection});
