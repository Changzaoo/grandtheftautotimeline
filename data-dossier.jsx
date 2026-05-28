/* ============ GTA DOSSIER DATA ============ */

const dossierNavData = [
  { id: "overview", label: "Visão Geral", k: "01" },
  { id: "timeline", label: "Timeline Cronológica", k: "02" },
  { id: "games", label: "Jogos", k: "03" },
  { id: "development", label: "Desenvolvimento", k: "04" },
  { id: "characters", label: "Personagens", k: "05" },
  { id: "cities", label: "Cidades", k: "06" },
  { id: "gangs", label: "Gangues e Organizações", k: "07" },
  { id: "universes", label: "Universos GTA", k: "08" },
  { id: "rockstar", label: "Rockstar Games", k: "09" },
  { id: "gtaonline", label: "GTA Online", k: "10" },
  { id: "gta6", label: "GTA VI", k: "11" },
  { id: "glossary", label: "Glossário", k: "12" }
];

const dossierSourcesData = [
  {
    label: "Rockstar Games - Grand Theft Auto VI",
    url: "https://www.rockstargames.com/VI/pt-BR",
    note: "Data, Leonida/Vice City, Lucia, Jason e sinopse oficial."
  },
  {
    label: "Rockstar Newswire - GTA VI em 19 de novembro de 2026",
    url: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
    note: "Comunicado oficial de adiamento e data atual."
  },
  {
    label: "Rockstar Newswire - GTA Online Money Fronts",
    url: "https://www.rockstargames.com/newswire/article/51322o2k393kka/gta-online-money-fronts-now-available",
    note: "Atualizacao de GTA Online usada na linha do tempo viva."
  },
  {
    label: "Rockstar North / Rockstar Games - historico publico",
    url: "https://en.wikipedia.org/wiki/Rockstar_North",
    note: "Estrutura historica de DMA Design, Rockstar North e principais jogos."
  },
  {
    label: "Grand Theft Auto series - releases and chronology",
    url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto",
    note: "Lista de lancamentos e organizacao dos universos narrativos."
  }
];

const universeData = [
  {
    id: "2d",
    name: "2D Universe",
    period: "1997-1999",
    tone: "neutral",
    games: ["Grand Theft Auto", "GTA: London 1969", "GTA: London 1961", "Grand Theft Auto 2"],
    summary: "A fase top-down da serie: mais arcade, mais anarquica e menos dependente de continuidade narrativa profunda.",
    description:
      "O 2D Universe funciona como laboratorio de linguagem. GTA ainda era uma combinacao de corrida, caos urbano, humor seco e missoes criminosas vistas de cima. Liberty City, Vice City e San Andreas ja aparecem como nomes, mas ainda nao possuem a densidade cultural que ganhariam depois. GTA 2 e tratado como caso a parte, com Anywhere City e uma data interna deliberadamente nebulosa.",
    notes: [
      "Personagens sao avatares ou figuras pouco desenvolvidas.",
      "A prioridade e liberdade, pontuacao e escalada criminal.",
      "London 1969 e London 1961 sao raras incursoes fora dos Estados Unidos."
    ]
  },
  {
    id: "3d",
    name: "3D Universe",
    period: "2001-2006",
    tone: "blue",
    games: [
      "Grand Theft Auto III",
      "Grand Theft Auto: Vice City",
      "Grand Theft Auto: San Andreas",
      "Grand Theft Auto Advance",
      "Grand Theft Auto: Liberty City Stories",
      "Grand Theft Auto: Vice City Stories"
    ],
    summary: "A continuidade classica: cidades, mafias, radios, personagens recorrentes e satira urbana em 3D.",
    description:
      "GTA III cria a gramatica moderna da franquia. Vice City e San Andreas ampliam tom, escala e identidade cultural. Os prequels de PSP e GTA Advance costuram eventos anteriores, mostrando que a Rockstar passou a tratar GTA como um universo criminal interligado.",
    notes: [
      "Claude, Tommy, CJ, Toni, Vic e Mike pertencem a esta continuidade.",
      "Liberty City, Vice City e San Andreas se tornam lugares reconheciveis, com geografia, faccoes e memoria.",
      "Referencias cruzadas existem, mas a era HD reinicia a continuidade principal."
    ]
  },
  {
    id: "hd",
    name: "HD Universe",
    period: "2008-presente",
    tone: "pink",
    games: [
      "Grand Theft Auto IV",
      "Episodes from Liberty City",
      "Grand Theft Auto: Chinatown Wars",
      "Grand Theft Auto V",
      "Grand Theft Auto Online",
      "Grand Theft Auto VI"
    ],
    summary: "A continuidade moderna: mundos mais densos, satira contemporanea, realismo fisico e GTA Online como plataforma viva.",
    description:
      "A era HD comeca com GTA IV e Liberty City reinterpretada. A Rockstar separa esta continuidade da era 3D, embora mantenha ecos, nomes de marcas e piadas internas. GTA V expande a escala com tres protagonistas e GTA Online transforma Los Santos em servico persistente. GTA VI leva esse universo para Leonida e Vice City moderna.",
    notes: [
      "Personagens de universos anteriores podem ser referenciados como easter eggs, nao necessariamente coexistem.",
      "A satira mira capitalismo, midia, policia, agencias federais, celebridade, tecnologia e redes sociais.",
      "GTA Online evolui a cronologia de Los Santos depois de 2013."
    ]
  }
];

const rockstarHistoryData = [
  {
    year: "1987/1988",
    title: "DMA Design nasce em Dundee",
    type: "Estudio",
    summary:
      "David Jones forma a DMA Design em Dundee, Escocia. Algumas fontes usam 1987 para a atividade inicial e 1988 para a fundacao formal; por isso o dossie registra as duas datas.",
    details:
      "A DMA ganhou reputacao com Lemmings antes de mudar a cultura do mundo aberto. Mike Dailly, Russell Kay e Steve Hammond fazem parte do nucleo historico associado ao periodo inicial do estudio."
  },
  {
    year: "1995-1997",
    title: "Race'n'Chase vira Grand Theft Auto",
    type: "Origem de GTA",
    summary:
      "O conceito de perseguicoes e crimes urbanos evolui para Grand Theft Auto, criado na DMA Design por David Jones e Mike Dailly com a equipe do estudio.",
    details:
      "A ideia central que sobreviveria por decadas era simples e poderosa: uma cidade como brinquedo sistemico, carros como ferramenta, policia como pressao e crime como motor de liberdade."
  },
  {
    year: "1997",
    title: "Grand Theft Auto estreia",
    type: "Lancamento",
    summary:
      "GTA nasce antes de existir Rockstar North. O primeiro jogo e publicado no periodo BMG Interactive/DMA Design.",
    details:
      "Mesmo limitado tecnicamente, o jogo ja traz Liberty City, Vice City e San Andreas, alem de radio, humor agressivo e missoes de crime urbano."
  },
  {
    year: "1998",
    title: "Take-Two, BMG Interactive e Rockstar Games",
    type: "Negocio",
    summary:
      "A Take-Two adquire ativos da BMG Interactive. Em dezembro de 1998, Rockstar Games e fundada por Sam Houser, Dan Houser, Terry Donovan, Jamie King e Gary Foreman.",
    details:
      "A Rockstar nasce como selo editorial de atitude: cinema criminal, musica, design urbano, provocacao cultural e controle de marca passam a guiar a franquia."
  },
  {
    year: "1999-2002",
    title: "DMA Design se torna Rockstar North",
    type: "Estudio",
    summary:
      "A antiga DMA passa por reestruturacoes e se torna Rockstar North, principal estudio de desenvolvimento da franquia GTA.",
    details:
      "O estudio sai da era top-down e assume a missao tecnica de transformar GTA em mundo aberto 3D com GTA III."
  },
  {
    year: "2001",
    title: "GTA III redefine o mundo aberto",
    type: "Virada tecnica",
    summary:
      "A camera em terceira pessoa, a cidade 3D, as radios e as missoes cinematograficas criam um modelo que influencia toda a industria.",
    details:
      "GTA III nao inventa sozinho o mundo aberto, mas estabelece o molde urbano moderno: dirigir, atirar, explorar, ouvir radio, provocar sistemas e seguir uma narrativa criminal no mesmo espaco."
  },
  {
    year: "2002-2006",
    title: "Era 3D no auge",
    type: "Escala",
    summary:
      "Vice City, San Andreas, Liberty City Stories e Vice City Stories consolidam uma continuidade criminal cheia de personagens recorrentes.",
    details:
      "Vice City transforma atmosfera em identidade. San Andreas expande escala, customizacao, territorio, RPG leve e comentario social."
  },
  {
    year: "2008",
    title: "Era HD com GTA IV",
    type: "Engine",
    summary:
      "GTA IV inaugura a fase HD com RAGE, Euphoria e uma Liberty City mais realista, densa e sombria.",
    details:
      "A serie troca o exagero da era PS2 por drama de imigracao, trauma de guerra, corrupcao e desencanto com o sonho americano."
  },
  {
    year: "2013",
    title: "GTA V e GTA Online",
    type: "Fenomeno",
    summary:
      "GTA V combina tres protagonistas, assaltos e uma Los Santos gigantesca; GTA Online cresce de modo multiplayer para plataforma viva.",
    details:
      "A estrutura de assaltos, negocios, propriedades, eventos e atualizacoes transforma GTA Online em um dos pilares comerciais da Rockstar por mais de uma decada."
  },
  {
    year: "2026",
    title: "GTA VI leva a era HD para Leonida",
    type: "Proximo capitulo",
    summary:
      "GTA VI esta oficialmente marcado para 19 de novembro de 2026, ambientado em Leonida/Vice City, com Lucia Caminos e Jason Duval.",
    details:
      "A comunicacao oficial aponta para uma historia de casal criminoso, conspiracao estadual e satira do lugar mais ensolarado dos EUA em sua face mais sombria."
  }
];

const timelineChronologicalData = [
  {
    year: "1961",
    sortYear: 1961,
    title: "GTA: London 1961",
    city: "London",
    universe: "2D Universe",
    protagonist: "Avatares selecionaveis",
    summary:
      "Expansao gratuita para PC que volta a Londres no inicio da decada. E uma das poucas passagens da franquia fora do eixo americano.",
    beats: [
      "Crime urbano em Londres estilizada.",
      "Tom mais arcade e menos canonico.",
      "Curiosidade historica por anteceder London 1969 dentro da cronologia."
    ],
    certainty: "Confirmado como expansao da era 2D; continuidade profunda e limitada."
  },
  {
    year: "1969",
    sortYear: 1969,
    title: "GTA: London 1969",
    city: "London",
    universe: "2D Universe",
    protagonist: "Avatares selecionaveis",
    summary:
      "A franquia testa crime britanico, cultura pop dos anos 60, carros de epoca e linguagem de gangster londrino.",
    beats: [
      "Ambientacao britanica com estetica Swinging Sixties.",
      "Expansao de GTA 1.",
      "Rara excecao internacional na serie."
    ],
    certainty: "Confirmado."
  },
  {
    year: "1984",
    sortYear: 1984,
    title: "GTA: Vice City Stories",
    city: "Vice City",
    universe: "3D Universe",
    protagonist: "Victor 'Vic' Vance",
    summary:
      "Vic Vance, militar tentando sustentar a familia, e puxado para trafico, corrupcao e disputa com Jerry Martinez e a familia Mendez.",
    beats: [
      "Mostra Vice City antes da ascensao de Tommy Vercetti.",
      "Lance Vance entra como parceiro ambicioso e instavel.",
      "O imperio dos Vance cresce, mas a tragica morte de Vic em 1986 ja paira sobre a historia."
    ],
    certainty: "Confirmado."
  },
  {
    year: "1986",
    sortYear: 1986,
    title: "Grand Theft Auto: Vice City",
    city: "Vice City",
    universe: "3D Universe",
    protagonist: "Tommy Vercetti",
    summary:
      "Depois de 15 anos preso, Tommy e enviado por Sonny Forelli a Vice City. A negociacao de drogas e emboscada, ele perde dinheiro e produto, derruba Ricardo Diaz e monta seu proprio imperio.",
    beats: [
      "Ken Rosenberg, Lance Vance, Colonel Cortez, Avery Carrington e Kent Paul abrem portas no submundo.",
      "Tommy toma a mansao de Diaz e compra negocios pela cidade.",
      "Lance trai Tommy; Sonny vai a Vice City cobrar a divida; Tommy vence e vira chefe local."
    ],
    certainty: "Confirmado."
  },
  {
    year: "1992",
    sortYear: 1992,
    title: "Grand Theft Auto: San Andreas",
    city: "Los Santos, San Fierro, Las Venturas",
    universe: "3D Universe",
    protagonist: "Carl 'CJ' Johnson",
    summary:
      "CJ volta a Los Santos apos a morte da mae. Grove Street esta quebrada, C.R.A.S.H. o manipula e a traicao de Big Smoke e Ryder expande a guerra para todo o estado.",
    beats: [
      "CJ reconstruiu poder em Los Santos, zona rural, San Fierro, deserto e Las Venturas.",
      "Woozie, Cesar, The Truth e Mike Toreno ampliam sua rede.",
      "O final confronta Big Smoke e a queda de Tenpenny."
    ],
    certainty: "Confirmado."
  },
  {
    year: "1997",
    sortYear: 1997,
    title: "Grand Theft Auto",
    city: "Liberty City, San Andreas, Vice City",
    universe: "2D Universe",
    protagonist: "Avatares selecionaveis",
    summary:
      "A primeira versao da formula: subir no submundo criminal completando missoes para chefes e causando caos em tres cidades.",
    beats: [
      "Narrativa leve e fragmentada.",
      "Cidades ainda nao equivalem as versoes 3D/HD.",
      "Base conceitual da franquia."
    ],
    certainty: "Confirmado."
  },
  {
    year: "1998",
    sortYear: 1998,
    title: "Grand Theft Auto: Liberty City Stories",
    city: "Liberty City",
    universe: "3D Universe",
    protagonist: "Toni Cipriani",
    summary:
      "Toni retorna e trabalha para Salvatore Leone durante uma guerra entre Leone, Sindacco e Forelli.",
    beats: [
      "Prequel direto de GTA III.",
      "Mostra Salvatore antes de sua queda.",
      "A violencia politica e mafiosa redesenha Liberty City."
    ],
    certainty: "Confirmado."
  },
  {
    year: "c. 2000",
    sortYear: 2000,
    title: "Grand Theft Auto Advance",
    city: "Liberty City",
    universe: "3D Universe",
    protagonist: "Mike",
    summary:
      "Mike busca vingar o parceiro Vinnie em Liberty City. A trama funciona como prequel portatil de GTA III.",
    beats: [
      "Historia de traicao e fuga.",
      "Conecta-se ao clima criminal da Liberty City pre-GTA III.",
      "Algumas cronologias populares posicionam o jogo perto de 1998; aqui fica como c. 2000 por ser anterior a GTA III."
    ],
    certainty: "A data interna e tratada como aproximada."
  },
  {
    year: "data incerta",
    sortYear: 2000.5,
    title: "Grand Theft Auto 2",
    city: "Anywhere City",
    universe: "2D Universe",
    protagonist: "Claude Speed",
    summary:
      "Anywhere City mistura retrofuturismo, gangues caricatas e um calendario deliberadamente ambiguo.",
    beats: [
      "Zaibatsu, Loonies, Yakuza, Scientists, Rednecks, Russian Mafia e Krishna disputam distritos.",
      "O tom e mais experimental que canonico.",
      "A data interna e frequentemente debatida; o dossie marca como nao confirmada."
    ],
    certainty: "Nao confirmado."
  },
  {
    year: "2001",
    sortYear: 2001,
    title: "Grand Theft Auto III",
    city: "Liberty City",
    universe: "3D Universe",
    protagonist: "Claude",
    summary:
      "Catalina trai Claude durante um assalto. Ele sobrevive, escapa com 8-Ball e atravessa Leone, Yakuza, Yardies e Cartel Colombiano ate confronta-la.",
    beats: [
      "Luigi, Joey, Toni, Salvatore, Maria, Asuka, Kenji, Ray e Donald Love estruturam a escalada.",
      "Miguel e Catalina movem o Cartel.",
      "O final fecha a vinganca contra Catalina."
    ],
    certainty: "Confirmado."
  },
  {
    year: "2008",
    sortYear: 2008,
    title: "Grand Theft Auto IV",
    city: "Liberty City",
    universe: "HD Universe",
    protagonist: "Niko Bellic",
    summary:
      "Niko chega a Liberty City atras do sonho americano, mas encontra dividas de Roman, mafias, traumas de guerra e uma cidade movida por corrupcao.",
    beats: [
      "Dimitri Rascalov e Mikhail Faustin puxam a tragedia russa.",
      "Little Jacob, Brucie, Packie, Kate, Mallorie, Phil Bell e Jimmy Pegorino moldam escolhas e perdas.",
      "Temas centrais: imigracao, vinganca, capitalismo e desilusao."
    ],
    certainty: "Confirmado."
  },
  {
    year: "2008",
    sortYear: 2008.1,
    title: "The Lost and Damned",
    city: "Liberty City",
    universe: "HD Universe",
    protagonist: "Johnny Klebitz",
    summary:
      "Johnny tenta manter o The Lost MC de pe enquanto Billy Grey leva o motoclube a autodestruicao.",
    beats: [
      "O foco muda para lealdade, vicio, rivalidade e decadencia.",
      "Mostra eventos de GTA IV por outro angulo.",
      "A queda de Johnny ganha eco amargo em GTA V."
    ],
    certainty: "Confirmado."
  },
  {
    year: "2008",
    sortYear: 2008.2,
    title: "The Ballad of Gay Tony",
    city: "Liberty City",
    universe: "HD Universe",
    protagonist: "Luis Fernando Lopez",
    summary:
      "Luis protege Tony Prince em meio a clubes, celebridades, diamantes, mafias e crime de alto nivel.",
    beats: [
      "Contrasta luxo e excesso com o noir de GTA IV.",
      "Cruza eventos dos diamantes vistos por Niko e Johnny.",
      "Yusuf Amir, Mori Kibbutz e Ray Bulgarin ampliam o tom extravagante."
    ],
    certainty: "Confirmado."
  },
  {
    year: "2009",
    sortYear: 2009,
    title: "Grand Theft Auto: Chinatown Wars",
    city: "Liberty City",
    universe: "HD Universe",
    protagonist: "Huang Lee",
    summary:
      "Huang chega para entregar a espada Yu Jian ao tio Kenny, e acaba roubado, traido e mergulhado em disputas das Triads.",
    beats: [
      "Mistura honra familiar, trafico de drogas e traicao.",
      "Usa Liberty City da era HD em formato portatil.",
      "Hsin Jaoming, Kenny Lee e Wade Heston compoem a rede de suspeitos."
    ],
    certainty: "Confirmado."
  },
  {
    year: "2013",
    sortYear: 2013,
    title: "Grand Theft Auto V",
    city: "Los Santos e Blaine County",
    universe: "HD Universe",
    protagonist: "Michael, Franklin e Trevor",
    summary:
      "O prologo em North Yankton volta para assombrar Michael e Trevor. Em Los Santos, Franklin cruza com Michael e os tres sao puxados para assaltos, FIB, IAA, Merryweather e Devin Weston.",
    beats: [
      "Michael vive sob nova identidade depois de fingir a propria morte.",
      "Trevor descobre a verdade e reabre feridas antigas.",
      "A Opcao C/Deathwish, em que os tres sobrevivem, e a leitura canonica mais aceita por referencias posteriores."
    ],
    certainty: "Confirmado; final canonico tratado como interpretacao forte."
  },
  {
    year: "2013 em diante",
    sortYear: 2013.1,
    title: "Grand Theft Auto Online",
    city: "Los Santos, Blaine County e expansoes",
    universe: "HD Universe",
    protagonist: "Personagem criado pelo jogador",
    summary:
      "Los Santos vira plataforma viva: assaltos, empresas, motoclubes, bunkers, nightclubs, cassino, Cayo Perico, agencias, guerras de drogas, mercenarios e lavagem de dinheiro.",
    beats: [
      "GTA Online deixa de ser apenas multiplayer e vira cronologia continua.",
      "Personagens de GTA V reaparecem em novas fases.",
      "A economia criminal do jogador passa a ser a espinha dorsal."
    ],
    certainty: "Confirmado como plataforma continua; detalhes de canon variam por atualizacao."
  },
  {
    year: "2026",
    sortYear: 2026,
    title: "Grand Theft Auto VI",
    city: "Leonida e Vice City",
    universe: "HD Universe",
    protagonist: "Lucia Caminos e Jason Duval",
    summary:
      "Lucia e Jason entram numa conspiracao criminosa que se espalha por Leonida depois de um servico aparentemente simples dar errado.",
    beats: [
      "Vice City retorna em versao moderna.",
      "Leonida e inspirada na Florida.",
      "Crime moderno, midia social, cultura viral e casal criminoso sao temas provaveis; detalhes de historia alem do material oficial ainda sao nao confirmados."
    ],
    certainty: "Data, protagonistas e ambientacao confirmados; trama ampla ainda sob segredo oficial."
  }
];

