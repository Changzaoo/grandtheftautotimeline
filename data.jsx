/* ============ Placeholder data — all original fictional entries ============ */
/* Names and entities are invented for the prototype. Real titles/characters
   from copyrighted franchises are intentionally NOT used. */

const NAV = [
  {id:"overview",  label:"Visão Geral",     k:"01"},
  {id:"timeline",  label:"Timeline",        k:"02"},
  {id:"games",     label:"Jogos",           k:"03"},
  {id:"characters",label:"Personagens",     k:"04"},
  {id:"cities",    label:"Cidades",         k:"05"},
  {id:"gangs",     label:"Gangues & Máfias",k:"06"},
  {id:"orgs",      label:"Organizações",    k:"07"},
  {id:"rockstar",  label:"Rockstar Games",  k:"08"},
  {id:"universes", label:"Universos",       k:"09"},
  {id:"gtaonline", label:"GTA Online",      k:"10"},
  {id:"gta6",      label:"GTA VI",          k:"11"},
  {id:"glossary",  label:"Glossário",       k:"12"},
  {id:"vehicles",  label:"Veículos",        k:"13"},
  {id:"weapons",   label:"Armas",           k:"14"},
  {id:"radios",    label:"Rádios",          k:"15"},
  {id:"trivia",    label:"Curiosidades",    k:"16"},
  {id:"classified",label:"Arquivos Secretos",k:"17"},
];

const TIMELINE = [
  {year:"1997", title:"Capítulo I",      era:"2D ERA",   city:"Liberty City",   protag:"—",                badge:"Top-down"},
  {year:"1999", title:"Capítulo II",     era:"2D ERA",   city:"Anywhere City",  protag:"—",                badge:"Top-down"},
  {year:"2001", title:"Capítulo III",    era:"3D ERA",   city:"Liberty City",   protag:"Protagonista A",   badge:"PS2"},
  {year:"2002", title:"Capítulo IV",     era:"3D ERA",   city:"Vice City",      protag:"Protagonista B",   badge:"Anos 80"},
  {year:"2004", title:"Capítulo V",      era:"3D ERA",   city:"San Andreas",    protag:"Protagonista C",   badge:"Costa Oeste"},
  {year:"2008", title:"Capítulo VI",     era:"HD ERA",   city:"Liberty City",   protag:"Protagonista D",   badge:"Realismo"},
  {year:"2013", title:"Capítulo VII",    era:"HD ERA",   city:"Los Santos",     protag:"Trio",             badge:"3 protagonistas"},
  {year:"2025", title:"Capítulo VIII",   era:"FUTURO",   city:"Costa Tropical", protag:"Dupla",            badge:"Próxima geração"},
];

const GAMES = [
  {key:"liberty",  name:"Capítulo III",   year:"2001", city:"Liberty City",  pals:["Protagonista A"],     tone:"cool",  desc:"Crime urbano frio em uma metrópole de concreto."},
  {key:"vice",     name:"Capítulo IV",    year:"2002", city:"Vice City",     pals:["Protagonista B"],     tone:"neon",  desc:"Anos 80, neon, palmeiras e cartéis."},
  {key:"sa",       name:"Capítulo V",     year:"2004", city:"San Andreas",   pals:["Protagonista C"],     tone:"street",desc:"Gangues de bairro e a vastidão da costa oeste."},
  {key:"hd4",      name:"Capítulo VI",    year:"2008", city:"Liberty City",  pals:["Protagonista D"],     tone:"noir",  desc:"O sonho americano triturado pela cidade."},
  {key:"hd5",      name:"Capítulo VII",   year:"2013", city:"Los Santos",    pals:["A.","B.","C."],       tone:"sun",   desc:"Trio de criminosos em uma metrópole moderna."},
  {key:"new",      name:"Capítulo VIII",  year:"2025", city:"Costa Tropical",pals:["Dupla"],              tone:"vice",  desc:"Caos moderno, redes sociais e crime em tempo real."},
];

