/* ============ GRAND THEFT AUTO — DADOS COMPLETOS E REAIS ============ */

// ===========================================
// HISTÓRIA DA ROCKSTAR GAMES
// ===========================================
const ROCKSTAR_HISTORY = {
  founding: {
    title: "DMA Design & Origens da Franquia",
    year: "1987",
    content: "David Jones funda a DMA Design em Dundee, Escócia. A empresa começou criando jogos diversos, mas sua direção mudaria radicalmente."
  },
  gta1: {
    title: "Grand Theft Auto — O Nascimento",
    year: "1997",
    content: "David Jones e Mike Dailly criam Grand Theft Auto, um jogo top-down revolucionário que misturava liberdade, caos urbano e humor negro. Lançado inicialmente em PlayStation e PC, GTA definiria um novo gênero: o crime sandbox urbano."
  },
  buyout: {
    title: "Take-Two Interactive Assume o Controle",
    year: "1998-1999",
    content: "Take-Two Interactive adquire os ativos da BMG Interactive, absorvendo a publicação de GTA. Paralelamente, Rockstar Games é formalmente fundada por Sam Houser, Dan Houser, Terry Donovan, Jamie King e Gary Foreman. A DMA Design passa a ser conhecida como Rockstar North."
  },
  vision: {
    title: "A Visão: Cinema, Satíra e Liberdade",
    year: "1999-2001",
    content: "Rockstar consolida sua visão: GTA não seria apenas um jogo de crime, mas uma sátira elaborada da sociedade americana, misturando cinema, narrativa profunda, rádios temáticas, personagens memoráveis e uma sensação visceral de estar em uma metrópole viva. Cada jogo se tornaria uma décade diferente, um estilo próprio."
  },
  gta3_revolution: {
    title: "GTA III — A Revolução do 3D",
    year: "2001",
    content: "GTA III redefiniu a indústria. Ao mudar de 2D para 3D em tempo real, Liberty City ganhou profundidade. A câmera atrás do jogador, as missões cinemáticas, os personagens dublados em inglês, a liberdade de exploração: tudo isto junto criou um novo padrão para mundos abertos. GTA III vendeu milhões e marcou a era 3D da franquia."
  },
  hd_era: {
    title: "Era HD — Realismo e Escala",
    year: "2008-2013",
    content: "Com a engine RAGE, GTA IV trouxe Liberty City em HD: mais detalhado, mais realista, mais sujo e mais denso. O tom mudou de aventura para drama noir. Depois, GTA V em 2013 expandiu a escala com Los Santos e Blaine County, três protagonistas, e apresentou GTA Online como uma plataforma de jogo viva que continua até hoje."
  },
  online_phenomenon: {
    title: "GTA Online — A Plataforma Viva",
    year: "2013-2026",
    content: "GTA Online começou como um modo multiplayer experimental. Virou um fenômeno: assaltos cooperativos, negócios criminosos, motoclubes, bunkers, cassinos, pista de corridas, drogas, bancos de dados de compra e venda. GTA Online recebeu atualizações consistentes por mais de uma década, gerando bilhões em receita para Rockstar."
  },
  gta6_next: {
    title: "GTA VI — O Próximo Capítulo",
    year: "2026",
    content: "Anunciado em dezembro de 2024, GTA VI será lançado em 19 de novembro de 2026 (início exclusivo PS5, depois outras plataformas). Ambientado em Leonida (baseada na Flórida moderna), com Vice City no coração. Protagonistas: Lucia Caminos e Jason Duval. Tema: crime moderno, redes sociais, influencers, golpes digitais e sátira do século XXI."
  }
};

// ===========================================
// UNIVERSOS GTA
// ===========================================
const UNIVERSOS_GTA = [
  {
    id: "2d",
    name: "2D Universe",
    description: "Era top-down, arcade, com tom experimental e desconexão entre jogos.",
    games: ["GTA 1", "GTA London 1969", "GTA London 1961", "GTA 2", "GTA Advance"],
    color: "#bdbab1",
    characteristics: [
      "Visão de cima (top-down)",
      "Estética retrô e pixelizada",
      "Gameplay mais arcade",
      "Cidades menos densas",
      "Personagens com menos profundidade narrativa",
      "Tom mais humorístico e menos dramático"
    ]
  },
  {
    id: "3d",
    name: "3D Universe",
    description: "Primeira era 3D da série. Continuidade conectada por cidades, máfias e personagens.",
    games: ["GTA III", "GTA Vice City", "GTA San Andreas", "GTA Liberty City Stories", "GTA Vice City Stories"],
    color: "#3b6cff",
    characteristics: [
      "Transição para 3D tempo real",
      "Câmera atrás do personagem",
      "Mundo exploração tridimensional",
      "Cidades conectadas narrativamente",
      "Personagens recorrentes",
      "Máfias e histórias ligadas",
      "Era de ouro da série antes do HD"
    ]
  },
  {
    id: "hd",
    name: "HD Universe",
    description: "Era moderna. Realismo, densidade visual máxima, narrativa profunda e GTA Online.",
    games: ["GTA IV", "GTA Chinatown Wars", "GTA: The Lost and Damned", "GTA: The Ballad of Gay Tony", "GTA V", "GTA Online", "GTA VI"],
    color: "#ff3d8a",
    characteristics: [
      "Engine RAGE: gráficos HD de alta fidelidade",
      "Mundo urbano muito mais denso e detalhado",
      "Narrativa cinematográfica",
      "Tom realista, frequentemente noir",
      "Sátira sofisticada da política e cultura americana",
      "Personagens bem desenvolvidos",
      "GTA Online como ecossistema vivo",
      "Múltiplos protagonistas em V"
    ]
  }
];