const releaseTimelineData = [
  ["1997", "Grand Theft Auto"],
  ["1999", "GTA: London 1969"],
  ["1999", "GTA: London 1961"],
  ["1999", "Grand Theft Auto 2"],
  ["2001", "Grand Theft Auto III"],
  ["2002", "Grand Theft Auto: Vice City"],
  ["2004", "Grand Theft Auto: San Andreas"],
  ["2004", "Grand Theft Auto Advance"],
  ["2005", "Grand Theft Auto: Liberty City Stories"],
  ["2006", "Grand Theft Auto: Vice City Stories"],
  ["2008", "Grand Theft Auto IV"],
  ["2009", "GTA IV: The Lost and Damned"],
  ["2009", "GTA: Chinatown Wars"],
  ["2009", "GTA IV: The Ballad of Gay Tony"],
  ["2013", "Grand Theft Auto V"],
  ["2013", "Grand Theft Auto Online"],
  ["2021", "Grand Theft Auto: The Trilogy - The Definitive Edition"],
  ["2026", "Grand Theft Auto VI"]
].map(([year, title]) => ({ year, title }));

const gamesData = [
  {
    id: "gta-1",
    title: "Grand Theft Auto",
    releaseYear: 1997,
    storyYear: "1997 / continuidade leve",
    universe: "2D Universe",
    city: "Liberty City, San Andreas, Vice City",
    protagonist: "Avatares selecionaveis",
    antagonists: ["Chefes criminosos rivais", "Policia local"],
    supportingCharacters: ["Samuel Deever", "Bubby", "Uncle Fu", "Brother Marcus"],
    summary:
      "O primeiro GTA apresenta crime urbano em tres cidades com perspectiva top-down, liberdade caotica e missoes para chefes do submundo.",
    fullStory:
      "A narrativa e fragmentada: o jogador assume um criminoso sem biografia fixa e sobe no submundo aceitando trabalhos, roubando carros e acumulando dinheiro. O foco esta na sensacao de cidade aberta, no risco de perseguidas policiais e na possibilidade de quebrar regras do jogo a favor do jogador.",
    developmentHistory:
      "Desenvolvido pela DMA Design, nasceu de ideias ligadas a Race'n'Chase. David Jones e Mike Dailly sao os nomes centrais da criacao inicial. O projeto encontrou sua identidade quando a perseguicao, o roubo de carros e a liberdade sistemica ficaram mais interessantes que uma corrida convencional.",
    importance:
      "Estabeleceu o DNA da serie: carros, policia, radio, humor acido, crime e cidades satiricas.",
    themes: ["crime urbano", "liberdade", "arcade", "caos"],
    factions: ["chefes locais", "policia"],
    relatedGames: ["GTA: London 1969", "GTA: London 1961", "Grand Theft Auto 2"],
    tags: ["2D Universe", "Top-down", "Origem", "Sandbox"]
  },
  {
    id: "london-1969",
    title: "Grand Theft Auto: London 1969",
    releaseYear: 1999,
    storyYear: 1969,
    universe: "2D Universe",
    city: "London",
    protagonist: "Avatares selecionaveis",
    antagonists: ["Crime londrino", "Policia"],
    supportingCharacters: ["Harold Cartwright", "Jack Parkinson", "Sid Vacant"],
    summary:
      "Expansao de GTA 1 ambientada na Londres dos anos 60, com carros, linguagem e atmosfera britanica.",
    fullStory:
      "A campanha funciona como variação de GTA 1 em ambiente londrino: o jogador trabalha para figuras do submundo local, sobe em reputacao e atravessa uma cidade estilizada por cultura pop, crime e ironia britanica.",
    developmentHistory:
      "Criada como mission pack/expansao, mostrou que GTA podia mudar de pais e periodo historico sem abandonar a formula de caos urbano.",
    importance:
      "E uma das poucas vezes em que GTA saiu da satira de cidades americanas.",
    themes: ["anos 60", "crime britanico", "expansao"],
    factions: ["gangues londrinas"],
    relatedGames: ["Grand Theft Auto", "GTA: London 1961"],
    tags: ["2D Universe", "Expansao", "Prequel", "London"]
  },
  {
    id: "london-1961",
    title: "Grand Theft Auto: London 1961",
    releaseYear: 1999,
    storyYear: 1961,
    universe: "2D Universe",
    city: "London",
    protagonist: "Avatares selecionaveis",
    antagonists: ["Gangues locais", "Policia"],
    supportingCharacters: ["Elenco de chefes da expansao"],
    summary:
      "Expansao adicional para PC, anterior a London 1969 dentro da cronologia.",
    fullStory:
      "London 1961 amplia a ideia de crime de epoca com missoes e ambientacao ainda mais retro. A historia permanece leve, mais interessada em estilo e objetivos do que em arco dramatico.",
    developmentHistory:
      "Distribuida como complemento para London 1969 no PC, reforcando a fase experimental do primeiro GTA.",
    importance:
      "Curiosidade historica importante para a cronologia interna e para a raridade de GTA fora dos EUA.",
    themes: ["anos 60", "Londres", "arcade"],
    factions: ["gangues londrinas"],
    relatedGames: ["Grand Theft Auto", "GTA: London 1969"],
    tags: ["2D Universe", "Expansao", "Prequel", "Spin-off"]
  },
  {
    id: "gta-2",
    title: "Grand Theft Auto 2",
    releaseYear: 1999,
    storyYear: "Nao confirmado / retrofuturista",
    universe: "2D Universe",
    city: "Anywhere City",
    protagonist: "Claude Speed",
    antagonists: ["Zaibatsu", "Loonies", "Yakuza", "Scientists", "Rednecks", "Russian Mafia", "Krishna"],
    supportingCharacters: ["Chefes de gangues por distrito"],
    summary:
      "GTA 2 troca cidades reconheciveis por Anywhere City, um experimento retrofuturista com reputacao entre gangues.",
    fullStory:
      "Claude Speed trabalha para faccoes rivais em distritos da cidade. Cada contrato aumenta dinheiro e reputacao, mas piora relacoes com inimigos. A historia e menos linear e mais uma matriz de lealdades temporarias, traicoes e controle territorial.",
    developmentHistory:
      "A DMA/Rockstar testou sistemas de gangues mais distintos, visual futurista e comportamento urbano mais responsivo, ainda em top-down.",
    importance:
      "Funciona como ponte experimental: mantem a estrutura 2D, mas antecipa a importancia de faccoes com identidade propria.",
    themes: ["retrofuturo", "gangues", "corporacoes", "reputacao"],
    factions: ["Zaibatsu", "Loonies", "Yakuza", "Scientists", "Rednecks", "Russian Mafia", "Krishna"],
    relatedGames: ["Grand Theft Auto"],
    tags: ["2D Universe", "Experimental", "Spin-off"]
  },
  {
    id: "gta-iii",
    title: "Grand Theft Auto III",
    releaseYear: 2001,
    storyYear: 2001,
    universe: "3D Universe",
    city: "Liberty City",
    protagonist: "Claude",
    antagonists: ["Catalina", "Salvatore Leone", "Colombian Cartel"],
    supportingCharacters: ["8-Ball", "Luigi Goterelli", "Joey Leone", "Toni Cipriani", "Maria Latore", "Asuka Kasen", "Kenji Kasen", "Ray Machowski", "Donald Love", "Miguel"],
    summary:
      "Claude e traido por Catalina, escapa da prisao e atravessa as faccoes de Liberty City em busca de sobrevivencia e vinganca.",
    fullStory:
      "Apos um assalto, Catalina atira em Claude e foge com Miguel. Claude sobrevive, escapa com 8-Ball e passa a trabalhar para a Leone Family. Quando Salvatore tenta elimina-lo, Maria o ajuda a se aproximar da Yakuza. O conflito se espalha por Yardies, Cartel Colombiano, politicos e empresarios ate Claude confrontar Catalina no final.",
    developmentHistory:
      "GTA III foi a virada para 3D em tempo real. A cidade, as radios, os pedestres, a policia, os veiculos e as missoes passaram a operar num espaco tridimensional coeso.",
    importance:
      "Redefiniu o genero de mundo aberto urbano e virou referencia estrutural para jogos de acao em terceira pessoa.",
    themes: ["traicao", "vinganca", "mafia", "cidade aberta"],
    factions: ["Leone Family", "Yakuza", "Yardies", "Colombian Cartel", "Diablos"],
    relatedGames: ["Liberty City Stories", "Grand Theft Auto Advance"],
    tags: ["3D Universe", "Marco", "Liberty City"]
  },
  {
    id: "vice-city",
    title: "Grand Theft Auto: Vice City",
    releaseYear: 2002,
    storyYear: 1986,
    universe: "3D Universe",
    city: "Vice City",
    protagonist: "Tommy Vercetti",
    antagonists: ["Sonny Forelli", "Ricardo Diaz", "Lance Vance"],
    supportingCharacters: ["Ken Rosenberg", "Colonel Cortez", "Avery Carrington", "Kent Paul", "Mercedes Cortez", "Umberto Robina", "Phil Cassidy"],
    summary:
      "Tommy perde dinheiro e drogas numa emboscada, derruba Ricardo Diaz e construi um imperio proprio em Vice City.",
    fullStory:
      "Recem-saido da prisao depois de 15 anos, Tommy e enviado por Sonny Forelli para uma negociacao em Vice City. A operacao da errado. Tommy precisa recuperar a mercadoria, entender quem o traiu e sobreviver ao jogo de cartois, mafiosos e empresarios. Ele toma a mansao de Diaz, compra negocios, consolida poder e, no final, mata Lance e Sonny.",
    developmentHistory:
      "Desenvolvido rapidamente depois de GTA III, Vice City ampliou voz, radio, personalidade de protagonista e atmosfera. A inspiracao em cinema criminal dos anos 80 e cultura de Miami moldou o tom.",
    importance:
      "Transformou ambientacao em assinatura. Vice City e lembrado tanto por historia quanto por musica, neon, figurino e humor.",
    themes: ["anos 80", "neon", "drogas", "imperio criminal"],
    factions: ["Forelli Family", "Diaz Organization", "Vance Crime Family", "Cubans", "Haitians"],
    relatedGames: ["Vice City Stories", "GTA VI"],
    tags: ["3D Universe", "Prequel relacionado", "Vice City", "Classico"]
  },
  {
    id: "san-andreas",
    title: "Grand Theft Auto: San Andreas",
    releaseYear: 2004,
    storyYear: 1992,
    universe: "3D Universe",
    city: "San Andreas",
    protagonist: "Carl 'CJ' Johnson",
    antagonists: ["Frank Tenpenny", "Big Smoke", "Ryder", "Eddie Pulaski"],
    supportingCharacters: ["Sweet Johnson", "Kendl Johnson", "Cesar Vialpando", "Woozie", "Mike Toreno", "The Truth", "Madd Dogg", "Zero", "OG Loc", "Catalina"],
    summary:
      "CJ retorna a Los Santos, descobre traicoes e reconquista poder cruzando Los Santos, San Fierro, deserto e Las Venturas.",
    fullStory:
      "A morte de Beverly Johnson traz CJ de volta. Grove Street esta fraca, Sweet desconfia do irmao e C.R.A.S.H. usa CJ como instrumento. A traicao de Big Smoke e Ryder revela ligacoes com drogas e corrupcao. CJ e exilado, construiu negocios, aliados e habilidades em todo o estado, retorna a Los Santos e fecha a historia contra Big Smoke e Tenpenny.",
    developmentHistory:
      "San Andreas expande tudo: mapa com tres cidades, campo, deserto, academias, gordura, musculatura, roupas, habilidades, territorio, avioes e RPG leve.",
    importance:
      "E o apice de ambicao da era 3D e um dos jogos mais influentes da geracao PS2.",
    themes: ["familia", "gangues", "corrupcao policial", "territorio", "redencao"],
    factions: ["Grove Street Families", "Ballas", "Los Santos Vagos", "Varrios Los Aztecas", "San Fierro Rifa", "Da Nang Boys", "C.R.A.S.H."],
    relatedGames: ["GTA V", "GTA Online"],
    tags: ["3D Universe", "Estado", "Gangues", "Classico"]
  },
  {
    id: "gta-advance",
    title: "Grand Theft Auto Advance",
    releaseYear: 2004,
    storyYear: "c. 2000",
    universe: "3D Universe",
    city: "Liberty City",
    protagonist: "Mike",
    antagonists: ["Vinnie", "Cisco", "King Courtney"],
    supportingCharacters: ["8-Ball", "Misty", "Asuka Kasen"],
    summary:
      "Mike tenta sair da vida criminal com Vinnie, mas uma explosao e uma traicao o jogam numa vinganca em Liberty City.",
    fullStory:
      "Mike e Vinnie planejam abandonar Liberty City com dinheiro, mas Vinnie aparentemente morre numa explosao. Mike busca responsaveis e trabalha para figuras locais, ate descobrir que a historia era uma manipulacao. O final reforca o tema de fuga impossivel da cidade.",
    developmentHistory:
      "Desenvolvido para Game Boy Advance, adapta Liberty City a uma leitura top-down conectada ao universo 3D.",
    importance:
      "Curioso por unir portatil, camera classica e continuidade de GTA III.",
    themes: ["vinganca", "traicao", "prequel"],
    factions: ["Yakuza", "Yardies", "Uptown Yardies", "cartel local"],
    relatedGames: ["GTA III"],
    tags: ["3D Universe", "Prequel", "Spin-off", "Portatil"]
  },
  {
    id: "liberty-city-stories",
    title: "Grand Theft Auto: Liberty City Stories",
    releaseYear: 2005,
    storyYear: 1998,
    universe: "3D Universe",
    city: "Liberty City",
    protagonist: "Toni Cipriani",
    antagonists: ["Sindacco Family", "Forelli Family", "Sicilian Mafia"],
    supportingCharacters: ["Salvatore Leone", "Maria Latore", "Donald Love", "Ma Cipriani", "Vincenzo Cilli"],
    summary:
      "Toni volta a Liberty City e ajuda Salvatore Leone a vencer guerras de mafia, politica e territorio.",
    fullStory:
      "Depois de um periodo fora, Toni retorna e tenta recuperar posicao na familia Leone. Ele lida com ordens humilhantes, rivais italianos, interesses politicos de Donald Love e disputas que preparam o tabuleiro de GTA III.",
    developmentHistory:
      "Originalmente criado para PSP, reutiliza Liberty City com nova epoca, novas missoes e refinamentos tecnicos.",
    importance:
      "Aprofunda a mitologia da Leone Family e mostra Liberty antes de Claude.",
    themes: ["mafia", "lealdade", "politica", "prequel"],
    factions: ["Leone Family", "Sindacco Family", "Forelli Family", "Sicilian Mafia"],
    relatedGames: ["GTA III"],
    tags: ["3D Universe", "Prequel", "Liberty City"]
  },
  {
    id: "vice-city-stories",
    title: "Grand Theft Auto: Vice City Stories",
    releaseYear: 2006,
    storyYear: 1984,
    universe: "3D Universe",
    city: "Vice City",
    protagonist: "Victor 'Vic' Vance",
    antagonists: ["Jerry Martinez", "Armando Mendez", "Diego Mendez"],
    supportingCharacters: ["Lance Vance", "Louise Cassidy-Williams", "Phil Cassidy", "Ricardo Diaz", "Umberto Robina"],
    summary:
      "Vic Vance e expulso do exercito e empurrado para uma guerra criminal que antecede os eventos de Vice City.",
    fullStory:
      "Vic tenta proteger sua familia, mas Jerry Martinez o usa em esquemas ilegais. Ao lado de Lance, ele monta negocios em Vice City, enfrenta a familia Mendez e cruza com figuras que reaparecem em 1986. A tragedia e que o destino de Vic no inicio de Vice City ja e conhecido.",
    developmentHistory:
      "Segundo grande prequel portatil da era 3D, expande sistema de negocios e territorio em Vice City.",
    importance:
      "Da contexto ao passado dos Vance e a paisagem criminal anterior a Tommy.",
    themes: ["familia", "corrupcao militar", "drogas", "prequel"],
    factions: ["Vance Crime Family", "Mendez Cartel", "Diaz Organization"],
    relatedGames: ["Vice City"],
    tags: ["3D Universe", "Prequel", "Vice City"]
  },
  {
    id: "gta-iv",
    title: "Grand Theft Auto IV",
    releaseYear: 2008,
    storyYear: 2008,
    universe: "HD Universe",
    city: "Liberty City",
    protagonist: "Niko Bellic",
    antagonists: ["Dimitri Rascalov", "Mikhail Faustin", "Ray Bulgarin", "Jimmy Pegorino"],
    supportingCharacters: ["Roman Bellic", "Little Jacob", "Brucie Kibbutz", "Mallorie Bardas", "Packie McReary", "Kate McReary", "Phil Bell", "United Liberty Paper contact"],
    summary:
      "Niko chega aos EUA procurando futuro e vinganca, mas encontra dividas, mentiras, mafias e o colapso moral do sonho americano.",
    fullStory:
      "Roman vende uma fantasia de sucesso; Niko encontra um taxi, agiotas e violencia. Trabalhos para gangues jamaicanas, mafias russas, familias irlandesas, italianos e agentes federais levam Niko ate homens ligados a seu trauma de guerra. O jogo culmina em escolhas que cobram preco pessoal, seja por vinganca ou acordo.",
    developmentHistory:
      "Primeira GTA da era HD, usando RAGE e animacao Euphoria. A Rockstar reposicionou o tom para drama criminal realista.",
    importance:
      "Mostrou que GTA podia ser mais dramatico, denso e politicamente amargo sem perder satira.",
    themes: ["imigracao", "trauma", "capitalismo", "vinganca"],
    factions: ["Russian Mafia", "McReary Family", "Pegorino Family", "LCPD", "agentes federais"],
    relatedGames: ["The Lost and Damned", "The Ballad of Gay Tony", "Chinatown Wars"],
    tags: ["HD Universe", "Liberty City", "Realismo"]
  },
  {
    id: "lost-and-damned",
    title: "Grand Theft Auto IV: The Lost and Damned",
    releaseYear: 2009,
    storyYear: 2008,
    universe: "HD Universe",
    city: "Liberty City",
    protagonist: "Johnny Klebitz",
    antagonists: ["Billy Grey", "Ray Boccino", "Angels of Death"],
    supportingCharacters: ["Ashley Butler", "Jim Fitzgerald", "Brian Jeremy", "Terry Thorpe", "Clay Simons"],
    summary:
      "A historia de Johnny no The Lost MC mostra um motoclube ruindo por vicio, orgulho e traicao interna.",
    fullStory:
      "Johnny tenta administrar The Lost com algum pragmatismo enquanto Billy Grey retorna e reinicia guerras. O clube se divide, negocios com drogas e diamantes cruzam a historia de GTA IV e a lealdade de Johnny e esmagada por uma cultura de autodestruicao.",
    developmentHistory:
      "Primeiro episodio de GTA IV, criado para mostrar a mesma cidade por outra classe social e criminal.",
    importance:
      "Aprofunda a tecnica narrativa de perspectivas cruzadas na era HD.",
    themes: ["motoclube", "lealdade", "decadencia", "vicio"],
    factions: ["The Lost MC", "Angels of Death", "Pegorino Family"],
    relatedGames: ["GTA IV", "The Ballad of Gay Tony", "GTA V"],
    tags: ["HD Universe", "Expansao", "Motoclube"]
  },
  {
    id: "chinatown-wars",
    title: "Grand Theft Auto: Chinatown Wars",
    releaseYear: 2009,
    storyYear: 2009,
    universe: "HD Universe",
    city: "Liberty City",
    protagonist: "Huang Lee",
    antagonists: ["Wu 'Kenny' Lee", "Rival Triads"],
    supportingCharacters: ["Hsin Jaoming", "Wade Heston", "Zhou Ming", "Chan Jaoming"],
    summary:
      "Huang Lee chega com a espada Yu Jian, e uma traicao familiar o coloca numa guerra por honra e poder entre Triads.",
    fullStory:
      "Apos o assassinato do pai, Huang deve entregar a espada ancestral ao tio Kenny. Ele e atacado, dado como morto e mergulha em investigacoes, trafico e jogos de lealdade. A revelacao final transforma a busca por honra em acerto de contas familiar.",
    developmentHistory:
      "Criado para Nintendo DS e depois levado a outras plataformas, adapta Liberty City HD a uma estetica top-down moderna.",
    importance:
      "Mantem a era HD ativa fora dos consoles de mesa e explora Triads com foco proprio.",
    themes: ["honra", "familia", "drogas", "traicao"],
    factions: ["Triads", "LCPD", "FIB"],
    relatedGames: ["GTA IV"],
    tags: ["HD Universe", "Spin-off", "Portatil"]
  },
  {
    id: "ballad-gay-tony",
    title: "Grand Theft Auto IV: The Ballad of Gay Tony",
    releaseYear: 2009,
    storyYear: 2008,
    universe: "HD Universe",
    city: "Liberty City",
    protagonist: "Luis Fernando Lopez",
    antagonists: ["Ray Bulgarin", "Rocco Pelosi", "Mori Kibbutz"],
    supportingCharacters: ["Tony Prince", "Yusuf Amir", "Armando Torres", "Henrique Bardas", "Gay Tony's club network"],
    summary:
      "Luis tenta salvar Tony Prince e seus clubes enquanto diamantes, celebridades, mafias e bilionarios puxam Liberty para o excesso.",
    fullStory:
      "Luis divide lealdade entre amigos de bairro e a vida noturna de Tony. Dividas, chantagens e negocios com diamantes levam a confrontos com Bulgarin e outros predadores. O episodio contrasta glamour e perigo, encerrando a trilogia de perspectivas de GTA IV.",
    developmentHistory:
      "Segundo episodio de GTA IV, deliberadamente mais colorido, explosivo e luxuoso que o jogo base.",
    importance:
      "Completa o mosaico de Liberty City e mostra como a mesma conspiracao de diamantes afeta varios protagonistas.",
    themes: ["vida noturna", "luxo", "lealdade", "diamantes"],
    factions: ["clubes de Tony", "Russian Mafia", "Ancelotti connections"],
    relatedGames: ["GTA IV", "The Lost and Damned"],
    tags: ["HD Universe", "Expansao", "Vida noturna"]
  },
  {
    id: "gta-v",
    title: "Grand Theft Auto V",
    releaseYear: 2013,
    storyYear: "2004 / 2013",
    universe: "HD Universe",
    city: "Los Santos, Blaine County, North Yankton",
    protagonist: "Michael De Santa, Franklin Clinton e Trevor Philips",
    antagonists: ["Devin Weston", "Steve Haines", "Wei Cheng", "Stretch", "Merryweather"],
    supportingCharacters: ["Lester Crest", "Lamar Davis", "Amanda De Santa", "Jimmy De Santa", "Tracey De Santa", "Dave Norton", "Martin Madrazo", "Ron Jakowski", "Wade Hebert"],
    summary:
      "Tres criminosos se unem em assaltos enquanto FIB, IAA, Merryweather, empresarios e gangues locais tentam usa-los ou elimina-los.",
    fullStory:
      "Em 2004, um assalto em North Yankton separa Michael, Trevor e Brad. Em 2013, Michael vive protegido em Los Santos, Franklin tenta sair do crime de rua e Trevor descobre que Michael esta vivo. Lester estrutura assaltos, o FIB chantageia o trio, Devin Weston explora Franklin e antigos inimigos voltam. A Opcao C e a conclusao mais aceita: os tres sobrevivem e eliminam ameaças centrais.",
    developmentHistory:
      "GTA V traz tres protagonistas jogaveis, mapa amplo, assaltos planejados e uma Los Santos satirica da cultura de celebridade, tecnologia e desigualdade.",
    importance:
      "Fenomeno comercial duradouro e base para GTA Online.",
    themes: ["assaltos", "familia", "midia", "capitalismo", "amizade toxica"],
    factions: ["FIB", "IAA", "Merryweather", "Families", "Ballas", "Vagos", "Madrazo Cartel"],
    relatedGames: ["GTA Online"],
    tags: ["HD Universe", "Tres protagonistas", "Los Santos"]
  },
  {
    id: "gta-online",
    title: "Grand Theft Auto Online",
    releaseYear: 2013,
    storyYear: "2013 em diante",
    universe: "HD Universe",
    city: "Los Santos, Blaine County, Cayo Perico e instancias",
    protagonist: "Personagem criado pelo jogador",
    antagonists: ["Merryweather", "FIB", "IAA", "El Rubio", "Duggans", "criminosos rivais"],
    supportingCharacters: ["Lamar Davis", "Lester Crest", "Agent 14", "Tony Prince", "Franklin Clinton", "Dr. Dre", "Dax", "Martin Madrazo", "Imani"],
    summary:
      "GTA Online transforma Los Santos em uma carreira criminal persistente com assaltos, empresas e atualizacoes narrativas.",
    fullStory:
      "O jogador chega como criminoso desconhecido e passa de trabalhos de rua a CEO, presidente de motoclube, dono de bunker, operador de cassino, infiltrado em Cayo Perico, socio de agencia, produtor de nightclubs e figura de lavagem de dinheiro. A historia e menos linear e mais uma acumulacao de status, contatos e infraestrutura criminal.",
    developmentHistory:
      "Lançado semanas apos GTA V, cresceu por atualizacoes regulares e virou plataforma de longa duracao.",
    importance:
      "Mudou a economia da franquia e manteve GTA V culturalmente ativo por mais de uma decada.",
    themes: ["plataforma viva", "assaltos", "negocios", "economia criminal"],
    factions: ["organizações de jogadores", "MCs", "CEOs", "Agencies", "Nightclubs", "Bunkers", "Arcades", "Auto Shops"],
    relatedGames: ["GTA V"],
    tags: ["HD Universe", "Online", "Plataforma viva"]
  },
  {
    id: "trilogy-definitive",
    title: "Grand Theft Auto: The Trilogy - The Definitive Edition",
    releaseYear: 2021,
    storyYear: "2001, 1986 e 1992",
    universe: "3D Universe",
    city: "Liberty City, Vice City, San Andreas",
    protagonist: "Claude, Tommy Vercetti e CJ",
    antagonists: ["Catalina", "Sonny Forelli", "Tenpenny", "Big Smoke"],
    supportingCharacters: ["Elencos de GTA III, Vice City e San Andreas"],
    summary:
      "Coletanea remasterizada dos tres pilares da era 3D.",
    fullStory:
      "Nao e uma historia nova, mas uma nova edicao de GTA III, Vice City e San Andreas. Serve como porta de entrada moderna para a continuidade 3D e suas tres narrativas centrais.",
    developmentHistory:
      "Lancada como remasterizacao. Recebeu criticas no lancamento por problemas tecnicos e visuais, com correcoes posteriores.",
    importance:
      "Mantem a trilogia classica acessivel, embora tambem seja lembrada por controversias de preservacao e qualidade.",
    themes: ["preservacao", "remaster", "era 3D"],
    factions: ["Leone Family", "Forelli Family", "Grove Street Families", "C.R.A.S.H."],
    relatedGames: ["GTA III", "Vice City", "San Andreas"],
    tags: ["3D Universe", "Remaster", "Coletanea"]
  },
  {
    id: "gta-vi",
    title: "Grand Theft Auto VI",
    releaseYear: 2026,
    storyYear: 2026,
    universe: "HD Universe",
    city: "Leonida, Vice City",
    protagonist: "Lucia Caminos e Jason Duval",
    antagonists: ["Nao confirmado"],
    supportingCharacters: ["Cal Hampton", "Boobie Ike", "Dre'Quan Priest", "Real Dimez", "Raul Bautista", "Brian Heder"],
    summary:
      "Lucia e Jason dependem um do outro depois que um servico da errado e os joga numa conspiracao em Leonida.",
    fullStory:
      "A sinopse oficial indica um casal criminoso em Vice City/Leonida, preso ao lado mais sombrio do lugar mais ensolarado dos Estados Unidos. Alem disso, a Rockstar ainda preserva detalhes essenciais da trama, antagonistas e estrutura de missoes.",
    developmentHistory:
      "Anunciado oficialmente pela Rockstar, GTA VI e posicionado como a proxima grande entrada da era HD. A data oficial atual e 19 de novembro de 2026 para PlayStation 5 e Xbox Series X|S.",
    importance:
      "Proximo capitulo principal da serie e retorno de Vice City em escala moderna.",
    themes: ["Leonida", "Vice City moderna", "casal criminoso", "redes sociais", "sátira contemporanea"],
    factions: ["Nao confirmado", "policia local", "crime moderno"],
    relatedGames: ["GTA Vice City", "Vice City Stories", "GTA Online"],
    tags: ["HD Universe", "GTA VI", "Fatos confirmados", "Nao lancado"]
  }
];

