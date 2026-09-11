/* ============ DOSSIÊ APROFUNDADO (tecnologia + produção) ============
 * Conteúdo longo que alimenta os modais: engines da saga (motor da DMA,
 * RenderWare, RAGE, Euphoria) e as fichas de produção dos jogos principais.
 *
 * Fontes conferidas em set/2026: Wikipedia (RAGE, Euphoria, GTA 1997, GTA III,
 * Vice City, San Andreas, GTA IV, Development of GTA V), Take-Two Interactive
 * (relatórios do ano fiscal 2026), Rockstar Newswire e a base curada de GTA VI
 * em data-vi.jsx. O que é rumor, leitura técnica ou prévia de imprensa fica
 * em `uncertainty`, nunca misturado com fato.
 *
 * Esquema (campos de texto seguem a allowlist de i18n.jsx):
 *   title, subtitle, lead            texto
 *   stats   [{label, detail}]        números de destaque
 *   sheet   [{label, detail}]        ficha técnica
 *   sections[{title, details[]}]     capítulos em parágrafos
 *   timeline[{year, title, detail}]  linha do tempo
 *   components [{name, detail}]      middleware / peças da tecnologia
 *   titles  [{name, year, detail}]   jogos (name não é traduzido)
 *   cast    [{name, actor}]          elenco (nomes próprios intactos)
 *   trivia[], uncertainty[], sources[{label,url}]
 * Ordem no bundle: depois de data-dossier.jsx, antes de i18n.jsx.
 */

const deepGlossaryMedia = (term) =>
  (typeof gtaWikiGlossaryMediaByTerm !== "undefined" && gtaWikiGlossaryMediaByTerm[term]) || null;