// ===========================================
// JOGOS COMPLETOS
// ===========================================
const GAMES_COMPLETE = [
  {
    id: "gta1",
    title: "Grand Theft Auto",
    releaseYear: 1997,
    storyYear: "1986+",
    universe: "2D",
    city: "Liberty City, Vice City, San Andreas",
    protagonista: "Customizável",
    antagonistas: [],
    summary: "Top-down, liberdade total de exploração em três cidades. Crime urbano puro.",
    fullStory: "Em GTA 1, você é um criminoso anônimo em três cidades diferentes. Suba na hierarquia do crime, complete missões para vários patrões, roube carros, destrua propriedades e se torne o rei do submundo. Sem narrativa profunda - é puro caos e diversão. A liberdade era o ponto: fazer o que quisesse, quando quisesse.",
    development: "Criado pela DMA Design, liderado por David Jones e Mike Dailly. Começou como concept art para um racing game (Race'n'Chase) que virou crime sandbox. Inovação: a liberdade é o gameplay.",
    importance: "Fundador da franquia. Provou que crimes em videojogos podiam ser divertidos e não violentos de forma patológica.",
    themes: ["Liberdade", "Crime urbano", "Caos", "Exploração"],
    tags: ["2D Universe", "Sandbox", "Clássico", "PC/PS1"],
  },
  {
    id: "gtalon1961",
    title: "Grand Theft Auto: London 1961",
    releaseYear: 1999,
    storyYear: 1961,
    universe: "2D",
    city: "Londres, Reino Unido",
    protagonista: "Customizável",
    antagonistas: [],
    summary: "Expansão com tema britânico dos anos 60. A única incursão da série fora dos EUA na era 2D.",
    fullStory: "Uma das poucas vezes que GTA sai dos EUA. Londres em 1961, no auge da Swinging Sixties britânica. Vous jouez como criminosos em uma capital europeia, com carros britânicos, sotaque britânico e crime de colar branco. Experimento singular da série.",
    development: "Expansão para GTA 1. Mudança de cenário para testar viabilidade de novos locais.",
    importance: "Rara aventura internacional. Mostrou que a fórmula de GTA poderia funcionar fora da América.",
    themes: ["Era 60", "Londres", "Crime britânico"],
    tags: ["2D Universe", "Expansão", "Exclusivo", "Criatividade"]
  },
  {
    id: "gtalon1969",
    title: "Grand Theft Auto: London 1969",
    releaseYear: 1999,
    storyYear: 1969,
    universe: "2D",
    city: "Londres, Reino Unido",
    protagonista: "Customizável",
    antagonistas: [],
    summary: "Outra expansão de Londres, agora em 1969 com atualizações visuais e novo conteúdo.",
    fullStory: "Retorno a Londres britânica, mas oito anos depois. A cultura mudou, os carros são diferentes, a música é outra. Criminalidade em plena Era Dourada britânica.",
    development: "Segunda expansão de GTA 1, aprimorando o experimento londrino.",
    importance: "Consolidou a ideia de expansões para GTA 1. Mostrou diversidade temática.",
    themes: ["Era 60", "Londres", "Contracultura"],
    tags: ["2D Universe", "Expansão", "Nostalgia"]
  },
  {
    id: "gta2",
    title: "Grand Theft Auto 2",
    releaseYear: 1999,
    storyYear: "2013 (fictício/retrofuturista)",
    universe: "2D",
    city: "Anywhere City",
    protagonista: "Claude Speed",
    antagonistas: ["Zaibatsu", "Loonies", "Yakuza", "Scientists", "Rednecks", "Russian Mafia"],
    summary: "Mundo retrofuturista. Gangues estilizadas e distintas. Tom mais absurdo e colorido.",
    fullStory: "GTA 2 é um experimento único. Anywhere City é uma metrópole futurista (estilo retro-futurista dos anos 70 imaginando o ano 2000+). Claude Speed trabalha para várias gangues: Zaibatsu (corporações), Loonies (loucos), Yakuza (crime japonês), Scientists (cientistas malucos), Rednecks (caipiras), Russian Mafia. Cada gangue tem estilos visuais e comportamentais únicos. Não há narrativa linear forte - você ganha dinheiro trabalhando para facções.",
    development: "Prequela experimental. Rockstar quis testar narrativa fragmentária e universo próprio. Tecnicamente inovador para PS1. Tom bem-humorado.",
    importance: "Diferenciador entre 2D e 3D. Provou que GTA podia ser absurdo, colorido e não-linear.",
    themes: ["Futuro", "Corporações", "Gangues", "Absurdo"],
    tags: ["2D Universe", "Experimental", "Cult", "Único"]
  },
  {
    id: "gta3",
    title: "Grand Theft Auto III",
    releaseYear: 2001,
    storyYear: "2001",
    universe: "3D",
    city: "Liberty City",
    protagonista: "Claude",
    antagonistas: ["Catalina", "Asuka Kasen", "Donald Love", "Salvatore Leone"],
    summary: "A revolução: 3D tempo real, mundo aberto, narrativa cinemática. Define o padrão para mundos abertos modernos.",
    fullStory: "Você é Claude, um ladrão silencioso que é traído e deixado para morrer após um assalto de banco por Catalina (sua companheira) e Miguel. Você sobrevive misteriosamente. Em Liberty City, você passa a trabalhar para várias facções: Leone Family (máfia italiana), Yakuza (crime japonês), Yardies (gangue caribenha), Forelli Family e cartel colombiano. Você conhece 8-Ball (explosivista), Luigi Goterelli (gerente de discoteca), Joey Leone (mafioso), Toni Cipriani (soldado Leone), Maria Latore (prostituta com coração de ouro), Asuka Kasen (poderosa e enigmática). Você constrói poder, completa missões cada vez mais audaciosas e eventualmente enfrenta Catalina em um final sangrento.",
    development: "A obra-prima que redefiniu a indústria. Desenvolvido por Rockstar North em PS2. Engine RAGE primitiva. Vozes de atores reais. Vinheta de cinema entre telas. Período de desenvolvimento intensivo.",
    importance: "Revolucionário. Criou o padrão de mundo aberto urbano que toda a indústria seguiu. Vendeu milhões, definiu PS2, marcou gerações.",
    themes: ["Crime urbano", "Traição", "Survival", "Ascensão do crime"],
    tags: ["3D Universe", "Clássico", "PS2", "Revolucionário", "Fundador"]
  },
  {
    id: "vicecity",
    title: "Grand Theft Auto: Vice City",
    releaseYear: 2002,
    storyYear: 1986,
    universe: "3D",
    city: "Vice City",
    protagonista: "Tommy Vercetti",
    antagonistas: ["Sonny Forelli", "Ricardo Diaz", "Lance Vance", "Avery Carrington"],
    summary: "Neon, palmeiras, anos 80, cartéis. Tommy Vercetti sai da prisão e reconstrói um império em Vice City.",
    fullStory: "Tommy Vercetti passou 15 anos na prisão. Sonny Forelli o liberta para fazer um acordo de drogas de $250 mil em Vice City. É uma armadilha: Tommy é emboscado e perde o dinheiro e a droga. Humilhado, precisa recuperar tudo. Em Vice City, Tommy conhece Ken Rosenberg (advogado corrupto), Lance Vance (companheiro que virar traidor), Colonel Cortez (traficante de drogas de elite), Avery Carrington (empresário), Ricardo Diaz (rei da droga). Tommy passa por negócios de tráfico, assassinatos, construção de poder. Ele ama Avery e conquista domínio. Lance o trai no final. Tommy enfrenta Sonny Forelli em seu penthouse e se torna o chefe indiscutível de Vice City.",
    development: "Desenvolvido em apenas dois anos após GTA III (rapidez notável). Cenário dos anos 80. Trilha sonora clássica com Wham!, Madonna, Kim Carnes, A-Ha, The Who. Dublagem memorável.",
    importance: "Aperfeiçoamento de GTA III. Provou que a fórmula funcionava. Influência Pop dos anos 80 em videogames.",
    themes: ["Ascensão", "Traição", "Neon", "Gangsterismo", "Redenção"],
    tags: ["3D Universe", "Clássico", "Neon", "Anos 80", "Icônico"]
  },
  {
    id: "sanandreas",
    title: "Grand Theft Auto: San Andreas",
    releaseYear: 2004,
    storyYear: 1992,
    universe: "3D",
    city: "San Andreas (Los Santos, San Fierro, Las Venturas)",
    protagonista: "Carl 'CJ' Johnson",
    antagonistas: ["Big Smoke", "Ryder", "Officer C.R.A.S.H.", "Tenpenny", "Eddie Pulaski"],
    summary: "Épico: três cidades, RPG light, gangues de rua, território, customização. CJ retorna a Los Santos quando a mãe morre.",
    fullStory: "Carl Johnson (CJ) volta a Los Santos após cinco anos fora. Sua mãe foi morta pela gangue rival Ballas. Grove Street Families, sua gangue original, está enfraquecida. CJ é incriminado falsamente por homicídio e chantageado por dois policiais corruptos (Tenpenny e Eddie Pulaski). Ele precisa fortalecer Grove Street, reconquistar território e descobrir quem matou sua mãe. Big Smoke e Ryder (seus companheiros de infância) revelam ser traidores trabalhando para o Cartel Colombiano. CJ expande seu impacto para San Fierro (cidade de contracultura e tecnologia) e Las Venturas (cidade do deserto com cassinos). Ele recupera Los Santos, mata Big Smoke e Ryder, e enfrenta Tenpenny.",
    development: "Expansão massiva: três cidades conectadas, RPG leve (musculatura, gordura, reputação), academias, roupas, aviação, aprendizado de habilidades. Influência de films de gangsters afro-americanos dos anos 90. Trilha sonora com Nate Dogg, 50 Cent, Coolio.",
    importance: "Ápice da série 3D. Mostrou ambição épica. Provou que GTA poderia ser ambicioso em escala.",
    themes: ["Comunidade", "Traição", "Ascensão", "Redenção", "Território"],
    tags: ["3D Universe", "Épico", "Três cidades", "Gangues de rua", "Clássico"]
  },
  {
    id: "lcstories",
    title: "Grand Theft Auto: Liberty City Stories",
    releaseYear: 2005,
    storyYear: 1998,
    universe: "3D",
    city: "Liberty City",
    protagonista: "Toni Cipriani",
    antagonistas: ["Salvatore Leone", "Sindaccos", "Forellis", "Yakuza"],
    summary: "Prequel de GTA III. Toni Cipriani trabalha para a família Leone. Máfias italianas em guerra.",
    fullStory: "Toni Cipriani retorna a Liberty City após matar uma mulher (acidente). Seu mãe o força a se redimir trabalhando para Salvatore Leone. Toni sobe na hierarquia Leone enquanto outras famílias (Sindaccos, Forellis) e yakuza competem por poder. A história conecta diretamente ao evento que GTA III começa. Você vê o mundo antes de Claude chegar.",
    development: "Prequel temático. Usa engine de GTA III mas com gráficos aprimorados. Liberty City revisitada com era diferente.",
    importance: "Consolidação narrativa da série 3D. Mostrou que prequels e conexões podiam funcionar.",
    themes: ["Família", "Redenção", "Máfia italiana", "Ciclo"],
    tags: ["3D Universe", "Prequel", "Liberty City", "Máfia"]
  },
  {
    id: "vicecitystories",
    title: "Grand Theft Auto: Vice City Stories",
    releaseYear: 2006,
    storyYear: 1984,
    universe: "3D",
    city: "Vice City",
    protagonista: "Victor 'Vic' Vance",
    antagonistas: ["Jerry Martinez", "Família Mendez", "Tommy Vercetti"],
    summary: "Prequel de Vice City. Vic Vance é o irmão do policial Dic Vance. Ele reconstrói um império antes de Tommy.",
    fullStory: "Victor Vance é o irmão de um policial honesto. Seu irmão é morto em ação. Vic entra na criminalidade em Vice City em 1984, dois anos antes de Tommy Vercetti chegar. Vic constrói um império de tráfico, trabalha com cartéis e eventualmente é eliminado por Tommy Vercetti no início de Vice City.",
    development: "Outro prequel. Conecta Tommy Vercetti à história anterior. Continuidade temporal.",
    importance: "Aprofundou a timeline 3D. Mostrou como vice City evoluiu entre eras.",
    themes: ["Redenção", "Poder", "Destino", "Ciclo criminal"],
    tags: ["3D Universe", "Prequel", "Vice City"]
  },
  {
    id: "gta4",
    title: "Grand Theft Auto IV",
    releaseYear: 2008,
    storyYear: 2008,
    universe: "HD",
    city: "Liberty City",
    protagonista: "Niko Bellic",
    antagonistas: ["Dimitri Rascalov", "Mikhail Faustin", "Ray Bulgarin", "Jimmy Pegorino"],
    summary: "Tom realista e noir. Niko é um imigrante traumatizado buscando o sonho americano. Comentário social profundo.",
    fullStory: "Niko Bellic é um veterano de guerra do leste europeu que chega a Liberty City perseguindo o 'sonho americano'. Seu primo Roman o convida, mas Roman mentiu sobre sua riqueza. Niko vira mercenário, paga dívidas, entra em conflito com máfias russas (Rascalov, Faustin), avançados italianos (Pegorino), e agentes federais. Ele conhece Little Jacob (distribuidor de armas jamaicano), Brucie Kibbutz (esteroidista paranoico), Packie McReary (ex-IRA), Kate McReary (analista de polícia), Mallorie Bardas (assistente social), Lester Crest (hackeador), Roman (seu primo), Maria Latore (prostituta vítima de sistemas). Niko percebe que o sonho americano é uma mentira. Finalmente, tem de escolher: dinheiro ou dignidade. Mata Dimitri Rascalov.",
    development: "Primeira entrada na era HD (engine RAGE). Liberty City com densidade visual nunca antes vista. Dublagem de atores: Michael Hollick (Niko). Tom adulto, dramático, satirizando imigração e capitalismo. Influência de cinema europeu noir.",
    importance: "Redefiniu tom de GTA. Provou que a série poderia ser sombria, narrativamente profunda e socialmente crítica. Vendeu 25+ milhões de cópias.",
    themes: ["Imigração", "Trauma", "Sonho americano", "Corrupção", "Desilusão"],
    tags: ["HD Universe", "Noir", "Cinematográfico", "Clássico", "Realismo"]
  },
  {
    id: "gta4tlaod",
    title: "Grand Theft Auto: The Lost and Damned",
    releaseYear: 2009,
    storyYear: 2008,
    universe: "HD",
    city: "Liberty City",
    protagonista: "Johnny Klebitz",
    antagonistas: ["Billy Grey", "Ray Boccino", "Niko Bellic"],
    summary: "Motoclubes e violência. Johnny Klebitz lidera The Lost MC em luta interna contra Billy Grey.",
    fullStory: "Johnny Klebitz é vice-presidente de The Lost MC, um motoclube de puro caos em Liberty City. Billy Grey é o presidente, mas é violento e instável. Johnny tenta manter ordem enquanto Billy destrói tudo. Niko Bellic frequentemente interfere (ele aparece no jogo). Johnny eventualmente mata Billy e toma controle do clube.",
    development: "DLC para GTA IV depois expandido para jogo independente. Foco em motoclubes, lealdade e autodestruição.",
    importance: "Mostrou que spin-offs do mesmo universo podiam expandir perspectivas.",
    themes: ["Lealdade", "Caos", "Poder", "Autodestruição"],
    tags: ["HD Universe", "Motoclube", "Spin-off"]
  },
  {
    id: "gta4tbogt",
    title: "Grand Theft Auto: The Ballad of Gay Tony",
    releaseYear: 2009,
    storyYear: 2008,
    universe: "HD",
    city: "Liberty City",
    protagonista: "Luis Fernando Lopez",
    antagonistas: ["Yusuf Amir", "Tony Prince", "Niko Bellic"],
    summary: "Vida noturna de luxo. Luis é assistente de Tony Prince em The Maisonette (nightclub). Contrasta com tom sombrio de GTA IV.",
    fullStory: "Luis Fernando Lopez trabalha para Tony Prince, dono de um nightclub premium em Liberty City. A vida é luxuosa: bebidas caras, mulheres, músicas. Mas há dívidas. Luis trabalha para Yusuf Amir (capitalista árabe). O tom é colorido, energético, em contraste direto com a melancolia de Niko.",
    development: "Outro DLC/spin-off de GTA IV. Foco em contraluz: glamour vs. realidade.",
    importance: "Diversificação tonal. Mostrou que GTA podia ser divertido e satírico sobre luxo.",
    themes: ["Luxo", "Ilusão", "Noites urbanas", "Dívida"],
    tags: ["HD Universe", "Vida noturna", "Spin-off"]
  },
  {
    id: "chinatownwars",
    title: "Grand Theft Auto: Chinatown Wars",
    releaseYear: 2009,
    storyYear: 2009,
    universe: "HD",
    city: "Liberty City",
    protagonista: "Huang Lee",
    antagonistas: ["Hsin Jaoming", "Triads rivais", "Sonny Forelli"],
    summary: "Jogo de handheld (Nintendo DS). Huang Lee é enviado de Hong Kong com a Yu Jian (espada mágica). Tráfico de drogas e honra familiar.",
    fullStory: "Huang Lee chega a Liberty City para entregar a espada Yu Jian ao tio Kenny após a morte de seu pai. É roubado, deixado para morrer e busca honra, riqueza e vingança. Trabalha para Triads, tráfico de drogas, aprende as ruas.",
    development: "Desenvolvido para Nintendo DS. Gameplay inovador com minigames. Retorno à série 2D em ambientação 3D (câmera de cima). Primeira entrada GTA em handheld.",
    importance: "Provou que GTA podia funcionar em portáteis. Inovação de interface.",
    themes: ["Honra familiar", "Vingança", "Busca", "Tradição"],
    tags: ["HD Universe", "Nintendo DS", "Handheld", "Único"]
  },
  {
    id: "gta5",
    title: "Grand Theft Auto V",
    releaseYear: 2013,
    storyYear: 2013,
    universe: "HD",
    city: "Los Santos (San Andreas)",
    protagonista: "Michael De Santa, Franklin Clinton, Trevor Phillips",
    antagonistas: ["Devin Weston", "Steve Haines", "Dave Norton", "Merryweather"],
    summary: "Três protagonistas. Três perspectivas diferentes. Assaltos épicos. Fenômeno cultural e comercial.",
    fullStory: "Michael De Santa é um ex-ladrão que finge morte há 9 anos, vivendo como homem de negócios em Los Santos. Seu antigo colega Trevor Phillips descobre que ele está vivo e recria contato violentamente. Franklin Clinton é um criminoso de rua de Southside Los Santos que conhece Michael. Os três são forçados juntos por FBI agents Dave Norton e Steve Haines, que os chantageiam para cometer assaltos. Devin Weston (bilionário corrupto) também os manipula. No caminho: tráfico de drogas, roubo de laboratório de tecnologia, assaltos de banco, guerra com Merryweather Security (corporação militar privada), conflitos pessoais. O final oferece escolhas: dinheiro (Opção A), vindicta (Opção B) ou todas as ameaças eliminadas e amizade preservada (Opção C/Deathwish).",
    development: "Desenvolvimento gigantesco: ~1000 pessoas, orçamento de $250 milhões (maior de qualquer videojogo naquela época). Los Santos é uma réplica de Los Angeles, densíssima. Engine RAGE avançada. Trilha sonora com artistas reais. Dublagem com celebridades (Shia LaBeouf inspirou Fernando, etc.).",
    importance: "Maior lançamento de videojogo até então. Vendeu 150+ milhões de cópias. Definiu PS3/Xbox 360 tardio e PS4/Xbox One cedo. Moldou a indústria por uma década.",
    themes: ["Amizade", "Ambição", "Traição", "Redenção", "Riqueza", "Caos"],
    tags: ["HD Universe", "Três protagonistas", "Fenômeno", "Clássico", "Épico"]
  },
  {
    id: "gtaonline",
    title: "Grand Theft Auto Online",
    releaseYear: 2013,
    storyYear: "2013+",
    universe: "HD",
    city: "Los Santos (San Andreas)",
    protagonista: "Você (customizável)",
    antagonistas: ["Playeres rivais", "Missões contra IA", "Traição econômica"],
    summary: "Plataforma viva de multiplayer. Começou pequeno, virou fenômeno de $6+ bilhões em receita.",
    fullStory: "GTA Online é o complemento multiplayer de GTA V. Você cria um personagem e entra em Los Santos com outros jogadores. Começou com RP de $100. Desde então, se expandiu exponencialmente: Assaltos cooperativos (Heists), negócios criminosos (venda de drogas, armamentos, ouro, criptomoedas), motoclubes, cassinos, bunkers, proprietário de arcade, empresário de nightclub, agente de contratações, diretor de agência de segurança, carceleiro, traficante de armas modificadas. Jogadores progridem economicamente, compram propriedades, veículos, roupas, customizações. Competem em corridas, eliminations, roubos. A economia flutua conforme Rockstar lança 'Double Money' em atividades estratégicas para manter interesse.",
    development: "Começou como teste. Operacional desde 2013 com dezenas de atualizações MAIORES. Provavelmente gerará receita até GTA VII.",
    importance: "Modelo de jogo vivo revolucionário. Provou que multiplayer persistente com economia real podia gerar receita enorme.",
    themes: ["Comunidade", "Economia", "Competição", "Cooperação", "Liberdade"],
    tags: ["HD Universe", "Multiplayer", "Online", "Vivo", "Fenômeno", "Lucrativo"]
  },
  {
    id: "gta6",
    title: "Grand Theft Auto VI",
    releaseYear: 2026,
    storyYear: "2026 (estimado)",
    universe: "HD",
    city: "Leonida (Vice City)",
    protagonista: "Lucia Caminos, Jason Duval",
    antagonistas: "[Ainda desconhecidos]",
    summary: "Próximo grande lançamento. Dual protagonistas. Vice City moderna. Tema: redes sociais, influencers, caos digital.",
    fullStory: "[Maioria especulativa até lançamento]. Lucia Caminos é uma mulher criminosa. Jason Duval é homem. Parecem ser um casal criminoso. Ambientado em Leonida, estado baseado na Flórida moderna, com Vice City como cidade central. Tema parece ser crime contemporâneo: roubo de dados, fraudes de criptomoedas, influencers criminosos, golpes digitais, redes sociais como ferramenta de crime. Sátira do século XXI.",
    development: "Anunciado oficialmente em dezembro de 2024 com trailer. Lançamento: 19 de novembro de 2026 (PS5 exclusivo inicialmente). Engine RAGE 2 com ray-tracing em tempo real. Seleção musical, dublagem e cinemática mantêm padrões de qualidade GTA V.",
    importance: "Próximo capítulo. Expectativa global estratosférica.",
    themes: "[Especulado: redes sociais, modernidade, crime digital, casal criminoso]",
    tags: ["HD Universe", "Futuro", "Leonida", "Dual protagonistas", "Especulação"]
  }
];