const charactersData = [
  {
    id: "claude",
    name: "Claude",
    aliases: ["Protagonista silencioso"],
    games: ["Grand Theft Auto III", "Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Protagonista",
    category: "Protagonistas",
    biography: "Criminoso lacônico traido por Catalina durante um assalto em Liberty City. Sua falta de fala o transforma em figura quase fantasma dentro da cidade.",
    storyArc: "Sobrevive a traicao, trabalha para varias faccoes e fecha sua vinganca contra Catalina.",
    relationships: ["Catalina: ex-parceira e traidora", "8-Ball: aliado inicial", "Maria Latore: conexao com a Yakuza", "Asuka Kasen: patrona temporaria"],
    affiliations: ["Leone Family", "Yakuza", "Yardies", "trabalhos independentes"],
    enemies: ["Catalina", "Colombian Cartel", "Salvatore Leone"],
    fate: "Vivo ao final de GTA III; paradeiro posterior nao confirmado.",
    importance: "Principal",
    tags: ["protagonista", "vinganca", "silencioso"]
  },
  {
    id: "tommy-vercetti",
    name: "Tommy Vercetti",
    aliases: ["The Harwood Butcher"],
    games: ["Grand Theft Auto: Vice City"],
    universe: "3D Universe",
    city: "Vice City",
    role: "Protagonista",
    category: "Protagonistas",
    biography: "Ex-soldado da Forelli Family que passa 15 anos preso e volta como emissario de Sonny Forelli em Vice City.",
    storyArc: "Transforma uma emboscada em oportunidade: derruba Diaz, compra negocios e vira chefe independente.",
    relationships: ["Sonny Forelli: antigo chefe e inimigo final", "Ken Rosenberg: advogado e aliado", "Lance Vance: aliado que se torna traidor", "Ricardo Diaz: alvo de golpe"],
    affiliations: ["Forelli Family", "Vercetti Estate", "negocios de Vice City"],
    enemies: ["Sonny Forelli", "Ricardo Diaz", "Lance Vance"],
    fate: "Vivo e dominante em Vice City ao final do jogo.",
    importance: "Principal",
    tags: ["protagonista", "mafia", "imperio", "Vice City"]
  },
  {
    id: "cj",
    name: "Carl 'CJ' Johnson",
    aliases: ["CJ"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Los Santos",
    role: "Protagonista",
    category: "Protagonistas",
    biography: "Membro da Grove Street Families que volta de Liberty City apos a morte da mae.",
    storyArc: "Sai de suspeito e filho ausente para lideranca capaz de recuperar a Grove e vencer Tenpenny.",
    relationships: ["Sweet Johnson: irmao e lider da Grove", "Kendl Johnson: irma", "Cesar Vialpando: aliado e cunhado", "Big Smoke e Ryder: amigos traidores"],
    affiliations: ["Grove Street Families", "Cesar's garage", "Four Dragons Casino"],
    enemies: ["Frank Tenpenny", "Big Smoke", "Ryder", "Ballas"],
    fate: "Vivo ao final de San Andreas.",
    importance: "Principal",
    tags: ["protagonista", "gangue", "familia", "redencao"]
  },
  {
    id: "mike",
    name: "Mike",
    aliases: ["Criminoso de Liberty City"],
    games: ["Grand Theft Auto Advance"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Protagonista",
    category: "Protagonistas",
    biography: "Parceiro de Vinnie que tenta fugir da cidade antes de ser preso numa trama de traicao.",
    storyArc: "Busca vinganca pela morte aparente de Vinnie e descobre que foi manipulado.",
    relationships: ["Vinnie: parceiro e traidor", "8-Ball: contato", "Cisco: aliado/rival em negocios"],
    affiliations: ["trabalhos independentes", "contatos locais"],
    enemies: ["Vinnie", "criminosos rivais"],
    fate: "Sobrevive e deixa Liberty City com destino incerto.",
    importance: "Principal",
    tags: ["protagonista", "prequel", "vinganca"]
  },
  {
    id: "toni-cipriani",
    name: "Toni Cipriani",
    aliases: ["Antonio Cipriani"],
    games: ["Grand Theft Auto: Liberty City Stories", "Grand Theft Auto III"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Protagonista / mafioso",
    category: "Protagonistas",
    biography: "Soldado da Leone Family, leal a Salvatore e constantemente diminuido pela propria mae.",
    storyArc: "Em LCS sobe na hierarquia e ajuda os Leone a vencer rivais; em GTA III aparece como capo estabelecido.",
    relationships: ["Salvatore Leone: chefe", "Ma Cipriani: mae critica", "Claude: executor temporario"],
    affiliations: ["Leone Family"],
    enemies: ["Sindacco Family", "Forelli Family", "Yakuza"],
    fate: "Vivo em GTA III; futuro posterior nao confirmado.",
    importance: "Principal",
    tags: ["protagonista", "mafia", "Leone"]
  },
  {
    id: "vic-vance",
    name: "Victor 'Vic' Vance",
    aliases: ["Vic"],
    games: ["Grand Theft Auto: Vice City Stories", "Grand Theft Auto: Vice City"],
    universe: "3D Universe",
    city: "Vice City",
    role: "Protagonista",
    category: "Protagonistas",
    biography: "Militar expulso por manipulacao de Jerry Martinez, tentando sustentar a familia e proteger o irmao doente.",
    storyArc: "Constroi um imperio com Lance, enfrenta os Mendez e fica marcado pela tragedia que abre Vice City.",
    relationships: ["Lance Vance: irmao e parceiro", "Jerry Martinez: corruptor", "Louise Cassidy-Williams: relacao tragica"],
    affiliations: ["Vance Crime Family", "exercito dos EUA"],
    enemies: ["Jerry Martinez", "Armando Mendez", "Diego Mendez"],
    fate: "Morto na emboscada inicial de Vice City em 1986.",
    importance: "Principal",
    tags: ["protagonista", "familia", "Vice City", "prequel"]
  },
  {
    id: "niko-bellic",
    name: "Niko Bellic",
    aliases: ["Niko"],
    games: ["Grand Theft Auto IV"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Protagonista",
    category: "Protagonistas",
    biography: "Veterano de guerra do Leste Europeu que chega a Liberty City atras de Roman, dinheiro e respostas sobre uma traicao do passado.",
    storyArc: "Descobre que o sonho americano e propaganda, e que vinganca nao resolve o trauma.",
    relationships: ["Roman Bellic: primo", "Little Jacob: aliado leal", "Packie McReary: parceiro", "Kate McReary: possivel par romantico", "Dimitri Rascalov: traidor"],
    affiliations: ["trabalhos independentes", "McReary Family", "Pegorino Family"],
    enemies: ["Dimitri Rascalov", "Ray Bulgarin", "Darko Brevic", "Jimmy Pegorino"],
    fate: "Sobrevive; perdas variam conforme escolha final.",
    importance: "Principal",
    tags: ["protagonista", "imigracao", "trauma", "noir"]
  },
  {
    id: "johnny-klebitz",
    name: "Johnny Klebitz",
    aliases: ["Johnny K"],
    games: ["Grand Theft Auto IV: The Lost and Damned", "Grand Theft Auto V"],
    universe: "HD Universe",
    city: "Liberty City / Blaine County",
    role: "Protagonista",
    category: "Protagonistas",
    biography: "Vice-presidente do The Lost MC, mais estrategista que Billy Grey, mas preso a lealdades destrutivas.",
    storyArc: "Tenta salvar o clube em Liberty City; em GTA V aparece destruido por vicio e dependencia emocional.",
    relationships: ["Billy Grey: lider e rival", "Ashley Butler: relacao toxica", "Jim Fitzgerald: aliado", "Trevor Philips: algoz em GTA V"],
    affiliations: ["The Lost MC"],
    enemies: ["Billy Grey", "Angels of Death", "Trevor Philips"],
    fate: "Morto por Trevor em GTA V.",
    importance: "Principal",
    tags: ["protagonista", "motoclube", "tragico"]
  },
  {
    id: "luis-lopez",
    name: "Luis Fernando Lopez",
    aliases: ["Luis Lopez"],
    games: ["Grand Theft Auto IV: The Ballad of Gay Tony"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Protagonista",
    category: "Protagonistas",
    biography: "Seguranca, socio e solucionador de problemas de Tony Prince, dividido entre bairro, negocios e vida noturna.",
    storyArc: "Protege Tony, lida com dividas e sobrevive ao caos dos diamantes.",
    relationships: ["Tony Prince: chefe e amigo", "Yusuf Amir: aliado extravagante", "Mori Kibbutz: pressao", "Ray Bulgarin: inimigo"],
    affiliations: ["Maisonette 9", "Hercules", "rede de Tony Prince"],
    enemies: ["Ray Bulgarin", "Rocco Pelosi", "Mori Kibbutz"],
    fate: "Vivo ao final do episodio.",
    importance: "Principal",
    tags: ["protagonista", "vida noturna", "aliado"]
  },
  {
    id: "huang-lee",
    name: "Huang Lee",
    aliases: ["Huang"],
    games: ["Grand Theft Auto: Chinatown Wars"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Protagonista",
    category: "Protagonistas",
    biography: "Filho de lider das Triads que chega a Liberty City para entregar a espada Yu Jian apos a morte do pai.",
    storyArc: "Perde a espada, e deixado para morrer, investiga traicoes e confronta o proprio tio.",
    relationships: ["Wu Kenny Lee: tio e traidor", "Hsin Jaoming: lider Triad", "Wade Heston: policial aliado"],
    affiliations: ["Triads", "familia Lee"],
    enemies: ["Kenny Lee", "rivalidades Triad"],
    fate: "Vivo; reconhecido depois da queda de Kenny.",
    importance: "Principal",
    tags: ["protagonista", "Triads", "honra"]
  },
  {
    id: "michael-de-santa",
    name: "Michael De Santa",
    aliases: ["Michael Townley"],
    games: ["Grand Theft Auto V", "Grand Theft Auto Online"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Protagonista",
    category: "Protagonistas",
    biography: "Ex-assaltante que fingiu a propria morte em acordo com Dave Norton e vive em Los Santos sob protecao.",
    storyArc: "O tedio suburbano vira crise quando Franklin entra em sua vida e Trevor descobre a mentira de North Yankton.",
    relationships: ["Trevor Philips: ex-parceiro e ferida aberta", "Franklin Clinton: protegido", "Amanda, Jimmy e Tracey: familia", "Dave Norton: contato do FIB"],
    affiliations: ["equipe de assaltos", "acordo informal com FIB"],
    enemies: ["Devin Weston", "Steve Haines", "Wei Cheng"],
    fate: "Vivo na Opcao C, leitura canonica mais aceita.",
    importance: "Principal",
    tags: ["protagonista", "assaltante", "familia"]
  },
  {
    id: "franklin-clinton",
    name: "Franklin Clinton",
    aliases: ["Franklin"],
    games: ["Grand Theft Auto V", "Grand Theft Auto Online: The Contract"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Protagonista",
    category: "Protagonistas",
    biography: "Criminoso de rua de South Los Santos que quer sair de pequenos golpes e construir algo maior.",
    storyArc: "Aprende com Michael e Lester, enfrenta pressao de Lamar, Stretch e Devin, e depois aparece como empresario na agencia F. Clinton and Partner.",
    relationships: ["Michael De Santa: mentor", "Lamar Davis: amigo", "Tanisha Jackson: relacao antiga", "Lester Crest: contato"],
    affiliations: ["Families", "equipe de assaltos", "F. Clinton and Partner"],
    enemies: ["Stretch", "Devin Weston", "Ballas"],
    fate: "Vivo e bem-sucedido em GTA Online.",
    importance: "Principal",
    tags: ["protagonista", "gangue", "online", "empresario"]
  },
  {
    id: "trevor-philips",
    name: "Trevor Philips",
    aliases: ["T", "Mr. Philips"],
    games: ["Grand Theft Auto V", "Grand Theft Auto Online"],
    universe: "HD Universe",
    city: "Blaine County",
    role: "Protagonista",
    category: "Protagonistas",
    biography: "Ex-piloto e criminoso imprevisivel, fundador da Trevor Philips Enterprises, marcado pela traicao percebida de Michael.",
    storyArc: "Sai do isolamento violento em Blaine County para reencontrar Michael e encarar a verdade sobre North Yankton.",
    relationships: ["Michael De Santa: ex-parceiro", "Ron Jakowski: aliado", "Wade Hebert: seguidor", "Johnny Klebitz: vitima"],
    affiliations: ["Trevor Philips Enterprises", "equipe de assaltos"],
    enemies: ["Lost MC", "Merryweather", "Wei Cheng", "Devin Weston"],
    fate: "Vivo na Opcao C; morto em finais alternativos.",
    importance: "Principal",
    tags: ["protagonista", "caos", "Blaine County"]
  },
  {
    id: "lucia-caminos",
    name: "Lucia Caminos",
    aliases: ["Lucia"],
    games: ["Grand Theft Auto VI"],
    universe: "HD Universe",
    city: "Leonida",
    role: "Protagonista",
    category: "GTA VI",
    biography: "Protagonista de GTA VI. Material oficial indica passado ligado ao Leonida Penitentiary e desejo de conquistar a boa vida sonhada por sua mae desde Liberty City.",
    storyArc: "Nao confirmado. A sinopse oficial a coloca ao lado de Jason depois que um servico da errado.",
    relationships: ["Jason Duval: parceiro central", "familia: mencionada no material oficial"],
    affiliations: ["Nao confirmado"],
    enemies: ["Nao confirmado"],
    fate: "Nao confirmado; jogo ainda nao lancado.",
    importance: "Principal",
    tags: ["protagonista", "GTA VI", "Leonida", "nao confirmado"]
  },
  {
    id: "jason-duval",
    name: "Jason Duval",
    aliases: ["Jason"],
    games: ["Grand Theft Auto VI"],
    universe: "HD Universe",
    city: "Leonida",
    role: "Protagonista",
    category: "GTA VI",
    biography: "Protagonista de GTA VI. O material oficial o apresenta como parceiro de Lucia numa historia de risco, crime e dependencia mutua.",
    storyArc: "Nao confirmado alem da premissa oficial do golpe que da errado e da conspiracao em Leonida.",
    relationships: ["Lucia Caminos: parceira central"],
    affiliations: ["Nao confirmado"],
    enemies: ["Nao confirmado"],
    fate: "Nao confirmado; jogo ainda nao lancado.",
    importance: "Principal",
    tags: ["protagonista", "GTA VI", "Leonida", "nao confirmado"]
  },
  {
    id: "online-protagonist",
    name: "Protagonista de GTA Online",
    aliases: ["Online Player", "Seu personagem"],
    games: ["Grand Theft Auto Online"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Protagonista customizavel",
    category: "GTA Online",
    biography: "Criminoso criado pelo jogador que chega a Los Santos e sobe de trabalhos pequenos para imperio criminal multiempresarial.",
    storyArc: "Evolui de novato para dono de apartamento, CEO, presidente de MC, operador de bunker, dono de nightclub, infiltrado em Cayo Perico e agente de contratos VIP.",
    relationships: ["Lamar Davis: contato inicial", "Lester Crest: mentor de assaltos", "Franklin Clinton: parceiro em The Contract", "Tony Prince: nightlife"],
    affiliations: ["Organizacao de jogador", "MC", "Agency", "Nightclub", "Arcade", "Bunker"],
    enemies: ["jogadores rivais", "Merryweather", "El Rubio", "Duggans"],
    fate: "Persistente e aberto, conforme atualizacoes.",
    importance: "Principal",
    tags: ["protagonista", "online", "CEO", "MC"]
  },
  {
    id: "roman-bellic",
    name: "Roman Bellic",
    aliases: ["Cousin Roman"],
    games: ["Grand Theft Auto IV"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Aliado",
    category: "Aliados",
    biography: "Primo de Niko, dono de taxi e vendedor compulsivo do sonho americano.",
    storyArc: "Suas mentiras levam Niko a Liberty, mas sua lealdade emocional sustenta a historia.",
    relationships: ["Niko Bellic: primo", "Mallorie Bardas: parceira", "Vlad Glebov: agiota abusivo"],
    affiliations: ["Roman's Taxi"],
    enemies: ["agiotas", "Vlad Glebov", "Dimitri Rascalov"],
    fate: "Pode morrer no final Deal; vive no final Revenge.",
    importance: "Alto",
    tags: ["aliado", "familia", "imigracao"]
  },
  {
    id: "little-jacob",
    name: "Little Jacob",
    aliases: ["Jacob Hughes"],
    games: ["Grand Theft Auto IV"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Aliado",
    category: "Aliados",
    biography: "Armeiro jamaicano e um dos aliados mais confiaveis de Niko.",
    storyArc: "Ajuda Niko em operacoes decisivas e permanece leal quando quase todos os demais falham.",
    relationships: ["Niko Bellic: aliado", "Real Badman: parceiro"],
    affiliations: ["Yardies / comunidade jamaicana"],
    enemies: ["gangues rivais"],
    fate: "Vivo.",
    importance: "Alto",
    tags: ["aliado", "Yardies"]
  },
  {
    id: "brucie-kibbutz",
    name: "Brucie Kibbutz",
    aliases: ["Brucie"],
    games: ["Grand Theft Auto IV", "Grand Theft Auto Online"],
    universe: "HD Universe",
    city: "Liberty City / Los Santos",
    role: "Aliado comico",
    category: "Aliados",
    biography: "Empresario de carros, fitness e ego inflado, envolvido em corridas e negocios duvidosos.",
    storyArc: "Serve como satira de masculinidade performatica e cultura de autoajuda agressiva.",
    relationships: ["Niko Bellic: contato", "Mori Kibbutz: irmao"],
    affiliations: ["Brucie's Executive Lifestyle Autos"],
    enemies: ["rivais pessoais"],
    fate: "Vivo; reaparece em GTA Online.",
    importance: "Medio",
    tags: ["aliado", "empresario", "satira"]
  },
  {
    id: "packie-mcreary",
    name: "Packie McReary",
    aliases: ["Patrick McReary"],
    games: ["Grand Theft Auto IV", "Grand Theft Auto V", "Grand Theft Auto Online"],
    universe: "HD Universe",
    city: "Liberty City / Los Santos",
    role: "Aliado",
    category: "Aliados",
    biography: "Membro da familia McReary, assaltante experiente e ponte de Niko com o crime irlandes.",
    storyArc: "Participa de assaltos importantes em IV e pode ser recrutado para golpes em V/Online.",
    relationships: ["Kate McReary: irma", "Niko Bellic: parceiro", "Derrick e Gerry: irmaos"],
    affiliations: ["McReary Family"],
    enemies: ["mafias rivais", "policia"],
    fate: "Vivo se recrutado em GTA V/Online.",
    importance: "Alto",
    tags: ["aliado", "mafia", "assalto"]
  },
  {
    id: "kate-mcreary",
    name: "Kate McReary",
    aliases: ["Kate"],
    games: ["Grand Theft Auto IV"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Aliada / interesse romantico",
    category: "Aliados",
    biography: "Irma de Packie, tenta manter distancia moral da criminalidade da familia.",
    storyArc: "Representa a chance de Niko escolher uma vida menos corrompida.",
    relationships: ["Niko Bellic: possivel romance", "Packie McReary: irmao"],
    affiliations: ["McReary Family"],
    enemies: ["violencia do submundo"],
    fate: "Pode morrer no final Revenge; vive no final Deal.",
    importance: "Medio",
    tags: ["aliado", "familia", "drama"]
  },
  {
    id: "mallorie-bardas",
    name: "Mallorie Bardas",
    aliases: ["Mallorie"],
    games: ["Grand Theft Auto IV"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Aliada",
    category: "Aliados",
    biography: "Parceira de Roman, trabalha para manter alguma estabilidade em meio ao caos.",
    storyArc: "E uma das poucas figuras civis que mostram o custo emocional das escolhas de Niko e Roman.",
    relationships: ["Roman Bellic: parceiro", "Niko Bellic: familia ampliada", "Vlad Glebov: abusador"],
    affiliations: ["Roman's Taxi"],
    enemies: ["Vlad Glebov"],
    fate: "Viva; destino afetado pelas escolhas finais de GTA IV.",
    importance: "Medio",
    tags: ["aliado", "familia"]
  },
  {
    id: "lester-crest",
    name: "Lester Crest",
    aliases: ["Lester"],
    games: ["Grand Theft Auto V", "Grand Theft Auto Online"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Planejador de assaltos",
    category: "Aliados",
    biography: "Hacker e estrategista paranoico, velho contato de Michael e peca-chave dos assaltos.",
    storyArc: "Volta da aposentadoria informal para arquitetar golpes cada vez maiores, depois vira operador central de Online.",
    relationships: ["Michael: antigo parceiro", "Franklin e Trevor: equipe", "Georgina Cheng: aliada em Online"],
    affiliations: ["equipe de assaltos", "Arcade operations"],
    enemies: ["FIB", "IAA", "Merryweather", "Duggans"],
    fate: "Vivo.",
    importance: "Alto",
    tags: ["aliado", "hacker", "assalto", "online"]
  },
  {
    id: "lamar-davis",
    name: "Lamar Davis",
    aliases: ["LD"],
    games: ["Grand Theft Auto V", "Grand Theft Auto Online"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Aliado / amigo de rua",
    category: "Aliados",
    biography: "Melhor amigo de Franklin, impulsivo, engraçado e preso a uma visao romantizada de gangue.",
    storyArc: "Sua lealdade e imprudencia puxam Franklin de volta para conflitos de rua.",
    relationships: ["Franklin Clinton: amigo", "Stretch: rivalidade", "Families: rede local"],
    affiliations: ["Families", "LD Organics"],
    enemies: ["Ballas", "Stretch"],
    fate: "Vivo e ativo em GTA Online.",
    importance: "Alto",
    tags: ["aliado", "gangue", "online"]
  },
  {
    id: "amanda-de-santa",
    name: "Amanda De Santa",
    aliases: ["Amanda Townley"],
    games: ["Grand Theft Auto V"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Familia",
    category: "Aliados",
    biography: "Esposa de Michael, ex-stripper, presa num casamento de dinheiro, traicao e ressentimento.",
    storyArc: "Expõe o vazio suburbano de Michael e a familia como campo de batalha emocional.",
    relationships: ["Michael: marido", "Jimmy e Tracey: filhos"],
    affiliations: ["familia De Santa"],
    enemies: ["crise familiar"],
    fate: "Viva.",
    importance: "Medio",
    tags: ["familia", "aliado"]
  },
  {
    id: "jimmy-de-santa",
    name: "Jimmy De Santa",
    aliases: ["James"],
    games: ["Grand Theft Auto V"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Familia",
    category: "Aliados",
    biography: "Filho de Michael, satira de gamer mimado e juventude sem rumo.",
    storyArc: "Sua relacao com Michael revela fracasso paterno, dependencia e tentativa tardia de reconciliacao.",
    relationships: ["Michael: pai", "Amanda: mae", "Tracey: irma"],
    affiliations: ["familia De Santa"],
    enemies: ["auto-sabotagem"],
    fate: "Vivo.",
    importance: "Medio",
    tags: ["familia", "satira"]
  },
  {
    id: "tracey-de-santa",
    name: "Tracey De Santa",
    aliases: ["Tracey"],
    games: ["Grand Theft Auto V"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Familia",
    category: "Aliados",
    biography: "Filha de Michael, obcecada por fama e reality shows.",
    storyArc: "Mostra a satira da cultura de celebridade e a incapacidade de Michael lidar com a propria familia.",
    relationships: ["Michael: pai", "Amanda: mae", "Jimmy: irmao"],
    affiliations: ["familia De Santa"],
    enemies: ["industria exploradora de celebridade"],
    fate: "Viva.",
    importance: "Medio",
    tags: ["familia", "celebridade"]
  },
  {
    id: "dave-norton",
    name: "Dave Norton",
    aliases: ["Dave"],
    games: ["Grand Theft Auto V"],
    universe: "HD Universe",
    city: "Los Santos / North Yankton",
    role: "Agente federal",
    category: "Governo/Polícia",
    biography: "Agente do FIB ligado ao acordo que permitiu Michael fingir a propria morte.",
    storyArc: "Tenta equilibrar autopreservacao, carreira e a bomba-relógio chamada Michael.",
    relationships: ["Michael: protegido e problema", "Steve Haines: superior toxico"],
    affiliations: ["FIB"],
    enemies: ["IAA", "criminosos que ameacam o acordo"],
    fate: "Vivo na Opcao C.",
    importance: "Alto",
    tags: ["governo", "FIB", "policia corrupta"]
  },
  {
    id: "steve-haines",
    name: "Steve Haines",
    aliases: ["Haines"],
    games: ["Grand Theft Auto V"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Antagonista federal",
    category: "Governo/Polícia",
    biography: "Agente do FIB e apresentador de TV, usa Michael, Franklin e Trevor como ativos descartaveis.",
    storyArc: "Sua ambicao e guerra institucional contra a IAA levam o trio a missoes sujas.",
    relationships: ["Dave Norton: subordinado", "Michael/Trevor/Franklin: chantagem"],
    affiliations: ["FIB"],
    enemies: ["IAA", "protagonistas"],
    fate: "Morto na Opcao C.",
    importance: "Alto",
    tags: ["antagonista", "governo", "FIB", "policia corrupta"]
  },
  {
    id: "devin-weston",
    name: "Devin Weston",
    aliases: ["Devin"],
    games: ["Grand Theft Auto V"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Antagonista empresario",
    category: "Empresários",
    biography: "Bilionario, investidor e predador corporativo que explora Franklin e tenta eliminar o trio.",
    storyArc: "Personifica poder economico sem consequencia ate virar alvo da Opcao C.",
    relationships: ["Molly Schultz: assessora", "Merryweather: interesses", "Franklin: empregado descartavel"],
    affiliations: ["Weston holdings", "Merryweather connections"],
    enemies: ["Michael", "Franklin", "Trevor"],
    fate: "Morto na Opcao C.",
    importance: "Alto",
    tags: ["antagonista", "empresario", "capitalismo"]
  },
  {
    id: "martin-madrazo",
    name: "Martin Madrazo",
    aliases: ["Madrazo"],
    games: ["Grand Theft Auto V", "Grand Theft Auto Online"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Chefe de cartel",
    category: "Máfia",
    biography: "Capo mexicano em Los Santos, poderoso, temperamental e cercado por negocios violentos.",
    storyArc: "Entra em conflito com Michael, depois vira contato recorrente de negocios em Online.",
    relationships: ["Patricia Madrazo: esposa", "Miguel Madrazo: filho", "Michael/Trevor: conflito"],
    affiliations: ["Madrazo Cartel"],
    enemies: ["rivais de cartel", "protagonistas quando contrariados"],
    fate: "Vivo.",
    importance: "Alto",
    tags: ["máfia", "cartel", "online"]
  },
  {
    id: "ron-jakowski",
    name: "Ron Jakowski",
    aliases: ["Nervous Ron"],
    games: ["Grand Theft Auto V", "Grand Theft Auto Online"],
    universe: "HD Universe",
    city: "Blaine County",
    role: "Aliado",
    category: "Aliados",
    biography: "Paranoico, teorico da conspiracao e braço logistico de Trevor.",
    storyArc: "Ajuda Trevor em armas, aviacao e negocios, reaparecendo em Online.",
    relationships: ["Trevor Philips: chefe/amigo", "Wade: associado"],
    affiliations: ["Trevor Philips Enterprises", "smuggling operations"],
    enemies: ["Lost MC", "rivais de trafico"],
    fate: "Vivo.",
    importance: "Medio",
    tags: ["aliado", "Blaine County", "online"]
  },
  {
    id: "wade-hebert",
    name: "Wade Hebert",
    aliases: ["Wade"],
    games: ["Grand Theft Auto V"],
    universe: "HD Universe",
    city: "Blaine County / Los Santos",
    role: "Aliado",
    category: "Aliados",
    biography: "Seguidor ingênuo de Trevor, usado como apoio e alivio sombrio.",
    storyArc: "Acompanha Trevor ate Los Santos sem entender totalmente a violencia ao redor.",
    relationships: ["Trevor Philips: lider", "Floyd Hebert: primo"],
    affiliations: ["Trevor Philips Enterprises"],
    enemies: ["quem Trevor aponta"],
    fate: "Vivo.",
    importance: "Baixo",
    tags: ["aliado", "caos"]
  },
  {
    id: "ken-rosenberg",
    name: "Ken Rosenberg",
    aliases: ["Ken"],
    games: ["Grand Theft Auto: Vice City", "Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Vice City / Las Venturas",
    role: "Advogado e aliado",
    category: "Aliados",
    biography: "Advogado nervoso de Vice City, contato inicial de Tommy e depois figura ligada aos cassinos de Las Venturas.",
    storyArc: "De advogado de porta de cadeia a mediador entre criminosos maiores que ele.",
    relationships: ["Tommy Vercetti: cliente", "Kent Paul: amigo", "CJ: aliado em Las Venturas"],
    affiliations: ["Vercetti Organization", "Caligula's Casino"],
    enemies: ["pressao mafiosa"],
    fate: "Vivo em San Andreas; futuro posterior nao confirmado.",
    importance: "Alto",
    tags: ["aliado", "advogado", "mafia"]
  },
  {
    id: "lance-vance",
    name: "Lance Vance",
    aliases: ["Lance"],
    games: ["Grand Theft Auto: Vice City", "Grand Theft Auto: Vice City Stories"],
    universe: "3D Universe",
    city: "Vice City",
    role: "Aliado que vira antagonista",
    category: "Antagonistas",
    biography: "Irmao de Vic, charmoso e ambicioso, incapaz de aceitar papel secundario.",
    storyArc: "Ajuda Vic e Tommy, mas em 1986 trai Tommy por ressentimento e poder.",
    relationships: ["Vic Vance: irmao", "Tommy Vercetti: aliado/inimigo", "Ricardo Diaz: alvo"],
    affiliations: ["Vance Crime Family", "Vercetti Organization"],
    enemies: ["Tommy Vercetti"],
    fate: "Morto por Tommy no final de Vice City.",
    importance: "Alto",
    tags: ["traidor", "Vice City", "antagonista"]
  },
  {
    id: "sonny-forelli",
    name: "Sonny Forelli",
    aliases: ["Sonny"],
    games: ["Grand Theft Auto: Vice City"],
    universe: "3D Universe",
    city: "Liberty City / Vice City",
    role: "Antagonista",
    category: "Máfia",
    biography: "Chefe da Forelli Family que envia Tommy para Vice City e tenta manter controle sobre ele.",
    storyArc: "Subestima Tommy e paga por tentar cobrar a divida pessoalmente.",
    relationships: ["Tommy Vercetti: ex-soldado", "Lance Vance: aliado final"],
    affiliations: ["Forelli Family"],
    enemies: ["Tommy Vercetti"],
    fate: "Morto por Tommy.",
    importance: "Alto",
    tags: ["antagonista", "máfia", "Forelli"]
  },
  {
    id: "ricardo-diaz",
    name: "Ricardo Diaz",
    aliases: ["Diaz"],
    games: ["Grand Theft Auto: Vice City", "Grand Theft Auto: Vice City Stories"],
    universe: "3D Universe",
    city: "Vice City",
    role: "Antagonista / chefe de drogas",
    category: "Máfia",
    biography: "Traficante paranoico e rico, dono de mansao e influencia em Vice City.",
    storyArc: "Parece aliado util ate Tommy e Lance tomarem seu imperio.",
    relationships: ["Tommy Vercetti: executor/assassino", "Lance Vance: rival", "Colonel Cortez: rede criminal"],
    affiliations: ["Diaz Organization"],
    enemies: ["Tommy Vercetti", "Lance Vance"],
    fate: "Morto por Tommy e Lance.",
    importance: "Alto",
    tags: ["antagonista", "cartel", "Vice City"]
  },
  {
    id: "colonel-cortez",
    name: "Colonel Cortez",
    aliases: ["Juan Cortez"],
    games: ["Grand Theft Auto: Vice City"],
    universe: "3D Universe",
    city: "Vice City",
    role: "Aliado / intermediario",
    category: "Aliados",
    biography: "Figura militar e traficante sofisticado, conectado a diplomacia, armas e informacoes.",
    storyArc: "Ajuda Tommy a entender o submundo e deixa Vice City sob fogo inimigo.",
    relationships: ["Tommy Vercetti: aliado", "Mercedes Cortez: filha", "Ricardo Diaz: contato"],
    affiliations: ["redes militares e traficantes"],
    enemies: ["forcas que o perseguem"],
    fate: "Escapa de Vice City.",
    importance: "Medio",
    tags: ["aliado", "governo", "tráfico"]
  },
  {
    id: "avery-carrington",
    name: "Avery Carrington",
    aliases: ["Avery"],
    games: ["Grand Theft Auto: Vice City", "Grand Theft Auto: Liberty City Stories"],
    universe: "3D Universe",
    city: "Vice City / Liberty City",
    role: "Empresario imobiliario",
    category: "Empresários",
    biography: "Magnata imobiliario texano que transforma violencia em valorizacao de terreno.",
    storyArc: "Ensina Tommy a usar caos urbano como ferramenta de negocio; em LCS seu destino e selado por disputas de poder.",
    relationships: ["Tommy Vercetti: contratado", "Donald Love: aprendiz/associado"],
    affiliations: ["desenvolvimento imobiliario"],
    enemies: ["rivais imobiliarios"],
    fate: "Morto em Liberty City Stories.",
    importance: "Medio",
    tags: ["empresario", "corrupcao", "imobiliario"]
  },
  {
    id: "kent-paul",
    name: "Kent Paul",
    aliases: ["Kent"],
    games: ["Grand Theft Auto: Vice City", "Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Vice City / San Andreas",
    role: "Contato musical e informante",
    category: "Aliados",
    biography: "Britanico ligado a cena musical e fofocas do submundo.",
    storyArc: "Serve como ponte entre celebridade, drogas e crime, reaparecendo no arco de Las Venturas.",
    relationships: ["Tommy Vercetti: contato", "Ken Rosenberg: amigo", "Maccer: associado"],
    affiliations: ["industria musical", "Caligula's orbit"],
    enemies: ["mafiosos irritados"],
    fate: "Vivo.",
    importance: "Medio",
    tags: ["aliado", "música", "satira"]
  },
  {
    id: "salvatore-leone",
    name: "Salvatore Leone",
    aliases: ["Don Salvatore"],
    games: ["Grand Theft Auto III", "Grand Theft Auto: Liberty City Stories", "Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Chefe mafioso",
    category: "Máfia",
    biography: "Patriarca da Leone Family, paranoico, autoritario e central para a mafia de Liberty.",
    storyArc: "Aparece poderoso em prequels, mas sua paranoia contra Claude leva a propria queda.",
    relationships: ["Maria Latore: esposa", "Joey Leone: filho", "Toni Cipriani: soldado", "Claude: executor e assassino"],
    affiliations: ["Leone Family"],
    enemies: ["Yakuza", "Sindacco", "Forelli", "Claude"],
    fate: "Morto por Claude em GTA III.",
    importance: "Alto",
    tags: ["máfia", "antagonista", "Leone"]
  },
  {
    id: "maria-latore",
    name: "Maria Latore",
    aliases: ["Maria"],
    games: ["Grand Theft Auto III", "Grand Theft Auto: Liberty City Stories"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Aliada ambigua",
    category: "Aliados",
    biography: "Esposa de Salvatore, impulsiva e perigosa por sua capacidade de mover homens poderosos.",
    storyArc: "Ajuda Claude a escapar da Leone Family e se aproxima da Yakuza.",
    relationships: ["Salvatore Leone: marido", "Claude: protegido/obsessao", "Asuka Kasen: contato"],
    affiliations: ["Leone Family", "Yakuza por associacao"],
    enemies: ["Salvatore Leone"],
    fate: "Sobrevive ao final de GTA III; a cena final e ambigua em tom, nao em confirmacao visual.",
    importance: "Alto",
    tags: ["aliado", "mafia", "ambigua"]
  },
  {
    id: "joey-leone",
    name: "Joey Leone",
    aliases: ["Joey"],
    games: ["Grand Theft Auto III"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Mafioso / mecanico",
    category: "Máfia",
    biography: "Filho de Salvatore, opera garagem e tarefas para a Leone Family.",
    storyArc: "Fornece missões a Claude e mostra a camada operacional da mafia.",
    relationships: ["Salvatore Leone: pai", "Toni Cipriani: associado", "Claude: executor"],
    affiliations: ["Leone Family"],
    enemies: ["Triads", "rivais locais"],
    fate: "Vivo; futuro posterior nao confirmado.",
    importance: "Medio",
    tags: ["máfia", "Leone"]
  },
  {
    id: "donald-love",
    name: "Donald Love",
    aliases: ["Donald"],
    games: ["Grand Theft Auto III", "Grand Theft Auto: Liberty City Stories", "Grand Theft Auto: Vice City"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Empresario e politico",
    category: "Empresários",
    biography: "Magnata, canibal implicito por humor sombrio e operador politico de interesses imobiliarios.",
    storyArc: "Usa conflitos criminosos para lucrar e desaparece misteriosamente em GTA III.",
    relationships: ["Avery Carrington: mentor", "Claude: executor", "Toni Cipriani: ferramenta"],
    affiliations: ["Love Media", "interesses politicos"],
    enemies: ["rivais imobiliarios"],
    fate: "Desaparece em GTA III; destino nao confirmado.",
    importance: "Alto",
    tags: ["empresario", "politica", "easter egg"]
  },
  {
    id: "catalina",
    name: "Catalina",
    aliases: ["Catalina"],
    games: ["Grand Theft Auto III", "Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "San Andreas / Liberty City",
    role: "Antagonista",
    category: "Antagonistas",
    biography: "Criminosa volatil, parceira temporaria de CJ em San Andreas e traidora de Claude em GTA III.",
    storyArc: "Sai de assaltante caotica na zona rural para lider do Cartel Colombiano em Liberty.",
    relationships: ["Claude: ex-parceiro traido", "CJ: ex-namorado", "Miguel: parceiro em GTA III"],
    affiliations: ["Colombian Cartel", "assaltos independentes"],
    enemies: ["Claude", "CJ por ruptura pessoal"],
    fate: "Morta por Claude no final de GTA III.",
    importance: "Alto",
    tags: ["antagonista", "traidora", "cartel"]
  },
  {
    id: "miguel",
    name: "Miguel",
    aliases: ["Miguel"],
    games: ["Grand Theft Auto III"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Cartel",
    category: "Máfia",
    biography: "Parceiro de Catalina no Cartel Colombiano, envolvido na traicao contra Claude.",
    storyArc: "Torna-se peao torturado na guerra entre Catalina, Asuka e Claude.",
    relationships: ["Catalina: parceira", "Asuka Kasen: inimiga", "Claude: alvo"],
    affiliations: ["Colombian Cartel"],
    enemies: ["Claude", "Yakuza"],
    fate: "Morto durante os eventos finais de GTA III.",
    importance: "Medio",
    tags: ["cartel", "antagonista"]
  },
  {
    id: "asuka-kasen",
    name: "Asuka Kasen",
    aliases: ["Asuka"],
    games: ["Grand Theft Auto III"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Lider Yakuza",
    category: "Máfia",
    biography: "Figura poderosa da Yakuza em Liberty City, fria, teatral e vingativa.",
    storyArc: "Ajuda Claude contra os Leone e o Cartel, mas a guerra a alcança.",
    relationships: ["Kenji Kasen: irmao", "Maria Latore: aliada", "Claude: executor"],
    affiliations: ["Yakuza"],
    enemies: ["Leone Family", "Colombian Cartel"],
    fate: "Morta por Catalina.",
    importance: "Alto",
    tags: ["máfia", "Yakuza", "aliado"]
  },
  {
    id: "kenji-kasen",
    name: "Kenji Kasen",
    aliases: ["Kenji"],
    games: ["Grand Theft Auto III"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Lider Yakuza",
    category: "Máfia",
    biography: "Irmao de Asuka e figura de comando da Yakuza.",
    storyArc: "Sua morte por Claude, disfarçada para incriminar o Cartel, amplia a guerra.",
    relationships: ["Asuka Kasen: irma", "Claude: executor secreto"],
    affiliations: ["Yakuza"],
    enemies: ["Colombian Cartel", "Leone Family"],
    fate: "Morto por Claude em missao de Donald Love.",
    importance: "Medio",
    tags: ["máfia", "Yakuza"]
  },
  {
    id: "8-ball",
    name: "8-Ball",
    aliases: ["8-Ball"],
    games: ["Grand Theft Auto III", "Grand Theft Auto Advance", "Grand Theft Auto: Liberty City Stories"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Explosivista",
    category: "Aliados",
    biography: "Especialista em explosivos que escapa com Claude no inicio de GTA III.",
    storyArc: "Apoia a entrada de Claude no submundo e liga varios jogos de Liberty.",
    relationships: ["Claude: aliado", "Mike: contato"],
    affiliations: ["rede de explosivos independente"],
    enemies: ["policia", "rivais locais"],
    fate: "Vivo; futuro nao confirmado.",
    importance: "Medio",
    tags: ["aliado", "explosivos"]
  },
  {
    id: "big-smoke",
    name: "Big Smoke",
    aliases: ["Melvin Harris"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Los Santos",
    role: "Antagonista",
    category: "Antagonistas",
    biography: "Membro da Grove Street que se alia a Tenpenny, Ballas e trafico para buscar poder pessoal.",
    storyArc: "Amigo comico vira simbolo da traicao que destruiu Grove Street.",
    relationships: ["CJ: amigo traido", "Ryder: cúmplice", "Tenpenny: parceiro corrupto"],
    affiliations: ["Grove Street Families", "Ballas por acordo", "C.R.A.S.H."],
    enemies: ["CJ", "Sweet", "Grove Street"],
    fate: "Morto por CJ.",
    importance: "Alto",
    tags: ["antagonista", "traidor", "gangue"]
  },
  {
    id: "ryder",
    name: "Ryder",
    aliases: ["Lance Wilson"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Los Santos",
    role: "Antagonista / ex-aliado",
    category: "Antagonistas",
    biography: "Membro da Grove Street, agressivo e debochado, envolvido na traicao ao lado de Big Smoke.",
    storyArc: "De amigo de infancia a alvo de CJ em San Fierro.",
    relationships: ["CJ: amigo/inimigo", "Big Smoke: cúmplice", "T-Bone Mendez: contato"],
    affiliations: ["Grove Street Families", "Loco Syndicate"],
    enemies: ["CJ", "Cesar Vialpando"],
    fate: "Morto por CJ.",
    importance: "Alto",
    tags: ["antagonista", "traidor", "gangue"]
  },
  {
    id: "sweet-johnson",
    name: "Sweet Johnson",
    aliases: ["Sean Johnson"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Los Santos",
    role: "Aliado / lider de gangue",
    category: "Gangues",
    biography: "Irmao de CJ e lider da Grove Street Families, rigidamente leal ao bairro.",
    storyArc: "Desconfia de CJ, e preso, depois retorna para reconquistar Grove Street.",
    relationships: ["CJ: irmao", "Kendl: irma", "Grove Street: familia de rua"],
    affiliations: ["Grove Street Families"],
    enemies: ["Ballas", "Tenpenny", "Big Smoke"],
    fate: "Vivo.",
    importance: "Alto",
    tags: ["aliado", "gangue", "familia"]
  },
  {
    id: "kendl-johnson",
    name: "Kendl Johnson",
    aliases: ["Kendl"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Los Santos",
    role: "Aliada",
    category: "Aliados",
    biography: "Irma de CJ e Sweet, mais pragmatica e independente que os irmaos.",
    storyArc: "Seu relacionamento com Cesar ajuda a unir CJ a novas aliancas.",
    relationships: ["CJ: irmao", "Sweet: irmao", "Cesar Vialpando: namorado"],
    affiliations: ["familia Johnson"],
    enemies: ["pressao das gangues"],
    fate: "Viva.",
    importance: "Medio",
    tags: ["aliado", "familia"]
  },
  {
    id: "cesar-vialpando",
    name: "Cesar Vialpando",
    aliases: ["Cesar"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Los Santos / San Fierro",
    role: "Aliado",
    category: "Gangues",
    biography: "Lider dos Varrios Los Aztecas e namorado de Kendl.",
    storyArc: "Prova lealdade a CJ ao revelar a traicao de Smoke e Ryder.",
    relationships: ["CJ: aliado", "Kendl: namorada", "Woozie: rede posterior"],
    affiliations: ["Varrios Los Aztecas", "garage network"],
    enemies: ["Vagos", "Ballas", "Loco Syndicate"],
    fate: "Vivo.",
    importance: "Alto",
    tags: ["aliado", "gangue", "Aztecas"]
  },
  {
    id: "woozie",
    name: "Wu Zi Mu / Woozie",
    aliases: ["Woozie"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "San Fierro / Las Venturas",
    role: "Aliado / lider Triad",
    category: "Máfia",
    biography: "Lider Triad respeitado, cego, estrategista e parceiro de CJ.",
    storyArc: "Ajuda CJ em San Fierro e Las Venturas, especialmente no Four Dragons Casino.",
    relationships: ["CJ: parceiro", "Triads: lideranca"],
    affiliations: ["Mountain Cloud Boys", "Four Dragons Casino"],
    enemies: ["Da Nang Boys", "Sindacco interests"],
    fate: "Vivo.",
    importance: "Alto",
    tags: ["aliado", "Triads", "máfia"]
  },
  {
    id: "mike-toreno",
    name: "Mike Toreno",
    aliases: ["Toreno"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "San Andreas",
    role: "Agente governamental",
    category: "Governo/Polícia",
    biography: "Agente secreto ligado a operacoes clandestinas, apresentado como parte do Loco Syndicate.",
    storyArc: "De possivel inimigo a manipulador que usa CJ em missoes de inteligencia e promete libertar Sweet.",
    relationships: ["CJ: ativo forçado", "Loco Syndicate: cobertura"],
    affiliations: ["agencia governamental nao nomeada"],
    enemies: ["ameacas a operacoes clandestinas"],
    fate: "Vivo.",
    importance: "Alto",
    tags: ["governo", "aliado", "conspiracao"]
  },
  {
    id: "the-truth",
    name: "The Truth",
    aliases: ["The Truth"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "San Andreas",
    role: "Aliado excêntrico",
    category: "Aliados",
    biography: "Hippie conspiracionista, ligado a cultivos, teorias e contatos improvaveis.",
    storyArc: "Ajuda CJ a sair do isolamento rural e o conecta a San Fierro.",
    relationships: ["CJ: aliado", "Kent Paul e Maccer: contatos"],
    affiliations: ["contracultura", "redes independentes"],
    enemies: ["governo como ideia recorrente"],
    fate: "Vivo.",
    importance: "Medio",
    tags: ["aliado", "contracultura"]
  },
  {
    id: "frank-tenpenny",
    name: "Frank Tenpenny",
    aliases: ["Officer Tenpenny"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Los Santos",
    role: "Antagonista policial",
    category: "Governo/Polícia",
    biography: "Policial corrupto da C.R.A.S.H., manipula CJ e alimenta o caos das gangues.",
    storyArc: "Usa o sistema para lucrar e controlar narrativas ate a cidade explodir em revolta.",
    relationships: ["Pulaski: cúmplice", "Hernandez: subordinado", "CJ: chantageado"],
    affiliations: ["C.R.A.S.H.", "LSPD"],
    enemies: ["CJ", "Grove Street"],
    fate: "Morre apos perseguição final.",
    importance: "Alto",
    tags: ["antagonista", "polícia corrupta", "governo"]
  },
  {
    id: "eddie-pulaski",
    name: "Eddie Pulaski",
    aliases: ["Pulaski"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Los Santos",
    role: "Policial corrupto",
    category: "Governo/Polícia",
    biography: "Parceiro brutal de Tenpenny na C.R.A.S.H.",
    storyArc: "Executa a violencia direta da corrupcao policial ate ser confrontado por CJ.",
    relationships: ["Tenpenny: parceiro", "Hernandez: colega intimidado"],
    affiliations: ["C.R.A.S.H.", "LSPD"],
    enemies: ["CJ", "Hernandez"],
    fate: "Morto por CJ.",
    importance: "Medio",
    tags: ["polícia corrupta", "antagonista"]
  },
  {
    id: "jimmy-hernandez",
    name: "Jimmy Hernandez",
    aliases: ["Hernandez"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Los Santos",
    role: "Policial",
    category: "Governo/Polícia",
    biography: "Membro mais jovem da C.R.A.S.H., pressionado entre cumplicidade e culpa.",
    storyArc: "Tenta colaborar contra Tenpenny e Pulaski, mas e esmagado pelo proprio grupo.",
    relationships: ["Tenpenny e Pulaski: superiores corruptos"],
    affiliations: ["C.R.A.S.H.", "LSPD"],
    enemies: ["Tenpenny", "Pulaski"],
    fate: "Morto por Pulaski.",
    importance: "Medio",
    tags: ["polícia", "governo", "tragico"]
  },
  {
    id: "madd-dogg",
    name: "Madd Dogg",
    aliases: ["Madd Dogg"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Los Santos / Las Venturas",
    role: "Celebridade",
    category: "Aliados",
    biography: "Rapper famoso cuja carreira e mansao sao afetadas por esquemas de CJ e OG Loc.",
    storyArc: "Cai em alcoolismo e tentativa de suicidio, depois e ajudado por CJ a reconstruir carreira.",
    relationships: ["CJ: inicialmente prejudicial, depois aliado", "OG Loc: imitador/rival"],
    affiliations: ["industria musical"],
    enemies: ["OG Loc"],
    fate: "Vivo e reabilitado.",
    importance: "Medio",
    tags: ["aliado", "celebridade", "música"]
  },
  {
    id: "zero",
    name: "Zero",
    aliases: ["Zero"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "San Fierro",
    role: "Aliado tecnico",
    category: "Aliados",
    biography: "Dono de loja de eletronicos e especialista em radio-controle, alvo da rivalidade com Berkley.",
    storyArc: "Ajuda CJ com tecnologia, ainda que suas missoes sejam lembradas pela dificuldade.",
    relationships: ["CJ: socio", "Berkley: rival"],
    affiliations: ["Zero RC"],
    enemies: ["Berkley"],
    fate: "Vivo.",
    importance: "Baixo",
    tags: ["aliado", "tecnologia"]
  },
  {
    id: "jizzy-b",
    name: "Jizzy B",
    aliases: ["Jizzy"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "San Fierro",
    role: "Antagonista / cafetao",
    category: "Antagonistas",
    biography: "Dono do Pleasure Domes e membro do Loco Syndicate.",
    storyArc: "Serve como entrada de CJ no sindicato de drogas em San Fierro.",
    relationships: ["T-Bone Mendez: parceiro", "Mike Toreno: socio oculto"],
    affiliations: ["Loco Syndicate"],
    enemies: ["CJ", "Cesar"],
    fate: "Morto por CJ.",
    importance: "Medio",
    tags: ["antagonista", "crime organizado"]
  },
  {
    id: "t-bone-mendez",
    name: "T-Bone Mendez",
    aliases: ["T-Bone"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "San Fierro",
    role: "Antagonista",
    category: "Antagonistas",
    biography: "Membro violento do Loco Syndicate e contato de Ryder.",
    storyArc: "Cai quando CJ e Cesar desmantelam a rede de San Fierro.",
    relationships: ["Ryder: associado", "Jizzy B: parceiro", "Mike Toreno: socio"],
    affiliations: ["San Fierro Rifa", "Loco Syndicate"],
    enemies: ["CJ", "Cesar"],
    fate: "Morto por CJ e Cesar.",
    importance: "Medio",
    tags: ["antagonista", "gangue", "Rifa"]
  },
  {
    id: "og-loc",
    name: "OG Loc",
    aliases: ["Jeffrey Cross"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Los Santos",
    role: "Comico / falso gangster",
    category: "Aliados",
    biography: "Aspirante a rapper que tenta construir imagem criminosa sem ter substancia.",
    storyArc: "Explora CJ para roubar a carreira de Madd Dogg, depois e exposto.",
    relationships: ["CJ: antigo amigo", "Madd Dogg: vitima", "Big Smoke: apoiador"],
    affiliations: ["Burger Shot", "industria musical fake"],
    enemies: ["Madd Dogg"],
    fate: "Vivo, humilhado.",
    importance: "Medio",
    tags: ["satira", "música"]
  },
  {
    id: "johnny-sindacco",
    name: "Johnny Sindacco",
    aliases: ["Johnny"],
    games: ["Grand Theft Auto: San Andreas", "Grand Theft Auto: Liberty City Stories"],
    universe: "3D Universe",
    city: "Las Venturas / Liberty City",
    role: "Mafioso",
    category: "Máfia",
    biography: "Membro da Sindacco Family ligado a cassinos e disputas mafiosas.",
    storyArc: "Sofre com os golpes de CJ em Las Venturas e reaparece fragilizado na guerra de Liberty.",
    relationships: ["Sindacco Family: familia", "CJ: inimigo"],
    affiliations: ["Sindacco Family"],
    enemies: ["Leone Family", "CJ"],
    fate: "Morto em Liberty City Stories.",
    importance: "Medio",
    tags: ["máfia", "Sindacco"]
  },
  {
    id: "billy-grey",
    name: "Billy Grey",
    aliases: ["Billy"],
    games: ["Grand Theft Auto IV: The Lost and Damned"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Antagonista",
    category: "Antagonistas",
    biography: "Presidente do The Lost MC, carismatico e destrutivo.",
    storyArc: "Retorna da reabilitacao e leva o clube a uma guerra que Johnny tenta impedir.",
    relationships: ["Johnny Klebitz: vice-presidente e rival", "Brian Jeremy: aliado"],
    affiliations: ["The Lost MC"],
    enemies: ["Johnny Klebitz", "Angels of Death"],
    fate: "Morto por Johnny.",
    importance: "Alto",
    tags: ["antagonista", "motoclube", "traidor"]
  },
  {
    id: "ashley-butler",
    name: "Ashley Butler",
    aliases: ["Ashley"],
    games: ["Grand Theft Auto IV: The Lost and Damned", "Grand Theft Auto V"],
    universe: "HD Universe",
    city: "Liberty City / Blaine County",
    role: "Aliada tragica",
    category: "Aliados",
    biography: "Ex de Johnny, presa a vicio e dividas, constantemente puxando o motoclube para problemas.",
    storyArc: "Sua dependencia e relacionamento com Johnny simbolizam a decadencia do The Lost.",
    relationships: ["Johnny Klebitz: ex", "Trevor Philips: envolvimento destrutivo"],
    affiliations: ["The Lost MC por associacao"],
    enemies: ["vicio", "violencia ao redor"],
    fate: "Destino posterior indicado de forma sombria em GTA V/Online; varia por material.",
    importance: "Medio",
    tags: ["tragico", "motoclube"]
  },
  {
    id: "tony-prince",
    name: "Tony Prince / Gay Tony",
    aliases: ["Gay Tony"],
    games: ["Grand Theft Auto IV: The Ballad of Gay Tony", "Grand Theft Auto Online"],
    universe: "HD Universe",
    city: "Liberty City / Los Santos",
    role: "Empresario da noite",
    category: "Empresários",
    biography: "Dono de clubes, celebridade da noite e figura endividada que depende de Luis para sobreviver.",
    storyArc: "Quase perde tudo em Liberty; reaparece em Online ajudando o jogador com nightclubs.",
    relationships: ["Luis Lopez: protetor", "Gracie Ancelotti: rede social", "jogador Online: socio"],
    affiliations: ["Maisonette 9", "Hercules", "Nightclubs"],
    enemies: ["credores", "Bulgarin", "Rocco"],
    fate: "Vivo e ativo em GTA Online.",
    importance: "Alto",
    tags: ["empresario", "online", "vida noturna"]
  },
  {
    id: "yusuf-amir",
    name: "Yusuf Amir",
    aliases: ["Yusuf"],
    games: ["Grand Theft Auto IV: The Ballad of Gay Tony", "Grand Theft Auto Online"],
    universe: "HD Universe",
    city: "Liberty City / Los Santos",
    role: "Empresario aliado",
    category: "Empresários",
    biography: "Bilionario imobiliario extravagante, fascinado por armas, helicópteros e excessos.",
    storyArc: "Ajuda Luis com recursos absurdos e reaparece como contato em negocios automotivos de Online.",
    relationships: ["Luis Lopez: aliado", "Amir family: riqueza", "jogador Online: contato"],
    affiliations: ["Amir interests"],
    enemies: ["rivais de negocio"],
    fate: "Vivo.",
    importance: "Medio",
    tags: ["empresario", "aliado", "online"]
  },
  {
    id: "mori-kibbutz",
    name: "Mori Kibbutz",
    aliases: ["Mori"],
    games: ["Grand Theft Auto IV: The Ballad of Gay Tony"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Antagonista menor",
    category: "Empresários",
    biography: "Irmao de Brucie, ainda mais agressivo e controlador.",
    storyArc: "Pressiona Luis em tarefas humilhantes e satiriza competitividade toxica.",
    relationships: ["Brucie Kibbutz: irmao", "Luis Lopez: alvo de exploracao"],
    affiliations: ["negocios pessoais"],
    enemies: ["Luis por conflito"],
    fate: "Vivo, derrotado simbolicamente.",
    importance: "Baixo",
    tags: ["empresario", "satira"]
  },
  {
    id: "ray-bulgarin",
    name: "Ray Bulgarin",
    aliases: ["Bulgarin"],
    games: ["Grand Theft Auto IV", "Grand Theft Auto IV: The Ballad of Gay Tony"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Antagonista",
    category: "Máfia",
    biography: "Criminoso russo ligado ao passado de Niko e aos conflitos de Luis.",
    storyArc: "Funciona como ponte entre trafico internacional, dividas e vinganca.",
    relationships: ["Niko Bellic: antigo inimigo", "Luis Lopez: alvo", "Timur: associado"],
    affiliations: ["Russian Mafia"],
    enemies: ["Niko Bellic", "Luis Lopez"],
    fate: "Morto nos eventos de The Ballad of Gay Tony.",
    importance: "Alto",
    tags: ["antagonista", "máfia russa"]
  },
  {
    id: "kenny-lee",
    name: "Wu 'Kenny' Lee",
    aliases: ["Kenny"],
    games: ["Grand Theft Auto: Chinatown Wars"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Antagonista",
    category: "Máfia",
    biography: "Tio de Huang, ambicioso e disposto a trair familia por poder.",
    storyArc: "Manipula a perda da Yu Jian e se revela traidor final.",
    relationships: ["Huang Lee: sobrinho", "Hsin Jaoming: superior"],
    affiliations: ["Triads"],
    enemies: ["Huang Lee"],
    fate: "Morto por Huang.",
    importance: "Alto",
    tags: ["antagonista", "Triads", "traidor"]
  },
  {
    id: "hsin-jaoming",
    name: "Hsin Jaoming",
    aliases: ["Hsin"],
    games: ["Grand Theft Auto: Chinatown Wars"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Lider Triad",
    category: "Máfia",
    biography: "Chefe das Triads em Liberty City, envelhecido, perigoso e preocupado com sucessao.",
    storyArc: "Testa Huang e tenta descobrir quem trai a organizacao.",
    relationships: ["Huang Lee: possivel sucessor", "Kenny Lee: subordinado traidor"],
    affiliations: ["Triads"],
    enemies: ["ratos internos", "gangues rivais"],
    fate: "Vivo ao final, com sucessao redefinida.",
    importance: "Medio",
    tags: ["máfia", "Triads"]
  },
  {
    id: "wade-heston",
    name: "Wade Heston",
    aliases: ["Detective Heston"],
    games: ["Grand Theft Auto: Chinatown Wars"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Policial corrupto / aliado",
    category: "Governo/Polícia",
    biography: "Detetive da LCPD com vicios, problemas disciplinares e utilidade investigativa.",
    storyArc: "Ajuda Huang por interesse proprio e por necessidade de limpar sua situacao.",
    relationships: ["Huang Lee: aliado pragmatico"],
    affiliations: ["LCPD"],
    enemies: ["corrupcao interna", "traficantes"],
    fate: "Vivo.",
    importance: "Medio",
    tags: ["polícia corrupta", "aliado"]
  }
];

const citiesData = [
  {
    id: "liberty-city",
    name: "Liberty City",
    realWorldInspiration: "Nova York",
    universeAppearances: ["2D Universe", "3D Universe", "HD Universe"],
    games: ["GTA 1", "GTA III", "Liberty City Stories", "GTA IV", "Chinatown Wars", "GTA Advance"],
    description:
      "A metropole de concreto da serie. Liberty concentra mafia, imigracao, corrupcao, ambicao imobiliaria, trauma e capitalismo urbano.",
    districts: ["Portland", "Staunton Island", "Shoreside Vale", "Broker", "Dukes", "Bohan", "Algonquin", "Alderney"],
    factions: ["Leone Family", "Yakuza", "Colombian Cartel", "Yardies", "Russian Mafia", "Triads", "Pegorino Family", "LCPD"],
    importantEvents: ["Traicao de Catalina", "queda de Salvatore Leone", "chegada de Niko Bellic", "guerra dos diamantes", "trama da Yu Jian"],
    characters: ["Claude", "Toni Cipriani", "Niko Bellic", "Huang Lee", "Salvatore Leone", "Roman Bellic"],
    visualStyle: "Concreto, chuva, pontes, metro, arranha-ceus, docas, bairros imigrantes e neon frio.",
    themes: ["mafia", "imigracao", "corrupcao", "capitalismo", "decadencia"]
  },
  {
    id: "vice-city",
    name: "Vice City",
    realWorldInspiration: "Miami",
    universeAppearances: ["2D Universe", "3D Universe", "HD Universe"],
    games: ["GTA 1", "Vice City", "Vice City Stories", "GTA VI"],
    description:
      "Cidade tropical da ambicao criminosa: praia, luxo, trafico, neon, cartois e vida noturna.",
    districts: ["Ocean Beach", "Washington Beach", "Vice Point", "Downtown", "Little Haiti", "Little Havana", "Starfish Island", "Vice City moderna"],
    factions: ["Forelli Family", "Diaz Organization", "Vance Crime Family", "Mendez Cartel", "Cubans", "Haitians", "grupos de GTA VI nao confirmados"],
    importantEvents: ["ascensao de Tommy Vercetti", "queda de Ricardo Diaz", "tragedia de Vic Vance", "retorno em GTA VI"],
    characters: ["Tommy Vercetti", "Vic Vance", "Lance Vance", "Ken Rosenberg", "Lucia Caminos", "Jason Duval"],
    visualStyle: "Palmeiras, art deco, rosa neon, azul piscina, carros esportivos, clubes, mansoes e calor umido.",
    themes: ["neon", "drogas", "luxo", "praia", "cartéis", "vida noturna"]
  },
  {
    id: "san-andreas",
    name: "San Andreas",
    realWorldInspiration: "California e Nevada; na era 2D, uma cidade inspirada em San Francisco",
    universeAppearances: ["2D Universe", "3D Universe", "HD Universe"],
    games: ["GTA 1", "GTA: San Andreas", "GTA V", "GTA Online"],
    description:
      "Na era 3D, San Andreas vira um estado com Los Santos, San Fierro e Las Venturas. Na era HD, o nome cobre Los Santos e Blaine County.",
    districts: ["Los Santos", "San Fierro", "Las Venturas", "Red County", "Flint County", "Bone County", "Blaine County"],
    factions: ["Grove Street Families", "Ballas", "Vagos", "Aztecas", "Triads", "Rifa", "Da Nang Boys", "FIB", "IAA"],
    importantEvents: ["morte de Beverly Johnson", "queda de Tenpenny", "assaltos de GTA V", "crescimento de GTA Online"],
    characters: ["CJ", "Sweet", "Cesar", "Woozie", "Michael", "Franklin", "Trevor"],
    visualStyle: "Costa ensolarada, bairros de gangue, colinas, deserto, cassinos, pontes e interior rural.",
    themes: ["gangues", "familia", "territorio", "desigualdade", "entretenimento"]
  },
  {
    id: "los-santos",
    name: "Los Santos",
    realWorldInspiration: "Los Angeles",
    universeAppearances: ["3D Universe", "HD Universe"],
    games: ["GTA: San Andreas", "GTA V", "GTA Online"],
    description:
      "Cidade do sonho vendido: celebridades, midia, gangues, riqueza extrema, industria do entretenimento e desigualdade brutal.",
    districts: ["Ganton", "Idlewood", "Vinewood", "Downtown", "Rockford Hills", "Vespucci", "Del Perro", "South Los Santos"],
    factions: ["Families", "Ballas", "Vagos", "Madrazo Cartel", "FIB", "IAA", "Merryweather", "organizações de jogadores"],
    importantEvents: ["reconquista de Grove Street", "assaltos de GTA V", "The Contract", "Doomsday Heist", "Diamond Casino"],
    characters: ["CJ", "Franklin", "Michael", "Trevor", "Lamar", "Lester"],
    visualStyle: "Sol duro, outdoors, freeways, palmeiras, mansoes, estudios, grafite e sirenes.",
    themes: ["celebridade", "midia", "gangues", "riqueza", "desigualdade"]
  },
  {
    id: "san-fierro",
    name: "San Fierro",
    realWorldInspiration: "San Francisco",
    universeAppearances: ["3D Universe"],
    games: ["GTA: San Andreas"],
    description:
      "Cidade de colinas, pontes, garagens e contracultura, onde CJ reconstrói poder depois da queda em Los Santos.",
    districts: ["Doherty", "Chinatown", "Hashbury", "Downtown", "Easter Basin", "Garver Bridge"],
    factions: ["Triads", "San Fierro Rifa", "Da Nang Boys", "Loco Syndicate"],
    importantEvents: ["desmonte do Loco Syndicate", "aliança com Woozie", "garagem de CJ"],
    characters: ["CJ", "Cesar", "Woozie", "Jizzy B", "T-Bone Mendez", "Zero"],
    visualStyle: "Neblina, ladeiras, pontes vermelhas, oficinas, Chinatown e docas.",
    themes: ["contracultura", "tecnologia", "garagens", "crime asiatico"]
  },
  {
    id: "las-venturas",
    name: "Las Venturas",
    realWorldInspiration: "Las Vegas",
    universeAppearances: ["3D Universe"],
    games: ["GTA: San Andreas"],
    description:
      "Cassinos, deserto e mafia. Las Venturas mostra a versao corporativa e espetacular do crime.",
    districts: ["The Strip", "Old Venturas Strip", "Caligula's Palace", "Four Dragons Casino", "Redsands", "Prickle Pine"],
    factions: ["Leone Family", "Sindacco Family", "Forelli Family", "Triads"],
    importantEvents: ["assalto ao Caligula's", "guerra de cassinos", "arco de Ken Rosenberg"],
    characters: ["CJ", "Woozie", "Ken Rosenberg", "Salvatore Leone", "Madd Dogg"],
    visualStyle: "Neon de cassino, placas gigantes, resorts, deserto e ruas largas.",
    themes: ["cassinos", "apostas", "máfia", "corrupcao"]
  },
  {
    id: "blaine-county",
    name: "Blaine County",
    realWorldInspiration: "Interior desertico do sul da California",
    universeAppearances: ["HD Universe"],
    games: ["GTA V", "GTA Online"],
    description:
      "Zona rural e desertica que contrasta com Los Santos: trailers, trafico, armas, seitas, conspiracoes e abandono economico.",
    districts: ["Sandy Shores", "Grapeseed", "Paleto Bay", "Mount Chiliad", "Alamo Sea", "Fort Zancudo"],
    factions: ["Trevor Philips Enterprises", "The Lost MC", "Altruist Cult", "Merryweather", "IAA/FIB operations"],
    importantEvents: ["ascensao de Trevor", "guerra contra Lost MC", "assaltos e operacoes de Online"],
    characters: ["Trevor", "Ron", "Wade", "Johnny Klebitz"],
    visualStyle: "Poeira, postos de gasolina, hangares, trailers, montanhas, lago salgado e sirenes distantes.",
    themes: ["trafico", "milicias", "pobreza", "contrabando", "caos rural"]
  },
  {
    id: "north-yankton",
    name: "North Yankton",
    realWorldInspiration: "Estados frios do norte dos EUA",
    universeAppearances: ["HD Universe"],
    games: ["GTA V"],
    description:
      "Local do prologo de GTA V. Pequena, fria e lembrada como cena do crime original entre Michael, Trevor, Brad e Dave.",
    districts: ["Ludendorff", "cemiterio", "banco local"],
    factions: ["equipe de Michael", "FIB por meio de Dave Norton", "policia local"],
    importantEvents: ["assalto de 2004", "morte/sepultamento de Brad", "retorno de Michael e Trevor"],
    characters: ["Michael", "Trevor", "Brad", "Dave Norton"],
    visualStyle: "Neve, bancos pequenos, estradas vazias, silencio e trauma congelado.",
    themes: ["passado", "traicao", "identidade falsa"]
  },
  {
    id: "anywhere-city",
    name: "Anywhere City",
    realWorldInspiration: "Cidade retrofuturista composta, sem equivalente unico",
    universeAppearances: ["2D Universe"],
    games: ["GTA 2"],
    description:
      "Ambiente distopico e estilizado de GTA 2, com zonas controladas por gangues de identidades exageradas.",
    districts: ["Downtown District", "Residential District", "Industrial District"],
    factions: ["Zaibatsu", "Loonies", "Yakuza", "Scientists", "Rednecks", "Russian Mafia", "Krishna"],
    importantEvents: ["guerras de reputacao de Claude Speed"],
    characters: ["Claude Speed"],
    visualStyle: "Retrofuturo, luzes frias, zonas industriais, humor absurdo e violencia arcade.",
    themes: ["distopia", "gangues", "corporacoes", "experimento"]
  },
  {
    id: "london",
    name: "London",
    realWorldInspiration: "Londres",
    universeAppearances: ["2D Universe"],
    games: ["GTA: London 1969", "GTA: London 1961"],
    description:
      "A rara cidade real da serie, usada em expansoes de epoca antes da franquia se fixar em analogos satiricos dos EUA.",
    districts: ["zonas estilizadas de Londres"],
    factions: ["gangues britanicas", "policia"],
    importantEvents: ["incursao internacional da era 2D"],
    characters: ["avatares selecionaveis"],
    visualStyle: "Carros britanicos, humor londrino, anos 60 e sinalizacao de epoca.",
    themes: ["crime britanico", "anos 60", "curiosidade historica"]
  },
  {
    id: "leonida",
    name: "Leonida",
    realWorldInspiration: "Florida",
    universeAppearances: ["HD Universe"],
    games: ["GTA VI"],
    description:
      "Estado de GTA VI, incluindo Vice City moderna. O material oficial enfatiza sol, crime, conspiracao estadual e dependencia entre Lucia e Jason.",
    districts: ["Vice City", "Leonida Keys", "areas de pantano", "praias", "estradas estaduais", "locais ainda nao confirmados"],
    factions: ["nao confirmado", "policia local", "redes criminosas modernas"],
    importantEvents: ["trama de Lucia e Jason em 2026"],
    characters: ["Lucia Caminos", "Jason Duval", "Cal Hampton", "Boobie Ike", "Dre'Quan Priest"],
    visualStyle: "Miami moderna, redes sociais, praias, pantanos, letreiros, rodovias e neon atualizado.",
    themes: ["redes sociais", "crime moderno", "cultura viral", "sátira da Florida", "casal criminoso"]
  }
];

const factionsData = [
  {
    id: "leone-family",
    name: "Leone Family",
    category: "Máfia",
    game: "GTA III, Liberty City Stories, San Andreas",
    city: "Liberty City / Las Venturas",
    leaders: ["Salvatore Leone", "Toni Cipriani", "Joey Leone"],
    allies: ["Luigi Goterelli", "alguns politicos locais"],
    enemies: ["Forelli Family", "Sindacco Family", "Yakuza", "Claude"],
    businesses: ["extorsao", "jogos ilegais", "proteção", "cassinos", "contratos"],
    narrativeImportance: "Eixo da mafia da era 3D, conectando GTA III, LCS e San Andreas.",
    status: "Enfraquecida apos a morte de Salvatore; destino posterior nao confirmado.",
    tags: ["mafia", "3D Universe", "Liberty City"]
  },
  {
    id: "forelli-family",
    name: "Forelli Family",
    category: "Máfia",
    game: "Vice City, Liberty City Stories",
    city: "Liberty City / Vice City",
    leaders: ["Sonny Forelli", "Franco Forelli"],
    allies: ["Lance Vance no final de Vice City"],
    enemies: ["Tommy Vercetti", "Leone Family", "Sindacco Family"],
    businesses: ["trafico", "extorsao", "investimentos criminosos"],
    narrativeImportance: "Gatilho da trama de Vice City e rival historica dos Leone.",
    status: "Muito abalada apos a morte de Sonny.",
    tags: ["mafia", "Vice City", "3D Universe"]
  },
  {
    id: "sindacco-family",
    name: "Sindacco Family",
    category: "Máfia",
    game: "San Andreas, Liberty City Stories",
    city: "Las Venturas / Liberty City",
    leaders: ["Paulie Sindacco", "Johnny Sindacco"],
    allies: ["interesses em Caligula's"],
    enemies: ["Leone Family", "Forelli Family", "CJ"],
    businesses: ["cassinos", "trafico", "mafia de cassino"],
    narrativeImportance: "Liga Las Venturas a Liberty City e mostra disputas entre familias italianas.",
    status: "Enfraquecida apos guerras da era 3D.",
    tags: ["mafia", "cassino"]
  },
  {
    id: "yakuza",
    name: "Yakuza",
    category: "Crime organizado",
    game: "GTA III, GTA 2",
    city: "Liberty City / Anywhere City",
    leaders: ["Asuka Kasen", "Kenji Kasen"],
    allies: ["Claude temporariamente"],
    enemies: ["Leone Family", "Colombian Cartel"],
    businesses: ["trafico", "contratos", "proteção", "contrabando"],
    narrativeImportance: "Facção que vira a guerra de GTA III contra Salvatore e Catalina.",
    status: "Lideranca destruida em GTA III.",
    tags: ["Yakuza", "mafia", "3D Universe"]
  },
  {
    id: "colombian-cartel",
    name: "Colombian Cartel",
    category: "Cartel",
    game: "GTA III, San Andreas",
    city: "Liberty City / San Andreas",
    leaders: ["Catalina", "Miguel"],
    allies: ["Big Smoke e Ryder por rede de drogas em San Andreas"],
    enemies: ["Claude", "Yakuza", "Grove Street Families"],
    businesses: ["cocaina", "distribuicao", "armas"],
    narrativeImportance: "Força por tras de Catalina e da crise das drogas em partes da era 3D.",
    status: "Derrotado em GTA III.",
    tags: ["cartel", "drogas", "antagonista"]
  },
  {
    id: "yardies",
    name: "Yardies",
    category: "Gangue",
    game: "GTA III, GTA IV",
    city: "Liberty City",
    leaders: ["King Courtney", "Real Badman em outra continuidade"],
    allies: ["Little Jacob", "Claude temporariamente"],
    enemies: ["Diablos", "gangues rivais"],
    businesses: ["armas", "drogas", "proteção"],
    narrativeImportance: "Representam o crime jamaicano/caribenho em Liberty.",
    status: "Ativos em diferentes continuidades.",
    tags: ["gangue", "Liberty City"]
  },
  {
    id: "diablos",
    name: "Diablos",
    category: "Gangue",
    game: "GTA III",
    city: "Liberty City",
    leaders: ["El Burro"],
    allies: ["nenhum duradouro"],
    enemies: ["Yardies", "Leone interests"],
    businesses: ["rua", "roubo", "proteção"],
    narrativeImportance: "Gangue de bairro usada para textura urbana de Portland.",
    status: "Ativa durante GTA III.",
    tags: ["gangue", "Liberty City"]
  },
  {
    id: "triads",
    name: "Triads",
    category: "Crime organizado",
    game: "GTA III, Chinatown Wars, San Andreas",
    city: "Liberty City / San Fierro",
    leaders: ["Hsin Jaoming", "Wu Zi Mu", "Wu Kenny Lee"],
    allies: ["Huang Lee", "CJ", "Claude temporariamente"],
    enemies: ["Leone Family", "Da Nang Boys", "traidores internos"],
    businesses: ["contrabando", "cassinos", "trafico", "proteção"],
    narrativeImportance: "Uma das redes mais recorrentes, indo de Chinatown Wars a San Andreas.",
    status: "Ativa em multiplas continuidades.",
    tags: ["Triads", "mafia", "crime organizado"]
  },
  {
    id: "grove-street",
    name: "Grove Street Families",
    category: "Gangue",
    game: "San Andreas",
    city: "Los Santos",
    leaders: ["Sweet Johnson", "CJ"],
    allies: ["Varrios Los Aztecas"],
    enemies: ["Ballas", "Los Santos Vagos", "C.R.A.S.H."],
    businesses: ["territorio", "proteção", "reputacao de rua"],
    narrativeImportance: "Centro emocional de San Andreas.",
    status: "Reconquistada no final de San Andreas; situacao na era HD e outra continuidade.",
    tags: ["gangue", "familia", "Los Santos"]
  },
  {
    id: "ballas",
    name: "Ballas",
    category: "Gangue",
    game: "San Andreas, GTA V",
    city: "Los Santos",
    leaders: ["lideres locais", "Big Smoke e Ryder como associados na era 3D"],
    allies: ["C.R.A.S.H. indiretamente", "traficantes"],
    enemies: ["Grove Street Families", "Families"],
    businesses: ["drogas", "territorio", "armas"],
    narrativeImportance: "Rival historica da Grove/Families.",
    status: "Ativa em ambas as continuidades.",
    tags: ["gangue", "Los Santos"]
  },
  {
    id: "vagos",
    name: "Los Santos Vagos",
    category: "Gangue",
    game: "San Andreas, GTA V, GTA Online",
    city: "Los Santos",
    leaders: ["lideres locais"],
    allies: ["cartéis e redes de trafico variam por jogo"],
    enemies: ["Grove Street Families", "Aztecas", "Families"],
    businesses: ["drogas", "territorio", "contrabando"],
    narrativeImportance: "Força latina recorrente no submundo de Los Santos.",
    status: "Ativa.",
    tags: ["gangue", "Los Santos", "online"]
  },
  {
    id: "aztecas",
    name: "Varrios Los Aztecas",
    category: "Gangue",
    game: "San Andreas",
    city: "Los Santos",
    leaders: ["Cesar Vialpando"],
    allies: ["Grove Street Families"],
    enemies: ["Los Santos Vagos", "Ballas"],
    businesses: ["territorio", "carros", "rua"],
    narrativeImportance: "Aliança de Cesar que ajuda CJ a descobrir a traicao.",
    status: "Ativa ao final de San Andreas.",
    tags: ["gangue", "aliado"]
  },
  {
    id: "rifa",
    name: "San Fierro Rifa",
    category: "Gangue",
    game: "San Andreas",
    city: "San Fierro",
    leaders: ["T-Bone Mendez"],
    allies: ["Loco Syndicate"],
    enemies: ["CJ", "Cesar", "Triads"],
    businesses: ["trafico", "controle local"],
    narrativeImportance: "Liga San Fierro ao cartel de drogas que abastece Los Santos.",
    status: "Enfraquecida apos queda do Loco Syndicate.",
    tags: ["gangue", "San Fierro"]
  },
  {
    id: "da-nang-boys",
    name: "Da Nang Boys",
    category: "Gangue",
    game: "San Andreas",
    city: "San Fierro",
    leaders: ["The Snakehead"],
    allies: ["rede propria"],
    enemies: ["Triads", "Woozie", "CJ"],
    businesses: ["contrabando humano", "drogas", "docas"],
    narrativeImportance: "Antagonistas do arco Triad em San Fierro.",
    status: "Lideranca derrotada.",
    tags: ["gangue", "crime organizado"]
  },
  {
    id: "lost-mc",
    name: "The Lost MC",
    category: "Motoclube",
    game: "The Lost and Damned, GTA V, GTA Online",
    city: "Liberty City / Blaine County / Los Santos",
    leaders: ["Billy Grey", "Johnny Klebitz", "lideres locais"],
    allies: ["Ashley Butler por associacao", "negocios de drogas"],
    enemies: ["Angels of Death", "Trevor Philips", "jogador Online"],
    businesses: ["metanfetamina", "armas", "roubo", "motoclube"],
    narrativeImportance: "Mostra lealdade e autodestruicao em IV; vira alvo recorrente em V/Online.",
    status: "Fragmentado, mas persistente.",
    tags: ["motoclube", "online", "gangue"]
  },
  {
    id: "angels-of-death",
    name: "Angels of Death",
    category: "Motoclube",
    game: "The Lost and Damned",
    city: "Liberty City",
    leaders: ["lideres locais"],
    allies: ["rivais ocasionais dos Lost"],
    enemies: ["The Lost MC"],
    businesses: ["motoclube", "drogas", "violencia de rua"],
    narrativeImportance: "Principal rival externo do The Lost MC.",
    status: "Ativo durante os eventos de TLAD.",
    tags: ["motoclube", "rival"]
  },
  {
    id: "russian-mafia",
    name: "Russian Mafia",
    category: "Máfia",
    game: "GTA IV, TBoGT",
    city: "Liberty City",
    leaders: ["Mikhail Faustin", "Dimitri Rascalov", "Ray Bulgarin"],
    allies: ["redes internacionais"],
    enemies: ["Niko Bellic", "Pegorino Family", "Luis Lopez"],
    businesses: ["armas", "trafico humano", "drogas", "extorsao"],
    narrativeImportance: "Nucleo da queda moral de Niko em Liberty.",
    status: "Liderancas principais mortas.",
    tags: ["máfia russa", "HD Universe"]
  },
  {
    id: "pegorino-family",
    name: "Pegorino Family",
    category: "Máfia",
    game: "GTA IV",
    city: "Alderney / Liberty City",
    leaders: ["Jimmy Pegorino"],
    allies: ["Phil Bell", "Ray Boccino"],
    enemies: ["Niko Bellic", "Russian Mafia", "familias maiores"],
    businesses: ["drogas", "contratos", "mafia italiana"],
    narrativeImportance: "Mostra uma familia italiana decadente tentando reconhecimento.",
    status: "Colapsada apos morte de Pegorino.",
    tags: ["máfia", "HD Universe"]
  },
  {
    id: "mcreary-family",
    name: "McReary Family",
    category: "Família criminosa",
    game: "GTA IV, GTA V, Online",
    city: "Liberty City",
    leaders: ["Gerry McReary", "Packie McReary em operacoes"],
    allies: ["Niko Bellic"],
    enemies: ["mafias rivais", "policia"],
    businesses: ["assaltos", "armas", "contratos"],
    narrativeImportance: "Familia irlandesa que da a GTA IV seus assaltos mais memoraveis.",
    status: "Fragmentada; Packie sobrevive em jogos posteriores.",
    tags: ["familia criminosa", "assalto"]
  },
  {
    id: "five-families",
    name: "Ancelotti / Gambetti / Pavano / Messina crime families",
    category: "Máfia",
    game: "GTA IV, Episodes from Liberty City",
    city: "Liberty City",
    leaders: ["Jon Gravelli", "Giovanni Ancelotti", "lideres de familias"],
    allies: ["acordos temporarios"],
    enemies: ["Pegorino Family", "gangues rivais"],
    businesses: ["mafia italiana", "politica", "contratos", "drogas"],
    narrativeImportance: "Contexto da Comissao mafiosa da era HD em Liberty.",
    status: "Ativas, com poder variavel.",
    tags: ["máfia", "HD Universe"]
  },
  {
    id: "madrazo-cartel",
    name: "Madrazo Cartel",
    category: "Cartel",
    game: "GTA V, GTA Online",
    city: "Los Santos",
    leaders: ["Martin Madrazo", "Miguel Madrazo"],
    allies: ["jogador Online em trabalhos", "contatos mexicanos"],
    enemies: ["rivais de cartel", "Michael/Trevor quando provocados", "El Rubio em Cayo Perico por conflito de interesses"],
    businesses: ["trafico", "lavagem", "contratos"],
    narrativeImportance: "Liga Los Santos a cartéis contemporaneos e a Cayo Perico.",
    status: "Ativo.",
    tags: ["cartel", "online", "GTA V"]
  },
  {
    id: "merryweather",
    name: "Merryweather Security",
    category: "Empresa militar",
    game: "GTA V, GTA Online",
    city: "Los Santos / global",
    leaders: ["Don Percival"],
    allies: ["clientes corporativos", "contratos governamentais"],
    enemies: ["protagonistas", "jogador Online", "IAA em algumas operacoes"],
    businesses: ["seguranca privada", "mercenarios", "armas", "operacoes militares"],
    narrativeImportance: "Sátira de empresa militar privada e antagonista recorrente da era HD.",
    status: "Ativa apesar de repetidas derrotas.",
    tags: ["empresa", "militar", "online"]
  },
  {
    id: "fib",
    name: "FIB",
    category: "Governo/Polícia",
    game: "GTA IV, GTA V, GTA Online",
    city: "Liberty City / Los Santos",
    leaders: ["Steve Haines", "Dave Norton", "agentes diversos"],
    allies: ["protagonistas quando chantageados"],
    enemies: ["IAA", "criminosos", "testemunhas inconvenientes"],
    businesses: ["investigacao", "chantagem", "operacoes encobertas"],
    narrativeImportance: "Parodia do FBI e um dos grandes motores de corrupcao institucional.",
    status: "Ativo.",
    tags: ["governo", "polícia corrupta", "FIB"]
  },
  {
    id: "iaa",
    name: "IAA",
    category: "Governo/Polícia",
    game: "GTA IV, GTA V, GTA Online",
    city: "Liberty City / Los Santos",
    leaders: ["agentes diversos"],
    allies: ["jogador Online em operacoes especificas"],
    enemies: ["FIB", "Merryweather", "terroristas e rivais"],
    businesses: ["inteligencia", "operacoes clandestinas"],
    narrativeImportance: "Parodia da CIA e rivalidade burocratica do FIB.",
    status: "Ativa.",
    tags: ["governo", "inteligencia"]
  },
  {
    id: "noose",
    name: "NOOSE",
    category: "Governo/Polícia",
    game: "GTA IV, GTA V, GTA Online",
    city: "Nacional",
    leaders: ["comandos taticos"],
    allies: ["LSPD", "LCPD", "FIB"],
    enemies: ["jogadores/protagonistas em wanted level alto"],
    businesses: ["resposta tática", "segurança nacional"],
    narrativeImportance: "Escalada policial de alto nivel na era HD.",
    status: "Ativa.",
    tags: ["polícia", "governo", "NOOSE"]
  },
  {
    id: "lspd",
    name: "LSPD",
    category: "Governo/Polícia",
    game: "San Andreas, GTA V, GTA Online",
    city: "Los Santos",
    leaders: ["chefias locais"],
    allies: ["NOOSE", "FIB"],
    enemies: ["gangues", "protagonistas", "jogadores"],
    businesses: ["policiamento", "perseguicoes", "corrupcao em casos especificos"],
    narrativeImportance: "A presenca constante de repressao e satira policial em Los Santos.",
    status: "Ativa.",
    tags: ["polícia", "Los Santos"]
  },
  {
    id: "lcpd",
    name: "LCPD",
    category: "Governo/Polícia",
    game: "GTA III, GTA IV, Chinatown Wars",
    city: "Liberty City",
    leaders: ["comando local"],
    allies: ["NOOSE", "FIB"],
    enemies: ["mafias", "gangues", "protagonistas"],
    businesses: ["policiamento", "investigacao", "perseguicoes"],
    narrativeImportance: "Instituicao policial que molda o ritmo criminal de Liberty.",
    status: "Ativa.",
    tags: ["polícia", "Liberty City"]
  },
  {
    id: "crash",
    name: "C.R.A.S.H.",
    category: "Governo/Polícia",
    game: "San Andreas",
    city: "Los Santos",
    leaders: ["Frank Tenpenny", "Eddie Pulaski"],
    allies: ["Big Smoke", "Ballas por conveniencia"],
    enemies: ["CJ", "Grove Street", "Jimmy Hernandez quando vira risco"],
    businesses: ["extorsao", "corrupcao", "manipulacao de gangues"],
    narrativeImportance: "O rosto mais direto da corrupcao policial na era 3D.",
    status: "Destruida apos queda de Tenpenny.",
    tags: ["polícia corrupta", "C.R.A.S.H.", "antagonista"]
  },
  {
    id: "epsilon",
    name: "Epsilon Program",
    category: "Culto/Organização",
    game: "San Andreas, GTA V, GTA Online",
    city: "San Andreas / Los Santos",
    leaders: ["Cris Formage"],
    allies: ["seguidores ricos"],
    enemies: ["ceticismo", "jogadores curiosos"],
    businesses: ["culto", "doacoes", "lavagem satirica de crença"],
    narrativeImportance: "Uma das sátiras religiosas/corporativas mais persistentes da Rockstar.",
    status: "Ativo.",
    tags: ["culto", "easter egg", "satira"]
  },
  {
    id: "zaibatsu",
    name: "Zaibatsu Corporation",
    category: "Corporação criminosa",
    game: "GTA 2",
    city: "Anywhere City",
    leaders: ["chefes corporativos"],
    allies: ["contratos temporarios"],
    enemies: ["Loonies", "Yakuza", "Rednecks e rivais"],
    businesses: ["farmaceutica", "armas", "controle corporativo"],
    narrativeImportance: "Principal simbolo de corporacao criminosa em GTA 2.",
    status: "Ativa em Anywhere City.",
    tags: ["2D Universe", "corporação"]
  },
  {
    id: "loonies",
    name: "Loonies",
    category: "Gangue",
    game: "GTA 2",
    city: "Anywhere City",
    leaders: ["Elmo"],
    allies: ["temporarios"],
    enemies: ["Zaibatsu", "gangues rivais"],
    businesses: ["caos", "contratos", "violencia absurda"],
    narrativeImportance: "Facção de tom anarquico e caricatural de GTA 2.",
    status: "Ativa em Anywhere City.",
    tags: ["2D Universe", "gangue"]
  },
  {
    id: "scientists",
    name: "Scientists",
    category: "Gangue",
    game: "GTA 2",
    city: "Anywhere City",
    leaders: ["Dr. LaBrat"],
    allies: ["temporarios"],
    enemies: ["Rednecks", "rivais de distrito"],
    businesses: ["experimentos", "tecnologia", "armas"],
    narrativeImportance: "Mostram o lado sci-fi estranho de GTA 2.",
    status: "Ativos.",
    tags: ["2D Universe", "cientistas"]
  },
  {
    id: "krishna",
    name: "Krishna",
    category: "Culto/Gangue",
    game: "GTA 2",
    city: "Anywhere City",
    leaders: ["Sunbeam"],
    allies: ["temporarios"],
    enemies: ["Russian Mafia", "rivais"],
    businesses: ["culto", "rua", "contratos"],
    narrativeImportance: "Facção satirica de GTA 2.",
    status: "Ativa.",
    tags: ["2D Universe", "culto"]
  },
  {
    id: "rednecks",
    name: "Rednecks",
    category: "Gangue",
    game: "GTA 2",
    city: "Anywhere City",
    leaders: ["Billy Bob Bean"],
    allies: ["temporarios"],
    enemies: ["Scientists", "Zaibatsu"],
    businesses: ["veiculos", "violencia rural", "contrabando"],
    narrativeImportance: "Parte do mosaico de gangues absurdas de GTA 2.",
    status: "Ativa.",
    tags: ["2D Universe", "gangue"]
  },
  {
    id: "online-orgs",
    name: "Organizações, MCs, CEOs, Agencies, Nightclubs, Bunkers, Arcades e Auto Shops",
    category: "GTA Online",
    game: "GTA Online",
    city: "Los Santos / Blaine County",
    leaders: ["jogadores"],
    allies: ["Lester", "Franklin", "Tony Prince", "Agent 14", "Dax", "Miguel Madrazo"],
    enemies: ["jogadores rivais", "Merryweather", "policia", "cartéis"],
    businesses: ["assaltos", "carga", "motoclubes", "armas", "nightclubs", "cassino", "agencia", "lavagem"],
    narrativeImportance: "Transforma o jogador em instituidor de seu proprio império criminal.",
    status: "Persistente e em expansao.",
    tags: ["online", "CEO", "MC", "negocios"]
  }
];

const developmentData = [
  {
    id: "dev-gta1",
    title: "GTA 1",
    period: "DMA Design / 1997",
    summary:
      "Nasce da mudanca de foco de Race'n'Chase para crime urbano livre. Top-down, radios, policia e caos viram a base da franquia.",
    facts: ["Criado na DMA Design.", "Associado a David Jones e Mike Dailly.", "A liberdade sistemica foi mais importante que uma trama fechada."],
    uncertainty: "Detalhes de prototipos variam por entrevista e memoria de desenvolvimento."
  },
  {
    id: "dev-gta3",
    title: "GTA III",
    period: "Virada 3D / 2001",
    summary:
      "Transforma GTA em cidade 3D jogavel em terceira pessoa, com missoes dubladas, radio e sistemas urbanos sobrepostos.",
    facts: ["Liberty City vira espaco tridimensional.", "Modelo influencia a industria inteira.", "A identidade moderna da franquia se consolida."],
    uncertainty: "Nao foi o primeiro mundo aberto, mas e amplamente tratado como marco do formato urbano moderno."
  },
  {
    id: "dev-vice",
    title: "Vice City",
    period: "Atmosfera / 2002",
    summary:
      "Desenvolvimento rapido apos GTA III. A ideia cresceu de expansao/mission pack para jogo completo com protagonista falante e identidade de anos 80.",
    facts: ["Inspiracao forte em cinema criminal dos anos 80.", "Trilha sonora licenciada virou parte da experiencia.", "Tommy Vercetti cria um centro narrativo mais definido."],
    uncertainty: "A classificacao inicial como expansao e citada em relatos historicos, nao como premissa unica oficial."
  },
  {
    id: "dev-sa",
    title: "San Andreas",
    period: "Escala maxima da era 3D / 2004",
    summary:
      "Expande a formula com tres cidades, campo, deserto, customizacao, habilidades, territorio, academias e aviação.",
    facts: ["Mapa muito maior que entradas anteriores.", "RPG leve e customizacao corporal.", "Temas de gangues, familia e corrupcao policial."],
    uncertainty: "Inspiracoes culturais sao amplas; nem toda referencia visual equivale a adaptacao direta."
  },
  {
    id: "dev-gta4",
    title: "GTA IV",
    period: "Era HD / 2008",
    summary:
      "Entrada na era RAGE/HD, com Liberty City mais realista, fisica Euphoria e narrativa mais sombria.",
    facts: ["Reboot de continuidade.", "Tom dramatico e noir.", "Foco em imigracao, trauma e capitalismo."],
    uncertainty: "A nacionalidade exata de Niko e intencionalmente ambigua no jogo."
  },
  {
    id: "dev-gtav",
    title: "GTA V",
    period: "Fenomeno global / 2013",
    summary:
      "Tres protagonistas jogaveis, assaltos planejados e Los Santos/Blaine County em escala massiva. GTA Online nasce do mesmo ecossistema.",
    facts: ["Michael, Franklin e Trevor alternam perspectiva.", "Assaltos estruturam a campanha.", "GTA Online transformou o ciclo de vida do jogo."],
    uncertainty: "Numeros de equipe e receita variam por fonte publica e estimativa."
  },
  {
    id: "dev-gtavi",
    title: "GTA VI",
    period: "Proximo capitulo / 2026",
    summary:
      "A Rockstar apresenta Leonida e Vice City moderna, com Lucia e Jason como dupla central. Data oficial atual: 19 de novembro de 2026.",
    facts: ["Ambientado no estado de Leonida.", "Vice City retorna.", "Lucia e Jason sao protagonistas.", "PS5 e Xbox Series X|S confirmados."],
    uncertainty: "Antagonistas, estrutura de missoes, mapa completo e GTA Online futuro ainda nao estao plenamente confirmados."
  }
];

const onlineTimelineData = [
  { year: "2013", title: "Lançamento", theme: "corridas, deathmatches, apartamentos, contatos e primeiros trabalhos" },
  { year: "2015", title: "Heists", theme: "assaltos cooperativos estruturados, com planejamento e finais de alta recompensa" },
  { year: "2016", title: "Executives, Further Adventures e Bikers", theme: "CEOs, armazens, contrabando e motoclubes" },
  { year: "2017", title: "Gunrunning e Doomsday Heist", theme: "bunkers, pesquisa de armas e guerra tecnologica com agencias" },
  { year: "2018", title: "After Hours", theme: "nightclubs, Tony Prince e renda passiva conectada a negocios" },
  { year: "2019", title: "Diamond Casino & Resort / Casino Heist", theme: "luxo, Duggans, cassino e um dos assaltos centrais" },
  { year: "2020", title: "The Cayo Perico Heist", theme: "ilha privada de El Rubio e assalto jogavel solo ou em equipe" },
  { year: "2021", title: "The Contract", theme: "Franklin adulto, Agency, Dr. Dre e contratos VIP" },
  { year: "2022-2023", title: "Los Santos Drug Wars", theme: "Dax, Fooliganz, laboratorios e acido" },
  { year: "2023", title: "San Andreas Mercenaries", theme: "operações aereas contra Merryweather e carreira militar privada" },
  { year: "2025", title: "Money Fronts", theme: "lavagem de dinheiro por negocios de fachada, incluindo car wash e outras frentes" },
  { year: "continuo", title: "Carreira e economia", theme: "balancos, GTA+, veiculos, criador de missoes, eventos e rotacao semanal" }
];

const gta6FactsData = {
  confirmed: [
    "Data oficial atual: 19 de novembro de 2026.",
    "Plataformas anunciadas: PlayStation 5 e Xbox Series X|S.",
    "Estado: Leonida, inspirado na Florida.",
    "Cidade principal destacada: Vice City moderna.",
    "Protagonistas: Lucia Caminos e Jason Duval.",
    "Premissa oficial: um servico simples da errado e joga a dupla numa conspiracao criminosa em Leonida."
  ],
  interpretation: [
    "A dinamica Lucia/Jason sugere leitura de casal criminoso contemporaneo.",
    "Trailers e pagina oficial enfatizam redes sociais, cultura viral, praias, pantanos e policia em ambiente de satira da Florida.",
    "Temas provaveis: golpes, fama instantanea, vigilancia, violencia viral e economia criminal moderna."
  ],
  notConfirmed: [
    "Antagonistas principais.",
    "Mapa completo e todas as cidades/condados.",
    "Sistema de troca entre protagonistas.",
    "Integração futura com GTA Online.",
    "Detalhes de engine, ray tracing ou modo PC no lancamento."
  ]
};

const connectionsData = [
  {
    title: "Catalina: San Andreas para GTA III",
    summary: "Catalina aparece em 1992 com CJ e, anos depois, trai Claude em Liberty City.",
    type: "Conexao cronologica"
  },
  {
    title: "Leone Family: Las Venturas, Liberty e GTA III",
    summary: "Salvatore conecta San Andreas, Liberty City Stories e GTA III, mostrando a continuidade da mafia 3D.",
    type: "Familia criminosa"
  },
  {
    title: "Diamantes de Liberty City",
    summary: "GTA IV, The Lost and Damned e The Ballad of Gay Tony mostram o mesmo conflito por angulos diferentes.",
    type: "Narrativa cruzada"
  },
  {
    title: "Michael, Trevor e North Yankton",
    summary: "A mentira de 2004 e o eixo emocional de GTA V, reativando amizade, traicao e paranoia.",
    type: "Traicao"
  },
  {
    title: "Franklin em GTA Online",
    summary: "The Contract confirma Franklin mais velho como empresario de sucesso, reforcando a leitura da Opcao C.",
    type: "Continuidade HD"
  },
  {
    title: "Vice City 1984, 1986 e 2026",
    summary: "Vic e Tommy definem a era 3D; Lucia e Jason retornam a cidade em outro universo narrativo.",
    type: "Eco entre universos"
  }
];

const recommendedOrderData = [
  {
    label: "Ordem moderna para entender a narrativa",
    games: ["GTA III", "Vice City", "San Andreas", "Liberty City Stories", "Vice City Stories", "GTA IV", "Episodes from Liberty City", "Chinatown Wars", "GTA V", "GTA Online", "GTA VI"]
  },
  {
    label: "Ordem cronologica interna",
    games: ["London 1961", "London 1969", "Vice City Stories", "Vice City", "San Andreas", "GTA 1", "Liberty City Stories", "GTA Advance", "GTA III", "GTA IV + Episodes", "Chinatown Wars", "GTA V", "GTA Online", "GTA VI"]
  },
  {
    label: "Ordem por impacto historico",
    games: ["Grand Theft Auto", "GTA III", "Vice City", "San Andreas", "GTA IV", "GTA V", "GTA Online", "GTA VI"]
  }
];

const impactData = [
  {
    title: "Mundo aberto urbano como linguagem dominante",
    body: "GTA III popularizou um modelo que virou vocabulario de design: mapa urbano, missoes, sistemas policiais, liberdade lateral e narrativa cinematografica."
  },
  {
    title: "Satira cultural",
    body: "Radios, anuncios, marcas falsas, talk shows e pedestres transformam cada cidade em critica de consumo, politica, midia, celebridade e paranoia americana."
  },
  {
    title: "Controversias",
    body: "A serie e historicamente alvo de debates sobre violencia, classificacao indicativa, representacao e conteudo sexual. San Andreas tambem ficou associado ao caso Hot Coffee, um dos marcos de controversia em jogos."
  },
  {
    title: "GTA Online e economia de jogo vivo",
    body: "GTA Online redefiniu a longevidade de GTA V, mas tambem trouxe debates sobre grind, microtransacoes, inflacao interna e preservacao do single-player tradicional."
  }
];

const glossaryData = [
  { term: "2D Universe", definition: "Primeira continuidade de GTA, com camera top-down e estrutura arcade." },
  { term: "3D Universe", definition: "Continuidade de GTA III, Vice City, San Andreas, Advance, LCS e VCS." },
  { term: "HD Universe", definition: "Continuidade iniciada em GTA IV, incluindo GTA V, Online e GTA VI." },
  { term: "Wanted Level", definition: "Sistema de estrelas que mede resposta policial ao jogador." },
  { term: "Heist", definition: "Assalto planejado com preparacao, equipe e execucao." },
  { term: "C.R.A.S.H.", definition: "Unidade policial corrupta de San Andreas, liderada por Tenpenny." },
  { term: "FIB", definition: "Parodia do FBI no universo GTA." },
  { term: "IAA", definition: "Parodia da CIA/inteligencia americana no universo GTA." },
  { term: "NOOSE", definition: "Forca tática de resposta a ameaças de alto nivel." },
  { term: "RAGE", definition: "Rockstar Advanced Game Engine, base tecnica da era HD." },
  { term: "Euphoria", definition: "Tecnologia de animacao/fisica usada para reacoes corporais na era HD." },
  { term: "Canon", definition: "Conjunto de eventos aceitos como continuidade narrativa." },
  { term: "Easter egg", definition: "Referencia escondida, piada interna ou pista visual colocada no jogo." },
  { term: "Prequel", definition: "Jogo ou historia que acontece antes de um titulo ja lancado." },
  { term: "Spin-off", definition: "Entrada derivada, muitas vezes com formato, plataforma ou foco diferente." },
  { term: "GTA Online Organization", definition: "Estrutura criada pelo jogador para negocios como CEO, MC, Agencia, Bunker ou Nightclub." },
  { term: "Leonida", definition: "Estado ficticio de GTA VI inspirado na Florida." },
  { term: "Vice City", definition: "Analogo de Miami, presente em 2D, 3D e HD Universe." }
];

const mediaCredit = "Imagem promocional oficial © Rockstar Games / Take-Two Interactive";
const rsgGamesSource = "https://www.rockstargames.com/games";
const rsgVI = "https://www.rockstargames.com/VI";
const rsgVIScreens = "https://www.rockstargames.com/VI/downloads/screenshots?pubDate=20250511";
const rsgVIArtwork = "https://www.rockstargames.com/VI/downloads/artwork-wallpapers";
const rsgVSource = "https://www.rockstargames.com/gta-v";
const rsgOnlineSource = "https://www.rockstargames.com/gta-online";
const rsgTrilogySource = "https://www.rockstargames.com/GTATrilogy";

const officialMediaData = {
  notice:
    "Imagens oficiais promocionais da Rockstar Games / Take-Two Interactive usadas com credito e link para a fonte oficial. O projeto e um arquivo editorial de fa e nao afirma propriedade sobre as artes.",
  hero: {
    src: "https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_01_landscape.0e2a6544.jpg",
    alt: "Arte oficial de Grand Theft Auto VI com Lucia e Jason",
    credit: mediaCredit,
    caption: "Rockstar Games - GTA VI Artwork & Wallpapers",
    source: rsgVIArtwork
  },
  sources: [
    { label: "GTA VI - pagina oficial", url: rsgVI, note: "Hero, personagens e sinopse de Lucia/Jason." },
    { label: "GTA VI - screenshots oficiais", url: rsgVIScreens, note: "Screenshots de Lucia, Jason, Vice City, Leonida e regioes." },
    { label: "GTA VI - artworks e wallpapers", url: rsgVIArtwork, note: "Artes oficiais, postcards e wallpapers." },
    { label: "GTA V - pagina oficial", url: rsgVSource, note: "Imagens promocionais atuais de Los Santos e GTA V." },
    { label: "GTA Online - pagina oficial", url: rsgOnlineSource, note: "Imagens de atualizacoes e plataforma online." },
    { label: "GTA Trilogy - pagina oficial", url: rsgTrilogySource, note: "Artes e screenshots da trilogia 3D remasterizada." },
    { label: "Paginas oficiais dos jogos Rockstar", url: rsgGamesSource, note: "Screenshots oficiais de GTA 1, GTA 2, GTA III, Vice City, San Andreas, LCS, VCS, GTA IV, EFLC e Chinatown Wars." }
  ]
};

const officialImage = (src, alt, source, caption = "Rockstar Games", options = {}) => ({
  src,
  alt,
  source,
  caption,
  credit: mediaCredit,
  ...options
});

const officialMediaByGameId = {
  "gta-1": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/62c4b1e51372aacfd16acaa7ed646c1c.jpg", "Screenshot oficial de Grand Theft Auto", "https://www.rockstargames.com/games/gta"),
  "gta-2": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ac384326d2dc2bbdd6c79d83cc276d91.jpg", "Screenshot oficial de Grand Theft Auto 2", "https://www.rockstargames.com/games/gta2"),
  "gta-iii": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8fbaa33023630eedf32a7b8379fdd30d.jpg", "Screenshot oficial de Grand Theft Auto III", "https://www.rockstargames.com/games/grandtheftauto3"),
  "vice-city": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c3466bd07d09ec14c9555505ea4e6af.jpg", "Screenshot oficial de Grand Theft Auto: Vice City", "https://www.rockstargames.com/games/vicecity"),
  "san-andreas": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bb5e5e25e29046535aba405ad47bb826.jpg", "Screenshot oficial de Grand Theft Auto: San Andreas", "https://www.rockstargames.com/games/sanandreas"),
  "liberty-city-stories": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bc52e237a5eada7c42733c49d21c5e47.jpg", "Screenshot oficial de Grand Theft Auto: Liberty City Stories", "https://www.rockstargames.com/games/libertycitystories"),
  "vice-city-stories": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ae01329b17c6f92ec10d153b9ecf6dc1.jpg", "Screenshot oficial de Grand Theft Auto: Vice City Stories", "https://www.rockstargames.com/games/vicecitystories"),
  "gta-iv": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5576e5d2cd0f451508d8b025b77e7250.jpg", "Screenshot oficial de Grand Theft Auto IV", "https://www.rockstargames.com/games/IV"),
  "lost-and-damned": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3ac5b4fa1e77f1aea8ef156103da5e40.jpg", "Screenshot oficial de Episodes from Liberty City", "https://www.rockstargames.com/games/episodesfromlibertycity"),
  "ballad-gay-tony": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6f78f984130287ec529aee43e8a7ee22.jpg", "Screenshot oficial de Episodes from Liberty City", "https://www.rockstargames.com/games/episodesfromlibertycity"),
  "chinatown-wars": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f5995d08f2bfd9d5e880e7bed0d4255d.jpg", "Screenshot oficial de Grand Theft Auto: Chinatown Wars", "https://www.rockstargames.com/games/chinatownwars"),
  "gta-v": officialImage("https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/gta-v/911bff9fca5209b94dd22bcba795eefdd4b71993.jpg", "Imagem oficial de Grand Theft Auto V em Los Santos", rsgVSource),
  "gta-online": officialImage("https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/gta-online/7ec5f9605b1524c2fe73e655f053725b05359458.jpg", "Imagem oficial de Grand Theft Auto Online", rsgOnlineSource),
  "trilogy-definitive": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fabc3ff8a64105c4d8ac1aadbeffb3a9.jpg", "Box art oficial de Grand Theft Auto: The Trilogy - The Definitive Edition", rsgTrilogySource),
  "gta-vi": officialImage("https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_01_landscape.0e2a6544.jpg", "Arte oficial de GTA VI com Lucia e Jason", rsgVIArtwork, "Rockstar Games - GTA VI Artwork & Wallpapers")
};

const officialMediaByCharacterId = {
  "claude": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f21b89ff222aec91c5c432eeb7993a15.jpg", "Arte oficial de personagem de Grand Theft Auto III", rsgTrilogySource, "Rockstar Games", { position: "center 22%" }),
  "tommy-vercetti": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5b523f9e2578bdc3e95de00427f8910d.jpg", "Arte oficial de personagem de Grand Theft Auto: Vice City", rsgTrilogySource, "Rockstar Games", { position: "center 18%" }),
  "cj": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d28dac374fa7413d066a50ca33cf6da7.jpg", "Arte oficial de personagem de Grand Theft Auto: San Andreas", rsgTrilogySource, "Rockstar Games", { position: "center 18%" }),
  "niko-bellic": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5576e5d2cd0f451508d8b025b77e7250.jpg", "Screenshot oficial de Grand Theft Auto IV", "https://www.rockstargames.com/games/IV"),
  "michael-de-santa": officialImage("https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1427472412.jpg", "Screenshot oficial de Grand Theft Auto V para PC", "https://www.rockstargames.com/newswire/article/1748koo9o829a9/screens-from-grand-theft-auto-v-for-pc"),
  "franklin-clinton": officialImage("https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1427472455.jpg", "Screenshot oficial de Grand Theft Auto V para PC", "https://www.rockstargames.com/newswire/article/1748koo9o829a9/screens-from-grand-theft-auto-v-for-pc"),
  "trevor-philips": officialImage("https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1427472538.jpg", "Screenshot oficial de Grand Theft Auto V para PC", "https://www.rockstargames.com/newswire/article/1748koo9o829a9/screens-from-grand-theft-auto-v-for-pc"),
  "lucia-caminos": officialImage("https://www.rockstargames.com/VI/_next/static/media/Lucia_Caminos_01.f5023e0f.jpg", "Screenshot oficial de Lucia Caminos em GTA VI", rsgVIScreens, "Rockstar Games - GTA VI Screenshots"),
  "jason-duval": officialImage("https://www.rockstargames.com/VI/_next/static/media/Jason_Duval_01.6e287338.jpg", "Screenshot oficial de Jason Duval em GTA VI", rsgVIScreens, "Rockstar Games - GTA VI Screenshots"),
  "online-protagonist": officialImage("https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/gta-online/c6d9e6a34e3f429c6ab97c75f19e58c546e8d5a2.jpg", "Imagem oficial de GTA Online", rsgOnlineSource)
};

const officialMediaByCityId = {
  "liberty-city": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5576e5d2cd0f451508d8b025b77e7250.jpg", "Screenshot oficial de Liberty City em GTA IV", "https://www.rockstargames.com/games/IV"),
  "vice-city": officialImage("https://www.rockstargames.com/VI/_next/static/media/Vice_City_01.332891cf.jpg", "Screenshot oficial de Vice City em GTA VI", rsgVIScreens, "Rockstar Games - GTA VI Screenshots"),
  "san-andreas": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bb5e5e25e29046535aba405ad47bb826.jpg", "Screenshot oficial de San Andreas", "https://www.rockstargames.com/games/sanandreas"),
  "los-santos": officialImage("https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/gta-v/911bff9fca5209b94dd22bcba795eefdd4b71993.jpg", "Imagem oficial de Los Santos em GTA V", rsgVSource),
  "san-fierro": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9b8a9636519a343c04f860eb6f0c22d3.jpg", "Screenshot oficial de Grand Theft Auto: San Andreas", "https://www.rockstargames.com/games/sanandreas"),
  "las-venturas": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/99efb826b071747efc32fa9a14117e99.jpg", "Screenshot oficial de Grand Theft Auto: San Andreas", "https://www.rockstargames.com/games/sanandreas"),
  "blaine-county": officialImage("https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1427472402.jpg", "Screenshot oficial de Grand Theft Auto V para PC", "https://www.rockstargames.com/newswire/article/1748koo9o829a9/screens-from-grand-theft-auto-v-for-pc"),
  "north-yankton": officialImage("https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1427472423.jpg", "Screenshot oficial de Grand Theft Auto V para PC", "https://www.rockstargames.com/newswire/article/1748koo9o829a9/screens-from-grand-theft-auto-v-for-pc"),
  "anywhere-city": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ac384326d2dc2bbdd6c79d83cc276d91.jpg", "Screenshot oficial de Grand Theft Auto 2", "https://www.rockstargames.com/games/gta2"),
  "leonida": officialImage("https://www.rockstargames.com/VI/_next/static/media/Leonida_Keys_01.1af17390.jpg", "Screenshot oficial de Leonida Keys em GTA VI", rsgVIScreens, "Rockstar Games - GTA VI Screenshots")
};

const mediaArray = (value) => Array.isArray(value) ? value : value ? [value] : [];
const mediaKey = (value) => String(value || "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/grand theft auto/g, "gta")
  .replace(/[^a-z0-9]+/g, " ")
  .trim();

const findGameMediaForCharacter = (character) => {
  const gameNames = mediaArray(character.games).map(mediaKey);
  for (const name of gameNames) {
    const exactMatch = gamesData.find((game) => mediaKey(game.title) === name && game.media);
    if (exactMatch) return exactMatch;
  }
  for (const name of gameNames) {
    if (name.length <= 4) continue;
    const partialMatch = gamesData.find((game) => {
      const key = mediaKey(game.title);
      return key.length > 4 && game.media && (name.includes(key) || key.includes(name));
    });
    if (partialMatch) return partialMatch;
  }
  return null;
};

gamesData.forEach((item) => {
  if (officialMediaByGameId[item.id]) item.media = officialMediaByGameId[item.id];
});

charactersData.forEach((item) => {
  if (officialMediaByCharacterId[item.id]) item.media = officialMediaByCharacterId[item.id];
  if (!item.media) {
    const relatedGame = findGameMediaForCharacter(item);
    if (relatedGame?.media) {
      item.media = {
        ...relatedGame.media,
        alt: `Imagem oficial de ${relatedGame.title} relacionada a ${item.name}`,
        caption: `Rockstar Games - ${relatedGame.title}`,
        relatedOnly: true
      };
    }
  }
});

citiesData.forEach((item) => {
  if (officialMediaByCityId[item.id]) item.media = officialMediaByCityId[item.id];
});

Object.assign(window, {
  dossierNavData,
  dossierSourcesData,
  officialMediaData,
  universeData,
  rockstarHistoryData,
  timelineChronologicalData,
  releaseTimelineData,
  gamesData,
  charactersData,
  citiesData,
  factionsData,
  developmentData,
  onlineTimelineData,
  gta6FactsData,
  connectionsData,
  recommendedOrderData,
  impactData,
  glossaryData
});
