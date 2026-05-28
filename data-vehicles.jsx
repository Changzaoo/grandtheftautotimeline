/* ============ GTA VEHICLE DOSSIER DATA ============ */

const gtaWikiVehicleSource = (page, label = "GTA Wiki") => ({
  label,
  url: `https://gta.fandom.com/wiki/${page.replaceAll(" ", "_")}`
});

const vehicleDossierData = [
  {
    id: "gta-1",
    gameId: "gta-1",
    title: "Grand Theft Auto",
    releaseYear: 1997,
    storyYear: "1997",
    universe: "2D Universe",
    city: "Liberty City, San Andreas e Vice City",
    apiPage: "Vehicles in GTA",
    categoryTitle: "Category:Vehicles in GTA",
    source: gtaWikiVehicleSource("Vehicles in GTA"),
    totalLabel: "59 veículos listados; alguns não controláveis",
    coverage: ["carros", "motos", "vans", "caminhões", "serviço público", "emergência", "barcos/itens não controláveis"],
    highlights: ["F-19", "Mamba", "Taxi", "Police", "Tank", "Bike", "Boat"],
    summary: "A frota do primeiro GTA ainda é vista de cima e funciona como vocabulário de caos urbano: roubar, fugir, bater, trocar de carro e usar a cidade como tabuleiro.",
    systems: [
      "A identidade dos veículos é mais sistêmica do que cinematográfica: aceleração, resistência, tamanho e utilidade mandam mais que marca ficcional.",
      "Liberty City, San Andreas e Vice City já apresentam arquétipos que a franquia refinaria depois: táxis, viaturas, ambulâncias, esportivos, caminhões e veículos especiais.",
      "A lista inclui itens que aparecem no arquivo ou na página de veículos, mas nem todos são veículos plenamente dirigíveis pelo jogador."
    ],
    precisionNotes: ["A página do GTA Wiki registra 59 veículos no jogo; categorias auxiliares podem listar variações e objetos adicionais."],
    tags: ["2D Universe", "top-down", "carros", "serviço", "emergência"]
  },
  {
    id: "london-1969",
    gameId: "london-1969",
    title: "GTA: London 1969",
    releaseYear: 1999,
    storyYear: "1969",
    universe: "2D Universe",
    city: "London",
    apiPage: "Vehicles in GTA London 1969",
    categoryTitle: "Category:Vehicles in GTA London 1969",
    source: gtaWikiVehicleSource("Vehicles in GTA London 1969"),
    totalLabel: "36 veículos na expansão",
    coverage: ["carros britânicos", "motos", "vans", "ônibus", "emergência", "serviço público"],
    highlights: ["James Bomb", "Jug Swinger", "Myni", "Double Decker", "Copper", "S-Cart"],
    summary: "London 1969 troca o imaginário americano por sátira britânica: nomes paródicos, compactos, ônibus, polícia local e estética de filme criminal sessentista.",
    systems: [
      "A condução continua top-down, mas os nomes e silhuetas reforçam a identidade londrina.",
      "É uma das raras fases da franquia fora dos Estados Unidos.",
      "A frota ajuda a vender o período: carros pequenos, vans, ônibus e veículos de serviço com humor britânico."
    ],
    precisionNotes: ["A expansão reaproveita a base do primeiro GTA, mas reorganiza nomes, clima e iconografia para Londres."],
    tags: ["2D Universe", "expansão", "London", "anos 60"]
  },
  {
    id: "london-1961",
    gameId: "london-1961",
    title: "GTA: London 1961",
    releaseYear: 1999,
    storyYear: "1961",
    universe: "2D Universe",
    city: "London",
    apiPage: "Vehicles in GTA London 1961",
    categoryTitle: "Category:Vehicles in GTA London 1961",
    source: gtaWikiVehicleSource("Vehicles in GTA London 1961"),
    totalLabel: "36 veículos na expansão gratuita",
    coverage: ["carros britânicos", "motos", "vans", "ônibus", "emergência", "serviço público"],
    highlights: ["Bentover", "Big Bends", "Myni", "Double Decker", "Copper", "Royal Stretch"],
    summary: "London 1961 funciona como complemento histórico de London 1969, mantendo a lógica arcade e reforçando o recorte britânico anterior à série se fixar nos EUA.",
    systems: [
      "A frota é pequena, mas cobre esportivos, compactos, veículos de serviço, emergência e transporte urbano.",
      "O interesse do dossiê está menos em realismo e mais no valor histórico: a série experimenta outro país e outra década.",
      "Como expansão gratuita de PC, a lista deve ser lida junto da base de London 1969."
    ],
    precisionNotes: ["O GTA Wiki informa 36 veículos e observa que parte deles difere de London 1969."],
    tags: ["2D Universe", "expansão", "London", "anos 60"]
  },
  {
    id: "gta-2",
    gameId: "gta-2",
    title: "Grand Theft Auto 2",
    releaseYear: 1999,
    storyYear: "1999 / futuro ambíguo",
    universe: "2D Universe",
    city: "Anywhere City",
    apiPage: "Vehicles in GTA 2",
    categoryTitle: "Category:Vehicles in GTA 2",
    source: gtaWikiVehicleSource("Vehicles in GTA 2"),
    totalLabel: "69 veículos no jogo",
    coverage: ["carros", "gang cars", "ônibus", "caminhões", "emergência", "serviço", "veículos armados"],
    highlights: ["Aniston BD4", "Furore GT", "Stinger", "Armed Land Roamer", "Tank", "Cop Car"],
    summary: "GTA 2 deixa a frota mais estranha e faccional: carros de gangues, veículos futuristas, recompensas no crusher e uma cidade mais distópica.",
    systems: [
      "Anywhere City usa veículos como extensão das gangues: a silhueta do carro ajuda a identificar território e perigo.",
      "O crusher transforma carros roubados em recompensa, conectando frota e economia arcade.",
      "O tom retrofuturista permite nomes e formas menos realistas do que na era 3D."
    ],
    precisionNotes: ["O ano interno de GTA 2 é deliberadamente nebuloso; a frota também tem tom menos naturalista."],
    tags: ["2D Universe", "Anywhere City", "gangues", "crusher"]
  },
  {
    id: "gta-iii",
    gameId: "gta-iii",
    title: "Grand Theft Auto III",
    releaseYear: 2001,
    storyYear: "2001",
    universe: "3D Universe",
    city: "Liberty City",
    apiPage: "Vehicles in GTA III",
    source: gtaWikiVehicleSource("Vehicles in GTA III"),
    totalLabel: "61 veículos listados",
    coverage: ["carros", "vans", "caminhões", "barcos", "aeronaves limitadas", "serviço público", "emergência", "gang cars"],
    highlights: ["Banshee", "Kuruma", "Mafia Sentinel", "Yakuza Stinger", "Rhino", "Dodo", "Predator"],
    summary: "GTA III transforma veículos em linguagem de mundo aberto moderno: a escolha de carro passa a definir velocidade, rota, fuga, missão e identidade de facção.",
    systems: [
      "A frota é compacta, mas já organiza Liberty City em classes: esportivos, sedãs, vans, industriais, gangues, governo, barcos e aeronaves.",
      "O Dodo aparece como avião pilotável de controle difícil, virando curiosidade histórica e desafio de comunidade.",
      "Os veículos de gangue ajudam a dar leitura territorial: Mafia Sentinel, Diablo Stallion, Triad Fish Van, Yardie Lobo e outros."
    ],
    precisionNotes: ["Nem todas as aeronaves da lista são dirigíveis; algumas aparecem como tráfego, cenário ou objetos de arquivo."],
    tags: ["3D Universe", "Liberty City", "Dodo", "gang cars"]
  },
  {
    id: "vice-city",
    gameId: "vice-city",
    title: "Grand Theft Auto: Vice City",
    releaseYear: 2002,
    storyYear: "1986",
    universe: "3D Universe",
    city: "Vice City",
    apiPage: "Vehicles in GTA Vice City",
    source: gtaWikiVehicleSource("Vehicles in GTA Vice City"),
    totalLabel: "108 veículos listados",
    coverage: ["carros", "motos", "barcos", "helicópteros", "aviões/cenário", "RC", "emergência", "serviço público"],
    highlights: ["Infernus", "Cheetah", "Sabre Turbo", "PCJ-600", "Maverick", "Sea Sparrow", "Squalo", "VCPD Cheetah"],
    summary: "Vice City dá personalidade pop à frota: esportivos, motos, barcos e helicópteros viram parte da fantasia de Miami, drogas, praia, neon e império criminal.",
    systems: [
      "É o primeiro GTA 3D em que motos entram com grande peso na experiência.",
      "A cidade costeira aumenta a importância de barcos, helicópteros e veículos de praia.",
      "Carros como Sabre Turbo, Infernus, Cheetah e Voodoo viram ícones visuais da era 80 da série."
    ],
    precisionNotes: ["A lista inclui aeronaves e veículos de cenário que não necessariamente são utilizáveis de forma livre."],
    tags: ["3D Universe", "Vice City", "motos", "barcos", "helicópteros"]
  },
  {
    id: "san-andreas",
    gameId: "san-andreas",
    title: "Grand Theft Auto: San Andreas",
    releaseYear: 2004,
    storyYear: "1992",
    universe: "3D Universe",
    city: "San Andreas",
    apiPage: "Vehicles in GTA San Andreas",
    source: gtaWikiVehicleSource("Vehicles in GTA San Andreas"),
    totalLabel: "212 veículos de arquivo; 213 com Jetpack no dossiê",
    coverage: ["carros", "motos", "bicicletas", "aviões", "helicópteros", "barcos", "trens", "industriais", "serviço", "emergência", "RC", "Jetpack"],
    highlights: ["BMX", "NRG-500", "Hydra", "Hunter", "AT-400", "Jetpack", "Lowriders", "Monster", "Rhino"],
    summary: "San Andreas é a frota como parque criminal inteiro: bicicleta, lowrider, avião militar, trem, barco, monster truck, trator, caminhão e Jetpack convivem no mesmo estado.",
    systems: [
      "A escala de três cidades e zonas rurais exige mais categorias: bicicletas, aeronaves grandes, veículos industriais, off-road, lowriders e trens.",
      "Autoescolas, garagem, tuning, exportação/importação e customização tornam veículos parte do progresso de CJ.",
      "O Jetpack não é veículo no arquivo tradicional, mas é tratado pelo dossiê por impacto cultural e uso de mobilidade."
    ],
    precisionNotes: ["A página base cita 212 entradas em vehicles.ide e lista o Jetpack separadamente; por isso o dossiê marca a diferença."],
    tags: ["3D Universe", "San Andreas", "bicicletas", "aviões", "Jetpack", "customização"]
  },
  {
    id: "gta-advance",
    gameId: "gta-advance",
    title: "Grand Theft Auto Advance",
    releaseYear: 2004,
    storyYear: "1998",
    universe: "3D Universe",
    city: "Liberty City",
    apiPage: "Vehicles in GTA Advance",
    source: gtaWikiVehicleSource("Vehicles in GTA Advance"),
    totalLabel: "28 veículos listados",
    coverage: ["carros", "vans", "caminhões", "gang cars", "emergência", "serviço", "tanque"],
    highlights: ["Banshee", "Belly", "Diablo", "Hoods", "Yakuza", "Tank", "F1"],
    summary: "GTA Advance reduz a frota para caber no Game Boy Advance, mas mantém o essencial de Liberty City: carros de gangue, polícia, serviço e esportivos.",
    systems: [
      "A lista é pequena em comparação aos jogos de console, mas coerente com a escala portátil.",
      "Vários nomes se conectam à geografia de GTA III e às facções de Liberty City.",
      "O foco é mobilidade terrestre e leitura rápida em perspectiva top-down."
    ],
    precisionNotes: ["A página do GTA Wiki descreve 28 veículos categorizados."],
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
    apiPage: "Vehicles in GTA Liberty City Stories",
    source: gtaWikiVehicleSource("Vehicles in GTA Liberty City Stories"),
    totalLabel: "87 veículos listados",
    coverage: ["carros", "motos", "barcos", "aeronaves não obtíveis", "gang cars", "serviço", "emergência", "industriais"],
    highlights: ["Avenger", "Banshee", "Thunder-Rodd", "Leone Sentinel", "Hellenbach GT", "Police Maverick"],
    summary: "Liberty City Stories revisita Liberty City antes de GTA III e expande a frota com motos, carros de máfia e variações ligadas às famílias criminosas.",
    systems: [
      "A cidade de 1998 reforça a presença das famílias Leone, Sindacco e Forelli por veículos de gangue.",
      "Motos passam a existir em Liberty City dentro da era 3D portátil.",
      "Algumas aeronaves aparecem na lista como não obtíveis ou de cenário."
    ],
    precisionNotes: ["A página separa aeronaves não obtíveis; o modal mantém essa distinção quando carregada da fonte."],
    tags: ["3D Universe", "prequel", "Liberty City", "motos", "máfia"]
  },
  {
    id: "vice-city-stories",
    gameId: "vice-city-stories",
    title: "Grand Theft Auto: Vice City Stories",
    releaseYear: 2006,
    storyYear: "1984",
    universe: "3D Universe",
    city: "Vice City",
    apiPage: "Vehicles in GTA Vice City Stories",
    source: gtaWikiVehicleSource("Vehicles in GTA Vice City Stories"),
    totalLabel: "110 veículos listados",
    coverage: ["carros", "motos", "barcos", "helicópteros", "aviões", "serviço", "emergência", "gang cars"],
    highlights: ["Armadillo", "Bovver '64", "Little Willie", "Maverick", "VCPD Wintergreen", "Streetfighter"],
    summary: "Vice City Stories amplia a frota tropical antes de Tommy Vercetti, misturando contrabando, bases militares, barcos, helicópteros e veículos ligados ao império dos Vance.",
    systems: [
      "O jogo reforça mobilidade por água e ar, essencial para Vice City e para missões de contrabando.",
      "Veículos de governo e emergência têm papel forte por causa das conexões militares de Vic Vance.",
      "A frota preserva o sabor anos 80, mas com variações próprias da história de 1984."
    ],
    precisionNotes: ["Alguns itens da lista são variações, veículos especiais ou versões de missão."],
    tags: ["3D Universe", "prequel", "Vice City", "barcos", "helicópteros"]
  },
  {
    id: "gta-iv",
    gameId: "gta-iv",
    title: "Grand Theft Auto IV",
    releaseYear: 2008,
    storyYear: "2008",
    universe: "HD Universe",
    city: "Liberty City",
    apiPage: "Vehicles in GTA IV/table",
    source: gtaWikiVehicleSource("Vehicles in GTA IV"),
    totalLabel: "127 modelos listados na tabela",
    coverage: ["carros", "motos", "helicópteros", "barcos", "serviço", "emergência", "industriais", "sem aviões pilotáveis"],
    highlights: ["Sultan RS", "Comet", "Infernus", "Turismo", "Roman's Taxi", "Annihilator", "Police Cruiser"],
    summary: "GTA IV troca exagero por peso físico: suspensão, danos, inércia e ruas densas fazem cada carro parecer parte do drama realista de Liberty City.",
    systems: [
      "A física da era RAGE muda a sensação de condução: carros pesam, derrapam, capotam e deformam de modo mais dramático.",
      "O jogo tem helicópteros e barcos, mas não oferece aviões pilotáveis como San Andreas.",
      "Veículos particulares de personagens, táxis e viaturas reforçam a vida cotidiana e a sátira urbana."
    ],
    precisionNotes: ["A tabela do GTA Wiki lista modelos separados; variações e veículos de missão podem aparecer com nomenclatura própria."],
    tags: ["HD Universe", "Liberty City", "RAGE", "física", "helicópteros"]
  },
  {
    id: "lost-and-damned",
    gameId: "lost-and-damned",
    title: "GTA IV: The Lost and Damned",
    releaseYear: 2009,
    storyYear: "2008",
    universe: "HD Universe",
    city: "Liberty City",
    apiPage: "Vehicles in TLAD",
    source: gtaWikiVehicleSource("Vehicles in TLAD"),
    totalLabel: "25 veículos adicionados/listados",
    coverage: ["motos", "vans", "caminhões", "veículos do The Lost MC"],
    highlights: ["Hexer", "Daemon", "Innovation", "Bati Custom", "Lost Slamvan", "Gang Burrito"],
    summary: "The Lost and Damned é uma expansão sobre motocicletas: a frota traduz irmandade, estrada, sujeira, decadência e guerra de clubes.",
    systems: [
      "A expansão adiciona várias motos e melhora o papel delas em combate, formação e perseguição.",
      "Veículos de quatro rodas existem, mas o coração mecânico é o motoclube.",
      "A Hexer vira assinatura visual de Johnny Klebitz e do The Lost MC."
    ],
    precisionNotes: ["A lista inclui veículo duplicado/cortado indicado pela fonte; o modal carrega a observação quando presente no wikitext."],
    tags: ["HD Universe", "expansão", "The Lost MC", "motos"]
  },
  {
    id: "ballad-gay-tony",
    gameId: "ballad-gay-tony",
    title: "GTA IV: The Ballad of Gay Tony",
    releaseYear: 2009,
    storyYear: "2008",
    universe: "HD Universe",
    city: "Liberty City",
    apiPage: "Vehicles in TBOGT",
    source: gtaWikiVehicleSource("Vehicles in TBOGT"),
    totalLabel: "33+ veículos e retornos listados",
    coverage: ["carros de luxo", "motos", "helicópteros", "barcos", "polícia", "blindados"],
    highlights: ["Bullet GT", "Super Diamond", "APC", "Buzzard", "Swift", "Police Stinger", "Stretch E"],
    summary: "The Ballad of Gay Tony troca o peso cinzento de GTA IV por luxo, clubes, alta velocidade, helicópteros armados e veículos de excesso.",
    systems: [
      "A expansão adiciona carros mais vistosos e veículos militares/policiais que combinam com o tom explosivo da campanha.",
      "O Buzzard e o APC antecipam o gosto da era Online por veículos de alto poder ofensivo.",
      "A frota contrasta com TLAD: menos estrada, mais festa, dinheiro, risco e espetáculo."
    ],
    precisionNotes: ["A fonte separa veículos próprios da expansão e veículos retornando de TLAD; o número pode variar conforme essa leitura."],
    tags: ["HD Universe", "expansão", "luxo", "Buzzard", "APC"]
  },
  {
    id: "chinatown-wars",
    gameId: "chinatown-wars",
    title: "Grand Theft Auto: Chinatown Wars",
    releaseYear: 2009,
    storyYear: "2009",
    universe: "HD Universe",
    city: "Liberty City",
    apiPage: "Vehicles in GTA Chinatown Wars",
    source: gtaWikiVehicleSource("Vehicles in GTA Chinatown Wars"),
    totalLabel: "70 veículos listados",
    coverage: ["carros", "motos", "barcos", "helicópteros", "serviço público", "emergência", "SUVs/vans"],
    highlights: ["500 XLR8", "Comet", "Hellenbach", "Infernus", "Patriot", "Police Patrol", "Rhino"],
    summary: "Chinatown Wars combina a continuidade HD com leitura portátil/top-down: veículos são rápidos de identificar, úteis em perseguições e conectados ao tráfico e às Triads.",
    systems: [
      "A câmera portátil torna forma e cor essenciais para reconhecer classes de veículo.",
      "A cidade é HD Universe, mas o controle e a leitura lembram a tradição top-down.",
      "Helicópteros, barcos e veículos de emergência aparecem em escala menor, mas mantêm diversidade."
    ],
    precisionNotes: ["Alguns agrupamentos do GTA Wiki usam categorias amplas, especialmente para helicópteros e veículos especiais."],
    tags: ["HD Universe", "portátil", "Liberty City", "Triads"]
  },
  {
    id: "gta-v",
    gameId: "gta-v",
    title: "Grand Theft Auto V",
    releaseYear: 2013,
    storyYear: "2013",
    universe: "HD Universe",
    city: "Los Santos e Blaine County",
    apiPage: "Vehicles in GTA V/table",
    source: gtaWikiVehicleSource("Vehicles in GTA V"),
    totalLabel: "350 modelos listados na tabela",
    coverage: ["carros", "motos", "bicicletas", "aviões", "helicópteros", "barcos", "submersíveis", "militares", "serviço", "emergência", "industriais"],
    highlights: ["Adder", "BMX", "Blazer", "Duster", "Hydra", "P-996 LAZER", "Submersible", "Cargobob", "Tractor"],
    summary: "GTA V faz da frota um retrato de Los Angeles ficcional: supercarros, bicicletas, off-road, aviões, helicópteros, submarinos, caminhões e sucata rural.",
    systems: [
      "Los Santos e Blaine County pedem extremos: trânsito urbano, luxo, deserto, montanha, mar, base militar e aeroportos.",
      "Garagens, compras online, tuning, assaltos e troca de protagonistas tornam veículos parte da identidade de Michael, Franklin e Trevor.",
      "A base de GTA V vira o alicerce técnico e econômico de GTA Online."
    ],
    precisionNotes: ["A tabela do GTA Wiki inclui modelos separados, variações, veículos especiais e alguns itens de missão/cenário."],
    tags: ["HD Universe", "Los Santos", "bicicletas", "aviões", "submersíveis", "assaltos"]
  },
  {
    id: "gta-online",
    gameId: "gta-online",
    title: "Grand Theft Auto Online",
    releaseYear: 2013,
    storyYear: "2013 em diante",
    universe: "HD Universe",
    city: "Los Santos, Blaine County, Cayo Perico e operações globais",
    apiPage: "Vehicles in GTA Online/table",
    source: gtaWikiVehicleSource("Vehicles in GTA Online"),
    totalLabel: "864 veículos controláveis citados pela fonte; tabela inclui variações",
    coverage: ["carros", "motos", "bicicletas", "aviões", "helicópteros", "barcos", "submersíveis", "blindados", "armados", "drift", "Hao's Special Works", "serviço", "emergência"],
    highlights: ["Oppressor Mk II", "Deluxo", "Kosatka", "Toreador", "F-160 Raiju", "Imani Tech", "Hao's Special Works", "Open Wheel"],
    summary: "GTA Online transforma veículos em economia viva: coleção, meta competitiva, grind, negócios, guerra de lobby, tunagem, marcas, updates e eventos semanais.",
    systems: [
      "A lista cresce por DLCs e updates: Heists, Executives, Bikers, Gunrunning, Smuggler's Run, Doomsday, Arena War, Tuners, Cayo Perico, Contract, Drug Wars, Mercenaries, Bottom Dollar, Money Fronts e outros ciclos.",
      "Veículos deixam de ser só transporte: viram propriedade, arma, negócio, status, ferramenta de heist, plataforma aérea/naval e investimento.",
      "Por mudar com updates, a seção carrega a lista completa diretamente da fonte quando o jogador abre o dossiê."
    ],
    precisionNotes: ["GTA Online é vivo; números podem mudar após updates, remoções temporárias de lojas, versões Enhanced/E&E e veículos de missão."],
    tags: ["HD Universe", "Online", "DLC", "armados", "economia viva", "carreira"]
  },
  {
    id: "trilogy-definitive",
    gameId: "trilogy-definitive",
    title: "Grand Theft Auto: The Trilogy - The Definitive Edition",
    releaseYear: 2021,
    storyYear: "2001 / 1986 / 1992",
    universe: "3D Universe",
    city: "Liberty City, Vice City e San Andreas",
    source: gtaWikiVehicleSource("Grand Theft Auto: The Trilogy - The Definitive Edition"),
    totalLabel: "herda as frotas de GTA III, Vice City e San Andreas",
    coverage: ["remaster", "GTA III", "Vice City", "San Andreas", "carros", "motos", "bicicletas", "aviões", "barcos"],
    highlights: ["Dodo", "PCJ-600", "BMX", "Hydra", "Jetpack", "Rhino"],
    summary: "A coletânea remasteriza as três frotas da era PS2. O dossiê trata os veículos nos jogos originais, porque a base de conteúdo é herdada deles.",
    systems: [
      "A Definitive Edition muda apresentação, iluminação, modelos e interface, mas a lógica de frota pertence a GTA III, Vice City e San Andreas.",
      "Para leitura histórica, a melhor divisão é abrir cada jogo original no dossiê de veículos.",
      "Quando houver diferença técnica ou visual importante, ela deve ser tratada como remaster, não como novo cânone de frota."
    ],
    precisionNotes: ["Não é uma frota narrativa nova; é uma reedição/remaster de três jogos da era 3D."],
    relatedVehicleFiles: ["gta-iii", "vice-city", "san-andreas"],
    tags: ["3D Universe", "remaster", "coletânea"]
  },
  {
    id: "gta-vi",
    gameId: "gta-vi",
    title: "Grand Theft Auto VI",
    releaseYear: 2026,
    storyYear: "2026 / não confirmado",
    universe: "HD Universe",
    city: "Leonida e Vice City",
    apiPage: "Vehicles in GTA VI",
    source: gtaWikiVehicleSource("Vehicles in GTA VI"),
    totalLabel: "lista completa não confirmada antes do lançamento",
    coverage: ["carros modernos", "picapes", "barcos", "aeronaves", "viaturas", "praia/pântano", "não confirmado"],
    highlights: ["car culture de Leonida", "tráfego de Vice City", "barcos e costa", "viaturas e perseguições"],
    summary: "GTA VI ainda não tem frota completa confirmada. O dossiê registra apenas o que a Rockstar mostrou oficialmente e separa isso de leitura de trailer, vazamento ou especulação.",
    systems: [
      "A Rockstar já mostrou Leonida/Vice City com forte cultura automotiva, costa, estradas, vida noturna, policiamento e tráfego denso.",
      "Modelos específicos, lista completa, dirigibilidade, classes e lojas ainda não foram detalhados oficialmente.",
      "Qualquer nome não confirmado pela Rockstar deve aparecer como interpretação, referência visual ou dado de wiki sujeito a revisão."
    ],
    precisionNotes: ["Não há lista completa oficial de veículos de GTA VI em 28 de maio de 2026; a página do GTA Wiki mistura material oficial revelado e itens de vazamentos com aviso."],
    fallbackGroups: [
      {
        label: "Confirmado em alto nível / material promocional",
        items: [
          "tráfego urbano moderno em Vice City",
          "carros e picapes de Leonida em trailers/screenshots",
          "barcos e veículos costeiros",
          "viaturas e perseguições policiais",
          "aeronaves e vida de aeroporto/céu vistas em material promocional"
        ]
      }
    ],
    tags: ["HD Universe", "GTA VI", "Leonida", "não confirmado", "Rockstar"]
  }
];

Object.assign(window, {
  vehicleDossierData
});