// ===========================================
// PERSONAGENS PRINCIPAIS
// ===========================================
const PERSONAGENS_COMPLETOS = [
  // Claude (GTA 1, GTA 3)
  {
    id: "claude_gta3",
    name: "Claude",
    aliases: ["The Silent Protagonist"],
    games: ["Grand Theft Auto III"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Protagonista",
    biography: "Um criminoso silencioso que é traído por Catalina durante um assalto. Sobrevive mysteriosamente e se vê em Liberty City, forçado a trabalhar para várias facções para recuperar poder e vingança.",
    storyArc: "De ninguém para rei do crime. Trabalha para Leone Family, Yakuza, Colombian Cartel. Eventualmente enfrenta e mata Catalina.",
    relationships: {
      aliados: ["8-Ball", "Luigi Goterelli", "Joey Leone", "Maria Latore"],
      inimigos: ["Catalina", "Asuka Kasen"]
    },
    affiliations: ["Leone Family", "Yakuza", "Colombian Cartel"],
    enemies: ["Catalina", "Miguel"],
    fate: "Desaparece misteriosa após eliminar Catalina. Seu futuro é desconhecido.",
    importance: "PRINCIPAL",
    tags: ["protagonista", "silencioso", "vingança", "3D Universe", "clássico"]
  },

  // Tommy Vercetti (Vice City)
  {
    id: "tommy_vercetti",
    name: "Tommy Vercetti",
    aliases: ["The Man in the Red Suit"],
    games: ["Grand Theft Auto: Vice City"],
    universe: "3D Universe",
    city: "Vice City",
    role: "Protagonista",
    biography: "Ex-condenado que sai da prisão após 15 anos. Enviado por Sonny Forelli a Vice City para fechar um deal. É traído, emboscado, e decide conquistar Vice City para si.",
    storyArc: "Da humilhação à ascensão. Começa do zero, reconstrói império, mata rivals, torna-se rei indiscutível de Vice City.",
    relationships: {
      aliados: ["Ken Rosenberg", "Lance Vance (inicialmente)"],
      inimigos: ["Sonny Forelli", "Ricardo Diaz"]
    },
    affiliations: ["Forelli Family", "Diaz Organization"],
    enemies: ["Lance Vance", "Avery Carrington"],
    fate: "Vivo. Torna-se kingpin de Vice City. Seu destino após é desconhecido, mas presumivelmente continua criminoso.",
    importance: "PRINCIPAL",
    tags: ["protagonista", "ascensão", "neon", "1986", "icônico"]
  },

  // Carl 'CJ' Johnson (San Andreas)
  {
    id: "cj_johnson",
    name: "Carl 'CJ' Johnson",
    aliases: ["Baby", "CJ"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Los Santos (San Andreas)",
    role: "Protagonista",
    biography: "Retorna a Los Santos após morte da mãe. Grove Street Families está enfraquecida. CJ descobrirá que seus irmãos próximos são traidores.",
    storyArc: "De exilado a herói de comunidade. Reconquista Grove Street, expande para outras cidades, descobre traição de companheiros.",
    relationships: {
      aliados: ["Sweet Johnson", "Cesar Vialpando", "Wu Zi Mu"],
      inimigos: ["Big Smoke", "Ryder", "Officer Tenpenny"]
    },
    affiliations: ["Grove Street Families"],
    enemies: ["Big Smoke", "Ryder"],
    fate: "Vivo. Lidera Grove Street, mas futuro é incerto.",
    importance: "PRINCIPAL",
    tags: ["protagonista", "comunidade", "lealdade", "1992", "épico"]
  },

  // Niko Bellic (GTA IV)
  {
    id: "niko_bellic",
    name: "Niko Bellic",
    aliases: ["The Immigrant", "The War Vet"],
    games: ["Grand Theft Auto IV"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Protagonista",
    biography: "Veterano de guerra do leste europeu que imigra para Liberty City buscando 'sonho americano'. Descobre que o sonho é mentira. Envolvido em máfias russas, italianas e agências federais.",
    storyArc: "Do esperançoso ao desiluso. Quanto mais poder conquista, mais percebe a futilidade.",
    relationships: {
      aliados: ["Roman Bellic", "Little Jacob", "Packie McReary"],
      inimigos: ["Dimitri Rascalov", "Ray Bulgarin"]
    },
    affiliations: ["Russian Mob", "Pegorino Family"],
    enemies: ["Mikhail Faustin", "Ray Bulgarin"],
    fate: "Vivo, mas traumatizado. Escolhe entre vindicta ou dinheiro.",
    importance: "PRINCIPAL",
    tags: ["protagonista", "imigração", "trauma", "noir", "2008", "iconoclasta"]
  },

  // Michael De Santa (GTA V)
  {
    id: "michael_de_santa",
    name: "Michael De Santa",
    aliases: ["Michael Townley (antigo nome)"],
    games: ["Grand Theft Auto V"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Protagonista (um de três)",
    biography: "Ex-assaltante que finge morte há 9 anos. Vive como homem de negócios em subúrbio. Trevor descobre que está vivo.",
    storyArc: "De exilado secreto a protagonista involuntário de caos. Tenta proteger família enquanto é manipulado por FBI e criminosos.",
    relationships: {
      aliados: ["Franklin Clinton", "Lester Crest"],
      inimigos: ["Trevor Phillips", "Devin Weston"]
    },
    affiliations: ["Merryweather Security (involuntariamente)", "FBI"],
    enemies: ["Devin Weston", "Dave Norton"],
    fate: "Vivo (em final canônico). Lidera vida de homem de negócios autêntico.",
    importance: "PRINCIPAL",
    tags: ["protagonista", "família", "segredos", "V", "anti-herói"]
  },

  // Franklin Clinton (GTA V)
  {
    id: "franklin_clinton",
    name: "Franklin Clinton",
    aliases: ["Franklin", "Homie"],
    games: ["Grand Theft Auto V"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Protagonista (um de três)",
    biography: "Criminoso de rua ambicioso que deseja sair do círculo criminal. Conhece Michael e entra em conflito épico.",
    storyArc: "De gangster de rua a CEO potencial. Aprende que poder requer sacrifício.",
    relationships: {
      aliados: ["Lamar Davis", "Michael De Santa"],
      inimigos: ["Stretch", "Merryweather"]
    },
    affiliations: ["Crips-inspired gang", "Merryweather (involuntariamente)"],
    enemies: ["Stretch", "Lamar Davis (rival)"],
    fate: "Vivo. Abre negócio de segurança. Melhor futuro dos três.",
    importance: "PRINCIPAL",
    tags: ["protagonista", "rua", "ambição", "V", "esperança"]
  },

  // Trevor Phillips (GTA V)
  {
    id: "trevor_phillips",
    name: "Trevor Phillips",
    aliases: ["T", "Mr. Philips"],
    games: ["Grand Theft Auto V"],
    universe: "HD Universe",
    city: "Blaine County (Los Santos)",
    role: "Protagonista (um de três)",
    biography: "Homem desequilibrado, violento, imprevisível. Ex-colega de Michael. Quando descobre que Michael está vivo, busca vingança e reconexão.",
    storyArc: "De desequilibrado criminal a aliado relutante. Morte potencial em um dos finais.",
    relationships: {
      aliados: ["Michael De Santa (reluctante)"],
      inimigos: ["Michael De Santa", "Merryweather"]
    },
    affiliations: ["Trevor Phillips Enterprises"],
    enemies: ["Michael De Santa", "Devin Weston"],
    fate: "Potencialmente morto (final A/B) ou vivo (final C).",
    importance: "PRINCIPAL",
    tags: ["protagonista", "caos", "violência", "V", "imprevisível", "antiherói"]
  },

  // Lucia Caminos (GTA VI) - Conhecida
  {
    id: "lucia_caminos",
    name: "Lucia Caminos",
    aliases: ["Lucia"],
    games: ["Grand Theft Auto VI"],
    universe: "HD Universe",
    city: "Leonida (Vice City)",
    role: "Protagonista (um de dois)",
    biography: "[Maioria especulativa]. Mulher criminosa em Leonida. Parece ser part de casal criminoso com Jason Duval.",
    storyArc: "[Desconhecido até lançamento]",
    relationships: {
      aliados: ["Jason Duval"],
      inimigos: []
    },
    affiliations: [],
    enemies: [],
    fate: "[Desconhecido]",
    importance: "PRINCIPAL",
    tags: ["protagonista", "VI", "Leonida", "feminina", "futuro"]
  },

  // Jason Duval (GTA VI) - Conhecido
  {
    id: "jason_duval",
    name: "Jason Duval",
    aliases: ["Jason"],
    games: ["Grand Theft Auto VI"],
    universe: "HD Universe",
    city: "Leonida (Vice City)",
    role: "Protagonista (um de dois)",
    biography: "[Maioria especulativa]. Homem criminoso. Parceiro de Lucia Caminos em crime.",
    storyArc: "[Desconhecido até lançamento]",
    relationships: {
      aliados: ["Lucia Caminos"],
      inimigos: []
    },
    affiliations: [],
    enemies: [],
    fate: "[Desconhecido]",
    importance: "PRINCIPAL",
    tags: ["protagonista", "VI", "Leonida", "futuro"]
  },

  // Personagens secundários importantes

  // Roman Bellic
  {
    id: "roman_bellic",
    name: "Roman Bellic",
    aliases: ["Roman", "Cousin"],
    games: ["Grand Theft Auto IV"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Aliado",
    biography: "Primo de Niko que veio da Europa. Exagera sua riqueza em América. Proprietário de táxi. Vítima de chantagem e roubo.",
    storyArc: "De esperançoso a traumatizado. Constantemente precisa de resgate.",
    relationships: {
      aliados: ["Niko Bellic"],
      inimigos: ["Thugs, Loan sharks"]
    },
    affiliations: ["Taxi business"],
    enemies: [],
    fate: "Morto em um final, vivo em outro (GTA IV oferecia escolhas).",
    importance: "ALTO",
    tags: ["aliado", "primo", "IV", "imigrante", "vulnerável"]
  },

  // Big Smoke
  {
    id: "big_smoke",
    name: "Big Smoke",
    aliases: ["B.Smoke", "The Traitor"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Los Santos",
    role: "Antagonista",
    biography: "Companheiro de CJ desde a infância. Aparenta ser aliado mas é na verdade traidor trabalhando com Cartel Colombiano.",
    storyArc: "De amigo a vilão. Sua traição é o ponto de virada da narrativa.",
    relationships: {
      aliados: ["Ryder", "Cartel Colombiano"],
      inimigos: ["CJ Johnson", "Grove Street Families"]
    },
    affiliations: ["Grove Street Families (falso)", "Colombian Cartel"],
    enemies: ["CJ Johnson"],
    fate: "Morto por CJ em confronto final.",
    importance: "ALTO",
    tags: ["antagonista", "traidor", "San Andreas", "memorável"]
  },

  // Salvatore Leone
  {
    id: "salvatore_leone",
    name: "Salvatore Leone",
    aliases: ["Don Salvatore", "The Old Man"],
    games: ["Grand Theft Auto III", "Grand Theft Auto: Liberty City Stories"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Antagonista/Patrão",
    biography: "Chefe da Leone Family. Poder absoluto em Liberty City máfia. Manipula Claude e outros para seus próprios ganhos.",
    storyArc: "De patrão poderoso a antagonista. Morte ocorre entre jogos.",
    relationships: {
      aliados: ["Joey Leone", "Luigi Goterelli"],
      inimigos: ["Claude", "Rival families"]
    },
    affiliations: ["Leone Family"],
    enemies: [],
    fate: "Desaparecido no final de GTA III. Presume-se morto.",
    importance: "ALTO",
    tags: ["antagonista", "máfia", "patrão", "3D Universe"]
  },

  // Asuka Kasen
  {
    id: "asuka_kasen",
    name: "Asuka Kasen",
    aliases: ["Asuka"],
    games: ["Grand Theft Auto III"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Aliado/Ambíguo",
    biography: "Mulher misteriosa que trabalha para Yakuza. Recruta Claude para trabalhos. Seus verdadeiros motivos nunca são claros.",
    storyArc: "De recrutadora a personagem enigmático que desaparece.",
    relationships: {
      aliados: ["Claude (temporário)"],
      inimigos: ["Yakuza rivals"]
    },
    affiliations: ["Yakuza"],
    enemies: [],
    fate: "Desaparecida. Presumível morte ou desaparecimento voluntário.",
    importance: "ALTO",
    tags: ["aliado", "mistério", "Yakuza", "enigmática"]
  },

  // Lance Vance
  {
    id: "lance_vance",
    name: "Lance Vance",
    aliases: ["Lance", "The Betrayer"],
    games: ["Grand Theft Auto: Vice City"],
    universe: "3D Universe",
    city: "Vice City",
    role: "Aliado que se torna antagonista",
    biography: "Companheiro inicial de Tommy Vercetti em Vice City. Trabalham juntos mas Lance quer mais poder. Eventualmente traiu Tommy.",
    storyArc: "De aliado confiável a traidor egocêntrico. Morte é o resultado de sua ganância.",
    relationships: {
      aliados: ["Tommy Vercetti (inicialmente)"],
      inimigos: ["Tommy Vercetti", "Ricardo Diaz"]
    },
    affiliations: ["Vercetti Organization", "Diaz Organization"],
    enemies: ["Tommy Vercetti"],
    fate: "Morto por Tommy em confronto final.",
    importance: "ALTO",
    tags: ["traidor", "Vice City", "egocêntrico"]
  }
];

// ===========================================
// CIDADES E LOCAIS
// ===========================================
const CIDADES_COMPLETAS = [
  {
    id: "liberty_city",
    name: "Liberty City",
    realWorldInspiration: "Nova York",
    universeAppearances: ["2D Universe", "3D Universe", "HD Universe"],
    games: ["GTA I", "GTA III", "Liberty City Stories", "GTA IV", "Chinatown Wars"],
    description: "Metrópole do leste. Concreto, chuva, corrupção máfia, crime urbano. Centro financeiro criminoso.",
    districts: ["Inland Empire", "Downtown", "Stanton Island", "Shoreside Vale", "Bohan", "Algonquin", "Broker"],
    factions: ["Leone Family", "Yakuza", "Colombian Cartel", "Russian Mob", "Triads"],
    importantEvents: ["Morte de Salvatore Leone", "Queda de Dimitri Rascalov", "Assaltos de GTA III"],
    characters: ["Claude", "Niko Bellic", "Toni Cipriani"],
    visualStyle: "Concreto cinzento, arranha-céus, chuva constante, pombas, tráfego denso, museus, iluminação sombria",
    themes: ["Crime urbano", "Máfia", "Imigração", "Corrupção", "Capitalismo"]
  },
  {
    id: "vice_city",
    name: "Vice City",
    realWorldInspiration: "Miami",
    universeAppearances: ["2D Universe", "3D Universe", "HD Universe (GTA VI)"],
    games: ["GTA I", "Vice City", "Vice City Stories", "GTA VI (2026)"],
    description: "Tropical, neon, anos 80, cartéis de drogas, palmeiras, praia. Luxo e corrupção.",
    districts: ["Ocean Beach", "Vice Point", "Starfish Island", "Downtown"],
    factions: ["Diaz Organization", "Cartel Ortega", "Forelli Family"],
    importantEvents: ["Ascensão de Tommy Vercetti", "Queda de Ricardo Diaz", "Retorno em GTA VI"],
    characters: ["Tommy Vercetti", "Victor Vance"],
    visualStyle: "Neon rosa, azul, amarelo. Palmeiras, concreto colorido, praia, discotecas, muito tráfego tropical, horizontes rosa/roxo ao pôr-do-sol",
    themes: ["Neon", "Drogas", "Luxo", "Decadência", "Cartéis"]
  },
  {
    id: "san_andreas_state",
    name: "San Andreas",
    realWorldInspiration: "Califórnia + Nevada",
    universeAppearances: ["2D Universe", "3D Universe"],
    games: ["GTA I", "San Andreas"],
    description: "Estado inteiro com três metrópoles. Da costa urbana ao deserto. Gangues de rua, tecnologia, cassinos, deserto.",
    districts: ["Los Santos", "San Fierro", "Las Venturas", "Blaine County (deserto)"],
    factions: ["Grove Street Families", "Ballas", "Vagos", "Triads", "Rifa", "Da Nang Boys"],
    importantEvents: ["Morte de CJ's mother", "Retomada de Grove Street", "Revelação de Big Smoke e Ryder como traidores"],
    characters: ["Carl 'CJ' Johnson", "Big Smoke", "Ryder"],
    visualStyle: "Diverso: urbano em LA, brumoso em SF, desértico em Vegas, rural em Blaine",
    themes: ["Comunidade", "Gangues de rua", "Território", "Lealdade"]
  },
  {
    id: "los_santos",
    name: "Los Santos",
    realWorldInspiration: "Los Angeles",
    universeAppearances: ["3D Universe (San Andreas)", "HD Universe (GTA V)"],
    games: ["San Andreas", "GTA V", "GTA Online"],
    description: "Metrópole do sol. Glamour, mídia, indústria do entretenimento, desigualdade massiva, gangues de rua.",
    districts: ["Hollywood", "Downtown", "Southside", "Vinewood", "Rockford Hills", "Paleto Bay"],
    factions: ["Grove Street Families", "Ballas", "Triads", "Vagos", "Famílias criminosas locais"],
    importantEvents: ["Reconquista de Grove Street (SA)", "Assaltos épicos (GTA V)", "Surgimento de GTA Online"],
    characters: ["CJ Johnson", "Franklin Clinton", "Michael De Santa"],
    visualStyle: "Palmeiras, prédios altos, dividing entre riqueza e pobreza, piscinas, Hollywood, colinas, luz solar permanente",
    themes: ["Indústria", "Desigualdade", "Celebridade", "Aspiração"]
  },
  {
    id: "leonida",
    name: "Leonida",
    realWorldInspiration: "Flórida Moderna",
    universeAppearances: ["HD Universe (GTA VI)"],
    games: ["GTA VI"],
    description: "Estado do sudeste. Vice City moderna, pântanos, praias, redes sociais, influencers, caos digital. Tema de crime contemporâneo.",
    districts: ["Vice City", "Pântanos", "Resort areas", "Tech districts"],
    factions: "[Desconhecidas até lançamento]",
    importantEvents: "[Futuro - desconhecidas]",
    characters: ["Lucia Caminos", "Jason Duval"],
    visualStyle: "[Esperado: Miami moderna, palmeiras, arquitetura de 2020s, neon atualizado, pântanos]",
    themes: ["Modernidade", "Redes sociais", "Crime digital", "Influência"]
  }
];

// ===========================================
// GANGUES E ORGANIZAÇÕES
// ===========================================
const ORGANIZACOES_COMPLETAS = [
  {
    id: "leone_family",
    name: "Leone Family",
    type: "Máfia Italiana",
    city: "Liberty City",
    color: "#ff2a2a",
    leaders: ["Salvatore Leone", "Joey Leone", "Toni Cipriani"],
    allies: [],
    enemies: ["Sindacco Family", "Forelli Family", "Yakuza"],
    businesses: ["Proteção", "Jogo ilegal", "Roubo de carros", "Tráfico de drogas"],
    status: "Poderosa em GTA III/LCS, fragmentada em GTA IV",
    importance: "CRÍTICA",
    tags: ["máfia", "Liberty City", "3D Universe", "poder", "crime organizado"]
  },
  {
    id: "grove_street_families",
    name: "Grove Street Families",
    type: "Gangue de Rua",
    city: "Los Santos",
    color: "#4ade80",
    leaders: ["Carl 'CJ' Johnson", "Sean 'Sweet' Johnson"],
    allies: ["Varrios Los Aztecas"],
    enemies: ["Ballas", "Vagos"],
    businesses: ["Controle de território", "Proteção", "Tráfico"],
    status: "Fortalecida em San Andreas, presente em GTA V como histórica",
    importance: "ALTA",
    tags: ["gangue de rua", "San Andreas", "comunidade", "territorialismo"]
  },
  {
    id: "ballas",
    name: "Ballas",
    type: "Gangue de Rua Rival",
    city: "Los Santos",
    color: "#a855f7",
    leaders: ["Big Smoke", "Ryder"],
    allies: ["Mexican Narcos"],
    enemies: ["Grove Street Families"],
    businesses: ["Tráfico de drogas", "Roubo", "Proteção"],
    status: "Rival principal em San Andreas",
    importance: "ALTA",
    tags: ["gangue de rua", "rival", "traição"]
  },
  {
    id: "yakuza",
    name: "Yakuza",
    type: "Crime Organizado Asiático",
    city: "Liberty City",
    color: "#ff3d8a",
    leaders: ["Kenji Kasen"],
    allies: [],
    enemies: ["Leone Family"],
    businesses: ["Roubo de carros", "Drogas", "Prostituição"],
    status: "Presente em GTA III, fragmentada depois",
    importance: "MÉDIA-ALTA",
    tags: ["crime asiático", "yakuza", "Liberty City"]
  },
  {
    id: "colombian_cartel",
    name: "Colombian Cartel",
    type: "Cartel de Drogas",
    city: "San Andreas, Vice City",
    color: "#f5c518",
    leaders: ["Tommy Vance", "Big Smoke (traidor)"],
    allies: [],
    enemies: ["Grove Street Families"],
    businesses: ["Tráfico de cocaína", "Distribuição"],
    status: "Ameaça em San Andreas",
    importance: "ALTA",
    tags: ["cartel", "drogas", "San Andreas"]
  },
  {
    id: "russian_mob",
    name: "Russian Mob",
    type: "Máfia Russa",
    city: "Liberty City",
    color: "#3b6cff",
    leaders: ["Mikhail Faustin", "Dimitri Rascalov"],
    allies: [],
    enemies: ["Pegorino Family"],
    businesses: ["Tráfico de armas", "Roubo de carros", "Mercenariato"],
    status: "Poderosa em GTA IV",
    importance: "ALTA",
    tags: ["máfia russa", "GTA IV", "crime organizado"]
  },
  {
    id: "lost_mc",
    name: "The Lost MC",
    type: "Motoclube",
    city: "Liberty City",
    color: "#e9e7df",
    leaders: ["Johnny Klebitz", "Billy Grey"],
    allies: [],
    enemies: ["Angels of Death", "Yakuza"],
    businesses: ["Roubo de carros", "Drogas", "Proteção"],
    status: "Protagonista em GTA: The Lost and Damned",
    importance: "MÉDIA",
    tags: ["motoclube", "GTA IV", "caos", "lealdade"]
  },
  {
    id: "fib",
    name: "Federal Investigation Bureau (FIB)",
    type: "Agência Governamental",
    city: "Los Santos",
    color: "#3b6cff",
    leaders: ["Steve Haines", "Dave Norton"],
    allies: [],
    enemies: ["Protagonistas"],
    businesses: ["Investigação", "Corrupção", "Chantagem"],
    status: "Antagonista em GTA V",
    importance: "CRÍTICA",
    tags: ["governo", "corrupção", "GTA V", "antagonista"]
  },
  {
    id: "merryweather",
    name: "Merryweather Security",
    type: "Corporação Militar Privada",
    city: "Los Santos",
    color: "#22d3ee",
    leaders: "[CEO desconhecido]",
    allies: ["Steve Haines (FIB)"],
    enemies: ["Protagonistas de GTA V"],
    businesses: ["Segurança", "Mercenariato", "Armas"],
    status: "Corporação antagonista em GTA V",
    importance: "ALTA",
    tags: ["corporação", "militar privada", "GTA V"]
  }
];

// ===========================================
// ATUALIZAR JANELA GLOBAL
// ===========================================
Object.assign(window, {
  ROCKSTAR_HISTORY,
  UNIVERSOS_GTA,
  GAMES_COMPLETE,
  PERSONAGENS_COMPLETOS,
  CIDADES_COMPLETAS,
  ORGANIZACOES_COMPLETAS
});
