/* ============ GTA VI DATA (window.VI_DATA) ============
 * Dados da experiência GTA VI no estilo do site oficial.
 * Fonte primária: Rockstar Games (rockstargames.com/VI, Newswire) e
 * cobertura de imprensa de 2023-2026. Tudo que é rumor está marcado.
 * Este arquivo NÃO renderiza nada: apenas expõe window.VI_DATA.
 * Ordem no bundle: data-vi.jsx ANTES de sections-vi.jsx.
 */

/* Helpers i18n seguros (pendurados em window para evitar redeclaração
 * de const em escopo compartilhado do bundle). */
if (!window.__t) { /* runtime i18n pode não existir ainda; fallback é o próprio texto */ }
window.__T = window.__T || ((k, f) => (window.__t ? window.__t(k, f) : f));
window.__TT = window.__TT || ((p, id, field, fb) => (window.__tt ? window.__tt(p, id, field, fb) : fb));

window.VI_DATA = {
  /* ---------- Lançamento, edições e pré-venda ---------- */
  release: {
    date: "2026-11-19",
    dateLabel: "19 de novembro de 2026",
    weekday: "quinta-feira",
    /* Meia-noite no fuso da Costa Leste dos EUA (Leonida/Flórida) */
    countdownTarget: "2026-11-19T00:00:00-05:00",
    platforms: ["PlayStation 5", "Xbox Series X|S"],
    pcStatus: "Versão de PC não anunciada (histórico da Rockstar sugere chegada posterior — expectativa, não confirmação).",
    preorderSince: "2026-06-25",
    preorderSinceLabel: "25 de junho de 2026",
    preorderBonus: "Vintage Vice City Pack",
    preorderDeadlineLabel: "pré-vendas confirmadas até 19 de novembro de 2026",
    editions: [
      {
        id: "vi-ed-standard",
        name: "Standard Edition",
        price: "US$ 79,99",
        priceBR: "R$ 449,90 (valor divulgado na pré-venda brasileira)",
        blurb: "O jogo completo em Leonida, para PS5 ou Xbox Series X|S.",
        items: [
          "Jogo base completo de Grand Theft Auto VI",
          "Bônus de pré-venda: Vintage Vice City Pack (para compras confirmadas até 19/11/2026)"
        ]
      },
      {
        id: "vi-ed-ultimate",
        name: "Ultimate Edition",
        price: "US$ 99,99",
        priceBR: "R$ 549,90 (valor divulgado na pré-venda brasileira)",
        blurb: "Tudo da Standard mais um pacote de conteúdo exclusivo com clima de Vice City clássica.",
        items: [
          "Tudo da Standard Edition + Vintage Vice City Pack na pré-venda",
          "Duas missões exclusivas: o arrastão no reduto da gangue PTT Youngin$ e a caça a carros de projeto com Wyman, colecionador excêntrico",
          "Cinco lojas exclusivas: Rideout Customs, Sara's Unisex Salon, Stock 305, Electric Fang Tattoo e One-Eyed Willie's",
          "Veículos exclusivos: '95 Grotti Cheetah, '67 Vapid Dominator Buggy, lancha Squalo em degradê rosa-azul e picape rebaixada Vapid Ganado",
          "Par de revólveres gravados vindos do Vercetti Estate (empunhaduras com palmeiras e luneta de alta performance)",
          "Estampa de arma exclusiva inspirada na camisa de palmeiras de Tommy Vercetti"
        ]
      }
    ],
    vintagePack: {
      id: "vi-preorder-pack",
      name: "Vintage Vice City Pack",
      note: "Garantido em qualquer edição para pré-vendas confirmadas até 19 de novembro de 2026.",
      items: [
        "Traje retrô para Jason",
        "Traje de era Vice City para Lucia",
        "Sedã clássico '55 Vapid Stanier",
        "Estampa de arma inspirada na camisa verde de palmeiras de Tommy Vercetti"
      ]
    },
    delays: [
      {
        id: "vi-delay-0",
        label: "Outono de 2025",
        detail: "Janela original, anunciada com o Trailer 1 em dezembro de 2023 e reafirmada pela Take-Two em maio de 2024.",
        status: "superada"
      },
      {
        id: "vi-delay-1",
        label: "26 de maio de 2026",
        detail: "Primeiro adiamento, anunciado em 2 de maio de 2025 — a Rockstar pediu desculpas e prometeu o nível de polimento esperado.",
        status: "superada"
      },
      {
        id: "vi-delay-2",
        label: "19 de novembro de 2026",
        detail: "Segundo adiamento, anunciado em 6 de novembro de 2025. É a data oficial vigente.",
        status: "vigente"
      }
    ]
  },

  /* ---------- Trailers ---------- */
  trailers: [
    {
      id: "vi-trailer-1",
      title: "Trailer 1 — Bem-vindos a Leonida",
      date: "2023-12-05",
      dateLabel: "5 de dezembro de 2023",
      youtubeId: "QdBZY2fkU-0",
      url: "https://www.youtube.com/watch?v=QdBZY2fkU-0",
      rumor: false,
      desc: "A revelação oficial: Lucia deixando a Penitenciária de Leonida, o caos ensolarado de uma Vice City contemporânea e o tom Bonnie & Clyde da dupla, ao som de 'Love Is A Long Road', de Tom Petty. Confirmou a ambientação e a janela original de 2025.",
      highlights: [
        "Mais de 90 milhões de visualizações em 24 horas no YouTube — recorde para estreia de trailer de jogo",
        "Primeira aparição de Lucia, primeira protagonista feminina de um GTA principal desde a era 2D",
        "Vice City moderna: praias lotadas, redes sociais dentro do jogo e a fauna da Flórida fictícia",
        "Trilha: 'Love Is A Long Road' (Tom Petty)"
      ]
    },
    {
      id: "vi-trailer-2",
      title: "Trailer 2 — Jason e Lucia",
      date: "2025-05-06",
      dateLabel: "6 de maio de 2025",
      youtubeId: "VQRLujxTm3c",
      url: "https://www.youtube.com/watch?v=VQRLujxTm3c",
      rumor: false,
      desc: "Capturado inteiramente em um PlayStation 5, mistura gameplay e cinemáticas: a rotina do casal em fuga, assaltos, mergulhos nos Keys e a apresentação oficial do estado de Leonida, ao som de 'Hot Together', de The Pointer Sisters.",
      highlights: [
        "Cerca de 475 milhões de visualizações em 24 horas somando todas as plataformas, segundo a Rockstar",
        "Capturado 100% em um PS5, combinando gameplay e cutscenes",
        "Chegou junto do site renovado: 8 grupos de personagens, 6 regiões e mais de 70 imagens oficiais",
        "Trilha: 'Hot Together' (The Pointer Sisters)"
      ]
    },
    {
      id: "vi-trailer-3",
      title: "Trailer 3 — aguardado",
      date: null,
      dateLabel: "sem data oficial",
      youtubeId: null,
      url: null,
      rumor: true,
      desc: "A Rockstar ainda não anunciou o Trailer 3. Com a pré-venda aberta e o site oficial recebendo atualizações em julho de 2026, a imprensa especializada projeta uma estreia entre o fim de julho e meados de agosto — trate como especulação até o anúncio oficial.",
      highlights: [
        "Sinais apontados por fãs: atualizações recentes no site oficial da Rockstar",
        "Projeção da imprensa: fim de julho a meados de agosto de 2026",
        "Nada confirmado pela Rockstar — rumor até segunda ordem"
      ]
    }
  ],

  /* ---------- Personagens (8 grupos do site oficial) ---------- */
  characters: [
    {
      id: "vi-jason-duval",
      name: "Jason Duval",
      role: "Protagonista",
      tagline: "Jason quer uma vida tranquila, mas as coisas só ficam mais difíceis.",
      desc: "Jason cresceu cercado de golpistas e trambiqueiros. Depois de uma passagem pelo Exército para tentar deixar a adolescência conturbada para trás, foi parar nos Keys fazendo o que sabe: trabalho pesado para contrabandistas locais. Talvez seja hora de tentar algo novo — e conhecer Lucia pode ser a melhor ou a pior coisa que já lhe aconteceu.",
      quote: "Se alguma coisa acontecer, estou logo atrás de você.",
      quoteSource: "Trailer 2",
      palette: { a: "#ff8a3d", b: "#1d3a5f" }
    },
    {
      id: "vi-lucia-caminos",
      name: "Lucia Caminos",
      role: "Protagonista",
      tagline: "O pai de Lucia a ensinou a brigar assim que ela aprendeu a andar.",
      desc: "A vida vem batendo desde então. Lutar pela família a colocou na Penitenciária de Leonida; pura sorte a tirou de lá. Lucia aprendeu a lição — daqui em diante, só jogadas inteligentes. Ela quer a vida boa e está disposta a arriscar tudo ao lado de Jason para conquistá-la.",
      quote: "Hoje em dia, a única coisa que importa é quem você conhece e o que você tem.",
      quoteSource: "Trailer 1",
      palette: { a: "#ff4f9a", b: "#3c1361" }
    },
    {
      id: "vi-cal-hampton",
      name: "Cal Hampton",
      role: "Amigo de Jason · vigia do rádio",
      tagline: "E se tudo na internet fosse verdade?",
      desc: "Amigo de Jason e também associado de Brian, Cal se sente mais seguro em casa, bisbilhotando as comunicações da Guarda Costeira com algumas cervejas e várias abas anônimas abertas. Ele vive na maré baixa da América — e está feliz assim. Paranoia casual adora companhia, mas Jason tem planos maiores.",
      quote: "Os psicopatas estão no comando. Vai se acostumando.",
      quoteSource: "Site oficial",
      palette: { a: "#7fd069", b: "#15291b" }
    },
    {
      id: "vi-boobie-ike",
      name: "Boobie Ike",
      role: "Lenda de Vice City · império do entretenimento",
      tagline: "Uma lenda local de Vice City — e ele age como tal.",
      desc: "Boobie é um dos poucos que transformaram os anos de rua em um império legítimo: imóveis, uma casa de striptease e um estúdio de gravação. Pode parecer que só pensa em si, mas é na parceria com o jovem Dre'Quan na Only Raw Records que ele mais aposta.",
      quote: "Sou todo sorrisos — até a hora de falar de negócios.",
      quoteSource: "Site oficial (adaptação)",
      palette: { a: "#f5c518", b: "#4a1d6e" }
    },
    {
      id: "vi-drequan-priest",
      name: "Dre'Quan Priest",
      role: "Produtor em ascensão · Only Raw Records",
      tagline: "Sempre foi mais hustler do que gângster.",
      desc: "Mesmo quando vendia nas ruas para se sustentar, o objetivo de Dre'Quan sempre foi a música. Agora que assinou com as Real Dimez, seus dias de agendar shows no clube do Boobie podem estar contados — a mira está na cena de Vice City inteira.",
      quote: "A música sempre foi o objetivo. O resto era só meio de chegar lá.",
      quoteSource: "Site oficial (adaptação)",
      palette: { a: "#9b5cff", b: "#120a24" }
    },
    {
      id: "vi-real-dimez",
      name: "Real Dimez",
      role: "Duo de rap e realeza das redes · Bae-Luxe e Roxy",
      tagline: "Amigas desde o colégio — e sócias no corre desde sempre.",
      desc: "Bae-Luxe e Roxy tiveram a malícia de transformar seus tempos de extorquir traficantes locais em dinheiro vivo, com faixas provocantes e presença implacável nas redes. Um hit com o rapper local DWNPLY as levou a outro patamar; cinco anos e muita confusão depois, assinaram com a Only Raw Records esperando que o raio caia duas vezes no mesmo lugar.",
      quote: "Do corre para as faixas, das faixas para o dinheiro vivo.",
      quoteSource: "Site oficial (adaptação)",
      palette: { a: "#ff3d8a", b: "#00c2c7" }
    },
    {
      id: "vi-raul-bautista",
      name: "Raul Bautista",
      role: "Assaltante de bancos veterano",
      tagline: "Experiência conta.",
      desc: "Confiança, charme e astúcia: Raul é um ladrão de bancos experiente, sempre caçando talentos dispostos a correr os riscos que trazem as maiores recompensas. Para ele, um assalto é como um bom prato — todos os ingredientes precisam estar no lugar antes de começar a cozinhar.",
      quote: "A vida é cheia de surpresas, meu amigo. Faríamos bem em lembrar disso.",
      quoteSource: "Site oficial",
      palette: { a: "#d9b26a", b: "#20242e" }
    },
    {
      id: "vi-brian-heder",
      name: "Brian Heder",
      role: "Contrabandista da velha guarda dos Keys",
      tagline: "Parece um caipira de praia de Leonida, se move como um tubarão-branco.",
      desc: "Brian é um contrabandista clássico da era de ouro do tráfico nos Keys. Ainda move produto pelo seu estaleiro ao lado de Lori, sua terceira esposa, e está no jogo há tempo suficiente para deixar o trabalho sujo com os outros. Deixa Jason morar de graça em uma de suas propriedades — desde que ajude nas cobranças locais e apareça de vez em quando para a sangria de Lori.",
      quote: "Estou nisso há tempo demais para sujar as próprias mãos.",
      quoteSource: "Site oficial (adaptação)",
      palette: { a: "#39c6a5", b: "#173a34" }
    }
  ],

  /* ---------- Lugares (estado de Leonida) ---------- */
  places: {
    intro: {
      id: "vi-leonida",
      name: "Estado de Leonida",
      tagline: "Somente em Leonida.",
      desc: "A versão Rockstar da Flórida: um estado inteiro de neon, pântano, usinas de açúcar e ruína turística, onde Vice City é só o começo. Seis regiões confirmadas pelo site oficial formam o maior e mais imersivo mundo da série até aqui.",
      vibe: "Sol, suor e más decisões"
    },
    list: [
      {
        id: "vi-vice-city",
        name: "Vice City",
        tagline: "O lado mais sombrio do lugar mais ensolarado da América.",
        desc: "A metrópole encharcada de neon segue sendo a capital do sol e da diversão — o glamour, o corre e a ganância da América capturados em uma única cidade. Fortunas nascem e desaparecem entre a orla, os condomínios e os bastidores da noite.",
        vibe: "Neon, grana e fachadas bonitas demais para ser verdade",
        grad: ["#ff9a3d", "#ff3d8a", "#5b2a86"]
      },
      {
        id: "vi-leonida-keys",
        name: "Leonida Keys",
        tagline: "O dress code é casual e os bares estão sempre abastecidos.",
        desc: "A vida neste arquipélago tropical não é chique, mas é fácil. Pegue seu drinque e estique a cadeira de praia — só fique atento: você está na porta de algumas das águas mais bonitas e perigosas de toda a América.",
        vibe: "Chinelo, isca viva e contrabando ao pôr do sol",
        grad: ["#ffd36b", "#39c6a5", "#0e5b6b"]
      },
      {
        id: "vi-grassrivers",
        name: "Grassrivers",
        tagline: "A joia indomável da coroa de Leonida.",
        desc: "Nunca se sabe o que há sob a superfície desta imensidão primordial. Os jacarés podem ser a atração mais famosa, mas existem predadores bem mais letais — e descobertas bem mais estranhas — entre os mangues.",
        vibe: "Aerobarcos, jacarés e segredos no pântano",
        grad: ["#c9e265", "#3f7d3a", "#12321f"]
      },
      {
        id: "vi-port-gellhorn",
        name: "Port Gellhorn",
        tagline: "A costa esquecida de Leonida.",
        desc: "Motéis baratos, atrações fechadas e strip malls vazios não vão trazer os turistas de volta, mas há uma nova economia neste antigo destino de férias — movida a cerveja forte, analgésicos e energéticos de posto de estrada.",
        vibe: "Glória desbotada e recomeços tortos",
        grad: ["#f2b48c", "#b96a4b", "#4a2f3a"]
      },
      {
        id: "vi-ambrosia",
        name: "Ambrosia",
        tagline: "Indústria americana e valores à moda antiga — custe o que custar.",
        desc: "No coração de Leonida, a refinaria de açúcar Allied Crystal garante os empregos, enquanto o moto clube local fornece praticamente todo o resto. Cidade de chaminés, poeira e lealdades antigas.",
        vibe: "Fumaça de usina, moto clube e suor",
        grad: ["#e8c66b", "#a65f2e", "#3a2a1c"]
      },
      {
        id: "vi-mount-kalaga",
        name: "Mount Kalaga National Park",
        tagline: "Espaço para respirar na fronteira norte do estado.",
        desc: "Marco nacional encostado na divisa norte de Leonida, o Mount Kalaga oferece caça, pesca e trilhas off-road de primeira. Nas matas fechadas do entorno, místicos caipiras e radicais paranoicos vivem longe dos olhos do governo.",
        vibe: "Trilhas, caça e gente que não quer ser encontrada",
        grad: ["#a9c4e0", "#4b6b8a", "#1c2a3a"]
      }
    ]
  },

  /* ---------- Confirmado vs. rumor ---------- */
  facts: {
    confirmed: [
      { id: "vi-fact-release", text: "Lançamento em 19 de novembro de 2026 (quinta-feira) para PlayStation 5 e Xbox Series X|S, após dois adiamentos oficiais." },
      { id: "vi-fact-duo", text: "Dois protagonistas jogáveis — Jason Duval e Lucia Caminos — presos a uma conspiração que atravessa o estado depois que um trabalho fácil dá errado." },
      { id: "vi-fact-map", text: "Ambientação no estado de Leonida: Vice City mais cinco regiões nomeadas (Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia e Mount Kalaga)." },
      { id: "vi-fact-trailer2", text: "O Trailer 2 foi capturado inteiramente em um PlayStation 5, combinando gameplay e cutscenes." },
      { id: "vi-fact-preorder", text: "Pré-venda aberta em 25 de junho de 2026: Standard por US$ 79,99 e Ultimate por US$ 99,99, ambas com o bônus Vintage Vice City Pack até o lançamento." },
      { id: "vi-fact-ultimate", text: "A Ultimate Edition inclui duas missões exclusivas, cinco lojas exclusivas, veículos clássicos e revólveres gravados do Vercetti Estate." },
      { id: "vi-fact-universe", text: "GTA VI pertence ao HD Universe (o mesmo de GTA IV e GTA V), com história independente — não é preciso jogar os anteriores." },
      { id: "vi-fact-site", text: "O site oficial apresenta oito grupos de personagens — de Cal Hampton e Boobie Ike a Raul Bautista e Brian Heder — cada um com sua própria teia de interesses." }
    ],
    rumors: [
      { id: "vi-rumor-pc", text: "Versão de PC: não anunciada. O histórico de GTA V e Red Dead Redemption 2 sugere chegada posterior aos consoles — expectativa da comunidade, não confirmação." },
      { id: "vi-rumor-trailer3", text: "Trailer 3: projeções da imprensa apontam para o fim de julho ou agosto de 2026, alimentadas por atualizações no site oficial. A Rockstar não anunciou nada." },
      { id: "vi-rumor-mapsize", text: "Tamanho do mapa: estimativas de fãs a partir de trailers e vazamentos falam no maior mapa da série. A Rockstar nunca divulgou números oficiais." },
      { id: "vi-rumor-online", text: "Novo GTA Online: nada oficial sobre o componente online de GTA VI. Por ora, GTA Online segue vivo dentro de GTA V." },
      { id: "vi-rumor-leak", text: "O mega-vazamento de setembro de 2022 (cerca de 90 vídeos) era real, mas mostrava uma build antiga de desenvolvimento — nada dali deve ser tratado como conteúdo final." }
    ]
  },

  /* ---------- Linha do tempo de anúncios ---------- */
  annTimeline: [
    {
      id: "vi-ann-2022-02",
      dateLabel: "4 de fevereiro de 2022",
      title: "Rockstar confirma o próximo GTA",
      desc: "Em post no Newswire, a Rockstar confirma oficialmente que o desenvolvimento da próxima entrada da série Grand Theft Auto está 'bem encaminhado'.",
      kind: "oficial"
    },
    {
      id: "vi-ann-2022-09",
      dateLabel: "18 de setembro de 2022",
      title: "O mega-vazamento",
      desc: "Cerca de 90 vídeos de uma build de desenvolvimento vazam na internet após uma invasão. A Rockstar confirma o ataque e lamenta a exposição precoce do projeto.",
      kind: "incidente"
    },
    {
      id: "vi-ann-2023-11",
      dateLabel: "8 de novembro de 2023",
      title: "Trailer 1 anunciado",
      desc: "Nos 25 anos da Rockstar, Sam Houser anuncia que o primeiro trailer do próximo GTA chega no início de dezembro.",
      kind: "oficial"
    },
    {
      id: "vi-ann-2023-12",
      dateLabel: "5 de dezembro de 2023",
      title: "Trailer 1 e janela de 2025",
      desc: "GTA VI é revelado com Lucia, Vice City e o estado de Leonida. Recorde de visualizações e janela de lançamento apontada para 2025.",
      kind: "oficial"
    },
    {
      id: "vi-ann-2024-05",
      dateLabel: "16 de maio de 2024",
      title: "Janela refinada: outono de 2025",
      desc: "A Take-Two restringe a previsão para o outono (hemisfério norte) de 2025 durante a divulgação de resultados.",
      kind: "oficial"
    },
    {
      id: "vi-ann-2025-05-02",
      dateLabel: "2 de maio de 2025",
      title: "Primeiro adiamento: 26 de maio de 2026",
      desc: "A Rockstar adia o jogo e pede desculpas, prometendo entregar o nível de polimento que os fãs esperam.",
      kind: "oficial"
    },
    {
      id: "vi-ann-2025-05-06",
      dateLabel: "6 de maio de 2025",
      title: "Trailer 2 e site renovado",
      desc: "Trailer 2 capturado em PS5, site oficial relançado com 8 grupos de personagens, 6 regiões de Leonida e mais de 70 imagens.",
      kind: "oficial"
    },
    {
      id: "vi-ann-2025-11-06",
      dateLabel: "6 de novembro de 2025",
      title: "Segundo adiamento: 19 de novembro de 2026",
      desc: "Novo adiamento de seis meses. 'Esses meses extras permitirão terminar o jogo com o nível de polimento que vocês esperam', diz a Rockstar.",
      kind: "oficial"
    },
    {
      id: "vi-ann-2026-06-25",
      dateLabel: "25 de junho de 2026",
      title: "Pré-venda mundial aberta",
      desc: "Edições Standard (US$ 79,99) e Ultimate (US$ 99,99) reveladas, com o Vintage Vice City Pack como bônus para qualquer pré-venda confirmada até o lançamento.",
      kind: "oficial"
    },
    {
      id: "vi-ann-2026-07",
      dateLabel: "Julho de 2026",
      title: "À espera do Trailer 3",
      desc: "O site oficial recebe atualizações e a imprensa projeta o Trailer 3 para o fim de julho ou agosto. Sem qualquer anúncio da Rockstar — pura especulação por enquanto.",
      kind: "rumor"
    }
  ],

  /* ---------- FAQ ---------- */
  faq: [
    {
      id: "vi-faq-date",
      q: "Quando GTA VI será lançado?",
      a: "Em 19 de novembro de 2026, uma quinta-feira. A data foi confirmada pela Rockstar em novembro de 2025, após dois adiamentos (a janela original era 2025 e depois 26 de maio de 2026)."
    },
    {
      id: "vi-faq-platforms",
      q: "Em quais plataformas o jogo sai?",
      a: "No lançamento, apenas PlayStation 5 e Xbox Series X|S. Nenhuma outra plataforma foi anunciada."
    },
    {
      id: "vi-faq-pc",
      q: "Vai ter versão de PC?",
      a: "Não foi anunciada. O histórico da Rockstar (GTA V e RDR2 chegaram ao PC um a dois anos depois dos consoles) alimenta a expectativa de um port futuro, mas isso é especulação — não confirmação."
    },
    {
      id: "vi-faq-price",
      q: "Quanto custa?",
      a: "Standard Edition por US$ 79,99 e Ultimate Edition por US$ 99,99. Na pré-venda brasileira, os valores divulgados pelas lojas foram R$ 449,90 e R$ 549,90, respectivamente."
    },
    {
      id: "vi-faq-preorder",
      q: "O que ganho na pré-venda?",
      a: "O Vintage Vice City Pack: traje retrô para Jason, traje de era Vice City para Lucia, o sedã clássico '55 Vapid Stanier e uma estampa de arma inspirada na camisa de Tommy Vercetti. Vale para qualquer edição confirmada até 19/11/2026."
    },
    {
      id: "vi-faq-editions",
      q: "O que a Ultimate Edition tem a mais?",
      a: "Duas missões exclusivas (o arrastão nos PTT Youngin$ e os carros de projeto de Wyman), cinco lojas exclusivas, veículos como o '95 Grotti Cheetah e o '67 Vapid Dominator Buggy, além de revólveres gravados do Vercetti Estate e uma estampa de arma com palmeiras."
    },
    {
      id: "vi-faq-protagonists",
      q: "Quem são os protagonistas?",
      a: "Jason Duval e Lucia Caminos, uma dupla criminosa no estilo Bonnie & Clyde. Lucia é a primeira protagonista feminina de um GTA principal desde a era 2D da série."
    },
    {
      id: "vi-faq-setting",
      q: "Onde o jogo se passa?",
      a: "No estado de Leonida, a Flórida do universo GTA. Vice City é a metrópole central, cercada por Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia e o Mount Kalaga National Park."
    },
    {
      id: "vi-faq-map",
      q: "Qual o tamanho do mapa?",
      a: "A Rockstar não divulgou números. Estimativas de fãs a partir dos trailers apontam o maior mapa da série, mas isso segue não oficial."
    },
    {
      id: "vi-faq-online",
      q: "E o modo online?",
      a: "Nada foi anunciado sobre o componente online de GTA VI. O GTA Online atual continua funcionando dentro de GTA V."
    },
    {
      id: "vi-faq-trailer3",
      q: "Quando sai o Trailer 3?",
      a: "Não há data oficial. Em julho de 2026, a imprensa projeta uma estreia entre o fim de julho e meados de agosto, com base em atualizações do site da Rockstar — trate como rumor."
    },
    {
      id: "vi-faq-canon",
      q: "Preciso jogar os GTA anteriores antes?",
      a: "Não. GTA VI faz parte do HD Universe (o mesmo de GTA IV e V), mas conta uma história independente, com novos personagens e cidade."
    }
  ]
};