const TONE = {
  cool:  {a:"#1a2a3a",b:"#0a1422",accent:"#3b6cff",tag:"blue"},
  neon:  {a:"#2a0a2a",b:"#0a0010",accent:"#ff3d8a",tag:"pink"},
  street:{a:"#1a2a14",b:"#08120a",accent:"#4ade80",tag:"green"},
  noir:  {a:"#15151a",b:"#08080a",accent:"#bdbab1",tag:"neutral"},
  sun:   {a:"#2a200a",b:"#120e04",accent:"#f5c518",tag:"yellow"},
  vice:  {a:"#1a0a2a",b:"#06000e",accent:"#ff3d8a",tag:"pink"},
};

const CHARACTERS = [
  {id:"c1", name:"Vincent \"Vic\" Moreau",    nick:"O Italiano",   game:"Cap. VI",  city:"Liberty City",  faction:"Máfia Moreau",   status:"Ativo",     threat:4, role:"protagonist"},
  {id:"c2", name:"Esther Kowalski",           nick:"A Contadora",  game:"Cap. VII", city:"Los Santos",    faction:"Independente",   status:"Foragida",  threat:3, role:"ally"},
  {id:"c3", name:"Detetive Hank Briar",       nick:"O Limpinho",   game:"Cap. VI",  city:"Liberty City",  faction:"Polícia",        status:"Corrupto",  threat:3, role:"authority"},
  {id:"c4", name:"Marcus \"Slim\" Okonkwo",   nick:"Slim",         game:"Cap. V",   city:"San Andreas",   faction:"Bloco Norte",    status:"Vivo",      threat:4, role:"protagonist"},
  {id:"c5", name:"Salvatore \"Salvo\" Ricci", nick:"O Padrinho",   game:"Cap. III", city:"Liberty City",  faction:"Família Ricci",  status:"Falecido",  threat:5, role:"antagonist"},
  {id:"c6", name:"Lana Ortega",               nick:"Reina",        game:"Cap. IV",  city:"Vice City",     faction:"Cartel Ortega",  status:"Foragida",  threat:5, role:"antagonist"},
  {id:"c7", name:"\"Quattro\" Diaz",          nick:"Quattro",      game:"Cap. VIII",city:"Costa Tropical",faction:"Cripto Mafia",   status:"Ativo",     threat:4, role:"antagonist"},
  {id:"c8", name:"Reverendo Calvin Pyke",     nick:"O Pregador",   game:"Cap. V",   city:"Sandshore",     faction:"Igreja Eterna",  status:"Procurado", threat:2, role:"secondary"},
  {id:"c9", name:"Tasha \"DJ Strobe\" Mills", nick:"Strobe",       game:"Cap. VII", city:"Los Santos",    faction:"Rádio Pulse",    status:"Ativa",     threat:1, role:"ally"},
  {id:"c10",name:"Comissário Aldo Fenn",      nick:"O Pitbull",    game:"Cap. VIII",city:"Costa Tropical",faction:"Polícia Federal",status:"Ativo",     threat:3, role:"authority"},
  {id:"c11",name:"\"Tre\" Wallace",           nick:"Tre",          game:"Cap. VII", city:"Los Santos",    faction:"Gangue do Canal",status:"Procurado", threat:4, role:"secondary"},
  {id:"c12",name:"Yuna Park",                 nick:"Zero",         game:"Cap. VIII",city:"Costa Tropical",faction:"Cripto Mafia",   status:"Ativa",     threat:3, role:"ally"},
];

const ROLE_FILTERS = [
  {id:"all", label:"Todos"},
  {id:"protagonist", label:"Protagonistas"},
  {id:"antagonist", label:"Antagonistas"},
  {id:"ally", label:"Aliados"},
  {id:"authority", label:"Autoridades"},
  {id:"secondary", label:"Secundários"},
];

