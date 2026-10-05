/* ============ GTA DOSSIER DATA ============ */

const dossierNavData = [
  { id: "overview", label: "Visão Geral", k: "01" },
  { id: "timeline", label: "Timeline Cronológica", k: "02" },
  { id: "games", label: "Jogos", k: "03" },
  { id: "missions", label: "Missões", k: "04" },
  { id: "vehicles", label: "Veículos", k: "05" },
  { id: "weapons", label: "Armas", k: "06" },
  { id: "development", label: "Desenvolvimento", k: "07" },
  { id: "characters", label: "Personagens", k: "08" },
  { id: "cities", label: "Cidades", k: "09" },
  { id: "gangs", label: "Gangues e Organizações", k: "10" },
  { id: "universes", label: "Universos GTA", k: "11" },
  { id: "rockstar", label: "Rockstar Games", k: "12" },
  { id: "gtaonline", label: "GTA Online", k: "13" },
  { id: "gta6", label: "GTA VI", k: "14" },
  { id: "vi-mechanics", label: "Mecânicas VI", k: "15" },
  { id: "vi-catalog", label: "Catálogo VI", k: "16" },
  { id: "cheats", label: "Códigos", k: "17" },
  { id: "radios", label: "Rádios", k: "18" },
  { id: "eastereggs", label: "Easter Eggs", k: "19" },
  { id: "mysteries", label: "Mistérios", k: "20" },
  { id: "glossary", label: "Glossário", k: "21" }
];
window.dossierNavData = dossierNavData;

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
    note: "Atualização de GTA Online usada na linha do tempo viva."
  },
  {
    label: "Rockstar Newswire - Oscar Guzman Flies Again",
    url: "https://www.rockstargames.com/newswire/article/179kk473a8a18k/gta-online-oscar-guzman-flies-again-now-available",
    note: "Atualização de 2025 com McKenzie Field Hangar e tráfico aéreo."
  },
  {
    label: "Rockstar Newswire - A Safehouse in the Hills",
    url: "https://www.rockstargames.com/newswire/article/51358a55o2o11o/gta-online-a-safehouse-in-the-hills-coming-december-10",
    note: "Anúncio oficial da atualização de safehouse de GTA Online."
  },
  {
    label: "Rockstar North / Rockstar Games - histórico público",
    url: "https://en.wikipedia.org/wiki/Rockstar_North",
    note: "Estrutura histórica de DMA Design, Rockstar North e principais jogos."
  },
  {
    label: "Grand Theft Auto series - releases and chronology",
    url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto",
    note: "Lista de lançamentos e organização dos universos narrativos."
  },
  {
    label: "Grand Theft Wiki - Race'n'Chase",
    url: "https://www.grandtheftwiki.com/Race%27n%27Chase",
    note: "Documento, escopo e transformação do protótipo que antecedeu GTA 1."
  },
  {
    label: "GTA Wiki / Fandom - páginas de jogos e lore",
    url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_Wiki",
    note: "Apoio para detalhes de personagens, locais, facções, motores e cronologia secundária."
  },
  {
    label: "GTA Wiki - Updates in GTA Online",
    url: "https://gta.fandom.com/wiki/Updates_in_GTA_Online",
    note: "Lista-base de DLCs e atualizações de conteúdo de GTA Online."
  },
  {
    label: "ESRB - caso Hot Coffee",
    url: "https://www.esrb.org/blog/esrb-concludes-investigation-into-grand-theft-auto-san-andreas-revokes-m-mature-rating/",
    note: "Registro oficial da reclassificação de GTA San Andreas em 2005."
  },
  {
    label: "FTC - acordo Take-Two/Rockstar sobre San Andreas",
    url: "https://www.ftc.gov/news-events/news/press-releases/2006/06/makers-grand-theft-auto-san-andreas-settle-ftc-charges",
    note: "Contexto público sobre disclosure, patch e relançamento após Hot Coffee."
  }
];

const universeData = [
  {
    id: "2d",
    name: "2D Universe",
    period: "1997-1999",
    tone: "neutral",
    games: ["Grand Theft Auto", "GTA: London 1969", "GTA: London 1961", "Grand Theft Auto 2"],
    summary: "A fase top-down da série: mais arcade, mais anárquica e menos dependente de continuidade narrativa profunda.",
    description:
      "O 2D Universe funciona como laboratório de linguagem. GTA ainda era uma combinação de corrida, caos urbano, humor seco e missões criminosas vistas de cima. Liberty City, Vice City e San Andreas já aparecem como nomes, mas ainda não possuem a densidade cultural que ganhariam depois. GTA 2 é tratado como caso à parte, com Anywhere City e uma data interna deliberadamente nebulosa.",
    notes: [
      "Personagens são avatares ou figuras pouco desenvolvidas.",
      "A prioridade é liberdade, pontuação e escalada criminal.",
      "London 1969 e London 1961 são raras incursões fora dos Estados Unidos."
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
    summary: "A continuidade clássica: cidades, máfias, rádios, personagens recorrentes e sátira urbana em 3D.",
    description:
      "GTA III cria a gramática moderna da franquia. Vice City e San Andreas ampliam tom, escala e identidade cultural. Os prequels de PSP e GTA Advance costuram eventos anteriores, mostrando que a Rockstar passou a tratar GTA como um universo criminal interligado.",
    notes: [
      "Claude, Tommy, CJ, Toni, Vic e Mike pertencem a esta continuidade.",
      "Liberty City, Vice City e San Andreas se tornam lugares reconhecíveis, com geografia, facções e memória.",
      "Referências cruzadas existem, mas a era HD reinicia a continuidade principal."
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
    summary: "A continuidade moderna: mundos mais densos, sátira contemporânea, realismo físico e GTA Online como plataforma viva.",
    description:
      "A era HD começa com GTA IV e Liberty City reinterpretada. A Rockstar separa esta continuidade da era 3D, embora mantenha ecos, nomes de marcas e piadas internas. GTA V expande a escala com três protagonistas e GTA Online transforma Los Santos em serviço persistente. GTA VI leva esse universo para Leonida e Vice City moderna.",
    notes: [
      "Personagens de universos anteriores podem ser referenciados como easter eggs, não necessariamente coexistem.",
      "A sátira mira capitalismo, mídia, polícia, agências federais, celebridade, tecnologia e redes sociais.",
      "GTA Online evolui a cronologia de Los Santos depois de 2013."
    ]
  }
];

const rockstarHistoryData = [
  {
    year: "1987/1988",
    title: "DMA Design nasce em Dundee",
    type: "Estúdio",
    summary:
      "David Jones forma a DMA Design em Dundee, Escócia. Algumas fontes usam 1987 para a atividade inicial e 1988 para a fundação formal; por isso o dossiê registra as duas datas.",
    details: [
      "A DMA Design nasce em Dundee, na Escócia, muito antes de existir Rockstar North. David Jones organiza o estúdio em torno de uma cultura de programadores jovens, computadores domésticos, experimentação técnica e jogos com forte identidade própria.",
      "O primeiro grande salto vem com Lemmings, publicado pela Psygnosis em 1991. O jogo transforma a DMA em nome respeitado no mercado europeu e prova que o estúdio sabia criar sistemas simples, legíveis e caóticos o bastante para gerar histórias emergentes.",
      "Esse DNA importa para GTA: antes de pensar em cinema criminal, a DMA já pensava em simulação, regras, reação em cadeia e pequenos personagens presos em sistemas maiores que eles. A diferença é que, anos depois, os lemmings dariam lugar a carros, pedestres, polícia e ruas.",
      "Mike Dailly, Russell Kay, Steve Hammond e outros nomes aparecem ligados ao núcleo histórico da DMA. O dossiê evita tratar uma franquia desse tamanho como obra de uma única pessoa: GTA nasce de uma equipe, de uma tecnologia e de um momento muito específico da indústria britânica."
    ],
    sources: [
      { label: "Rockstar North - histórico", url: "https://en.wikipedia.org/wiki/Rockstar_North" },
      { label: "DMA Design - histórico", url: "https://en.wikipedia.org/wiki/DMA_Design" }
    ]
  },
  {
    year: "1995-1997",
    title: "Race'n'Chase vira Grand Theft Auto",
    type: "Origem de GTA",
    summary:
      "O conceito de perseguições e crimes urbanos evolui para Grand Theft Auto, criado na DMA Design por David Jones e Mike Dailly com a equipe do estúdio.",
    details: [
      "Race'n'Chase é o elo entre a DMA experimental e GTA. O projeto partia de uma ideia de corridas, perseguições, ladrões e polícia em cidades vistas de cima. Era menos 'drama criminal' e mais brinquedo sistêmico: carros, ruas, colisões e regras de perseguição.",
      "Durante o desenvolvimento, a equipe percebeu que o comportamento caótico da polícia, a liberdade de roubar veículos e a possibilidade de quebrar a ordem da cidade eram mais interessantes do que cumprir uma corrida tradicional. A diversão estava no desvio.",
      "A transformação em Grand Theft Auto também aproxima a DMA da BMG Interactive, onde Sam Houser ajudaria a defender o potencial cultural e comercial da ideia. A provocação pública, a linguagem de crime urbano e o tom de jornal sensacionalista começam a se consolidar nesse período.",
      "É importante separar fato e lenda: há relatos diferentes sobre bugs de polícia, protótipos e decisões de design. O ponto seguro é que a franquia nasce quando uma estrutura de corrida vira uma fantasia de liberdade criminal em cidade aberta."
    ],
    sources: [
      { label: "Grand Theft Wiki - Race'n'Chase", url: "https://www.grandtheftwiki.com/Race%27n%27Chase" },
      { label: "GTA Wiki - Race'n'Chase Engine", url: "https://gta.fandom.com/wiki/Race%27n%27Chase_Game_Engine" }
    ]
  },
  {
    year: "1997",
    title: "Grand Theft Auto estreia",
    type: "Lançamento",
    summary:
      "GTA nasce antes de existir Rockstar North. O primeiro jogo é publicado no período BMG Interactive/DMA Design.",
    details: [
      "Grand Theft Auto chega em 1997 como jogo de perspectiva top-down, missão criminosa e liberdade urbana. Ele não tem a densidade narrativa dos títulos posteriores, mas já apresenta a gramática essencial: roubar carros, aceitar trabalhos ilegais, fugir da polícia e transformar cidade em tabuleiro.",
      "Liberty City, Vice City e San Andreas já aparecem como nomes, mas ainda em versões abstratas. Elas funcionam mais como zonas de jogabilidade e identidade visual do que como cidades-personagem com memória, bairros e continuidade profunda.",
      "A rádio, os crimes, o humor ácido e a busca deliberada por controvérsia ajudam o jogo a se destacar. Parte do impacto vem da sensação de que o jogador podia quebrar regras urbanas de um jeito que poucos jogos comerciais permitiam naquela época.",
      "O primeiro GTA também mostra uma diferença importante para o dossiê: ele pertence à fase DMA/BMG. A marca Rockstar ainda não existia como conhecemos, e Rockstar North ainda não era o nome do estúdio."
    ],
    sources: [
      { label: "GTA Wiki - Grand Theft Auto 1997", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_(1997_game)" },
      { label: "Grand Theft Auto - série", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto" }
    ]
  },
  {
    year: "1998",
    title: "Take-Two, BMG Interactive e Rockstar Games",
    type: "Negócio",
    summary:
      "A Take-Two adquire ativos da BMG Interactive. Em dezembro de 1998, Rockstar Games é fundada por Sam Houser, Dan Houser, Terry Donovan, Jamie King e Gary Foreman.",
    details: [
      "A virada empresarial acontece quando a Take-Two compra ativos da BMG Interactive. GTA deixa de ser apenas um jogo estranho da DMA publicado pela BMG e passa a estar dentro de uma estrutura que queria transformar marcas autorais em eventos culturais.",
      "Rockstar Games é fundada em 1998 por Sam Houser, Dan Houser, Terry Donovan, Jamie King e Gary Foreman. A proposta não era soar como uma publicadora neutra: era construir um selo com atitude, música, cinema, design urbano e provocação calculada.",
      "Sam Houser e Dan Houser se tornam figuras centrais da identidade editorial: diálogo afiado, rádios satíricas, referências a cinema criminal, obsessão por trilha sonora e mundos que parecem comentar a cultura popular enquanto o jogador atravessa a cidade.",
      "A Rockstar não cria GTA do zero, mas reposiciona GTA. O jogo deixa de ser apenas um produto de nicho caótico e vira uma franquia com branding, marketing, controle de tom e ambição de ser reconhecida fora do público tradicional de videogames."
    ],
    sources: [
      { label: "Rockstar Games - histórico", url: "https://en.wikipedia.org/wiki/Rockstar_Games" },
      { label: "Take-Two Interactive", url: "https://en.wikipedia.org/wiki/Take-Two_Interactive" }
    ]
  },
  {
    year: "1999-2002",
    title: "DMA Design se torna Rockstar North",
    type: "Estúdio",
    summary:
      "A antiga DMA passa por reestruturações e se torna Rockstar North, principal estúdio de desenvolvimento da franquia GTA.",
    details: [
      "Depois do sucesso inicial de GTA, a DMA atravessa uma fase de mudanças corporativas. O estúdio passa por aquisições e reestruturações até ficar sob a órbita da Take-Two/Rockstar, consolidando sua função como o núcleo técnico da franquia.",
      "A transição não é apenas troca de placa na porta. Ela marca a passagem de um estúdio escocês independente para uma operação alinhada a uma editora global, com ambições maiores, marketing mais agressivo e exigência técnica muito mais alta.",
      "A equipe precisava resolver uma pergunta enorme: como transformar o caos top-down de GTA em uma cidade 3D onde dirigir, atirar, caminhar, ouvir rádio e seguir história acontecessem no mesmo espaço sem parecerem sistemas separados?",
      "Rockstar North surge como o nome associado a essa resposta. A antiga DMA se torna, na prática, o laboratório principal de GTA: um estúdio capaz de combinar engenharia de mundo aberto, design de missões, cultura urbana e sátira."
    ],
    sources: [
      { label: "Rockstar North", url: "https://en.wikipedia.org/wiki/Rockstar_North" },
      { label: "GTA Wiki - Rockstar North", url: "https://gta.fandom.com/wiki/Rockstar_North" }
    ]
  },
  {
    year: "2001",
    title: "GTA III redefine o mundo aberto",
    type: "Virada técnica",
    summary:
      "A câmera em terceira pessoa, a cidade 3D, as rádios e as missões cinematográficas criam um modelo que influencia toda a indústria.",
    details: [
      "GTA III é a virada que transforma uma ideia forte em linguagem dominante. Liberty City deixa de ser um mapa visto de cima e vira uma cidade tridimensional, com ruas, pontes, ilhas, pedestres, tráfego, rádio, facções e missão cinematográfica.",
      "O jogo não foi o primeiro mundo aberto da história, mas foi o ponto em que muitos sistemas passaram a parecer uma mesma fantasia urbana: dirigir, caminhar, atirar, aceitar trabalhos, fugir da polícia e simplesmente se perder pela cidade.",
      "A produção também atravessa um momento histórico delicado. Depois dos ataques de 11 de setembro de 2001, o lançamento é ajustado e parte do conteúdo é revisada para evitar referências sensíveis. Esse contexto ajuda a explicar por que GTA III parece agressivo e, ao mesmo tempo, cuidadosamente reposicionado.",
      "O resultado redefiniu expectativa de mercado. A partir de GTA III, várias editoras passaram a procurar seu próprio 'GTA-like'. Para a Rockstar, o jogo prova que a franquia podia ser mais que controvérsia: podia ser arquitetura de mundo aberto."
    ],
    sources: [
      { label: "GTA III - desenvolvimento", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_III" },
      { label: "GTA Wiki - GTA III", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_III" }
    ]
  },
  {
    year: "2002-2006",
    title: "Era 3D no auge",
    type: "Escala",
    summary:
      "Vice City, San Andreas, Liberty City Stories e Vice City Stories consolidam uma continuidade criminal cheia de personagens recorrentes.",
    details: [
      "Depois de GTA III, a Rockstar entende que cidade não era só mapa: era tom. Vice City usa Miami ficcional, neon, drogas, praia, rádio licenciada e cinema criminal dos anos 80 para criar uma identidade quase musical.",
      "Tommy Vercetti muda a relação do jogador com a história. Depois de Claude, um protagonista praticamente silencioso, Vice City coloca voz, ambição e personalidade no centro do crime. A campanha passa a parecer ascensão de um chefe, não apenas uma sucessão de trabalhos.",
      "San Andreas leva a fórmula ao limite da era PlayStation 2: três cidades, campo, deserto, Las Venturas, aviões, academias, território, customização, habilidades e uma narrativa de família, gangues e corrupção policial nos anos 1990.",
      "Liberty City Stories e Vice City Stories fecham lacunas de continuidade, especialmente em PSP, mostrando que a Rockstar passou a tratar GTA como uma rede de personagens, máfias e cidades com passado. Esse período cristaliza o chamado 3D Universe.",
      "Também é a fase em que o debate público sobre GTA cresce muito. A série vira fenômeno comercial e alvo recorrente de discussões sobre violência, classificação indicativa, sátira e representação."
    ],
    sources: [
      { label: "Vice City - histórico", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City" },
      { label: "San Andreas - histórico", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto:_San_Andreas" },
      { label: "GTA Wiki - 3D Universe", url: "https://gta.fandom.com/wiki/3D_Universe" }
    ]
  },
  {
    year: "2008",
    title: "Era HD com GTA IV",
    type: "Engine",
    summary:
      "GTA IV inaugura a fase HD com RAGE, Euphoria e uma Liberty City mais realista, densa e sombria.",
    details: [
      "GTA IV reinicia a continuidade principal no HD Universe. A Rockstar mantém marcas, rádios, humor e ecos culturais, mas separa a nova fase da linha narrativa da era 3D.",
      "A troca técnica é decisiva: RAGE e Euphoria dão peso físico, animação procedural e uma Liberty City mais densa. O jogo passa a buscar uma cidade menos caricata e mais observada, com pontes, bairros, celular, internet interna e vida urbana mais crua.",
      "Niko Bellic leva GTA para um tom mais dramático: imigração, trauma de guerra, vingança, dívida, família e desencanto com o sonho americano. A sátira ainda existe, mas convive com melancolia e violência menos cartunesca.",
      "The Lost and Damned e The Ballad of Gay Tony expandem a mesma cidade por outras classes sociais e subculturas: motoclube em decadência, vida noturna, diamantes, máfia, celebridade e excesso. Juntos, os episódios mostram a ambição da Rockstar de contar uma cidade por ângulos paralelos.",
      "GTA IV também confirma que a franquia poderia sobreviver a um reboot de tom. O público ainda reconhecia GTA, mas agora com física, realismo e uma escrita mais sombria."
    ],
    sources: [
      { label: "GTA IV - desenvolvimento", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_IV" },
      { label: "GTA Wiki - HD Universe", url: "https://gta.fandom.com/wiki/HD_Universe" }
    ]
  },
  {
    year: "2013",
    title: "GTA V e GTA Online",
    type: "Fenômeno",
    summary:
      "GTA V combina três protagonistas, assaltos e uma Los Santos gigantesca; GTA Online cresce de modo multiplayer para plataforma viva.",
    details: [
      "GTA V é a síntese comercial e técnica da Rockstar moderna. Los Santos retorna como espelho de Los Angeles, mas agora cercada por Blaine County, mídia digital, celebridade, desigualdade, paranoia estatal e economia de espetáculo.",
      "A escolha de três protagonistas muda o ritmo da campanha. Michael representa o passado criminal domesticado, Franklin a tentativa de mobilidade social e Trevor o caos que a própria série sempre prometeu. O sistema permite alternar classe, tom e geografia dentro de uma mesma história.",
      "Os assaltos viram estrutura central, com planejamento, equipe, preparação e execução. A campanha usa FIB, IAA, Merryweather, Devin Weston, gangues e cartéis para mostrar uma Los Santos onde crime privado e poder institucional se confundem.",
      "GTA Online, lançado em 2013, começa turbulento, mas cresce para algo maior que modo multiplayer. Heists, CEOs, motoclubes, bunkers, nightclubs, cassino, Cayo Perico, agências e atualizações de economia transformam Los Santos em plataforma persistente.",
      "Esse ciclo muda a história da Rockstar: GTA V continua vendendo por múltiplas gerações de console, GTA Online sustenta uma comunidade gigantesca e a expectativa por GTA VI passa a existir sob a sombra de um jogo que se recusou a sair de cena."
    ],
    sources: [
      { label: "GTA V - desenvolvimento", url: "https://en.wikipedia.org/wiki/Development_of_Grand_Theft_Auto_V" },
      { label: "GTA Online", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_Online" },
      { label: "Rockstar - GTA Online", url: "https://www.rockstargames.com/gta-online" }
    ]
  },
  {
    year: "2026",
    title: "GTA VI leva a era HD para Leonida",
    type: "Próximo capítulo",
    summary:
      "GTA VI está oficialmente marcado para 19 de novembro de 2026, ambientado em Leonida/Vice City, com Lucia Caminos e Jason Duval.",
    details: [
      "GTA VI chega depois do período mais longo entre jogos principais da franquia. O intervalo é explicado por uma combinação de escala técnica, longevidade de GTA Online, mudanças internas na Rockstar e a expectativa criada por GTA V.",
      "O que é confirmado pela Rockstar: GTA VI está marcado para 19 de novembro de 2026, anunciado para PlayStation 5 e Xbox Series X|S, ambientado no estado de Leonida e com Vice City como centro mais reconhecível.",
      "Lucia Caminos e Jason Duval formam a dupla central divulgada oficialmente. A página da Rockstar descreve Lucia saindo da Penitenciária de Leonida e Jason envolvido com traficantes locais nas Keys, até um serviço aparentemente simples dar errado.",
      "O material oficial sugere crime moderno, redes sociais, cultura viral, praias, pântanos, polícia, vida noturna e uma versão contemporânea da sátira da Flórida. Ainda assim, antagonistas, mapa completo, estrutura de missões, PC e futuro de GTA Online seguem não confirmados.",
      "Historicamente, GTA VI representa uma prova dupla: continuar a linhagem single-player cinematográfica da Rockstar e, ao mesmo tempo, responder a uma década em que GTA Online redefiniu o que a franquia significa para milhões de jogadores."
    ],
    sources: [
      { label: "Rockstar - GTA VI", url: "https://www.rockstargames.com/VI" },
      { label: "Newswire - data oficial de GTA VI", url: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026" }
    ]
  }
];

const timelineChronologicalData = [
  {
    year: "1961",
    sortYear: 1961,
    title: "GTA: London 1961",
    city: "London",
    universe: "2D Universe",
    protagonist: "Avatares selecionáveis",
    summary:
      "Expansão gratuita para PC que volta a Londres no início da década. É uma das poucas passagens da franquia fora do eixo americano.",
    beats: [
      "Crime urbano em Londres estilizada.",
      "Tom mais arcade e menos canônico.",
      "Curiosidade histórica por anteceder London 1969 dentro da cronologia."
    ],
    certainty: "Confirmado como expansão da era 2D; continuidade profunda é limitada."
  },
  {
    year: "1969",
    sortYear: 1969,
    title: "GTA: London 1969",
    city: "London",
    universe: "2D Universe",
    protagonist: "Avatares selecionáveis",
    summary:
      "A franquia testa crime britânico, cultura pop dos anos 60, carros de época e linguagem de gangster londrino.",
    beats: [
      "Ambientação britânica com estética Swinging Sixties.",
      "Expansão de GTA 1.",
      "Rara exceção internacional na série."
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
      "Vic Vance, militar tentando sustentar a família, é puxado para tráfico, corrupção e disputa com Jerry Martinez e a família Mendez.",
    beats: [
      "Mostra Vice City antes da ascensão de Tommy Vercetti.",
      "Lance Vance entra como parceiro ambicioso e instável.",
      "O império dos Vance cresce, mas a trágica morte de Vic em 1986 já paira sobre a história."
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
      "Depois de 15 anos preso, Tommy é enviado por Sonny Forelli a Vice City. A negociação de drogas é emboscada, ele perde dinheiro e produto, derruba Ricardo Diaz e monta seu próprio império.",
    beats: [
      "Ken Rosenberg, Lance Vance, Colonel Cortez, Avery Carrington e Kent Paul abrem portas no submundo.",
      "Tommy toma a mansão de Diaz e compra negócios pela cidade.",
      "Lance trai Tommy; Sonny vai a Vice City cobrar a dívida; Tommy vence e vira chefe local."
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
      "CJ volta a Los Santos após a morte da mãe. Grove Street está quebrada, C.R.A.S.H. o manipula e a traição de Big Smoke e Ryder expande a guerra para todo o estado.",
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
    protagonist: "Avatares selecionáveis",
    summary:
      "A primeira versão da fórmula: subir no submundo criminal completando missões para chefes e causando caos em três cidades.",
    beats: [
      "Narrativa leve e fragmentada.",
      "Cidades ainda não equivalem às versões 3D/HD.",
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
      "A violência política e mafiosa redesenha Liberty City."
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
      "Mike busca vingar o parceiro Vinnie em Liberty City. A trama funciona como prequel portátil de GTA III.",
    beats: [
      "História de traição e fuga.",
      "Conecta-se ao clima criminal da Liberty City pré-GTA III.",
      "Algumas cronologias populares posicionam o jogo perto de 1998; aqui fica como c. 2000 por ser anterior a GTA III."
    ],
    certainty: "A data interna é tratada como aproximada."
  },
  {
    year: "data incerta",
    sortYear: 2000.5,
    title: "Grand Theft Auto 2",
    city: "Anywhere City",
    universe: "2D Universe",
    protagonist: "Claude Speed",
    summary:
      "Anywhere City mistura retrofuturismo, gangues caricatas e um calendário deliberadamente ambíguo.",
    beats: [
      "Zaibatsu, Loonies, Yakuza, Scientists, Rednecks, Russian Mafia e Krishna disputam distritos.",
      "O tom é mais experimental que canônico.",
      "A data interna é frequentemente debatida; o dossiê marca como não confirmada."
    ],
    certainty: "Não confirmado."
  },
  {
    year: "2001",
    sortYear: 2001,
    title: "Grand Theft Auto III",
    city: "Liberty City",
    universe: "3D Universe",
    protagonist: "Claude",
    summary:
      "Catalina trai Claude durante um assalto. Ele sobrevive, escapa com 8-Ball e atravessa Leone, Yakuza, Yardies e Cartel Colombiano até confrontá-la.",
    beats: [
      "Luigi, Joey, Toni, Salvatore, Maria, Asuka, Kenji, Ray e Donald Love estruturam a escalada.",
      "Miguel e Catalina movem o Cartel.",
      "O final fecha a vingança contra Catalina."
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
      "Niko chega a Liberty City atrás do sonho americano, mas encontra dívidas de Roman, máfias, traumas de guerra e uma cidade movida por corrupção.",
    beats: [
      "Dimitri Rascalov e Mikhail Faustin puxam a tragédia russa.",
      "Little Jacob, Brucie, Packie, Kate, Mallorie, Phil Bell e Jimmy Pegorino moldam escolhas e perdas.",
      "Temas centrais: imigração, vingança, capitalismo e desilusão."
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
      "Johnny tenta manter o The Lost MC de pé enquanto Billy Grey leva o motoclube à autodestruição.",
    beats: [
      "O foco muda para lealdade, vício, rivalidade e decadência.",
      "Mostra eventos de GTA IV por outro ângulo.",
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
      "Luis protege Tony Prince em meio a clubes, celebridades, diamantes, máfias e crime de alto nível.",
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
      "Huang chega para entregar a espada Yu Jian ao tio Kenny, e acaba roubado, traído e mergulhado em disputas das Triads.",
    beats: [
      "Mistura honra familiar, tráfico de drogas e traição.",
      "Usa Liberty City da era HD em formato portátil.",
      "Hsin Jaoming, Kenny Lee e Wade Heston compõem a rede de suspeitos."
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
      "O prólogo em North Yankton volta para assombrar Michael e Trevor. Em Los Santos, Franklin cruza com Michael e os três são puxados para assaltos, FIB, IAA, Merryweather e Devin Weston.",
    beats: [
      "Michael vive sob nova identidade depois de fingir a própria morte.",
      "Trevor descobre a verdade e reabre feridas antigas.",
      "A Opção C/Deathwish, em que os três sobrevivem, é a leitura canônica mais aceita por referências posteriores."
    ],
    certainty: "Confirmado; final canônico tratado como interpretação forte."
  },
  {
    year: "2013 em diante",
    sortYear: 2013.1,
    title: "Grand Theft Auto Online",
    city: "Los Santos, Blaine County e expansões",
    universe: "HD Universe",
    protagonist: "Personagem criado pelo jogador",
    summary:
      "Los Santos vira plataforma viva: assaltos, empresas, motoclubes, bunkers, nightclubs, cassino, Cayo Perico, agências, guerras de drogas, mercenários e lavagem de dinheiro.",
    beats: [
      "GTA Online deixa de ser apenas multiplayer e vira cronologia contínua.",
      "Personagens de GTA V reaparecem em novas fases.",
      "A economia criminal do jogador passa a ser a espinha dorsal."
    ],
    certainty: "Confirmado como plataforma contínua; detalhes de canon variam por atualização."
  },
  {
    year: "2026",
    sortYear: 2026,
    title: "Grand Theft Auto VI",
    city: "Leonida e Vice City",
    universe: "HD Universe",
    protagonist: "Lucia Caminos e Jason Duval",
    summary:
      "Lucia e Jason entram numa conspiração criminosa que se espalha por Leonida depois de um serviço aparentemente simples dar errado.",
    beats: [
      "Vice City retorna em versão moderna.",
      "Leonida é inspirada na Flórida.",
      "Crime moderno, mídia social, cultura viral e casal criminoso são temas prováveis; detalhes de história além do material oficial ainda são não confirmados."
    ],
    certainty: "Data, protagonistas e ambientação confirmados; trama ampla ainda sob segredo oficial."
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
    protagonist: "Avatares selecionáveis",
    antagonists: ["Chefes criminosos rivais", "Polícia local"],
    supportingCharacters: ["Samuel Deever", "Bubby", "Uncle Fu", "Brother Marcus"],
    summary:
      "O primeiro GTA apresenta crime urbano em três cidades com perspectiva top-down, liberdade caótica e missões para chefes do submundo.",
    fullStory:
      "A narrativa é fragmentada: o jogador assume um criminoso sem biografia fixa e sobe no submundo aceitando trabalhos, roubando carros e acumulando dinheiro. O foco está na sensação de cidade aberta, no risco de perseguições policiais e na possibilidade de quebrar regras do jogo a favor do jogador.",
    developmentHistory:
      "Desenvolvido pela DMA Design, nasceu de ideias ligadas a Race'n'Chase. David Jones e Mike Dailly são os nomes centrais da criação inicial. O projeto encontrou sua identidade quando a perseguição, o roubo de carros e a liberdade sistêmica ficaram mais interessantes que uma corrida convencional.",
    importance:
      "Estabeleceu o DNA da série: carros, polícia, rádio, humor ácido, crime e cidades satíricas.",
    themes: ["crime urbano", "liberdade", "arcade", "caos"],
    factions: ["chefes locais", "polícia"],
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
    protagonist: "Avatares selecionáveis",
    antagonists: ["Crime londrino", "Polícia"],
    supportingCharacters: ["Harold Cartwright", "Jack Parkinson", "Sid Vacant"],
    summary:
      "Expansão de GTA 1 ambientada na Londres dos anos 60, com carros, linguagem e atmosfera britânica.",
    fullStory:
      "A campanha funciona como variação de GTA 1 em ambiente londrino: o jogador trabalha para figuras do submundo local, sobe em reputação e atravessa uma cidade estilizada por cultura pop, crime e ironia britânica.",
    developmentHistory:
      "Criada como mission pack/expansão, mostrou que GTA podia mudar de país e período histórico sem abandonar a fórmula de caos urbano.",
    importance:
      "É uma das poucas vezes em que GTA saiu da sátira de cidades americanas.",
    themes: ["anos 60", "crime britânico", "expansão"],
    factions: ["gangues londrinas"],
    relatedGames: ["Grand Theft Auto", "GTA: London 1961"],
    tags: ["2D Universe", "Expansão", "Prequel", "London"]
  },
  {
    id: "london-1961",
    title: "Grand Theft Auto: London 1961",
    releaseYear: 1999,
    storyYear: 1961,
    universe: "2D Universe",
    city: "London",
    protagonist: "Avatares selecionáveis",
    antagonists: ["Gangues locais", "Polícia"],
    supportingCharacters: ["Elenco de chefes da expansão"],
    summary:
      "Expansão adicional para PC, anterior a London 1969 dentro da cronologia.",
    fullStory:
      "London 1961 amplia a ideia de crime de época com missões e ambientação ainda mais retrô. A história permanece leve, mais interessada em estilo e objetivos do que em arco dramático.",
    developmentHistory:
      "Distribuída como complemento para London 1969 no PC, reforçando a fase experimental do primeiro GTA.",
    importance:
      "Curiosidade histórica importante para a cronologia interna e para a raridade de GTA fora dos EUA.",
    themes: ["anos 60", "Londres", "arcade"],
    factions: ["gangues londrinas"],
    relatedGames: ["Grand Theft Auto", "GTA: London 1969"],
    tags: ["2D Universe", "Expansão", "Prequel", "Spin-off"]
  },
  {
    id: "gta-2",
    title: "Grand Theft Auto 2",
    releaseYear: 1999,
    storyYear: "Não confirmado / retrofuturista",
    universe: "2D Universe",
    city: "Anywhere City",
    protagonist: "Claude Speed",
    antagonists: ["Zaibatsu", "Loonies", "Yakuza", "Scientists", "Rednecks", "Russian Mafia", "Krishna"],
    supportingCharacters: ["Chefes de gangues por distrito"],
    summary:
      "GTA 2 troca cidades reconhecíveis por Anywhere City, um experimento retrofuturista com reputação entre gangues.",
    fullStory:
      "Claude Speed trabalha para facções rivais em distritos da cidade. Cada contrato aumenta dinheiro e reputação, mas piora relações com inimigos. A história é menos linear e mais uma matriz de lealdades temporárias, traições e controle territorial.",
    developmentHistory:
      "A DMA/Rockstar testou sistemas de gangues mais distintos, visual futurista e comportamento urbano mais responsivo, ainda em top-down.",
    importance:
      "Funciona como ponte experimental: mantém a estrutura 2D, mas antecipa a importância de facções com identidade própria.",
    themes: ["retrofuturo", "gangues", "corporações", "reputação"],
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
      "Claude é traído por Catalina, escapa da prisão e atravessa as facções de Liberty City em busca de sobrevivência e vingança.",
    fullStory:
      "Após um assalto, Catalina atira em Claude e foge com Miguel. Claude sobrevive, escapa com 8-Ball e passa a trabalhar para a Leone Family. Quando Salvatore tenta eliminá-lo, Maria o ajuda a se aproximar da Yakuza. O conflito se espalha por Yardies, Cartel Colombiano, políticos e empresários até Claude confrontar Catalina no final.",
    developmentHistory:
      "GTA III foi a virada para 3D em tempo real. A cidade, as rádios, os pedestres, a polícia, os veículos e as missões passaram a operar num espaço tridimensional coeso.",
    importance:
      "Redefiniu o gênero de mundo aberto urbano e virou referência estrutural para jogos de ação em terceira pessoa.",
    themes: ["traição", "vingança", "máfia", "cidade aberta"],
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
      "Tommy perde dinheiro e drogas numa emboscada, derruba Ricardo Diaz e construí um império próprio em Vice City.",
    fullStory:
      "Recém-saído da prisão depois de 15 anos, Tommy é enviado por Sonny Forelli para uma negociação em Vice City. A operação dá errado. Tommy precisa recuperar a mercadoria, entender quem o traiu e sobreviver ao jogo de cartois, mafiosos e empresários. Ele toma a mansão de Diaz, compra negócios, consolida poder e, no final, mata Lance e Sonny.",
    developmentHistory:
      "Desenvolvido rapidamente depois de GTA III, Vice City ampliou voz, rádio, personalidade de protagonista e atmosfera. A inspiração em cinema criminal dos anos 80 e cultura de Miami moldou o tom.",
    importance:
      "Transformou ambientação em assinatura. Vice City é lembrado tanto por história quanto por música, neon, figurino e humor.",
    themes: ["anos 80", "neon", "drogas", "império criminal"],
    factions: ["Forelli Family", "Diaz Organization", "Vance Crime Family", "Cubans", "Haitians"],
    relatedGames: ["Vice City Stories", "GTA VI"],
    tags: ["3D Universe", "Prequel relacionado", "Vice City", "Clássico"]
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
      "CJ retorna a Los Santos, descobre traições e reconquista poder cruzando Los Santos, San Fierro, deserto e Las Venturas.",
    fullStory:
      "A morte de Beverly Johnson traz CJ de volta. Grove Street está fraca, Sweet desconfia do irmão e C.R.A.S.H. usa CJ como instrumento. A traição de Big Smoke e Ryder revela ligações com drogas e corrupção. CJ é exilado, construiu negócios, aliados e habilidades em todo o estado, retorna a Los Santos e fecha a história contra Big Smoke e Tenpenny.",
    developmentHistory:
      "San Andreas expande tudo: mapa com três cidades, campo, deserto, academias, gordura, musculatura, roupas, habilidades, território, aviões e RPG leve.",
    importance:
      "É o ápice de ambição da era 3D e um dos jogos mais influentes da geração PS2.",
    themes: ["família", "gangues", "corrupção policial", "território", "redenção"],
    factions: ["Grove Street Families", "Ballas", "Los Santos Vagos", "Varrios Los Aztecas", "San Fierro Rifa", "Da Nang Boys", "C.R.A.S.H."],
    relatedGames: ["GTA V", "GTA Online"],
    tags: ["3D Universe", "Estado", "Gangues", "Clássico"]
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
      "Mike tenta sair da vida criminal com Vinnie, mas uma explosão e uma traição o jogam numa vingança em Liberty City.",
    fullStory:
      "Mike e Vinnie planejam abandonar Liberty City com dinheiro, mas Vinnie aparentemente morre numa explosão. Mike busca responsáveis e trabalha para figuras locais, até descobrir que a história era uma manipulação. O final reforça o tema de fuga impossível da cidade.",
    developmentHistory:
      "Desenvolvido para Game Boy Advance, adapta Liberty City a uma leitura top-down conectada ao universo 3D.",
    importance:
      "Curioso por unir portátil, câmera clássica e continuidade de GTA III.",
    themes: ["vingança", "traição", "prequel"],
    factions: ["Yakuza", "Yardies", "Uptown Yardies", "cartel local"],
    relatedGames: ["GTA III"],
    tags: ["3D Universe", "Prequel", "Spin-off", "Portátil"]
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
      "Toni volta a Liberty City e ajuda Salvatore Leone a vencer guerras de máfia, política e território.",
    fullStory:
      "Depois de um período fora, Toni retorna e tenta recuperar posição na família Leone. Ele lida com ordens humilhantes, rivais italianos, interesses políticos de Donald Love e disputas que preparam o tabuleiro de GTA III.",
    developmentHistory:
      "Originalmente criado para PSP, reutiliza Liberty City com nova época, novas missões e refinamentos técnicos.",
    importance:
      "Aprofunda a mitologia da Leone Family e mostra Liberty antes de Claude.",
    themes: ["máfia", "lealdade", "política", "prequel"],
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
      "Vic Vance é expulso do exército e empurrado para uma guerra criminal que antecede os eventos de Vice City.",
    fullStory:
      "Vic tenta proteger sua família, mas Jerry Martinez o usa em esquemas ilegais. Ao lado de Lance, ele monta negócios em Vice City, enfrenta a família Mendez e cruza com figuras que reaparecem em 1986. A tragédia é que o destino de Vic no início de Vice City já é conhecido.",
    developmentHistory:
      "Segundo grande prequel portátil da era 3D, expande sistema de negócios e território em Vice City.",
    importance:
      "Dá contexto ao passado dos Vance e à paisagem criminal anterior a Tommy.",
    themes: ["família", "corrupção militar", "drogas", "prequel"],
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
      "Niko chega aos EUA procurando futuro e vingança, mas encontra dívidas, mentiras, máfias e o colapso moral do sonho americano.",
    fullStory:
      "Roman vende uma fantasia de sucesso; Niko encontra um táxi, agiotas e violência. Trabalhos para gangues jamaicanas, máfias russas, famílias irlandesas, italianos e agentes federais levam Niko até homens ligados a seu trauma de guerra. O jogo culmina em escolhas que cobram preço pessoal, seja por vingança ou acordo.",
    developmentHistory:
      "Primeira GTA da era HD, usando RAGE e animação Euphoria. A Rockstar reposicionou o tom para drama criminal realista.",
    importance:
      "Mostrou que GTA podia ser mais dramático, denso e politicamente amargo sem perder sátira.",
    themes: ["imigração", "trauma", "capitalismo", "vingança"],
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
      "A história de Johnny no The Lost MC mostra um motoclube ruindo por vício, orgulho e traição interna.",
    fullStory:
      "Johnny tenta administrar The Lost com algum pragmatismo enquanto Billy Grey retorna e reinicia guerras. O clube se divide, negócios com drogas e diamantes cruzam a história de GTA IV e a lealdade de Johnny é esmagada por uma cultura de autodestruição.",
    developmentHistory:
      "Primeiro episódio de GTA IV, criado para mostrar a mesma cidade por outra classe social e criminal.",
    importance:
      "Aprofunda a técnica narrativa de perspectivas cruzadas na era HD.",
    themes: ["motoclube", "lealdade", "decadência", "vício"],
    factions: ["The Lost MC", "Angels of Death", "Pegorino Family"],
    relatedGames: ["GTA IV", "The Ballad of Gay Tony", "GTA V"],
    tags: ["HD Universe", "Expansão", "Motoclube"]
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
      "Huang Lee chega com a espada Yu Jian, e uma traição familiar o coloca numa guerra por honra e poder entre Triads.",
    fullStory:
      "Após o assassinato do pai, Huang deve entregar a espada ancestral ao tio Kenny. Ele é atacado, dado como morto e mergulha em investigações, tráfico e jogos de lealdade. A revelação final transforma a busca por honra em acerto de contas familiar.",
    developmentHistory:
      "Criado para Nintendo DS e depois levado a outras plataformas, adapta Liberty City HD a uma estética top-down moderna.",
    importance:
      "Mantém a era HD ativa fora dos consoles de mesa e explora Triads com foco próprio.",
    themes: ["honra", "família", "drogas", "traição"],
    factions: ["Triads", "LCPD", "FIB"],
    relatedGames: ["GTA IV"],
    tags: ["HD Universe", "Spin-off", "Portátil"]
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
      "Luis tenta salvar Tony Prince e seus clubes enquanto diamantes, celebridades, máfias e bilionários puxam Liberty para o excesso.",
    fullStory:
      "Luis divide lealdade entre amigos de bairro e a vida noturna de Tony. Dívidas, chantagens e negócios com diamantes levam a confrontos com Bulgarin e outros predadores. O episódio contrasta glamour e perigo, encerrando a trilogia de perspectivas de GTA IV.",
    developmentHistory:
      "Segundo episódio de GTA IV, deliberadamente mais colorido, explosivo e luxuoso que o jogo base.",
    importance:
      "Completa o mosaico de Liberty City e mostra como a mesma conspiração de diamantes afeta vários protagonistas.",
    themes: ["vida noturna", "luxo", "lealdade", "diamantes"],
    factions: ["clubes de Tony", "Russian Mafia", "Ancelotti connections"],
    relatedGames: ["GTA IV", "The Lost and Damned"],
    tags: ["HD Universe", "Expansão", "Vida noturna"]
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
      "Três criminosos se unem em assaltos enquanto FIB, IAA, Merryweather, empresários e gangues locais tentam usá-los ou eliminá-los.",
    fullStory:
      "Em 2004, um assalto em North Yankton separa Michael, Trevor e Brad. Em 2013, Michael vive protegido em Los Santos, Franklin tenta sair do crime de rua e Trevor descobre que Michael está vivo. Lester estrutura assaltos, o FIB chantageia o trio, Devin Weston explora Franklin e antigos inimigos voltam. A Opção C é a conclusão mais aceita: os três sobrevivem e eliminam ameaças centrais.",
    developmentHistory:
      "GTA V traz três protagonistas jogáveis, mapa amplo, assaltos planejados e uma Los Santos satírica da cultura de celebridade, tecnologia e desigualdade.",
    importance:
      "Fenômeno comercial duradouro e base para GTA Online.",
    themes: ["assaltos", "família", "mídia", "capitalismo", "amizade tóxica"],
    factions: ["FIB", "IAA", "Merryweather", "Families", "Ballas", "Vagos", "Madrazo Cartel"],
    relatedGames: ["GTA Online"],
    tags: ["HD Universe", "Três protagonistas", "Los Santos"]
  },
  {
    id: "gta-online",
    title: "Grand Theft Auto Online",
    releaseYear: 2013,
    storyYear: "2013 em diante",
    universe: "HD Universe",
    city: "Los Santos, Blaine County, Cayo Perico e instâncias",
    protagonist: "Personagem criado pelo jogador",
    antagonists: ["Merryweather", "FIB", "IAA", "El Rubio", "Duggans", "criminosos rivais"],
    supportingCharacters: ["Lamar Davis", "Lester Crest", "Agent 14", "Tony Prince", "Franklin Clinton", "Dr. Dre", "Dax", "Martin Madrazo", "Imani"],
    summary:
      "GTA Online transforma Los Santos em uma carreira criminal persistente com assaltos, empresas e atualizações narrativas.",
    fullStory:
      "O jogador chega como criminoso desconhecido e passa de trabalhos de rua a CEO, presidente de motoclube, dono de bunker, operador de cassino, infiltrado em Cayo Perico, sócio de agência, produtor de nightclubs e figura de lavagem de dinheiro. A história é menos linear e mais uma acumulação de status, contatos e infraestrutura criminal.",
    developmentHistory:
      "Lançado semanas após GTA V, cresceu por atualizações regulares e virou plataforma de longa duração.",
    importance:
      "Mudou a economia da franquia e manteve GTA V culturalmente ativo por mais de uma década.",
    themes: ["plataforma viva", "assaltos", "negócios", "economia criminal"],
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
      "Coletânea remasterizada dos três pilares da era 3D.",
    fullStory:
      "Não é uma história nova, mas uma nova edição de GTA III, Vice City e San Andreas. Serve como porta de entrada moderna para a continuidade 3D e suas três narrativas centrais.",
    developmentHistory:
      "Lançada como remasterização. Recebeu críticas no lançamento por problemas técnicos e visuais, com correções posteriores.",
    importance:
      "Mantém a trilogia clássica acessível, embora também seja lembrada por controvérsias de preservação e qualidade.",
    themes: ["preservação", "remaster", "era 3D"],
    factions: ["Leone Family", "Forelli Family", "Grove Street Families", "C.R.A.S.H."],
    relatedGames: ["GTA III", "Vice City", "San Andreas"],
    tags: ["3D Universe", "Remaster", "Coletânea"]
  },
  {
    id: "gta-vi",
    title: "Grand Theft Auto VI",
    releaseYear: 2026,
    storyYear: 2026,
    universe: "HD Universe",
    city: "Leonida, Vice City",
    protagonist: "Lucia Caminos e Jason Duval",
    antagonists: ["Não confirmado"],
    supportingCharacters: ["Cal Hampton", "Boobie Ike", "Dre'Quan Priest", "Real Dimez", "Raul Bautista", "Brian Heder", "Lori Heder"],
    summary:
      "Lucia e Jason dependem um do outro depois que um serviço dá errado e os joga numa conspiração em Leonida.",
    fullStory:
      "Jason e Lucia, um casal no estilo Bonnie & Clyde, veem um assalto a banco dar errado e caem numa conspiração que atravessa o estado de Leonida — do neon de Vice City aos Keys, pântanos de Grassrivers e usinas de Ambrosia. O Extended Look (27/08/2026) mostrou a abertura com um carregamento ligado a Boobie Ike, a rotina do casal no refúgio, assaltos com escolhas de risco e a polícia montando o perfil dos dois. Antagonistas e capítulos seguem sob sigilo.",
    developmentHistory:
      "Confirmado em fevereiro de 2022, revelado com o Trailer 1 em dezembro de 2023, adiado duas vezes e mostrado em 26 minutos de gameplay em 27 de agosto de 2026 (estreia na Netflix). Sem microtransações no single-player e sem IA generativa, segundo o Rockstar North. Lançamento em 19 de novembro de 2026 para PlayStation 5 e Xbox Series X|S, com pré-load em 12 de novembro.",
    importance:
      "Próximo capítulo principal da série e retorno de Vice City em escala moderna.",
    themes: ["Leonida", "Vice City moderna", "casal criminoso", "redes sociais", "sátira contemporânea"],
    factions: ["Final Chapter MC (moto clube de Ambrosia)", "PTT Youngin$", "Only Raw Records", "polícia de Leonida"],
    relatedGames: ["GTA Vice City", "Vice City Stories", "GTA Online"],
    tags: ["HD Universe", "GTA VI", "Fatos confirmados", "Extended Look", "Não lançado"]
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
    biography: "Criminoso lacônico traído por Catalina durante um assalto em Liberty City. Sua falta de fala o transforma em figura quase fantasma dentro da cidade.",
    storyArc: "Sobrevive à traição, trabalha para várias facções e fecha sua vingança contra Catalina.",
    relationships: ["Catalina: ex-parceira e traidora", "8-Ball: aliado inicial", "Maria Latore: conexão com a Yakuza", "Asuka Kasen: patrona temporária"],
    affiliations: ["Leone Family", "Yakuza", "Yardies", "trabalhos independentes"],
    enemies: ["Catalina", "Colombian Cartel", "Salvatore Leone"],
    fate: "Vivo ao final de GTA III; paradeiro posterior não confirmado.",
    importance: "Principal",
    tags: ["protagonista", "vingança", "silencioso"]
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
    biography: "Ex-soldado da Forelli Family que passa 15 anos preso e volta como emissário de Sonny Forelli em Vice City.",
    storyArc: "Transforma uma emboscada em oportunidade: derruba Diaz, compra negócios e vira chefe independente.",
    relationships: ["Sonny Forelli: antigo chefe e inimigo final", "Ken Rosenberg: advogado e aliado", "Lance Vance: aliado que se torna traidor", "Ricardo Diaz: alvo de golpe"],
    affiliations: ["Forelli Family", "Vercetti Estate", "negócios de Vice City"],
    enemies: ["Sonny Forelli", "Ricardo Diaz", "Lance Vance"],
    fate: "Vivo e dominante em Vice City ao final do jogo.",
    importance: "Principal",
    tags: ["protagonista", "máfia", "império", "Vice City"]
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
    biography: "Membro da Grove Street Families que volta de Liberty City após a morte da mãe.",
    storyArc: "Sai de suspeito e filho ausente para liderança capaz de recuperar a Grove e vencer Tenpenny.",
    relationships: ["Sweet Johnson: irmão e líder da Grove", "Kendl Johnson: irmã", "Cesar Vialpando: aliado e cunhado", "Big Smoke e Ryder: amigos traidores"],
    affiliations: ["Grove Street Families", "Cesar's garage", "Four Dragons Casino"],
    enemies: ["Frank Tenpenny", "Big Smoke", "Ryder", "Ballas"],
    fate: "Vivo ao final de San Andreas.",
    importance: "Principal",
    tags: ["protagonista", "gangue", "família", "redenção"]
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
    biography: "Parceiro de Vinnie que tenta fugir da cidade antes de ser preso numa trama de traição.",
    storyArc: "Busca vingança pela morte aparente de Vinnie e descobre que foi manipulado.",
    relationships: ["Vinnie: parceiro e traidor", "8-Ball: contato", "Cisco: aliado/rival em negócios"],
    affiliations: ["trabalhos independentes", "contatos locais"],
    enemies: ["Vinnie", "criminosos rivais"],
    fate: "Sobrevive e deixa Liberty City com destino incerto.",
    importance: "Principal",
    tags: ["protagonista", "prequel", "vingança"]
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
    biography: "Soldado da Leone Family, leal a Salvatore e constantemente diminuído pela própria mãe.",
    storyArc: "Em LCS sobe na hierarquia e ajuda os Leone a vencer rivais; em GTA III aparece como capo estabelecido.",
    relationships: ["Salvatore Leone: chefe", "Ma Cipriani: mãe crítica", "Claude: executor temporário"],
    affiliations: ["Leone Family"],
    enemies: ["Sindacco Family", "Forelli Family", "Yakuza"],
    fate: "Vivo em GTA III; futuro posterior não confirmado.",
    importance: "Principal",
    tags: ["protagonista", "máfia", "Leone"]
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
    biography: "Militar expulso por manipulação de Jerry Martinez, tentando sustentar a família e proteger o irmão doente.",
    storyArc: "Constrói um império com Lance, enfrenta os Mendez e fica marcado pela tragédia que abre Vice City.",
    relationships: ["Lance Vance: irmão e parceiro", "Jerry Martinez: corruptor", "Louise Cassidy-Williams: relação trágica"],
    affiliations: ["Vance Crime Family", "exército dos EUA"],
    enemies: ["Jerry Martinez", "Armando Mendez", "Diego Mendez"],
    fate: "Morto na emboscada inicial de Vice City em 1986.",
    importance: "Principal",
    tags: ["protagonista", "família", "Vice City", "prequel"]
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
    biography: "Veterano de guerra do Leste Europeu que chega a Liberty City atrás de Roman, dinheiro e respostas sobre uma traição do passado.",
    storyArc: "Descobre que o sonho americano é propaganda, e que vingança não resolve o trauma.",
    relationships: ["Roman Bellic: primo", "Little Jacob: aliado leal", "Packie McReary: parceiro", "Kate McReary: possível par romântico", "Dimitri Rascalov: traidor"],
    affiliations: ["trabalhos independentes", "McReary Family", "Pegorino Family"],
    enemies: ["Dimitri Rascalov", "Ray Bulgarin", "Darko Brevic", "Jimmy Pegorino"],
    fate: "Sobrevive; perdas variam conforme escolha final.",
    importance: "Principal",
    tags: ["protagonista", "imigração", "trauma", "noir"]
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
    storyArc: "Tenta salvar o clube em Liberty City; em GTA V aparece destruído por vício e dependência emocional.",
    relationships: ["Billy Grey: líder e rival", "Ashley Butler: relação tóxica", "Jim Fitzgerald: aliado", "Trevor Philips: algoz em GTA V"],
    affiliations: ["The Lost MC"],
    enemies: ["Billy Grey", "Angels of Death", "Trevor Philips"],
    fate: "Morto por Trevor em GTA V.",
    importance: "Principal",
    tags: ["protagonista", "motoclube", "trágico"]
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
    biography: "Segurança, sócio e solucionador de problemas de Tony Prince, dividido entre bairro, negócios e vida noturna.",
    storyArc: "Protege Tony, lida com dívidas e sobrevive ao caos dos diamantes.",
    relationships: ["Tony Prince: chefe e amigo", "Yusuf Amir: aliado extravagante", "Mori Kibbutz: pressão", "Ray Bulgarin: inimigo"],
    affiliations: ["Maisonette 9", "Hercules", "rede de Tony Prince"],
    enemies: ["Ray Bulgarin", "Rocco Pelosi", "Mori Kibbutz"],
    fate: "Vivo ao final do episódio.",
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
    biography: "Filho de líder das Triads que chega a Liberty City para entregar a espada Yu Jian após a morte do pai.",
    storyArc: "Perde a espada, é deixado para morrer, investiga traições e confronta o próprio tio.",
    relationships: ["Wu Kenny Lee: tio e traidor", "Hsin Jaoming: líder Triad", "Wade Heston: policial aliado"],
    affiliations: ["Triads", "família Lee"],
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
    biography: "Ex-assaltante que fingiu a própria morte em acordo com Dave Norton e vive em Los Santos sob proteção.",
    storyArc: "O tédio suburbano vira crise quando Franklin entra em sua vida e Trevor descobre a mentira de North Yankton.",
    relationships: ["Trevor Philips: ex-parceiro e ferida aberta", "Franklin Clinton: protegido", "Amanda, Jimmy e Tracey: família", "Dave Norton: contato do FIB"],
    affiliations: ["equipe de assaltos", "acordo informal com FIB"],
    enemies: ["Devin Weston", "Steve Haines", "Wei Cheng"],
    fate: "Vivo na Opção C, leitura canônica mais aceita.",
    importance: "Principal",
    tags: ["protagonista", "assaltante", "família"]
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
    storyArc: "Aprende com Michael e Lester, enfrenta pressão de Lamar, Stretch e Devin, e depois aparece como empresário na agência F. Clinton and Partner.",
    relationships: ["Michael De Santa: mentor", "Lamar Davis: amigo", "Tanisha Jackson: relação antiga", "Lester Crest: contato"],
    affiliations: ["Families", "equipe de assaltos", "F. Clinton and Partner"],
    enemies: ["Stretch", "Devin Weston", "Ballas"],
    fate: "Vivo e bem-sucedido em GTA Online.",
    importance: "Principal",
    tags: ["protagonista", "gangue", "online", "empresário"]
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
    biography: "Ex-piloto e criminoso imprevisível, fundador da Trevor Philips Enterprises, marcado pela traição percebida de Michael.",
    storyArc: "Sai do isolamento violento em Blaine County para reencontrar Michael e encarar a verdade sobre North Yankton.",
    relationships: ["Michael De Santa: ex-parceiro", "Ron Jakowski: aliado", "Wade Hebert: seguidor", "Johnny Klebitz: vítima"],
    affiliations: ["Trevor Philips Enterprises", "equipe de assaltos"],
    enemies: ["Lost MC", "Merryweather", "Wei Cheng", "Devin Weston"],
    fate: "Vivo na Opção C; morto em finais alternativos.",
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
    biography: "Protagonista de GTA VI. Material oficial indica passado ligado ao Leonida Penitentiary e desejo de conquistar a boa vida sonhada por sua mãe desde Liberty City.",
    storyArc: "Não confirmado. A sinopse oficial a coloca ao lado de Jason depois que um serviço dá errado.",
    relationships: ["Jason Duval: parceiro central", "família: mencionada no material oficial"],
    affiliations: ["Não confirmado"],
    enemies: ["Não confirmado"],
    fate: "Não confirmado; jogo ainda não lançado.",
    importance: "Principal",
    tags: ["protagonista", "GTA VI", "Leonida", "não confirmado"]
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
    biography: "Protagonista de GTA VI. O material oficial o apresenta como parceiro de Lucia numa história de risco, crime e dependência mútua.",
    storyArc: "Não confirmado além da premissa oficial do golpe que dá errado e da conspiração em Leonida.",
    relationships: ["Lucia Caminos: parceira central"],
    affiliations: ["Não confirmado"],
    enemies: ["Não confirmado"],
    fate: "Não confirmado; jogo ainda não lançado.",
    importance: "Principal",
    tags: ["protagonista", "GTA VI", "Leonida", "não confirmado"]
  },
  {
    id: "online-protagonist",
    name: "Protagonista de GTA Online",
    aliases: ["Online Player", "Seu personagem"],
    games: ["Grand Theft Auto Online"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Protagonista customizável",
    category: "GTA Online",
    biography: "Criminoso criado pelo jogador que chega a Los Santos e sobe de trabalhos pequenos para império criminal multiempresarial.",
    storyArc: "Evolui de novato para dono de apartamento, CEO, presidente de MC, operador de bunker, dono de nightclub, infiltrado em Cayo Perico e agente de contratos VIP.",
    relationships: ["Lamar Davis: contato inicial", "Lester Crest: mentor de assaltos", "Franklin Clinton: parceiro em The Contract", "Tony Prince: nightlife"],
    affiliations: ["Organização de jogador", "MC", "Agency", "Nightclub", "Arcade", "Bunker"],
    enemies: ["jogadores rivais", "Merryweather", "El Rubio", "Duggans"],
    fate: "Persistente e aberto, conforme atualizações.",
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
    biography: "Primo de Niko, dono de táxi e vendedor compulsivo do sonho americano.",
    storyArc: "Suas mentiras levam Niko a Liberty, mas sua lealdade emocional sustenta a história.",
    relationships: ["Niko Bellic: primo", "Mallorie Bardas: parceira", "Vlad Glebov: agiota abusivo"],
    affiliations: ["Roman's Taxi"],
    enemies: ["agiotas", "Vlad Glebov", "Dimitri Rascalov"],
    fate: "Pode morrer no final Deal; vive no final Revenge.",
    importance: "Alto",
    tags: ["aliado", "família", "imigração"]
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
    biography: "Armeiro jamaicano e um dos aliados mais confiáveis de Niko.",
    storyArc: "Ajuda Niko em operações decisivas e permanece leal quando quase todos os demais falham.",
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
    role: "Aliado cômico",
    category: "Aliados",
    biography: "Empresário de carros, fitness e ego inflado, envolvido em corridas e negócios duvidosos.",
    storyArc: "Serve como sátira de masculinidade performática e cultura de autoajuda agressiva.",
    relationships: ["Niko Bellic: contato", "Mori Kibbutz: irmão"],
    affiliations: ["Brucie's Executive Lifestyle Autos"],
    enemies: ["rivais pessoais"],
    fate: "Vivo; reaparece em GTA Online.",
    importance: "Medio",
    tags: ["aliado", "empresário", "sátira"]
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
    biography: "Membro da família McReary, assaltante experiente e ponte de Niko com o crime irlandês.",
    storyArc: "Participa de assaltos importantes em IV e pode ser recrutado para golpes em V/Online.",
    relationships: ["Kate McReary: irmã", "Niko Bellic: parceiro", "Derrick e Gerry: irmãos"],
    affiliations: ["McReary Family"],
    enemies: ["máfias rivais", "polícia"],
    fate: "Vivo se recrutado em GTA V/Online.",
    importance: "Alto",
    tags: ["aliado", "máfia", "assalto"]
  },
  {
    id: "kate-mcreary",
    name: "Kate McReary",
    aliases: ["Kate"],
    games: ["Grand Theft Auto IV"],
    universe: "HD Universe",
    city: "Liberty City",
    role: "Aliada / interesse romântico",
    category: "Aliados",
    biography: "Irmã de Packie, tenta manter distância moral da criminalidade da família.",
    storyArc: "Representa a chance de Niko escolher uma vida menos corrompida.",
    relationships: ["Niko Bellic: possível romance", "Packie McReary: irmão"],
    affiliations: ["McReary Family"],
    enemies: ["violência do submundo"],
    fate: "Pode morrer no final Revenge; vive no final Deal.",
    importance: "Medio",
    tags: ["aliado", "família", "drama"]
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
    storyArc: "É uma das poucas figuras civis que mostram o custo emocional das escolhas de Niko e Roman.",
    relationships: ["Roman Bellic: parceiro", "Niko Bellic: família ampliada", "Vlad Glebov: abusador"],
    affiliations: ["Roman's Taxi"],
    enemies: ["Vlad Glebov"],
    fate: "Viva; destino afetado pelas escolhas finais de GTA IV.",
    importance: "Medio",
    tags: ["aliado", "família"]
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
    biography: "Hacker e estrategista paranoico, velho contato de Michael e peça-chave dos assaltos.",
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
    biography: "Melhor amigo de Franklin, impulsivo, engraçado e preso a uma visão romantizada de gangue.",
    storyArc: "Sua lealdade e imprudência puxam Franklin de volta para conflitos de rua.",
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
    role: "Família",
    category: "Aliados",
    biography: "Esposa de Michael, ex-stripper, presa num casamento de dinheiro, traição e ressentimento.",
    storyArc: "Expõe o vazio suburbano de Michael e a família como campo de batalha emocional.",
    relationships: ["Michael: marido", "Jimmy e Tracey: filhos"],
    affiliations: ["família De Santa"],
    enemies: ["crise familiar"],
    fate: "Viva.",
    importance: "Médio",
    tags: ["família", "aliado"]
  },
  {
    id: "jimmy-de-santa",
    name: "Jimmy De Santa",
    aliases: ["James"],
    games: ["Grand Theft Auto V"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Família",
    category: "Aliados",
    biography: "Filho de Michael, sátira de gamer mimado e juventude sem rumo.",
    storyArc: "Sua relação com Michael revela fracasso paterno, dependência e tentativa tardia de reconciliação.",
    relationships: ["Michael: pai", "Amanda: mãe", "Tracey: irmã"],
    affiliations: ["família De Santa"],
    enemies: ["auto-sabotagem"],
    fate: "Vivo.",
    importance: "Médio",
    tags: ["família", "sátira"]
  },
  {
    id: "tracey-de-santa",
    name: "Tracey De Santa",
    aliases: ["Tracey"],
    games: ["Grand Theft Auto V"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Família",
    category: "Aliados",
    biography: "Filha de Michael, obcecada por fama e reality shows.",
    storyArc: "Mostra a sátira da cultura de celebridade e a incapacidade de Michael lidar com a própria família.",
    relationships: ["Michael: pai", "Amanda: mãe", "Jimmy: irmão"],
    affiliations: ["família De Santa"],
    enemies: ["indústria exploradora de celebridade"],
    fate: "Viva.",
    importance: "Médio",
    tags: ["família", "celebridade"]
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
    biography: "Agente do FIB ligado ao acordo que permitiu Michael fingir a própria morte.",
    storyArc: "Tenta equilibrar autopreservação, carreira e a bomba-relógio chamada Michael.",
    relationships: ["Michael: protegido e problema", "Steve Haines: superior tóxico"],
    affiliations: ["FIB"],
    enemies: ["IAA", "criminosos que ameaçam o acordo"],
    fate: "Vivo na Opção C.",
    importance: "Alto",
    tags: ["governo", "FIB", "polícia corrupta"]
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
    biography: "Agente do FIB e apresentador de TV, usa Michael, Franklin e Trevor como ativos descartáveis.",
    storyArc: "Sua ambição e guerra institucional contra a IAA levam o trio a missões sujas.",
    relationships: ["Dave Norton: subordinado", "Michael/Trevor/Franklin: chantagem"],
    affiliations: ["FIB"],
    enemies: ["IAA", "protagonistas"],
    fate: "Morto na Opção C.",
    importance: "Alto",
    tags: ["antagonista", "governo", "FIB", "polícia corrupta"]
  },
  {
    id: "devin-weston",
    name: "Devin Weston",
    aliases: ["Devin"],
    games: ["Grand Theft Auto V"],
    universe: "HD Universe",
    city: "Los Santos",
    role: "Antagonista empresário",
    category: "Empresários",
    biography: "Bilionário, investidor e predador corporativo que explora Franklin e tenta eliminar o trio.",
    storyArc: "Personifica poder econômico sem consequência até virar alvo da Opção C.",
    relationships: ["Molly Schultz: assessora", "Merryweather: interesses", "Franklin: empregado descartável"],
    affiliations: ["Weston holdings", "Merryweather connections"],
    enemies: ["Michael", "Franklin", "Trevor"],
    fate: "Morto na Opção C.",
    importance: "Alto",
    tags: ["antagonista", "empresário", "capitalismo"]
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
    biography: "Capo mexicano em Los Santos, poderoso, temperamental e cercado por negócios violentos.",
    storyArc: "Entra em conflito com Michael, depois vira contato recorrente de negócios em Online.",
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
    biography: "Paranoico, teórico da conspiração e braço logístico de Trevor.",
    storyArc: "Ajuda Trevor em armas, aviação e negócios, reaparecendo em Online.",
    relationships: ["Trevor Philips: chefe/amigo", "Wade: associado"],
    affiliations: ["Trevor Philips Enterprises", "smuggling operations"],
    enemies: ["Lost MC", "rivais de tráfico"],
    fate: "Vivo.",
    importance: "Médio",
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
    biography: "Seguidor ingênuo de Trevor, usado como apoio e alívio sombrio.",
    storyArc: "Acompanha Trevor até Los Santos sem entender totalmente a violência ao redor.",
    relationships: ["Trevor Philips: líder", "Floyd Hebert: primo"],
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
    enemies: ["pressão mafiosa"],
    fate: "Vivo em San Andreas; futuro posterior não confirmado.",
    importance: "Alto",
    tags: ["aliado", "advogado", "máfia"]
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
    biography: "Irmão de Vic, charmoso e ambicioso, incapaz de aceitar papel secundário.",
    storyArc: "Ajuda Vic e Tommy, mas em 1986 trai Tommy por ressentimento e poder.",
    relationships: ["Vic Vance: irmão", "Tommy Vercetti: aliado/inimigo", "Ricardo Diaz: alvo"],
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
    storyArc: "Subestima Tommy e paga por tentar cobrar a dívida pessoalmente.",
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
    biography: "Traficante paranoico e rico, dono de mansão e influência em Vice City.",
    storyArc: "Parece aliado útil até Tommy e Lance tomarem seu império.",
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
    role: "Aliado / intermediário",
    category: "Aliados",
    biography: "Figura militar e traficante sofisticado, conectado a diplomacia, armas e informações.",
    storyArc: "Ajuda Tommy a entender o submundo e deixa Vice City sob fogo inimigo.",
    relationships: ["Tommy Vercetti: aliado", "Mercedes Cortez: filha", "Ricardo Diaz: contato"],
    affiliations: ["redes militares e traficantes"],
    enemies: ["forças que o perseguem"],
    fate: "Escapa de Vice City.",
    importance: "Médio",
    tags: ["aliado", "governo", "tráfico"]
  },
  {
    id: "avery-carrington",
    name: "Avery Carrington",
    aliases: ["Avery"],
    games: ["Grand Theft Auto: Vice City", "Grand Theft Auto: Liberty City Stories"],
    universe: "3D Universe",
    city: "Vice City / Liberty City",
    role: "Empresário imobiliário",
    category: "Empresários",
    biography: "Magnata imobiliário texano que transforma violência em valorização de terreno.",
    storyArc: "Ensina Tommy a usar caos urbano como ferramenta de negócio; em LCS seu destino é selado por disputas de poder.",
    relationships: ["Tommy Vercetti: contratado", "Donald Love: aprendiz/associado"],
    affiliations: ["desenvolvimento imobiliário"],
    enemies: ["rivais imobiliários"],
    fate: "Morto em Liberty City Stories.",
    importance: "Médio",
    tags: ["empresário", "corrupção", "imobiliário"]
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
    biography: "Britânico ligado à cena musical e fofocas do submundo.",
    storyArc: "Serve como ponte entre celebridade, drogas e crime, reaparecendo no arco de Las Venturas.",
    relationships: ["Tommy Vercetti: contato", "Ken Rosenberg: amigo", "Maccer: associado"],
    affiliations: ["indústria musical", "Caligula's orbit"],
    enemies: ["mafiosos irritados"],
    fate: "Vivo.",
    importance: "Médio",
    tags: ["aliado", "música", "sátira"]
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
    biography: "Patriarca da Leone Family, paranoico, autoritário e central para a máfia de Liberty.",
    storyArc: "Aparece poderoso em prequels, mas sua paranoia contra Claude leva à própria queda.",
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
    role: "Aliada ambígua",
    category: "Aliados",
    biography: "Esposa de Salvatore, impulsiva e perigosa por sua capacidade de mover homens poderosos.",
    storyArc: "Ajuda Claude a escapar da Leone Family e se aproxima da Yakuza.",
    relationships: ["Salvatore Leone: marido", "Claude: protegido/obsessão", "Asuka Kasen: contato"],
    affiliations: ["Leone Family", "Yakuza por associação"],
    enemies: ["Salvatore Leone"],
    fate: "Sobrevive ao final de GTA III; a cena final é ambígua em tom, não em confirmação visual.",
    importance: "Alto",
    tags: ["aliado", "máfia", "ambígua"]
  },
  {
    id: "joey-leone",
    name: "Joey Leone",
    aliases: ["Joey"],
    games: ["Grand Theft Auto III"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Mafioso / mecânico",
    category: "Máfia",
    biography: "Filho de Salvatore, opera garagem e tarefas para a Leone Family.",
    storyArc: "Fornece missões a Claude e mostra a camada operacional da máfia.",
    relationships: ["Salvatore Leone: pai", "Toni Cipriani: associado", "Claude: executor"],
    affiliations: ["Leone Family"],
    enemies: ["Triads", "rivais locais"],
    fate: "Vivo; futuro posterior não confirmado.",
    importance: "Médio",
    tags: ["máfia", "Leone"]
  },
  {
    id: "donald-love",
    name: "Donald Love",
    aliases: ["Donald"],
    games: ["Grand Theft Auto III", "Grand Theft Auto: Liberty City Stories", "Grand Theft Auto: Vice City"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Empresário e político",
    category: "Empresários",
    biography: "Magnata, canibal implícito por humor sombrio e operador político de interesses imobiliários.",
    storyArc: "Usa conflitos criminosos para lucrar e desaparece misteriosamente em GTA III.",
    relationships: ["Avery Carrington: mentor", "Claude: executor", "Toni Cipriani: ferramenta"],
    affiliations: ["Love Media", "interesses políticos"],
    enemies: ["rivais imobiliários"],
    fate: "Desaparece em GTA III; destino não confirmado.",
    importance: "Alto",
    tags: ["empresário", "política", "easter egg"]
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
    biography: "Criminosa volátil, parceira temporária de CJ em San Andreas e traidora de Claude em GTA III.",
    storyArc: "Sai de assaltante caótica na zona rural para líder do Cartel Colombiano em Liberty.",
    relationships: ["Claude: ex-parceiro traído", "CJ: ex-namorado", "Miguel: parceiro em GTA III"],
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
    biography: "Parceiro de Catalina no Cartel Colombiano, envolvido na traição contra Claude.",
    storyArc: "Torna-se peão torturado na guerra entre Catalina, Asuka e Claude.",
    relationships: ["Catalina: parceira", "Asuka Kasen: inimiga", "Claude: alvo"],
    affiliations: ["Colombian Cartel"],
    enemies: ["Claude", "Yakuza"],
    fate: "Morto durante os eventos finais de GTA III.",
    importance: "Médio",
    tags: ["cartel", "antagonista"]
  },
  {
    id: "asuka-kasen",
    name: "Asuka Kasen",
    aliases: ["Asuka"],
    games: ["Grand Theft Auto III"],
    universe: "3D Universe",
    city: "Liberty City",
    role: "Líder Yakuza",
    category: "Máfia",
    biography: "Figura poderosa da Yakuza em Liberty City, fria, teatral e vingativa.",
    storyArc: "Ajuda Claude contra os Leone e o Cartel, mas a guerra a alcança.",
    relationships: ["Kenji Kasen: irmão", "Maria Latore: aliada", "Claude: executor"],
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
    role: "Líder Yakuza",
    category: "Máfia",
    biography: "Irmão de Asuka e figura de comando da Yakuza.",
    storyArc: "Sua morte por Claude, disfarçada para incriminar o Cartel, amplia a guerra.",
    relationships: ["Asuka Kasen: irmã", "Claude: executor secreto"],
    affiliations: ["Yakuza"],
    enemies: ["Colombian Cartel", "Leone Family"],
    fate: "Morto por Claude em missão de Donald Love.",
    importance: "Médio",
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
    biography: "Especialista em explosivos que escapa com Claude no início de GTA III.",
    storyArc: "Apoia a entrada de Claude no submundo e liga vários jogos de Liberty.",
    relationships: ["Claude: aliado", "Mike: contato"],
    affiliations: ["rede de explosivos independente"],
    enemies: ["polícia", "rivais locais"],
    fate: "Vivo; futuro não confirmado.",
    importance: "Médio",
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
    biography: "Membro da Grove Street que se alia a Tenpenny, Ballas e tráfico para buscar poder pessoal.",
    storyArc: "Amigo cômico vira símbolo da traição que destruiu Grove Street.",
    relationships: ["CJ: amigo traído", "Ryder: cúmplice", "Tenpenny: parceiro corrupto"],
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
    biography: "Membro da Grove Street, agressivo e debochado, envolvido na traição ao lado de Big Smoke.",
    storyArc: "De amigo de infância a alvo de CJ em San Fierro.",
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
    role: "Aliado / líder de gangue",
    category: "Gangues",
    biography: "Irmão de CJ e líder da Grove Street Families, rigidamente leal ao bairro.",
    storyArc: "Desconfia de CJ, é preso, depois retorna para reconquistar Grove Street.",
    relationships: ["CJ: irmão", "Kendl: irmã", "Grove Street: família de rua"],
    affiliations: ["Grove Street Families"],
    enemies: ["Ballas", "Tenpenny", "Big Smoke"],
    fate: "Vivo.",
    importance: "Alto",
    tags: ["aliado", "gangue", "família"]
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
    biography: "Irmã de CJ e Sweet, mais pragmática e independente que os irmãos.",
    storyArc: "Seu relacionamento com Cesar ajuda a unir CJ a novas alianças.",
    relationships: ["CJ: irmão", "Sweet: irmão", "Cesar Vialpando: namorado"],
    affiliations: ["família Johnson"],
    enemies: ["pressão das gangues"],
    fate: "Viva.",
    importance: "Médio",
    tags: ["aliado", "família"]
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
    biography: "Líder dos Varrios Los Aztecas e namorado de Kendl.",
    storyArc: "Prova lealdade a CJ ao revelar a traição de Smoke e Ryder.",
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
    role: "Aliado / líder Triad",
    category: "Máfia",
    biography: "Líder Triad respeitado, cego, estrategista e parceiro de CJ.",
    storyArc: "Ajuda CJ em San Fierro e Las Venturas, especialmente no Four Dragons Casino.",
    relationships: ["CJ: parceiro", "Triads: liderança"],
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
    biography: "Agente secreto ligado a operações clandestinas, apresentado como parte do Loco Syndicate.",
    storyArc: "De possível inimigo a manipulador que usa CJ em missões de inteligência e promete libertar Sweet.",
    relationships: ["CJ: ativo forçado", "Loco Syndicate: cobertura"],
    affiliations: ["agência governamental não nomeada"],
    enemies: ["ameaças a operações clandestinas"],
    fate: "Vivo.",
    importance: "Alto",
    tags: ["governo", "aliado", "conspiração"]
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
    biography: "Hippie conspiracionista, ligado a cultivos, teorias e contatos improváveis.",
    storyArc: "Ajuda CJ a sair do isolamento rural e o conecta a San Fierro.",
    relationships: ["CJ: aliado", "Kent Paul e Maccer: contatos"],
    affiliations: ["contracultura", "redes independentes"],
    enemies: ["governo como ideia recorrente"],
    fate: "Vivo.",
    importance: "Médio",
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
    storyArc: "Usa o sistema para lucrar e controlar narrativas até a cidade explodir em revolta.",
    relationships: ["Pulaski: cúmplice", "Hernandez: subordinado", "CJ: chantageado"],
    affiliations: ["C.R.A.S.H.", "LSPD"],
    enemies: ["CJ", "Grove Street"],
    fate: "Morre após perseguição final.",
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
    storyArc: "Executa a violência direta da corrupção policial até ser confrontado por CJ.",
    relationships: ["Tenpenny: parceiro", "Hernandez: colega intimidado"],
    affiliations: ["C.R.A.S.H.", "LSPD"],
    enemies: ["CJ", "Hernandez"],
    fate: "Morto por CJ.",
    importance: "Médio",
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
    storyArc: "Tenta colaborar contra Tenpenny e Pulaski, mas é esmagado pelo próprio grupo.",
    relationships: ["Tenpenny e Pulaski: superiores corruptos"],
    affiliations: ["C.R.A.S.H.", "LSPD"],
    enemies: ["Tenpenny", "Pulaski"],
    fate: "Morto por Pulaski.",
    importance: "Médio",
    tags: ["polícia", "governo", "trágico"]
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
    biography: "Rapper famoso cuja carreira e mansão são afetadas por esquemas de CJ e OG Loc.",
    storyArc: "Cai em alcoolismo e tentativa de suicídio, depois é ajudado por CJ a reconstruir carreira.",
    relationships: ["CJ: inicialmente prejudicial, depois aliado", "OG Loc: imitador/rival"],
    affiliations: ["indústria musical"],
    enemies: ["OG Loc"],
    fate: "Vivo e reabilitado.",
    importance: "Médio",
    tags: ["aliado", "celebridade", "música"]
  },
  {
    id: "zero",
    name: "Zero",
    aliases: ["Zero"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "San Fierro",
    role: "Aliado técnico",
    category: "Aliados",
    biography: "Dono de loja de eletrônicos e especialista em rádio-controle, alvo da rivalidade com Berkley.",
    storyArc: "Ajuda CJ com tecnologia, ainda que suas missões sejam lembradas pela dificuldade.",
    relationships: ["CJ: sócio", "Berkley: rival"],
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
    role: "Antagonista / cafetão",
    category: "Antagonistas",
    biography: "Dono do Pleasure Domes e membro do Loco Syndicate.",
    storyArc: "Serve como entrada de CJ no sindicato de drogas em San Fierro.",
    relationships: ["T-Bone Mendez: parceiro", "Mike Toreno: sócio oculto"],
    affiliations: ["Loco Syndicate"],
    enemies: ["CJ", "Cesar"],
    fate: "Morto por CJ.",
    importance: "Médio",
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
    relationships: ["Ryder: associado", "Jizzy B: parceiro", "Mike Toreno: sócio"],
    affiliations: ["San Fierro Rifa", "Loco Syndicate"],
    enemies: ["CJ", "Cesar"],
    fate: "Morto por CJ e Cesar.",
    importance: "Médio",
    tags: ["antagonista", "gangue", "Rifa"]
  },
  {
    id: "og-loc",
    name: "OG Loc",
    aliases: ["Jeffrey Cross"],
    games: ["Grand Theft Auto: San Andreas"],
    universe: "3D Universe",
    city: "Los Santos",
    role: "Cômico / falso gangster",
    category: "Aliados",
    biography: "Aspirante a rapper que tenta construir imagem criminosa sem ter substância.",
    storyArc: "Explora CJ para roubar a carreira de Madd Dogg, depois é exposto.",
    relationships: ["CJ: antigo amigo", "Madd Dogg: vítima", "Big Smoke: apoiador"],
    affiliations: ["Burger Shot", "indústria musical fake"],
    enemies: ["Madd Dogg"],
    fate: "Vivo, humilhado.",
    importance: "Médio",
    tags: ["sátira", "música"]
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
    relationships: ["Sindacco Family: família", "CJ: inimigo"],
    affiliations: ["Sindacco Family"],
    enemies: ["Leone Family", "CJ"],
    fate: "Morto em Liberty City Stories.",
    importance: "Médio",
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
    biography: "Presidente do The Lost MC, carismático e destrutivo.",
    storyArc: "Retorna da reabilitação e leva o clube a uma guerra que Johnny tenta impedir.",
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
    role: "Aliada trágica",
    category: "Aliados",
    biography: "Ex de Johnny, presa a vício e dívidas, constantemente puxando o motoclube para problemas.",
    storyArc: "Sua dependência e relacionamento com Johnny simbolizam a decadência do The Lost.",
    relationships: ["Johnny Klebitz: ex", "Trevor Philips: envolvimento destrutivo"],
    affiliations: ["The Lost MC por associação"],
    enemies: ["vício", "violência ao redor"],
    fate: "Destino posterior indicado de forma sombria em GTA V/Online; varia por material.",
    importance: "Médio",
    tags: ["trágico", "motoclube"]
  },
  {
    id: "tony-prince",
    name: "Tony Prince / Gay Tony",
    aliases: ["Gay Tony"],
    games: ["Grand Theft Auto IV: The Ballad of Gay Tony", "Grand Theft Auto Online"],
    universe: "HD Universe",
    city: "Liberty City / Los Santos",
    role: "Empresário da noite",
    category: "Empresários",
    biography: "Dono de clubes, celebridade da noite e figura endividada que depende de Luis para sobreviver.",
    storyArc: "Quase perde tudo em Liberty; reaparece em Online ajudando o jogador com nightclubs.",
    relationships: ["Luis Lopez: protetor", "Gracie Ancelotti: rede social", "jogador Online: sócio"],
    affiliations: ["Maisonette 9", "Hercules", "Nightclubs"],
    enemies: ["credores", "Bulgarin", "Rocco"],
    fate: "Vivo e ativo em GTA Online.",
    importance: "Alto",
    tags: ["empresário", "online", "vida noturna"]
  },
  {
    id: "yusuf-amir",
    name: "Yusuf Amir",
    aliases: ["Yusuf"],
    games: ["Grand Theft Auto IV: The Ballad of Gay Tony", "Grand Theft Auto Online"],
    universe: "HD Universe",
    city: "Liberty City / Los Santos",
    role: "Empresário aliado",
    category: "Empresários",
    biography: "Bilionário imobiliário extravagante, fascinado por armas, helicópteros e excessos.",
    storyArc: "Ajuda Luis com recursos absurdos e reaparece como contato em negócios automotivos de Online.",
    relationships: ["Luis Lopez: aliado", "Amir family: riqueza", "jogador Online: contato"],
    affiliations: ["Amir interests"],
    enemies: ["rivais de negócio"],
    fate: "Vivo.",
    importance: "Médio",
    tags: ["empresário", "aliado", "online"]
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
    biography: "Irmão de Brucie, ainda mais agressivo e controlador.",
    storyArc: "Pressiona Luis em tarefas humilhantes e satiriza competitividade tóxica.",
    relationships: ["Brucie Kibbutz: irmão", "Luis Lopez: alvo de exploração"],
    affiliations: ["negócios pessoais"],
    enemies: ["Luis por conflito"],
    fate: "Vivo, derrotado simbolicamente.",
    importance: "Baixo",
    tags: ["empresário", "sátira"]
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
    storyArc: "Funciona como ponte entre tráfico internacional, dívidas e vingança.",
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
    biography: "Tio de Huang, ambicioso e disposto a trair família por poder.",
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
    role: "Líder Triad",
    category: "Máfia",
    biography: "Chefe das Triads em Liberty City, envelhecido, perigoso e preocupado com sucessão.",
    storyArc: "Testa Huang e tenta descobrir quem trai a organização.",
    relationships: ["Huang Lee: possível sucessor", "Kenny Lee: subordinado traidor"],
    affiliations: ["Triads"],
    enemies: ["ratos internos", "gangues rivais"],
    fate: "Vivo ao final, com sucessão redefinida.",
    importance: "Médio",
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
    biography: "Detetive da LCPD com vícios, problemas disciplinares e utilidade investigativa.",
    storyArc: "Ajuda Huang por interesse próprio e por necessidade de limpar sua situação.",
    relationships: ["Huang Lee: aliado pragmático"],
    affiliations: ["LCPD"],
    enemies: ["corrupção interna", "traficantes"],
    fate: "Vivo.",
    importance: "Médio",
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
      "A metrópole de concreto da série. Liberty concentra máfia, imigração, corrupção, ambição imobiliária, trauma e capitalismo urbano.",
    districts: ["Portland", "Staunton Island", "Shoreside Vale", "Broker", "Dukes", "Bohan", "Algonquin", "Alderney"],
    factions: ["Leone Family", "Yakuza", "Colombian Cartel", "Yardies", "Russian Mafia", "Triads", "Pegorino Family", "LCPD"],
    importantEvents: ["Traição de Catalina", "queda de Salvatore Leone", "chegada de Niko Bellic", "guerra dos diamantes", "trama da Yu Jian"],
    characters: ["Claude", "Toni Cipriani", "Niko Bellic", "Huang Lee", "Salvatore Leone", "Roman Bellic"],
    visualStyle: "Concreto, chuva, pontes, metrô, arranha-céus, docas, bairros imigrantes e neon frio.",
    themes: ["máfia", "imigração", "corrupção", "capitalismo", "decadência"]
  },
  {
    id: "vice-city",
    name: "Vice City",
    realWorldInspiration: "Miami",
    universeAppearances: ["2D Universe", "3D Universe", "HD Universe"],
    games: ["GTA 1", "Vice City", "Vice City Stories", "GTA VI"],
    description:
      "Cidade tropical da ambição criminosa: praia, luxo, tráfico, neon, cartéis e vida noturna.",
    districts: ["Ocean Beach", "Washington Beach", "Vice Point", "Downtown", "Little Haiti", "Little Havana", "Starfish Island", "Vice City moderna"],
    factions: ["Forelli Family", "Diaz Organization", "Vance Crime Family", "Mendez Cartel", "Cubans", "Haitians", "grupos de GTA VI não confirmados"],
    importantEvents: ["ascensão de Tommy Vercetti", "queda de Ricardo Diaz", "tragédia de Vic Vance", "retorno em GTA VI"],
    characters: ["Tommy Vercetti", "Vic Vance", "Lance Vance", "Ken Rosenberg", "Lucia Caminos", "Jason Duval"],
    visualStyle: "Palmeiras, art deco, rosa neon, azul piscina, carros esportivos, clubes, mansões e calor úmido.",
    themes: ["neon", "drogas", "luxo", "praia", "cartéis", "vida noturna"]
  },
  {
    id: "san-andreas",
    name: "San Andreas",
    realWorldInspiration: "Califórnia e Nevada; na era 2D, uma cidade inspirada em San Francisco",
    universeAppearances: ["2D Universe", "3D Universe", "HD Universe"],
    games: ["GTA 1", "GTA: San Andreas", "GTA V", "GTA Online"],
    description:
      "Na era 3D, San Andreas vira um estado com Los Santos, San Fierro e Las Venturas. Na era HD, o nome cobre Los Santos e Blaine County.",
    districts: ["Los Santos", "San Fierro", "Las Venturas", "Red County", "Flint County", "Bone County", "Blaine County"],
    factions: ["Grove Street Families", "Ballas", "Vagos", "Aztecas", "Triads", "Rifa", "Da Nang Boys", "FIB", "IAA"],
    importantEvents: ["morte de Beverly Johnson", "queda de Tenpenny", "assaltos de GTA V", "crescimento de GTA Online"],
    characters: ["CJ", "Sweet", "Cesar", "Woozie", "Michael", "Franklin", "Trevor"],
    visualStyle: "Costa ensolarada, bairros de gangue, colinas, deserto, cassinos, pontes e interior rural.",
    themes: ["gangues", "família", "território", "desigualdade", "entretenimento"]
  },
  {
    id: "los-santos",
    name: "Los Santos",
    realWorldInspiration: "Los Angeles",
    universeAppearances: ["3D Universe", "HD Universe"],
    games: ["GTA: San Andreas", "GTA V", "GTA Online"],
    description:
      "Cidade do sonho vendido: celebridades, mídia, gangues, riqueza extrema, indústria do entretenimento e desigualdade brutal.",
    districts: ["Ganton", "Idlewood", "Vinewood", "Downtown", "Rockford Hills", "Vespucci", "Del Perro", "South Los Santos"],
    factions: ["Families", "Ballas", "Vagos", "Madrazo Cartel", "FIB", "IAA", "Merryweather", "organizações de jogadores"],
    importantEvents: ["reconquista de Grove Street", "assaltos de GTA V", "The Contract", "Doomsday Heist", "Diamond Casino"],
    characters: ["CJ", "Franklin", "Michael", "Trevor", "Lamar", "Lester"],
    visualStyle: "Sol duro, outdoors, freeways, palmeiras, mansões, estúdios, grafite e sirenes.",
    themes: ["celebridade", "mídia", "gangues", "riqueza", "desigualdade"]
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
    themes: ["contracultura", "tecnologia", "garagens", "crime asiático"]
  },
  {
    id: "las-venturas",
    name: "Las Venturas",
    realWorldInspiration: "Las Vegas",
    universeAppearances: ["3D Universe"],
    games: ["GTA: San Andreas"],
    description:
      "Cassinos, deserto e máfia. Las Venturas mostra a versão corporativa e espetacular do crime.",
    districts: ["The Strip", "Old Venturas Strip", "Caligula's Palace", "Four Dragons Casino", "Redsands", "Prickle Pine"],
    factions: ["Leone Family", "Sindacco Family", "Forelli Family", "Triads"],
    importantEvents: ["assalto ao Caligula's", "guerra de cassinos", "arco de Ken Rosenberg"],
    characters: ["CJ", "Woozie", "Ken Rosenberg", "Salvatore Leone", "Madd Dogg"],
    visualStyle: "Neon de cassino, placas gigantes, resorts, deserto e ruas largas.",
    themes: ["cassinos", "apostas", "máfia", "corrupção"]
  },
  {
    id: "blaine-county",
    name: "Blaine County",
    realWorldInspiration: "Interior desértico do sul da Califórnia",
    universeAppearances: ["HD Universe"],
    games: ["GTA V", "GTA Online"],
    description:
      "Zona rural e desértica que contrasta com Los Santos: trailers, tráfico, armas, seitas, conspirações e abandono econômico.",
    districts: ["Sandy Shores", "Grapeseed", "Paleto Bay", "Mount Chiliad", "Alamo Sea", "Fort Zancudo"],
    factions: ["Trevor Philips Enterprises", "The Lost MC", "Altruist Cult", "Merryweather", "IAA/FIB operations"],
    importantEvents: ["ascensão de Trevor", "guerra contra Lost MC", "assaltos e operações de Online"],
    characters: ["Trevor", "Ron", "Wade", "Johnny Klebitz"],
    visualStyle: "Poeira, postos de gasolina, hangares, trailers, montanhas, lago salgado e sirenes distantes.",
    themes: ["tráfico", "milícias", "pobreza", "contrabando", "caos rural"]
  },
  {
    id: "north-yankton",
    name: "North Yankton",
    realWorldInspiration: "Estados frios do norte dos EUA",
    universeAppearances: ["HD Universe"],
    games: ["GTA V"],
    description:
      "Local do prólogo de GTA V. Pequena, fria e lembrada como cena do crime original entre Michael, Trevor, Brad e Dave.",
    districts: ["Ludendorff", "cemitério", "banco local"],
    factions: ["equipe de Michael", "FIB por meio de Dave Norton", "polícia local"],
    importantEvents: ["assalto de 2004", "morte/sepultamento de Brad", "retorno de Michael e Trevor"],
    characters: ["Michael", "Trevor", "Brad", "Dave Norton"],
    visualStyle: "Neve, bancos pequenos, estradas vazias, silêncio e trauma congelado.",
    themes: ["passado", "traição", "identidade falsa"]
  },
  {
    id: "anywhere-city",
    name: "Anywhere City",
    realWorldInspiration: "Cidade retrofuturista composta, sem equivalente único",
    universeAppearances: ["2D Universe"],
    games: ["GTA 2"],
    description:
      "Ambiente distópico e estilizado de GTA 2, com zonas controladas por gangues de identidades exageradas.",
    districts: ["Downtown District", "Residential District", "Industrial District"],
    factions: ["Zaibatsu", "Loonies", "Yakuza", "Scientists", "Rednecks", "Russian Mafia", "Krishna"],
    importantEvents: ["guerras de reputação de Claude Speed"],
    characters: ["Claude Speed"],
    visualStyle: "Retrofuturo, luzes frias, zonas industriais, humor absurdo e violência arcade.",
    themes: ["distopia", "gangues", "corporações", "experimento"]
  },
  {
    id: "london",
    name: "London",
    realWorldInspiration: "Londres",
    universeAppearances: ["2D Universe"],
    games: ["GTA: London 1969", "GTA: London 1961"],
    description:
      "A rara cidade real da série, usada em expansões de época antes da franquia se fixar em análogos satíricos dos EUA.",
    districts: ["zonas estilizadas de Londres"],
    factions: ["gangues britânicas", "polícia"],
    importantEvents: ["incursão internacional da era 2D"],
    characters: ["avatares selecionáveis"],
    visualStyle: "Carros britânicos, humor londrino, anos 60 e sinalização de época.",
    themes: ["crime britânico", "anos 60", "curiosidade histórica"]
  },
  {
    id: "leonida",
    name: "Leonida",
    realWorldInspiration: "Florida",
    universeAppearances: ["HD Universe"],
    games: ["GTA VI"],
    description:
      "Estado de GTA VI, incluindo Vice City moderna. O material oficial enfatiza sol, crime, conspiração estadual e dependência entre Lucia e Jason.",
    districts: ["Vice City", "Leonida Keys", "áreas de pântano", "praias", "estradas estaduais", "locais ainda não confirmados"],
    factions: ["não confirmado", "polícia local", "redes criminosas modernas"],
    importantEvents: ["trama de Lucia e Jason em 2026"],
    characters: ["Lucia Caminos", "Jason Duval", "Cal Hampton", "Boobie Ike", "Dre'Quan Priest"],
    visualStyle: "Miami moderna, redes sociais, praias, pântanos, letreiros, rodovias e neon atualizado.",
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
    allies: ["Luigi Goterelli", "alguns políticos locais"],
    enemies: ["Forelli Family", "Sindacco Family", "Yakuza", "Claude"],
    businesses: ["extorsão", "jogos ilegais", "proteção", "cassinos", "contratos"],
    narrativeImportance: "Eixo da máfia da era 3D, conectando GTA III, LCS e San Andreas.",
    status: "Enfraquecida após a morte de Salvatore; destino posterior não confirmado.",
    tags: ["máfia", "3D Universe", "Liberty City"]
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
    businesses: ["tráfico", "extorsão", "investimentos criminosos"],
    narrativeImportance: "Gatilho da trama de Vice City e rival histórica dos Leone.",
    status: "Muito abalada após a morte de Sonny.",
    tags: ["máfia", "Vice City", "3D Universe"]
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
    businesses: ["cassinos", "tráfico", "máfia de cassino"],
    narrativeImportance: "Liga Las Venturas a Liberty City e mostra disputas entre famílias italianas.",
    status: "Enfraquecida após guerras da era 3D.",
    tags: ["máfia", "cassino"]
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
    businesses: ["tráfico", "contratos", "proteção", "contrabando"],
    narrativeImportance: "Facção que vira a guerra de GTA III contra Salvatore e Catalina.",
    status: "Liderança destruída em GTA III.",
    tags: ["Yakuza", "máfia", "3D Universe"]
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
    businesses: ["cocaína", "distribuição", "armas"],
    narrativeImportance: "Força por trás de Catalina e da crise das drogas em partes da era 3D.",
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
    businesses: ["contrabando", "cassinos", "tráfico", "proteção"],
    narrativeImportance: "Uma das redes mais recorrentes, indo de Chinatown Wars a San Andreas.",
    status: "Ativa em múltiplas continuidades.",
    tags: ["Triads", "máfia", "crime organizado"]
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
    businesses: ["território", "proteção", "reputação de rua"],
    narrativeImportance: "Centro emocional de San Andreas.",
    status: "Reconquistada no final de San Andreas; situação na era HD e outra continuidade.",
    tags: ["gangue", "família", "Los Santos"]
  },
  {
    id: "ballas",
    name: "Ballas",
    category: "Gangue",
    game: "San Andreas, GTA V",
    city: "Los Santos",
    leaders: ["líderes locais", "Big Smoke e Ryder como associados na era 3D"],
    allies: ["C.R.A.S.H. indiretamente", "traficantes"],
    enemies: ["Grove Street Families", "Families"],
    businesses: ["drogas", "território", "armas"],
    narrativeImportance: "Rival histórica da Grove/Families.",
    status: "Ativa em ambas as continuidades.",
    tags: ["gangue", "Los Santos"]
  },
  {
    id: "vagos",
    name: "Los Santos Vagos",
    category: "Gangue",
    game: "San Andreas, GTA V, GTA Online",
    city: "Los Santos",
    leaders: ["líderes locais"],
    allies: ["cartéis e redes de tráfico variam por jogo"],
    enemies: ["Grove Street Families", "Aztecas", "Families"],
    businesses: ["drogas", "território", "contrabando"],
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
    businesses: ["território", "carros", "rua"],
    narrativeImportance: "Aliança de Cesar que ajuda CJ a descobrir a traição.",
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
    businesses: ["tráfico", "controle local"],
    narrativeImportance: "Liga San Fierro ao cartel de drogas que abastece Los Santos.",
    status: "Enfraquecida após queda do Loco Syndicate.",
    tags: ["gangue", "San Fierro"]
  },
  {
    id: "da-nang-boys",
    name: "Da Nang Boys",
    category: "Gangue",
    game: "San Andreas",
    city: "San Fierro",
    leaders: ["The Snakehead"],
    allies: ["rede própria"],
    enemies: ["Triads", "Woozie", "CJ"],
    businesses: ["contrabando humano", "drogas", "docas"],
    narrativeImportance: "Antagonistas do arco Triad em San Fierro.",
    status: "Liderança derrotada.",
    tags: ["gangue", "crime organizado"]
  },
  {
    id: "lost-mc",
    name: "The Lost MC",
    category: "Motoclube",
    game: "The Lost and Damned, GTA V, GTA Online",
    city: "Liberty City / Blaine County / Los Santos",
    leaders: ["Billy Grey", "Johnny Klebitz", "líderes locais"],
    allies: ["Ashley Butler por associação", "negócios de drogas"],
    enemies: ["Angels of Death", "Trevor Philips", "jogador Online"],
    businesses: ["metanfetamina", "armas", "roubo", "motoclube"],
    narrativeImportance: "Mostra lealdade e autodestruição em IV; vira alvo recorrente em V/Online.",
    status: "Fragmentado, mas persistente.",
    tags: ["motoclube", "online", "gangue"]
  },
  {
    id: "angels-of-death",
    name: "Angels of Death",
    category: "Motoclube",
    game: "The Lost and Damned",
    city: "Liberty City",
    leaders: ["líderes locais"],
    allies: ["rivais ocasionais dos Lost"],
    enemies: ["The Lost MC"],
    businesses: ["motoclube", "drogas", "violência de rua"],
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
    businesses: ["armas", "tráfico humano", "drogas", "extorsão"],
    narrativeImportance: "Núcleo da queda moral de Niko em Liberty.",
    status: "Lideranças principais mortas.",
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
    enemies: ["Niko Bellic", "Russian Mafia", "famílias maiores"],
    businesses: ["drogas", "contratos", "máfia italiana"],
    narrativeImportance: "Mostra uma família italiana decadente tentando reconhecimento.",
    status: "Colapsada após morte de Pegorino.",
    tags: ["máfia", "HD Universe"]
  },
  {
    id: "mcreary-family",
    name: "McReary Family",
    category: "Família criminosa",
    game: "GTA IV, GTA V, Online",
    city: "Liberty City",
    leaders: ["Gerry McReary", "Packie McReary em operações"],
    allies: ["Niko Bellic"],
    enemies: ["máfias rivais", "polícia"],
    businesses: ["assaltos", "armas", "contratos"],
    narrativeImportance: "Família irlandesa que dá a GTA IV seus assaltos mais memoráveis.",
    status: "Fragmentada; Packie sobrevive em jogos posteriores.",
    tags: ["família criminosa", "assalto"]
  },
  {
    id: "five-families",
    name: "Ancelotti / Gambetti / Pavano / Messina crime families",
    category: "Máfia",
    game: "GTA IV, Episodes from Liberty City",
    city: "Liberty City",
    leaders: ["Jon Gravelli", "Giovanni Ancelotti", "líderes de famílias"],
    allies: ["acordos temporários"],
    enemies: ["Pegorino Family", "gangues rivais"],
    businesses: ["máfia italiana", "política", "contratos", "drogas"],
    narrativeImportance: "Contexto da Comissão mafiosa da era HD em Liberty.",
    status: "Ativas, com poder variável.",
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
    businesses: ["tráfico", "lavagem", "contratos"],
    narrativeImportance: "Liga Los Santos a cartéis contemporâneos e a Cayo Perico.",
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
    enemies: ["protagonistas", "jogador Online", "IAA em algumas operações"],
    businesses: ["segurança privada", "mercenários", "armas", "operações militares"],
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
    businesses: ["investigação", "chantagem", "operações encobertas"],
    narrativeImportance: "Paródia do FBI e um dos grandes motores de corrupção institucional.",
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
    allies: ["jogador Online em operações específicas"],
    enemies: ["FIB", "Merryweather", "terroristas e rivais"],
    businesses: ["inteligência", "operações clandestinas"],
    narrativeImportance: "Paródia da CIA e rivalidade burocrática do FIB.",
    status: "Ativa.",
    tags: ["governo", "inteligência"]
  },
  {
    id: "noose",
    name: "NOOSE",
    category: "Governo/Polícia",
    game: "GTA IV, GTA V, GTA Online",
    city: "Nacional",
    leaders: ["comandos táticos"],
    allies: ["LSPD", "LCPD", "FIB"],
    enemies: ["jogadores/protagonistas em wanted level alto"],
    businesses: ["resposta tática", "segurança nacional"],
    narrativeImportance: "Escalada policial de alto nível na era HD.",
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
    businesses: ["policiamento", "perseguições", "corrupção em casos específicos"],
    narrativeImportance: "A presença constante de repressão e sátira policial em Los Santos.",
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
    enemies: ["máfias", "gangues", "protagonistas"],
    businesses: ["policiamento", "investigação", "perseguições"],
    narrativeImportance: "Instituição policial que molda o ritmo criminal de Liberty.",
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
    allies: ["Big Smoke", "Ballas por conveniência"],
    enemies: ["CJ", "Grove Street", "Jimmy Hernandez quando vira risco"],
    businesses: ["extorsão", "corrupção", "manipulação de gangues"],
    narrativeImportance: "O rosto mais direto da corrupção policial na era 3D.",
    status: "Destruída após queda de Tenpenny.",
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
    businesses: ["culto", "doações", "lavagem satírica de crença"],
    narrativeImportance: "Uma das sátiras religiosas/corporativas mais persistentes da Rockstar.",
    status: "Ativo.",
    tags: ["culto", "easter egg", "sátira"]
  },
  {
    id: "zaibatsu",
    name: "Zaibatsu Corporation",
    category: "Corporação criminosa",
    game: "GTA 2",
    city: "Anywhere City",
    leaders: ["chefes corporativos"],
    allies: ["contratos temporários"],
    enemies: ["Loonies", "Yakuza", "Rednecks e rivais"],
    businesses: ["farmacêutica", "armas", "controle corporativo"],
    narrativeImportance: "Principal símbolo de corporação criminosa em GTA 2.",
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
    allies: ["temporários"],
    enemies: ["Zaibatsu", "gangues rivais"],
    businesses: ["caos", "contratos", "violência absurda"],
    narrativeImportance: "Facção de tom anárquico e caricatural de GTA 2.",
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
    allies: ["temporários"],
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
    allies: ["temporários"],
    enemies: ["Russian Mafia", "rivais"],
    businesses: ["culto", "rua", "contratos"],
    narrativeImportance: "Facção satírica de GTA 2.",
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
    allies: ["temporários"],
    enemies: ["Scientists", "Zaibatsu"],
    businesses: ["veículos", "violência rural", "contrabando"],
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
    enemies: ["jogadores rivais", "Merryweather", "polícia", "cartéis"],
    businesses: ["assaltos", "carga", "motoclubes", "armas", "nightclubs", "cassino", "agência", "lavagem"],
    narrativeImportance: "Transforma o jogador em instituidor de seu próprio império criminal.",
    status: "Persistente e em expansão.",
    tags: ["online", "CEO", "MC", "negócios"]
  }
];

const developmentData = [
  {
    id: "dev-gta1",
    title: "GTA 1",
    period: "DMA Design / 1997",
    summary:
      "Nasce da mudança de foco de Race'n'Chase para crime urbano livre. Top-down, rádios, polícia e caos viram a base da franquia.",
    facts: ["Criado na DMA Design.", "Associado a David Jones e Mike Dailly.", "A liberdade sistêmica foi mais importante que uma trama fechada."],
    uncertainty: [
      "Race'n'Chase era um projeto da DMA Design com foco original em corridas, perseguições policiais e multiplayer; o DNA de GTA surge quando a equipe percebe que liberdade, colisão e caos urbano eram mais fortes que uma corrida linear.",
      "Documentos e relatos citam janelas internas de 1995-1996 e plataformas planejadas que mudaram bastante; trate essas datas como fase de protótipo, não como lançamento público.",
      "David Jones e Mike Dailly são centrais na origem, mas o primeiro GTA nasce como produção coletiva da DMA Design. A fórmula de 'dois criadores' simplifica uma equipe maior.",
      "Liberty City, Vice City e San Andreas já aparecem em 1997, mas ainda sem a geografia, continuidade e densidade narrativa que ganhariam nas eras 3D e HD."
    ],
    sources: [
      { label: "Grand Theft Wiki - Race'n'Chase", url: "https://www.grandtheftwiki.com/Race%27n%27Chase" },
      { label: "GTA Wiki - Race'n'Chase Engine", url: "https://gta.fandom.com/wiki/Race%27n%27Chase_Game_Engine" }
    ]
  },
  {
    id: "dev-gta3",
    title: "GTA III",
    period: "Virada 3D / 2001",
    summary:
      "Transforma GTA em cidade 3D jogável em terceira pessoa, com missões dubladas, rádio e sistemas urbanos sobrepostos.",
    facts: ["Liberty City vira espaço tridimensional.", "Modelo influencia a indústria inteira.", "A identidade moderna da franquia se consolida."],
    uncertainty: [
      "GTA III é o primeiro GTA principal em 3D e a primeira Liberty City plenamente navegável em terceira pessoa; a base técnica usa RenderWare.",
      "Não inventou o mundo aberto. O marco foi combinar cidade 3D, veículos, tiro, rádio, dublagem, nível de procurado e missões cinematográficas em um sandbox urbano coeso.",
      "Fontes históricas registram um núcleo de desenvolvimento pequeno para padrões atuais, com a DMA Design em Edimburgo trabalhando de perto com a Rockstar em Nova York.",
      "Após os ataques de 11 de setembro de 2001, Rockstar adiou o lançamento e revisou referências sensíveis, incluindo viaturas, rota de aviação, diálogos/rádio e capa norte-americana.",
      "Darkel foi cortado antes do lançamento; ligações diretas com 11/9 aparecem em especulação de fãs e devem ser marcadas como não confirmadas."
    ],
    sources: [
      { label: "GTA III - desenvolvimento", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_III" },
      { label: "GTA Wiki - GTA III", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_III" }
    ]
  },
  {
    id: "dev-vice",
    title: "Vice City",
    period: "Atmosfera / 2002",
    summary:
      "Desenvolvimento rápido após GTA III. A ideia cresceu de expansão/mission pack para jogo completo com protagonista falante e identidade de anos 80.",
    facts: ["Inspiração forte em cinema criminal dos anos 80.", "Trilha sonora licenciada virou parte da experiência.", "Tommy Vercetti cria um centro narrativo mais definido."],
    uncertainty: [
      "Relatos de desenvolvimento indicam que a equipe discutiu um mission pack para GTA III antes do escopo crescer para um jogo completo.",
      "O ciclo foi curto: produção plena no início de 2002 e lançamento no fim do mesmo ano. Por isso Vice City reaproveita a base técnica de GTA III enquanto muda tom, cidade e protagonista.",
      "A escolha de 1986 e de uma Miami ficcional permitiu satirizar uma época histórica, em contraste com a Liberty City contemporânea de GTA III.",
      "Tommy Vercetti, com voz e personalidade explícita, muda o centro narrativo depois do silêncio de Claude.",
      "Scarface, Miami Vice e o cinema policial dos anos 80 são inspirações culturais amplas; não equivalem à adaptação direta cena a cena."
    ],
    sources: [
      { label: "Vice City - desenvolvimento", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City" },
      { label: "GTA Wiki - Vice City", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto:_Vice_City" }
    ]
  },
  {
    id: "dev-sa",
    title: "San Andreas",
    period: "Escala máxima da era 3D / 2004",
    summary:
      "Expande a fórmula com três cidades, campo, deserto, customização, habilidades, território, academias e aviação.",
    facts: ["Mapa muito maior que entradas anteriores.", "RPG leve e customização corporal.", "Temas de gangues, família e corrupção policial."],
    uncertainty: [
      "San Andreas muda de sentido dentro da série: na era 2D era uma cidade inspirada em San Francisco; em 2004 vira um estado com Los Santos, San Fierro, Las Venturas, interior e deserto.",
      "Sistemas de corpo, habilidade, respeito, territórios e customização aproximam o jogo de um RPG leve, mas a estrutura central continua sendo ação-aventura em mundo aberto.",
      "Gangues, rap, distúrbios urbanos, corrupção policial e crise social ecoam a Costa Oeste dos anos 1990; personagens e eventos seguem ficcionalizados.",
      "Hot Coffee é fato documentado: conteúdo inacessível no disco foi reativado por mod, levou à reclassificação AO pela ESRB e a patch/reedição posterior.",
      "A controvérsia pertence ao desenvolvimento, distribuição e classificação real do jogo; não faz parte da cronologia da história de CJ."
    ],
    sources: [
      { label: "ESRB - Hot Coffee", url: "https://www.esrb.org/blog/esrb-concludes-investigation-into-grand-theft-auto-san-andreas-revokes-m-mature-rating/" },
      { label: "FTC - acordo Take-Two/Rockstar", url: "https://www.ftc.gov/news-events/news/press-releases/2006/06/makers-grand-theft-auto-san-andreas-settle-ftc-charges" },
      { label: "GTA Wiki - San Andreas", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto:_San_Andreas" }
    ]
  },
  {
    id: "dev-gta4",
    title: "GTA IV",
    period: "Era HD / 2008",
    summary:
      "Entrada na era RAGE/HD, com Liberty City mais realista, física Euphoria e narrativa mais sombria.",
    facts: ["Reboot de continuidade.", "Tom dramático e noir.", "Foco em imigração, trauma e capitalismo."],
    uncertainty: [
      "GTA IV inaugura o HD Universe: marcas e ecos retornam, mas a continuidade principal não é a mesma da era 3D.",
      "A troca para RAGE com Euphoria/NaturalMotion altera física, animação procedural, reações corporais e densidade urbana em relação aos GTA de RenderWare.",
      "O desenvolvimento passa a operar em escala global, com Rockstar North como núcleo e outros estúdios Rockstar contribuindo em áreas técnicas, arte, áudio e QA.",
      "Niko é apresentado como veterano dos Bálcãs/Leste Europeu; a nacionalidade exata fica ambígua no jogo. 'Sérvio' é leitura comum de fãs, não confirmação textual absoluta.",
      "The Lost and Damned e The Ballad of Gay Tony cruzam eventos, personagens e a trama dos diamantes; a melhor leitura é de arcos paralelos na mesma Liberty City de 2008."
    ],
    sources: [
      { label: "GTA Wiki - GTA IV features", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_IV/Features" },
      { label: "GTA IV - desenvolvimento", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_IV" }
    ]
  },
  {
    id: "dev-gtav",
    title: "GTA V",
    period: "Fenômeno global / 2013",
    summary:
      "Três protagonistas jogáveis, assaltos planejados e Los Santos/Blaine County em escala massiva. GTA Online nasce do mesmo ecossistema.",
    facts: ["Michael, Franklin e Trevor alternam perspectiva.", "Assaltos estruturam a campanha.", "GTA Online transformou o ciclo de vida do jogo."],
    uncertainty: [
      "A estrutura de três protagonistas foi objetivo de design arriscado; fontes indicam que ideias parecidas existiam antes, mas o hardware da era San Andreas não sustentava esse modelo.",
      "O foco em assaltos foi reforçado pela recepção positiva de Three Leaf Clover em GTA IV e pela vontade de fazer planejamento criminal virar eixo de campanha.",
      "A produção envolveu cerca de mil pessoas no ecossistema Rockstar, mas orçamento, marketing e receita aparecem em fontes públicas como estimativas ou recortes financeiros.",
      "GTA Online lançou duas semanas depois de GTA V e virou plataforma persistente; sua cronologia conversa com a campanha, mas atualizações posteriores funcionam como continuidade viva e elástica.",
      "A Opção C/Deathwish é geralmente tratada como final canônico por GTA Online e referências posteriores, mas o single-player ainda preserva finais alternativos como escolhas do jogador."
    ],
    sources: [
      { label: "GTA V - desenvolvimento", url: "https://en.wikipedia.org/wiki/Development_of_Grand_Theft_Auto_V" },
      { label: "GTA Wiki - GTA V development", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_V/Development" },
      { label: "GTA Online - GTA Wiki", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_Online" }
    ]
  },
  {
    id: "dev-gtavi",
    title: "GTA VI",
    period: "Próximo capítulo / 2026",
    summary:
      "A Rockstar apresenta Leonida e Vice City moderna, com Lucia e Jason como dupla central. Data oficial atual: 19 de novembro de 2026.",
    facts: ["Ambientado no estado de Leonida.", "Vice City retorna.", "Lucia e Jason são protagonistas.", "PS5 e Xbox Series X|S confirmados."],
    uncertainty: [
      "Confirmado oficialmente: data atual de 19 de novembro de 2026, plataformas PS5 e Xbox Series X|S, estado de Leonida, Vice City, Lucia Caminos e Jason Duval.",
      "A página oficial descreve Jason com passado no Exército e trabalho com traficantes locais nas Keys; Lucia saiu da Penitenciária de Leonida depois de lutar pela família.",
      "A sinopse oficial fala em um serviço simples que dá errado e empurra a dupla para uma conspiração criminal em Leonida.",
      "Antagonistas centrais, estrutura de missões, mapa completo, versão de PC, expansões e futuro de GTA Online seguem não confirmados.",
      "Trailers e página oficial indicam redes sociais, cultura viral, praias, pântanos, vida noturna e crime moderno; leituras de casal criminoso tipo Bonnie and Clyde e sátira da Florida ainda são interpretações até o lançamento."
    ],
    sources: [
      { label: "Rockstar - GTA VI", url: "https://www.rockstargames.com/VI" },
      { label: "Newswire - nova data", url: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026" }
    ]
  }
];

const onlineTimelineData = [
  { year: "2013", title: "Lançamento", theme: "corridas, deathmatches, apartamentos, contatos e primeiros trabalhos" },
  { year: "2015", title: "Heists", theme: "assaltos cooperativos estruturados, com planejamento e finais de alta recompensa" },
  { year: "2016", title: "Executives, Further Adventures e Bikers", theme: "CEOs, armazéns, contrabando e motoclubes" },
  { year: "2017", title: "Gunrunning e Doomsday Heist", theme: "bunkers, pesquisa de armas e guerra tecnológica com agências" },
  { year: "2018", title: "After Hours", theme: "nightclubs, Tony Prince e renda passiva conectada a negócios" },
  { year: "2019", title: "Diamond Casino & Resort / Casino Heist", theme: "luxo, Duggans, cassino e um dos assaltos centrais" },
  { year: "2020", title: "The Cayo Perico Heist", theme: "ilha privada de El Rubio e assalto jogável solo ou em equipe" },
  { year: "2021", title: "The Contract", theme: "Franklin adulto, Agency, Dr. Dre e contratos VIP" },
  { year: "2022-2023", title: "Los Santos Drug Wars", theme: "Dax, Fooliganz, laboratórios e ácido" },
  { year: "2023", title: "San Andreas Mercenaries", theme: "operações aéreas contra Merryweather e carreira militar privada" },
  { year: "2025", title: "Money Fronts", theme: "lavagem de dinheiro por negócios de fachada, incluindo car wash e outras frentes" },
  { year: "2025", title: "A Safehouse in the Hills", theme: "safehouse high-end, contratos e novas rotas de carreira criminal nas colinas" },
  { year: "contínuo", title: "Carreira e economia", theme: "balanços, GTA+, veículos, criador de missões, eventos e rotação semanal" }
];

const onlineDlcData = [
  {
    id: "beach-bum",
    title: "Beach Bum Update",
    releaseDate: "19 de novembro de 2013",
    year: "2013",
    type: "Conteúdo gratuito",
    era: "Base inicial",
    summary: "Primeiro pacote grande de GTA Online, voltado para praia, lazer e atividades leves em Los Santos.",
    brought: ["novos veículos de praia", "armas SNS Pistol e Broken Bottle", "roupas e tatuagens praianas", "novos jobs de corrida, deathmatch e parachuting"],
    systems: ["expansão do catálogo inicial"],
    vehicles: ["BF Bifta", "Canis Kalahari", "Bravado Paradise", "Speeder"],
    modes: ["jobs de praia", "corridas", "deathmatches"],
    characters: ["jogador online"],
    impact: "Mostrou o modelo de GTA Online como plataforma expansível por updates gratuitos.",
    tags: ["2013", "veículos", "armas", "início"],
    sourcePage: "Beach Bum Update"
  },
  {
    id: "deathmatch-race-creators",
    title: "Deathmatch & Race Creators Update",
    releaseDate: "11 de dezembro de 2013",
    year: "2013",
    type: "Ferramentas de criação",
    era: "Base inicial",
    summary: "Liberou criadores para jogadores publicarem corridas e deathmatches próprios.",
    brought: ["criador de corridas", "criador de deathmatches", "conteúdo verificado pela Rockstar", "base para comunidade produzir jobs"],
    systems: ["Content Creator"],
    vehicles: [],
    modes: ["races", "deathmatches", "jobs criados pela comunidade"],
    characters: ["criadores da comunidade"],
    impact: "Foi o primeiro passo para transformar a comunidade em fonte constante de atividades.",
    tags: ["criador", "corridas", "deathmatch"],
    sourcePage: "Deathmatch & Race Creators Update"
  },
  {
    id: "capture",
    title: "Capture Update",
    releaseDate: "18 de dezembro de 2013",
    year: "2013",
    type: "Modo competitivo",
    era: "Base inicial",
    summary: "Adicionou Capture, variação de capture-the-flag adaptada ao caos de GTA Online.",
    brought: ["modo Capture", "variantes Contend, GTA, Hold e Raid", "novos jobs competitivos", "foco em equipes e objetivos"],
    systems: ["Capture Jobs"],
    vehicles: [],
    modes: ["Capture"],
    characters: ["jogador online"],
    impact: "Ampliou o lado competitivo antes dos grandes negócios e heists.",
    tags: ["modo", "pvp", "equipes"],
    sourcePage: "Capture Update"
  },
  {
    id: "holiday-gifts",
    title: "Holiday Gifts",
    releaseDate: "24 de dezembro de 2013",
    year: "2013",
    type: "Evento sazonal",
    era: "Base inicial",
    summary: "Primeiro evento natalino, com neve temporária, roupas festivas e itens sazonais.",
    brought: ["neve em Los Santos", "roupas natalinas", "máscaras e itens festivos", "recompensas de fim de ano"],
    systems: ["eventos sazonais"],
    vehicles: [],
    modes: ["atividades livres com tema natalino"],
    characters: ["jogador online"],
    impact: "Estabeleceu a tradição de eventos temporários e clima sazonal.",
    tags: ["evento", "natal", "sazonal"],
    sourcePage: "Holiday Gifts"
  },
  {
    id: "valentines-day-massacre",
    title: "The Valentine's Day Massacre Special",
    releaseDate: "13 de fevereiro de 2014",
    year: "2014",
    type: "Evento temático",
    era: "Base inicial",
    summary: "Pacote inspirado em crime dos anos 1920/1930, com carro clássico, roupas e a Gusenberg Sweeper.",
    brought: ["Albany Roosevelt", "Gusenberg Sweeper", "roupas de gangster", "jobs temáticos"],
    systems: ["conteúdo de tempo limitado no lançamento"],
    vehicles: ["Albany Roosevelt"],
    modes: ["jobs temáticos"],
    characters: ["jogador online"],
    impact: "Introduziu a ideia de updates como fantasia estética específica.",
    tags: ["evento", "armas", "veículos", "retrô"],
    sourcePage: "The Valentine's Day Massacre Special"
  },
  {
    id: "business",
    title: "The Business Update",
    releaseDate: "4 de março de 2014",
    year: "2014",
    type: "Conteúdo de luxo",
    era: "Base inicial",
    summary: "Adicionou visual executivo inicial: veículos esportivos, jato, arma e roupas de negócios.",
    brought: ["Dinka Jester", "Grotti Turismo R", "Albany Alpha", "Vestra", "Heavy Pistol", "Special Carbine", "roupas executivas"],
    systems: ["catálogo de luxo"],
    vehicles: ["Jester", "Turismo R", "Alpha", "Vestra"],
    modes: ["jobs adicionais"],
    characters: ["jogador online"],
    impact: "Antecipou o tema CEO que só ficaria pleno em 2015 e 2016.",
    tags: ["veículos", "armas", "luxo"],
    sourcePage: "The Business Update"
  },
  {
    id: "high-life",
    title: "The High Life Update",
    releaseDate: "13 de maio de 2014",
    year: "2014",
    type: "Apartamentos e luxo",
    era: "Base inicial",
    summary: "Focou em vida de alto padrão, apartamentos adicionais e veículos premium.",
    brought: ["apartamentos high-end adicionais", "possibilidade de possuir mais propriedades", "Dewbauchee Massacro", "Pegassi Zentorno", "Bullpup Rifle", "Mental State"],
    systems: ["multi-propriedades", "Mental State"],
    vehicles: ["Massacro", "Zentorno", "Huntley S", "Thrust"],
    modes: ["novos jobs"],
    characters: ["jogador online"],
    impact: "Começou a transformar progresso em patrimônio visível.",
    tags: ["propriedades", "veículos", "luxo"],
    sourcePage: "The High Life Update"
  },
  {
    id: "hipster",
    title: "The I'm Not a Hipster Update",
    releaseDate: "17 de junho de 2014",
    year: "2014",
    type: "Estilo urbano",
    era: "Base inicial",
    summary: "Satirizou moda alternativa de Los Santos com carros compactos, roupas e armas.",
    brought: ["veículos compactos e clássicos", "Vintage Pistol", "Antique Cavalry Dagger", "roupas hipster", "novos jobs"],
    systems: ["customização estética"],
    vehicles: ["Glendale", "Warrener", "Rhapsody", "Panto", "Pigalle", "Blade"],
    modes: ["jobs adicionais"],
    characters: ["jogador online"],
    impact: "Reforçou GTA Online como vitrine de subculturas e sátira urbana.",
    tags: ["moda", "veículos", "sátira"],
    sourcePage: "The \"I'm Not a Hipster\" Update"
  },
  {
    id: "independence-day",
    title: "The Independence Day Special",
    releaseDate: "1 de julho de 2014",
    year: "2014",
    type: "Evento sazonal",
    era: "Base inicial",
    summary: "Pacote patriótico dos EUA com monster truck, moto, armas e fogos.",
    brought: ["Vapid Liberator", "Western Sovereign", "Musket", "Firework Launcher", "roupas patrióticas", "propriedades decoradas"],
    systems: ["conteúdo sazonal de 4 de julho"],
    vehicles: ["Liberator", "Sovereign"],
    modes: ["jobs temáticos"],
    characters: ["jogador online"],
    impact: "Virou modelo para eventos patrióticos e retornos temporários anuais.",
    tags: ["evento", "armas", "veículos"],
    sourcePage: "The Independence Day Special"
  },
  {
    id: "flight-school",
    title: "The San Andreas Flight School Update",
    releaseDate: "19 de agosto de 2014",
    year: "2014",
    type: "Aviação",
    era: "Base inicial",
    summary: "Expandiu atividades aéreas com escola de voo, aeronaves e paraquedas.",
    brought: ["San Andreas Flight School", "Besra", "Miljet", "Swift", "paraquedas e roupas de piloto", "novos jobs aéreos"],
    systems: ["escola de voo", "desafios aéreos"],
    vehicles: ["Besra", "Miljet", "Swift"],
    modes: ["corridas aéreas", "desafios de voo"],
    characters: ["jogador online"],
    impact: "Deu peso ao espaço aéreo antes de Smuggler's Run.",
    tags: ["aeronaves", "escola", "jobs"],
    sourcePage: "The San Andreas Flight School Update"
  },
  {
    id: "last-team-standing",
    title: "The Last Team Standing Update",
    releaseDate: "2 de outubro de 2014",
    year: "2014",
    type: "Modo competitivo",
    era: "Base inicial",
    summary: "Refinou combates por equipes com novas armas, veículos e jobs LTS.",
    brought: ["novos Last Team Standing Jobs", "Heavy Shotgun", "Marksman Rifle", "Lampadati Furore GT", "roupas táticas"],
    systems: ["Last Team Standing"],
    vehicles: ["Furore GT"],
    modes: ["Last Team Standing"],
    characters: ["jogador online"],
    impact: "Fortaleceu PvP organizado antes da era de negócios.",
    tags: ["pvp", "armas", "equipes"],
    sourcePage: "The Last Team Standing Update"
  },
  {
    id: "festive-surprise-2014",
    title: "Festive Surprise",
    releaseDate: "18 de dezembro de 2014",
    year: "2014",
    type: "Evento sazonal",
    era: "Base inicial",
    summary: "Evento natalino maior, com neve, roupas, armas festivas e veículos.",
    brought: ["neve temporária", "Homing Launcher", "Proximity Mines", "Vapid Slamvan", "Bravado Rat-Truck", "roupas e máscaras natalinas"],
    systems: ["evento de fim de ano"],
    vehicles: ["Slamvan", "Rat-Truck"],
    modes: ["jobs sazonais"],
    characters: ["jogador online"],
    impact: "Consolidou o ciclo anual de eventos sazonais.",
    tags: ["natal", "armas", "veículos"],
    sourcePage: "Festive Surprise"
  },
  {
    id: "heists",
    title: "Heists Update",
    releaseDate: "10 de março de 2015",
    year: "2015",
    type: "Assaltos cooperativos",
    era: "Era dos heists",
    summary: "Primeiro grande salto estrutural: assaltos cooperativos com planejamento, setups, finais e funções de equipe.",
    brought: ["Fleeca Job", "Prison Break", "Humane Labs Raid", "Series A Funding", "Pacific Standard Job", "apartamento high-end como sala de planejamento", "novos veículos, roupas e equipamentos"],
    systems: ["heists cooperativos", "setups", "finales", "papel de líder do assalto"],
    vehicles: ["Kuruma", "Insurgent", "Hydra", "Savage", "Mule", "Lectro"],
    modes: ["heists", "adversary modes"],
    characters: ["Lester Crest", "Agent 14", "Trevor Philips", "Ron Jakowski", "Paige Harris"],
    impact: "Transformou GTA Online de sandbox competitivo em carreira criminal cooperativa.",
    tags: ["heist", "cooperativo", "Lester"],
    sourcePage: "Heists Update"
  },
  {
    id: "ill-gotten-gains-1",
    title: "Ill-Gotten Gains Part 1",
    releaseDate: "10 de junho de 2015",
    year: "2015",
    type: "Luxo e consumo",
    era: "Pós-heists",
    summary: "Pacote de ostentação para gastar dinheiro dos heists: supercarros, aeronaves, armas e roupas caras.",
    brought: ["veículos de luxo", "armas douradas", "roupas premium", "acessórios e itens de status"],
    systems: ["catálogo de luxo"],
    vehicles: ["Pegassi Osiris", "Benefactor Stirling GT", "Enus Windsor", "Albany Virgo", "Luxor Deluxe", "Swift Deluxe"],
    modes: ["jobs adicionais"],
    characters: ["jogador online"],
    impact: "Cristalizou a economia de status de GTA Online.",
    tags: ["luxo", "veículos", "dinheiro"],
    sourcePage: "Ill-Gotten Gains Part 1"
  },
  {
    id: "ill-gotten-gains-2",
    title: "Ill-Gotten Gains Part 2",
    releaseDate: "8 de julho de 2015",
    year: "2015",
    type: "Luxo e combate",
    era: "Pós-heists",
    summary: "Continuação do pacote de ostentação com novos veículos, armas e itens para a elite criminosa.",
    brought: ["novos veículos", "Marksman Pistol", "Knuckle Dusters", "roupas e joias", "novos jobs"],
    systems: ["catálogo de luxo"],
    vehicles: ["Coil Brawler", "Progen T20", "Vapid Chino", "Dinka Vindicator", "Invetero Coquette BlackFin"],
    modes: ["jobs adicionais"],
    characters: ["jogador online"],
    impact: "Manteve o ciclo de consumo depois dos heists.",
    tags: ["luxo", "armas", "veículos"],
    sourcePage: "Ill-Gotten Gains Part 2"
  },
  {
    id: "freemode-events",
    title: "Freemode Events Update",
    releaseDate: "15 de setembro de 2015",
    year: "2015",
    type: "Mundo aberto",
    era: "Freemode",
    summary: "Introduziu eventos dinâmicos no mapa livre, sem lobby, com competições surgindo durante a sessão.",
    brought: ["Freemode Events", "Freemode Challenges", "Hunt the Beast", "King of the Castle", "Penned In", "novos modos adversários"],
    systems: ["eventos sem lobby", "atividades de sessão"],
    vehicles: [],
    modes: ["Freemode Events", "Adversary Modes"],
    characters: ["jogador online"],
    impact: "Fez Los Santos parecer mais vivo entre missões formais.",
    tags: ["freemode", "eventos", "pvp"],
    sourcePage: "Freemode Events Update"
  },
  {
    id: "lowriders",
    title: "GTA Online: Lowriders",
    releaseDate: "20 de outubro de 2015",
    year: "2015",
    type: "Customização e missões",
    era: "Cultura automotiva",
    summary: "Abriu a Benny's Original Motor Works e aprofundou a customização de lowriders.",
    brought: ["Benny's Original Motor Works", "customizações hydraulics", "interiores e áudio", "novas missões de Lamar", "roupas e armas"],
    systems: ["Benny's", "customização avançada"],
    vehicles: ["Voodoo Custom", "Faction Custom", "Moonbeam Custom", "Primo Custom", "Chino Custom", "Buccaneer Custom"],
    modes: ["missões de Lamar"],
    characters: ["Lamar Davis", "Benny"],
    impact: "Criou um dos pilares de customização automotiva do Online.",
    tags: ["Benny's", "carros", "Lamar"],
    sourcePage: "GTA Online: Lowriders"
  },
  {
    id: "halloween-surprise",
    title: "Halloween Surprise",
    releaseDate: "29 de outubro de 2015",
    year: "2015",
    type: "Evento sazonal",
    era: "Eventos",
    summary: "Evento de Halloween com veículos fúnebres, armas e modos adversários sombrios.",
    brought: ["Albany Lurcher", "Franken Stange", "Flashlight", "máscaras de Halloween", "Slasher Adversary Mode"],
    systems: ["evento de Halloween"],
    vehicles: ["Lurcher", "Franken Stange"],
    modes: ["Slasher"],
    characters: ["jogador online"],
    impact: "Inaugurou uma das tradições sazonais mais reconhecíveis do Online.",
    tags: ["Halloween", "evento", "modo adversário"],
    sourcePage: "Halloween Surprise"
  },
  {
    id: "executives-other-criminals",
    title: "Executives and Other Criminals",
    releaseDate: "15 de dezembro de 2015",
    year: "2015",
    type: "Organizações VIP",
    era: "Negócios",
    summary: "Introduziu o estilo CEO/VIP inicial, iates e estrutura de guarda-costas.",
    brought: ["sistema VIP e bodyguards", "super yachts", "apartamentos stilt", "novos veículos armados e de luxo", "Extraction Adversary Mode"],
    systems: ["VIP Organizations", "Bodyguards", "Yachts"],
    vehicles: ["Turreted Limo", "Schafter V12", "Cognoscenti", "SuperVolito", "Tampa"],
    modes: ["VIP Work", "Extraction"],
    characters: ["jogador online"],
    impact: "Foi a semente direta dos negócios CEO que viriam em Finance and Felony.",
    tags: ["VIP", "iates", "organizações"],
    sourcePage: "GTA Online: Executives and Other Criminals"
  },
  {
    id: "festive-surprise-2015",
    title: "Festive Surprise 2015",
    releaseDate: "21 de dezembro de 2015",
    year: "2015",
    type: "Evento sazonal",
    era: "Eventos",
    summary: "Novo pacote natalino com neve, roupas, carros e retorno de itens festivos.",
    brought: ["neve", "Declasse Tampa", "roupas e máscaras de Natal", "itens sazonais", "retorno de conteúdos festivos"],
    systems: ["evento de fim de ano"],
    vehicles: ["Declasse Tampa"],
    modes: ["jobs sazonais"],
    characters: ["jogador online"],
    impact: "Reforçou a rotina anual de eventos e itens temporários.",
    tags: ["natal", "evento", "veículos"],
    sourcePage: "Festive Surprise 2015"
  },
  {
    id: "january-2016",
    title: "January 2016 Update",
    releaseDate: "28 de janeiro de 2016",
    year: "2016",
    type: "Modos e veículos",
    era: "Adversary modes",
    summary: "Update menor que trouxe novos veículos de Benny's/mercado e o modo Drop Zone.",
    brought: ["Drop Zone Adversary Mode", "Karin Sultan RS", "Bravado Banshee 900R", "novas opções de customização"],
    systems: ["Adversary Mode", "Benny's"],
    vehicles: ["Sultan RS", "Banshee 900R"],
    modes: ["Drop Zone"],
    characters: ["jogador online"],
    impact: "Manteve o ritmo de conteúdo entre grandes pacotes.",
    tags: ["Benny's", "modo adversário", "carros"],
    sourcePage: "January 2016 Update"
  },
  {
    id: "be-my-valentine",
    title: "GTA Online: Be My Valentine",
    releaseDate: "10 de fevereiro de 2016",
    year: "2016",
    type: "Evento temático",
    era: "Eventos",
    summary: "Revisitou o tema Valentine's com Roosevelt Valor, roupas e Till Death Do Us Part.",
    brought: ["Albany Roosevelt Valor", "roupas vintage", "retorno de itens do Valentine's anterior", "Till Death Do Us Part"],
    systems: ["evento temático"],
    vehicles: ["Roosevelt Valor"],
    modes: ["Till Death Do Us Part"],
    characters: ["jogador online"],
    impact: "Mostrou como updates antigos poderiam voltar em versão expandida.",
    tags: ["evento", "retrô", "modo adversário"],
    sourcePage: "GTA Online: Be My Valentine"
  },
  {
    id: "lowriders-custom-classics",
    title: "GTA Online: Lowriders: Custom Classics",
    releaseDate: "15 de março de 2016",
    year: "2016",
    type: "Customização",
    era: "Cultura automotiva",
    summary: "Expandiu Benny's com novos upgrades custom, armas e o modo Sumo.",
    brought: ["novos lowriders custom", "Double Barrel Shotgun", "Compact Rifle", "Sumo Adversary Mode", "roupas e tatuagens"],
    systems: ["Benny's", "Adversary Mode"],
    vehicles: ["Faction Custom Donk", "Slamvan Custom", "Virgo Classic Custom"],
    modes: ["Sumo"],
    characters: ["jogador online"],
    impact: "Aprofundou a subcultura lowrider dentro do Online.",
    tags: ["Benny's", "armas", "Sumo"],
    sourcePage: "GTA Online: Lowriders: Custom Classics"
  },
  {
    id: "finance-felony",
    title: "Further Adventures in Finance and Felony",
    releaseDate: "7 de junho de 2016",
    year: "2016",
    type: "Negócios CEO",
    era: "Negócios",
    summary: "Transformou VIP em CEO permanente, com escritórios, armazéns e contrabando de carga.",
    brought: ["escritórios executivos", "SecuroServ CEO", "Special Cargo", "warehouses", "novos VIP/CEO work", "veículos executivos"],
    systems: ["CEO", "Special Cargo", "warehouses", "assistente executiva"],
    vehicles: ["Pegassi Reaper", "Vapid FMJ", "Benefactor XLS", "Bravado Rumpo Custom", "Brickade"],
    modes: ["CEO Work", "Special Cargo sales"],
    characters: ["Assistente do escritório"],
    impact: "Criou o primeiro loop robusto de grind empresarial de GTA Online.",
    tags: ["CEO", "carga", "escritório", "negócios"],
    sourcePage: "GTA Online: Further Adventures in Finance and Felony"
  },
  {
    id: "cunning-stunts",
    title: "GTA Online: Cunning Stunts",
    releaseDate: "12 de julho de 2016",
    year: "2016",
    type: "Corridas stunt",
    era: "Corridas",
    summary: "Reinventou corridas com pistas irreais, tubos, rampas e objetos stunt.",
    brought: ["Stunt Races", "criador stunt depois expandido", "veículos esportivos e motos", "roupas de corrida"],
    systems: ["Stunt Races", "Stunt Props"],
    vehicles: ["RE-7B", "ETR1", "Tyrus", "Omnis", "Trophy Truck", "Cliffhanger"],
    modes: ["Stunt Races", "Premium Races"],
    characters: ["jogador online"],
    impact: "Criou uma linguagem própria para corridas arcade dentro de GTA Online.",
    tags: ["corridas", "stunt", "veículos"],
    sourcePage: "GTA Online: Cunning Stunts"
  },
  {
    id: "bikers",
    title: "GTA Online: Bikers",
    releaseDate: "4 de outubro de 2016",
    year: "2016",
    type: "Motoclubes e negócios",
    era: "Negócios",
    summary: "Adicionou clubes de moto, hierarquia MC e negócios de produção ilegal.",
    brought: ["clubhouses", "MC President", "cargos de motoclube", "negócios de cocaine, meth, weed, counterfeit cash e document forgery", "novas motos"],
    systems: ["Motorcycle Clubs", "MC Businesses", "contracts"],
    vehicles: ["Hakuchou Drag", "Nightblade", "Avarus", "Zombie", "Daemon Custom", "Faggio Mod"],
    modes: ["Clubhouse Contracts", "MC Challenges"],
    characters: ["Malc", "LJT"],
    impact: "Deu ao jogador uma identidade criminal alternativa ao CEO.",
    tags: ["MC", "negócios", "motos"],
    sourcePage: "GTA Online: Bikers"
  },
  {
    id: "import-export",
    title: "GTA Online: Import/Export",
    releaseDate: "13 de dezembro de 2016",
    year: "2016",
    type: "Roubo de veículos",
    era: "Negócios",
    summary: "Adicionou Vehicle Cargo, garagens de veículos especiais e missões com tecnologia exagerada.",
    brought: ["Vehicle Warehouses", "Vehicle Cargo", "Special Vehicle Work", "garagens de até 60 veículos", "veículos especiais armados"],
    systems: ["Vehicle Cargo", "Special Vehicle Work"],
    vehicles: ["Ruiner 2000", "Rocket Voltic", "Phantom Wedge", "Ramp Buggy", "Technical Aqua", "Wastelander"],
    modes: ["steal/sell vehicles", "Special Vehicle missions"],
    characters: ["Assistente do escritório"],
    impact: "Virou um dos loops mais populares de dinheiro solo/CEO.",
    tags: ["CEO", "carros", "veículos especiais"],
    sourcePage: "GTA Online: Import/Export"
  },
  {
    id: "special-vehicle-circuit",
    title: "Cunning Stunts: Special Vehicle Circuit",
    releaseDate: "14 de março de 2017",
    year: "2017",
    type: "Corridas especiais",
    era: "Corridas",
    summary: "Criou corridas dedicadas a veículos especiais de Import/Export.",
    brought: ["Special Vehicle Races", "pistas para Ruiner 2000, Rocket Voltic e Blazer Aqua", "novos carros esportivos"],
    systems: ["Special Vehicle Circuit"],
    vehicles: ["Progen GP1", "Hijak Ruston", "Turismo Classic", "Infernus Classic"],
    modes: ["Special Vehicle Races"],
    characters: ["jogador online"],
    impact: "Amarrou corridas stunt aos veículos especiais da economia CEO.",
    tags: ["corridas", "veículos especiais"],
    sourcePage: "GTA Online: Cunning Stunts: Special Vehicle Circuit"
  },
  {
    id: "gunrunning",
    title: "GTA Online: Gunrunning",
    releaseDate: "13 de junho de 2017",
    year: "2017",
    type: "Bunkers e armas",
    era: "Negócios militares",
    summary: "Adicionou bunkers, pesquisa, fabricação de armas e veículos militarizados.",
    brought: ["bunkers", "Mobile Operations Center", "research", "weaponized vehicles", "Mk II weapon upgrades", "Gunrunning sell missions"],
    systems: ["Bunker Business", "Research", "MOC", "Mk II Weapons"],
    vehicles: ["APC", "Dune FAV", "Half-track", "Oppressor", "Weaponized Tampa", "Anti-Aircraft Trailer"],
    modes: ["Gunrunning sales", "Mobile Operations"],
    characters: ["Agent 14"],
    impact: "Mudou o equilíbrio do Online ao colocar tecnologia militar no centro da economia.",
    tags: ["bunker", "armas", "militar", "Mk II"],
    sourcePage: "GTA Online: Gunrunning"
  },
  {
    id: "smugglers-run",
    title: "GTA Online: Smuggler's Run",
    releaseDate: "29 de agosto de 2017",
    year: "2017",
    type: "Contrabando aéreo",
    era: "Negócios militares",
    summary: "Transformou hangares em negócios de carga aérea, com aeronaves customizáveis.",
    brought: ["hangars", "Air Freight Cargo", "aeronaves novas", "customização de aeronaves", "Adversary Modes aéreos"],
    systems: ["Hangar Business", "Air Freight Cargo"],
    vehicles: ["Rogue", "Tula", "Mogul", "Molotok", "Nokota", "Hunter", "Pyro"],
    modes: ["Air Freight missions"],
    characters: ["Ron Jakowski"],
    impact: "Expandiu o mapa verticalmente e conectou Fort Zancudo ao progresso do jogador.",
    tags: ["hangar", "aeronaves", "contrabando"],
    sourcePage: "GTA Online: Smuggler's Run"
  },
  {
    id: "doomsday-heist",
    title: "GTA Online: The Doomsday Heist",
    releaseDate: "12 de dezembro de 2017",
    year: "2017",
    type: "Heist tecnológico",
    era: "Agências e tecnologia",
    summary: "Assalto em três atos com IAA, Avon Hertz, Clifford, bases subterrâneas e ameaça de fim do mundo.",
    brought: ["Facilities", "Doomsday Heist Acts I-III", "prep missions em freemode", "Orbital Cannon", "Avenger", "veículos futuristas"],
    systems: ["Facilities", "Doomsday Heist", "Orbital Cannon"],
    vehicles: ["Avenger", "Deluxo", "Stromberg", "Thruster", "Khanjali", "Chernobog"],
    modes: ["Doomsday Heist", "setups e preps"],
    characters: ["Lester Crest", "Agent 14", "Avon Hertz", "Clifford", "Bogdan", "ULP"],
    impact: "Levou GTA Online para ficção de espionagem absurda e tecnologia de alto nível.",
    tags: ["heist", "IAA", "Facility", "tecnologia"],
    sourcePage: "GTA Online: The Doomsday Heist"
  },
  {
    id: "southern-san-andreas-super-sport-series",
    title: "Southern San Andreas Super Sport Series",
    releaseDate: "20 de março de 2018",
    year: "2018",
    type: "Corridas e modos",
    era: "Corridas",
    summary: "Série de conteúdos automotivos com Hotring Circuit, Target Assault e vários veículos.",
    brought: ["Hotring Circuit", "Target Assault Races", "Transform Races adicionais", "novos carros e roupas"],
    systems: ["novas séries de corrida"],
    vehicles: ["Hotring Sabre", "GB200", "Entity XXR", "Taipan", "Flash GT", "Issi Classic"],
    modes: ["Hotring Circuit", "Target Assault"],
    characters: ["jogador online"],
    impact: "Manteve o foco de corridas entre grandes expansões de negócios.",
    tags: ["corridas", "carros", "Hotring"],
    sourcePage: "GTA Online: Southern San Andreas Super Sport Series"
  },
  {
    id: "after-hours",
    title: "GTA Online: After Hours",
    releaseDate: "24 de julho de 2018",
    year: "2018",
    type: "Nightclubs e renda passiva",
    era: "Negócios conectados",
    summary: "Trouxe Tony Prince de volta e fez nightclubs conectarem negócios anteriores em uma rede passiva.",
    brought: ["Nightclubs", "warehouse technicians", "DJs reais", "Terrorbyte", "Oppressor Mk II", "novas missões de promoção"],
    systems: ["Nightclub Business", "Technicians", "Terrorbyte Client Jobs"],
    vehicles: ["Terrorbyte", "Oppressor Mk II", "Mule Custom", "Pounder Custom", "Stafford", "Swinger"],
    modes: ["club management", "business battles", "client jobs"],
    characters: ["Tony Prince", "Lazlow Jones", "Solomun", "Dixon", "Tale of Us", "The Black Madonna"],
    impact: "Unificou negócios antigos e virou uma das bases de renda passiva mais importantes.",
    tags: ["nightclub", "Tony Prince", "renda passiva"],
    sourcePage: "GTA Online: After Hours"
  },
  {
    id: "arena-war",
    title: "GTA Online: Arena War",
    releaseDate: "11 de dezembro de 2018",
    year: "2018",
    type: "Combate veicular",
    era: "Espetáculo",
    summary: "Adicionou Arena Workshop, ranking de arena e modos de combate veicular estilo show televisivo.",
    brought: ["Arena Workshop", "Arena Points", "veículos Apocalypse, Future Shock e Nightmare", "modos Arena War"],
    systems: ["Arena Career", "Arena Workshop"],
    vehicles: ["Deathbike", "Sasquatch", "Imperator", "ZR380", "Bruiser", "Brutus"],
    modes: ["Carnage", "Flag War", "Here Come the Monsters", "Wreck It"],
    characters: ["Alan Jerome", "Bryony"],
    impact: "Foi uma ramificação mais arcade e separada da economia criminal tradicional.",
    tags: ["arena", "veículos", "combate"],
    sourcePage: "GTA Online: Arena War"
  },
  {
    id: "diamond-casino-resort",
    title: "The Diamond Casino & Resort",
    releaseDate: "23 de julho de 2019",
    year: "2019",
    type: "Cassino e propriedade",
    era: "Cassino",
    summary: "Abriu o Diamond Casino & Resort com penthouses, jogos de azar e narrativa dos Cheng contra Duggan.",
    brought: ["Diamond Casino aberto", "Master Penthouse", "casino games", "Lucky Wheel", "Casino Store", "missões de história do cassino"],
    systems: ["Casino", "Penthouses", "Membership"],
    vehicles: ["Thrax", "Paragon R", "S80RR", "Drafter", "Gauntlet Classic"],
    modes: ["Casino Story Missions", "Work Missions"],
    characters: ["Tao Cheng", "Agatha Baker", "Tom Connors", "Avery Duggan"],
    impact: "Transformou um prédio fechado desde 2013 em hub social e econômico.",
    tags: ["cassino", "penthouse", "Cheng"],
    sourcePage: "GTA Online: The Diamond Casino & Resort"
  },
  {
    id: "diamond-casino-heist",
    title: "The Diamond Casino Heist",
    releaseDate: "12 de dezembro de 2019",
    year: "2019",
    type: "Heist flexível",
    era: "Cassino",
    summary: "Adicionou o Arcade como fachada e um assalto ao cassino com abordagens variadas.",
    brought: ["Arcades", "Diamond Casino Heist", "approaches Silent & Sneaky, Big Con e Aggressive", "equipe de suporte", "novos veículos e armas"],
    systems: ["Arcade Business", "Casino Heist planning", "heist approach system"],
    vehicles: ["Retinue Mk II", "Komoda", "Everon", "Sultan Classic", "Vagrant", "Zhaba"],
    modes: ["Casino Heist", "prep missions"],
    characters: ["Lester Crest", "Georgina Cheng", "Avi Schwartzman", "Paige Harris"],
    impact: "Elevou re-jogabilidade dos heists com escolhas reais de abordagem.",
    tags: ["heist", "Arcade", "cassino"],
    sourcePage: "GTA Online: The Diamond Casino Heist"
  },
  {
    id: "los-santos-summer-special",
    title: "Los Santos Summer Special",
    releaseDate: "11 de agosto de 2020",
    year: "2020",
    type: "Qualidade de vida e atividades",
    era: "Pré-Cayo",
    summary: "Pacote intermediário com missões de iate, carros, corridas Open Wheel e melhorias gerais.",
    brought: ["Super Yacht Life", "novos veículos", "Open Wheel Races adicionais", "Business Battles expandidas", "criador melhorado"],
    systems: ["Yacht Missions", "Open Wheel"],
    vehicles: ["Coquette D10", "Tigon", "Youga Classic 4x4", "Club", "Gauntlet Classic Custom"],
    modes: ["A Superyacht Life", "Open Wheel Races"],
    characters: ["Captain Darcy"],
    impact: "Serviu como respiro antes da maior expansão de heist da era.",
    tags: ["iate", "corridas", "veículos"],
    sourcePage: "GTA Online: Los Santos Summer Special"
  },
  {
    id: "cayo-perico-heist",
    title: "The Cayo Perico Heist",
    releaseDate: "15 de dezembro de 2020",
    year: "2020",
    type: "Heist e mapa novo",
    era: "Heists modernos",
    summary: "Adicionou Cayo Perico, ilha privada de El Rubio, e o primeiro heist grande jogável solo.",
    brought: ["ilha Cayo Perico", "Kosatka submarine", "Cayo Perico Heist", "Music Locker", "novas armas, veículos e rádios"],
    systems: ["solo-friendly heist", "Kosatka", "intel gathering", "secondary targets"],
    vehicles: ["Kosatka", "Sparrow", "Toreador", "Winky", "RO-86 Alkonost", "Annihilator Stealth"],
    modes: ["Cayo Perico Heist", "Gather Intel", "Prep Missions"],
    characters: ["Miguel Madrazo", "El Rubio", "Pavel", "English Dave"],
    impact: "Mudou a economia por permitir grind solo lucrativo e levar o jogador para fora de San Andreas.",
    tags: ["heist", "solo", "Cayo Perico", "Kosatka"],
    sourcePage: "GTA Online: The Cayo Perico Heist"
  },
  {
    id: "los-santos-tuners",
    title: "Los Santos Tuners",
    releaseDate: "20 de julho de 2021",
    year: "2021",
    type: "Cultura automotiva",
    era: "Tuners",
    summary: "Criou o LS Car Meet, reputação de encontros, contratos de Auto Shop e foco em carros tuner.",
    brought: ["LS Car Meet", "Auto Shops", "Contracts", "Reputation", "Prize Ride", "Test Track", "novos carros tuner"],
    systems: ["LS Car Meet", "Auto Shop Business", "Reputation"],
    vehicles: ["Calico GTF", "Jester RR", "Remus", "ZR350", "Comet S2", "Sultan RS Classic"],
    modes: ["Street Race Series", "Pursuit Series", "Contracts"],
    characters: ["Mimi", "Sessanta", "KDJ"],
    impact: "Foi a maior expansão automotiva desde Benny's e criou comunidade social de carros.",
    tags: ["tuners", "Auto Shop", "carros"],
    sourcePage: "GTA Online: Los Santos Tuners"
  },
  {
    id: "the-contract",
    title: "The Contract",
    releaseDate: "15 de dezembro de 2021",
    year: "2021",
    type: "Agência e narrativa",
    era: "Continuidade de GTA V",
    summary: "Trouxe Franklin mais velho como empresário, Agency e contrato VIP com Dr. Dre.",
    brought: ["Agencies", "VIP Contract", "Security Contracts", "Payphone Hits", "Armory", "Imani Tech", "novas músicas e estúdios"],
    systems: ["Agency Business", "VIP Contract", "Imani Tech"],
    vehicles: ["Champion", "Buffalo STX", "Deity", "Jubilee", "Ignus", "Shinobi"],
    modes: ["Security Contracts", "Payphone Hits", "Short Trips"],
    characters: ["Franklin Clinton", "Lamar Davis", "Dr. Dre", "Imani", "Anderson .Paak"],
    impact: "Conectou explicitamente GTA Online ao futuro de Franklin após GTA V.",
    tags: ["Franklin", "Agency", "Dr. Dre", "continuidade"],
    sourcePage: "GTA Online: The Contract"
  },
  {
    id: "criminal-enterprises",
    title: "The Criminal Enterprises",
    releaseDate: "26 de julho de 2022",
    year: "2022",
    type: "Economia e qualidade de vida",
    era: "Rebalanceamento",
    summary: "Grande update de economia, novas missões da IAA e melhorias em negócios existentes.",
    brought: ["Operation Paper Trail", "expansões para CEO, MC, bunker e nightclub", "payouts melhorados", "veículos e qualidade de vida", "vendas em sessões privadas"],
    systems: ["business boosts", "Operation Paper Trail", "private session selling"],
    vehicles: ["Torero XO", "Omnis e-GT", "Corsita", "Greenwood", "SM722"],
    modes: ["IAA missions", "business source/sell updates"],
    characters: ["Agent ULP", "Mason Duggan"],
    impact: "Respondeu ao desgaste do grind e modernizou loops antigos.",
    tags: ["economia", "IAA", "qualidade de vida"],
    sourcePage: "GTA Online: The Criminal Enterprises"
  },
  {
    id: "los-santos-drug-wars",
    title: "Los Santos Drug Wars",
    releaseDate: "13 de dezembro de 2022",
    year: "2022",
    type: "Drogas e Fooliganz",
    era: "Fooliganz",
    summary: "Introduziu Dax, The Freakshop, Acid Lab e a linha narrativa First Dose/Last Dose.",
    brought: ["First Dose missions", "Last Dose missions", "The Freakshop", "Acid Lab", "Fooliganz Jobs", "novos veículos e armas"],
    systems: ["Acid Lab Business", "Fooligan Jobs"],
    vehicles: ["MTL Brickade 6x6", "Manchez Scout C", "Entity MT", "Journey II", "Toundra Panthere"],
    modes: ["First Dose", "Last Dose", "Fooligan Jobs"],
    characters: ["Dax", "Luchadora", "Labrat", "Dr. Isiah Friedlander"],
    impact: "Criou uma progressão relativamente acessível para jogadores solo.",
    tags: ["Acid Lab", "Dax", "drogas"],
    sourcePage: "GTA Online: Los Santos Drug Wars"
  },
  {
    id: "san-andreas-mercenaries",
    title: "San Andreas Mercenaries",
    releaseDate: "13 de junho de 2023",
    year: "2023",
    type: "Operações aéreas",
    era: "Mercenários",
    summary: "Colocou os Los Santos Angels contra Merryweather com missões aéreas a partir do Avenger.",
    brought: ["Project Overthrow", "LSA Operations", "Avenger Operations Terminal", "Mammoth Avenger upgrades", "novos veículos e melhorias"],
    systems: ["Avenger Operations", "LSA Operations"],
    vehicles: ["F-160 Raiju", "MonstroCiti", "Walton L35", "Ratel", "Streamer216"],
    modes: ["Project Overthrow", "LSA Operations"],
    characters: ["Charlie Reed", "Los Santos Angels"],
    impact: "Reposicionou o Avenger como base operacional e trouxe combate militar moderno.",
    tags: ["Merryweather", "Avenger", "aéreo"],
    sourcePage: "GTA Online: San Andreas Mercenaries"
  },
  {
    id: "the-chop-shop",
    title: "The Chop Shop",
    releaseDate: "12 de dezembro de 2023",
    year: "2023",
    type: "Roubo de carros",
    era: "Roubos especializados",
    summary: "Adicionou Salvage Yard, roubos de veículos de alto valor e retorno de Yusuf Amir.",
    brought: ["Salvage Yard", "Salvage Yard Robberies", "Tow Truck Service", "planejamento de roubos", "novos veículos e Drift Races"],
    systems: ["Salvage Yard Business", "Tow Truck", "Vehicle Robberies"],
    vehicles: ["Turismo Omaggio", "FR36", "Dorado", "Vivanite", "Aleutian"],
    modes: ["Salvage Yard Robberies", "Drift Races"],
    characters: ["Yusuf Amir", "Jamal Amir"],
    impact: "Trouxe uma fantasia de roubo de carros mais próxima do DNA original da série.",
    tags: ["Salvage Yard", "Yusuf", "carros"],
    sourcePage: "GTA Online: The Chop Shop"
  },
  {
    id: "bottom-dollar-bounties",
    title: "Bottom Dollar Bounties",
    releaseDate: "25 de junho de 2024",
    year: "2024",
    type: "Caçadores de recompensa",
    era: "Justiça privatizada",
    summary: "Transformou o jogador em operador da Bottom Dollar Bail Enforcement, com procurados e trabalhos policiais.",
    brought: ["Bail Office", "standard bounty targets", "Most Wanted targets", "Dispatch Work", "novos veículos de polícia e utilitários"],
    systems: ["Bail Office Business", "Bounty Targets", "Dispatch Work"],
    vehicles: ["Dominator FX", "Envisage", "Impaler SZ Cruiser", "Greenwood Cruiser", "Yosemite 1500"],
    modes: ["Bounty Targets", "Dispatch Work"],
    characters: ["Maude Eccles", "Jenette Eccles", "Vincent Effenburger"],
    impact: "Misturou fantasia policial, recompensa e economia criminal em uma atividade diária.",
    tags: ["bounties", "polícia", "Bail Office"],
    sourcePage: "GTA Online: Bottom Dollar Bounties"
  },
  {
    id: "agents-of-sabotage",
    title: "Agents of Sabotage",
    releaseDate: "10 de dezembro de 2024",
    year: "2024",
    type: "Operações clandestinas",
    era: "Sabotagem",
    summary: "Adicionou Darnell Bros Garment Factory como base e File missions com Jodi Marshall.",
    brought: ["Darnell Bros Garment Factory", "The FIB Files", "novas missões de infiltração", "Terrorbyte upgrades", "novos veículos"],
    systems: ["Garment Factory", "FIB Files", "hacking/infiltration jobs"],
    vehicles: ["Banshee GTS", "Chavos V6", "Jester RR Widebody", "Coquette D10 Pursuit"],
    modes: ["FIB Files", "Priority File"],
    characters: ["Jodi Marshall", "Pavel", "Lester Crest"],
    impact: "Recuperou o espaço da Darnell Bros, histórico de GTA V, como hub criminal moderno.",
    tags: ["FIB", "sabotagem", "Garment Factory"],
    sourcePage: "GTA Online: Agents of Sabotage"
  },
  {
    id: "oscar-guzman-flies-again",
    title: "Oscar Guzman Flies Again",
    releaseDate: "4 de março de 2025",
    year: "2025",
    type: "Missões e hangar",
    era: "Contrabando aéreo",
    summary: "Continuação de Agents of Sabotage com Oscar Guzman, McKenzie Field Hangar e uma nova linha de tráfico de armas contra Eberhard Munitions.",
    brought: ["McKenzie Field Hangar comprável", "nova série de missões com Oscar Guzman", "missões de tráfico de armas", "novas aeronaves e veículos", "progressão de carreira no Enhanced"],
    systems: ["McKenzie Field Hangar", "arms trafficking missions", "Career Progress"],
    vehicles: ["Duster 300-H", "DH-7 Iron Mule", "Titan 250 D"],
    modes: ["Oscar Guzman Flies Again missions", "arms trafficking work"],
    characters: ["Oscar Guzman", "Ron Jakowski", "Eberhard Munitions"],
    impact: "Reaproveitou o passado de Trevor Philips Enterprises e deu ao contrabando aéreo uma nova frente narrativa.",
    tags: ["Oscar Guzman", "hangar", "Blaine County", "2025"],
    sourcePage: "Oscar Guzman Flies Again",
    officialSource: "https://www.rockstargames.com/newswire/article/179kk473a8a18k/gta-online-oscar-guzman-flies-again-now-available"
  },
  {
    id: "money-fronts",
    title: "Money Fronts",
    releaseDate: "17 de junho de 2025",
    year: "2025",
    type: "Lavagem de dinheiro",
    era: "Fachadas",
    summary: "Focou em negócios de fachada para lavar dinheiro, esconder operações ilegais e transformar empresas legítimas em cobertura criminal.",
    brought: ["Hands On Car Wash como primeira fachada", "Smoke on the Water e Higgins Helitours integrados como frentes adicionais", "Mr. Faber como contato", "trabalhos legítimos para manter aparência limpa", "renda passiva conectada à lavagem", "novos veículos, melhorias e atividades de mapa"],
    systems: ["Money Laundering Fronts", "business upgrades", "front income", "trabalhos legítimos", "QuickiePharm", "Safeguard deliveries"],
    vehicles: ["Karin Everon RS", "Woodlander", "Tampa GT", "novos veículos adicionados por drip-feed"],
    modes: ["front management", "lavagem e entregas", "Cayo Perico Adversary/Survival", "Slasher em Ramius Submarine"],
    characters: ["Martin Madrazo", "Mr. Faber"],
    impact: "Deu coesão narrativa a negócios de lavagem que GTA Online sugeria havia anos e aproximou a economia do jogador de uma rede criminosa com fachada legal.",
    tags: ["lavagem", "negócios", "fachadas", "Mr. Faber"],
    sourcePage: "GTA Online: Money Fronts",
    officialSource: "https://www.rockstargames.com/newswire/article/51322o2k393kka/gta-online-money-fronts-now-available"
  },
  {
    id: "safehouse-in-the-hills",
    title: "A Safehouse in the Hills",
    releaseDate: "10 de dezembro de 2025",
    year: "2025",
    type: "Safehouse e high-end crime",
    era: "Fase atual",
    summary: "Update de fim de 2025 centrado na compra de mansões Prix Luxury nas colinas, com safehouse de luxo, assistente de IA e novas operações ligadas ao alto escalão criminal de Los Santos.",
    brought: ["mansões Prix Luxury compráveis", "interiores de safehouse high-end", "assistente de IA para suporte da propriedade", "benefícios de segurança privada", "impulso de produção para negócios", "novas missões de preparação", "novos veículos, roupas e recompensas"],
    systems: ["Luxury Safehouse", "AI Assistant", "Private Security", "Production Boosts", "Prix Luxury prep missions"],
    vehicles: ["novos veículos adicionados pela atualização e drip-feed"],
    modes: ["missões da safehouse", "prep missions", "atividades de carreira", "KnoWay Out"],
    characters: ["jogador online", "Avi Schwartzman", "Michael De Santa"],
    impact: "Leva a fantasia de patrimônio do Online para mansões de alto luxo e reposiciona o jogador como chefe consolidado, não apenas operador de rua.",
    tags: ["safehouse", "luxo", "Prix Luxury", "Michael", "2025"],
    sourcePage: "GTA Online: A Safehouse in the Hills",
    officialSource: "https://www.rockstargames.com/newswire/article/51358a55o2o11o/gta-online-a-safehouse-in-the-hills-coming-december-10"
  }
];

const gta6FactsData = {
  confirmed: [
    "Data oficial atual: 19 de novembro de 2026; pré-load digital a partir de 12 de novembro.",
    "Plataformas anunciadas: PlayStation 5 e Xbox Series X|S. Edição física vem com código de download.",
    "Estado: Leonida, inspirado na Flórida — Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia e Mount Kalaga.",
    "Protagonistas: Lucia Caminos e Jason Duval, com troca de personagem a qualquer momento (Extended Look, 27/08/2026).",
    "Mecânicas mostradas pela Rockstar: procurado de 6 estrelas com testemunhas, Perfil Criminal, combustível e postos, furto de carros por nível de segurança (app WAINK), corpo que muda com comida e treino, animais interativos, mais de 600 mil animações.",
    "Sem microtransações no single-player e sem IA generativa (Rob Nelson, Rockstar North, agosto de 2026).",
    "Premissa oficial: um assalto que dá errado joga a dupla numa conspiração criminosa que atravessa Leonida."
  ],
  interpretation: [
    "A dinâmica Lucia/Jason é o eixo: relacionamento opcional, rotina no refúgio dos Keys e papéis trocáveis em fugas.",
    "Trailers, site e Extended Look enfatizam redes sociais, cultura viral (Trunk Challenge), praias, pântanos e polícia em sátira da Flórida.",
    "Números da imprensa (mapa 3x RDR2, Vice City 2x Los Santos, ~80 h de jogo) vêm de prévias hands-off, não de ficha técnica oficial."
  ],
  notConfirmed: [
    "Antagonistas principais e estrutura completa dos capítulos.",
    "Mapa completo oficial (a suposta imagem de agosto de 2026 é vazamento).",
    "Integração futura com GTA Online — a Rockstar se recusa a comentar.",
    "Resolução, modos de desempenho, PS5 Pro e versão de PC.",
    "Tamanho do arquivo (150-200 GB é estimativa)."
  ]
};

const connectionsData = [
  {
    title: "Catalina: San Andreas para GTA III",
    summary: "Catalina aparece em 1992 com CJ e, anos depois, trai Claude em Liberty City.",
    type: "Conexão cronológica"
  },
  {
    title: "Leone Family: Las Venturas, Liberty e GTA III",
    summary: "Salvatore conecta San Andreas, Liberty City Stories e GTA III, mostrando a continuidade da máfia 3D.",
    type: "Família criminosa"
  },
  {
    title: "Diamantes de Liberty City",
    summary: "GTA IV, The Lost and Damned e The Ballad of Gay Tony mostram o mesmo conflito por ângulos diferentes.",
    type: "Narrativa cruzada"
  },
  {
    title: "Michael, Trevor e North Yankton",
    summary: "A mentira de 2004 é o eixo emocional de GTA V, reativando amizade, traição e paranoia.",
    type: "Traição"
  },
  {
    title: "Franklin em GTA Online",
    summary: "The Contract confirma Franklin mais velho como empresário de sucesso, reforçando a leitura da Opção C.",
    type: "Continuidade HD"
  },
  {
    title: "Vice City 1984, 1986 e 2026",
    summary: "Vic e Tommy definem a era 3D; Lucia e Jason retornam à cidade em outro universo narrativo.",
    type: "Eco entre universos"
  }
];

const recommendedOrderData = [
  {
    label: "Ordem moderna para entender a narrativa",
    games: ["GTA III", "Vice City", "San Andreas", "Liberty City Stories", "Vice City Stories", "GTA IV", "Episodes from Liberty City", "Chinatown Wars", "GTA V", "GTA Online", "GTA VI"]
  },
  {
    label: "Ordem cronológica interna",
    games: ["London 1961", "London 1969", "Vice City Stories", "Vice City", "San Andreas", "GTA 1", "Liberty City Stories", "GTA Advance", "GTA III", "GTA IV + Episodes", "Chinatown Wars", "GTA V", "GTA Online", "GTA VI"]
  },
  {
    label: "Ordem por impacto histórico",
    games: ["Grand Theft Auto", "GTA III", "Vice City", "San Andreas", "GTA IV", "GTA V", "GTA Online", "GTA VI"]
  }
];

const impactData = [
  {
    title: "Mundo aberto urbano como linguagem dominante",
    body: "GTA III popularizou um modelo que virou vocabulário de design: mapa urbano, missões, sistemas policiais, liberdade lateral e narrativa cinematográfica."
  },
  {
    title: "Sátira cultural",
    body: "Rádios, anúncios, marcas falsas, talk shows e pedestres transformam cada cidade em crítica de consumo, política, mídia, celebridade e paranoia americana."
  },
  {
    title: "Controvérsias",
    body: "A série é historicamente alvo de debates sobre violência, classificação indicativa, representação e conteúdo sexual. San Andreas também ficou associado ao caso Hot Coffee, um dos marcos de controvérsia em jogos."
  },
  {
    title: "GTA Online e economia de jogo vivo",
    body: "GTA Online redefiniu a longevidade de GTA V, mas também trouxe debates sobre grind, microtransações, inflação interna e preservação do single-player tradicional."
  }
];

const glossaryData = [
  { term: "2D Universe", definition: "Primeira continuidade de GTA, com câmera top-down e estrutura arcade." },
  { term: "3D Universe", definition: "Continuidade de GTA III, Vice City, San Andreas, Advance, LCS e VCS." },
  { term: "HD Universe", definition: "Continuidade iniciada em GTA IV, incluindo GTA V, Online e GTA VI." },
  { term: "Wanted Level", definition: "Sistema de estrelas que mede resposta policial ao jogador." },
  { term: "Heist", definition: "Assalto planejado com preparação, equipe e execução." },
  { term: "C.R.A.S.H.", definition: "Unidade policial corrupta de San Andreas, liderada por Tenpenny." },
  { term: "FIB", definition: "Paródia do FBI no universo GTA." },
  { term: "IAA", definition: "Paródia da CIA/inteligência americana no universo GTA." },
  { term: "NOOSE", definition: "Força tática de resposta a ameaças de alto nível." },
  { term: "RAGE", definition: "Rockstar Advanced Game Engine, base técnica da era HD." },
  { term: "Euphoria", definition: "Tecnologia de animação/física usada para reações corporais na era HD." },
  { term: "Canon", definition: "Conjunto de eventos aceitos como continuidade narrativa." },
  { term: "Easter egg", definition: "Referência escondida, piada interna ou pista visual colocada no jogo." },
  { term: "Prequel", definition: "Jogo ou história que acontece antes de um título já lançado." },
  { term: "Spin-off", definition: "Entrada derivada, muitas vezes com formato, plataforma ou foco diferente." },
  { term: "GTA Online Organization", definition: "Estrutura criada pelo jogador para negócios como CEO, MC, Agência, Bunker ou Nightclub." },
  { term: "Leonida", definition: "Estado fictício de GTA VI inspirado na Flórida." },
  { term: "Vice City", definition: "Análogo de Miami, presente em 2D, 3D e HD Universe." }
];

const glossaryDetailData = {
  "2D Universe": {
    category: "Universos",
    expanded:
      "O 2D Universe cobre a fase original de Grand Theft Auto, quando a série ainda era vista de cima, com ritmo arcade, pontuação, missões curtas e continuidade narrativa bem mais solta. Liberty City, San Andreas e Vice City já existem como nomes, mas ainda funcionam como mapas de caos urbano, não como cidades-personagem densas. London 1969 e London 1961 também entram nessa fase e são exceções históricas por levarem GTA para fora do imaginário criminal norte-americano que dominaria a franquia depois.",
    importance:
      "É o laboratório da fórmula: roubo de veículos, perseguição policial, rádios, humor ácido, liberdade sistêmica e crime urbano antes da virada cinematográfica de GTA III.",
    examples: ["Grand Theft Auto", "GTA: London 1969", "GTA: London 1961", "Grand Theft Auto 2"],
    relatedTerms: ["3D Universe", "HD Universe", "Canon", "Easter egg"],
    games: ["GTA 1", "London 1969", "London 1961", "GTA 2"],
    precisionNotes: [
      "GTA 2 é frequentemente tratado como parte da fase 2D, mas seu ano interno e tom retrofuturista são deliberadamente nebulosos.",
      "Nomes de cidades podem reaparecer em outros universos sem significar que são a mesma continuidade."
    ],
    tags: ["universo", "top-down", "arcade", "origem"],
    sources: [
      { label: "GTA Wiki - Universes", url: "https://gta.fandom.com/wiki/Universes" },
      { label: "Wikipedia - Grand Theft Auto", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto" }
    ]
  },
  "3D Universe": {
    category: "Universos",
    expanded:
      "O 3D Universe é a continuidade clássica formada por GTA III, Vice City, San Andreas, Advance, Liberty City Stories e Vice City Stories. Ele transforma nomes antigos em lugares memoráveis, com máfias, gangues, rádios, personagens recorrentes e eventos que se conectam entre jogos. Claude, Tommy Vercetti, CJ, Mike, Toni Cipriani e Victor Vance pertencem a esse bloco narrativo.",
    importance:
      "Foi a era que consolidou GTA como narrativa criminal de mundo aberto, fazendo Liberty City, Vice City e San Andreas parecerem arquivos vivos de crime, rádio, política e cultura pop.",
    examples: ["Leone Family atravessando San Andreas, LCS e GTA III", "Catalina conectando San Andreas e GTA III", "Vice City Stories preparando o terreno para Vice City"],
    relatedTerms: ["2D Universe", "HD Universe", "Prequel", "Canon"],
    games: ["GTA III", "Vice City", "San Andreas", "GTA Advance", "Liberty City Stories", "Vice City Stories"],
    precisionNotes: [
      "GTA Advance é top-down, mas pertence ao 3D Universe por continuidade, cidade e ligação com GTA III.",
      "Referências da era 3D podem aparecer na era HD como marcas, piadas ou ecos, mas personagens centrais não devem ser assumidos como canônicos no HD Universe."
    ],
    tags: ["universo", "3d", "continuidade", "máfias"],
    sources: [
      { label: "GTA Wiki - 3D Universe", url: "https://gta.fandom.com/wiki/3D_Universe" },
      { label: "GTA Wiki - Universes", url: "https://gta.fandom.com/wiki/Universes" }
    ]
  },
  "HD Universe": {
    category: "Universos",
    expanded:
      "O HD Universe começa em GTA IV e segue por Episodes from Liberty City, Chinatown Wars, GTA V, GTA Online e GTA VI. A Rockstar reinventa a continuidade com cidades mais densas, física mais complexa, tom mais realista e sátira contemporânea. Liberty City, Los Santos e Vice City retornam reinterpretadas, com escala, geografia e canon diferentes da era 3D.",
    importance:
      "É o universo atual da franquia. Ele sustenta a narrativa de Niko Bellic, Johnny Klebitz, Luis Lopez, Huang Lee, Michael, Franklin, Trevor, o protagonista de GTA Online, Lucia Caminos e Jason Duval.",
    examples: ["GTA IV e Episodes mostram o mesmo conflito por ângulos diferentes", "GTA Online continua Los Santos depois de 2013", "GTA VI leva a continuidade HD para Leonida e Vice City moderna"],
    relatedTerms: ["Canon", "RAGE", "Euphoria", "GTA Online Organization", "Leonida"],
    games: ["GTA IV", "The Lost and Damned", "The Ballad of Gay Tony", "Chinatown Wars", "GTA V", "GTA Online", "GTA VI"],
    precisionNotes: [
      "O HD Universe não invalida a importância histórica da era 3D; ele separa continuidade narrativa.",
      "GTA VI é confirmado no HD Universe por continuidade moderna de marca, tecnologia e página oficial, mas detalhes finos do canon só ficam completos após o lançamento."
    ],
    tags: ["universo", "hd", "canon atual", "realismo"],
    sources: [
      { label: "GTA Wiki - HD Universe", url: "https://gta.fandom.com/wiki/HD_Universe" },
      { label: "Rockstar - GTA VI", url: "https://www.rockstargames.com/VI" }
    ]
  },
  "Wanted Level": {
    category: "Sistemas",
    expanded:
      "Wanted Level é o medidor de resposta policial de GTA. Crimes públicos, disparos, atropelamentos, invasão de áreas restritas e ataques a autoridades elevam o nível de procurado. Nas eras 2D e 3D ele costuma ir até seis estrelas; em GTA V e GTA Online opera em escala de cinco estrelas. A lógica muda por jogo, mas a fantasia é a mesma: quanto mais caos público, mais agressiva e organizada fica a resposta do Estado.",
    importance:
      "É um dos sistemas mais reconhecíveis da série, porque transforma a cidade em organismo reativo: patrulhas, barreiras, helicópteros, unidades táticas e perseguições contam a história do crime sem precisar de cutscene.",
    examples: ["seis estrelas em jogos clássicos", "cinco estrelas em GTA V", "resposta automática a áreas restritas em GTA Online"],
    relatedTerms: ["NOOSE", "LSPD", "LCPD", "C.R.A.S.H."],
    games: ["franquia GTA"],
    precisionNotes: [
      "A quantidade máxima de estrelas e a lógica de fuga variam entre jogos.",
      "GTA Online evita prisão tradicional do jogador e tende a usar resposta letal."
    ],
    tags: ["polícia", "sistema", "estrelas", "perseguição"],
    sources: [
      { label: "GTA Wiki - Wanted Level", url: "https://gta.fandom.com/wiki/Wanted_Level" },
      { label: "Wikipedia - Grand Theft Auto", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto" }
    ]
  },
  "Heist": {
    category: "Estrutura narrativa",
    expanded:
      "Heist é o assalto planejado, geralmente dividido em preparação, equipe, equipamento, execução e fuga. A ideia existe no DNA da série desde roubos e golpes menores, mas ganha forma cinematográfica em GTA V e estrutura cooperativa em GTA Online. Em vez de uma missão isolada, o heist vira campanha curta: escolher abordagem, roubar preparativos, dividir papéis e lidar com consequências.",
    importance:
      "Os heists conectam a fantasia criminal de GTA ao design moderno de missão. No Online, eles também viraram o eixo econômico de progressão e cooperação.",
    examples: ["Fleeca Job", "Pacific Standard Job", "The Doomsday Heist", "The Diamond Casino Heist", "The Cayo Perico Heist"],
    relatedTerms: ["GTA Online Organization", "Lester Crest", "IAA", "FIB"],
    games: ["GTA V", "GTA Online"],
    precisionNotes: [
      "Nem todo roubo em GTA é chamado formalmente de heist.",
      "Cayo Perico é histórico por permitir execução solo de um grande heist em GTA Online."
    ],
    tags: ["heist", "assalto", "cooperativo", "planejamento"],
    sources: [
      { label: "GTA Wiki - Heists", url: "https://gta.fandom.com/wiki/Heists" },
      { label: "GTA Wiki - Heists Update", url: "https://gta.fandom.com/wiki/Heists_Update" }
    ]
  },
  "C.R.A.S.H.": {
    category: "Polícia corrupta",
    expanded:
      "Community Resources Against Street Hoodlums, abreviado como C.R.A.S.H., é a unidade corrupta do LSPD que domina parte da narrativa de GTA San Andreas. Frank Tenpenny, Eddie Pulaski e Jimmy Hernandez manipulam CJ, fabricam pressões, usam gangues como ferramenta e representam a corrupção institucional por trás da guerra de ruas de Los Santos.",
    importance:
      "C.R.A.S.H. é o rosto policial da tragédia de San Andreas: a história não é apenas gangues contra gangues, mas uma cidade onde autoridade, crime e política se contaminam.",
    examples: ["Tenpenny coagindo CJ", "Pulaski como executor", "Hernandez dividido entre culpa e obediência"],
    relatedTerms: ["Wanted Level", "LSPD", "Canon"],
    games: ["GTA San Andreas"],
    precisionNotes: ["C.R.A.S.H. é específica da continuidade 3D e não deve ser confundida com LSPD genérica da era HD."],
    tags: ["polícia corrupta", "San Andreas", "Tenpenny", "LSPD"],
    sources: [{ label: "GTA Wiki - C.R.A.S.H.", url: "https://gta.fandom.com/wiki/C.R.A.S.H." }]
  },
  "FIB": {
    category: "Agências",
    expanded:
      "Federal Investigation Bureau é a paródia de GTA para o FBI. Na era HD, o FIB aparece como agência federal agressiva, burocrática e politicamente contaminada. Dave Norton e Steve Haines são centrais em GTA V: o primeiro prende Michael numa mentira de proteção; o segundo explora Michael, Franklin e Trevor em operações sujas.",
    importance:
      "O FIB permite que GTA critique vigilância, propaganda, conflito entre agências e uso do crime como ferramenta de Estado.",
    examples: ["Steve Haines em GTA V", "Dave Norton e o acordo de Michael", "The FIB Files em Agents of Sabotage"],
    relatedTerms: ["IAA", "NOOSE", "Wanted Level", "HD Universe"],
    games: ["GTA IV", "GTA V", "GTA Online"],
    precisionNotes: ["A representação varia por jogo; no HD Universe o FIB fica muito mais presente no enredo principal."],
    tags: ["governo", "FIB", "corrupção", "HD Universe"],
    sources: [{ label: "GTA Wiki - FIB", url: "https://gta.fandom.com/wiki/Federal_Investigation_Bureau" }]
  },
  "IAA": {
    category: "Agências",
    expanded:
      "International Affairs Agency é a paródia de GTA para agências de inteligência como a CIA. Ela aparece em conflitos de espionagem, operações clandestinas e disputas com o FIB. Em GTA V e GTA Online, a IAA usa criminosos, mercenários e intermediários para resolver crises que oficialmente não existem.",
    importance:
      "A IAA amplia GTA para além de gangues e máfias: o crime também pode ser geopolítica, laboratório, sabotagem e guerra de informação.",
    examples: ["conflito FIB versus IAA em GTA V", "Agent ULP em missão da IAA", "Operation Paper Trail"],
    relatedTerms: ["FIB", "NOOSE", "Heist", "HD Universe"],
    games: ["GTA IV", "GTA V", "GTA Online"],
    precisionNotes: ["A IAA é uma sátira ficcional; paralelos com agências reais são intencionais, mas não equivalências literais."],
    tags: ["governo", "IAA", "inteligência", "operações"],
    sources: [{ label: "GTA Wiki - IAA", url: "https://gta.fandom.com/wiki/International_Affairs_Agency" }]
  },
  "NOOSE": {
    category: "Polícia tática",
    expanded:
      "National Office of Security Enforcement é a força tática federal do HD Universe, funcionando como resposta armada de alto nível. Em perseguições intensas, missões e eventos de GTA IV, GTA V e GTA Online, a NOOSE representa a militarização da resposta policial.",
    importance:
      "Ela materializa o topo da escala de repressão: quando o Wanted Level vira crise, a cidade troca patrulhas por equipes táticas, helicópteros e bloqueios pesados.",
    examples: ["resposta de alto nível em Liberty City", "unidades táticas em Los Santos", "missões envolvendo N.O.O.S.E. em GTA Online"],
    relatedTerms: ["Wanted Level", "FIB", "IAA", "LSPD"],
    games: ["GTA IV", "GTA V", "GTA Online"],
    precisionNotes: ["Em jogos antigos, funções parecidas eram ocupadas por SWAT/FBI/Army; NOOSE é mais própria da era HD."],
    tags: ["polícia", "NOOSE", "tático", "HD Universe"],
    sources: [{ label: "GTA Wiki - NOOSE", url: "https://gta.fandom.com/wiki/National_Office_of_Security_Enforcement" }]
  },
  "RAGE": {
    category: "Tecnologia",
    expanded:
      "Rockstar Advanced Game Engine é a tecnologia proprietária usada pela Rockstar na era HD. GTA IV marca a entrada da franquia nesse ciclo técnico, combinando mundo aberto mais denso, física, streaming de cidade, animação, veículos e sistemas urbanos em escala maior. GTA V e Red Dead Redemption 2 refinam essa base; GTA VI deve representar a próxima evolução, embora detalhes técnicos oficiais continuem limitados.",
    importance:
      "RAGE é a infraestrutura que permitiu a virada de GTA para cidades mais densas, iluminação moderna, física mais reativa e simulação mais ambiciosa.",
    examples: ["GTA IV", "GTA V", "GTA Online", "Red Dead Redemption 2"],
    relatedTerms: ["Euphoria", "HD Universe", "GTA VI"],
    games: ["GTA IV", "GTA V", "GTA Online", "GTA VI"],
    precisionNotes: [
      "A Rockstar não publica todos os detalhes internos da engine.",
      "Afirmações sobre reconstruções completas para GTA VI devem ser tratadas como não confirmadas salvo fonte oficial."
    ],
    tags: ["engine", "RAGE", "tecnologia", "HD Universe"],
    sources: [
      { label: "GTA Wiki - RAGE", url: "https://gta.fandom.com/wiki/Rockstar_Advanced_Game_Engine" },
      { label: "Wikipedia - Rockstar Advanced Game Engine", url: "https://en.wikipedia.org/wiki/Rockstar_Advanced_Game_Engine" }
    ]
  },
  "Euphoria": {
    category: "Tecnologia",
    expanded:
      "Euphoria é uma tecnologia de animação comportamental e física corporal associada a NaturalMotion, integrada a jogos da Rockstar na era HD. Em GTA IV ela ficou famosa pelas reações de corpos a impactos, quedas, atropelamentos e tiroteios, fazendo personagens parecerem menos presos a animações rígidas.",
    importance:
      "A tecnologia ajudou GTA IV a parecer fisicamente diferente da era 3D: mais pesado, imprevisível e responsivo ao choque entre pedestres, veículos e armas.",
    examples: ["reações de Niko e pedestres em GTA IV", "ragdoll mais físico em GTA V", "quedas e colisões em jogos da Rockstar"],
    relatedTerms: ["RAGE", "HD Universe", "Wanted Level"],
    games: ["GTA IV", "GTA V", "GTA Online"],
    precisionNotes: ["Euphoria não é a engine inteira; é uma camada/tecnologia ligada à animação e simulação corporal."],
    tags: ["física", "animação", "Euphoria", "RAGE"],
    sources: [
      { label: "GTA Wiki - Euphoria", url: "https://gta.fandom.com/wiki/Euphoria" },
      { label: "Wikipedia - Euphoria software", url: "https://en.wikipedia.org/wiki/Euphoria_(software)" }
    ]
  },
  "Canon": {
    category: "Continuidade",
    expanded:
      "Canon é o conjunto de eventos aceitos como continuidade narrativa. Em GTA, o termo precisa ser usado com cuidado porque a franquia separa universos, brinca com marcas recorrentes, deixa finais alternativos e usa easter eggs para referenciar jogos antigos sem necessariamente confirmar coexistência. A Opção C de GTA V, por exemplo, é amplamente tratada como continuidade mais aceita por GTA Online, pois Franklin, Trevor e Michael seguem vivos em aparições e referências posteriores.",
    importance:
      "Ajuda a separar história interna, interpretação de fã, piada visual, referência de marketing e informação confirmada pela Rockstar.",
    examples: ["universos 2D/3D/HD separados", "Opção C de GTA V reforçada por GTA Online", "referências a marcas antigas sem canonizar personagens"],
    relatedTerms: ["Easter egg", "Prequel", "Spin-off", "HD Universe"],
    games: ["franquia GTA"],
    precisionNotes: [
      "Quando a Rockstar não confirma uma ligação, o dossiê marca como interpretação ou referência/easter egg.",
      "Canon de gameplay e canon narrativo nem sempre são idênticos."
    ],
    tags: ["canon", "continuidade", "precisão", "lore"],
    sources: [{ label: "GTA Wiki - Universes", url: "https://gta.fandom.com/wiki/Universes" }]
  },
  "Easter egg": {
    category: "Referências",
    expanded:
      "Easter egg é uma referência escondida, piada visual, segredo ou pista colocada no mundo do jogo. GTA usa easter eggs para comentar cultura pop, jogos anteriores, teorias da comunidade e absurdos urbanos. Eles enriquecem a leitura do mapa, mas não devem ser tratados automaticamente como prova de canon.",
    importance:
      "É uma camada essencial da experiência GTA: a cidade parece viva porque guarda segredos, piadas internas, lendas urbanas e rastros para o jogador investigar.",
    examples: ["segredos alienígenas em GTA V", "referências a personagens de outros universos", "mensagens escondidas em mapas e placas"],
    relatedTerms: ["Canon", "Universos", "HD Universe"],
    games: ["franquia GTA"],
    precisionNotes: ["Um easter egg pode ser intencional e ainda assim não alterar continuidade narrativa."],
    tags: ["referência", "segredo", "easter egg", "interpretação"],
    sources: [{ label: "GTA Wiki - Secrets and Easter Eggs", url: "https://gta.fandom.com/wiki/Secrets_and_Easter_Eggs" }]
  },
  "Prequel": {
    category: "Estrutura narrativa",
    expanded:
      "Prequel é uma história lançada depois, mas ambientada antes de outro jogo. GTA usa prequels para preencher lacunas de poder: Liberty City Stories mostra Toni Cipriani e a família Leone antes de GTA III; Vice City Stories mostra Victor Vance e Vice City antes da chegada de Tommy Vercetti.",
    importance:
      "Os prequels ajudam a entender como cidades e facções chegaram ao estado visto nos jogos principais.",
    examples: ["Liberty City Stories antes de GTA III", "Vice City Stories antes de Vice City", "North Yankton 2004 como prólogo dentro de GTA V"],
    relatedTerms: ["Canon", "Spin-off", "3D Universe"],
    games: ["Liberty City Stories", "Vice City Stories", "GTA V"],
    precisionNotes: ["Prequel é posição cronológica, não necessariamente menor importância."],
    tags: ["prequel", "cronologia", "lore", "3D Universe"],
    sources: [
      { label: "GTA Wiki - Liberty City Stories", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto:_Liberty_City_Stories" },
      { label: "GTA Wiki - Vice City Stories", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto:_Vice_City_Stories" }
    ]
  },
  "Spin-off": {
    category: "Estrutura de série",
    expanded:
      "Spin-off é uma entrada derivada que muda escala, plataforma, formato ou foco. Em GTA, o termo pode cobrir jogos portáteis, expansões e experiências laterais que não seguem exatamente a numeração principal, mas acrescentam contexto, personagens e sistemas.",
    importance:
      "Sem os spin-offs, o mapa histórico da saga fica incompleto: Chinatown Wars, Advance, Episodes from Liberty City e os Stories explicam redes criminosas que os jogos principais apenas sugerem.",
    examples: ["GTA Advance", "Chinatown Wars", "The Lost and Damned", "The Ballad of Gay Tony"],
    relatedTerms: ["Prequel", "Canon", "3D Universe", "HD Universe"],
    games: ["GTA Advance", "Chinatown Wars", "Episodes from Liberty City"],
    precisionNotes: ["Spin-off não significa não canônico; depende do universo e do jogo."],
    tags: ["spin-off", "expansão", "portátil", "canon"],
    sources: [{ label: "GTA Wiki - Grand Theft Auto Wiki", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_Wiki" }]
  },
  "GTA Online Organization": {
    category: "Economia online",
    expanded:
      "GTA Online Organization é a estrutura de organização criada pelo jogador para operar negócios, contratar associados e executar atividades como CEO, VIP, MC President, dono de nightclub, agência, bunker, arcade, auto shop, salvage yard e outras frentes. Ela é menos uma facção canônica fixa e mais um guarda-chuva de gameplay que transforma o personagem online em empresário criminoso.",
    importance:
      "É a base da carreira criminal persistente de GTA Online: o jogador deixa de ser apenas mercenário e passa a administrar cadeias de produção, roubo, lavagem, contrabando e serviços armados.",
    examples: ["CEO Warehouses", "MC Businesses", "Bunker", "Nightclub", "Agency", "Arcade", "Auto Shop", "Salvage Yard", "Money Fronts"],
    relatedTerms: ["Heist", "GTA Online", "FIB", "IAA"],
    games: ["GTA Online"],
    precisionNotes: [
      "A organização do jogador é personalizável e não tem nome canônico único.",
      "Muitos negócios são simultaneamente sistemas de gameplay e ficção de lavagem de dinheiro."
    ],
    tags: ["online", "CEO", "MC", "negócios", "lavagem"],
    sources: [
      { label: "GTA Wiki - Organizations", url: "https://gta.fandom.com/wiki/Organizations" },
      { label: "GTA Wiki - Updates in GTA Online", url: "https://gta.fandom.com/wiki/Updates_in_GTA_Online" }
    ]
  },
  "Leonida": {
    category: "Cidades e estados",
    expanded:
      "Leonida é o estado fictício de GTA VI, inspirado na Flórida. A página oficial e os trailers mostram Vice City moderna, Keys, pântanos, praias, vida noturna, encontros virais, policiamento, redes sociais e criminalidade contemporânea. A Rockstar apresenta Leonida como o novo grande palco do HD Universe, com Lucia Caminos e Jason Duval presos a uma conspiração criminal após um serviço dar errado.",
    importance:
      "Leonida marca a volta de Vice City em escala moderna e abre a próxima fase de GTA depois de mais de uma década de Los Santos como centro da franquia.",
    examples: ["Vice City", "Leonida Keys", "ambiente de redes sociais e cultura viral", "Lucia Caminos e Jason Duval"],
    relatedTerms: ["Vice City", "HD Universe", "Canon", "GTA VI"],
    games: ["GTA VI"],
    precisionNotes: [
      "A data oficial atual de GTA VI é 19 de novembro de 2026.",
      "Detalhes de mapa completo, antagonistas e sistemas ainda devem ser tratados como não confirmados."
    ],
    tags: ["Leonida", "GTA VI", "Vice City", "confirmado"],
    sources: [
      { label: "Rockstar - GTA VI", url: "https://www.rockstargames.com/VI" },
      { label: "Rockstar Newswire - GTA VI data", url: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026" }
    ]
  },
  "Vice City": {
    category: "Cidades e estados",
    expanded:
      "Vice City é o análogo de Miami dentro de GTA. Na era 2D, aparece como uma cidade do primeiro jogo. Na era 3D, vira palco neon de drogas, cartéis, luxo, praia e cinema criminal dos anos 80 em Vice City e Vice City Stories. No HD Universe, retorna em GTA VI como cidade moderna dentro de Leonida, com redes sociais, cultura viral, polícia, praias, clubes e crime contemporâneo.",
    importance:
      "É uma das identidades urbanas mais fortes da franquia: onde Liberty City é máfia/capitalismo e Los Santos é celebridade/desigualdade, Vice City é excesso tropical, neon, golpe, tráfico e reinvenção cultural.",
    examples: ["Victor Vance em 1984", "Tommy Vercetti em 1986", "Lucia e Jason em GTA VI"],
    relatedTerms: ["Leonida", "3D Universe", "HD Universe", "Prequel"],
    games: ["GTA 1", "Vice City Stories", "Vice City", "GTA VI"],
    precisionNotes: [
      "Vice City da era 3D e Vice City de GTA VI não são a mesma continuidade.",
      "A inspiração em Miami é clara, mas a Rockstar usa sátira e composição ficcional, não reproduz a cidade real literalmente."
    ],
    tags: ["Vice City", "Miami", "neon", "GTA VI", "anos 80"],
    sources: [
      { label: "GTA Wiki - Vice City", url: "https://gta.fandom.com/wiki/Vice_City" },
      { label: "Rockstar - GTA VI", url: "https://www.rockstargames.com/VI" }
    ]
  }
};

glossaryData.forEach((item) => {
  Object.assign(item, glossaryDetailData[item.term] || {});
});

const mediaCredit = "Imagem promocional oficial © Rockstar Games / Take-Two Interactive";
const glossaryDetailsByTerm = {
  "2D Universe": {
    category: "Continuidades",
    expanded: "A primeira fase de GTA funciona como laboratório da franquia: câmera top-down, missões curtas, pontuação, rádio, caos urbano e menos compromisso com drama cinematográfico. Os nomes Liberty City, Vice City e San Andreas já existem, mas ainda são mapas abstratos.",
    appearsIn: ["Grand Theft Auto", "GTA: London 1969", "GTA: London 1961", "Grand Theft Auto 2"],
    examples: ["GTA 1 usa três cidades em perspectiva de cima.", "London 1969 e London 1961 são raras incursões fora dos EUA.", "GTA 2 usa Anywhere City e gangues de tom retrofuturista."],
    whyItMatters: "É onde nascem as regras básicas: roubar carros, fugir da polícia, aceitar trabalhos criminosos e transformar a cidade em sistema de caos.",
    relatedTerms: ["3D Universe", "Canon", "Spin-off"],
    precisionNotes: ["A continuidade é mais solta que nas fases posteriores.", "Cidades com o mesmo nome não são automaticamente a mesma versão canônica."],
    tags: ["universo", "2D", "top-down", "origem"],
    sources: [{ label: "GTA Wiki - 2D Universe", url: "https://gta.fandom.com/wiki/2D_Universe" }]
  },
  "3D Universe": {
    category: "Continuidades",
    expanded: "A fase clássica da franquia: cidades em 3D, personagens recorrentes, máfias conectadas, rádios satíricas e continuidade reconhecível. GTA III, Vice City e San Andreas criam a identidade moderna da série.",
    appearsIn: ["GTA III", "Vice City", "San Andreas", "GTA Advance", "Liberty City Stories", "Vice City Stories"],
    examples: ["Salvatore Leone conecta San Andreas, Liberty City Stories e GTA III.", "Catalina aparece em San Andreas antes de trair Claude.", "Vice City Stories mostra a cidade antes de Tommy Vercetti dominar o submundo."],
    whyItMatters: "Transformou GTA em fenômeno cultural e consolidou o modelo urbano de mundo aberto.",
    relatedTerms: ["2D Universe", "HD Universe", "Prequel", "Canon"],
    precisionNotes: ["Não é a mesma continuidade da era HD.", "Referências posteriores podem ser homenagem ou easter egg."],
    tags: ["universo", "3D", "PS2", "continuidade"],
    sources: [{ label: "GTA Wiki - 3D Universe", url: "https://gta.fandom.com/wiki/3D_Universe" }]
  },
  "HD Universe": {
    category: "Continuidades",
    expanded: "Continuidade moderna iniciada em GTA IV, com cidades reinterpretadas, física mais realista, sátira contemporânea e mundos mais densos. Liberty City de GTA IV não é a mesma de GTA III; Los Santos de GTA V não é simplesmente o mapa de San Andreas.",
    appearsIn: ["GTA IV", "Episodes from Liberty City", "Chinatown Wars", "GTA V", "GTA Online", "GTA VI"],
    examples: ["Niko Bellic vive na Liberty City HD.", "GTA V e GTA Online expandem Los Santos e Blaine County.", "GTA VI leva a continuidade para Leonida e Vice City moderna."],
    whyItMatters: "É a continuidade ativa da franquia e o eixo de GTA Online, GTA V e GTA VI.",
    relatedTerms: ["Canon", "RAGE", "Euphoria", "GTA Online Organization"],
    precisionNotes: ["Personagens antigos podem ser citados sem migrar de universo.", "GTA Online tem cronologia viva e flexível."],
    tags: ["universo", "HD", "moderno", "GTA Online"],
    sources: [{ label: "GTA Wiki - HD Universe", url: "https://gta.fandom.com/wiki/HD_Universe" }]
  },
  "Wanted Level": {
    category: "Sistemas",
    expanded: "Wanted Level é a linguagem policial de GTA. Crimes aumentam estrelas; cada estrela amplia patrulhas, bloqueios, helicópteros, unidades táticas e perseguições. O sistema cria tensão imediata entre liberdade e consequência.",
    appearsIn: ["quase toda a série principal"],
    examples: ["GTA III pode escalar até exército e tanques.", "GTA IV e GTA V usam área de busca e linha de visão.", "GTA Online adapta a resposta policial para sessões multiplayer."],
    whyItMatters: "Faz a cidade reagir ao jogador e transforma improviso em perseguição.",
    relatedTerms: ["NOOSE", "FIB", "IAA", "Canon"],
    precisionNotes: ["A implementação muda por jogo.", "Muitas respostas policiais são sistema de gameplay, não evento canônico."],
    tags: ["polícia", "sistema", "estrelas", "gameplay"],
    sources: [{ label: "GTA Wiki - Wanted Level", url: "https://gta.fandom.com/wiki/Wanted_Level" }]
  },
  "Heist": {
    category: "Estrutura de missão",
    expanded: "Heist é o assalto planejado de GTA: reconhecimento, preparação, equipe, equipamento, execução, fuga e pagamento. Em GTA V organiza a campanha; em GTA Online vira pilar cooperativo, solo-friendly ou modular.",
    appearsIn: ["GTA V", "GTA Online", "The Doomsday Heist", "The Diamond Casino Heist", "The Cayo Perico Heist"],
    examples: ["The Jewel Store Job define o modelo em GTA V.", "Pacific Standard marca os heists clássicos do Online.", "Cayo Perico muda a economia por permitir grind solo lucrativo."],
    whyItMatters: "Condensa a fantasia criminal moderna da série em planejamento e recompensa.",
    relatedTerms: ["GTA Online Organization", "FIB", "IAA", "Prequel"],
    precisionNotes: ["Nem todo roubo é heist formal.", "Pagamentos e dificuldade mudam com balanceamentos do Online."],
    tags: ["assalto", "missão", "GTA Online", "crime"],
    sources: [{ label: "GTA Wiki - Heists", url: "https://gta.fandom.com/wiki/Heists" }]
  },
  "C.R.A.S.H.": {
    category: "Organizações",
    expanded: "Community Resources Against Street Hoodlums é a unidade policial corrupta de GTA San Andreas. Tenpenny, Pulaski e Hernandez representam abuso de poder, chantagem, fabricação de provas e uso das gangues como ferramenta política.",
    appearsIn: ["Grand Theft Auto: San Andreas"],
    examples: ["Tenpenny incrimina CJ logo no retorno a Los Santos.", "C.R.A.S.H. usa CJ para remover ameaças.", "A queda de Tenpenny explode nos riots finais."],
    whyItMatters: "É o centro político da história de CJ e liga gangues, polícia e corrupção sistêmica.",
    relatedTerms: ["Wanted Level", "Canon", "3D Universe"],
    precisionNotes: ["Inspirada por escândalos reais, mas tratada como ficção satírica."],
    tags: ["polícia corrupta", "San Andreas", "Tenpenny", "3D Universe"],
    sources: [{ label: "GTA Wiki - C.R.A.S.H.", url: "https://gta.fandom.com/wiki/Community_Resources_Against_Street_Hoodlums" }]
  },
  "FIB": {
    category: "Agências",
    expanded: "Federal Investigation Bureau é a paródia do FBI no universo GTA. Em GTA V, Dave Norton e Steve Haines colocam Michael, Franklin e Trevor em operações clandestinas, disputas internas e manipulação política.",
    appearsIn: ["GTA IV", "GTA V", "GTA Online"],
    examples: ["Steve Haines usa os protagonistas em guerra burocrática contra a IAA.", "Dave Norton sustenta a mentira de North Yankton.", "GTA Online retoma arquivos e operações do FIB em updates modernos."],
    whyItMatters: "Mostra que o Estado em GTA também funciona como facção interessada.",
    relatedTerms: ["IAA", "NOOSE", "Wanted Level", "HD Universe"],
    precisionNotes: ["O nome é ficcional; a paródia do FBI é intencional."],
    tags: ["governo", "FIB", "corrupção", "HD Universe"],
    sources: [{ label: "GTA Wiki - FIB", url: "https://gta.fandom.com/wiki/Federal_Investigation_Bureau" }]
  },
  "IAA": {
    category: "Agências",
    expanded: "International Affairs Agency satiriza inteligência externa, operações secretas e rivalidade burocrática com o FIB. Em GTA V e Online, aparece em interrogatórios, conspirações e missões de espionagem.",
    appearsIn: ["GTA IV", "GTA V", "GTA Online"],
    examples: ["A disputa FIB/IAA move várias missões de GTA V.", "The Doomsday Heist coloca inteligência e tecnologia no centro da ameaça.", "Agent ULP reaparece em operações do Online."],
    whyItMatters: "Amplia a sátira política para agências de inteligência e guerra secreta.",
    relatedTerms: ["FIB", "NOOSE", "Heist", "HD Universe"],
    precisionNotes: ["É uma agência ficcional; conexões com a CIA são satíricas, não literais."],
    tags: ["governo", "IAA", "espionagem", "HD Universe"],
    sources: [{ label: "GTA Wiki - IAA", url: "https://gta.fandom.com/wiki/International_Affairs_Agency" }]
  },
  "NOOSE": {
    category: "Agências",
    expanded: "National Office of Security Enforcement é a resposta tática pesada da era HD, misturando paródia de segurança nacional, SWAT e forças federais. Surge quando a situação passa da polícia comum.",
    appearsIn: ["GTA IV", "GTA V", "GTA Online"],
    examples: ["Equipes táticas aparecem em perseguições intensas.", "Helicópteros e unidades armadas reforçam Wanted Level alto.", "Heists e missões usam NOOSE como pressão institucional."],
    whyItMatters: "Representa a escalada do crime urbano para resposta quase militar.",
    relatedTerms: ["Wanted Level", "FIB", "IAA", "HD Universe"],
    precisionNotes: ["O papel exato varia por jogo, missão e nível de procurado."],
    tags: ["polícia", "tático", "HD Universe", "governo"],
    sources: [{ label: "GTA Wiki - NOOSE", url: "https://gta.fandom.com/wiki/National_Office_of_Security_Enforcement" }]
  },
  "RAGE": {
    category: "Tecnologia",
    expanded: "Rockstar Advanced Game Engine é a engine proprietária da Rockstar na era HD. Sustenta streaming de mapa, física, veículos, clima, animações e sistemas urbanos em mundos grandes e densos.",
    appearsIn: ["GTA IV", "GTA V", "GTA Online", "Red Dead Redemption", "Red Dead Redemption 2"],
    examples: ["GTA IV usa RAGE para direção pesada e física urbana.", "GTA V amplia escala com Los Santos e Blaine County.", "GTA Online evolui a mesma base por anos de updates."],
    whyItMatters: "Marca a virada técnica da série após a era RenderWare.",
    relatedTerms: ["Euphoria", "HD Universe", "GTA Online Organization"],
    precisionNotes: ["Detalhes internos de versões da engine nem sempre são públicos."],
    tags: ["engine", "tecnologia", "Rockstar", "HD"],
    sources: [{ label: "GTA Wiki - RAGE", url: "https://gta.fandom.com/wiki/Rockstar_Advanced_Game_Engine" }]
  },
  "Euphoria": {
    category: "Tecnologia",
    expanded: "Euphoria é uma tecnologia de animação procedural para reações corporais. Em vez de depender só de animações fixas, personagens podem reagir a impacto, queda, atropelamento e colisão com mais naturalidade.",
    appearsIn: ["GTA IV", "GTA V", "Red Dead Redemption"],
    examples: ["Niko reage fisicamente a quedas e atropelamentos.", "GTA V mistura ragdoll, física e animação em tiroteios.", "A tecnologia ajuda a dar peso a acidentes e perseguições."],
    whyItMatters: "Foi parte importante da sensação de realismo físico na era HD.",
    relatedTerms: ["RAGE", "HD Universe", "Wanted Level"],
    precisionNotes: ["Nem toda reação física visível é necessariamente Euphoria; há mistura de sistemas."],
    tags: ["física", "animação", "tecnologia", "HD"],
    sources: [{ label: "GTA Wiki - Euphoria", url: "https://gta.fandom.com/wiki/Euphoria" }]
  },
  "Canon": {
    category: "Lore",
    expanded: "Canon em GTA exige cuidado: há universos separados, finais alternativos, eventos opcionais, piadas internas e referências que nem sempre confirmam coexistência. O dossiê separa confirmado, interpretação, easter egg e não confirmado.",
    appearsIn: ["toda a franquia"],
    examples: ["A Opção C de GTA V é a leitura mais aceita por GTA Online.", "Personagens da era 3D podem ser citados na era HD como referência.", "GTA 2 tem ambientação deliberadamente ambígua."],
    whyItMatters: "Impede que referências virem fatos duvidosos e organiza a cronologia da saga.",
    relatedTerms: ["2D Universe", "3D Universe", "HD Universe", "Easter egg"],
    precisionNotes: ["Quando algo for incerto, o site deve marcar como interpretação ou não confirmado."],
    tags: ["canon", "lore", "continuidade"],
    sources: [{ label: "GTA Wiki - Universes", url: "https://gta.fandom.com/wiki/Universes" }]
  },
  "Easter egg": {
    category: "Lore",
    expanded: "Easter eggs são segredos, piadas, homenagens, pistas visuais ou referências escondidas. Eles enriquecem o mundo, mas nem sempre devem ser tratados como prova canônica.",
    appearsIn: ["toda a franquia"],
    examples: ["Mistérios de Mount Chiliad.", "Referências a jogos e personagens antigos.", "Objetos, frases e marcas falsas escondidas pelo mapa."],
    whyItMatters: "Mantém a comunidade investigando cidades por anos e reforça o tom de arquivo secreto da série.",
    relatedTerms: ["Canon", "HD Universe", "Spin-off"],
    precisionNotes: ["Easter egg não é automaticamente fato canônico.", "Alguns mistérios são deliberadamente ambíguos."],
    tags: ["segredo", "referência", "lore"],
    sources: [{ label: "GTA Wiki - Easter Eggs", url: "https://gta.fandom.com/wiki/Easter_Eggs" }]
  },
  "Prequel": {
    category: "Estrutura narrativa",
    expanded: "Prequel é uma história que acontece antes de outra já lançada. Em GTA, prequels costumam explicar guerras de máfia, ascensão de personagens e estados anteriores de uma cidade.",
    appearsIn: ["Liberty City Stories", "Vice City Stories", "San Andreas", "prólogo de GTA V"],
    examples: ["Liberty City Stories mostra Toni Cipriani subindo na família Leone.", "Vice City Stories mostra Vic Vance antes de Tommy.", "O prólogo de GTA V mostra North Yankton em 2004."],
    whyItMatters: "Reorganiza a saga por cronologia interna, não por ordem de lançamento.",
    relatedTerms: ["3D Universe", "Canon", "Spin-off"],
    precisionNotes: ["Prequel não significa automaticamente spin-off."],
    tags: ["cronologia", "prequel", "história"],
    sources: [{ label: "GTA Wiki - Timeline", url: "https://gta.fandom.com/wiki/Timeline" }]
  },
  "Spin-off": {
    category: "Estrutura narrativa",
    expanded: "Spin-off é uma entrada derivada que muda foco, plataforma, formato ou escala. Em GTA, expansões e portáteis podem ser menores que os jogos numerados, mas ainda carregar peso de lore.",
    appearsIn: ["London 1969", "London 1961", "GTA Advance", "Chinatown Wars", "Episodes from Liberty City"],
    examples: ["Chinatown Wars tem estrutura própria e foco em Triads.", "Episodes from Liberty City mostra GTA IV por outros protagonistas.", "London 1969 e London 1961 são expansões históricas."],
    whyItMatters: "Explica por que jogos derivados podem ser essenciais para entender cidades e personagens.",
    relatedTerms: ["Prequel", "2D Universe", "HD Universe"],
    precisionNotes: ["Nem todo spin-off é menos canônico; Chinatown Wars pertence ao HD Universe."],
    tags: ["spin-off", "expansão", "portátil"],
    sources: [{ label: "GTA Wiki - Grand Theft Auto", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto" }]
  },
  "GTA Online Organization": {
    category: "GTA Online",
    expanded: "Organizações são a forma como o jogador vira operador econômico em GTA Online. O sistema passa por VIP/CEO, motoclubes, bunkers, nightclubs, agências, arcades, auto shops, salvage yards, bail offices e frentes de lavagem.",
    appearsIn: ["GTA Online"],
    examples: ["CEO gerencia Special Cargo e Vehicle Cargo.", "MC administra negócios de drogas e falsificação.", "Nightclub conecta negócios antigos em renda passiva.", "Agency abre contratos e Payphone Hits."],
    whyItMatters: "É a espinha dorsal da progressão moderna de GTA Online.",
    relatedTerms: ["Heist", "HD Universe", "Wanted Level"],
    precisionNotes: ["Pagamentos e regras mudam com balanceamentos.", "Algumas atividades funcionam solo; outras foram pensadas para grupo."],
    tags: ["online", "negócios", "CEO", "MC"],
    sources: [{ label: "GTA Wiki - Organizations", url: "https://gta.fandom.com/wiki/Organizations" }]
  },
  "Leonida": {
    category: "Cidades e estados",
    expanded: "Leonida é o estado de GTA VI no HD Universe, inspirado na Flórida. O material oficial destaca Vice City moderna, praias, pântanos, rodovias, redes sociais, cultura viral e criminalidade contemporânea.",
    appearsIn: ["Grand Theft Auto VI"],
    examples: ["Vice City é a cidade principal destacada.", "Leonida Keys e Port Gellhorn aparecem em materiais de GTA VI.", "Lucia Caminos e Jason Duval são protagonistas confirmados."],
    whyItMatters: "É o próximo grande espaço narrativo da franquia e o retorno moderno de Vice City.",
    relatedTerms: ["Vice City", "HD Universe", "Canon"],
    precisionNotes: ["Mapa completo e todos os distritos seguem não confirmados até o lançamento.", "Data oficial atual registrada no dossiê: 19 de novembro de 2026."],
    tags: ["GTA VI", "Leonida", "Vice City", "HD"],
    sources: [{ label: "Rockstar Games - GTA VI", url: "https://www.rockstargames.com/VI" }]
  },
  "Vice City": {
    category: "Cidades e estados",
    expanded: "Vice City é o grande símbolo neon da série: Miami ficcional, art deco, praia, tráfico, clubes, luxo e ambição. Na era 3D, é palco de Vic Vance e Tommy Vercetti; na era HD, retorna em GTA VI dentro de Leonida.",
    appearsIn: ["GTA 1", "Vice City", "Vice City Stories", "GTA VI"],
    examples: ["Vice City Stories mostra a cidade antes de Tommy.", "Vice City acompanha Tommy derrubando Ricardo Diaz.", "GTA VI reinterpreta a cidade com redes sociais e crime moderno."],
    whyItMatters: "Liga nostalgia da era 3D ao futuro da franquia.",
    relatedTerms: ["Leonida", "3D Universe", "HD Universe", "Prequel"],
    precisionNotes: ["A Vice City de GTA VI não é literalmente a mesma continuidade da Vice City de 1986.", "Alguns grupos e eventos de GTA VI ainda não foram confirmados."],
    tags: ["cidade", "Miami", "Vice City", "GTA VI"],
    sources: [{ label: "GTA Wiki - Vice City", url: "https://gta.fandom.com/wiki/Vice_City" }]
  }
};

const rsgGamesSource = "https://www.rockstargames.com/games";
const rsgVI = "https://www.rockstargames.com/VI";
const rsgVIScreens = "https://www.rockstargames.com/VI/downloads/screenshots?pubDate=20250511";
const rsgVIArtwork = "https://www.rockstargames.com/VI/downloads/artwork-wallpapers";
const rsgVSource = "https://www.rockstargames.com/gta-v";
const rsgOnlineSource = "https://www.rockstargames.com/gta-online";
const rsgTrilogySource = "https://www.rockstargames.com/GTATrilogy";

const officialMediaData = {
  notice:
    "Imagens promocionais oficiais e imagens de referência externas usadas com crédito e link para a fonte. O projeto é um arquivo editorial de fã e não afirma propriedade sobre as artes.",
  hero: {
    src: "https://www.rockstargames.com/VI/_next/static/media/Jason_and_Lucia_01_landscape.0e2a6544.jpg",
    alt: "Arte oficial de Grand Theft Auto VI com Lucia e Jason",
    credit: mediaCredit,
    caption: "Rockstar Games - GTA VI Artwork & Wallpapers",
    source: rsgVIArtwork
  },
  gtaOnlineHero: {
    src: "https://media-rockstargames-com.akamaized.net/tina-uploads/tina-modules/gta-online/7ec5f9605b1524c2fe73e655f053725b05359458.jpg",
    alt: "Imagem oficial de Grand Theft Auto Online",
    credit: mediaCredit,
    caption: "Rockstar Games - GTA Online",
    source: rsgOnlineSource,
    position: "center"
  },
  sources: [
    { label: "GTA VI - página oficial", url: rsgVI, note: "Hero, personagens e sinopse de Lucia/Jason." },
    { label: "GTA VI - screenshots oficiais", url: rsgVIScreens, note: "Screenshots de Lucia, Jason, Vice City, Leonida e regiões." },
    { label: "GTA VI - artworks e wallpapers", url: rsgVIArtwork, note: "Artes oficiais, postcards e wallpapers." },
    { label: "GTA V - página oficial", url: rsgVSource, note: "Imagens promocionais atuais de Los Santos e GTA V." },
    { label: "GTA Online - página oficial", url: rsgOnlineSource, note: "Imagens de atualizações e plataforma online." },
    { label: "GTA Trilogy - página oficial", url: rsgTrilogySource, note: "Artes e screenshots da trilogia 3D remasterizada." },
    { label: "GTA Wiki / Fandom - personagens e locais", url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_Wiki", note: "Imagens de referência para fichas de personagens, cidades e estados quando a página oficial não entrega retrato específico." },
    { label: "GTA Wiki / Fandom - perfis de criadores", url: "https://gta.fandom.com/wiki/Category:Developers", note: "Fotos públicas e perfis de criadores, produtores, diretores e desenvolvedores ligados a GTA." },
    { label: "Wikimedia Commons - fotos históricas", url: "https://commons.wikimedia.org/", note: "Fotos de David Jones e Mike Dailly usadas com crédito de fonte." },
    { label: "Páginas oficiais dos jogos Rockstar", url: rsgGamesSource, note: "Screenshots oficiais de GTA 1, GTA 2, GTA III, Vice City, San Andreas, LCS, VCS, GTA IV, EFLC e Chinatown Wars." }
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

const gtaWikiCredit = "Imagem via GTA Wiki / Fandom; direitos dos assets pertencem aos respectivos titulares.";
const gtaWikiPage = (page) => `https://gta.fandom.com/wiki/${encodeURIComponent(page.replace(/\s+/g, "_"))}`;
const gtaWikiImage = (page, src, options = {}) => ({
  src,
  alt: `Imagem de ${page} via GTA Wiki`,
  source: gtaWikiPage(page),
  caption: `GTA Wiki - ${page}`,
  credit: gtaWikiCredit,
  ...options
});

const realPersonCredit = "Foto pública usada com crédito e link para a fonte indicada.";
const realPersonImage = (name, src, source, caption = name, options = {}) => ({
  src,
  alt: `Foto de ${name}`,
  source,
  caption,
  credit: realPersonCredit,
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

const gtaWikiGameMediaById = {
  "gta-1": gtaWikiImage("Grand Theft Auto (1997 game)", "https://static.wikia.nocookie.net/gtawiki/images/8/80/GTA1_Box_Art.jpg/revision/latest/scale-to-width-down/972?cb=20240224110526", { fit: "contain" }),
  "london-1969": gtaWikiImage("Grand Theft Auto: London 1969", "https://static.wikia.nocookie.net/gtawiki/images/f/fc/GTA_London_1969_Box_Art.jpg/revision/latest/scale-to-width-down/972?cb=20240225010807", { fit: "contain" }),
  "london-1961": gtaWikiImage("Grand Theft Auto: London 1961", "https://static.wikia.nocookie.net/gtawiki/images/7/7a/GTALondon1961-InfoboxImage.jpg/revision/latest/scale-to-width-down/972?cb=20250831025636", { fit: "contain" }),
  "gta-2": gtaWikiImage("Grand Theft Auto 2", "https://static.wikia.nocookie.net/gtawiki/images/4/40/GTA2_Box_Art.jpg/revision/latest/scale-to-width-down/972?cb=20240225005506", { fit: "contain" }),
  "gta-iii": gtaWikiImage("Grand Theft Auto III", "https://static.wikia.nocookie.net/gtawiki/images/f/f6/GTA3_Box_Art.jpg/revision/latest/scale-to-width-down/972?cb=20200723205441", { fit: "contain" }),
  "vice-city": gtaWikiImage("Grand Theft Auto: Vice City", "https://static.wikia.nocookie.net/gtawiki/images/3/36/GTA_Vice_City_Box_Art.jpg/revision/latest/scale-to-width-down/972?cb=20240224223852", { fit: "contain" }),
  "san-andreas": gtaWikiImage("Grand Theft Auto: San Andreas", "https://static.wikia.nocookie.net/gtawiki/images/2/23/CoverArt-GTASA.png/revision/latest/scale-to-width-down/972?cb=20260330025010", { fit: "contain" }),
  "gta-advance": gtaWikiImage("Grand Theft Auto Advance", "https://static.wikia.nocookie.net/gtawiki/images/f/f6/GTAA-SocialClubCover.jpg/revision/latest/scale-to-width-down/972?cb=20190524102713", { fit: "contain" }),
  "liberty-city-stories": gtaWikiImage("Grand Theft Auto: Liberty City Stories", "https://static.wikia.nocookie.net/gtawiki/images/4/43/CoverArt-GTALCS.png/revision/latest/scale-to-width-down/972?cb=20240503114247", { fit: "contain" }),
  "vice-city-stories": gtaWikiImage("Grand Theft Auto: Vice City Stories", "https://static.wikia.nocookie.net/gtawiki/images/f/fb/GTAVCS-Cover.jpg/revision/latest/scale-to-width-down/972?cb=20230718045517", { fit: "contain" }),
  "gta-iv": gtaWikiImage("Grand Theft Auto IV", "https://static.wikia.nocookie.net/gtawiki/images/4/44/GTAIV-Boxart.jpg/revision/latest/scale-to-width-down/972?cb=20260330025009", { fit: "contain" }),
  "lost-and-damned": gtaWikiImage("The Lost and Damned", "https://static.wikia.nocookie.net/gtawiki/images/b/bc/Tlad_boxart.JPG/revision/latest/scale-to-width-down/1095?cb=20110914153831", { fit: "contain" }),
  "chinatown-wars": gtaWikiImage("Grand Theft Auto: Chinatown Wars", "https://static.wikia.nocookie.net/gtawiki/images/7/7d/CoverArt-GTACW.png/revision/latest/scale-to-width-down/972?cb=20220311140351", { fit: "contain" }),
  "ballad-gay-tony": gtaWikiImage("The Ballad of Gay Tony", "https://static.wikia.nocookie.net/gtawiki/images/d/db/CoverArt-TBoGT.JPG/revision/latest?cb=20250907163031", { fit: "contain" }),
  "gta-v": gtaWikiImage("Grand Theft Auto V", "https://static.wikia.nocookie.net/gtawiki/images/7/76/CoverArt-GTAV.png/revision/latest/scale-to-width-down/972?cb=20250708181846", { fit: "contain" }),
  "gta-online": gtaWikiImage("Grand Theft Auto Online", "https://static.wikia.nocookie.net/gtawiki/images/6/65/GTAOnline-BoxArt.jpg/revision/latest/scale-to-width-down/972?cb=20260330025009", { fit: "contain" }),
  "trilogy-definitive": gtaWikiImage("Grand Theft Auto: The Trilogy - The Definitive Edition", "https://static.wikia.nocookie.net/gtawiki/images/2/26/GTATheTrilogy-TheDefinitiveEdition-MicrosoftStoreBoxArt.jpg/revision/latest?cb=20211026162226", { fit: "contain" }),
  "gta-vi": gtaWikiImage("Grand Theft Auto VI", "https://static.wikia.nocookie.net/gtawiki/images/1/15/StarfishIsland-GTAVI-ExtendedLook.jpeg/revision/latest/scale-to-width-down/1200?cb=20260828185720", { position: "center" })
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

const gtaWikiCharacterMediaById = {
  "claude": gtaWikiImage("Claude", "https://static.wikia.nocookie.net/gtawiki/images/3/34/Claude-GTA3.png/revision/latest?cb=20230412193939", { position: "center 18%" }),
  "tommy-vercetti": gtaWikiImage("Tommy Vercetti", "https://static.wikia.nocookie.net/gtawiki/images/a/ae/TommyVercetti-GTAVC.jpg/revision/latest?cb=20220618090315", { position: "center 18%" }),
  "cj": gtaWikiImage("Carl Johnson", "https://static.wikia.nocookie.net/gtawiki/images/7/70/CJ-GTASA.png/revision/latest?cb=20260330025009", { position: "center 16%" }),
  "mike": gtaWikiImage("Mike", "https://static.wikia.nocookie.net/gtawiki/images/a/a5/Mike-GTAA.jpg/revision/latest?cb=20230521021239"),
  "toni-cipriani": gtaWikiImage("Toni Cipriani", "https://static.wikia.nocookie.net/gtawiki/images/7/7c/ToniCipriani-GTALCS.png/revision/latest?cb=20230308121254"),
  "vic-vance": gtaWikiImage("Victor Vance", "https://static.wikia.nocookie.net/gtawiki/images/c/c4/VictorVance-GTAVCS.png/revision/latest?cb=20230419191046"),
  "niko-bellic": gtaWikiImage("Niko Bellic", "https://static.wikia.nocookie.net/gtawiki/images/9/9e/NikoBellic-GTAIV-Portrait.png/revision/latest?cb=20260212152128"),
  "johnny-klebitz": gtaWikiImage("Johnny Klebitz", "https://static.wikia.nocookie.net/gtawiki/images/2/29/JohnnyKlebitz-TLAD.jpg/revision/latest?cb=20260301101036", { position: "center 20%" }),
  "luis-lopez": gtaWikiImage("Luis Fernando Lopez", "https://static.wikia.nocookie.net/gtawiki/images/b/b4/LuisFernandoLopez-TBOGT.jpg/revision/latest?cb=20220806150957"),
  "huang-lee": gtaWikiImage("Huang Lee", "https://static.wikia.nocookie.net/gtawiki/images/8/84/HuangLee-GTACW.png/revision/latest?cb=20230616145140"),
  "michael-de-santa": gtaWikiImage("Michael De Santa", "https://static.wikia.nocookie.net/gtawiki/images/2/27/MichaelDeSanta-GTAOee-Portrait.png/revision/latest?cb=20251210124259"),
  "franklin-clinton": gtaWikiImage("Franklin Clinton", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/FranklinClinton-GTAOe-TheContract.png/revision/latest?cb=20260330025009"),
  "trevor-philips": gtaWikiImage("Trevor Philips", "https://static.wikia.nocookie.net/gtawiki/images/7/7d/TrevorPhilips-GTAVee.png/revision/latest?cb=20220318160709"),
  "lucia-caminos": gtaWikiImage("Lucia Caminos", "https://static.wikia.nocookie.net/gtawiki/images/2/2a/LuciaCaminos-GTAVI-Portrait.png/revision/latest?cb=20250506145927"),
  "jason-duval": gtaWikiImage("Jason Duval", "https://static.wikia.nocookie.net/gtawiki/images/d/de/JasonDuval-GTAVI-Portrait.png/revision/latest?cb=20250506145706"),
  "online-protagonist": gtaWikiImage("GTA Online Protagonist", "https://static.wikia.nocookie.net/gtawiki/images/d/d7/GTA_Online_mugshot_collage.PNG/revision/latest?cb=20260330025009"),
  "roman-bellic": gtaWikiImage("Roman Bellic", "https://static.wikia.nocookie.net/gtawiki/images/b/b8/RomanBellic-GTAIVpc.jpg/revision/latest?cb=20260224181845"),
  "little-jacob": gtaWikiImage("Little Jacob", "https://static.wikia.nocookie.net/gtawiki/images/5/5a/LittleJacob-GTAIV-Closeup.png/revision/latest?cb=20220807010027"),
  "brucie-kibbutz": gtaWikiImage("Brucie Kibbutz", "https://static.wikia.nocookie.net/gtawiki/images/9/9f/BrucieKibbutz-GTAO.png/revision/latest?cb=20190826165205"),
  "packie-mcreary": gtaWikiImage("Patrick McReary", "https://static.wikia.nocookie.net/gtawiki/images/d/de/PatrickMcReary-GTAO-2019Portrait.png/revision/latest?cb=20200619113007"),
  "kate-mcreary": gtaWikiImage("Kate McReary", "https://static.wikia.nocookie.net/gtawiki/images/7/76/KateMcReary-GTAIV.png/revision/latest?cb=20220311115802"),
  "mallorie-bardas": gtaWikiImage("Mallorie Bardas", "https://static.wikia.nocookie.net/gtawiki/images/5/5a/MallorieBardas-GTAIV.jpg/revision/latest?cb=20220807003948"),
  "lester-crest": gtaWikiImage("Lester Crest", "https://static.wikia.nocookie.net/gtawiki/images/0/0d/LesterCrest-GTAOe-2019Portrait.png/revision/latest?cb=20220726003738"),
  "lamar-davis": gtaWikiImage("Lamar Davis", "https://static.wikia.nocookie.net/gtawiki/images/6/61/LamarDavis-GTAOe-2021Portrait.png/revision/latest?cb=20240122033958"),
  "amanda-de-santa": gtaWikiImage("Amanda De Santa", "https://static.wikia.nocookie.net/gtawiki/images/f/fa/AmandaDeSanta-GTAV-TrailerScreenshot1.jpg/revision/latest?cb=20130527074801"),
  "jimmy-de-santa": gtaWikiImage("Jimmy De Santa", "https://static.wikia.nocookie.net/gtawiki/images/6/61/JimmyDeSanta-GTA5.png/revision/latest?cb=20210904182751"),
  "tracey-de-santa": gtaWikiImage("Tracey De Santa", "https://static.wikia.nocookie.net/gtawiki/images/d/d2/TraceyDeSanta-GTAVee.png/revision/latest?cb=20220322175113"),
  "dave-norton": gtaWikiImage("Dave Norton", "https://static.wikia.nocookie.net/gtawiki/images/a/af/DaveNorton-GTAVee.png/revision/latest?cb=20220322175028"),
  "steve-haines": gtaWikiImage("Steve Haines", "https://static.wikia.nocookie.net/gtawiki/images/2/22/SteveHaines-GTAVee.png/revision/latest?cb=20220319175004"),
  "devin-weston": gtaWikiImage("Devin Weston", "https://static.wikia.nocookie.net/gtawiki/images/e/e4/DevinWeston-GTAVee-DevinCloseup.jpg/revision/latest?cb=20221106183639"),
  "martin-madrazo": gtaWikiImage("Martin Madrazo", "https://static.wikia.nocookie.net/gtawiki/images/d/d9/MartinMadrazo-GTAOee-2025Portrait.png/revision/latest?cb=20250617103014"),
  "ron-jakowski": gtaWikiImage("Ron Jakowski", "https://static.wikia.nocookie.net/gtawiki/images/6/68/RonJakowski-GTAOe-2022Portrait.png/revision/latest?cb=20231108210259"),
  "wade-hebert": gtaWikiImage("Wade Hebert", "https://static.wikia.nocookie.net/gtawiki/images/5/53/WadeHebert-GTAV-Portrait.png/revision/latest?cb=20210903102957"),
  "ken-rosenberg": gtaWikiImage("Ken Rosenberg", "https://static.wikia.nocookie.net/gtawiki/images/8/8c/KenRosenberg-GTASA.jpg/revision/latest?cb=20230413175051"),
  "lance-vance": gtaWikiImage("Lance Vance", "https://static.wikia.nocookie.net/gtawiki/images/1/17/LanceVance-GTAVC.jpg/revision/latest?cb=20230414193543"),
  "sonny-forelli": gtaWikiImage("Sonny Forelli", "https://static.wikia.nocookie.net/gtawiki/images/a/a6/SonnyForelli-GTAVC.jpg/revision/latest?cb=20230421193125"),
  "ricardo-diaz": gtaWikiImage("Ricardo Diaz", "https://static.wikia.nocookie.net/gtawiki/images/5/51/RicardoDiaz-GTAVC.jpg/revision/latest?cb=20230419175205"),
  "colonel-cortez": gtaWikiImage("Juan Cortez", "https://static.wikia.nocookie.net/gtawiki/images/6/61/JuanCortez-GTAVC.jpg/revision/latest?cb=20230419174940"),
  "avery-carrington": gtaWikiImage("Avery Carrington", "https://static.wikia.nocookie.net/gtawiki/images/9/9d/AveryCarrington-GTALCS-PanlanticLandGrab.png/revision/latest?cb=20251206203121"),
  "kent-paul": gtaWikiImage("Kent Paul", "https://static.wikia.nocookie.net/gtawiki/images/7/70/KentPaul-GTASA.jpg/revision/latest?cb=20230413180138"),
  "salvatore-leone": gtaWikiImage("Salvatore Leone", "https://static.wikia.nocookie.net/gtawiki/images/7/79/SalvatoreLeone-GTAIII.jpg/revision/latest?cb=20230705124542"),
  "maria-latore": gtaWikiImage("Maria Latore", "https://static.wikia.nocookie.net/gtawiki/images/9/91/MariaLatore-GTAIII.jpg/revision/latest?cb=20230705120746"),
  "joey-leone": gtaWikiImage("Joey Leone", "https://static.wikia.nocookie.net/gtawiki/images/4/4a/JoeyLeone-GTAIII.jpg/revision/latest?cb=20230406174938"),
  "donald-love": gtaWikiImage("Donald Love", "https://static.wikia.nocookie.net/gtawiki/images/4/4a/DonaldLove-GTAIII.jpg/revision/latest?cb=20230426230204"),
  "catalina": gtaWikiImage("Catalina", "https://static.wikia.nocookie.net/gtawiki/images/5/59/Catalina-GTAIII.png/revision/latest?cb=20230619172126"),
  "miguel": gtaWikiImage("Miguel", "https://static.wikia.nocookie.net/gtawiki/images/e/ed/Miguel-GTAIII.jpg/revision/latest?cb=20230406175128"),
  "asuka-kasen": gtaWikiImage("Asuka Kasen", "https://static.wikia.nocookie.net/gtawiki/images/c/c9/AsukaKasen-GTAIII.png/revision/latest?cb=20230221103809"),
  "kenji-kasen": gtaWikiImage("Kenji Kasen", "https://static.wikia.nocookie.net/gtawiki/images/b/b5/KenjiKasen-GTAIII.png/revision/latest?cb=20230220083042"),
  "8-ball": gtaWikiImage("8-Ball", "https://static.wikia.nocookie.net/gtawiki/images/2/26/8-Ball-GTAIII.jpg/revision/latest?cb=20240518110305"),
  "big-smoke": gtaWikiImage("Big Smoke", "https://static.wikia.nocookie.net/gtawiki/images/b/bd/BigSmoke-GTASA.jpg/revision/latest?cb=20230629061252"),
  "ryder": gtaWikiImage("Ryder", "https://static.wikia.nocookie.net/gtawiki/images/3/3d/LanceWilson-GTASA.png/revision/latest?cb=20230429151823"),
  "sweet-johnson": gtaWikiImage("Sweet Johnson", "https://static.wikia.nocookie.net/gtawiki/images/5/5a/SeanJohnson-GTASA.png/revision/latest?cb=20230429163004"),
  "kendl-johnson": gtaWikiImage("Kendl Johnson", "https://static.wikia.nocookie.net/gtawiki/images/6/6c/KendlJohnson-GTASA.png/revision/latest?cb=20230705085014"),
  "cesar-vialpando": gtaWikiImage("Cesar Vialpando", "https://static.wikia.nocookie.net/gtawiki/images/d/d0/CesarVialpando-GTASA.jpg/revision/latest?cb=20230705085102"),
  "woozie": gtaWikiImage("Wu Zi Mu", "https://static.wikia.nocookie.net/gtawiki/images/4/47/Woozie-GTASA-HD.jpg/revision/latest?cb=20230622010848"),
  "mike-toreno": gtaWikiImage("Mike Toreno", "https://static.wikia.nocookie.net/gtawiki/images/d/d1/MikeToreno-GTASA.jpg/revision/latest?cb=20230630072110"),
  "the-truth": gtaWikiImage("The Truth", "https://static.wikia.nocookie.net/gtawiki/images/5/52/TheTruth-GTASA-HD.jpg/revision/latest?cb=20230426103809"),
  "frank-tenpenny": gtaWikiImage("Frank Tenpenny", "https://static.wikia.nocookie.net/gtawiki/images/e/ed/FrankTenpenny-GTASA.png/revision/latest?cb=20230629093953"),
  "eddie-pulaski": gtaWikiImage("Eddie Pulaski", "https://static.wikia.nocookie.net/gtawiki/images/8/8c/EddiePulaski-GTASA.jpg/revision/latest?cb=20230629094034"),
  "jimmy-hernandez": gtaWikiImage("Jimmy Hernandez", "https://static.wikia.nocookie.net/gtawiki/images/f/fb/JimmyHernandez-GTASA.jpg/revision/latest?cb=20230426103351"),
  "madd-dogg": gtaWikiImage("Madd Dogg (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/9/96/MaddDogg-GTASA.jpg/revision/latest?cb=20230622010837"),
  "zero": gtaWikiImage("Zero", "https://static.wikia.nocookie.net/gtawiki/images/4/4c/Zero-GTASA-HD.jpg/revision/latest?cb=20230701183431"),
  "jizzy-b": gtaWikiImage("Jizzy B.", "https://static.wikia.nocookie.net/gtawiki/images/7/7b/JizzyB-GTASA.png/revision/latest?cb=20230630072150"),
  "t-bone-mendez": gtaWikiImage("T-Bone Mendez", "https://static.wikia.nocookie.net/gtawiki/images/d/d8/T-BoneMendez-GTASA.jpg/revision/latest?cb=20230630072032"),
  "og-loc": gtaWikiImage("OG Loc (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/02/OGLoc-GTASA.png/revision/latest?cb=20230630161100"),
  "johnny-sindacco": gtaWikiImage("Johnny Sindacco", "https://static.wikia.nocookie.net/gtawiki/images/d/d4/JohnnySindacco-GTASA.png/revision/latest?cb=20230705121700"),
  "billy-grey": gtaWikiImage("Billy Grey", "https://static.wikia.nocookie.net/gtawiki/images/c/c9/BillyGrey-TLAD.png/revision/latest?cb=20220807034343"),
  "ashley-butler": gtaWikiImage("Ashley Butler", "https://static.wikia.nocookie.net/gtawiki/images/4/47/AshleyButler-TLAD.png/revision/latest?cb=20220621025145"),
  "tony-prince": gtaWikiImage("Tony Prince", "https://static.wikia.nocookie.net/gtawiki/images/a/a3/TonyPrince-GTAO-AfterHoursTrailer.png/revision/latest?cb=20180719212937"),
  "yusuf-amir": gtaWikiImage("Yusuf Amir", "https://static.wikia.nocookie.net/gtawiki/images/8/8e/YusufAmir-GTAOe-Portrait.png/revision/latest?cb=20231212102317"),
  "mori-kibbutz": gtaWikiImage("Mori Kibbutz", "https://static.wikia.nocookie.net/gtawiki/images/5/5a/MoriKibbutz-TBOGT.png/revision/latest?cb=20220325174322"),
  "ray-bulgarin": gtaWikiImage("Ray Bulgarin", "https://static.wikia.nocookie.net/gtawiki/images/7/7a/RayBulgarin-TBOGT.png/revision/latest?cb=20220807032945"),
  "kenny-lee": gtaWikiImage("Wu Lee", "https://static.wikia.nocookie.net/gtawiki/images/b/b9/WuKennyLee-GTACW.png/revision/latest?cb=20211031095545"),
  "hsin-jaoming": gtaWikiImage("Hsin Jaoming", "https://static.wikia.nocookie.net/gtawiki/images/9/98/HsinJaoming-GTACW.png/revision/latest?cb=20211117085217"),
  "wade-heston": gtaWikiImage("Wade Heston", "https://static.wikia.nocookie.net/gtawiki/images/6/60/WadeHeston-GTACW.png/revision/latest?cb=20211102171813")
};

const gtaWikiCityMediaById = {
  "liberty-city": gtaWikiImage("Liberty City (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/8/8e/LibertyCity-GTAIV-Montage.jpg/revision/latest?cb=20181026175903"),
  "vice-city": gtaWikiImage("Vice City (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/2/26/ViceCity-GTAVI-Montage.jpg/revision/latest?cb=20250509052851"),
  "san-andreas": gtaWikiImage("State of San Andreas (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/2/28/SanAndreas-GTASA-Montage.png/revision/latest?cb=20240509054256"),
  "los-santos": gtaWikiImage("Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/4/48/LosSantos-GTAV-Map.jpg/revision/latest?cb=20210901121031"),
  "san-fierro": gtaWikiImage("San Fierro (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/8/82/SanFierro-GTASA-MapFull-CityLimits.png/revision/latest?cb=20220223065710"),
  "las-venturas": gtaWikiImage("Las Venturas (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/5/52/LasVenturas-GTASA-MapFull-CityLimits.png/revision/latest?cb=20220223065707"),
  "blaine-county": gtaWikiImage("Blaine County", "https://static.wikia.nocookie.net/gtawiki/images/5/56/BlaineCounty-GTAV-Map.jpg/revision/latest?cb=20210901121106"),
  "north-yankton": gtaWikiImage("State of North Yankton", "https://static.wikia.nocookie.net/gtawiki/images/a/a5/StateofNorthYankton-GTAOe-GTAVe-Montage.jpg/revision/latest?cb=20241014000923"),
  "anywhere-city": gtaWikiImage("Anywhere City", "https://static.wikia.nocookie.net/gtawiki/images/b/ba/DowntownDistrict-GTA2-MapPC.png/revision/latest?cb=20191221060617"),
  "london": gtaWikiImage("London", "https://static.wikia.nocookie.net/gtawiki/images/0/0c/London-GTAL69-Montage.png/revision/latest?cb=20221029115443"),
  "leonida": gtaWikiImage("State of Leonida", "https://static.wikia.nocookie.net/gtawiki/images/8/89/LeonidaStateFlag-GTAVI-RockstarWebsiteCinematic.png/revision/latest?cb=20250506203041")
};

const curatedCityMediaById = {
  "liberty-city": gtaWikiCityMediaById["liberty-city"],
  "vice-city": officialMediaByCityId["vice-city"],
  "san-andreas": gtaWikiCityMediaById["san-andreas"],
  "los-santos": officialMediaByCityId["los-santos"],
  "san-fierro": officialMediaByCityId["san-fierro"],
  "las-venturas": officialMediaByCityId["las-venturas"],
  "blaine-county": officialMediaByCityId["blaine-county"],
  "north-yankton": gtaWikiCityMediaById["north-yankton"],
  "anywhere-city": gtaWikiCityMediaById["anywhere-city"],
  "london": gtaWikiCityMediaById["london"],
  "leonida": officialMediaByCityId["leonida"]
};

const cityGalleryMediaById = {
  "liberty-city": [
    gtaWikiCityMediaById["liberty-city"],
    gtaWikiImage("Algonquin", "https://static.wikia.nocookie.net/gtawiki/images/0/09/Algonquin-GTAIV-Montage.jpg/revision/latest/scale-to-width-down/853?cb=20181115153946"),
    gtaWikiImage("Broker", "https://static.wikia.nocookie.net/gtawiki/images/e/e0/Broker-GTAIV-Montage.png/revision/latest/scale-to-width-down/853?cb=20240424132848"),
    gtaWikiImage("Portland", "https://static.wikia.nocookie.net/gtawiki/images/4/47/Portland-GTAIII-Montage.png/revision/latest/scale-to-width-down/853?cb=20210917042933"),
    gtaWikiImage("Staunton Island", "https://static.wikia.nocookie.net/gtawiki/images/5/51/StauntonIsland-GTAIII-Montage.png/revision/latest/scale-to-width-down/853?cb=20210917045046"),
    gtaWikiImage("Shoreside Vale", "https://static.wikia.nocookie.net/gtawiki/images/6/6e/ShoresideVale-GTAIII-Montage.png/revision/latest/scale-to-width-down/853?cb=20210917043718")
  ],
  "vice-city": [
    officialMediaByCityId["vice-city"],
    gtaWikiCityMediaById["vice-city"],
    gtaWikiImage("Vice City (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/7/76/ViceCity-GTAVC-Montage.png/revision/latest/scale-to-width-down/853?cb=20240406230242"),
    gtaWikiImage("Vice City Beach", "https://static.wikia.nocookie.net/gtawiki/images/8/8c/ViceCityBeach-GTAVC-Montage.jpg/revision/latest/scale-to-width-down/853?cb=20240406231330"),
    gtaWikiImage("Starfish Island", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/StarfishIsland-GTAVC.png/revision/latest/scale-to-width-down/1200?cb=20190202220220"),
    gtaWikiImage("Vice Point", "https://static.wikia.nocookie.net/gtawiki/images/4/4f/VicePoint-GTAVC.png/revision/latest/scale-to-width-down/1200?cb=20190202220220")
  ],
  "san-andreas": [
    gtaWikiCityMediaById["san-andreas"],
    gtaWikiCityMediaById["san-fierro"],
    gtaWikiCityMediaById["las-venturas"],
    officialMediaByCityId["san-andreas"]
  ],
  "los-santos": [
    officialMediaByCityId["los-santos"],
    gtaWikiCityMediaById["los-santos"],
    gtaWikiImage("South Los Santos", "https://static.wikia.nocookie.net/gtawiki/images/3/31/SouthLosSantos-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200203184747"),
    gtaWikiImage("Vespucci Beach", "https://static.wikia.nocookie.net/gtawiki/images/6/64/VespucciBeach-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200206195727"),
    gtaWikiImage("Rockford Hills", "https://static.wikia.nocookie.net/gtawiki/images/f/f0/RockfordHills-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200202164035")
  ],
  "san-fierro": [
    gtaWikiCityMediaById["san-fierro"],
    officialMediaByCityId["san-fierro"],
    gtaWikiCityMediaById["san-andreas"]
  ],
  "las-venturas": [
    gtaWikiCityMediaById["las-venturas"],
    officialMediaByCityId["las-venturas"],
    gtaWikiCityMediaById["san-andreas"]
  ],
  "blaine-county": [
    gtaWikiCityMediaById["blaine-county"],
    gtaWikiImage("Sandy Shores", "https://static.wikia.nocookie.net/gtawiki/images/0/07/SandyShores-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200331055042"),
    gtaWikiImage("Paleto Bay", "https://static.wikia.nocookie.net/gtawiki/images/3/3a/PaletoBay-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200303172609"),
    gtaWikiImage("Alamo Sea", "https://static.wikia.nocookie.net/gtawiki/images/1/13/AlamoSea-GTAV-West.png/revision/latest/scale-to-width-down/1200?cb=20201118181624"),
    gtaWikiImage("Mount Chiliad (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/4/42/MountChiliad-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200301225029"),
    gtaWikiImage("Fort Zancudo", "https://static.wikia.nocookie.net/gtawiki/images/7/71/FortZancudo-GTAV-IngameGPS-Map.png/revision/latest/scale-to-width-down/1200?cb=20200303172858")
  ],
  "north-yankton": [
    gtaWikiCityMediaById["north-yankton"],
    gtaWikiImage("Ludendorff", "https://static.wikia.nocookie.net/gtawiki/images/f/f4/Ludendorff-GTAV-SnapmaticPrintMap.png/revision/latest/scale-to-width-down/1200?cb=20220424081947"),
    officialMediaByCityId["north-yankton"]
  ],
  "anywhere-city": [
    gtaWikiImage("Downtown District", "https://static.wikia.nocookie.net/gtawiki/images/0/08/DowntownDistrict-GTA2-Montage.png/revision/latest/scale-to-width-down/912?cb=20221012145235"),
    gtaWikiCityMediaById["anywhere-city"],
    gtaWikiImage("Residential District", "https://static.wikia.nocookie.net/gtawiki/images/9/90/ResidentialDistrict-GTA2-MapPC.png/revision/latest?cb=20191221060619"),
    gtaWikiImage("Industrial District", "https://static.wikia.nocookie.net/gtawiki/images/5/59/IndustrialDistrict-GTA2-MapPC.png/revision/latest?cb=20191221060618")
  ],
  "london": [
    gtaWikiCityMediaById["london"],
    gtaWikiGameMediaById["london-1969"],
    gtaWikiGameMediaById["london-1961"]
  ],
  "leonida": [
    officialMediaByCityId["leonida"],
    gtaWikiCityMediaById["leonida"],
    gtaWikiImage("Leonida Keys", "https://static.wikia.nocookie.net/gtawiki/images/5/59/LeonidaKeys-GTAVI-CroppedPostcard.png/revision/latest/scale-to-width-down/1200?cb=20250507043056"),
    gtaWikiImage("Port Gellhorn", "https://static.wikia.nocookie.net/gtawiki/images/9/9f/PortGellhorn-GTAVI-CroppedPostcard.png/revision/latest/scale-to-width-down/1200?cb=20250507043050"),
    gtaWikiCityMediaById["vice-city"]
  ]
};

const cityUniverseGalleryMediaById = {
  "2d": {
    "liberty-city": [
      gtaWikiImage("Liberty City (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/2/28/LibertyCity-GTA1-Map-LCOnly.jpg/revision/latest?cb=20230128050359"),
      gtaWikiGameMediaById["gta-1"]
    ],
    "vice-city": [
      gtaWikiImage("Vice City (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/2/23/ViceCity-GTA1-Montage.png/revision/latest?cb=20220906004340"),
      gtaWikiGameMediaById["gta-1"]
    ],
    "san-andreas": [
      gtaWikiImage("San Andreas (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/0a/SanAndreas-GTA1-Montage.png/revision/latest?cb=20220906004337"),
      gtaWikiGameMediaById["gta-1"]
    ],
    "anywhere-city": [
      gtaWikiImage("Downtown District (GTA 2)", "https://static.wikia.nocookie.net/gtawiki/images/0/08/DowntownDistrict-GTA2-Montage.png/revision/latest/scale-to-width-down/912?cb=20221012145235"),
      gtaWikiCityMediaById["anywhere-city"],
      gtaWikiImage("Residential District (GTA 2)", "https://static.wikia.nocookie.net/gtawiki/images/9/90/ResidentialDistrict-GTA2-MapPC.png/revision/latest?cb=20191221060619")
    ],
    "london": [
      gtaWikiCityMediaById["london"],
      gtaWikiGameMediaById["london-1969"],
      gtaWikiGameMediaById["london-1961"]
    ]
  },
  "3d": {
    "liberty-city": [
      gtaWikiImage("Portland (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/4/47/Portland-GTAIII-Montage.png/revision/latest/scale-to-width-down/853?cb=20210917042933"),
      gtaWikiImage("Staunton Island (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/5/51/StauntonIsland-GTAIII-Montage.png/revision/latest/scale-to-width-down/853?cb=20210917045046"),
      gtaWikiImage("Shoreside Vale (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/6/6e/ShoresideVale-GTAIII-Montage.png/revision/latest/scale-to-width-down/853?cb=20210917043718"),
      gtaWikiGameMediaById["liberty-city-stories"]
    ],
    "vice-city": [
      gtaWikiImage("Vice City (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/7/76/ViceCity-GTAVC-Montage.png/revision/latest/scale-to-width-down/853?cb=20240406230242"),
      gtaWikiImage("Vice City Beach (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/8/8c/ViceCityBeach-GTAVC-Montage.jpg/revision/latest/scale-to-width-down/853?cb=20240406231330"),
      gtaWikiImage("Starfish Island (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/StarfishIsland-GTAVC.png/revision/latest/scale-to-width-down/1200?cb=20190202220220"),
      gtaWikiImage("Vice Point (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/4/4f/VicePoint-GTAVC.png/revision/latest/scale-to-width-down/1200?cb=20190202220220")
    ],
    "san-andreas": [
      gtaWikiCityMediaById["san-andreas"],
      gtaWikiImage("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/1/10/LosSantos-GTASA-MapFull-CityLimits.png/revision/latest?cb=20220223065712"),
      gtaWikiCityMediaById["san-fierro"],
      gtaWikiCityMediaById["las-venturas"],
      officialMediaByCityId["san-andreas"]
    ],
    "los-santos": [
      gtaWikiImage("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/1/10/LosSantos-GTASA-MapFull-CityLimits.png/revision/latest?cb=20220223065712"),
      officialMediaByCityId["san-andreas"]
    ],
    "san-fierro": [
      gtaWikiCityMediaById["san-fierro"],
      officialMediaByCityId["san-fierro"]
    ],
    "las-venturas": [
      gtaWikiCityMediaById["las-venturas"],
      officialMediaByCityId["las-venturas"]
    ]
  },
  "hd": {
    "liberty-city": [
      gtaWikiCityMediaById["liberty-city"],
      gtaWikiImage("Algonquin (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/09/Algonquin-GTAIV-Montage.jpg/revision/latest/scale-to-width-down/853?cb=20181115153946"),
      gtaWikiImage("Broker (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/e/e0/Broker-GTAIV-Montage.png/revision/latest/scale-to-width-down/853?cb=20240424132848"),
      officialMediaByCityId["liberty-city"]
    ],
    "vice-city": [
      officialMediaByCityId["vice-city"],
      gtaWikiCityMediaById["vice-city"],
      gtaWikiImage("Vice City (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/2/26/ViceCity-GTAVI-Montage.jpg/revision/latest/scale-to-width-down/1200?cb=20250509052851")
    ],
    "san-andreas": [
      officialMediaByCityId["los-santos"],
      officialMediaByCityId["blaine-county"],
      gtaWikiCityMediaById["los-santos"],
      gtaWikiCityMediaById["blaine-county"]
    ],
    "los-santos": [
      officialMediaByCityId["los-santos"],
      gtaWikiCityMediaById["los-santos"],
      gtaWikiImage("South Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/3/31/SouthLosSantos-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200203184747"),
      gtaWikiImage("Vespucci Beach (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/6/64/VespucciBeach-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200206195727"),
      gtaWikiImage("Rockford Hills (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/f/f0/RockfordHills-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200202164035")
    ],
    "blaine-county": [
      gtaWikiCityMediaById["blaine-county"],
      gtaWikiImage("Sandy Shores (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/07/SandyShores-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200331055042"),
      gtaWikiImage("Paleto Bay (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/3/3a/PaletoBay-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200303172609"),
      gtaWikiImage("Alamo Sea (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/1/13/AlamoSea-GTAV-West.png/revision/latest/scale-to-width-down/1200?cb=20201118181624"),
      officialMediaByCityId["blaine-county"]
    ],
    "north-yankton": [
      gtaWikiCityMediaById["north-yankton"],
      gtaWikiImage("Ludendorff", "https://static.wikia.nocookie.net/gtawiki/images/f/f4/Ludendorff-GTAV-SnapmaticPrintMap.png/revision/latest/scale-to-width-down/1200?cb=20220424081947"),
      officialMediaByCityId["north-yankton"]
    ],
    "leonida": [
      officialMediaByCityId["leonida"],
      gtaWikiCityMediaById["leonida"],
      gtaWikiImage("Leonida Keys", "https://static.wikia.nocookie.net/gtawiki/images/5/59/LeonidaKeys-GTAVI-CroppedPostcard.png/revision/latest/scale-to-width-down/1200?cb=20250507043056"),
      gtaWikiImage("Port Gellhorn", "https://static.wikia.nocookie.net/gtawiki/images/9/9f/PortGellhorn-GTAVI-CroppedPostcard.png/revision/latest/scale-to-width-down/1200?cb=20250507043050"),
      gtaWikiCityMediaById["vice-city"]
    ]
  }
};

const cityPhoto = (page, src, label, options = {}) => gtaWikiImage(page, src, {
  alt: `Screenshot de ${label || page}`,
  caption: `GTA Wiki - ${label || page}`,
  ...options
});

const refinedCityUniverseGalleryMediaById = {
  "2d": {
    "liberty-city": [
      cityPhoto("Liberty City (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/05/LibertyCity-GTA1-GBC.png/revision/latest?cb=20220107215835", "Liberty City 2D"),
      cityPhoto("Liberty City (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/5/5b/LibertyCityandNewGuernsey-GTA1-GBC.png/revision/latest?cb=20220107215837", "Liberty City e New Guernsey 2D"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/8/89/Screenshots-GTA-ElectronicPressKit-LC2.png/revision/latest?cb=20241120235445", "Liberty City screenshot 1"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/f/f0/Screenshots-GTA-ElectronicPressKit-LC5.png/revision/latest?cb=20241120235447", "Liberty City screenshot 2"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/4/4b/Screenshots-GTA-ElectronicPressKit-LC8.png/revision/latest?cb=20241120235448", "Liberty City screenshot 3"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/8/8f/Screenshots-GTA-ElectronicPressKit-Garage-NEWYORK.png/revision/latest?cb=20241120235811", "Liberty City garage"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/b/b4/Screenshots-GTA-ElectronicPressKit-GTA19.png/revision/latest?cb=20241120235635", "Liberty City street action")
    ],
    "vice-city": [
      cityPhoto("Vice City (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/9/91/ViceCity-GTA1-GBC.png/revision/latest?cb=20220107214002", "Vice City 2D"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/8/8d/Screenshots-GTA-ElectronicPressKit-VC1.png/revision/latest?cb=20241120235628", "Vice City screenshot 1"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/d/d9/Screenshots-GTA-ElectronicPressKit-VC2.png/revision/latest?cb=20241120235427", "Vice City screenshot 2"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/8/84/Screenshots-GTA-ElectronicPressKit-VC5.png/revision/latest?cb=20241120235429", "Vice City screenshot 3"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/7/78/Screenshots-GTA-ElectronicPressKit-VC6.png/revision/latest?cb=20241120235430", "Vice City screenshot 4"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/5/57/Screenshots-GTA-ElectronicPressKit-VC7.png/revision/latest?cb=20241120235431", "Vice City screenshot 5"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/d/de/Screenshots-GTA-ElectronicPressKit-Garage-MIAMI.png/revision/latest?cb=20241120235810", "Vice City garage")
    ],
    "san-andreas": [
      cityPhoto("San Andreas (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/07/SanAndreasCity-GTA1-GBC.png/revision/latest?cb=20220107213939", "San Andreas 2D"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/7/7d/Screenshots-GTA-ElectronicPressKit-SA1.png/revision/latest?cb=20241120235449", "San Andreas screenshot 1"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/f/f9/Screenshots-GTA-ElectronicPressKit-SA2.png/revision/latest?cb=20241120235450", "San Andreas screenshot 2"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/a/a2/Screenshots-GTA-ElectronicPressKit-SA4.png/revision/latest?cb=20241120235452", "San Andreas screenshot 3"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/7/71/Screenshots-GTA-ElectronicPressKit-SA5.png/revision/latest?cb=20241120235620", "San Andreas screenshot 4"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/5/51/Screenshots-GTA-ElectronicPressKit-SA6.png/revision/latest?cb=20241120235621", "San Andreas screenshot 5"),
      cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/b/b0/Screenshots-GTA-ElectronicPressKit-Garage-SANFRAN.png/revision/latest?cb=20241120235813", "San Andreas garage")
    ],
    "anywhere-city": [
      cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/0/01/Screenshots-GTA2-AdrenalineVault-SS1.jpg/revision/latest?cb=20241114185945", "Anywhere City gameplay 1"),
      cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/3/33/Screenshots-GTA2-AdrenalineVault-SS2.jpg/revision/latest?cb=20241114185946", "Anywhere City gameplay 2"),
      cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/9/9f/Screenshots-GTA2-AdrenalineVault-SS3.jpg/revision/latest?cb=20241114185947", "Anywhere City gameplay 3"),
      cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/0/08/Screenshots-GTA2-AdrenalineVault-SS4.jpg/revision/latest?cb=20241114185948", "Anywhere City gameplay 4"),
      cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/f/fa/Screenshots-GTA2-AdrenalineVault-SS5.jpg/revision/latest?cb=20241114185949", "Anywhere City gameplay 5"),
      cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/2/2e/Screenshots-GTA2-AdrenalineVault-SS6.jpg/revision/latest?cb=20241114185950", "Anywhere City gameplay 6"),
      cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/d/dd/Screenshots-GTA2-IGN-PC-SS1.jpg/revision/latest?cb=20241114190135", "Anywhere City gameplay 7"),
      cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/c/c3/Screenshots-GTA2-IGN-PC-SS10.jpg/revision/latest?cb=20241114190143", "Anywhere City gameplay 8"),
      cityPhoto("Anywhere City", "https://static.wikia.nocookie.net/gtawiki/images/1/16/AnywhereCity-GTA2-StartingPoint.jpg/revision/latest?cb=20111201183824", "Anywhere City starting point")
    ],
    "london": [
      cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/7/73/BatterseaPark-GTAL69-DebugCamera.png/revision/latest?cb=20221103233912", "Battersea Park"),
      cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/b/b5/BatterseaPowerStation-GTAL69-DebugCamera.png/revision/latest?cb=20221103233913", "Battersea Power Station"),
      cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/1/1a/BuckinghamPalace-GTAL69-DebugCamera.png/revision/latest?cb=20221103233915", "Buckingham Palace"),
      cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/3/3b/NationalGallery-GTAL69-DebugCamera.png/revision/latest?cb=20221103233918", "National Gallery"),
      cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/0/08/PalaceofWestminster-GTAL69-DebugCamera.png/revision/latest?cb=20221103233919", "Palace of Westminster"),
      cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/4/49/PiccadillyCircus-GTAL69-DebugCamera.png/revision/latest?cb=20221103233921", "Piccadilly Circus"),
      cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/2/2a/TowerBridge-GTAL69-DebugCamera.png/revision/latest?cb=20221103233924", "Tower Bridge"),
      cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/f/f4/TowerofLondon-GTAL69-DebugCamera.png/revision/latest?cb=20221103233926", "Tower of London"),
      cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/4/49/TrafalgarSquare-GTAL69-DebugCamera.png/revision/latest?cb=20221103233927", "Trafalgar Square"),
      cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/f/f4/WestminsterAbbey-GTAL69-DebugCamera.png/revision/latest?cb=20221103233928", "Westminster Abbey")
    ]
  },
  "3d": {
    "liberty-city": [
      cityPhoto("Portland", "https://static.wikia.nocookie.net/gtawiki/images/2/2f/AtlanticQuays-GTA3-panorama.jpg/revision/latest?cb=20100117170918", "Atlantic Quays"),
      cityPhoto("Portland", "https://static.wikia.nocookie.net/gtawiki/images/b/b7/Chinatown-GTA3-westarch.jpg/revision/latest?cb=20100116133322", "Chinatown em Portland"),
      cityPhoto("Portland", "https://static.wikia.nocookie.net/gtawiki/images/5/5d/PortlandHarbor-GTA3-northeastwards.jpg/revision/latest?cb=20100201201708", "Portland Harbor"),
      cityPhoto("Portland", "https://static.wikia.nocookie.net/gtawiki/images/1/14/PortlandView-GTA3-northwards.jpg/revision/latest?cb=20100212054337", "Vista de Portland"),
      cityPhoto("Portland", "https://static.wikia.nocookie.net/gtawiki/images/c/c9/RedLightDistrict-GTA3-northwards.jpg/revision/latest?cb=20091121184836", "Red Light District"),
      cityPhoto("Staunton Island", "https://static.wikia.nocookie.net/gtawiki/images/a/a0/BedfordPoint-GTA3-TimesSquarespoof.jpg/revision/latest?cb=20091107184558", "Bedford Point"),
      cityPhoto("Shoreside Vale", "https://static.wikia.nocookie.net/gtawiki/images/5/52/CedarGrove-GTA3-eastwards.jpg/revision/latest?cb=20100116124418", "Cedar Grove"),
      cityPhoto("Francis International Airport", "https://static.wikia.nocookie.net/gtawiki/images/1/1f/FrancisInternationalAirport-GTA3-mainterminal.jpg/revision/latest?cb=20091107183441", "Francis International Airport"),
      cityPhoto("Cochrane Dam", "https://static.wikia.nocookie.net/gtawiki/images/3/36/GTA_3_Cochrane_Dam.png/revision/latest?cb=20170420215249", "Cochrane Dam"),
      cityPhoto("Shoreside Vale", "https://static.wikia.nocookie.net/gtawiki/images/7/75/WichitaGardens-GTA3-southwestwards.jpg/revision/latest?cb=20091111104537", "Wichita Gardens")
    ],
    "vice-city": [
      cityPhoto("Vice City (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/d/d7/ViceCity-GTAVC-OfficialRockstarHighResDownload.png/revision/latest?cb=20190325215432", "Vice City skyline"),
      cityPhoto("Ocean Drive", "https://static.wikia.nocookie.net/gtawiki/images/e/ee/OceanDrive-GTAVC.png/revision/latest?cb=20190120113556", "Ocean Drive"),
      cityPhoto("Vice Point", "https://static.wikia.nocookie.net/gtawiki/images/6/63/VicePoint-GTAVC-northwards.jpg/revision/latest?cb=20091126151624", "Vice Point"),
      cityPhoto("Starfish Island", "https://static.wikia.nocookie.net/gtawiki/images/1/1b/StarfishIsland-GTAVC-AerialView.jpg/revision/latest?cb=20100914052419", "Starfish Island"),
      cityPhoto("Hyman Memorial Stadium", "https://static.wikia.nocookie.net/gtawiki/images/8/89/HymanMemorialStadium-GTAVC-exterior.jpg/revision/latest?cb=20241224202640", "Hyman Memorial Stadium"),
      cityPhoto("Lighthouse", "https://static.wikia.nocookie.net/gtawiki/images/6/67/Lighthouse-GTAVC-1.png/revision/latest?cb=20181013140010", "Vice City Lighthouse"),
      cityPhoto("Links Bridge", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/LinksBridge-GTAVC.png/revision/latest?cb=20250116200903", "Links Bridge"),
      cityPhoto("Washington Beach", "https://static.wikia.nocookie.net/gtawiki/images/3/37/Chunder_Wheel_2.jpg/revision/latest?cb=20080510170345", "Chunder Wheel"),
      cityPhoto("Fort Baxter Air Base", "https://static.wikia.nocookie.net/gtawiki/images/f/f9/FortBaxterAirBase-GTAVC.jpg/revision/latest?cb=20190630120644", "Fort Baxter Air Base")
    ],
    "san-andreas": [
      cityPhoto("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/2/23/LosSantos-GTASA-Panorama.jpg/revision/latest?cb=20140429054320", "Los Santos panorama"),
      cityPhoto("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/c/cc/DowntownLosSantos-GTASA-Overview.jpg/revision/latest?cb=20250111002406", "Downtown Los Santos"),
      cityPhoto("Grove Street", "https://static.wikia.nocookie.net/gtawiki/images/9/99/GroveStreet-GTASA.jpg/revision/latest?cb=20070510101844", "Grove Street"),
      cityPhoto("San Fierro (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/4/4e/SanFierro-GTASA-SeenFromMissionaryHill.jpg/revision/latest?cb=20240224234522", "San Fierro from Missionary Hill"),
      cityPhoto("Gant Bridge", "https://static.wikia.nocookie.net/gtawiki/images/c/cc/GantBridge-GTASA-Sunrise.jpg/revision/latest?cb=20240224233811", "Gant Bridge"),
      cityPhoto("The Strip", "https://static.wikia.nocookie.net/gtawiki/images/3/38/TheStrip-GTASA-Night.jpg/revision/latest?cb=20070409143559", "The Strip"),
      cityPhoto("Las Venturas Airport", "https://static.wikia.nocookie.net/gtawiki/images/f/f8/LasVenturasAirport-GTASA.png/revision/latest?cb=20190607210325", "Las Venturas Airport"),
      cityPhoto("Los Santos International Airport", "https://static.wikia.nocookie.net/gtawiki/images/1/1f/LosSantosInternationalAirport-GTASA.png/revision/latest?cb=20230830040354", "Los Santos International Airport"),
      cityPhoto("Ocean Docks", "https://static.wikia.nocookie.net/gtawiki/images/5/55/OceanDocks-GTASA-northwards.jpg/revision/latest?cb=20100426073200", "Ocean Docks"),
      cityPhoto("Las Venturas Welcome Sign", "https://static.wikia.nocookie.net/gtawiki/images/c/cf/LasVenturasWelcomeSign-GTASA-Night.jpg/revision/latest?cb=20240316100431", "Las Venturas Welcome Sign")
    ],
    "los-santos": [
      cityPhoto("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/2/23/LosSantos-GTASA-Panorama.jpg/revision/latest?cb=20140429054320", "Los Santos panorama"),
      cityPhoto("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/c/cc/DowntownLosSantos-GTASA-Overview.jpg/revision/latest?cb=20250111002406", "Downtown Los Santos"),
      cityPhoto("Grove Street", "https://static.wikia.nocookie.net/gtawiki/images/9/99/GroveStreet-GTASA.jpg/revision/latest?cb=20070510101844", "Grove Street"),
      cityPhoto("Ganton", "https://static.wikia.nocookie.net/gtawiki/images/c/cd/Ganton-GTASA-GroveStreet.png/revision/latest?cb=20190304192346", "Ganton"),
      cityPhoto("Idlewood", "https://static.wikia.nocookie.net/gtawiki/images/9/9c/Idlewood-GTASA.png/revision/latest?cb=20190304192347", "Idlewood"),
      cityPhoto("Mulholland", "https://static.wikia.nocookie.net/gtawiki/images/c/cd/Mulholland-GTASA-VinewoodSign.jpg/revision/latest?cb=20100115051930", "Vinewood Sign"),
      cityPhoto("Ocean Docks", "https://static.wikia.nocookie.net/gtawiki/images/5/55/OceanDocks-GTASA-northwards.jpg/revision/latest?cb=20100426073200", "Ocean Docks"),
      cityPhoto("Los Santos International Airport", "https://static.wikia.nocookie.net/gtawiki/images/1/1f/LosSantosInternationalAirport-GTASA.png/revision/latest?cb=20230830040354", "Los Santos International Airport"),
      cityPhoto("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/a/ad/LosSantos-GTASA-NightView.jpg/revision/latest?cb=20111103014605", "Los Santos night view"),
      cityPhoto("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/5/5c/LosSantos-GTASA-Sunrise.jpg/revision/latest?cb=20111103014819", "Los Santos sunrise")
    ],
    "san-fierro": [
      cityPhoto("San Fierro (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/4/4e/SanFierro-GTASA-SeenFromMissionaryHill.jpg/revision/latest?cb=20240224234522", "San Fierro from Missionary Hill"),
      cityPhoto("San Fierro (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/c/c9/SanFierro-GTASA-SeenFromTierraRobada.jpg/revision/latest?cb=20240224233619", "San Fierro from Tierra Robada"),
      cityPhoto("Chinatown (GTA San Andreas)", "https://static.wikia.nocookie.net/gtawiki/images/7/7b/Chinatown-GTASA-Archway.jpg/revision/latest?cb=20240224233923", "Chinatown archway"),
      cityPhoto("Gant Bridge", "https://static.wikia.nocookie.net/gtawiki/images/c/cc/GantBridge-GTASA-Sunrise.jpg/revision/latest?cb=20240224233811", "Gant Bridge"),
      cityPhoto("Gant Bridge", "https://static.wikia.nocookie.net/gtawiki/images/1/11/GarverBridge-GTASA-SanFierroView.jpg/revision/latest?cb=20091213141433", "San Fierro from Garver Bridge"),
      cityPhoto("Palisades", "https://static.wikia.nocookie.net/gtawiki/images/a/af/PalisadesPark-GTASA-Fountain.jpg/revision/latest?cb=20240224234112", "Palisades Park"),
      cityPhoto("San Fierro (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/0c/SanFierro-GTASA-TrolleyCaltonHeights.jpg/revision/latest?cb=20080606194100", "Calton Heights trolley"),
      cityPhoto("Hashbury", "https://static.wikia.nocookie.net/gtawiki/images/0/0c/Hashbury-GTASA-StreetView.jpg/revision/latest?cb=20100525093930", "Hashbury street view"),
      cityPhoto("Easter Basin", "https://static.wikia.nocookie.net/gtawiki/images/3/37/EasterBasin-GTASA.png/revision/latest?cb=20190322151454", "Easter Basin"),
      cityPhoto("San Fierro (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/9/90/WindyWindyWindyWindyStreet-GTASA.jpg/revision/latest?cb=20240224234136", "Windy Windy Street")
    ],
    "las-venturas": [
      cityPhoto("The Strip", "https://static.wikia.nocookie.net/gtawiki/images/0/03/LVstrip.jpeg/revision/latest?cb=20140824165445", "The Strip"),
      cityPhoto("The Strip", "https://static.wikia.nocookie.net/gtawiki/images/3/38/TheStrip-GTASA-Night.jpg/revision/latest?cb=20070409143559", "The Strip at night"),
      cityPhoto("The Strip", "https://static.wikia.nocookie.net/gtawiki/images/d/d3/TheStrip-GTASA.png/revision/latest?cb=20190607210411", "The Strip daytime"),
      cityPhoto("Las Venturas Airport", "https://static.wikia.nocookie.net/gtawiki/images/5/5f/LVA-GTASA-EarlyScreenshot.jpg/revision/latest?cb=20140209141532", "Las Venturas Airport early view"),
      cityPhoto("Las Venturas Airport", "https://static.wikia.nocookie.net/gtawiki/images/8/88/LVA-GTASA-Entrance.jpg/revision/latest?cb=20091122090507", "Las Venturas Airport entrance"),
      cityPhoto("Las Venturas Airport", "https://static.wikia.nocookie.net/gtawiki/images/d/db/LasVenturasAirport-GTASA-WelcomeSign.jpg/revision/latest?cb=20090416050231", "Las Venturas Airport welcome sign"),
      cityPhoto("Las Venturas Airport", "https://static.wikia.nocookie.net/gtawiki/images/f/f8/LasVenturasAirport-GTASA.png/revision/latest?cb=20190607210325", "Las Venturas Airport"),
      cityPhoto("Las Venturas Welcome Sign", "https://static.wikia.nocookie.net/gtawiki/images/c/cf/LasVenturasWelcomeSign-GTASA-Night.jpg/revision/latest?cb=20240316100431", "Las Venturas sign at night"),
      cityPhoto("V-Rock Hotel", "https://static.wikia.nocookie.net/gtawiki/images/b/ba/V-RockHotel-GTASA-exterior.jpg/revision/latest?cb=20100709205002", "V-Rock Hotel"),
      cityPhoto("Roca Escalante", "https://static.wikia.nocookie.net/gtawiki/images/e/ef/PromotionalWebsite-GTASA-Flash-rocaescalante_vrock.jpg/revision/latest?cb=20201212214317", "Roca Escalante")
    ]
  },
  "hd": {
    "liberty-city": [
      cityPhoto("Algonquin", "https://static.wikia.nocookie.net/gtawiki/images/0/07/Algonquin-GTAIV-Skyline1.png/revision/latest?cb=20181115193933", "Algonquin skyline"),
      cityPhoto("Algonquin", "https://static.wikia.nocookie.net/gtawiki/images/3/3b/Algonquin-GTAIV-Skyline2.png/revision/latest?cb=20181115193934", "Algonquin skyline 2"),
      cityPhoto("Algonquin", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/Algonquin-GTAIV-StreetScene.png/revision/latest?cb=20190814143002", "Algonquin street scene"),
      cityPhoto("Broker Bridge", "https://static.wikia.nocookie.net/gtawiki/images/5/5c/BrokerBridge-GTAIV.png/revision/latest?cb=20180819153722", "Broker Bridge"),
      cityPhoto("Burlesque", "https://static.wikia.nocookie.net/gtawiki/images/3/37/Burlesque-GTAIV-Night.jpg/revision/latest?cb=20181114174554", "Burlesque at night"),
      cityPhoto("Chinatown", "https://static.wikia.nocookie.net/gtawiki/images/3/3a/Chinatown-GTAIV.png/revision/latest?cb=20190110183105", "Chinatown HD"),
      cityPhoto("Grand Easton Terminal", "https://static.wikia.nocookie.net/gtawiki/images/6/69/GrandEastonTerminal-GTAIV.png/revision/latest?cb=20181026125743", "Grand Easton Terminal"),
      cityPhoto("Middle Park", "https://static.wikia.nocookie.net/gtawiki/images/d/df/MiddlePark-GTAIV.png/revision/latest?cb=20190110132119", "Middle Park"),
      cityPhoto("Bohan", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/Bohan-GTAIV-Night.png/revision/latest?cb=20160809205324", "Bohan at night"),
      cityPhoto("Bohan", "https://static.wikia.nocookie.net/gtawiki/images/7/70/SouthBohan-GTA4-westwards.jpg/revision/latest?cb=20090828151016", "South Bohan")
    ],
    "vice-city": [
      cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/c/ce/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS1.jpg/revision/latest?cb=20250506164253", "Vice City HD screenshot 1"),
      cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/c/cf/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS2.jpg/revision/latest?cb=20250506164254", "Vice City HD screenshot 2"),
      cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/e/e6/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS3.jpg/revision/latest?cb=20250506164255", "Vice City HD screenshot 3"),
      cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS4.jpg/revision/latest?cb=20250506164256", "Vice City HD screenshot 4"),
      cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/7/77/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS5.jpg/revision/latest?cb=20250506164257", "Vice City HD screenshot 5"),
      cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/a/a9/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS6.jpg/revision/latest?cb=20250506164259", "Vice City HD screenshot 6"),
      cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/0/04/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS7.jpg/revision/latest?cb=20250506164300", "Vice City HD screenshot 7"),
      cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/f/fa/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS8.jpg/revision/latest?cb=20250506164301", "Vice City HD screenshot 8"),
      cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/b/be/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS9.jpg/revision/latest?cb=20250506164302", "Vice City HD screenshot 9")
    ],
    "san-andreas": [
      cityPhoto("Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/f/fb/LosSantos-GTAV-PC.jpg/revision/latest?cb=20150327201859", "Los Santos PC"),
      cityPhoto("Downtown Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/3/3d/DowntownLosSantos-GTAVee.jpg/revision/latest?cb=20240315141712", "Downtown Los Santos HD"),
      cityPhoto("East Los Santos", "https://static.wikia.nocookie.net/gtawiki/images/2/29/EastLosSantos-GTAVee.jpg/revision/latest?cb=20240315141714", "East Los Santos"),
      cityPhoto("Del Perro", "https://static.wikia.nocookie.net/gtawiki/images/3/3a/DelPerro-GTAVee.jpg/revision/latest?cb=20240315141706", "Del Perro"),
      cityPhoto("Blaine County", "https://static.wikia.nocookie.net/gtawiki/images/1/1f/GSDesert.jpg/revision/latest?cb=20140209124722", "Grand Senora Desert"),
      cityPhoto("Alamo Sea", "https://static.wikia.nocookie.net/gtawiki/images/6/60/AlamoSea-GTAV-Sunset.jpg/revision/latest?cb=20131023002832", "Alamo Sea sunset"),
      cityPhoto("Sandy Shores", "https://static.wikia.nocookie.net/gtawiki/images/1/17/SandyShores-GTAV-overview.jpg/revision/latest?cb=20140120180934", "Sandy Shores"),
      cityPhoto("Paleto Bay", "https://static.wikia.nocookie.net/gtawiki/images/0/0d/PaletoBay-GTAV-Aerial.jpg/revision/latest?cb=20131130054542", "Paleto Bay"),
      cityPhoto("Grapeseed", "https://static.wikia.nocookie.net/gtawiki/images/b/b1/Grapeseed-GTAV-Downtown.jpg/revision/latest?cb=20130921073458", "Grapeseed"),
      cityPhoto("Los Santos International Airport (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/a/a5/LosSantosInternationalAirport-GTAVee.jpg/revision/latest?cb=20240315141722", "Los Santos International Airport HD")
    ],
    "los-santos": [
      cityPhoto("Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/f/fb/LosSantos-GTAV-PC.jpg/revision/latest?cb=20150327201859", "Los Santos PC"),
      cityPhoto("Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/4/40/Los_Santos_at_Night_-_GTAV.png/revision/latest?cb=20141125082924", "Los Santos at night"),
      cityPhoto("Downtown Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/3/3d/DowntownLosSantos-GTAVee.jpg/revision/latest?cb=20240315141712", "Downtown Los Santos HD"),
      cityPhoto("Downtown Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/9/9c/DowntownLS-GTAV-day.jpg/revision/latest?cb=20140317221053", "Downtown Los Santos day"),
      cityPhoto("East Los Santos", "https://static.wikia.nocookie.net/gtawiki/images/2/29/EastLosSantos-GTAVee.jpg/revision/latest?cb=20240315141714", "East Los Santos"),
      cityPhoto("Del Perro", "https://static.wikia.nocookie.net/gtawiki/images/3/3a/DelPerro-GTAVee.jpg/revision/latest?cb=20240315141706", "Del Perro"),
      cityPhoto("Vespucci Beach", "https://static.wikia.nocookie.net/gtawiki/images/0/0b/VespucciBeach-GTAV-AerialShot.png/revision/latest?cb=20140312210020", "Vespucci Beach"),
      cityPhoto("Rockford Hills", "https://static.wikia.nocookie.net/gtawiki/images/b/b7/RockfordHills-GTAV-AerialView.jpg/revision/latest?cb=20131023002436", "Rockford Hills"),
      cityPhoto("Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/5/5a/LosSantos-GTAV-SouthLS.jpg/revision/latest?cb=20151014021921", "South Los Santos"),
      cityPhoto("Los Santos International Airport (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/a/a5/LosSantosInternationalAirport-GTAVee.jpg/revision/latest?cb=20240315141722", "Los Santos International Airport HD")
    ],
    "blaine-county": [
      cityPhoto("Blaine County", "https://static.wikia.nocookie.net/gtawiki/images/1/1f/GSDesert.jpg/revision/latest?cb=20140209124722", "Grand Senora Desert"),
      cityPhoto("Alamo Sea", "https://static.wikia.nocookie.net/gtawiki/images/4/48/Screenshot-AlamoSea-GTAV.jpg/revision/latest?cb=20130328172735", "Alamo Sea"),
      cityPhoto("Alamo Sea", "https://static.wikia.nocookie.net/gtawiki/images/6/60/AlamoSea-GTAV-Sunset.jpg/revision/latest?cb=20131023002832", "Alamo Sea sunset"),
      cityPhoto("Blaine County", "https://static.wikia.nocookie.net/gtawiki/images/5/5d/Screenshot-DesertWaterTower-GTAV.jpg/revision/latest?cb=20121110032126", "Desert water tower"),
      cityPhoto("Sandy Shores", "https://static.wikia.nocookie.net/gtawiki/images/1/17/SandyShores-GTAV-overview.jpg/revision/latest?cb=20140120180934", "Sandy Shores"),
      cityPhoto("Sandy Shores", "https://static.wikia.nocookie.net/gtawiki/images/9/90/SandyShores-MainAvenue-GTAV.jpg/revision/latest?cb=20230226101922", "Sandy Shores Main Avenue"),
      cityPhoto("Paleto Bay", "https://static.wikia.nocookie.net/gtawiki/images/0/0d/PaletoBay-GTAV-Aerial.jpg/revision/latest?cb=20131130054542", "Paleto Bay"),
      cityPhoto("Paleto Bay", "https://static.wikia.nocookie.net/gtawiki/images/d/dc/PaletoBay-GTAV-ViewofMountChiliad.jpg/revision/latest?cb=20130926074910", "Paleto Bay and Mount Chiliad"),
      cityPhoto("Grapeseed", "https://static.wikia.nocookie.net/gtawiki/images/b/b1/Grapeseed-GTAV-Downtown.jpg/revision/latest?cb=20130921073458", "Grapeseed downtown"),
      cityPhoto("Grapeseed", "https://static.wikia.nocookie.net/gtawiki/images/c/c6/Grapeseed-GTAV-LookingEast.jpg/revision/latest?cb=20131130054708", "Grapeseed looking east")
    ],
    "north-yankton": [
      cityPhoto("Ludendorff", "https://static.wikia.nocookie.net/gtawiki/images/0/09/BannerHotel-GTAV-NorthYankton.jpg/revision/latest?cb=20140414202404", "Banner Hotel"),
      cityPhoto("Ludendorff", "https://static.wikia.nocookie.net/gtawiki/images/9/98/LudendorffAerialView-GTAV.jpg/revision/latest?cb=20140603103957", "Ludendorff aerial view"),
      cityPhoto("Ludendorff", "https://static.wikia.nocookie.net/gtawiki/images/b/b6/LudendorffChurch-GTAV-Night.png/revision/latest?cb=20131103125443", "Ludendorff Church at night"),
      cityPhoto("Ludendorff", "https://static.wikia.nocookie.net/gtawiki/images/0/08/PollockCinema-GTAV-Night.png/revision/latest?cb=20210909151932", "Pollock Cinema"),
      cityPhoto("Ludendorff", "https://static.wikia.nocookie.net/gtawiki/images/b/b0/RearBuildings-GTAVpc-NorthYankton.png/revision/latest?cb=20240720170337", "Ludendorff rear buildings")
    ],
    "leonida": [
      cityPhoto("Leonida Keys", "https://static.wikia.nocookie.net/gtawiki/images/9/9a/OfficialScreenshots-GTAVI-PromotionalWebsite-LeonidaKeys-SS1.jpg/revision/latest?cb=20250506164232", "Leonida Keys 1"),
      cityPhoto("Leonida Keys", "https://static.wikia.nocookie.net/gtawiki/images/8/8a/OfficialScreenshots-GTAVI-PromotionalWebsite-LeonidaKeys-SS2.jpg/revision/latest?cb=20250506164233", "Leonida Keys 2"),
      cityPhoto("Leonida Keys", "https://static.wikia.nocookie.net/gtawiki/images/0/0c/OfficialScreenshots-GTAVI-PromotionalWebsite-LeonidaKeys-SS3.jpg/revision/latest?cb=20250506164234", "Leonida Keys 3"),
      cityPhoto("Leonida Keys", "https://static.wikia.nocookie.net/gtawiki/images/9/99/OfficialScreenshots-GTAVI-PromotionalWebsite-LeonidaKeys-SS4.jpg/revision/latest?cb=20250506164235", "Leonida Keys 4"),
      cityPhoto("Leonida Keys", "https://static.wikia.nocookie.net/gtawiki/images/a/ab/OfficialScreenshots-GTAVI-PromotionalWebsite-LeonidaKeys-SS5.jpg/revision/latest?cb=20250506164237", "Leonida Keys 5"),
      cityPhoto("Port Gellhorn", "https://static.wikia.nocookie.net/gtawiki/images/0/0d/OfficialScreenshots-GTAVI-PromotionalWebsite-PortGellhorn-SS1.jpg/revision/latest?cb=20250506164248", "Port Gellhorn 1"),
      cityPhoto("Port Gellhorn", "https://static.wikia.nocookie.net/gtawiki/images/e/eb/OfficialScreenshots-GTAVI-PromotionalWebsite-PortGellhorn-SS2.jpg/revision/latest?cb=20250506164249", "Port Gellhorn 2"),
      cityPhoto("Grassrivers", "https://static.wikia.nocookie.net/gtawiki/images/4/48/OfficialScreenshots-GTAVI-PromotionalWebsite-Grassrivers-SS1.jpg/revision/latest?cb=20250506164227", "Grassrivers 1"),
      cityPhoto("Ambrosia", "https://static.wikia.nocookie.net/gtawiki/images/4/40/OfficialScreenshots-GTAVI-PromotionalWebsite-Ambrosia-SS1.jpg/revision/latest?cb=20250506164219", "Ambrosia"),
      cityPhoto("Mount Kalaga", "https://static.wikia.nocookie.net/gtawiki/images/a/a7/OfficialScreenshots-GTAVI-PromotionalWebsite-MountKalaga-SS1.jpg/revision/latest?cb=20250506164238", "Mount Kalaga")
    ]
  }
};

const refinedCityGalleryMediaById = {
  "liberty-city": refinedCityUniverseGalleryMediaById.hd["liberty-city"],
  "vice-city": refinedCityUniverseGalleryMediaById.hd["vice-city"],
  "san-andreas": refinedCityUniverseGalleryMediaById.hd["san-andreas"],
  "los-santos": refinedCityUniverseGalleryMediaById.hd["los-santos"],
  "san-fierro": refinedCityUniverseGalleryMediaById["3d"]["san-fierro"],
  "las-venturas": refinedCityUniverseGalleryMediaById["3d"]["las-venturas"],
  "blaine-county": refinedCityUniverseGalleryMediaById.hd["blaine-county"],
  "north-yankton": refinedCityUniverseGalleryMediaById.hd["north-yankton"],
  "anywhere-city": refinedCityUniverseGalleryMediaById["2d"]["anywhere-city"],
  "london": refinedCityUniverseGalleryMediaById["2d"].london,
  "leonida": refinedCityUniverseGalleryMediaById.hd.leonida
};

const cityUniverseGameScopeById = {
  "2d": {
    "liberty-city": ["GTA 1"],
    "vice-city": ["GTA 1"],
    "san-andreas": ["GTA 1"],
    "anywhere-city": ["GTA 2"],
    "london": ["GTA: London 1969", "GTA: London 1961"]
  },
  "3d": {
    "liberty-city": ["GTA III", "Liberty City Stories", "GTA Advance"],
    "vice-city": ["Vice City", "Vice City Stories"],
    "san-andreas": ["GTA: San Andreas"],
    "los-santos": ["GTA: San Andreas"],
    "san-fierro": ["GTA: San Andreas"],
    "las-venturas": ["GTA: San Andreas"]
  },
  "hd": {
    "liberty-city": ["GTA IV", "Episodes from Liberty City", "Chinatown Wars"],
    "vice-city": ["GTA VI"],
    "san-andreas": ["GTA V", "GTA Online"],
    "los-santos": ["GTA V", "GTA Online"],
    "blaine-county": ["GTA V", "GTA Online"],
    "north-yankton": ["GTA V"],
    "leonida": ["GTA VI"]
  }
};

const gtaWikiFactionMediaById = {
  "leone-family": gtaWikiImage("Leone Crime Family", "https://static.wikia.nocookie.net/gtawiki/images/c/c4/LeoneMafia-GTALCS.png/revision/latest?cb=20170421032044"),
  "forelli-family": gtaWikiImage("Forelli Crime Family", "https://static.wikia.nocookie.net/gtawiki/images/0/05/ForelliBrothers-GTAIII.png/revision/latest/scale-to-width-down/1200?cb=20230713103043"),
  "sindacco-family": gtaWikiImage("Sindacco Crime Family", "https://static.wikia.nocookie.net/gtawiki/images/5/5e/Sindaccos-GTALCS-members.jpg/revision/latest?cb=20100120183816"),
  "yakuza": gtaWikiImage("Yakuza (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/1/1e/Yakuza_Member_LCS.JPG/revision/latest?cb=20110217003226"),
  "colombian-cartel": gtaWikiImage("Colombian Cartel", "https://static.wikia.nocookie.net/gtawiki/images/b/b5/ColombianCartel-GTA3-members.jpg/revision/latest?cb=20091123104112"),
  "yardies": gtaWikiImage("Uptown Yardies", "https://static.wikia.nocookie.net/gtawiki/images/8/8a/Yardies-GTALCS-members.jpg/revision/latest/scale-to-width-down/1200?cb=20220430185033"),
  "diablos": gtaWikiImage("Diablos", "https://static.wikia.nocookie.net/gtawiki/images/0/0d/Diablos-GTALCS.png/revision/latest/scale-to-width-down/1200?cb=20230407115112"),
  "triads": gtaWikiImage("Liberty City Triads (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/5/53/Triads-GTALCS-members.jpg/revision/latest?cb=20100120182018"),
  "grove-street": gtaWikiImage("Grove Street Families", "https://static.wikia.nocookie.net/gtawiki/images/4/48/GroveStreetFamilies-GTASA.png/revision/latest/scale-to-width-down/1200?cb=20241109215215"),
  "ballas": gtaWikiImage("Ballas (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/d/de/Ballas-GTASA.png/revision/latest/scale-to-width-down/1200?cb=20250806180928"),
  "vagos": gtaWikiImage("Los Santos Vagos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/5/5e/LosSantosVagos-GTASA-members.jpg/revision/latest?cb=20100424224004"),
  "aztecas": gtaWikiImage("Varrios Los Aztecas (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/c/cd/VarriosLosAztecas-GTASA.jpg/revision/latest/scale-to-width-down/1200?cb=20241109213359"),
  "rifa": gtaWikiImage("San Fierro Rifa", "https://static.wikia.nocookie.net/gtawiki/images/4/41/SanFierroRifa-GTASA-Screenshot.jpg/revision/latest?cb=20210812060147"),
  "da-nang-boys": gtaWikiImage("Da Nang Boys", "https://static.wikia.nocookie.net/gtawiki/images/4/4e/DaNangBoys-GTASA-Members.jpg/revision/latest?cb=20190112110820"),
  "lost-mc": gtaWikiImage("The Lost MC", "https://static.wikia.nocookie.net/gtawiki/images/3/34/LostMC-GTAIV-Patch.png/revision/latest/scale-to-width-down/1200?cb=20200316125420", { fit: "contain" }),
  "angels-of-death": gtaWikiImage("Angels of Death", "https://static.wikia.nocookie.net/gtawiki/images/d/d3/AngelsOfDeath-GTAIV-Patch.png/revision/latest?cb=20200316180551", { fit: "contain" }),
  "russian-mafia": gtaWikiImage("Faustin Mafiya", "https://static.wikia.nocookie.net/gtawiki/images/7/7f/FaustinMafiya-GTA4.png/revision/latest/scale-to-width-down/1200?cb=20250502083914"),
  "pegorino-family": gtaWikiImage("Pegorino Crime Family", "https://static.wikia.nocookie.net/gtawiki/images/4/49/PegorinoCrimeFamily-GTAIV.jpg/revision/latest?cb=20121230090259"),
  "mcreary-family": gtaWikiImage("McReary Crime Family", "https://static.wikia.nocookie.net/gtawiki/images/8/85/McRearyCrimeFamily-GTAIV-Members.jpg/revision/latest/scale-to-width-down/1200?cb=20230901042858"),
  "five-families": gtaWikiImage("The Commission", "https://static.wikia.nocookie.net/gtawiki/images/a/a2/GambettiCrimeFamily-GTAIV.png/revision/latest/scale-to-width-down/1200?cb=20230904010908"),
  "madrazo-cartel": gtaWikiImage("Madrazo Cartel", "https://static.wikia.nocookie.net/gtawiki/images/8/8c/Madrazo-beat-Michael-GTAV.png/revision/latest/scale-to-width-down/1200?cb=20210604172412"),
  "merryweather": gtaWikiImage("Merryweather Security", "https://static.wikia.nocookie.net/gtawiki/images/1/1c/MerryweatherSecurity-GTAV-Logo.png/revision/latest/scale-to-width-down/1200?cb=20200707082416", { fit: "contain" }),
  "fib": gtaWikiImage("Federal Investigation Bureau", "https://static.wikia.nocookie.net/gtawiki/images/e/e3/FIB-GTAIV-Logo.png/revision/latest?cb=20240514140746", { fit: "contain" }),
  "iaa": gtaWikiImage("International Affairs Agency", "https://static.wikia.nocookie.net/gtawiki/images/b/b2/IAAHeadquarters-GTAV.png/revision/latest/scale-to-width-down/1200?cb=20190115110427"),
  "noose": gtaWikiImage("National Office of Security Enforcement", "https://static.wikia.nocookie.net/gtawiki/images/0/0a/NOOSE-GTAV-Logo.png/revision/latest?cb=20190409192026", { fit: "contain" }),
  "lspd": gtaWikiImage("Los Santos Police Department (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/e/e9/Gta5-police-station-map_03.png/revision/latest/scale-to-width-down/1200?cb=20140325120451"),
  "lcpd": gtaWikiImage("Liberty City Police Department (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/b/b8/LCPDHQ-GTAIII-Portland.jpg/revision/latest/scale-to-width-down/1200?cb=20230506160310"),
  "crash": gtaWikiImage("Community Resources Against Street Hoodlums", "https://static.wikia.nocookie.net/gtawiki/images/b/b5/C.R.A.S.H.-GTASA.jpg/revision/latest?cb=20130104144200"),
  "epsilon": gtaWikiImage("Epsilon Program (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/EpsilonProgram-GTAV-Logo.png/revision/latest?cb=20130424083420", { fit: "contain" }),
  "zaibatsu": gtaWikiImage("Zaibatsu Corporation (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/0a/ZaibatsuCorporation-GTA2-YellowSymbol.jpg/revision/latest?cb=20110404063015", { fit: "contain" }),
  "loonies": gtaWikiImage("Loonies", "https://static.wikia.nocookie.net/gtawiki/images/0/0d/Loonies-GTA2.PNG/revision/latest?cb=20130731102131"),
  "scientists": gtaWikiImage("Scientists", "https://static.wikia.nocookie.net/gtawiki/images/4/43/SRS-GTA2.PNG/revision/latest?cb=20130731103707", { fit: "contain" }),
  "krishna": gtaWikiImage("Hare Krishna", "https://static.wikia.nocookie.net/gtawiki/images/6/69/Krishnas-GTA2.PNG/revision/latest?cb=20140327142350"),
  "rednecks": gtaWikiImage("Rednecks", "https://static.wikia.nocookie.net/gtawiki/images/d/d7/Rednecks-GTA2.PNG/revision/latest?cb=20130731103543"),
  "online-orgs": gtaWikiImage("Organizations", "https://static.wikia.nocookie.net/gtawiki/images/1/13/Organizations-GTAO.png/revision/latest?cb=20160203172000")
};

const gtaWikiUniverseMediaById = {
  "2d": gtaWikiImage("2D Universe", "https://static.wikia.nocookie.net/gtawiki/images/b/bb/2DUniverse-Montage.jpg/revision/latest/scale-to-width-down/1200?cb=20230907095749"),
  "3d": gtaWikiImage("3D Universe", "https://static.wikia.nocookie.net/gtawiki/images/6/6b/3DUniverse-Montage.jpg/revision/latest/scale-to-width-down/1200?cb=20230830090342"),
  "hd": gtaWikiImage("HD Universe", "https://static.wikia.nocookie.net/gtawiki/images/e/ec/HDUniverse-Montage.jpg/revision/latest/scale-to-width-down/1200?cb=20250507211150")
};

const rockstarHistoryMedia = [
  gtaWikiImage("Rockstar North", "https://static.wikia.nocookie.net/gtawiki/images/d/d4/RockstarNorthandDMADesign.png/revision/latest?cb=20240304054229", { fit: "contain" }),
  gtaWikiImage("Race'n'Chase", "https://static.wikia.nocookie.net/gtawiki/images/0/0b/RaceNChase-PossibleScreenshot.jpg/revision/latest?cb=20140927111915"),
  gtaWikiGameMediaById["gta-1"],
  gtaWikiImage("Rockstar Games", "https://static.wikia.nocookie.net/gtawiki/images/0/0e/Rockstar_Games.png/revision/latest?cb=20241106091551", { fit: "contain" }),
  gtaWikiImage("Rockstar North", "https://static.wikia.nocookie.net/gtawiki/images/d/d4/RockstarNorthandDMADesign.png/revision/latest?cb=20240304054229", { fit: "contain" }),
  gtaWikiGameMediaById["gta-iii"],
  gtaWikiGameMediaById["san-andreas"],
  gtaWikiGameMediaById["gta-iv"],
  gtaWikiGameMediaById["gta-v"],
  gtaWikiGameMediaById["gta-vi"]
];

const rockstarPeopleData = [
  {
    id: "david-jones",
    name: "David Jones",
    role: "Fundador da DMA Design, criador e produtor",
    era: "DMA / Origem",
    city: "Dundee",
    media: realPersonImage(
      "David Jones",
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/David_Jones%2C_Gamelab_2018_%28cropped%29.jpg",
      "https://commons.wikimedia.org/wiki/File:David_Jones,_Gamelab_2018_(cropped).jpg",
      "Wikimedia Commons - David Jones",
      { position: "center 18%" }
    ),
    summary:
      "Figura central do nascimento da DMA Design em Dundee. Antes de GTA existir, Jones já tinha transformado a DMA em um estúdio respeitado com Lemmings; depois, ajudou a conduzir a ideia que se tornaria Grand Theft Auto.",
    contributions: [
      "Fundou a DMA Design no fim dos anos 1980, em Dundee, Escócia.",
      "Ajudou a construir a cultura técnica que gerou Lemmings, Menace, Blood Money e, mais tarde, GTA.",
      "Co-criador associado a Grand Theft Auto ao lado de Mike Dailly e da equipe da DMA.",
      "Representa a ponte entre a cena britânica de microcomputadores, a ambição de cidades simuladas e o futuro da Rockstar North."
    ],
    games: ["Lemmings", "Grand Theft Auto", "Body Harvest"],
    tags: ["criador", "DMA Design", "produtor", "Dundee"],
    sources: [
      { label: "Wikipedia - David Jones", url: "https://en.wikipedia.org/wiki/David_Jones_(video_game_developer)" },
      { label: "GTA Wiki - David Jones", url: "https://gta.fandom.com/wiki/David_Jones" },
      { label: "Rockstar North", url: "https://en.wikipedia.org/wiki/Rockstar_North" }
    ]
  },
  {
    id: "mike-dailly",
    name: "Mike Dailly",
    role: "Programador, designer e prototipador",
    era: "DMA / Race'n'Chase",
    city: "Dundee",
    media: realPersonImage(
      "Mike Dailly",
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Mike_Dailly%2C_2011.jpg",
      "https://commons.wikimedia.org/wiki/File:Mike_Dailly,_2011.jpg",
      "Wikimedia Commons - Mike Dailly",
      { position: "center 18%" }
    ),
    summary:
      "Um dos nomes mais importantes da fase inicial da DMA. É frequentemente citado como designer de Lemmings e criador do protótipo original que levaria a Grand Theft Auto, quando a ideia ainda orbitava Race'n'Chase.",
    contributions: [
      "Foi um dos primeiros funcionários da DMA Design.",
      "Trabalhou em Lemmings, marco que deu reputação internacional ao estúdio.",
      "Criou protótipos e tecnologia ligados ao conceito original de Grand Theft Auto.",
      "Ajuda a explicar por que GTA nasceu primeiro como sistema urbano e só depois ganhou a forma de saga criminal cinematográfica."
    ],
    games: ["Lemmings", "Race'n'Chase", "Grand Theft Auto"],
    tags: ["criador", "programação", "protótipo", "DMA Design"],
    sources: [
      { label: "Wikipedia - Mike Dailly", url: "https://en.wikipedia.org/wiki/Mike_Dailly_(game_designer)" },
      { label: "GTA Wiki - Mike Dailly", url: "https://gta.fandom.com/wiki/Mike_Dailly" },
      { label: "Grand Theft Wiki - Race'n'Chase", url: "https://www.grandtheftwiki.com/Race%27n%27Chase" }
    ]
  },
  {
    id: "sam-houser",
    name: "Sam Houser",
    role: "Co-fundador e presidente da Rockstar Games",
    era: "Rockstar / Branding",
    city: "Nova York",
    media: realPersonImage(
      "Sam Houser",
      "https://static.wikia.nocookie.net/gtawiki/images/a/ad/SamHouser-President.png/revision/latest?cb=20220802102226",
      "https://gta.fandom.com/wiki/Sam_Houser",
      "GTA Wiki - Sam Houser",
      { position: "center 18%" }
    ),
    summary:
      "O nome mais associado ao comando público da Rockstar. Vindo da BMG Interactive, Sam Houser ajudou a transformar GTA de jogo transgressor em uma franquia de escala cultural, com identidade de música, cinema, sátira e marketing.",
    contributions: [
      "Co-fundou a Rockstar Games em 1998 com Dan Houser, Terry Donovan, Jamie King e Gary J. Foreman.",
      "Foi um dos defensores do potencial de GTA dentro da estrutura BMG/Take-Two.",
      "Consolidou a Rockstar como selo autoral, com controle forte de tom, trilha, campanha e postura pública.",
      "Supervisionou a passagem de GTA III, era 3D, era HD, GTA V, GTA Online e o caminho até GTA VI."
    ],
    games: ["GTA III", "Vice City", "San Andreas", "GTA IV", "GTA V", "GTA Online", "GTA VI"],
    tags: ["fundador", "presidente", "Rockstar Games", "produção"],
    sources: [
      { label: "GTA Wiki - Sam Houser", url: "https://gta.fandom.com/wiki/Sam_Houser" },
      { label: "Rockstar Games", url: "https://en.wikipedia.org/wiki/Rockstar_Games" },
      { label: "Take-Two Interactive", url: "https://en.wikipedia.org/wiki/Take-Two_Interactive" }
    ]
  },
  {
    id: "dan-houser",
    name: "Dan Houser",
    role: "Co-fundador, escritor e produtor criativo",
    era: "Rockstar / Narrativa",
    city: "Nova York",
    media: realPersonImage(
      "Dan Houser",
      "https://static.wikia.nocookie.net/gtawiki/images/1/1e/DanHouser-VicePresident.jpg/revision/latest?cb=20220802102607",
      "https://gta.fandom.com/wiki/Dan_Houser",
      "GTA Wiki - Dan Houser",
      { position: "center 16%" }
    ),
    summary:
      "Foi uma das vozes centrais da escrita da Rockstar durante a fase em que GTA virou sátira de massa. Seu trabalho ajuda a explicar o diálogo agressivo, as rádios, os personagens contraditórios e o olhar ácido sobre os EUA.",
    contributions: [
      "Co-fundou a Rockstar Games e atuou como vice-presidente criativo por muitos anos.",
      "Teve papel importante em roteiro, diálogo e tom satírico em GTA e Red Dead.",
      "Ajudou a transformar cidades em ambientes narrativos cheios de rádio, propaganda, televisão e cultura pop falsa.",
      "Saiu da Rockstar em 2020, encerrando uma das fases editoriais mais marcantes do estúdio."
    ],
    games: ["GTA III", "Vice City", "San Andreas", "GTA IV", "GTA V", "Red Dead Redemption"],
    tags: ["fundador", "roteiro", "sátira", "produção criativa"],
    sources: [
      { label: "GTA Wiki - Dan Houser", url: "https://gta.fandom.com/wiki/Dan_Houser" },
      { label: "Rockstar Games", url: "https://en.wikipedia.org/wiki/Rockstar_Games" },
      { label: "Take-Two - saída de Dan Houser", url: "https://ir.take2games.com/news-releases/news-release-details/rockstar-games-announces-dan-housers-departure" }
    ]
  },
  {
    id: "terry-donovan",
    name: "Terry Donovan",
    role: "Co-fundador e executivo da Rockstar",
    era: "Rockstar / Negócios",
    city: "Nova York",
    media: realPersonImage(
      "Terry Donovan",
      "https://static.wikia.nocookie.net/gtawiki/images/e/e8/TerryDonovan-Director.png/revision/latest?cb=20220719203846",
      "https://gta.fandom.com/wiki/Terry_Donovan",
      "GTA Wiki - Terry Donovan",
      { position: "center 16%" }
    ),
    summary:
      "Parte do grupo fundador que deu forma empresarial à Rockstar Games. Sua importância está na montagem do selo, na operação de publicação e na aproximação entre jogo, música, clubes e cultura urbana.",
    contributions: [
      "Co-fundou a Rockstar Games em 1998.",
      "Atuou em funções executivas durante a consolidação da marca.",
      "Participou do período em que GTA passou de franquia controversa para evento global.",
      "Representa a dimensão de negócios e cultura pop que diferenciou a Rockstar de uma publicadora tradicional."
    ],
    games: ["GTA III", "Vice City", "San Andreas", "GTA IV"],
    tags: ["fundador", "executivo", "publicação", "Rockstar Games"],
    sources: [
      { label: "GTA Wiki - Terry Donovan", url: "https://gta.fandom.com/wiki/Terry_Donovan" },
      { label: "Rockstar Games", url: "https://en.wikipedia.org/wiki/Rockstar_Games" }
    ]
  },
  {
    id: "jamie-king",
    name: "Jamie King",
    role: "Co-fundador e liderança de produção",
    era: "Rockstar / Produção",
    city: "Nova York",
    media: realPersonImage(
      "Jamie King",
      "https://static.wikia.nocookie.net/gtawiki/images/e/e6/JamieKing-Director.jpg/revision/latest?cb=20220720201027",
      "https://gta.fandom.com/wiki/Jamie_King",
      "GTA Wiki - Jamie King",
      { position: "center 18%" }
    ),
    summary:
      "Um dos cinco fundadores da Rockstar. Teve papel na estruturação de produção e tecnologia da empresa em sua fase de crescimento, antes de sair e participar da fundação da 4mm Games.",
    contributions: [
      "Co-fundou a Rockstar Games junto aos Housers, Terry Donovan e Gary J. Foreman.",
      "Ajudou a escalar a operação da Rockstar no período GTA III, Vice City e San Andreas.",
      "Foi citado, ao lado de Gary Foreman, como participante de franquias como GTA, Midnight Club, Max Payne e Bully.",
      "Depois da Rockstar, fundou a 4mm Games com Gary Foreman e outros executivos."
    ],
    games: ["GTA III", "Vice City", "San Andreas", "Midnight Club", "Bully"],
    tags: ["fundador", "produção", "tecnologia", "Rockstar Games"],
    sources: [
      { label: "GTA Wiki - Jamie King", url: "https://gta.fandom.com/wiki/Jamie_King" },
      { label: "GameSpot - 4mm Games", url: "https://www.gamespot.com/articles/rockstar-founders-load-4mm/1100-6210102/" },
      { label: "Rockstar Games", url: "https://en.wikipedia.org/wiki/Rockstar_Games" }
    ]
  },
  {
    id: "gary-foreman",
    name: "Gary J. Foreman",
    role: "Co-fundador e produtor",
    era: "Rockstar / Tecnologia",
    city: "Nova York",
    media: realPersonImage(
      "Gary J. Foreman",
      "https://static.wikia.nocookie.net/gtawiki/images/b/bd/GaryForeman-Producer.png/revision/latest?cb=20240904075034",
      "https://gta.fandom.com/wiki/Gary_J._Foreman",
      "GTA Wiki - Gary J. Foreman",
      { position: "center 18%" }
    ),
    summary:
      "O fundador menos lembrado pelo grande público, mas essencial na formação inicial da Rockstar. É citado em registros históricos como um dos cinco fundadores e depois aparece ligado a funções técnicas e de produção fora da empresa.",
    contributions: [
      "Co-fundou a Rockstar Games em 1998.",
      "Participou da fase que transformou a marca em uma estrutura de publicação global.",
      "Foi associado a contribuições em GTA, Midnight Club, Max Payne e Bully em cobertura sobre sua saída para a 4mm Games.",
      "A presença dele no dossiê corrige a tendência comum de reduzir a fundação da Rockstar apenas aos irmãos Houser."
    ],
    games: ["GTA", "Midnight Club", "Max Payne", "Bully"],
    tags: ["fundador", "produtor", "tecnologia", "Rockstar Games"],
    sources: [
      { label: "GTA Wiki - Gary J. Foreman", url: "https://gta.fandom.com/wiki/Gary_J._Foreman" },
      { label: "GameSpot - 4mm Games", url: "https://www.gamespot.com/articles/rockstar-founders-load-4mm/1100-6210102/" },
      { label: "Rockstar Games", url: "https://en.wikipedia.org/wiki/Rockstar_Games" }
    ]
  },
  {
    id: "leslie-benzies",
    name: "Leslie Benzies",
    role: "Produtor e ex-presidente da Rockstar North",
    era: "Rockstar North / Escala",
    city: "Edimburgo",
    media: realPersonImage(
      "Leslie Benzies",
      "https://static.wikia.nocookie.net/gtawiki/images/1/17/LeslieBenzies-RockstarNorth.png/revision/latest/scale-to-width-down/900?cb=20220729163459",
      "https://gta.fandom.com/wiki/Leslie_Benzies",
      "GTA Wiki - Leslie Benzies",
      { position: "center 16%" }
    ),
    summary:
      "Produtor-chave da fase em que a antiga DMA virou Rockstar North e GTA se tornou uma máquina de mundo aberto. Benzies é associado a GTA III, Vice City, San Andreas, GTA IV e GTA V.",
    contributions: [
      "Entrou na DMA/Rockstar North antes da explosão global da série.",
      "Teve papel central na produção de GTA III, jogo que redefiniu o modelo moderno de mundo aberto.",
      "Ajudou a coordenar a escalada técnica e produtiva da era 3D para a era HD.",
      "Sua saída após GTA V marcou o fim de uma fase importante da liderança histórica da Rockstar North."
    ],
    games: ["GTA III", "Vice City", "San Andreas", "GTA IV", "GTA V"],
    tags: ["produtor", "Rockstar North", "mundo aberto", "era 3D"],
    sources: [
      { label: "GTA Wiki - Leslie Benzies", url: "https://gta.fandom.com/wiki/Leslie_Benzies" },
      { label: "Wikipedia - Leslie Benzies", url: "https://en.wikipedia.org/wiki/Leslie_Benzies" },
      { label: "GTA III", url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_III" }
    ]
  },
  {
    id: "aaron-garbut",
    name: "Aaron Garbut",
    role: "Diretor de arte e diretor de mundo",
    era: "Rockstar North / Cidades",
    city: "Edimburgo",
    media: realPersonImage(
      "Aaron Garbut",
      "https://static.wikia.nocookie.net/gtawiki/images/1/14/AaronGarbut-ArtDirector.jpg/revision/latest?cb=20220630180837",
      "https://gta.fandom.com/wiki/Aaron_Garbut",
      "GTA Wiki - Aaron Garbut",
      { position: "center 18%" }
    ),
    summary:
      "Nome fundamental para a identidade visual das cidades da Rockstar. Garbut é associado ao desenho de mundos que parecem observados, documentados e satirizados ao mesmo tempo.",
    contributions: [
      "Trabalhou na construção visual de cidades como Liberty City, Vice City, San Andreas e Los Santos.",
      "Ajudou a definir a linguagem de mapa urbano, arquitetura, bairro, luz e atmosfera da série.",
      "É uma das figuras que explicam por que cada GTA moderno parece uma cidade-personagem.",
      "Na fase HD, sua área se torna ainda mais importante: detalhe ambiental, escala, fotografia e leitura urbana passam a ser narrativa."
    ],
    games: ["GTA III", "Vice City", "San Andreas", "GTA IV", "GTA V", "GTA VI"],
    tags: ["arte", "mundo aberto", "cidades", "Rockstar North"],
    sources: [
      { label: "GTA Wiki - Aaron Garbut", url: "https://gta.fandom.com/wiki/Aaron_Garbut" },
      { label: "Rockstar North", url: "https://en.wikipedia.org/wiki/Rockstar_North" }
    ]
  },
  {
    id: "obbe-vermeij",
    name: "Obbe Vermeij",
    role: "Programador e diretor técnico",
    era: "Rockstar North / Tecnologia",
    city: "Edimburgo",
    media: realPersonImage(
      "Obbe Vermeij",
      "https://static.wikia.nocookie.net/gtawiki/images/9/9c/ObbeVermeij-Director.png/revision/latest/scale-to-width-down/732?cb=20220729174646",
      "https://gta.fandom.com/wiki/Obbe_Vermeij",
      "GTA Wiki - Obbe Vermeij",
      { position: "center 16%" }
    ),
    summary:
      "Programador histórico da Rockstar North, conhecido também por registrar memórias técnicas em seu blog. Seu trabalho ajuda a iluminar os bastidores de streaming, sistemas urbanos e limites de hardware da era PS2.",
    contributions: [
      "Atuou em tecnologia e programação durante a fase GTA III, Vice City e San Andreas.",
      "Ajuda a explicar os compromissos técnicos por trás de tráfego, clima, streaming de mapa e comportamento urbano.",
      "Suas anotações públicas viraram fonte rara sobre como a equipe pensava problemas técnicos internamente.",
      "Mostra que a magia da era 3D também veio de engenharia invisível, não apenas de roteiro e marketing."
    ],
    games: ["GTA III", "Vice City", "San Andreas", "GTA IV"],
    tags: ["programação", "direção técnica", "Rockstar North", "era PS2"],
    sources: [
      { label: "GTA Wiki - Obbe Vermeij", url: "https://gta.fandom.com/wiki/Obbe_Vermeij" },
      { label: "Inside Rockstar North", url: "https://insiderockstarnorth.blogspot.com/" },
      { label: "Rockstar North", url: "https://en.wikipedia.org/wiki/Rockstar_North" }
    ]
  },
  {
    id: "imran-sarwar",
    name: "Imran Sarwar",
    role: "Diretor de design e produtor",
    era: "Rockstar / Design",
    city: "Rockstar North",
    media: realPersonImage(
      "Imran Sarwar",
      "https://static.wikia.nocookie.net/gtawiki/images/9/90/ImranSarwar-DesignDirector.png/revision/latest?cb=20220828201232",
      "https://gta.fandom.com/wiki/Imran_Sarwar",
      "GTA Wiki - Imran Sarwar",
      { position: "center 18%" }
    ),
    summary:
      "Liderança de design ligada a jogos modernos da Rockstar. Seu perfil representa a fase em que GTA deixa de ser apenas missão e mapa para virar ecossistema de atividades, economia, veículos, upgrades e assaltos.",
    contributions: [
      "Atuou em funções de design e produção em projetos da Rockstar.",
      "É associado a decisões de sistemas, progressão e experiência de jogador na fase moderna.",
      "Ajuda a conectar GTA V e GTA Online a uma leitura de design de longo prazo, com conteúdo vivo e atividades persistentes.",
      "No dossiê, aparece como parte da geração que levou a franquia para escala de serviço e replay."
    ],
    games: ["GTA IV", "GTA V", "GTA Online", "Red Dead Redemption"],
    tags: ["design", "produção", "GTA Online", "sistemas"],
    sources: [
      { label: "GTA Wiki - Imran Sarwar", url: "https://gta.fandom.com/wiki/Imran_Sarwar" },
      { label: "Rockstar Games", url: "https://en.wikipedia.org/wiki/Rockstar_Games" }
    ]
  },
  {
    id: "rob-nelson",
    name: "Rob Nelson",
    role: "Diretor e produtor sênior",
    era: "Rockstar / Produção global",
    city: "Rockstar North",
    media: realPersonImage(
      "Rob Nelson",
      "https://static.wikia.nocookie.net/gtawiki/images/7/72/RobNelson_2018.png/revision/latest?cb=20240417030505",
      "https://gta.fandom.com/wiki/Rob_Nelson",
      "GTA Wiki - Rob Nelson",
      { position: "center 18%" }
    ),
    summary:
      "Parte da liderança moderna da Rockstar, quando a empresa passa a operar com equipes globais e produções de escala gigantesca. É um nome importante para entender o salto de GTA V/Online para a estrutura contemporânea da empresa.",
    contributions: [
      "Representa a fase de produção integrada entre múltiplos estúdios Rockstar.",
      "Aparece em créditos e entrevistas públicas ligadas a grandes projetos modernos da empresa.",
      "Ajuda a contextualizar a Rockstar atual: menos estúdio único, mais rede internacional de equipes.",
      "No site, funciona como ponte entre a história clássica de Rockstar North e a operação global que sustenta GTA Online e GTA VI."
    ],
    games: ["GTA V", "GTA Online", "Red Dead Redemption 2"],
    tags: ["produção", "liderança", "Rockstar", "era HD"],
    sources: [
      { label: "GTA Wiki - Rob Nelson", url: "https://gta.fandom.com/wiki/Rob_Nelson" },
      { label: "Rockstar Games", url: "https://en.wikipedia.org/wiki/Rockstar_Games" }
    ]
  },
  {
    id: "lazlow-jones",
    name: "Lazlow Jones",
    role: "Roteirista, produtor de áudio e personalidade de rádio",
    era: "Rockstar / Rádio",
    city: "Nova York",
    media: realPersonImage(
      "Lazlow Jones",
      "https://static.wikia.nocookie.net/gtawiki/images/4/43/LazlowJones-VoiceActor.png/revision/latest?cb=20250806204421",
      "https://gta.fandom.com/wiki/Lazlow_Jones",
      "GTA Wiki - Lazlow Jones",
      { position: "center 16%" }
    ),
    summary:
      "Ajudou a dar voz ao GTA moderno. Rádios, comerciais falsos, entrevistas absurdas, apresentadores e a própria caricatura 'Lazlow' fizeram a cidade parecer viva mesmo quando o jogador só estava dirigindo.",
    contributions: [
      "Trabalhou em escrita, produção de áudio e rádio dentro da Rockstar.",
      "Foi uma das figuras por trás da identidade satírica das estações de rádio.",
      "Aparece também como personagem em vários jogos, misturando bastidor e ficção.",
      "Saiu da Rockstar em 2020, depois de uma longa fase ligada a GTA, Red Dead e a cultura sonora do estúdio."
    ],
    games: ["GTA III", "Vice City", "San Andreas", "GTA IV", "GTA V", "GTA Online"],
    tags: ["áudio", "rádio", "roteiro", "sátira"],
    sources: [
      { label: "GTA Wiki - Lazlow Jones", url: "https://gta.fandom.com/wiki/Lazlow_Jones" },
      { label: "Wikipedia - Lazlow Jones", url: "https://en.wikipedia.org/wiki/Lazlow_Jones" }
    ]
  }
];

const gtaOnlineTimelineMedia = [
  gtaWikiGameMediaById["gta-online"],
  gtaWikiImage("GTA Online: Heists", "https://static.wikia.nocookie.net/gtawiki/images/0/02/HeistsUpdate-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20180518131251"),
  gtaWikiImage("GTA Online: Further Adventures in Finance and Felony", "https://static.wikia.nocookie.net/gtawiki/images/7/7c/GTAOFAFF-Artwork-GTAO.jpg/revision/latest/scale-to-width-down/1200?cb=20160602140947"),
  gtaWikiImage("GTA Online: Gunrunning", "https://static.wikia.nocookie.net/gtawiki/images/3/39/Gunrunning-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20170607144656"),
  gtaWikiImage("GTA Online: After Hours", "https://static.wikia.nocookie.net/gtawiki/images/1/1c/AfterHours-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20180724205006"),
  gtaWikiImage("The Diamond Casino & Resort", "https://static.wikia.nocookie.net/gtawiki/images/3/3a/TheDiamondCasino%26Resort-GTAO-DayView.png/revision/latest/scale-to-width-down/1200?cb=20200603043756"),
  gtaWikiImage("The Cayo Perico Heist", "https://static.wikia.nocookie.net/gtawiki/images/b/b3/Jorge-GTAO-Cutscene.png/revision/latest/scale-to-width-down/1200?cb=20201217021541"),
  gtaWikiImage("GTA Online: The Contract", "https://static.wikia.nocookie.net/gtawiki/images/1/1c/GTAOnline-TheContract-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20211215141321"),
  gtaWikiImage("GTA Online: Los Santos Drug Wars", "https://static.wikia.nocookie.net/gtawiki/images/7/7d/LosSantosDrugWars-GTAOe-AnnouncementArtwork.jpg/revision/latest/scale-to-width-down/1200?cb=20221208141044"),
  gtaWikiImage("GTA Online: San Andreas Mercenaries", "https://static.wikia.nocookie.net/gtawiki/images/1/17/SanAndreasMercenaries-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20230606141219"),
  gtaWikiImage("GTA Online: Money Fronts", "https://static.wikia.nocookie.net/gtawiki/images/6/61/MoneyFronts-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20250617140448"),
  gtaWikiImage("GTA Online: A Safehouse in the Hills", "https://static.wikia.nocookie.net/gtawiki/images/2/2c/ASafehouseInTheHills-GTAO-Artwork.png/revision/latest/scale-to-width-down/1200?cb=20260330025009"),
  gtaWikiImage("Career Builder", "https://static.wikia.nocookie.net/gtawiki/images/3/3c/CareerBuilder-GTAOee-ExecutiveOption.jpg/revision/latest/scale-to-width-down/1200?cb=20220317091052")
];

const gtaOnlineDlcMediaById = {
  "beach-bum": gtaWikiImage("Beach Bum Update", "https://static.wikia.nocookie.net/gtawiki/images/5/54/BeachBum1-GTAV.jpg/revision/latest?cb=20140202203233"),
  "deathmatch-race-creators": gtaWikiImage("Deathmatch & Race Creators Update", "https://static.wikia.nocookie.net/gtawiki/images/8/83/ContentCreatorUpdate-GTAO.jpg/revision/latest?cb=20250616105210"),
  "capture": gtaWikiImage("Capture Update", "https://static.wikia.nocookie.net/gtawiki/images/8/88/CaptureMode-GTAO.jpg/revision/latest?cb=20140118144706"),
  "holiday-gifts": gtaWikiImage("Holiday Gifts", "https://static.wikia.nocookie.net/gtawiki/images/3/3e/HolidayGifts-GTAO.gif/revision/latest?cb=20250616120440"),
  "valentines-day-massacre": gtaWikiImage("The Valentine's Day Massacre Special", "https://static.wikia.nocookie.net/gtawiki/images/4/4b/ValentineMassacre-GTAV-promotionalpic.jpg/revision/latest?cb=20140211180450"),
  "business": gtaWikiImage("The Business Update", "https://static.wikia.nocookie.net/gtawiki/images/7/70/BusinessUpdate-GTAV.jpg/revision/latest?cb=20140304190336"),
  "high-life": gtaWikiImage("The High Life Update", "https://static.wikia.nocookie.net/gtawiki/images/9/9f/TheHighLifeUpdate-GTAO-Artwork.jpg/revision/latest?cb=20140513163956"),
  "hipster": gtaWikiImage("The I'm Not a Hipster Update", "https://static.wikia.nocookie.net/gtawiki/images/5/5d/HipsterUpdate-GTAO.jpg/revision/latest?cb=20150318025006"),
  "independence-day": gtaWikiImage("The Independence Day Special", "https://static.wikia.nocookie.net/gtawiki/images/3/3b/TheIndependeDayUpdate-GTAO-Artwork.jpg/revision/latest?cb=20140701115544"),
  "flight-school": gtaWikiImage("The San Andreas Flight School Update", "https://static.wikia.nocookie.net/gtawiki/images/a/a0/SanAndreasFlightSchoolUpdate-GTAO.jpg/revision/latest?cb=20140818230128"),
  "last-team-standing": gtaWikiImage("The Last Team Standing Update", "https://static.wikia.nocookie.net/gtawiki/images/a/ab/LastTeamStandingUpdate-GTAO.png/revision/latest?cb=20141002131630"),
  "festive-surprise-2014": gtaWikiImage("Festive Surprise", "https://static.wikia.nocookie.net/gtawiki/images/b/b9/GTAV-Festive-Surprise-Title.jpg/revision/latest?cb=20141218165437"),
  "heists": gtaWikiImage("Heists Update", "https://static.wikia.nocookie.net/gtawiki/images/0/02/HeistsUpdate-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20180518131251"),
  "ill-gotten-gains-1": gtaWikiImage("Ill-Gotten Gains Part 1", "https://static.wikia.nocookie.net/gtawiki/images/0/0e/IllGottenGainPt1Artwork-GTAO.jpg/revision/latest?cb=20150605171842"),
  "ill-gotten-gains-2": gtaWikiImage("Ill-Gotten Gains Part 2", "https://static.wikia.nocookie.net/gtawiki/images/a/a9/IllGottenGainsPart2-GTAO-Artwork.png/revision/latest?cb=20150708143901"),
  "freemode-events": gtaWikiImage("Freemode Events Update", "https://static.wikia.nocookie.net/gtawiki/images/1/1b/Freemode-Update-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20220311131535"),
  "lowriders": gtaWikiImage("GTA Online: Lowriders", "https://static.wikia.nocookie.net/gtawiki/images/e/e3/Lowriders-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20151016145557"),
  "halloween-surprise": gtaWikiImage("Halloween Surprise", "https://static.wikia.nocookie.net/gtawiki/images/d/d1/HalloweenSurprise-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20171014121601"),
  "executives-other-criminals": gtaWikiImage("GTA Online: Executives and Other Criminals", "https://static.wikia.nocookie.net/gtawiki/images/3/30/Executives_And_Other_Criminals.jpg/revision/latest/scale-to-width-down/1200?cb=20151210173942"),
  "festive-surprise-2015": gtaWikiImage("Festive Surprise 2015", "https://static.wikia.nocookie.net/gtawiki/images/6/61/FestiveSurprise2015-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20151221201248"),
  "january-2016": gtaWikiImage("January 2016 Update", "https://static.wikia.nocookie.net/gtawiki/images/1/15/DropZone-GTAO-Promo.jpg/revision/latest?cb=20160128165943"),
  "be-my-valentine": gtaWikiImage("GTA Online: Be My Valentine", "https://static.wikia.nocookie.net/gtawiki/images/7/70/BeMyValentineUpdate-GTAO-Artwork.png/revision/latest/scale-to-width-down/1200?cb=20160210214437"),
  "lowriders-custom-classics": gtaWikiImage("GTA Online: Lowriders Custom Classics", "https://static.wikia.nocookie.net/gtawiki/images/e/e3/Lowriders-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20151016145557"),
  "finance-felony": gtaWikiImage("GTA Online: Further Adventures in Finance and Felony", "https://static.wikia.nocookie.net/gtawiki/images/7/7c/GTAOFAFF-Artwork-GTAO.jpg/revision/latest/scale-to-width-down/1200?cb=20160602140947"),
  "cunning-stunts": gtaWikiImage("GTA Online: Cunning Stunts", "https://static.wikia.nocookie.net/gtawiki/images/9/9f/CunningStunts-Artwork-GTAO.png/revision/latest/scale-to-width-down/1200?cb=20160707131143"),
  "bikers": gtaWikiImage("GTA Online: Bikers", "https://static.wikia.nocookie.net/gtawiki/images/9/9c/GTAOnlineBikers-Artwork-GTAO.jpg/revision/latest/scale-to-width-down/1200?cb=20161013172036"),
  "import-export": gtaWikiImage("GTA Online: Import/Export", "https://static.wikia.nocookie.net/gtawiki/images/d/de/ImportExport-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20161216190946"),
  "special-vehicle-circuit": gtaWikiImage("Special Vehicle Circuit", "https://static.wikia.nocookie.net/gtawiki/images/9/9f/CunningStunts-Artwork-GTAO.png/revision/latest/scale-to-width-down/1200?cb=20160707131143"),
  "gunrunning": gtaWikiImage("GTA Online: Gunrunning", "https://static.wikia.nocookie.net/gtawiki/images/3/39/Gunrunning-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20170607144656"),
  "smugglers-run": gtaWikiImage("GTA Online: Smuggler's Run", "https://static.wikia.nocookie.net/gtawiki/images/6/62/SmugglersRun-GTAO-Artwork.png/revision/latest/scale-to-width-down/1200?cb=20170824141957"),
  "doomsday-heist": gtaWikiImage("The Doomsday Heist", "https://static.wikia.nocookie.net/gtawiki/images/a/a3/TheDoomsdayHeist-GTAO-Artwork.png/revision/latest/scale-to-width-down/1200?cb=20171208173427"),
  "southern-san-andreas-super-sport-series": gtaWikiImage("Southern San Andreas Super Sport Series", "https://static.wikia.nocookie.net/gtawiki/images/0/05/SouthernSanAndreasSuperSportSeries-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20180320174953"),
  "after-hours": gtaWikiImage("GTA Online: After Hours", "https://static.wikia.nocookie.net/gtawiki/images/1/1c/AfterHours-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20180724205006"),
  "arena-war": gtaWikiImage("Arena War", "https://static.wikia.nocookie.net/gtawiki/images/2/28/ArenaWar-GTAO-PosterOfficial.jpg/revision/latest/scale-to-width-down/1200?cb=20190719042015"),
  "diamond-casino-resort": gtaWikiImage("GTA Online: The Diamond Casino & Resort", "https://static.wikia.nocookie.net/gtawiki/images/d/d2/TheDiamondCasino%26Resort-GTAO-PosterOfficial.jpg/revision/latest/scale-to-width-down/1200?cb=20190724194110"),
  "diamond-casino-heist": gtaWikiImage("The Diamond Casino Heist", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/TheDiamondCasinoHeist-GTAO.png/revision/latest/scale-to-width-down/1200?cb=20191214080022"),
  "los-santos-summer-special": gtaWikiImage("GTA Online: Los Santos Summer Special", "https://static.wikia.nocookie.net/gtawiki/images/e/ef/LosSantosSummerSpecial-GTAO.png/revision/latest/scale-to-width-down/1200?cb=20200811142705"),
  "cayo-perico-heist": gtaWikiImage("The Cayo Perico Heist", "https://static.wikia.nocookie.net/gtawiki/images/5/55/TheCayoPericoHeist-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20201222061436"),
  "los-santos-tuners": gtaWikiImage("GTA Online: Los Santos Tuners", "https://static.wikia.nocookie.net/gtawiki/images/6/68/GTAOnline-LosSantosTuners-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20210819234653"),
  "the-contract": gtaWikiImage("GTA Online: The Contract", "https://static.wikia.nocookie.net/gtawiki/images/1/1c/GTAOnline-TheContract-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20211215141321"),
  "criminal-enterprises": gtaWikiImage("The Criminal Enterprises", "https://static.wikia.nocookie.net/gtawiki/images/d/de/TheCriminalEnterprises-GTAOe-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20220726133540"),
  "los-santos-drug-wars": gtaWikiImage("GTA Online: Los Santos Drug Wars", "https://static.wikia.nocookie.net/gtawiki/images/7/7d/LosSantosDrugWars-GTAOe-AnnouncementArtwork.jpg/revision/latest/scale-to-width-down/1200?cb=20221208141044"),
  "san-andreas-mercenaries": gtaWikiImage("GTA Online: San Andreas Mercenaries", "https://static.wikia.nocookie.net/gtawiki/images/1/17/SanAndreasMercenaries-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20230606141219"),
  "the-chop-shop": gtaWikiImage("GTA Online: The Chop Shop", "https://static.wikia.nocookie.net/gtawiki/images/c/c5/TheChopShop-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20240122033726"),
  "bottom-dollar-bounties": gtaWikiImage("GTA Online: Bottom Dollar Bounties", "https://static.wikia.nocookie.net/gtawiki/images/9/9c/BottomDollarBounties-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20240922020632"),
  "agents-of-sabotage": gtaWikiImage("GTA Online: Agents of Sabotage", "https://static.wikia.nocookie.net/gtawiki/images/2/24/AgentsOfSabotage-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20241203160416"),
  "oscar-guzman-flies-again": gtaWikiImage("Oscar Guzman Flies Again", "https://static.wikia.nocookie.net/gtawiki/images/4/4d/OscarGuzmanFliesAgain-GTAO-Artwork.jpg/revision/latest?cb=20250306143657"),
  "money-fronts": gtaWikiImage("GTA Online: Money Fronts", "https://static.wikia.nocookie.net/gtawiki/images/6/61/MoneyFronts-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20250617140448"),
  "safehouse-in-the-hills": gtaWikiImage("GTA Online: A Safehouse in the Hills", "https://static.wikia.nocookie.net/gtawiki/images/2/2c/ASafehouseInTheHills-GTAO-Artwork.png/revision/latest/scale-to-width-down/1200?cb=20260330025009")
};

const gtaWikiGlossaryMediaByTerm = {
  "2D Universe": gtaWikiUniverseMediaById["2d"],
  "3D Universe": gtaWikiUniverseMediaById["3d"],
  "HD Universe": gtaWikiUniverseMediaById["hd"],
  "Wanted Level": gtaWikiImage("Wanted Level", "https://static.wikia.nocookie.net/gtawiki/images/7/79/GTAIV-Wanted-Level-Stars-Icons.jpg/revision/latest/scale-to-width-down/1200?cb=20260902123748", { fit: "contain" }),
  "Heist": gtaWikiImage("Heists", "https://static.wikia.nocookie.net/gtawiki/images/9/9a/PacificStandard-GTAO.png/revision/latest?cb=20170528151440"),
  "C.R.A.S.H.": gtaWikiFactionMediaById["crash"],
  "FIB": gtaWikiFactionMediaById["fib"],
  "IAA": gtaWikiFactionMediaById["iaa"],
  "NOOSE": gtaWikiFactionMediaById["noose"],
  "RAGE": gtaWikiImage("Rockstar Advanced Game Engine", "https://static.wikia.nocookie.net/gtawiki/images/0/0b/Rockstar_Advanced_Game_Engine.png/revision/latest?cb=20111211083454", { fit: "contain" }),
  "Euphoria": gtaWikiImage("Euphoria", "https://static.wikia.nocookie.net/gtawiki/images/5/59/Euphoria-Logo.jpg/revision/latest?cb=20140123003050", { fit: "contain" }),
  "Canon": gtaWikiImage("Universes", "https://static.wikia.nocookie.net/gtawiki/images/0/0f/Universes-RockstarNorthTimelineMap.png/revision/latest/scale-to-width-down/1200?cb=20240320143131"),
  "Easter egg": gtaWikiImage("Secrets and Easter Eggs in GTA V", "https://static.wikia.nocookie.net/gtawiki/images/1/1c/Alien-Egg-GTAV.png/revision/latest?cb=20150110124654", { fit: "contain" }),
  "Prequel": gtaWikiGameMediaById["liberty-city-stories"],
  "Spin-off": gtaWikiGameMediaById["gta-advance"],
  "GTA Online Organization": gtaWikiFactionMediaById["online-orgs"],
  "Leonida": gtaWikiCityMediaById["leonida"],
  "Vice City": gtaWikiCityMediaById["vice-city"]
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
  if (gtaWikiGameMediaById[item.id]) item.media = gtaWikiGameMediaById[item.id];
  else if (officialMediaByGameId[item.id]) item.media = officialMediaByGameId[item.id];
});

universeData.forEach((item) => {
  if (gtaWikiUniverseMediaById[item.id]) item.media = gtaWikiUniverseMediaById[item.id];
});

charactersData.forEach((item) => {
  if (gtaWikiCharacterMediaById[item.id]) item.media = gtaWikiCharacterMediaById[item.id];
  else if (officialMediaByCharacterId[item.id]) item.media = officialMediaByCharacterId[item.id];
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
  if (refinedCityGalleryMediaById[item.id]?.[0]) item.media = refinedCityGalleryMediaById[item.id][0];
  else if (curatedCityMediaById[item.id]) item.media = curatedCityMediaById[item.id];
  else if (gtaWikiCityMediaById[item.id]) item.media = gtaWikiCityMediaById[item.id];
  else if (officialMediaByCityId[item.id]) item.media = officialMediaByCityId[item.id];
  item.galleryMedia = (refinedCityGalleryMediaById[item.id] || cityGalleryMediaById[item.id] || [item.media]).filter(Boolean);
  item.universeGalleryMedia = Object.fromEntries(
    Object.entries(cityUniverseGalleryMediaById)
      .map(([universeId, cityMap]) => {
        const refinedMedia = refinedCityUniverseGalleryMediaById[universeId]?.[item.id];
        return [universeId, mediaArray(refinedMedia || cityMap[item.id]).filter(Boolean)];
      })
      .filter(([, media]) => media.length)
  );
  item.universeGameScope = Object.fromEntries(
    Object.entries(cityUniverseGameScopeById)
      .map(([universeId, cityMap]) => [universeId, cityMap[item.id]])
      .filter(([, games]) => mediaArray(games).length)
  );
});

factionsData.forEach((item) => {
  if (gtaWikiFactionMediaById[item.id]) item.media = gtaWikiFactionMediaById[item.id];
});

rockstarHistoryData.forEach((item, index) => {
  if (rockstarHistoryMedia[index]) item.media = rockstarHistoryMedia[index];
});

onlineTimelineData.forEach((item, index) => {
  if (gtaOnlineTimelineMedia[index]) item.media = gtaOnlineTimelineMedia[index];
});

onlineDlcData.forEach((item) => {
  if (gtaOnlineDlcMediaById[item.id]) item.media = gtaOnlineDlcMediaById[item.id];
  item.sources = [
    { label: `GTA Wiki - ${item.sourcePage || item.title}`, url: gtaWikiPage(item.sourcePage || item.title) },
    ...(item.officialSource ? [{ label: "Rockstar Newswire", url: item.officialSource }] : [])
  ];
});

glossaryData.forEach((item) => {
  Object.assign(item, glossaryDetailsByTerm[item.term] || {}, glossaryDetailData[item.term] || {});
  if (gtaWikiGlossaryMediaByTerm[item.term]) item.media = gtaWikiGlossaryMediaByTerm[item.term];
});

Object.assign(window, {
  dossierNavData,
  dossierSourcesData,
  officialMediaData,
  universeData,
  rockstarHistoryData,
  rockstarPeopleData,
  timelineChronologicalData,
  releaseTimelineData,
  gamesData,
  charactersData,
  citiesData,
  factionsData,
  developmentData,
  onlineTimelineData,
  onlineDlcData,
  gta6FactsData,
  connectionsData,
  recommendedOrderData,
  impactData,
  glossaryData
});
