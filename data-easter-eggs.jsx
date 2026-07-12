/* ============ EASTER EGGS DATA (window.EASTER_EGGS_DATA) ============
 * Catálogo de easter eggs VERIFICÁVEIS de toda a saga GTA (1997-2026).
 * Regra editorial: só entra o que é conteúdo real e scriptado no jogo (ou
 * material oficial da Rockstar, no caso de GTA VI). Mitos e lendas sem
 * confirmação (Bigfoot-lenda, Ratman, portas do bunker etc.) pertencem à
 * seção de Mistérios — aqui, quando um mito é citado, é porque a Rockstar
 * o transformou em conteúdo oficial (ex.: a missão The Last One de GTA V).
 * Fontes: conhecimento consolidado das wikis de fãs (GTA Wiki/Fandom,
 * Grand Theft Wiki) e material oficial da Rockstar Games.
 * Este arquivo NÃO renderiza nada: apenas expõe window.EASTER_EGGS_DATA.
 * Ordem no bundle: data-easter-eggs.jsx ANTES de sections-easter-eggs.jsx.
 */

/* Helpers i18n seguros (pendurados em window para evitar redeclaração de
 * const no escopo único do bundle). */
window.__T = window.__T || ((k, f) => (window.__t ? window.__t(k, f) : f));
window.__TT = window.__TT || ((p, id, field, fb) => (window.__tt ? window.__tt(p, id, field, fb) : fb));

