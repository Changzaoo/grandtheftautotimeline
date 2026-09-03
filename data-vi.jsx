/* ============ GTA VI DATA (window.VI_DATA) ============
 * Dados da experiência GTA VI no estilo do site oficial.
 * Fonte primária: Rockstar Games (rockstargames.com/VI, Newswire, canal
 * oficial no YouTube), o "Grand Theft Auto VI: An Extended Look" (27/08/2026)
 * e as prévias de imprensa liberadas no mesmo dia (IGN, The New York Times,
 * Kinda Funny, TGG, Dazed). Tudo que é rumor, estimativa ou leitura de
 * imprensa está marcado como tal.
 * Última revisão editorial: 3 de setembro de 2026.
 * Este arquivo NÃO renderiza nada: apenas expõe window.VI_DATA.
 * Ordem no bundle: data-vi.jsx ANTES de sections-vi.jsx.
 *
 * A camada "ao vivo" (sections-vi-live.jsx + api/vi-live.js) complementa este
 * arquivo com anúncios oficiais, notícias e edições do GTA Wiki sem precisar
 * de novo build — este arquivo é a base curada; a live é o radar.
 */

/* Helpers i18n seguros (pendurados em window para evitar redeclaração
 * de const em escopo compartilhado do bundle). */
if (!window.__t) { /* runtime i18n pode não existir ainda; fallback é o próprio texto */ }
window.__T = window.__T || ((k, f) => (window.__t ? window.__t(k, f) : f));
window.__TT = window.__TT || ((p, id, field, fb) => (window.__tt ? window.__tt(p, id, field, fb) : fb));

