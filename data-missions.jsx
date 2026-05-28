/* ============ GTA MISSION DOSSIER DATA ============ */

const gtaWikiMissionSource = (page, label = "GTA Wiki") => ({
  label,
  url: `https://gta.fandom.com/wiki/${page.replaceAll(" ", "_")}`
});

const missionDossierData = [
  {
    id: "gta-1",
    gameId: "gta-1",
    title: "Grand Theft Auto",
    releaseYear: 1997,
    storyYear: "1997",
    universe: "2D Universe",
    city: "Liberty City, San Andreas e Vice City",
    apiPage: "Missions in GTA",
    source: gtaWikiMissionSource("Missions in GTA"),
    totalLabel: "90 missões no PC; 88 no PlayStation; índice expandido",
    coverage: ["phone missions", "vehicle missions", "hidden phone missions", "endings", "pontuação-alvo"],
    highlights: ["Gangsta Bang", "Heist Almighty", "Mandarin Mayhem", "Tequila Slammer", "Bent Cop Blues", "Rasta Blasta"],
    summary: "O primeiro GTA organiza campanha por cidades, capítulos, telefones, veículos e pontuação-alvo. A história é menos cinematográfica, mas já existe uma malha de facções, trabalhos e finais por capítulo.",
    systems: [
      "Liberty City tem 24 missões no PC; duas foram removidas no PlayStation por limitações ligadas a trem.",
      "San Andreas e Vice City usam capítulos com telefones, missões de veículo e finais, todos guiados por score.",
      "A estrutura é arcade: completar trabalhos aumenta pontuação, desbloqueia progressão e fecha blocos criminais."
    ],
    precisionNotes: [
      "A contagem varia por plataforma: a própria fonte separa PC de PlayStation/Game Boy Color.",
      "O modal carrega um índice expandido por capítulos, telefones, veículos e finais; por isso pode exibir subentradas além da contagem editorial principal."
    ],
    tags: ["2D Universe", "top-down", "phone missions", "pontuação"]
  },
  {
    id: "london-1969",
    gameId: "london-1969",
    title: "GTA: London 1969",
    releaseYear: 1999,
    storyYear: "1969",
    universe: "2D Universe",
    city: "London",
    apiPage: "Missions in GTA London 1969",
    source: gtaWikiMissionSource("Missions in GTA London 1969"),
    totalLabel: "43 missões + Other Missions",
    coverage: ["phonebox missions", "vehicle missions", "walkie talkie missions", "endings"],
    highlights: ["Boys Will Be Thieves", "Mods and Sods", "Chelsea Smile", "Dead Certainty", "Hot Wheels"],
    summary: "London 1969 mantém o formato de capítulos da era 2D, mas troca a iconografia americana por crime britânico, gangues londrinas e humor sessentista.",
    systems: [
      "A campanha é dividida em capítulos com missões por telefone, veículo e encerramento.",
      "A progressão continua dependente de pontuação, não de narrativa cinematográfica contínua.",
      "A ambientação britânica muda tom, nomes e referências sem romper a lógica de GTA 1."
    ],
    precisionNotes: [
      "A fonte lista 43 missões na campanha principal.",
      "O modal preserva capítulos, subtipos e Other Missions como Kill Frenzies quando aparecem na página pública."
    ],
    tags: ["2D Universe", "London", "expansão", "phonebox"]
  },
  {
    id: "london-1961",
    gameId: "london-1961",
    title: "GTA: London 1961",
    releaseYear: 1999,
    storyYear: "1961",
    universe: "2D Universe",
    city: "London",
    apiPage: "Missions in GTA London 1961",
    source: gtaWikiMissionSource("Missions in GTA London 1961"),
    totalLabel: "10 missões",
    coverage: ["phonebox missions", "walkie talkie missions", "vehicle missions", "ending"],
    highlights: ["When We Were Very Small", "Phonebox Missions", "Walkie Talkie Missions", "Vehicle Missions"],
    summary: "London 1961 é um complemento curto para PC, funcionando como arquivo histórico menor dentro da fase 2D da franquia.",
    systems: [
      "A estrutura é compacta e concentrada em um único capítulo.",
      "O interesse principal é histórico: uma rara volta da série a Londres antes da fixação definitiva nos EUA.",
      "A campanha usa a mesma linguagem de telefones, veículos e conclusão por score."
    ],
    precisionNotes: ["A expansão é menor e não deve ser lida como jogo principal completo."],
    tags: ["2D Universe", "London", "expansão gratuita", "curto"]
  },
  {
    id: "gta-2",
    gameId: "gta-2",
    title: "Grand Theft Auto 2",
    releaseYear: 1999,
    storyYear: "1999 / futuro ambíguo",
    universe: "2D Universe",
    city: "Anywhere City",
    apiPage: "Missions in GTA 2",
    source: gtaWikiMissionSource("Missions in GTA 2"),
    totalLabel: "missões por distrito e facções",
    coverage: ["districts", "gang missions", "jobs", "bonus stages", "final job"],
    highlights: ["Downtown District", "Residential District", "Industrial District", "Zaibatsu", "Loonies", "Yakuza"],
    summary: "GTA 2 organiza missões por distritos e reputação com gangues. O jogador negocia respeito entre facções em uma Anywhere City distópica.",
    systems: [
      "As missões são ligadas a gangues e distritos, com dificuldade e recompensas conectadas à reputação.",
      "O formato reforça o tom experimental de GTA 2: menos drama pessoal, mais tabuleiro de facções.",
      "A fonte inclui variações por versão e bônus, então o modal separa por agrupamentos públicos."
    ],
    precisionNotes: ["GTA 2 tem diferenças entre versões e uma cronologia deliberadamente ambígua."],
    tags: ["2D Universe", "Anywhere City", "gangues", "reputação"]
  },
  {
    id: "gta-iii",
    gameId: "gta-iii",
    title: "Grand Theft Auto III",
    releaseYear: 2001,
    storyYear: "2001",
    universe: "3D Universe",
    city: "Liberty City",
    apiPage: "Missions in GTA III",
    source: gtaWikiMissionSource("Missions in GTA III"),
    totalLabel: "story, phone, off-road, RC e serviços",
    coverage: ["story missions", "phone missions", "off-road", "RC", "import/export", "paramedic", "firefighter", "taxi", "vigilante"],
    highlights: ["Give Me Liberty", "Bomb Da Base", "Last Requests", "S.A.M.", "The Exchange"],
    summary: "GTA III define a missão moderna de GTA: contatos, ícones no mapa, ilhas bloqueadas, telefonemas, atividades paralelas e recompensas de cidade.",
    systems: [
      "Portland, Staunton Island e Shoreside Vale organizam a campanha e controlam progressão geográfica.",
      "Missões de telefone, RC, off-road e serviços contam para a experiência completa e parte do 100%.",
      "A estrutura faz Liberty City parecer uma rede de favores, traições e facções."
    ],
    precisionNotes: ["A fonte inclui missões principais e atividades necessárias/relacionadas ao 100%; o dossiê preserva os grupos."],
    tags: ["3D Universe", "Liberty City", "story missions", "phone missions"]
  },
  {
    id: "vice-city",
    gameId: "vice-city",
    title: "Grand Theft Auto: Vice City",
    releaseYear: 2002,
    storyYear: "1986",
    universe: "3D Universe",
    city: "Vice City",
    apiPage: "Missions in GTA Vice City",
    source: gtaWikiMissionSource("Missions in GTA Vice City"),
    totalLabel: "história, propriedades e side missions",
    coverage: ["story missions", "asset missions", "phone missions", "races", "RC", "serviços"],
    highlights: ["In the Beginning", "Back Alley Brawl", "Rub Out", "Shakedown", "Keep Your Friends Close..."],
    summary: "Vice City transforma missão em ascensão de império: Tommy deixa de fazer trabalhos para outros e passa a comprar propriedades, gerar receita e dominar a cidade.",
    systems: [
      "A campanha mistura contatos narrativos com missões de propriedades que sustentam o império Vercetti.",
      "O avanço exige completar ativos específicos, reforçando a fantasia de chefe criminal.",
      "Phone missions, corridas, RC e serviços completam o mapa além da história central."
    ],
    precisionNotes: ["Algumas missões de propriedades são obrigatórias para liberar o final, mesmo parecendo secundárias."],
    tags: ["3D Universe", "Vice City", "propriedades", "império"]
  },
  {
    id: "san-andreas",
    gameId: "san-andreas",
    title: "Grand Theft Auto: San Andreas",
    releaseYear: 2004,
    storyYear: "1992",
    universe: "3D Universe",
    city: "San Andreas",
    apiPage: "Missions in GTA San Andreas",
    source: gtaWikiMissionSource("Missions in GTA San Andreas"),
    totalLabel: "campanha estadual, escolas, atividades e 100%",
    coverage: ["story missions", "gang warfare", "school missions", "asset missions", "races", "courier", "vehicle services"],
    highlights: ["Big Smoke", "The Green Sabre", "Black Project", "Vertical Bird", "End of the Line"],
    summary: "San Andreas é uma campanha de deslocamento: CJ atravessa Los Santos, campo, San Fierro, deserto e Las Venturas enquanto a missão muda de gangue de rua para conspiração estatal.",
    systems: [
      "A campanha se expande por regiões e sistemas: territórios, escolas, propriedades, cassino, aviação e assaltos.",
      "Missões de escola, veículos, courier e atividades paralelas completam o estado e a progressão de 100%.",
      "A estrutura dá escala épica à queda e reconstrução da Grove Street Families."
    ],
    precisionNotes: ["A fonte inclui missões principais, secundárias e atividades; algumas são opcionais, outras contam para 100%."],
    tags: ["3D Universe", "San Andreas", "gang warfare", "100%", "escolas"]
  },
  {
    id: "gta-advance",
    gameId: "gta-advance",
    title: "Grand Theft Auto Advance",
    releaseYear: 2004,
    storyYear: "1998",
    universe: "3D Universe",
    city: "Liberty City",
    apiPage: "Missions in GTA Advance",
    source: gtaWikiMissionSource("Missions in GTA Advance"),
    totalLabel: "49 missões listadas",
    coverage: ["Portland", "Staunton Island", "Shoreside Vale", "rampages", "side missions"],
    highlights: ["Jump Start", "Dirty Laundry", "Twisted Metal", "Freedom Flies", "Love of Money"],
    summary: "GTA Advance usa Liberty City portátil para contar vingança e traição antes de GTA III, com missões distribuídas pelas ilhas conhecidas.",
    systems: [
      "A campanha acompanha Mike e reorganiza Liberty City em formato top-down portátil.",
      "A lista pública separa missões por ilha e inclui atividades laterais.",
      "É um caso importante de continuidade 3D contada com linguagem portátil."
    ],
    precisionNotes: ["O jogo tem escopo menor e estrutura diferente dos títulos PS2."],
    tags: ["3D Universe", "portátil", "Liberty City", "prequel"]
  },
  {
    id: "liberty-city-stories",
    gameId: "liberty-city-stories",
    title: "Grand Theft Auto: Liberty City Stories",
    releaseYear: 2005,
    storyYear: "1998",
    universe: "3D Universe",
    city: "Liberty City",
    apiPage: "Missions in GTA Liberty City Stories",
    source: gtaWikiMissionSource("Missions in GTA Liberty City Stories"),
    totalLabel: "campanha Leone + atividades",
    coverage: ["story missions", "side missions", "races", "RC", "vehicle missions", "100%"],
    highlights: ["Home Sweet Home", "Made Man", "The Sicilian Gambit", "Car Salesman", "Avenging Angels"],
    summary: "Liberty City Stories mostra Toni Cipriani retornando à família Leone e costura o passado mafioso que leva a GTA III.",
    systems: [
      "Missões por contatos da máfia estruturam a guerra Leone, Sindacco, Forelli e Sicilianos.",
      "Atividades paralelas de PSP dão densidade ao 100% e ao retorno de Liberty City.",
      "A campanha funciona como prequel direto de GTA III."
    ],
    precisionNotes: ["A fonte inclui atividades e desafios além da campanha central."],
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
    apiPage: "Missions in GTA Vice City Stories",
    source: gtaWikiMissionSource("Missions in GTA Vice City Stories"),
    totalLabel: "império Vance, propriedades e side missions",
    coverage: ["story missions", "empire building", "side missions", "races", "vehicle missions"],
    highlights: ["Soldier", "From Zero to Hero", "Light My Pyre", "Empire Building", "Phil Cassidy"],
    summary: "Vice City Stories conta a queda moral de Vic Vance e usa missões de império para mostrar como o crime cresce antes da chegada de Tommy Vercetti.",
    systems: [
      "O sistema de Empire Building transforma negócios em progressão territorial e econômica.",
      "A campanha cruza exército, família Vance, Mendez, Martinez, Diaz e gangues locais.",
      "A lista pública separa história, negócios e atividades paralelas."
    ],
    precisionNotes: ["Atividades de império são essenciais para entender a estrutura do jogo, não apenas extras."],
    tags: ["3D Universe", "prequel", "Vice City", "empire building"]
  },
  {
    id: "gta-iv",
    gameId: "gta-iv",
    title: "Grand Theft Auto IV",
    releaseYear: 2008,
    storyYear: "2008",
    universe: "HD Universe",
    city: "Liberty City",
    apiPage: "Missions in GTA IV",
    source: gtaWikiMissionSource("Missions in GTA IV"),
    totalLabel: "história, escolhas, personagens aleatórios e serviços",
    coverage: ["story missions", "branching choices", "random characters", "friends", "vigilante", "assassin"],
    highlights: ["The Cousins Bellic", "Three Leaf Clover", "Museum Piece", "That Special Someone", "Out of Commission"],
    summary: "GTA IV usa missões para desmontar o sonho americano de Niko Bellic: cada trabalho aproxima dinheiro, traição, trauma de guerra e escolhas morais.",
    systems: [
      "A campanha inclui escolhas que afetam mortes, recompensas e finais.",
      "Amizades, atividades e personagens aleatórios ampliam Liberty City além da linha principal.",
      "O tom é mais dramático e menos acumulativo que San Andreas."
    ],
    precisionNotes: ["A fonte lista missões de história e grupos paralelos; escolhas podem alterar ordem e disponibilidade."],
    tags: ["HD Universe", "Liberty City", "escolhas", "drama"]
  },
  {
    id: "lost-and-damned",
    gameId: "lost-and-damned",
    title: "GTA IV: The Lost and Damned",
    releaseYear: 2009,
    storyYear: "2008",
    universe: "HD Universe",
    city: "Liberty City",
    apiPage: "Missions in TLAD",
    source: gtaWikiMissionSource("Missions in TLAD"),
    totalLabel: "22 missões de história + side missions",
    coverage: ["story missions", "gang wars", "bike races", "random characters"],
    highlights: ["Clean and Serene", "This Shit's Cursed", "Diamonds in the Rough", "Get Lost", "Gang Wars"],
    summary: "The Lost and Damned organiza missões como crônica de decadência do The Lost MC: lealdade, traição, guerra de clubes e autodestruição.",
    systems: [
      "A campanha é mais curta e focada que GTA IV, com forte identidade de motoclube.",
      "Gang Wars e Bike Races expandem o tema de irmandade armada e estrada urbana.",
      "As missões se conectam a eventos paralelos de GTA IV e TBOGT, especialmente diamantes."
    ],
    precisionNotes: ["A ordem lógica da fonte cruza eventos com GTA IV e TBOGT."],
    tags: ["HD Universe", "expansão", "The Lost MC", "motoclube"]
  },
  {
    id: "ballad-gay-tony",
    gameId: "ballad-gay-tony",
    title: "GTA IV: The Ballad of Gay Tony",
    releaseYear: 2009,
    storyYear: "2008",
    universe: "HD Universe",
    city: "Liberty City",
    apiPage: "Missions in TBOGT",
    source: gtaWikiMissionSource("Missions in TBOGT"),
    totalLabel: "história, club management e atividades",
    coverage: ["story missions", "club management", "drug wars", "base jumps", "random characters"],
    highlights: ["I Luv LC", "For the Man Who Has Everything", "Ladies' Night", "Departure Time", "Club Management"],
    summary: "The Ballad of Gay Tony usa missões de excesso: clubes, diamantes, celebridades, helicópteros, máfia e luxo criminoso.",
    systems: [
      "A campanha de Luis contrasta com o tom pesado de GTA IV e a decadência de TLAD.",
      "Club Management, Drug Wars e Base Jumps dão atividades próprias ao mundo noturno.",
      "O episódio fecha a trama dos diamantes por outro ângulo."
    ],
    precisionNotes: ["A fonte separa história e atividades laterais; algumas atividades têm múltiplas entradas."],
    tags: ["HD Universe", "expansão", "nightlife", "diamantes"]
  },
  {
    id: "chinatown-wars",
    gameId: "chinatown-wars",
    title: "Grand Theft Auto: Chinatown Wars",
    releaseYear: 2009,
    storyYear: "2009",
    universe: "HD Universe",
    city: "Liberty City",
    apiPage: "Missions in GTA Chinatown Wars",
    source: gtaWikiMissionSource("Missions in GTA Chinatown Wars"),
    totalLabel: "missões principais, extras e atividades portáteis",
    coverage: ["main missions", "PSP exclusive", "Social Club", "side missions", "drug dealing"],
    highlights: ["Yu Jian", "Raw Deal", "Salt in the Wound", "Excess Delivery", "HoboTron"],
    summary: "Chinatown Wars combina trama de honra, Triads e vingança com sistemas portáteis como tráfico, entregas e atividades rápidas.",
    systems: [
      "A campanha principal acompanha Huang Lee e a espada Yu Jian.",
      "A fonte separa conteúdos exclusivos/baixáveis e atividades laterais.",
      "A estrutura portátil valoriza missões curtas, repetíveis e sistemas econômicos."
    ],
    precisionNotes: ["Alguns conteúdos dependiam de versão/plataforma e serviços online da época."],
    tags: ["HD Universe", "portátil", "Triads", "Social Club"]
  },
  {
    id: "gta-v",
    gameId: "gta-v",
    title: "Grand Theft Auto V",
    releaseYear: 2013,
    storyYear: "2013",
    universe: "HD Universe",
    city: "Los Santos e Blaine County",
    apiPage: "Missions in GTA V",
    source: gtaWikiMissionSource("Missions in GTA V"),
    totalLabel: "69 story missions + side content",
    coverage: ["main story", "heists", "heist setups", "strangers and freaks", "random events", "hobbies"],
    highlights: ["Prologue", "The Jewel Store Job", "Blitz Play", "The Bureau Raid", "The Big Score", "The Third Way"],
    summary: "GTA V coloca missão como montagem de assaltos: três protagonistas, setups, escolhas de abordagem, equipe, roubo e consequência.",
    systems: [
      "A história principal tem 69 missões, mas a página também cruza atividades e conteúdos paralelos.",
      "Heists e setups organizam grande parte da campanha em planejamento e execução.",
      "A ordem pode variar porque várias missões ficam disponíveis ao mesmo tempo para personagens diferentes."
    ],
    precisionNotes: ["A própria fonte avisa que a lista não reflete uma ordem cronológica obrigatória de conclusão."],
    tags: ["HD Universe", "Los Santos", "heists", "três protagonistas"]
  },
  {
    id: "gta-online",
    gameId: "gta-online",
    title: "Grand Theft Auto Online",
    releaseYear: 2013,
    storyYear: "2013 em diante",
    universe: "HD Universe",
    city: "Los Santos, Blaine County, Cayo Perico e operações globais",
    apiPage: "Missions in GTA Online",
    source: gtaWikiMissionSource("Missions in GTA Online"),
    totalLabel: "arquivo vivo de contatos e atividades",
    coverage: ["contact missions", "lowriders", "short trips", "repo work", "casino", "contract", "drug wars", "dispatch", "jobs"],
    highlights: ["Lamar Davis", "Gerald", "Simeon Yetarian", "Martin Madrazo", "The Contract", "First Dose", "Last Dose"],
    summary: "GTA Online não tem campanha única: missões viram plataforma viva de contatos, negócios, heists, DLCs, eventos, jobs e atividades com recompensas variáveis.",
    systems: [
      "A lista muda conforme updates, disponibilidade, versões, eventos e recortes que a comunidade chama de missão.",
      "Contato, freemode, heist, business, adversary e job não são sempre a mesma coisa; o dossiê usa a página de missions como índice de referência.",
      "O modal carrega a lista atual da fonte para evitar congelar um jogo que continua recebendo conteúdo."
    ],
    precisionNotes: ["Em GTA Online, missão pode significar contato, atividade de DLC, job ou conteúdo sazonal; o dossiê marca isso como arquivo vivo."],
    tags: ["HD Universe", "Online", "DLC", "contatos", "arquivo vivo"]
  },
  {
    id: "trilogy-definitive",
    gameId: "trilogy-definitive",
    title: "Grand Theft Auto: The Trilogy - The Definitive Edition",
    releaseYear: 2021,
    storyYear: "2001 / 1986 / 1992",
    universe: "3D Universe",
    city: "Liberty City, Vice City e San Andreas",
    source: gtaWikiMissionSource("Grand Theft Auto: The Trilogy - The Definitive Edition"),
    totalLabel: "herda missões de GTA III, Vice City e San Andreas",
    coverage: ["remaster", "GTA III", "Vice City", "San Andreas", "missões herdadas"],
    highlights: ["The Exchange", "Keep Your Friends Close...", "End of the Line"],
    summary: "A Definitive Edition não cria uma campanha nova; ela remasteriza as missões de GTA III, Vice City e San Andreas.",
    systems: [
      "Para leitura completa, abra as fichas dos três jogos originais.",
      "A coletânea muda apresentação, interface e controles, mas não muda o núcleo narrativo das missões.",
      "O dossiê mantém essa entrada como referência editorial para a remasterização."
    ],
    precisionNotes: ["Não é uma linha de missões inédita; é uma reedição/remaster de três campanhas."],
    relatedMissionFiles: ["gta-iii", "vice-city", "san-andreas"],
    tags: ["3D Universe", "remaster", "campanhas herdadas"]
  },
  {
    id: "gta-vi",
    gameId: "gta-vi",
    title: "Grand Theft Auto VI",
    releaseYear: 2026,
    storyYear: "2026 / não confirmado",
    universe: "HD Universe",
    city: "Leonida e Vice City",
    source: gtaWikiMissionSource("Grand Theft Auto VI"),
    totalLabel: "missões não confirmadas antes do lançamento",
    coverage: ["não confirmado", "material promocional", "Lucia", "Jason", "Leonida"],
    highlights: ["Lucia Caminos", "Jason Duval", "Vice City", "Leonida"],
    summary: "GTA VI ainda não tem lista oficial de missões. A Rockstar divulgou protagonistas, cenário e premissa, mas não publicou nomes, ordem ou estrutura de campanha.",
    systems: [
      "Qualquer lista de missão antes do lançamento deve ser tratada como não confirmada, vazamento ou especulação.",
      "O dossiê registra apenas o nível confirmado: Lucia, Jason, Leonida/Vice City e uma trama criminal moderna.",
      "A seção fica preparada para receber a lista quando houver fonte pública confiável."
    ],
    precisionNotes: ["Em 28 de maio de 2026, não há lista oficial completa de missões de GTA VI publicada pela Rockstar."],
    fallbackGroups: [{ label: "Confirmado oficialmente", items: ["Lista completa de missões ainda não confirmada pela Rockstar"] }],
    tags: ["HD Universe", "GTA VI", "não confirmado", "Leonida"]
  }
];

Object.assign(window, {
  missionDossierData
});
