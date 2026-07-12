/* ============ DADOS: MISTÉRIOS E MITOS DA SAGA GTA ============
 * window.MYSTERIES_DATA = { statuses, cases }
 * Consumido por sections-mysteries.jsx (MysteriesSection, id="mysteries").
 * gameIds compartilhados com as demais seções:
 *   gta3 · vice-city · san-andreas · gta4 · gta5 · gta-online · gta6 · saga
 * status: "resolvido" (solucionado pela comunidade/Rockstar),
 *         "aberto"    (existe de verdade no jogo, sem explicação completa),
 *         "lenda"     (mito nunca comprovado).
 * Conteúdo-fonte em pt-BR; traduções via __TT("myst", id, campo, fallback).
 */

window.MYSTERIES_DATA = {
  statuses: [
    {
      id: "resolvido",
      name: "Caso encerrado",
      desc: "Mistérios que ganharam resposta oficial da Rockstar ou foram solucionados pela comunidade com provas verificáveis no jogo."
    },
    {
      id: "aberto",
      name: "Em aberto",
      desc: "Conteúdo que existe de verdade nos arquivos ou no mapa, mas cujo propósito ou desfecho nunca foi totalmente explicado."
    },
    {
      id: "lenda",
      name: "Lenda urbana",
      desc: "Mitos clássicos das lan houses e fóruns: nunca encontrados nos arquivos do jogo, mas ainda assim imortais."
    }
  ],

  cases: [
    /* ---------------- GTA III ---------------- */
    {
      id: "gta3-ghost-town",
      gameId: "gta3",
      title: "A Ghost Town além do mapa",
      status: "resolvido",
      desc: "Pilotos do Dodo que insistiam em voar para fora de Liberty City encontravam um pedaço de cidade flutuando no vazio, sem colisão e sem vida. A 'Ghost Town' virou lenda instantânea em 2001: seria uma área secreta? Um pedaço cortado do jogo? A comunidade batizou, mapeou e explicou o lugar.",
      clues: [
        "Um trecho de cidade flutuante a noroeste do mapa, visível apenas voando de Dodo ou usando trainers",
        "As ruas correspondem exatamente ao cenário da cutscene de abertura (o assalto ao banco)",
        "Prédios sem colisão sólida e ruas que terminam no vazio azul"
      ],
      theories: [
        "Área secreta desbloqueável com 100% de progresso (falso)",
        "Resto de uma quarta ilha cortada do jogo",
        "Cenário exclusivo para renderizar a intro em tempo real (correto)"
      ],
      resolution: "Caso encerrado pela própria engenharia do jogo: a Ghost Town é o palco da cutscene de abertura, renderizada em tempo real pela engine. A Rockstar montou só as fachadas necessárias e deixou o cenário pendurado fora do mapa — prática comum na era PS2.",
      where: "Voe de Dodo para noroeste de Shoreside Vale, além dos limites do mapa."
    },
    {
      id: "gta3-darkel",
      gameId: "gta3",
      title: "Darkel, o contratante que desapareceu",
      status: "resolvido",
      desc: "O manual e materiais de pré-lançamento de GTA III citavam Darkel, um líder revolucionário maltrapilho que daria missões ao jogador. No jogo final, ele não existe. Durante anos, teorias ligaram seu corte aos atentados de 11 de setembro de 2001, semanas antes do lançamento. O caso virou a maior 'arqueologia de conteúdo cortado' da era 3D.",
      clues: [
        "Darkel aparece em screenshots e textos promocionais de 2001",
        "Arquivos do jogo mantêm resquícios de missões de caos urbano (rampages) originalmente ligadas a ele",
        "A missão do carrinho de sorvete-bomba sobreviveu reciclada como 'I Scream, You Scream'"
      ],
      theories: [
        "Cortado às pressas por causa do 11 de setembro (nunca confirmado pela Rockstar)",
        "Removido meses antes por decisão de design, com as rampages redistribuídas pelo mapa (versão apoiada por declarações de ex-desenvolvedores)"
      ],
      resolution: "Confirmado como conteúdo cortado real: Darkel existiu no desenvolvimento e suas missões viraram as rampages espalhadas pela cidade. A Rockstar declarou que o personagem saiu do jogo antes do 11 de setembro, embora o mito da censura persista.",
      where: "Manual da versão de lançamento, materiais de imprensa de 2001 e restos nos arquivos do jogo."
    },

    /* ---------------- Vice City ---------------- */
    {
      id: "vc-apartment-3c",
      gameId: "vice-city",
      title: "O banheiro ensanguentado do Apartamento 3C",
      status: "resolvido",
      desc: "Em Ocean Beach existe um apartamento aberto sem nenhuma missão associada. No banheiro, paredes cobertas de sangue e uma motosserra à disposição do jogador. Sem contexto algum no jogo, a cena alimentou anos de teorias sobre um serial killer escondido em Vice City.",
      clues: [
        "Porta destrancada em um prédio comum de Ocean Beach, sem marcador de missão",
        "Respingos de sangue concentrados no box do chuveiro",
        "Uma motosserra coletável exatamente na cena do 'crime'"
      ],
      theories: [
        "Cena de um assassinato que renderia missão futura (falso)",
        "Casa de um serial killer ativo no jogo (falso)",
        "Homenagem direta ao filme Scarface (correto)"
      ],
      resolution: "Encerrado como easter egg cinematográfico: a cena recria o famoso massacre da motosserra no banheiro de Scarface (1983), principal referência estética de Vice City. Nenhum assassino ronda o apartamento — só cinefilia da Rockstar.",
      where: "Apartamento 3C, quarteirão à beira-mar de Ocean Beach."
    },
    {
      id: "vc-sharks",
      gameId: "vice-city",
      title: "Tubarões nas águas de Vice City",
      status: "lenda",
      desc: "Em Vice City cair na água é sentença de morte, e essa limitação virou combustível para o mito: jogadores juravam ver barbatanas cortando a baía e afirmavam que tubarões devoravam Tommy. Revistas de dicas e fóruns dos anos 2000 trataram o 'tubarão de Vice City' como fato. Ninguém jamais apresentou prova definitiva.",
      clues: [
        "Tommy Vercetti não sabe nadar, o que tornou a água um território inexplorado e assustador",
        "Peixes e golfinhos de fato aparecem em cardumes decorativos no mar",
        "Relatos de 'barbatanas' avistadas de barcos e do Skimmer"
      ],
      theories: [
        "Tubarões seriam a explicação de a água ser mortal",
        "Modelos de tubarão estariam nos arquivos esperando ativação (nunca localizados de forma conclusiva)",
        "Confusão com golfinhos e peixes decorativos somada à imaginação coletiva"
      ],
      resolution: "",
      where: "Baías e praias de Vice City — de preferência sem cair do barco."
    },

    /* ---------------- San Andreas ---------------- */
    {
      id: "gta-sa-bigfoot",
      gameId: "san-andreas",
      title: "Bigfoot de San Andreas",
      status: "lenda",
      desc: "O mito fundador da caça a mistérios em GTA: um Pé Grande rondando as florestas enevoadas de Back o' Beyond e Shady Creeks. Fotos borradas, vídeos tremidos e juramentos solenes alimentaram fóruns por uma década inteira. Nada jamais foi encontrado no código do jogo original — mas a lenda foi tão poderosa que a Rockstar a transformou em conteúdo oficial em GTA V.",
      clues: [
        "Florestas densas com neblina, trilhas isoladas e sons ambientes perturbadores",
        "Avistamentos 'documentados' em fotos de baixa resolução da era PS2",
        "A Rockstar alimentou o clima com áreas rurais deliberadamente sinistras"
      ],
      theories: [
        "Bigfoot surgiria com 100% de progresso ou em datas específicas (falso)",
        "Mods como o famoso 'Bigfoot Mod' explicam quase todos os vídeos",
        "A neblina e os cervos criavam silhuetas confundidas com a criatura"
      ],
      resolution: "",
      where: "Back o' Beyond, Shady Creeks e Mount Chiliad — de madrugada e com neblina, para manter a tradição."
    },
    {
      id: "gta-sa-ghost-cars",
      gameId: "san-andreas",
      title: "Carros fantasmas de Back o' Beyond",
      status: "resolvido",
      desc: "Um Glendale destruído desce a colina sozinho, sem motorista, no meio da floresta. Diferentemente da maioria dos mitos de San Andreas, este fenômeno é 100% real e reproduzível — e por isso aterrorizou uma geração inteira de jogadores. A explicação, no fim, é mais mundana do que os fóruns queriam.",
      clues: [
        "Glendales e Sadlers já surgem amassados na região, como se tivessem sofrido acidentes",
        "Os carros de fato se movem sem ninguém ao volante",
        "O fenômeno acontece sempre nas mesmas encostas de Back o' Beyond"
      ],
      theories: [
        "Fantasmas de vítimas de acidentes dirigindo para sempre (lenda)",
        "Ligação com supostos assassinatos na floresta (lenda)",
        "Carros com spawn em terreno inclinado que simplesmente rolam ladeira abaixo (correto)"
      ],
      resolution: "Encerrado por física básica: os carros nascem já danificados em pontos de spawn no alto de encostas e rolam com a gravidade. O visual 'assombrado' é intencional (contam a história de acidentes na região), mas não há motorista espectral.",
      where: "Encostas de Back o' Beyond, ao sul de Mount Chiliad."
    },
    {
      id: "gta-sa-cj-mom-ghost",
      gameId: "san-andreas",
      title: "O fantasma da mãe do CJ",
      status: "lenda",
      desc: "Depois do enterro de Beverly Johnson, jogadores passaram a relatar uma silhueta na janela da cozinha da casa dos Johnson de madrugada, sons de passos no andar de cima e sussurros. O mito é um dos mais queridos da comunidade brasileira de San Andreas, repetido em toda lan house. Nenhum modelo, script ou textura de fantasma jamais foi encontrado nos arquivos.",
      clues: [
        "Sons ambientes da casa (madeira rangendo, vento) em Grove Street à noite",
        "Sombras projetadas pela iluminação noturna nas janelas",
        "A carga emocional da morte de Beverly no enredo predispôs os jogadores a 'ver' algo"
      ],
      theories: [
        "Beverly assombraria a casa entre 0h e 6h (nunca comprovado)",
        "O fantasma só apareceria sem trapaças ativadas (nunca comprovado)",
        "Pareidolia coletiva somada a texturas escuras da era PS2"
      ],
      resolution: "",
      where: "Casa dos Johnson, Grove Street, Los Santos — entre a meia-noite e o amanhecer, dizem."
    },
    {
      id: "gta-sa-aliens",
      gameId: "san-andreas",
      title: "Aliens no deserto de Bone County",
      status: "lenda",
      desc: "Entre a Área 69, luzes noturnas no céu do deserto e um bar coberto de fotos de discos voadores, San Andreas parecia implorar por uma invasão alienígena. Jogadores passaram anos caçando OVNIs que nunca existiram no código. A Rockstar plantou o cenário perfeito — e deixou a imaginação fazer o resto.",
      clues: [
        "O bar Lil' Probe'Inn, com mapa de avistamentos e fotos de OVNIs nas paredes",
        "A base militar Área 69, paródia direta da Área 51",
        "Luzes e estrelas cadentes no céu noturno do deserto interpretadas como naves"
      ],
      theories: [
        "OVNIs sobrevoariam o deserto de madrugada (nunca comprovado no jogo original)",
        "A Área 69 esconderia tecnologia alienígena em salas inacessíveis (o interior é uma base militar comum)",
        "O mapa do Lil' Probe'Inn indicaria pontos reais de aparição (é só decoração)"
      ],
      resolution: "",
      where: "Lil' Probe'Inn e arredores da Área 69, Bone County."
    },
    {
      id: "gta-sa-leatherface",
      gameId: "san-andreas",
      title: "Leatherface na neblina de Shady Creeks",
      status: "lenda",
      desc: "Um homem com máscara de pele humana e motosserra perseguindo CJ na floresta: o mito do Leatherface dominou os fóruns entre 2005 e 2010. Vídeos 'prova' se multiplicaram, todos posteriormente identificados como mods. É o exemplo perfeito de lenda urbana fabricada pela própria comunidade — e amada justamente por isso.",
      clues: [
        "Florestas escuras com neblina densa em Shady Creeks e no Panopticon",
        "A motosserra existe como arma no jogo, o que dava 'plausibilidade' ao mito",
        "Sons noturnos da zona rural interpretados como motor de motosserra"
      ],
      theories: [
        "Leatherface apareceria apenas de madrugada com neblina (falso)",
        "Seria um easter egg de O Massacre da Serra Elétrica (nunca existiu no código)",
        "Todos os vídeos conhecidos vieram de mods e montagens (correto)"
      ],
      resolution: "",
      where: "Shady Creeks e a área do Panopticon, entre Los Santos e San Fierro."
    },
    {
      id: "gta-sa-panopticon-hermit",
      gameId: "san-andreas",
      title: "O Eremita do Panopticon",
      status: "lenda",
      desc: "O Panopticon, faixa de mata entre Los Santos e San Fierro, concentrou dezenas de mitos: um eremita morando numa cabana invisível, criaturas na mata, covas rasas. A região é estranhamente vazia para os padrões do jogo, o que alimentou a sensação de que 'algo foi removido dali'. Nada de anômalo jamais foi extraído dos arquivos.",
      clues: [
        "Uma área rural extensa e curiosamente sem missões ou atividades",
        "Celeiros e construções isoladas que parecem cenário de filme de terror",
        "O nome sinistro (Panopticon, a prisão de vigilância total) instigou teorias"
      ],
      theories: [
        "Um eremita ou 'homem da floresta' viveria na região (nunca encontrado)",
        "Missões de terror teriam sido cortadas da área (sem evidência nos arquivos)",
        "O vazio é só sobra de design de mapa da era PS2"
      ],
      resolution: "",
      where: "Panopticon e Flint County, na estrada entre Los Santos e San Fierro."
    },
    {
      id: "gta-sa-sprunk-haunting",
      gameId: "san-andreas",
      title: "Assombrações da fábrica da Sprunk",
      status: "lenda",
      desc: "A fábrica da Sprunk em East Los Santos e casas isoladas do interior renderam relatos de vultos, máquinas ligando sozinhas e sussurros no turno da noite. O 'fantasma da Sprunk' nunca passou de relato de fórum, mas ajudou a consolidar San Andreas como o jogo mais assombrado da saga na memória coletiva.",
      clues: [
        "Galpões industriais escuros com sons ambientes de maquinário",
        "Pedestres com rotas noturnas estranhas perto de zonas industriais",
        "A cultura de mitos de SA transformava qualquer prédio vazio em casa mal-assombrada"
      ],
      theories: [
        "Um operário morto assombraria a fábrica (nunca comprovado)",
        "Vultos seriam NPCs com spawn bugado dentro de estruturas (plausível e mundano)",
        "Sons 'paranormais' são loops de áudio ambiente da zona industrial"
      ],
      resolution: "",
      where: "Fábrica da Sprunk, East Los Santos, e casas isoladas do interior de San Andreas."
    },

    /* ---------------- GTA IV ---------------- */
    {
      id: "gta4-ratman",
      gameId: "gta4",
      title: "Ratman, o morador dos túneis",
      status: "lenda",
      desc: "A lenda mais famosa de Liberty City: uma criatura meio homem, meio rato, vivendo nos túneis do metrô e fugindo ao ser vista. Vídeos de 'avistamentos' bombaram no YouTube entre 2008 e 2012, sempre escuros, sempre tremidos. Data miners viraram os arquivos de GTA IV do avesso e nunca acharam modelo, textura ou script do Ratman.",
      clues: [
        "Túneis de metrô extensos, escuros e cheios de nichos e salas de manutenção",
        "NPCs mendigos que vagam por áreas subterrâneas e assustam jogadores desavisados",
        "Pichações e sujeira que dão clima de 'algo vive aqui'"
      ],
      theories: [
        "O Ratman fugiria ao ser flagrado, por isso ninguém consegue provas (conveniente demais)",
        "Seria um easter egg escondido atrás de condições absurdas (nada nos arquivos)",
        "Mendigos dos túneis + escuridão + sugestão coletiva = Ratman"
      ],
      resolution: "",
      where: "Túneis do metrô de Liberty City, especialmente entre Broker e Algonquin."
    },
    {
      id: "gta4-statue-heart",
      gameId: "gta4",
      title: "O coração acorrentado da Estátua da Felicidade",
      status: "resolvido",
      desc: "A paródia da Estátua da Liberdade esconde o easter egg mais macabro da era HD: uma porta com a placa 'No Hidden Content This Way' ('nenhum conteúdo escondido por aqui') leva a uma escada, e no topo bate um coração humano gigante preso por correntes. É real, está no jogo desde 2008 e continua sendo uma das descobertas mais impressionantes da saga.",
      clues: [
        "Placa irônica 'No Hidden Content This Way' em uma porta na base da estátua",
        "A porta não abre: atravessa-se caminhando contra ela em pontos específicos",
        "Dentro, uma escada leva a um coração gigante pulsando, acorrentado"
      ],
      theories: [
        "O coração seria 'o coração da cidade' aprisionado — leitura simbólica favorita dos fãs",
        "Referência ao humor macabro da Rockstar contra caçadores de segredos",
        "Teorias de conexão com outros mistérios (nunca corroboradas)"
      ],
      resolution: "Encerrado como easter egg oficial e verificável: o coração existe, é acessível de helicóptero pela plataforma da estátua e foi celebrado pela própria Rockstar. O 'significado' segue aberto à interpretação — mas o conteúdo é 100% real.",
      where: "Ilha da Felicidade (Happiness Island), porta na base da estátua; use um helicóptero."
    },
    {
      id: "gta4-eddie-low",
      gameId: "gta4",
      title: "O serial killer solto em Liberty City",
      status: "resolvido",
      desc: "Rádios e jornais de Liberty City noticiavam corpos desmembrados aparecendo pela cidade, e jogadores juravam que havia um assassino à solta no mundo do jogo. Havia mesmo: o caso é uma das amarrações narrativas mais finas de GTA IV, resolvida por quem prestou atenção nos encontros aleatórios de Niko.",
      clues: [
        "Noticiários e sites do jogo relatam assassinatos em série durante a campanha",
        "Niko cruza duas vezes com Eddie Low, um sujeito simpático demais e sinistro demais",
        "No segundo encontro, Eddie ataca Niko de faca ao ser rejeitado"
      ],
      theories: [
        "Os corpos seriam de um NPC assassino que caça pedestres em tempo real (exagero)",
        "O killer seria o Ratman (mistura clássica de mitos)",
        "Eddie Low é o serial killer das notícias (correto)"
      ],
      resolution: "Encerrado pela própria narrativa: Eddie Low é o serial killer dos noticiários. Se Niko o mata no segundo encontro aleatório, as rádios noticiam o fim dos assassinatos — uma recompensa narrativa para jogadores atentos.",
      where: "Encontros aleatórios de Eddie Low em Algonquin; jornais e rádios do jogo."
    },

    /* ---------------- GTA V ---------------- */
    {
      id: "gta5-chiliad-mural",
      gameId: "gta5",
      title: "O Mural do Monte Chiliad e a saga do jetpack",
      status: "resolvido",
      desc: "O mistério que definiu uma geração: um mural no teleférico do Monte Chiliad mostra um OVNI, um ovo e um homem de jetpack ligados por linhas e portas. Milhões de horas de investigação coletiva, glifos, luas, chuva às 3h da manhã — e nenhum jetpack em GTA V. A resposta só chegou quatro anos depois, em outro jogo: o GTA Online. É o caso mais longo do arquivo.",
      clues: [
        "O mural na estação do teleférico, com OVNI, ovo e jetpack sob um 'olho' no topo",
        "Cinco glifos pintados nas encostas do Chiliad indicando lua, chuva e o pico",
        "Um OVNI aparece sobre a montanha às 3h, chovendo, com 100% de progresso",
        "Portas desenhadas na base do mural sugerindo câmaras dentro da montanha"
      ],
      theories: [
        "O jetpack estaria escondido dentro do Monte Chiliad (nunca em GTA V)",
        "As portas do mural indicariam um bunker acessível por ritual secreto",
        "O mural seria um mapa do próprio mistério: OVNIs (real), ovo e jetpack por vir",
        "Tudo não passaria de uma trollagem monumental da Rockstar"
      ],
      resolution: "Encerrado (com gosto agridoce) em dezembro de 2017: o Doomsday Heist de GTA Online entregou o jetpack Mammoth Thruster, guardado em uma base subterrânea — e OVNIs por toda parte. Parte da comunidade aceitou como o desfecho da caçada; outra parte considera que o mural em si nunca ganhou explicação oficial completa. O arquivo fica encerrado, mas com uma nota de rodapé eterna.",
      where: "Estação do teleférico no topo do Monte Chiliad; o desfecho, no Doomsday Heist do GTA Online."
    },
    {
      id: "gta5-ufos",
      gameId: "gta5",
      title: "Os OVNIs de San Andreas",
      status: "resolvido",
      desc: "Depois do mito frustrado dos aliens em San Andreas (2004), GTA V entregou discos voadores de verdade. Ao atingir 100% de progresso, naves aparecem em pontos fixos do mapa — sobre Fort Zancudo, sobre o acampamento hippie de Sandy Shores e mais. Há até uma nave acidentada no fundo do mar. Foi a primeira grande vitória verificável dos caçadores de mistérios.",
      clues: [
        "OVNI pairando sobre Fort Zancudo em grande altitude (aproximar-se demais desliga o motor da aeronave)",
        "OVNI sobre o acampamento hippie de Sandy Shores, decorado com 'Beam Me Up' e pinturas alienígenas",
        "Disco voador naufragado no leito do oceano, ao norte de Paleto Bay",
        "O acampamento hippie funciona como 'mapa' com pistas pintadas no chão"
      ],
      theories: [
        "Os OVNIs seriam a chave para destravar o mural do Chiliad (nunca confirmado)",
        "Cada nave teria um gatilho secreto além dos 100% (desmentido por data mining)",
        "As naves de Zancudo e do Chiliad pertenceriam a 'facções' diferentes segundo o design"
      ],
      resolution: "Encerrado por verificação direta: os OVNIs existem, aparecem com 100% de progresso (o naufragado independe de progresso) e foram confirmados nos arquivos do jogo. São easter eggs contemplativos — nenhum deles pode ser abatido ou abordado.",
      where: "Fort Zancudo, acampamento hippie perto de Sandy Shores e fundo do mar ao norte de Paleto Bay, após 100%."
    },
    {
      id: "gta5-chiliad-ufo-rain",
      gameId: "gta5",
      title: "O ritual do OVNI do Chiliad: 3h da manhã e chuva",
      status: "resolvido",
      desc: "O mais famoso dos OVNIs de GTA V exige um ritual completo: 100% de progresso, estar no mirante do topo do Monte Chiliad, às 3h da manhã, chovendo. Cumprida a liturgia, uma nave surge pairando sobre a montanha. Os glifos nas encostas — lua, chuva, montanha — eram literalmente o manual de instruções, decifrado pela comunidade nas primeiras semanas.",
      clues: [
        "Glifos pintados nas rochas do Chiliad mostrando uma lua, nuvens de chuva e o pico",
        "A nave só se materializa entre 3h e 4h da manhã, sob chuva, após 100%",
        "O objeto pisca e não tem colisão, com aspecto 'holográfico' que gerou debates"
      ],
      theories: [
        "A nave seria uma projeção/holograma e não um objeto físico, dado o comportamento visual",
        "Seria a sinalização de entrada de uma base dentro da montanha (nunca encontrada em GTA V)",
        "O 'olho' do mural representaria exatamente este OVNI sobre o pico (leitura mais aceita)"
      ],
      resolution: "Encerrado: o fenômeno é real, reproduzível e documentado à exaustão. Os glifos foram corretamente interpretados como as condições de aparição. O caráter 'holográfico' da nave permanece como detalhe curioso, herdado pelo lore alienígena do GTA Online.",
      where: "Mirante do topo do Monte Chiliad, 3h da manhã, sob chuva, com 100% de progresso."
    },
    {
      id: "gta5-bigfoot-beast",
      gameId: "gta5",
      title: "Bigfoot, The Last One e a caçada da Fera",
      status: "resolvido",
      desc: "A Rockstar transformou a lenda de San Andreas em conteúdo oficial em três atos. Primeiro, a missão do Prólogo esconde um vulto peludo. Depois, a missão 'The Last One' põe Franklin para caçar um 'sasquatch'. Por fim, data miners descobriram em 2016 o segredo dos peiotes dourados: virar o próprio Bigfoot e enfrentar a Fera, um lobisomem inspirado em Teen Wolf. A lenda virou sistema de jogo.",
      clues: [
        "Silhueta de Bigfoot visível por poucos segundos durante a nevasca do Prólogo",
        "Missão 'The Last One' (após 100%): um caçador obcecado persegue o 'sasquatch' — que é um homem fantasiado",
        "Sete peiotes dourados (versões de nova geração) comidos em sequência, em dias e condições específicas",
        "Pegadas e uivos levando ao confronto com a Fera ('The Beast')"
      ],
      theories: [
        "O Bigfoot 'de verdade' existiria além do homem fantasiado (correto: a pele jogável de Sasquatch)",
        "A Fera seria um chefe secreto ligado ao Chiliad (é um easter egg independente, referência a Teen Wolf)",
        "A caçada teria sido colocada como resposta direta a dez anos de mito em San Andreas (confirmado em espírito pela Rockstar)"
      ],
      resolution: "Encerrado em camadas: 'The Last One' encerra a lenda clássica com ironia (o sasquatch é um homem fantasiado), e a caçada dos peiotes dourados — decifrada pela comunidade em 2016 — permite jogar como Bigfoot e derrotar a Fera. O mito de 2004 virou conteúdo oficial completo.",
      where: "Prólogo (nevasca), Monte Chiliad ('The Last One', após 100%) e peiotes dourados na versão de nova geração."
    },
    {
      id: "gta5-mount-gordo-ghost",
      gameId: "gta5",
      title: "O fantasma do Monte Gordo",
      status: "resolvido",
      desc: "Entre 23h e meia-noite, uma figura feminina espectral paira sobre uma rocha no Monte Gordo, desaparecendo quando o jogador se aproxima. No chão, escrito em sangue: 'JOCK'. Diferente dos fantasmas de lendas antigas, este é real — e o jogo esconde a história completa do crime para quem investigar os canais certos.",
      clues: [
        "Aparição feminina brilhante sobre a rocha do Monte Gordo, das 23h à meia-noite",
        "A palavra 'JOCK' escrita em vermelho na pedra sob o fantasma",
        "Lore no universo do jogo: Jolene Cranley-Evans morreu ao cair dos penhascos em 1978",
        "Jock Cranley, o marido, deixou a região para virar dublê em Vinewood e depois candidato a senador"
      ],
      theories: [
        "Jolene teria caído acidentalmente durante uma trilha (versão oficial dentro do jogo)",
        "Jock a empurrou para seguir carreira em Vinewood (apontado por todas as pistas)",
        "O fantasma apareceria apenas em datas especiais (falso: o horário basta)"
      ],
      resolution: "Encerrado pela comunidade com as próprias pistas do jogo: o fantasma é Jolene Cranley-Evans, e 'JOCK' acusa o marido, Jock Cranley — que a empurrou do penhasco em 1978 e décadas depois concorre ao senado de San Andreas. Um caso de assassinato resolvido por leitura de cenário.",
      where: "Rocha no alto do Monte Gordo, perto do farol El Gordo, entre 23h e 0h."
    },
    {
      id: "gta5-leonora-johnson",
      gameId: "gta5",
      title: "Quem matou Leonora Johnson?",
      status: "resolvido",
      desc: "Um assassinato de 1975 no submundo de Vinewood, 50 fragmentos de uma carta de confissão espalhados pelo mapa inteiro e uma recompensa narrativa de verdade no final. O caso Leonora Johnson é o exemplo perfeito de mistério projetado pela Rockstar para ser resolvido — desde que alguém tivesse paciência de vasculhar o estado inteiro.",
      clues: [
        "50 pedaços de carta escondidos pelo mapa, remontando uma confissão do assassinato",
        "O caso é citado no rádio e em sites do jogo como crime não resolvido clássico de Los Santos",
        "A carta completa aponta o diretor de cinema Peter Dreyfuss como autor"
      ],
      theories: [
        "O crime ficaria sem culpado, como sátira dos cold cases de Hollywood (falso)",
        "O assassino seria um personagem da campanha principal (falso)",
        "Dreyfuss escaparia impune mesmo após a revelação (depende do jogador)"
      ],
      resolution: "Encerrado: reunidos os 50 fragmentos, Franklin confronta Peter Dreyfuss em sua mansão. O diretor confessa o assassinato de Leonora Johnson e tenta fugir — e o jogador decide se executa a sentença. Caso projetado, plantado e solucionável de ponta a ponta.",
      where: "Fragmentos por todo o mapa de GTA V; confronto final na casa de Dreyfuss, em Vinewood Hills."
    },
    {
      id: "gta5-infinity-killer",
      gameId: "gta5",
      title: "O Assassino Infinity e os corpos no fundo do mar",
      status: "resolvido",
      desc: "Oito corpos embalados em plástico repousam no leito do oceano na costa de San Andreas. Em Sandy Shores, uma casa abandonada guarda pichações delirantes sobre o número 8 e o infinito. Juntando mergulho, exploração e sites do universo do jogo, a comunidade remontou a história completa do serial killer Merle Abrahams — sem que nenhuma missão jamais apontasse o caminho.",
      clues: [
        "Oito corpos enrolados em plástico espalhados pelo fundo do mar na costa do mapa",
        "Casa abandonada em Sandy Shores com escritos: '8 é infinito de pé', poemas e contagens",
        "Notícias no universo do jogo sobre o 'Infinity Killer', que matou oito corredores entre 1999 e 2004",
        "Uma pedra pintada com 'STOP' perto da casa, interpretada como túmulo improvisado"
      ],
      theories: [
        "Os corpos indicariam uma missão secreta de investigação (nunca existiu)",
        "Merle Abrahams teria um cúmplice nunca identificado (sem evidências)",
        "O fantasma de Abrahams assombraria a casa de Sandy Shores (relatos sem comprovação)"
      ],
      resolution: "Encerrado por arqueologia comunitária: as pistas remontam a história de Merle Abrahams, o 'Infinity Killer', preso em 2004 e morto na prisão. Os oito corpos submersos são suas vítimas, os corredores desaparecidos. Um caso contado inteiramente por cenário, sem uma única missão.",
      where: "Costa de San Andreas (corpos submersos) e casa abandonada em Sandy Shores."
    },
    {
      id: "gta5-north-yankton-graves",
      gameId: "gta5",
      title: "Os túmulos de North Yankton",
      status: "resolvido",
      desc: "Quem está enterrado no túmulo de Michael De Santa, se Michael está vivo em Los Santos? A pergunta paira desde o Prólogo e é respondida na própria campanha, numa das cenas mais fortes do jogo. Ao redor dela cresceram mitos satélites — túmulos de Trevor, aparições no cemitério congelado — que mantêm North Yankton no arquivo até hoje.",
      clues: [
        "O túmulo de 'Michael Townley' em Ludendorff, North Yankton, visível na missão 'Bury the Hatchet'",
        "Michael vive em Los Santos sob o sobrenome De Santa após um acordo com a FIB",
        "Ao abrir o caixão, um corpo de verdade aparece dentro dele"
      ],
      theories: [
        "O caixão estaria vazio, apenas encenação da morte falsa (falso)",
        "Trevor ganharia um túmulo em algum final do jogo (nunca existiu; mito pós-lançamento)",
        "North Yankton esconderia mais segredos acessíveis por glitch (só há o cenário limitado da missão e o alien do Prólogo)"
      ],
      resolution: "Encerrado pela campanha: no caixão de Michael está Brad Snider, o terceiro assaltante de 2004, morto na emboscada e enterrado em segredo enquanto todos o acreditavam preso. A revelação detona o confronto entre Michael e Trevor. Os 'túmulos extras' procurados por fãs nunca existiram.",
      where: "Cemitério de Ludendorff, North Yankton, na missão 'Bury the Hatchet'."
    },
    {
      id: "gta5-sunken-hatch",
      gameId: "gta5",
      title: "A escotilha afundada no oceano",
      status: "aberto",
      desc: "No ponto mais fundo do oceano, a leste do mapa, existe uma escotilha metálica cravada no leito marinho, com uma janela iluminada que pisca em intervalos regulares. A referência à série Lost é evidente — mas a escotilha nunca abriu, nunca apareceu em missão e nunca ganhou explicação. Segue tecnicamente em aberto desde 2013.",
      clues: [
        "Escotilha metálica no fundo do oceano, na costa leste de San Andreas",
        "Luz interna piscando em padrão regular, interpretada por muitos como código Morse",
        "Design idêntico ao da escotilha da série Lost, incluindo a janela iluminada"
      ],
      theories: [
        "O padrão da luz esconderia uma mensagem em Morse (as tentativas de decodificação divergem e nunca fecharam consenso)",
        "A escotilha se conectaria ao mistério do Chiliad por túneis submarinos (sem evidência)",
        "É apenas um tributo a Lost sem conteúdo adicional (provável, mas nunca confirmado)"
      ],
      resolution: "",
      where: "Fossa oceânica na costa leste do mapa; exige submarino e paciência com a pressão."
    },
    {
      id: "gta5-chiliad-doors",
      gameId: "gta5",
      title: "As portas pintadas do Monte Chiliad",
      status: "aberto",
      desc: "O mural do Chiliad exibe portas na base do desenho, e caçadores encontraram texturas de portas e painéis na estrutura do mirante e nas faces da montanha. Nenhuma abre. Nenhuma tem interior mapeado em GTA V. Depois que o Doomsday Heist confirmou bases dentro de montanhas no Online, a pergunta ficou ainda mais incômoda: as portas sempre foram só desenho?",
      clues: [
        "Portas retratadas na base do mural do teleférico",
        "Texturas de portas/painéis na plataforma do mirante do Chiliad",
        "O Doomsday Heist (Online) instalou de fato uma base dentro de uma montanha da região"
      ],
      theories: [
        "As portas indicariam câmaras planejadas e cortadas de GTA V",
        "Seriam simbolismo do mural: níveis de 'iluminação' e não lugares físicos",
        "A Rockstar reaproveitou a ideia anos depois no Online, encerrando a dívida por caminhos tortos"
      ],
      resolution: "",
      where: "Mural e estruturas do mirante no topo do Monte Chiliad."
    },
    {
      id: "gta5-mine-shaft",
      gameId: "gta5",
      title: "A mina abandonada e o corpo esquecido",
      status: "aberto",
      desc: "Nas versões de nova geração, uma porta de madeira discreta numa encosta de Great Chaparral dá acesso a uma mina abandonada completa, com trilhos, galerias — e um cadáver. Ninguém sabe ao certo quem é o morto nem por que a Rockstar construiu um interior tão detalhado sem missão associada. O local virou ponto de peregrinação de caçadores de mistérios.",
      clues: [
        "Porta de madeira camuflada na encosta, fácil de passar despercebida por anos",
        "Galerias extensas com trilhos, equipamentos e iluminação natural por frestas",
        "Um cadáver antigo dentro da mina, sem identificação nem contexto"
      ],
      theories: [
        "O corpo seria vítima de um crime histórico do lore de San Andreas (nunca amarrado oficialmente)",
        "A mina teria sido feita para uma missão cortada ou DLC de história cancelada",
        "Conexão com filmes de faroeste e o passado minerador da região, como pura ambientação"
      ],
      resolution: "",
      where: "Encosta em Great Chaparral, apenas nas versões PS4/PS5, Xbox One/Series e PC."
    },
    {
      id: "gta5-altruist-cult",
      gameId: "gta5",
      title: "O Culto Altruísta",
      status: "resolvido",
      desc: "No alto do Raton Canyon vive uma seita de idosos canibais que odeia a modernidade e adora 'consumir' os jovens — literalmente. O acampamento é real, os rituais são sugeridos por inscrições nas paredes e Trevor pode alimentar o culto entregando caronas. A comunidade decifrou os símbolos e o desfecho armado do caso.",
      clues: [
        "Acampamento fortificado no Raton Canyon com fogueiras, inscrições e símbolos circulares",
        "Trevor pode entregar pedestres resgatados de encontros aleatórios ao culto, por dinheiro",
        "Símbolos criptográficos nas paredes, decifrados como um alfabeto de substituição",
        "Na quarta entrega, o culto se volta contra Trevor"
      ],
      theories: [
        "O culto seria a chave do mural do Chiliad, vizinho de montanha (nunca corroborado)",
        "As inscrições esconderiam coordenadas de segredos (decodificadas, revelam sátira e delírios do culto)",
        "Sobreviventes do culto apareceriam em GTA Online (sem confirmação)"
      ],
      resolution: "Encerrado: na quarta entrega o culto embosca Trevor, que pode exterminar a seita e recolher maletas de dinheiro no acampamento. Os símbolos foram decifrados pela comunidade como um alfabeto de substituição com mensagens satíricas sobre velhos devorando o futuro dos jovens. Caso macabro, mas fechado.",
      where: "Acampamento Altruísta, Raton Canyon, oeste do Monte Chiliad; jogando com Trevor."
    },
    {
      id: "gta5-omega-spaceship",
      gameId: "gta5",
      title: "Omega e as 50 peças da nave",
      status: "resolvido",
      desc: "Omega, o ufólogo mais simpático de Sandy Shores, jura ter presenciado um acidente alienígena e pede a Franklin que recupere os destroços: 50 peças de nave espalhadas pelo estado. É o mistério 'colecionável' clássico de GTA V, com direito a recompensa condizente com a loucura da missão.",
      clues: [
        "50 fragmentos brilhantes de nave espalhados por todo o mapa",
        "A missão de Strangers and Freaks 'Far Out' apresenta Omega e sua obsessão",
        "As peças emitem brilho e som característicos ao se aproximar"
      ],
      theories: [
        "As peças montariam um OVNI pilotável (quase: o resultado é mais cômico)",
        "Omega seria um ex-cientista do governo (lore especulado pelos fãs)",
        "As peças se conectariam aos OVNIs de 100% (são linhas separadas do mesmo tema)"
      ],
      resolution: "Encerrado: entregues as 50 peças, Omega presenteia Franklin com o Space Docker, um buggy 'alienígena' com efeitos sonoros e visuais de outro mundo. A nave reconstruída aparece na garagem de Omega — pequena demais para levar alguém a lugar algum. Humor Rockstar em estado puro.",
      where: "Peças por todo o mapa; início na missão 'Far Out', perto de Sandy Shores."
    },
    {
      id: "gta5-prologue-alien",
      gameId: "gta5",
      title: "O alienígena congelado do Prólogo",
      status: "resolvido",
      desc: "Nos primeiros minutos de GTA V, durante a fuga em North Yankton, um desvio de poucos metros revela um corpo alienígena congelado sob a ponte do rio. O easter egg dura uma janela mínima de jogo e por isso virou rito de passagem: todo caçador de mistérios precisa vê-lo com os próprios olhos pelo menos uma vez.",
      clues: [
        "Corpo cinzento de alienígena sob o gelo do rio, visível apenas durante o Prólogo",
        "O desvio precisa ser feito a pé, saindo da rota da fuga",
        "O alien remete diretamente ao lore de OVNIs do restante do jogo"
      ],
      theories: [
        "O alien seria o piloto do OVNI naufragado de Paleto Bay (especulação querida dos fãs)",
        "Estaria ligado ao mural do Chiliad como 'primeira pista' cronológica do jogo",
        "Seria só uma piada de abertura para marcar o tom dos segredos de GTA V (leitura mais sóbria)"
      ],
      resolution: "Encerrado por verificação: o alienígena congelado existe, é acessível por qualquer jogador no Prólogo e está documentado nos arquivos. Interpretações sobre seu papel no lore seguem livres — o objeto em si nunca foi mistério, e sim presente de boas-vindas.",
      where: "Sob a ponte do rio congelado em North Yankton, durante o Prólogo."
    },
    {
      id: "gta5-zancudo-underground",
      gameId: "gta5",
      title: "O subsolo de Fort Zancudo",
      status: "aberto",
      desc: "Explorando o mapa por baixo, com câmeras livres e glitches, jogadores encontraram estruturas sob Fort Zancudo — incluindo geometria interpretada como um hangar ou silo e até um objeto discoide. Somado às portas de elevador na pista da base, o achado alimentou a tese de que a base militar esconde um subsolo que nunca ficou acessível em GTA V.",
      clues: [
        "Portas de elevador e estruturas de acesso na superfície da base",
        "Geometria subterrânea detectada sob a base via câmeras fora do mapa e data mining",
        "O OVNI de 100% paira exatamente sobre Fort Zancudo",
        "No GTA Online, o Doomsday Heist confirmou instalações militares subterrâneas na região"
      ],
      theories: [
        "GTA V teria um bunker de Zancudo cortado antes do lançamento",
        "O subsolo seria apenas geometria de suporte sem significado (posição cética)",
        "O Doomsday Heist reciclou o conceito planejado originalmente para o modo história"
      ],
      resolution: "",
      where: "Fort Zancudo, na Great Ocean Highway — por cima com aeronave, por baixo com criatividade."
    },

    /* ---------------- GTA Online ---------------- */
    {
      id: "gtao-ufo-events",
      gameId: "gta-online",
      title: "OVNIs e abduções nos eventos do Online",
      status: "resolvido",
      desc: "O que era easter egg estático em GTA V virou evento ao vivo no GTA Online: em outubros recentes, discos voadores passaram a sobrevoar o mapa em datas e locais rotativos, culminando em abduções de jogadores no meio da sessão. A Rockstar transformou o lore alienígena em espetáculo sazonal com recompensas rastreáveis.",
      clues: [
        "Aparições rotativas de OVNIs sobre pontos do mapa durante eventos de Halloween",
        "Abduções scriptadas que erguem o jogador para dentro da nave",
        "Recompensas cosméticas (camisetas, itens) confirmando oficialmente cada avistamento",
        "O Monte Chiliad segue como palco recorrente das aparições"
      ],
      theories: [
        "Os eventos seriam continuação direta do enredo alienígena do Doomsday Heist",
        "As abduções preparariam um DLC alienígena completo (nunca aconteceu como imaginado)",
        "A Rockstar usa os eventos para 'pagar' antigas promessas do mural do Chiliad"
      ],
      resolution: "Encerrado como conteúdo oficial: os avistamentos e abduções são eventos sazonais documentados do GTA Online, com horários, locais e recompensas mapeados pela comunidade a cada edição. O mistério virou calendário.",
      where: "GTA Online, eventos sazonais (especialmente em outubro), céus de todo o mapa."
    },
    {
      id: "gtao-phantom-slashers",
      gameId: "gta-online",
      title: "O Carro Fantasma e os Slashers de Halloween",
      status: "resolvido",
      desc: "Um muscle car em chamas espectrais que persegue jogadores sozinho pela noite; assassinos mascarados que caçam sessões inteiras; e uma trilha de pistas de serial killer que termina com uma arma clássica de recompensa. O Halloween do GTA Online institucionalizou o terror como modo de jogo — tudo real e verificável.",
      clues: [
        "O 'Phantom Car', versão espectral em chamas que persegue jogadores sem motorista",
        "Slashers mascarados que invadem sessões durante os eventos de outubro",
        "A caçada do 'Slasher de Los Santos', trilha de pistas que recompensa com o revólver Navy",
        "Fantasmas aparecendo em locais mal-assombrados do mapa durante os eventos"
      ],
      theories: [
        "O Phantom Car homenagearia o clássico Christine, de Stephen King (leitura unânime)",
        "Os fantasmas dos eventos reaproveitariam figuras do lore, como Jolene do Monte Gordo (confirmado em edições recentes)",
        "Os Slashers testariam mecânicas de terror para jogos futuros (especulação)"
      ],
      resolution: "Encerrado: todos os fenômenos são eventos oficiais de Halloween do GTA Online, com datas, gatilhos e recompensas conhecidos. O 'paranormal' aqui é feature — e das mais divertidas.",
      where: "GTA Online, eventos de Halloween; estradas escuras de Blaine County são o palco favorito."
    },
    {
      id: "gtao-casino-sounds",
      gameId: "gta-online",
      title: "Sons paranormais no Diamond Casino",
      status: "lenda",
      desc: "Desde a inauguração do Diamond Casino and Resort, jogadores relatam sussurros no estacionamento, passos na cobertura vazia e vozes abafadas perto das áreas de serviço. Nenhum evento oficial jamais reivindicou os sons, e capturas de áudio analisadas pela comunidade não encontraram nada além da ambientação do prédio. A lenda, claro, continua hospedada na cobertura.",
      clues: [
        "Camadas de áudio ambiente densas no interior do cassino e garagens",
        "Relatos recorrentes de sussurros em horários de pouco movimento",
        "O histórico de eventos de Halloween no Online predispõe jogadores a ouvir fantasmas em tudo"
      ],
      theories: [
        "Um fantasma 'residente' teria sido adicionado silenciosamente pela Rockstar (nunca encontrado nos arquivos)",
        "Os sons seriam teasers de eventos futuros (nada se concretizou)",
        "Mistura de áudio ambiente, eco de NPCs e sugestão coletiva (explicação mais aceita)"
      ],
      resolution: "",
      where: "Diamond Casino and Resort, GTA Online — estacionamento e áreas de serviço, de madrugada."
    },

    /* ---------------- Saga (vários jogos) ---------------- */
    {
      id: "saga-epsilon",
      gameId: "saga",
      title: "O Programa Epsilon: Kifflom!",
      status: "resolvido",
      desc: "A seita mais duradoura da saga nasceu como sussurro nas rádios de San Andreas (2004), ganhou site próprio no mundo real e explodiu como linha de missões completa em GTA V. O Programa Epsilon de Cris Formage satiriza religiões de celebridades e provou que a Rockstar planta mistérios com uma década de antecedência.",
      clues: [
        "Menções ao Epsilon e ao mantra 'Kifflom' nas rádios de San Andreas",
        "O site epsilonprogram.com, mantido pela Rockstar desde a era SA",
        "Em GTA V, a linha de missões de Michael para a seita: doações, túnicas e peregrinações",
        "O 'tratado' Epsilon esconde textos absurdos sobre os 9 paraísos e o 10º irmão"
      ],
      theories: [
        "O Epsilon guardaria segredos sobrenaturais reais no lore (a seita é fraude dentro do próprio jogo)",
        "Cris Formage teria poderes de verdade (piada levada adiante no Doomsday Heist do Online)",
        "A seita seria chave para outros mistérios, como o Chiliad (conexões nunca confirmadas)"
      ],
      resolution: "Encerrado: o mistério dos sussurros de 2004 virou conteúdo integral em GTA V, com a linha de missões de Michael culminando na escolha entre servir ou roubar a seita. O Epsilon é oficialmente uma fraude carismática — e um dos melhores arcos satíricos da série. Kifflom, irmão-irmã.",
      where: "Rádios de San Andreas; missões 'Seeking the Truth' e seguintes em GTA V; epsilonprogram.com."
    },
    {
      id: "saga-blue-hell",
      gameId: "saga",
      title: "Blue Hell: o vazio sob o mapa",
      status: "resolvido",
      desc: "Todo veterano já caiu nele: o abismo azul e infinito que existe embaixo do cenário em praticamente todos os GTA. O 'Blue Hell' gerou décadas de vídeos de exploração, cidades ocultas e teorias sobre 'dimensões secretas'. A explicação é técnica, mas nem por isso o lugar perdeu o charme de outro mundo.",
      clues: [
        "Quedas através de falhas de colisão levam a um vazio azul sob o mapa em todos os jogos 3D e HD",
        "Interiores de prédios ficam flutuando no vazio, visíveis durante as quedas",
        "Após alguns segundos, o jogo teletransporta o jogador de volta à superfície"
      ],
      theories: [
        "O Blue Hell seria uma 'dimensão' com segredos próprios (é espaço técnico vazio)",
        "Interiores flutuantes seriam áreas secretas (são interiores reais carregados fora do mapa, prática padrão da era 3D)",
        "Certas quedas levariam a lugares inéditos (apenas reposicionamento do respawn)"
      ],
      resolution: "Encerrado pela engenharia: o Blue Hell é o espaço vazio natural de qualquer mundo 3D — a cor vem do céu renderizado por trás da geometria. Os interiores flutuantes são técnica clássica de otimização. Continua sendo o passeio turístico glitch mais amado da saga.",
      where: "Sob o mapa de qualquer GTA 3D/HD, via glitches de colisão — por conta e risco do passageiro."
    },
    {
      id: "saga-megalodon",
      gameId: "saga",
      title: "Megalodon e os monstros do mar",
      status: "lenda",
      desc: "De San Andreas a GTA V, sempre houve quem jurasse ter visto algo grande demais nas águas do mapa. O megalodon é o rei desses mitos: um tubarão pré-histórico patrulhando as fossas oceânicas. GTA V trouxe tubarões reais (e assustadores), o Online encheu os mares de Cayo Perico de vida marinha — mas o gigante nunca apareceu em arquivo algum.",
      clues: [
        "Tubarões-brancos reais atacam jogadores em GTA V, dando lastro ao mito",
        "O submersível 'Kraken' brinca com a ideia de monstros marinhos no nome",
        "Fossas oceânicas profundas e escuras no mapa de GTA V, perfeitas para esconder um gigante",
        "As águas de Cayo Perico (Online) adicionaram ainda mais fauna marinha"
      ],
      theories: [
        "Um megalodon habitaria a fossa mais profunda do mapa (nunca encontrado em arquivos)",
        "Avistamentos seriam baleias ou cardumes renderizados a distância",
        "A Rockstar teria removido o monstro na reta final (sem qualquer evidência)"
      ],
      resolution: "",
      where: "Fossas oceânicas de GTA V e mares de Cayo Perico no Online — leve o Kraken, por via das dúvidas."
    },

    /* ---------------- GTA VI ---------------- */
    {
      id: "gta6-trailer-clues",
      gameId: "gta6",
      title: "As pistas escondidas nos trailers de GTA VI",
      status: "aberto",
      desc: "Desde o Trailer 1 (5 de dezembro de 2023), cada frame de material oficial de GTA VI é dissecado como cena de crime: cartazes, neons, placas, números recorrentes e fases da lua viraram suposto código para datas e segredos. O Trailer 2 (6 de maio de 2025) chegou de surpresa, desmoralizando metade das teorias — e criando outras tantas. Com o jogo confirmado para 19 de novembro de 2026, a caçada agora é por segredos do próprio mundo de Leonida.",
      clues: [
        "Trailer 1 (05/12/2023) e Trailer 2 (06/05/2025) esmiuçados quadro a quadro pela comunidade",
        "Cartazes, letreiros e números recorrentes tratados como possíveis códigos e datas",
        "Perfis e marcas do universo do jogo (redes sociais in-game mostradas nos trailers) analisados em busca de lore",
        "O material de pré-venda de junho de 2026 trouxe nova leva de detalhes para dissecar"
      ],
      theories: [
        "A 'teoria das fases da lua' previa datas de trailers a partir das luas mostradas — falhou repetidamente, e o Trailer 2 chegou sem aviso",
        "Números recorrentes nos cenários seriam datas cifradas de anúncios (nenhuma previsão confirmada)",
        "Detalhes dos trailers antecipariam mistérios internos do jogo, como os murais de GTA V (só o lançamento dirá)"
      ],
      resolution: "",
      where: "Trailers oficiais de GTA VI, site da Rockstar e materiais de pré-venda desde 25/06/2026."
    },
    {
      id: "gta6-arg-rumor",
      gameId: "gta6",
      title: "O suposto ARG secreto da Rockstar",
      status: "lenda",
      desc: "A cada movimento da Rockstar, ressurge o boato de um ARG (jogo de realidade alternativa) escondido no marketing de GTA VI: códigos em cartazes reais, coordenadas em teasers, contas misteriosas. Até julho de 2026, com pré-venda aberta e campanha oficial em andamento, nenhum ARG foi confirmado — o que existe é lore espalhado em material oficial, e muita vontade de acreditar.",
      clues: [
        "A campanha de GTA VI se apoia em teasers enxutos e material oficial denso em detalhes, terreno fértil para leituras conspiratórias",
        "O histórico da Rockstar com sites in-universe (como o do Programa Epsilon) dá verossimilhança ao boato",
        "Comunidades mapearam contas, domínios e 'pistas' supostamente plantadas — sem nenhum desfecho verificável"
      ],
      theories: [
        "Um ARG global levaria a uma revelação antes do lançamento de 19/11/2026 (nada confirmado até julho/2026)",
        "As 'pistas' seriam apenas marketing convencional interpretado em excesso (posição cética dominante)",
        "A Rockstar guardaria o ARG para as semanas finais antes do lançamento (especulação pura, rotulada como rumor)"
      ],
      resolution: "",
      where: "Materiais oficiais de GTA VI e fóruns de teorias — com ceticismo redobrado e rótulo de rumor."
    }
  ]
};