window.VI_DATA = {
  meta: {
    revisedAt: "2026-09-03",
    revisedLabel: "3 de setembro de 2026"
  },

  /* ---------- Lançamento, edições e pré-venda ---------- */
  release: {
    date: "2026-11-19",
    dateLabel: "19 de novembro de 2026",
    weekday: "quinta-feira",
    /* Meia-noite no fuso da Costa Leste dos EUA (Leonida/Flórida) */
    countdownTarget: "2026-11-19T00:00:00-05:00",
    unlockNote: "Desbloqueio à meia-noite no horário local de cada região (informação da Rockstar reproduzida pela imprensa).",
    platforms: ["PlayStation 5", "Xbox Series X|S"],
    pcStatus: "Versão de PC não anunciada (histórico da Rockstar sugere chegada posterior — expectativa, não confirmação).",
    preorderSince: "2026-06-25",
    preorderSinceLabel: "25 de junho de 2026",
    preorderBonus: "Vintage Vice City Pack",
    preorderDeadlineLabel: "pré-vendas confirmadas até 19 de novembro de 2026",
    preload: {
      id: "vi-preload",
      date: "2026-11-12",
      dateLabel: "12 de novembro de 2026",
      detail: "Quem comprar a versão digital pode baixar o jogo com antecedência a partir de 12 de novembro, exatamente uma semana antes do lançamento. Na edição física, o pré-load só começa quando o código chega — a caixa traz código de download, não disco.",
      sizeNote: "A Rockstar não divulgou o tamanho do arquivo. A faixa de 150 a 200 GB que circula na imprensa é estimativa, não dado oficial."
    },
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
        detail: "Segundo adiamento, anunciado em 6 de novembro de 2025. Data oficial vigente, reafirmada pela Rockstar em agosto de 2026 ('quase lá').",
        status: "vigente"
      }
    ]
  },

  /* ---------- Hardware oficial licenciado ---------- */
  hardware: [
    {
      id: "vi-hw-dualsense",
      name: "DualSense edição limitada GTA VI (2 versões)",
      dateLabel: "anunciado em 3 de setembro de 2026 (State of Play)",
      desc: "A Sony revelou dois controles DualSense oficiais: o branco, inspirado na Vice City ao amanhecer (praias, tons pastel), e o preto, inspirado na vida noturna e nos neons. Logo do jogo no touchpad, palmeiras e botões com brilho. Preço sugerido de US$ 84,99; pré-venda em 10 de setembro; lançamento em 19 de novembro de 2026. A versão preta é exclusiva da PlayStation Direct nos EUA, Reino Unido e principais mercados europeus.",
      status: "oficial"
    }
  ],

  /* ---------- Trailers e apresentações oficiais ---------- */
  trailers: [
    {
      id: "vi-trailer-1",
      kind: "trailer",
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
      kind: "trailer",
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
      id: "vi-extended-look",
      kind: "showcase",
      title: "An Extended Look — 26 minutos de gameplay",
      date: "2026-08-27",
      dateLabel: "27 de agosto de 2026",
      youtubeId: "tJbzMqJGH4k",
      url: "https://www.youtube.com/watch?v=tJbzMqJGH4k",
      rumor: false,
      desc: "A grande apresentação de gameplay: cerca de 26 minutos capturados em um PlayStation 5, estreando na Netflix às 15h (horário do Leste dos EUA) e chegando ao YouTube da Rockstar e ao site oficial às 21h. Mostra assaltos, perseguições, a troca entre Jason e Lucia, o sistema de procurado de seis estrelas, a vida noturna de Vice City e o dia a dia do casal em Leonida — na prática, o 'Trailer 3' que os fãs esperavam.",
      highlights: [
        "Anunciado em 6 de agosto de 2026 pela Newswire e por um teaser no canal oficial",
        "Estreia inédita na Netflix antes dos canais da própria Rockstar; 31,1 milhões de visualizações na plataforma em quatro dias e nº 1 em 87 dos 93 países medidos (dados divulgados pela imprensa)",
        "Pré-vendas subiram 436% no dia da estreia, segundo a Sensor Tower (estimativa de mercado, não número da Rockstar)",
        "Disponível também para download no site oficial (arquivo de 14,2 GB)",
        "Trilha: 14 músicas, de Depeche Mode e Phil Collins a Kodak Black e Sexyy Red — lista completa abaixo"
      ]
    },
    {
      id: "vi-trailer-3",
      kind: "trailer",
      title: "Trailer 3 / próximo vídeo — sem anúncio",
      date: null,
      dateLabel: "sem data oficial",
      youtubeId: null,
      url: null,
      rumor: true,
      desc: "Depois do Extended Look, a Rockstar não anunciou um novo trailer. A imprensa projeta uma peça final de marketing (trailer de lançamento) entre outubro e a semana do lançamento — projeção, não anúncio. Qualquer novo vídeo oficial aparece automaticamente na seção 'Ao vivo' deste arquivo.",
      highlights: [
        "Nada anunciado pela Rockstar até 3 de setembro de 2026",
        "Projeção da imprensa: trailer de lançamento perto de 19 de novembro",
        "Acompanhe a seção 'Ao vivo': ela lê o canal oficial da Rockstar no YouTube"
      ]
    }
  ],

  /* ---------- Mecânicas confirmadas ----------
   * status: "oficial" = mostrado pela Rockstar no Extended Look, nos trailers
   * ou dito por ela; "previa" = relatado por veículos que assistiram à sessão
   * hands-off no Rockstar North (julho/2026, embargo 27/08/2026). */
  mechanics: [
    {
      id: "vi-mech-duo",
      icon: "users",
      title: "Dois protagonistas, uma vida a dois",
      status: "oficial",
      summary: "Jason e Lucia são jogáveis e a troca acontece a qualquer momento, com a câmera subindo e cruzando o mapa até o outro personagem — o sistema de GTA V, agora com o casal dividindo carro, tiroteio e rotina.",
      items: [
        { text: "Troca de personagem a qualquer momento no mundo aberto (pode ficar bloqueada em trechos da história).", status: "oficial" },
        { text: "Em perseguições, dá para escolher quem dirige e quem atira — e trocar de papel no meio da fuga.", status: "oficial" },
        { text: "Quando estão juntos, o outro protagonista acompanha ('tag-along'); separados, cada um segue sua rotina.", status: "oficial" },
        { text: "Sistema de relacionamento opcional: explorar, fazer compras, salão, academia e assaltos juntos aproximam o casal; ligações, mensagens, andar de mãos dadas e abrir portas mudam com a intimidade. Não há bônus de gameplay pelo romance.", status: "previa" },
        { text: "O casal vive de graça numa propriedade de Brian Heder nos Leonida Keys; os dois têm rotinas próprias e recebem visitas no refúgio.", status: "oficial" }
      ]
    },
    {
      id: "vi-mech-combat",
      icon: "weapon",
      title: "Combate e tiro",
      status: "oficial",
      summary: "Tiroteio em terceira pessoa com cobertura, mira em câmera lenta que marca pontos letais (vermelho) e articulações para incapacitar (amarelo), desarme, fogo de supressão e kill-cams no estilo Max Payne.",
      items: [
        { text: "Cobertura com 'espiar e atirar' e câmera lenta ao mirar: pontos vermelhos matam, pontos amarelos derrubam sem matar; dá para acertar a arma e desarmar o inimigo.", status: "oficial" },
        { text: "Habilidades próprias: a de Jason destaca pontos fracos em câmera lenta; a de Lucia foca disparos únicos precisos.", status: "previa" },
        { text: "Fogo de supressão desorienta inimigos e civis; a barra de estamina pesa no combate.", status: "previa" },
        { text: "Troca instantânea entre as duas armas empunhadas sem abrir a roda; algumas armas são de uma mão só (a escopeta recarrega e é 'pega' com uma mão).", status: "oficial" },
        { text: "Limite realista: dois revólveres/pistolas escondidos e duas armas longas visíveis. O resto fica no porta-malas.", status: "previa" },
        { text: "Corpo a corpo com prompts contextuais — inclusive esfaqueada com salto agulha — e animações novas de luta.", status: "oficial" },
        { text: "Abraçadeiras para render, refém como escudo e carregar corpos (relatado nas prévias). Agachar existe; deitar não.", status: "previa" },
        { text: "Drive-by pela janela, da caçamba de picape, do banco do helicóptero e até nadando.", status: "oficial" },
        { text: "Arsenal visto: pistolas, escopetas, fuzis automáticos (um deles no estilo M16). Ammu-Nation volta, com customização mais profunda que em GTA V.", status: "oficial" }
      ]
    },
    {
      id: "vi-mech-wanted",
      icon: "star",
      title: "Procurado de 6 estrelas e perfil criminal",
      status: "oficial",
      summary: "As seis estrelas voltam. Crimes precisam ser vistos e denunciados; a polícia monta um retrato do suspeito (rosto, roupa, arma, carro) e estrelas vazias mostram que ela busca alguém sem saber quem.",
      items: [
        { text: "Seis níveis de procurado, com escalada de viaturas → agentes armados → helicópteros.", status: "oficial" },
        { text: "Sistema de testemunhas: se ninguém viu ou denunciou, não há estrela. Estrelas vazias = polícia procurando sem identificação completa.", status: "oficial" },
        { text: "A polícia guarda descrição de aparência, roupa, arma e veículo. Máscara, troca de roupa, troca de carro e separar o casal ajudam a escapar.", status: "oficial" },
        { text: "Ruas densas de Vice City complicam fugas de carro em níveis altos; a pé, becos e quintais viram rota.", status: "oficial" },
        { text: "Perfil Criminal: parecido com a Honra de RDR2, mas considera as circunstâncias — violência gratuita repetida pesa; gestos pequenos (jogar lixo no lixo) contam a favor; a violência de missões não é punida.", status: "oficial" }
      ]
    },
    {
      id: "vi-mech-robbery",
      icon: "database",
      title: "Assaltos, roubos e economia",
      status: "oficial",
      summary: "Toda loja pode ser roubada, com escolha entre velocidade e lucro. Carros roubados têm níveis de segurança, ferramentas específicas e um app que avalia o alvo antes do crime.",
      items: [
        { text: "Assaltos grandes e roubos pequenos: lojas de conveniência, postos, lojas de celular, bares, casas de drogas — de fininho ou na força.", status: "oficial" },
        { text: "Escolhas no cofre: explodir rápido (danifica os valores) ou achar a combinação (mais dinheiro, mais risco de polícia esperando na porta).", status: "oficial" },
        { text: "Receptadores ('fences') diferentes para joias, dinheiro marcado e veículos. Dinheiro de assalto precisa ser lavado.", status: "previa" },
        { text: "Dinheiro cai no chão se você morre; deposite no caixa eletrônico — a conta bancária é conjunta do casal. Há dois saldos: em mãos e no banco.", status: "previa" },
        { text: "Furto de carro parado por níveis: carro velho = chave-mestra ('slim jim') ou vidro quebrado; carro de luxo = clonador de chave ou ferramenta avançada, liberada com progressão.", status: "oficial" },
        { text: "App WAINK: escaneia carros estacionados e mostra valor, custo de registro, se está trancado, alarme e rastreador. Dano reduz o valor de venda.", status: "oficial" },
        { text: "Pay 'n' Spray volta para repintar e 'regularizar' o carro; concessionárias e showrooms para comprar; garagens com armário de armas.", status: "previa" }
      ]
    },
    {
      id: "vi-mech-vehicles",
      icon: "car",
      title: "Direção, combustível e frota",
      status: "oficial",
      summary: "Física mais pesada, ruas mais estreitas e combustível de verdade: postos servem para abastecer, elétricos recarregam em estações, e o dano é por componente — faróis estilhaçam e o carro degrada em tempo real.",
      items: [
        { text: "Medidor de combustível e postos funcionais; o tanque dura bastante para não virar chatice. Carros elétricos carregam em estações.", status: "oficial" },
        { text: "Direção 'um pouco mais desafiadora' e exigente de habilidade, nas palavras de Rob Nelson; trânsito mais denso.", status: "previa" },
        { text: "Espelhos com reflexo real, interiores detalhados (pedais, volante, quebra-sol) e menu de interação (porta-malas, capô, portas).", status: "previa" },
        { text: "Dano por componente: faróis quebram, peças soltam, o carro pega fogo aos poucos.", status: "oficial" },
        { text: "Vistos no Extended Look: conversível clássico vermelho, viaturas, helicópteros, aerobarco (fanboat), van, jatinho, jet ski, motos de trilha, patinete elétrico, caiaque e corridas em Ambrosia Raceway.", status: "oficial" },
        { text: "Bonde público em Vice City; app Ryde Me (carona) e Scooter Bros (entrega de veículo) pelo celular.", status: "previa" }
      ]
    },
    {
      id: "vi-mech-body",
      icon: "users",
      title: "Corpo, aparência e rotina",
      status: "oficial",
      summary: "O corpo responde ao que você faz: comer engorda, treinar define, noites em claro, bebedeiras e perseguições longas marcam o rosto. Cabelo, barba, unhas e tatuagens têm lojas próprias.",
      items: [
        { text: "Peso muda com a comida; academia com minigame de ritmo nos gatilhos; músculos aparecem com treino.", status: "oficial" },
        { text: "Estatísticas rastreadas: Saúde, Cardio, Forma, Estamina e Força.", status: "previa" },
        { text: "Cabelo cresce só no salão (não automaticamente como em RDR2); aparar e raspar em casa; unhas de Lucia com tamanho, cor e estilo.", status: "previa" },
        { text: "Refúgios vivos: geladeira com comida e bebida, TV com canais e comerciais (Angstipan, o sanduíche Prairie de '30 mil calorias'), charutos, pertences pessoais.", status: "oficial" },
        { text: "Porta-malas guarda armas e roupas reserva para preparar assalto e fuga.", status: "oficial" }
      ]
    },
    {
      id: "vi-mech-world",
      icon: "map",
      title: "Mundo reativo: NPCs, animais e Foco",
      status: "oficial",
      summary: "Mais de 600 mil animações (contra 55 mil em GTA V e 300 mil em RDR2). NPCs reagem a olhares e perseguições, reconhecem Jason e Lucia, e a habilidade Foco destaca oportunidades sem marcar tudo no mapa.",
      items: [
        { text: "Diálogo contextual com arma guardada: Cumprimentar, Provocar; em situações tensas: Acalmar ou Instigar (herança de RDR2).", status: "oficial" },
        { text: "Animais: cachorros podem ser acariciados, repreendidos ou estudados; jacarés, javalis, cobras, flamingos, golfinhos e tubarões; espécies descobertas entram em um catálogo; há zoológico.", status: "oficial" },
        { text: "Foco: destaca rotas de fuga, posição da polícia, pontos fracos e objetos úteis.", status: "oficial" },
        { text: "Eventos de rua e cultura viral: o 'Trunk Challenge' (um homem pendurado no porta-malas em live com comentários), influencers e vídeos virais por toda Leonida.", status: "oficial" },
        { text: "Celular com feeds sociais, app de fitness, banco, WAINK, Ryde Me; Snapmatic volta, mas Jason e Lucia não publicam (foragidos não deixam rastro digital).", status: "oficial" },
        { text: "Vice City tem cerca de duas vezes o tamanho de Los Santos; o mapa inteiro é cerca de três vezes a área jogável de RDR2 (Rob Nelson à imprensa). Mais de 50 grafiteiros reais assinaram murais.", status: "previa" }
      ]
    },
    {
      id: "vi-mech-activities",
      icon: "star",
      title: "Atividades e minigames",
      status: "oficial",
      summary: "Basquete, sinuca, musculação, natação, mergulho, caiaque, pesca, caça, base jump, paraquedas, estande de tiro, corridas de carro e de moto de trilha, jet ski, aerobarco, patinete, mini golfe, zoológico, bares e clubes.",
      items: [
        { text: "Parasail, corridas de monster truck e passeios de barco também apareceram nas prévias.", status: "previa" },
        { text: "Sem tênis, surfe ou skate completos, segundo a imprensa.", status: "previa" },
        { text: "Modo Foto confirmado; Director Mode não estará no lançamento (imprensa).", status: "previa" }
      ]
    },
    {
      id: "vi-mech-story",
      icon: "file",
      title: "História, capítulos e escolhas",
      status: "oficial",
      summary: "Um assalto a banco que dá errado revela uma conspiração que atravessa Leonida. A campanha é dividida em capítulos, com decisões grandes de efeito imediato e escolhas pequenas que se acumulam.",
      items: [
        { text: "Missões com várias rotas de fuga e menos separação entre 'missão' e mundo aberto.", status: "oficial" },
        { text: "Rob Nelson levou cerca de 80 horas em uma jogada com história principal e objetivos opcionais — não é a duração oficial da campanha.", status: "previa" },
        { text: "Sem microtransações no single-player e sem IA generativa na produção — Rob Nelson (Rockstar North) à Kinda Funny. Sobre o próximo GTA Online, a Rockstar não comenta.", status: "oficial" },
        { text: "Boobie Ike, Raul Bautista, Brian Heder, Lori e Cal Hampton aparecem no Extended Look; o Jack of Hearts (clube de Boobie) e a Only Raw Records estão no mapa.", status: "oficial" }
      ]
    },
    {
      id: "vi-mech-tech",
      icon: "file",
      title: "Técnica e apresentação",
      status: "previa",
      summary: "Tudo que a Rockstar mostrou rodava em um PlayStation 5. Resolução, modos de desempenho e PS5 Pro seguem sem detalhe oficial.",
      items: [
        { text: "Alvo relatado pela imprensa: 1440p a 30 fps nos consoles; o Extended Look aparenta ~30 fps.", status: "previa" },
        { text: "Terceira pessoa apenas; primeira pessoa só na mira de certas armas. Feedback háptico do DualSense.", status: "previa" },
        { text: "Pesquisa de campo: anos visitando Miami e região, conversas com ex-criminosos, policiais, promoters e vendedores de armas; pilotos de corrida reais na equipe de direção.", status: "oficial" }
      ]
    }
  ],

  /* ---------- Trilha sonora confirmada ---------- */
  soundtrack: {
    intro: "Músicas ouvidas nos vídeos oficiais. A trilha completa (rádios, artistas exclusivos) não foi anunciada.",
    extendedLook: [
      { id: "vi-song-1", title: "Pop Bottles", artist: "Birdman feat. Lil Wayne", at: "0:06" },
      { id: "vi-song-2", title: "Pound Town", artist: "Sexyy Red & Tay Keith", at: "0:46" },
      { id: "vi-song-3", title: "Skrilla", artist: "Kodak Black", at: "1:45" },
      { id: "vi-song-4", title: "Let Your Love Flow", artist: "The Bellamy Brothers", at: "6:00" },
      { id: "vi-song-5", title: "Love Bites", artist: "Def Leppard", at: "6:43" },
      { id: "vi-song-6", title: "People Are People", artist: "Depeche Mode", at: "8:21" },
      { id: "vi-song-7", title: "But I Think It's a Dream", artist: "Captain & Tennille", at: "9:49" },
      { id: "vi-song-8", title: "Cars and Girls", artist: "Prefab Sprout", at: "10:39" },
      { id: "vi-song-9", title: "Off the Grid", artist: "!!! (Chk Chk Chk) feat. Meah Pace", at: "12:25" },
      { id: "vi-song-10", title: "Devil Woman", artist: "Cliff Richard", at: "16:49" },
      { id: "vi-song-11", title: "Se Me Nota (Agárrame)", artist: "Chimbala x Omega", at: "20:07" },
      { id: "vi-song-12", title: "Against All Odds (Take a Look at Me Now)", artist: "Phil Collins", at: "21:33" },
      { id: "vi-song-13", title: "Mine O' Mine", artist: "Aluna & Jayda G", at: "21:55" },
      { id: "vi-song-14", title: "Inner Light", artist: "Elderbrook & Bob Moses", at: "25:44" }
    ],
    trailers: [
      { id: "vi-song-t1", title: "Love Is A Long Road", artist: "Tom Petty", where: "Trailer 1" },
      { id: "vi-song-t2", title: "Hot Together", artist: "The Pointer Sisters", where: "Trailer 2" },
      { id: "vi-song-t3", title: "Everybody Have Fun Tonight", artist: "Wang Chung", where: "site oficial / material de 2025" },
      { id: "vi-song-t4", title: "Child Support", artist: "Zenglen", where: "site oficial / material de 2025" }
    ]
  },

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
      desc: "Boobie é um dos poucos que transformaram os anos de rua em um império legítimo: imóveis, o clube Jack of Hearts e um estúdio de gravação. Pode parecer que só pensa em si, mas é na parceria com o jovem Dre'Quan na Only Raw Records que ele mais aposta. No Extended Look, é um carregamento ligado a Boobie que dá errado e abre a história.",
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
      desc: "A versão Rockstar da Flórida: um estado inteiro de neon, pântano, usinas de açúcar e ruína turística, onde Vice City é só o começo. Seis regiões confirmadas pelo site oficial formam o maior e mais imersivo mundo da série até aqui — segundo Rob Nelson, cerca de três vezes a área jogável de Red Dead Redemption 2.",
      vibe: "Sol, suor e más decisões"
    },
    list: [
      {
        id: "vi-vice-city",
        name: "Vice City",
        tagline: "O lado mais sombrio do lugar mais ensolarado da América.",
        desc: "A metrópole encharcada de neon segue sendo a capital do sol e da diversão — o glamour, o corre e a ganância da América capturados em uma única cidade. Fortunas nascem e desaparecem entre a orla, os condomínios e os bastidores da noite. Tem cerca do dobro do tamanho de Los Santos.",
        vibe: "Neon, grana e fachadas bonitas demais para ser verdade",
        grad: ["#ff9a3d", "#ff3d8a", "#5b2a86"]
      },
      {
        id: "vi-leonida-keys",
        name: "Leonida Keys",
        tagline: "O dress code é casual e os bares estão sempre abastecidos.",
        desc: "A vida neste arquipélago tropical não é chique, mas é fácil. Pegue seu drinque e estique a cadeira de praia — só fique atento: você está na porta de algumas das águas mais bonitas e perigosas de toda a América. É aqui que Jason e Lucia moram, numa propriedade de Brian Heder.",
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
        desc: "No coração de Leonida, a refinaria de açúcar Allied Crystal garante os empregos, enquanto o moto clube local fornece praticamente todo o resto. Cidade de chaminés, poeira e lealdades antigas — e do Ambrosia Raceway Park, pista de corrida vista no Extended Look.",
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
      { id: "vi-fact-release", text: "Lançamento em 19 de novembro de 2026 (quinta-feira) para PlayStation 5 e Xbox Series X|S, após dois adiamentos oficiais. Pré-load digital a partir de 12 de novembro." },
      { id: "vi-fact-extended", text: "'An Extended Look' (27/08/2026): cerca de 26 minutos de gameplay capturados em um PS5, com estreia na Netflix e depois no YouTube e no site da Rockstar." },
      { id: "vi-fact-duo", text: "Dois protagonistas jogáveis — Jason Duval e Lucia Caminos — com troca a qualquer momento, presos a uma conspiração que atravessa o estado depois que um assalto dá errado." },
      { id: "vi-fact-mechanics", text: "Mecânicas mostradas pela Rockstar: procurado de 6 estrelas com testemunhas, Perfil Criminal, combustível e postos, furto de carros por nível de segurança, app WAINK, corpo que muda com comida e treino, animais interativos e mais de 600 mil animações." },
      { id: "vi-fact-map", text: "Ambientação no estado de Leonida: Vice City mais cinco regiões nomeadas (Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia e Mount Kalaga)." },
      { id: "vi-fact-nomtx", text: "Sem microtransações no single-player e sem IA generativa no desenvolvimento, segundo Rob Nelson, co-chefe do Rockstar North (agosto de 2026)." },
      { id: "vi-fact-preorder", text: "Pré-venda aberta em 25 de junho de 2026: Standard por US$ 79,99 e Ultimate por US$ 99,99, ambas com o bônus Vintage Vice City Pack até o lançamento. Edição física vem com código de download." },
      { id: "vi-fact-ultimate", text: "A Ultimate Edition inclui duas missões exclusivas, cinco lojas exclusivas, veículos clássicos e revólveres gravados do Vercetti Estate." },
      { id: "vi-fact-dualsense", text: "Dois controles DualSense oficiais (branco 'amanhecer' e preto 'noite'), anunciados pela Sony em 3 de setembro de 2026, por US$ 84,99." },
      { id: "vi-fact-universe", text: "GTA VI pertence ao HD Universe (o mesmo de GTA IV e GTA V), com história independente — não é preciso jogar os anteriores." }
    ],
    rumors: [
      { id: "vi-rumor-pc", text: "Versão de PC: não anunciada. O histórico de GTA V e Red Dead Redemption 2 sugere chegada posterior aos consoles — expectativa da comunidade, não confirmação." },
      { id: "vi-rumor-trailer3", text: "Trailer de lançamento / Trailer 3: nada anunciado depois do Extended Look. Projeções da imprensa apontam para outubro ou a semana do lançamento." },
      { id: "vi-rumor-size", text: "Tamanho do arquivo: a Rockstar não divulgou. A faixa de 150 a 200 GB é estimativa da imprensa e da comunidade." },
      { id: "vi-rumor-tech", text: "1440p a 30 fps, terceira pessoa apenas e ausência de Director Mode são relatos de prévias hands-off — a Rockstar não publicou ficha técnica." },
      { id: "vi-rumor-length", text: "'80 horas' foi a jogada pessoal de Rob Nelson com objetivos opcionais; a duração oficial da campanha não foi divulgada." },
      { id: "vi-rumor-online", text: "Novo GTA Online: a Rockstar se recusou a comentar. Nada oficial sobre o componente online de GTA VI; o GTA Online atual segue dentro de GTA V." },
      { id: "vi-rumor-leak-2026", text: "O vazamento de agosto de 2026 (clipes de gameplay e uma suposta imagem do mapa) era real — a Rockstar chamou de 'de partir o coração' — mas mostra build de desenvolvimento, não o produto final." },
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
      title: "Prévias a portas fechadas no Rockstar North",
      desc: "IGN, The New York Times, Kinda Funny, TGG e Dazed assistem a cerca de 30 minutos de gameplay em Edimburgo — Rob Nelson no controle, ninguém de fora jogou. Embargo até 27 de agosto.",
      kind: "oficial"
    },
    {
      id: "vi-ann-2026-08-06",
      dateLabel: "6 de agosto de 2026",
      title: "'An Extended Look' anunciado para 27 de agosto",
      desc: "Newswire e teaser no YouTube: a apresentação estreia na Netflix às 15h (ET) e chega ao canal da Rockstar e ao site oficial às 21h (ET).",
      kind: "oficial"
    },
    {
      id: "vi-ann-2026-08-18",
      dateLabel: "18 a 21 de agosto de 2026",
      title: "Vazamento de gameplay",
      desc: "Nove dias antes do Extended Look, cerca de dois minutos de gameplay vazam, seguidos por mais de uma dezena de clipes (Jason jogando basquete no refúgio, praia lotada, colônia nudista) e uma suposta imagem do mapa. A Bloomberg relata funcionários 'irritados'.",
      kind: "incidente"
    },
    {
      id: "vi-ann-2026-08-26",
      dateLabel: "26 de agosto de 2026",
      title: "Rockstar reconhece o vazamento",
      desc: "Em nota, a Rockstar chama os clipes de 'de partir o coração para a nossa equipe', diz que 'não era assim que queríamos que vocês vissem o jogo' e garante que o desenvolvimento está 'quase lá'.",
      kind: "oficial"
    },
    {
      id: "vi-ann-2026-08-27",
      dateLabel: "27 de agosto de 2026",
      title: "An Extended Look + fim do embargo das prévias",
      desc: "Cerca de 26 minutos de gameplay em PS5: assaltos, troca de protagonistas, seis estrelas, combustível, WAINK, animais, refúgios e vida noturna. Prévias de IGN, NYT e Kinda Funny saem na mesma hora; pré-vendas sobem 436% no dia (Sensor Tower).",
      kind: "oficial"
    },
    {
      id: "vi-ann-2026-08-29",
      dateLabel: "28 e 29 de agosto de 2026",
      title: "Sem microtransações, sem IA generativa",
      desc: "Rob Nelson (Rockstar North) confirma à Kinda Funny que o single-player não terá monetização e que nenhuma IA generativa foi usada no jogo. Sobre GTA Online, silêncio.",
      kind: "oficial"
    },
    {
      id: "vi-ann-2026-09-03",
      dateLabel: "3 de setembro de 2026",
      title: "DualSense oficiais de GTA VI",
      desc: "No State of Play, a Sony revela dois controles de edição limitada (branco 'amanhecer' e preto 'noite'), US$ 84,99, pré-venda em 10 de setembro e lançamento junto com o jogo.",
      kind: "oficial"
    },
    {
      id: "vi-ann-2026-11-12",
      dateLabel: "12 de novembro de 2026",
      title: "Pré-load digital",
      desc: "Uma semana antes do lançamento, quem comprou a versão digital pode começar o download.",
      kind: "oficial"
    },
    {
      id: "vi-ann-2026-11-19",
      dateLabel: "19 de novembro de 2026",
      title: "Lançamento",
      desc: "Grand Theft Auto VI chega ao PlayStation 5 e ao Xbox Series X|S.",
      kind: "oficial"
    }
  ],

  /* ---------- FAQ ---------- */
  faq: [
    {
      id: "vi-faq-date",
      q: "Quando GTA VI será lançado?",
      a: "Em 19 de novembro de 2026, uma quinta-feira. A data foi confirmada pela Rockstar em novembro de 2025, após dois adiamentos (a janela original era 2025 e depois 26 de maio de 2026), e reafirmada em agosto de 2026."
    },
    {
      id: "vi-faq-preload",
      q: "Quando começa o pré-load?",
      a: "Em 12 de novembro de 2026, uma semana antes, para quem comprou a versão digital. Na edição física, o pré-load depende do código de download que vem na caixa (não há disco)."
    },
    {
      id: "vi-faq-extended",
      q: "O que é o 'Extended Look'?",
      a: "É a apresentação de gameplay de 27 de agosto de 2026: cerca de 26 minutos capturados em um PS5, com estreia na Netflix e depois no YouTube e no site da Rockstar. Mostra assaltos, perseguições, troca de protagonistas, o sistema de procurado, animais, refúgios e a vida noturna de Vice City."
    },
    {
      id: "vi-faq-mechanics",
      q: "Quais mecânicas já estão confirmadas?",
      a: "Troca entre Jason e Lucia a qualquer momento, procurado de seis estrelas com testemunhas, Perfil Criminal, combustível e postos, furto de carros por nível de segurança com o app WAINK, cobertura com mira em câmera lenta, corpo que muda com comida e treino, animais interativos e refúgios funcionais. A seção 'Mecânicas' detalha tudo e separa o que a Rockstar mostrou do que a imprensa relatou."
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
      id: "vi-faq-mtx",
      q: "Vai ter microtransação?",
      a: "No single-player, não: Rob Nelson, co-chefe do Rockstar North, disse à Kinda Funny que não há monetização na campanha e que nenhuma IA generativa foi usada. Sobre o futuro GTA Online, a Rockstar não comentou."
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
      a: "Sem número oficial. Rob Nelson disse à imprensa que o mapa tem cerca de três vezes a área jogável de Red Dead Redemption 2 e que Vice City tem o dobro de Los Santos."
    },
    {
      id: "vi-faq-size",
      q: "Quantos GB vai ocupar?",
      a: "A Rockstar não divulgou. A imprensa estima entre 150 e 200 GB; reserve espaço e comece o pré-load em 12 de novembro."
    },
    {
      id: "vi-faq-online",
      q: "E o modo online?",
      a: "Nada foi anunciado sobre o componente online de GTA VI — a Rockstar se recusou a comentar nas prévias. O GTA Online atual continua funcionando dentro de GTA V."
    },
    {
      id: "vi-faq-trailer3",
      q: "Vai ter Trailer 3?",
      a: "Depois do Extended Look, a Rockstar não anunciou novo vídeo. A imprensa projeta um trailer de lançamento perto de 19 de novembro. Qualquer vídeo novo do canal oficial aparece sozinho na seção 'Ao vivo' deste site."
    },
    {
      id: "vi-faq-controller",
      q: "Tem controle oficial?",
      a: "Sim: dois DualSense de edição limitada anunciados pela Sony em 3 de setembro de 2026 (branco 'Vice City ao amanhecer' e preto 'vida noturna'), por US$ 84,99, pré-venda em 10 de setembro e lançamento em 19 de novembro."
    },
    {
      id: "vi-faq-canon",
      q: "Preciso jogar os GTA anteriores antes?",
      a: "Não. GTA VI faz parte do HD Universe (o mesmo de GTA IV e V), mas conta uma história independente, com novos personagens e cidade."
    }
  ]
};
