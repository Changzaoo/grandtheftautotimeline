/* ============ GTA WEAPON DOSSIER DATA ============ */

const gtaWikiWeaponSource = (page, label = "GTA Wiki") => ({
  label,
  url: `https://gta.fandom.com/wiki/${page.replaceAll(" ", "_")}`
});

const weaponDossierData = [
  {
    id: "gta-1",
    gameId: "gta-1",
    title: "Grand Theft Auto",
    releaseYear: 1997,
    storyYear: "1997",
    universe: "2D Universe",
    city: "Liberty City, San Andreas e Vice City",
    apiPage: "Weapons in GTA",
    source: gtaWikiWeaponSource("Weapons in GTA"),
    totalLabel: "arsenal compacto da era 2D",
    coverage: ["corpo a corpo", "pistola", "metralhadora", "lança-foguetes", "lança-chamas"],
    highlights: ["Melee attack", "Pistol", "Machine Gun", "Rocket Launcher", "Flamethrower"],
    summary: "O primeiro GTA usa poucas armas, mas define a lógica básica da série: escalar de combate simples para poder de fogo pesado enquanto o nível de procurado cresce.",
    systems: [
      "As armas são arcade, diretas e vistas de cima, com leitura rápida para perseguições e caos urbano.",
      "O arsenal privilegia função sobre realismo: curta distância, arma de fogo básica, rajada, explosivo e fogo.",
      "A progressão criminal depende de sobreviver à polícia e cumprir trabalhos, não de customização ou estatísticas detalhadas."
    ],
    precisionNotes: ["A página de armas cobre GTA 1 e London; o dossiê separa London em fichas próprias por contexto histórico."],
    tags: ["2D Universe", "top-down", "arsenal básico", "arcade"]
  },
  {
    id: "london-1969",
    gameId: "london-1969",
    title: "GTA: London 1969",
    releaseYear: 1999,
    storyYear: "1969",
    universe: "2D Universe",
    city: "London",
    categoryTitle: "Category:Weapons in GTA London 1969",
    source: gtaWikiWeaponSource("Weapons in GTA London 1969"),
    totalLabel: "arsenal de London 1969",
    coverage: ["corpo a corpo", "pistola", "metralhadora", "lança-foguetes", "lança-chamas", "bomba de carro"],
    highlights: ["Fist", "Pistol", "Machine Gun", "Rocket Launcher", "Flamethrower", "Car Bomb"],
    summary: "London 1969 reaproveita a violência arcade da era 2D, mas com fantasia britânica de crime sessentista e sabotagem veicular.",
    systems: [
      "A arma mais importante para o tom da expansão é menos a arma individual e mais o caos de trânsito armado.",
      "Car Bomb amplia o lado sabotagem, coerente com missões de gangue e perseguições top-down.",
      "A leitura histórica é simples: poucas armas, impacto imediato, ritmo rápido."
    ],
    precisionNotes: ["O GTA Wiki categoriza Car Bomb em London 1969; a página principal de armas usa uma tabela compartilhada com GTA 1/London."],
    tags: ["2D Universe", "London", "expansão", "car bomb"]
  },
  {
    id: "london-1961",
    gameId: "london-1961",
    title: "GTA: London 1961",
    releaseYear: 1999,
    storyYear: "1961",
    universe: "2D Universe",
    city: "London",
    source: gtaWikiWeaponSource("Weapons in GTA London 1961"),
    totalLabel: "arsenal compartilhado com London",
    coverage: ["corpo a corpo", "pistola", "metralhadora", "lança-foguetes", "lança-chamas", "bomba de carro"],
    highlights: ["Fist", "Pistol", "Machine Gun", "Rocket Launcher", "Flamethrower", "Car Bomb"],
    summary: "London 1961 é uma expansão menor e gratuita, então o arsenal deve ser lido como extensão do pacote London, sem a complexidade das fases posteriores.",
    systems: [
      "O design continua top-down e funcional: armas como ferramentas de pontuação, fuga e destruição rápida.",
      "A ficha mantém Car Bomb junto do pacote London por consistência de fonte e contexto.",
      "Não há sistema de habilidade, modificação ou inventário profundo."
    ],
    precisionNotes: ["Não há categoria pública separada robusta para London 1961; o dossiê usa a base London/GTA e marca a leitura como compartilhada."],
    fallbackGroups: [{ label: "Lista completa", items: ["Fist", "Pistol", "Machine Gun", "Rocket Launcher", "Flamethrower", "Car Bomb"] }],
    tags: ["2D Universe", "London", "expansão", "fonte compartilhada"]
  },
  {
    id: "gta-2",
    gameId: "gta-2",
    title: "Grand Theft Auto 2",
    releaseYear: 1999,
    storyYear: "1999 / futuro ambíguo",
    universe: "2D Universe",
    city: "Anywhere City",
    apiPage: "Weapons in GTA 2",
    source: gtaWikiWeaponSource("Weapons in GTA 2"),
    totalLabel: "armas portáteis e armas veiculares",
    coverage: ["pistolas", "metralhadoras", "shotgun", "lança-chamas", "lança-foguetes", "granadas", "molotov", "armas veiculares"],
    highlights: ["Dual Pistol", "S-Uzi Machine Gun", "ElectroGun", "Vehicle Mines", "Vehicle Machine Guns"],
    summary: "GTA 2 transforma o arsenal em brinquedo de gangue futurista: além de armas portáteis, o jogo dá destaque a upgrades e armamentos de veículos.",
    systems: [
      "O arsenal é dividido entre armas que voltam de GTA 1 e novidades de Anywhere City.",
      "Armas veiculares e upgrades combinam com a estética distópica e com o foco em caos sistêmico.",
      "A página também registra armas deletadas; o parser do dossiê prioriza armas presentes e separa o que é cortado por nota."
    ],
    precisionNotes: ["Itens deletados aparecem na fonte, mas não são tratados como arsenal jogável presente."],
    tags: ["2D Universe", "Anywhere City", "armas veiculares", "arcade"]
  },
  {
    id: "gta-iii",
    gameId: "gta-iii",
    title: "Grand Theft Auto III",
    releaseYear: 2001,
    storyYear: "2001",
    universe: "3D Universe",
    city: "Liberty City",
    apiPage: "Weapons in GTA III",
    source: gtaWikiWeaponSource("Weapons in GTA III"),
    totalLabel: "arsenal da virada 3D",
    coverage: ["corpo a corpo", "pistola", "SMG", "shotgun", "rifles", "sniper", "pesadas", "arremessáveis"],
    highlights: ["Baseball Bat", "Pistol", "Uzi", "Shotgun", "AK47", "M16", "Sniper Rifle", "Rocket Launcher"],
    summary: "GTA III leva o combate para a cidade 3D: armas passam a ter mira, distância, cobertura urbana e relação direta com território e missões.",
    systems: [
      "A estrutura por classes aparece claramente: melee, armas curtas, armas grandes, pesadas, arremessáveis e especiais.",
      "O arsenal é enxuto, mas suficiente para definir a gramática moderna de perseguição, tiroteio e rampage.",
      "Pickup, Ammu-Nation e recompensas de missão ajudam a ligar armas ao fluxo de Liberty City."
    ],
    precisionNotes: ["Car Bomb aparece em categorias de armas da era, mas a ficha principal prioriza a tabela de armas usáveis/listadas na página do jogo."],
    tags: ["3D Universe", "Liberty City", "Ammu-Nation", "mundo aberto"]
  },
  {
    id: "vice-city",
    gameId: "vice-city",
    title: "Grand Theft Auto: Vice City",
    releaseYear: 2002,
    storyYear: "1986",
    universe: "3D Universe",
    city: "Vice City",
    apiPage: "Weapons in GTA Vice City",
    source: gtaWikiWeaponSource("Weapons in GTA Vice City"),
    totalLabel: "arsenal anos 80 expandido",
    coverage: ["melee", "pistolas", "shotguns", "SMGs", "rifles", "snipers", "pesadas", "arremessáveis", "câmera"],
    highlights: ["Chainsaw", "Katana", "Python", "Spaz Shotgun", "M4", "M60", "Minigun", "Camera"],
    summary: "Vice City aumenta o espetáculo: armas brancas, motosserra, pistolas de alto calibre, metralhadoras pesadas e minigun combinam com a fantasia criminal oitentista.",
    systems: [
      "O arsenal é maior e mais estilizado que o de GTA III, com forte inspiração em cinema de crime dos anos 80.",
      "A variedade de melee ajuda a vender a cidade como playground violento e exagerado.",
      "Armas cortadas/beta aparecem na fonte, mas ficam como curiosidade e não como arsenal presente."
    ],
    precisionNotes: ["Tear Gas é marcado na fonte como PS2 only; armas beta devem ser lidas como desenvolvimento, não como presença jogável padrão."],
    tags: ["3D Universe", "Vice City", "anos 80", "minigun", "motosserra"]
  },
  {
    id: "san-andreas",
    gameId: "san-andreas",
    title: "Grand Theft Auto: San Andreas",
    releaseYear: 2004,
    storyYear: "1992",
    universe: "3D Universe",
    city: "San Andreas",
    apiPage: "Weapons in GTA San Andreas",
    source: gtaWikiWeaponSource("Weapons in GTA San Andreas"),
    totalLabel: "arsenal com habilidade e utilitários",
    coverage: ["melee", "pistolas", "shotguns", "SMGs", "rifles", "snipers", "pesadas", "arremessáveis", "gifts", "utilitários", "visores", "paraquedas"],
    highlights: ["Silenced 9mm", "Desert Eagle", "Sawnoff Shotgun", "Tec9", "AK47", "Heat-Seeking Rocket Launcher", "Satchel Charges", "Parachute"],
    summary: "San Andreas trata armas como progressão: habilidade, dual wield, gangues, territórios, fotografia, spray, presentes e equipamentos especiais entram na mesma lógica de mundo aberto.",
    systems: [
      "O sistema de Weapon Skill permite evoluir precisão, manuseio e dual wield em algumas categorias.",
      "O arsenal inclui armas convencionais, itens utilitários, presentes e equipamentos como Night Vision, Thermal Vision e Parachute.",
      "A variedade sustenta três cidades, zona rural, deserto, gang wars, assaltos e missões militares."
    ],
    precisionNotes: ["Alguns itens são utilitários ou gifts; o dossiê os mantém porque a própria tabela de armas do jogo os lista."],
    tags: ["3D Universe", "San Andreas", "weapon skill", "dual wield", "utilitários"]
  },
  {
    id: "gta-advance",
    gameId: "gta-advance",
    title: "Grand Theft Auto Advance",
    releaseYear: 2004,
    storyYear: "1998",
    universe: "3D Universe",
    city: "Liberty City",
    apiPage: "Weapons in GTA Advance",
    source: gtaWikiWeaponSource("Weapons in GTA Advance"),
    totalLabel: "arsenal portátil de Liberty City",
    coverage: ["melee", "pistola", "SMG", "shotgun", "molotov", "lança-chamas", "lança-foguetes", "óleo/bomba de carro"],
    highlights: ["Baseball Bat", "Pistol", "Micro SMG", "Shotgun", "Molotov Cocktails", "Flamethrower", "Rocket Launcher"],
    summary: "GTA Advance comprime o arsenal de Liberty City para o Game Boy Advance, preservando as funções essenciais em perspectiva top-down.",
    systems: [
      "A lista é menor, mas cobre combate próximo, armas de fogo, fogo, explosão e sabotagem veicular.",
      "O foco portátil favorece leitura rápida e ação direta.",
      "O arsenal faz ponte entre GTA III e uma estrutura mais arcade."
    ],
    precisionNotes: ["A fonte separa armas usadas pelo jogador e itens/sistemas como Car Bomb e Oil Slick."],
    tags: ["3D Universe", "portátil", "Liberty City", "top-down"]
  },
  {
    id: "liberty-city-stories",
    gameId: "liberty-city-stories",
    title: "Grand Theft Auto: Liberty City Stories",
    releaseYear: 2005,
    storyYear: "1998",
    universe: "3D Universe",
    city: "Liberty City",
    apiPage: "Weapons in GTA Liberty City Stories",
    source: gtaWikiWeaponSource("Weapons in GTA Liberty City Stories"),
    totalLabel: "arsenal de prequel mafioso",
    coverage: ["melee", "pistolas", "shotguns", "SMGs", "rifles", "snipers", "pesadas", "arremessáveis", "câmera"],
    highlights: ["Chisel", ".357", "Stubby Shotgun", "AK47", "M60", "Minigun", "Camera", "Tear Gas"],
    summary: "Liberty City Stories mistura a base de GTA III com arsenal mais próximo de Vice City, dando a Toni Cipriani ferramentas de guerra de máfia em Liberty City.",
    systems: [
      "A variedade é maior que GTA III e adequada ao conflito entre famílias Leone, Sindacco e Forelli.",
      "Armas pesadas aparecem como extensão do caos urbano e de missões de escala maior.",
      "O jogo preserva a lógica de pickups/Ammu-Nation da era 3D."
    ],
    precisionNotes: ["Algumas nomenclaturas variam entre página, jogo e versões regionais; o modal usa a nomenclatura da fonte."],
    tags: ["3D Universe", "prequel", "Liberty City", "máfia"]
  },
  {
    id: "vice-city-stories",
    gameId: "vice-city-stories",
    title: "Grand Theft Auto: Vice City Stories",
    releaseYear: 2006,
    storyYear: "1984",
    universe: "3D Universe",
    city: "Vice City",
    apiPage: "Weapons in GTA Vice City Stories",
    source: gtaWikiWeaponSource("Weapons in GTA Vice City Stories"),
    totalLabel: "arsenal militar/criminal de 1984",
    coverage: ["melee", "pistolas", "shotguns", "SMGs", "rifles", "snipers", "pesadas", "arremessáveis", "câmera"],
    highlights: ["Butterfly Knife", ".357", "SPAS-12", "Scorpion", "AK47", "M249", "Rocket Launcher", "Binoculars"],
    summary: "Vice City Stories adiciona tempero militar ao arsenal tropical: Vic Vance começa conectado ao exército e termina cercado por cartéis, gangues e contrabando.",
    systems: [
      "A presença militar e a guerra contra os Mendez ampliam o espaço para armas pesadas.",
      "O jogo reaproveita a identidade de Vice City, mas com arsenal ligeiramente diferente e história anterior.",
      "Armas de curto alcance e armas brancas seguem importantes para combates de rua."
    ],
    precisionNotes: ["A página lista armas e ícones; nomes podem variar entre render, HUD e página wiki."],
    tags: ["3D Universe", "prequel", "Vice City", "militar", "cartel"]
  },
  {
    id: "gta-iv",
    gameId: "gta-iv",
    title: "Grand Theft Auto IV",
    releaseYear: 2008,
    storyYear: "2008",
    universe: "HD Universe",
    city: "Liberty City",
    apiPage: "Weapons in GTA IV",
    source: gtaWikiWeaponSource("Weapons in GTA IV"),
    totalLabel: "arsenal realista da era HD",
    coverage: ["melee", "pistolas", "shotguns", "SMGs", "rifles", "snipers", "RPG", "granadas", "molotov", "objetos arremessáveis"],
    highlights: ["Combat Pistol", "Pump Shotgun", "Carbine Rifle", "Combat Sniper", "RPG", "Random Pickable Objects"],
    summary: "GTA IV reduz o exagero e pesa o combate: armas são menos cartunescas, tiroteios são mais físicos e Niko parece sempre preso a uma cidade hostil.",
    systems: [
      "A era HD usa RAGE/Euphoria para dar mais impacto a tiros, quedas, cobertura e dano.",
      "O arsenal é mais contido que San Andreas, reforçando o tom dramático e urbano.",
      "Objetos arremessáveis aleatórios aparecem como parte da física e do improviso."
    ],
    precisionNotes: ["Armas beta/cortadas aparecem na página, mas o dossiê prioriza a tabela de conteúdo presente."],
    tags: ["HD Universe", "Liberty City", "realismo", "RAGE"]
  },
  {
    id: "lost-and-damned",
    gameId: "lost-and-damned",
    title: "GTA IV: The Lost and Damned",
    releaseYear: 2009,
    storyYear: "2008",
    universe: "HD Universe",
    city: "Liberty City",
    apiPage: "Weapons in TLAD",
    source: gtaWikiWeaponSource("Weapons in TLAD"),
    totalLabel: "arsenal de motoclube",
    coverage: ["melee", "pistolas", "shotguns", "SMGs", "rifles", "snipers", "grenade launcher", "RPG", "pipe bomb"],
    highlights: ["Pool Cue", "Automatic 9mm", "Assault Shotgun", "Sawn-Off Shotgun", "Grenade Launcher", "Pipe Bomb"],
    summary: "The Lost and Damned adiciona armas com cara de motoclube: cano serrado, pipe bomb, pool cue e combate de gangue em estrada urbana.",
    systems: [
      "O foco em motocicletas e clubes muda a leitura das armas: mais proximidade, emboscada e lealdade violenta.",
      "A expansão mantém a base de GTA IV e adiciona peças próprias para Johnny Klebitz.",
      "Sawn-Off Shotgun e Pipe Bomb combinam com o tom de guerra de gangue e decadência."
    ],
    precisionNotes: ["A página lista armas da expansão junto de armas base de GTA IV presentes no episódio."],
    tags: ["HD Universe", "expansão", "The Lost MC", "pipe bomb", "shotgun"]
  },
  {
    id: "ballad-gay-tony",
    gameId: "ballad-gay-tony",
    title: "GTA IV: The Ballad of Gay Tony",
    releaseYear: 2009,
    storyYear: "2008",
    universe: "HD Universe",
    city: "Liberty City",
    apiPage: "Weapons in TBOGT",
    source: gtaWikiWeaponSource("Weapons in TBOGT"),
    totalLabel: "arsenal de excesso e luxo",
    coverage: ["pistola .44", "automatic shotgun", "assault SMG", "gold SMG", "advanced MG", "advanced sniper", "sticky bombs"],
    highlights: ["Pistol .44", "Automatic Shotgun", "Assault SMG", "Gold SMG", "Advanced MG", "Advanced Sniper", "Sticky Bombs"],
    summary: "The Ballad of Gay Tony faz o arsenal subir de escala: armas douradas, shotgun automática, sniper avançado e sticky bombs casam com a vida noturna explosiva.",
    systems: [
      "A expansão contrasta com TLAD: menos sujeira de estrada, mais excesso, armamento caro e espetáculo.",
      "Sticky Bombs antecipam uma assinatura importante da era GTA V/Online.",
      "O arsenal reforça Luis Lopez como operador entre clubes, máfia, celebridades e alta criminalidade."
    ],
    precisionNotes: ["A fonte inclui armas base de GTA IV e armas próprias de TBOGT; o modal mantém a divisão por classe."],
    tags: ["HD Universe", "expansão", "luxo", "sticky bombs", "gold SMG"]
  },
  {
    id: "chinatown-wars",
    gameId: "chinatown-wars",
    title: "Grand Theft Auto: Chinatown Wars",
    releaseYear: 2009,
    storyYear: "2009",
    universe: "HD Universe",
    city: "Liberty City",
    apiPage: "Weapons in GTA Chinatown Wars",
    source: gtaWikiWeaponSource("Weapons in GTA Chinatown Wars"),
    totalLabel: "arsenal portátil da era HD",
    coverage: ["melee", "pistolas", "shotguns", "SMGs", "rifles", "pesadas", "arremessáveis", "proximity mines", "itens especiais"],
    highlights: ["Sword", "Chainsaw", "Twin Pistols", "Double Barreled Shotgun", "Flamethrower", "Proximity Mines", "Drug Sample"],
    summary: "Chinatown Wars usa um arsenal grande para um jogo portátil, misturando leitura top-down com a continuidade HD das Triads de Liberty City.",
    systems: [
      "A câmera portátil favorece armas de leitura imediata e efeito claro.",
      "Proximity Mines, Drug Sample e Crates mostram que a página inclui itens especiais além de armas convencionais.",
      "O arsenal apoia tráfico, perseguições policiais, minigames e conflitos familiares de Huang Lee."
    ],
    precisionNotes: ["Itens especiais listados pela fonte são mantidos, mas marcados como parte do sistema de gameplay."],
    tags: ["HD Universe", "portátil", "Triads", "Liberty City"]
  },
  {
    id: "gta-v",
    gameId: "gta-v",
    title: "Grand Theft Auto V",
    releaseYear: 2013,
    storyYear: "2013",
    universe: "HD Universe",
    city: "Los Santos e Blaine County",
    apiPage: "Weapons in GTA V",
    source: gtaWikiWeaponSource("Weapons in GTA V"),
    totalLabel: "arsenal base + armas de updates no single-player",
    coverage: ["melee", "pistolas", "shotguns", "MGs", "rifles", "snipers", "pesadas", "arremessáveis", "especial", "Mk/updates em versões"],
    highlights: ["AP Pistol", "Heavy Pistol", "Carbine Rifle", "Heavy Sniper", "Minigun", "Railgun", "Sticky Bomb", "Jerry Can"],
    summary: "GTA V torna o arsenal parte de assaltos, preparação, troca de protagonistas e consumo: Ammu-Nation, anexos, skins e categorias sustentam a fantasia criminal moderna.",
    systems: [
      "Armas têm anexos/modificações em Ammu-Nation, o que muda mira, supressor, lanterna, pente e aparência.",
      "O single-player recebeu armas ligadas a updates e versões, então a lista varia por edição/plataforma.",
      "A lógica de assaltos valoriza armas silenciosas, explosivos, snipers, rifles e equipamentos especiais."
    ],
    precisionNotes: ["A página diferencia itens de DLC, Collector's Edition, Rockstar Social Club, missões e versões Enhanced/E&E."],
    tags: ["HD Universe", "Los Santos", "Ammu-Nation", "assaltos", "mods"]
  },
  {
    id: "gta-online",
    gameId: "gta-online",
    title: "Grand Theft Auto Online",
    releaseYear: 2013,
    storyYear: "2013 em diante",
    universe: "HD Universe",
    city: "Los Santos, Blaine County, Cayo Perico e operações globais",
    apiPage: "Weapons in GTA Online",
    source: gtaWikiWeaponSource("Weapons in GTA Online"),
    totalLabel: "arsenal vivo com DLCs, Mk II e itens especiais",
    coverage: ["melee", "pistolas", "shotguns", "SMGs", "MGs", "rifles", "snipers", "pesadas", "arremessáveis", "Mk II", "Alien weapons", "equipamentos de missão"],
    highlights: ["Up-n-Atomizer", "Widowmaker", "Unholy Hellbringer", "Heavy Sniper Mk II", "Service Carbine", "Railgun", "Orbital Cannon", "Snowball Launcher"],
    summary: "GTA Online transforma armas em plataforma viva: DLCs, Mk II, munições especiais, Gunrunning, Agency, eventos sazonais e itens de missão mudam o arsenal ao longo dos anos.",
    systems: [
      "O arsenal cresce com updates e pode depender de versão, evento, unlock, missão, bunker, pesquisa, Gun Van, Agency, Cayo Perico ou conteúdo sazonal.",
      "Armas Mk II e munições especiais mudam meta de PvP/PvE e exigem leitura separada da campanha de GTA V.",
      "A lista é carregada da fonte no modal para refletir a página atualizada, incluindo armas recentes como Newspaper quando catalogada pela wiki."
    ],
    precisionNotes: ["GTA Online é vivo; disponibilidade em loja, Gun Van, versões Enhanced/E&E e eventos pode mudar depois de cada update."],
    tags: ["HD Universe", "Online", "DLC", "Mk II", "Gunrunning", "arsenal vivo"]
  },
  {
    id: "trilogy-definitive",
    gameId: "trilogy-definitive",
    title: "Grand Theft Auto: The Trilogy - The Definitive Edition",
    releaseYear: 2021,
    storyYear: "2001 / 1986 / 1992",
    universe: "3D Universe",
    city: "Liberty City, Vice City e San Andreas",
    source: gtaWikiWeaponSource("Grand Theft Auto: The Trilogy - The Definitive Edition"),
    totalLabel: "herda os arsenais de GTA III, Vice City e San Andreas",
    coverage: ["remaster", "GTA III", "Vice City", "San Andreas", "weapon wheel moderno", "armas da era 3D"],
    highlights: ["Baseball Bat", "Chainsaw", "Minigun", "Hydra support context", "Satchel Charges", "Parachute"],
    summary: "A Definitive Edition remasteriza apresentação e controles, mas o arsenal narrativo pertence aos três jogos originais da era 3D.",
    systems: [
      "A leitura completa deve ser feita nas fichas de GTA III, Vice City e San Andreas.",
      "A remasterização altera interface, mira e sensação, mas não cria uma continuidade nova de armas.",
      "O dossiê mantém a coletânea como ponte visual e técnica, não como arsenal independente."
    ],
    precisionNotes: ["Não é um jogo com arsenal próprio inédito; é uma coletânea/remaster."],
    relatedWeaponFiles: ["gta-iii", "vice-city", "san-andreas"],
    tags: ["3D Universe", "remaster", "coletânea", "arsenal herdado"]
  },
  {
    id: "gta-vi",
    gameId: "gta-vi",
    title: "Grand Theft Auto VI",
    releaseYear: 2026,
    storyYear: "2026 / não confirmado",
    universe: "HD Universe",
    city: "Leonida e Vice City",
    categoryTitle: "Category:Weapons in GTA VI",
    source: gtaWikiWeaponSource("Weapons in GTA VI"),
    totalLabel: "lista completa não confirmada antes do lançamento",
    coverage: ["armas vistas em material promocional", "itens de categoria wiki", "não confirmado", "leaks com cautela"],
    highlights: ["Baseball Bat", "Crowbar", "Flashlight", "Golf Balls", "Sniper/Rifles em categoria", "itens não confirmados"],
    summary: "GTA VI ainda não tem arsenal completo oficial. O dossiê carrega a categoria pública do GTA Wiki, mas marca tudo como sujeito a revisão até a Rockstar confirmar.",
    systems: [
      "A Rockstar mostrou crime armado, polícia, assaltos e perseguições em Leonida, mas não publicou tabela oficial de armas.",
      "A categoria do GTA Wiki pode misturar material promocional, leitura visual e conteúdo de vazamentos; por isso o dossiê separa fonte de confirmação.",
      "A ficha de VI é uma área de monitoramento, não uma afirmação final de cânone."
    ],
    precisionNotes: ["Em 28 de maio de 2026, antes do lançamento oficial, não há lista completa oficial de armas de GTA VI publicada pela Rockstar."],
    tags: ["HD Universe", "GTA VI", "Leonida", "não confirmado", "monitoramento"]
  }
];

Object.assign(window, {
  weaponDossierData
});