const GANGS = [
  {name:"Família Moreau",     type:"Máfia Italiana",   city:"Liberty City",  color:"#ff2a2a", leaders:"V. Moreau / Don Salvo", rivals:"Família Ricci", territory:"Little Italy"},
  {name:"Família Ricci",      type:"Máfia Italiana",   city:"Liberty City",  color:"#ffcc00", leaders:"Salvo Ricci",           rivals:"Família Moreau", territory:"Westside"},
  {name:"Cartel Ortega",      type:"Cartel",           city:"Vice City",     color:"#ff3d8a", leaders:"Lana Ortega",           rivals:"Sindicato Diaz",  territory:"Praia Norte"},
  {name:"Bloco Norte",        type:"Gangue de Rua",    city:"San Andreas",   color:"#4ade80", leaders:"Slim Okonkwo",          rivals:"Gangue do Canal", territory:"Norte do bairro"},
  {name:"Gangue do Canal",    type:"Gangue de Rua",    city:"Los Santos",    color:"#3b6cff", leaders:"Tre Wallace",           rivals:"Bloco Norte",     territory:"Distrito do Canal"},
  {name:"Cripto Mafia",       type:"Sindicato",        city:"Costa Tropical",color:"#a855f7", leaders:"Quattro Diaz",          rivals:"Polícia Federal", territory:"Distrito Financeiro"},
  {name:"Igreja Eterna",      type:"Seita Criminosa",  city:"Sandshore",     color:"#f5c518", leaders:"Rev. Pyke",             rivals:"—",               territory:"Deserto"},
  {name:"Sindicato Diaz",     type:"Sindicato",        city:"Vice City",     color:"#22d3ee", leaders:"Carlos Diaz",           rivals:"Cartel Ortega",   territory:"Porto"},
];

const CITIES = [
  {name:"Liberty City",    sub:"Metrópole do Leste",     tone:"cool",   crime:"Máfias",            note:"Concreto, chuva, traição.",     pop:"8.4M", pins:[{x:60,y:60,label:"LI",color:"#ff2a2a"},{x:150,y:120,label:"DT",color:"#3b6cff"},{x:230,y:160,label:"BR",color:"#f5c518"}]},
  {name:"Vice City",       sub:"Costa Tropical Sul",     tone:"vice",   crime:"Cartéis",           note:"Neon, palmeiras, cocaína.",      pop:"3.1M", pins:[{x:80,y:90,label:"PN",color:"#ff3d8a"},{x:200,y:140,label:"DN",color:"#a855f7"}]},
  {name:"Los Santos",      sub:"Cidade do Sol",          tone:"sun",    crime:"Crime moderno",     note:"Glamour, esgoto e palmeiras.",   pop:"6.0M", pins:[{x:90,y:70,label:"HL",color:"#f5c518"},{x:220,y:130,label:"CL",color:"#3b6cff"}]},
  {name:"San Fierro",      sub:"Baía do Norte",          tone:"cool",   crime:"Tecnocrime",        note:"Pontes, neblina, hackers.",      pop:"2.4M", pins:[{x:120,y:80,label:"BY",color:"#22d3ee"}]},
  {name:"Las Venturas",    sub:"Cidade do Deserto",      tone:"sun",    crime:"Lavagem de dinheiro",note:"Cassinos e desertos.",          pop:"1.8M", pins:[{x:170,y:130,label:"CZ",color:"#f5c518"}]},
  {name:"Blaine County",   sub:"Interior Selvagem",      tone:"street", crime:"Drogas / Armas",    note:"Trailers e gasolina.",           pop:"0.4M", pins:[{x:60,y:100,label:"SH",color:"#4ade80"}]},
  {name:"North Yankton",   sub:"Cidade Congelada",       tone:"noir",   crime:"Roubo de banco",    note:"Frio, neve, segredos.",          pop:"0.2M", pins:[{x:160,y:90,label:"NY",color:"#bdbab1"}]},
  {name:"Costa Tropical",  sub:"Nova Era",               tone:"vice",   crime:"Cripto / Influencers",note:"Caos moderno em HD.",          pop:"5.6M", pins:[{x:90,y:80,label:"OC",color:"#ff3d8a"},{x:240,y:160,label:"DT",color:"#a855f7"}]},
];