window.EASTER_EGGS_DATA = {
  games: [
    { id: "gta1", name: "Grand Theft Auto", short: "GTA 1", year: "1997" },
    { id: "gta2", name: "Grand Theft Auto 2", short: "GTA 2", year: "1999" },
    { id: "gta3", name: "Grand Theft Auto III", short: "GTA III", year: "2001" },
    { id: "vice-city", name: "GTA: Vice City", short: "Vice City", year: "2002" },
    { id: "san-andreas", name: "GTA: San Andreas", short: "San Andreas", year: "2004" },
    { id: "portateis", name: "Portáteis (Advance · LCS · VCS)", short: "Portáteis", year: "2004-06" },
    { id: "gta4", name: "Grand Theft Auto IV", short: "GTA IV", year: "2008" },
    { id: "eflc", name: "Episodes from Liberty City (TLAD/TBoGT)", short: "EFLC", year: "2009" },
    { id: "chinatown-wars", name: "GTA: Chinatown Wars", short: "Chinatown Wars", year: "2009" },
    { id: "gta5", name: "Grand Theft Auto V", short: "GTA V", year: "2013" },
    { id: "gta-online", name: "GTA Online", short: "GTA Online", year: "2013+" },
    { id: "gta6", name: "Grand Theft Auto VI", short: "GTA VI", year: "2026" }
  ],

  categories: [
    { id: "referencia", name: "Referências (cinema & cultura pop)" },
    { id: "meta", name: "Meta & auto-referência" },
    { id: "oculto", name: "Segredos ocultos" },
    { id: "absurdo", name: "Humor & absurdo" },
    { id: "midia", name: "Mídia in-game (rádio · TV · internet)" }
  ],

  eggs: [
    /* ================= GTA 1 (1997) ================= */
    {
      id: "gta1-gouranga",
      gameId: "gta1",
      category: "absurdo",
      title: "GOURANGA! — a bênção mais errada do mundo",
      desc: "Atropelar uma fila inteira de monges Hare Krishna de uma só vez faz a tela explodir na palavra “GOURANGA!” (saudação real do movimento Krishna, que significa algo como “seja feliz”) e paga um bônus generoso de pontos. Virou uma das piadas fundadoras do humor GTA e é lembrada pela Rockstar até hoje.",
      where: "Qualquer uma das três cidades do GTA original (Liberty City, Vice City, San Andreas).",
      how: "Espere um grupo de monges de laranja andando em fila e passe por cima de todos de uma vez com o carro.",
      spoiler: false
    },
    {
      id: "gta1-travis-taxi-driver",
      gameId: "gta1",
      category: "referencia",
      title: "Travis, o motorista — aceno a Taxi Driver",
      desc: "Entre os oito criminosos selecionáveis do primeiro GTA está um chamado Travis — nome que os fãs leem, desde 1997, como piscadela a Travis Bickle, o taxista de Robert De Niro em Taxi Driver (1976). O elenco todo (Bubba, Troy, Kivlov, Ulrika...) já dava o tom debochado da série.",
      where: "Tela de seleção de personagem, antes de iniciar a partida.",
      how: "Percorra a lista de protagonistas na tela inicial; Travis é uma das opções (nas versões PC há também personagens extras).",
      spoiler: false
    },
    {
      id: "gta1-head-radio",
      gameId: "gta1",
      category: "midia",
      title: "Head Radio — a emissora que atravessa universos",
      desc: "A estação Head Radio estreia no GTA de 1997 e depois reaparece em GTA 2, GTA III e Liberty City Stories, com trilha e locutores próprios. É o exemplo mais antigo de a Rockstar tratar as rádios como um universo paralelo contínuo — mesmo quando o resto do cânone é reiniciado.",
      where: "No rádio de qualquer carro roubado.",
      how: "Entre num veículo e troque de estação até sintonizar a Head Radio.",
      spoiler: false
    },
    {
      id: "gta1-tres-cidades",
      gameId: "gta1",
      category: "meta",
      title: "Liberty, Vice e San Andreas nasceram aqui",
      desc: "O primeiro GTA já continha o mapa-múndi de toda a franquia: suas três cidades se chamam Liberty City, Vice City e San Andreas. Cada uma seria reconstruída do zero nas eras 3D e HD — e revisitar o jogo de 1997 é encontrar a “versão de rascunho” dos cenários mais famosos dos games.",
      where: "Estrutura do próprio jogo: as três cidades da campanha.",
      how: "Avance pelas fases: o jogo progride de Liberty City para San Andreas e Vice City.",
      spoiler: false
    },

    /* ================= GTA 2 (1999) ================= */
    {
      id: "gta2-elvis-has-left",
      gameId: "gta2",
      category: "absurdo",
      title: "“Elvis has left the building!”",
      desc: "Anywhere City está cheia de grupos de imitadores de Elvis andando em bando. Atropelar o grupo inteiro de uma vez dispara o bônus e a frase clássica “Elvis has left the building!” na tela — irmã espiritual do GOURANGA! do primeiro jogo.",
      where: "Calçadas de Anywhere City, em qualquer um dos três distritos de GTA 2.",
      how: "Encontre a trupe de Elvis de macacão branco e acerte todos com um único veículo.",
      spoiler: false
    },
    {
      id: "gta2-jesus-saves",
      gameId: "gta2",
      category: "absurdo",
      title: "“Jesus Saves” — salvar o jogo é literal",
      desc: "Em GTA 2, salvar o progresso significa entrar numa igreja com um letreiro enorme escrito “Jesus Saves” (“Jesus salva” — trocadilho com “save” de gravar o jogo). Ao pagar o dízimo de US$ 50 mil, uma voz grita “Hallelujah!”. É um dos trocadilhos de interface mais lembrados da era 2D.",
      where: "Igrejas com letreiro “Jesus Saves” nos três distritos de Anywhere City.",
      how: "Entre na igreja carregando pelo menos US$ 50.000 para “doar” e gravar o progresso.",
      spoiler: false
    },
    {
      id: "gta2-krishna-gouranga",
      gameId: "gta2",
      category: "meta",
      title: "Hare Krishna promovidos a gangue",
      desc: "Os monges atropeláveis do primeiro jogo voltam em GTA 2 como uma facção completa: os Krishna, com território, missões e veículos próprios (a perua Karma Bus). A piada interna continua — o bônus GOURANGA! segue no jogo, agora contra uma gangue inteira que responde a tiros.",
      where: "Distrito residencial de Anywhere City, território dos Krishna.",
      how: "Trabalhe para (ou contra) os Krishna nos telefones de missão do distrito residencial; atropele monges em fila para o bônus clássico.",
      spoiler: false
    },
    {
      id: "gta2-filme-live-action",
      gameId: "gta2",
      category: "midia",
      title: "O curta live-action oficial de GTA 2",
      desc: "Para promover o jogo, a Rockstar filmou um curta de ação ao vivo (~8 minutos) em Nova York mostrando Claude Speed roubando carros e fugindo da polícia — cenas dele abrem o próprio jogo. Foi a primeira vez que a série ganhou “carne e osso”, décadas antes dos trailers cinematográficos de hoje.",
      where: "Introdução do jogo (versões PC/Dreamcast) e material promocional oficial da Rockstar.",
      how: "Assista à abertura do jogo ou procure o curta oficial “GTA 2: The Movie” publicado pela própria Rockstar.",
      spoiler: false
    },
    {
      id: "gta2-claude-speed",
      gameId: "gta2",
      category: "meta",
      title: "Claude Speed e o Claude mudo de GTA III",
      desc: "O protagonista de GTA 2 se chama Claude Speed (nome revelado no manual e no curta oficial). Dois anos depois, GTA III trouxe um protagonista mudo que San Andreas confirmaria chamar-se Claude — Catalina o chama pelo nome. A Rockstar nunca confirmou oficialmente que são a mesma pessoa, mas a coincidência é proposital o bastante para alimentar fãs até hoje.",
      where: "Manual e curta de GTA 2; diálogos de Catalina em GTA San Andreas.",
      how: "Compare o material oficial de GTA 2 com as falas de Catalina em SA (“Claude”) — e tire suas próprias conclusões.",
      spoiler: false
    },

    /* ================= GTA III (2001) ================= */
    {
      id: "gta3-ghost-town-placa",
      gameId: "gta3",
      category: "oculto",
      title: "“You weren't supposed to be able to get here, you know.”",
      desc: "Fora do mapa jogável existe a “Ghost Town”: o pedaço de cidade usado só na cutscene de abertura (o assalto ao banco). Quem consegue voar até lá encontra um outdoor com a bronca da Rockstar: “Você não deveria conseguir chegar aqui, sabia?”. É um dos easter eggs mais lendários da era 3D.",
      where: "Ghost Town, área cenográfica flutuante a noroeste de Shoreside Vale, fora dos limites do mapa.",
      how: "Domine o instável avião Dodo (ou use glitches de voo) e siga para além das montanhas de Shoreside Vale até avistar o cenário do prólogo.",
      spoiler: false
    },
    {
      id: "gta3-lua-sniper",
      gameId: "gta3",
      category: "absurdo",
      title: "Atirar na Lua muda o tamanho dela",
      desc: "Um tiro de rifle sniper na Lua faz o satélite crescer ou encolher, ciclando entre vários tamanhos absurdos. A brincadeira estreou em GTA III e foi mantida em Vice City e San Andreas — e virou tradição tão querida que a Rockstar a homenageou em jogos posteriores.",
      where: "Céu noturno de Liberty City (e depois Vice City e San Andreas).",
      how: "Espere anoitecer, mire a luneta do rifle de precisão na Lua e atire repetidas vezes.",
      spoiler: false
    },
    {
      id: "gta3-two-faced-tanner",
      gameId: "gta3",
      category: "meta",
      title: "Two-Faced Tanner — alfinetada no rival Driver",
      desc: "Na missão “Two-Faced Tanner”, Asuka manda Claude eliminar um policial disfarçado que “anda de um jeito estranho” e é “inútil fora do carro” — uma zombaria direta de Tanner, herói da série Driver, cujas seções a pé eram criticadas. A rivalidade entre as produtoras rendeu respostas dos dois lados.",
      where: "Missão “Two-Faced Tanner”, dada por Asuka Kasen em Staunton Island.",
      how: "Avance na linha de missões da Asuka até receber o contrato contra o “dançarino esquisito”.",
      spoiler: false
    },
    {
      id: "gta3-el-burro",
      gameId: "gta3",
      category: "meta",
      title: "El Burro, o chefe que voltou do GTA de 1997",
      desc: "O chefão dos Diablos que dá missões por telefone público em GTA III é El Burro — exatamente o mesmo contratante do GTA original de 1997, também em Liberty City. Foi uma das primeiras pontes diretas entre o universo 2D e o 3D.",
      where: "Telefone público em Hepburn Heights, Portland.",
      how: "Atenda o telefone tocando em Hepburn Heights após liberar as missões dos Diablos.",
      spoiler: false
    },
    {
      id: "gta3-pets-overnight",
      gameId: "gta3",
      category: "midia",
      title: "PetsOvernight.com — o anúncio que existia de verdade",
      desc: "As rádios de GTA III anunciam absurdos como o PetsOvernight.com, site que entrega “bichinhos de estimação pelo correio em caixas”. A Rockstar registrou o domínio na vida real com uma página-piada completa — inaugurando a tradição de levar a sátira do jogo para a internet de verdade.",
      where: "Intervalos comerciais das rádios de Liberty City (e, à época, no navegador de verdade).",
      how: "Ouça os blocos de anúncios de qualquer estação; os comerciais falsos rodam entre as músicas.",
      spoiler: false
    },
    {
      id: "gta3-chatterbox-lazlow",
      gameId: "gta3",
      category: "midia",
      title: "Chatterbox FM — uma hora de rádio-esquete escondida",
      desc: "A Chatterbox FM é uma estação inteira sem música: só Lazlow atendendo ouvintes insanos de Liberty City, incluindo cidadãos que defendem “deixar as crianças brigarem com facas” e o líder do culto que pede voluntários. É praticamente um episódio de comédia de uma hora escondido dentro do jogo — e lançou Lazlow como personagem recorrente da saga.",
      where: "Rádio Chatterbox FM, em qualquer veículo de Liberty City.",
      how: "Sintonize a Chatterbox e deixe rodar; o programa completo tem cerca de uma hora de ligações.",
      spoiler: false
    },
    {
      id: "gta3-cheat-chitty",
      gameId: "gta3",
      category: "referencia",
      title: "CHITTYCHITTYBB — o código do carro voador",
      desc: "O cheat que deixa os carros de GTA III planarem ao ganhar velocidade se digita “CHITTYCHITTYBB” — referência direta a Chitty Chitty Bang Bang (1968), o filme do carro voador. Os códigos da era 3D eram piadas em si: cada senha era uma frase cômica escolhida a dedo.",
      where: "Digitado durante o jogo (versão PC) ou via sequência de botões no console.",
      how: "No PC, digite CHITTYCHITTYBB durante a partida, acelere ao máximo e levante voo.",
      spoiler: false
    },
    {
      id: "gta3-maibatsu-monstrosity",
      gameId: "gta3",
      category: "meta",
      title: "Maibatsu Monstrosity — a marca que veio de GTA 2",
      desc: "O comercial do “Maibatsu Monstrosity”, SUV gigantesco que “mal cabe na rua”, satiriza a febre dos utilitários — e a marca japonesa Maibatsu é herdada de GTA 2, onde aparecia como fabricante (Maibatsu Thunder). A montadora fictícia seguiria viva até o universo HD.",
      where: "Intervalos comerciais das rádios de GTA III.",
      how: "Ouça os anúncios das rádios até o comercial do Monstrosity; em GTA 2, procure a Maibatsu na frota da cidade.",
      spoiler: false
    },

    /* ================= VICE CITY (2002) ================= */
    {
      id: "vc-ovo-de-pascoa-literal",
      gameId: "vice-city",
      category: "oculto",
      title: "O ovo de Páscoa LITERAL (com “Happy Easter!”)",
      desc: "O easter egg definitivo: uma sala secreta sem porta escondida entre dois prédios contém apenas um pedestal com um ovo de chocolate gigante e a inscrição “Happy Easter!”. É a Rockstar transformando o termo “easter egg” em piada física — e virou o exemplo canônico citado em qualquer lista do gênero.",
      where: "Downtown de Vice City, no quarteirão do estúdio da VCN (o prédio do helicóptero de notícias).",
      how: "Suba ao telhado do prédio ao lado do estúdio da VCN e pule na direção da janela sem vidro do edifício vizinho: você atravessa e cai na sala do ovo.",
      spoiler: false
    },
    {
      id: "vc-apartamento-3c-scarface",
      gameId: "vice-city",
      category: "referencia",
      title: "Apartamento 3C — o banheiro de Scarface",
      desc: "Dentro do discreto Apartment 3C existe um banheiro com paredes cobertas de sangue e uma motosserra à disposição — recriação da cena do motel de Scarface (1983), em que Tony Montana quase morre serrado. Vice City inteira é uma carta de amor à Miami oitentista de Brian De Palma, e esse é o bilhete mais explícito.",
      where: "Apartment 3C, Ocean Drive, Ocean Beach.",
      how: "Encontre a porta marrom com “3C” perto do Pole Position Club, entre e vá até o banheiro; a motosserra fica lá para pegar.",
      spoiler: false
    },
    {
      id: "vc-final-scarface",
      gameId: "vice-city",
      category: "referencia",
      title: "O finale na escadaria — Tony Montana completo",
      desc: "A missão final coloca Tommy defendendo sua mansão de dezenas de invasores a partir da escadaria dupla do salão principal — coreografia idêntica ao clímax de Scarface, mansão essa que já é uma réplica da casa de Tony Montana. A diferença é que, aqui, o chefão pode vencer.",
      where: "Vercetti Estate, Starfish Island — missão “Keep Your Friends Close...”.",
      how: "Complete a campanha: a última missão da história recria o cerco à mansão.",
      spoiler: true
    },
    {
      id: "vc-vice-squad-miami-vice",
      gameId: "vice-city",
      category: "referencia",
      title: "A dupla de policiais saída de Miami Vice",
      desc: "Ao subir o nível de procurado, dois policiais à paisana de terno claro aparecem caçando Tommy num Vice Cheetah branco — esportivo inspirado na Ferrari Testarossa de Sonny Crockett e Rico Tubbs, os tiras de Miami Vice. O próprio nome da cidade e a estética neon do jogo completam a homenagem à série.",
      where: "Ruas de Vice City, durante perseguições com 3+ estrelas de procurado.",
      how: "Alcance três estrelas de procurado e observe o Vice Cheetah branco com a dupla de policiais “fashion” no seu encalço.",
      spoiler: false
    },
    {
      id: "vc-piscina-rockstar",
      gameId: "vice-city",
      category: "meta",
      title: "A piscina em formato do logo da Rockstar",
      desc: "Uma das mansões de Starfish Island tem a piscina construída no formato exato do “R estrelado” da Rockstar Games. É uma assinatura discreta dos desenvolvedores, visível por inteiro apenas de cima.",
      where: "Mansão em Starfish Island, entre Ocean Beach e o continente.",
      how: "Sobrevoe Starfish Island de helicóptero (ou olhe o mapa/satélite) e procure a piscina com o formato do logotipo.",
      spoiler: false
    },
    {
      id: "vc-kent-paul-site",
      gameId: "vice-city",
      category: "midia",
      title: "KentPaul.com — o site oitentista do malandro",
      desc: "Para promover o jogo, a Rockstar publicou na internet real o site pessoal de Kent Paul, o empresário inglês metido do submundo, escrito em primeira pessoa como uma “zona de nostalgia dos anos 80”. O personagem falava do jogo como se fosse a vida dele — marketing in-character pioneiro.",
      where: "Na internet de verdade (domínio kentpaul.com, hoje arquivado) e nas cenas do jogo.",
      how: "Procure o site arquivado pelos fãs; no jogo, conheça Paul no Malibu Club.",
      spoiler: false
    },
    {
      id: "vc-pastor-richards-estatua",
      gameId: "vice-city",
      category: "midia",
      title: "Pastor Richards e a Estátua da Salvação",
      desc: "No programa de rádio Pressing Issues (VCPR), o televangelista Pastor Richards promete salvar os fiéis do apocalipse levando-os numa “Estátua da Salvação” — um foguete-arranha-céu em formato dele mesmo, financiado por doações. A sátira aos telepregadores dos anos 80 é um dos áudios mais afiados que a Rockstar já gravou.",
      where: "Rádio VCPR (Vice City Public Radio), programa Pressing Issues.",
      how: "Sintonize a VCPR e ouça o debate completo com o Pastor Richards, Callum Crayshaw e Jan Brown.",
      spoiler: false
    },
    {
      id: "vc-love-fist",
      gameId: "vice-city",
      category: "absurdo",
      title: "Love Fist — a banda de glam metal mais idiota do mundo",
      desc: "A banda escocesa Love Fist (sucessos: “Fist Fury” e “Dangerous Bastard”) é uma paródia ambulante do hair metal dos anos 80, no espírito de Spinal Tap: excessos, limusine própria, fãs histéricas e um psicopata querendo explodi-los. Tommy vira segurança da turnê em duas missões — e as músicas completas da banda tocam na V-Rock.",
      where: "Missões “Love Juice” e “Psycho Killer”; músicas na rádio V-Rock.",
      how: "Complete as missões do estúdio da banda (via Kent Paul) e ouça a V-Rock para as faixas completas.",
      spoiler: false
    },
    {
      id: "vc-auntie-poulet-miss-cleo",
      gameId: "vice-city",
      category: "referencia",
      title: "Auntie Poulet é a Miss Cleo de verdade",
      desc: "A matriarca haitiana que hipnotiza Tommy com seus chás é dublada por Youree Dell Harris — a “Miss Cleo”, vidente jamaicana (de mentira) dos infomercials de tarô que dominaram a TV americana no fim dos anos 90. Escalar a cartomante mais famosa da telinha para uma bruxa de videogame é puro deboche Rockstar.",
      where: "Missões de Auntie Poulet em Little Haiti.",
      how: "Atenda ao chamado da cabana de Auntie Poulet em Little Haiti e repare na voz — é a própria.",
      spoiler: false
    },

    /* ================= SAN ANDREAS (2004) ================= */
    {
      id: "gta-sa-gant-bridge",
      gameId: "san-andreas",
      category: "meta",
      title: "“There are no Easter Eggs up here. Go away.”",
      desc: "No topo da torre da Gant Bridge (a Golden Gate de San Fierro), uma placa avisa: “Não há easter eggs aqui em cima. Vá embora.” — o que, claro, faz dela o próprio easter egg. É a resposta bem-humorada da Rockstar aos jogadores que escalavam cada centímetro dos mapas atrás de segredos.",
      where: "Plataforma no topo da torre norte da Gant Bridge, San Fierro.",
      how: "Use o jetpack (ou salte de paraquedas de um avião) até a pequena plataforma no topo da torre da ponte.",
      spoiler: false
    },
    {
      id: "gta-sa-area-69",
      gameId: "san-andreas",
      category: "referencia",
      title: "Area 69 — a Área 51 com o humor da casa",
      desc: "A base militar secreta do deserto se chama Area 69, sátira dupla: o número piscadela e a lendária Área 51 de Nevada, capital das teorias de conspiração alienígena. Sobrevoá-la gera nível de procurado instantâneo e mísseis terra-ar; por dentro, na missão Black Project, há laboratórios subterrâneos e o jetpack.",
      where: "Deserto de Bone County, entre Las Venturas e o Monte Chiliad.",
      how: "Invada pela superfície na missão “Black Project” do The Truth — ou sobrevoe por conta própria e tente escapar dos mísseis.",
      spoiler: false
    },
    {
      id: "gta-sa-epsilon-kifflom",
      gameId: "san-andreas",
      category: "oculto",
      title: "Kifflom! — o nascimento do Culto Epsilon",
      desc: "O Programa Epsilon estreia em San Andreas como ruído de fundo: o guru Cris Formage dá entrevista surreal na rádio WCTR, pichações e pedestres soltam “Kifflom!”, e a Rockstar publicou o site epsilonprogram.com na internet de verdade, cheio de dogmas absurdos (“o mundo tem 157 anos”). A seita viraria missão jogável só em GTA V.",
      where: "Rádio WCTR, falas de pedestres e o site real epsilonprogram.com.",
      how: "Ouça o talk show da WCTR com Cris Formage e visite o site oficial do culto para “estudar” os 12 princípios.",
      spoiler: false
    },
    {
      id: "gta-sa-body-harvest",
      gameId: "san-andreas",
      category: "meta",
      title: "Body Harvest — homenagem ao passado da DMA",
      desc: "A missão em que CJ rouba uma colheitadeira para o The Truth se chama “Body Harvest” — mesmo nome do jogo de 1998 da DMA Design (estúdio que viraria a Rockstar North), no qual alienígenas colhem humanos... inclusive com colheitadeiras. É a Rockstar assinando a própria certidão de nascimento dentro do jogo.",
      where: "Missão “Body Harvest”, dada pelo The Truth na fazenda de Leafy Hollow.",
      how: "Avance na história em San Fierro até o The Truth pedir a colheitadeira da fazenda dos sobrevivencialistas.",
      spoiler: false
    },
    {
      id: "gta-sa-true-grime",
      gameId: "san-andreas",
      category: "meta",
      title: "True Grime: Street Cleaners — deboche do rival",
      desc: "Em Los Santos existe a empresa “True Grime: Street Cleaners”, zombaria do jogo rival True Crime: Streets of LA (2003), que tentou competir com GTA usando a Los Angeles real. A Rockstar respondeu transformando o concorrente em firma de limpeza urbana.",
      where: "Letreiros e anúncios em Los Santos.",
      how: "Repare nos letreiros “True Grime” pelos prédios comerciais de Los Santos (e no trocadilho impiedoso).",
      spoiler: false
    },
    {
      id: "gta-sa-catalina-claude",
      gameId: "san-andreas",
      category: "meta",
      title: "Catalina + Claude: a ponte viva para GTA III",
      desc: "A explosiva Catalina abandona CJ por um piloto de rachas calado, vindo de Liberty City — Claude, o protagonista de GTA III. San Andreas (1992) planta assim o prólogo do jogo de 2001: os dois partem juntos para Liberty City, onde ela o trairá no assalto ao banco que abre GTA III. CJ ainda zomba: chama Claude de “boneco mudo”.",
      where: "Missões de corrida “Wu Zi Mu” e “Farewell, My Love...”, na zona rural de Red County.",
      how: "Complete as corridas contra Catalina e seu novo namorado; a garagem dele em Doherty também vira propriedade de CJ depois.",
      spoiler: false
    },
    {
      id: "gta-sa-saint-marks-bistro",
      gameId: "san-andreas",
      category: "meta",
      title: "Voo direto para a Liberty City de GTA III",
      desc: "Na missão “Saint Mark's Bistro”, CJ embarca num jato e invade um restaurante da máfia em plena Liberty City — o mesmo Saint Mark's de GTA III, recriado no motor de San Andreas e coberto de neve. É a única visita jogável de um protagonista 3D à cidade de outro jogo da era.",
      where: "Missão “Saint Mark's Bistro”, dada por Salvatore Leone no Caligula's Palace, Las Venturas.",
      how: "Avance na linha de missões do cassino Caligula's até Salvatore despachar CJ para Liberty City.",
      spoiler: false
    },
    {
      id: "gta-sa-djs-famosos",
      gameId: "san-andreas",
      category: "midia",
      title: "Axl Rose, George Clinton e Chuck D nas rádios",
      desc: "As rádios de San Andreas escondem um elenco absurdo: Axl Rose (Guns N' Roses) é o DJ Tommy “The Nightmare” Smith na K-DST, George Clinton é o Funktipus da Bounce FM e Chuck D (Public Enemy) dubla Forth Right MC na Playback FM. Sim, o vocalista do Guns apresentando rock clássico é canônico.",
      where: "Rádios K-DST, Bounce FM e Playback FM.",
      how: "Sintonize as estações e preste atenção nas vozes entre as músicas — os créditos do jogo confirmam o elenco.",
      spoiler: false
    },
    {
      id: "gta-sa-lil-probe-inn",
      gameId: "san-andreas",
      category: "oculto",
      title: "Lil' Probe'Inn — o bar dos caçadores de OVNIs",
      desc: "Perto da Area 69 fica o Lil' Probe'Inn, bar temático de abduções com fotos de discos voadores nas paredes e um mapa de San Andreas cravejado de marcações de “avistamentos”. O mapa alimentou anos de caça a mistérios — mas o bar em si é 100% real e visitável, decoração conspiratória inclusa.",
      where: "Bar isolado à beira da estrada em Bone County, nas imediações da Area 69, deserto de Las Venturas.",
      how: "Dirija até o bar isolado de beira de estrada no deserto e entre: o interior tem jukebox, fotos de OVNIs e o famoso mapa.",
      spoiler: false
    },
    {
      id: "gta-sa-area-53",
      gameId: "san-andreas",
      category: "midia",
      title: "Area 53 — o programa de rádio dos paranoicos",
      desc: "A WCTR transmite o “Area 53”, talk show apresentado por Marvin Trill dedicado a conspirações, alienígenas e governo nas sombras — paródia dos programas noturnos tipo Coast to Coast AM. O nome ainda brinca com a própria Area 69 do jogo: nem a numerologia conspiratória escapa da sátira.",
      where: "Rádio WCTR (a estação falada de San Andreas).",
      how: "Sintonize a WCTR e aguarde o bloco do Area 53, com ouvintes relatando abduções.",
      spoiler: false
    },

    /* ================= PORTÁTEIS (2004-2006) ================= */
    {
      id: "port-advance-8ball",
      gameId: "portateis",
      category: "meta",
      title: "8-Ball, de coadjuvante de GTA III a astro do GBA",
      desc: "GTA Advance (2004), a versão top-down de Game Boy Advance, promove 8-Ball — o especialista em bombas de GTA III — a coprotagonista, parceiro do herói Mike um ano antes dos eventos do jogo de PS2. A morte dele em Advance conecta-se diretamente à linha do tempo de Liberty City.",
      where: "Campanha de GTA Advance, ambientada na Liberty City de GTA III.",
      how: "Jogue os primeiros capítulos de GTA Advance: 8-Ball é o contratante e amigo de Mike.",
      spoiler: true
    },
    {
      id: "port-lcs-toni-cipriani",
      gameId: "portateis",
      category: "meta",
      title: "Toni Cipriani — o chefe de missões virou protagonista",
      desc: "Liberty City Stories (2005) é estrelado por Toni Cipriani, o mafioso que em GTA III era apenas um dador de missões escondido da polícia no restaurante da mãe. LCS se passa em 1998, três anos antes, e explica como Toni ganhou (e pagou) seu lugar na família Leone.",
      where: "Campanha completa de GTA: Liberty City Stories.",
      how: "Jogue LCS e compare com as missões de Toni em GTA III (“Cipriani's Ristorante”, Portland).",
      spoiler: false
    },
    {
      id: "port-lcs-fort-staunton",
      gameId: "portateis",
      category: "meta",
      title: "A cratera de LCS que explica o canteiro de obras de GTA III",
      desc: "Em LCS, Toni implode o bairro inteiro de Fort Staunton com explosivos no metrô abandonado. Resultado: em GTA III, que se passa três anos depois, aquele exato quarteirão de Staunton Island é o grande canteiro de obras da Panlantic Construction. Continuidade urbana entre dois jogos lançados fora de ordem.",
      where: "Missão “Bringing the House Down” (LCS) e o canteiro de obras de Staunton Island (GTA III).",
      how: "Complete a missão em LCS e visite o mesmo endereço em GTA III para ver o “antes e depois”.",
      spoiler: true
    },
    {
      id: "port-vcs-victor-vance",
      gameId: "portateis",
      category: "meta",
      title: "Victor Vance: o protagonista que morre na abertura de outro jogo",
      desc: "Vice City Stories (2006) conta a ascensão de Victor Vance em 1984. O detalhe cruel: Victor é o traficante que morre na emboscada da cena de abertura de GTA Vice City (1986), lançado quatro anos antes. Ou seja, a Rockstar deu um jogo inteiro ao personagem que os fãs viram morrer em 30 segundos.",
      where: "Campanha de VCS e cutscene inicial de GTA Vice City (o negócio de drogas emboscado).",
      how: "Termine VCS e reassista à intro de Vice City: o homem de macacão ao lado de Ken Rosenberg é Victor.",
      spoiler: true
    },
    {
      id: "port-vcs-phil-collins",
      gameId: "portateis",
      category: "referencia",
      title: "Phil Collins em pessoa — o primeiro artista real jogável na saga",
      desc: "Em VCS, Victor vira segurança de ninguém menos que Phil Collins, dublado por ele mesmo — primeira celebridade real a aparecer como personagem na série. A recompensa: assistir ao show completo de “In the Air Tonight” no estádio, recriado dentro do jogo.",
      where: "Missões “Kill Phil”, “Kill Phil: Part 2” e o show no Hyman Memorial Stadium.",
      how: "Complete as missões de proteção ao cantor; depois, compre ingresso no estádio para rever o show quando quiser.",
      spoiler: false
    },
    {
      id: "port-vcs-domestobot",
      gameId: "portateis",
      category: "referencia",
      title: "Domo Arigato Domestoboto — Styx e o robô mordomo",
      desc: "Numa das missões mais malucas da era PSP, Victor controla remotamente um Domestobot — robô mordomo de mansão — para vasculhar a casa de um alvo. O título da missão, “Domo Arigato Domestoboto”, parafraseia o refrão de “Mr. Roboto” do Styx (1983); o robô ainda tem funções escondidas, como acender charutos.",
      where: "Missão “Domo Arigato Domestoboto”, em Vice City Stories.",
      how: "Avance nas missões do empresário Ricardo Diaz até assumir o controle do robô.",
      spoiler: false
    },
    {
      id: "port-phil-cassidy-braco",
      gameId: "portateis",
      category: "meta",
      title: "O braço de Phil Cassidy — continuidade em três jogos",
      desc: "O traficante de armas Phil Cassidy aparece com os dois braços em VCS (1984), perde o braço esquerdo num acidente com “boomshine” em Vice City (1986, missão “Boomshine Saigon”) e ressurge maneta em GTA III (2001) vendendo armamento pesado. Uma cicatriz acompanhada com rigor por 17 anos de cronologia interna.",
      where: "VCS (Phil inteiro), VC (missão “Boomshine Saigon”) e GTA III (Phil's Army Surplus, maneta).",
      how: "Acompanhe o personagem nos três jogos e observe o braço — a série nunca esquece.",
      spoiler: false
    },

    /* ================= GTA IV (2008) ================= */
    {
      id: "gta4-coracao-estatua",
      gameId: "gta4",
      category: "oculto",
      title: "O coração acorrentado da Estátua da Felicidade",
      desc: "Dentro da Estátua da Felicidade (a “Estátua da Liberdade” de Liberty City) bate um coração humano gigante, preso por correntes — visível ao subir uma escada interna. Para achá-lo, é preciso ignorar o aviso nas portas do pedestal: “No Hidden Content This Way” (“não há conteúdo escondido por aqui”), a mentira mais deslavada da Rockstar.",
      where: "Happiness Island, plataforma no pedestal da estátua, atrás das portas com a placa “No Hidden Content This Way”.",
      how: "Voe de helicóptero até a plataforma superior do pedestal, atravesse a porta “sem conteúdo escondido” e suba a escada central até a câmara do coração.",
      spoiler: false
    },
    {
      id: "gta4-cafe-da-estatua",
      gameId: "gta4",
      category: "meta",
      title: "A estátua segura um copo de café quente",
      desc: "Em vez de tocha, a Estátua da Felicidade ergue um copo de café fumegante — piada autodepreciativa com o escândalo “Hot Coffee” de San Andreas, que rendeu processos e recall nos EUA. O rosto sorridente da estátua, amplamente comparado ao de Hillary Clinton (senadora por NY na época), completa a provocação.",
      where: "Happiness Island, no topo da Estátua da Felicidade.",
      how: "Aproxime-se de helicóptero ou use a mira de um rifle da balsa/margem para ver o copo erguido e o sorriso.",
      spoiler: false
    },
    {
      id: "gta4-littlelacy-5-estrelas",
      gameId: "gta4",
      category: "midia",
      title: "O site que te dá 5 estrelas na hora",
      desc: "Navegar até “littlelacysurprisepageant.com” num computador do jogo faz a tela avisar que aquilo é uma operação policial — e Niko ganha instantaneamente nível máximo de procurado dentro da lan house. A internet completa de GTA IV (dezenas de sites-paródia navegáveis) esconde várias dessas armadilhas cômicas.",
      where: "Qualquer computador: lan houses TW@, apartamento de Niko ou delegacias.",
      how: "Abra o navegador do jogo, digite o endereço e prepare-se para fugir do próprio cibercafé.",
      spoiler: false
    },
    {
      id: "gta4-roupa-claude",
      gameId: "gta4",
      category: "meta",
      title: "As roupas de Claude no armário de Playboy X",
      desc: "Se Niko decide eliminar Playboy X, herda seu apartamento — e no armário aparece o figurino completo de Claude, o protagonista mudo de GTA III: jaqueta preta, calça verde. Vestir o traje do herói do universo anterior é o presente da Rockstar para os veteranos (e vale conquista/troféu).",
      where: "Closet da cobertura de Playboy X, em Northwood, Algonquin.",
      how: "Na missão “The Holland Play”, escolha matar Playboy X; volte ao apartamento herdado e abra o guarda-roupa.",
      spoiler: true
    },
    {
      id: "gta4-comedy-club-real",
      gameId: "gta4",
      category: "referencia",
      title: "Ricky Gervais e Katt Williams no palco de Liberty City",
      desc: "O clube Split Sides apresenta shows de stand-up de Ricky Gervais e Katt Williams — os comediantes reais, com rotinas gravadas (e rostos digitalizados, no caso de Gervais) exclusivas para o jogo. Niko pode pagar ingresso e assistir de plateia, de preferência num encontro romântico.",
      where: "Split Sides Comedy Club, The Triangle, Algonquin.",
      how: "Compre ingresso no clube (sozinho ou levando um contato/encontro) e escolha o show em cartaz.",
      spoiler: false
    },
    {
      id: "gta4-tv-parodias",
      gameId: "gta4",
      category: "midia",
      title: "TV de verdade dentro do jogo: Republican Space Rangers & cia.",
      desc: "GTA IV inaugurou a televisão assistível: sentado no sofá, Niko pode ver o desenho belicista “Republican Space Rangers”, o reality de ostentação “I'm Rich” e o documentário “A History of Liberty City” — sátiras completas, com episódios inteiros produzidos só para ficarem escondidos dentro de um apartamento virtual.",
      where: "Qualquer televisão nos esconderijos de Niko.",
      how: "Aperte o comando de sentar no sofá, ligue a TV e troque de canal (CNT e Weazel).",
      spoiler: false
    },
    {
      id: "gta4-lazlow-integrity",
      gameId: "gta4",
      category: "meta",
      title: "Integrity 2.0 — a decadência de Lazlow em tempo real",
      desc: "Lazlow, apresentador presente desde GTA III, reaparece em IV com o programa “Integrity 2.0”, tentando desesperadamente parecer relevante enquanto humilha estagiários e persegue celebridades. A carreira em queda do personagem (dublado pelo Lazlow Jones real, então roteirista da Rockstar) é uma piada contínua que atravessa quatro jogos.",
      where: "Rádio Integrity 2.0, em Liberty City.",
      how: "Sintonize a estação em qualquer veículo e acompanhe o desastre.",
      spoiler: false
    },
    {
      id: "gta4-zit-948",
      gameId: "gta4",
      category: "midia",
      title: "ZiT! — o Shazam de Liberty City no seu celular",
      desc: "Gostou da música tocando na rádio? Ligue para 948-555-0100 no celular de Niko: o serviço ZiT! identifica a faixa e manda o nome por SMS. Um “Shazam” funcional embutido em 2008 — quando o aplicativo real ainda engatinhava.",
      where: "Celular de Niko, em qualquer lugar de Liberty City com uma música tocando.",
      how: "Abra o telefone, disque 948-555-0100 durante a música e aguarde a mensagem de texto.",
      spoiler: false
    },
    {
      id: "gta4-telefones-piada",
      gameId: "gta4",
      category: "absurdo",
      title: "Os telefones dos outdoors atendem de verdade",
      desc: "Dezenas de números espalhados em outdoors, anúncios de rádio e sites de GTA IV podem ser discados no celular de Niko — e respondem com secretárias eletrônicas hilárias, de clínicas de autoajuda a advogados picaretas. A cidade inteira é uma lista telefônica de piadas escondidas.",
      where: "Outdoors e anúncios por toda Liberty City.",
      how: "Anote qualquer número 555 visto em propaganda e ligue pelo celular do jogo.",
      spoiler: false
    },

    /* ================= EFLC (2009) ================= */
    {
      id: "eflc-diamantes-tres-jogos",
      gameId: "eflc",
      category: "meta",
      title: "Os diamantes que costuram três jogos",
      desc: "Um mesmo lote de diamantes roubados circula por GTA IV, The Lost and Damned e The Ballad of Gay Tony: a troca no museu Libertonian, por exemplo, é jogada três vezes — como Niko, como Johnny e como Luis, cada um vendo (e atrapalhando) a cena de um ângulo. O destino final das pedras é uma piada à parte.",
      where: "Missões “Museum Piece” (IV), “Collector's Item” (TLAD) e “Not So Fast” (TBoGT), no museu Libertonian.",
      how: "Jogue a cena do museu nos três títulos e monte o quebra-cabeça completo da “troca que deu errado”.",
      spoiler: true
    },
    {
      id: "eflc-princess-robot-bubblegum",
      gameId: "eflc",
      category: "midia",
      title: "Princess Robot Bubblegum — o anime impiedoso",
      desc: "The Ballad of Gay Tony adiciona à TV o anime “Princess Robot Bubblegum”, paródia demolidora de clichês de anime — tentáculos, colegiais, mechas e monólogos sem sentido inclusos. O desenho fez tanto sucesso que ganhou episódios extras e citações em GTA V e Online.",
      where: "Televisores do jogo (canal CNT), em TBoGT.",
      how: "Sente num sofá de esconderijo, ligue a TV e escolha o programa.",
      spoiler: false
    },
    {
      id: "eflc-vice-city-fm-fernando",
      gameId: "eflc",
      category: "meta",
      title: "Vice City FM — Fernando Martinez voltou dos anos 80",
      desc: "Os episódios adicionam a Vice City FM, rádio que ressuscita os hits oitentistas — apresentada por Fernando Martinez, o DJ galanteador da Emotion 98.3 de Vice City, agora envelhecido, falido e transmitindo de Liberty City. Vinte anos de cronologia contados por um locutor de rádio.",
      where: "Rádio Vice City FM, disponível em TLAD e TBoGT.",
      how: "Sintonize a VCFM em qualquer veículo dos dois episódios.",
      spoiler: false
    },
    {
      id: "eflc-memorial-lost",
      gameId: "eflc",
      category: "oculto",
      title: "O muro memorial dos Lost muda com a história",
      desc: "No clubhouse dos Lost MC existe uma parede com os nomes dos membros mortos do clube. O detalhe macabro: conforme a campanha avança e irmãos caem, novos nomes são pintados no memorial — um registro dinâmico e silencioso da tragédia da gangue.",
      where: "Clubhouse dos Lost, Acter, Alderney (The Lost and Damned).",
      how: "Visite a parede do memorial no início do jogo e retorne após as missões-chave para comparar os nomes.",
      spoiler: true
    },
    {
      id: "eflc-ouro-de-yusuf",
      gameId: "eflc",
      category: "absurdo",
      title: "O arsenal folheado a ouro de Yusuf Amir",
      desc: "O herdeiro bilionário Yusuf Amir (dublado por Omid Djalili) resolve tudo com ouro: sua submetralhadora dourada vira arma coletável no apartamento dele, e seu helicóptero de combate Buzzard dourado estrela uma das missões finais. A ostentação como easter egg jogável.",
      where: "Apartamento de Yusuf em Middle Park East e missões finais de TBoGT.",
      how: "Pegue a Gold SMG exposta no apartamento de Yusuf e pilote o Buzzard dourado na missão “...Blog This!”.",
      spoiler: false
    },

    /* ================= CHINATOWN WARS (2009) ================= */
    {
      id: "cw-liberty-city-de-iv",
      gameId: "chinatown-wars",
      category: "meta",
      title: "A Liberty City de GTA IV, agora em cel-shading",
      desc: "Chinatown Wars recria a Liberty City inteira de GTA IV (menos Alderney) em visão de cima com traço de quadrinhos — Estátua da Felicidade, Middle Park e Star Junction inclusos. Jogar os dois lado a lado é ver a mesma cidade por duas linguagens visuais completamente diferentes, com um ano de diferença no cânone (2009).",
      where: "Todo o mapa de Broker, Dukes, Bohan e Algonquin, no DS/PSP/iOS.",
      how: "Explore os marcos conhecidos de IV — dá para visitar quase todos em versão miniatura.",
      spoiler: false
    },
    {
      id: "cw-ammunation-pda",
      gameId: "chinatown-wars",
      category: "midia",
      title: "Ammu-Nation com entrega em domicílio (e marketing agressivo)",
      desc: "Huang Lee compra armas pelo site da Ammu-Nation no PDA, com direito a catálogo, promoções e e-mails de propaganda escritos no tom mais irresponsável possível — entrega feita na porta do esconderijo, sem perguntas. A sátira ao comércio de armas americano ganhou seu formato mais literal: um e-commerce.",
      where: "PDA de Huang Lee (menu de e-mail e navegador), em Chinatown Wars.",
      how: "Abra o PDA, acesse Ammu-Nation.net, encha o carrinho e aguarde o caminhão de entrega.",
      spoiler: false
    },

    /* ================= GTA V (2013) ================= */
    {
      id: "gta5-alien-congelado",
      gameId: "gta5",
      category: "oculto",
      title: "O alienígena congelado do prólogo",
      desc: "Nos primeiros minutos do jogo, em North Yankton, um desvio rápido revela um alienígena cinza congelado sob o gelo de um riacho, embaixo da ponte. É o primeiro segredo de GTA V — plantado num trecho que a maioria atravessa em 30 segundos — e a senha de entrada para toda a mitologia OVNI do jogo.",
      where: "Prólogo, North Yankton: riacho congelado sob a ponte da estrada de fuga.",
      how: "Durante a fuga do prólogo (dirigindo com Trevor), saia da estrada antes da ponte, desça ao riacho congelado e olhe através do gelo.",
      spoiler: false
    },
    {
      id: "gta5-ufo-chiliad",
      gameId: "gta5",
      category: "oculto",
      title: "O disco voador do Monte Chiliad",
      desc: "Zerando o jogo em 100%, um OVNI clássico surge pairando sobre o Monte Chiliad — mas só às 3h da manhã e com chuva, visto da plataforma do mirante. A nave exibe a inscrição-piada “segregate and rearrange”, e é a recompensa-mor dos completistas.",
      where: "Topo do Monte Chiliad, na plataforma do mirante ao lado do mural.",
      how: "Alcance 100% de conclusão, vá ao topo às 3h em clima chuvoso e olhe para cima.",
      spoiler: false
    },
    {
      id: "gta5-ufo-zancudo",
      gameId: "gta5",
      category: "oculto",
      title: "O OVNI de Fort Zancudo",
      desc: "Também após o 100%, um segundo disco voador flutua no alto do espaço aéreo de Fort Zancudo, com uma luz verde giratória projetada sobre a base às 3h. Diferente do OVNI do Chiliad, este fica em altitude elevada — é preciso subir de aeronave para vê-lo de perto (ele até tem colisão física).",
      where: "Céu diretamente acima de Fort Zancudo, em grande altitude.",
      how: "Com 100% de conclusão, sobrevoe o forte de madrugada (por volta das 3h) subindo até cerca de dois terços do teto de voo.",
      spoiler: false
    },
    {
      id: "gta5-ufo-hippy-camp",
      gameId: "gta5",
      category: "oculto",
      title: "O OVNI do acampamento hippie",
      desc: "O terceiro disco voador “vivo” do jogo paira sobre o acampamento hippie abandonado perto de Sandy Shores — exatamente acima da escultura “Beam Me Up” (“teletransporte-me”, o bordão de Star Trek). O acampamento inteiro, coberto de arte alienígena, já é um easter egg a céu aberto.",
      where: "Céu sobre o acampamento hippie ao norte de Sandy Shores, Grand Senora Desert.",
      how: "Após o 100%, suba de helicóptero na vertical do acampamento até o limite de altitude.",
      spoiler: false
    },
    {
      id: "gta5-ufo-submerso",
      gameId: "gta5",
      category: "oculto",
      title: "O disco voador naufragado (sem exigir 100%)",
      desc: "No fundo do oceano ao norte do mapa jaz um OVNI acidentado, coberto de corais — acessível a qualquer momento, sem requisito de conclusão. É o irmão “arqueológico” dos três discos voadores e prova de que a mitologia alienígena de V está entranhada no mapa desde o dia um.",
      where: "Leito oceânico na costa norte de San Andreas, a nordeste de Paleto Bay (região de North Point).",
      how: "Use o submarino (ou mergulho com cilindro) e vasculhe o fundo do mar na ponta norte do mapa.",
      spoiler: false
    },
    {
      id: "gta5-mural-chiliad",
      gameId: "gta5",
      category: "oculto",
      title: "O mural do Monte Chiliad",
      desc: "Na estação do teleférico do topo do Chiliad há um mural pintado: uma montanha com olho no topo, um OVNI, um ovo e um jetpack ligados por linhas e cinco “X”. O desenho é real e verificável — a caçada de anos que ele provocou na comunidade é outra história (e mora na nossa seção de Mistérios).",
      where: "Parede da estação superior do teleférico, cume do Monte Chiliad.",
      how: "Suba de teleférico, moto ou aeronave até o cume e contorne a estação para encontrar a pintura.",
      spoiler: false
    },
    {
      id: "gta5-epsilon-kifflom",
      gameId: "gta5",
      category: "meta",
      title: "Kifflom! — o Culto Epsilon vira missão jogável",
      desc: "Nove anos depois de nascer como boato de rádio em San Andreas, o Programa Epsilon ganha em V uma linha inteira de missões: Michael doa fortunas, veste túnica azul, atravessa o deserto e reencontra o guru Cris Formage. A sátira à cientologia culmina numa escolha moral — fugir com o dinheiro do culto ou devolvê-lo. Irmão-irmã, Kifflom!",
      where: "Strangers & Freaks de Michael, iniciando pelo site epsilonprogram.com no celular do jogo.",
      how: "Acesse o site do culto pelo celular de Michael, responda ao questionário e siga a trilha “Seeking the Truth”.",
      spoiler: false
    },
    {
      id: "gta5-the-last-one",
      gameId: "gta5",
      category: "meta",
      title: "The Last One — a piada final sobre o Pé-Grande",
      desc: "Após o 100%, Franklin encontra um caçador obcecado nas encostas do Chiliad e persegue... o Pé-Grande — que se revela um homem fantasiado há anos “vivendo o personagem”. A missão é a resposta oficial da Rockstar à lenda do Bigfoot que os fãs caçaram em San Andreas por uma década: o mito virou canon como sátira.",
      where: "Strangers & Freaks “The Last One”, ponto de interrogação a oeste do Monte Chiliad.",
      how: "Feche o jogo em 100% e volte às encostas do Chiliad com Franklin para o marcador da missão.",
      spoiler: true
    },
    {
      id: "gta5-thelma-louise",
      gameId: "gta5",
      category: "referencia",
      title: "Thelma & Louise no penhasco do Raton Canyon",
      desc: "No fim de tarde, duas mulheres num conversível encurralado pela polícia à beira do Raton Canyon apertam as mãos e aceleram para o abismo — recriação exata do desfecho de Thelma & Louise (1991), com direito a helicóptero e policiais boquiabertos. Um dos easter eggs cinematográficos mais elaborados do jogo.",
      where: "Beirada leste do Raton Canyon, perto da ponte Calafia, Chiliad Mountain State Wilderness.",
      how: "Esteja na região entre ~19h e 20h do relógio do jogo e observe (de longe ou de helicóptero) a cena se desenrolar.",
      spoiler: false
    },
    {
      id: "gta5-no-country",
      gameId: "gta5",
      category: "referencia",
      title: "Onde os fracos não têm vez — a maleta no leito do rio",
      desc: "Um encontro aleatório no deserto recria a cena inaugural de No Country for Old Men (2007): caminhonetes crivadas de balas, corpos de traficantes, drogas espalhadas — e uma maleta com US$ 25 mil esperando quem chegar primeiro. Assim como no filme, pegar o dinheiro tem consequências (aqui, dois caçadores na sua cola).",
      where: "Leito seco sob a ponte do rio Zancudo, Chiliad Mountain State Wilderness (evento aleatório).",
      how: "Explore a região até o evento aparecer no radar, desça ao leito do rio e decida se leva a maleta.",
      spoiler: false
    },
    {
      id: "gta5-grove-street",
      gameId: "gta5",
      category: "meta",
      title: "Grove Street existe — mas já não é mais a casa de CJ",
      desc: "A rua mais famosa de San Andreas volta em GTA V: o beco sem saída verde de Ganton reaparece em Davis, agora dominado pelos Ballas — para desgosto de Franklin e Lamar, que são Families. Na missão “Hood Safari”, a visita à rua vira tiroteio; grafites e o layout do beco são puro déjà-vu de 2004.",
      where: "Grove Street, bairro de Davis, Los Santos.",
      how: "Jogue “Hood Safari” ou simplesmente dirija até o beco e compare com o Ganton de San Andreas.",
      spoiler: false
    },
    {
      id: "gta5-referencias-niko",
      gameId: "gta5",
      category: "meta",
      title: "Os rastros de Niko Bellic em Los Santos",
      desc: "Niko não aparece em V, mas assombra o jogo: Lester descarta contratá-lo para os assaltos (“tinha um leste-europeu fazendo barulho em Liberty City... sumiu do mapa”), e o próprio Niko tem perfil no Lifeinvader, a rede social do jogo. Para os fãs, é a confirmação de que o sobrevivente de GTA IV se aposentou — vivo.",
      where: "Diálogo de planejamento do assalto à joalheria (Lester) e Lifeinvader, no celular/computadores do jogo.",
      how: "Preste atenção na conversa de Lester com Michael e fuce o Lifeinvader atrás do perfil de Niko.",
      spoiler: false
    },
    {
      id: "gta5-packie-mcreary",
      gameId: "gta5",
      category: "meta",
      title: "Packie McReary mudou de costa — e pode entrar pra sua equipe",
      desc: "Patrick “Packie” McReary, parceiro de assaltos de Niko em GTA IV, reaparece em V num evento aleatório: assaltando uma farmácia em Strawberry e pedindo carona. Salve a fuga dele e Packie vira contratável como especialista em armas nas heists de Michael, Franklin e Trevor — continuidade jogável entre dois universos de crime.",
      where: "Evento aleatório em Strawberry, Los Santos (esquina da farmácia).",
      how: "Encontre o assalto em andamento no radar, leve Packie em segurança e ele entrará na lista de crew das heists.",
      spoiler: false
    },
    {
      id: "gta5-karen-michelle",
      gameId: "gta5",
      category: "meta",
      title: "Michelle, de namorada falsa em IV a agente da IAA em V",
      desc: "A “Michelle” que namora Niko no início de GTA IV — e se revela agente do governo — retorna em GTA V com seu nome real, Karen, agora torturando testemunhas pela IAA na missão “Three's Company”. Poucos crossovers da série são tão diretos: mesma dubladora, mesma personagem, cinco anos e uma costa de distância.",
      where: "Missão “Three's Company” e cenas da IAA em GTA V.",
      how: "Avance na história até as missões da agência; reconheça a voz e o nome no diálogo.",
      spoiler: true
    },
    {
      id: "gta5-fantasma-mount-gordo",
      gameId: "gta5",
      category: "oculto",
      title: "O fantasma do Monte Gordo",
      desc: "Entre 23h e meia-noite, um vulto feminino espectral paira sobre uma rocha no Monte Gordo, sumindo se você se aproxima — e na pedra está escrito “Jock” em sangue. Os sites de notícias do próprio jogo contam a história: Jolene Cranley-Evans caiu (ou foi empurrada) do penhasco em 1978, e o marido, Jock Cranley — dublê que em 2013 concorre a governador de San Andreas —, foi liberado por falta de provas. Um fantasma scriptado, verificável e assustador.",
      where: "Penhasco rochoso no alto do Monte Gordo, nordeste do mapa, acima do farol de El Gordo.",
      how: "Suba o Monte Gordo entre 23h e 0h do relógio do jogo e observe a rocha marcada à distância (use zoom de sniper).",
      spoiler: false
    },
    {
      id: "gta5-infinity-killer",
      gameId: "gta5",
      category: "oculto",
      title: "O caso do Infinity Killer, o serial killer esquecido",
      desc: "Espalhadas pelo mapa há pistas de Merle Abrahams, o “Infinity Killer”: uma casa em Sandy Shores coberta de rabiscos obsessivos com o número 8, um poema sinistro sobre oito vítimas e — para quem mergulha no lugar certo — oito corpos embrulhados em plástico afundados no oceano. Uma história de crime inteira contada sem uma única missão.",
      where: "Casa rabiscada em Sandy Shores, pedra pintada na prisão de Bolingbroke e leito do mar na costa leste (Palomino Highlands).",
      how: "Leia as pichações da casa e do pátio, depois mergulhe na costa indicada pelo poema (“eight together forever”) para achar os corpos.",
      spoiler: false
    },
    {
      id: "gta5-leonora-johnson",
      gameId: "gta5",
      category: "oculto",
      title: "Quem matou Leonora Johnson? (50 pedaços de resposta)",
      desc: "Cinquenta fragmentos de uma carta espalhados pelo mapa remontam a confissão do assassinato da atriz Leonora Johnson, caso célebre não resolvido do jogo. Completada a coleção, Franklin pode confrontar o autor — Peter Dreyfuss, diretor de cinema decadente — e decidir seu destino. Um mistério policial inteiro escondido em colecionáveis.",
      where: "Fragmentos de carta espalhados por todo o mapa de San Andreas; confronto em Vinewood Hills.",
      how: "Colete os 50 “Letter Scraps” (o site do jogo e mapas de fãs ajudam) e atenda ao marcador final com Franklin.",
      spoiler: true
    },
    {
      id: "gta5-escotilha-lost",
      gameId: "gta5",
      category: "referencia",
      title: "A escotilha de Lost no fundo do oceano",
      desc: "No leito oceânico da costa leste há uma escotilha de bunker idêntica à da série Lost (2004-2010), com luz acesa piscando pela janelinha — como no episódio em que Locke encontra a “hatch”. Fica na zona mais profunda do mapa, quase no limite do oceano navegável, recompensa para mergulhadores obstinados.",
      where: "Fossa oceânica a leste do mapa, na profundidade máxima (região de Tataviam Mountains, mar aberto).",
      how: "Use o submarino Submersible e desça à fossa da costa leste até avistar a portinhola iluminada.",
      spoiler: false
    },
    {
      id: "gta5-friend-request",
      gameId: "gta5",
      category: "referencia",
      title: "Lifeinvader: o Facebook que explode na keynote",
      desc: "A rede social Lifeinvader é uma paródia frontal do Facebook (“stalke” pessoas, sede com escorregadores e programadores mimados) — e na missão “Friend Request” Michael sabota o smartphone do CEO Jay Norris, que explode ao vivo durante a própria keynote à la Zuckerberg/Jobs. A sátira ao Vale do Silício mais violenta que a Rockstar já fez.",
      where: "Missão “Friend Request” e o site lifeinvader.com dentro do jogo.",
      how: "Jogue a missão no começo da campanha de Michael; depois, use o Lifeinvader no celular para stalkear personagens.",
      spoiler: true
    },
    {
      id: "gta5-tv-parodias",
      gameId: "gta5",
      category: "midia",
      title: "A grade de TV completa: Rangers espaciais, Fúria Impotente & cia.",
      desc: "A televisão de V tem programação de verdade: o desenho “Republican Space Rangers” (imperialismo em outro planeta), o herói progressista “Impotent Rage”, o tokusatsu “Kung Fu Rainbow Lazer Force” e realities como “Fame or Shame”. Horas de sátira produzidas para quem simplesmente sentar no sofá de um esconderijo.",
      where: "Qualquer TV nas casas de Michael, Franklin e Trevor.",
      how: "Sente-se no sofá, ligue a TV e navegue pelos canais CNT e Weazel.",
      spoiler: false
    },
    {
      id: "gta5-fame-or-shame-lazlow",
      gameId: "gta5",
      category: "meta",
      title: "Lazlow em carne, osso e rabo de cavalo",
      desc: "O eterno radialista Lazlow finalmente aparece fisicamente na série: como apresentador escroto do reality “Fame or Shame”, dando em cima de Tracey — até Michael e Trevor invadirem o estúdio. A humilhação continua em missões posteriores (adeus, rabo de cavalo). É o ápice da saga de decadência iniciada em GTA III.",
      where: "Missão “Fame or Shame” e eventos seguintes da linha de Michael.",
      how: "Avance na campanha até Tracey se inscrever no programa de calouros.",
      spoiler: false
    },
    {
      id: "gta5-space-docker",
      gameId: "gta5",
      category: "oculto",
      title: "Space Docker — o buggy alienígena do Omega",
      desc: "Colete as 50 peças de nave espacial espalhadas pelo mapa para o excêntrico Omega e ele monta o Space Docker: um buggy com propulsores brilhantes, sons de OVNI e visual de tecnologia alienígena de fundo de quintal. É a recompensa oficial da linha “Far Out” — e conversa diretamente com a mitologia extraterrestre do jogo.",
      where: "Strangers & Freaks “Far Out” (Omega, Sandy Shores) + 50 Spaceship Parts pelo mapa.",
      how: "Conheça Omega com Franklin, recolha as 50 peças (brilham e emitem zumbido) e volte ao ferro-velho dele.",
      spoiler: false
    },
    {
      id: "gta5-monkey-mosaics",
      gameId: "gta5",
      category: "oculto",
      title: "Os mosaicos do macaco misterioso",
      desc: "Nas versões de nova geração, 50 grafites de macacos assinados por um artista de rua anônimo aparecem em muros escondidos. Fotografá-los desbloqueia trajes de macaco e a van do artista — e rende um dos colecionáveis mais estranhos e menos conhecidos do jogo.",
      where: "Muros, viadutos e becos por todo o mapa (versões PS4/PS5/Xbox One+/PC).",
      how: "Fotografe cada mosaico com o celular do jogo; o progresso aparece no menu de colecionáveis.",
      spoiler: false
    },
    {
      id: "gta5-peiote-bigfoot",
      gameId: "gta5",
      category: "absurdo",
      title: "Peiote: vire gaivota, veado — ou o próprio Pé-Grande",
      desc: "Comer uma das 27 plantas de peiote (nova geração) faz o personagem alucinar que É um animal — jogável, de gaivota a leão da montanha. O segredo dentro do segredo: peiotes dourados especiais transformam você num sasquatch que urra — e, cumprindo a sequência certa, desbloqueiam a caçada à criatura “Beast”.",
      where: "27 plantas de peiote espalhadas pelo mapa (PS4/PS5/Xbox One+/PC); peiotes dourados no Chiliad em condições específicas.",
      how: "Encontre e coma as plantas brilhantes; para o sasquatch, procure o peiote dourado com clima e dia certos (guias de fãs mapeiam tudo).",
      spoiler: false
    },
    {
      id: "gta5-murder-mystery",
      gameId: "gta5",
      category: "oculto",
      title: "O assassinato noir de Vinewood (Murder Mystery)",
      desc: "Nas versões de nova geração, Michael pode seguir pistas cifradas espalhadas pela cidade para desvendar um assassinato dos tempos áureos de Vinewood, encerrado numa cripta. A recompensa é temática: filtros de imagem noir/anos 40 para todo o jogo. Um caso de detetive escondido que muitos jogadores nunca viram.",
      where: "Cinco pistas em locais ligados à velha Vinewood (a primeira: um bilhete na casa de Michael... procure nos guias).",
      how: "Jogando com Michael (nova geração), encontre as cinco pistas em sequência e decifre a mensagem final.",
      spoiler: false
    },
    {
      id: "gta5-red-dead-franklin",
      gameId: "gta5",
      category: "meta",
      title: "“Red Dead”, por J. Marston — o livro na estante de Franklin",
      desc: "Na coleção de livros de Franklin há um volume azul chamado “Red Dead”, assinado por J. Marston — no universo GTA, a história de John Marston virou literatura (publicada pelo filho Jack, dedução dos fãs a partir do final de RDR). Em Strawberry, um mural de caubói a cavalo sob o viaduto reforça a homenagem ao faroeste irmão da Rockstar.",
      where: "Estante da casa de Franklin em Vinewood Hills; mural sob a via expressa em Strawberry.",
      how: "Visite a casa nova de Franklin e examine a estante da sala; depois passe no mural de Strawberry.",
      spoiler: false
    },
    {
      id: "gta5-playboy-mansion",
      gameId: "gta5",
      category: "referencia",
      title: "A Mansão Playboy de Los Santos (com festa e tudo)",
      desc: "Em Richman existe uma réplica da Mansão Playboy — gruta com cascata inclusa. À noite, a casa recebe festas com convidadas de trajes mínimos ao redor da piscina, exatamente como nas lendárias recepções de Hugh Hefner. Não há missão: é só um pedaço de Los Angeles real enfiado no mapa para quem explorar.",
      where: "Mansão em Richman, noroeste de Los Santos (atrás do campus da ULSA).",
      how: "Pule o muro à noite e vá até a piscina/gruta nos fundos — a festa é scriptada e recorrente.",
      spoiler: false
    },
    {
      id: "gta5-culto-altruista",
      gameId: "gta5",
      category: "oculto",
      title: "O Culto Altruísta come... doações",
      desc: "Trevor pode entregar caroneiros e vítimas resgatadas ao Culto Altruísta, uma seita de idosos nudistas da montanha que paga em dinheiro — até que, na quarta entrega, os velhos revelam suas intenções (canibais) e o acampamento vira zona de guerra, com maletas de dinheiro como recompensa. Humor negro em estado bruto, escondido atrás de boas ações.",
      where: "Altruist Camp, encosta do Monte Chiliad; vítimas de eventos aleatórios pelo mapa.",
      how: "Com Trevor, leve quatro pedestres resgatados ao acampamento (opção de entrega no destino) e sobreviva à surpresa final.",
      spoiler: true
    },
    {
      id: "gta5-cinema-filmes",
      gameId: "gta5",
      category: "midia",
      title: "Filmes completos em cartaz nos cinemas do jogo",
      desc: "Os cinemas de Los Santos exibem longas (curtas-metragem, na prática) completos e assistíveis: o catastrofista “Meltdown”, o existencialista “The Loneliest Robot in Great Britain” e o pretensioso “Capolavoro” — cada um satirizando um gênero de Hollywood. Compre o ingresso, sente e assista; Michael, cinéfilo, ainda comenta.",
      where: "Cinemas Oriental, Doppler e Ten Cent, em Los Santos.",
      how: "Vá a qualquer cinema marcado no mapa, pague a entrada e assista à sessão inteira.",
      spoiler: false
    },
    {
      id: "gta5-djs-reais",
      gameId: "gta5",
      category: "referencia",
      title: "Kenny Loggins, Pam Grier e Bootsy Collins no dial",
      desc: "As rádios de V escalam lendas de verdade: Kenny Loggins comanda a Los Santos Rock Radio, a diva blaxploitation Pam Grier apresenta a The Lowdown 91.1 e o baixista do funk Bootsy Collins pilota a Space 103.2. Cada um interpreta a si mesmo, com roteiro de piadas próprias — tradição herdada de San Andreas.",
      where: "Rádios Los Santos Rock Radio, The Lowdown 91.1 e Space 103.2.",
      how: "Troque de estação em qualquer veículo e fique nos intervalos falados dos DJs.",
      spoiler: false
    },

    /* ================= GTA ONLINE (2013+) ================= */
    {
      id: "gtao-revolver-rdr2",
      gameId: "gta-online",
      category: "meta",
      title: "A caça ao tesouro que termina em Red Dead Redemption 2",
      desc: "Um e-mail misterioso (“vandertramp@eyefind.com”) inicia uma caça ao tesouro pelo mapa que termina com o revólver Double-Action, arma clássica de faroeste — e completar o desafio de headshots desbloqueava a mesma arma dentro de Red Dead Redemption 2. Dois jogos, uma recompensa: crossover mecânico inédito da Rockstar.",
      where: "Caça ao tesouro em várias etapas por San Andreas (iniciada por e-mail no jogo, desde 2017).",
      how: "Receba o e-mail com a foto da pista, encontre os quatro locais e o baú final; depois cumpra o desafio de 50 headshots.",
      spoiler: false
    },
    {
      id: "gtao-machadinha-rdr2",
      gameId: "gta-online",
      category: "meta",
      title: "A machadinha de pedra de Maude (e o bônus no Velho Oeste)",
      desc: "Capturar os cinco foragidos da caçadora de recompensas Maude revela a Stone Hatchet, machadinha de pedra rústica escondida num baú — outra relíquia que, uma vez dominada, liberava recompensa correspondente em Red Dead Redemption 2. A ponte entre os dois universos da Rockstar feita de pedra lascada.",
      where: "Missões de bounty por texto de Maude Eccles (Sandy Shores), desde 2018.",
      how: "Atenda aos alvos enviados por Maude, capture (vivo ou morto) os cinco foragidos e abra o baú indicado.",
      spoiler: false
    },
    {
      id: "gtao-pais-niko-marston",
      gameId: "gta-online",
      category: "meta",
      title: "Niko Bellic ou John Marston como seu PAI",
      desc: "No criador de personagem de GTA Online, a hereditariedade permite escolher “pais especiais”: Niko Bellic (GTA IV) ou John Marston (Red Dead Redemption) podem ser o pai do seu avatar, moldando seus traços faciais. Canonicamente questionável, geneticamente hilário.",
      where: "Menu de criação/edição de personagem do GTA Online.",
      how: "Na tela de herança do criador de personagem, selecione a opção de pai especial e ajuste a semelhança.",
      spoiler: false
    },
    {
      id: "gtao-ufos-halloween",
      gameId: "gta-online",
      category: "oculto",
      title: "OVNIs (e abduções!) nos eventos de Halloween",
      desc: "Nos Halloweens de GTA Online, os discos voadores saem da aposentadoria: naves sobrevoam pontos do mapa em horários rotativos e, nos eventos mais recentes, jogadores são literalmente abduzidos por um feixe de luz — acordando sem roupa em outro canto do mapa, com recompensas temáticas. O folclore alien de V transformado em evento ao vivo.",
      where: "Céus de todo o mapa durante os eventos sazonais de outubro.",
      how: "Jogue nas semanas de Halloween, siga os avistamentos diários e deixe-se levar (literalmente) pelo feixe.",
      spoiler: false
    },
    {
      id: "gtao-djs-reais-music-locker",
      gameId: "gta-online",
      category: "referencia",
      title: "Solomun, Moodymann e a pista de dança dos DJs reais",
      desc: "As expansões After Hours e The Music Locker trouxeram DJs reais tocando sets completos nas baladas do jogo: Solomun, Tale of Us, Dixon, The Black Madonna, Moodymann, Palms Trax e Keinemusik, todos com avatares fiéis. O clube virou palco de verdade — anos antes de shows em jogos virarem moda.",
      where: "Nightclubs do After Hours e The Music Locker, sob o Diamond Casino.",
      how: "Compre/visite uma boate, cheque o line-up da semana e desça para a pista.",
      spoiler: false
    },
    {
      id: "gtao-dr-dre-contract",
      gameId: "gta-online",
      category: "referencia",
      title: "Dr. Dre perdeu o celular — e você vai achá-lo",
      desc: "Na expansão The Contract (2021), Dr. Dre em pessoa (com DJ Pooh e participação de Jimmy Iovine e Anderson .Paak) contrata a agência de Franklin para recuperar um celular com músicas inéditas — que foram lançadas de verdade dentro do jogo antes de qualquer streaming. Hollywood e hip-hop reais dobrados para dentro de Los Santos.",
      where: "Expansão “The Contract”, GTA Online.",
      how: "Abra a agência de soluções para celebridades e siga a linha de missões VIP de Dre.",
      spoiler: false
    },
    {
      id: "gtao-franklin-lamar-chop",
      gameId: "gta-online",
      category: "meta",
      title: "Franklin, Lamar e um Chop grisalho — o single-player invade o Online",
      desc: "The Contract confirmou que o modo história e o Online são o mesmo universo em épocas diferentes: Franklin aparece rico e casado, Lamar continua Lamar, e o cachorro Chop reaparece idoso e de focinho branco, oito anos depois de 2013. A passagem do tempo tratada com carinho de easter egg.",
      where: "Agência de Franklin e missões “Short Trip”, GTA Online.",
      how: "Jogue The Contract e as Short Trips com Franklin e Lamar; visite Chop no canil da agência.",
      spoiler: false
    },
    {
      id: "gtao-agente-ulp",
      gameId: "gta-online",
      category: "meta",
      title: "O contato da United Liberty Paper virou o agente ULP",
      desc: "O burocrata sem nome da “United Liberty Paper” que chantageava Niko em GTA IV retorna em GTA Online como “ULP”, agente veterano da inteligência nas missões Criminal Enterprises e Agents of Sabotage — mesmo rosto, mesma voz, catorze anos mais cansado. Prova de que nenhum fantasma da era HD é esquecido.",
      where: "Missões “Operation Paper Trail” (2022) e conteúdos seguintes do GTA Online.",
      how: "Jogue as missões da linha ULP e compare com as cenas do escritório da U.L. Paper em GTA IV.",
      spoiler: false
    },

    /* ================= GTA VI (2026) ================= */
    {
      id: "gta6-jacare-conveniencia",
      gameId: "gta6",
      category: "absurdo",
      title: "O jacaré que entra na loja de conveniência",
      desc: "O primeiro trailer (dez/2023) consagrou o réptil mais famoso da nova geração: um jacaré caminhando tranquilamente pela porta de uma lojinha de conveniência de Leonida, além de outro sendo retirado de uma piscina doméstica. A Rockstar confirmou o tom: a Flórida satírica de GTA VI tem fauna com livre acesso ao varejo.",
      where: "Trailer 1 oficial de GTA VI (cenas da loja de conveniência e da piscina).",
      how: "Reassista ao Trailer 1 no canal oficial da Rockstar — os jacarés roubam a cena duas vezes.",
      spoiler: false
    },
    {
      id: "gta6-lucia-bad-luck",
      gameId: "gta6",
      category: "absurdo",
      title: "“Bad luck, I guess” — a estreia de Lucia virou meme mundial",
      desc: "O Trailer 1 abre com Lucia, primeira protagonista mulher da era moderna, respondendo no presídio por que foi parar ali: “Azar, eu acho”. A resposta seca virou meme instantâneo e transformou Lucia num fenômeno de internet horas depois do trailer quebrar recordes de visualização no YouTube.",
      where: "Abertura do Trailer 1: sessão de aconselhamento na prisão de Leonida.",
      how: "Veja os primeiros segundos do Trailer 1 — e depois a enxurrada de memes que dominou as redes em dezembro de 2023.",
      spoiler: false
    },
    {
      id: "gta6-trailer-feed-social",
      gameId: "gta6",
      category: "midia",
      title: "O trailer que é um feed de rede social",
      desc: "Boa parte do Trailer 1 é montada como scroll de rede social: lives, vídeos verticais, uma mulher twerkando sobre um carro em movimento, outra saindo de casa com dois martelos, mugshots surreais — tudo sátira direta dos virais de “Florida man”. A linguagem sugere que a própria cultura de internet será tema central do jogo.",
      where: "Trailer 1 oficial (montagem central de clipes “virais” de Leonida).",
      how: "Reassista prestando atenção nos overlays de interface de rede social sobre as cenas.",
      spoiler: false
    },
    {
      id: "gta6-trilhas-trailers",
      gameId: "gta6",
      category: "referencia",
      title: "Tom Petty e Pointer Sisters: as trilhas-manifesto dos trailers",
      desc: "O Trailer 1 é embalado por “Love Is a Long Road” (Tom Petty, 1989) — que voltou às paradas na semana seguinte — e o Trailer 2 (maio/2025) por “Hot Together” (The Pointer Sisters, 1986). As escolhas assinam o tom do jogo: romance em fuga e calor oitentista de Vice City, agora em pleno presente.",
      where: "Trailers 1 e 2 oficiais de GTA VI.",
      how: "Ouça as faixas completas e repare como as letras dialogam com a história de Jason e Lucia.",
      spoiler: false
    },
    {
      id: "gta6-leonida-florida",
      gameId: "gta6",
      category: "referencia",
      title: "Leonida: a Flórida rebatizada (e as teorias do nome)",
      desc: "O estado de GTA VI se chama Leonida — Flórida satirizada de ponta a ponta, dos pântanos aos calçadões. Entre fãs, a leitura mais popular é que o nome ecoa Juan Ponce de León, explorador espanhol que batizou a Flórida real; o sobrenome de Jason, Duval, coincide com condado e rua famosos do estado. A Rockstar, como sempre, não confirma nada.",
      where: "Materiais oficiais: trailers, site rockstargames.com/VI e screenshots.",
      how: "Explore o site oficial e compare os cenários (Vice City, Leonida Keys, Port Gellhorn) com seus equivalentes da Flórida real.",
      spoiler: false
    },
    {
      id: "gta6-thrillbilly-mud-club",
      gameId: "gta6",
      category: "absurdo",
      title: "Thrillbilly Mud Club — o clube do barro é oficial",
      desc: "O site oficial de 2025 revelou o Thrillbilly Mud Club, points onde caminhonetes monstruosas afundam na lama sob gritaria e cerveja — a celebração máxima do interior “redneck” de Leonida, na região de Ambrosia. É o tipo de detalhe absurdo-realista que a Rockstar escolheu como cartão de visita do mundo aberto.",
      where: "Seção Ambrosia do site oficial rockstargames.com/VI e Trailer 2.",
      how: "Navegue pela página oficial dos lugares de Leonida e veja as imagens do clube de lama.",
      spoiler: false
    },
    {
      id: "gta6-vice-city-de-volta",
      gameId: "gta6",
      category: "meta",
      title: "Vice City reconstruída 24 anos depois",
      desc: "GTA VI leva a série de volta a Vice City — cidade que os fãs não visitavam desde 2006 (VCS) e cuja versão clássica é de 2002. Ocean Drive, os neons e os flamingos retornam em escala contemporânea, agora com redes sociais, cruzeiros e influencers. A pré-venda ainda pisca para os nostálgicos: o bônus se chama “Vintage Vice City Pack”, com estampa da camisa de Tommy Vercetti.",
      where: "Trailers, site oficial e materiais de pré-venda de GTA VI.",
      how: "Compare as tomadas aéreas do Trailer 2 com a Vice City de 2002 — vários ângulos são homenagens diretas.",
      spoiler: false
    },
    {
      id: "gta6-bonnie-e-clyde",
      gameId: "gta6",
      category: "referencia",
      title: "Jason & Lucia, os “Bonnie e Clyde” de Leonida",
      desc: "Desde o anúncio, a Rockstar apresenta GTA VI como uma história de crime a dois: Jason e Lucia assaltando lado a lado, “juntos até o fim”. A imprensa e os fãs abraçaram a mesma leitura — o casal criminoso à la Bonnie e Clyde, arquétipo do cinema americano que os trailers reforçam em cada assalto de mãos dadas.",
      where: "Trailers 1 e 2 e descrições oficiais dos protagonistas no site da Rockstar.",
      how: "Leia os perfis oficiais de Jason e Lucia e note o enquadramento romântico-criminal das cenas de assalto.",
      spoiler: false
    }
  ]
};
