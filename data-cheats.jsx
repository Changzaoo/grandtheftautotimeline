/* ============ CÓDIGOS / CHEATS (window.CHEATS_DATA) ============
 * Os códigos clássicos da série, por jogo. Regra editorial: só entra código
 * consolidado e amplamente documentado. `code` é o que se digita no PC (ou o
 * número discado no celular, em GTA IV); `ps` é a sequência no controle
 * PlayStation, quando registrada aqui. GTA VI não tem códigos conhecidos antes
 * do lançamento — e não entra na lista até existir fonte.
 * Campos traduzidos pelo i18n: title, note, name das categorias (via `label`).
 * `cat` (e não `category`) de propósito: é id de filtro, não texto de exibição.
 * Este arquivo NÃO renderiza nada. Ordem no bundle: antes de i18n.jsx.
 */
window.CHEATS_DATA = {
  games: [
    {
      id: "gta3", short: "GTA III", name: "Grand Theft Auto III", year: "2001",
      note: "No PC, digite o código durante o jogo, sem pausar. No PlayStation 2, aperte a sequência rapidamente com o jogo rodando. Códigos podem corromper estatísticas: jogue com um save separado."
    },
    {
      id: "vice-city", short: "Vice City", name: "Grand Theft Auto: Vice City", year: "2002",
      note: "No PC, digite durante o jogo. Os mesmos códigos valem para a versão The Definitive Edition. Evite salvar depois de usar códigos de pedestres agressivos: o efeito pode ficar gravado no save."
    },
    {
      id: "san-andreas", short: "San Andreas", name: "Grand Theft Auto: San Andreas", year: "2004",
      note: "No PC, digite durante o jogo — quase todo código tem uma versão em 'sopa de letras' e outra em frase. O código de pedestres em tumulto é permanente se você salvar: nunca salve com ele ativo."
    },
    {
      id: "gta4", short: "GTA IV", name: "Grand Theft Auto IV", year: "2008",
      note: "Em GTA IV os códigos são números de telefone: abra o celular de Niko, aperte para cima para o teclado e disque. Depois de usado, o código fica salvo no menu Cheats do celular. Alguns bloqueiam conquistas."
    },
    {
      id: "gta5", short: "GTA V", name: "Grand Theft Auto V", year: "2013",
      note: "No PC, aperte a tecla ~ (til) e digite a palavra. No celular do jogo, disque 1-999 seguido da palavra no teclado numérico. Códigos só funcionam no modo história, desativam conquistas na sessão e não existem em GTA Online. Não há código de dinheiro em GTA V."
    }
  ],

  categories: [
    { id: "player", label: "Vida, colete e dinheiro" },
    { id: "weapons", label: "Armas" },
    { id: "wanted", label: "Nível de procurado" },
    { id: "vehicles", label: "Veículos" },
    { id: "skills", label: "Habilidades" },
    { id: "world", label: "Clima, tempo e cidade" }
  ],

  cheats: [
    /* ---------------- GTA III ---------------- */
    { id: "iii-weapons", gameId: "gta3", cat: "weapons", code: "GUNSGUNSGUNS", title: "Todas as armas", ps: "R2, R2, L1, R2, ←, ↓, →, ↑, ←, ↓, →, ↑" },
    { id: "iii-money", gameId: "gta3", cat: "player", code: "IFIWEREARICHMAN", title: "Dinheiro (+$250.000)", ps: "R2, R2, L1, L1, ←, ↓, →, ↑, ←, ↓, →, ↑" },
    { id: "iii-health", gameId: "gta3", cat: "player", code: "GESUNDHEIT", title: "Vida cheia", ps: "R2, R2, L1, R1, ←, ↓, →, ↑, ←, ↓, →, ↑" },
    { id: "iii-armor", gameId: "gta3", cat: "player", code: "TORTOISE", title: "Colete cheio", ps: "R2, R2, L1, L2, ←, ↓, →, ↑, ←, ↓, →, ↑" },
    { id: "iii-wanted-up", gameId: "gta3", cat: "wanted", code: "MOREPOLICEPLEASE", title: "Aumenta o nível de procurado", ps: "R2, R2, L1, R2, ←, →, ←, →, ←, →" },
    { id: "iii-wanted-down", gameId: "gta3", cat: "wanted", code: "NOPOLICEPLEASE", title: "Zera o nível de procurado", ps: "R2, R2, L1, R2, ↑, ↓, ↑, ↓, ↑, ↓" },
    { id: "iii-tank", gameId: "gta3", cat: "vehicles", code: "GIVEUSATANK", title: "Faz aparecer um tanque Rhino", ps: "○, ○, ○, ○, ○, ○, R1, L2, L1, △, ○, △" },
    { id: "iii-boom", gameId: "gta3", cat: "vehicles", code: "BANGBANGBANG", title: "Explode todos os veículos por perto" },
    { id: "iii-fly", gameId: "gta3", cat: "vehicles", code: "CHITTYCHITTYBB", title: "Carros voam ao ganhar velocidade" },
    { id: "iii-handling", gameId: "gta3", cat: "vehicles", code: "CORNERSLIKEMAD", title: "Dirigibilidade melhorada" },
    { id: "iii-invisible", gameId: "gta3", cat: "vehicles", code: "ANICESETOFWHEELS", title: "Carros invisíveis (só as rodas aparecem)" },
    { id: "iii-skin", gameId: "gta3", cat: "skills", code: "ILIKEDRESSINGUP", title: "Troca a aparência de Claude pela de um pedestre" },
    { id: "iii-riot", gameId: "gta3", cat: "world", code: "ITSALLGOINGMAAAD", title: "Pedestres enlouquecem e brigam entre si" },
    { id: "iii-hate", gameId: "gta3", cat: "world", code: "NOBODYLIKESME", title: "Todos os pedestres atacam você" },
    { id: "iii-armed", gameId: "gta3", cat: "world", code: "WEAPONSFORALL", title: "Pedestres andam armados" },
    { id: "iii-gore", gameId: "gta3", cat: "world", code: "NASTYLIMBSCHEAT", title: "Ativa o modo com mais sangue e desmembramento" },
    { id: "iii-clear", gameId: "gta3", cat: "world", code: "SKINCANCERFORME", title: "Céu limpo" },
    { id: "iii-cloud", gameId: "gta3", cat: "world", code: "ILIKESCOTLAND", title: "Tempo nublado" },
    { id: "iii-rain", gameId: "gta3", cat: "world", code: "ILOVESCOTLAND", title: "Chuva" },
    { id: "iii-fog", gameId: "gta3", cat: "world", code: "PEASOUP", title: "Neblina" },

    /* ---------------- Vice City ---------------- */
    { id: "vc-weapons-1", gameId: "vice-city", cat: "weapons", code: "THUGSTOOLS", title: "Armas, pacote 1 (leves)", ps: "R1, R2, L1, R2, ←, ↓, →, ↑, ←, ↓, →, ↑" },
    { id: "vc-weapons-2", gameId: "vice-city", cat: "weapons", code: "PROFESSIONALTOOLS", title: "Armas, pacote 2 (profissionais)" },
    { id: "vc-weapons-3", gameId: "vice-city", cat: "weapons", code: "NUTTERTOOLS", title: "Armas, pacote 3 (pesadas)" },
    { id: "vc-health", gameId: "vice-city", cat: "player", code: "ASPIRINE", title: "Vida cheia", ps: "R1, R2, L1, ○, ←, ↓, →, ↑, ←, ↓, →, ↑" },
    { id: "vc-armor", gameId: "vice-city", cat: "player", code: "PRECIOUSPROTECTION", title: "Colete cheio", ps: "R1, R2, L1, ✕, ←, ↓, →, ↑, ←, ↓, →, ↑" },
    { id: "vc-wanted-up", gameId: "vice-city", cat: "wanted", code: "YOUWONTTAKEMEALIVE", title: "Aumenta o nível de procurado em duas estrelas" },
    { id: "vc-wanted-down", gameId: "vice-city", cat: "wanted", code: "LEAVEMEALONE", title: "Zera o nível de procurado", ps: "R1, R1, ○, R2, ↑, ↓, ↑, ↓, ↑, ↓" },
    { id: "vc-tank", gameId: "vice-city", cat: "vehicles", code: "PANZER", title: "Faz aparecer um tanque Rhino", ps: "○, ○, L1, ○, ○, ○, L1, L2, R1, △, ○, △" },
    { id: "vc-sabre", gameId: "vice-city", cat: "vehicles", code: "GETTHEREFAST", title: "Faz aparecer um Sabre Turbo" },
    { id: "vc-bloodring", gameId: "vice-city", cat: "vehicles", code: "GETTHEREQUICKLY", title: "Faz aparecer um Bloodring Banger" },
    { id: "vc-hotring", gameId: "vice-city", cat: "vehicles", code: "GETTHEREVERYFASTINDEED", title: "Faz aparecer um Hotring Racer" },
    { id: "vc-hearse", gameId: "vice-city", cat: "vehicles", code: "THELASTRIDE", title: "Faz aparecer o carro funerário Romero's Hearse" },
    { id: "vc-limo", gameId: "vice-city", cat: "vehicles", code: "ROCKANDROLLCAR", title: "Faz aparecer a limusine da banda Love Fist" },
    { id: "vc-trash", gameId: "vice-city", cat: "vehicles", code: "RUBBISHCAR", title: "Faz aparecer um caminhão de lixo Trashmaster" },
    { id: "vc-caddy", gameId: "vice-city", cat: "vehicles", code: "BETTERTHANWALKING", title: "Faz aparecer um carrinho de golfe Caddy" },
    { id: "vc-boom", gameId: "vice-city", cat: "vehicles", code: "BIGBANG", title: "Explode todos os veículos por perto" },
    { id: "vc-fly", gameId: "vice-city", cat: "vehicles", code: "COMEFLYWITHME", title: "Carros voam" },
    { id: "vc-water", gameId: "vice-city", cat: "vehicles", code: "SEAWAYS", title: "Carros andam sobre a água" },
    { id: "vc-handling", gameId: "vice-city", cat: "vehicles", code: "GRIPISEVERYTHING", title: "Dirigibilidade melhorada" },
    { id: "vc-pink", gameId: "vice-city", cat: "vehicles", code: "AHAIRDRESSERSCAR", title: "Todos os carros ficam rosa" },
    { id: "vc-black", gameId: "vice-city", cat: "vehicles", code: "IWANTITPAINTEDBLACK", title: "Todos os carros ficam pretos" },
    { id: "vc-lights", gameId: "vice-city", cat: "vehicles", code: "GREENLIGHT", title: "Todos os semáforos ficam verdes" },
    { id: "vc-traffic", gameId: "vice-city", cat: "vehicles", code: "MIAMITRAFFIC", title: "Motoristas agressivos" },
    { id: "vc-skin", gameId: "vice-city", cat: "skills", code: "STILLLIKEDRESSINGUP", title: "Troca a aparência de Tommy pela de um pedestre" },
    { id: "vc-fat", gameId: "vice-city", cat: "skills", code: "DEEPFRIEDMARSBARS", title: "Tommy engorda" },
    { id: "vc-thin", gameId: "vice-city", cat: "skills", code: "PROGRAMMER", title: "Tommy fica com braços e pernas finos" },
    { id: "vc-smoke", gameId: "vice-city", cat: "skills", code: "CERTAINDEATH", title: "Tommy acende um cigarro" },
    { id: "vc-suicide", gameId: "vice-city", cat: "skills", code: "ICANTTAKEITANYMORE", title: "Suicídio" },
    { id: "vc-riot", gameId: "vice-city", cat: "world", code: "FIGHTFIGHTFIGHT", title: "Pedestres brigam entre si" },
    { id: "vc-hate", gameId: "vice-city", cat: "world", code: "NOBODYLIKESME", title: "Todos os pedestres atacam você" },
    { id: "vc-armed", gameId: "vice-city", cat: "world", code: "OURGODGIVENRIGHTTOBEARARMS", title: "Pedestres andam armados" },
    { id: "vc-sunny", gameId: "vice-city", cat: "world", code: "ALOVELYDAY", title: "Dia ensolarado" },
    { id: "vc-cloudy", gameId: "vice-city", cat: "world", code: "ABITDRIEARY", title: "Tempo nublado" },
    { id: "vc-rain", gameId: "vice-city", cat: "world", code: "CATSANDDOGS", title: "Chuva" },
    { id: "vc-fog", gameId: "vice-city", cat: "world", code: "CANTSEEATHING", title: "Neblina" },
    { id: "vc-clock", gameId: "vice-city", cat: "world", code: "LIFEISPASSINGMEBY", title: "O relógio do jogo acelera" },
    { id: "vc-fast", gameId: "vice-city", cat: "world", code: "ONSPEED", title: "Jogo acelerado" },
    { id: "vc-slow", gameId: "vice-city", cat: "world", code: "BOOOOOORING", title: "Jogo em câmera lenta" },

    /* ---------------- San Andreas ---------------- */
    { id: "sa-hesoyam", gameId: "san-andreas", cat: "player", code: "HESOYAM", title: "Vida, colete e $250.000 (e conserta o carro em que você está)", ps: "R1, R2, L1, ✕, ←, ↓, →, ↑, ←, ↓, →, ↑" },
    { id: "sa-god", gameId: "san-andreas", cat: "player", code: "BAGUVIX", title: "Vida quase infinita (ainda morre por explosão, queda e afogamento)", ps: "↓, ✕, →, ←, →, R1, →, ↓, ↑, △" },
    { id: "sa-oxygen", gameId: "san-andreas", cat: "player", code: "CVWKXAM", title: "Fôlego infinito debaixo d'água" },
    { id: "sa-weapons-1", gameId: "san-andreas", cat: "weapons", code: "LXGIWYL", title: "Armas, pacote 1 (leves)", ps: "R1, R2, L1, R2, ←, ↓, →, ↑, ←, ↓, →, ↑" },
    { id: "sa-weapons-2", gameId: "san-andreas", cat: "weapons", code: "PROFESSIONALSKIT", title: "Armas, pacote 2 (profissionais)", ps: "R1, R2, L1, R2, ←, ↓, →, ↑, ←, ↓, ↓, ←" },
    { id: "sa-weapons-3", gameId: "san-andreas", cat: "weapons", code: "UZUMYMW", title: "Armas, pacote 3 (pesadas)", ps: "R1, R2, L1, R2, ←, ↓, →, ↑, ←, ↓, ↓, ↓" },
    { id: "sa-ammo", gameId: "san-andreas", cat: "weapons", code: "FULLCLIP", title: "Munição infinita, sem recarregar", ps: "L1, R1, □, R1, ←, R2, R1, ←, □, ↓, L1, L1" },
    { id: "sa-hitman", gameId: "san-andreas", cat: "weapons", code: "PROFESSIONALKILLER", title: "Nível Hitman em todas as armas" },
    { id: "sa-never-wanted", gameId: "san-andreas", cat: "wanted", code: "AEZAKMI", title: "Nunca fica procurado" },
    { id: "sa-wanted-down", gameId: "san-andreas", cat: "wanted", code: "TURNDOWNTHEHEAT", title: "Zera o nível de procurado", ps: "R1, R1, ○, R2, ↑, ↓, ↑, ↓, ↑, ↓" },
    { id: "sa-wanted-up", gameId: "san-andreas", cat: "wanted", code: "TURNUPTHEHEAT", title: "Aumenta o nível de procurado em duas estrelas", ps: "R1, R1, ○, R2, ←, →, ←, →, ←, →" },
    { id: "sa-wanted-six", gameId: "san-andreas", cat: "wanted", code: "BRINGITON", title: "Seis estrelas de procurado" },
    { id: "sa-jetpack", gameId: "san-andreas", cat: "vehicles", code: "ROCKETMAN", title: "Jetpack", ps: "L1, L2, R1, R2, ↑, ↓, ←, →, L1, L2, R1, R2, ↑, ↓, ←, →" },
    { id: "sa-parachute", gameId: "san-andreas", cat: "vehicles", code: "AIYPWZQP", title: "Paraquedas", ps: "←, →, L1, L2, R1, R2, R2, ↑, ↓, →, L1" },
    { id: "sa-rhino", gameId: "san-andreas", cat: "vehicles", code: "AIWPRTON", title: "Faz aparecer um tanque Rhino", ps: "○, ○, L1, ○, ○, ○, L1, L2, R1, △, ○, △" },
    { id: "sa-hydra", gameId: "san-andreas", cat: "vehicles", code: "JUMPJET", title: "Faz aparecer o caça Hydra", ps: "△, △, □, ○, ✕, L1, L1, ↓, ↑" },
    { id: "sa-hunter", gameId: "san-andreas", cat: "vehicles", code: "OHDUDE", title: "Faz aparecer o helicóptero de ataque Hunter" },
    { id: "sa-stunt", gameId: "san-andreas", cat: "vehicles", code: "FLYINGTOSTUNT", title: "Faz aparecer um avião de acrobacias" },
    { id: "sa-monster", gameId: "san-andreas", cat: "vehicles", code: "MONSTERMASH", title: "Faz aparecer um Monster Truck" },
    { id: "sa-quad", gameId: "san-andreas", cat: "vehicles", code: "FOURWHEELFUN", title: "Faz aparecer um quadriciclo" },
    { id: "sa-vortex", gameId: "san-andreas", cat: "vehicles", code: "KGGGDKP", title: "Faz aparecer o hovercraft Vortex" },
    { id: "sa-bloodring", gameId: "san-andreas", cat: "vehicles", code: "OLDSPEEDDEMON", title: "Faz aparecer um Bloodring Banger" },
    { id: "sa-hotring", gameId: "san-andreas", cat: "vehicles", code: "VROCKPOKEY", title: "Faz aparecer um Hotring Racer" },
    { id: "sa-stretch", gameId: "san-andreas", cat: "vehicles", code: "CELEBRITYSTATUS", title: "Faz aparecer uma limusine Stretch" },
    { id: "sa-trash", gameId: "san-andreas", cat: "vehicles", code: "TRUEGRIME", title: "Faz aparecer um caminhão de lixo Trashmaster" },
    { id: "sa-dozer", gameId: "san-andreas", cat: "vehicles", code: "ITSALLBULL", title: "Faz aparecer uma escavadeira Dozer" },
    { id: "sa-hearse", gameId: "san-andreas", cat: "vehicles", code: "WHERESTHEFUNERAL", title: "Faz aparecer o carro funerário Romero" },
    { id: "sa-boom", gameId: "san-andreas", cat: "vehicles", code: "ALLCARSGOBOOM", title: "Explode todos os veículos por perto" },
    { id: "sa-fly", gameId: "san-andreas", cat: "vehicles", code: "CHITTYCHITTYBANGBANG", title: "Carros voam" },
    { id: "sa-boats-fly", gameId: "san-andreas", cat: "vehicles", code: "FLYINGFISH", title: "Barcos voam" },
    { id: "sa-nitro", gameId: "san-andreas", cat: "vehicles", code: "SPEEDFREAK", title: "Todos os carros ganham nitro" },
    { id: "sa-grip", gameId: "san-andreas", cat: "vehicles", code: "STICKLIKEGLUE", title: "Dirigibilidade perfeita" },
    { id: "sa-bubble", gameId: "san-andreas", cat: "vehicles", code: "BUBBLECARS", title: "Carros saem flutuando quando você bate neles" },
    { id: "sa-wheels", gameId: "san-andreas", cat: "vehicles", code: "WHEELSONLYPLEASE", title: "Carros invisíveis (só as rodas aparecem)" },
    { id: "sa-ghost", gameId: "san-andreas", cat: "vehicles", code: "GHOSTTOWN", title: "Trânsito e pedestres reduzidos" },
    { id: "sa-rich", gameId: "san-andreas", cat: "vehicles", code: "EVERYONEISRICH", title: "Só carros esportivos no trânsito" },
    { id: "sa-poor", gameId: "san-andreas", cat: "vehicles", code: "EVERYONEISPOOR", title: "Só carros velhos no trânsito" },
    { id: "sa-muscle", gameId: "san-andreas", cat: "skills", code: "BUFFMEUP", title: "Músculos no máximo" },
    { id: "sa-fat", gameId: "san-andreas", cat: "skills", code: "BTCDBCB", title: "Gordura no máximo" },
    { id: "sa-skinny", gameId: "san-andreas", cat: "skills", code: "KVGYZQK", title: "CJ magro (zera gordura e músculos)" },
    { id: "sa-respect", gameId: "san-andreas", cat: "skills", code: "WORSHIPME", title: "Respeito no máximo" },
    { id: "sa-sex", gameId: "san-andreas", cat: "skills", code: "HELLOLADIES", title: "Sex appeal no máximo" },
    { id: "sa-driving", gameId: "san-andreas", cat: "skills", code: "NATURALTALENT", title: "Habilidade máxima em todos os veículos" },
    { id: "sa-jump", gameId: "san-andreas", cat: "skills", code: "KANGAROO", title: "Super pulo" },
    { id: "sa-punch", gameId: "san-andreas", cat: "skills", code: "IAVENJQ", title: "Super soco" },
    { id: "sa-bmx", gameId: "san-andreas", cat: "skills", code: "CJPHONEHOME", title: "Pulos gigantes de bicicleta" },
    { id: "sa-suicide", gameId: "san-andreas", cat: "skills", code: "GOODBYECRUELWORLD", title: "Suicídio" },
    { id: "sa-riot", gameId: "san-andreas", cat: "world", code: "STATEOFEMERGENCY", title: "Tumulto geral nas ruas (permanente se você salvar)" },
    { id: "sa-armed", gameId: "san-andreas", cat: "world", code: "FOOOXFT", title: "Pedestres andam armados" },
    { id: "sa-gangs", gameId: "san-andreas", cat: "world", code: "ONLYHOMIESALLOWED", title: "Só membros de gangue nas ruas" },
    { id: "sa-elvis", gameId: "san-andreas", cat: "world", code: "BLUESUEDESHOES", title: "Sósias do Elvis por toda parte" },
    { id: "sa-beach", gameId: "san-andreas", cat: "world", code: "LIFESABEACH", title: "Tema de praia: pedestres de sunga e biquíni" },
    { id: "sa-ninja", gameId: "san-andreas", cat: "world", code: "NINJATOWN", title: "Tema ninja: katanas e motos pretas" },
    { id: "sa-funhouse", gameId: "san-andreas", cat: "world", code: "CRAZYTOWN", title: "Tema de parque de diversões" },
    { id: "sa-fast", gameId: "san-andreas", cat: "world", code: "SPEEDITUP", title: "Jogo acelerado" },
    { id: "sa-slow", gameId: "san-andreas", cat: "world", code: "SLOWITDOWN", title: "Jogo em câmera lenta" },
    { id: "sa-midnight", gameId: "san-andreas", cat: "world", code: "NIGHTPROWLER", title: "Sempre meia-noite" },
    { id: "sa-sunny", gameId: "san-andreas", cat: "world", code: "PLEASANTLYWARM", title: "Dia ensolarado" },
    { id: "sa-hot", gameId: "san-andreas", cat: "world", code: "TOODAMNHOT", title: "Sol muito forte" },
    { id: "sa-rain", gameId: "san-andreas", cat: "world", code: "AUIFRVQS", title: "Chuva" },
    { id: "sa-fog", gameId: "san-andreas", cat: "world", code: "CFVFGMJ", title: "Neblina" },
    { id: "sa-sand", gameId: "san-andreas", cat: "world", code: "CWJXUOC", title: "Tempestade de areia" },

    /* ---------------- GTA IV (números de telefone) ---------------- */
    { id: "iv-health", gameId: "gta4", cat: "player", code: "362-555-0100", title: "Vida e colete cheios" },
    { id: "iv-health-ammo", gameId: "gta4", cat: "player", code: "482-555-0100", title: "Vida, colete e munição" },
    { id: "iv-weapons-1", gameId: "gta4", cat: "weapons", code: "486-555-0150", title: "Armas, pacote 1" },
    { id: "iv-weapons-2", gameId: "gta4", cat: "weapons", code: "486-555-0100", title: "Armas, pacote 2" },
    { id: "iv-wanted-down", gameId: "gta4", cat: "wanted", code: "267-555-0100", title: "Zera o nível de procurado" },
    { id: "iv-wanted-up", gameId: "gta4", cat: "wanted", code: "267-555-0150", title: "Aumenta o nível de procurado em uma estrela" },
    { id: "iv-weather", gameId: "gta4", cat: "world", code: "468-555-0100", title: "Muda o clima" },
    { id: "iv-zit", gameId: "gta4", cat: "world", code: "948-555-0100", title: "ZiT: identifica a música que está tocando no rádio" },
    { id: "iv-cognoscenti", gameId: "gta4", cat: "vehicles", code: "227-555-0142", title: "Faz aparecer um Cognoscenti" },
    { id: "iv-comet", gameId: "gta4", cat: "vehicles", code: "227-555-0175", title: "Faz aparecer um Comet" },
    { id: "iv-buffalo", gameId: "gta4", cat: "vehicles", code: "227-555-0100", title: "Faz aparecer um FIB Buffalo" },
    { id: "iv-turismo", gameId: "gta4", cat: "vehicles", code: "227-555-0147", title: "Faz aparecer um Turismo" },
    { id: "iv-supergt", gameId: "gta4", cat: "vehicles", code: "227-555-0168", title: "Faz aparecer um SuperGT" },
    { id: "iv-nrg", gameId: "gta4", cat: "vehicles", code: "625-555-0100", title: "Faz aparecer uma moto NRG 900" },
    { id: "iv-sanchez", gameId: "gta4", cat: "vehicles", code: "625-555-0150", title: "Faz aparecer uma moto Sanchez" },
    { id: "iv-annihilator", gameId: "gta4", cat: "vehicles", code: "359-555-0100", title: "Faz aparecer o helicóptero Annihilator" },
    { id: "iv-jetmax", gameId: "gta4", cat: "vehicles", code: "938-555-0100", title: "Faz aparecer a lancha Jetmax" },
    { id: "iv-buzzard", gameId: "gta4", cat: "vehicles", code: "359-555-2899", title: "The Ballad of Gay Tony: faz aparecer o helicóptero Buzzard" },
    { id: "iv-apc", gameId: "gta4", cat: "vehicles", code: "272-555-8265", title: "The Ballad of Gay Tony: faz aparecer o blindado APC" },
    { id: "iv-bullet", gameId: "gta4", cat: "vehicles", code: "227-555-9666", title: "The Ballad of Gay Tony: faz aparecer um Bullet GT" },
    { id: "iv-parachute", gameId: "gta4", cat: "vehicles", code: "359-555-7272", title: "The Ballad of Gay Tony: paraquedas" },
    { id: "iv-sniper", gameId: "gta4", cat: "weapons", code: "486-555-2526", title: "The Ballad of Gay Tony: balas explosivas no rifle de precisão" },
    { id: "iv-punch", gameId: "gta4", cat: "skills", code: "276-555-2666", title: "The Ballad of Gay Tony: soco explosivo" },

    /* ---------------- GTA V ---------------- */
    { id: "v-health", gameId: "gta5", cat: "player", code: "TURTLE", title: "Vida e colete cheios", ps: "○, L1, △, R2, ✕, □, ○, →, □, L1, L1, L1" },
    { id: "v-invincible", gameId: "gta5", cat: "player", code: "PAINKILLER", title: "Invencibilidade por 5 minutos", ps: "→, ✕, →, ←, →, R1, →, ←, ✕, △" },
    { id: "v-special", gameId: "gta5", cat: "player", code: "POWERUP", title: "Recarrega a habilidade especial do personagem" },
    { id: "v-weapons", gameId: "gta5", cat: "weapons", code: "TOOLUP", title: "Armas e munição", ps: "△, R2, ←, L1, ✕, →, △, ↓, □, L1, L1, L1" },
    { id: "v-explosive-ammo", gameId: "gta5", cat: "weapons", code: "HIGHEX", title: "Balas explosivas" },
    { id: "v-fire-ammo", gameId: "gta5", cat: "weapons", code: "INCENDIARY", title: "Balas incendiárias" },
    { id: "v-punch", gameId: "gta5", cat: "weapons", code: "HOTHANDS", title: "Soco explosivo" },
    { id: "v-deadeye", gameId: "gta5", cat: "weapons", code: "DEADEYE", title: "Mira em câmera lenta (até três níveis)" },
    { id: "v-wanted-down", gameId: "gta5", cat: "wanted", code: "LAWYERUP", title: "Diminui o nível de procurado em uma estrela", ps: "R1, R1, ○, R2, →, ←, →, ←, →, ←" },
    { id: "v-wanted-up", gameId: "gta5", cat: "wanted", code: "FUGITIVE", title: "Aumenta o nível de procurado em uma estrela", ps: "R1, R1, ○, R2, ←, →, ←, →, ←, →" },
    { id: "v-run", gameId: "gta5", cat: "skills", code: "CATCHME", title: "Corrida rápida" },
    { id: "v-swim", gameId: "gta5", cat: "skills", code: "GOTGILLS", title: "Nado rápido" },
    { id: "v-jump", gameId: "gta5", cat: "skills", code: "HOPTOIT", title: "Super pulo", ps: "←, ←, △, △, →, →, ←, →, □, R1, R2" },
    { id: "v-skyfall", gameId: "gta5", cat: "skills", code: "SKYFALL", title: "Queda livre: o personagem aparece caindo do céu" },
    { id: "v-parachute", gameId: "gta5", cat: "skills", code: "SKYDIVE", title: "Paraquedas", ps: "←, →, L1, L2, R1, R2, R2, ←, ←, →, L1" },
    { id: "v-drunk", gameId: "gta5", cat: "skills", code: "LIQUOR", title: "Modo bêbado" },
    { id: "v-buzzard", gameId: "gta5", cat: "vehicles", code: "BUZZOFF", title: "Faz aparecer o helicóptero de ataque Buzzard", ps: "○, ○, L1, ○, ○, ○, L1, L2, R1, △, ○, △" },
    { id: "v-comet", gameId: "gta5", cat: "vehicles", code: "COMET", title: "Faz aparecer um Comet", ps: "R1, ○, R2, →, L1, L2, ✕, ✕, □, R1" },
    { id: "v-rapidgt", gameId: "gta5", cat: "vehicles", code: "RAPIDGT", title: "Faz aparecer um Rapid GT" },
    { id: "v-stunt", gameId: "gta5", cat: "vehicles", code: "BARNSTORM", title: "Faz aparecer um avião de acrobacias" },
    { id: "v-duster", gameId: "gta5", cat: "vehicles", code: "FLYSPRAY", title: "Faz aparecer o avião agrícola Duster" },
    { id: "v-pcj", gameId: "gta5", cat: "vehicles", code: "ROCKET", title: "Faz aparecer uma moto PCJ-600" },
    { id: "v-sanchez", gameId: "gta5", cat: "vehicles", code: "OFFROAD", title: "Faz aparecer uma moto Sanchez" },
    { id: "v-bmx", gameId: "gta5", cat: "vehicles", code: "BANDIT", title: "Faz aparecer uma BMX" },
    { id: "v-caddy", gameId: "gta5", cat: "vehicles", code: "HOLEIN1", title: "Faz aparecer um carrinho de golfe Caddy" },
    { id: "v-trash", gameId: "gta5", cat: "vehicles", code: "TRASHED", title: "Faz aparecer um caminhão de lixo Trashmaster" },
    { id: "v-limo", gameId: "gta5", cat: "vehicles", code: "VINEWOOD", title: "Faz aparecer uma limusine" },
    { id: "v-slippery", gameId: "gta5", cat: "vehicles", code: "SNOWDAY", title: "Carros derrapam como se a pista estivesse escorregadia" },
    { id: "v-weather", gameId: "gta5", cat: "world", code: "MAKEITRAIN", title: "Muda o clima (repita para alternar)" },
    { id: "v-slowmo", gameId: "gta5", cat: "world", code: "SLOWMO", title: "Jogo em câmera lenta (até três níveis)" },
    { id: "v-gravity", gameId: "gta5", cat: "world", code: "FLOATER", title: "Gravidade lunar" }
  ],

  faq: [
    {
      id: "cheat-faq-money-v",
      q: "Existe código de dinheiro em GTA V?",
      a: "Não. GTA V não tem código de dinheiro no modo história, e nenhum código funciona em GTA Online. Dinheiro no modo história vem das missões, dos golpes e da bolsa de valores do jogo."
    },
    {
      id: "cheat-faq-save",
      q: "Usar códigos estraga o save?",
      a: "Depende do jogo. Em GTA III, Vice City e San Andreas, os códigos de pedestres agressivos ou em tumulto ficam gravados se você salvar com eles ativos. O recomendado é manter um save limpo separado."
    },
    {
      id: "cheat-faq-achievements",
      q: "Códigos desativam conquistas e troféus?",
      a: "Em GTA IV, alguns códigos bloqueiam conquistas específicas. Em GTA V, usar qualquer código desativa conquistas e troféus até você recarregar o jogo."
    },
    {
      id: "cheat-faq-vi",
      q: "GTA VI vai ter códigos?",
      a: "A Rockstar não confirmou códigos para GTA VI. Enquanto não houver fonte oficial ou o jogo lançado, nenhuma lista de códigos de GTA VI é verdadeira."
    }
  ]
};