const VEHICLES = [
  {name:"Sedan Urbano \"Comet\"",   class:"Esportivo",    top:"312 km/h"},
  {name:"Muscle Car \"Brawler\"",   class:"Muscle",       top:"284 km/h"},
  {name:"Hatch \"Pulse\"",          class:"Compacto",     top:"212 km/h"},
  {name:"SUV \"Granite\"",          class:"Utilitário",   top:"198 km/h"},
  {name:"Motocicleta \"Howler\"",   class:"Moto",         top:"322 km/h"},
  {name:"Pickup \"Frontera\"",      class:"Pickup",       top:"176 km/h"},
];

const WEAPONS = [
  {name:"Pistola Padrão",        class:"Side-arm",  rarity:"Comum"},
  {name:"SMG \"Wasp\"",          class:"Automático",rarity:"Incomum"},
  {name:"Espingarda \"Buckshot\"",class:"Pump",     rarity:"Comum"},
  {name:"Rifle \"Karbine\"",     class:"Assalto",   rarity:"Raro"},
  {name:"Sniper \"Longshot\"",   class:"Precisão",  rarity:"Raro"},
  {name:"Lança-foguetes \"RPK\"",class:"Pesado",    rarity:"Lendário"},
];

const RADIOS = [
  {name:"Pulse FM",       genre:"Synthwave / Neon", host:"DJ Strobe",      color:"#ff3d8a"},
  {name:"Block 88",       genre:"Rap / Street",     host:"MC Block",       color:"#4ade80"},
  {name:"Sangue & Sol",   genre:"Latin / Reggaeton",host:"La Reina",       color:"#f5c518"},
  {name:"Concrete 102",   genre:"Rock / Garage",    host:"Rocky O.",       color:"#3b6cff"},
  {name:"Static News",    genre:"Talk-radio",       host:"Hank Reynolds",  color:"#bdbab1"},
  {name:"Cripto Beat",    genre:"Electronic",       host:"Yuna Zero",      color:"#a855f7"},
];

const CLASSIFIED = [
  {id:"ee1", file:"DOSSIÊ #0731-A", title:"O homem do trem fantasma", stamp:"CLASSIFICADO",
   body:"Testemunhas relatam ter visto uma figura idêntica em três cidades distintas, sempre nas mesmas datas. Coincidência? O departamento prefere não comentar."},
  {id:"ee2", file:"DOSSIÊ #2204-B", title:"A empresa que nunca existiu", stamp:"CONFIDENCIAL",
   body:"A 'Tridente Holdings' aparece em registros corporativos desde os anos 90, mas nenhum funcionário foi encontrado. Lava dinheiro em pelo menos quatro cidades da Costa."},
  {id:"ee3", file:"DOSSIÊ #5512-C", title:"O easter egg do túnel",     stamp:"NÃO DIVULGAR",
   body:"Sob o túnel da Avenida Vermelha existe um símbolo gravado por um operário em 1981. Surge em outdoors de pelo menos três jogos da franquia."},
  {id:"ee4", file:"DOSSIÊ #0099-D", title:"A teoria do protagonista solitário", stamp:"TEORIA",
   body:"Pesquisadores apontam pistas de que todos os protagonistas habitam o mesmo universo. Comemoram aniversário no mesmo dia."},
];

Object.assign(window,{NAV,TIMELINE,GAMES,TONE,CHARACTERS,ROLE_FILTERS,GANGS,CITIES,VEHICLES,WEAPONS,RADIOS,CLASSIFIED});