const deepDossierData = {
  /* ------------------------------------------------------------------ */
  "race-n-chase-engine": {
    id: "race-n-chase-engine",
    recordType: "engine",
    title: "Motor da DMA Design (era 2D)",
    subtitle: "Tecnologia própria · GTA 1, London e GTA 2 · 1995–1999",
    era: "1995–1999",
    lead:
      "Antes de qualquer middleware, GTA rodava numa tecnologia escrita dentro da DMA Design, em Dundee, nascida do protótipo Race'n'Chase. A cidade era montada em blocos e vista de cima: o que parece simples hoje era, em 1997, uma simulação urbana inteira — trânsito, pedestres, polícia e rádio — rodando em PCs e no PlayStation original.",
    stats: [
      { label: "início do projeto Race'n'Chase", detail: "04/04/1995" },
      { label: "cidades no GTA de 1997", detail: "3" },
      { label: "rádios + banda policial", detail: "7" },
      { label: "unidades de GTA 1 até mar/2001", detail: "6 mi" }
    ],
    sheet: [
      { label: "Criador", detail: "DMA Design (Dundee, Escócia)" },
      { label: "Protótipo", detail: "Race'n'Chase — documento de design v1.05 datado de 22/03/1995" },
      { label: "Perspectiva", detail: "Top-down, cidade construída em blocos" },
      { label: "Plataformas", detail: "MS-DOS, Windows, PlayStation; Game Boy Color (1999); Dreamcast (GTA 2)" },
      { label: "Jogos", detail: "Grand Theft Auto, London 1969, London 1961, Grand Theft Auto 2" },
      { label: "Sucessora", detail: "RenderWare (GTA III, 2001)" }
    ],
    sections: [
      {
        title: "De corrida de polícia a cidade criminosa",
        details: [
          "Race'n'Chase começou oficialmente em 4 de abril de 1995 como um jogo de perseguição: ladrões contra policiais em ruas vistas de cima. O documento de design mais antigo conhecido, versão 1.05, é de 22 de março de 1995.",
          "O desenvolvimento foi longo e turbulento — houve tentativas de interromper o projeto. O que salvou o jogo foi perceber que a graça estava em quebrar as regras da corrida: roubar qualquer carro, provocar a polícia e atravessar a cidade do próprio jeito.",
          "A tecnologia precisava simular muita coisa ao mesmo tempo para um hardware de meados dos anos 90: tráfego com rotas, pedestres, viaturas que respondem a crimes, colisões e a troca de estação de rádio conforme o carro roubado."
        ]
      },
      {
        title: "O que o motor entregava",
        details: [
          "Três cidades (Liberty City, San Andreas e Vice City) divididas em seis fases, oito protagonistas selecionáveis no PC (quatro no PlayStation) e pontuação que chegava aos milhões — GTA ainda era, em parte, um jogo de arcade.",
          "Sete rádios mais a frequência da polícia já definiam a assinatura sonora da série. A trilha foi composta por Colin Anderson, Craig Conner e Grant Middleton.",
          "GTA 2 (1999) reaproveitou a base com gráficos melhores, iluminação dinâmica e um sistema de respeito entre gangues. Portes para Sega Saturn e Nintendo 64 chegaram a existir e foram cancelados."
        ]
      },
      {
        title: "Por que ela ficou para trás",
        details: [
          "A visão de cima limitava o que a Rockstar queria contar: cinema criminal, personagens com voz, missões encenadas. Para GTA III, a equipe da DMA em Edimburgo adotou a RenderWare, da Criterion, e reconstruiu a série em 3D."
        ]
      }
    ],
    uncertainty: [
      "A história de que um bug deixou a polícia agressiva demais e isso 'virou o jogo' circula há décadas; é plausível e contada por ex-integrantes, mas não há registro técnico público que a comprove em detalhe.",
      "A formulação 'David Jones e Mike Dailly criaram GTA' simplifica uma equipe maior: a direção de GTA 1 é creditada a Keith R. Hamilton e a produção a David Jones."
    ],
    sources: [
      { label: "Wikipedia - Grand Theft Auto (1997)", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_(video_game)" },
      { label: "GTA Wiki - Race'n'Chase Engine", url: "https://gta.fandom.com/wiki/Race%27n%27Chase_Game_Engine" }
    ]
  },

  /* ------------------------------------------------------------------ */
  renderware: {
    id: "renderware",
    recordType: "engine",
    title: "RenderWare",
    subtitle: "Middleware da Criterion · base técnica da era 3D · 2001–2006",
    era: "2001–2006",
    lead:
      "RenderWare foi o middleware gráfico mais usado da geração PlayStation 2 — e é sobre ele que a Rockstar construiu GTA III, Vice City e San Andreas. Quando a Electronic Arts comprou a Criterion, dona da tecnologia, em 2004, a Rockstar passou a depender de uma ferramenta controlada por uma concorrente direta. A resposta foi a RAGE.",
    stats: [
      { label: "GTAs principais em RenderWare", detail: "3" },
      { label: "compra da Criterion pela EA", detail: "2004" },
      { label: "equipe central de GTA III", detail: "~23" },
      { label: "unidades somadas (III + VC + SA)", detail: "59,5 mi" }
    ],
    sheet: [
      { label: "Criadora", detail: "Criterion Software (Guildford, Reino Unido)" },
      { label: "Tipo", detail: "Middleware multiplataforma licenciado (renderização e ferramentas)" },
      { label: "Plataformas relevantes", detail: "PlayStation 2, Xbox, GameCube, PC" },
      { label: "Na Rockstar", detail: "GTA III (2001), Vice City (2002), Manhunt (2003), San Andreas (2004), Bully (2006)" },
      { label: "Ponto de virada", detail: "Aquisição da Criterion pela Electronic Arts, anunciada em 2004" },
      { label: "Sucessora na Rockstar", detail: "RAGE (estreia em 2006)" }
    ],
    sections: [
      {
        title: "Por que um middleware fez sentido em 2001",
        details: [
          "Levar GTA para 3D exigia resolver renderização, câmera, carregamento de cidade, veículos, pedestres e missões ao mesmo tempo. A RenderWare resolvia a camada gráfica e multiplataforma, e a equipe da DMA Design concentrou esforço no que era único de GTA: a simulação urbana.",
          "Segundo os créditos e registros de desenvolvimento, o núcleo de GTA III em Edimburgo tinha cerca de 23 pessoas — pequeno para o impacto que o jogo teria. Programação liderada por Obbe Vermeij e Adam Fowler, direção de arte de Aaron Garbut e produção de Leslie Benzies."
        ]
      },
      {
        title: "Os limites que o jogador sentia",
        details: [
          "GTA III dividia Liberty City em três ilhas liberadas aos poucos, com telas de carregamento entre elas e entre interiores. Neblina e distância de desenho curta escondiam o streaming de cenário no PS2.",
          "Vice City (2002) manteve a base e adicionou motos, helicópteros e interiores mais ricos. San Andreas (2004) levou o mesmo alicerce ao limite: três cidades, campo e deserto num mapa de cerca de 36 km², quatro a seis vezes maior que os anteriores."
        ]
      },
      {
        title: "A compra pela EA e a virada para a RAGE",
        details: [
          "Em 2004 a Electronic Arts anunciou a compra da Criterion Games. Para a Rockstar, que publicava seus maiores títulos sobre RenderWare, isso significava depender de uma rival para a geração seguinte de consoles.",
          "A Rockstar já tinha uma alternativa em casa: a tecnologia da Angel Studios, comprada em 2002 e transformada em Rockstar San Diego. Dali saiu o RAGE Technology Group e, em 2006, a primeira RAGE. Bully (2006) foi um dos últimos jogos da empresa ainda em RenderWare."
        ]
      },
      {
        title: "Legado: o que a Definitive Edition mudou",
        details: [
          "GTA: The Trilogy – The Definitive Edition (2021) não usa RenderWare nem RAGE: a Grove Street Games refez os três jogos em Unreal Engine 4. Parte das críticas no lançamento — física, colisões e comportamento diferentes do original — vem justamente de reconstruir sistemas que nasceram presos à tecnologia de 2001."
        ]
      }
    ],
    titles: [
      { name: "Grand Theft Auto III", year: "2001", detail: "Primeira Liberty City em 3D; PS2, depois PC (2002) e Xbox (2003)." },
      { name: "Grand Theft Auto: Vice City", year: "2002", detail: "Mesma base, com motos, helicópteros, interiores e trilha de 9 horas." },
      { name: "Manhunt", year: "2003", detail: "Rockstar North em registro de stealth e horror." },
      { name: "Grand Theft Auto: San Andreas", year: "2004", detail: "Três cidades e interior num mapa de ~36 km²." },
      { name: "Bully", year: "2006", detail: "Rockstar Vancouver; um dos últimos títulos da empresa na tecnologia." }
    ],
    uncertainty: [
      "O papel exato de ferramentas internas da Rockstar sobre a RenderWare (streaming, IA de trânsito, scripts de missão) não é documentado publicamente em detalhe.",
      "É comum ler que 'a EA comprar a Criterion obrigou a Rockstar a criar a RAGE'; o fato seguro é a cronologia (compra em 2004, RAGE Technology Group em seguida). A decisão interna completa nunca foi detalhada pela Rockstar."
    ],
    sources: [
      { label: "Wikipedia - Rockstar Advanced Game Engine", url: "https://en.wikipedia.org/wiki/Rockstar_Advanced_Game_Engine" },
      { label: "Wikipedia - Grand Theft Auto III", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_III" },
      { label: "Wikipedia - Grand Theft Auto: San Andreas", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto:_San_Andreas" },
      { label: "Wikipedia - RenderWare", url: "https://en.wikipedia.org/wiki/RenderWare" }
    ]
  },

  /* ------------------------------------------------------------------ */
  rage: {
    id: "rage",
    recordType: "engine",
    title: "RAGE — Rockstar Advanced Game Engine",
    subtitle: "Engine proprietária da Rockstar · era HD · 2006–hoje",
    era: "2006–hoje",
    media: deepGlossaryMedia("RAGE"),
    lead:
      "RAGE é a engine proprietária que a Rockstar usa desde 2006. Nasceu da tecnologia da Angel Studios, estreou num jogo de pingue-pongue, levou GTA para a alta definição com GTA IV e, vinte anos depois, sustenta GTA V, Red Dead Redemption 2, GTA Online e GTA VI. Nenhuma outra peça explica tão bem por que as cidades da Rockstar parecem vivas.",
    stats: [
      { label: "estreia (Table Tennis)", detail: "2006" },
      { label: "jogos principais na engine", detail: "11" },
      { label: "gerações de console", detail: "3" },
      { label: "anos de evolução contínua", detail: "20" }
    ],
    sheet: [
      { label: "Nome", detail: "Rockstar Advanced Game Engine (RAGE)" },
      { label: "Desenvolvedora", detail: "RAGE Technology Group, divisão da Rockstar San Diego; hoje evoluída por vários estúdios Rockstar" },
      { label: "Origem", detail: "Angel Game Engine (AGE), da Angel Studios — criada para Midtown Madness 2 (2000)" },
      { label: "Primeiro jogo", detail: "Rockstar Games Presents Table Tennis — Xbox 360, 23/05/2006" },
      { label: "Primeiro GTA", detail: "Grand Theft Auto IV — PS3 e Xbox 360, 29/04/2008" },
      { label: "Middleware integrado", detail: "Euphoria (NaturalMotion), Bullet (física), Bink Video; SpeedTree e Image Metrics em GTA IV" },
      { label: "APIs gráficas (PC)", detail: "DirectX 9 a 12 e Vulkan (Red Dead Redemption 2)" },
      { label: "Plataformas já atendidas", detail: "Xbox 360, PS3, Wii, Xbox One, PS4, Xbox Series X|S, PS5, PC, Stadia, iOS, Android, Switch" },
      { label: "Tipo", detail: "Proprietária, uso exclusivo da Rockstar (sem licenciamento a terceiros)" }
    ],
    sections: [
      {
        title: "Origem: da Angel Studios à RAGE",
        details: [
          "A árvore genealógica começa na Angel Studios, de San Diego, e na sua Angel Game Engine (AGE), usada em Midtown Madness 2 (2000). Em 2002 a Take-Two comprou o estúdio, que virou Rockstar San Diego, e a tecnologia ficou dentro de casa.",
          "Quando a Electronic Arts adquiriu a Criterion — criadora da RenderWare, base de GTA III, Vice City e San Andreas — em 2004, a Rockstar criou o RAGE Technology Group dentro da Rockstar San Diego. O objetivo: uma engine própria para a geração PS3/Xbox 360, sem depender de uma concorrente."
        ]
      },
      {
        title: "O teste: Table Tennis (2006)",
        details: [
          "O primeiro jogo em RAGE foi Rockstar Games Presents Table Tennis, lançado em 23 de maio de 2006 para Xbox 360. Um jogo pequeno e controlado era ideal para validar renderização em alta definição, animação de personagens e física antes de encarar uma cidade inteira.",
          "A versão para Wii chegou em 2007, com controles de movimento — mostrando cedo que a engine seria portável entre arquiteturas bem diferentes."
        ]
      },
      {
        title: "GTA IV: o grande salto (2008)",
        details: [
          "GTA IV juntou a RAGE a um pacote de middleware: Euphoria, da NaturalMotion, para animação procedural; Bullet para física; SpeedTree para vegetação; e Image Metrics para animação facial. O resultado foi uma Liberty City onde pedestres tropeçam, se agarram a carros e caem de forma diferente a cada vez.",
          "A cidade passou a ser carregada por streaming contínuo: diferentemente de GTA III, atravessar pontes entre ilhas não tinha tela de carregamento. Carros ganharam peso, suspensão e deformação mais convincentes — e muitos jogadores estranharam a direção 'pesada'.",
          "A escala de produção acompanhou a tecnologia: núcleo de 220 pessoas na Rockstar North, mais de mil no total entre estúdios, orçamento acima de US$ 100 milhões e entre 100 mil e 250 mil fotografias de Nova York usadas como referência.",
          "A versão de PC (dezembro de 2008) ficou marcada por desempenho instável e requisitos altos para a época — um lembrete de que a primeira RAGE de mundo aberto ainda estava sendo domada."
        ]
      },
      {
        title: "Fora da cidade: Midnight Club, Red Dead e Max Payne 3",
        details: [
          "Midnight Club: Los Angeles (2008) usou a RAGE para corridas em mundo aberto, na mesma geração de GTA IV.",
          "Red Dead Redemption (2010), da Rockstar San Diego, provou que a engine não era 'só para cidades': planícies, montanhas, cavalos, fauna e grandes distâncias de visão. Undead Nightmare veio no mesmo ano.",
          "Max Payne 3 (2012) foi o primeiro jogo em RAGE com suporte a DirectX 11 e 3D estereoscópico, rodando a 720p no PS3 e no Xbox 360 — e o laboratório de tiroteio, cobertura e reações físicas que influenciaria GTA V."
        ]
      },
      {
        title: "GTA V: espremendo o PS3 e o Xbox 360 (2013)",
        details: [
          "GTA V chegou em 17 de setembro de 2013 em consoles com 512 MB de memória, com um mapa grande o bastante para caber San Andreas, GTA IV e Red Dead Redemption juntos. A equipe reformulou a distância de desenho e, conhecendo melhor o hardware, extraiu mais detalhe que em GTA IV.",
          "Euphoria e Bullet seguiram cuidando de animação e física. Três protagonistas jogáveis exigiam manter três vidas em partes diferentes do mapa: a troca de personagem com a câmera subindo ao céu e descendo em outro ponto é, além de estilo, uma forma elegante de dar tempo ao streaming.",
          "No Xbox 360, o jogo ocupava dois DVDs e exigia 8 GB instalados; no PS3, um Blu-ray. A resolução nativa ficava em 720p nas duas plataformas."
        ]
      },
      {
        title: "Nova geração e PC (2014–2015)",
        details: [
          "No PS4 e no Xbox One (18/11/2014), a RAGE renderizou GTA V em 1080p com maior distância de visão, trânsito mais denso, clima e fauna ampliados — e um modo em primeira pessoa com cerca de 3.000 animações novas de armas.",
          "A versão de PC (14/04/2015) chegou a 4K e 60 quadros por segundo e trouxe o Rockstar Editor, um editor de replays com Director Mode, depois levado aos consoles."
        ]
      },
      {
        title: "Red Dead Redemption 2: a RAGE mais ambiciosa da década (2018)",
        details: [
          "Red Dead Redemption 2 (26/10/2018) levou a engine a renderização baseada em física (PBR), nuvens e neblina volumétricas e iluminação global pré-calculada — a base visual que depois voltou para os projetos de GTA.",
          "A versão de PC (novembro de 2019) estreou um renderizador Vulkan ao lado do DirectX 12. Vieram depois HDR (maio de 2019, consoles), NVIDIA DLSS (julho de 2021) e AMD FSR 2.0 (setembro de 2022)."
        ]
      },
      {
        title: "GTA V na geração atual (2022–2025)",
        details: [
          "A edição de PS5 e Xbox Series X|S (15/03/2022) trouxe reflexos e sombras com ray tracing, 4K nativo no PS5 e no Series X, 4K reescalado no Series S e HDR.",
          "GTA V Enhanced para PC (2025) adicionou iluminação global e oclusão de ambiente em ray tracing em tempo real, além de DLSS e FSR — uma engine de 2008 ainda recebendo técnicas de ponta dezessete anos depois."
        ]
      },
      {
        title: "O que a engine resolve (visão geral)",
        details: [
          "Numa engine de mundo aberto como a RAGE, as peças centrais são: streaming de mapa (carregar e descarregar cenário conforme o jogador se move), gerenciamento de memória, renderização, animação e física, simulação de pedestres e trânsito, áudio posicional com rádio, scripts de missão e, desde 2013, a camada de rede de GTA Online e Red Dead Online.",
          "A assinatura da Rockstar está na integração: a mesma rua precisa servir a uma perseguição sistêmica, a uma cutscene e a uma sessão online com dezenas de jogadores, sem trocar de tecnologia."
        ]
      },
      {
        title: "GTA VI: o que é oficial",
        details: [
          "GTA VI sai em 19 de novembro de 2026 para PlayStation 5 e Xbox Series X|S. A Rockstar informou que o Trailer 2 (maio de 2025) foi capturado inteiramente num PlayStation 5, metade gameplay e metade cenas.",
          "A Rockstar não publicou ficha técnica: nome de versão da engine, resolução, taxa de quadros e uso de ray tracing seguem sem confirmação. As prévias de agosto de 2026 relatam alvo de 1440p a 30 fps nos consoles — dado de imprensa, não da Rockstar."
        ]
      }
    ],
    components: [
      { name: "Euphoria (NaturalMotion)", detail: "Animação comportamental: sintetiza em tempo real reações de corpo, músculos e 'sistema nervoso' simulados. Estreou em GTA IV." },
      { name: "Bullet Physics", detail: "Biblioteca de física de código aberto, criada por Erwin Coumans, usada para colisões e corpos rígidos." },
      { name: "SpeedTree", detail: "Geração e renderização de vegetação, citada nos créditos técnicos de GTA IV." },
      { name: "Image Metrics", detail: "Tecnologia de animação facial usada nas atuações de GTA IV." },
      { name: "Bink Video (RAD Game Tools)", detail: "Codec de vídeo para cinemáticas e telas pré-renderizadas." },
      { name: "Renderizadores", detail: "DirectX 9/10/11/12 no PC ao longo dos anos; Vulkan estreou em Red Dead Redemption 2 (2019)." }
    ],
    timeline: [
      { year: "2000", title: "Angel Game Engine", detail: "A Angel Studios usa sua AGE em Midtown Madness 2 — a tecnologia ancestral da RAGE." },
      { year: "2002", title: "Rockstar San Diego", detail: "A Take-Two compra a Angel Studios, rebatizada de Rockstar San Diego." },
      { year: "2004", title: "EA compra a Criterion", detail: "A dona da RenderWare passa às mãos de uma rival; nasce o RAGE Technology Group." },
      { year: "2006", title: "Estreia da RAGE", detail: "Table Tennis chega ao Xbox 360 em 23 de maio." },
      { year: "2007", title: "Parceria com a NaturalMotion", detail: "Em fevereiro, Rockstar e NaturalMotion anunciam o Euphoria nos jogos da empresa." },
      { year: "2008", title: "GTA IV e Midnight Club: LA", detail: "Liberty City em HD sem telas de carregamento entre ilhas; PC em dezembro." },
      { year: "2009", title: "Episódios de Liberty City", detail: "The Lost and Damned e The Ballad of Gay Tony reutilizam a base de GTA IV." },
      { year: "2010", title: "Red Dead Redemption", detail: "A engine vai para o Velho Oeste: natureza aberta, cavalos e fauna." },
      { year: "2012", title: "Max Payne 3", detail: "Primeiro jogo em RAGE com DirectX 11 e 3D estereoscópico." },
      { year: "2013", title: "GTA V e GTA Online", detail: "Três protagonistas no PS3/360 com 512 MB de memória; Online estreia em 1º de outubro." },
      { year: "2014", title: "GTA V em 1080p", detail: "PS4 e Xbox One com primeira pessoa e mundo mais denso." },
      { year: "2015", title: "GTA V no PC", detail: "4K a 60 fps e Rockstar Editor." },
      { year: "2018", title: "Red Dead Redemption 2", detail: "PBR, nuvens e neblina volumétricas, iluminação global pré-calculada." },
      { year: "2019", title: "RDR2 no PC", detail: "Renderizador Vulkan ao lado do DirectX 12." },
      { year: "2021", title: "DLSS em RDR2", detail: "Reconstrução de imagem por IA da NVIDIA chega à engine." },
      { year: "2022", title: "GTA V na geração atual", detail: "PS5/Xbox Series com ray tracing, 4K nativo e HDR." },
      { year: "2025", title: "GTA V Enhanced (PC)", detail: "Iluminação global e oclusão de ambiente em ray tracing, DLSS e FSR." },
      { year: "2026", title: "GTA VI", detail: "Lançamento em 19 de novembro para PS5 e Xbox Series X|S." }
    ],
    titles: [
      { name: "Rockstar Games Presents Table Tennis", year: "2006", detail: "Rockstar San Diego · primeiro jogo da engine" },
      { name: "Grand Theft Auto IV", year: "2008", detail: "Rockstar North · Euphoria, Bullet, SpeedTree" },
      { name: "Midnight Club: Los Angeles", year: "2008", detail: "Rockstar San Diego · corridas em mundo aberto" },
      { name: "The Lost and Damned / The Ballad of Gay Tony", year: "2009", detail: "Rockstar North · episódios de GTA IV" },
      { name: "Red Dead Redemption + Undead Nightmare", year: "2010", detail: "Rockstar San Diego · mundo aberto natural" },
      { name: "Max Payne 3", year: "2012", detail: "Rockstar Studios · DirectX 11 e 3D estereoscópico" },
      { name: "Grand Theft Auto V", year: "2013", detail: "Rockstar North · três gerações de console e PC" },
      { name: "Grand Theft Auto Online", year: "2013", detail: "Plataforma viva sobre a base de GTA V" },
      { name: "Red Dead Redemption 2", year: "2018", detail: "Rockstar Games (todos os estúdios) · PBR e Vulkan" },
      { name: "Grand Theft Auto VI", year: "2026", detail: "Rockstar Games · PS5 e Xbox Series X|S" }
    ],
    trivia: [
      "L.A. Noire (2011), publicado pela Rockstar, não usa RAGE: foi feito pela Team Bondi com tecnologia própria e a captura facial MotionScan.",
      "GTA: The Trilogy – The Definitive Edition (2021) também não usa RAGE — foi refeita em Unreal Engine 4 pela Grove Street Games.",
      "O Euphoria pertence hoje, indiretamente, ao mesmo grupo da Rockstar: a NaturalMotion foi comprada pela Zynga em 2014, e a Take-Two concluiu a compra da Zynga em 2022.",
      "Bully (2006) e Manhunt (2003) ainda eram RenderWare; a transição da Rockstar para a RAGE não foi instantânea.",
      "GTA V existe em PS3, Xbox 360, PS4, Xbox One, PC, PS5 e Xbox Series X|S — a mesma base de engine atravessando três gerações de console."
    ],
    uncertainty: [
      "A Rockstar não publica documentação pública da RAGE. O conhecimento técnico vem de créditos, entrevistas, notas de atualização, análise de imprensa especializada e da comunidade de modding.",
      "Nomes como 'RAGE 2', 'RAGE 8' ou 'RAGE 9' circulam em fóruns e vídeos, mas não são nomenclatura oficial da Rockstar.",
      "Não há confirmação oficial de resolução, taxa de quadros, ray tracing ou 'IA de multidões' em GTA VI. Tudo o que vai além de 'capturado em PS5' é prévia de imprensa ou especulação.",
      "A leitura de que a câmera de troca de personagem de GTA V serve para dar tempo ao streaming é análise técnica recorrente, não explicação oficial da Rockstar."
    ],
    sources: [
      { label: "Wikipedia - Rockstar Advanced Game Engine", url: "https://en.wikipedia.org/wiki/Rockstar_Advanced_Game_Engine" },
      { label: "Wikipedia - Euphoria (software)", url: "https://en.wikipedia.org/wiki/Euphoria_(software)" },
      { label: "Wikipedia - Grand Theft Auto IV", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_IV" },
      { label: "Wikipedia - Development of Grand Theft Auto V", url: "https://en.wikipedia.org/wiki/Development_of_Grand_Theft_Auto_V" },
      { label: "GTA Wiki - RAGE", url: "https://gta.fandom.com/wiki/Rockstar_Advanced_Game_Engine" },
      { label: "Rockstar Games - GTA VI", url: "https://www.rockstargames.com/VI" }
    ]
  },

  /* ------------------------------------------------------------------ */
  euphoria: {
    id: "euphoria",
    recordType: "engine",
    title: "Euphoria (NaturalMotion)",
    subtitle: "Animação comportamental em tempo real · GTA IV em diante",
    era: "2008–hoje",
    media: deepGlossaryMedia("Euphoria"),
    lead:
      "Euphoria é a razão de um pedestre de GTA nunca cair do mesmo jeito duas vezes. Em vez de tocar animações gravadas, a tecnologia da NaturalMotion simula corpo, músculos e reflexos e decide, a cada instante, como o personagem reage a um empurrão, a um tiro ou a um para-choque.",
    stats: [
      { label: "parceria anunciada com a Rockstar", detail: "fev/2007" },
      { label: "primeiro jogo com Euphoria", detail: "GTA IV" },
      { label: "NaturalMotion comprada pela Zynga", detail: "2014" },
      { label: "fim do licenciamento a terceiros", detail: "2017" }
    ],
    sheet: [
      { label: "Criadora", detail: "NaturalMotion (Oxford, Reino Unido)" },
      { label: "Tecnologia base", detail: "Dynamic Motion Synthesis (síntese dinâmica de movimento)" },
      { label: "Na Rockstar", detail: "GTA IV, Red Dead Redemption, Max Payne 3, GTA V, Red Dead Redemption 2" },
      { label: "Outros jogos", detail: "Star Wars: The Force Unleashed I e II, Backbreaker, Clumsy Ninja" },
      { label: "Dona atual", detail: "Zynga (empresa da Take-Two Interactive desde 2022)" }
    ],
    sections: [
      {
        title: "Como funciona",
        details: [
          "O Euphoria usa a Dynamic Motion Synthesis: cada personagem tem um corpo simulado em 3D — esqueleto, massa, músculos e um 'sistema nervoso motor' controlado por IA. Quando algo acontece, o sistema calcula a reação em tempo real em vez de escolher uma animação pronta.",
          "Por isso a mesma cena rende resultados diferentes: o personagem tenta se equilibrar, estende os braços para amortecer a queda, se agarra ao capô de um carro ou cambaleia ao ser atingido."
        ]
      },
      {
        title: "Euphoria não é ragdoll",
        details: [
          "Um ragdoll comum é um boneco sem vontade que desaba pela física. O Euphoria dá intenção ao corpo: ele 'tenta' sobreviver ao impacto. Na prática, os jogos da Rockstar combinam animação capturada, Euphoria e física de ragdoll conforme a situação.",
          "Em GTA IV isso ficou famoso nas quedas de escada, atropelamentos e bêbados cambaleando; em GTA V e Red Dead Redemption 2, o sistema está mais refinado e misturado a animações de alta qualidade."
        ]
      },
      {
        title: "Negócio: da startup à Take-Two",
        details: [
          "A parceria com a Rockstar foi anunciada em fevereiro de 2007. A NaturalMotion foi comprada pela Zynga em 2014 e, em 2017, parou de licenciar o Euphoria para outras empresas para focar em jogos mobile próprios.",
          "Com a compra da Zynga pela Take-Two, concluída em 2022, a tecnologia que dá vida aos pedestres de GTA passou a pertencer ao mesmo grupo empresarial da Rockstar."
        ]
      }
    ],
    uncertainty: [
      "Nem toda reação física vista nos jogos é Euphoria: há mistura com animação capturada e ragdoll convencional, e a Rockstar não detalha a divisão.",
      "Não há confirmação oficial sobre como (ou se com o mesmo nome) a tecnologia é usada em GTA VI."
    ],
    sources: [
      { label: "Wikipedia - Euphoria (software)", url: "https://en.wikipedia.org/wiki/Euphoria_(software)" },
      { label: "GTA Wiki - Euphoria", url: "https://gta.fandom.com/wiki/Euphoria" },
      { label: "Wikipedia - Grand Theft Auto IV", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_IV" }
    ]
  },

  /* ================== FICHAS DE PRODUÇÃO DOS JOGOS ================== */
  "gta-1": {
    id: "gta-1",
    recordType: "production",
    title: "Grand Theft Auto (1997) — produção",
    lead:
      "Quatro anos de desenvolvimento, tentativas de cancelamento e uma campanha de marketing baseada em escândalo. O primeiro GTA recebeu críticas mornas e mesmo assim vendeu milhões — porque ninguém mais oferecia aquela liberdade.",
    stats: [
      { label: "unidades até mar/2001", detail: "6 mi" },
      { label: "semanas no top 20 do Reino Unido", detail: "76+" },
      { label: "protagonistas selecionáveis (PC)", detail: "8" },
      { label: "nota agregada (PC, GameRankings)", detail: "79%" }
    ],
    sheet: [
      { label: "Desenvolvedora", detail: "DMA Design (Dundee, Escócia)" },
      { label: "Publicadora", detail: "BMG Interactive (Europa); ASC Games (PC, América do Norte); Take-Two (PlayStation, América do Norte)" },
      { label: "Produção", detail: "David Jones" },
      { label: "Direção", detail: "Keith R. Hamilton" },
      { label: "Design", detail: "Stephen Banks, Paul Farley, Billy Thomson" },
      { label: "Roteiro", detail: "Brian Baglow, Brian Lawson" },
      { label: "Arte", detail: "Ian McQue" },
      { label: "Música", detail: "Colin Anderson, Craig Conner, Grant Middleton" },
      { label: "Tecnologia", detail: "Motor próprio da DMA (origem Race'n'Chase)" },
      { label: "Lançamento", detail: "PC: 28/11/1997 (Europa), 24/03/1998 (EUA) · PlayStation: 12/12/1997 (Europa), 30/06/1998 (EUA) · Game Boy Color: 22/10/1999" }
    ],
    sections: [
      {
        title: "Quatro anos até a estreia",
        details: [
          "O projeto começou em 4 de abril de 1995 com o nome Race'n'Chase. O desenvolvimento se arrastou por quatro anos e passou por tentativas de interrupção antes de encontrar a identidade de crime urbano livre.",
          "O jogo final tem três cidades — Liberty City (Nova York), San Andreas (San Francisco) e Vice City (Miami) —, seis fases, sete rádios e a banda da polícia."
        ]
      },
      {
        title: "Max Clifford e o escândalo como marketing",
        details: [
          "O publicitário britânico Max Clifford foi contratado para alimentar a controvérsia sobre a violência do jogo. Cada debate sobre proibir GTA virava publicidade gratuita nos tabloides.",
          "No Brasil, o jogo chegou a ser proibido pelo Ministério da Justiça, sob o argumento de estimular homicídios e acidentes de trânsito."
        ]
      },
      {
        title: "Recepção dividida, vendas fortes",
        details: [
          "A crítica elogiou liberdade, som e rádios, mas criticou gráficos e controles: GameSpot deu 6,4 ao PC e 8 ao PlayStation; a IGN, 6 ao PlayStation. As notas agregadas ficaram em 79% (PC) e 68% (PS).",
          "Mesmo assim, GTA passou de 1 milhão de unidades em novembro de 1998, 3,5 milhões em outubro de 1999 e 6 milhões em março de 2001, com mais de € 17 milhões de faturamento na União Europeia em 1998."
        ]
      },
      {
        title: "Expansões, portes e cancelamentos",
        details: [
          "London 1969 e London 1961 saíram em 1999. Um porte para Sega Saturn foi cancelado e uma versão de Nintendo 64 ('Grand Theft Auto 64') foi interrompida. A versão de Game Boy Color chegou em outubro de 1999, mesmo mês de GTA 2.",
          "Anos depois, a Rockstar distribuiu o jogo gratuitamente pela sua página de clássicos — hoje indisponível."
        ]
      }
    ],
    uncertainty: [
      "Relatos sobre um bug de polícia agressiva que teria definido o jogo são contados por ex-integrantes, mas não têm documentação técnica pública.",
      "A 'Rockstar' ainda não existia no lançamento europeu: GTA 1 pertence à fase DMA Design/BMG Interactive."
    ],
    sources: [
      { label: "Wikipedia - Grand Theft Auto (1997)", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_(video_game)" },
      { label: "GTA Wiki - Grand Theft Auto", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_(1997_game)" }
    ]
  },

  "gta-iii": {
    id: "gta-iii",
    recordType: "production",
    title: "Grand Theft Auto III — produção",
    lead:
      "Uma equipe central de cerca de 23 pessoas em Edimburgo, uma engine licenciada e um lançamento adiado pelo 11 de setembro. GTA III não inventou o mundo aberto, mas foi o jogo que ensinou a indústria inteira a fazê-lo.",
    stats: [
      { label: "Metacritic (PS2)", detail: "97" },
      { label: "unidades vendidas", detail: "14,5 mi" },
      { label: "faturamento até jan/2003", detail: "US$ 350 mi" },
      { label: "equipe central", detail: "~23" }
    ],
    sheet: [
      { label: "Desenvolvedora", detail: "DMA Design, Edimburgo (renomeada Rockstar North em 2002)" },
      { label: "Publicadora", detail: "Rockstar Games" },
      { label: "Produção", detail: "Leslie Benzies" },
      { label: "Roteiro", detail: "Dan Houser, James Worrall, Paul Kurowski" },
      { label: "Programação", detail: "Obbe Vermeij, Adam Fowler" },
      { label: "Direção de arte", detail: "Aaron Garbut" },
      { label: "Música", detail: "Craig Conner, Stuart Ross" },
      { label: "Engine", detail: "RenderWare (Criterion)" },
      { label: "Lançamento", detail: "PS2: 23/10/2001 (EUA), 26/10/2001 (Europa) · PC: 21/05/2002 · Xbox: 04/11/2003 · iOS/Android: 15/12/2011" }
    ],
    sections: [
      {
        title: "Reconstruir GTA em três dimensões",
        details: [
          "A DMA Design precisava transformar um jogo visto de cima numa cidade navegável em terceira pessoa: câmera, direção, tiro, pedestres, trânsito, rádio e missões encenadas funcionando no mesmo espaço. A RenderWare cuidou da camada gráfica; a simulação urbana foi feita em casa.",
          "Liberty City foi dividida em três ilhas — Portland, Staunton Island e Shoreside Vale — liberadas conforme a história avança, uma forma de controlar ritmo e memória do PS2."
        ]
      },
      {
        title: "O 11 de setembro e as mudanças no jogo",
        details: [
          "Previsto para outubro de 2001, o lançamento foi adiado em três semanas, anúncio feito em 19 de setembro, oito dias após os atentados em Nova York — cidade que inspira Liberty City.",
          "A Rockstar trocou a pintura das viaturas, que lembrava a da polícia de Nova York (azul e branco), por preto e branco; ajustou a rota de um avião; removeu uma missão com tema terrorista; editou falas de pedestres e da rádio de debates; e substituiu a capa original, considerada 'crua demais'."
        ]
      },
      {
        title: "Elenco de cinema e rádio satírica",
        details: [
          "Pela primeira vez GTA contratou atores de Hollywood: Frank Vincent, Michael Madsen, Joe Pantoliano, Kyle MacLachlan, Debi Mazar, Robert Loggia e Michael Rapaport, entre outros. Claude, o protagonista, não fala.",
          "O jogo tem cerca de três horas e meia de material de rádio, incluindo a Chatterbox FM, rádio de debates apresentada por Lazlow."
        ]
      },
      {
        title: "Recepção, vendas e prêmios",
        details: [
          "Metacritic 97 no PS2 — empatado como jogo mais bem avaliado do console —, 93 no PC. Foi o jogo mais vendido de 2001 nos EUA e o primeiro a receber o prêmio 'Diamond' no Reino Unido (mais de 1 milhão de cópias). Total: 14,5 milhões de unidades, 11,6 milhões delas no PS2.",
          "Venceu jogo do ano no Game Developers Choice Awards, GameSpot e GameSpy, além de prêmios de design e engenharia de jogabilidade no D.I.C.E."
        ]
      },
      {
        title: "Controvérsias",
        details: [
          "A possibilidade de agredir prostitutas para recuperar o dinheiro gerou protestos, incluindo da National Organization for Women. Na Austrália, o jogo foi inicialmente proibido e só voltou às lojas após cortes.",
          "Em 2003, famílias de vítimas de um tiroteio nos EUA moveram um processo de US$ 246 milhões contra a empresa; a defesa se apoiou na Primeira Emenda."
        ]
      }
    ],
    cast: [
      { name: "Claude", actor: "sem falas" },
      { name: "Catalina", actor: "Cynthia Farrell" },
      { name: "Salvatore Leone", actor: "Frank Vincent" },
      { name: "Toni Cipriani", actor: "Michael Madsen" },
      { name: "Joey Leone", actor: "Michael Rapaport" },
      { name: "Luigi Goterelli", actor: "Joe Pantoliano" },
      { name: "Maria Latore", actor: "Debi Mazar" },
      { name: "Asuka Kasen", actor: "Lianna Pai" },
      { name: "Ray Machowski", actor: "Robert Loggia" },
      { name: "Donald Love", actor: "Kyle MacLachlan" },
      { name: "8-Ball", actor: "Guru" }
    ],
    uncertainty: [
      "A remoção de Darkel e o encurtamento das asas do avião Dodo são frequentemente ligados ao 11 de setembro; a Rockstar nunca confirmou essa relação para esses itens específicos."
    ],
    sources: [
      { label: "Wikipedia - Grand Theft Auto III", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_III" },
      { label: "GTA Wiki - Grand Theft Auto III", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_III" }
    ]
  },

  "vice-city": {
    id: "vice-city",
    recordType: "production",
    title: "Grand Theft Auto: Vice City — produção",
    lead:
      "Um ano depois de GTA III, a Rockstar North trocou a Nova York cinzenta pela Miami neon de 1986, deu voz ao protagonista com Ray Liotta e montou uma das trilhas licenciadas mais famosas dos videogames.",
    stats: [
      { label: "Metacritic (PS2)", detail: "95" },
      { label: "unidades até mar/2008", detail: "17,5 mi" },
      { label: "cópias em 2 dias", detail: "1,4 mi" },
      { label: "falas gravadas", detail: "8.000" }
    ],
    sheet: [
      { label: "Desenvolvedora", detail: "Rockstar North" },
      { label: "Publicadora", detail: "Rockstar Games" },
      { label: "Produção", detail: "Leslie Benzies" },
      { label: "Roteiro", detail: "Dan Houser, James Worrall" },
      { label: "Programação", detail: "Obbe Vermeij, Adam Fowler, Alexander Roger" },
      { label: "Direção de arte", detail: "Aaron Garbut" },
      { label: "Música original", detail: "Lex Horton" },
      { label: "Engine", detail: "RenderWare" },
      { label: "Equipe e orçamento", detail: "Equipe central de ~50 pessoas; US$ 5 mi de desenvolvimento e US$ 13,2 mi de marketing" },
      { label: "Lançamento", detail: "PS2: 29/10/2002 (EUA), 08/11/2002 (Europa) · PC: 13/05/2003 · Xbox: 04/11/2003 · Mac: 12/11/2010 · iOS/Android: dez/2012" }
    ],
    sections: [
      {
        title: "Pesquisa em Miami",
        details: [
          "Depois de GTA III, membros da equipe viajaram a Miami, divididos em pequenos grupos para observar as ruas e fotografar arquitetura, bairros e costa. A cidade de 1986 mistura o art déco de Ocean Beach, mansões, docas e bairros de imigrantes.",
          "A base técnica é a de GTA III, mas o jogo acrescenta motos, helicópteros, propriedades compráveis e interiores mais elaborados."
        ]
      },
      {
        title: "A trilha que virou identidade",
        details: [
          "São mais de 113 músicas e comerciais e nove horas de áudio de rádio, em estações como Flash FM, V-Rock, Emotion 98.3, Fever 105, Wildstyle, Wave 103 e Radio Espantoso, além das rádios de debate.",
          "A Epic Records lançou em outubro de 2002 uma caixa oficial com sete álbuns da trilha. O jogo também tem mais de 90 minutos de cenas e cerca de 8.000 falas gravadas."
        ]
      },
      {
        title: "Recepção e vendas",
        details: [
          "Metacritic 95 no PS2, o jogo mais bem avaliado do console em 2002. Vendeu 500 mil cópias em 24 horas e 1,4 milhão em dois dias — o jogo que mais rápido vendeu até então —, sendo o mais vendido de 2002 nos EUA.",
          "Somou 14,2 milhões de unidades no PS2 e 17,5 milhões em todas as plataformas até março de 2008. Ganhou seis prêmios no primeiro BAFTA de games e o prêmio de jogo de ação e aventura do ano no Interactive Achievement Awards."
        ]
      },
      {
        title: "Controvérsias",
        details: [
          "Em novembro de 2003, entidades haitiano-americanas protestaram contra falas que retratavam haitianos como criminosos. Após pressão, inclusive do prefeito de Nova York Michael Bloomberg, a Rockstar pediu desculpas e removeu as frases das cópias seguintes.",
          "O jogo foi citado em processos milionários nos EUA (casos Devin Moore, de 2003, e Cody Posey, de 2006), que tentavam responsabilizar a empresa por crimes reais; o segundo foi arquivado em 2007."
        ]
      }
    ],
    cast: [
      { name: "Tommy Vercetti", actor: "Ray Liotta" },
      { name: "Ken Rosenberg", actor: "William Fichtner" },
      { name: "Lance Vance", actor: "Philip Michael Thomas" },
      { name: "Sonny Forelli", actor: "Tom Sizemore" },
      { name: "Ricardo Diaz", actor: "Luis Guzmán" },
      { name: "Juan Garcia Cortez", actor: "Robert Davi" },
      { name: "Avery Carrington", actor: "Burt Reynolds" },
      { name: "Mercedes Cortez", actor: "Fairuza Balk" },
      { name: "Kent Paul", actor: "Danny Dyer" },
      { name: "Umberto Robina", actor: "Danny Trejo" },
      { name: "Steve Scott", actor: "Dennis Hopper" },
      { name: "Phil Cassidy", actor: "Gary Busey" }
    ],
    trivia: [
      "Philip Michael Thomas, voz de Lance Vance, foi o detetive Ricardo Tubbs na série Miami Vice — referência direta ao imaginário que o jogo satiriza.",
      "Tommy Vercetti foi o primeiro protagonista de GTA 3D com voz e personalidade própria, depois do silêncio de Claude."
    ],
    uncertainty: [
      "A duração exata do ciclo de produção varia conforme a fonte; o consenso é que foi curto, aproveitando a base de GTA III."
    ],
    sources: [
      { label: "Wikipedia - Grand Theft Auto: Vice City", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City" },
      { label: "GTA Wiki - Vice City", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto:_Vice_City" }
    ]
  },

  "san-andreas": {
    id: "san-andreas",
    recordType: "production",
    title: "Grand Theft Auto: San Andreas — produção",
    lead:
      "O maior mapa, o maior elenco e o jogo mais vendido do PlayStation 2. San Andreas levou a RenderWare ao limite e depois viu um código escondido — Hot Coffee — virar caso de classificação indicativa e de governo nos EUA.",
    stats: [
      { label: "unidades até 2011", detail: "27,5 mi" },
      { label: "atores creditados (recorde Guinness)", detail: "861" },
      { label: "área do mapa", detail: "~36 km²" },
      { label: "Metacritic (PS2)", detail: "95" }
    ],
    sheet: [
      { label: "Desenvolvedora", detail: "Rockstar North" },
      { label: "Publicadora", detail: "Rockstar Games" },
      { label: "Produção", detail: "Leslie Benzies" },
      { label: "Roteiro", detail: "Dan Houser, James Worrall, DJ Pooh" },
      { label: "Programação", detail: "Obbe Vermeij, Adam Fowler" },
      { label: "Direção de arte", detail: "Aaron Garbut" },
      { label: "Música original", detail: "Michael Hunter" },
      { label: "Engine", detail: "RenderWare" },
      { label: "Equipe e orçamento", detail: "Equipe de 50 que cresceu para 75; testes de 60 para 100 pessoas; orçamento abaixo de US$ 10 mi" },
      { label: "Lançamento", detail: "PS2: 26/10/2004 (EUA), 29/10/2004 (Europa) · PC e Xbox: 07/06/2005 · Mac: 12/11/2010 · iOS/Android: dez/2013 · Xbox 360: out/2014 · PS3: dez/2015" }
    ],
    sections: [
      {
        title: "Três cidades e um estado inteiro",
        details: [
          "Quase dois anos depois de Vice City, San Andreas apresentou um estado com Los Santos (Los Angeles), San Fierro (San Francisco) e Las Venturas (Las Vegas), além de campo, florestas e deserto — cerca de 36 km², de quatro a seis vezes maior que GTA III e Vice City.",
          "A equipe viajou a Los Angeles, San Francisco e Las Vegas para pesquisa e fotografia, e consultou nomes da cultura de Los Angeles como o fotógrafo Estevan Oriol, o tatuador Mister Cartoon e DJ Pooh, também coautor do roteiro."
        ]
      },
      {
        title: "Anos 90, gangues e cinema",
        details: [
          "A história de 1992 dialoga com eventos reais: o escândalo de corrupção policial Rampart, a epidemia de crack, os distúrbios de Los Angeles de 1992 e a rivalidade entre Bloods e Crips — sempre ficcionalizados.",
          "O jogo conversa com filmes como Boyz n the Hood, Colors, Menace II Society, Juice e New Jack City, e, fora de Los Santos, com Bullitt e Casino."
        ]
      },
      {
        title: "Um elenco recordista",
        details: [
          "Foram mais de 400 personagens com fala e 861 atores creditados — recorde do Guinness de maior elenco de voz em um videogame —, com mais de 60 mil falas, cerca de 7.700 só de CJ. As gravações levaram cerca de cinco meses.",
          "As 11 rádios têm 20 DJs, incluindo Axl Rose, Chuck D e George Clinton, e mais de três vezes o número de músicas licenciadas de GTA III."
        ]
      },
      {
        title: "Vendas históricas",
        details: [
          "Nos EUA, 2,06 milhões de unidades e US$ 235 milhões nos primeiros seis dias; no Reino Unido, 677 mil cópias no fim de semana de estreia, recorde na época.",
          "Tornou-se o jogo mais vendido do PS2, com 17,33 milhões de unidades no console, e chegou a 27,5 milhões em todas as plataformas até 2011."
        ]
      },
      {
        title: "Hot Coffee",
        details: [
          "Modders encontraram no disco um minijogo sexual inacessível. Depois do lançamento no PC, em 2005, o modder Patrick Wildenborg publicou o 'Hot Coffee', que reativava o conteúdo e teve mais de 1 milhão de downloads em quatro semanas.",
          "A ESRB mudou a classificação de M para AO (Adults Only) em julho de 2005, varejistas retiraram o jogo das prateleiras e a Rockstar relançou uma edição sem o código. Em 2006, Take-Two e Rockstar fecharam acordo com a Federal Trade Commission, comprometendo-se a divulgar conteúdo de forma mais transparente às classificadoras."
        ]
      }
    ],
    cast: [
      { name: "Carl 'CJ' Johnson", actor: "Young Maylay" },
      { name: "Sweet Johnson", actor: "Faizon Love" },
      { name: "Big Smoke", actor: "Clifton Powell" },
      { name: "Ryder", actor: "MC Eiht" },
      { name: "Frank Tenpenny", actor: "Samuel L. Jackson" },
      { name: "Eddie Pulaski", actor: "Chris Penn" },
      { name: "Cesar Vialpando", actor: "Clifton Collins Jr." },
      { name: "Mike Toreno", actor: "James Woods" },
      { name: "The Truth", actor: "Peter Fonda" },
      { name: "Madd Dogg", actor: "Ice-T" },
      { name: "OG Loc", actor: "Jonathan Anderson" },
      { name: "Wu Zi Mu", actor: "James Yaegashi" }
    ],
    trivia: [
      "Samuel L. Jackson ganhou o prêmio de melhor atuação masculina do Spike Video Game Awards 2004 como Tenpenny; o jogo levou também jogo do ano.",
      "No Golden Joystick de 2005, CJ foi eleito herói do ano e Tenpenny, vilão do ano."
    ],
    uncertainty: [
      "O 'Hot Coffee' é fato documentado da história real do jogo; não faz parte da história de CJ nem da cronologia do 3D Universe."
    ],
    sources: [
      { label: "Wikipedia - Grand Theft Auto: San Andreas", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto:_San_Andreas" },
      { label: "FTC - acordo Take-Two/Rockstar", url: "https://www.ftc.gov/news-events/news/press-releases/2006/06/makers-grand-theft-auto-san-andreas-settle-ftc-charges" },
      { label: "GTA Wiki - San Andreas", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto:_San_Andreas" }
    ]
  },

  "gta-iv": {
    id: "gta-iv",
    recordType: "production",
    title: "Grand Theft Auto IV — produção",
    lead:
      "Mais de mil pessoas, mais de US$ 100 milhões, até 250 mil fotos de Nova York e uma engine nova. GTA IV reiniciou a continuidade, apostou em drama e física — e bateu três recordes do Guinness em 24 horas.",
    stats: [
      { label: "Metacritic (consoles)", detail: "98" },
      { label: "faturamento no 1º dia", detail: "US$ 310 mi" },
      { label: "orçamento de desenvolvimento", detail: "US$ 100 mi+" },
      { label: "atores de voz", detail: "~660" }
    ],
    sheet: [
      { label: "Desenvolvedora", detail: "Rockstar North, com Rockstar NYC (50 pessoas), Lincoln (40) e San Diego (10)" },
      { label: "Publicadora", detail: "Rockstar Games (Capcom no Japão)" },
      { label: "Produção", detail: "Leslie Benzies" },
      { label: "Roteiro", detail: "Dan Houser, Rupert Humphries" },
      { label: "Direção de arte", detail: "Aaron Garbut" },
      { label: "Música original", detail: "Michael Hunter" },
      { label: "Engine", detail: "RAGE + Euphoria, Image Metrics (rosto) e SpeedTree (vegetação)" },
      { label: "Equipe", detail: "220 no núcleo da Rockstar North; mais de 1.000 no total, com 600–700 colaboradores parciais" },
      { label: "Produção", detail: "Trabalho preliminar desde novembro de 2004; fechado para fabricação em 17/04/2008" },
      { label: "Lançamento", detail: "PS3 e Xbox 360: 29/04/2008 · Japão: 30/10/2008 · PC: 02/12/2008 (EUA) · Retrocompatível no Xbox One: 09/02/2017" }
    ],
    sections: [
      {
        title: "Nova York fotografada rua a rua",
        details: [
          "O trabalho preliminar começou em novembro de 2004, um mês depois de San Andreas. Entre 60 e 70 funcionários da Rockstar North viajaram a Nova York em duas expedições (2005 e 2007) e produziram entre 100 mil e 250 mil fotografias, além de vídeos do trânsito e dos bairros.",
          "Em vez de três cidades, a Rockstar escolheu uma só, mais densa e detalhada: Broker, Dukes, Bohan, Algonquin e Alderney espelham os distritos de Nova York e Nova Jersey."
        ]
      },
      {
        title: "Tecnologia: RAGE e Euphoria",
        details: [
          "Foi o primeiro GTA na RAGE e o primeiro jogo comercial com Euphoria. Somados a Image Metrics para expressões faciais e SpeedTree para vegetação, esses sistemas deram peso físico a corpos e carros e permitiram atravessar Liberty City sem telas de carregamento.",
          "Veja o dossiê da RAGE para a evolução completa da engine."
        ]
      },
      {
        title: "Roteiro e atuação",
        details: [
          "Dan Houser e Rupert Humphries escreveram um roteiro com cerca de mil páginas. Foram cerca de 660 atores e 80 mil falas. Michael Hollick, voz de Niko Bellic, venceu o prêmio de melhor voz masculina no Spike Video Game Awards 2008.",
          "A história de imigração, trauma de guerra e dívida marcou uma virada de tom para a série, com a sátira convivendo com melancolia."
        ]
      },
      {
        title: "Lançamento recorde",
        details: [
          "Em 24 horas: 3,6 milhões de cópias e US$ 310 milhões. Em uma semana: 6 milhões de cópias e mais de US$ 500 milhões. Em 13 de maio de 2008, o Guinness registrou três recordes: maior faturamento de um videogame em 24 horas, maior faturamento de um produto de entretenimento em 24 horas e videogame vendido mais rápido.",
          "Até março de 2011, passou de 20 milhões de unidades. Metacritic 98 nos consoles — o jogo mais bem avaliado de PS3 e Xbox 360 no site — e 90 no PC."
        ]
      },
      {
        title: "Episódios de Liberty City",
        details: [
          "The Lost and Damned (17/02/2009) e The Ballad of Gay Tony (29/10/2009) saíram primeiro no Xbox 360 e depois como Episodes from Liberty City para PS3 e PC (abril de 2010). A Complete Edition reuniu tudo em outubro de 2010.",
          "Os três protagonistas — Niko, Johnny e Luis — se cruzam no mesmo roubo de diamantes, um experimento de narrativa paralela que antecipa os três protagonistas de GTA V."
        ]
      }
    ],
    cast: [
      { name: "Niko Bellic", actor: "Michael Hollick" },
      { name: "Roman Bellic", actor: "Jason Zumwalt" },
      { name: "Brucie Kibbutz", actor: "Timothy Adams" },
      { name: "Johnny Klebitz", actor: "Scott Hill" },
      { name: "Luis Fernando Lopez", actor: "Mario D'Leon" }
    ],
    uncertainty: [
      "Números de vendas vitalícias mais recentes de GTA IV não são detalhados pela Take-Two em separado; o marco oficial citado é de mais de 20 milhões até março de 2011.",
      "O orçamento de 'mais de US$ 100 milhões' é estimativa amplamente reportada, não demonstrativo financeiro da Rockstar."
    ],
    sources: [
      { label: "Wikipedia - Grand Theft Auto IV", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_IV" },
      { label: "GTA Wiki - GTA IV", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_IV" }
    ]
  },

  "gta-v": {
    id: "gta-v",
    recordType: "production",
    title: "Grand Theft Auto V — produção",
    lead:
      "Cerca de mil pessoas, o jogo mais caro da história em 2013, US$ 1 bilhão em três dias e quase 230 milhões de unidades treze anos depois. GTA V é a obra que mudou a economia da Rockstar e da própria indústria.",
    stats: [
      { label: "unidades (Take-Two, AF 2026)", detail: "~230 mi" },
      { label: "faturamento em 3 dias", detail: "US$ 1 bi" },
      { label: "desenvolvimento + marketing", detail: "~US$ 265 mi" },
      { label: "Metacritic (PS3/360)", detail: "97" }
    ],
    sheet: [
      { label: "Desenvolvedora", detail: "Rockstar North (360 pessoas) com Leeds, Lincoln, London, New England, San Diego e Toronto" },
      { label: "Publicadora", detail: "Rockstar Games" },
      { label: "Produção", detail: "Leslie Benzies" },
      { label: "Roteiro", detail: "Dan Houser, Rupert Humphries, Michael Unsworth" },
      { label: "Direção de arte", detail: "Aaron Garbut" },
      { label: "Trilha original", detail: "Tangerine Dream, Woody Jackson, The Alchemist, Oh No, DJ Shadow" },
      { label: "Engine", detail: "RAGE com Euphoria e Bullet" },
      { label: "Orçamento", detail: "Mais de US$ 137 mi de desenvolvimento (estimativa); ~£ 170 mi (~US$ 265 mi) com marketing" },
      { label: "Rádios", detail: "241 músicas licenciadas em 15 estações + 2 rádios de debate (mais de 160 músicas adicionadas nas reedições)" },
      { label: "Lançamento", detail: "PS3/360: 17/09/2013 · GTA Online: 01/10/2013 · PS4/One: 18/11/2014 · PC: 14/04/2015 · PS5/Series: 15/03/2022" }
    ],
    sections: [
      {
        title: "Recomeçar Los Santos do zero",
        details: [
          "O trabalho preliminar começou por volta do lançamento de GTA IV, em 2008; a produção plena durou cerca de três anos. O diretor de arte Aaron Garbut explicou que a Los Santos de San Andreas parecia 'um cenário com pedestres andando a esmo' — por isso a cidade foi reconstruída do zero.",
          "A equipe reuniu cerca de 250 mil fotografias e horas de vídeo do sul da Califórnia e usou Google Maps e Street View para desenhar a malha viária. Aviões voltaram à série, já que o mapa voltou a ter espaço para voar."
        ]
      },
      {
        title: "Três protagonistas",
        details: [
          "Michael, Franklin e Trevor foram a primeira estrutura com três protagonistas jogáveis da série. A troca a qualquer momento — fora e dentro de missões — permitiu assaltos com papéis simultâneos e três pontos de vista de classe e tom.",
          "Ned Luke, Shawn Fonteno e Steven Ogg deram voz e captura de movimento aos três; captura facial e corporal foi usada em todo o elenco."
        ]
      },
      {
        title: "Música: a primeira trilha original de GTA",
        details: [
          "Pela primeira vez a série teve trilha original durante as missões, criada por cinco produtores — Tangerine Dream, Woody Jackson, The Alchemist, Oh No e DJ Shadow — num sistema de camadas em que um construía sobre o trabalho do outro. Foram mais de 20 horas de música composta.",
          "A seleção de rádio começou com mais de 900 faixas candidatas e terminou em 241 músicas em 15 estações, mais duas rádios de debate."
        ]
      },
      {
        title: "Recordes e vendas",
        details: [
          "US$ 800 milhões em 24 horas e US$ 1 bilhão em três dias, sete recordes do Guinness, incluindo o produto de entretenimento a atingir US$ 1 bilhão mais rápido.",
          "Pelos dados da Take-Two no ano fiscal de 2026, GTA V se aproxima de 230 milhões de unidades distribuídas, e GTA V/GTA Online seguem entre os maiores contribuintes de receita da empresa, treze anos após o lançamento."
        ]
      },
      {
        title: "Relançamentos e GTA Online",
        details: [
          "As versões de 2014 trouxeram primeira pessoa (cerca de 3.000 novas animações de armas), mais tráfego, vegetação e fauna. No PC, o Rockstar Editor com Director Mode. Em 2022, PS5 e Xbox Series X|S; em 2025, GTA V Enhanced no PC.",
          "GTA Online estreou em 1º de outubro de 2013 com servidores instáveis e virou a plataforma mais lucrativa da Rockstar, recebendo atualizações por mais de uma década."
        ]
      },
      {
        title: "Controvérsias",
        details: [
          "A missão 'By the Book', com cena de tortura interativa, foi alvo de críticas de imprensa e de entidades de direitos humanos.",
          "Em 2014, redes varejistas da Austrália retiraram o jogo das prateleiras após um abaixo-assinado sobre violência contra mulheres."
        ]
      }
    ],
    cast: [
      { name: "Michael De Santa", actor: "Ned Luke" },
      { name: "Franklin Clinton", actor: "Shawn Fonteno" },
      { name: "Trevor Philips", actor: "Steven Ogg" },
      { name: "Lester Crest", actor: "Jay Klaitz" },
      { name: "Lamar Davis", actor: "Gerald 'Slink' Johnson" },
      { name: "Jimmy De Santa", actor: "Danny Tamberelli" }
    ],
    uncertainty: [
      "O orçamento de GTA V nunca foi publicado oficialmente pela Rockstar; os valores são estimativas de analistas e da imprensa britânica.",
      "O número de unidades é 'sell-in' (distribuídas ao varejo e vendas digitais) reportado pela Take-Two, não necessariamente cópias ativadas por jogadores."
    ],
    sources: [
      { label: "Wikipedia - Development of Grand Theft Auto V", url: "https://en.wikipedia.org/wiki/Development_of_Grand_Theft_Auto_V" },
      { label: "Take-Two - resultados do ano fiscal 2026", url: "https://www.take2games.com/ir/news/take-two-interactive-software-inc-reports-results-fourth-2" },
      { label: "GTA Wiki - GTA V development", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_V/Development" }
    ]
  },

  "gta-vi": {
    id: "gta-vi",
    recordType: "production",
    title: "Grand Theft Auto VI — produção",
    lead:
      "O intervalo mais longo entre dois GTAs principais, o maior vazamento da história da Rockstar, dois adiamentos e um trailer que quebrou recordes no YouTube. Tudo abaixo separa o que a Rockstar confirmou do que é leitura de imprensa.",
    stats: [
      { label: "lançamento", detail: "19/11/2026" },
      { label: "views do Trailer 1 em 24 h", detail: "90 mi+" },
      { label: "adiamentos", detail: "2" },
      { label: "guidance da Take-Two para o AF 2027", detail: "US$ 8,0–8,2 bi" }
    ],
    sheet: [
      { label: "Desenvolvedora", detail: "Rockstar Games (liderança criativa na Rockstar North)" },
      { label: "Plataformas", detail: "PlayStation 5 e Xbox Series X|S; PC não anunciado" },
      { label: "Engine", detail: "Tecnologia proprietária da Rockstar (RAGE); sem ficha técnica oficial" },
      { label: "Ambientação", detail: "Estado de Leonida, com Vice City como centro" },
      { label: "Protagonistas", detail: "Lucia Caminos e Jason Duval" },
      { label: "Edições", detail: "Standard (US$ 79,99) e Ultimate (US$ 99,99)" },
      { label: "Pré-venda", detail: "Desde 25/06/2026; pré-load digital em 12/11/2026" },
      { label: "Hardware oficial", detail: "Dois DualSense de edição limitada, anunciados em 03/09/2026" }
    ],
    sections: [
      {
        title: "Confirmação e vazamento",
        details: [
          "Em fevereiro de 2022, a Rockstar confirmou publicamente que o desenvolvimento do próximo GTA estava bem encaminhado.",
          "Em setembro de 2022, cerca de 90 vídeos de uma versão de desenvolvimento vazaram em fóruns. A Rockstar confirmou a invasão e disse que o trabalho não seria afetado. O responsável, ligado ao grupo Lapsus$, foi preso no Reino Unido."
        ]
      },
      {
        title: "Trailers",
        details: [
          "O Trailer 1 saiu em dezembro de 2023, horas antes do previsto por ter vazado, e passou de 90 milhões de visualizações em 24 horas — recorde para estreia de trailer de jogo. Ele confirmou Leonida, Vice City e Lucia.",
          "O Trailer 2 veio em 6 de maio de 2025, com Jason e Lucia em destaque; a Rockstar informou que foi capturado inteiramente em PS5, metade gameplay e metade cenas. O 'Extended Look' de 27 de agosto de 2026 detalhou mecânicas, personagens e regiões."
        ]
      },
      {
        title: "Dois adiamentos",
        details: [
          "A janela original era o outono de 2025. Em 2 de maio de 2025, a Rockstar adiou para 26 de maio de 2026, pedindo desculpas e prometendo o polimento esperado. Em 6 de novembro de 2025, novo adiamento para 19 de novembro de 2026, data reafirmada em agosto de 2026."
        ]
      },
      {
        title: "Uma Rockstar diferente",
        details: [
          "É o primeiro GTA principal feito sem Dan Houser, que deixou a Rockstar em 2020, e sem Leslie Benzies, que saiu em 2016 — dois nomes centrais de GTA III a GTA V.",
          "Nas prévias de agosto de 2026, Rob Nelson (Rockstar North) afirmou que não há microtransações no single-player nem uso de IA generativa na produção."
        ]
      },
      {
        title: "O peso para a Take-Two",
        details: [
          "No relatório do ano fiscal 2026, a Take-Two atribuiu ao lançamento de 19 de novembro a projeção de receita líquida recorde de US$ 8,0 a 8,2 bilhões para o ano fiscal 2027, contra US$ 6,72 bilhões no ano anterior."
        ]
      }
    ],
    timeline: [
      { year: "2022", title: "Desenvolvimento confirmado", detail: "Em fevereiro, a Rockstar diz que o próximo GTA está bem encaminhado." },
      { year: "2022", title: "Vazamento", detail: "Setembro: cerca de 90 vídeos de desenvolvimento vazam; a Rockstar confirma a invasão." },
      { year: "2023", title: "Trailer 1", detail: "Dezembro: revelação de Leonida e Lucia; janela de 2025." },
      { year: "2025", title: "1º adiamento", detail: "2 de maio: nova data em 26 de maio de 2026." },
      { year: "2025", title: "Trailer 2", detail: "6 de maio: capturado inteiramente em PS5." },
      { year: "2025", title: "2º adiamento", detail: "6 de novembro: data final de 19 de novembro de 2026." },
      { year: "2026", title: "Pré-venda", detail: "25 de junho: edições Standard e Ultimate." },
      { year: "2026", title: "Extended Look", detail: "27 de agosto: mecânicas, personagens e regiões." },
      { year: "2026", title: "Lançamento", detail: "Pré-load em 12 de novembro; lançamento em 19 de novembro." }
    ],
    uncertainty: [
      "Orçamento: valores de 'bilhões de dólares' circulam na imprensa, mas não há número oficial.",
      "Tamanho do mapa, versão de PC, futuro de GTA Online e ficha técnica (resolução, fps, ray tracing) não foram confirmados pela Rockstar.",
      "Os atores de Lucia e Jason não foram creditados oficialmente até o lançamento; nomes que circulam são apuração de fãs e imprensa."
    ],
    sources: [
      { label: "Rockstar Games - GTA VI", url: "https://www.rockstargames.com/VI" },
      { label: "Newswire - nova data", url: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026" },
      { label: "Take-Two - resultados do ano fiscal 2026", url: "https://www.take2games.com/ir/news/take-two-interactive-software-inc-reports-results-fourth-2" }
    ]
  }
};

/* Engines em ordem cronológica — faixa "Tecnologia da saga" em #development. */
const deepEngineKeys = ["race-n-chase-engine", "renderware", "rage", "euphoria"];

/* Desenvolvimento -> jogo (a ficha de produção mora no id do jogo). */
const deepDevGameIds = {
  "dev-gta1": "gta-1",
  "dev-gta3": "gta-iii",
  "dev-vice": "vice-city",
  "dev-sa": "san-andreas",
  "dev-gta4": "gta-iv",
  "dev-gtav": "gta-v",
  "dev-gtavi": "gta-vi"
};
developmentData.forEach((item) => { item.gameId = deepDevGameIds[item.id] || null; });

/* Vozes/atuação por personagem (só créditos verificados). `actor` e `name`
 * ficam fora da allowlist de tradução: nome próprio não se traduz. */
const characterVoiceData = {
  "claude": "sem falas (protagonista silencioso)",
  "tommy-vercetti": "Ray Liotta",
  "cj": "Young Maylay",
  "toni-cipriani": "Michael Madsen (GTA III) · Danny Mastrogiorgio (Liberty City Stories)",
  "vic-vance": "Dorian Missick",
  "niko-bellic": "Michael Hollick",
  "johnny-klebitz": "Scott Hill",
  "luis-lopez": "Mario D'Leon",
  "michael-de-santa": "Ned Luke",
  "franklin-clinton": "Shawn Fonteno",
  "trevor-philips": "Steven Ogg",
  "lucia-caminos": "não creditado oficialmente pela Rockstar",
  "jason-duval": "não creditado oficialmente pela Rockstar",
  "roman-bellic": "Jason Zumwalt",
  "brucie-kibbutz": "Timothy Adams",
  "lester-crest": "Jay Klaitz",
  "lamar-davis": "Gerald 'Slink' Johnson",
  "jimmy-de-santa": "Danny Tamberelli",
  "ken-rosenberg": "William Fichtner",
  "lance-vance": "Philip Michael Thomas",
  "sonny-forelli": "Tom Sizemore",
  "ricardo-diaz": "Luis Guzmán",
  "colonel-cortez": "Robert Davi",
  "avery-carrington": "Burt Reynolds",
  "kent-paul": "Danny Dyer",
  "salvatore-leone": "Frank Vincent",
  "maria-latore": "Debi Mazar",
  "joey-leone": "Michael Rapaport",
  "donald-love": "Kyle MacLachlan",
  "catalina": "Cynthia Farrell",
  "asuka-kasen": "Lianna Pai",
  "8-ball": "Guru",
  "big-smoke": "Clifton Powell",
  "ryder": "MC Eiht",
  "sweet-johnson": "Faizon Love",
  "cesar-vialpando": "Clifton Collins Jr.",
  "woozie": "James Yaegashi",
  "mike-toreno": "James Woods",
  "the-truth": "Peter Fonda",
  "frank-tenpenny": "Samuel L. Jackson",
  "eddie-pulaski": "Chris Penn",
  "madd-dogg": "Ice-T",
  "og-loc": "Jonathan Anderson"
};
charactersData.forEach((item) => {
  if (characterVoiceData[item.id]) item.actor = characterVoiceData[item.id];
});

/* Glossário: RAGE/Euphoria ganham ponte para o dossiê completo e entra o
 * verbete RenderWare, que faltava para explicar a virada técnica. */
const deepGlossaryLinks = { "RAGE": "rage", "Euphoria": "euphoria" };
glossaryData.forEach((item) => {
  if (deepGlossaryLinks[item.term]) item.deepKey = deepGlossaryLinks[item.term];
  if (item.term === "RAGE") {
    item.definition = "Rockstar Advanced Game Engine: engine proprietária da Rockstar desde 2006, base de GTA IV, GTA V, Red Dead Redemption 2 e GTA VI.";
    item.relatedTerms = ["Euphoria", "RenderWare", "HD Universe", "GTA Online Organization"];
  }
});
if (!glossaryData.some((item) => item.term === "RenderWare")) {
  const deepEuphoriaIndex = glossaryData.findIndex((item) => item.term === "Euphoria");
  glossaryData.splice(deepEuphoriaIndex >= 0 ? deepEuphoriaIndex + 1 : glossaryData.length, 0, {
    term: "RenderWare",
    definition: "Middleware da Criterion usado pela Rockstar em GTA III, Vice City e San Andreas, antes da RAGE.",
    category: "Tecnologia",
    deepKey: "renderware",
    expanded:
      "RenderWare foi o middleware gráfico multiplataforma mais popular da geração PlayStation 2, criado pela Criterion Software. A Rockstar o usou em GTA III, Vice City, Manhunt, San Andreas e Bully. Em 2004, a Electronic Arts comprou a Criterion; a Rockstar acelerou então a própria engine, a RAGE, que estreou em 2006.",
    whyItMatters:
      "Explica por que a era 3D tem telas de carregamento entre ilhas, neblina para esconder o streaming e física mais simples — e por que a era HD precisou de uma tecnologia nova.",
    appearsIn: ["GTA III", "Vice City", "San Andreas", "Manhunt", "Bully"],
    examples: [
      "GTA III dividiu Liberty City em três ilhas liberadas aos poucos.",
      "San Andreas levou a mesma base a um mapa de cerca de 36 km².",
      "A Definitive Edition de 2021 abandonou a RenderWare e foi refeita em Unreal Engine 4."
    ],
    relatedTerms: ["RAGE", "3D Universe", "Euphoria"],
    precisionNotes: ["Ferramentas internas da Rockstar sobre a RenderWare não são documentadas publicamente em detalhe."],
    tags: ["engine", "tecnologia", "3D Universe", "PS2"],
    sources: [
      { label: "Wikipedia - RenderWare", url: "https://en.wikipedia.org/wiki/RenderWare" },
      { label: "Wikipedia - RAGE", url: "https://en.wikipedia.org/wiki/Rockstar_Advanced_Game_Engine" }
    ]
  });
}

Object.assign(window, { deepDossierData, deepEngineKeys, characterVoiceData });
