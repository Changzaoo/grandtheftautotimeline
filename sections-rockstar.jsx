/* ============ SECTIONS: Rockstar, Universos, GTA Online, GTA VI, Glossário ============ */

// ----- Rockstar History Section -----
const RockstarSection = ()=>{
  return (
    <section id="rockstar" style={{padding:"96px 0",background:"linear-gradient(180deg,#0a0a0d, #0e0e14 30%, #0a0a0d)"}}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <Eyebrow color="var(--neon)">Capítulo 13 · genealogia</Eyebrow>
            <h2>Rockstar Games & <em>Norte</em></h2>
          </div>
          <div className="right">De DMA Design à Revolução do Mundo Aberto</div>
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:42,marginBottom:48}}>
          {/* Timeline visual */}
          <div style={{position:"relative",paddingTop:30}}>
            {[
              {year:"1987", title:"DMA Design", desc:"David Jones funda em Dundee, Escócia"},
              {year:"1997", title:"GTA 1", desc:"Lançamento revolucionário top-down"},
              {year:"1998", title:"Rockstar Games", desc:"Fundação da Rockstar Games por Sam & Dan Houser"},
              {year:"2001", title:"GTA III", desc:"Revolução 3D que redefiniu a indústria"},
              {year:"2008", title:"Era HD", desc:"GTA IV marca entrada na era de alta definição"},
              {year:"2013", title:"GTA V + Online", desc:"Fenômeno cultural e comercial"},
            ].map((item, i)=>(
              <div key={i} style={{position:"relative",paddingBottom:32,borderLeft:"2px solid var(--line)",paddingLeft:24}}>
                <div style={{position:"absolute",left:"-7px",top:0,width:12,height:12,background:"var(--neon)",border:"2px solid var(--asphalt)",borderRadius:"50%"}}/>
                <div className="mono" style={{color:"var(--evidence)",fontSize:11,letterSpacing:".22em"}}>{item.year}</div>
                <div className="headline" style={{fontSize:16,marginTop:4}}>{item.title}</div>
                <div style={{color:"var(--bone-2)",fontSize:13,marginTop:8}}>{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Founders & facts */}
          <div>
            <div className="card" style={{padding:22,marginBottom:14}}>
              <Corners/>
              <div className="eyebrow" style={{marginBottom:12}}>Fundadores da Rockstar Games</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                {["Sam Houser", "Dan Houser", "Terry Donovan", "Jamie King", "Gary Foreman"].map((n,i)=>(
                  <div key={i} style={{background:"rgba(255,61,138,.08)",border:"1px solid rgba(255,61,138,.2)",padding:10,borderRadius:2,fontSize:12}}>
                    <Corners/>
                    {n}
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{padding:22}}>
              <Corners/>
              <div className="eyebrow" style={{marginBottom:12}}>Estúdios Principais</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                {[
                  {name:"Rockstar North", city:"Edinburgh, UK", games:"GTA, Principal"},
                  {name:"Rockstar Games", city:"Nova York, USA", games:"Publicação"},
                  {name:"Rockstar San Diego", city:"San Diego, USA", games:"Red Dead"}
                ].map((s,i)=>(
                  <div key={i} style={{background:"rgba(59,108,255,.08)",border:"1px solid rgba(59,108,255,.2)",padding:10,borderRadius:2,fontSize:11}}>
                    <Corners/>
                    <div className="headline" style={{fontSize:12}}>{s.name}</div>
                    <div style={{color:"var(--bone-2)",marginTop:4}}>{s.city}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* History cards */}
        <div className="grid g-3">
          {[
            {period:"1987-1997", title:"Era pré-GTA", content:"DMA Design cria jogos variados. David Jones liderava com Mike Dailly. Foco em gameplay inovador."},
            {period:"1998-2001", title:"Transição para 3D", content:"Rockstar Games formada. DMA Design torna-se Rockstar North. Desenvolvimento de GTA III redefiniu indústria."},
            {period:"2002-2006", title:"Pico da Era 3D", content:"Vice City e San Andreas consolidam franquia. Cada lançamento quebra recordes. GTA torna-se fenômeno cultural."},
            {period:"2008-2013", title:"Era HD Inicial", content:"GTA IV marca entrada em HD. Engine RAGE. Depois, GTA V com 3 protagonistas. GTA Online cria novo modelo de negócio."},
            {period:"2013-2026", title:"Plataforma Viva", content:"GTA Online domina receita. Atualizações contínuas, novos conteúdos. Bilhões em receita. Preparação para GTA VI."},
            {period:"2026+", title:"Próxima Era", content:"GTA VI marca nova geração. Leonida, protagonistas duplos, tema digital. Expectativa global estratosférica."},
          ].map((h,i)=>(
            <div key={i} className="card" style={{padding:22}}>
              <Corners/>
              <div className="mono" style={{fontSize:10,color:"var(--evidence)",letterSpacing:".22em",marginBottom:8}}>{h.period}</div>
              <div className="headline" style={{fontSize:18,marginBottom:10}}>{h.title}</div>
              <div style={{color:"var(--bone-2)",fontSize:13,lineHeight:1.5}}>{h.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----- Universes Section -----
const UniversesSection = ()=>{
  return (
    <section id="universes" style={{padding:"96px 0",background:"linear-gradient(180deg,#0a0a0d 0%, #0e0e14 30%)"}}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <Eyebrow color="var(--copper)">Capítulo 14 · cosmologia</Eyebrow>
            <h2>Os Três Universos <em>Distintos</em></h2>
          </div>
          <div className="right">2D • 3D • HD — Mundos Paralelos</div>
        </div>

        <div className="grid g-3">
          {UNIVERSOS_GTA.map(uni=>(
            <div key={uni.id} className="card" style={{padding:0,overflow:"hidden"}}>
              <Corners/>
              <div style={{padding:22,background:`rgba(${hexToRgb(uni.color)}, .12)`,borderBottom:"1px solid var(--line)"}}>
                <div className="headline" style={{fontSize:28,color:uni.color,marginBottom:8}}>{uni.name}</div>
                <div style={{color:"var(--bone-2)",fontSize:13}}>{uni.description}</div>
              </div>
              <div style={{padding:22}}>
                <div className="eyebrow" style={{marginBottom:12}}>Jogos</div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:18}}>
                  {uni.games.map(g=><Tag key={g} tone={uni.id==="2d"?"neutral":"blue"}>{g}</Tag>)}
                </div>
                <hr className="rule" style={{margin:"12px 0"}}/>
                <div className="eyebrow" style={{marginBottom:12,marginTop:12}}>Características</div>
                <ul style={{margin:0,paddingLeft:14,fontSize:12,color:"var(--bone-2)",lineHeight:1.7}}>
                  {uni.characteristics.map((c,i)=><li key={i} style={{marginBottom:4}}>{c}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Connection note */}
        <div className="card" style={{padding:22,marginTop:32,background:"rgba(255,61,138,.06)",border:"1px solid rgba(255,61,138,.3)"}}>
          <Corners/>
          <div className="eyebrow" style={{color:"var(--neon)",marginBottom:12}}>Conexões Entre Universos</div>
          <div style={{color:"var(--bone-2)",fontSize:13,lineHeight:1.6}}>
            Cada universo é <strong>canônico separadamente</strong>. Personagens e eventos não se cruzam entre universos, mas podem ser referenciados. Por exemplo: Um cartaz em GTA V pode referenciar um evento de GTA III, mas não há crossover narrativo. Cada universo tem suas próprias regras, tecnologia e cronologia.
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper para conversão hex para rgb
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : "255,255,255";
};

// ----- GTA Online Section -----
const GTAOnlineSection = ()=>{
  return (
    <section id="gtaonline" style={{padding:"96px 0",background:"linear-gradient(180deg,#0a0a0d 0%, #1a0a2a 50%, #0a0a0d 100%)"}}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <Eyebrow color="var(--money)">Capítulo 15 · plataforma viva</Eyebrow>
            <h2>GTA Online: A Revolução do <em>Jogo Vivo</em></h2>
          </div>
          <div className="right">Fenômeno: $6+ bilhões em receita (2013-2024)</div>
        </div>

        {/* Key stats */}
        <div className="grid g-3" style={{marginBottom:48}}>
          {[
            {stat:"$6.4B+", label:"Receita total estimada desde 2013"},
            {stat:"150M+", label:"Jogadores únicos registrados"},
            {stat:"13+", label:"Anos de atualizações contínuas"},
            {stat:"∞", label:"Usuários simultâneos em picos"},
          ].map((s,i)=>(
            <div key={i} className="card" style={{padding:22,textAlign:"center"}}>
              <Corners/>
              <div className="display" style={{fontSize:42,color:"var(--money)",marginBottom:6}}>{s.stat}</div>
              <div className="mono" style={{fontSize:11,color:"var(--bone-2)",letterSpacing:".22em"}}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Evolution timeline */}
        <h3 style={{fontSize:20,marginBottom:24}}>Evolução de Conteúdo</h3>
        <div style={{display:"grid",gap:14}}>
          {[
            {year:"2013-2014", title:"Alpha Phase", desc:"Heists começam. Pegasus (veículos). Primeiras propriedades. Jogadores começam com R$100."},
            {year:"2015", title:"Imperialism", desc:"Propriedades de negócios. CEO Office. Import/Export. Economia complexa."},
            {year:"2016-2017", title:"Motor Club", desc:"Motoclubes. Propriedades MC. Tráfico. Controle de território."},
            {year:"2017-2019", title:"Diamond Age", desc:"Diamond Casino. Jogos de azar. Luxo. Yacht Club."},
            {year:"2019-2020", title:"Underworld", desc:"Bunkers. Laboratórios de drogas. Cunning Stunts. Arenas."},
            {year:"2020-2023", title:"Criminal Enterprise", desc:"Cayo Perico Heist. The Contract. Nightclub upgrades. Agency Security."},
            {year:"2024-2026", title:"Modern Kingpin", desc:"Money Fronts. San Andreas Mercenaries. Preparação para GTA VI."},
          ].map((e,i)=>(
            <div key={i} className="card" style={{padding:22,display:"grid",gridTemplateColumns:"150px 1fr",gap:18}}>
              <Corners/>
              <div>
                <div className="mono" style={{fontSize:10,color:"var(--evidence)",letterSpacing:".22em",marginBottom:6}}>{e.year}</div>
                <div className="headline" style={{fontSize:16,color:"var(--neon)"}}>{e.title}</div>
              </div>
              <div style={{color:"var(--bone-2)",fontSize:13,lineHeight:1.6}}>{e.desc}</div>
            </div>
          ))}
        </div>

        {/* Business types */}
        <h3 style={{fontSize:20,marginTop:48,marginBottom:24}}>Tipos de Negócios Criminosos</h3>
        <div className="grid g-3">
          {[
            {name:"Narcotráfico", icon:"🌿", desc:"Plantação, processamento, distribuição. Renda lenta, risco médio."},
            {name:"Armamento", icon:"🔫", desc:"Roubo, processamento, venda. Renda média, risco alto."},
            {name:"Contrabando", icon:"📦", desc:"Importação, armazém, venda. Renda alta, risco muito alto."},
            {name:"Nightclub", icon:"🎵", desc:"Lucro passivo de nightclub. Gerenciamento de DJs e segurança."},
            {name:"Casino", icon:"💰", desc:"Gerenciamento de cassino. Operação de jogos ilegais."},
            {name:"Agency", icon:"🛡️", desc:"Segurança privada. Contratos VIP. Renda variável."},
            {name:"Auto Shop", icon:"🏎️", desc:"Customização e roubo de carros. Renda rápida."},
            {name:"Hacking", icon:"💻", desc:"Roubo de criptografia. Operações digitais. Futuro de GTA Online."},
          ].map((b,i)=>(
            <div key={i} className="card" style={{padding:22}}>
              <Corners/>
              <div style={{fontSize:28,marginBottom:8}}>{b.icon}</div>
              <div className="headline" style={{fontSize:16,marginBottom:8}}>{b.name}</div>
              <div style={{color:"var(--bone-2)",fontSize:12,lineHeight:1.5}}>{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ----- GTA VI Section -----
const GTA6Section = ()=>{
  return (
    <section id="gta6" style={{padding:"96px 0",background:"linear-gradient(180deg,#0a0a0d 0%, #2a0a1a 50%, #0a0a0d 100%)"}}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <Eyebrow color="var(--neon)">Capítulo 16 · futuro próximo</Eyebrow>
            <h2>GTA VI: A Próxima Era <em style={{color:"var(--evidence)"}}>2026</em></h2>
          </div>
          <div className="right">Lançamento: 19 de Novembro de 2026 (PS5)</div>
        </div>

        {/* Hero card */}
        <div className="card" style={{padding:0,overflow:"hidden",marginBottom:42}}>
          <Corners/>
          <div style={{position:"relative",aspectRatio:"16/9",background:"linear-gradient(135deg, #2a0a2a 0%, #1a0a2a 100%)",overflow:"hidden"}}>
            <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at 50% 50%, rgba(255,61,138,.25), transparent 70%)"}}/>
            <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:64,opacity:.1}}>🎮</div>
          </div>
          <div style={{padding:32}}>
            <div className="display" style={{fontSize:48,marginBottom:12,color:"var(--neon)"}}>
              Lucia <span style={{color:"var(--evidence)"}}>+</span> Jason
            </div>
            <p style={{color:"var(--bone-2)",fontSize:16,lineHeight:1.6,maxWidth:600,marginBottom:20}}>
              Um casal criminoso em Leonida. Crime moderno, redes sociais, influencers, golpes digitais. Sátira do século XXI.
            </p>
            <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <Tag tone="pink">Dual Protagonistas</Tag>
              <Tag tone="pink">Leonida</Tag>
              <Tag tone="pink">Vice City Moderna</Tag>
              <Tag tone="pink">Crime Digital</Tag>
            </div>
          </div>
        </div>

        {/* Official facts vs speculation */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:30,marginBottom:42}}>
          {/* Confirmed */}
          <div className="card" style={{padding:22}}>
            <Corners/>
            <div className="eyebrow" style={{color:"var(--money)",marginBottom:12}}>✓ Confirmado Oficialmente</div>
            <div style={{display:"grid",gap:12}}>
              {[
                "Lançamento: 19 de novembro de 2026",
                "Ps5 exclusive (temporal)",
                "Ambientação: Leonida (Flórida)",
                "Vice City é cidade principal",
                "Protagonistas: Lucia & Jason",
                "Engine RAGE 2 com ray-tracing",
                "Trilha sonora original",
                "Trailer oficial de 2h+ liberado"
              ].map((f,i)=>(
                <div key={i} style={{display:"flex",gap:10,alignItems:"start",fontSize:12,color:"var(--bone-2)"}}>
                  <span style={{color:"var(--money)",marginTop:2}}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Speculation/Rumors */}
          <div className="card" style={{padding:22,background:"rgba(255,61,138,.06)",border:"1px solid rgba(255,61,138,.3)"}}>
            <Corners/>
            <div className="eyebrow" style={{color:"var(--neon)",marginBottom:12}}>? Especulação Comunitária</div>
            <div style={{display:"grid",gap:12}}>
              {[
                "Tema: Redes sociais & crime digital",
                "Influencers como antagonistas potenciais",
                "Heists em era digital",
                "Pântanos e natureza de Flórida",
                "Múltiplos estados em Leonida",
                "GTA Online integrado desde lançamento",
                "Melhorias gráficas massivas",
                "Foco em narrativa contempoânea"
              ].map((s,i)=>(
                <div key={i} style={{display:"flex",gap:10,alignItems:"start",fontSize:12,color:"var(--bone-2)"}}>
                  <span style={{color:"var(--neon)",marginTop:2}}>?</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Speculation: Story speculation */}
        <h3 style={{fontSize:20,marginBottom:18}}>Possível Narrativa (Especulação Informada)</h3>
        <div className="card" style={{padding:22}}>
          <Corners/>
          <div style={{color:"var(--bone-2)",fontSize:13,lineHeight:1.8}}>
            <p>
              Lucia Caminos é uma mulher criminosa em Leonida. Jason Duval é homem. Parecem ser um casal criminoso — possibilmente inspirado no fenômeno de "crime couples" dos 2010s e 2020s. A história provavelmente envolve:
            </p>
            <ul style={{marginLeft:20,marginTop:12}}>
              <li>Fuga de entidade criminosa/governo após crime inicial</li>
              <li>Construção de império moderno usando tecnologia e redes sociais</li>
              <li>Antagonistas incluindo influencers, cartéis modernos, agências federais</li>
              <li>Possível tema de "Bonnie & Clyde" contemporâneo</li>
              <li>Missões envolvendo fraude digital, roubo de dados, manipulação de redes</li>
              <li>Vice City moderna, pântanos de Flórida, resort areas</li>
            </ul>
            <p style={{marginTop:12}}>
              <strong>Nota:</strong> Maioria disso é especulação comunitária. Rockstar mantém detalhes em segredo rigoroso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ----- Glossário Section -----
const GlossarySection = ()=>{
  const [searchTerm, setSearchTerm] = React.useState("");
  const glossary = [
    {term:"GTA", def:"Grand Theft Auto — série de videojogos de crime sandbox urbano."},
    {term:"Sandbox", def:"Tipo de jogo que oferece liberdade ao jogador sem objetivos lineares. Você faz o que quiser."},
    {term:"Mundo Aberto", def:"Ambiente de jogo explorado livremente, sem restrições de área."},
    {term:"Heist", def:"Roubo planejado, geralmente cooperativo. Envolve reconhecimento, planejamento e execução."},
    {term:"FIB", def:"Federal Investigation Bureau — agência fictícia baseada no FBI. Antagonista em GTA V."},
    {term:"Cripto/Criptomoedas", def:"Moedas digitais em GTA Online. Tráfico de criptomoedas é negócio em GTA Online."},
    {term:"MC", def:"Motoclube — organização de motociclistas. The Lost MC é famosa em GTA IV."},
    {term:"CEO", def:"Chief Executive Officer. Em GTA Online, jogadores podem ser CEOs de negócios."},
    {term:"Wanted Level", def:"Nível de procura por polícia (estrelas). Aumenta com crimes, diminui escondendo-se."},
    {term:"Pontual", def:"Missão secundária realizada durante gameplay normal."},
    {term:"Cheats/Codes", def:"Códigos que modificam gameplay. Gta série sempre teve suporte a cheats."},
    {term:"Sandbox", def:"Engine de jogo que permite interações físicas realistas."},
    {term:"RAGE", def:"Engine de jogo utilizada por Rockstar desde GTA IV. Atual: RAGE 2 com ray-tracing."},
    {term:"Neon", def:"Estética visual com cores brilhantes, especialmente associada a Vice City."},
    {term:"Dupla Protagonista", def:"Dois personagens jogáveis principais. GTA V tem três, GTA VI tem dois."},
  ];

  const filtered = glossary.filter(g=>
    g.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    g.def.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="glossary" style={{padding:"96px 0",background:"linear-gradient(180deg,#0a0a0d, #0e0e14 30%, #0a0a0d)"}}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <Eyebrow color="var(--copper)">Capítulo 17 · referência</Eyebrow>
            <h2>Glossário GTA <em>Completo</em></h2>
          </div>
          <div className="right">Termos, conceitos e jargão da série</div>
        </div>

        {/* Search */}
        <div style={{marginBottom:32}}>
          <input
            type="text"
            placeholder="🔍 Procurar termo..."
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            style={{
              width:"100%",
              padding:"12px 16px",
              background:"linear-gradient(180deg,#1c1c22,#121217)",
              border:"1px solid var(--line-2)",
              borderRadius:2,
              color:"var(--bone)",
              fontFamily:"Space Mono",
              fontSize:13,
              letterSpacing:".22em",
            }}
          />
        </div>

        {/* Glossary items */}
        <div style={{display:"grid",gap:12}}>
          {filtered.length > 0 ? filtered.map((item,i)=>(
            <div key={i} className="card" style={{padding:22}}>
              <Corners/>
              <div style={{display:"grid",gridTemplateColumns:"150px 1fr",gap:20}}>
                <div className="headline" style={{fontSize:16,color:"var(--neon)"}}>{item.term}</div>
                <div style={{color:"var(--bone-2)",fontSize:13,lineHeight:1.6}}>{item.def}</div>
              </div>
            </div>
          )) : (
            <div className="card" style={{padding:32,textAlign:"center"}}>
              <Corners/>
              <div style={{color:"var(--grit)"}}>Nenhum termo encontrado</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

Object.assign(window,{RockstarSection,UniversesSection,GTAOnlineSection,GTA6Section,GlossarySection});
