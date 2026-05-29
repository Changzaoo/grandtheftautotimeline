/* >>> components.jsx */
;const Stars = ({
  n = 3,
  max = 5
}) => {
  return React.createElement("span", {
    className: "stars",
    "aria-label": `Wanted level ${n} of ${max}`
  }, Array.from({
    length: max
  }).map((_, i) => React.createElement("i", {
    key: i,
    className: i < n ? "on" : ""
  })));
};
const Eyebrow = ({
  children,
  color
}) => React.createElement("div", {
  className: "eyebrow",
  style: {
    color: color || undefined,
    display: "flex",
    alignItems: "center",
    gap: 10
  }
}, React.createElement("span", {
  style: {
    width: 18,
    height: 1,
    background: "currentColor",
    opacity: .6
  }
}), children);
const Tag = ({
  children,
  tone = "neutral"
}) => React.createElement("span", {
  className: `tag ${tone}`
}, React.createElement("span", {
  className: "dot"
}), children);
const Corners = () => React.createElement(React.Fragment, null, React.createElement("span", {
  className: "corner tl"
}), React.createElement("span", {
  className: "corner tr"
}), React.createElement("span", {
  className: "corner bl"
}), React.createElement("span", {
  className: "corner br"
}));
const Placeholder = ({
  label = "Image placeholder",
  className = ""
}) => React.createElement("div", {
  className: `ph ${className}`
}, React.createElement(Corners, null), React.createElement("span", null, "\u25C7 ", label, " \u25C7"));
const Skyline = ({
  palette
}) => {
  const c = palette || {
    sky: "#13131a",
    a: "#1a1a22",
    b: "#22222c",
    c2: "#2a2a36",
    win: "#f5c518"
  };
  return React.createElement("svg", {
    viewBox: "0 0 600 220",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height: "100%",
      display: "block"
    }
  }, React.createElement("defs", null, React.createElement("linearGradient", {
    id: "sky",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, React.createElement("stop", {
    offset: "0%",
    stopColor: c.sky
  }), React.createElement("stop", {
    offset: "100%",
    stopColor: "#06060a"
  }))), React.createElement("rect", {
    width: "600",
    height: "220",
    fill: "url(#sky)"
  }), React.createElement("rect", {
    x: "0",
    y: "120",
    width: "600",
    height: "20",
    fill: c.a,
    opacity: ".5"
  }), Array.from({
    length: 18
  }).map((_, i) => {
    const h = 30 + i * 13 % 55;
    return React.createElement("rect", {
      key: `b${i}`,
      x: i * 34,
      y: 140 - h,
      width: "32",
      height: h,
      fill: c.b
    });
  }), Array.from({
    length: 14
  }).map((_, i) => {
    const h = 60 + i * 23 % 90;
    return React.createElement("g", {
      key: `f${i}`
    }, React.createElement("rect", {
      x: i * 44,
      y: 210 - h,
      width: "40",
      height: h,
      fill: c.c2
    }), Array.from({
      length: Math.floor(h / 14)
    }).map((__, j) => Array.from({
      length: 4
    }).map((___, k) => (i * 7 + j * 3 + k) % 5 === 0 ? React.createElement("rect", {
      key: `w${i}${j}${k}`,
      x: i * 44 + 4 + k * 9,
      y: 210 - h + 6 + j * 14,
      width: "5",
      height: "6",
      fill: c.win,
      opacity: (i + j + k) % 3 === 0 ? ".9" : ".4"
    }) : null)));
  }), React.createElement("g", {
    transform: "translate(490,30)"
  }, React.createElement("circle", {
    r: "2",
    fill: "#ff2a2a",
    className: "heli-dot"
  })), React.createElement("g", {
    transform: "translate(60,40)"
  }, React.createElement("line", {
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "100",
    stroke: c.win,
    strokeWidth: ".7",
    opacity: ".5"
  }), React.createElement("circle", {
    cx: "0",
    cy: "-4",
    r: "2.4",
    fill: "#ff3d8a"
  })));
};
const MiniMap = ({
  pins = []
}) => React.createElement("svg", {
  viewBox: "0 0 320 220",
  style: {
    width: "100%",
    height: "100%",
    display: "block"
  }
}, React.createElement("defs", null, React.createElement("pattern", {
  id: "grid",
  width: "20",
  height: "20",
  patternUnits: "userSpaceOnUse"
}, React.createElement("path", {
  d: "M20 0 L0 0 0 20",
  fill: "none",
  stroke: "#23232c",
  strokeWidth: ".5"
}))), React.createElement("rect", {
  width: "320",
  height: "220",
  fill: "#0b0b10"
}), React.createElement("rect", {
  width: "320",
  height: "220",
  fill: "url(#grid)"
}), React.createElement("path", {
  d: "M0 60 L 320 80",
  stroke: "#2c2c36",
  strokeWidth: "6"
}), React.createElement("path", {
  d: "M0 140 L 320 130",
  stroke: "#2c2c36",
  strokeWidth: "5"
}), React.createElement("path", {
  d: "M80 0 L 100 220",
  stroke: "#2c2c36",
  strokeWidth: "6"
}), React.createElement("path", {
  d: "M220 0 L 240 220",
  stroke: "#2c2c36",
  strokeWidth: "5"
}), React.createElement("path", {
  d: "M0 60 L 320 80",
  stroke: "#f5c518",
  strokeWidth: ".8",
  strokeDasharray: "4 6",
  opacity: ".7"
}), React.createElement("path", {
  d: "M80 0 L 100 220",
  stroke: "#f5c518",
  strokeWidth: ".8",
  strokeDasharray: "4 6",
  opacity: ".7"
}), React.createElement("path", {
  d: "M0 180 L 320 200 L 320 220 L 0 220 Z",
  fill: "#0a1a2a"
}), React.createElement("rect", {
  x: "140",
  y: "92",
  width: "60",
  height: "36",
  fill: "#15321f",
  stroke: "#1d5836",
  strokeWidth: ".7"
}), pins.map((p, i) => React.createElement("g", {
  key: i,
  transform: `translate(${p.x},${p.y})`
}, React.createElement("circle", {
  r: "9",
  fill: p.color || "#ff3d8a",
  opacity: ".25"
}), React.createElement("circle", {
  r: "4",
  fill: p.color || "#ff3d8a"
}), React.createElement("text", {
  x: "8",
  y: "3",
  fontSize: "8",
  fill: "#bdbab1",
  fontFamily: "Space Mono"
}, p.label))));
const Connector = ({
  lines
}) => React.createElement("svg", {
  className: "connector",
  preserveAspectRatio: "none"
}, lines.map((l, i) => React.createElement("line", {
  key: i,
  x1: l.x1,
  y1: l.y1,
  x2: l.x2,
  y2: l.y2,
  stroke: l.color || "#ff2a2a",
  strokeWidth: "1",
  strokeDasharray: "3 4",
  opacity: ".55"
})));
Object.assign(window, {
  Stars,
  Eyebrow,
  Tag,
  Corners,
  Placeholder,
  Skyline,
  MiniMap,
  Connector
});

/* >>> data.jsx */
;const NAV = [{
  id: "overview",
  label: "Visão Geral",
  k: "01"
}, {
  id: "timeline",
  label: "Timeline",
  k: "02"
}, {
  id: "games",
  label: "Jogos",
  k: "03"
}, {
  id: "characters",
  label: "Personagens",
  k: "04"
}, {
  id: "cities",
  label: "Cidades",
  k: "05"
}, {
  id: "gangs",
  label: "Gangues & Máfias",
  k: "06"
}, {
  id: "orgs",
  label: "Organizações",
  k: "07"
}, {
  id: "rockstar",
  label: "Rockstar Games",
  k: "08"
}, {
  id: "universes",
  label: "Universos",
  k: "09"
}, {
  id: "gtaonline",
  label: "GTA Online",
  k: "10"
}, {
  id: "gta6",
  label: "GTA VI",
  k: "11"
}, {
  id: "glossary",
  label: "Glossário",
  k: "12"
}, {
  id: "vehicles",
  label: "Veículos",
  k: "13"
}, {
  id: "weapons",
  label: "Armas",
  k: "14"
}, {
  id: "radios",
  label: "Rádios",
  k: "15"
}, {
  id: "trivia",
  label: "Curiosidades",
  k: "16"
}, {
  id: "classified",
  label: "Arquivos Secretos",
  k: "17"
}];
const TIMELINE = [{
  year: "1997",
  title: "Capítulo I",
  era: "2D ERA",
  city: "Liberty City",
  protag: "—",
  badge: "Top-down"
}, {
  year: "1999",
  title: "Capítulo II",
  era: "2D ERA",
  city: "Anywhere City",
  protag: "—",
  badge: "Top-down"
}, {
  year: "2001",
  title: "Capítulo III",
  era: "3D ERA",
  city: "Liberty City",
  protag: "Protagonista A",
  badge: "PS2"
}, {
  year: "2002",
  title: "Capítulo IV",
  era: "3D ERA",
  city: "Vice City",
  protag: "Protagonista B",
  badge: "Anos 80"
}, {
  year: "2004",
  title: "Capítulo V",
  era: "3D ERA",
  city: "San Andreas",
  protag: "Protagonista C",
  badge: "Costa Oeste"
}, {
  year: "2008",
  title: "Capítulo VI",
  era: "HD ERA",
  city: "Liberty City",
  protag: "Protagonista D",
  badge: "Realismo"
}, {
  year: "2013",
  title: "Capítulo VII",
  era: "HD ERA",
  city: "Los Santos",
  protag: "Trio",
  badge: "3 protagonistas"
}, {
  year: "2025",
  title: "Capítulo VIII",
  era: "FUTURO",
  city: "Costa Tropical",
  protag: "Dupla",
  badge: "Próxima geração"
}];
const GAMES = [{
  key: "liberty",
  name: "Capítulo III",
  year: "2001",
  city: "Liberty City",
  pals: ["Protagonista A"],
  tone: "cool",
  desc: "Crime urbano frio em uma metrópole de concreto."
}, {
  key: "vice",
  name: "Capítulo IV",
  year: "2002",
  city: "Vice City",
  pals: ["Protagonista B"],
  tone: "neon",
  desc: "Anos 80, neon, palmeiras e cartéis."
}, {
  key: "sa",
  name: "Capítulo V",
  year: "2004",
  city: "San Andreas",
  pals: ["Protagonista C"],
  tone: "street",
  desc: "Gangues de bairro e a vastidão da costa oeste."
}, {
  key: "hd4",
  name: "Capítulo VI",
  year: "2008",
  city: "Liberty City",
  pals: ["Protagonista D"],
  tone: "noir",
  desc: "O sonho americano triturado pela cidade."
}, {
  key: "hd5",
  name: "Capítulo VII",
  year: "2013",
  city: "Los Santos",
  pals: ["A.", "B.", "C."],
  tone: "sun",
  desc: "Trio de criminosos em uma metrópole moderna."
}, {
  key: "new",
  name: "Capítulo VIII",
  year: "2025",
  city: "Costa Tropical",
  pals: ["Dupla"],
  tone: "vice",
  desc: "Caos moderno, redes sociais e crime em tempo real."
}];
const TONE = {
  cool: {
    a: "#1a2a3a",
    b: "#0a1422",
    accent: "#3b6cff",
    tag: "blue"
  },
  neon: {
    a: "#2a0a2a",
    b: "#0a0010",
    accent: "#ff3d8a",
    tag: "pink"
  },
  street: {
    a: "#1a2a14",
    b: "#08120a",
    accent: "#4ade80",
    tag: "green"
  },
  noir: {
    a: "#15151a",
    b: "#08080a",
    accent: "#bdbab1",
    tag: "neutral"
  },
  sun: {
    a: "#2a200a",
    b: "#120e04",
    accent: "#f5c518",
    tag: "yellow"
  },
  vice: {
    a: "#1a0a2a",
    b: "#06000e",
    accent: "#ff3d8a",
    tag: "pink"
  }
};
const CHARACTERS = [{
  id: "c1",
  name: "Vincent \"Vic\" Moreau",
  nick: "O Italiano",
  game: "Cap. VI",
  city: "Liberty City",
  faction: "Máfia Moreau",
  status: "Ativo",
  threat: 4,
  role: "protagonist"
}, {
  id: "c2",
  name: "Esther Kowalski",
  nick: "A Contadora",
  game: "Cap. VII",
  city: "Los Santos",
  faction: "Independente",
  status: "Foragida",
  threat: 3,
  role: "ally"
}, {
  id: "c3",
  name: "Detetive Hank Briar",
  nick: "O Limpinho",
  game: "Cap. VI",
  city: "Liberty City",
  faction: "Polícia",
  status: "Corrupto",
  threat: 3,
  role: "authority"
}, {
  id: "c4",
  name: "Marcus \"Slim\" Okonkwo",
  nick: "Slim",
  game: "Cap. V",
  city: "San Andreas",
  faction: "Bloco Norte",
  status: "Vivo",
  threat: 4,
  role: "protagonist"
}, {
  id: "c5",
  name: "Salvatore \"Salvo\" Ricci",
  nick: "O Padrinho",
  game: "Cap. III",
  city: "Liberty City",
  faction: "Família Ricci",
  status: "Falecido",
  threat: 5,
  role: "antagonist"
}, {
  id: "c6",
  name: "Lana Ortega",
  nick: "Reina",
  game: "Cap. IV",
  city: "Vice City",
  faction: "Cartel Ortega",
  status: "Foragida",
  threat: 5,
  role: "antagonist"
}, {
  id: "c7",
  name: "\"Quattro\" Diaz",
  nick: "Quattro",
  game: "Cap. VIII",
  city: "Costa Tropical",
  faction: "Cripto Mafia",
  status: "Ativo",
  threat: 4,
  role: "antagonist"
}, {
  id: "c8",
  name: "Reverendo Calvin Pyke",
  nick: "O Pregador",
  game: "Cap. V",
  city: "Sandshore",
  faction: "Igreja Eterna",
  status: "Procurado",
  threat: 2,
  role: "secondary"
}, {
  id: "c9",
  name: "Tasha \"DJ Strobe\" Mills",
  nick: "Strobe",
  game: "Cap. VII",
  city: "Los Santos",
  faction: "Rádio Pulse",
  status: "Ativa",
  threat: 1,
  role: "ally"
}, {
  id: "c10",
  name: "Comissário Aldo Fenn",
  nick: "O Pitbull",
  game: "Cap. VIII",
  city: "Costa Tropical",
  faction: "Polícia Federal",
  status: "Ativo",
  threat: 3,
  role: "authority"
}, {
  id: "c11",
  name: "\"Tre\" Wallace",
  nick: "Tre",
  game: "Cap. VII",
  city: "Los Santos",
  faction: "Gangue do Canal",
  status: "Procurado",
  threat: 4,
  role: "secondary"
}, {
  id: "c12",
  name: "Yuna Park",
  nick: "Zero",
  game: "Cap. VIII",
  city: "Costa Tropical",
  faction: "Cripto Mafia",
  status: "Ativa",
  threat: 3,
  role: "ally"
}];
const ROLE_FILTERS = [{
  id: "all",
  label: "Todos"
}, {
  id: "protagonist",
  label: "Protagonistas"
}, {
  id: "antagonist",
  label: "Antagonistas"
}, {
  id: "ally",
  label: "Aliados"
}, {
  id: "authority",
  label: "Autoridades"
}, {
  id: "secondary",
  label: "Secundários"
}];
const GANGS = [{
  name: "Família Moreau",
  type: "Máfia Italiana",
  city: "Liberty City",
  color: "#ff2a2a",
  leaders: "V. Moreau / Don Salvo",
  rivals: "Família Ricci",
  territory: "Little Italy"
}, {
  name: "Família Ricci",
  type: "Máfia Italiana",
  city: "Liberty City",
  color: "#ffcc00",
  leaders: "Salvo Ricci",
  rivals: "Família Moreau",
  territory: "Westside"
}, {
  name: "Cartel Ortega",
  type: "Cartel",
  city: "Vice City",
  color: "#ff3d8a",
  leaders: "Lana Ortega",
  rivals: "Sindicato Diaz",
  territory: "Praia Norte"
}, {
  name: "Bloco Norte",
  type: "Gangue de Rua",
  city: "San Andreas",
  color: "#4ade80",
  leaders: "Slim Okonkwo",
  rivals: "Gangue do Canal",
  territory: "Norte do bairro"
}, {
  name: "Gangue do Canal",
  type: "Gangue de Rua",
  city: "Los Santos",
  color: "#3b6cff",
  leaders: "Tre Wallace",
  rivals: "Bloco Norte",
  territory: "Distrito do Canal"
}, {
  name: "Cripto Mafia",
  type: "Sindicato",
  city: "Costa Tropical",
  color: "#a855f7",
  leaders: "Quattro Diaz",
  rivals: "Polícia Federal",
  territory: "Distrito Financeiro"
}, {
  name: "Igreja Eterna",
  type: "Seita Criminosa",
  city: "Sandshore",
  color: "#f5c518",
  leaders: "Rev. Pyke",
  rivals: "—",
  territory: "Deserto"
}, {
  name: "Sindicato Diaz",
  type: "Sindicato",
  city: "Vice City",
  color: "#22d3ee",
  leaders: "Carlos Diaz",
  rivals: "Cartel Ortega",
  territory: "Porto"
}];
const CITIES = [{
  name: "Liberty City",
  sub: "Metrópole do Leste",
  tone: "cool",
  crime: "Máfias",
  note: "Concreto, chuva, traição.",
  pop: "8.4M",
  pins: [{
    x: 60,
    y: 60,
    label: "LI",
    color: "#ff2a2a"
  }, {
    x: 150,
    y: 120,
    label: "DT",
    color: "#3b6cff"
  }, {
    x: 230,
    y: 160,
    label: "BR",
    color: "#f5c518"
  }]
}, {
  name: "Vice City",
  sub: "Costa Tropical Sul",
  tone: "vice",
  crime: "Cartéis",
  note: "Neon, palmeiras, cocaína.",
  pop: "3.1M",
  pins: [{
    x: 80,
    y: 90,
    label: "PN",
    color: "#ff3d8a"
  }, {
    x: 200,
    y: 140,
    label: "DN",
    color: "#a855f7"
  }]
}, {
  name: "Los Santos",
  sub: "Cidade do Sol",
  tone: "sun",
  crime: "Crime moderno",
  note: "Glamour, esgoto e palmeiras.",
  pop: "6.0M",
  pins: [{
    x: 90,
    y: 70,
    label: "HL",
    color: "#f5c518"
  }, {
    x: 220,
    y: 130,
    label: "CL",
    color: "#3b6cff"
  }]
}, {
  name: "San Fierro",
  sub: "Baía do Norte",
  tone: "cool",
  crime: "Tecnocrime",
  note: "Pontes, neblina, hackers.",
  pop: "2.4M",
  pins: [{
    x: 120,
    y: 80,
    label: "BY",
    color: "#22d3ee"
  }]
}, {
  name: "Las Venturas",
  sub: "Cidade do Deserto",
  tone: "sun",
  crime: "Lavagem de dinheiro",
  note: "Cassinos e desertos.",
  pop: "1.8M",
  pins: [{
    x: 170,
    y: 130,
    label: "CZ",
    color: "#f5c518"
  }]
}, {
  name: "Blaine County",
  sub: "Interior Selvagem",
  tone: "street",
  crime: "Drogas / Armas",
  note: "Trailers e gasolina.",
  pop: "0.4M",
  pins: [{
    x: 60,
    y: 100,
    label: "SH",
    color: "#4ade80"
  }]
}, {
  name: "North Yankton",
  sub: "Cidade Congelada",
  tone: "noir",
  crime: "Roubo de banco",
  note: "Frio, neve, segredos.",
  pop: "0.2M",
  pins: [{
    x: 160,
    y: 90,
    label: "NY",
    color: "#bdbab1"
  }]
}, {
  name: "Costa Tropical",
  sub: "Nova Era",
  tone: "vice",
  crime: "Cripto / Influencers",
  note: "Caos moderno em HD.",
  pop: "5.6M",
  pins: [{
    x: 90,
    y: 80,
    label: "OC",
    color: "#ff3d8a"
  }, {
    x: 240,
    y: 160,
    label: "DT",
    color: "#a855f7"
  }]
}];
const VEHICLES = [{
  name: "Sedan Urbano \"Comet\"",
  class: "Esportivo",
  top: "312 km/h"
}, {
  name: "Muscle Car \"Brawler\"",
  class: "Muscle",
  top: "284 km/h"
}, {
  name: "Hatch \"Pulse\"",
  class: "Compacto",
  top: "212 km/h"
}, {
  name: "SUV \"Granite\"",
  class: "Utilitário",
  top: "198 km/h"
}, {
  name: "Motocicleta \"Howler\"",
  class: "Moto",
  top: "322 km/h"
}, {
  name: "Pickup \"Frontera\"",
  class: "Pickup",
  top: "176 km/h"
}];
const WEAPONS = [{
  name: "Pistola Padrão",
  class: "Side-arm",
  rarity: "Comum"
}, {
  name: "SMG \"Wasp\"",
  class: "Automático",
  rarity: "Incomum"
}, {
  name: "Espingarda \"Buckshot\"",
  class: "Pump",
  rarity: "Comum"
}, {
  name: "Rifle \"Karbine\"",
  class: "Assalto",
  rarity: "Raro"
}, {
  name: "Sniper \"Longshot\"",
  class: "Precisão",
  rarity: "Raro"
}, {
  name: "Lança-foguetes \"RPK\"",
  class: "Pesado",
  rarity: "Lendário"
}];
const RADIOS = [{
  name: "Pulse FM",
  genre: "Synthwave / Neon",
  host: "DJ Strobe",
  color: "#ff3d8a"
}, {
  name: "Block 88",
  genre: "Rap / Street",
  host: "MC Block",
  color: "#4ade80"
}, {
  name: "Sangue & Sol",
  genre: "Latin / Reggaeton",
  host: "La Reina",
  color: "#f5c518"
}, {
  name: "Concrete 102",
  genre: "Rock / Garage",
  host: "Rocky O.",
  color: "#3b6cff"
}, {
  name: "Static News",
  genre: "Talk-radio",
  host: "Hank Reynolds",
  color: "#bdbab1"
}, {
  name: "Cripto Beat",
  genre: "Electronic",
  host: "Yuna Zero",
  color: "#a855f7"
}];
const CLASSIFIED = [{
  id: "ee1",
  file: "DOSSIÊ #0731-A",
  title: "O homem do trem fantasma",
  stamp: "CLASSIFICADO",
  body: "Testemunhas relatam ter visto uma figura idêntica em três cidades distintas, sempre nas mesmas datas. Coincidência? O departamento prefere não comentar."
}, {
  id: "ee2",
  file: "DOSSIÊ #2204-B",
  title: "A empresa que nunca existiu",
  stamp: "CONFIDENCIAL",
  body: "A 'Tridente Holdings' aparece em registros corporativos desde os anos 90, mas nenhum funcionário foi encontrado. Lava dinheiro em pelo menos quatro cidades da Costa."
}, {
  id: "ee3",
  file: "DOSSIÊ #5512-C",
  title: "O easter egg do túnel",
  stamp: "NÃO DIVULGAR",
  body: "Sob o túnel da Avenida Vermelha existe um símbolo gravado por um operário em 1981. Surge em outdoors de pelo menos três jogos da franquia."
}, {
  id: "ee4",
  file: "DOSSIÊ #0099-D",
  title: "A teoria do protagonista solitário",
  stamp: "TEORIA",
  body: "Pesquisadores apontam pistas de que todos os protagonistas habitam o mesmo universo. Comemoram aniversário no mesmo dia."
}];
Object.assign(window, {
  NAV,
  TIMELINE,
  GAMES,
  TONE,
  CHARACTERS,
  ROLE_FILTERS,
  GANGS,
  CITIES,
  VEHICLES,
  WEAPONS,
  RADIOS,
  CLASSIFIED
});

/* >>> data-gta.jsx */
;const ROCKSTAR_HISTORY = {
  founding: {
    title: "DMA Design & Origens da Franquia",
    year: "1987",
    content: "David Jones funda a DMA Design em Dundee, Escócia. A empresa começou criando jogos diversos, mas sua direção mudaria radicalmente."
  },
  gta1: {
    title: "Grand Theft Auto — O Nascimento",
    year: "1997",
    content: "David Jones e Mike Dailly criam Grand Theft Auto, um jogo top-down revolucionário que misturava liberdade, caos urbano e humor negro. Lançado inicialmente em PlayStation e PC, GTA definiria um novo gênero: o crime sandbox urbano."
  },
  buyout: {
    title: "Take-Two Interactive Assume o Controle",
    year: "1998-1999",
    content: "Take-Two Interactive adquire os ativos da BMG Interactive, absorvendo a publicação de GTA. Paralelamente, Rockstar Games é formalmente fundada por Sam Houser, Dan Houser, Terry Donovan, Jamie King e Gary Foreman. A DMA Design passa a ser conhecida como Rockstar North."
  },
  vision: {
    title: "A Visão: Cinema, Satíra e Liberdade",
    year: "1999-2001",
    content: "Rockstar consolida sua visão: GTA não seria apenas um jogo de crime, mas uma sátira elaborada da sociedade americana, misturando cinema, narrativa profunda, rádios temáticas, personagens memoráveis e uma sensação visceral de estar em uma metrópole viva. Cada jogo se tornaria uma décade diferente, um estilo próprio."
  },
  gta3_revolution: {
    title: "GTA III — A Revolução do 3D",
    year: "2001",
    content: "GTA III redefiniu a indústria. Ao mudar de 2D para 3D em tempo real, Liberty City ganhou profundidade. A câmera atrás do jogador, as missões cinemáticas, os personagens dublados em inglês, a liberdade de exploração: tudo isto junto criou um novo padrão para mundos abertos. GTA III vendeu milhões e marcou a era 3D da franquia."
  },
  hd_era: {
    title: "Era HD — Realismo e Escala",
    year: "2008-2013",
    content: "Com a engine RAGE, GTA IV trouxe Liberty City em HD: mais detalhado, mais realista, mais sujo e mais denso. O tom mudou de aventura para drama noir. Depois, GTA V em 2013 expandiu a escala com Los Santos e Blaine County, três protagonistas, e apresentou GTA Online como uma plataforma de jogo viva que continua até hoje."
  },
  online_phenomenon: {
    title: "GTA Online — A Plataforma Viva",
    year: "2013-2026",
    content: "GTA Online começou como um modo multiplayer experimental. Virou um fenômeno: assaltos cooperativos, negócios criminosos, motoclubes, bunkers, cassinos, pista de corridas, drogas, bancos de dados de compra e venda. GTA Online recebeu atualizações consistentes por mais de uma década, gerando bilhões em receita para Rockstar."
  },
  gta6_next: {
    title: "GTA VI — O Próximo Capítulo",
    year: "2026",
    content: "Anunciado em dezembro de 2024, GTA VI será lançado em 19 de novembro de 2026 (início exclusivo PS5, depois outras plataformas). Ambientado em Leonida (baseada na Flórida moderna), com Vice City no coração. Protagonistas: Lucia Caminos e Jason Duval. Tema: crime moderno, redes sociais, influencers, golpes digitais e sátira do século XXI."
  }
};
const UNIVERSOS_GTA = [{
  id: "2d",
  name: "2D Universe",
  description: "Era top-down, arcade, com tom experimental e desconexão entre jogos.",
  games: ["GTA 1", "GTA London 1969", "GTA London 1961", "GTA 2", "GTA Advance"],
  color: "#bdbab1",
  characteristics: ["Visão de cima (top-down)", "Estética retrô e pixelizada", "Gameplay mais arcade", "Cidades menos densas", "Personagens com menos profundidade narrativa", "Tom mais humorístico e menos dramático"]
}, {
  id: "3d",
  name: "3D Universe",
  description: "Primeira era 3D da série. Continuidade conectada por cidades, máfias e personagens.",
  games: ["GTA III", "GTA Vice City", "GTA San Andreas", "GTA Liberty City Stories", "GTA Vice City Stories"],
  color: "#3b6cff",
  characteristics: ["Transição para 3D tempo real", "Câmera atrás do personagem", "Mundo exploração tridimensional", "Cidades conectadas narrativamente", "Personagens recorrentes", "Máfias e histórias ligadas", "Era de ouro da série antes do HD"]
}, {
  id: "hd",
  name: "HD Universe",
  description: "Era moderna. Realismo, densidade visual máxima, narrativa profunda e GTA Online.",
  games: ["GTA IV", "GTA Chinatown Wars", "GTA: The Lost and Damned", "GTA: The Ballad of Gay Tony", "GTA V", "GTA Online", "GTA VI"],
  color: "#ff3d8a",
  characteristics: ["Engine RAGE: gráficos HD de alta fidelidade", "Mundo urbano muito mais denso e detalhado", "Narrativa cinematográfica", "Tom realista, frequentemente noir", "Sátira sofisticada da política e cultura americana", "Personagens bem desenvolvidos", "GTA Online como ecossistema vivo", "Múltiplos protagonistas em V"]
}];
const GAMES_COMPLETE = [{
  id: "gta1",
  title: "Grand Theft Auto",
  releaseYear: 1997,
  storyYear: "1986+",
  universe: "2D",
  city: "Liberty City, Vice City, San Andreas",
  protagonista: "Customizável",
  antagonistas: [],
  summary: "Top-down, liberdade total de exploração em três cidades. Crime urbano puro.",
  fullStory: "Em GTA 1, você é um criminoso anônimo em três cidades diferentes. Suba na hierarquia do crime, complete missões para vários patrões, roube carros, destrua propriedades e se torne o rei do submundo. Sem narrativa profunda - é puro caos e diversão. A liberdade era o ponto: fazer o que quisesse, quando quisesse.",
  development: "Criado pela DMA Design, liderado por David Jones e Mike Dailly. Começou como concept art para um racing game (Race'n'Chase) que virou crime sandbox. Inovação: a liberdade é o gameplay.",
  importance: "Fundador da franquia. Provou que crimes em videojogos podiam ser divertidos e não violentos de forma patológica.",
  themes: ["Liberdade", "Crime urbano", "Caos", "Exploração"],
  tags: ["2D Universe", "Sandbox", "Clássico", "PC/PS1"]
}, {
  id: "gtalon1961",
  title: "Grand Theft Auto: London 1961",
  releaseYear: 1999,
  storyYear: 1961,
  universe: "2D",
  city: "Londres, Reino Unido",
  protagonista: "Customizável",
  antagonistas: [],
  summary: "Expansão com tema britânico dos anos 60. A única incursão da série fora dos EUA na era 2D.",
  fullStory: "Uma das poucas vezes que GTA sai dos EUA. Londres em 1961, no auge da Swinging Sixties britânica. Vous jouez como criminosos em uma capital europeia, com carros britânicos, sotaque britânico e crime de colar branco. Experimento singular da série.",
  development: "Expansão para GTA 1. Mudança de cenário para testar viabilidade de novos locais.",
  importance: "Rara aventura internacional. Mostrou que a fórmula de GTA poderia funcionar fora da América.",
  themes: ["Era 60", "Londres", "Crime britânico"],
  tags: ["2D Universe", "Expansão", "Exclusivo", "Criatividade"]
}, {
  id: "gtalon1969",
  title: "Grand Theft Auto: London 1969",
  releaseYear: 1999,
  storyYear: 1969,
  universe: "2D",
  city: "Londres, Reino Unido",
  protagonista: "Customizável",
  antagonistas: [],
  summary: "Outra expansão de Londres, agora em 1969 com atualizações visuais e novo conteúdo.",
  fullStory: "Retorno a Londres britânica, mas oito anos depois. A cultura mudou, os carros são diferentes, a música é outra. Criminalidade em plena Era Dourada britânica.",
  development: "Segunda expansão de GTA 1, aprimorando o experimento londrino.",
  importance: "Consolidou a ideia de expansões para GTA 1. Mostrou diversidade temática.",
  themes: ["Era 60", "Londres", "Contracultura"],
  tags: ["2D Universe", "Expansão", "Nostalgia"]
}, {
  id: "gta2",
  title: "Grand Theft Auto 2",
  releaseYear: 1999,
  storyYear: "2013 (fictício/retrofuturista)",
  universe: "2D",
  city: "Anywhere City",
  protagonista: "Claude Speed",
  antagonistas: ["Zaibatsu", "Loonies", "Yakuza", "Scientists", "Rednecks", "Russian Mafia"],
  summary: "Mundo retrofuturista. Gangues estilizadas e distintas. Tom mais absurdo e colorido.",
  fullStory: "GTA 2 é um experimento único. Anywhere City é uma metrópole futurista (estilo retro-futurista dos anos 70 imaginando o ano 2000+). Claude Speed trabalha para várias gangues: Zaibatsu (corporações), Loonies (loucos), Yakuza (crime japonês), Scientists (cientistas malucos), Rednecks (caipiras), Russian Mafia. Cada gangue tem estilos visuais e comportamentais únicos. Não há narrativa linear forte - você ganha dinheiro trabalhando para facções.",
  development: "Prequela experimental. Rockstar quis testar narrativa fragmentária e universo próprio. Tecnicamente inovador para PS1. Tom bem-humorado.",
  importance: "Diferenciador entre 2D e 3D. Provou que GTA podia ser absurdo, colorido e não-linear.",
  themes: ["Futuro", "Corporações", "Gangues", "Absurdo"],
  tags: ["2D Universe", "Experimental", "Cult", "Único"]
}, {
  id: "gta3",
  title: "Grand Theft Auto III",
  releaseYear: 2001,
  storyYear: "2001",
  universe: "3D",
  city: "Liberty City",
  protagonista: "Claude",
  antagonistas: ["Catalina", "Asuka Kasen", "Donald Love", "Salvatore Leone"],
  summary: "A revolução: 3D tempo real, mundo aberto, narrativa cinemática. Define o padrão para mundos abertos modernos.",
  fullStory: "Você é Claude, um ladrão silencioso que é traído e deixado para morrer após um assalto de banco por Catalina (sua companheira) e Miguel. Você sobrevive misteriosamente. Em Liberty City, você passa a trabalhar para várias facções: Leone Family (máfia italiana), Yakuza (crime japonês), Yardies (gangue caribenha), Forelli Family e cartel colombiano. Você conhece 8-Ball (explosivista), Luigi Goterelli (gerente de discoteca), Joey Leone (mafioso), Toni Cipriani (soldado Leone), Maria Latore (prostituta com coração de ouro), Asuka Kasen (poderosa e enigmática). Você constrói poder, completa missões cada vez mais audaciosas e eventualmente enfrenta Catalina em um final sangrento.",
  development: "A obra-prima que redefiniu a indústria. Desenvolvido por Rockstar North em PS2. Engine RAGE primitiva. Vozes de atores reais. Vinheta de cinema entre telas. Período de desenvolvimento intensivo.",
  importance: "Revolucionário. Criou o padrão de mundo aberto urbano que toda a indústria seguiu. Vendeu milhões, definiu PS2, marcou gerações.",
  themes: ["Crime urbano", "Traição", "Survival", "Ascensão do crime"],
  tags: ["3D Universe", "Clássico", "PS2", "Revolucionário", "Fundador"]
}, {
  id: "vicecity",
  title: "Grand Theft Auto: Vice City",
  releaseYear: 2002,
  storyYear: 1986,
  universe: "3D",
  city: "Vice City",
  protagonista: "Tommy Vercetti",
  antagonistas: ["Sonny Forelli", "Ricardo Diaz", "Lance Vance", "Avery Carrington"],
  summary: "Neon, palmeiras, anos 80, cartéis. Tommy Vercetti sai da prisão e reconstrói um império em Vice City.",
  fullStory: "Tommy Vercetti passou 15 anos na prisão. Sonny Forelli o liberta para fazer um acordo de drogas de $250 mil em Vice City. É uma armadilha: Tommy é emboscado e perde o dinheiro e a droga. Humilhado, precisa recuperar tudo. Em Vice City, Tommy conhece Ken Rosenberg (advogado corrupto), Lance Vance (companheiro que virar traidor), Colonel Cortez (traficante de drogas de elite), Avery Carrington (empresário), Ricardo Diaz (rei da droga). Tommy passa por negócios de tráfico, assassinatos, construção de poder. Ele ama Avery e conquista domínio. Lance o trai no final. Tommy enfrenta Sonny Forelli em seu penthouse e se torna o chefe indiscutível de Vice City.",
  development: "Desenvolvido em apenas dois anos após GTA III (rapidez notável). Cenário dos anos 80. Trilha sonora clássica com Wham!, Madonna, Kim Carnes, A-Ha, The Who. Dublagem memorável.",
  importance: "Aperfeiçoamento de GTA III. Provou que a fórmula funcionava. Influência Pop dos anos 80 em videogames.",
  themes: ["Ascensão", "Traição", "Neon", "Gangsterismo", "Redenção"],
  tags: ["3D Universe", "Clássico", "Neon", "Anos 80", "Icônico"]
}, {
  id: "sanandreas",
  title: "Grand Theft Auto: San Andreas",
  releaseYear: 2004,
  storyYear: 1992,
  universe: "3D",
  city: "San Andreas (Los Santos, San Fierro, Las Venturas)",
  protagonista: "Carl 'CJ' Johnson",
  antagonistas: ["Big Smoke", "Ryder", "Officer C.R.A.S.H.", "Tenpenny", "Eddie Pulaski"],
  summary: "Épico: três cidades, RPG light, gangues de rua, território, customização. CJ retorna a Los Santos quando a mãe morre.",
  fullStory: "Carl Johnson (CJ) volta a Los Santos após cinco anos fora. Sua mãe foi morta pela gangue rival Ballas. Grove Street Families, sua gangue original, está enfraquecida. CJ é incriminado falsamente por homicídio e chantageado por dois policiais corruptos (Tenpenny e Eddie Pulaski). Ele precisa fortalecer Grove Street, reconquistar território e descobrir quem matou sua mãe. Big Smoke e Ryder (seus companheiros de infância) revelam ser traidores trabalhando para o Cartel Colombiano. CJ expande seu impacto para San Fierro (cidade de contracultura e tecnologia) e Las Venturas (cidade do deserto com cassinos). Ele recupera Los Santos, mata Big Smoke e Ryder, e enfrenta Tenpenny.",
  development: "Expansão massiva: três cidades conectadas, RPG leve (musculatura, gordura, reputação), academias, roupas, aviação, aprendizado de habilidades. Influência de films de gangsters afro-americanos dos anos 90. Trilha sonora com Nate Dogg, 50 Cent, Coolio.",
  importance: "Ápice da série 3D. Mostrou ambição épica. Provou que GTA poderia ser ambicioso em escala.",
  themes: ["Comunidade", "Traição", "Ascensão", "Redenção", "Território"],
  tags: ["3D Universe", "Épico", "Três cidades", "Gangues de rua", "Clássico"]
}, {
  id: "lcstories",
  title: "Grand Theft Auto: Liberty City Stories",
  releaseYear: 2005,
  storyYear: 1998,
  universe: "3D",
  city: "Liberty City",
  protagonista: "Toni Cipriani",
  antagonistas: ["Salvatore Leone", "Sindaccos", "Forellis", "Yakuza"],
  summary: "Prequel de GTA III. Toni Cipriani trabalha para a família Leone. Máfias italianas em guerra.",
  fullStory: "Toni Cipriani retorna a Liberty City após matar uma mulher (acidente). Seu mãe o força a se redimir trabalhando para Salvatore Leone. Toni sobe na hierarquia Leone enquanto outras famílias (Sindaccos, Forellis) e yakuza competem por poder. A história conecta diretamente ao evento que GTA III começa. Você vê o mundo antes de Claude chegar.",
  development: "Prequel temático. Usa engine de GTA III mas com gráficos aprimorados. Liberty City revisitada com era diferente.",
  importance: "Consolidação narrativa da série 3D. Mostrou que prequels e conexões podiam funcionar.",
  themes: ["Família", "Redenção", "Máfia italiana", "Ciclo"],
  tags: ["3D Universe", "Prequel", "Liberty City", "Máfia"]
}, {
  id: "vicecitystories",
  title: "Grand Theft Auto: Vice City Stories",
  releaseYear: 2006,
  storyYear: 1984,
  universe: "3D",
  city: "Vice City",
  protagonista: "Victor 'Vic' Vance",
  antagonistas: ["Jerry Martinez", "Família Mendez", "Tommy Vercetti"],
  summary: "Prequel de Vice City. Vic Vance é o irmão do policial Dic Vance. Ele reconstrói um império antes de Tommy.",
  fullStory: "Victor Vance é o irmão de um policial honesto. Seu irmão é morto em ação. Vic entra na criminalidade em Vice City em 1984, dois anos antes de Tommy Vercetti chegar. Vic constrói um império de tráfico, trabalha com cartéis e eventualmente é eliminado por Tommy Vercetti no início de Vice City.",
  development: "Outro prequel. Conecta Tommy Vercetti à história anterior. Continuidade temporal.",
  importance: "Aprofundou a timeline 3D. Mostrou como vice City evoluiu entre eras.",
  themes: ["Redenção", "Poder", "Destino", "Ciclo criminal"],
  tags: ["3D Universe", "Prequel", "Vice City"]
}, {
  id: "gta4",
  title: "Grand Theft Auto IV",
  releaseYear: 2008,
  storyYear: 2008,
  universe: "HD",
  city: "Liberty City",
  protagonista: "Niko Bellic",
  antagonistas: ["Dimitri Rascalov", "Mikhail Faustin", "Ray Bulgarin", "Jimmy Pegorino"],
  summary: "Tom realista e noir. Niko é um imigrante traumatizado buscando o sonho americano. Comentário social profundo.",
  fullStory: "Niko Bellic é um veterano de guerra do leste europeu que chega a Liberty City perseguindo o 'sonho americano'. Seu primo Roman o convida, mas Roman mentiu sobre sua riqueza. Niko vira mercenário, paga dívidas, entra em conflito com máfias russas (Rascalov, Faustin), avançados italianos (Pegorino), e agentes federais. Ele conhece Little Jacob (distribuidor de armas jamaicano), Brucie Kibbutz (esteroidista paranoico), Packie McReary (ex-IRA), Kate McReary (analista de polícia), Mallorie Bardas (assistente social), Lester Crest (hackeador), Roman (seu primo), Maria Latore (prostituta vítima de sistemas). Niko percebe que o sonho americano é uma mentira. Finalmente, tem de escolher: dinheiro ou dignidade. Mata Dimitri Rascalov.",
  development: "Primeira entrada na era HD (engine RAGE). Liberty City com densidade visual nunca antes vista. Dublagem de atores: Michael Hollick (Niko). Tom adulto, dramático, satirizando imigração e capitalismo. Influência de cinema europeu noir.",
  importance: "Redefiniu tom de GTA. Provou que a série poderia ser sombria, narrativamente profunda e socialmente crítica. Vendeu 25+ milhões de cópias.",
  themes: ["Imigração", "Trauma", "Sonho americano", "Corrupção", "Desilusão"],
  tags: ["HD Universe", "Noir", "Cinematográfico", "Clássico", "Realismo"]
}, {
  id: "gta4tlaod",
  title: "Grand Theft Auto: The Lost and Damned",
  releaseYear: 2009,
  storyYear: 2008,
  universe: "HD",
  city: "Liberty City",
  protagonista: "Johnny Klebitz",
  antagonistas: ["Billy Grey", "Ray Boccino", "Niko Bellic"],
  summary: "Motoclubes e violência. Johnny Klebitz lidera The Lost MC em luta interna contra Billy Grey.",
  fullStory: "Johnny Klebitz é vice-presidente de The Lost MC, um motoclube de puro caos em Liberty City. Billy Grey é o presidente, mas é violento e instável. Johnny tenta manter ordem enquanto Billy destrói tudo. Niko Bellic frequentemente interfere (ele aparece no jogo). Johnny eventualmente mata Billy e toma controle do clube.",
  development: "DLC para GTA IV depois expandido para jogo independente. Foco em motoclubes, lealdade e autodestruição.",
  importance: "Mostrou que spin-offs do mesmo universo podiam expandir perspectivas.",
  themes: ["Lealdade", "Caos", "Poder", "Autodestruição"],
  tags: ["HD Universe", "Motoclube", "Spin-off"]
}, {
  id: "gta4tbogt",
  title: "Grand Theft Auto: The Ballad of Gay Tony",
  releaseYear: 2009,
  storyYear: 2008,
  universe: "HD",
  city: "Liberty City",
  protagonista: "Luis Fernando Lopez",
  antagonistas: ["Yusuf Amir", "Tony Prince", "Niko Bellic"],
  summary: "Vida noturna de luxo. Luis é assistente de Tony Prince em The Maisonette (nightclub). Contrasta com tom sombrio de GTA IV.",
  fullStory: "Luis Fernando Lopez trabalha para Tony Prince, dono de um nightclub premium em Liberty City. A vida é luxuosa: bebidas caras, mulheres, músicas. Mas há dívidas. Luis trabalha para Yusuf Amir (capitalista árabe). O tom é colorido, energético, em contraste direto com a melancolia de Niko.",
  development: "Outro DLC/spin-off de GTA IV. Foco em contraluz: glamour vs. realidade.",
  importance: "Diversificação tonal. Mostrou que GTA podia ser divertido e satírico sobre luxo.",
  themes: ["Luxo", "Ilusão", "Noites urbanas", "Dívida"],
  tags: ["HD Universe", "Vida noturna", "Spin-off"]
}, {
  id: "chinatownwars",
  title: "Grand Theft Auto: Chinatown Wars",
  releaseYear: 2009,
  storyYear: 2009,
  universe: "HD",
  city: "Liberty City",
  protagonista: "Huang Lee",
  antagonistas: ["Hsin Jaoming", "Triads rivais", "Sonny Forelli"],
  summary: "Jogo de handheld (Nintendo DS). Huang Lee é enviado de Hong Kong com a Yu Jian (espada mágica). Tráfico de drogas e honra familiar.",
  fullStory: "Huang Lee chega a Liberty City para entregar a espada Yu Jian ao tio Kenny após a morte de seu pai. É roubado, deixado para morrer e busca honra, riqueza e vingança. Trabalha para Triads, tráfico de drogas, aprende as ruas.",
  development: "Desenvolvido para Nintendo DS. Gameplay inovador com minigames. Retorno à série 2D em ambientação 3D (câmera de cima). Primeira entrada GTA em handheld.",
  importance: "Provou que GTA podia funcionar em portáteis. Inovação de interface.",
  themes: ["Honra familiar", "Vingança", "Busca", "Tradição"],
  tags: ["HD Universe", "Nintendo DS", "Handheld", "Único"]
}, {
  id: "gta5",
  title: "Grand Theft Auto V",
  releaseYear: 2013,
  storyYear: 2013,
  universe: "HD",
  city: "Los Santos (San Andreas)",
  protagonista: "Michael De Santa, Franklin Clinton, Trevor Phillips",
  antagonistas: ["Devin Weston", "Steve Haines", "Dave Norton", "Merryweather"],
  summary: "Três protagonistas. Três perspectivas diferentes. Assaltos épicos. Fenômeno cultural e comercial.",
  fullStory: "Michael De Santa é um ex-ladrão que finge morte há 9 anos, vivendo como homem de negócios em Los Santos. Seu antigo colega Trevor Phillips descobre que ele está vivo e recria contato violentamente. Franklin Clinton é um criminoso de rua de Southside Los Santos que conhece Michael. Os três são forçados juntos por FBI agents Dave Norton e Steve Haines, que os chantageiam para cometer assaltos. Devin Weston (bilionário corrupto) também os manipula. No caminho: tráfico de drogas, roubo de laboratório de tecnologia, assaltos de banco, guerra com Merryweather Security (corporação militar privada), conflitos pessoais. O final oferece escolhas: dinheiro (Opção A), vindicta (Opção B) ou todas as ameaças eliminadas e amizade preservada (Opção C/Deathwish).",
  development: "Desenvolvimento gigantesco: ~1000 pessoas, orçamento de $250 milhões (maior de qualquer videojogo naquela época). Los Santos é uma réplica de Los Angeles, densíssima. Engine RAGE avançada. Trilha sonora com artistas reais. Dublagem com celebridades (Shia LaBeouf inspirou Fernando, etc.).",
  importance: "Maior lançamento de videojogo até então. Vendeu 150+ milhões de cópias. Definiu PS3/Xbox 360 tardio e PS4/Xbox One cedo. Moldou a indústria por uma década.",
  themes: ["Amizade", "Ambição", "Traição", "Redenção", "Riqueza", "Caos"],
  tags: ["HD Universe", "Três protagonistas", "Fenômeno", "Clássico", "Épico"]
}, {
  id: "gtaonline",
  title: "Grand Theft Auto Online",
  releaseYear: 2013,
  storyYear: "2013+",
  universe: "HD",
  city: "Los Santos (San Andreas)",
  protagonista: "Você (customizável)",
  antagonistas: ["Playeres rivais", "Missões contra IA", "Traição econômica"],
  summary: "Plataforma viva de multiplayer. Começou pequeno, virou fenômeno de $6+ bilhões em receita.",
  fullStory: "GTA Online é o complemento multiplayer de GTA V. Você cria um personagem e entra em Los Santos com outros jogadores. Começou com RP de $100. Desde então, se expandiu exponencialmente: Assaltos cooperativos (Heists), negócios criminosos (venda de drogas, armamentos, ouro, criptomoedas), motoclubes, cassinos, bunkers, proprietário de arcade, empresário de nightclub, agente de contratações, diretor de agência de segurança, carceleiro, traficante de armas modificadas. Jogadores progridem economicamente, compram propriedades, veículos, roupas, customizações. Competem em corridas, eliminations, roubos. A economia flutua conforme Rockstar lança 'Double Money' em atividades estratégicas para manter interesse.",
  development: "Começou como teste. Operacional desde 2013 com dezenas de atualizações MAIORES. Provavelmente gerará receita até GTA VII.",
  importance: "Modelo de jogo vivo revolucionário. Provou que multiplayer persistente com economia real podia gerar receita enorme.",
  themes: ["Comunidade", "Economia", "Competição", "Cooperação", "Liberdade"],
  tags: ["HD Universe", "Multiplayer", "Online", "Vivo", "Fenômeno", "Lucrativo"]
}, {
  id: "gta6",
  title: "Grand Theft Auto VI",
  releaseYear: 2026,
  storyYear: "2026 (estimado)",
  universe: "HD",
  city: "Leonida (Vice City)",
  protagonista: "Lucia Caminos, Jason Duval",
  antagonistas: "[Ainda desconhecidos]",
  summary: "Próximo grande lançamento. Dual protagonistas. Vice City moderna. Tema: redes sociais, influencers, caos digital.",
  fullStory: "[Maioria especulativa até lançamento]. Lucia Caminos é uma mulher criminosa. Jason Duval é homem. Parecem ser um casal criminoso. Ambientado em Leonida, estado baseado na Flórida moderna, com Vice City como cidade central. Tema parece ser crime contemporâneo: roubo de dados, fraudes de criptomoedas, influencers criminosos, golpes digitais, redes sociais como ferramenta de crime. Sátira do século XXI.",
  development: "Anunciado oficialmente em dezembro de 2024 com trailer. Lançamento: 19 de novembro de 2026 (PS5 exclusivo inicialmente). Engine RAGE 2 com ray-tracing em tempo real. Seleção musical, dublagem e cinemática mantêm padrões de qualidade GTA V.",
  importance: "Próximo capítulo. Expectativa global estratosférica.",
  themes: "[Especulado: redes sociais, modernidade, crime digital, casal criminoso]",
  tags: ["HD Universe", "Futuro", "Leonida", "Dual protagonistas", "Especulação"]
}];
const PERSONAGENS_COMPLETOS = [{
  id: "claude_gta3",
  name: "Claude",
  aliases: ["The Silent Protagonist"],
  games: ["Grand Theft Auto III"],
  universe: "3D Universe",
  city: "Liberty City",
  role: "Protagonista",
  biography: "Um criminoso silencioso que é traído por Catalina durante um assalto. Sobrevive mysteriosamente e se vê em Liberty City, forçado a trabalhar para várias facções para recuperar poder e vingança.",
  storyArc: "De ninguém para rei do crime. Trabalha para Leone Family, Yakuza, Colombian Cartel. Eventualmente enfrenta e mata Catalina.",
  relationships: {
    aliados: ["8-Ball", "Luigi Goterelli", "Joey Leone", "Maria Latore"],
    inimigos: ["Catalina", "Asuka Kasen"]
  },
  affiliations: ["Leone Family", "Yakuza", "Colombian Cartel"],
  enemies: ["Catalina", "Miguel"],
  fate: "Desaparece misteriosa após eliminar Catalina. Seu futuro é desconhecido.",
  importance: "PRINCIPAL",
  tags: ["protagonista", "silencioso", "vingança", "3D Universe", "clássico"]
}, {
  id: "tommy_vercetti",
  name: "Tommy Vercetti",
  aliases: ["The Man in the Red Suit"],
  games: ["Grand Theft Auto: Vice City"],
  universe: "3D Universe",
  city: "Vice City",
  role: "Protagonista",
  biography: "Ex-condenado que sai da prisão após 15 anos. Enviado por Sonny Forelli a Vice City para fechar um deal. É traído, emboscado, e decide conquistar Vice City para si.",
  storyArc: "Da humilhação à ascensão. Começa do zero, reconstrói império, mata rivals, torna-se rei indiscutível de Vice City.",
  relationships: {
    aliados: ["Ken Rosenberg", "Lance Vance (inicialmente)"],
    inimigos: ["Sonny Forelli", "Ricardo Diaz"]
  },
  affiliations: ["Forelli Family", "Diaz Organization"],
  enemies: ["Lance Vance", "Avery Carrington"],
  fate: "Vivo. Torna-se kingpin de Vice City. Seu destino após é desconhecido, mas presumivelmente continua criminoso.",
  importance: "PRINCIPAL",
  tags: ["protagonista", "ascensão", "neon", "1986", "icônico"]
}, {
  id: "cj_johnson",
  name: "Carl 'CJ' Johnson",
  aliases: ["Baby", "CJ"],
  games: ["Grand Theft Auto: San Andreas"],
  universe: "3D Universe",
  city: "Los Santos (San Andreas)",
  role: "Protagonista",
  biography: "Retorna a Los Santos após morte da mãe. Grove Street Families está enfraquecida. CJ descobrirá que seus irmãos próximos são traidores.",
  storyArc: "De exilado a herói de comunidade. Reconquista Grove Street, expande para outras cidades, descobre traição de companheiros.",
  relationships: {
    aliados: ["Sweet Johnson", "Cesar Vialpando", "Wu Zi Mu"],
    inimigos: ["Big Smoke", "Ryder", "Officer Tenpenny"]
  },
  affiliations: ["Grove Street Families"],
  enemies: ["Big Smoke", "Ryder"],
  fate: "Vivo. Lidera Grove Street, mas futuro é incerto.",
  importance: "PRINCIPAL",
  tags: ["protagonista", "comunidade", "lealdade", "1992", "épico"]
}, {
  id: "niko_bellic",
  name: "Niko Bellic",
  aliases: ["The Immigrant", "The War Vet"],
  games: ["Grand Theft Auto IV"],
  universe: "HD Universe",
  city: "Liberty City",
  role: "Protagonista",
  biography: "Veterano de guerra do leste europeu que imigra para Liberty City buscando 'sonho americano'. Descobre que o sonho é mentira. Envolvido em máfias russas, italianas e agências federais.",
  storyArc: "Do esperançoso ao desiluso. Quanto mais poder conquista, mais percebe a futilidade.",
  relationships: {
    aliados: ["Roman Bellic", "Little Jacob", "Packie McReary"],
    inimigos: ["Dimitri Rascalov", "Ray Bulgarin"]
  },
  affiliations: ["Russian Mob", "Pegorino Family"],
  enemies: ["Mikhail Faustin", "Ray Bulgarin"],
  fate: "Vivo, mas traumatizado. Escolhe entre vindicta ou dinheiro.",
  importance: "PRINCIPAL",
  tags: ["protagonista", "imigração", "trauma", "noir", "2008", "iconoclasta"]
}, {
  id: "michael_de_santa",
  name: "Michael De Santa",
  aliases: ["Michael Townley (antigo nome)"],
  games: ["Grand Theft Auto V"],
  universe: "HD Universe",
  city: "Los Santos",
  role: "Protagonista (um de três)",
  biography: "Ex-assaltante que finge morte há 9 anos. Vive como homem de negócios em subúrbio. Trevor descobre que está vivo.",
  storyArc: "De exilado secreto a protagonista involuntário de caos. Tenta proteger família enquanto é manipulado por FBI e criminosos.",
  relationships: {
    aliados: ["Franklin Clinton", "Lester Crest"],
    inimigos: ["Trevor Phillips", "Devin Weston"]
  },
  affiliations: ["Merryweather Security (involuntariamente)", "FBI"],
  enemies: ["Devin Weston", "Dave Norton"],
  fate: "Vivo (em final canônico). Lidera vida de homem de negócios autêntico.",
  importance: "PRINCIPAL",
  tags: ["protagonista", "família", "segredos", "V", "anti-herói"]
}, {
  id: "franklin_clinton",
  name: "Franklin Clinton",
  aliases: ["Franklin", "Homie"],
  games: ["Grand Theft Auto V"],
  universe: "HD Universe",
  city: "Los Santos",
  role: "Protagonista (um de três)",
  biography: "Criminoso de rua ambicioso que deseja sair do círculo criminal. Conhece Michael e entra em conflito épico.",
  storyArc: "De gangster de rua a CEO potencial. Aprende que poder requer sacrifício.",
  relationships: {
    aliados: ["Lamar Davis", "Michael De Santa"],
    inimigos: ["Stretch", "Merryweather"]
  },
  affiliations: ["Crips-inspired gang", "Merryweather (involuntariamente)"],
  enemies: ["Stretch", "Lamar Davis (rival)"],
  fate: "Vivo. Abre negócio de segurança. Melhor futuro dos três.",
  importance: "PRINCIPAL",
  tags: ["protagonista", "rua", "ambição", "V", "esperança"]
}, {
  id: "trevor_phillips",
  name: "Trevor Phillips",
  aliases: ["T", "Mr. Philips"],
  games: ["Grand Theft Auto V"],
  universe: "HD Universe",
  city: "Blaine County (Los Santos)",
  role: "Protagonista (um de três)",
  biography: "Homem desequilibrado, violento, imprevisível. Ex-colega de Michael. Quando descobre que Michael está vivo, busca vingança e reconexão.",
  storyArc: "De desequilibrado criminal a aliado relutante. Morte potencial em um dos finais.",
  relationships: {
    aliados: ["Michael De Santa (reluctante)"],
    inimigos: ["Michael De Santa", "Merryweather"]
  },
  affiliations: ["Trevor Phillips Enterprises"],
  enemies: ["Michael De Santa", "Devin Weston"],
  fate: "Potencialmente morto (final A/B) ou vivo (final C).",
  importance: "PRINCIPAL",
  tags: ["protagonista", "caos", "violência", "V", "imprevisível", "antiherói"]
}, {
  id: "lucia_caminos",
  name: "Lucia Caminos",
  aliases: ["Lucia"],
  games: ["Grand Theft Auto VI"],
  universe: "HD Universe",
  city: "Leonida (Vice City)",
  role: "Protagonista (um de dois)",
  biography: "[Maioria especulativa]. Mulher criminosa em Leonida. Parece ser part de casal criminoso com Jason Duval.",
  storyArc: "[Desconhecido até lançamento]",
  relationships: {
    aliados: ["Jason Duval"],
    inimigos: []
  },
  affiliations: [],
  enemies: [],
  fate: "[Desconhecido]",
  importance: "PRINCIPAL",
  tags: ["protagonista", "VI", "Leonida", "feminina", "futuro"]
}, {
  id: "jason_duval",
  name: "Jason Duval",
  aliases: ["Jason"],
  games: ["Grand Theft Auto VI"],
  universe: "HD Universe",
  city: "Leonida (Vice City)",
  role: "Protagonista (um de dois)",
  biography: "[Maioria especulativa]. Homem criminoso. Parceiro de Lucia Caminos em crime.",
  storyArc: "[Desconhecido até lançamento]",
  relationships: {
    aliados: ["Lucia Caminos"],
    inimigos: []
  },
  affiliations: [],
  enemies: [],
  fate: "[Desconhecido]",
  importance: "PRINCIPAL",
  tags: ["protagonista", "VI", "Leonida", "futuro"]
}, {
  id: "roman_bellic",
  name: "Roman Bellic",
  aliases: ["Roman", "Cousin"],
  games: ["Grand Theft Auto IV"],
  universe: "HD Universe",
  city: "Liberty City",
  role: "Aliado",
  biography: "Primo de Niko que veio da Europa. Exagera sua riqueza em América. Proprietário de táxi. Vítima de chantagem e roubo.",
  storyArc: "De esperançoso a traumatizado. Constantemente precisa de resgate.",
  relationships: {
    aliados: ["Niko Bellic"],
    inimigos: ["Thugs, Loan sharks"]
  },
  affiliations: ["Taxi business"],
  enemies: [],
  fate: "Morto em um final, vivo em outro (GTA IV oferecia escolhas).",
  importance: "ALTO",
  tags: ["aliado", "primo", "IV", "imigrante", "vulnerável"]
}, {
  id: "big_smoke",
  name: "Big Smoke",
  aliases: ["B.Smoke", "The Traitor"],
  games: ["Grand Theft Auto: San Andreas"],
  universe: "3D Universe",
  city: "Los Santos",
  role: "Antagonista",
  biography: "Companheiro de CJ desde a infância. Aparenta ser aliado mas é na verdade traidor trabalhando com Cartel Colombiano.",
  storyArc: "De amigo a vilão. Sua traição é o ponto de virada da narrativa.",
  relationships: {
    aliados: ["Ryder", "Cartel Colombiano"],
    inimigos: ["CJ Johnson", "Grove Street Families"]
  },
  affiliations: ["Grove Street Families (falso)", "Colombian Cartel"],
  enemies: ["CJ Johnson"],
  fate: "Morto por CJ em confronto final.",
  importance: "ALTO",
  tags: ["antagonista", "traidor", "San Andreas", "memorável"]
}, {
  id: "salvatore_leone",
  name: "Salvatore Leone",
  aliases: ["Don Salvatore", "The Old Man"],
  games: ["Grand Theft Auto III", "Grand Theft Auto: Liberty City Stories"],
  universe: "3D Universe",
  city: "Liberty City",
  role: "Antagonista/Patrão",
  biography: "Chefe da Leone Family. Poder absoluto em Liberty City máfia. Manipula Claude e outros para seus próprios ganhos.",
  storyArc: "De patrão poderoso a antagonista. Morte ocorre entre jogos.",
  relationships: {
    aliados: ["Joey Leone", "Luigi Goterelli"],
    inimigos: ["Claude", "Rival families"]
  },
  affiliations: ["Leone Family"],
  enemies: [],
  fate: "Desaparecido no final de GTA III. Presume-se morto.",
  importance: "ALTO",
  tags: ["antagonista", "máfia", "patrão", "3D Universe"]
}, {
  id: "asuka_kasen",
  name: "Asuka Kasen",
  aliases: ["Asuka"],
  games: ["Grand Theft Auto III"],
  universe: "3D Universe",
  city: "Liberty City",
  role: "Aliado/Ambíguo",
  biography: "Mulher misteriosa que trabalha para Yakuza. Recruta Claude para trabalhos. Seus verdadeiros motivos nunca são claros.",
  storyArc: "De recrutadora a personagem enigmático que desaparece.",
  relationships: {
    aliados: ["Claude (temporário)"],
    inimigos: ["Yakuza rivals"]
  },
  affiliations: ["Yakuza"],
  enemies: [],
  fate: "Desaparecida. Presumível morte ou desaparecimento voluntário.",
  importance: "ALTO",
  tags: ["aliado", "mistério", "Yakuza", "enigmática"]
}, {
  id: "lance_vance",
  name: "Lance Vance",
  aliases: ["Lance", "The Betrayer"],
  games: ["Grand Theft Auto: Vice City"],
  universe: "3D Universe",
  city: "Vice City",
  role: "Aliado que se torna antagonista",
  biography: "Companheiro inicial de Tommy Vercetti em Vice City. Trabalham juntos mas Lance quer mais poder. Eventualmente traiu Tommy.",
  storyArc: "De aliado confiável a traidor egocêntrico. Morte é o resultado de sua ganância.",
  relationships: {
    aliados: ["Tommy Vercetti (inicialmente)"],
    inimigos: ["Tommy Vercetti", "Ricardo Diaz"]
  },
  affiliations: ["Vercetti Organization", "Diaz Organization"],
  enemies: ["Tommy Vercetti"],
  fate: "Morto por Tommy em confronto final.",
  importance: "ALTO",
  tags: ["traidor", "Vice City", "egocêntrico"]
}];
const CIDADES_COMPLETAS = [{
  id: "liberty_city",
  name: "Liberty City",
  realWorldInspiration: "Nova York",
  universeAppearances: ["2D Universe", "3D Universe", "HD Universe"],
  games: ["GTA I", "GTA III", "Liberty City Stories", "GTA IV", "Chinatown Wars"],
  description: "Metrópole do leste. Concreto, chuva, corrupção máfia, crime urbano. Centro financeiro criminoso.",
  districts: ["Inland Empire", "Downtown", "Stanton Island", "Shoreside Vale", "Bohan", "Algonquin", "Broker"],
  factions: ["Leone Family", "Yakuza", "Colombian Cartel", "Russian Mob", "Triads"],
  importantEvents: ["Morte de Salvatore Leone", "Queda de Dimitri Rascalov", "Assaltos de GTA III"],
  characters: ["Claude", "Niko Bellic", "Toni Cipriani"],
  visualStyle: "Concreto cinzento, arranha-céus, chuva constante, pombas, tráfego denso, museus, iluminação sombria",
  themes: ["Crime urbano", "Máfia", "Imigração", "Corrupção", "Capitalismo"]
}, {
  id: "vice_city",
  name: "Vice City",
  realWorldInspiration: "Miami",
  universeAppearances: ["2D Universe", "3D Universe", "HD Universe (GTA VI)"],
  games: ["GTA I", "Vice City", "Vice City Stories", "GTA VI (2026)"],
  description: "Tropical, neon, anos 80, cartéis de drogas, palmeiras, praia. Luxo e corrupção.",
  districts: ["Ocean Beach", "Vice Point", "Starfish Island", "Downtown"],
  factions: ["Diaz Organization", "Cartel Ortega", "Forelli Family"],
  importantEvents: ["Ascensão de Tommy Vercetti", "Queda de Ricardo Diaz", "Retorno em GTA VI"],
  characters: ["Tommy Vercetti", "Victor Vance"],
  visualStyle: "Neon rosa, azul, amarelo. Palmeiras, concreto colorido, praia, discotecas, muito tráfego tropical, horizontes rosa/roxo ao pôr-do-sol",
  themes: ["Neon", "Drogas", "Luxo", "Decadência", "Cartéis"]
}, {
  id: "san_andreas_state",
  name: "San Andreas",
  realWorldInspiration: "Califórnia + Nevada",
  universeAppearances: ["2D Universe", "3D Universe"],
  games: ["GTA I", "San Andreas"],
  description: "Estado inteiro com três metrópoles. Da costa urbana ao deserto. Gangues de rua, tecnologia, cassinos, deserto.",
  districts: ["Los Santos", "San Fierro", "Las Venturas", "Blaine County (deserto)"],
  factions: ["Grove Street Families", "Ballas", "Vagos", "Triads", "Rifa", "Da Nang Boys"],
  importantEvents: ["Morte de CJ's mother", "Retomada de Grove Street", "Revelação de Big Smoke e Ryder como traidores"],
  characters: ["Carl 'CJ' Johnson", "Big Smoke", "Ryder"],
  visualStyle: "Diverso: urbano em LA, brumoso em SF, desértico em Vegas, rural em Blaine",
  themes: ["Comunidade", "Gangues de rua", "Território", "Lealdade"]
}, {
  id: "los_santos",
  name: "Los Santos",
  realWorldInspiration: "Los Angeles",
  universeAppearances: ["3D Universe (San Andreas)", "HD Universe (GTA V)"],
  games: ["San Andreas", "GTA V", "GTA Online"],
  description: "Metrópole do sol. Glamour, mídia, indústria do entretenimento, desigualdade massiva, gangues de rua.",
  districts: ["Hollywood", "Downtown", "Southside", "Vinewood", "Rockford Hills", "Paleto Bay"],
  factions: ["Grove Street Families", "Ballas", "Triads", "Vagos", "Famílias criminosas locais"],
  importantEvents: ["Reconquista de Grove Street (SA)", "Assaltos épicos (GTA V)", "Surgimento de GTA Online"],
  characters: ["CJ Johnson", "Franklin Clinton", "Michael De Santa"],
  visualStyle: "Palmeiras, prédios altos, dividing entre riqueza e pobreza, piscinas, Hollywood, colinas, luz solar permanente",
  themes: ["Indústria", "Desigualdade", "Celebridade", "Aspiração"]
}, {
  id: "leonida",
  name: "Leonida",
  realWorldInspiration: "Flórida Moderna",
  universeAppearances: ["HD Universe (GTA VI)"],
  games: ["GTA VI"],
  description: "Estado do sudeste. Vice City moderna, pântanos, praias, redes sociais, influencers, caos digital. Tema de crime contemporâneo.",
  districts: ["Vice City", "Pântanos", "Resort areas", "Tech districts"],
  factions: "[Desconhecidas até lançamento]",
  importantEvents: "[Futuro - desconhecidas]",
  characters: ["Lucia Caminos", "Jason Duval"],
  visualStyle: "[Esperado: Miami moderna, palmeiras, arquitetura de 2020s, neon atualizado, pântanos]",
  themes: ["Modernidade", "Redes sociais", "Crime digital", "Influência"]
}];
const ORGANIZACOES_COMPLETAS = [{
  id: "leone_family",
  name: "Leone Family",
  type: "Máfia Italiana",
  city: "Liberty City",
  color: "#ff2a2a",
  leaders: ["Salvatore Leone", "Joey Leone", "Toni Cipriani"],
  allies: [],
  enemies: ["Sindacco Family", "Forelli Family", "Yakuza"],
  businesses: ["Proteção", "Jogo ilegal", "Roubo de carros", "Tráfico de drogas"],
  status: "Poderosa em GTA III/LCS, fragmentada em GTA IV",
  importance: "CRÍTICA",
  tags: ["máfia", "Liberty City", "3D Universe", "poder", "crime organizado"]
}, {
  id: "grove_street_families",
  name: "Grove Street Families",
  type: "Gangue de Rua",
  city: "Los Santos",
  color: "#4ade80",
  leaders: ["Carl 'CJ' Johnson", "Sean 'Sweet' Johnson"],
  allies: ["Varrios Los Aztecas"],
  enemies: ["Ballas", "Vagos"],
  businesses: ["Controle de território", "Proteção", "Tráfico"],
  status: "Fortalecida em San Andreas, presente em GTA V como histórica",
  importance: "ALTA",
  tags: ["gangue de rua", "San Andreas", "comunidade", "territorialismo"]
}, {
  id: "ballas",
  name: "Ballas",
  type: "Gangue de Rua Rival",
  city: "Los Santos",
  color: "#a855f7",
  leaders: ["Big Smoke", "Ryder"],
  allies: ["Mexican Narcos"],
  enemies: ["Grove Street Families"],
  businesses: ["Tráfico de drogas", "Roubo", "Proteção"],
  status: "Rival principal em San Andreas",
  importance: "ALTA",
  tags: ["gangue de rua", "rival", "traição"]
}, {
  id: "yakuza",
  name: "Yakuza",
  type: "Crime Organizado Asiático",
  city: "Liberty City",
  color: "#ff3d8a",
  leaders: ["Kenji Kasen"],
  allies: [],
  enemies: ["Leone Family"],
  businesses: ["Roubo de carros", "Drogas", "Prostituição"],
  status: "Presente em GTA III, fragmentada depois",
  importance: "MÉDIA-ALTA",
  tags: ["crime asiático", "yakuza", "Liberty City"]
}, {
  id: "colombian_cartel",
  name: "Colombian Cartel",
  type: "Cartel de Drogas",
  city: "San Andreas, Vice City",
  color: "#f5c518",
  leaders: ["Tommy Vance", "Big Smoke (traidor)"],
  allies: [],
  enemies: ["Grove Street Families"],
  businesses: ["Tráfico de cocaína", "Distribuição"],
  status: "Ameaça em San Andreas",
  importance: "ALTA",
  tags: ["cartel", "drogas", "San Andreas"]
}, {
  id: "russian_mob",
  name: "Russian Mob",
  type: "Máfia Russa",
  city: "Liberty City",
  color: "#3b6cff",
  leaders: ["Mikhail Faustin", "Dimitri Rascalov"],
  allies: [],
  enemies: ["Pegorino Family"],
  businesses: ["Tráfico de armas", "Roubo de carros", "Mercenariato"],
  status: "Poderosa em GTA IV",
  importance: "ALTA",
  tags: ["máfia russa", "GTA IV", "crime organizado"]
}, {
  id: "lost_mc",
  name: "The Lost MC",
  type: "Motoclube",
  city: "Liberty City",
  color: "#e9e7df",
  leaders: ["Johnny Klebitz", "Billy Grey"],
  allies: [],
  enemies: ["Angels of Death", "Yakuza"],
  businesses: ["Roubo de carros", "Drogas", "Proteção"],
  status: "Protagonista em GTA: The Lost and Damned",
  importance: "MÉDIA",
  tags: ["motoclube", "GTA IV", "caos", "lealdade"]
}, {
  id: "fib",
  name: "Federal Investigation Bureau (FIB)",
  type: "Agência Governamental",
  city: "Los Santos",
  color: "#3b6cff",
  leaders: ["Steve Haines", "Dave Norton"],
  allies: [],
  enemies: ["Protagonistas"],
  businesses: ["Investigação", "Corrupção", "Chantagem"],
  status: "Antagonista em GTA V",
  importance: "CRÍTICA",
  tags: ["governo", "corrupção", "GTA V", "antagonista"]
}, {
  id: "merryweather",
  name: "Merryweather Security",
  type: "Corporação Militar Privada",
  city: "Los Santos",
  color: "#22d3ee",
  leaders: "[CEO desconhecido]",
  allies: ["Steve Haines (FIB)"],
  enemies: ["Protagonistas de GTA V"],
  businesses: ["Segurança", "Mercenariato", "Armas"],
  status: "Corporação antagonista em GTA V",
  importance: "ALTA",
  tags: ["corporação", "militar privada", "GTA V"]
}];
Object.assign(window, {
  ROCKSTAR_HISTORY,
  UNIVERSOS_GTA,
  GAMES_COMPLETE,
  PERSONAGENS_COMPLETOS,
  CIDADES_COMPLETAS,
  ORGANIZACOES_COMPLETAS
});

/* >>> data-dossier.jsx */
;const dossierNavData = [{
  id: "overview",
  label: "Visão Geral",
  k: "01"
}, {
  id: "timeline",
  label: "Timeline Cronológica",
  k: "02"
}, {
  id: "games",
  label: "Jogos",
  k: "03"
}, {
  id: "missions",
  label: "Missões",
  k: "04"
}, {
  id: "vehicles",
  label: "Veículos",
  k: "05"
}, {
  id: "weapons",
  label: "Armas",
  k: "06"
}, {
  id: "development",
  label: "Desenvolvimento",
  k: "07"
}, {
  id: "characters",
  label: "Personagens",
  k: "08"
}, {
  id: "cities",
  label: "Cidades",
  k: "09"
}, {
  id: "gangs",
  label: "Gangues e Organizações",
  k: "10"
}, {
  id: "universes",
  label: "Universos GTA",
  k: "11"
}, {
  id: "rockstar",
  label: "Rockstar Games",
  k: "12"
}, {
  id: "gtaonline",
  label: "GTA Online",
  k: "13"
}, {
  id: "gta6",
  label: "GTA VI",
  k: "14"
}, {
  id: "glossary",
  label: "Glossário",
  k: "15"
}];
const dossierSourcesData = [{
  label: "Rockstar Games - Grand Theft Auto VI",
  url: "https://www.rockstargames.com/VI/pt-BR",
  note: "Data, Leonida/Vice City, Lucia, Jason e sinopse oficial."
}, {
  label: "Rockstar Newswire - GTA VI em 19 de novembro de 2026",
  url: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026",
  note: "Comunicado oficial de adiamento e data atual."
}, {
  label: "Rockstar Newswire - GTA Online Money Fronts",
  url: "https://www.rockstargames.com/newswire/article/51322o2k393kka/gta-online-money-fronts-now-available",
  note: "Atualizacao de GTA Online usada na linha do tempo viva."
}, {
  label: "Rockstar Newswire - Oscar Guzman Flies Again",
  url: "https://www.rockstargames.com/newswire/article/179kk473a8a18k/gta-online-oscar-guzman-flies-again-now-available",
  note: "Atualizacao de 2025 com McKenzie Field Hangar e trafico aereo."
}, {
  label: "Rockstar Newswire - A Safehouse in the Hills",
  url: "https://www.rockstargames.com/newswire/article/51358a55o2o11o/gta-online-a-safehouse-in-the-hills-coming-december-10",
  note: "Anuncio oficial da atualizacao de safehouse de GTA Online."
}, {
  label: "Rockstar North / Rockstar Games - historico publico",
  url: "https://en.wikipedia.org/wiki/Rockstar_North",
  note: "Estrutura historica de DMA Design, Rockstar North e principais jogos."
}, {
  label: "Grand Theft Auto series - releases and chronology",
  url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto",
  note: "Lista de lancamentos e organizacao dos universos narrativos."
}, {
  label: "Grand Theft Wiki - Race'n'Chase",
  url: "https://www.grandtheftwiki.com/Race%27n%27Chase",
  note: "Documento, escopo e transformacao do prototipo que antecedeu GTA 1."
}, {
  label: "GTA Wiki / Fandom - paginas de jogos e lore",
  url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_Wiki",
  note: "Apoio para detalhes de personagens, locais, faccoes, motores e cronologia secundaria."
}, {
  label: "GTA Wiki - Updates in GTA Online",
  url: "https://gta.fandom.com/wiki/Updates_in_GTA_Online",
  note: "Lista-base de DLCs e atualizacoes de conteudo de GTA Online."
}, {
  label: "ESRB - caso Hot Coffee",
  url: "https://www.esrb.org/blog/esrb-concludes-investigation-into-grand-theft-auto-san-andreas-revokes-m-mature-rating/",
  note: "Registro oficial da reclassificacao de GTA San Andreas em 2005."
}, {
  label: "FTC - acordo Take-Two/Rockstar sobre San Andreas",
  url: "https://www.ftc.gov/news-events/news/press-releases/2006/06/makers-grand-theft-auto-san-andreas-settle-ftc-charges",
  note: "Contexto publico sobre disclosure, patch e relancamento apos Hot Coffee."
}];
const universeData = [{
  id: "2d",
  name: "2D Universe",
  period: "1997-1999",
  tone: "neutral",
  games: ["Grand Theft Auto", "GTA: London 1969", "GTA: London 1961", "Grand Theft Auto 2"],
  summary: "A fase top-down da serie: mais arcade, mais anarquica e menos dependente de continuidade narrativa profunda.",
  description: "O 2D Universe funciona como laboratorio de linguagem. GTA ainda era uma combinacao de corrida, caos urbano, humor seco e missoes criminosas vistas de cima. Liberty City, Vice City e San Andreas ja aparecem como nomes, mas ainda nao possuem a densidade cultural que ganhariam depois. GTA 2 e tratado como caso a parte, com Anywhere City e uma data interna deliberadamente nebulosa.",
  notes: ["Personagens sao avatares ou figuras pouco desenvolvidas.", "A prioridade e liberdade, pontuacao e escalada criminal.", "London 1969 e London 1961 sao raras incursoes fora dos Estados Unidos."]
}, {
  id: "3d",
  name: "3D Universe",
  period: "2001-2006",
  tone: "blue",
  games: ["Grand Theft Auto III", "Grand Theft Auto: Vice City", "Grand Theft Auto: San Andreas", "Grand Theft Auto Advance", "Grand Theft Auto: Liberty City Stories", "Grand Theft Auto: Vice City Stories"],
  summary: "A continuidade classica: cidades, mafias, radios, personagens recorrentes e satira urbana em 3D.",
  description: "GTA III cria a gramatica moderna da franquia. Vice City e San Andreas ampliam tom, escala e identidade cultural. Os prequels de PSP e GTA Advance costuram eventos anteriores, mostrando que a Rockstar passou a tratar GTA como um universo criminal interligado.",
  notes: ["Claude, Tommy, CJ, Toni, Vic e Mike pertencem a esta continuidade.", "Liberty City, Vice City e San Andreas se tornam lugares reconheciveis, com geografia, faccoes e memoria.", "Referencias cruzadas existem, mas a era HD reinicia a continuidade principal."]
}, {
  id: "hd",
  name: "HD Universe",
  period: "2008-presente",
  tone: "pink",
  games: ["Grand Theft Auto IV", "Episodes from Liberty City", "Grand Theft Auto: Chinatown Wars", "Grand Theft Auto V", "Grand Theft Auto Online", "Grand Theft Auto VI"],
  summary: "A continuidade moderna: mundos mais densos, satira contemporanea, realismo fisico e GTA Online como plataforma viva.",
  description: "A era HD comeca com GTA IV e Liberty City reinterpretada. A Rockstar separa esta continuidade da era 3D, embora mantenha ecos, nomes de marcas e piadas internas. GTA V expande a escala com tres protagonistas e GTA Online transforma Los Santos em servico persistente. GTA VI leva esse universo para Leonida e Vice City moderna.",
  notes: ["Personagens de universos anteriores podem ser referenciados como easter eggs, nao necessariamente coexistem.", "A satira mira capitalismo, midia, policia, agencias federais, celebridade, tecnologia e redes sociais.", "GTA Online evolui a cronologia de Los Santos depois de 2013."]
}];
const rockstarHistoryData = [{
  year: "1987/1988",
  title: "DMA Design nasce em Dundee",
  type: "Estudio",
  summary: "David Jones forma a DMA Design em Dundee, Escocia. Algumas fontes usam 1987 para a atividade inicial e 1988 para a fundacao formal; por isso o dossie registra as duas datas.",
  details: ["A DMA Design nasce em Dundee, na Escocia, muito antes de existir Rockstar North. David Jones organiza o estudio em torno de uma cultura de programadores jovens, computadores domesticos, experimentacao tecnica e jogos com forte identidade propria.", "O primeiro grande salto vem com Lemmings, publicado pela Psygnosis em 1991. O jogo transforma a DMA em nome respeitado no mercado europeu e prova que o estudio sabia criar sistemas simples, legiveis e caoticos o bastante para gerar historias emergentes.", "Esse DNA importa para GTA: antes de pensar em cinema criminal, a DMA ja pensava em simulacao, regras, reacao em cadeia e pequenos personagens presos em sistemas maiores que eles. A diferenca e que, anos depois, os lemmings dariam lugar a carros, pedestres, policia e ruas.", "Mike Dailly, Russell Kay, Steve Hammond e outros nomes aparecem ligados ao nucleo historico da DMA. O dossie evita tratar uma franquia desse tamanho como obra de uma unica pessoa: GTA nasce de uma equipe, de uma tecnologia e de um momento muito especifico da industria britanica."],
  sources: [{
    label: "Rockstar North - historico",
    url: "https://en.wikipedia.org/wiki/Rockstar_North"
  }, {
    label: "DMA Design - historico",
    url: "https://en.wikipedia.org/wiki/DMA_Design"
  }]
}, {
  year: "1995-1997",
  title: "Race'n'Chase vira Grand Theft Auto",
  type: "Origem de GTA",
  summary: "O conceito de perseguicoes e crimes urbanos evolui para Grand Theft Auto, criado na DMA Design por David Jones e Mike Dailly com a equipe do estudio.",
  details: ["Race'n'Chase e o elo entre a DMA experimental e GTA. O projeto partia de uma ideia de corridas, perseguicoes, ladroes e policia em cidades vistas de cima. Era menos 'drama criminal' e mais brinquedo sistemico: carros, ruas, colisoes e regras de perseguicao.", "Durante o desenvolvimento, a equipe percebeu que o comportamento caotico da policia, a liberdade de roubar veiculos e a possibilidade de quebrar a ordem da cidade eram mais interessantes do que cumprir uma corrida tradicional. A diversao estava no desvio.", "A transformacao em Grand Theft Auto tambem aproxima a DMA da BMG Interactive, onde Sam Houser ajudaria a defender o potencial cultural e comercial da ideia. A provocacao publica, a linguagem de crime urbano e o tom de jornal sensacionalista comecam a se consolidar nesse periodo.", "E importante separar fato e lenda: ha relatos diferentes sobre bugs de policia, prototipos e decisoes de design. O ponto seguro e que a franquia nasce quando uma estrutura de corrida vira uma fantasia de liberdade criminal em cidade aberta."],
  sources: [{
    label: "Grand Theft Wiki - Race'n'Chase",
    url: "https://www.grandtheftwiki.com/Race%27n%27Chase"
  }, {
    label: "GTA Wiki - Race'n'Chase Engine",
    url: "https://gta.fandom.com/wiki/Race%27n%27Chase_Game_Engine"
  }]
}, {
  year: "1997",
  title: "Grand Theft Auto estreia",
  type: "Lancamento",
  summary: "GTA nasce antes de existir Rockstar North. O primeiro jogo e publicado no periodo BMG Interactive/DMA Design.",
  details: ["Grand Theft Auto chega em 1997 como jogo de perspectiva top-down, missao criminosa e liberdade urbana. Ele nao tem a densidade narrativa dos titulos posteriores, mas ja apresenta a gramatica essencial: roubar carros, aceitar trabalhos ilegais, fugir da policia e transformar cidade em tabuleiro.", "Liberty City, Vice City e San Andreas ja aparecem como nomes, mas ainda em versoes abstratas. Elas funcionam mais como zonas de jogabilidade e identidade visual do que como cidades-personagem com memoria, bairros e continuidade profunda.", "A radio, os crimes, o humor acido e a busca deliberada por controversia ajudam o jogo a se destacar. Parte do impacto vem da sensacao de que o jogador podia quebrar regras urbanas de um jeito que poucos jogos comerciais permitiam naquela epoca.", "O primeiro GTA tambem mostra uma diferenca importante para o dossie: ele pertence a fase DMA/BMG. A marca Rockstar ainda nao existia como conhecemos, e Rockstar North ainda nao era o nome do estudio."],
  sources: [{
    label: "GTA Wiki - Grand Theft Auto 1997",
    url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_(1997_game)"
  }, {
    label: "Grand Theft Auto - serie",
    url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto"
  }]
}, {
  year: "1998",
  title: "Take-Two, BMG Interactive e Rockstar Games",
  type: "Negocio",
  summary: "A Take-Two adquire ativos da BMG Interactive. Em dezembro de 1998, Rockstar Games e fundada por Sam Houser, Dan Houser, Terry Donovan, Jamie King e Gary Foreman.",
  details: ["A virada empresarial acontece quando a Take-Two compra ativos da BMG Interactive. GTA deixa de ser apenas um jogo estranho da DMA publicado pela BMG e passa a estar dentro de uma estrutura que queria transformar marcas autorais em eventos culturais.", "Rockstar Games e fundada em 1998 por Sam Houser, Dan Houser, Terry Donovan, Jamie King e Gary Foreman. A proposta nao era soar como uma publicadora neutra: era construir um selo com atitude, musica, cinema, design urbano e provocacao calculada.", "Sam Houser e Dan Houser se tornam figuras centrais da identidade editorial: dialogo afiado, radios satiricas, referencias a cinema criminal, obsessao por trilha sonora e mundos que parecem comentar a cultura popular enquanto o jogador atravessa a cidade.", "A Rockstar nao cria GTA do zero, mas reposiciona GTA. O jogo deixa de ser apenas um produto de nicho caotico e vira uma franquia com branding, marketing, controle de tom e ambicao de ser reconhecida fora do publico tradicional de videogames."],
  sources: [{
    label: "Rockstar Games - historico",
    url: "https://en.wikipedia.org/wiki/Rockstar_Games"
  }, {
    label: "Take-Two Interactive",
    url: "https://en.wikipedia.org/wiki/Take-Two_Interactive"
  }]
}, {
  year: "1999-2002",
  title: "DMA Design se torna Rockstar North",
  type: "Estudio",
  summary: "A antiga DMA passa por reestruturacoes e se torna Rockstar North, principal estudio de desenvolvimento da franquia GTA.",
  details: ["Depois do sucesso inicial de GTA, a DMA atravessa uma fase de mudancas corporativas. O estudio passa por aquisicoes e reestruturacoes ate ficar sob a orbita da Take-Two/Rockstar, consolidando sua funcao como o nucleo tecnico da franquia.", "A transicao nao e apenas troca de placa na porta. Ela marca a passagem de um estudio escoces independente para uma operacao alinhada a uma editora global, com ambicoes maiores, marketing mais agressivo e exigencia tecnica muito mais alta.", "A equipe precisava resolver uma pergunta enorme: como transformar o caos top-down de GTA em uma cidade 3D onde dirigir, atirar, caminhar, ouvir radio e seguir historia acontecessem no mesmo espaco sem parecerem sistemas separados?", "Rockstar North surge como o nome associado a essa resposta. A antiga DMA se torna, na pratica, o laboratorio principal de GTA: um estudio capaz de combinar engenharia de mundo aberto, design de missoes, cultura urbana e satira."],
  sources: [{
    label: "Rockstar North",
    url: "https://en.wikipedia.org/wiki/Rockstar_North"
  }, {
    label: "GTA Wiki - Rockstar North",
    url: "https://gta.fandom.com/wiki/Rockstar_North"
  }]
}, {
  year: "2001",
  title: "GTA III redefine o mundo aberto",
  type: "Virada tecnica",
  summary: "A camera em terceira pessoa, a cidade 3D, as radios e as missoes cinematograficas criam um modelo que influencia toda a industria.",
  details: ["GTA III e a virada que transforma uma ideia forte em linguagem dominante. Liberty City deixa de ser um mapa visto de cima e vira uma cidade tridimensional, com ruas, pontes, ilhas, pedestres, trafego, radio, faccoes e missao cinematografica.", "O jogo nao foi o primeiro mundo aberto da historia, mas foi o ponto em que muitos sistemas passaram a parecer uma mesma fantasia urbana: dirigir, caminhar, atirar, aceitar trabalhos, fugir da policia e simplesmente se perder pela cidade.", "A producao tambem atravessa um momento historico delicado. Depois dos ataques de 11 de setembro de 2001, o lancamento e ajustado e parte do conteudo e revisada para evitar referencias sensiveis. Esse contexto ajuda a explicar por que GTA III parece agressivo e, ao mesmo tempo, cuidadosamente reposicionado.", "O resultado redefiniu expectativa de mercado. A partir de GTA III, varias editoras passaram a procurar seu proprio 'GTA-like'. Para a Rockstar, o jogo prova que a franquia podia ser mais que controversia: podia ser arquitetura de mundo aberto."],
  sources: [{
    label: "GTA III - desenvolvimento",
    url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_III"
  }, {
    label: "GTA Wiki - GTA III",
    url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_III"
  }]
}, {
  year: "2002-2006",
  title: "Era 3D no auge",
  type: "Escala",
  summary: "Vice City, San Andreas, Liberty City Stories e Vice City Stories consolidam uma continuidade criminal cheia de personagens recorrentes.",
  details: ["Depois de GTA III, a Rockstar entende que cidade nao era so mapa: era tom. Vice City usa Miami ficcional, neon, drogas, praia, radio licenciada e cinema criminal dos anos 80 para criar uma identidade quase musical.", "Tommy Vercetti muda a relacao do jogador com a historia. Depois de Claude, um protagonista praticamente silencioso, Vice City coloca voz, ambicao e personalidade no centro do crime. A campanha passa a parecer ascensao de um chefe, nao apenas uma sucessao de trabalhos.", "San Andreas leva a formula ao limite da era PlayStation 2: tres cidades, campo, deserto, Las Venturas, avioes, academias, territorio, customizacao, habilidades e uma narrativa de familia, gangues e corrupcao policial nos anos 1990.", "Liberty City Stories e Vice City Stories fecham lacunas de continuidade, especialmente em PSP, mostrando que a Rockstar passou a tratar GTA como uma rede de personagens, mafias e cidades com passado. Esse periodo cristaliza o chamado 3D Universe.", "Tambem e a fase em que o debate publico sobre GTA cresce muito. A serie vira fenomeno comercial e alvo recorrente de discussoes sobre violencia, classificacao indicativa, satira e representacao."],
  sources: [{
    label: "Vice City - historico",
    url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City"
  }, {
    label: "San Andreas - historico",
    url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto:_San_Andreas"
  }, {
    label: "GTA Wiki - 3D Universe",
    url: "https://gta.fandom.com/wiki/3D_Universe"
  }]
}, {
  year: "2008",
  title: "Era HD com GTA IV",
  type: "Engine",
  summary: "GTA IV inaugura a fase HD com RAGE, Euphoria e uma Liberty City mais realista, densa e sombria.",
  details: ["GTA IV reinicia a continuidade principal no HD Universe. A Rockstar mantem marcas, radios, humor e ecos culturais, mas separa a nova fase da linha narrativa da era 3D.", "A troca tecnica e decisiva: RAGE e Euphoria dao peso fisico, animacao procedural e uma Liberty City mais densa. O jogo passa a buscar uma cidade menos caricata e mais observada, com pontes, bairros, celular, internet interna e vida urbana mais crua.", "Niko Bellic leva GTA para um tom mais dramatico: imigração, trauma de guerra, vinganca, divida, familia e desencanto com o sonho americano. A satira ainda existe, mas convive com melancolia e violencia menos cartunesca.", "The Lost and Damned e The Ballad of Gay Tony expandem a mesma cidade por outras classes sociais e subculturas: motoclube em decadencia, vida noturna, diamantes, mafia, celebridade e excesso. Juntos, os episodios mostram a ambicao da Rockstar de contar uma cidade por angulos paralelos.", "GTA IV tambem confirma que a franquia poderia sobreviver a um reboot de tom. O publico ainda reconhecia GTA, mas agora com fisica, realismo e uma escrita mais sombria."],
  sources: [{
    label: "GTA IV - desenvolvimento",
    url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_IV"
  }, {
    label: "GTA Wiki - HD Universe",
    url: "https://gta.fandom.com/wiki/HD_Universe"
  }]
}, {
  year: "2013",
  title: "GTA V e GTA Online",
  type: "Fenomeno",
  summary: "GTA V combina tres protagonistas, assaltos e uma Los Santos gigantesca; GTA Online cresce de modo multiplayer para plataforma viva.",
  details: ["GTA V e a sintese comercial e tecnica da Rockstar moderna. Los Santos retorna como espelho de Los Angeles, mas agora cercada por Blaine County, midia digital, celebridade, desigualdade, paranoia estatal e economia de espetaculo.", "A escolha de tres protagonistas muda o ritmo da campanha. Michael representa o passado criminal domesticado, Franklin a tentativa de mobilidade social e Trevor o caos que a propria serie sempre prometeu. O sistema permite alternar classe, tom e geografia dentro de uma mesma historia.", "Os assaltos viram estrutura central, com planejamento, equipe, preparacao e execucao. A campanha usa FIB, IAA, Merryweather, Devin Weston, gangues e cartéis para mostrar uma Los Santos onde crime privado e poder institucional se confundem.", "GTA Online, lancado em 2013, comeca turbulento, mas cresce para algo maior que modo multiplayer. Heists, CEOs, motoclubes, bunkers, nightclubs, cassino, Cayo Perico, agencias e atualizacoes de economia transformam Los Santos em plataforma persistente.", "Esse ciclo muda a historia da Rockstar: GTA V continua vendendo por multiplas geracoes de console, GTA Online sustenta uma comunidade gigantesca e a expectativa por GTA VI passa a existir sob a sombra de um jogo que se recusou a sair de cena."],
  sources: [{
    label: "GTA V - desenvolvimento",
    url: "https://en.wikipedia.org/wiki/Development_of_Grand_Theft_Auto_V"
  }, {
    label: "GTA Online",
    url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_Online"
  }, {
    label: "Rockstar - GTA Online",
    url: "https://www.rockstargames.com/gta-online"
  }]
}, {
  year: "2026",
  title: "GTA VI leva a era HD para Leonida",
  type: "Proximo capitulo",
  summary: "GTA VI esta oficialmente marcado para 19 de novembro de 2026, ambientado em Leonida/Vice City, com Lucia Caminos e Jason Duval.",
  details: ["GTA VI chega depois do periodo mais longo entre jogos principais da franquia. O intervalo e explicado por uma combinacao de escala tecnica, longevidade de GTA Online, mudancas internas na Rockstar e a expectativa criada por GTA V.", "O que e confirmado pela Rockstar: GTA VI esta marcado para 19 de novembro de 2026, anunciado para PlayStation 5 e Xbox Series X|S, ambientado no estado de Leonida e com Vice City como centro mais reconhecivel.", "Lucia Caminos e Jason Duval formam a dupla central divulgada oficialmente. A pagina da Rockstar descreve Lucia saindo da Penitenciaria de Leonida e Jason envolvido com traficantes locais nas Keys, ate um servico aparentemente simples dar errado.", "O material oficial sugere crime moderno, redes sociais, cultura viral, praias, pantanos, policia, vida noturna e uma versao contemporanea da satira da Florida. Ainda assim, antagonistas, mapa completo, estrutura de missoes, PC e futuro de GTA Online seguem nao confirmados.", "Historicamente, GTA VI representa uma prova dupla: continuar a linhagem single-player cinematografica da Rockstar e, ao mesmo tempo, responder a uma decada em que GTA Online redefiniu o que a franquia significa para milhoes de jogadores."],
  sources: [{
    label: "Rockstar - GTA VI",
    url: "https://www.rockstargames.com/VI"
  }, {
    label: "Newswire - data oficial de GTA VI",
    url: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026"
  }]
}];
const timelineChronologicalData = [{
  year: "1961",
  sortYear: 1961,
  title: "GTA: London 1961",
  city: "London",
  universe: "2D Universe",
  protagonist: "Avatares selecionaveis",
  summary: "Expansao gratuita para PC que volta a Londres no inicio da decada. E uma das poucas passagens da franquia fora do eixo americano.",
  beats: ["Crime urbano em Londres estilizada.", "Tom mais arcade e menos canonico.", "Curiosidade historica por anteceder London 1969 dentro da cronologia."],
  certainty: "Confirmado como expansao da era 2D; continuidade profunda e limitada."
}, {
  year: "1969",
  sortYear: 1969,
  title: "GTA: London 1969",
  city: "London",
  universe: "2D Universe",
  protagonist: "Avatares selecionaveis",
  summary: "A franquia testa crime britanico, cultura pop dos anos 60, carros de epoca e linguagem de gangster londrino.",
  beats: ["Ambientacao britanica com estetica Swinging Sixties.", "Expansao de GTA 1.", "Rara excecao internacional na serie."],
  certainty: "Confirmado."
}, {
  year: "1984",
  sortYear: 1984,
  title: "GTA: Vice City Stories",
  city: "Vice City",
  universe: "3D Universe",
  protagonist: "Victor 'Vic' Vance",
  summary: "Vic Vance, militar tentando sustentar a familia, e puxado para trafico, corrupcao e disputa com Jerry Martinez e a familia Mendez.",
  beats: ["Mostra Vice City antes da ascensao de Tommy Vercetti.", "Lance Vance entra como parceiro ambicioso e instavel.", "O imperio dos Vance cresce, mas a tragica morte de Vic em 1986 ja paira sobre a historia."],
  certainty: "Confirmado."
}, {
  year: "1986",
  sortYear: 1986,
  title: "Grand Theft Auto: Vice City",
  city: "Vice City",
  universe: "3D Universe",
  protagonist: "Tommy Vercetti",
  summary: "Depois de 15 anos preso, Tommy e enviado por Sonny Forelli a Vice City. A negociacao de drogas e emboscada, ele perde dinheiro e produto, derruba Ricardo Diaz e monta seu proprio imperio.",
  beats: ["Ken Rosenberg, Lance Vance, Colonel Cortez, Avery Carrington e Kent Paul abrem portas no submundo.", "Tommy toma a mansao de Diaz e compra negocios pela cidade.", "Lance trai Tommy; Sonny vai a Vice City cobrar a divida; Tommy vence e vira chefe local."],
  certainty: "Confirmado."
}, {
  year: "1992",
  sortYear: 1992,
  title: "Grand Theft Auto: San Andreas",
  city: "Los Santos, San Fierro, Las Venturas",
  universe: "3D Universe",
  protagonist: "Carl 'CJ' Johnson",
  summary: "CJ volta a Los Santos apos a morte da mae. Grove Street esta quebrada, C.R.A.S.H. o manipula e a traicao de Big Smoke e Ryder expande a guerra para todo o estado.",
  beats: ["CJ reconstruiu poder em Los Santos, zona rural, San Fierro, deserto e Las Venturas.", "Woozie, Cesar, The Truth e Mike Toreno ampliam sua rede.", "O final confronta Big Smoke e a queda de Tenpenny."],
  certainty: "Confirmado."
}, {
  year: "1997",
  sortYear: 1997,
  title: "Grand Theft Auto",
  city: "Liberty City, San Andreas, Vice City",
  universe: "2D Universe",
  protagonist: "Avatares selecionaveis",
  summary: "A primeira versao da formula: subir no submundo criminal completando missoes para chefes e causando caos em tres cidades.",
  beats: ["Narrativa leve e fragmentada.", "Cidades ainda nao equivalem as versoes 3D/HD.", "Base conceitual da franquia."],
  certainty: "Confirmado."
}, {
  year: "1998",
  sortYear: 1998,
  title: "Grand Theft Auto: Liberty City Stories",
  city: "Liberty City",
  universe: "3D Universe",
  protagonist: "Toni Cipriani",
  summary: "Toni retorna e trabalha para Salvatore Leone durante uma guerra entre Leone, Sindacco e Forelli.",
  beats: ["Prequel direto de GTA III.", "Mostra Salvatore antes de sua queda.", "A violencia politica e mafiosa redesenha Liberty City."],
  certainty: "Confirmado."
}, {
  year: "c. 2000",
  sortYear: 2000,
  title: "Grand Theft Auto Advance",
  city: "Liberty City",
  universe: "3D Universe",
  protagonist: "Mike",
  summary: "Mike busca vingar o parceiro Vinnie em Liberty City. A trama funciona como prequel portatil de GTA III.",
  beats: ["Historia de traicao e fuga.", "Conecta-se ao clima criminal da Liberty City pre-GTA III.", "Algumas cronologias populares posicionam o jogo perto de 1998; aqui fica como c. 2000 por ser anterior a GTA III."],
  certainty: "A data interna e tratada como aproximada."
}, {
  year: "data incerta",
  sortYear: 2000.5,
  title: "Grand Theft Auto 2",
  city: "Anywhere City",
  universe: "2D Universe",
  protagonist: "Claude Speed",
  summary: "Anywhere City mistura retrofuturismo, gangues caricatas e um calendario deliberadamente ambiguo.",
  beats: ["Zaibatsu, Loonies, Yakuza, Scientists, Rednecks, Russian Mafia e Krishna disputam distritos.", "O tom e mais experimental que canonico.", "A data interna e frequentemente debatida; o dossie marca como nao confirmada."],
  certainty: "Nao confirmado."
}, {
  year: "2001",
  sortYear: 2001,
  title: "Grand Theft Auto III",
  city: "Liberty City",
  universe: "3D Universe",
  protagonist: "Claude",
  summary: "Catalina trai Claude durante um assalto. Ele sobrevive, escapa com 8-Ball e atravessa Leone, Yakuza, Yardies e Cartel Colombiano ate confronta-la.",
  beats: ["Luigi, Joey, Toni, Salvatore, Maria, Asuka, Kenji, Ray e Donald Love estruturam a escalada.", "Miguel e Catalina movem o Cartel.", "O final fecha a vinganca contra Catalina."],
  certainty: "Confirmado."
}, {
  year: "2008",
  sortYear: 2008,
  title: "Grand Theft Auto IV",
  city: "Liberty City",
  universe: "HD Universe",
  protagonist: "Niko Bellic",
  summary: "Niko chega a Liberty City atras do sonho americano, mas encontra dividas de Roman, mafias, traumas de guerra e uma cidade movida por corrupcao.",
  beats: ["Dimitri Rascalov e Mikhail Faustin puxam a tragedia russa.", "Little Jacob, Brucie, Packie, Kate, Mallorie, Phil Bell e Jimmy Pegorino moldam escolhas e perdas.", "Temas centrais: imigracao, vinganca, capitalismo e desilusao."],
  certainty: "Confirmado."
}, {
  year: "2008",
  sortYear: 2008.1,
  title: "The Lost and Damned",
  city: "Liberty City",
  universe: "HD Universe",
  protagonist: "Johnny Klebitz",
  summary: "Johnny tenta manter o The Lost MC de pe enquanto Billy Grey leva o motoclube a autodestruicao.",
  beats: ["O foco muda para lealdade, vicio, rivalidade e decadencia.", "Mostra eventos de GTA IV por outro angulo.", "A queda de Johnny ganha eco amargo em GTA V."],
  certainty: "Confirmado."
}, {
  year: "2008",
  sortYear: 2008.2,
  title: "The Ballad of Gay Tony",
  city: "Liberty City",
  universe: "HD Universe",
  protagonist: "Luis Fernando Lopez",
  summary: "Luis protege Tony Prince em meio a clubes, celebridades, diamantes, mafias e crime de alto nivel.",
  beats: ["Contrasta luxo e excesso com o noir de GTA IV.", "Cruza eventos dos diamantes vistos por Niko e Johnny.", "Yusuf Amir, Mori Kibbutz e Ray Bulgarin ampliam o tom extravagante."],
  certainty: "Confirmado."
}, {
  year: "2009",
  sortYear: 2009,
  title: "Grand Theft Auto: Chinatown Wars",
  city: "Liberty City",
  universe: "HD Universe",
  protagonist: "Huang Lee",
  summary: "Huang chega para entregar a espada Yu Jian ao tio Kenny, e acaba roubado, traido e mergulhado em disputas das Triads.",
  beats: ["Mistura honra familiar, trafico de drogas e traicao.", "Usa Liberty City da era HD em formato portatil.", "Hsin Jaoming, Kenny Lee e Wade Heston compoem a rede de suspeitos."],
  certainty: "Confirmado."
}, {
  year: "2013",
  sortYear: 2013,
  title: "Grand Theft Auto V",
  city: "Los Santos e Blaine County",
  universe: "HD Universe",
  protagonist: "Michael, Franklin e Trevor",
  summary: "O prologo em North Yankton volta para assombrar Michael e Trevor. Em Los Santos, Franklin cruza com Michael e os tres sao puxados para assaltos, FIB, IAA, Merryweather e Devin Weston.",
  beats: ["Michael vive sob nova identidade depois de fingir a propria morte.", "Trevor descobre a verdade e reabre feridas antigas.", "A Opcao C/Deathwish, em que os tres sobrevivem, e a leitura canonica mais aceita por referencias posteriores."],
  certainty: "Confirmado; final canonico tratado como interpretacao forte."
}, {
  year: "2013 em diante",
  sortYear: 2013.1,
  title: "Grand Theft Auto Online",
  city: "Los Santos, Blaine County e expansoes",
  universe: "HD Universe",
  protagonist: "Personagem criado pelo jogador",
  summary: "Los Santos vira plataforma viva: assaltos, empresas, motoclubes, bunkers, nightclubs, cassino, Cayo Perico, agencias, guerras de drogas, mercenarios e lavagem de dinheiro.",
  beats: ["GTA Online deixa de ser apenas multiplayer e vira cronologia continua.", "Personagens de GTA V reaparecem em novas fases.", "A economia criminal do jogador passa a ser a espinha dorsal."],
  certainty: "Confirmado como plataforma continua; detalhes de canon variam por atualizacao."
}, {
  year: "2026",
  sortYear: 2026,
  title: "Grand Theft Auto VI",
  city: "Leonida e Vice City",
  universe: "HD Universe",
  protagonist: "Lucia Caminos e Jason Duval",
  summary: "Lucia e Jason entram numa conspiracao criminosa que se espalha por Leonida depois de um servico aparentemente simples dar errado.",
  beats: ["Vice City retorna em versao moderna.", "Leonida e inspirada na Florida.", "Crime moderno, midia social, cultura viral e casal criminoso sao temas provaveis; detalhes de historia alem do material oficial ainda sao nao confirmados."],
  certainty: "Data, protagonistas e ambientacao confirmados; trama ampla ainda sob segredo oficial."
}];
const releaseTimelineData = [["1997", "Grand Theft Auto"], ["1999", "GTA: London 1969"], ["1999", "GTA: London 1961"], ["1999", "Grand Theft Auto 2"], ["2001", "Grand Theft Auto III"], ["2002", "Grand Theft Auto: Vice City"], ["2004", "Grand Theft Auto: San Andreas"], ["2004", "Grand Theft Auto Advance"], ["2005", "Grand Theft Auto: Liberty City Stories"], ["2006", "Grand Theft Auto: Vice City Stories"], ["2008", "Grand Theft Auto IV"], ["2009", "GTA IV: The Lost and Damned"], ["2009", "GTA: Chinatown Wars"], ["2009", "GTA IV: The Ballad of Gay Tony"], ["2013", "Grand Theft Auto V"], ["2013", "Grand Theft Auto Online"], ["2021", "Grand Theft Auto: The Trilogy - The Definitive Edition"], ["2026", "Grand Theft Auto VI"]].map(([year, title]) => ({
  year,
  title
}));
const gamesData = [{
  id: "gta-1",
  title: "Grand Theft Auto",
  releaseYear: 1997,
  storyYear: "1997 / continuidade leve",
  universe: "2D Universe",
  city: "Liberty City, San Andreas, Vice City",
  protagonist: "Avatares selecionaveis",
  antagonists: ["Chefes criminosos rivais", "Policia local"],
  supportingCharacters: ["Samuel Deever", "Bubby", "Uncle Fu", "Brother Marcus"],
  summary: "O primeiro GTA apresenta crime urbano em tres cidades com perspectiva top-down, liberdade caotica e missoes para chefes do submundo.",
  fullStory: "A narrativa e fragmentada: o jogador assume um criminoso sem biografia fixa e sobe no submundo aceitando trabalhos, roubando carros e acumulando dinheiro. O foco esta na sensacao de cidade aberta, no risco de perseguidas policiais e na possibilidade de quebrar regras do jogo a favor do jogador.",
  developmentHistory: "Desenvolvido pela DMA Design, nasceu de ideias ligadas a Race'n'Chase. David Jones e Mike Dailly sao os nomes centrais da criacao inicial. O projeto encontrou sua identidade quando a perseguicao, o roubo de carros e a liberdade sistemica ficaram mais interessantes que uma corrida convencional.",
  importance: "Estabeleceu o DNA da serie: carros, policia, radio, humor acido, crime e cidades satiricas.",
  themes: ["crime urbano", "liberdade", "arcade", "caos"],
  factions: ["chefes locais", "policia"],
  relatedGames: ["GTA: London 1969", "GTA: London 1961", "Grand Theft Auto 2"],
  tags: ["2D Universe", "Top-down", "Origem", "Sandbox"]
}, {
  id: "london-1969",
  title: "Grand Theft Auto: London 1969",
  releaseYear: 1999,
  storyYear: 1969,
  universe: "2D Universe",
  city: "London",
  protagonist: "Avatares selecionaveis",
  antagonists: ["Crime londrino", "Policia"],
  supportingCharacters: ["Harold Cartwright", "Jack Parkinson", "Sid Vacant"],
  summary: "Expansao de GTA 1 ambientada na Londres dos anos 60, com carros, linguagem e atmosfera britanica.",
  fullStory: "A campanha funciona como variação de GTA 1 em ambiente londrino: o jogador trabalha para figuras do submundo local, sobe em reputacao e atravessa uma cidade estilizada por cultura pop, crime e ironia britanica.",
  developmentHistory: "Criada como mission pack/expansao, mostrou que GTA podia mudar de pais e periodo historico sem abandonar a formula de caos urbano.",
  importance: "E uma das poucas vezes em que GTA saiu da satira de cidades americanas.",
  themes: ["anos 60", "crime britanico", "expansao"],
  factions: ["gangues londrinas"],
  relatedGames: ["Grand Theft Auto", "GTA: London 1961"],
  tags: ["2D Universe", "Expansao", "Prequel", "London"]
}, {
  id: "london-1961",
  title: "Grand Theft Auto: London 1961",
  releaseYear: 1999,
  storyYear: 1961,
  universe: "2D Universe",
  city: "London",
  protagonist: "Avatares selecionaveis",
  antagonists: ["Gangues locais", "Policia"],
  supportingCharacters: ["Elenco de chefes da expansao"],
  summary: "Expansao adicional para PC, anterior a London 1969 dentro da cronologia.",
  fullStory: "London 1961 amplia a ideia de crime de epoca com missoes e ambientacao ainda mais retro. A historia permanece leve, mais interessada em estilo e objetivos do que em arco dramatico.",
  developmentHistory: "Distribuida como complemento para London 1969 no PC, reforcando a fase experimental do primeiro GTA.",
  importance: "Curiosidade historica importante para a cronologia interna e para a raridade de GTA fora dos EUA.",
  themes: ["anos 60", "Londres", "arcade"],
  factions: ["gangues londrinas"],
  relatedGames: ["Grand Theft Auto", "GTA: London 1969"],
  tags: ["2D Universe", "Expansao", "Prequel", "Spin-off"]
}, {
  id: "gta-2",
  title: "Grand Theft Auto 2",
  releaseYear: 1999,
  storyYear: "Nao confirmado / retrofuturista",
  universe: "2D Universe",
  city: "Anywhere City",
  protagonist: "Claude Speed",
  antagonists: ["Zaibatsu", "Loonies", "Yakuza", "Scientists", "Rednecks", "Russian Mafia", "Krishna"],
  supportingCharacters: ["Chefes de gangues por distrito"],
  summary: "GTA 2 troca cidades reconheciveis por Anywhere City, um experimento retrofuturista com reputacao entre gangues.",
  fullStory: "Claude Speed trabalha para faccoes rivais em distritos da cidade. Cada contrato aumenta dinheiro e reputacao, mas piora relacoes com inimigos. A historia e menos linear e mais uma matriz de lealdades temporarias, traicoes e controle territorial.",
  developmentHistory: "A DMA/Rockstar testou sistemas de gangues mais distintos, visual futurista e comportamento urbano mais responsivo, ainda em top-down.",
  importance: "Funciona como ponte experimental: mantem a estrutura 2D, mas antecipa a importancia de faccoes com identidade propria.",
  themes: ["retrofuturo", "gangues", "corporacoes", "reputacao"],
  factions: ["Zaibatsu", "Loonies", "Yakuza", "Scientists", "Rednecks", "Russian Mafia", "Krishna"],
  relatedGames: ["Grand Theft Auto"],
  tags: ["2D Universe", "Experimental", "Spin-off"]
}, {
  id: "gta-iii",
  title: "Grand Theft Auto III",
  releaseYear: 2001,
  storyYear: 2001,
  universe: "3D Universe",
  city: "Liberty City",
  protagonist: "Claude",
  antagonists: ["Catalina", "Salvatore Leone", "Colombian Cartel"],
  supportingCharacters: ["8-Ball", "Luigi Goterelli", "Joey Leone", "Toni Cipriani", "Maria Latore", "Asuka Kasen", "Kenji Kasen", "Ray Machowski", "Donald Love", "Miguel"],
  summary: "Claude e traido por Catalina, escapa da prisao e atravessa as faccoes de Liberty City em busca de sobrevivencia e vinganca.",
  fullStory: "Apos um assalto, Catalina atira em Claude e foge com Miguel. Claude sobrevive, escapa com 8-Ball e passa a trabalhar para a Leone Family. Quando Salvatore tenta elimina-lo, Maria o ajuda a se aproximar da Yakuza. O conflito se espalha por Yardies, Cartel Colombiano, politicos e empresarios ate Claude confrontar Catalina no final.",
  developmentHistory: "GTA III foi a virada para 3D em tempo real. A cidade, as radios, os pedestres, a policia, os veiculos e as missoes passaram a operar num espaco tridimensional coeso.",
  importance: "Redefiniu o genero de mundo aberto urbano e virou referencia estrutural para jogos de acao em terceira pessoa.",
  themes: ["traicao", "vinganca", "mafia", "cidade aberta"],
  factions: ["Leone Family", "Yakuza", "Yardies", "Colombian Cartel", "Diablos"],
  relatedGames: ["Liberty City Stories", "Grand Theft Auto Advance"],
  tags: ["3D Universe", "Marco", "Liberty City"]
}, {
  id: "vice-city",
  title: "Grand Theft Auto: Vice City",
  releaseYear: 2002,
  storyYear: 1986,
  universe: "3D Universe",
  city: "Vice City",
  protagonist: "Tommy Vercetti",
  antagonists: ["Sonny Forelli", "Ricardo Diaz", "Lance Vance"],
  supportingCharacters: ["Ken Rosenberg", "Colonel Cortez", "Avery Carrington", "Kent Paul", "Mercedes Cortez", "Umberto Robina", "Phil Cassidy"],
  summary: "Tommy perde dinheiro e drogas numa emboscada, derruba Ricardo Diaz e construi um imperio proprio em Vice City.",
  fullStory: "Recem-saido da prisao depois de 15 anos, Tommy e enviado por Sonny Forelli para uma negociacao em Vice City. A operacao da errado. Tommy precisa recuperar a mercadoria, entender quem o traiu e sobreviver ao jogo de cartois, mafiosos e empresarios. Ele toma a mansao de Diaz, compra negocios, consolida poder e, no final, mata Lance e Sonny.",
  developmentHistory: "Desenvolvido rapidamente depois de GTA III, Vice City ampliou voz, radio, personalidade de protagonista e atmosfera. A inspiracao em cinema criminal dos anos 80 e cultura de Miami moldou o tom.",
  importance: "Transformou ambientacao em assinatura. Vice City e lembrado tanto por historia quanto por musica, neon, figurino e humor.",
  themes: ["anos 80", "neon", "drogas", "imperio criminal"],
  factions: ["Forelli Family", "Diaz Organization", "Vance Crime Family", "Cubans", "Haitians"],
  relatedGames: ["Vice City Stories", "GTA VI"],
  tags: ["3D Universe", "Prequel relacionado", "Vice City", "Classico"]
}, {
  id: "san-andreas",
  title: "Grand Theft Auto: San Andreas",
  releaseYear: 2004,
  storyYear: 1992,
  universe: "3D Universe",
  city: "San Andreas",
  protagonist: "Carl 'CJ' Johnson",
  antagonists: ["Frank Tenpenny", "Big Smoke", "Ryder", "Eddie Pulaski"],
  supportingCharacters: ["Sweet Johnson", "Kendl Johnson", "Cesar Vialpando", "Woozie", "Mike Toreno", "The Truth", "Madd Dogg", "Zero", "OG Loc", "Catalina"],
  summary: "CJ retorna a Los Santos, descobre traicoes e reconquista poder cruzando Los Santos, San Fierro, deserto e Las Venturas.",
  fullStory: "A morte de Beverly Johnson traz CJ de volta. Grove Street esta fraca, Sweet desconfia do irmao e C.R.A.S.H. usa CJ como instrumento. A traicao de Big Smoke e Ryder revela ligacoes com drogas e corrupcao. CJ e exilado, construiu negocios, aliados e habilidades em todo o estado, retorna a Los Santos e fecha a historia contra Big Smoke e Tenpenny.",
  developmentHistory: "San Andreas expande tudo: mapa com tres cidades, campo, deserto, academias, gordura, musculatura, roupas, habilidades, territorio, avioes e RPG leve.",
  importance: "E o apice de ambicao da era 3D e um dos jogos mais influentes da geracao PS2.",
  themes: ["familia", "gangues", "corrupcao policial", "territorio", "redencao"],
  factions: ["Grove Street Families", "Ballas", "Los Santos Vagos", "Varrios Los Aztecas", "San Fierro Rifa", "Da Nang Boys", "C.R.A.S.H."],
  relatedGames: ["GTA V", "GTA Online"],
  tags: ["3D Universe", "Estado", "Gangues", "Classico"]
}, {
  id: "gta-advance",
  title: "Grand Theft Auto Advance",
  releaseYear: 2004,
  storyYear: "c. 2000",
  universe: "3D Universe",
  city: "Liberty City",
  protagonist: "Mike",
  antagonists: ["Vinnie", "Cisco", "King Courtney"],
  supportingCharacters: ["8-Ball", "Misty", "Asuka Kasen"],
  summary: "Mike tenta sair da vida criminal com Vinnie, mas uma explosao e uma traicao o jogam numa vinganca em Liberty City.",
  fullStory: "Mike e Vinnie planejam abandonar Liberty City com dinheiro, mas Vinnie aparentemente morre numa explosao. Mike busca responsaveis e trabalha para figuras locais, ate descobrir que a historia era uma manipulacao. O final reforca o tema de fuga impossivel da cidade.",
  developmentHistory: "Desenvolvido para Game Boy Advance, adapta Liberty City a uma leitura top-down conectada ao universo 3D.",
  importance: "Curioso por unir portatil, camera classica e continuidade de GTA III.",
  themes: ["vinganca", "traicao", "prequel"],
  factions: ["Yakuza", "Yardies", "Uptown Yardies", "cartel local"],
  relatedGames: ["GTA III"],
  tags: ["3D Universe", "Prequel", "Spin-off", "Portatil"]
}, {
  id: "liberty-city-stories",
  title: "Grand Theft Auto: Liberty City Stories",
  releaseYear: 2005,
  storyYear: 1998,
  universe: "3D Universe",
  city: "Liberty City",
  protagonist: "Toni Cipriani",
  antagonists: ["Sindacco Family", "Forelli Family", "Sicilian Mafia"],
  supportingCharacters: ["Salvatore Leone", "Maria Latore", "Donald Love", "Ma Cipriani", "Vincenzo Cilli"],
  summary: "Toni volta a Liberty City e ajuda Salvatore Leone a vencer guerras de mafia, politica e territorio.",
  fullStory: "Depois de um periodo fora, Toni retorna e tenta recuperar posicao na familia Leone. Ele lida com ordens humilhantes, rivais italianos, interesses politicos de Donald Love e disputas que preparam o tabuleiro de GTA III.",
  developmentHistory: "Originalmente criado para PSP, reutiliza Liberty City com nova epoca, novas missoes e refinamentos tecnicos.",
  importance: "Aprofunda a mitologia da Leone Family e mostra Liberty antes de Claude.",
  themes: ["mafia", "lealdade", "politica", "prequel"],
  factions: ["Leone Family", "Sindacco Family", "Forelli Family", "Sicilian Mafia"],
  relatedGames: ["GTA III"],
  tags: ["3D Universe", "Prequel", "Liberty City"]
}, {
  id: "vice-city-stories",
  title: "Grand Theft Auto: Vice City Stories",
  releaseYear: 2006,
  storyYear: 1984,
  universe: "3D Universe",
  city: "Vice City",
  protagonist: "Victor 'Vic' Vance",
  antagonists: ["Jerry Martinez", "Armando Mendez", "Diego Mendez"],
  supportingCharacters: ["Lance Vance", "Louise Cassidy-Williams", "Phil Cassidy", "Ricardo Diaz", "Umberto Robina"],
  summary: "Vic Vance e expulso do exercito e empurrado para uma guerra criminal que antecede os eventos de Vice City.",
  fullStory: "Vic tenta proteger sua familia, mas Jerry Martinez o usa em esquemas ilegais. Ao lado de Lance, ele monta negocios em Vice City, enfrenta a familia Mendez e cruza com figuras que reaparecem em 1986. A tragedia e que o destino de Vic no inicio de Vice City ja e conhecido.",
  developmentHistory: "Segundo grande prequel portatil da era 3D, expande sistema de negocios e territorio em Vice City.",
  importance: "Da contexto ao passado dos Vance e a paisagem criminal anterior a Tommy.",
  themes: ["familia", "corrupcao militar", "drogas", "prequel"],
  factions: ["Vance Crime Family", "Mendez Cartel", "Diaz Organization"],
  relatedGames: ["Vice City"],
  tags: ["3D Universe", "Prequel", "Vice City"]
}, {
  id: "gta-iv",
  title: "Grand Theft Auto IV",
  releaseYear: 2008,
  storyYear: 2008,
  universe: "HD Universe",
  city: "Liberty City",
  protagonist: "Niko Bellic",
  antagonists: ["Dimitri Rascalov", "Mikhail Faustin", "Ray Bulgarin", "Jimmy Pegorino"],
  supportingCharacters: ["Roman Bellic", "Little Jacob", "Brucie Kibbutz", "Mallorie Bardas", "Packie McReary", "Kate McReary", "Phil Bell", "United Liberty Paper contact"],
  summary: "Niko chega aos EUA procurando futuro e vinganca, mas encontra dividas, mentiras, mafias e o colapso moral do sonho americano.",
  fullStory: "Roman vende uma fantasia de sucesso; Niko encontra um taxi, agiotas e violencia. Trabalhos para gangues jamaicanas, mafias russas, familias irlandesas, italianos e agentes federais levam Niko ate homens ligados a seu trauma de guerra. O jogo culmina em escolhas que cobram preco pessoal, seja por vinganca ou acordo.",
  developmentHistory: "Primeira GTA da era HD, usando RAGE e animacao Euphoria. A Rockstar reposicionou o tom para drama criminal realista.",
  importance: "Mostrou que GTA podia ser mais dramatico, denso e politicamente amargo sem perder satira.",
  themes: ["imigracao", "trauma", "capitalismo", "vinganca"],
  factions: ["Russian Mafia", "McReary Family", "Pegorino Family", "LCPD", "agentes federais"],
  relatedGames: ["The Lost and Damned", "The Ballad of Gay Tony", "Chinatown Wars"],
  tags: ["HD Universe", "Liberty City", "Realismo"]
}, {
  id: "lost-and-damned",
  title: "Grand Theft Auto IV: The Lost and Damned",
  releaseYear: 2009,
  storyYear: 2008,
  universe: "HD Universe",
  city: "Liberty City",
  protagonist: "Johnny Klebitz",
  antagonists: ["Billy Grey", "Ray Boccino", "Angels of Death"],
  supportingCharacters: ["Ashley Butler", "Jim Fitzgerald", "Brian Jeremy", "Terry Thorpe", "Clay Simons"],
  summary: "A historia de Johnny no The Lost MC mostra um motoclube ruindo por vicio, orgulho e traicao interna.",
  fullStory: "Johnny tenta administrar The Lost com algum pragmatismo enquanto Billy Grey retorna e reinicia guerras. O clube se divide, negocios com drogas e diamantes cruzam a historia de GTA IV e a lealdade de Johnny e esmagada por uma cultura de autodestruicao.",
  developmentHistory: "Primeiro episodio de GTA IV, criado para mostrar a mesma cidade por outra classe social e criminal.",
  importance: "Aprofunda a tecnica narrativa de perspectivas cruzadas na era HD.",
  themes: ["motoclube", "lealdade", "decadencia", "vicio"],
  factions: ["The Lost MC", "Angels of Death", "Pegorino Family"],
  relatedGames: ["GTA IV", "The Ballad of Gay Tony", "GTA V"],
  tags: ["HD Universe", "Expansao", "Motoclube"]
}, {
  id: "chinatown-wars",
  title: "Grand Theft Auto: Chinatown Wars",
  releaseYear: 2009,
  storyYear: 2009,
  universe: "HD Universe",
  city: "Liberty City",
  protagonist: "Huang Lee",
  antagonists: ["Wu 'Kenny' Lee", "Rival Triads"],
  supportingCharacters: ["Hsin Jaoming", "Wade Heston", "Zhou Ming", "Chan Jaoming"],
  summary: "Huang Lee chega com a espada Yu Jian, e uma traicao familiar o coloca numa guerra por honra e poder entre Triads.",
  fullStory: "Apos o assassinato do pai, Huang deve entregar a espada ancestral ao tio Kenny. Ele e atacado, dado como morto e mergulha em investigacoes, trafico e jogos de lealdade. A revelacao final transforma a busca por honra em acerto de contas familiar.",
  developmentHistory: "Criado para Nintendo DS e depois levado a outras plataformas, adapta Liberty City HD a uma estetica top-down moderna.",
  importance: "Mantem a era HD ativa fora dos consoles de mesa e explora Triads com foco proprio.",
  themes: ["honra", "familia", "drogas", "traicao"],
  factions: ["Triads", "LCPD", "FIB"],
  relatedGames: ["GTA IV"],
  tags: ["HD Universe", "Spin-off", "Portatil"]
}, {
  id: "ballad-gay-tony",
  title: "Grand Theft Auto IV: The Ballad of Gay Tony",
  releaseYear: 2009,
  storyYear: 2008,
  universe: "HD Universe",
  city: "Liberty City",
  protagonist: "Luis Fernando Lopez",
  antagonists: ["Ray Bulgarin", "Rocco Pelosi", "Mori Kibbutz"],
  supportingCharacters: ["Tony Prince", "Yusuf Amir", "Armando Torres", "Henrique Bardas", "Gay Tony's club network"],
  summary: "Luis tenta salvar Tony Prince e seus clubes enquanto diamantes, celebridades, mafias e bilionarios puxam Liberty para o excesso.",
  fullStory: "Luis divide lealdade entre amigos de bairro e a vida noturna de Tony. Dividas, chantagens e negocios com diamantes levam a confrontos com Bulgarin e outros predadores. O episodio contrasta glamour e perigo, encerrando a trilogia de perspectivas de GTA IV.",
  developmentHistory: "Segundo episodio de GTA IV, deliberadamente mais colorido, explosivo e luxuoso que o jogo base.",
  importance: "Completa o mosaico de Liberty City e mostra como a mesma conspiracao de diamantes afeta varios protagonistas.",
  themes: ["vida noturna", "luxo", "lealdade", "diamantes"],
  factions: ["clubes de Tony", "Russian Mafia", "Ancelotti connections"],
  relatedGames: ["GTA IV", "The Lost and Damned"],
  tags: ["HD Universe", "Expansao", "Vida noturna"]
}, {
  id: "gta-v",
  title: "Grand Theft Auto V",
  releaseYear: 2013,
  storyYear: "2004 / 2013",
  universe: "HD Universe",
  city: "Los Santos, Blaine County, North Yankton",
  protagonist: "Michael De Santa, Franklin Clinton e Trevor Philips",
  antagonists: ["Devin Weston", "Steve Haines", "Wei Cheng", "Stretch", "Merryweather"],
  supportingCharacters: ["Lester Crest", "Lamar Davis", "Amanda De Santa", "Jimmy De Santa", "Tracey De Santa", "Dave Norton", "Martin Madrazo", "Ron Jakowski", "Wade Hebert"],
  summary: "Tres criminosos se unem em assaltos enquanto FIB, IAA, Merryweather, empresarios e gangues locais tentam usa-los ou elimina-los.",
  fullStory: "Em 2004, um assalto em North Yankton separa Michael, Trevor e Brad. Em 2013, Michael vive protegido em Los Santos, Franklin tenta sair do crime de rua e Trevor descobre que Michael esta vivo. Lester estrutura assaltos, o FIB chantageia o trio, Devin Weston explora Franklin e antigos inimigos voltam. A Opcao C e a conclusao mais aceita: os tres sobrevivem e eliminam ameaças centrais.",
  developmentHistory: "GTA V traz tres protagonistas jogaveis, mapa amplo, assaltos planejados e uma Los Santos satirica da cultura de celebridade, tecnologia e desigualdade.",
  importance: "Fenomeno comercial duradouro e base para GTA Online.",
  themes: ["assaltos", "familia", "midia", "capitalismo", "amizade toxica"],
  factions: ["FIB", "IAA", "Merryweather", "Families", "Ballas", "Vagos", "Madrazo Cartel"],
  relatedGames: ["GTA Online"],
  tags: ["HD Universe", "Tres protagonistas", "Los Santos"]
}, {
  id: "gta-online",
  title: "Grand Theft Auto Online",
  releaseYear: 2013,
  storyYear: "2013 em diante",
  universe: "HD Universe",
  city: "Los Santos, Blaine County, Cayo Perico e instancias",
  protagonist: "Personagem criado pelo jogador",
  antagonists: ["Merryweather", "FIB", "IAA", "El Rubio", "Duggans", "criminosos rivais"],
  supportingCharacters: ["Lamar Davis", "Lester Crest", "Agent 14", "Tony Prince", "Franklin Clinton", "Dr. Dre", "Dax", "Martin Madrazo", "Imani"],
  summary: "GTA Online transforma Los Santos em uma carreira criminal persistente com assaltos, empresas e atualizacoes narrativas.",
  fullStory: "O jogador chega como criminoso desconhecido e passa de trabalhos de rua a CEO, presidente de motoclube, dono de bunker, operador de cassino, infiltrado em Cayo Perico, socio de agencia, produtor de nightclubs e figura de lavagem de dinheiro. A historia e menos linear e mais uma acumulacao de status, contatos e infraestrutura criminal.",
  developmentHistory: "Lançado semanas apos GTA V, cresceu por atualizacoes regulares e virou plataforma de longa duracao.",
  importance: "Mudou a economia da franquia e manteve GTA V culturalmente ativo por mais de uma decada.",
  themes: ["plataforma viva", "assaltos", "negocios", "economia criminal"],
  factions: ["organizações de jogadores", "MCs", "CEOs", "Agencies", "Nightclubs", "Bunkers", "Arcades", "Auto Shops"],
  relatedGames: ["GTA V"],
  tags: ["HD Universe", "Online", "Plataforma viva"]
}, {
  id: "trilogy-definitive",
  title: "Grand Theft Auto: The Trilogy - The Definitive Edition",
  releaseYear: 2021,
  storyYear: "2001, 1986 e 1992",
  universe: "3D Universe",
  city: "Liberty City, Vice City, San Andreas",
  protagonist: "Claude, Tommy Vercetti e CJ",
  antagonists: ["Catalina", "Sonny Forelli", "Tenpenny", "Big Smoke"],
  supportingCharacters: ["Elencos de GTA III, Vice City e San Andreas"],
  summary: "Coletanea remasterizada dos tres pilares da era 3D.",
  fullStory: "Nao e uma historia nova, mas uma nova edicao de GTA III, Vice City e San Andreas. Serve como porta de entrada moderna para a continuidade 3D e suas tres narrativas centrais.",
  developmentHistory: "Lancada como remasterizacao. Recebeu criticas no lancamento por problemas tecnicos e visuais, com correcoes posteriores.",
  importance: "Mantem a trilogia classica acessivel, embora tambem seja lembrada por controversias de preservacao e qualidade.",
  themes: ["preservacao", "remaster", "era 3D"],
  factions: ["Leone Family", "Forelli Family", "Grove Street Families", "C.R.A.S.H."],
  relatedGames: ["GTA III", "Vice City", "San Andreas"],
  tags: ["3D Universe", "Remaster", "Coletanea"]
}, {
  id: "gta-vi",
  title: "Grand Theft Auto VI",
  releaseYear: 2026,
  storyYear: 2026,
  universe: "HD Universe",
  city: "Leonida, Vice City",
  protagonist: "Lucia Caminos e Jason Duval",
  antagonists: ["Nao confirmado"],
  supportingCharacters: ["Cal Hampton", "Boobie Ike", "Dre'Quan Priest", "Real Dimez", "Raul Bautista", "Brian Heder"],
  summary: "Lucia e Jason dependem um do outro depois que um servico da errado e os joga numa conspiracao em Leonida.",
  fullStory: "A sinopse oficial indica um casal criminoso em Vice City/Leonida, preso ao lado mais sombrio do lugar mais ensolarado dos Estados Unidos. Alem disso, a Rockstar ainda preserva detalhes essenciais da trama, antagonistas e estrutura de missoes.",
  developmentHistory: "Anunciado oficialmente pela Rockstar, GTA VI e posicionado como a proxima grande entrada da era HD. A data oficial atual e 19 de novembro de 2026 para PlayStation 5 e Xbox Series X|S.",
  importance: "Proximo capitulo principal da serie e retorno de Vice City em escala moderna.",
  themes: ["Leonida", "Vice City moderna", "casal criminoso", "redes sociais", "sátira contemporanea"],
  factions: ["Nao confirmado", "policia local", "crime moderno"],
  relatedGames: ["GTA Vice City", "Vice City Stories", "GTA Online"],
  tags: ["HD Universe", "GTA VI", "Fatos confirmados", "Nao lancado"]
}];
const charactersData = [{
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}];
const citiesData = [{
  id: "liberty-city",
  name: "Liberty City",
  realWorldInspiration: "Nova York",
  universeAppearances: ["2D Universe", "3D Universe", "HD Universe"],
  games: ["GTA 1", "GTA III", "Liberty City Stories", "GTA IV", "Chinatown Wars", "GTA Advance"],
  description: "A metropole de concreto da serie. Liberty concentra mafia, imigracao, corrupcao, ambicao imobiliaria, trauma e capitalismo urbano.",
  districts: ["Portland", "Staunton Island", "Shoreside Vale", "Broker", "Dukes", "Bohan", "Algonquin", "Alderney"],
  factions: ["Leone Family", "Yakuza", "Colombian Cartel", "Yardies", "Russian Mafia", "Triads", "Pegorino Family", "LCPD"],
  importantEvents: ["Traicao de Catalina", "queda de Salvatore Leone", "chegada de Niko Bellic", "guerra dos diamantes", "trama da Yu Jian"],
  characters: ["Claude", "Toni Cipriani", "Niko Bellic", "Huang Lee", "Salvatore Leone", "Roman Bellic"],
  visualStyle: "Concreto, chuva, pontes, metro, arranha-ceus, docas, bairros imigrantes e neon frio.",
  themes: ["mafia", "imigracao", "corrupcao", "capitalismo", "decadencia"]
}, {
  id: "vice-city",
  name: "Vice City",
  realWorldInspiration: "Miami",
  universeAppearances: ["2D Universe", "3D Universe", "HD Universe"],
  games: ["GTA 1", "Vice City", "Vice City Stories", "GTA VI"],
  description: "Cidade tropical da ambicao criminosa: praia, luxo, trafico, neon, cartois e vida noturna.",
  districts: ["Ocean Beach", "Washington Beach", "Vice Point", "Downtown", "Little Haiti", "Little Havana", "Starfish Island", "Vice City moderna"],
  factions: ["Forelli Family", "Diaz Organization", "Vance Crime Family", "Mendez Cartel", "Cubans", "Haitians", "grupos de GTA VI nao confirmados"],
  importantEvents: ["ascensao de Tommy Vercetti", "queda de Ricardo Diaz", "tragedia de Vic Vance", "retorno em GTA VI"],
  characters: ["Tommy Vercetti", "Vic Vance", "Lance Vance", "Ken Rosenberg", "Lucia Caminos", "Jason Duval"],
  visualStyle: "Palmeiras, art deco, rosa neon, azul piscina, carros esportivos, clubes, mansoes e calor umido.",
  themes: ["neon", "drogas", "luxo", "praia", "cartéis", "vida noturna"]
}, {
  id: "san-andreas",
  name: "San Andreas",
  realWorldInspiration: "California e Nevada; na era 2D, uma cidade inspirada em San Francisco",
  universeAppearances: ["2D Universe", "3D Universe", "HD Universe"],
  games: ["GTA 1", "GTA: San Andreas", "GTA V", "GTA Online"],
  description: "Na era 3D, San Andreas vira um estado com Los Santos, San Fierro e Las Venturas. Na era HD, o nome cobre Los Santos e Blaine County.",
  districts: ["Los Santos", "San Fierro", "Las Venturas", "Red County", "Flint County", "Bone County", "Blaine County"],
  factions: ["Grove Street Families", "Ballas", "Vagos", "Aztecas", "Triads", "Rifa", "Da Nang Boys", "FIB", "IAA"],
  importantEvents: ["morte de Beverly Johnson", "queda de Tenpenny", "assaltos de GTA V", "crescimento de GTA Online"],
  characters: ["CJ", "Sweet", "Cesar", "Woozie", "Michael", "Franklin", "Trevor"],
  visualStyle: "Costa ensolarada, bairros de gangue, colinas, deserto, cassinos, pontes e interior rural.",
  themes: ["gangues", "familia", "territorio", "desigualdade", "entretenimento"]
}, {
  id: "los-santos",
  name: "Los Santos",
  realWorldInspiration: "Los Angeles",
  universeAppearances: ["3D Universe", "HD Universe"],
  games: ["GTA: San Andreas", "GTA V", "GTA Online"],
  description: "Cidade do sonho vendido: celebridades, midia, gangues, riqueza extrema, industria do entretenimento e desigualdade brutal.",
  districts: ["Ganton", "Idlewood", "Vinewood", "Downtown", "Rockford Hills", "Vespucci", "Del Perro", "South Los Santos"],
  factions: ["Families", "Ballas", "Vagos", "Madrazo Cartel", "FIB", "IAA", "Merryweather", "organizações de jogadores"],
  importantEvents: ["reconquista de Grove Street", "assaltos de GTA V", "The Contract", "Doomsday Heist", "Diamond Casino"],
  characters: ["CJ", "Franklin", "Michael", "Trevor", "Lamar", "Lester"],
  visualStyle: "Sol duro, outdoors, freeways, palmeiras, mansoes, estudios, grafite e sirenes.",
  themes: ["celebridade", "midia", "gangues", "riqueza", "desigualdade"]
}, {
  id: "san-fierro",
  name: "San Fierro",
  realWorldInspiration: "San Francisco",
  universeAppearances: ["3D Universe"],
  games: ["GTA: San Andreas"],
  description: "Cidade de colinas, pontes, garagens e contracultura, onde CJ reconstrói poder depois da queda em Los Santos.",
  districts: ["Doherty", "Chinatown", "Hashbury", "Downtown", "Easter Basin", "Garver Bridge"],
  factions: ["Triads", "San Fierro Rifa", "Da Nang Boys", "Loco Syndicate"],
  importantEvents: ["desmonte do Loco Syndicate", "aliança com Woozie", "garagem de CJ"],
  characters: ["CJ", "Cesar", "Woozie", "Jizzy B", "T-Bone Mendez", "Zero"],
  visualStyle: "Neblina, ladeiras, pontes vermelhas, oficinas, Chinatown e docas.",
  themes: ["contracultura", "tecnologia", "garagens", "crime asiatico"]
}, {
  id: "las-venturas",
  name: "Las Venturas",
  realWorldInspiration: "Las Vegas",
  universeAppearances: ["3D Universe"],
  games: ["GTA: San Andreas"],
  description: "Cassinos, deserto e mafia. Las Venturas mostra a versao corporativa e espetacular do crime.",
  districts: ["The Strip", "Old Venturas Strip", "Caligula's Palace", "Four Dragons Casino", "Redsands", "Prickle Pine"],
  factions: ["Leone Family", "Sindacco Family", "Forelli Family", "Triads"],
  importantEvents: ["assalto ao Caligula's", "guerra de cassinos", "arco de Ken Rosenberg"],
  characters: ["CJ", "Woozie", "Ken Rosenberg", "Salvatore Leone", "Madd Dogg"],
  visualStyle: "Neon de cassino, placas gigantes, resorts, deserto e ruas largas.",
  themes: ["cassinos", "apostas", "máfia", "corrupcao"]
}, {
  id: "blaine-county",
  name: "Blaine County",
  realWorldInspiration: "Interior desertico do sul da California",
  universeAppearances: ["HD Universe"],
  games: ["GTA V", "GTA Online"],
  description: "Zona rural e desertica que contrasta com Los Santos: trailers, trafico, armas, seitas, conspiracoes e abandono economico.",
  districts: ["Sandy Shores", "Grapeseed", "Paleto Bay", "Mount Chiliad", "Alamo Sea", "Fort Zancudo"],
  factions: ["Trevor Philips Enterprises", "The Lost MC", "Altruist Cult", "Merryweather", "IAA/FIB operations"],
  importantEvents: ["ascensao de Trevor", "guerra contra Lost MC", "assaltos e operacoes de Online"],
  characters: ["Trevor", "Ron", "Wade", "Johnny Klebitz"],
  visualStyle: "Poeira, postos de gasolina, hangares, trailers, montanhas, lago salgado e sirenes distantes.",
  themes: ["trafico", "milicias", "pobreza", "contrabando", "caos rural"]
}, {
  id: "north-yankton",
  name: "North Yankton",
  realWorldInspiration: "Estados frios do norte dos EUA",
  universeAppearances: ["HD Universe"],
  games: ["GTA V"],
  description: "Local do prologo de GTA V. Pequena, fria e lembrada como cena do crime original entre Michael, Trevor, Brad e Dave.",
  districts: ["Ludendorff", "cemiterio", "banco local"],
  factions: ["equipe de Michael", "FIB por meio de Dave Norton", "policia local"],
  importantEvents: ["assalto de 2004", "morte/sepultamento de Brad", "retorno de Michael e Trevor"],
  characters: ["Michael", "Trevor", "Brad", "Dave Norton"],
  visualStyle: "Neve, bancos pequenos, estradas vazias, silencio e trauma congelado.",
  themes: ["passado", "traicao", "identidade falsa"]
}, {
  id: "anywhere-city",
  name: "Anywhere City",
  realWorldInspiration: "Cidade retrofuturista composta, sem equivalente unico",
  universeAppearances: ["2D Universe"],
  games: ["GTA 2"],
  description: "Ambiente distopico e estilizado de GTA 2, com zonas controladas por gangues de identidades exageradas.",
  districts: ["Downtown District", "Residential District", "Industrial District"],
  factions: ["Zaibatsu", "Loonies", "Yakuza", "Scientists", "Rednecks", "Russian Mafia", "Krishna"],
  importantEvents: ["guerras de reputacao de Claude Speed"],
  characters: ["Claude Speed"],
  visualStyle: "Retrofuturo, luzes frias, zonas industriais, humor absurdo e violencia arcade.",
  themes: ["distopia", "gangues", "corporacoes", "experimento"]
}, {
  id: "london",
  name: "London",
  realWorldInspiration: "Londres",
  universeAppearances: ["2D Universe"],
  games: ["GTA: London 1969", "GTA: London 1961"],
  description: "A rara cidade real da serie, usada em expansoes de epoca antes da franquia se fixar em analogos satiricos dos EUA.",
  districts: ["zonas estilizadas de Londres"],
  factions: ["gangues britanicas", "policia"],
  importantEvents: ["incursao internacional da era 2D"],
  characters: ["avatares selecionaveis"],
  visualStyle: "Carros britanicos, humor londrino, anos 60 e sinalizacao de epoca.",
  themes: ["crime britanico", "anos 60", "curiosidade historica"]
}, {
  id: "leonida",
  name: "Leonida",
  realWorldInspiration: "Florida",
  universeAppearances: ["HD Universe"],
  games: ["GTA VI"],
  description: "Estado de GTA VI, incluindo Vice City moderna. O material oficial enfatiza sol, crime, conspiracao estadual e dependencia entre Lucia e Jason.",
  districts: ["Vice City", "Leonida Keys", "areas de pantano", "praias", "estradas estaduais", "locais ainda nao confirmados"],
  factions: ["nao confirmado", "policia local", "redes criminosas modernas"],
  importantEvents: ["trama de Lucia e Jason em 2026"],
  characters: ["Lucia Caminos", "Jason Duval", "Cal Hampton", "Boobie Ike", "Dre'Quan Priest"],
  visualStyle: "Miami moderna, redes sociais, praias, pantanos, letreiros, rodovias e neon atualizado.",
  themes: ["redes sociais", "crime moderno", "cultura viral", "sátira da Florida", "casal criminoso"]
}];
const factionsData = [{
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}];
const developmentData = [{
  id: "dev-gta1",
  title: "GTA 1",
  period: "DMA Design / 1997",
  summary: "Nasce da mudanca de foco de Race'n'Chase para crime urbano livre. Top-down, radios, policia e caos viram a base da franquia.",
  facts: ["Criado na DMA Design.", "Associado a David Jones e Mike Dailly.", "A liberdade sistemica foi mais importante que uma trama fechada."],
  uncertainty: ["Race'n'Chase era um projeto da DMA Design com foco original em corridas, perseguicoes policiais e multiplayer; o DNA de GTA surge quando a equipe percebe que liberdade, colisao e caos urbano eram mais fortes que uma corrida linear.", "Documentos e relatos citam janelas internas de 1995-1996 e plataformas planejadas que mudaram bastante; trate essas datas como fase de prototipo, nao como lancamento publico.", "David Jones e Mike Dailly sao centrais na origem, mas o primeiro GTA nasce como producao coletiva da DMA Design. A formula de 'dois criadores' simplifica uma equipe maior.", "Liberty City, Vice City e San Andreas ja aparecem em 1997, mas ainda sem a geografia, continuidade e densidade narrativa que ganhariam nas eras 3D e HD."],
  sources: [{
    label: "Grand Theft Wiki - Race'n'Chase",
    url: "https://www.grandtheftwiki.com/Race%27n%27Chase"
  }, {
    label: "GTA Wiki - Race'n'Chase Engine",
    url: "https://gta.fandom.com/wiki/Race%27n%27Chase_Game_Engine"
  }]
}, {
  id: "dev-gta3",
  title: "GTA III",
  period: "Virada 3D / 2001",
  summary: "Transforma GTA em cidade 3D jogavel em terceira pessoa, com missoes dubladas, radio e sistemas urbanos sobrepostos.",
  facts: ["Liberty City vira espaco tridimensional.", "Modelo influencia a industria inteira.", "A identidade moderna da franquia se consolida."],
  uncertainty: ["GTA III e o primeiro GTA principal em 3D e a primeira Liberty City plenamente navegavel em terceira pessoa; a base tecnica usa RenderWare.", "Nao inventou o mundo aberto. O marco foi combinar cidade 3D, veiculos, tiro, radio, dublagem, nivel de procurado e missoes cinematograficas em um sandbox urbano coeso.", "Fontes historicas registram um nucleo de desenvolvimento pequeno para padroes atuais, com a DMA Design em Edimburgo trabalhando de perto com a Rockstar em Nova York.", "Apos os ataques de 11 de setembro de 2001, Rockstar adiou o lancamento e revisou referencias sensiveis, incluindo viaturas, rota de aviao, dialogos/radio e capa norte-americana.", "Darkel foi cortado antes do lancamento; ligacoes diretas com 11/9 aparecem em especulacao de fas e devem ser marcadas como nao confirmadas."],
  sources: [{
    label: "GTA III - desenvolvimento",
    url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_III"
  }, {
    label: "GTA Wiki - GTA III",
    url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_III"
  }]
}, {
  id: "dev-vice",
  title: "Vice City",
  period: "Atmosfera / 2002",
  summary: "Desenvolvimento rapido apos GTA III. A ideia cresceu de expansao/mission pack para jogo completo com protagonista falante e identidade de anos 80.",
  facts: ["Inspiracao forte em cinema criminal dos anos 80.", "Trilha sonora licenciada virou parte da experiencia.", "Tommy Vercetti cria um centro narrativo mais definido."],
  uncertainty: ["Relatos de desenvolvimento indicam que a equipe discutiu um mission pack para GTA III antes do escopo crescer para um jogo completo.", "O ciclo foi curto: producao plena no inicio de 2002 e lancamento no fim do mesmo ano. Por isso Vice City reaproveita a base tecnica de GTA III enquanto muda tom, cidade e protagonista.", "A escolha de 1986 e de uma Miami ficcional permitiu satirizar uma epoca historica, em contraste com a Liberty City contemporanea de GTA III.", "Tommy Vercetti, com voz e personalidade explicita, muda o centro narrativo depois do silencio de Claude.", "Scarface, Miami Vice e o cinema policial dos anos 80 sao inspiracoes culturais amplas; nao equivalem a adaptacao direta cena a cena."],
  sources: [{
    label: "Vice City - desenvolvimento",
    url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto:_Vice_City"
  }, {
    label: "GTA Wiki - Vice City",
    url: "https://gta.fandom.com/wiki/Grand_Theft_Auto:_Vice_City"
  }]
}, {
  id: "dev-sa",
  title: "San Andreas",
  period: "Escala maxima da era 3D / 2004",
  summary: "Expande a formula com tres cidades, campo, deserto, customizacao, habilidades, territorio, academias e aviação.",
  facts: ["Mapa muito maior que entradas anteriores.", "RPG leve e customizacao corporal.", "Temas de gangues, familia e corrupcao policial."],
  uncertainty: ["San Andreas muda de sentido dentro da serie: na era 2D era uma cidade inspirada em San Francisco; em 2004 vira um estado com Los Santos, San Fierro, Las Venturas, interior e deserto.", "Sistemas de corpo, habilidade, respeito, territorios e customizacao aproximam o jogo de um RPG leve, mas a estrutura central continua sendo acao-aventura em mundo aberto.", "Gangues, rap, disturbios urbanos, corrupcao policial e crise social ecoam a Costa Oeste dos anos 1990; personagens e eventos seguem ficcionalizados.", "Hot Coffee e fato documentado: conteudo inacessivel no disco foi reativado por mod, levou a reclassificacao AO pela ESRB e a patch/reedicao posterior.", "A controversia pertence ao desenvolvimento, distribuicao e classificacao real do jogo; nao faz parte da cronologia da historia de CJ."],
  sources: [{
    label: "ESRB - Hot Coffee",
    url: "https://www.esrb.org/blog/esrb-concludes-investigation-into-grand-theft-auto-san-andreas-revokes-m-mature-rating/"
  }, {
    label: "FTC - acordo Take-Two/Rockstar",
    url: "https://www.ftc.gov/news-events/news/press-releases/2006/06/makers-grand-theft-auto-san-andreas-settle-ftc-charges"
  }, {
    label: "GTA Wiki - San Andreas",
    url: "https://gta.fandom.com/wiki/Grand_Theft_Auto:_San_Andreas"
  }]
}, {
  id: "dev-gta4",
  title: "GTA IV",
  period: "Era HD / 2008",
  summary: "Entrada na era RAGE/HD, com Liberty City mais realista, fisica Euphoria e narrativa mais sombria.",
  facts: ["Reboot de continuidade.", "Tom dramatico e noir.", "Foco em imigracao, trauma e capitalismo."],
  uncertainty: ["GTA IV inaugura o HD Universe: marcas e ecos retornam, mas a continuidade principal nao e a mesma da era 3D.", "A troca para RAGE com Euphoria/NaturalMotion altera fisica, animacao procedural, reacoes corporais e densidade urbana em relacao aos GTA de RenderWare.", "O desenvolvimento passa a operar em escala global, com Rockstar North como nucleo e outros estudios Rockstar contribuindo em areas tecnicas, arte, audio e QA.", "Niko e apresentado como veterano dos Balcas/Leste Europeu; a nacionalidade exata fica ambigua no jogo. 'Servio' e leitura comum de fas, nao confirmacao textual absoluta.", "The Lost and Damned e The Ballad of Gay Tony cruzam eventos, personagens e a trama dos diamantes; a melhor leitura e de arcos paralelos na mesma Liberty City de 2008."],
  sources: [{
    label: "GTA Wiki - GTA IV features",
    url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_IV/Features"
  }, {
    label: "GTA IV - desenvolvimento",
    url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_IV"
  }]
}, {
  id: "dev-gtav",
  title: "GTA V",
  period: "Fenomeno global / 2013",
  summary: "Tres protagonistas jogaveis, assaltos planejados e Los Santos/Blaine County em escala massiva. GTA Online nasce do mesmo ecossistema.",
  facts: ["Michael, Franklin e Trevor alternam perspectiva.", "Assaltos estruturam a campanha.", "GTA Online transformou o ciclo de vida do jogo."],
  uncertainty: ["A estrutura de tres protagonistas foi objetivo de design arriscado; fontes indicam que ideias parecidas existiam antes, mas o hardware da era San Andreas nao sustentava esse modelo.", "O foco em assaltos foi reforcado pela recepcao positiva de Three Leaf Clover em GTA IV e pela vontade de fazer planejamento criminal virar eixo de campanha.", "A producao envolveu cerca de mil pessoas no ecossistema Rockstar, mas orcamento, marketing e receita aparecem em fontes publicas como estimativas ou recortes financeiros.", "GTA Online lancou duas semanas depois de GTA V e virou plataforma persistente; sua cronologia conversa com a campanha, mas atualizacoes posteriores funcionam como continuidade viva e elastica.", "A Opcao C/Deathwish e geralmente tratada como final canonico por GTA Online e referencias posteriores, mas o single-player ainda preserva finais alternativos como escolhas do jogador."],
  sources: [{
    label: "GTA V - desenvolvimento",
    url: "https://en.wikipedia.org/wiki/Development_of_Grand_Theft_Auto_V"
  }, {
    label: "GTA Wiki - GTA V development",
    url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_V/Development"
  }, {
    label: "GTA Online - GTA Wiki",
    url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_Online"
  }]
}, {
  id: "dev-gtavi",
  title: "GTA VI",
  period: "Proximo capitulo / 2026",
  summary: "A Rockstar apresenta Leonida e Vice City moderna, com Lucia e Jason como dupla central. Data oficial atual: 19 de novembro de 2026.",
  facts: ["Ambientado no estado de Leonida.", "Vice City retorna.", "Lucia e Jason sao protagonistas.", "PS5 e Xbox Series X|S confirmados."],
  uncertainty: ["Confirmado oficialmente: data atual de 19 de novembro de 2026, plataformas PS5 e Xbox Series X|S, estado de Leonida, Vice City, Lucia Caminos e Jason Duval.", "A pagina oficial descreve Jason com passado no Exercito e trabalho com traficantes locais nas Keys; Lucia saiu da Penitenciaria de Leonida depois de lutar pela familia.", "A sinopse oficial fala em um servico simples que da errado e empurra a dupla para uma conspiracao criminal em Leonida.", "Antagonistas centrais, estrutura de missoes, mapa completo, versao de PC, expansoes e futuro de GTA Online seguem nao confirmados.", "Trailers e pagina oficial indicam redes sociais, cultura viral, praias, pantanos, vida noturna e crime moderno; leituras de casal criminoso tipo Bonnie and Clyde e satira da Florida ainda sao interpretacoes ate o lancamento."],
  sources: [{
    label: "Rockstar - GTA VI",
    url: "https://www.rockstargames.com/VI"
  }, {
    label: "Newswire - nova data",
    url: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026"
  }]
}];
const onlineTimelineData = [{
  year: "2013",
  title: "Lançamento",
  theme: "corridas, deathmatches, apartamentos, contatos e primeiros trabalhos"
}, {
  year: "2015",
  title: "Heists",
  theme: "assaltos cooperativos estruturados, com planejamento e finais de alta recompensa"
}, {
  year: "2016",
  title: "Executives, Further Adventures e Bikers",
  theme: "CEOs, armazens, contrabando e motoclubes"
}, {
  year: "2017",
  title: "Gunrunning e Doomsday Heist",
  theme: "bunkers, pesquisa de armas e guerra tecnologica com agencias"
}, {
  year: "2018",
  title: "After Hours",
  theme: "nightclubs, Tony Prince e renda passiva conectada a negocios"
}, {
  year: "2019",
  title: "Diamond Casino & Resort / Casino Heist",
  theme: "luxo, Duggans, cassino e um dos assaltos centrais"
}, {
  year: "2020",
  title: "The Cayo Perico Heist",
  theme: "ilha privada de El Rubio e assalto jogavel solo ou em equipe"
}, {
  year: "2021",
  title: "The Contract",
  theme: "Franklin adulto, Agency, Dr. Dre e contratos VIP"
}, {
  year: "2022-2023",
  title: "Los Santos Drug Wars",
  theme: "Dax, Fooliganz, laboratorios e acido"
}, {
  year: "2023",
  title: "San Andreas Mercenaries",
  theme: "operações aereas contra Merryweather e carreira militar privada"
}, {
  year: "2025",
  title: "Money Fronts",
  theme: "lavagem de dinheiro por negocios de fachada, incluindo car wash e outras frentes"
}, {
  year: "2025",
  title: "A Safehouse in the Hills",
  theme: "safehouse high-end, contratos e novas rotas de carreira criminal nas colinas"
}, {
  year: "continuo",
  title: "Carreira e economia",
  theme: "balancos, GTA+, veiculos, criador de missoes, eventos e rotacao semanal"
}];
const onlineDlcData = [{
  id: "beach-bum",
  title: "Beach Bum Update",
  releaseDate: "19 de novembro de 2013",
  year: "2013",
  type: "Conteudo gratuito",
  era: "Base inicial",
  summary: "Primeiro pacote grande de GTA Online, voltado para praia, lazer e atividades leves em Los Santos.",
  brought: ["novos veiculos de praia", "armas SNS Pistol e Broken Bottle", "roupas e tatuagens praianas", "novos jobs de corrida, deathmatch e parachuting"],
  systems: ["expansao do catalogo inicial"],
  vehicles: ["BF Bifta", "Canis Kalahari", "Bravado Paradise", "Speeder"],
  modes: ["jobs de praia", "corridas", "deathmatches"],
  characters: ["jogador online"],
  impact: "Mostrou o modelo de GTA Online como plataforma expansivel por updates gratuitos.",
  tags: ["2013", "veiculos", "armas", "inicio"],
  sourcePage: "Beach Bum Update"
}, {
  id: "deathmatch-race-creators",
  title: "Deathmatch & Race Creators Update",
  releaseDate: "11 de dezembro de 2013",
  year: "2013",
  type: "Ferramentas de criacao",
  era: "Base inicial",
  summary: "Liberou criadores para jogadores publicarem corridas e deathmatches proprios.",
  brought: ["criador de corridas", "criador de deathmatches", "conteudo verificado pela Rockstar", "base para comunidade produzir jobs"],
  systems: ["Content Creator"],
  vehicles: [],
  modes: ["races", "deathmatches", "jobs criados pela comunidade"],
  characters: ["criadores da comunidade"],
  impact: "Foi o primeiro passo para transformar a comunidade em fonte constante de atividades.",
  tags: ["criador", "corridas", "deathmatch"],
  sourcePage: "Deathmatch & Race Creators Update"
}, {
  id: "capture",
  title: "Capture Update",
  releaseDate: "18 de dezembro de 2013",
  year: "2013",
  type: "Modo competitivo",
  era: "Base inicial",
  summary: "Adicionou Capture, variacao de capture-the-flag adaptada ao caos de GTA Online.",
  brought: ["modo Capture", "variantes Contend, GTA, Hold e Raid", "novos jobs competitivos", "foco em equipes e objetivos"],
  systems: ["Capture Jobs"],
  vehicles: [],
  modes: ["Capture"],
  characters: ["jogador online"],
  impact: "Ampliou o lado competitivo antes dos grandes negocios e heists.",
  tags: ["modo", "pvp", "equipes"],
  sourcePage: "Capture Update"
}, {
  id: "holiday-gifts",
  title: "Holiday Gifts",
  releaseDate: "24 de dezembro de 2013",
  year: "2013",
  type: "Evento sazonal",
  era: "Base inicial",
  summary: "Primeiro evento natalino, com neve temporaria, roupas festivas e itens sazonais.",
  brought: ["neve em Los Santos", "roupas natalinas", "mascaras e itens festivos", "recompensas de fim de ano"],
  systems: ["eventos sazonais"],
  vehicles: [],
  modes: ["atividades livres com tema natalino"],
  characters: ["jogador online"],
  impact: "Estabeleceu a tradicao de eventos temporarios e clima sazonal.",
  tags: ["evento", "natal", "sazonal"],
  sourcePage: "Holiday Gifts"
}, {
  id: "valentines-day-massacre",
  title: "The Valentine's Day Massacre Special",
  releaseDate: "13 de fevereiro de 2014",
  year: "2014",
  type: "Evento tematico",
  era: "Base inicial",
  summary: "Pacote inspirado em crime dos anos 1920/1930, com carro classico, roupas e a Gusenberg Sweeper.",
  brought: ["Albany Roosevelt", "Gusenberg Sweeper", "roupas de gangster", "jobs tematicos"],
  systems: ["conteudo de tempo limitado no lancamento"],
  vehicles: ["Albany Roosevelt"],
  modes: ["jobs tematicos"],
  characters: ["jogador online"],
  impact: "Introduziu a ideia de updates como fantasia estetica especifica.",
  tags: ["evento", "armas", "veiculos", "retro"],
  sourcePage: "The Valentine's Day Massacre Special"
}, {
  id: "business",
  title: "The Business Update",
  releaseDate: "4 de marco de 2014",
  year: "2014",
  type: "Conteudo de luxo",
  era: "Base inicial",
  summary: "Adicionou visual executivo inicial: veiculos esportivos, jato, arma e roupas de negocios.",
  brought: ["Dinka Jester", "Grotti Turismo R", "Albany Alpha", "Vestra", "Heavy Pistol", "Special Carbine", "roupas executivas"],
  systems: ["catalogo de luxo"],
  vehicles: ["Jester", "Turismo R", "Alpha", "Vestra"],
  modes: ["jobs adicionais"],
  characters: ["jogador online"],
  impact: "Antecipou o tema CEO que so ficaria pleno em 2015 e 2016.",
  tags: ["veiculos", "armas", "luxo"],
  sourcePage: "The Business Update"
}, {
  id: "high-life",
  title: "The High Life Update",
  releaseDate: "13 de maio de 2014",
  year: "2014",
  type: "Apartamentos e luxo",
  era: "Base inicial",
  summary: "Focou em vida de alto padrao, apartamentos adicionais e veiculos premium.",
  brought: ["apartamentos high-end adicionais", "possibilidade de possuir mais propriedades", "Dewbauchee Massacro", "Pegassi Zentorno", "Bullpup Rifle", "Mental State"],
  systems: ["multi-propriedades", "Mental State"],
  vehicles: ["Massacro", "Zentorno", "Huntley S", "Thrust"],
  modes: ["novos jobs"],
  characters: ["jogador online"],
  impact: "Comecou a transformar progresso em patrimonio visivel.",
  tags: ["propriedades", "veiculos", "luxo"],
  sourcePage: "The High Life Update"
}, {
  id: "hipster",
  title: "The I'm Not a Hipster Update",
  releaseDate: "17 de junho de 2014",
  year: "2014",
  type: "Estilo urbano",
  era: "Base inicial",
  summary: "Satirizou moda alternativa de Los Santos com carros compactos, roupas e armas.",
  brought: ["veiculos compactos e classicos", "Vintage Pistol", "Antique Cavalry Dagger", "roupas hipster", "novos jobs"],
  systems: ["customizacao estetica"],
  vehicles: ["Glendale", "Warrener", "Rhapsody", "Panto", "Pigalle", "Blade"],
  modes: ["jobs adicionais"],
  characters: ["jogador online"],
  impact: "Reforcou GTA Online como vitrine de subculturas e satira urbana.",
  tags: ["moda", "veiculos", "satira"],
  sourcePage: "The \"I'm Not a Hipster\" Update"
}, {
  id: "independence-day",
  title: "The Independence Day Special",
  releaseDate: "1 de julho de 2014",
  year: "2014",
  type: "Evento sazonal",
  era: "Base inicial",
  summary: "Pacote patriotico dos EUA com monster truck, moto, armas e fogos.",
  brought: ["Vapid Liberator", "Western Sovereign", "Musket", "Firework Launcher", "roupas patrioticas", "propriedades decoradas"],
  systems: ["conteudo sazonal de 4 de julho"],
  vehicles: ["Liberator", "Sovereign"],
  modes: ["jobs tematicos"],
  characters: ["jogador online"],
  impact: "Virou modelo para eventos patrioticos e retornos temporarios anuais.",
  tags: ["evento", "armas", "veiculos"],
  sourcePage: "The Independence Day Special"
}, {
  id: "flight-school",
  title: "The San Andreas Flight School Update",
  releaseDate: "19 de agosto de 2014",
  year: "2014",
  type: "Aviacao",
  era: "Base inicial",
  summary: "Expandiu atividades aereas com escola de voo, aeronaves e paraquedas.",
  brought: ["San Andreas Flight School", "Besra", "Miljet", "Swift", "paraquedas e roupas de piloto", "novos jobs aereos"],
  systems: ["escola de voo", "desafios aereos"],
  vehicles: ["Besra", "Miljet", "Swift"],
  modes: ["corridas aereas", "desafios de voo"],
  characters: ["jogador online"],
  impact: "Deu peso ao espaco aereo antes de Smuggler's Run.",
  tags: ["aeronaves", "escola", "jobs"],
  sourcePage: "The San Andreas Flight School Update"
}, {
  id: "last-team-standing",
  title: "The Last Team Standing Update",
  releaseDate: "2 de outubro de 2014",
  year: "2014",
  type: "Modo competitivo",
  era: "Base inicial",
  summary: "Refinou combates por equipes com novas armas, veiculos e jobs LTS.",
  brought: ["novos Last Team Standing Jobs", "Heavy Shotgun", "Marksman Rifle", "Lampadati Furore GT", "roupas taticas"],
  systems: ["Last Team Standing"],
  vehicles: ["Furore GT"],
  modes: ["Last Team Standing"],
  characters: ["jogador online"],
  impact: "Fortaleceu PvP organizado antes da era de negocios.",
  tags: ["pvp", "armas", "equipes"],
  sourcePage: "The Last Team Standing Update"
}, {
  id: "festive-surprise-2014",
  title: "Festive Surprise",
  releaseDate: "18 de dezembro de 2014",
  year: "2014",
  type: "Evento sazonal",
  era: "Base inicial",
  summary: "Evento natalino maior, com neve, roupas, armas festivas e veiculos.",
  brought: ["neve temporaria", "Homing Launcher", "Proximity Mines", "Vapid Slamvan", "Bravado Rat-Truck", "roupas e mascaras natalinas"],
  systems: ["evento de fim de ano"],
  vehicles: ["Slamvan", "Rat-Truck"],
  modes: ["jobs sazonais"],
  characters: ["jogador online"],
  impact: "Consolidou o ciclo anual de eventos sazonais.",
  tags: ["natal", "armas", "veiculos"],
  sourcePage: "Festive Surprise"
}, {
  id: "heists",
  title: "Heists Update",
  releaseDate: "10 de marco de 2015",
  year: "2015",
  type: "Assaltos cooperativos",
  era: "Era dos heists",
  summary: "Primeiro grande salto estrutural: assaltos cooperativos com planejamento, setups, finais e funcoes de equipe.",
  brought: ["Fleeca Job", "Prison Break", "Humane Labs Raid", "Series A Funding", "Pacific Standard Job", "apartamento high-end como sala de planejamento", "novos veiculos, roupas e equipamentos"],
  systems: ["heists cooperativos", "setups", "finales", "papel de lider do assalto"],
  vehicles: ["Kuruma", "Insurgent", "Hydra", "Savage", "Mule", "Lectro"],
  modes: ["heists", "adversary modes"],
  characters: ["Lester Crest", "Agent 14", "Trevor Philips", "Ron Jakowski", "Paige Harris"],
  impact: "Transformou GTA Online de sandbox competitivo em carreira criminal cooperativa.",
  tags: ["heist", "cooperativo", "Lester"],
  sourcePage: "Heists Update"
}, {
  id: "ill-gotten-gains-1",
  title: "Ill-Gotten Gains Part 1",
  releaseDate: "10 de junho de 2015",
  year: "2015",
  type: "Luxo e consumo",
  era: "Pos-heists",
  summary: "Pacote de ostentacao para gastar dinheiro dos heists: supercarros, aeronaves, armas e roupas caras.",
  brought: ["veiculos de luxo", "armas douradas", "roupas premium", "acessorios e itens de status"],
  systems: ["catalogo de luxo"],
  vehicles: ["Pegassi Osiris", "Benefactor Stirling GT", "Enus Windsor", "Albany Virgo", "Luxor Deluxe", "Swift Deluxe"],
  modes: ["jobs adicionais"],
  characters: ["jogador online"],
  impact: "Cristalizou a economia de status de GTA Online.",
  tags: ["luxo", "veiculos", "dinheiro"],
  sourcePage: "Ill-Gotten Gains Part 1"
}, {
  id: "ill-gotten-gains-2",
  title: "Ill-Gotten Gains Part 2",
  releaseDate: "8 de julho de 2015",
  year: "2015",
  type: "Luxo e combate",
  era: "Pos-heists",
  summary: "Continuacao do pacote de ostentacao com novos veiculos, armas e itens para a elite criminosa.",
  brought: ["novos veiculos", "Marksman Pistol", "Knuckle Dusters", "roupas e joias", "novos jobs"],
  systems: ["catalogo de luxo"],
  vehicles: ["Coil Brawler", "Progen T20", "Vapid Chino", "Dinka Vindicator", "Invetero Coquette BlackFin"],
  modes: ["jobs adicionais"],
  characters: ["jogador online"],
  impact: "Manteve o ciclo de consumo depois dos heists.",
  tags: ["luxo", "armas", "veiculos"],
  sourcePage: "Ill-Gotten Gains Part 2"
}, {
  id: "freemode-events",
  title: "Freemode Events Update",
  releaseDate: "15 de setembro de 2015",
  year: "2015",
  type: "Mundo aberto",
  era: "Freemode",
  summary: "Introduziu eventos dinamicos no mapa livre, sem lobby, com competicoes surgindo durante a sessao.",
  brought: ["Freemode Events", "Freemode Challenges", "Hunt the Beast", "King of the Castle", "Penned In", "novos modos adversarios"],
  systems: ["eventos sem lobby", "atividades de sessao"],
  vehicles: [],
  modes: ["Freemode Events", "Adversary Modes"],
  characters: ["jogador online"],
  impact: "Fez Los Santos parecer mais vivo entre missoes formais.",
  tags: ["freemode", "eventos", "pvp"],
  sourcePage: "Freemode Events Update"
}, {
  id: "lowriders",
  title: "GTA Online: Lowriders",
  releaseDate: "20 de outubro de 2015",
  year: "2015",
  type: "Customizacao e missoes",
  era: "Cultura automotiva",
  summary: "Abriu a Benny's Original Motor Works e aprofundou a customizacao de lowriders.",
  brought: ["Benny's Original Motor Works", "customizacoes hydraulics", "interiores e audio", "novas missoes de Lamar", "roupas e armas"],
  systems: ["Benny's", "customizacao avancada"],
  vehicles: ["Voodoo Custom", "Faction Custom", "Moonbeam Custom", "Primo Custom", "Chino Custom", "Buccaneer Custom"],
  modes: ["missoes de Lamar"],
  characters: ["Lamar Davis", "Benny"],
  impact: "Criou um dos pilares de customizacao automotiva do Online.",
  tags: ["Benny's", "carros", "Lamar"],
  sourcePage: "GTA Online: Lowriders"
}, {
  id: "halloween-surprise",
  title: "Halloween Surprise",
  releaseDate: "29 de outubro de 2015",
  year: "2015",
  type: "Evento sazonal",
  era: "Eventos",
  summary: "Evento de Halloween com veiculos funebres, armas e modos adversarios sombrios.",
  brought: ["Albany Lurcher", "Franken Stange", "Flashlight", "mascaras de Halloween", "Slasher Adversary Mode"],
  systems: ["evento de Halloween"],
  vehicles: ["Lurcher", "Franken Stange"],
  modes: ["Slasher"],
  characters: ["jogador online"],
  impact: "Inaugurou uma das tradicoes sazonais mais reconheciveis do Online.",
  tags: ["Halloween", "evento", "modo adversario"],
  sourcePage: "Halloween Surprise"
}, {
  id: "executives-other-criminals",
  title: "Executives and Other Criminals",
  releaseDate: "15 de dezembro de 2015",
  year: "2015",
  type: "Organizacoes VIP",
  era: "Negocios",
  summary: "Introduziu o estilo CEO/VIP inicial, iates e estrutura de guarda-costas.",
  brought: ["sistema VIP e bodyguards", "super yachts", "apartamentos stilt", "novos veiculos armados e de luxo", "Extraction Adversary Mode"],
  systems: ["VIP Organizations", "Bodyguards", "Yachts"],
  vehicles: ["Turreted Limo", "Schafter V12", "Cognoscenti", "SuperVolito", "Tampa"],
  modes: ["VIP Work", "Extraction"],
  characters: ["jogador online"],
  impact: "Foi a semente direta dos negocios CEO que viriam em Finance and Felony.",
  tags: ["VIP", "iates", "organizacoes"],
  sourcePage: "GTA Online: Executives and Other Criminals"
}, {
  id: "festive-surprise-2015",
  title: "Festive Surprise 2015",
  releaseDate: "21 de dezembro de 2015",
  year: "2015",
  type: "Evento sazonal",
  era: "Eventos",
  summary: "Novo pacote natalino com neve, roupas, carros e retorno de itens festivos.",
  brought: ["neve", "Declasse Tampa", "roupas e mascaras de Natal", "itens sazonais", "retorno de conteudos festivos"],
  systems: ["evento de fim de ano"],
  vehicles: ["Declasse Tampa"],
  modes: ["jobs sazonais"],
  characters: ["jogador online"],
  impact: "Reforcou a rotina anual de eventos e itens temporarios.",
  tags: ["natal", "evento", "veiculos"],
  sourcePage: "Festive Surprise 2015"
}, {
  id: "january-2016",
  title: "January 2016 Update",
  releaseDate: "28 de janeiro de 2016",
  year: "2016",
  type: "Modos e veiculos",
  era: "Adversary modes",
  summary: "Update menor que trouxe novos veiculos de Benny's/mercado e o modo Drop Zone.",
  brought: ["Drop Zone Adversary Mode", "Karin Sultan RS", "Bravado Banshee 900R", "novas opcoes de customizacao"],
  systems: ["Adversary Mode", "Benny's"],
  vehicles: ["Sultan RS", "Banshee 900R"],
  modes: ["Drop Zone"],
  characters: ["jogador online"],
  impact: "Manteve o ritmo de conteudo entre grandes pacotes.",
  tags: ["Benny's", "modo adversario", "carros"],
  sourcePage: "January 2016 Update"
}, {
  id: "be-my-valentine",
  title: "GTA Online: Be My Valentine",
  releaseDate: "10 de fevereiro de 2016",
  year: "2016",
  type: "Evento tematico",
  era: "Eventos",
  summary: "Revisitou o tema Valentine's com Roosevelt Valor, roupas e Till Death Do Us Part.",
  brought: ["Albany Roosevelt Valor", "roupas vintage", "retorno de itens do Valentine's anterior", "Till Death Do Us Part"],
  systems: ["evento tematico"],
  vehicles: ["Roosevelt Valor"],
  modes: ["Till Death Do Us Part"],
  characters: ["jogador online"],
  impact: "Mostrou como updates antigos poderiam voltar em versao expandida.",
  tags: ["evento", "retro", "modo adversario"],
  sourcePage: "GTA Online: Be My Valentine"
}, {
  id: "lowriders-custom-classics",
  title: "GTA Online: Lowriders: Custom Classics",
  releaseDate: "15 de marco de 2016",
  year: "2016",
  type: "Customizacao",
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
}, {
  id: "finance-felony",
  title: "Further Adventures in Finance and Felony",
  releaseDate: "7 de junho de 2016",
  year: "2016",
  type: "Negocios CEO",
  era: "Negocios",
  summary: "Transformou VIP em CEO permanente, com escritorios, armazens e contrabando de carga.",
  brought: ["escritorios executivos", "SecuroServ CEO", "Special Cargo", "warehouses", "novos VIP/CEO work", "veiculos executivos"],
  systems: ["CEO", "Special Cargo", "warehouses", "assistente executiva"],
  vehicles: ["Pegassi Reaper", "Vapid FMJ", "Benefactor XLS", "Bravado Rumpo Custom", "Brickade"],
  modes: ["CEO Work", "Special Cargo sales"],
  characters: ["Assistente do escritorio"],
  impact: "Criou o primeiro loop robusto de grind empresarial de GTA Online.",
  tags: ["CEO", "carga", "escritorio", "negocios"],
  sourcePage: "GTA Online: Further Adventures in Finance and Felony"
}, {
  id: "cunning-stunts",
  title: "GTA Online: Cunning Stunts",
  releaseDate: "12 de julho de 2016",
  year: "2016",
  type: "Corridas stunt",
  era: "Corridas",
  summary: "Reinventou corridas com pistas irreais, tubos, rampas e objetos stunt.",
  brought: ["Stunt Races", "criador stunt depois expandido", "veiculos esportivos e motos", "roupas de corrida"],
  systems: ["Stunt Races", "Stunt Props"],
  vehicles: ["RE-7B", "ETR1", "Tyrus", "Omnis", "Trophy Truck", "Cliffhanger"],
  modes: ["Stunt Races", "Premium Races"],
  characters: ["jogador online"],
  impact: "Criou uma linguagem propria para corridas arcade dentro de GTA Online.",
  tags: ["corridas", "stunt", "veiculos"],
  sourcePage: "GTA Online: Cunning Stunts"
}, {
  id: "bikers",
  title: "GTA Online: Bikers",
  releaseDate: "4 de outubro de 2016",
  year: "2016",
  type: "Motoclubes e negocios",
  era: "Negocios",
  summary: "Adicionou clubes de moto, hierarquia MC e negocios de producao ilegal.",
  brought: ["clubhouses", "MC President", "cargos de motoclube", "negocios de cocaine, meth, weed, counterfeit cash e document forgery", "novas motos"],
  systems: ["Motorcycle Clubs", "MC Businesses", "contracts"],
  vehicles: ["Hakuchou Drag", "Nightblade", "Avarus", "Zombie", "Daemon Custom", "Faggio Mod"],
  modes: ["Clubhouse Contracts", "MC Challenges"],
  characters: ["Malc", "LJT"],
  impact: "Deu ao jogador uma identidade criminal alternativa ao CEO.",
  tags: ["MC", "negocios", "motos"],
  sourcePage: "GTA Online: Bikers"
}, {
  id: "import-export",
  title: "GTA Online: Import/Export",
  releaseDate: "13 de dezembro de 2016",
  year: "2016",
  type: "Roubo de veiculos",
  era: "Negocios",
  summary: "Adicionou Vehicle Cargo, garagens de veiculos especiais e missoes com tecnologia exagerada.",
  brought: ["Vehicle Warehouses", "Vehicle Cargo", "Special Vehicle Work", "garagens de ate 60 veiculos", "veiculos especiais armados"],
  systems: ["Vehicle Cargo", "Special Vehicle Work"],
  vehicles: ["Ruiner 2000", "Rocket Voltic", "Phantom Wedge", "Ramp Buggy", "Technical Aqua", "Wastelander"],
  modes: ["steal/sell vehicles", "Special Vehicle missions"],
  characters: ["Assistente do escritorio"],
  impact: "Virou um dos loops mais populares de dinheiro solo/CEO.",
  tags: ["CEO", "carros", "veiculos especiais"],
  sourcePage: "GTA Online: Import/Export"
}, {
  id: "special-vehicle-circuit",
  title: "Cunning Stunts: Special Vehicle Circuit",
  releaseDate: "14 de marco de 2017",
  year: "2017",
  type: "Corridas especiais",
  era: "Corridas",
  summary: "Criou corridas dedicadas a veiculos especiais de Import/Export.",
  brought: ["Special Vehicle Races", "pistas para Ruiner 2000, Rocket Voltic e Blazer Aqua", "novos carros esportivos"],
  systems: ["Special Vehicle Circuit"],
  vehicles: ["Progen GP1", "Hijak Ruston", "Turismo Classic", "Infernus Classic"],
  modes: ["Special Vehicle Races"],
  characters: ["jogador online"],
  impact: "Amarrou corridas stunt aos veiculos especiais da economia CEO.",
  tags: ["corridas", "veiculos especiais"],
  sourcePage: "GTA Online: Cunning Stunts: Special Vehicle Circuit"
}, {
  id: "gunrunning",
  title: "GTA Online: Gunrunning",
  releaseDate: "13 de junho de 2017",
  year: "2017",
  type: "Bunkers e armas",
  era: "Negocios militares",
  summary: "Adicionou bunkers, pesquisa, fabricacao de armas e veiculos militarizados.",
  brought: ["bunkers", "Mobile Operations Center", "research", "weaponized vehicles", "Mk II weapon upgrades", "Gunrunning sell missions"],
  systems: ["Bunker Business", "Research", "MOC", "Mk II Weapons"],
  vehicles: ["APC", "Dune FAV", "Half-track", "Oppressor", "Weaponized Tampa", "Anti-Aircraft Trailer"],
  modes: ["Gunrunning sales", "Mobile Operations"],
  characters: ["Agent 14"],
  impact: "Mudou o equilibrio do Online ao colocar tecnologia militar no centro da economia.",
  tags: ["bunker", "armas", "militar", "Mk II"],
  sourcePage: "GTA Online: Gunrunning"
}, {
  id: "smugglers-run",
  title: "GTA Online: Smuggler's Run",
  releaseDate: "29 de agosto de 2017",
  year: "2017",
  type: "Contrabando aereo",
  era: "Negocios militares",
  summary: "Transformou hangares em negocios de carga aerea, com aeronaves customizaveis.",
  brought: ["hangars", "Air Freight Cargo", "aeronaves novas", "customizacao de aeronaves", "Adversary Modes aereos"],
  systems: ["Hangar Business", "Air Freight Cargo"],
  vehicles: ["Rogue", "Tula", "Mogul", "Molotok", "Nokota", "Hunter", "Pyro"],
  modes: ["Air Freight missions"],
  characters: ["Ron Jakowski"],
  impact: "Expandiu o mapa verticalmente e conectou Fort Zancudo ao progresso do jogador.",
  tags: ["hangar", "aeronaves", "contrabando"],
  sourcePage: "GTA Online: Smuggler's Run"
}, {
  id: "doomsday-heist",
  title: "GTA Online: The Doomsday Heist",
  releaseDate: "12 de dezembro de 2017",
  year: "2017",
  type: "Heist tecnologico",
  era: "Agencias e tecnologia",
  summary: "Assalto em tres atos com IAA, Avon Hertz, Clifford, bases subterraneas e ameaca de fim do mundo.",
  brought: ["Facilities", "Doomsday Heist Acts I-III", "prep missions em freemode", "Orbital Cannon", "Avenger", "veiculos futuristas"],
  systems: ["Facilities", "Doomsday Heist", "Orbital Cannon"],
  vehicles: ["Avenger", "Deluxo", "Stromberg", "Thruster", "Khanjali", "Chernobog"],
  modes: ["Doomsday Heist", "setups e preps"],
  characters: ["Lester Crest", "Agent 14", "Avon Hertz", "Clifford", "Bogdan", "ULP"],
  impact: "Levou GTA Online para ficcao de espionagem absurda e tecnologia de alto nivel.",
  tags: ["heist", "IAA", "Facility", "tecnologia"],
  sourcePage: "GTA Online: The Doomsday Heist"
}, {
  id: "southern-san-andreas-super-sport-series",
  title: "Southern San Andreas Super Sport Series",
  releaseDate: "20 de marco de 2018",
  year: "2018",
  type: "Corridas e modos",
  era: "Corridas",
  summary: "Serie de conteudos automotivos com Hotring Circuit, Target Assault e varios veiculos.",
  brought: ["Hotring Circuit", "Target Assault Races", "Transform Races adicionais", "novos carros e roupas"],
  systems: ["novas series de corrida"],
  vehicles: ["Hotring Sabre", "GB200", "Entity XXR", "Taipan", "Flash GT", "Issi Classic"],
  modes: ["Hotring Circuit", "Target Assault"],
  characters: ["jogador online"],
  impact: "Manteve o foco de corridas entre grandes expansoes de negocios.",
  tags: ["corridas", "carros", "Hotring"],
  sourcePage: "GTA Online: Southern San Andreas Super Sport Series"
}, {
  id: "after-hours",
  title: "GTA Online: After Hours",
  releaseDate: "24 de julho de 2018",
  year: "2018",
  type: "Nightclubs e renda passiva",
  era: "Negocios conectados",
  summary: "Trouxe Tony Prince de volta e fez nightclubs conectarem negocios anteriores em uma rede passiva.",
  brought: ["Nightclubs", "warehouse technicians", "DJs reais", "Terrorbyte", "Oppressor Mk II", "novas missoes de promocao"],
  systems: ["Nightclub Business", "Technicians", "Terrorbyte Client Jobs"],
  vehicles: ["Terrorbyte", "Oppressor Mk II", "Mule Custom", "Pounder Custom", "Stafford", "Swinger"],
  modes: ["club management", "business battles", "client jobs"],
  characters: ["Tony Prince", "Lazlow Jones", "Solomun", "Dixon", "Tale of Us", "The Black Madonna"],
  impact: "Unificou negocios antigos e virou uma das bases de renda passiva mais importantes.",
  tags: ["nightclub", "Tony Prince", "renda passiva"],
  sourcePage: "GTA Online: After Hours"
}, {
  id: "arena-war",
  title: "GTA Online: Arena War",
  releaseDate: "11 de dezembro de 2018",
  year: "2018",
  type: "Combate veicular",
  era: "Espetaculo",
  summary: "Adicionou Arena Workshop, ranking de arena e modos de combate veicular estilo show televisivo.",
  brought: ["Arena Workshop", "Arena Points", "veiculos Apocalypse, Future Shock e Nightmare", "modos Arena War"],
  systems: ["Arena Career", "Arena Workshop"],
  vehicles: ["Deathbike", "Sasquatch", "Imperator", "ZR380", "Bruiser", "Brutus"],
  modes: ["Carnage", "Flag War", "Here Come the Monsters", "Wreck It"],
  characters: ["Alan Jerome", "Bryony"],
  impact: "Foi uma ramificacao mais arcade e separada da economia criminal tradicional.",
  tags: ["arena", "veiculos", "combate"],
  sourcePage: "GTA Online: Arena War"
}, {
  id: "diamond-casino-resort",
  title: "The Diamond Casino & Resort",
  releaseDate: "23 de julho de 2019",
  year: "2019",
  type: "Cassino e propriedade",
  era: "Cassino",
  summary: "Abriu o Diamond Casino & Resort com penthouses, jogos de azar e narrativa dos Cheng contra Duggan.",
  brought: ["Diamond Casino aberto", "Master Penthouse", "casino games", "Lucky Wheel", "Casino Store", "missoes de historia do cassino"],
  systems: ["Casino", "Penthouses", "Membership"],
  vehicles: ["Thrax", "Paragon R", "S80RR", "Drafter", "Gauntlet Classic"],
  modes: ["Casino Story Missions", "Work Missions"],
  characters: ["Tao Cheng", "Agatha Baker", "Tom Connors", "Avery Duggan"],
  impact: "Transformou um predio fechado desde 2013 em hub social e economico.",
  tags: ["cassino", "penthouse", "Cheng"],
  sourcePage: "GTA Online: The Diamond Casino & Resort"
}, {
  id: "diamond-casino-heist",
  title: "The Diamond Casino Heist",
  releaseDate: "12 de dezembro de 2019",
  year: "2019",
  type: "Heist flexivel",
  era: "Cassino",
  summary: "Adicionou o Arcade como fachada e um assalto ao cassino com abordagens variadas.",
  brought: ["Arcades", "Diamond Casino Heist", "approaches Silent & Sneaky, Big Con e Aggressive", "equipe de suporte", "novos veiculos e armas"],
  systems: ["Arcade Business", "Casino Heist planning", "heist approach system"],
  vehicles: ["Retinue Mk II", "Komoda", "Everon", "Sultan Classic", "Vagrant", "Zhaba"],
  modes: ["Casino Heist", "prep missions"],
  characters: ["Lester Crest", "Georgina Cheng", "Avi Schwartzman", "Paige Harris"],
  impact: "Elevou re-jogabilidade dos heists com escolhas reais de abordagem.",
  tags: ["heist", "Arcade", "cassino"],
  sourcePage: "GTA Online: The Diamond Casino Heist"
}, {
  id: "los-santos-summer-special",
  title: "Los Santos Summer Special",
  releaseDate: "11 de agosto de 2020",
  year: "2020",
  type: "Qualidade de vida e atividades",
  era: "Pre-Cayo",
  summary: "Pacote intermediario com missoes de iate, carros, corridas Open Wheel e melhorias gerais.",
  brought: ["Super Yacht Life", "novos veiculos", "Open Wheel Races adicionais", "Business Battles expandidas", "criador melhorado"],
  systems: ["Yacht Missions", "Open Wheel"],
  vehicles: ["Coquette D10", "Tigon", "Youga Classic 4x4", "Club", "Gauntlet Classic Custom"],
  modes: ["A Superyacht Life", "Open Wheel Races"],
  characters: ["Captain Darcy"],
  impact: "Serviu como respiro antes da maior expansao de heist da era.",
  tags: ["iate", "corridas", "veiculos"],
  sourcePage: "GTA Online: Los Santos Summer Special"
}, {
  id: "cayo-perico-heist",
  title: "The Cayo Perico Heist",
  releaseDate: "15 de dezembro de 2020",
  year: "2020",
  type: "Heist e mapa novo",
  era: "Heists modernos",
  summary: "Adicionou Cayo Perico, ilha privada de El Rubio, e o primeiro heist grande jogavel solo.",
  brought: ["ilha Cayo Perico", "Kosatka submarine", "Cayo Perico Heist", "Music Locker", "novas armas, veiculos e radios"],
  systems: ["solo-friendly heist", "Kosatka", "intel gathering", "secondary targets"],
  vehicles: ["Kosatka", "Sparrow", "Toreador", "Winky", "RO-86 Alkonost", "Annihilator Stealth"],
  modes: ["Cayo Perico Heist", "Gather Intel", "Prep Missions"],
  characters: ["Miguel Madrazo", "El Rubio", "Pavel", "English Dave"],
  impact: "Mudou a economia por permitir grind solo lucrativo e levar o jogador para fora de San Andreas.",
  tags: ["heist", "solo", "Cayo Perico", "Kosatka"],
  sourcePage: "GTA Online: The Cayo Perico Heist"
}, {
  id: "los-santos-tuners",
  title: "Los Santos Tuners",
  releaseDate: "20 de julho de 2021",
  year: "2021",
  type: "Cultura automotiva",
  era: "Tuners",
  summary: "Criou o LS Car Meet, reputacao de encontros, contratos de Auto Shop e foco em carros tuner.",
  brought: ["LS Car Meet", "Auto Shops", "Contracts", "Reputation", "Prize Ride", "Test Track", "novos carros tuner"],
  systems: ["LS Car Meet", "Auto Shop Business", "Reputation"],
  vehicles: ["Calico GTF", "Jester RR", "Remus", "ZR350", "Comet S2", "Sultan RS Classic"],
  modes: ["Street Race Series", "Pursuit Series", "Contracts"],
  characters: ["Mimi", "Sessanta", "KDJ"],
  impact: "Foi a maior expansao automotiva desde Benny's e criou comunidade social de carros.",
  tags: ["tuners", "Auto Shop", "carros"],
  sourcePage: "GTA Online: Los Santos Tuners"
}, {
  id: "the-contract",
  title: "The Contract",
  releaseDate: "15 de dezembro de 2021",
  year: "2021",
  type: "Agencia e narrativa",
  era: "Continuidade de GTA V",
  summary: "Trouxe Franklin mais velho como empresario, Agency e contrato VIP com Dr. Dre.",
  brought: ["Agencies", "VIP Contract", "Security Contracts", "Payphone Hits", "Armory", "Imani Tech", "novas musicas e estudios"],
  systems: ["Agency Business", "VIP Contract", "Imani Tech"],
  vehicles: ["Champion", "Buffalo STX", "Deity", "Jubilee", "Ignus", "Shinobi"],
  modes: ["Security Contracts", "Payphone Hits", "Short Trips"],
  characters: ["Franklin Clinton", "Lamar Davis", "Dr. Dre", "Imani", "Anderson .Paak"],
  impact: "Conectou explicitamente GTA Online ao futuro de Franklin apos GTA V.",
  tags: ["Franklin", "Agency", "Dr. Dre", "continuidade"],
  sourcePage: "GTA Online: The Contract"
}, {
  id: "criminal-enterprises",
  title: "The Criminal Enterprises",
  releaseDate: "26 de julho de 2022",
  year: "2022",
  type: "Economia e qualidade de vida",
  era: "Rebalanceamento",
  summary: "Grande update de economia, novas missoes da IAA e melhorias em negocios existentes.",
  brought: ["Operation Paper Trail", "expansoes para CEO, MC, bunker e nightclub", "payouts melhorados", "veiculos e qualidade de vida", "vendas em sessoes privadas"],
  systems: ["business boosts", "Operation Paper Trail", "private session selling"],
  vehicles: ["Torero XO", "Omnis e-GT", "Corsita", "Greenwood", "SM722"],
  modes: ["IAA missions", "business source/sell updates"],
  characters: ["Agent ULP", "Mason Duggan"],
  impact: "Respondeu ao desgaste do grind e modernizou loops antigos.",
  tags: ["economia", "IAA", "qualidade de vida"],
  sourcePage: "GTA Online: The Criminal Enterprises"
}, {
  id: "los-santos-drug-wars",
  title: "Los Santos Drug Wars",
  releaseDate: "13 de dezembro de 2022",
  year: "2022",
  type: "Drogas e Fooliganz",
  era: "Fooliganz",
  summary: "Introduziu Dax, The Freakshop, Acid Lab e a linha narrativa First Dose/Last Dose.",
  brought: ["First Dose missions", "Last Dose missions", "The Freakshop", "Acid Lab", "Fooliganz Jobs", "novos veiculos e armas"],
  systems: ["Acid Lab Business", "Fooligan Jobs"],
  vehicles: ["MTL Brickade 6x6", "Manchez Scout C", "Entity MT", "Journey II", "Toundra Panthere"],
  modes: ["First Dose", "Last Dose", "Fooligan Jobs"],
  characters: ["Dax", "Luchadora", "Labrat", "Dr. Isiah Friedlander"],
  impact: "Criou uma progressao relativamente acessivel para jogadores solo.",
  tags: ["Acid Lab", "Dax", "drogas"],
  sourcePage: "GTA Online: Los Santos Drug Wars"
}, {
  id: "san-andreas-mercenaries",
  title: "San Andreas Mercenaries",
  releaseDate: "13 de junho de 2023",
  year: "2023",
  type: "Operacoes aereas",
  era: "Mercenarios",
  summary: "Colocou os Los Santos Angels contra Merryweather com missoes aereas a partir do Avenger.",
  brought: ["Project Overthrow", "LSA Operations", "Avenger Operations Terminal", "Mammoth Avenger upgrades", "novos veiculos e melhorias"],
  systems: ["Avenger Operations", "LSA Operations"],
  vehicles: ["F-160 Raiju", "MonstroCiti", "Walton L35", "Ratel", "Streamer216"],
  modes: ["Project Overthrow", "LSA Operations"],
  characters: ["Charlie Reed", "Los Santos Angels"],
  impact: "Reposicionou o Avenger como base operacional e trouxe combate militar moderno.",
  tags: ["Merryweather", "Avenger", "aereo"],
  sourcePage: "GTA Online: San Andreas Mercenaries"
}, {
  id: "the-chop-shop",
  title: "The Chop Shop",
  releaseDate: "12 de dezembro de 2023",
  year: "2023",
  type: "Roubo de carros",
  era: "Roubos especializados",
  summary: "Adicionou Salvage Yard, roubos de veiculos de alto valor e retorno de Yusuf Amir.",
  brought: ["Salvage Yard", "Salvage Yard Robberies", "Tow Truck Service", "planejamento de roubos", "novos veiculos e Drift Races"],
  systems: ["Salvage Yard Business", "Tow Truck", "Vehicle Robberies"],
  vehicles: ["Turismo Omaggio", "FR36", "Dorado", "Vivanite", "Aleutian"],
  modes: ["Salvage Yard Robberies", "Drift Races"],
  characters: ["Yusuf Amir", "Jamal Amir"],
  impact: "Trouxe uma fantasia de roubo de carros mais proxima do DNA original da serie.",
  tags: ["Salvage Yard", "Yusuf", "carros"],
  sourcePage: "GTA Online: The Chop Shop"
}, {
  id: "bottom-dollar-bounties",
  title: "Bottom Dollar Bounties",
  releaseDate: "25 de junho de 2024",
  year: "2024",
  type: "Cacadores de recompensa",
  era: "Justica privatizada",
  summary: "Transformou o jogador em operador da Bottom Dollar Bail Enforcement, com procurados e trabalhos policiais.",
  brought: ["Bail Office", "standard bounty targets", "Most Wanted targets", "Dispatch Work", "novos veiculos de policia e utilitarios"],
  systems: ["Bail Office Business", "Bounty Targets", "Dispatch Work"],
  vehicles: ["Dominator FX", "Envisage", "Impaler SZ Cruiser", "Greenwood Cruiser", "Yosemite 1500"],
  modes: ["Bounty Targets", "Dispatch Work"],
  characters: ["Maude Eccles", "Jenette Eccles", "Vincent Effenburger"],
  impact: "Misturou fantasia policial, recompensa e economia criminal em uma atividade diaria.",
  tags: ["bounties", "policia", "Bail Office"],
  sourcePage: "GTA Online: Bottom Dollar Bounties"
}, {
  id: "agents-of-sabotage",
  title: "Agents of Sabotage",
  releaseDate: "10 de dezembro de 2024",
  year: "2024",
  type: "Operacoes clandestinas",
  era: "Sabotagem",
  summary: "Adicionou Darnell Bros Garment Factory como base e File missions com Jodi Marshall.",
  brought: ["Darnell Bros Garment Factory", "The FIB Files", "novas missoes de infiltracao", "Terrorbyte upgrades", "novos veiculos"],
  systems: ["Garment Factory", "FIB Files", "hacking/infiltration jobs"],
  vehicles: ["Banshee GTS", "Chavos V6", "Jester RR Widebody", "Coquette D10 Pursuit"],
  modes: ["FIB Files", "Priority File"],
  characters: ["Jodi Marshall", "Pavel", "Lester Crest"],
  impact: "Recuperou o espaco da Darnell Bros, historico de GTA V, como hub criminal moderno.",
  tags: ["FIB", "sabotagem", "Garment Factory"],
  sourcePage: "GTA Online: Agents of Sabotage"
}, {
  id: "oscar-guzman-flies-again",
  title: "Oscar Guzman Flies Again",
  releaseDate: "4 de marco de 2025",
  year: "2025",
  type: "Missoes e hangar",
  era: "Contrabando aereo",
  summary: "Continuacao de Agents of Sabotage com Oscar Guzman, McKenzie Field Hangar e uma nova linha de trafico de armas contra Eberhard Munitions.",
  brought: ["McKenzie Field Hangar compravel", "nova serie de missoes com Oscar Guzman", "missoes de trafico de armas", "novas aeronaves e veiculos", "progressao de carreira no Enhanced"],
  systems: ["McKenzie Field Hangar", "arms trafficking missions", "Career Progress"],
  vehicles: ["Duster 300-H", "DH-7 Iron Mule", "Titan 250 D"],
  modes: ["Oscar Guzman Flies Again missions", "arms trafficking work"],
  characters: ["Oscar Guzman", "Ron Jakowski", "Eberhard Munitions"],
  impact: "Reaproveitou o passado de Trevor Philips Enterprises e deu ao contrabando aereo uma nova frente narrativa.",
  tags: ["Oscar Guzman", "hangar", "Blaine County", "2025"],
  sourcePage: "Oscar Guzman Flies Again",
  officialSource: "https://www.rockstargames.com/newswire/article/179kk473a8a18k/gta-online-oscar-guzman-flies-again-now-available"
}, {
  id: "money-fronts",
  title: "Money Fronts",
  releaseDate: "17 de junho de 2025",
  year: "2025",
  type: "Lavagem de dinheiro",
  era: "Fachadas",
  summary: "Focou em negocios de fachada para lavar dinheiro, esconder operacoes ilegais e transformar empresas legitimas em cobertura criminal.",
  brought: ["Hands On Car Wash como primeira fachada", "Smoke on the Water e Higgins Helitours integrados como frentes adicionais", "Mr. Faber como contato", "trabalhos legitimos para manter aparencia limpa", "renda passiva conectada a lavagem", "novos veiculos, melhorias e atividades de mapa"],
  systems: ["Money Laundering Fronts", "business upgrades", "front income", "trabalhos legitimos", "QuickiePharm", "Safeguard deliveries"],
  vehicles: ["Karin Everon RS", "Woodlander", "Tampa GT", "novos veiculos adicionados por drip-feed"],
  modes: ["front management", "lavagem e entregas", "Cayo Perico Adversary/Survival", "Slasher em Ramius Submarine"],
  characters: ["Martin Madrazo", "Mr. Faber"],
  impact: "Deu coesao narrativa a negocios de lavagem que GTA Online sugeria havia anos e aproximou a economia do jogador de uma rede criminosa com fachada legal.",
  tags: ["lavagem", "negocios", "fachadas", "Mr. Faber"],
  sourcePage: "GTA Online: Money Fronts",
  officialSource: "https://www.rockstargames.com/newswire/article/51322o2k393kka/gta-online-money-fronts-now-available"
}, {
  id: "safehouse-in-the-hills",
  title: "A Safehouse in the Hills",
  releaseDate: "10 de dezembro de 2025",
  year: "2025",
  type: "Safehouse e high-end crime",
  era: "Fase atual",
  summary: "Update de fim de 2025 centrado na compra de mansoes Prix Luxury nas colinas, com safehouse de luxo, assistente de IA e novas operacoes ligadas ao alto escalao criminal de Los Santos.",
  brought: ["mansoes Prix Luxury compraveis", "interiores de safehouse high-end", "assistente de IA para suporte da propriedade", "beneficios de seguranca privada", "impulso de producao para negocios", "novas missoes de preparacao", "novos veiculos, roupas e recompensas"],
  systems: ["Luxury Safehouse", "AI Assistant", "Private Security", "Production Boosts", "Prix Luxury prep missions"],
  vehicles: ["novos veiculos adicionados pela atualizacao e drip-feed"],
  modes: ["missoes da safehouse", "prep missions", "atividades de carreira", "KnoWay Out"],
  characters: ["jogador online", "Avi Schwartzman", "Michael De Santa"],
  impact: "Leva a fantasia de patrimonio do Online para mansoes de alto luxo e reposiciona o jogador como chefe consolidado, nao apenas operador de rua.",
  tags: ["safehouse", "luxo", "Prix Luxury", "Michael", "2025"],
  sourcePage: "GTA Online: A Safehouse in the Hills",
  officialSource: "https://www.rockstargames.com/newswire/article/51358a55o2o11o/gta-online-a-safehouse-in-the-hills-coming-december-10"
}];
const gta6FactsData = {
  confirmed: ["Data oficial atual: 19 de novembro de 2026.", "Plataformas anunciadas: PlayStation 5 e Xbox Series X|S.", "Estado: Leonida, inspirado na Florida.", "Cidade principal destacada: Vice City moderna.", "Protagonistas: Lucia Caminos e Jason Duval.", "Premissa oficial: um servico simples da errado e joga a dupla numa conspiracao criminosa em Leonida."],
  interpretation: ["A dinamica Lucia/Jason sugere leitura de casal criminoso contemporaneo.", "Trailers e pagina oficial enfatizam redes sociais, cultura viral, praias, pantanos e policia em ambiente de satira da Florida.", "Temas provaveis: golpes, fama instantanea, vigilancia, violencia viral e economia criminal moderna."],
  notConfirmed: ["Antagonistas principais.", "Mapa completo e todas as cidades/condados.", "Sistema de troca entre protagonistas.", "Integração futura com GTA Online.", "Detalhes de engine, ray tracing ou modo PC no lancamento."]
};
const connectionsData = [{
  title: "Catalina: San Andreas para GTA III",
  summary: "Catalina aparece em 1992 com CJ e, anos depois, trai Claude em Liberty City.",
  type: "Conexao cronologica"
}, {
  title: "Leone Family: Las Venturas, Liberty e GTA III",
  summary: "Salvatore conecta San Andreas, Liberty City Stories e GTA III, mostrando a continuidade da mafia 3D.",
  type: "Familia criminosa"
}, {
  title: "Diamantes de Liberty City",
  summary: "GTA IV, The Lost and Damned e The Ballad of Gay Tony mostram o mesmo conflito por angulos diferentes.",
  type: "Narrativa cruzada"
}, {
  title: "Michael, Trevor e North Yankton",
  summary: "A mentira de 2004 e o eixo emocional de GTA V, reativando amizade, traicao e paranoia.",
  type: "Traicao"
}, {
  title: "Franklin em GTA Online",
  summary: "The Contract confirma Franklin mais velho como empresario de sucesso, reforcando a leitura da Opcao C.",
  type: "Continuidade HD"
}, {
  title: "Vice City 1984, 1986 e 2026",
  summary: "Vic e Tommy definem a era 3D; Lucia e Jason retornam a cidade em outro universo narrativo.",
  type: "Eco entre universos"
}];
const recommendedOrderData = [{
  label: "Ordem moderna para entender a narrativa",
  games: ["GTA III", "Vice City", "San Andreas", "Liberty City Stories", "Vice City Stories", "GTA IV", "Episodes from Liberty City", "Chinatown Wars", "GTA V", "GTA Online", "GTA VI"]
}, {
  label: "Ordem cronologica interna",
  games: ["London 1961", "London 1969", "Vice City Stories", "Vice City", "San Andreas", "GTA 1", "Liberty City Stories", "GTA Advance", "GTA III", "GTA IV + Episodes", "Chinatown Wars", "GTA V", "GTA Online", "GTA VI"]
}, {
  label: "Ordem por impacto historico",
  games: ["Grand Theft Auto", "GTA III", "Vice City", "San Andreas", "GTA IV", "GTA V", "GTA Online", "GTA VI"]
}];
const impactData = [{
  title: "Mundo aberto urbano como linguagem dominante",
  body: "GTA III popularizou um modelo que virou vocabulario de design: mapa urbano, missoes, sistemas policiais, liberdade lateral e narrativa cinematografica."
}, {
  title: "Satira cultural",
  body: "Radios, anuncios, marcas falsas, talk shows e pedestres transformam cada cidade em critica de consumo, politica, midia, celebridade e paranoia americana."
}, {
  title: "Controversias",
  body: "A serie e historicamente alvo de debates sobre violencia, classificacao indicativa, representacao e conteudo sexual. San Andreas tambem ficou associado ao caso Hot Coffee, um dos marcos de controversia em jogos."
}, {
  title: "GTA Online e economia de jogo vivo",
  body: "GTA Online redefiniu a longevidade de GTA V, mas tambem trouxe debates sobre grind, microtransacoes, inflacao interna e preservacao do single-player tradicional."
}];
const glossaryData = [{
  term: "2D Universe",
  definition: "Primeira continuidade de GTA, com camera top-down e estrutura arcade."
}, {
  term: "3D Universe",
  definition: "Continuidade de GTA III, Vice City, San Andreas, Advance, LCS e VCS."
}, {
  term: "HD Universe",
  definition: "Continuidade iniciada em GTA IV, incluindo GTA V, Online e GTA VI."
}, {
  term: "Wanted Level",
  definition: "Sistema de estrelas que mede resposta policial ao jogador."
}, {
  term: "Heist",
  definition: "Assalto planejado com preparacao, equipe e execucao."
}, {
  term: "C.R.A.S.H.",
  definition: "Unidade policial corrupta de San Andreas, liderada por Tenpenny."
}, {
  term: "FIB",
  definition: "Parodia do FBI no universo GTA."
}, {
  term: "IAA",
  definition: "Parodia da CIA/inteligencia americana no universo GTA."
}, {
  term: "NOOSE",
  definition: "Forca tática de resposta a ameaças de alto nivel."
}, {
  term: "RAGE",
  definition: "Rockstar Advanced Game Engine, base tecnica da era HD."
}, {
  term: "Euphoria",
  definition: "Tecnologia de animacao/fisica usada para reacoes corporais na era HD."
}, {
  term: "Canon",
  definition: "Conjunto de eventos aceitos como continuidade narrativa."
}, {
  term: "Easter egg",
  definition: "Referencia escondida, piada interna ou pista visual colocada no jogo."
}, {
  term: "Prequel",
  definition: "Jogo ou historia que acontece antes de um titulo ja lancado."
}, {
  term: "Spin-off",
  definition: "Entrada derivada, muitas vezes com formato, plataforma ou foco diferente."
}, {
  term: "GTA Online Organization",
  definition: "Estrutura criada pelo jogador para negocios como CEO, MC, Agencia, Bunker ou Nightclub."
}, {
  term: "Leonida",
  definition: "Estado ficticio de GTA VI inspirado na Florida."
}, {
  term: "Vice City",
  definition: "Analogo de Miami, presente em 2D, 3D e HD Universe."
}];
const glossaryDetailData = {
  "2D Universe": {
    category: "Universos",
    expanded: "O 2D Universe cobre a fase original de Grand Theft Auto, quando a serie ainda era vista de cima, com ritmo arcade, pontuacao, missoes curtas e continuidade narrativa bem mais solta. Liberty City, San Andreas e Vice City ja existem como nomes, mas ainda funcionam como mapas de caos urbano, nao como cidades-personagem densas. London 1969 e London 1961 tambem entram nessa fase e sao excecoes historicas por levarem GTA para fora do imaginario criminal norte-americano que dominaria a franquia depois.",
    importance: "E o laboratorio da formula: roubo de veiculos, perseguicao policial, radios, humor acido, liberdade sistemica e crime urbano antes da virada cinematografica de GTA III.",
    examples: ["Grand Theft Auto", "GTA: London 1969", "GTA: London 1961", "Grand Theft Auto 2"],
    relatedTerms: ["3D Universe", "HD Universe", "Canon", "Easter egg"],
    games: ["GTA 1", "London 1969", "London 1961", "GTA 2"],
    precisionNotes: ["GTA 2 e frequentemente tratado como parte da fase 2D, mas seu ano interno e tom retrofuturista sao deliberadamente nebulosos.", "Nomes de cidades podem reaparecer em outros universos sem significar que sao a mesma continuidade."],
    tags: ["universo", "top-down", "arcade", "origem"],
    sources: [{
      label: "GTA Wiki - Universes",
      url: "https://gta.fandom.com/wiki/Universes"
    }, {
      label: "Wikipedia - Grand Theft Auto",
      url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto"
    }]
  },
  "3D Universe": {
    category: "Universos",
    expanded: "O 3D Universe e a continuidade classica formada por GTA III, Vice City, San Andreas, Advance, Liberty City Stories e Vice City Stories. Ele transforma nomes antigos em lugares memoraveis, com mafias, gangues, radios, personagens recorrentes e eventos que se conectam entre jogos. Claude, Tommy Vercetti, CJ, Mike, Toni Cipriani e Victor Vance pertencem a esse bloco narrativo.",
    importance: "Foi a era que consolidou GTA como narrativa criminal de mundo aberto, fazendo Liberty City, Vice City e San Andreas parecerem arquivos vivos de crime, radio, politica e cultura pop.",
    examples: ["Leone Family atravessando San Andreas, LCS e GTA III", "Catalina conectando San Andreas e GTA III", "Vice City Stories preparando o terreno para Vice City"],
    relatedTerms: ["2D Universe", "HD Universe", "Prequel", "Canon"],
    games: ["GTA III", "Vice City", "San Andreas", "GTA Advance", "Liberty City Stories", "Vice City Stories"],
    precisionNotes: ["GTA Advance e top-down, mas pertence ao 3D Universe por continuidade, cidade e ligacao com GTA III.", "Referencias da era 3D podem aparecer na era HD como marcas, piadas ou ecos, mas personagens centrais nao devem ser assumidos como canonicos no HD Universe."],
    tags: ["universo", "3d", "continuidade", "mafias"],
    sources: [{
      label: "GTA Wiki - 3D Universe",
      url: "https://gta.fandom.com/wiki/3D_Universe"
    }, {
      label: "GTA Wiki - Universes",
      url: "https://gta.fandom.com/wiki/Universes"
    }]
  },
  "HD Universe": {
    category: "Universos",
    expanded: "O HD Universe comeca em GTA IV e segue por Episodes from Liberty City, Chinatown Wars, GTA V, GTA Online e GTA VI. A Rockstar reinventa a continuidade com cidades mais densas, fisica mais complexa, tom mais realista e satira contemporanea. Liberty City, Los Santos e Vice City retornam reinterpretadas, com escala, geografia e canon diferentes da era 3D.",
    importance: "E o universo atual da franquia. Ele sustenta a narrativa de Niko Bellic, Johnny Klebitz, Luis Lopez, Huang Lee, Michael, Franklin, Trevor, o protagonista de GTA Online, Lucia Caminos e Jason Duval.",
    examples: ["GTA IV e Episodes mostram o mesmo conflito por angulos diferentes", "GTA Online continua Los Santos depois de 2013", "GTA VI leva a continuidade HD para Leonida e Vice City moderna"],
    relatedTerms: ["Canon", "RAGE", "Euphoria", "GTA Online Organization", "Leonida"],
    games: ["GTA IV", "The Lost and Damned", "The Ballad of Gay Tony", "Chinatown Wars", "GTA V", "GTA Online", "GTA VI"],
    precisionNotes: ["O HD Universe nao invalida a importancia historica da era 3D; ele separa continuidade narrativa.", "GTA VI e confirmado no HD Universe por continuidade moderna de marca, tecnologia e pagina oficial, mas detalhes finos do canon so ficam completos apos o lancamento."],
    tags: ["universo", "hd", "canon atual", "realismo"],
    sources: [{
      label: "GTA Wiki - HD Universe",
      url: "https://gta.fandom.com/wiki/HD_Universe"
    }, {
      label: "Rockstar - GTA VI",
      url: "https://www.rockstargames.com/VI"
    }]
  },
  "Wanted Level": {
    category: "Sistemas",
    expanded: "Wanted Level e o medidor de resposta policial de GTA. Crimes publicos, disparos, atropelamentos, invasao de areas restritas e ataques a autoridades elevam o nivel de procurado. Nas eras 2D e 3D ele costuma ir ate seis estrelas; em GTA V e GTA Online opera em escala de cinco estrelas. A logica muda por jogo, mas a fantasia e a mesma: quanto mais caos publico, mais agressiva e organizada fica a resposta do Estado.",
    importance: "E um dos sistemas mais reconheciveis da serie, porque transforma a cidade em organismo reativo: patrulhas, barreiras, helicopteros, unidades taticas e perseguicoes contam a historia do crime sem precisar de cutscene.",
    examples: ["seis estrelas em jogos classicos", "cinco estrelas em GTA V", "resposta automatica a areas restritas em GTA Online"],
    relatedTerms: ["NOOSE", "LSPD", "LCPD", "C.R.A.S.H."],
    games: ["franquia GTA"],
    precisionNotes: ["A quantidade maxima de estrelas e a logica de fuga variam entre jogos.", "GTA Online evita prisao tradicional do jogador e tende a usar resposta letal."],
    tags: ["policia", "sistema", "estrelas", "perseguicao"],
    sources: [{
      label: "GTA Wiki - Wanted Level",
      url: "https://gta.fandom.com/wiki/Wanted_Level"
    }, {
      label: "Wikipedia - Grand Theft Auto",
      url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto"
    }]
  },
  "Heist": {
    category: "Estrutura narrativa",
    expanded: "Heist e o assalto planejado, geralmente dividido em preparacao, equipe, equipamento, execucao e fuga. A ideia existe no DNA da serie desde roubos e golpes menores, mas ganha forma cinematografica em GTA V e estrutura cooperativa em GTA Online. Em vez de uma missao isolada, o heist vira campanha curta: escolher abordagem, roubar preparativos, dividir papeis e lidar com consequencias.",
    importance: "Os heists conectam a fantasia criminal de GTA ao design moderno de missao. No Online, eles tambem viraram o eixo economico de progressao e cooperacao.",
    examples: ["Fleeca Job", "Pacific Standard Job", "The Doomsday Heist", "The Diamond Casino Heist", "The Cayo Perico Heist"],
    relatedTerms: ["GTA Online Organization", "Lester Crest", "IAA", "FIB"],
    games: ["GTA V", "GTA Online"],
    precisionNotes: ["Nem todo roubo em GTA e chamado formalmente de heist.", "Cayo Perico e historico por permitir execucao solo de um grande heist em GTA Online."],
    tags: ["heist", "assalto", "cooperativo", "planejamento"],
    sources: [{
      label: "GTA Wiki - Heists",
      url: "https://gta.fandom.com/wiki/Heists"
    }, {
      label: "GTA Wiki - Heists Update",
      url: "https://gta.fandom.com/wiki/Heists_Update"
    }]
  },
  "C.R.A.S.H.": {
    category: "Policia corrupta",
    expanded: "Community Resources Against Street Hoodlums, abreviado como C.R.A.S.H., e a unidade corrupta do LSPD que domina parte da narrativa de GTA San Andreas. Frank Tenpenny, Eddie Pulaski e Jimmy Hernandez manipulam CJ, fabricam pressoes, usam gangues como ferramenta e representam a corrupcao institucional por tras da guerra de ruas de Los Santos.",
    importance: "C.R.A.S.H. e o rosto policial da tragedia de San Andreas: a historia nao e apenas gangues contra gangues, mas uma cidade onde autoridade, crime e politica se contaminam.",
    examples: ["Tenpenny coagindo CJ", "Pulaski como executor", "Hernandez dividido entre culpa e obediencia"],
    relatedTerms: ["Wanted Level", "LSPD", "Canon"],
    games: ["GTA San Andreas"],
    precisionNotes: ["C.R.A.S.H. e especifica da continuidade 3D e nao deve ser confundida com LSPD generica da era HD."],
    tags: ["policia corrupta", "San Andreas", "Tenpenny", "LSPD"],
    sources: [{
      label: "GTA Wiki - C.R.A.S.H.",
      url: "https://gta.fandom.com/wiki/C.R.A.S.H."
    }]
  },
  "FIB": {
    category: "Agencias",
    expanded: "Federal Investigation Bureau e a parodia de GTA para o FBI. Na era HD, o FIB aparece como agencia federal agressiva, burocratica e politicamente contaminada. Dave Norton e Steve Haines sao centrais em GTA V: o primeiro prende Michael numa mentira de protecao; o segundo explora Michael, Franklin e Trevor em operacoes sujas.",
    importance: "O FIB permite que GTA critique vigilancia, propaganda, conflito entre agencias e uso do crime como ferramenta de Estado.",
    examples: ["Steve Haines em GTA V", "Dave Norton e o acordo de Michael", "The FIB Files em Agents of Sabotage"],
    relatedTerms: ["IAA", "NOOSE", "Wanted Level", "HD Universe"],
    games: ["GTA IV", "GTA V", "GTA Online"],
    precisionNotes: ["A representacao varia por jogo; no HD Universe o FIB fica muito mais presente no enredo principal."],
    tags: ["governo", "FIB", "corrupcao", "HD Universe"],
    sources: [{
      label: "GTA Wiki - FIB",
      url: "https://gta.fandom.com/wiki/Federal_Investigation_Bureau"
    }]
  },
  "IAA": {
    category: "Agencias",
    expanded: "International Affairs Agency e a parodia de GTA para agencias de inteligencia como a CIA. Ela aparece em conflitos de espionagem, operacoes clandestinas e disputas com o FIB. Em GTA V e GTA Online, a IAA usa criminosos, mercenarios e intermediarios para resolver crises que oficialmente nao existem.",
    importance: "A IAA amplia GTA para alem de gangues e mafias: o crime tambem pode ser geopolitica, laboratorio, sabotagem e guerra de informacao.",
    examples: ["conflito FIB versus IAA em GTA V", "Agent ULP em missao da IAA", "Operation Paper Trail"],
    relatedTerms: ["FIB", "NOOSE", "Heist", "HD Universe"],
    games: ["GTA IV", "GTA V", "GTA Online"],
    precisionNotes: ["A IAA e uma satira ficcional; paralelos com agencias reais sao intencionais, mas nao equivalencias literais."],
    tags: ["governo", "IAA", "inteligencia", "operacoes"],
    sources: [{
      label: "GTA Wiki - IAA",
      url: "https://gta.fandom.com/wiki/International_Affairs_Agency"
    }]
  },
  "NOOSE": {
    category: "Policia tática",
    expanded: "National Office of Security Enforcement e a forca tática federal do HD Universe, funcionando como resposta armada de alto nivel. Em perseguicoes intensas, missoes e eventos de GTA IV, GTA V e GTA Online, a NOOSE representa a militarizacao da resposta policial.",
    importance: "Ela materializa o topo da escala de repressao: quando o Wanted Level vira crise, a cidade troca patrulhas por equipes taticas, helicopteros e bloqueios pesados.",
    examples: ["resposta de alto nivel em Liberty City", "unidades taticas em Los Santos", "missoes envolvendo N.O.O.S.E. em GTA Online"],
    relatedTerms: ["Wanted Level", "FIB", "IAA", "LSPD"],
    games: ["GTA IV", "GTA V", "GTA Online"],
    precisionNotes: ["Em jogos antigos, funcoes parecidas eram ocupadas por SWAT/FBI/Army; NOOSE e mais propria da era HD."],
    tags: ["policia", "NOOSE", "tatico", "HD Universe"],
    sources: [{
      label: "GTA Wiki - NOOSE",
      url: "https://gta.fandom.com/wiki/National_Office_of_Security_Enforcement"
    }]
  },
  "RAGE": {
    category: "Tecnologia",
    expanded: "Rockstar Advanced Game Engine e a tecnologia proprietaria usada pela Rockstar na era HD. GTA IV marca a entrada da franquia nesse ciclo tecnico, combinando mundo aberto mais denso, fisica, streaming de cidade, animacao, veiculos e sistemas urbanos em escala maior. GTA V e Red Dead Redemption 2 refinam essa base; GTA VI deve representar a proxima evolucao, embora detalhes tecnicos oficiais continuem limitados.",
    importance: "RAGE e a infraestrutura que permitiu a virada de GTA para cidades mais densas, iluminacao moderna, fisica mais reativa e simulacao mais ambiciosa.",
    examples: ["GTA IV", "GTA V", "GTA Online", "Red Dead Redemption 2"],
    relatedTerms: ["Euphoria", "HD Universe", "GTA VI"],
    games: ["GTA IV", "GTA V", "GTA Online", "GTA VI"],
    precisionNotes: ["A Rockstar nao publica todos os detalhes internos da engine.", "Afirmacoes sobre reconstrucoes completas para GTA VI devem ser tratadas como nao confirmadas salvo fonte oficial."],
    tags: ["engine", "RAGE", "tecnologia", "HD Universe"],
    sources: [{
      label: "GTA Wiki - RAGE",
      url: "https://gta.fandom.com/wiki/Rockstar_Advanced_Game_Engine"
    }, {
      label: "Wikipedia - Rockstar Advanced Game Engine",
      url: "https://en.wikipedia.org/wiki/Rockstar_Advanced_Game_Engine"
    }]
  },
  "Euphoria": {
    category: "Tecnologia",
    expanded: "Euphoria e uma tecnologia de animacao comportamental e fisica corporal associada a NaturalMotion, integrada a jogos da Rockstar na era HD. Em GTA IV ela ficou famosa pelas reacoes de corpos a impactos, quedas, atropelamentos e tiroteios, fazendo personagens parecerem menos presos a animacoes rigidas.",
    importance: "A tecnologia ajudou GTA IV a parecer fisicamente diferente da era 3D: mais pesado, imprevisivel e responsivo ao choque entre pedestres, veiculos e armas.",
    examples: ["reacoes de Niko e pedestres em GTA IV", "ragdoll mais fisico em GTA V", "quedas e colisoes em jogos da Rockstar"],
    relatedTerms: ["RAGE", "HD Universe", "Wanted Level"],
    games: ["GTA IV", "GTA V", "GTA Online"],
    precisionNotes: ["Euphoria nao e a engine inteira; e uma camada/tecnologia ligada a animacao e simulacao corporal."],
    tags: ["fisica", "animacao", "Euphoria", "RAGE"],
    sources: [{
      label: "GTA Wiki - Euphoria",
      url: "https://gta.fandom.com/wiki/Euphoria"
    }, {
      label: "Wikipedia - Euphoria software",
      url: "https://en.wikipedia.org/wiki/Euphoria_(software)"
    }]
  },
  "Canon": {
    category: "Continuidade",
    expanded: "Canon e o conjunto de eventos aceitos como continuidade narrativa. Em GTA, o termo precisa ser usado com cuidado porque a franquia separa universos, brinca com marcas recorrentes, deixa finais alternativos e usa easter eggs para referenciar jogos antigos sem necessariamente confirmar coexistencia. A Opcao C de GTA V, por exemplo, e amplamente tratada como continuidade mais aceita por GTA Online, pois Franklin, Trevor e Michael seguem vivos em aparicoes e referencias posteriores.",
    importance: "Ajuda a separar historia interna, interpretacao de fa, piada visual, referencia de marketing e informacao confirmada pela Rockstar.",
    examples: ["universos 2D/3D/HD separados", "Opcao C de GTA V reforcada por GTA Online", "referencias a marcas antigas sem canonizar personagens"],
    relatedTerms: ["Easter egg", "Prequel", "Spin-off", "HD Universe"],
    games: ["franquia GTA"],
    precisionNotes: ["Quando a Rockstar nao confirma uma ligacao, o dossie marca como interpretacao ou referencia/easter egg.", "Canon de gameplay e canon narrativo nem sempre sao identicos."],
    tags: ["canon", "continuidade", "precisao", "lore"],
    sources: [{
      label: "GTA Wiki - Universes",
      url: "https://gta.fandom.com/wiki/Universes"
    }]
  },
  "Easter egg": {
    category: "Referencias",
    expanded: "Easter egg e uma referencia escondida, piada visual, segredo ou pista colocada no mundo do jogo. GTA usa easter eggs para comentar cultura pop, jogos anteriores, teorias da comunidade e absurdos urbanos. Eles enriquecem a leitura do mapa, mas nao devem ser tratados automaticamente como prova de canon.",
    importance: "E uma camada essencial da experiencia GTA: a cidade parece viva porque guarda segredos, piadas internas, lendas urbanas e rastros para o jogador investigar.",
    examples: ["segredos alienigenas em GTA V", "referencias a personagens de outros universos", "mensagens escondidas em mapas e placas"],
    relatedTerms: ["Canon", "Universos", "HD Universe"],
    games: ["franquia GTA"],
    precisionNotes: ["Um easter egg pode ser intencional e ainda assim nao alterar continuidade narrativa."],
    tags: ["referencia", "segredo", "easter egg", "interpretacao"],
    sources: [{
      label: "GTA Wiki - Secrets and Easter Eggs",
      url: "https://gta.fandom.com/wiki/Secrets_and_Easter_Eggs"
    }]
  },
  "Prequel": {
    category: "Estrutura narrativa",
    expanded: "Prequel e uma historia lancada depois, mas ambientada antes de outro jogo. GTA usa prequels para preencher lacunas de poder: Liberty City Stories mostra Toni Cipriani e a familia Leone antes de GTA III; Vice City Stories mostra Victor Vance e Vice City antes da chegada de Tommy Vercetti.",
    importance: "Os prequels ajudam a entender como cidades e faccoes chegaram ao estado visto nos jogos principais.",
    examples: ["Liberty City Stories antes de GTA III", "Vice City Stories antes de Vice City", "North Yankton 2004 como prologo dentro de GTA V"],
    relatedTerms: ["Canon", "Spin-off", "3D Universe"],
    games: ["Liberty City Stories", "Vice City Stories", "GTA V"],
    precisionNotes: ["Prequel e posicao cronologica, nao necessariamente menor importancia."],
    tags: ["prequel", "cronologia", "lore", "3D Universe"],
    sources: [{
      label: "GTA Wiki - Liberty City Stories",
      url: "https://gta.fandom.com/wiki/Grand_Theft_Auto:_Liberty_City_Stories"
    }, {
      label: "GTA Wiki - Vice City Stories",
      url: "https://gta.fandom.com/wiki/Grand_Theft_Auto:_Vice_City_Stories"
    }]
  },
  "Spin-off": {
    category: "Estrutura de serie",
    expanded: "Spin-off e uma entrada derivada que muda escala, plataforma, formato ou foco. Em GTA, o termo pode cobrir jogos portateis, expansoes e experiencias laterais que nao seguem exatamente a numeracao principal, mas acrescentam contexto, personagens e sistemas.",
    importance: "Sem os spin-offs, o mapa historico da saga fica incompleto: Chinatown Wars, Advance, Episodes from Liberty City e os Stories explicam redes criminosas que os jogos principais apenas sugerem.",
    examples: ["GTA Advance", "Chinatown Wars", "The Lost and Damned", "The Ballad of Gay Tony"],
    relatedTerms: ["Prequel", "Canon", "3D Universe", "HD Universe"],
    games: ["GTA Advance", "Chinatown Wars", "Episodes from Liberty City"],
    precisionNotes: ["Spin-off nao significa nao canonico; depende do universo e do jogo."],
    tags: ["spin-off", "expansao", "portatil", "canon"],
    sources: [{
      label: "GTA Wiki - Grand Theft Auto Wiki",
      url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_Wiki"
    }]
  },
  "GTA Online Organization": {
    category: "Economia online",
    expanded: "GTA Online Organization e a estrutura de organizacao criada pelo jogador para operar negocios, contratar associados e executar atividades como CEO, VIP, MC President, dono de nightclub, agencia, bunker, arcade, auto shop, salvage yard e outras frentes. Ela e menos uma faccao canonica fixa e mais um guarda-chuva de gameplay que transforma o personagem online em empresario criminoso.",
    importance: "E a base da carreira criminal persistente de GTA Online: o jogador deixa de ser apenas mercenario e passa a administrar cadeias de producao, roubo, lavagem, contrabando e servicos armados.",
    examples: ["CEO Warehouses", "MC Businesses", "Bunker", "Nightclub", "Agency", "Arcade", "Auto Shop", "Salvage Yard", "Money Fronts"],
    relatedTerms: ["Heist", "GTA Online", "FIB", "IAA"],
    games: ["GTA Online"],
    precisionNotes: ["A organizacao do jogador e personalizavel e nao tem nome canonico unico.", "Muitos negocios sao simultaneamente sistemas de gameplay e ficcao de lavagem de dinheiro."],
    tags: ["online", "CEO", "MC", "negocios", "lavagem"],
    sources: [{
      label: "GTA Wiki - Organizations",
      url: "https://gta.fandom.com/wiki/Organizations"
    }, {
      label: "GTA Wiki - Updates in GTA Online",
      url: "https://gta.fandom.com/wiki/Updates_in_GTA_Online"
    }]
  },
  "Leonida": {
    category: "Cidades e estados",
    expanded: "Leonida e o estado ficticio de GTA VI, inspirado na Florida. A pagina oficial e os trailers mostram Vice City moderna, Keys, pantanos, praias, vida noturna, encontros virais, policiamento, redes sociais e criminalidade contemporanea. A Rockstar apresenta Leonida como o novo grande palco do HD Universe, com Lucia Caminos e Jason Duval presos a uma conspiracao criminal apos um servico dar errado.",
    importance: "Leonida marca a volta de Vice City em escala moderna e abre a proxima fase de GTA depois de mais de uma decada de Los Santos como centro da franquia.",
    examples: ["Vice City", "Leonida Keys", "ambiente de redes sociais e cultura viral", "Lucia Caminos e Jason Duval"],
    relatedTerms: ["Vice City", "HD Universe", "Canon", "GTA VI"],
    games: ["GTA VI"],
    precisionNotes: ["A data oficial atual de GTA VI e 19 de novembro de 2026.", "Detalhes de mapa completo, antagonistas e sistemas ainda devem ser tratados como nao confirmados."],
    tags: ["Leonida", "GTA VI", "Vice City", "confirmado"],
    sources: [{
      label: "Rockstar - GTA VI",
      url: "https://www.rockstargames.com/VI"
    }, {
      label: "Rockstar Newswire - GTA VI data",
      url: "https://www.rockstargames.com/newswire/article/ak3ak31a49a221/grand-theft-auto-vi-is-now-set-to-launch-november-19-2026"
    }]
  },
  "Vice City": {
    category: "Cidades e estados",
    expanded: "Vice City e o analogo de Miami dentro de GTA. Na era 2D, aparece como uma cidade do primeiro jogo. Na era 3D, vira palco neon de drogas, cartels, luxo, praia e cinema criminal dos anos 80 em Vice City e Vice City Stories. No HD Universe, retorna em GTA VI como cidade moderna dentro de Leonida, com redes sociais, cultura viral, policia, praias, clubes e crime contemporaneo.",
    importance: "E uma das identidades urbanas mais fortes da franquia: onde Liberty City e mafia/capitalismo e Los Santos e celebridade/desigualdade, Vice City e excesso tropical, neon, golpe, trafico e reinvencao cultural.",
    examples: ["Victor Vance em 1984", "Tommy Vercetti em 1986", "Lucia e Jason em GTA VI"],
    relatedTerms: ["Leonida", "3D Universe", "HD Universe", "Prequel"],
    games: ["GTA 1", "Vice City Stories", "Vice City", "GTA VI"],
    precisionNotes: ["Vice City da era 3D e Vice City de GTA VI nao sao a mesma continuidade.", "A inspiracao em Miami e clara, mas a Rockstar usa satira e composicao ficcional, nao reproduz a cidade real literalmente."],
    tags: ["Vice City", "Miami", "neon", "GTA VI", "anos 80"],
    sources: [{
      label: "GTA Wiki - Vice City",
      url: "https://gta.fandom.com/wiki/Vice_City"
    }, {
      label: "Rockstar - GTA VI",
      url: "https://www.rockstargames.com/VI"
    }]
  }
};
glossaryData.forEach(item => {
  Object.assign(item, glossaryDetailData[item.term] || {});
});
const mediaCredit = "Imagem promocional oficial © Rockstar Games / Take-Two Interactive";
const glossaryDetailsByTerm = {
  "2D Universe": {
    category: "Continuidades",
    expanded: "A primeira fase de GTA funciona como laboratorio da franquia: camera top-down, missoes curtas, pontuacao, radio, caos urbano e menos compromisso com drama cinematografico. Os nomes Liberty City, Vice City e San Andreas ja existem, mas ainda sao mapas abstratos.",
    appearsIn: ["Grand Theft Auto", "GTA: London 1969", "GTA: London 1961", "Grand Theft Auto 2"],
    examples: ["GTA 1 usa tres cidades em perspectiva de cima.", "London 1969 e London 1961 sao raras incursoes fora dos EUA.", "GTA 2 usa Anywhere City e gangues de tom retrofuturista."],
    whyItMatters: "E onde nascem as regras basicas: roubar carros, fugir da policia, aceitar trabalhos criminosos e transformar a cidade em sistema de caos.",
    relatedTerms: ["3D Universe", "Canon", "Spin-off"],
    precisionNotes: ["A continuidade e mais solta que nas fases posteriores.", "Cidades com o mesmo nome nao sao automaticamente a mesma versao canonica."],
    tags: ["universo", "2D", "top-down", "origem"],
    sources: [{
      label: "GTA Wiki - 2D Universe",
      url: "https://gta.fandom.com/wiki/2D_Universe"
    }]
  },
  "3D Universe": {
    category: "Continuidades",
    expanded: "A fase classica da franquia: cidades em 3D, personagens recorrentes, mafias conectadas, radios satiricas e continuidade reconhecivel. GTA III, Vice City e San Andreas criam a identidade moderna da serie.",
    appearsIn: ["GTA III", "Vice City", "San Andreas", "GTA Advance", "Liberty City Stories", "Vice City Stories"],
    examples: ["Salvatore Leone conecta San Andreas, Liberty City Stories e GTA III.", "Catalina aparece em San Andreas antes de trair Claude.", "Vice City Stories mostra a cidade antes de Tommy Vercetti dominar o submundo."],
    whyItMatters: "Transformou GTA em fenomeno cultural e consolidou o modelo urbano de mundo aberto.",
    relatedTerms: ["2D Universe", "HD Universe", "Prequel", "Canon"],
    precisionNotes: ["Nao e a mesma continuidade da era HD.", "Referencias posteriores podem ser homenagem ou easter egg."],
    tags: ["universo", "3D", "PS2", "continuidade"],
    sources: [{
      label: "GTA Wiki - 3D Universe",
      url: "https://gta.fandom.com/wiki/3D_Universe"
    }]
  },
  "HD Universe": {
    category: "Continuidades",
    expanded: "Continuidade moderna iniciada em GTA IV, com cidades reinterpretadas, fisica mais realista, satira contemporanea e mundos mais densos. Liberty City de GTA IV nao e a mesma de GTA III; Los Santos de GTA V nao e simplesmente o mapa de San Andreas.",
    appearsIn: ["GTA IV", "Episodes from Liberty City", "Chinatown Wars", "GTA V", "GTA Online", "GTA VI"],
    examples: ["Niko Bellic vive na Liberty City HD.", "GTA V e GTA Online expandem Los Santos e Blaine County.", "GTA VI leva a continuidade para Leonida e Vice City moderna."],
    whyItMatters: "E a continuidade ativa da franquia e o eixo de GTA Online, GTA V e GTA VI.",
    relatedTerms: ["Canon", "RAGE", "Euphoria", "GTA Online Organization"],
    precisionNotes: ["Personagens antigos podem ser citados sem migrar de universo.", "GTA Online tem cronologia viva e flexivel."],
    tags: ["universo", "HD", "moderno", "GTA Online"],
    sources: [{
      label: "GTA Wiki - HD Universe",
      url: "https://gta.fandom.com/wiki/HD_Universe"
    }]
  },
  "Wanted Level": {
    category: "Sistemas",
    expanded: "Wanted Level e a linguagem policial de GTA. Crimes aumentam estrelas; cada estrela amplia patrulhas, bloqueios, helicopteros, unidades taticas e perseguicoes. O sistema cria tensao imediata entre liberdade e consequencia.",
    appearsIn: ["quase toda a serie principal"],
    examples: ["GTA III pode escalar ate exercito e tanques.", "GTA IV e GTA V usam area de busca e linha de visao.", "GTA Online adapta a resposta policial para sessoes multiplayer."],
    whyItMatters: "Faz a cidade reagir ao jogador e transforma improviso em perseguicao.",
    relatedTerms: ["NOOSE", "FIB", "IAA", "Canon"],
    precisionNotes: ["A implementacao muda por jogo.", "Muitas respostas policiais sao sistema de gameplay, nao evento canonico."],
    tags: ["policia", "sistema", "estrelas", "gameplay"],
    sources: [{
      label: "GTA Wiki - Wanted Level",
      url: "https://gta.fandom.com/wiki/Wanted_Level"
    }]
  },
  "Heist": {
    category: "Estrutura de missao",
    expanded: "Heist e o assalto planejado de GTA: reconhecimento, preparacao, equipe, equipamento, execucao, fuga e pagamento. Em GTA V organiza a campanha; em GTA Online vira pilar cooperativo, solo-friendly ou modular.",
    appearsIn: ["GTA V", "GTA Online", "The Doomsday Heist", "The Diamond Casino Heist", "The Cayo Perico Heist"],
    examples: ["The Jewel Store Job define o modelo em GTA V.", "Pacific Standard marca os heists classicos do Online.", "Cayo Perico muda a economia por permitir grind solo lucrativo."],
    whyItMatters: "Condensa a fantasia criminal moderna da serie em planejamento e recompensa.",
    relatedTerms: ["GTA Online Organization", "FIB", "IAA", "Prequel"],
    precisionNotes: ["Nem todo roubo e heist formal.", "Pagamentos e dificuldade mudam com balanceamentos do Online."],
    tags: ["assalto", "missao", "GTA Online", "crime"],
    sources: [{
      label: "GTA Wiki - Heists",
      url: "https://gta.fandom.com/wiki/Heists"
    }]
  },
  "C.R.A.S.H.": {
    category: "Organizacoes",
    expanded: "Community Resources Against Street Hoodlums e a unidade policial corrupta de GTA San Andreas. Tenpenny, Pulaski e Hernandez representam abuso de poder, chantagem, fabricacao de provas e uso das gangues como ferramenta politica.",
    appearsIn: ["Grand Theft Auto: San Andreas"],
    examples: ["Tenpenny incrimina CJ logo no retorno a Los Santos.", "C.R.A.S.H. usa CJ para remover ameacas.", "A queda de Tenpenny explode nos riots finais."],
    whyItMatters: "E o centro politico da historia de CJ e liga gangues, policia e corrupcao sistemica.",
    relatedTerms: ["Wanted Level", "Canon", "3D Universe"],
    precisionNotes: ["Inspirada por escandalos reais, mas tratada como ficcao satirica."],
    tags: ["policia corrupta", "San Andreas", "Tenpenny", "3D Universe"],
    sources: [{
      label: "GTA Wiki - C.R.A.S.H.",
      url: "https://gta.fandom.com/wiki/Community_Resources_Against_Street_Hoodlums"
    }]
  },
  "FIB": {
    category: "Agencias",
    expanded: "Federal Investigation Bureau e a parodia do FBI no universo GTA. Em GTA V, Dave Norton e Steve Haines colocam Michael, Franklin e Trevor em operacoes clandestinas, disputas internas e manipulacao politica.",
    appearsIn: ["GTA IV", "GTA V", "GTA Online"],
    examples: ["Steve Haines usa os protagonistas em guerra burocratica contra a IAA.", "Dave Norton sustenta a mentira de North Yankton.", "GTA Online retoma arquivos e operacoes do FIB em updates modernos."],
    whyItMatters: "Mostra que o Estado em GTA tambem funciona como faccao interessada.",
    relatedTerms: ["IAA", "NOOSE", "Wanted Level", "HD Universe"],
    precisionNotes: ["O nome e ficcional; a parodia do FBI e intencional."],
    tags: ["governo", "FIB", "corrupcao", "HD Universe"],
    sources: [{
      label: "GTA Wiki - FIB",
      url: "https://gta.fandom.com/wiki/Federal_Investigation_Bureau"
    }]
  },
  "IAA": {
    category: "Agencias",
    expanded: "International Affairs Agency satiriza inteligencia externa, operacoes secretas e rivalidade burocratica com o FIB. Em GTA V e Online, aparece em interrogatorios, conspiracoes e missoes de espionagem.",
    appearsIn: ["GTA IV", "GTA V", "GTA Online"],
    examples: ["A disputa FIB/IAA move varias missoes de GTA V.", "The Doomsday Heist coloca inteligencia e tecnologia no centro da ameaca.", "Agent ULP reaparece em operacoes do Online."],
    whyItMatters: "Amplia a satira politica para agencias de inteligencia e guerra secreta.",
    relatedTerms: ["FIB", "NOOSE", "Heist", "HD Universe"],
    precisionNotes: ["E uma agencia ficcional; conexoes com a CIA sao satiricas, nao literais."],
    tags: ["governo", "IAA", "espionagem", "HD Universe"],
    sources: [{
      label: "GTA Wiki - IAA",
      url: "https://gta.fandom.com/wiki/International_Affairs_Agency"
    }]
  },
  "NOOSE": {
    category: "Agencias",
    expanded: "National Office of Security Enforcement e a resposta tatica pesada da era HD, misturando parodia de seguranca nacional, SWAT e forcas federais. Surge quando a situacao passa da policia comum.",
    appearsIn: ["GTA IV", "GTA V", "GTA Online"],
    examples: ["Equipes taticas aparecem em perseguicoes intensas.", "Helicopteros e unidades armadas reforcam Wanted Level alto.", "Heists e missoes usam NOOSE como pressao institucional."],
    whyItMatters: "Representa a escalada do crime urbano para resposta quase militar.",
    relatedTerms: ["Wanted Level", "FIB", "IAA", "HD Universe"],
    precisionNotes: ["O papel exato varia por jogo, missao e nivel de procurado."],
    tags: ["policia", "tatico", "HD Universe", "governo"],
    sources: [{
      label: "GTA Wiki - NOOSE",
      url: "https://gta.fandom.com/wiki/National_Office_of_Security_Enforcement"
    }]
  },
  "RAGE": {
    category: "Tecnologia",
    expanded: "Rockstar Advanced Game Engine e a engine proprietaria da Rockstar na era HD. Sustenta streaming de mapa, fisica, veiculos, clima, animacoes e sistemas urbanos em mundos grandes e densos.",
    appearsIn: ["GTA IV", "GTA V", "GTA Online", "Red Dead Redemption", "Red Dead Redemption 2"],
    examples: ["GTA IV usa RAGE para direcao pesada e fisica urbana.", "GTA V amplia escala com Los Santos e Blaine County.", "GTA Online evolui a mesma base por anos de updates."],
    whyItMatters: "Marca a virada tecnica da serie apos a era RenderWare.",
    relatedTerms: ["Euphoria", "HD Universe", "GTA Online Organization"],
    precisionNotes: ["Detalhes internos de versoes da engine nem sempre sao publicos."],
    tags: ["engine", "tecnologia", "Rockstar", "HD"],
    sources: [{
      label: "GTA Wiki - RAGE",
      url: "https://gta.fandom.com/wiki/Rockstar_Advanced_Game_Engine"
    }]
  },
  "Euphoria": {
    category: "Tecnologia",
    expanded: "Euphoria e uma tecnologia de animacao procedural para reacoes corporais. Em vez de depender so de animacoes fixas, personagens podem reagir a impacto, queda, atropelamento e colisao com mais naturalidade.",
    appearsIn: ["GTA IV", "GTA V", "Red Dead Redemption"],
    examples: ["Niko reage fisicamente a quedas e atropelamentos.", "GTA V mistura ragdoll, fisica e animacao em tiroteios.", "A tecnologia ajuda a dar peso a acidentes e perseguicoes."],
    whyItMatters: "Foi parte importante da sensacao de realismo fisico na era HD.",
    relatedTerms: ["RAGE", "HD Universe", "Wanted Level"],
    precisionNotes: ["Nem toda reacao fisica visivel e necessariamente Euphoria; ha mistura de sistemas."],
    tags: ["fisica", "animacao", "tecnologia", "HD"],
    sources: [{
      label: "GTA Wiki - Euphoria",
      url: "https://gta.fandom.com/wiki/Euphoria"
    }]
  },
  "Canon": {
    category: "Lore",
    expanded: "Canon em GTA exige cuidado: ha universos separados, finais alternativos, eventos opcionais, piadas internas e referencias que nem sempre confirmam coexistencia. O dossie separa confirmado, interpretacao, easter egg e nao confirmado.",
    appearsIn: ["toda a franquia"],
    examples: ["A Opcao C de GTA V e a leitura mais aceita por GTA Online.", "Personagens da era 3D podem ser citados na era HD como referencia.", "GTA 2 tem ambientacao deliberadamente ambigua."],
    whyItMatters: "Impede que referencias virem fatos duvidosos e organiza a cronologia da saga.",
    relatedTerms: ["2D Universe", "3D Universe", "HD Universe", "Easter egg"],
    precisionNotes: ["Quando algo for incerto, o site deve marcar como interpretacao ou nao confirmado."],
    tags: ["canon", "lore", "continuidade"],
    sources: [{
      label: "GTA Wiki - Universes",
      url: "https://gta.fandom.com/wiki/Universes"
    }]
  },
  "Easter egg": {
    category: "Lore",
    expanded: "Easter eggs sao segredos, piadas, homenagens, pistas visuais ou referencias escondidas. Eles enriquecem o mundo, mas nem sempre devem ser tratados como prova canonica.",
    appearsIn: ["toda a franquia"],
    examples: ["Misterios de Mount Chiliad.", "Referencias a jogos e personagens antigos.", "Objetos, frases e marcas falsas escondidas pelo mapa."],
    whyItMatters: "Mantem a comunidade investigando cidades por anos e reforca o tom de arquivo secreto da serie.",
    relatedTerms: ["Canon", "HD Universe", "Spin-off"],
    precisionNotes: ["Easter egg nao e automaticamente fato canonico.", "Alguns misterios sao deliberadamente ambiguos."],
    tags: ["segredo", "referencia", "lore"],
    sources: [{
      label: "GTA Wiki - Easter Eggs",
      url: "https://gta.fandom.com/wiki/Easter_Eggs"
    }]
  },
  "Prequel": {
    category: "Estrutura narrativa",
    expanded: "Prequel e uma historia que acontece antes de outra ja lancada. Em GTA, prequels costumam explicar guerras de mafia, ascensao de personagens e estados anteriores de uma cidade.",
    appearsIn: ["Liberty City Stories", "Vice City Stories", "San Andreas", "prologo de GTA V"],
    examples: ["Liberty City Stories mostra Toni Cipriani subindo na familia Leone.", "Vice City Stories mostra Vic Vance antes de Tommy.", "O prologo de GTA V mostra North Yankton em 2004."],
    whyItMatters: "Reorganiza a saga por cronologia interna, nao por ordem de lancamento.",
    relatedTerms: ["3D Universe", "Canon", "Spin-off"],
    precisionNotes: ["Prequel nao significa automaticamente spin-off."],
    tags: ["cronologia", "prequel", "historia"],
    sources: [{
      label: "GTA Wiki - Timeline",
      url: "https://gta.fandom.com/wiki/Timeline"
    }]
  },
  "Spin-off": {
    category: "Estrutura narrativa",
    expanded: "Spin-off e uma entrada derivada que muda foco, plataforma, formato ou escala. Em GTA, expansoes e portateis podem ser menores que os jogos numerados, mas ainda carregar peso de lore.",
    appearsIn: ["London 1969", "London 1961", "GTA Advance", "Chinatown Wars", "Episodes from Liberty City"],
    examples: ["Chinatown Wars tem estrutura propria e foco em Triads.", "Episodes from Liberty City mostra GTA IV por outros protagonistas.", "London 1969 e London 1961 sao expansoes historicas."],
    whyItMatters: "Explica por que jogos derivados podem ser essenciais para entender cidades e personagens.",
    relatedTerms: ["Prequel", "2D Universe", "HD Universe"],
    precisionNotes: ["Nem todo spin-off e menos canonico; Chinatown Wars pertence ao HD Universe."],
    tags: ["spin-off", "expansao", "portatil"],
    sources: [{
      label: "GTA Wiki - Grand Theft Auto",
      url: "https://gta.fandom.com/wiki/Grand_Theft_Auto"
    }]
  },
  "GTA Online Organization": {
    category: "GTA Online",
    expanded: "Organizacoes sao a forma como o jogador vira operador economico em GTA Online. O sistema passa por VIP/CEO, motoclubes, bunkers, nightclubs, agencias, arcades, auto shops, salvage yards, bail offices e frentes de lavagem.",
    appearsIn: ["GTA Online"],
    examples: ["CEO gerencia Special Cargo e Vehicle Cargo.", "MC administra negocios de drogas e falsificacao.", "Nightclub conecta negocios antigos em renda passiva.", "Agency abre contratos e Payphone Hits."],
    whyItMatters: "E a espinha dorsal da progressao moderna de GTA Online.",
    relatedTerms: ["Heist", "HD Universe", "Wanted Level"],
    precisionNotes: ["Pagamentos e regras mudam com balanceamentos.", "Algumas atividades funcionam solo; outras foram pensadas para grupo."],
    tags: ["online", "negocios", "CEO", "MC"],
    sources: [{
      label: "GTA Wiki - Organizations",
      url: "https://gta.fandom.com/wiki/Organizations"
    }]
  },
  "Leonida": {
    category: "Cidades e estados",
    expanded: "Leonida e o estado de GTA VI no HD Universe, inspirado na Florida. O material oficial destaca Vice City moderna, praias, pantanos, rodovias, redes sociais, cultura viral e criminalidade contemporanea.",
    appearsIn: ["Grand Theft Auto VI"],
    examples: ["Vice City e a cidade principal destacada.", "Leonida Keys e Port Gellhorn aparecem em materiais de GTA VI.", "Lucia Caminos e Jason Duval sao protagonistas confirmados."],
    whyItMatters: "E o proximo grande espaco narrativo da franquia e o retorno moderno de Vice City.",
    relatedTerms: ["Vice City", "HD Universe", "Canon"],
    precisionNotes: ["Mapa completo e todos os distritos seguem nao confirmados ate o lancamento.", "Data oficial atual registrada no dossie: 19 de novembro de 2026."],
    tags: ["GTA VI", "Leonida", "Vice City", "HD"],
    sources: [{
      label: "Rockstar Games - GTA VI",
      url: "https://www.rockstargames.com/VI"
    }]
  },
  "Vice City": {
    category: "Cidades e estados",
    expanded: "Vice City e o grande simbolo neon da serie: Miami ficcional, art deco, praia, trafico, clubes, luxo e ambicao. Na era 3D, e palco de Vic Vance e Tommy Vercetti; na era HD, retorna em GTA VI dentro de Leonida.",
    appearsIn: ["GTA 1", "Vice City", "Vice City Stories", "GTA VI"],
    examples: ["Vice City Stories mostra a cidade antes de Tommy.", "Vice City acompanha Tommy derrubando Ricardo Diaz.", "GTA VI reinterpreta a cidade com redes sociais e crime moderno."],
    whyItMatters: "Liga nostalgia da era 3D ao futuro da franquia.",
    relatedTerms: ["Leonida", "3D Universe", "HD Universe", "Prequel"],
    precisionNotes: ["A Vice City de GTA VI nao e literalmente a mesma continuidade da Vice City de 1986.", "Alguns grupos e eventos de GTA VI ainda nao foram confirmados."],
    tags: ["cidade", "Miami", "Vice City", "GTA VI"],
    sources: [{
      label: "GTA Wiki - Vice City",
      url: "https://gta.fandom.com/wiki/Vice_City"
    }]
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
  notice: "Imagens promocionais oficiais e imagens de referencia externas usadas com credito e link para a fonte. O projeto e um arquivo editorial de fa e nao afirma propriedade sobre as artes.",
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
  sources: [{
    label: "GTA VI - pagina oficial",
    url: rsgVI,
    note: "Hero, personagens e sinopse de Lucia/Jason."
  }, {
    label: "GTA VI - screenshots oficiais",
    url: rsgVIScreens,
    note: "Screenshots de Lucia, Jason, Vice City, Leonida e regioes."
  }, {
    label: "GTA VI - artworks e wallpapers",
    url: rsgVIArtwork,
    note: "Artes oficiais, postcards e wallpapers."
  }, {
    label: "GTA V - pagina oficial",
    url: rsgVSource,
    note: "Imagens promocionais atuais de Los Santos e GTA V."
  }, {
    label: "GTA Online - pagina oficial",
    url: rsgOnlineSource,
    note: "Imagens de atualizacoes e plataforma online."
  }, {
    label: "GTA Trilogy - pagina oficial",
    url: rsgTrilogySource,
    note: "Artes e screenshots da trilogia 3D remasterizada."
  }, {
    label: "GTA Wiki / Fandom - personagens e locais",
    url: "https://gta.fandom.com/wiki/Grand_Theft_Auto_Wiki",
    note: "Imagens de referencia para fichas de personagens, cidades e estados quando a pagina oficial nao entrega retrato especifico."
  }, {
    label: "GTA Wiki / Fandom - perfis de criadores",
    url: "https://gta.fandom.com/wiki/Category:Developers",
    note: "Fotos publicas e perfis de criadores, produtores, diretores e desenvolvedores ligados a GTA."
  }, {
    label: "Wikimedia Commons - fotos historicas",
    url: "https://commons.wikimedia.org/",
    note: "Fotos de David Jones e Mike Dailly usadas com credito de fonte."
  }, {
    label: "Paginas oficiais dos jogos Rockstar",
    url: rsgGamesSource,
    note: "Screenshots oficiais de GTA 1, GTA 2, GTA III, Vice City, San Andreas, LCS, VCS, GTA IV, EFLC e Chinatown Wars."
  }]
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
const gtaWikiPage = page => `https://gta.fandom.com/wiki/${encodeURIComponent(page.replace(/\s+/g, "_"))}`;
const gtaWikiImage = (page, src, options = {}) => ({
  src,
  alt: `Imagem de ${page} via GTA Wiki`,
  source: gtaWikiPage(page),
  caption: `GTA Wiki - ${page}`,
  credit: gtaWikiCredit,
  ...options
});
const realPersonCredit = "Foto publica usada com credito e link para a fonte indicada.";
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
  "gta-1": gtaWikiImage("Grand Theft Auto (1997 game)", "https://static.wikia.nocookie.net/gtawiki/images/8/80/GTA1_Box_Art.jpg/revision/latest/scale-to-width-down/972?cb=20240224110526", {
    fit: "contain"
  }),
  "london-1969": gtaWikiImage("Grand Theft Auto: London 1969", "https://static.wikia.nocookie.net/gtawiki/images/f/fc/GTA_London_1969_Box_Art.jpg/revision/latest/scale-to-width-down/972?cb=20240225010807", {
    fit: "contain"
  }),
  "london-1961": gtaWikiImage("Grand Theft Auto: London 1961", "https://static.wikia.nocookie.net/gtawiki/images/7/7a/GTALondon1961-InfoboxImage.jpg/revision/latest/scale-to-width-down/972?cb=20250831025636", {
    fit: "contain"
  }),
  "gta-2": gtaWikiImage("Grand Theft Auto 2", "https://static.wikia.nocookie.net/gtawiki/images/4/40/GTA2_Box_Art.jpg/revision/latest/scale-to-width-down/972?cb=20240225005506", {
    fit: "contain"
  }),
  "gta-iii": gtaWikiImage("Grand Theft Auto III", "https://static.wikia.nocookie.net/gtawiki/images/f/f6/GTA3_Box_Art.jpg/revision/latest/scale-to-width-down/972?cb=20200723205441", {
    fit: "contain"
  }),
  "vice-city": gtaWikiImage("Grand Theft Auto: Vice City", "https://static.wikia.nocookie.net/gtawiki/images/3/36/GTA_Vice_City_Box_Art.jpg/revision/latest/scale-to-width-down/972?cb=20240224223852", {
    fit: "contain"
  }),
  "san-andreas": gtaWikiImage("Grand Theft Auto: San Andreas", "https://static.wikia.nocookie.net/gtawiki/images/2/23/CoverArt-GTASA.png/revision/latest/scale-to-width-down/972?cb=20260330025010", {
    fit: "contain"
  }),
  "gta-advance": gtaWikiImage("Grand Theft Auto Advance", "https://static.wikia.nocookie.net/gtawiki/images/f/f6/GTAA-SocialClubCover.jpg/revision/latest/scale-to-width-down/972?cb=20190524102713", {
    fit: "contain"
  }),
  "liberty-city-stories": gtaWikiImage("Grand Theft Auto: Liberty City Stories", "https://static.wikia.nocookie.net/gtawiki/images/4/43/CoverArt-GTALCS.png/revision/latest/scale-to-width-down/972?cb=20240503114247", {
    fit: "contain"
  }),
  "vice-city-stories": gtaWikiImage("Grand Theft Auto: Vice City Stories", "https://static.wikia.nocookie.net/gtawiki/images/f/fb/GTAVCS-Cover.jpg/revision/latest/scale-to-width-down/972?cb=20230718045517", {
    fit: "contain"
  }),
  "gta-iv": gtaWikiImage("Grand Theft Auto IV", "https://static.wikia.nocookie.net/gtawiki/images/4/44/GTAIV-Boxart.jpg/revision/latest/scale-to-width-down/972?cb=20260330025009", {
    fit: "contain"
  }),
  "lost-and-damned": gtaWikiImage("The Lost and Damned", "https://static.wikia.nocookie.net/gtawiki/images/b/bc/Tlad_boxart.JPG/revision/latest/scale-to-width-down/1095?cb=20110914153831", {
    fit: "contain"
  }),
  "chinatown-wars": gtaWikiImage("Grand Theft Auto: Chinatown Wars", "https://static.wikia.nocookie.net/gtawiki/images/7/7d/CoverArt-GTACW.png/revision/latest/scale-to-width-down/972?cb=20220311140351", {
    fit: "contain"
  }),
  "ballad-gay-tony": gtaWikiImage("The Ballad of Gay Tony", "https://static.wikia.nocookie.net/gtawiki/images/d/db/CoverArt-TBoGT.JPG/revision/latest?cb=20250907163031", {
    fit: "contain"
  }),
  "gta-v": gtaWikiImage("Grand Theft Auto V", "https://static.wikia.nocookie.net/gtawiki/images/7/76/CoverArt-GTAV.png/revision/latest/scale-to-width-down/972?cb=20250708181846", {
    fit: "contain"
  }),
  "gta-online": gtaWikiImage("Grand Theft Auto Online", "https://static.wikia.nocookie.net/gtawiki/images/6/65/GTAOnline-BoxArt.jpg/revision/latest/scale-to-width-down/972?cb=20260330025009", {
    fit: "contain"
  }),
  "trilogy-definitive": gtaWikiImage("Grand Theft Auto: The Trilogy - The Definitive Edition", "https://static.wikia.nocookie.net/gtawiki/images/2/26/GTATheTrilogy-TheDefinitiveEdition-MicrosoftStoreBoxArt.jpg/revision/latest?cb=20211026162226", {
    fit: "contain"
  }),
  "gta-vi": gtaWikiImage("Grand Theft Auto VI", "https://static.wikia.nocookie.net/gtawiki/images/a/a5/Artwork-Trailer2Thumbnail2-GTAVI.jpg/revision/latest/scale-to-width-down/1200?cb=20260330025009", {
    position: "center"
  })
};
const officialMediaByCharacterId = {
  "claude": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f21b89ff222aec91c5c432eeb7993a15.jpg", "Arte oficial de personagem de Grand Theft Auto III", rsgTrilogySource, "Rockstar Games", {
    position: "center 22%"
  }),
  "tommy-vercetti": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5b523f9e2578bdc3e95de00427f8910d.jpg", "Arte oficial de personagem de Grand Theft Auto: Vice City", rsgTrilogySource, "Rockstar Games", {
    position: "center 18%"
  }),
  "cj": officialImage("https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d28dac374fa7413d066a50ca33cf6da7.jpg", "Arte oficial de personagem de Grand Theft Auto: San Andreas", rsgTrilogySource, "Rockstar Games", {
    position: "center 18%"
  }),
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
  "claude": gtaWikiImage("Claude", "https://static.wikia.nocookie.net/gtawiki/images/3/34/Claude-GTA3.png/revision/latest?cb=20230412193939", {
    position: "center 18%"
  }),
  "tommy-vercetti": gtaWikiImage("Tommy Vercetti", "https://static.wikia.nocookie.net/gtawiki/images/a/ae/TommyVercetti-GTAVC.jpg/revision/latest?cb=20220618090315", {
    position: "center 18%"
  }),
  "cj": gtaWikiImage("Carl Johnson", "https://static.wikia.nocookie.net/gtawiki/images/7/70/CJ-GTASA.png/revision/latest?cb=20260330025009", {
    position: "center 16%"
  }),
  "mike": gtaWikiImage("Mike", "https://static.wikia.nocookie.net/gtawiki/images/a/a5/Mike-GTAA.jpg/revision/latest?cb=20230521021239"),
  "toni-cipriani": gtaWikiImage("Toni Cipriani", "https://static.wikia.nocookie.net/gtawiki/images/e/e1/ToniCipriani-GTAIII.png/revision/latest?cb=20230406180025"),
  "vic-vance": gtaWikiImage("Victor Vance", "https://static.wikia.nocookie.net/gtawiki/images/c/cb/VictorVance-GTAVC2.png/revision/latest?cb=20230419175026"),
  "niko-bellic": gtaWikiImage("Niko Bellic", "https://static.wikia.nocookie.net/gtawiki/images/9/9e/NikoBellic-GTAIV-Portrait.png/revision/latest?cb=20260212152128"),
  "johnny-klebitz": gtaWikiImage("Johnny Klebitz", "https://static.wikia.nocookie.net/gtawiki/images/4/43/JohnnyKlebitz-GTAV.png/revision/latest?cb=20230630145509"),
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
  "amanda-de-santa": gtaWikiImage("Amanda De Santa", "https://static.wikia.nocookie.net/gtawiki/images/6/65/AmandaDeSanta-GTAOee-Portrait.png/revision/latest?cb=20251205171844"),
  "jimmy-de-santa": gtaWikiImage("Jimmy De Santa", "https://static.wikia.nocookie.net/gtawiki/images/2/25/JimmyDeSanta-GTAO.png/revision/latest?cb=20191214061001"),
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
  "billy-grey": gtaWikiImage("Billy Grey", "https://static.wikia.nocookie.net/gtawiki/images/9/94/BillyGrey-TBOGT.jpg/revision/latest?cb=20260214040810"),
  "ashley-butler": gtaWikiImage("Ashley Butler", "https://static.wikia.nocookie.net/gtawiki/images/c/c7/AshleyButler-GTAVee.png/revision/latest?cb=20220620214254"),
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
  "liberty-city": [gtaWikiCityMediaById["liberty-city"], gtaWikiImage("Algonquin", "https://static.wikia.nocookie.net/gtawiki/images/0/09/Algonquin-GTAIV-Montage.jpg/revision/latest/scale-to-width-down/853?cb=20181115153946"), gtaWikiImage("Broker", "https://static.wikia.nocookie.net/gtawiki/images/e/e0/Broker-GTAIV-Montage.png/revision/latest/scale-to-width-down/853?cb=20240424132848"), gtaWikiImage("Portland", "https://static.wikia.nocookie.net/gtawiki/images/4/47/Portland-GTAIII-Montage.png/revision/latest/scale-to-width-down/853?cb=20210917042933"), gtaWikiImage("Staunton Island", "https://static.wikia.nocookie.net/gtawiki/images/5/51/StauntonIsland-GTAIII-Montage.png/revision/latest/scale-to-width-down/853?cb=20210917045046"), gtaWikiImage("Shoreside Vale", "https://static.wikia.nocookie.net/gtawiki/images/6/6e/ShoresideVale-GTAIII-Montage.png/revision/latest/scale-to-width-down/853?cb=20210917043718")],
  "vice-city": [officialMediaByCityId["vice-city"], gtaWikiCityMediaById["vice-city"], gtaWikiImage("Vice City (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/7/76/ViceCity-GTAVC-Montage.png/revision/latest/scale-to-width-down/853?cb=20240406230242"), gtaWikiImage("Vice City Beach", "https://static.wikia.nocookie.net/gtawiki/images/8/8c/ViceCityBeach-GTAVC-Montage.jpg/revision/latest/scale-to-width-down/853?cb=20240406231330"), gtaWikiImage("Starfish Island", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/StarfishIsland-GTAVC.png/revision/latest/scale-to-width-down/1200?cb=20190202220220"), gtaWikiImage("Vice Point", "https://static.wikia.nocookie.net/gtawiki/images/4/4f/VicePoint-GTAVC.png/revision/latest/scale-to-width-down/1200?cb=20190202220220")],
  "san-andreas": [gtaWikiCityMediaById["san-andreas"], gtaWikiCityMediaById["los-santos"], gtaWikiCityMediaById["san-fierro"], gtaWikiCityMediaById["las-venturas"], officialMediaByCityId["san-andreas"]],
  "los-santos": [officialMediaByCityId["los-santos"], gtaWikiCityMediaById["los-santos"], gtaWikiImage("South Los Santos", "https://static.wikia.nocookie.net/gtawiki/images/3/31/SouthLosSantos-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200203184747"), gtaWikiImage("Vespucci Beach", "https://static.wikia.nocookie.net/gtawiki/images/6/64/VespucciBeach-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200206195727"), gtaWikiImage("Rockford Hills", "https://static.wikia.nocookie.net/gtawiki/images/f/f0/RockfordHills-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200202164035")],
  "san-fierro": [gtaWikiCityMediaById["san-fierro"], officialMediaByCityId["san-fierro"], gtaWikiCityMediaById["san-andreas"]],
  "las-venturas": [gtaWikiCityMediaById["las-venturas"], officialMediaByCityId["las-venturas"], gtaWikiCityMediaById["san-andreas"]],
  "blaine-county": [gtaWikiCityMediaById["blaine-county"], gtaWikiImage("Sandy Shores", "https://static.wikia.nocookie.net/gtawiki/images/0/07/SandyShores-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200331055042"), gtaWikiImage("Paleto Bay", "https://static.wikia.nocookie.net/gtawiki/images/3/3a/PaletoBay-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200303172609"), gtaWikiImage("Alamo Sea", "https://static.wikia.nocookie.net/gtawiki/images/1/13/AlamoSea-GTAV-West.png/revision/latest/scale-to-width-down/1200?cb=20201118181624"), gtaWikiImage("Mount Chiliad (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/4/42/MountChiliad-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200301225029"), gtaWikiImage("Fort Zancudo", "https://static.wikia.nocookie.net/gtawiki/images/7/71/FortZancudo-GTAV-IngameGPS-Map.png/revision/latest/scale-to-width-down/1200?cb=20200303172858")],
  "north-yankton": [gtaWikiCityMediaById["north-yankton"], gtaWikiImage("Ludendorff", "https://static.wikia.nocookie.net/gtawiki/images/f/f4/Ludendorff-GTAV-SnapmaticPrintMap.png/revision/latest/scale-to-width-down/1200?cb=20220424081947"), officialMediaByCityId["north-yankton"]],
  "anywhere-city": [gtaWikiImage("Downtown District", "https://static.wikia.nocookie.net/gtawiki/images/0/08/DowntownDistrict-GTA2-Montage.png/revision/latest/scale-to-width-down/912?cb=20221012145235"), gtaWikiCityMediaById["anywhere-city"], gtaWikiImage("Residential District", "https://static.wikia.nocookie.net/gtawiki/images/9/90/ResidentialDistrict-GTA2-MapPC.png/revision/latest?cb=20191221060619"), gtaWikiImage("Industrial District", "https://static.wikia.nocookie.net/gtawiki/images/5/59/IndustrialDistrict-GTA2-MapPC.png/revision/latest?cb=20191221060618")],
  "london": [gtaWikiCityMediaById["london"], gtaWikiGameMediaById["london-1969"], gtaWikiGameMediaById["london-1961"]],
  "leonida": [officialMediaByCityId["leonida"], gtaWikiCityMediaById["leonida"], gtaWikiImage("Leonida Keys", "https://static.wikia.nocookie.net/gtawiki/images/5/59/LeonidaKeys-GTAVI-CroppedPostcard.png/revision/latest/scale-to-width-down/1200?cb=20250507043056"), gtaWikiImage("Port Gellhorn", "https://static.wikia.nocookie.net/gtawiki/images/9/9f/PortGellhorn-GTAVI-CroppedPostcard.png/revision/latest/scale-to-width-down/1200?cb=20250507043050"), gtaWikiCityMediaById["vice-city"]]
};
const cityUniverseGalleryMediaById = {
  "2d": {
    "liberty-city": [gtaWikiImage("Liberty City (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/2/28/LibertyCity-GTA1-Map-LCOnly.jpg/revision/latest?cb=20230128050359"), gtaWikiGameMediaById["gta-1"]],
    "vice-city": [gtaWikiImage("Vice City (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/2/23/ViceCity-GTA1-Montage.png/revision/latest?cb=20220906004340"), gtaWikiGameMediaById["gta-1"]],
    "san-andreas": [gtaWikiImage("San Andreas (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/0a/SanAndreas-GTA1-Montage.png/revision/latest?cb=20220906004337"), gtaWikiGameMediaById["gta-1"]],
    "anywhere-city": [gtaWikiImage("Downtown District (GTA 2)", "https://static.wikia.nocookie.net/gtawiki/images/0/08/DowntownDistrict-GTA2-Montage.png/revision/latest/scale-to-width-down/912?cb=20221012145235"), gtaWikiCityMediaById["anywhere-city"], gtaWikiImage("Residential District (GTA 2)", "https://static.wikia.nocookie.net/gtawiki/images/9/90/ResidentialDistrict-GTA2-MapPC.png/revision/latest?cb=20191221060619")],
    "london": [gtaWikiCityMediaById["london"], gtaWikiGameMediaById["london-1969"], gtaWikiGameMediaById["london-1961"]]
  },
  "3d": {
    "liberty-city": [gtaWikiImage("Portland (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/4/47/Portland-GTAIII-Montage.png/revision/latest/scale-to-width-down/853?cb=20210917042933"), gtaWikiImage("Staunton Island (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/5/51/StauntonIsland-GTAIII-Montage.png/revision/latest/scale-to-width-down/853?cb=20210917045046"), gtaWikiImage("Shoreside Vale (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/6/6e/ShoresideVale-GTAIII-Montage.png/revision/latest/scale-to-width-down/853?cb=20210917043718"), gtaWikiGameMediaById["liberty-city-stories"]],
    "vice-city": [gtaWikiImage("Vice City (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/7/76/ViceCity-GTAVC-Montage.png/revision/latest/scale-to-width-down/853?cb=20240406230242"), gtaWikiImage("Vice City Beach (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/8/8c/ViceCityBeach-GTAVC-Montage.jpg/revision/latest/scale-to-width-down/853?cb=20240406231330"), gtaWikiImage("Starfish Island (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/StarfishIsland-GTAVC.png/revision/latest/scale-to-width-down/1200?cb=20190202220220"), gtaWikiImage("Vice Point (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/4/4f/VicePoint-GTAVC.png/revision/latest/scale-to-width-down/1200?cb=20190202220220")],
    "san-andreas": [gtaWikiCityMediaById["san-andreas"], gtaWikiImage("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/1/10/LosSantos-GTASA-MapFull-CityLimits.png/revision/latest?cb=20220223065712"), gtaWikiCityMediaById["san-fierro"], gtaWikiCityMediaById["las-venturas"], officialMediaByCityId["san-andreas"]],
    "los-santos": [gtaWikiImage("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/1/10/LosSantos-GTASA-MapFull-CityLimits.png/revision/latest?cb=20220223065712"), officialMediaByCityId["san-andreas"]],
    "san-fierro": [gtaWikiCityMediaById["san-fierro"], officialMediaByCityId["san-fierro"]],
    "las-venturas": [gtaWikiCityMediaById["las-venturas"], officialMediaByCityId["las-venturas"]]
  },
  "hd": {
    "liberty-city": [gtaWikiCityMediaById["liberty-city"], gtaWikiImage("Algonquin (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/09/Algonquin-GTAIV-Montage.jpg/revision/latest/scale-to-width-down/853?cb=20181115153946"), gtaWikiImage("Broker (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/e/e0/Broker-GTAIV-Montage.png/revision/latest/scale-to-width-down/853?cb=20240424132848"), officialMediaByCityId["liberty-city"]],
    "vice-city": [officialMediaByCityId["vice-city"], gtaWikiCityMediaById["vice-city"], gtaWikiImage("Vice City (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/2/26/ViceCity-GTAVI-Montage.jpg/revision/latest/scale-to-width-down/1200?cb=20250509052851")],
    "san-andreas": [officialMediaByCityId["los-santos"], officialMediaByCityId["blaine-county"], gtaWikiCityMediaById["los-santos"], gtaWikiCityMediaById["blaine-county"]],
    "los-santos": [officialMediaByCityId["los-santos"], gtaWikiCityMediaById["los-santos"], gtaWikiImage("South Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/3/31/SouthLosSantos-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200203184747"), gtaWikiImage("Vespucci Beach (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/6/64/VespucciBeach-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200206195727"), gtaWikiImage("Rockford Hills (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/f/f0/RockfordHills-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200202164035")],
    "blaine-county": [gtaWikiCityMediaById["blaine-county"], gtaWikiImage("Sandy Shores (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/07/SandyShores-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200331055042"), gtaWikiImage("Paleto Bay (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/3/3a/PaletoBay-IngameGPS-GTAV-Map.png/revision/latest/scale-to-width-down/1200?cb=20200303172609"), gtaWikiImage("Alamo Sea (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/1/13/AlamoSea-GTAV-West.png/revision/latest/scale-to-width-down/1200?cb=20201118181624"), officialMediaByCityId["blaine-county"]],
    "north-yankton": [gtaWikiCityMediaById["north-yankton"], gtaWikiImage("Ludendorff", "https://static.wikia.nocookie.net/gtawiki/images/f/f4/Ludendorff-GTAV-SnapmaticPrintMap.png/revision/latest/scale-to-width-down/1200?cb=20220424081947"), officialMediaByCityId["north-yankton"]],
    "leonida": [officialMediaByCityId["leonida"], gtaWikiCityMediaById["leonida"], gtaWikiImage("Leonida Keys", "https://static.wikia.nocookie.net/gtawiki/images/5/59/LeonidaKeys-GTAVI-CroppedPostcard.png/revision/latest/scale-to-width-down/1200?cb=20250507043056"), gtaWikiImage("Port Gellhorn", "https://static.wikia.nocookie.net/gtawiki/images/9/9f/PortGellhorn-GTAVI-CroppedPostcard.png/revision/latest/scale-to-width-down/1200?cb=20250507043050"), gtaWikiCityMediaById["vice-city"]]
  }
};
const cityPhoto = (page, src, label, options = {}) => gtaWikiImage(page, src, {
  alt: `Screenshot de ${label || page}`,
  caption: `GTA Wiki - ${label || page}`,
  ...options
});
const refinedCityUniverseGalleryMediaById = {
  "2d": {
    "liberty-city": [cityPhoto("Liberty City (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/05/LibertyCity-GTA1-GBC.png/revision/latest?cb=20220107215835", "Liberty City 2D"), cityPhoto("Liberty City (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/5/5b/LibertyCityandNewGuernsey-GTA1-GBC.png/revision/latest?cb=20220107215837", "Liberty City e New Guernsey 2D"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/8/89/Screenshots-GTA-ElectronicPressKit-LC2.png/revision/latest?cb=20241120235445", "Liberty City screenshot 1"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/f/f0/Screenshots-GTA-ElectronicPressKit-LC5.png/revision/latest?cb=20241120235447", "Liberty City screenshot 2"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/4/4b/Screenshots-GTA-ElectronicPressKit-LC8.png/revision/latest?cb=20241120235448", "Liberty City screenshot 3"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/8/8f/Screenshots-GTA-ElectronicPressKit-Garage-NEWYORK.png/revision/latest?cb=20241120235811", "Liberty City garage"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/b/b4/Screenshots-GTA-ElectronicPressKit-GTA19.png/revision/latest?cb=20241120235635", "Liberty City street action")],
    "vice-city": [cityPhoto("Vice City (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/9/91/ViceCity-GTA1-GBC.png/revision/latest?cb=20220107214002", "Vice City 2D"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/8/8d/Screenshots-GTA-ElectronicPressKit-VC1.png/revision/latest?cb=20241120235628", "Vice City screenshot 1"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/d/d9/Screenshots-GTA-ElectronicPressKit-VC2.png/revision/latest?cb=20241120235427", "Vice City screenshot 2"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/8/84/Screenshots-GTA-ElectronicPressKit-VC5.png/revision/latest?cb=20241120235429", "Vice City screenshot 3"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/7/78/Screenshots-GTA-ElectronicPressKit-VC6.png/revision/latest?cb=20241120235430", "Vice City screenshot 4"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/5/57/Screenshots-GTA-ElectronicPressKit-VC7.png/revision/latest?cb=20241120235431", "Vice City screenshot 5"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/d/de/Screenshots-GTA-ElectronicPressKit-Garage-MIAMI.png/revision/latest?cb=20241120235810", "Vice City garage")],
    "san-andreas": [cityPhoto("San Andreas (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/07/SanAndreasCity-GTA1-GBC.png/revision/latest?cb=20220107213939", "San Andreas 2D"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/7/7d/Screenshots-GTA-ElectronicPressKit-SA1.png/revision/latest?cb=20241120235449", "San Andreas screenshot 1"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/f/f9/Screenshots-GTA-ElectronicPressKit-SA2.png/revision/latest?cb=20241120235450", "San Andreas screenshot 2"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/a/a2/Screenshots-GTA-ElectronicPressKit-SA4.png/revision/latest?cb=20241120235452", "San Andreas screenshot 3"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/7/71/Screenshots-GTA-ElectronicPressKit-SA5.png/revision/latest?cb=20241120235620", "San Andreas screenshot 4"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/5/51/Screenshots-GTA-ElectronicPressKit-SA6.png/revision/latest?cb=20241120235621", "San Andreas screenshot 5"), cityPhoto("Grand Theft Auto (1997 game)/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/b/b0/Screenshots-GTA-ElectronicPressKit-Garage-SANFRAN.png/revision/latest?cb=20241120235813", "San Andreas garage")],
    "anywhere-city": [cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/0/01/Screenshots-GTA2-AdrenalineVault-SS1.jpg/revision/latest?cb=20241114185945", "Anywhere City gameplay 1"), cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/3/33/Screenshots-GTA2-AdrenalineVault-SS2.jpg/revision/latest?cb=20241114185946", "Anywhere City gameplay 2"), cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/9/9f/Screenshots-GTA2-AdrenalineVault-SS3.jpg/revision/latest?cb=20241114185947", "Anywhere City gameplay 3"), cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/0/08/Screenshots-GTA2-AdrenalineVault-SS4.jpg/revision/latest?cb=20241114185948", "Anywhere City gameplay 4"), cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/f/fa/Screenshots-GTA2-AdrenalineVault-SS5.jpg/revision/latest?cb=20241114185949", "Anywhere City gameplay 5"), cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/2/2e/Screenshots-GTA2-AdrenalineVault-SS6.jpg/revision/latest?cb=20241114185950", "Anywhere City gameplay 6"), cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/d/dd/Screenshots-GTA2-IGN-PC-SS1.jpg/revision/latest?cb=20241114190135", "Anywhere City gameplay 7"), cityPhoto("Grand Theft Auto 2/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/c/c3/Screenshots-GTA2-IGN-PC-SS10.jpg/revision/latest?cb=20241114190143", "Anywhere City gameplay 8"), cityPhoto("Anywhere City", "https://static.wikia.nocookie.net/gtawiki/images/1/16/AnywhereCity-GTA2-StartingPoint.jpg/revision/latest?cb=20111201183824", "Anywhere City starting point")],
    "london": [cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/7/73/BatterseaPark-GTAL69-DebugCamera.png/revision/latest?cb=20221103233912", "Battersea Park"), cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/b/b5/BatterseaPowerStation-GTAL69-DebugCamera.png/revision/latest?cb=20221103233913", "Battersea Power Station"), cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/1/1a/BuckinghamPalace-GTAL69-DebugCamera.png/revision/latest?cb=20221103233915", "Buckingham Palace"), cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/3/3b/NationalGallery-GTAL69-DebugCamera.png/revision/latest?cb=20221103233918", "National Gallery"), cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/0/08/PalaceofWestminster-GTAL69-DebugCamera.png/revision/latest?cb=20221103233919", "Palace of Westminster"), cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/4/49/PiccadillyCircus-GTAL69-DebugCamera.png/revision/latest?cb=20221103233921", "Piccadilly Circus"), cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/2/2a/TowerBridge-GTAL69-DebugCamera.png/revision/latest?cb=20221103233924", "Tower Bridge"), cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/f/f4/TowerofLondon-GTAL69-DebugCamera.png/revision/latest?cb=20221103233926", "Tower of London"), cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/4/49/TrafalgarSquare-GTAL69-DebugCamera.png/revision/latest?cb=20221103233927", "Trafalgar Square"), cityPhoto("London", "https://static.wikia.nocookie.net/gtawiki/images/f/f4/WestminsterAbbey-GTAL69-DebugCamera.png/revision/latest?cb=20221103233928", "Westminster Abbey")]
  },
  "3d": {
    "liberty-city": [cityPhoto("Portland", "https://static.wikia.nocookie.net/gtawiki/images/2/2f/AtlanticQuays-GTA3-panorama.jpg/revision/latest?cb=20100117170918", "Atlantic Quays"), cityPhoto("Portland", "https://static.wikia.nocookie.net/gtawiki/images/b/b7/Chinatown-GTA3-westarch.jpg/revision/latest?cb=20100116133322", "Chinatown em Portland"), cityPhoto("Portland", "https://static.wikia.nocookie.net/gtawiki/images/5/5d/PortlandHarbor-GTA3-northeastwards.jpg/revision/latest?cb=20100201201708", "Portland Harbor"), cityPhoto("Portland", "https://static.wikia.nocookie.net/gtawiki/images/1/14/PortlandView-GTA3-northwards.jpg/revision/latest?cb=20100212054337", "Vista de Portland"), cityPhoto("Portland", "https://static.wikia.nocookie.net/gtawiki/images/c/c9/RedLightDistrict-GTA3-northwards.jpg/revision/latest?cb=20091121184836", "Red Light District"), cityPhoto("Staunton Island", "https://static.wikia.nocookie.net/gtawiki/images/a/a0/BedfordPoint-GTA3-TimesSquarespoof.jpg/revision/latest?cb=20091107184558", "Bedford Point"), cityPhoto("Shoreside Vale", "https://static.wikia.nocookie.net/gtawiki/images/5/52/CedarGrove-GTA3-eastwards.jpg/revision/latest?cb=20100116124418", "Cedar Grove"), cityPhoto("Francis International Airport", "https://static.wikia.nocookie.net/gtawiki/images/1/1f/FrancisInternationalAirport-GTA3-mainterminal.jpg/revision/latest?cb=20091107183441", "Francis International Airport"), cityPhoto("Cochrane Dam", "https://static.wikia.nocookie.net/gtawiki/images/3/36/GTA_3_Cochrane_Dam.png/revision/latest?cb=20170420215249", "Cochrane Dam"), cityPhoto("Shoreside Vale", "https://static.wikia.nocookie.net/gtawiki/images/7/75/WichitaGardens-GTA3-southwestwards.jpg/revision/latest?cb=20091111104537", "Wichita Gardens")],
    "vice-city": [cityPhoto("Vice City (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/d/d7/ViceCity-GTAVC-OfficialRockstarHighResDownload.png/revision/latest?cb=20190325215432", "Vice City skyline"), cityPhoto("Ocean Drive", "https://static.wikia.nocookie.net/gtawiki/images/e/ee/OceanDrive-GTAVC.png/revision/latest?cb=20190120113556", "Ocean Drive"), cityPhoto("Vice Point", "https://static.wikia.nocookie.net/gtawiki/images/6/63/VicePoint-GTAVC-northwards.jpg/revision/latest?cb=20091126151624", "Vice Point"), cityPhoto("Starfish Island", "https://static.wikia.nocookie.net/gtawiki/images/1/1b/StarfishIsland-GTAVC-AerialView.jpg/revision/latest?cb=20100914052419", "Starfish Island"), cityPhoto("Downtown Vice City", "https://static.wikia.nocookie.net/gtawiki/images/a/ae/Downtown-GTAVCS-Night.jpg/revision/latest?cb=20181024113133", "Downtown Vice City"), cityPhoto("Hyman Memorial Stadium", "https://static.wikia.nocookie.net/gtawiki/images/8/89/HymanMemorialStadium-GTAVC-exterior.jpg/revision/latest?cb=20241224202640", "Hyman Memorial Stadium"), cityPhoto("Lighthouse", "https://static.wikia.nocookie.net/gtawiki/images/6/67/Lighthouse-GTAVC-1.png/revision/latest?cb=20181013140010", "Vice City Lighthouse"), cityPhoto("Links Bridge", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/LinksBridge-GTAVC.png/revision/latest?cb=20250116200903", "Links Bridge"), cityPhoto("Washington Beach", "https://static.wikia.nocookie.net/gtawiki/images/3/37/Chunder_Wheel_2.jpg/revision/latest?cb=20080510170345", "Chunder Wheel"), cityPhoto("Fort Baxter Air Base", "https://static.wikia.nocookie.net/gtawiki/images/f/f9/FortBaxterAirBase-GTAVC.jpg/revision/latest?cb=20190630120644", "Fort Baxter Air Base")],
    "san-andreas": [cityPhoto("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/2/23/LosSantos-GTASA-Panorama.jpg/revision/latest?cb=20140429054320", "Los Santos panorama"), cityPhoto("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/c/cc/DowntownLosSantos-GTASA-Overview.jpg/revision/latest?cb=20250111002406", "Downtown Los Santos"), cityPhoto("Grove Street", "https://static.wikia.nocookie.net/gtawiki/images/9/99/GroveStreet-GTASA.jpg/revision/latest?cb=20070510101844", "Grove Street"), cityPhoto("San Fierro (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/4/4e/SanFierro-GTASA-SeenFromMissionaryHill.jpg/revision/latest?cb=20240224234522", "San Fierro from Missionary Hill"), cityPhoto("Gant Bridge", "https://static.wikia.nocookie.net/gtawiki/images/c/cc/GantBridge-GTASA-Sunrise.jpg/revision/latest?cb=20240224233811", "Gant Bridge"), cityPhoto("The Strip", "https://static.wikia.nocookie.net/gtawiki/images/3/38/TheStrip-GTASA-Night.jpg/revision/latest?cb=20070409143559", "The Strip"), cityPhoto("Las Venturas Airport", "https://static.wikia.nocookie.net/gtawiki/images/f/f8/LasVenturasAirport-GTASA.png/revision/latest?cb=20190607210325", "Las Venturas Airport"), cityPhoto("Los Santos International Airport", "https://static.wikia.nocookie.net/gtawiki/images/1/1f/LosSantosInternationalAirport-GTASA.png/revision/latest?cb=20230830040354", "Los Santos International Airport"), cityPhoto("Ocean Docks", "https://static.wikia.nocookie.net/gtawiki/images/5/55/OceanDocks-GTASA-northwards.jpg/revision/latest?cb=20100426073200", "Ocean Docks"), cityPhoto("Las Venturas Welcome Sign", "https://static.wikia.nocookie.net/gtawiki/images/c/cf/LasVenturasWelcomeSign-GTASA-Night.jpg/revision/latest?cb=20240316100431", "Las Venturas Welcome Sign")],
    "los-santos": [cityPhoto("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/2/23/LosSantos-GTASA-Panorama.jpg/revision/latest?cb=20140429054320", "Los Santos panorama"), cityPhoto("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/c/cc/DowntownLosSantos-GTASA-Overview.jpg/revision/latest?cb=20250111002406", "Downtown Los Santos"), cityPhoto("Grove Street", "https://static.wikia.nocookie.net/gtawiki/images/9/99/GroveStreet-GTASA.jpg/revision/latest?cb=20070510101844", "Grove Street"), cityPhoto("Ganton", "https://static.wikia.nocookie.net/gtawiki/images/c/cd/Ganton-GTASA-GroveStreet.png/revision/latest?cb=20190304192346", "Ganton"), cityPhoto("Idlewood", "https://static.wikia.nocookie.net/gtawiki/images/9/9c/Idlewood-GTASA.png/revision/latest?cb=20190304192347", "Idlewood"), cityPhoto("Mulholland", "https://static.wikia.nocookie.net/gtawiki/images/c/cd/Mulholland-GTASA-VinewoodSign.jpg/revision/latest?cb=20100115051930", "Vinewood Sign"), cityPhoto("Ocean Docks", "https://static.wikia.nocookie.net/gtawiki/images/5/55/OceanDocks-GTASA-northwards.jpg/revision/latest?cb=20100426073200", "Ocean Docks"), cityPhoto("Los Santos International Airport", "https://static.wikia.nocookie.net/gtawiki/images/1/1f/LosSantosInternationalAirport-GTASA.png/revision/latest?cb=20230830040354", "Los Santos International Airport"), cityPhoto("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/a/ad/LosSantos-GTASA-NightView.jpg/revision/latest?cb=20111103014605", "Los Santos night view"), cityPhoto("Los Santos (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/5/5c/LosSantos-GTASA-Sunrise.jpg/revision/latest?cb=20111103014819", "Los Santos sunrise")],
    "san-fierro": [cityPhoto("San Fierro (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/4/4e/SanFierro-GTASA-SeenFromMissionaryHill.jpg/revision/latest?cb=20240224234522", "San Fierro from Missionary Hill"), cityPhoto("San Fierro (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/c/c9/SanFierro-GTASA-SeenFromTierraRobada.jpg/revision/latest?cb=20240224233619", "San Fierro from Tierra Robada"), cityPhoto("Chinatown (GTA San Andreas)", "https://static.wikia.nocookie.net/gtawiki/images/7/7b/Chinatown-GTASA-Archway.jpg/revision/latest?cb=20240224233923", "Chinatown archway"), cityPhoto("Gant Bridge", "https://static.wikia.nocookie.net/gtawiki/images/c/cc/GantBridge-GTASA-Sunrise.jpg/revision/latest?cb=20240224233811", "Gant Bridge"), cityPhoto("Gant Bridge", "https://static.wikia.nocookie.net/gtawiki/images/1/11/GarverBridge-GTASA-SanFierroView.jpg/revision/latest?cb=20091213141433", "San Fierro from Garver Bridge"), cityPhoto("Palisades", "https://static.wikia.nocookie.net/gtawiki/images/a/af/PalisadesPark-GTASA-Fountain.jpg/revision/latest?cb=20240224234112", "Palisades Park"), cityPhoto("San Fierro (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/0c/SanFierro-GTASA-TrolleyCaltonHeights.jpg/revision/latest?cb=20080606194100", "Calton Heights trolley"), cityPhoto("Hashbury", "https://static.wikia.nocookie.net/gtawiki/images/0/0c/Hashbury-GTASA-StreetView.jpg/revision/latest?cb=20100525093930", "Hashbury street view"), cityPhoto("Easter Basin", "https://static.wikia.nocookie.net/gtawiki/images/3/37/EasterBasin-GTASA.png/revision/latest?cb=20190322151454", "Easter Basin"), cityPhoto("San Fierro (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/9/90/WindyWindyWindyWindyStreet-GTASA.jpg/revision/latest?cb=20240224234136", "Windy Windy Street")],
    "las-venturas": [cityPhoto("The Strip", "https://static.wikia.nocookie.net/gtawiki/images/0/03/LVstrip.jpeg/revision/latest?cb=20140824165445", "The Strip"), cityPhoto("The Strip", "https://static.wikia.nocookie.net/gtawiki/images/3/38/TheStrip-GTASA-Night.jpg/revision/latest?cb=20070409143559", "The Strip at night"), cityPhoto("The Strip", "https://static.wikia.nocookie.net/gtawiki/images/d/d3/TheStrip-GTASA.png/revision/latest?cb=20190607210411", "The Strip daytime"), cityPhoto("Las Venturas Airport", "https://static.wikia.nocookie.net/gtawiki/images/5/5f/LVA-GTASA-EarlyScreenshot.jpg/revision/latest?cb=20140209141532", "Las Venturas Airport early view"), cityPhoto("Las Venturas Airport", "https://static.wikia.nocookie.net/gtawiki/images/8/88/LVA-GTASA-Entrance.jpg/revision/latest?cb=20091122090507", "Las Venturas Airport entrance"), cityPhoto("Las Venturas Airport", "https://static.wikia.nocookie.net/gtawiki/images/d/db/LasVenturasAirport-GTASA-WelcomeSign.jpg/revision/latest?cb=20090416050231", "Las Venturas Airport welcome sign"), cityPhoto("Las Venturas Airport", "https://static.wikia.nocookie.net/gtawiki/images/f/f8/LasVenturasAirport-GTASA.png/revision/latest?cb=20190607210325", "Las Venturas Airport"), cityPhoto("Las Venturas Welcome Sign", "https://static.wikia.nocookie.net/gtawiki/images/c/cf/LasVenturasWelcomeSign-GTASA-Night.jpg/revision/latest?cb=20240316100431", "Las Venturas sign at night"), cityPhoto("V-Rock Hotel", "https://static.wikia.nocookie.net/gtawiki/images/b/ba/V-RockHotel-GTASA-exterior.jpg/revision/latest?cb=20100709205002", "V-Rock Hotel"), cityPhoto("Roca Escalante", "https://static.wikia.nocookie.net/gtawiki/images/e/ef/PromotionalWebsite-GTASA-Flash-rocaescalante_vrock.jpg/revision/latest?cb=20201212214317", "Roca Escalante")]
  },
  "hd": {
    "liberty-city": [cityPhoto("Algonquin", "https://static.wikia.nocookie.net/gtawiki/images/0/07/Algonquin-GTAIV-Skyline1.png/revision/latest?cb=20181115193933", "Algonquin skyline"), cityPhoto("Algonquin", "https://static.wikia.nocookie.net/gtawiki/images/3/3b/Algonquin-GTAIV-Skyline2.png/revision/latest?cb=20181115193934", "Algonquin skyline 2"), cityPhoto("Algonquin", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/Algonquin-GTAIV-StreetScene.png/revision/latest?cb=20190814143002", "Algonquin street scene"), cityPhoto("Broker Bridge", "https://static.wikia.nocookie.net/gtawiki/images/5/5c/BrokerBridge-GTAIV.png/revision/latest?cb=20180819153722", "Broker Bridge"), cityPhoto("Burlesque", "https://static.wikia.nocookie.net/gtawiki/images/3/37/Burlesque-GTAIV-Night.jpg/revision/latest?cb=20181114174554", "Burlesque at night"), cityPhoto("Chinatown", "https://static.wikia.nocookie.net/gtawiki/images/3/3a/Chinatown-GTAIV.png/revision/latest?cb=20190110183105", "Chinatown HD"), cityPhoto("Grand Easton Terminal", "https://static.wikia.nocookie.net/gtawiki/images/6/69/GrandEastonTerminal-GTAIV.png/revision/latest?cb=20181026125743", "Grand Easton Terminal"), cityPhoto("Middle Park", "https://static.wikia.nocookie.net/gtawiki/images/d/df/MiddlePark-GTAIV.png/revision/latest?cb=20190110132119", "Middle Park"), cityPhoto("Bohan", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/Bohan-GTAIV-Night.png/revision/latest?cb=20160809205324", "Bohan at night"), cityPhoto("Bohan", "https://static.wikia.nocookie.net/gtawiki/images/7/70/SouthBohan-GTA4-westwards.jpg/revision/latest?cb=20090828151016", "South Bohan")],
    "vice-city": [cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/c/ce/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS1.jpg/revision/latest?cb=20250506164253", "Vice City HD screenshot 1"), cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/c/cf/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS2.jpg/revision/latest?cb=20250506164254", "Vice City HD screenshot 2"), cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/e/e6/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS3.jpg/revision/latest?cb=20250506164255", "Vice City HD screenshot 3"), cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS4.jpg/revision/latest?cb=20250506164256", "Vice City HD screenshot 4"), cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/7/77/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS5.jpg/revision/latest?cb=20250506164257", "Vice City HD screenshot 5"), cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/a/a9/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS6.jpg/revision/latest?cb=20250506164259", "Vice City HD screenshot 6"), cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/0/04/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS7.jpg/revision/latest?cb=20250506164300", "Vice City HD screenshot 7"), cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/f/fa/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS8.jpg/revision/latest?cb=20250506164301", "Vice City HD screenshot 8"), cityPhoto("Grand Theft Auto VI/Screenshots", "https://static.wikia.nocookie.net/gtawiki/images/b/be/OfficialScreenshots-GTAVI-PromotionalWebsite-ViceCity-SS9.jpg/revision/latest?cb=20250506164302", "Vice City HD screenshot 9")],
    "san-andreas": [cityPhoto("Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/f/fb/LosSantos-GTAV-PC.jpg/revision/latest?cb=20150327201859", "Los Santos PC"), cityPhoto("Downtown Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/3/3d/DowntownLosSantos-GTAVee.jpg/revision/latest?cb=20240315141712", "Downtown Los Santos HD"), cityPhoto("East Los Santos", "https://static.wikia.nocookie.net/gtawiki/images/2/29/EastLosSantos-GTAVee.jpg/revision/latest?cb=20240315141714", "East Los Santos"), cityPhoto("Del Perro", "https://static.wikia.nocookie.net/gtawiki/images/3/3a/DelPerro-GTAVee.jpg/revision/latest?cb=20240315141706", "Del Perro"), cityPhoto("Blaine County", "https://static.wikia.nocookie.net/gtawiki/images/1/1f/GSDesert.jpg/revision/latest?cb=20140209124722", "Grand Senora Desert"), cityPhoto("Alamo Sea", "https://static.wikia.nocookie.net/gtawiki/images/6/60/AlamoSea-GTAV-Sunset.jpg/revision/latest?cb=20131023002832", "Alamo Sea sunset"), cityPhoto("Sandy Shores", "https://static.wikia.nocookie.net/gtawiki/images/1/17/SandyShores-GTAV-overview.jpg/revision/latest?cb=20140120180934", "Sandy Shores"), cityPhoto("Paleto Bay", "https://static.wikia.nocookie.net/gtawiki/images/0/0d/PaletoBay-GTAV-Aerial.jpg/revision/latest?cb=20131130054542", "Paleto Bay"), cityPhoto("Grapeseed", "https://static.wikia.nocookie.net/gtawiki/images/b/b1/Grapeseed-GTAV-Downtown.jpg/revision/latest?cb=20130921073458", "Grapeseed"), cityPhoto("Los Santos International Airport (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/a/a5/LosSantosInternationalAirport-GTAVee.jpg/revision/latest?cb=20240315141722", "Los Santos International Airport HD")],
    "los-santos": [cityPhoto("Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/f/fb/LosSantos-GTAV-PC.jpg/revision/latest?cb=20150327201859", "Los Santos PC"), cityPhoto("Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/4/40/Los_Santos_at_Night_-_GTAV.png/revision/latest?cb=20141125082924", "Los Santos at night"), cityPhoto("Downtown Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/3/3d/DowntownLosSantos-GTAVee.jpg/revision/latest?cb=20240315141712", "Downtown Los Santos HD"), cityPhoto("Downtown Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/9/9c/DowntownLS-GTAV-day.jpg/revision/latest?cb=20140317221053", "Downtown Los Santos day"), cityPhoto("East Los Santos", "https://static.wikia.nocookie.net/gtawiki/images/2/29/EastLosSantos-GTAVee.jpg/revision/latest?cb=20240315141714", "East Los Santos"), cityPhoto("Del Perro", "https://static.wikia.nocookie.net/gtawiki/images/3/3a/DelPerro-GTAVee.jpg/revision/latest?cb=20240315141706", "Del Perro"), cityPhoto("Vespucci Beach", "https://static.wikia.nocookie.net/gtawiki/images/0/0b/VespucciBeach-GTAV-AerialShot.png/revision/latest?cb=20140312210020", "Vespucci Beach"), cityPhoto("Rockford Hills", "https://static.wikia.nocookie.net/gtawiki/images/b/b7/RockfordHills-GTAV-AerialView.jpg/revision/latest?cb=20131023002436", "Rockford Hills"), cityPhoto("Los Santos (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/5/5a/LosSantos-GTAV-SouthLS.jpg/revision/latest?cb=20151014021921", "South Los Santos"), cityPhoto("Los Santos International Airport (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/a/a5/LosSantosInternationalAirport-GTAVee.jpg/revision/latest?cb=20240315141722", "Los Santos International Airport HD")],
    "blaine-county": [cityPhoto("Blaine County", "https://static.wikia.nocookie.net/gtawiki/images/1/1f/GSDesert.jpg/revision/latest?cb=20140209124722", "Grand Senora Desert"), cityPhoto("Alamo Sea", "https://static.wikia.nocookie.net/gtawiki/images/4/48/Screenshot-AlamoSea-GTAV.jpg/revision/latest?cb=20130328172735", "Alamo Sea"), cityPhoto("Alamo Sea", "https://static.wikia.nocookie.net/gtawiki/images/6/60/AlamoSea-GTAV-Sunset.jpg/revision/latest?cb=20131023002832", "Alamo Sea sunset"), cityPhoto("Blaine County", "https://static.wikia.nocookie.net/gtawiki/images/5/5d/Screenshot-DesertWaterTower-GTAV.jpg/revision/latest?cb=20121110032126", "Desert water tower"), cityPhoto("Sandy Shores", "https://static.wikia.nocookie.net/gtawiki/images/1/17/SandyShores-GTAV-overview.jpg/revision/latest?cb=20140120180934", "Sandy Shores"), cityPhoto("Sandy Shores", "https://static.wikia.nocookie.net/gtawiki/images/9/90/SandyShores-MainAvenue-GTAV.jpg/revision/latest?cb=20230226101922", "Sandy Shores Main Avenue"), cityPhoto("Paleto Bay", "https://static.wikia.nocookie.net/gtawiki/images/0/0d/PaletoBay-GTAV-Aerial.jpg/revision/latest?cb=20131130054542", "Paleto Bay"), cityPhoto("Paleto Bay", "https://static.wikia.nocookie.net/gtawiki/images/d/dc/PaletoBay-GTAV-ViewofMountChiliad.jpg/revision/latest?cb=20130926074910", "Paleto Bay and Mount Chiliad"), cityPhoto("Grapeseed", "https://static.wikia.nocookie.net/gtawiki/images/b/b1/Grapeseed-GTAV-Downtown.jpg/revision/latest?cb=20130921073458", "Grapeseed downtown"), cityPhoto("Grapeseed", "https://static.wikia.nocookie.net/gtawiki/images/c/c6/Grapeseed-GTAV-LookingEast.jpg/revision/latest?cb=20131130054708", "Grapeseed looking east")],
    "north-yankton": [cityPhoto("Ludendorff", "https://static.wikia.nocookie.net/gtawiki/images/0/09/BannerHotel-GTAV-NorthYankton.jpg/revision/latest?cb=20140414202404", "Banner Hotel"), cityPhoto("Ludendorff", "https://static.wikia.nocookie.net/gtawiki/images/9/98/LudendorffAerialView-GTAV.jpg/revision/latest?cb=20140603103957", "Ludendorff aerial view"), cityPhoto("Ludendorff", "https://static.wikia.nocookie.net/gtawiki/images/b/b6/LudendorffChurch-GTAV-Night.png/revision/latest?cb=20131103125443", "Ludendorff Church at night"), cityPhoto("Ludendorff", "https://static.wikia.nocookie.net/gtawiki/images/0/08/PollockCinema-GTAV-Night.png/revision/latest?cb=20210909151932", "Pollock Cinema"), cityPhoto("Ludendorff", "https://static.wikia.nocookie.net/gtawiki/images/b/b0/RearBuildings-GTAVpc-NorthYankton.png/revision/latest?cb=20240720170337", "Ludendorff rear buildings"), cityPhoto("Ludendorff", "https://static.wikia.nocookie.net/gtawiki/images/d/d4/CavalryBoulevard-GTAOe.png/revision/latest?cb=20241014181251", "Cavalry Boulevard")],
    "leonida": [cityPhoto("Leonida Keys", "https://static.wikia.nocookie.net/gtawiki/images/9/9a/OfficialScreenshots-GTAVI-PromotionalWebsite-LeonidaKeys-SS1.jpg/revision/latest?cb=20250506164232", "Leonida Keys 1"), cityPhoto("Leonida Keys", "https://static.wikia.nocookie.net/gtawiki/images/8/8a/OfficialScreenshots-GTAVI-PromotionalWebsite-LeonidaKeys-SS2.jpg/revision/latest?cb=20250506164233", "Leonida Keys 2"), cityPhoto("Leonida Keys", "https://static.wikia.nocookie.net/gtawiki/images/0/0c/OfficialScreenshots-GTAVI-PromotionalWebsite-LeonidaKeys-SS3.jpg/revision/latest?cb=20250506164234", "Leonida Keys 3"), cityPhoto("Leonida Keys", "https://static.wikia.nocookie.net/gtawiki/images/9/99/OfficialScreenshots-GTAVI-PromotionalWebsite-LeonidaKeys-SS4.jpg/revision/latest?cb=20250506164235", "Leonida Keys 4"), cityPhoto("Leonida Keys", "https://static.wikia.nocookie.net/gtawiki/images/a/ab/OfficialScreenshots-GTAVI-PromotionalWebsite-LeonidaKeys-SS5.jpg/revision/latest?cb=20250506164237", "Leonida Keys 5"), cityPhoto("Port Gellhorn", "https://static.wikia.nocookie.net/gtawiki/images/0/0d/OfficialScreenshots-GTAVI-PromotionalWebsite-PortGellhorn-SS1.jpg/revision/latest?cb=20250506164248", "Port Gellhorn 1"), cityPhoto("Port Gellhorn", "https://static.wikia.nocookie.net/gtawiki/images/e/eb/OfficialScreenshots-GTAVI-PromotionalWebsite-PortGellhorn-SS2.jpg/revision/latest?cb=20250506164249", "Port Gellhorn 2"), cityPhoto("Grassrivers", "https://static.wikia.nocookie.net/gtawiki/images/4/48/OfficialScreenshots-GTAVI-PromotionalWebsite-Grassrivers-SS1.jpg/revision/latest?cb=20250506164227", "Grassrivers 1"), cityPhoto("Ambrosia", "https://static.wikia.nocookie.net/gtawiki/images/4/40/OfficialScreenshots-GTAVI-PromotionalWebsite-Ambrosia-SS1.jpg/revision/latest?cb=20250506164219", "Ambrosia"), cityPhoto("Mount Kalaga", "https://static.wikia.nocookie.net/gtawiki/images/a/a7/OfficialScreenshots-GTAVI-PromotionalWebsite-MountKalaga-SS1.jpg/revision/latest?cb=20250506164238", "Mount Kalaga")]
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
  "lost-mc": gtaWikiImage("The Lost MC", "https://static.wikia.nocookie.net/gtawiki/images/3/34/LostMC-GTAIV-Patch.png/revision/latest/scale-to-width-down/1200?cb=20200316125420", {
    fit: "contain"
  }),
  "angels-of-death": gtaWikiImage("Angels of Death", "https://static.wikia.nocookie.net/gtawiki/images/d/d3/AngelsOfDeath-GTAIV-Patch.png/revision/latest?cb=20200316180551", {
    fit: "contain"
  }),
  "russian-mafia": gtaWikiImage("Faustin Mafiya", "https://static.wikia.nocookie.net/gtawiki/images/7/7f/FaustinMafiya-GTA4.png/revision/latest/scale-to-width-down/1200?cb=20250502083914"),
  "pegorino-family": gtaWikiImage("Pegorino Crime Family", "https://static.wikia.nocookie.net/gtawiki/images/4/49/PegorinoCrimeFamily-GTAIV.jpg/revision/latest?cb=20121230090259"),
  "mcreary-family": gtaWikiImage("McReary Crime Family", "https://static.wikia.nocookie.net/gtawiki/images/8/85/McRearyCrimeFamily-GTAIV-Members.jpg/revision/latest/scale-to-width-down/1200?cb=20230901042858"),
  "five-families": gtaWikiImage("The Commission", "https://static.wikia.nocookie.net/gtawiki/images/a/a2/GambettiCrimeFamily-GTAIV.png/revision/latest/scale-to-width-down/1200?cb=20230904010908"),
  "madrazo-cartel": gtaWikiImage("Madrazo Cartel", "https://static.wikia.nocookie.net/gtawiki/images/8/8c/Madrazo-beat-Michael-GTAV.png/revision/latest/scale-to-width-down/1200?cb=20210604172412"),
  "merryweather": gtaWikiImage("Merryweather Security", "https://static.wikia.nocookie.net/gtawiki/images/1/1c/MerryweatherSecurity-GTAV-Logo.png/revision/latest/scale-to-width-down/1200?cb=20200707082416", {
    fit: "contain"
  }),
  "fib": gtaWikiImage("Federal Investigation Bureau", "https://static.wikia.nocookie.net/gtawiki/images/e/e3/FIB-GTAIV-Logo.png/revision/latest?cb=20240514140746", {
    fit: "contain"
  }),
  "iaa": gtaWikiImage("International Affairs Agency", "https://static.wikia.nocookie.net/gtawiki/images/d/df/ULPHQ-Exterior-GTAIV.png/revision/latest/scale-to-width-down/1200?cb=20220529210118"),
  "noose": gtaWikiImage("National Office of Security Enforcement", "https://static.wikia.nocookie.net/gtawiki/images/0/0a/NOOSE-GTAV-Logo.png/revision/latest?cb=20190409192026", {
    fit: "contain"
  }),
  "lspd": gtaWikiImage("Los Santos Police Department (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/e/e9/Gta5-police-station-map_03.png/revision/latest/scale-to-width-down/1200?cb=20140325120451"),
  "lcpd": gtaWikiImage("Liberty City Police Department (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/b/b8/LCPDHQ-GTAIII-Portland.jpg/revision/latest/scale-to-width-down/1200?cb=20230506160310"),
  "crash": gtaWikiImage("Community Resources Against Street Hoodlums", "https://static.wikia.nocookie.net/gtawiki/images/b/b5/C.R.A.S.H.-GTASA.jpg/revision/latest?cb=20130104144200"),
  "epsilon": gtaWikiImage("Epsilon Program (HD Universe)", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/EpsilonProgram-GTAV-Logo.png/revision/latest?cb=20130424083420", {
    fit: "contain"
  }),
  "zaibatsu": gtaWikiImage("Zaibatsu Corporation (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/0a/ZaibatsuCorporation-GTA2-YellowSymbol.jpg/revision/latest?cb=20110404063015", {
    fit: "contain"
  }),
  "loonies": gtaWikiImage("Loonies", "https://static.wikia.nocookie.net/gtawiki/images/0/0d/Loonies-GTA2.PNG/revision/latest?cb=20130731102131"),
  "scientists": gtaWikiImage("Scientists", "https://static.wikia.nocookie.net/gtawiki/images/4/43/SRS-GTA2.PNG/revision/latest?cb=20130731103707", {
    fit: "contain"
  }),
  "krishna": gtaWikiImage("Hare Krishna", "https://static.wikia.nocookie.net/gtawiki/images/6/69/Krishnas-GTA2.PNG/revision/latest?cb=20140327142350"),
  "rednecks": gtaWikiImage("Rednecks", "https://static.wikia.nocookie.net/gtawiki/images/d/d7/Rednecks-GTA2.PNG/revision/latest?cb=20130731103543"),
  "online-orgs": gtaWikiImage("Organizations", "https://static.wikia.nocookie.net/gtawiki/images/1/13/Organizations-GTAO.png/revision/latest?cb=20160203172000")
};
const gtaWikiUniverseMediaById = {
  "2d": gtaWikiImage("2D Universe", "https://static.wikia.nocookie.net/gtawiki/images/b/bb/2DUniverse-Montage.jpg/revision/latest/scale-to-width-down/1200?cb=20230907095749"),
  "3d": gtaWikiImage("3D Universe", "https://static.wikia.nocookie.net/gtawiki/images/6/6b/3DUniverse-Montage.jpg/revision/latest/scale-to-width-down/1200?cb=20230830090342"),
  "hd": gtaWikiImage("HD Universe", "https://static.wikia.nocookie.net/gtawiki/images/e/ec/HDUniverse-Montage.jpg/revision/latest/scale-to-width-down/1200?cb=20250507211150")
};
const rockstarHistoryMedia = [gtaWikiImage("Rockstar North", "https://static.wikia.nocookie.net/gtawiki/images/d/d4/RockstarNorthandDMADesign.png/revision/latest?cb=20240304054229", {
  fit: "contain"
}), gtaWikiImage("Race'n'Chase", "https://static.wikia.nocookie.net/gtawiki/images/0/0b/RaceNChase-PossibleScreenshot.jpg/revision/latest?cb=20140927111915"), gtaWikiGameMediaById["gta-1"], gtaWikiImage("Rockstar Games", "https://static.wikia.nocookie.net/gtawiki/images/f/fe/SentinelClassic-GTAO-front-RockstarGamesLivery.png/revision/latest/scale-to-width-down/1200?cb=20190531084843"), gtaWikiImage("Rockstar North", "https://static.wikia.nocookie.net/gtawiki/images/d/d4/RockstarNorthandDMADesign.png/revision/latest?cb=20240304054229", {
  fit: "contain"
}), gtaWikiGameMediaById["gta-iii"], gtaWikiGameMediaById["san-andreas"], gtaWikiGameMediaById["gta-iv"], gtaWikiGameMediaById["gta-v"], gtaWikiGameMediaById["gta-vi"]];
const rockstarPeopleData = [{
  id: "david-jones",
  name: "David Jones",
  role: "Fundador da DMA Design, criador e produtor",
  era: "DMA / Origem",
  city: "Dundee",
  media: realPersonImage("David Jones", "https://upload.wikimedia.org/wikipedia/commons/c/c4/David_Jones%2C_Gamelab_2018_%28cropped%29.jpg", "https://commons.wikimedia.org/wiki/File:David_Jones,_Gamelab_2018_(cropped).jpg", "Wikimedia Commons - David Jones", {
    position: "center 18%"
  }),
  summary: "Figura central do nascimento da DMA Design em Dundee. Antes de GTA existir, Jones ja tinha transformado a DMA em um estudio respeitado com Lemmings; depois, ajudou a conduzir a ideia que se tornaria Grand Theft Auto.",
  contributions: ["Fundou a DMA Design no fim dos anos 1980, em Dundee, Escocia.", "Ajudou a construir a cultura tecnica que gerou Lemmings, Menace, Blood Money e, mais tarde, GTA.", "Co-criador associado a Grand Theft Auto ao lado de Mike Dailly e da equipe da DMA.", "Representa a ponte entre a cena britanica de microcomputadores, a ambicao de cidades simuladas e o futuro da Rockstar North."],
  games: ["Lemmings", "Grand Theft Auto", "Body Harvest"],
  tags: ["criador", "DMA Design", "produtor", "Dundee"],
  sources: [{
    label: "Wikipedia - David Jones",
    url: "https://en.wikipedia.org/wiki/David_Jones_(video_game_developer)"
  }, {
    label: "GTA Wiki - David Jones",
    url: "https://gta.fandom.com/wiki/David_Jones"
  }, {
    label: "Rockstar North",
    url: "https://en.wikipedia.org/wiki/Rockstar_North"
  }]
}, {
  id: "mike-dailly",
  name: "Mike Dailly",
  role: "Programador, designer e prototipador",
  era: "DMA / Race'n'Chase",
  city: "Dundee",
  media: realPersonImage("Mike Dailly", "https://upload.wikimedia.org/wikipedia/commons/e/e5/Mike_Dailly%2C_2011.jpg", "https://commons.wikimedia.org/wiki/File:Mike_Dailly,_2011.jpg", "Wikimedia Commons - Mike Dailly", {
    position: "center 18%"
  }),
  summary: "Um dos nomes mais importantes da fase inicial da DMA. E frequentemente citado como designer de Lemmings e criador do prototipo original que levaria a Grand Theft Auto, quando a ideia ainda orbitava Race'n'Chase.",
  contributions: ["Foi um dos primeiros funcionarios da DMA Design.", "Trabalhou em Lemmings, marco que deu reputacao internacional ao estudio.", "Criou prototipos e tecnologia ligados ao conceito original de Grand Theft Auto.", "Ajuda a explicar por que GTA nasceu primeiro como sistema urbano e so depois ganhou a forma de saga criminal cinematografica."],
  games: ["Lemmings", "Race'n'Chase", "Grand Theft Auto"],
  tags: ["criador", "programacao", "prototipo", "DMA Design"],
  sources: [{
    label: "Wikipedia - Mike Dailly",
    url: "https://en.wikipedia.org/wiki/Mike_Dailly_(game_designer)"
  }, {
    label: "GTA Wiki - Mike Dailly",
    url: "https://gta.fandom.com/wiki/Mike_Dailly"
  }, {
    label: "Grand Theft Wiki - Race'n'Chase",
    url: "https://www.grandtheftwiki.com/Race%27n%27Chase"
  }]
}, {
  id: "sam-houser",
  name: "Sam Houser",
  role: "Co-fundador e presidente da Rockstar Games",
  era: "Rockstar / Branding",
  city: "Nova York",
  media: realPersonImage("Sam Houser", "https://static.wikia.nocookie.net/gtawiki/images/a/ad/SamHouser-President.png/revision/latest?cb=20220802102226", "https://gta.fandom.com/wiki/Sam_Houser", "GTA Wiki - Sam Houser", {
    position: "center 18%"
  }),
  summary: "O nome mais associado ao comando publico da Rockstar. Vindo da BMG Interactive, Sam Houser ajudou a transformar GTA de jogo transgressor em uma franquia de escala cultural, com identidade de musica, cinema, satira e marketing.",
  contributions: ["Co-fundou a Rockstar Games em 1998 com Dan Houser, Terry Donovan, Jamie King e Gary J. Foreman.", "Foi um dos defensores do potencial de GTA dentro da estrutura BMG/Take-Two.", "Consolidou a Rockstar como selo autoral, com controle forte de tom, trilha, campanha e postura publica.", "Supervisionou a passagem de GTA III, era 3D, era HD, GTA V, GTA Online e o caminho ate GTA VI."],
  games: ["GTA III", "Vice City", "San Andreas", "GTA IV", "GTA V", "GTA Online", "GTA VI"],
  tags: ["fundador", "presidente", "Rockstar Games", "producao"],
  sources: [{
    label: "GTA Wiki - Sam Houser",
    url: "https://gta.fandom.com/wiki/Sam_Houser"
  }, {
    label: "Rockstar Games",
    url: "https://en.wikipedia.org/wiki/Rockstar_Games"
  }, {
    label: "Take-Two Interactive",
    url: "https://en.wikipedia.org/wiki/Take-Two_Interactive"
  }]
}, {
  id: "dan-houser",
  name: "Dan Houser",
  role: "Co-fundador, escritor e produtor criativo",
  era: "Rockstar / Narrativa",
  city: "Nova York",
  media: realPersonImage("Dan Houser", "https://static.wikia.nocookie.net/gtawiki/images/1/1e/DanHouser-VicePresident.jpg/revision/latest?cb=20220802102607", "https://gta.fandom.com/wiki/Dan_Houser", "GTA Wiki - Dan Houser", {
    position: "center 16%"
  }),
  summary: "Foi uma das vozes centrais da escrita da Rockstar durante a fase em que GTA virou satira de massa. Seu trabalho ajuda a explicar o dialogo agressivo, as radios, os personagens contraditorios e o olhar acido sobre os EUA.",
  contributions: ["Co-fundou a Rockstar Games e atuou como vice-presidente criativo por muitos anos.", "Teve papel importante em roteiro, dialogo e tom satirico em GTA e Red Dead.", "Ajudou a transformar cidades em ambientes narrativos cheios de radio, propaganda, televisao e cultura pop falsa.", "Saiu da Rockstar em 2020, encerrando uma das fases editoriais mais marcantes do estudio."],
  games: ["GTA III", "Vice City", "San Andreas", "GTA IV", "GTA V", "Red Dead Redemption"],
  tags: ["fundador", "roteiro", "satira", "producao criativa"],
  sources: [{
    label: "GTA Wiki - Dan Houser",
    url: "https://gta.fandom.com/wiki/Dan_Houser"
  }, {
    label: "Rockstar Games",
    url: "https://en.wikipedia.org/wiki/Rockstar_Games"
  }, {
    label: "Take-Two - saida de Dan Houser",
    url: "https://ir.take2games.com/news-releases/news-release-details/rockstar-games-announces-dan-housers-departure"
  }]
}, {
  id: "terry-donovan",
  name: "Terry Donovan",
  role: "Co-fundador e executivo da Rockstar",
  era: "Rockstar / Negocios",
  city: "Nova York",
  media: realPersonImage("Terry Donovan", "https://static.wikia.nocookie.net/gtawiki/images/e/e8/TerryDonovan-Director.png/revision/latest?cb=20220719203846", "https://gta.fandom.com/wiki/Terry_Donovan", "GTA Wiki - Terry Donovan", {
    position: "center 16%"
  }),
  summary: "Parte do grupo fundador que deu forma empresarial a Rockstar Games. Sua importancia esta na montagem do selo, na operacao de publicacao e na aproximacao entre jogo, musica, clubes e cultura urbana.",
  contributions: ["Co-fundou a Rockstar Games em 1998.", "Atuou em funcoes executivas durante a consolidacao da marca.", "Participou do periodo em que GTA passou de franquia controversa para evento global.", "Representa a dimensao de negocios e cultura pop que diferenciou a Rockstar de uma publicadora tradicional."],
  games: ["GTA III", "Vice City", "San Andreas", "GTA IV"],
  tags: ["fundador", "executivo", "publicacao", "Rockstar Games"],
  sources: [{
    label: "GTA Wiki - Terry Donovan",
    url: "https://gta.fandom.com/wiki/Terry_Donovan"
  }, {
    label: "Rockstar Games",
    url: "https://en.wikipedia.org/wiki/Rockstar_Games"
  }]
}, {
  id: "jamie-king",
  name: "Jamie King",
  role: "Co-fundador e lideranca de producao",
  era: "Rockstar / Producao",
  city: "Nova York",
  media: realPersonImage("Jamie King", "https://static.wikia.nocookie.net/gtawiki/images/e/e6/JamieKing-Director.jpg/revision/latest?cb=20220720201027", "https://gta.fandom.com/wiki/Jamie_King", "GTA Wiki - Jamie King", {
    position: "center 18%"
  }),
  summary: "Um dos cinco fundadores da Rockstar. Teve papel na estruturacao de producao e tecnologia da empresa em sua fase de crescimento, antes de sair e participar da fundacao da 4mm Games.",
  contributions: ["Co-fundou a Rockstar Games junto aos Housers, Terry Donovan e Gary J. Foreman.", "Ajudou a escalar a operacao da Rockstar no periodo GTA III, Vice City e San Andreas.", "Foi citado, ao lado de Gary Foreman, como participante de franquias como GTA, Midnight Club, Max Payne e Bully.", "Depois da Rockstar, fundou a 4mm Games com Gary Foreman e outros executivos."],
  games: ["GTA III", "Vice City", "San Andreas", "Midnight Club", "Bully"],
  tags: ["fundador", "producao", "tecnologia", "Rockstar Games"],
  sources: [{
    label: "GTA Wiki - Jamie King",
    url: "https://gta.fandom.com/wiki/Jamie_King"
  }, {
    label: "GameSpot - 4mm Games",
    url: "https://www.gamespot.com/articles/rockstar-founders-load-4mm/1100-6210102/"
  }, {
    label: "Rockstar Games",
    url: "https://en.wikipedia.org/wiki/Rockstar_Games"
  }]
}, {
  id: "gary-foreman",
  name: "Gary J. Foreman",
  role: "Co-fundador e produtor",
  era: "Rockstar / Tecnologia",
  city: "Nova York",
  media: realPersonImage("Gary J. Foreman", "https://static.wikia.nocookie.net/gtawiki/images/b/bd/GaryForeman-Producer.png/revision/latest?cb=20240904075034", "https://gta.fandom.com/wiki/Gary_J._Foreman", "GTA Wiki - Gary J. Foreman", {
    position: "center 18%"
  }),
  summary: "O fundador menos lembrado pelo grande publico, mas essencial na formacao inicial da Rockstar. E citado em registros historicos como um dos cinco fundadores e depois aparece ligado a funcoes tecnicas e de producao fora da empresa.",
  contributions: ["Co-fundou a Rockstar Games em 1998.", "Participou da fase que transformou a marca em uma estrutura de publicacao global.", "Foi associado a contribuicoes em GTA, Midnight Club, Max Payne e Bully em cobertura sobre sua saida para a 4mm Games.", "A presenca dele no dossie corrige a tendencia comum de reduzir a fundacao da Rockstar apenas aos irmaos Houser."],
  games: ["GTA", "Midnight Club", "Max Payne", "Bully"],
  tags: ["fundador", "produtor", "tecnologia", "Rockstar Games"],
  sources: [{
    label: "GTA Wiki - Gary J. Foreman",
    url: "https://gta.fandom.com/wiki/Gary_J._Foreman"
  }, {
    label: "GameSpot - 4mm Games",
    url: "https://www.gamespot.com/articles/rockstar-founders-load-4mm/1100-6210102/"
  }, {
    label: "Rockstar Games",
    url: "https://en.wikipedia.org/wiki/Rockstar_Games"
  }]
}, {
  id: "leslie-benzies",
  name: "Leslie Benzies",
  role: "Produtor e ex-presidente da Rockstar North",
  era: "Rockstar North / Escala",
  city: "Edimburgo",
  media: realPersonImage("Leslie Benzies", "https://static.wikia.nocookie.net/gtawiki/images/1/17/LeslieBenzies-RockstarNorth.png/revision/latest/scale-to-width-down/900?cb=20220729163459", "https://gta.fandom.com/wiki/Leslie_Benzies", "GTA Wiki - Leslie Benzies", {
    position: "center 16%"
  }),
  summary: "Produtor-chave da fase em que a antiga DMA virou Rockstar North e GTA se tornou uma maquina de mundo aberto. Benzies e associado a GTA III, Vice City, San Andreas, GTA IV e GTA V.",
  contributions: ["Entrou na DMA/Rockstar North antes da explosao global da serie.", "Teve papel central na producao de GTA III, jogo que redefiniu o modelo moderno de mundo aberto.", "Ajudou a coordenar a escalada tecnica e produtiva da era 3D para a era HD.", "Sua saida apos GTA V marcou o fim de uma fase importante da lideranca historica da Rockstar North."],
  games: ["GTA III", "Vice City", "San Andreas", "GTA IV", "GTA V"],
  tags: ["produtor", "Rockstar North", "mundo aberto", "era 3D"],
  sources: [{
    label: "GTA Wiki - Leslie Benzies",
    url: "https://gta.fandom.com/wiki/Leslie_Benzies"
  }, {
    label: "Wikipedia - Leslie Benzies",
    url: "https://en.wikipedia.org/wiki/Leslie_Benzies"
  }, {
    label: "GTA III",
    url: "https://en.wikipedia.org/wiki/Grand_Theft_Auto_III"
  }]
}, {
  id: "aaron-garbut",
  name: "Aaron Garbut",
  role: "Diretor de arte e diretor de mundo",
  era: "Rockstar North / Cidades",
  city: "Edimburgo",
  media: realPersonImage("Aaron Garbut", "https://static.wikia.nocookie.net/gtawiki/images/1/14/AaronGarbut-ArtDirector.jpg/revision/latest?cb=20220630180837", "https://gta.fandom.com/wiki/Aaron_Garbut", "GTA Wiki - Aaron Garbut", {
    position: "center 18%"
  }),
  summary: "Nome fundamental para a identidade visual das cidades da Rockstar. Garbut e associado ao desenho de mundos que parecem observados, documentados e satirizados ao mesmo tempo.",
  contributions: ["Trabalhou na construcao visual de cidades como Liberty City, Vice City, San Andreas e Los Santos.", "Ajudou a definir a linguagem de mapa urbano, arquitetura, bairro, luz e atmosfera da serie.", "E uma das figuras que explicam por que cada GTA moderno parece uma cidade-personagem.", "Na fase HD, sua area se torna ainda mais importante: detalhe ambiental, escala, fotografia e leitura urbana passam a ser narrativa."],
  games: ["GTA III", "Vice City", "San Andreas", "GTA IV", "GTA V", "GTA VI"],
  tags: ["arte", "mundo aberto", "cidades", "Rockstar North"],
  sources: [{
    label: "GTA Wiki - Aaron Garbut",
    url: "https://gta.fandom.com/wiki/Aaron_Garbut"
  }, {
    label: "Rockstar North",
    url: "https://en.wikipedia.org/wiki/Rockstar_North"
  }]
}, {
  id: "obbe-vermeij",
  name: "Obbe Vermeij",
  role: "Programador e diretor tecnico",
  era: "Rockstar North / Tecnologia",
  city: "Edimburgo",
  media: realPersonImage("Obbe Vermeij", "https://static.wikia.nocookie.net/gtawiki/images/9/9c/ObbeVermeij-Director.png/revision/latest/scale-to-width-down/732?cb=20220729174646", "https://gta.fandom.com/wiki/Obbe_Vermeij", "GTA Wiki - Obbe Vermeij", {
    position: "center 16%"
  }),
  summary: "Programador historico da Rockstar North, conhecido tambem por registrar memorias tecnicas em seu blog. Seu trabalho ajuda a iluminar os bastidores de streaming, sistemas urbanos e limites de hardware da era PS2.",
  contributions: ["Atuou em tecnologia e programacao durante a fase GTA III, Vice City e San Andreas.", "Ajuda a explicar os compromissos tecnicos por tras de trafego, clima, streaming de mapa e comportamento urbano.", "Suas anotacoes publicas viraram fonte rara sobre como a equipe pensava problemas tecnicos internamente.", "Mostra que a magia da era 3D tambem veio de engenharia invisivel, nao apenas de roteiro e marketing."],
  games: ["GTA III", "Vice City", "San Andreas", "GTA IV"],
  tags: ["programacao", "direcao tecnica", "Rockstar North", "era PS2"],
  sources: [{
    label: "GTA Wiki - Obbe Vermeij",
    url: "https://gta.fandom.com/wiki/Obbe_Vermeij"
  }, {
    label: "Inside Rockstar North",
    url: "https://insiderockstarnorth.blogspot.com/"
  }, {
    label: "Rockstar North",
    url: "https://en.wikipedia.org/wiki/Rockstar_North"
  }]
}, {
  id: "imran-sarwar",
  name: "Imran Sarwar",
  role: "Diretor de design e produtor",
  era: "Rockstar / Design",
  city: "Rockstar North",
  media: realPersonImage("Imran Sarwar", "https://static.wikia.nocookie.net/gtawiki/images/9/90/ImranSarwar-DesignDirector.png/revision/latest?cb=20220828201232", "https://gta.fandom.com/wiki/Imran_Sarwar", "GTA Wiki - Imran Sarwar", {
    position: "center 18%"
  }),
  summary: "Lideranca de design ligada a jogos modernos da Rockstar. Seu perfil representa a fase em que GTA deixa de ser apenas missao e mapa para virar ecossistema de atividades, economia, veiculos, upgrades e assaltos.",
  contributions: ["Atuou em funcoes de design e producao em projetos da Rockstar.", "E associado a decisoes de sistemas, progressao e experiencia de jogador na fase moderna.", "Ajuda a conectar GTA V e GTA Online a uma leitura de design de longo prazo, com conteudo vivo e atividades persistentes.", "No dossie, aparece como parte da geracao que levou a franquia para escala de servico e replay."],
  games: ["GTA IV", "GTA V", "GTA Online", "Red Dead Redemption"],
  tags: ["design", "producao", "GTA Online", "sistemas"],
  sources: [{
    label: "GTA Wiki - Imran Sarwar",
    url: "https://gta.fandom.com/wiki/Imran_Sarwar"
  }, {
    label: "Rockstar Games",
    url: "https://en.wikipedia.org/wiki/Rockstar_Games"
  }]
}, {
  id: "rob-nelson",
  name: "Rob Nelson",
  role: "Diretor e produtor senior",
  era: "Rockstar / Producao global",
  city: "Rockstar North",
  media: realPersonImage("Rob Nelson", "https://static.wikia.nocookie.net/gtawiki/images/7/72/RobNelson_2018.png/revision/latest?cb=20240417030505", "https://gta.fandom.com/wiki/Rob_Nelson", "GTA Wiki - Rob Nelson", {
    position: "center 18%"
  }),
  summary: "Parte da lideranca moderna da Rockstar, quando a empresa passa a operar com equipes globais e producoes de escala gigantesca. E um nome importante para entender o salto de GTA V/Online para a estrutura contemporanea da empresa.",
  contributions: ["Representa a fase de producao integrada entre multiplos estudios Rockstar.", "Aparece em creditos e entrevistas publicas ligadas a grandes projetos modernos da empresa.", "Ajuda a contextualizar a Rockstar atual: menos estudio unico, mais rede internacional de equipes.", "No site, funciona como ponte entre a historia classica de Rockstar North e a operacao global que sustenta GTA Online e GTA VI."],
  games: ["GTA V", "GTA Online", "Red Dead Redemption 2"],
  tags: ["producao", "lideranca", "Rockstar", "era HD"],
  sources: [{
    label: "GTA Wiki - Rob Nelson",
    url: "https://gta.fandom.com/wiki/Rob_Nelson"
  }, {
    label: "Rockstar Games",
    url: "https://en.wikipedia.org/wiki/Rockstar_Games"
  }]
}, {
  id: "lazlow-jones",
  name: "Lazlow Jones",
  role: "Roteirista, produtor de audio e personalidade de radio",
  era: "Rockstar / Radio",
  city: "Nova York",
  media: realPersonImage("Lazlow Jones", "https://static.wikia.nocookie.net/gtawiki/images/4/43/LazlowJones-VoiceActor.png/revision/latest?cb=20250806204421", "https://gta.fandom.com/wiki/Lazlow_Jones", "GTA Wiki - Lazlow Jones", {
    position: "center 16%"
  }),
  summary: "Ajudou a dar voz ao GTA moderno. Radios, comerciais falsos, entrevistas absurdas, apresentadores e a propria caricatura 'Lazlow' fizeram a cidade parecer viva mesmo quando o jogador so estava dirigindo.",
  contributions: ["Trabalhou em escrita, producao de audio e radio dentro da Rockstar.", "Foi uma das figuras por tras da identidade satirica das estacoes de radio.", "Aparece tambem como personagem em varios jogos, misturando bastidor e ficcao.", "Saiu da Rockstar em 2020, depois de uma longa fase ligada a GTA, Red Dead e a cultura sonora do estudio."],
  games: ["GTA III", "Vice City", "San Andreas", "GTA IV", "GTA V", "GTA Online"],
  tags: ["audio", "radio", "roteiro", "satira"],
  sources: [{
    label: "GTA Wiki - Lazlow Jones",
    url: "https://gta.fandom.com/wiki/Lazlow_Jones"
  }, {
    label: "Wikipedia - Lazlow Jones",
    url: "https://en.wikipedia.org/wiki/Lazlow_Jones"
  }]
}];
const gtaOnlineTimelineMedia = [gtaWikiGameMediaById["gta-online"], gtaWikiImage("GTA Online: Heists", "https://static.wikia.nocookie.net/gtawiki/images/0/02/HeistsUpdate-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20180518131251"), gtaWikiImage("GTA Online: Further Adventures in Finance and Felony", "https://static.wikia.nocookie.net/gtawiki/images/7/7c/GTAOFAFF-Artwork-GTAO.jpg/revision/latest/scale-to-width-down/1200?cb=20160602140947"), gtaWikiImage("GTA Online: Gunrunning", "https://static.wikia.nocookie.net/gtawiki/images/3/39/Gunrunning-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20170607144656"), gtaWikiImage("GTA Online: After Hours", "https://static.wikia.nocookie.net/gtawiki/images/1/1c/AfterHours-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20180724205006"), gtaWikiImage("The Diamond Casino & Resort", "https://static.wikia.nocookie.net/gtawiki/images/3/3a/TheDiamondCasino%26Resort-GTAO-DayView.png/revision/latest/scale-to-width-down/1200?cb=20200603043756"), gtaWikiImage("The Cayo Perico Heist", "https://static.wikia.nocookie.net/gtawiki/images/b/b3/Jorge-GTAO-Cutscene.png/revision/latest/scale-to-width-down/1200?cb=20201217021541"), gtaWikiImage("GTA Online: The Contract", "https://static.wikia.nocookie.net/gtawiki/images/1/1c/GTAOnline-TheContract-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20211215141321"), gtaWikiImage("GTA Online: Los Santos Drug Wars", "https://static.wikia.nocookie.net/gtawiki/images/7/7d/LosSantosDrugWars-GTAOe-AnnouncementArtwork.jpg/revision/latest/scale-to-width-down/1200?cb=20221208141044"), gtaWikiImage("GTA Online: San Andreas Mercenaries", "https://static.wikia.nocookie.net/gtawiki/images/1/17/SanAndreasMercenaries-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20230606141219"), gtaWikiImage("GTA Online: Money Fronts", "https://static.wikia.nocookie.net/gtawiki/images/6/61/MoneyFronts-GTAO-Artwork.jpg/revision/latest/scale-to-width-down/1200?cb=20250617140448"), gtaWikiImage("GTA Online: A Safehouse in the Hills", "https://static.wikia.nocookie.net/gtawiki/images/2/2c/ASafehouseInTheHills-GTAO-Artwork.png/revision/latest/scale-to-width-down/1200?cb=20260330025009"), gtaWikiImage("Career Builder", "https://static.wikia.nocookie.net/gtawiki/images/3/3c/CareerBuilder-GTAOee-ExecutiveOption.jpg/revision/latest/scale-to-width-down/1200?cb=20220317091052")];
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
  "Wanted Level": gtaWikiImage("Wanted Level in GTA V", "https://static.wikia.nocookie.net/gtawiki/images/c/c6/TrevorNaked-GTAV.jpg/revision/latest/scale-to-width-down/1200?cb=20130801091403"),
  "Heist": gtaWikiImage("Heists", "https://static.wikia.nocookie.net/gtawiki/images/c/c1/PestControl-GTAV.png/revision/latest?cb=20111104103445"),
  "C.R.A.S.H.": gtaWikiFactionMediaById["crash"],
  "FIB": gtaWikiFactionMediaById["fib"],
  "IAA": gtaWikiFactionMediaById["iaa"],
  "NOOSE": gtaWikiFactionMediaById["noose"],
  "RAGE": gtaWikiImage("Rockstar Advanced Game Engine", "https://static.wikia.nocookie.net/gtawiki/images/0/0b/Rockstar_Advanced_Game_Engine.png/revision/latest?cb=20111211083454", {
    fit: "contain"
  }),
  "Euphoria": gtaWikiImage("Euphoria", "https://static.wikia.nocookie.net/gtawiki/images/5/59/Euphoria-Logo.jpg/revision/latest?cb=20140123003050", {
    fit: "contain"
  }),
  "Canon": gtaWikiImage("Universes", "https://static.wikia.nocookie.net/gtawiki/images/0/0f/Universes-RockstarNorthTimelineMap.png/revision/latest/scale-to-width-down/1200?cb=20240320143131"),
  "Easter egg": gtaWikiImage("Secrets and Easter Eggs in GTA V", "https://static.wikia.nocookie.net/gtawiki/images/1/1c/Alien-Egg-GTAV.png/revision/latest?cb=20150110124654", {
    fit: "contain"
  }),
  "Prequel": gtaWikiGameMediaById["liberty-city-stories"],
  "Spin-off": gtaWikiGameMediaById["gta-advance"],
  "GTA Online Organization": gtaWikiFactionMediaById["online-orgs"],
  "Leonida": gtaWikiCityMediaById["leonida"],
  "Vice City": gtaWikiCityMediaById["vice-city"]
};
const mediaArray = value => Array.isArray(value) ? value : value ? [value] : [];
const mediaKey = value => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/grand theft auto/g, "gta").replace(/[^a-z0-9]+/g, " ").trim();
const findGameMediaForCharacter = character => {
  const gameNames = mediaArray(character.games).map(mediaKey);
  for (const name of gameNames) {
    const exactMatch = gamesData.find(game => mediaKey(game.title) === name && game.media);
    if (exactMatch) return exactMatch;
  }
  for (const name of gameNames) {
    if (name.length <= 4) continue;
    const partialMatch = gamesData.find(game => {
      const key = mediaKey(game.title);
      return key.length > 4 && game.media && (name.includes(key) || key.includes(name));
    });
    if (partialMatch) return partialMatch;
  }
  return null;
};
gamesData.forEach(item => {
  if (gtaWikiGameMediaById[item.id]) item.media = gtaWikiGameMediaById[item.id];else if (officialMediaByGameId[item.id]) item.media = officialMediaByGameId[item.id];
});
universeData.forEach(item => {
  if (gtaWikiUniverseMediaById[item.id]) item.media = gtaWikiUniverseMediaById[item.id];
});
charactersData.forEach(item => {
  if (gtaWikiCharacterMediaById[item.id]) item.media = gtaWikiCharacterMediaById[item.id];else if (officialMediaByCharacterId[item.id]) item.media = officialMediaByCharacterId[item.id];
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
citiesData.forEach(item => {
  if (refinedCityGalleryMediaById[item.id]?.[0]) item.media = refinedCityGalleryMediaById[item.id][0];else if (curatedCityMediaById[item.id]) item.media = curatedCityMediaById[item.id];else if (gtaWikiCityMediaById[item.id]) item.media = gtaWikiCityMediaById[item.id];else if (officialMediaByCityId[item.id]) item.media = officialMediaByCityId[item.id];
  item.galleryMedia = (refinedCityGalleryMediaById[item.id] || cityGalleryMediaById[item.id] || [item.media]).filter(Boolean);
  item.universeGalleryMedia = Object.fromEntries(Object.entries(cityUniverseGalleryMediaById).map(([universeId, cityMap]) => {
    const refinedMedia = refinedCityUniverseGalleryMediaById[universeId]?.[item.id];
    return [universeId, mediaArray(refinedMedia || cityMap[item.id]).filter(Boolean)];
  }).filter(([, media]) => media.length));
  item.universeGameScope = Object.fromEntries(Object.entries(cityUniverseGameScopeById).map(([universeId, cityMap]) => [universeId, cityMap[item.id]]).filter(([, games]) => mediaArray(games).length));
});
factionsData.forEach(item => {
  if (gtaWikiFactionMediaById[item.id]) item.media = gtaWikiFactionMediaById[item.id];
});
rockstarHistoryData.forEach((item, index) => {
  if (rockstarHistoryMedia[index]) item.media = rockstarHistoryMedia[index];
});
onlineTimelineData.forEach((item, index) => {
  if (gtaOnlineTimelineMedia[index]) item.media = gtaOnlineTimelineMedia[index];
});
onlineDlcData.forEach(item => {
  if (gtaOnlineDlcMediaById[item.id]) item.media = gtaOnlineDlcMediaById[item.id];
  item.sources = [{
    label: `GTA Wiki - ${item.sourcePage || item.title}`,
    url: gtaWikiPage(item.sourcePage || item.title)
  }, ...(item.officialSource ? [{
    label: "Rockstar Newswire",
    url: item.officialSource
  }] : [])];
});
glossaryData.forEach(item => {
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

/* >>> data-missions.jsx */
;const gtaWikiMissionSource = (page, label = "GTA Wiki") => ({
  label,
  url: `https://gta.fandom.com/wiki/${page.replaceAll(" ", "_")}`
});
const missionDossierData = [{
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
  systems: ["Liberty City tem 24 missões no PC; duas foram removidas no PlayStation por limitações ligadas a trem.", "San Andreas e Vice City usam capítulos com telefones, missões de veículo e finais, todos guiados por score.", "A estrutura é arcade: completar trabalhos aumenta pontuação, desbloqueia progressão e fecha blocos criminais."],
  precisionNotes: ["A contagem varia por plataforma: a própria fonte separa PC de PlayStation/Game Boy Color.", "O modal carrega um índice expandido por capítulos, telefones, veículos e finais; por isso pode exibir subentradas além da contagem editorial principal."],
  tags: ["2D Universe", "top-down", "phone missions", "pontuação"]
}, {
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
  systems: ["A campanha é dividida em capítulos com missões por telefone, veículo e encerramento.", "A progressão continua dependente de pontuação, não de narrativa cinematográfica contínua.", "A ambientação britânica muda tom, nomes e referências sem romper a lógica de GTA 1."],
  precisionNotes: ["A fonte lista 43 missões na campanha principal.", "O modal preserva capítulos, subtipos e Other Missions como Kill Frenzies quando aparecem na página pública."],
  tags: ["2D Universe", "London", "expansão", "phonebox"]
}, {
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
  systems: ["A estrutura é compacta e concentrada em um único capítulo.", "O interesse principal é histórico: uma rara volta da série a Londres antes da fixação definitiva nos EUA.", "A campanha usa a mesma linguagem de telefones, veículos e conclusão por score."],
  precisionNotes: ["A expansão é menor e não deve ser lida como jogo principal completo."],
  tags: ["2D Universe", "London", "expansão gratuita", "curto"]
}, {
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
  systems: ["As missões são ligadas a gangues e distritos, com dificuldade e recompensas conectadas à reputação.", "O formato reforça o tom experimental de GTA 2: menos drama pessoal, mais tabuleiro de facções.", "A fonte inclui variações por versão e bônus, então o modal separa por agrupamentos públicos."],
  precisionNotes: ["GTA 2 tem diferenças entre versões e uma cronologia deliberadamente ambígua."],
  tags: ["2D Universe", "Anywhere City", "gangues", "reputação"]
}, {
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
  systems: ["Portland, Staunton Island e Shoreside Vale organizam a campanha e controlam progressão geográfica.", "Missões de telefone, RC, off-road e serviços contam para a experiência completa e parte do 100%.", "A estrutura faz Liberty City parecer uma rede de favores, traições e facções."],
  precisionNotes: ["A fonte inclui missões principais e atividades necessárias/relacionadas ao 100%; o dossiê preserva os grupos."],
  tags: ["3D Universe", "Liberty City", "story missions", "phone missions"]
}, {
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
  systems: ["A campanha mistura contatos narrativos com missões de propriedades que sustentam o império Vercetti.", "O avanço exige completar ativos específicos, reforçando a fantasia de chefe criminal.", "Phone missions, corridas, RC e serviços completam o mapa além da história central."],
  precisionNotes: ["Algumas missões de propriedades são obrigatórias para liberar o final, mesmo parecendo secundárias."],
  tags: ["3D Universe", "Vice City", "propriedades", "império"]
}, {
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
  systems: ["A campanha se expande por regiões e sistemas: territórios, escolas, propriedades, cassino, aviação e assaltos.", "Missões de escola, veículos, courier e atividades paralelas completam o estado e a progressão de 100%.", "A estrutura dá escala épica à queda e reconstrução da Grove Street Families."],
  precisionNotes: ["A fonte inclui missões principais, secundárias e atividades; algumas são opcionais, outras contam para 100%."],
  tags: ["3D Universe", "San Andreas", "gang warfare", "100%", "escolas"]
}, {
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
  systems: ["A campanha acompanha Mike e reorganiza Liberty City em formato top-down portátil.", "A lista pública separa missões por ilha e inclui atividades laterais.", "É um caso importante de continuidade 3D contada com linguagem portátil."],
  precisionNotes: ["O jogo tem escopo menor e estrutura diferente dos títulos PS2."],
  tags: ["3D Universe", "portátil", "Liberty City", "prequel"]
}, {
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
  systems: ["Missões por contatos da máfia estruturam a guerra Leone, Sindacco, Forelli e Sicilianos.", "Atividades paralelas de PSP dão densidade ao 100% e ao retorno de Liberty City.", "A campanha funciona como prequel direto de GTA III."],
  precisionNotes: ["A fonte inclui atividades e desafios além da campanha central."],
  tags: ["3D Universe", "prequel", "Liberty City", "máfia"]
}, {
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
  systems: ["O sistema de Empire Building transforma negócios em progressão territorial e econômica.", "A campanha cruza exército, família Vance, Mendez, Martinez, Diaz e gangues locais.", "A lista pública separa história, negócios e atividades paralelas."],
  precisionNotes: ["Atividades de império são essenciais para entender a estrutura do jogo, não apenas extras."],
  tags: ["3D Universe", "prequel", "Vice City", "empire building"]
}, {
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
  systems: ["A campanha inclui escolhas que afetam mortes, recompensas e finais.", "Amizades, atividades e personagens aleatórios ampliam Liberty City além da linha principal.", "O tom é mais dramático e menos acumulativo que San Andreas."],
  precisionNotes: ["A fonte lista missões de história e grupos paralelos; escolhas podem alterar ordem e disponibilidade."],
  tags: ["HD Universe", "Liberty City", "escolhas", "drama"]
}, {
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
  systems: ["A campanha é mais curta e focada que GTA IV, com forte identidade de motoclube.", "Gang Wars e Bike Races expandem o tema de irmandade armada e estrada urbana.", "As missões se conectam a eventos paralelos de GTA IV e TBOGT, especialmente diamantes."],
  precisionNotes: ["A ordem lógica da fonte cruza eventos com GTA IV e TBOGT."],
  tags: ["HD Universe", "expansão", "The Lost MC", "motoclube"]
}, {
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
  systems: ["A campanha de Luis contrasta com o tom pesado de GTA IV e a decadência de TLAD.", "Club Management, Drug Wars e Base Jumps dão atividades próprias ao mundo noturno.", "O episódio fecha a trama dos diamantes por outro ângulo."],
  precisionNotes: ["A fonte separa história e atividades laterais; algumas atividades têm múltiplas entradas."],
  tags: ["HD Universe", "expansão", "nightlife", "diamantes"]
}, {
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
  systems: ["A campanha principal acompanha Huang Lee e a espada Yu Jian.", "A fonte separa conteúdos exclusivos/baixáveis e atividades laterais.", "A estrutura portátil valoriza missões curtas, repetíveis e sistemas econômicos."],
  precisionNotes: ["Alguns conteúdos dependiam de versão/plataforma e serviços online da época."],
  tags: ["HD Universe", "portátil", "Triads", "Social Club"]
}, {
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
  systems: ["A história principal tem 69 missões, mas a página também cruza atividades e conteúdos paralelos.", "Heists e setups organizam grande parte da campanha em planejamento e execução.", "A ordem pode variar porque várias missões ficam disponíveis ao mesmo tempo para personagens diferentes."],
  precisionNotes: ["A própria fonte avisa que a lista não reflete uma ordem cronológica obrigatória de conclusão."],
  tags: ["HD Universe", "Los Santos", "heists", "três protagonistas"]
}, {
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
  systems: ["A lista muda conforme updates, disponibilidade, versões, eventos e recortes que a comunidade chama de missão.", "Contato, freemode, heist, business, adversary e job não são sempre a mesma coisa; o dossiê usa a página de missions como índice de referência.", "O modal carrega a lista atual da fonte para evitar congelar um jogo que continua recebendo conteúdo."],
  precisionNotes: ["Em GTA Online, missão pode significar contato, atividade de DLC, job ou conteúdo sazonal; o dossiê marca isso como arquivo vivo."],
  tags: ["HD Universe", "Online", "DLC", "contatos", "arquivo vivo"]
}, {
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
  systems: ["Para leitura completa, abra as fichas dos três jogos originais.", "A coletânea muda apresentação, interface e controles, mas não muda o núcleo narrativo das missões.", "O dossiê mantém essa entrada como referência editorial para a remasterização."],
  precisionNotes: ["Não é uma linha de missões inédita; é uma reedição/remaster de três campanhas."],
  relatedMissionFiles: ["gta-iii", "vice-city", "san-andreas"],
  tags: ["3D Universe", "remaster", "campanhas herdadas"]
}, {
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
  systems: ["Qualquer lista de missão antes do lançamento deve ser tratada como não confirmada, vazamento ou especulação.", "O dossiê registra apenas o nível confirmado: Lucia, Jason, Leonida/Vice City e uma trama criminal moderna.", "A seção fica preparada para receber a lista quando houver fonte pública confiável."],
  precisionNotes: ["Em 28 de maio de 2026, não há lista oficial completa de missões de GTA VI publicada pela Rockstar."],
  fallbackGroups: [{
    label: "Confirmado oficialmente",
    items: ["Lista completa de missões ainda não confirmada pela Rockstar"]
  }],
  tags: ["HD Universe", "GTA VI", "não confirmado", "Leonida"]
}];
Object.assign(window, {
  missionDossierData
});

/* >>> data-vehicles.jsx */
;const gtaWikiVehicleSource = (page, label = "GTA Wiki") => ({
  label,
  url: `https://gta.fandom.com/wiki/${page.replaceAll(" ", "_")}`
});
const gtaWikiVehicleCredit = "Imagem via GTA Wiki / Fandom; direitos dos assets pertencem aos respectivos titulares.";
const gtaWikiVehicleImage = (page, src, label = page, options = {}) => ({
  src,
  alt: `Imagem de ${label}`,
  source: gtaWikiVehicleSource(page).url,
  caption: `GTA Wiki - ${label}`,
  credit: gtaWikiVehicleCredit,
  fit: "contain",
  position: "center",
  ...options
});
const vehicleDossierData = [{
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
  systems: ["A identidade dos veículos é mais sistêmica do que cinematográfica: aceleração, resistência, tamanho e utilidade mandam mais que marca ficcional.", "Liberty City, San Andreas e Vice City já apresentam arquétipos que a franquia refinaria depois: táxis, viaturas, ambulâncias, esportivos, caminhões e veículos especiais.", "A lista inclui itens que aparecem no arquivo ou na página de veículos, mas nem todos são veículos plenamente dirigíveis pelo jogador."],
  precisionNotes: ["A página do GTA Wiki registra 59 veículos no jogo; categorias auxiliares podem listar variações e objetos adicionais."],
  tags: ["2D Universe", "top-down", "carros", "serviço", "emergência"]
}, {
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
  systems: ["A condução continua top-down, mas os nomes e silhuetas reforçam a identidade londrina.", "É uma das raras fases da franquia fora dos Estados Unidos.", "A frota ajuda a vender o período: carros pequenos, vans, ônibus e veículos de serviço com humor britânico."],
  precisionNotes: ["A expansão reaproveita a base do primeiro GTA, mas reorganiza nomes, clima e iconografia para Londres."],
  tags: ["2D Universe", "expansão", "London", "anos 60"]
}, {
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
  systems: ["A frota é pequena, mas cobre esportivos, compactos, veículos de serviço, emergência e transporte urbano.", "O interesse do dossiê está menos em realismo e mais no valor histórico: a série experimenta outro país e outra década.", "Como expansão gratuita de PC, a lista deve ser lida junto da base de London 1969."],
  precisionNotes: ["O GTA Wiki informa 36 veículos e observa que parte deles difere de London 1969."],
  tags: ["2D Universe", "expansão", "London", "anos 60"]
}, {
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
  systems: ["Anywhere City usa veículos como extensão das gangues: a silhueta do carro ajuda a identificar território e perigo.", "O crusher transforma carros roubados em recompensa, conectando frota e economia arcade.", "O tom retrofuturista permite nomes e formas menos realistas do que na era 3D."],
  precisionNotes: ["O ano interno de GTA 2 é deliberadamente nebuloso; a frota também tem tom menos naturalista."],
  tags: ["2D Universe", "Anywhere City", "gangues", "crusher"]
}, {
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
  systems: ["A frota é compacta, mas já organiza Liberty City em classes: esportivos, sedãs, vans, industriais, gangues, governo, barcos e aeronaves.", "O Dodo aparece como avião pilotável de controle difícil, virando curiosidade histórica e desafio de comunidade.", "Os veículos de gangue ajudam a dar leitura territorial: Mafia Sentinel, Diablo Stallion, Triad Fish Van, Yardie Lobo e outros."],
  precisionNotes: ["Nem todas as aeronaves da lista são dirigíveis; algumas aparecem como tráfego, cenário ou objetos de arquivo."],
  tags: ["3D Universe", "Liberty City", "Dodo", "gang cars"]
}, {
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
  systems: ["É o primeiro GTA 3D em que motos entram com grande peso na experiência.", "A cidade costeira aumenta a importância de barcos, helicópteros e veículos de praia.", "Carros como Sabre Turbo, Infernus, Cheetah e Voodoo viram ícones visuais da era 80 da série."],
  precisionNotes: ["A lista inclui aeronaves e veículos de cenário que não necessariamente são utilizáveis de forma livre."],
  tags: ["3D Universe", "Vice City", "motos", "barcos", "helicópteros"]
}, {
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
  systems: ["A escala de três cidades e zonas rurais exige mais categorias: bicicletas, aeronaves grandes, veículos industriais, off-road, lowriders e trens.", "Autoescolas, garagem, tuning, exportação/importação e customização tornam veículos parte do progresso de CJ.", "O Jetpack não é veículo no arquivo tradicional, mas é tratado pelo dossiê por impacto cultural e uso de mobilidade."],
  precisionNotes: ["A página base cita 212 entradas em vehicles.ide e lista o Jetpack separadamente; por isso o dossiê marca a diferença."],
  tags: ["3D Universe", "San Andreas", "bicicletas", "aviões", "Jetpack", "customização"]
}, {
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
  systems: ["A lista é pequena em comparação aos jogos de console, mas coerente com a escala portátil.", "Vários nomes se conectam à geografia de GTA III e às facções de Liberty City.", "O foco é mobilidade terrestre e leitura rápida em perspectiva top-down."],
  precisionNotes: ["A página do GTA Wiki descreve 28 veículos categorizados."],
  tags: ["3D Universe", "portátil", "Liberty City", "top-down"]
}, {
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
  systems: ["A cidade de 1998 reforça a presença das famílias Leone, Sindacco e Forelli por veículos de gangue.", "Motos passam a existir em Liberty City dentro da era 3D portátil.", "Algumas aeronaves aparecem na lista como não obtíveis ou de cenário."],
  precisionNotes: ["A página separa aeronaves não obtíveis; o modal mantém essa distinção quando carregada da fonte."],
  tags: ["3D Universe", "prequel", "Liberty City", "motos", "máfia"]
}, {
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
  systems: ["O jogo reforça mobilidade por água e ar, essencial para Vice City e para missões de contrabando.", "Veículos de governo e emergência têm papel forte por causa das conexões militares de Vic Vance.", "A frota preserva o sabor anos 80, mas com variações próprias da história de 1984."],
  precisionNotes: ["Alguns itens da lista são variações, veículos especiais ou versões de missão."],
  tags: ["3D Universe", "prequel", "Vice City", "barcos", "helicópteros"]
}, {
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
  systems: ["A física da era RAGE muda a sensação de condução: carros pesam, derrapam, capotam e deformam de modo mais dramático.", "O jogo tem helicópteros e barcos, mas não oferece aviões pilotáveis como San Andreas.", "Veículos particulares de personagens, táxis e viaturas reforçam a vida cotidiana e a sátira urbana."],
  precisionNotes: ["A tabela do GTA Wiki lista modelos separados; variações e veículos de missão podem aparecer com nomenclatura própria."],
  tags: ["HD Universe", "Liberty City", "RAGE", "física", "helicópteros"]
}, {
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
  systems: ["A expansão adiciona várias motos e melhora o papel delas em combate, formação e perseguição.", "Veículos de quatro rodas existem, mas o coração mecânico é o motoclube.", "A Hexer vira assinatura visual de Johnny Klebitz e do The Lost MC."],
  precisionNotes: ["A lista inclui veículo duplicado/cortado indicado pela fonte; o modal carrega a observação quando presente no wikitext."],
  tags: ["HD Universe", "expansão", "The Lost MC", "motos"]
}, {
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
  systems: ["A expansão adiciona carros mais vistosos e veículos militares/policiais que combinam com o tom explosivo da campanha.", "O Buzzard e o APC antecipam o gosto da era Online por veículos de alto poder ofensivo.", "A frota contrasta com TLAD: menos estrada, mais festa, dinheiro, risco e espetáculo."],
  precisionNotes: ["A fonte separa veículos próprios da expansão e veículos retornando de TLAD; o número pode variar conforme essa leitura."],
  tags: ["HD Universe", "expansão", "luxo", "Buzzard", "APC"]
}, {
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
  systems: ["A câmera portátil torna forma e cor essenciais para reconhecer classes de veículo.", "A cidade é HD Universe, mas o controle e a leitura lembram a tradição top-down.", "Helicópteros, barcos e veículos de emergência aparecem em escala menor, mas mantêm diversidade."],
  precisionNotes: ["Alguns agrupamentos do GTA Wiki usam categorias amplas, especialmente para helicópteros e veículos especiais."],
  tags: ["HD Universe", "portátil", "Liberty City", "Triads"]
}, {
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
  systems: ["Los Santos e Blaine County pedem extremos: trânsito urbano, luxo, deserto, montanha, mar, base militar e aeroportos.", "Garagens, compras online, tuning, assaltos e troca de protagonistas tornam veículos parte da identidade de Michael, Franklin e Trevor.", "A base de GTA V vira o alicerce técnico e econômico de GTA Online."],
  precisionNotes: ["A tabela do GTA Wiki inclui modelos separados, variações, veículos especiais e alguns itens de missão/cenário."],
  tags: ["HD Universe", "Los Santos", "bicicletas", "aviões", "submersíveis", "assaltos"]
}, {
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
  systems: ["A lista cresce por DLCs e updates: Heists, Executives, Bikers, Gunrunning, Smuggler's Run, Doomsday, Arena War, Tuners, Cayo Perico, Contract, Drug Wars, Mercenaries, Bottom Dollar, Money Fronts e outros ciclos.", "Veículos deixam de ser só transporte: viram propriedade, arma, negócio, status, ferramenta de heist, plataforma aérea/naval e investimento.", "Por mudar com updates, a seção carrega a lista completa diretamente da fonte quando o jogador abre o dossiê."],
  precisionNotes: ["GTA Online é vivo; números podem mudar após updates, remoções temporárias de lojas, versões Enhanced/E&E e veículos de missão."],
  tags: ["HD Universe", "Online", "DLC", "armados", "economia viva", "carreira"]
}, {
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
  systems: ["A Definitive Edition muda apresentação, iluminação, modelos e interface, mas a lógica de frota pertence a GTA III, Vice City e San Andreas.", "Para leitura histórica, a melhor divisão é abrir cada jogo original no dossiê de veículos.", "Quando houver diferença técnica ou visual importante, ela deve ser tratada como remaster, não como novo cânone de frota."],
  precisionNotes: ["Não é uma frota narrativa nova; é uma reedição/remaster de três jogos da era 3D."],
  relatedVehicleFiles: ["gta-iii", "vice-city", "san-andreas"],
  tags: ["3D Universe", "remaster", "coletânea"]
}, {
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
  systems: ["A Rockstar já mostrou Leonida/Vice City com forte cultura automotiva, costa, estradas, vida noturna, policiamento e tráfego denso.", "Modelos específicos, lista completa, dirigibilidade, classes e lojas ainda não foram detalhados oficialmente.", "Qualquer nome não confirmado pela Rockstar deve aparecer como interpretação, referência visual ou dado de wiki sujeito a revisão."],
  precisionNotes: ["Não há lista completa oficial de veículos de GTA VI em 28 de maio de 2026; a página do GTA Wiki mistura material oficial revelado e itens de vazamentos com aviso."],
  fallbackGroups: [{
    label: "Confirmado em alto nível / material promocional",
    items: ["tráfego urbano moderno em Vice City", "carros e picapes de Leonida em trailers/screenshots", "barcos e veículos costeiros", "viaturas e perseguições policiais", "aeronaves e vida de aeroporto/céu vistas em material promocional"]
  }],
  tags: ["HD Universe", "GTA VI", "Leonida", "não confirmado", "Rockstar"]
}];
const vehicleMediaById = {
  "gta-1": gtaWikiVehicleImage("Mamba", "https://static.wikia.nocookie.net/gtawiki/images/2/21/Mamba-GTA1.png/revision/latest?cb=20091013164934", "Mamba em Grand Theft Auto"),
  "london-1969": gtaWikiVehicleImage("James Bomb", "https://static.wikia.nocookie.net/gtawiki/images/b/b9/JamesBomb-GTAL69.png/revision/latest?cb=20091011035848", "James Bomb em GTA: London 1969"),
  "london-1961": gtaWikiVehicleImage("Myni", "https://static.wikia.nocookie.net/gtawiki/images/9/91/Myni-GTAL.png/revision/latest?cb=20090929153104", "Myni no pacote London"),
  "gta-2": gtaWikiVehicleImage("Furore GT", "https://static.wikia.nocookie.net/gtawiki/images/5/50/FuroreGT-GTA2.png/revision/latest?cb=20091114141306", "Furore GT em GTA 2"),
  "gta-iii": gtaWikiVehicleImage("Banshee (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/3/3a/Banshee-GTA3-front.jpg/revision/latest?cb=20230709090037", "Banshee em GTA III"),
  "vice-city": gtaWikiVehicleImage("Infernus", "https://static.wikia.nocookie.net/gtawiki/images/f/f0/Infernus-GTAVC-FrontQuarter.png/revision/latest?cb=20240911013848", "Infernus em GTA: Vice City"),
  "san-andreas": gtaWikiVehicleImage("Hydra", "https://static.wikia.nocookie.net/gtawiki/images/7/7f/Hydra-GTASA-inflight.jpg/revision/latest?cb=20240109134005", "Hydra em GTA: San Andreas"),
  "gta-advance": gtaWikiVehicleImage("Banshee (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/1/11/Banshee-GTAA.png/revision/latest?cb=20190603083804", "Banshee em GTA Advance"),
  "liberty-city-stories": gtaWikiVehicleImage("Hellenbach GT", "https://static.wikia.nocookie.net/gtawiki/images/4/44/HellenbachGT-GTALCS-front.jpg/revision/latest?cb=20100119111858", "Hellenbach GT em Liberty City Stories"),
  "vice-city-stories": gtaWikiVehicleImage("Armadillo", "https://static.wikia.nocookie.net/gtawiki/images/d/da/Armadillo-GTAVCS-front.png/revision/latest?cb=20240727125705", "Armadillo em Vice City Stories"),
  "gta-iv": gtaWikiVehicleImage("Sultan RS", "https://static.wikia.nocookie.net/gtawiki/images/8/83/SultanRS-GTAIV-front.png/revision/latest?cb=20160523142419", "Sultan RS em GTA IV"),
  "lost-and-damned": gtaWikiVehicleImage("Hexer", "https://static.wikia.nocookie.net/gtawiki/images/d/d0/Hexer-TLAD-front.png/revision/latest?cb=20170921192709", "Hexer em The Lost and Damned"),
  "ballad-gay-tony": gtaWikiVehicleImage("Buzzard", "https://static.wikia.nocookie.net/gtawiki/images/4/4e/Buzzard-TBoGT-front.png/revision/latest?cb=20160207232138", "Buzzard em The Ballad of Gay Tony"),
  "chinatown-wars": gtaWikiVehicleImage("Infernus", "https://static.wikia.nocookie.net/gtawiki/images/8/82/Infernus-GTACW-front.jpg/revision/latest?cb=20181006001640", "Infernus em Chinatown Wars"),
  "gta-v": gtaWikiVehicleImage("Adder", "https://static.wikia.nocookie.net/gtawiki/images/9/9e/Adder-GTAV-front.png/revision/latest?cb=20230402200727", "Adder em GTA V"),
  "gta-online": gtaWikiVehicleImage("Oppressor Mk II", "https://static.wikia.nocookie.net/gtawiki/images/8/85/OppressorMkII-GTAO-front.png/revision/latest?cb=20180725181109", "Oppressor Mk II em GTA Online"),
  "trilogy-definitive": gtaWikiVehicleImage("Banshee (3D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/6/6b/Banshee-GTAIII-FrontQuarter.png/revision/latest?cb=20240824134033", "Banshee da era 3D remasterizada"),
  "gta-vi": gtaWikiVehicleImage("Vehicles in GTA VI", "https://static.wikia.nocookie.net/gtawiki/images/6/64/Banshee-GTAVI-Trailer2.png/revision/latest?cb=20250506212454", "Banshee visto em material de GTA VI", {
    alt: "Veiculo visto em material promocional de GTA VI; lista completa ainda nao confirmada",
    caption: "GTA Wiki - GTA VI, veiculo visto em trailer"
  })
};
vehicleDossierData.forEach(item => {
  if (vehicleMediaById[item.id]) item.media = vehicleMediaById[item.id];
});
Object.assign(window, {
  vehicleDossierData
});

/* >>> data-weapons.jsx */
;const gtaWikiWeaponSource = (page, label = "GTA Wiki") => ({
  label,
  url: `https://gta.fandom.com/wiki/${page.replaceAll(" ", "_")}`
});
const gtaWikiWeaponCredit = "Imagem via GTA Wiki / Fandom; direitos dos assets pertencem aos respectivos titulares.";
const gtaWikiWeaponImage = (page, src, label = page, options = {}) => ({
  src,
  alt: `Imagem de ${label}`,
  source: gtaWikiWeaponSource(page).url,
  caption: `GTA Wiki - ${label}`,
  credit: gtaWikiWeaponCredit,
  fit: "contain",
  position: "center",
  ...options
});
const weaponDossierData = [{
  id: "gta-1",
  gameId: "gta-1",
  title: "Grand Theft Auto",
  releaseYear: 1997,
  storyYear: "1997",
  universe: "2D Universe",
  city: "Liberty City, San Andreas e Vice City",
  apiPage: "Weapons in GTA",
  source: gtaWikiWeaponSource("Weapons in GTA"),
  totalLabel: "arsenal compacto da era 2D",
  coverage: ["corpo a corpo", "pistola", "metralhadora", "lança-foguetes", "lança-chamas"],
  highlights: ["Melee attack", "Pistol", "Machine Gun", "Rocket Launcher", "Flamethrower"],
  summary: "O primeiro GTA usa poucas armas, mas define a lógica básica da série: escalar de combate simples para poder de fogo pesado enquanto o nível de procurado cresce.",
  systems: ["As armas são arcade, diretas e vistas de cima, com leitura rápida para perseguições e caos urbano.", "O arsenal privilegia função sobre realismo: curta distância, arma de fogo básica, rajada, explosivo e fogo.", "A progressão criminal depende de sobreviver à polícia e cumprir trabalhos, não de customização ou estatísticas detalhadas."],
  precisionNotes: ["A página de armas cobre GTA 1 e London; o dossiê separa London em fichas próprias por contexto histórico."],
  tags: ["2D Universe", "top-down", "arsenal básico", "arcade"]
}, {
  id: "london-1969",
  gameId: "london-1969",
  title: "GTA: London 1969",
  releaseYear: 1999,
  storyYear: "1969",
  universe: "2D Universe",
  city: "London",
  categoryTitle: "Category:Weapons in GTA London 1969",
  source: gtaWikiWeaponSource("Weapons in GTA London 1969"),
  totalLabel: "arsenal de London 1969",
  coverage: ["corpo a corpo", "pistola", "metralhadora", "lança-foguetes", "lança-chamas", "bomba de carro"],
  highlights: ["Fist", "Pistol", "Machine Gun", "Rocket Launcher", "Flamethrower", "Car Bomb"],
  summary: "London 1969 reaproveita a violência arcade da era 2D, mas com fantasia britânica de crime sessentista e sabotagem veicular.",
  systems: ["A arma mais importante para o tom da expansão é menos a arma individual e mais o caos de trânsito armado.", "Car Bomb amplia o lado sabotagem, coerente com missões de gangue e perseguições top-down.", "A leitura histórica é simples: poucas armas, impacto imediato, ritmo rápido."],
  precisionNotes: ["O GTA Wiki categoriza Car Bomb em London 1969; a página principal de armas usa uma tabela compartilhada com GTA 1/London."],
  tags: ["2D Universe", "London", "expansão", "car bomb"]
}, {
  id: "london-1961",
  gameId: "london-1961",
  title: "GTA: London 1961",
  releaseYear: 1999,
  storyYear: "1961",
  universe: "2D Universe",
  city: "London",
  source: gtaWikiWeaponSource("Weapons in GTA London 1961"),
  totalLabel: "arsenal compartilhado com London",
  coverage: ["corpo a corpo", "pistola", "metralhadora", "lança-foguetes", "lança-chamas", "bomba de carro"],
  highlights: ["Fist", "Pistol", "Machine Gun", "Rocket Launcher", "Flamethrower", "Car Bomb"],
  summary: "London 1961 é uma expansão menor e gratuita, então o arsenal deve ser lido como extensão do pacote London, sem a complexidade das fases posteriores.",
  systems: ["O design continua top-down e funcional: armas como ferramentas de pontuação, fuga e destruição rápida.", "A ficha mantém Car Bomb junto do pacote London por consistência de fonte e contexto.", "Não há sistema de habilidade, modificação ou inventário profundo."],
  precisionNotes: ["Não há categoria pública separada robusta para London 1961; o dossiê usa a base London/GTA e marca a leitura como compartilhada."],
  fallbackGroups: [{
    label: "Lista completa",
    items: ["Fist", "Pistol", "Machine Gun", "Rocket Launcher", "Flamethrower", "Car Bomb"]
  }],
  tags: ["2D Universe", "London", "expansão", "fonte compartilhada"]
}, {
  id: "gta-2",
  gameId: "gta-2",
  title: "Grand Theft Auto 2",
  releaseYear: 1999,
  storyYear: "1999 / futuro ambíguo",
  universe: "2D Universe",
  city: "Anywhere City",
  apiPage: "Weapons in GTA 2",
  source: gtaWikiWeaponSource("Weapons in GTA 2"),
  totalLabel: "armas portáteis e armas veiculares",
  coverage: ["pistolas", "metralhadoras", "shotgun", "lança-chamas", "lança-foguetes", "granadas", "molotov", "armas veiculares"],
  highlights: ["Dual Pistol", "S-Uzi Machine Gun", "ElectroGun", "Vehicle Mines", "Vehicle Machine Guns"],
  summary: "GTA 2 transforma o arsenal em brinquedo de gangue futurista: além de armas portáteis, o jogo dá destaque a upgrades e armamentos de veículos.",
  systems: ["O arsenal é dividido entre armas que voltam de GTA 1 e novidades de Anywhere City.", "Armas veiculares e upgrades combinam com a estética distópica e com o foco em caos sistêmico.", "A página também registra armas deletadas; o parser do dossiê prioriza armas presentes e separa o que é cortado por nota."],
  precisionNotes: ["Itens deletados aparecem na fonte, mas não são tratados como arsenal jogável presente."],
  tags: ["2D Universe", "Anywhere City", "armas veiculares", "arcade"]
}, {
  id: "gta-iii",
  gameId: "gta-iii",
  title: "Grand Theft Auto III",
  releaseYear: 2001,
  storyYear: "2001",
  universe: "3D Universe",
  city: "Liberty City",
  apiPage: "Weapons in GTA III",
  source: gtaWikiWeaponSource("Weapons in GTA III"),
  totalLabel: "arsenal da virada 3D",
  coverage: ["corpo a corpo", "pistola", "SMG", "shotgun", "rifles", "sniper", "pesadas", "arremessáveis"],
  highlights: ["Baseball Bat", "Pistol", "Uzi", "Shotgun", "AK47", "M16", "Sniper Rifle", "Rocket Launcher"],
  summary: "GTA III leva o combate para a cidade 3D: armas passam a ter mira, distância, cobertura urbana e relação direta com território e missões.",
  systems: ["A estrutura por classes aparece claramente: melee, armas curtas, armas grandes, pesadas, arremessáveis e especiais.", "O arsenal é enxuto, mas suficiente para definir a gramática moderna de perseguição, tiroteio e rampage.", "Pickup, Ammu-Nation e recompensas de missão ajudam a ligar armas ao fluxo de Liberty City."],
  precisionNotes: ["Car Bomb aparece em categorias de armas da era, mas a ficha principal prioriza a tabela de armas usáveis/listadas na página do jogo."],
  tags: ["3D Universe", "Liberty City", "Ammu-Nation", "mundo aberto"]
}, {
  id: "vice-city",
  gameId: "vice-city",
  title: "Grand Theft Auto: Vice City",
  releaseYear: 2002,
  storyYear: "1986",
  universe: "3D Universe",
  city: "Vice City",
  apiPage: "Weapons in GTA Vice City",
  source: gtaWikiWeaponSource("Weapons in GTA Vice City"),
  totalLabel: "arsenal anos 80 expandido",
  coverage: ["melee", "pistolas", "shotguns", "SMGs", "rifles", "snipers", "pesadas", "arremessáveis", "câmera"],
  highlights: ["Chainsaw", "Katana", "Python", "Spaz Shotgun", "M4", "M60", "Minigun", "Camera"],
  summary: "Vice City aumenta o espetáculo: armas brancas, motosserra, pistolas de alto calibre, metralhadoras pesadas e minigun combinam com a fantasia criminal oitentista.",
  systems: ["O arsenal é maior e mais estilizado que o de GTA III, com forte inspiração em cinema de crime dos anos 80.", "A variedade de melee ajuda a vender a cidade como playground violento e exagerado.", "Armas cortadas/beta aparecem na fonte, mas ficam como curiosidade e não como arsenal presente."],
  precisionNotes: ["Tear Gas é marcado na fonte como PS2 only; armas beta devem ser lidas como desenvolvimento, não como presença jogável padrão."],
  tags: ["3D Universe", "Vice City", "anos 80", "minigun", "motosserra"]
}, {
  id: "san-andreas",
  gameId: "san-andreas",
  title: "Grand Theft Auto: San Andreas",
  releaseYear: 2004,
  storyYear: "1992",
  universe: "3D Universe",
  city: "San Andreas",
  apiPage: "Weapons in GTA San Andreas",
  source: gtaWikiWeaponSource("Weapons in GTA San Andreas"),
  totalLabel: "arsenal com habilidade e utilitários",
  coverage: ["melee", "pistolas", "shotguns", "SMGs", "rifles", "snipers", "pesadas", "arremessáveis", "gifts", "utilitários", "visores", "paraquedas"],
  highlights: ["Silenced 9mm", "Desert Eagle", "Sawnoff Shotgun", "Tec9", "AK47", "Heat-Seeking Rocket Launcher", "Satchel Charges", "Parachute"],
  summary: "San Andreas trata armas como progressão: habilidade, dual wield, gangues, territórios, fotografia, spray, presentes e equipamentos especiais entram na mesma lógica de mundo aberto.",
  systems: ["O sistema de Weapon Skill permite evoluir precisão, manuseio e dual wield em algumas categorias.", "O arsenal inclui armas convencionais, itens utilitários, presentes e equipamentos como Night Vision, Thermal Vision e Parachute.", "A variedade sustenta três cidades, zona rural, deserto, gang wars, assaltos e missões militares."],
  precisionNotes: ["Alguns itens são utilitários ou gifts; o dossiê os mantém porque a própria tabela de armas do jogo os lista."],
  tags: ["3D Universe", "San Andreas", "weapon skill", "dual wield", "utilitários"]
}, {
  id: "gta-advance",
  gameId: "gta-advance",
  title: "Grand Theft Auto Advance",
  releaseYear: 2004,
  storyYear: "1998",
  universe: "3D Universe",
  city: "Liberty City",
  apiPage: "Weapons in GTA Advance",
  source: gtaWikiWeaponSource("Weapons in GTA Advance"),
  totalLabel: "arsenal portátil de Liberty City",
  coverage: ["melee", "pistola", "SMG", "shotgun", "molotov", "lança-chamas", "lança-foguetes", "óleo/bomba de carro"],
  highlights: ["Baseball Bat", "Pistol", "Micro SMG", "Shotgun", "Molotov Cocktails", "Flamethrower", "Rocket Launcher"],
  summary: "GTA Advance comprime o arsenal de Liberty City para o Game Boy Advance, preservando as funções essenciais em perspectiva top-down.",
  systems: ["A lista é menor, mas cobre combate próximo, armas de fogo, fogo, explosão e sabotagem veicular.", "O foco portátil favorece leitura rápida e ação direta.", "O arsenal faz ponte entre GTA III e uma estrutura mais arcade."],
  precisionNotes: ["A fonte separa armas usadas pelo jogador e itens/sistemas como Car Bomb e Oil Slick."],
  tags: ["3D Universe", "portátil", "Liberty City", "top-down"]
}, {
  id: "liberty-city-stories",
  gameId: "liberty-city-stories",
  title: "Grand Theft Auto: Liberty City Stories",
  releaseYear: 2005,
  storyYear: "1998",
  universe: "3D Universe",
  city: "Liberty City",
  apiPage: "Weapons in GTA Liberty City Stories",
  source: gtaWikiWeaponSource("Weapons in GTA Liberty City Stories"),
  totalLabel: "arsenal de prequel mafioso",
  coverage: ["melee", "pistolas", "shotguns", "SMGs", "rifles", "snipers", "pesadas", "arremessáveis", "câmera"],
  highlights: ["Chisel", ".357", "Stubby Shotgun", "AK47", "M60", "Minigun", "Camera", "Tear Gas"],
  summary: "Liberty City Stories mistura a base de GTA III com arsenal mais próximo de Vice City, dando a Toni Cipriani ferramentas de guerra de máfia em Liberty City.",
  systems: ["A variedade é maior que GTA III e adequada ao conflito entre famílias Leone, Sindacco e Forelli.", "Armas pesadas aparecem como extensão do caos urbano e de missões de escala maior.", "O jogo preserva a lógica de pickups/Ammu-Nation da era 3D."],
  precisionNotes: ["Algumas nomenclaturas variam entre página, jogo e versões regionais; o modal usa a nomenclatura da fonte."],
  tags: ["3D Universe", "prequel", "Liberty City", "máfia"]
}, {
  id: "vice-city-stories",
  gameId: "vice-city-stories",
  title: "Grand Theft Auto: Vice City Stories",
  releaseYear: 2006,
  storyYear: "1984",
  universe: "3D Universe",
  city: "Vice City",
  apiPage: "Weapons in GTA Vice City Stories",
  source: gtaWikiWeaponSource("Weapons in GTA Vice City Stories"),
  totalLabel: "arsenal militar/criminal de 1984",
  coverage: ["melee", "pistolas", "shotguns", "SMGs", "rifles", "snipers", "pesadas", "arremessáveis", "câmera"],
  highlights: ["Butterfly Knife", ".357", "SPAS-12", "Scorpion", "AK47", "M249", "Rocket Launcher", "Binoculars"],
  summary: "Vice City Stories adiciona tempero militar ao arsenal tropical: Vic Vance começa conectado ao exército e termina cercado por cartéis, gangues e contrabando.",
  systems: ["A presença militar e a guerra contra os Mendez ampliam o espaço para armas pesadas.", "O jogo reaproveita a identidade de Vice City, mas com arsenal ligeiramente diferente e história anterior.", "Armas de curto alcance e armas brancas seguem importantes para combates de rua."],
  precisionNotes: ["A página lista armas e ícones; nomes podem variar entre render, HUD e página wiki."],
  tags: ["3D Universe", "prequel", "Vice City", "militar", "cartel"]
}, {
  id: "gta-iv",
  gameId: "gta-iv",
  title: "Grand Theft Auto IV",
  releaseYear: 2008,
  storyYear: "2008",
  universe: "HD Universe",
  city: "Liberty City",
  apiPage: "Weapons in GTA IV",
  source: gtaWikiWeaponSource("Weapons in GTA IV"),
  totalLabel: "arsenal realista da era HD",
  coverage: ["melee", "pistolas", "shotguns", "SMGs", "rifles", "snipers", "RPG", "granadas", "molotov", "objetos arremessáveis"],
  highlights: ["Combat Pistol", "Pump Shotgun", "Carbine Rifle", "Combat Sniper", "RPG", "Random Pickable Objects"],
  summary: "GTA IV reduz o exagero e pesa o combate: armas são menos cartunescas, tiroteios são mais físicos e Niko parece sempre preso a uma cidade hostil.",
  systems: ["A era HD usa RAGE/Euphoria para dar mais impacto a tiros, quedas, cobertura e dano.", "O arsenal é mais contido que San Andreas, reforçando o tom dramático e urbano.", "Objetos arremessáveis aleatórios aparecem como parte da física e do improviso."],
  precisionNotes: ["Armas beta/cortadas aparecem na página, mas o dossiê prioriza a tabela de conteúdo presente."],
  tags: ["HD Universe", "Liberty City", "realismo", "RAGE"]
}, {
  id: "lost-and-damned",
  gameId: "lost-and-damned",
  title: "GTA IV: The Lost and Damned",
  releaseYear: 2009,
  storyYear: "2008",
  universe: "HD Universe",
  city: "Liberty City",
  apiPage: "Weapons in TLAD",
  source: gtaWikiWeaponSource("Weapons in TLAD"),
  totalLabel: "arsenal de motoclube",
  coverage: ["melee", "pistolas", "shotguns", "SMGs", "rifles", "snipers", "grenade launcher", "RPG", "pipe bomb"],
  highlights: ["Pool Cue", "Automatic 9mm", "Assault Shotgun", "Sawn-Off Shotgun", "Grenade Launcher", "Pipe Bomb"],
  summary: "The Lost and Damned adiciona armas com cara de motoclube: cano serrado, pipe bomb, pool cue e combate de gangue em estrada urbana.",
  systems: ["O foco em motocicletas e clubes muda a leitura das armas: mais proximidade, emboscada e lealdade violenta.", "A expansão mantém a base de GTA IV e adiciona peças próprias para Johnny Klebitz.", "Sawn-Off Shotgun e Pipe Bomb combinam com o tom de guerra de gangue e decadência."],
  precisionNotes: ["A página lista armas da expansão junto de armas base de GTA IV presentes no episódio."],
  tags: ["HD Universe", "expansão", "The Lost MC", "pipe bomb", "shotgun"]
}, {
  id: "ballad-gay-tony",
  gameId: "ballad-gay-tony",
  title: "GTA IV: The Ballad of Gay Tony",
  releaseYear: 2009,
  storyYear: "2008",
  universe: "HD Universe",
  city: "Liberty City",
  apiPage: "Weapons in TBOGT",
  source: gtaWikiWeaponSource("Weapons in TBOGT"),
  totalLabel: "arsenal de excesso e luxo",
  coverage: ["pistola .44", "automatic shotgun", "assault SMG", "gold SMG", "advanced MG", "advanced sniper", "sticky bombs"],
  highlights: ["Pistol .44", "Automatic Shotgun", "Assault SMG", "Gold SMG", "Advanced MG", "Advanced Sniper", "Sticky Bombs"],
  summary: "The Ballad of Gay Tony faz o arsenal subir de escala: armas douradas, shotgun automática, sniper avançado e sticky bombs casam com a vida noturna explosiva.",
  systems: ["A expansão contrasta com TLAD: menos sujeira de estrada, mais excesso, armamento caro e espetáculo.", "Sticky Bombs antecipam uma assinatura importante da era GTA V/Online.", "O arsenal reforça Luis Lopez como operador entre clubes, máfia, celebridades e alta criminalidade."],
  precisionNotes: ["A fonte inclui armas base de GTA IV e armas próprias de TBOGT; o modal mantém a divisão por classe."],
  tags: ["HD Universe", "expansão", "luxo", "sticky bombs", "gold SMG"]
}, {
  id: "chinatown-wars",
  gameId: "chinatown-wars",
  title: "Grand Theft Auto: Chinatown Wars",
  releaseYear: 2009,
  storyYear: "2009",
  universe: "HD Universe",
  city: "Liberty City",
  apiPage: "Weapons in GTA Chinatown Wars",
  source: gtaWikiWeaponSource("Weapons in GTA Chinatown Wars"),
  totalLabel: "arsenal portátil da era HD",
  coverage: ["melee", "pistolas", "shotguns", "SMGs", "rifles", "pesadas", "arremessáveis", "proximity mines", "itens especiais"],
  highlights: ["Sword", "Chainsaw", "Twin Pistols", "Double Barreled Shotgun", "Flamethrower", "Proximity Mines", "Drug Sample"],
  summary: "Chinatown Wars usa um arsenal grande para um jogo portátil, misturando leitura top-down com a continuidade HD das Triads de Liberty City.",
  systems: ["A câmera portátil favorece armas de leitura imediata e efeito claro.", "Proximity Mines, Drug Sample e Crates mostram que a página inclui itens especiais além de armas convencionais.", "O arsenal apoia tráfico, perseguições policiais, minigames e conflitos familiares de Huang Lee."],
  precisionNotes: ["Itens especiais listados pela fonte são mantidos, mas marcados como parte do sistema de gameplay."],
  tags: ["HD Universe", "portátil", "Triads", "Liberty City"]
}, {
  id: "gta-v",
  gameId: "gta-v",
  title: "Grand Theft Auto V",
  releaseYear: 2013,
  storyYear: "2013",
  universe: "HD Universe",
  city: "Los Santos e Blaine County",
  apiPage: "Weapons in GTA V",
  source: gtaWikiWeaponSource("Weapons in GTA V"),
  totalLabel: "arsenal base + armas de updates no single-player",
  coverage: ["melee", "pistolas", "shotguns", "MGs", "rifles", "snipers", "pesadas", "arremessáveis", "especial", "Mk/updates em versões"],
  highlights: ["AP Pistol", "Heavy Pistol", "Carbine Rifle", "Heavy Sniper", "Minigun", "Railgun", "Sticky Bomb", "Jerry Can"],
  summary: "GTA V torna o arsenal parte de assaltos, preparação, troca de protagonistas e consumo: Ammu-Nation, anexos, skins e categorias sustentam a fantasia criminal moderna.",
  systems: ["Armas têm anexos/modificações em Ammu-Nation, o que muda mira, supressor, lanterna, pente e aparência.", "O single-player recebeu armas ligadas a updates e versões, então a lista varia por edição/plataforma.", "A lógica de assaltos valoriza armas silenciosas, explosivos, snipers, rifles e equipamentos especiais."],
  precisionNotes: ["A página diferencia itens de DLC, Collector's Edition, Rockstar Social Club, missões e versões Enhanced/E&E."],
  tags: ["HD Universe", "Los Santos", "Ammu-Nation", "assaltos", "mods"]
}, {
  id: "gta-online",
  gameId: "gta-online",
  title: "Grand Theft Auto Online",
  releaseYear: 2013,
  storyYear: "2013 em diante",
  universe: "HD Universe",
  city: "Los Santos, Blaine County, Cayo Perico e operações globais",
  apiPage: "Weapons in GTA Online",
  source: gtaWikiWeaponSource("Weapons in GTA Online"),
  totalLabel: "arsenal vivo com DLCs, Mk II e itens especiais",
  coverage: ["melee", "pistolas", "shotguns", "SMGs", "MGs", "rifles", "snipers", "pesadas", "arremessáveis", "Mk II", "Alien weapons", "equipamentos de missão"],
  highlights: ["Up-n-Atomizer", "Widowmaker", "Unholy Hellbringer", "Heavy Sniper Mk II", "Service Carbine", "Railgun", "Orbital Cannon", "Snowball Launcher"],
  summary: "GTA Online transforma armas em plataforma viva: DLCs, Mk II, munições especiais, Gunrunning, Agency, eventos sazonais e itens de missão mudam o arsenal ao longo dos anos.",
  systems: ["O arsenal cresce com updates e pode depender de versão, evento, unlock, missão, bunker, pesquisa, Gun Van, Agency, Cayo Perico ou conteúdo sazonal.", "Armas Mk II e munições especiais mudam meta de PvP/PvE e exigem leitura separada da campanha de GTA V.", "A lista é carregada da fonte no modal para refletir a página atualizada, incluindo armas recentes como Newspaper quando catalogada pela wiki."],
  precisionNotes: ["GTA Online é vivo; disponibilidade em loja, Gun Van, versões Enhanced/E&E e eventos pode mudar depois de cada update."],
  tags: ["HD Universe", "Online", "DLC", "Mk II", "Gunrunning", "arsenal vivo"]
}, {
  id: "trilogy-definitive",
  gameId: "trilogy-definitive",
  title: "Grand Theft Auto: The Trilogy - The Definitive Edition",
  releaseYear: 2021,
  storyYear: "2001 / 1986 / 1992",
  universe: "3D Universe",
  city: "Liberty City, Vice City e San Andreas",
  source: gtaWikiWeaponSource("Grand Theft Auto: The Trilogy - The Definitive Edition"),
  totalLabel: "herda os arsenais de GTA III, Vice City e San Andreas",
  coverage: ["remaster", "GTA III", "Vice City", "San Andreas", "weapon wheel moderno", "armas da era 3D"],
  highlights: ["Baseball Bat", "Chainsaw", "Minigun", "Hydra support context", "Satchel Charges", "Parachute"],
  summary: "A Definitive Edition remasteriza apresentação e controles, mas o arsenal narrativo pertence aos três jogos originais da era 3D.",
  systems: ["A leitura completa deve ser feita nas fichas de GTA III, Vice City e San Andreas.", "A remasterização altera interface, mira e sensação, mas não cria uma continuidade nova de armas.", "O dossiê mantém a coletânea como ponte visual e técnica, não como arsenal independente."],
  precisionNotes: ["Não é um jogo com arsenal próprio inédito; é uma coletânea/remaster."],
  relatedWeaponFiles: ["gta-iii", "vice-city", "san-andreas"],
  tags: ["3D Universe", "remaster", "coletânea", "arsenal herdado"]
}, {
  id: "gta-vi",
  gameId: "gta-vi",
  title: "Grand Theft Auto VI",
  releaseYear: 2026,
  storyYear: "2026 / não confirmado",
  universe: "HD Universe",
  city: "Leonida e Vice City",
  categoryTitle: "Category:Weapons in GTA VI",
  source: gtaWikiWeaponSource("Weapons in GTA VI"),
  totalLabel: "lista completa não confirmada antes do lançamento",
  coverage: ["armas vistas em material promocional", "itens de categoria wiki", "não confirmado", "leaks com cautela"],
  highlights: ["Baseball Bat", "Crowbar", "Flashlight", "Golf Balls", "Sniper/Rifles em categoria", "itens não confirmados"],
  summary: "GTA VI ainda não tem arsenal completo oficial. O dossiê carrega a categoria pública do GTA Wiki, mas marca tudo como sujeito a revisão até a Rockstar confirmar.",
  systems: ["A Rockstar mostrou crime armado, polícia, assaltos e perseguições em Leonida, mas não publicou tabela oficial de armas.", "A categoria do GTA Wiki pode misturar material promocional, leitura visual e conteúdo de vazamentos; por isso o dossiê separa fonte de confirmação.", "A ficha de VI é uma área de monitoramento, não uma afirmação final de cânone."],
  precisionNotes: ["Em 28 de maio de 2026, antes do lançamento oficial, não há lista completa oficial de armas de GTA VI publicada pela Rockstar."],
  tags: ["HD Universe", "GTA VI", "Leonida", "não confirmado", "monitoramento"]
}];
const weaponMediaById = {
  "gta-1": gtaWikiWeaponImage("Pistol (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/d/d5/Pistol-GTA1-icon.png/revision/latest?cb=20090915141222", "Pistol em Grand Theft Auto"),
  "london-1969": gtaWikiWeaponImage("Rocket Launcher (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/0/05/RocketLauncher-GTAL-icon.png/revision/latest?cb=20090915141731", "Rocket Launcher no pacote London"),
  "london-1961": gtaWikiWeaponImage("Pistol (2D Universe)", "https://static.wikia.nocookie.net/gtawiki/images/f/f3/Pistol-GTAL-icon.png/revision/latest?cb=20090915141917", "Pistol no pacote London"),
  "gta-2": gtaWikiWeaponImage("ElectroGun", "https://static.wikia.nocookie.net/gtawiki/images/0/0a/ElectroGun-GTA2-icon.png/revision/latest?cb=20091122100500", "ElectroGun em GTA 2"),
  "gta-iii": gtaWikiWeaponImage("AK47", "https://static.wikia.nocookie.net/gtawiki/images/3/3e/AK-47-GTA3-icon.png/revision/latest?cb=20210524100050", "AK-47 em GTA III"),
  "vice-city": gtaWikiWeaponImage("Chainsaw", "https://static.wikia.nocookie.net/gtawiki/images/c/c2/Chainsaw-GTAVC.png/revision/latest?cb=20240609020851", "Chainsaw em GTA: Vice City"),
  "san-andreas": gtaWikiWeaponImage("Desert Eagle", "https://static.wikia.nocookie.net/gtawiki/images/1/1b/DesertEagle-GTASA.png/revision/latest?cb=20240609060938", "Desert Eagle em GTA: San Andreas"),
  "gta-advance": gtaWikiWeaponImage("Flamethrower", "https://static.wikia.nocookie.net/gtawiki/images/b/b4/Flamethrower-GTAA.png/revision/latest?cb=20240624202557", "Flamethrower em GTA Advance"),
  "liberty-city-stories": gtaWikiWeaponImage("M60", "https://static.wikia.nocookie.net/gtawiki/images/7/74/M60-GTALCS.png/revision/latest?cb=20240609200217", "M60 em Liberty City Stories"),
  "vice-city-stories": gtaWikiWeaponImage("M249", "https://static.wikia.nocookie.net/gtawiki/images/1/12/M249-GTAVCS.png/revision/latest?cb=20240702183727", "M249 em Vice City Stories"),
  "gta-iv": gtaWikiWeaponImage("Carbine Rifle", "https://static.wikia.nocookie.net/gtawiki/images/1/15/CarbineRifle-GTAIV.png/revision/latest?cb=20250916010014", "Carbine Rifle em GTA IV"),
  "lost-and-damned": gtaWikiWeaponImage("Pipe Bomb", "https://static.wikia.nocookie.net/gtawiki/images/4/4c/PipeBomb-TLAD.png/revision/latest?cb=20250916093853", "Pipe Bomb em The Lost and Damned"),
  "ballad-gay-tony": gtaWikiWeaponImage("Advanced MG", "https://static.wikia.nocookie.net/gtawiki/images/9/92/AdvancedMG-TBOGT.png/revision/latest?cb=20250916094416", "Advanced MG em The Ballad of Gay Tony"),
  "chinatown-wars": gtaWikiWeaponImage("Chainsaw", "https://static.wikia.nocookie.net/gtawiki/images/7/7d/Chainsaw-GTACW-Android.png/revision/latest?cb=20150305191800", "Chainsaw em Chinatown Wars"),
  "gta-v": gtaWikiWeaponImage("Railgun", "https://static.wikia.nocookie.net/gtawiki/images/2/2e/Railgun-GTAV.png/revision/latest?cb=20180108210857", "Railgun em GTA V"),
  "gta-online": gtaWikiWeaponImage("Up-n-Atomizer", "https://static.wikia.nocookie.net/gtawiki/images/0/08/UpnAtomizer-GTAO-RGSC.png/revision/latest?cb=20190110134620", "Up-n-Atomizer em GTA Online"),
  "trilogy-definitive": gtaWikiWeaponImage("Minigun", "https://static.wikia.nocookie.net/gtawiki/images/4/4f/Minigun-GTASA.png/revision/latest?cb=20240609061425", "Minigun da era 3D remasterizada"),
  "gta-vi": gtaWikiWeaponImage("Weapons in GTA VI", "https://static.wikia.nocookie.net/gtawiki/images/1/17/Pistol-GTAVI-Trailer1Artwork.jpg/revision/latest?cb=20250816021143", "Pistol vista em material de GTA VI", {
    alt: "Arma vista em material promocional de GTA VI; arsenal completo ainda nao confirmado",
    caption: "GTA Wiki - GTA VI, arma vista em trailer"
  })
};
weaponDossierData.forEach(item => {
  if (weaponMediaById[item.id]) item.media = weaponMediaById[item.id];
});
Object.assign(window, {
  weaponDossierData
});

/* >>> sections-1.jsx */
;const HUDNav = ({
  active,
  onJump
}) => {
  const [open, setOpen] = React.useState(false);
  return React.createElement("header", {
    className: "hud"
  }, React.createElement("div", {
    className: "hud-inner"
  }, React.createElement("div", {
    className: "lock"
  }, React.createElement("div", {
    className: "badge"
  }, "U"), React.createElement("div", {
    style: {
      lineHeight: 1.1
    }
  }, React.createElement("div", {
    style: {
      fontSize: 14,
      letterSpacing: ".22em"
    }
  }, "URBAN UNIVERSE"), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      letterSpacing: ".22em",
      color: "var(--grit)"
    }
  }, "FRANCHISE ARCHIVE / v.0.1"))), React.createElement("nav", {
    className: open ? "open" : ""
  }, NAV.map(n => React.createElement("a", {
    key: n.id,
    href: `#${n.id}`,
    className: active === n.id ? "active" : "",
    onClick: e => {
      setOpen(false);
      onJump && onJump(n.id);
    }
  }, React.createElement("span", {
    className: "k"
  }, n.k), " ", n.label))), React.createElement("button", {
    className: "burger",
    onClick: () => setOpen(v => !v),
    "aria-label": "Menu"
  }, "\u2261")));
};
const Hero = () => {
  return React.createElement("section", {
    id: "overview",
    style: {
      position: "relative",
      overflow: "hidden",
      borderBottom: "1px solid var(--line)"
    }
  }, React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0
    }
  }, React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg,transparent 30%,rgba(0,0,0,.55) 70%,#0a0a0c 100%)",
      zIndex: 2
    }
  }), React.createElement("div", {
    style: {
      position: "absolute",
      inset: "auto 0 0 0",
      height: "55%"
    }
  }, React.createElement(Skyline, {
    palette: {
      sky: "#0e0e18",
      a: "#16161e",
      b: "#1d1d28",
      c2: "#262633",
      win: "#ffd24a"
    }
  })), React.createElement("div", {
    style: {
      position: "absolute",
      left: "-10%",
      top: "10%",
      width: "60%",
      height: "60%",
      background: "radial-gradient(closest-side, rgba(255,61,138,.32), transparent)",
      filter: "blur(20px)"
    }
  }), React.createElement("div", {
    style: {
      position: "absolute",
      right: "-10%",
      top: "5%",
      width: "55%",
      height: "65%",
      background: "radial-gradient(closest-side, rgba(59,108,255,.28), transparent)",
      filter: "blur(20px)"
    }
  }), React.createElement("div", {
    className: "siren-fx"
  }, React.createElement("div", {
    className: "r"
  }), React.createElement("div", {
    className: "b"
  }))), React.createElement("div", {
    className: "wrap",
    style: {
      position: "relative",
      zIndex: 3,
      paddingTop: 64,
      paddingBottom: 64
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      marginBottom: 30,
      flexWrap: "wrap"
    }
  }, React.createElement("span", {
    className: "tape"
  }, "DO NOT CROSS \xB7 CENA DE INVESTIGA\xC7\xC3O"), React.createElement("span", {
    className: "mono",
    style: {
      color: "var(--bone-2)",
      fontSize: 12,
      letterSpacing: ".22em"
    }
  }, "FILE N\xBA 04-77-\u03A9 \xB7 CONFIDENCIAL")), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr .9fr",
      gap: 42,
      alignItems: "end"
    }
  }, React.createElement("div", null, React.createElement(Eyebrow, {
    color: "var(--neon)"
  }, "Arquivo Visual da Franquia \xB7 Universo N\xE3o-Oficial"), React.createElement("h1", {
    className: "display",
    style: {
      fontSize: "clamp(64px,9vw,168px)",
      margin: "14px 0 8px"
    }
  }, "GRAND ", React.createElement("span", {
    style: {
      color: "var(--evidence)",
      WebkitTextStroke: "2px #1a1300"
    }
  }, "THEFT"), React.createElement("br", null), "AUTO ", React.createElement("em", {
    style: {
      fontStyle: "normal",
      color: "var(--neon)",
      textShadow: "0 0 30px rgba(255,61,138,.5)"
    }
  }, "UNIVERSE")), React.createElement("p", {
    style: {
      maxWidth: 560,
      color: "var(--bone-2)",
      fontSize: 18,
      lineHeight: 1.5,
      marginTop: 18
    }
  }, "Uma timeline visual da criminalidade, das cidades, dos personagens e das hist\xF3rias que moldaram o g\xEAnero do mundo aberto urbano.", React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, " Conte\xFAdo editorial fict\xEDcio \u2014 visual original e seguro.")), React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, React.createElement("a", {
    className: "btn solid",
    href: "#timeline"
  }, React.createElement("span", null, "Explorar Timeline"), React.createElement("span", {
    className: "arr"
  }, "\u2192")), React.createElement("a", {
    className: "btn neon",
    href: "#characters"
  }, React.createElement("span", null, "Ver Personagens"), React.createElement("span", {
    className: "arr"
  }, "\u2192")), React.createElement("a", {
    className: "btn blue",
    href: "#cities"
  }, React.createElement("span", null, "Mapa das Cidades"), React.createElement("span", {
    className: "arr"
  }, "\u2192"))), React.createElement("div", {
    className: "marquee",
    style: {
      marginTop: 46
    }
  }, React.createElement("div", {
    className: "track"
  }, Array.from({
    length: 2
  }).map((_, k) => React.createElement(React.Fragment, {
    key: k
  }, React.createElement("span", null, "Boletim das 22h ", React.createElement("span", {
    className: "sep"
  }, "\u25C6")), React.createElement("span", null, "Fuga em Vice Boulevard ", React.createElement("span", {
    className: "sep"
  }, "\u25C6")), React.createElement("span", null, "Tiroteio no porto de Liberty ", React.createElement("span", {
    className: "sep"
  }, "\u25C6")), React.createElement("span", null, "Cassino de Las Venturas \xE9 assaltado ", React.createElement("span", {
    className: "sep"
  }, "\u25C6")), React.createElement("span", null, "Helic\xF3ptero rastreia suspeito em Los Santos ", React.createElement("span", {
    className: "sep"
  }, "\u25C6")), React.createElement("span", null, "Cripto Mafia movimenta milh\xF5es ", React.createElement("span", {
    className: "sep"
  }, "\u25C6"))))))), React.createElement("div", null, React.createElement("div", {
    className: "card",
    style: {
      padding: 22
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10
    }
  }, React.createElement("div", {
    className: "eyebrow"
  }, "WANTED \xB7 N\xCDVEL DE PROCURADO"), React.createElement("span", {
    className: "mono",
    style: {
      color: "var(--siren)",
      fontSize: 11
    }
  }, "LIVE")), React.createElement("div", {
    className: "headline",
    style: {
      fontSize: 42,
      color: "var(--evidence)"
    }
  }, "4 ESTRELAS"), React.createElement("div", {
    style: {
      margin: "10px 0 14px"
    }
  }, React.createElement(Stars, {
    n: 4
  })), React.createElement("div", {
    style: {
      fontFamily: "Space Mono",
      fontSize: 11,
      color: "var(--bone-2)",
      lineHeight: 1.6
    }
  }, "Suspeito visto na zona 17. Unidades a\xE9reas a caminho. Bloqueios em Sunset & 4th."), React.createElement("hr", {
    className: "rule",
    style: {
      margin: "14px 0"
    }
  }), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, React.createElement(Tag, {
    tone: "red"
  }, "Armado"), React.createElement(Tag, {
    tone: "yellow"
  }, "Em Fuga"), React.createElement(Tag, {
    tone: "blue"
  }, "Pol\xEDcia"), React.createElement(Tag, {
    tone: "pink"
  }, "Influ\xEAncia"))), React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 10,
      marginTop: 14
    }
  }, [{
    n: "08",
    l: "Jogos\nprincipais"
  }, {
    n: "12",
    l: "Cidades\nfictícias"
  }, {
    n: "240+",
    l: "Personagens\nregistrados"
  }, {
    n: "46",
    l: "Gangues\ne máfias"
  }, {
    n: "32",
    l: "Organizações\ncriminosas"
  }, {
    n: "28",
    l: "Décadas\ndocumentadas"
  }].map((s, i) => React.createElement("div", {
    key: i,
    className: "card",
    style: {
      padding: "12px"
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    className: "display",
    style: {
      fontSize: 34,
      lineHeight: 1,
      color: "var(--bone)"
    }
  }, s.n), React.createElement("div", {
    className: "mono",
    style: {
      whiteSpace: "pre-line",
      fontSize: 10,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "var(--grit)",
      marginTop: 6
    }
  }, s.l))))))));
};
const TimelineSection = ({
  onOpenDossier
}) => React.createElement("section", {
  id: "timeline",
  style: {
    padding: "96px 0",
    position: "relative"
  }
}, React.createElement("div", {
  className: "wrap"
}, React.createElement("div", {
  className: "sec-head"
}, React.createElement("div", null, React.createElement(Eyebrow, {
  color: "var(--siren)"
}, "Cap\xEDtulo 02 \xB7 Linha de investiga\xE7\xE3o"), React.createElement("h2", null, React.createElement("em", null, "Timeline"), " da Franquia")), React.createElement("div", {
  className: "right"
}, React.createElement("span", {
  style: {
    width: 8,
    height: 8,
    background: "var(--siren)",
    borderRadius: "50%",
    boxShadow: "0 0 10px var(--siren)"
  }
}), " 1997 \u2192 2025 \xB7 em ordem cronol\xF3gica")), React.createElement("div", {
  className: "timeline"
}, React.createElement("div", {
  className: "spine"
}), TIMELINE.map((t, i) => {
  const left = i % 2 === 0;
  return React.createElement("div", {
    key: i,
    className: `row ${left ? "" : "flip"}`
  }, React.createElement("div", {
    className: "side-l"
  }, left ? React.createElement(TimelineCard, {
    t: t,
    onOpen: () => onOpenDossier({
      type: "game",
      t
    }),
    side: "left"
  }) : null), React.createElement("div", {
    className: "pin",
    style: {
      position: "relative"
    }
  }, React.createElement("span", {
    className: "dot"
  }), React.createElement("span", {
    className: "yr"
  }, t.year)), React.createElement("div", {
    className: "side-r"
  }, !left ? React.createElement(TimelineCard, {
    t: t,
    onOpen: () => onOpenDossier({
      type: "game",
      t
    }),
    side: "right"
  }) : null, left && React.createElement(SidebarBeat, {
    t: t
  })), !left && React.createElement("div", {
    className: "side-l",
    style: {
      order: -1
    }
  }, React.createElement(SidebarBeat, {
    t: t
  })));
}))));
const SidebarBeat = ({
  t
}) => React.createElement("div", {
  className: "mono",
  style: {
    color: "var(--grit)",
    fontSize: 11,
    letterSpacing: ".18em",
    padding: 14,
    border: "1px dashed var(--line)",
    borderRadius: 2,
    background: "rgba(255,255,255,.01)"
  }
}, React.createElement("div", {
  style: {
    color: "var(--evidence)",
    marginBottom: 6
  }
}, "EVENTO \xB7 ", t.year), "Reabertura do caso. Conex\xF5es cruzadas detectadas com ", t.city, ". Pista visual refor\xE7ada por testemunha sob prote\xE7\xE3o.");
const TimelineCard = ({
  t,
  onOpen,
  side
}) => React.createElement("div", {
  className: "card",
  style: {
    padding: 16
  }
}, React.createElement(Corners, null), React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    gap: 14
  }
}, React.createElement("div", {
  className: "ph",
  style: {
    aspectRatio: "3/4"
  }
}, React.createElement(Corners, null), React.createElement("span", null, t.city)), React.createElement("div", null, React.createElement("div", {
  style: {
    display: "flex",
    gap: 8,
    alignItems: "center",
    justifyContent: "space-between"
  }
}, React.createElement(Tag, {
  tone: "yellow"
}, t.badge), React.createElement("span", {
  className: "mono",
  style: {
    fontSize: 10,
    letterSpacing: ".22em",
    color: "var(--grit)"
  }
}, t.era)), React.createElement("div", {
  className: "headline",
  style: {
    fontSize: 30,
    marginTop: 8,
    color: "var(--bone)"
  }
}, t.title), React.createElement("div", {
  className: "mono",
  style: {
    color: "var(--neon)",
    fontSize: 11,
    letterSpacing: ".22em",
    marginTop: 4
  }
}, t.city.toUpperCase()), React.createElement("div", {
  style: {
    color: "var(--bone-2)",
    fontSize: 13,
    marginTop: 8,
    lineHeight: 1.5
  }
}, "Protagonista: ", React.createElement("strong", {
  style: {
    color: "#fff"
  }
}, t.protag), ".", React.createElement("br", null), React.createElement("span", {
  style: {
    color: "var(--grit)"
  }
}, "// resumo curto \u2014 inserir conte\xFAdo completo depois.")), React.createElement("button", {
  className: "btn",
  style: {
    marginTop: 14,
    padding: "8px 14px",
    fontSize: 12
  },
  onClick: onOpen
}, React.createElement("span", null, "Abrir Dossi\xEA"), React.createElement("span", {
  className: "arr"
}, "\u2192")))));
Object.assign(window, {
  HUDNav,
  Hero,
  TimelineSection
});

/* >>> sections-2.jsx */
;const GameCard = ({
  g,
  onOpen
}) => {
  const t = TONE[g.tone];
  return React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4/3",
      background: `linear-gradient(180deg, ${t.a}, ${t.b})`,
      overflow: "hidden"
    }
  }, React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `radial-gradient(closest-side, ${t.accent}33, transparent 70%)`
    }
  }), React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "70%"
    }
  }, React.createElement(Skyline, {
    palette: {
      sky: t.a,
      a: t.b,
      b: t.a,
      c2: "#0c0c14",
      win: t.accent
    }
  })), React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14,
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, React.createElement(Tag, {
    tone: t.tag
  }, g.city)), React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      right: 14,
      color: t.accent,
      fontFamily: "Big Shoulders Display",
      fontWeight: 900,
      fontSize: 34,
      lineHeight: 1,
      opacity: .85,
      textShadow: `0 0 24px ${t.accent}55`
    }
  }, g.year), React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 14,
      left: 14,
      right: 14
    }
  }, React.createElement("div", {
    className: "display",
    style: {
      fontSize: 42,
      lineHeight: .9,
      color: "#fff"
    }
  }, g.name), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".22em",
      color: "#e9e7df",
      marginTop: 6,
      opacity: .8
    }
  }, g.pals.join(" · "))), React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "repeating-linear-gradient(0deg, rgba(255,255,255,.025) 0 1px, transparent 1px 4px)",
      pointerEvents: "none"
    }
  })), React.createElement("div", {
    style: {
      padding: 16,
      borderTop: "1px solid var(--line)"
    }
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap"
    }
  }, React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 13,
      maxWidth: 380,
      lineHeight: 1.5
    }
  }, g.desc), React.createElement("button", {
    className: "btn",
    style: {
      padding: "8px 12px",
      fontSize: 11
    },
    onClick: () => onOpen({
      type: "game",
      g
    })
  }, "Ver Hist\xF3ria ", React.createElement("span", {
    className: "arr"
  }, "\u2192")))));
};
const GamesSection = ({
  onOpenDossier
}) => React.createElement("section", {
  id: "games",
  style: {
    padding: "96px 0",
    background: "linear-gradient(180deg,#0a0a0d, #0e0e14 30%, #0a0a0d)"
  }
}, React.createElement("div", {
  className: "wrap"
}, React.createElement("div", {
  className: "sec-head"
}, React.createElement("div", null, React.createElement(Eyebrow, {
  color: "var(--evidence)"
}, "Cap\xEDtulo 03 \xB7 cat\xE1logo"), React.createElement("h2", null, "Jogos ", React.createElement("em", null, "Principais"))), React.createElement("div", {
  className: "right"
}, "6 t\xEDtulos \xB7 4 eras \xB7 1 universo")), React.createElement("div", {
  className: "grid g-3"
}, GAMES.map(g => React.createElement(GameCard, {
  key: g.key,
  g: g,
  onOpen: onOpenDossier
})))));
const ROLE_TONE = {
  protagonist: "yellow",
  antagonist: "red",
  ally: "green",
  authority: "blue",
  secondary: "neutral",
  gang: "pink",
  mafia: "red",
  police: "blue",
  traitor: "red"
};
const ROLE_LABEL = {
  protagonist: "Protagonista",
  antagonist: "Antagonista",
  ally: "Aliado",
  authority: "Autoridade",
  secondary: "Secundário"
};
const CharacterCard = ({
  c,
  onOpen
}) => React.createElement("div", {
  className: "card",
  style: {
    padding: 0,
    cursor: "pointer"
  },
  onClick: () => onOpen({
    type: "character",
    c
  })
}, React.createElement(Corners, null), React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "110px 1fr",
    gap: 0
  }
}, React.createElement("div", {
  style: {
    padding: 12,
    borderRight: "1px solid var(--line)"
  }
}, React.createElement("div", {
  className: "ph",
  style: {
    aspectRatio: "3/4",
    margin: 0
  }
}, React.createElement(Corners, null), React.createElement("span", null, "MUGSHOT")), React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 9,
    letterSpacing: ".22em",
    color: "var(--grit)",
    marginTop: 8,
    textAlign: "center"
  }
}, "ID \xB7 ", c.id.toUpperCase())), React.createElement("div", {
  style: {
    padding: "12px 14px",
    position: "relative"
  }
}, React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}, React.createElement(Tag, {
  tone: ROLE_TONE[c.role] || "neutral"
}, ROLE_LABEL[c.role]), React.createElement("span", {
  className: "mono",
  style: {
    fontSize: 10,
    letterSpacing: ".22em",
    color: "var(--grit)"
  }
}, c.game)), React.createElement("div", {
  className: "headline",
  style: {
    fontSize: 22,
    marginTop: 8,
    lineHeight: 1,
    color: "var(--bone)"
  }
}, c.name), React.createElement("div", {
  className: "mono",
  style: {
    color: "var(--neon)",
    fontSize: 11,
    letterSpacing: ".22em",
    marginTop: 4
  }
}, "\u201C", c.nick, "\u201D"), React.createElement("hr", {
  className: "rule",
  style: {
    margin: "12px 0"
  }
}), React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 6,
    fontFamily: "Space Mono",
    fontSize: 11,
    color: "var(--bone-2)"
  }
}, React.createElement("div", null, React.createElement("span", {
  style: {
    color: "var(--grit)"
  }
}, "CIDADE"), React.createElement("br", null), c.city), React.createElement("div", null, React.createElement("span", {
  style: {
    color: "var(--grit)"
  }
}, "FA\xC7\xC3O"), React.createElement("br", null), c.faction), React.createElement("div", null, React.createElement("span", {
  style: {
    color: "var(--grit)"
  }
}, "STATUS"), React.createElement("br", null), React.createElement("span", {
  style: {
    color: c.status === "Falecido" ? "var(--siren)" : c.status === "Foragida" || c.status === "Procurado" ? "var(--evidence)" : "var(--money)"
  }
}, c.status)), React.createElement("div", null, React.createElement("span", {
  style: {
    color: "var(--grit)"
  }
}, "AMEA\xC7A"), React.createElement("br", null), React.createElement(Stars, {
  n: c.threat,
  max: 5
}))))), React.createElement("div", {
  style: {
    padding: "12px 14px",
    borderTop: "1px solid var(--line)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}, React.createElement("span", {
  className: "mono",
  style: {
    fontSize: 10,
    letterSpacing: ".22em",
    color: "var(--grit)"
  }
}, "ABRIR FICHA COMPLETA \u2192"), React.createElement("span", {
  style: {
    color: "var(--bone-2)"
  }
}, "\u2197")));
const CharactersSection = ({
  onOpenDossier
}) => {
  const [filter, setFilter] = React.useState("all");
  const [q, setQ] = React.useState("");
  const filtered = CHARACTERS.filter(c => (filter === "all" || c.role === filter) && (q === "" || (c.name + c.nick + c.city + c.faction).toLowerCase().includes(q.toLowerCase())));
  return React.createElement("section", {
    id: "characters",
    style: {
      padding: "96px 0"
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head"
  }, React.createElement("div", null, React.createElement(Eyebrow, {
    color: "var(--neon)"
  }, "Cap\xEDtulo 04 \xB7 base de dados"), React.createElement("h2", null, "Dossi\xEA de ", React.createElement("em", null, "Personagens"))), React.createElement("div", {
    className: "right"
  }, "240+ fichas \xB7 busca cruzada por fac\xE7\xE3o, status e amea\xE7a")), React.createElement("div", {
    className: "card",
    style: {
      padding: 14,
      display: "flex",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap",
      marginBottom: 18
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".22em",
      color: "var(--evidence)"
    }
  }, "FILTROS \u25BE"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap"
    }
  }, ROLE_FILTERS.map(r => React.createElement("button", {
    key: r.id,
    onClick: () => setFilter(r.id),
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".22em",
      textTransform: "uppercase",
      padding: "8px 12px",
      border: "1px solid var(--line-2)",
      borderRadius: 2,
      cursor: "pointer",
      background: filter === r.id ? "var(--evidence)" : "transparent",
      color: filter === r.id ? "#1a1300" : "var(--bone-2)"
    }
  }, r.label))), React.createElement("div", {
    style: {
      flex: 1
    }
  }), React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      border: "1px solid var(--line-2)",
      borderRadius: 2,
      minWidth: 260
    }
  }, React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, "\u2315"), React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "BUSCAR \xB7 nome, apelido, fac\xE7\xE3o...",
    style: {
      background: "transparent",
      border: 0,
      outline: 0,
      color: "var(--bone)",
      fontFamily: "Space Mono",
      fontSize: 11,
      letterSpacing: ".22em",
      width: "100%"
    }
  }))), React.createElement("div", {
    className: "grid g-3"
  }, filtered.map(c => React.createElement(CharacterCard, {
    key: c.id,
    c: c,
    onOpen: onOpenDossier
  }))), filtered.length === 0 && React.createElement("div", {
    className: "mono",
    style: {
      padding: 30,
      textAlign: "center",
      color: "var(--grit)"
    }
  }, "NENHUM PERFIL ENCONTRADO \xB7  ARQUIVO VAZIO")));
};
Object.assign(window, {
  GamesSection,
  CharactersSection
});

/* >>> sections-3.jsx */
;const GangCard = ({
  g,
  onOpen
}) => React.createElement("div", {
  className: "card",
  style: {
    padding: 16,
    position: "relative"
  }
}, React.createElement(Corners, null), React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 8
  }
}, React.createElement("div", null, React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 10,
    letterSpacing: ".22em",
    color: g.color
  }
}, "\u25CF ", g.type.toUpperCase()), React.createElement("div", {
  className: "headline",
  style: {
    fontSize: 24,
    marginTop: 6,
    color: "var(--bone)"
  }
}, g.name)), React.createElement("div", {
  style: {
    width: 42,
    height: 42,
    borderRadius: 2,
    border: `1px solid ${g.color}`,
    display: "grid",
    placeItems: "center",
    color: g.color,
    fontFamily: "Big Shoulders Display",
    fontWeight: 900,
    fontSize: 22,
    boxShadow: `0 0 18px ${g.color}55`
  }
}, g.name.split(" ").map(w => w[0]).slice(0, 2).join(""))), React.createElement("hr", {
  className: "rule",
  style: {
    margin: "12px 0"
  }
}), React.createElement("div", {
  style: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 8,
    fontFamily: "Space Mono",
    fontSize: 11,
    color: "var(--bone-2)"
  }
}, React.createElement("div", null, React.createElement("span", {
  style: {
    color: "var(--grit)"
  }
}, "CIDADE"), React.createElement("br", null), g.city), React.createElement("div", null, React.createElement("span", {
  style: {
    color: "var(--grit)"
  }
}, "TERRIT\xD3RIO"), React.createElement("br", null), g.territory), React.createElement("div", null, React.createElement("span", {
  style: {
    color: "var(--grit)"
  }
}, "LIDERAN\xC7A"), React.createElement("br", null), g.leaders), React.createElement("div", null, React.createElement("span", {
  style: {
    color: "var(--grit)"
  }
}, "RIVAIS"), React.createElement("br", null), React.createElement("span", {
  style: {
    color: "var(--siren)"
  }
}, g.rivals))), React.createElement("button", {
  className: "btn",
  style: {
    marginTop: 14,
    padding: "8px 12px",
    fontSize: 11
  },
  onClick: () => onOpen({
    type: "gang",
    g
  })
}, "Painel Criminal ", React.createElement("span", {
  className: "arr"
}, "\u2192")));
const GangsSection = ({
  onOpenDossier
}) => React.createElement("section", {
  id: "gangs",
  style: {
    padding: "96px 0",
    position: "relative",
    background: "linear-gradient(180deg, #0a0a0d, #0c0a12)"
  }
}, React.createElement("div", {
  className: "wrap",
  style: {
    position: "relative"
  }
}, React.createElement("div", {
  className: "sec-head"
}, React.createElement("div", null, React.createElement(Eyebrow, {
  color: "var(--siren)"
}, "Cap\xEDtulo 06 \xB7 painel de investiga\xE7\xE3o"), React.createElement("h2", null, "Gangues, ", React.createElement("em", null, "M\xE1fias"), " e Fac\xE7\xF5es")), React.createElement("div", {
  className: "right"
}, "linhas vermelhas conectam rivais \xB7 clique para abrir")), React.createElement("div", {
  style: {
    position: "relative"
  }
}, React.createElement("svg", {
  className: "connector",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none",
  style: {
    width: "100%",
    height: "100%",
    position: "absolute"
  }
}, [{
  x1: 18,
  y1: 18,
  x2: 42,
  y2: 18
}, {
  x1: 42,
  y1: 42,
  x2: 66,
  y2: 65
}, {
  x1: 66,
  y1: 18,
  x2: 90,
  y2: 42
}, {
  x1: 18,
  y1: 65,
  x2: 42,
  y2: 82
}].map((l, i) => React.createElement("line", {
  key: i,
  x1: l.x1,
  y1: l.y1,
  x2: l.x2,
  y2: l.y2,
  stroke: "#ff2a2a",
  strokeWidth: ".15",
  strokeDasharray: ".6 .6",
  opacity: ".5"
}))), React.createElement("div", {
  className: "grid g-4"
}, GANGS.map((g, i) => React.createElement(GangCard, {
  key: i,
  g: g,
  onOpen: onOpenDossier
}))))));
const CityCard = ({
  c,
  onOpen
}) => {
  const t = TONE[c.tone];
  return React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      gridColumn: c.name === "Liberty City" || c.name === "Los Santos" || c.name === "Costa Tropical" ? "span 2" : "span 1"
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16/9",
      background: `linear-gradient(180deg, ${t.a}, ${t.b})`,
      overflow: "hidden"
    }
  }, React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: .55
    }
  }, React.createElement(Skyline, {
    palette: {
      sky: t.a,
      a: t.b,
      b: t.a,
      c2: "#101018",
      win: t.accent
    }
  })), React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `radial-gradient(ellipse at 20% 0%, ${t.accent}33, transparent 50%)`
    }
  }), React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 14,
      right: 14,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, React.createElement("div", null, React.createElement(Tag, {
    tone: t.tag
  }, c.crime), React.createElement("div", {
    className: "display",
    style: {
      fontSize: 46,
      marginTop: 10,
      color: "#fff",
      lineHeight: .9
    }
  }, c.name), React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--bone-2)",
      fontSize: 11,
      letterSpacing: ".22em",
      marginTop: 6
    }
  }, c.sub.toUpperCase(), " \xB7 POP. ", c.pop)), React.createElement("div", {
    style: {
      width: 110,
      height: 90,
      border: "1px solid var(--line-2)",
      borderRadius: 2,
      overflow: "hidden",
      background: "#080810"
    }
  }, React.createElement(MiniMap, {
    pins: c.pins
  })))), React.createElement("div", {
    style: {
      padding: 16,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderTop: "1px solid var(--line)",
      gap: 10,
      flexWrap: "wrap"
    }
  }, React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 13,
      maxWidth: 520
    }
  }, c.note, " ", React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, " // espa\xE7o para hist\xF3ria da cidade.")), React.createElement("button", {
    className: "btn",
    style: {
      padding: "8px 12px",
      fontSize: 11
    },
    onClick: () => onOpen({
      type: "city",
      c
    })
  }, "Explorar Cidade ", React.createElement("span", {
    className: "arr"
  }, "\u2192"))));
};
const CitiesSection = ({
  onOpenDossier
}) => React.createElement("section", {
  id: "cities",
  style: {
    padding: "96px 0"
  }
}, React.createElement("div", {
  className: "wrap"
}, React.createElement("div", {
  className: "sec-head"
}, React.createElement("div", null, React.createElement(Eyebrow, {
  color: "var(--copper)"
}, "Cap\xEDtulo 07 \xB7 mapa visual"), React.createElement("h2", null, "Mapa das ", React.createElement("em", null, "Cidades"))), React.createElement("div", {
  className: "right"
}, "8 zonas \xB7 rotas \xB7 territ\xF3rios")), React.createElement("div", {
  className: "grid g-3",
  style: {
    gridAutoRows: "min-content"
  }
}, CITIES.map((c, i) => React.createElement(CityCard, {
  key: i,
  c: c,
  onOpen: onOpenDossier
})))));
const SmallItemCard = ({
  title,
  sub,
  right,
  icon,
  color
}) => React.createElement("div", {
  className: "card",
  style: {
    padding: 14
  }
}, React.createElement(Corners, null), React.createElement("div", {
  style: {
    display: "flex",
    alignItems: "center",
    gap: 12
  }
}, React.createElement("div", {
  style: {
    width: 42,
    height: 42,
    display: "grid",
    placeItems: "center",
    border: `1px solid ${color || "var(--line-2)"}`,
    borderRadius: 2,
    color: color || "var(--bone)"
  }
}, icon), React.createElement("div", {
  style: {
    flex: 1,
    minWidth: 0
  }
}, React.createElement("div", {
  className: "headline",
  style: {
    fontSize: 16,
    color: "var(--bone)",
    lineHeight: 1
  }
}, title), React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 10,
    letterSpacing: ".22em",
    color: "var(--grit)",
    marginTop: 4
  }
}, sub)), right && React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 11,
    color: color || "var(--bone-2)"
  }
}, right)));
const Icon = {
  car: React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, React.createElement("path", {
    d: "M3 16h18M5 16l1.5-5h11L19 16M7 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
  })),
  gun: React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, React.createElement("path", {
    d: "M3 9h12l3 3v4h-3l-2-2H3z M5 9V7"
  })),
  radio: React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, React.createElement("rect", {
    x: "3",
    y: "8",
    width: "18",
    height: "11",
    rx: "2"
  }), React.createElement("circle", {
    cx: "16",
    cy: "13.5",
    r: "2"
  }), React.createElement("path", {
    d: "M7 13h4M7 15h3M8 8 17 4"
  })),
  money: React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, React.createElement("rect", {
    x: "3",
    y: "6",
    width: "18",
    height: "12",
    rx: "1"
  }), React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }))
};
const ArsenalSection = () => React.createElement("section", {
  id: "vehicles",
  style: {
    padding: "96px 0",
    background: "linear-gradient(180deg, #0a0a0d, #0a0c12 50%, #0a0a0d)"
  }
}, React.createElement("div", {
  className: "wrap"
}, React.createElement("div", {
  className: "sec-head"
}, React.createElement("div", null, React.createElement(Eyebrow, {
  color: "var(--money)"
}, "Cap\xEDtulo 08 \xB7 invent\xE1rio"), React.createElement("h2", null, React.createElement("em", null, "Garagem"), ", Arsenal & R\xE1dio")), React.createElement("div", {
  className: "right"
}, "cards reutiliz\xE1veis \xB7 \xEDcones \xB7 placeholders")), React.createElement("div", {
  className: "grid",
  style: {
    gridTemplateColumns: "1.1fr 1fr 1fr",
    gap: 18
  }
}, React.createElement("div", {
  className: "card",
  style: {
    padding: 18
  }
}, React.createElement(Corners, null), React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}, React.createElement("div", {
  className: "headline",
  style: {
    fontSize: 28,
    color: "var(--bone)"
  }
}, "GARAGEM"), React.createElement(Tag, {
  tone: "yellow"
}, "VE\xCDCULOS")), React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 11,
    letterSpacing: ".22em",
    color: "var(--grit)",
    marginTop: 6
  }
}, "frota IC\xD4NICA \xB7 100+ unidades"), React.createElement("div", {
  style: {
    marginTop: 14,
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, VEHICLES.map((v, i) => React.createElement(SmallItemCard, {
  key: i,
  title: v.name,
  sub: `${v.class.toUpperCase()} · TOP ${v.top}`,
  icon: Icon.car,
  color: "var(--evidence)",
  right: "\u25C6\u25C6\u25C6\u25C7"
})))), React.createElement("div", {
  className: "card",
  style: {
    padding: 18
  }
}, React.createElement(Corners, null), React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}, React.createElement("div", {
  className: "headline",
  style: {
    fontSize: 28,
    color: "var(--bone)"
  }
}, "ARSENAL"), React.createElement(Tag, {
  tone: "red"
}, "ARMAS")), React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 11,
    letterSpacing: ".22em",
    color: "var(--grit)",
    marginTop: 6
  }
}, "equipamento \xB7 80+ itens"), React.createElement("div", {
  style: {
    marginTop: 14,
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, WEAPONS.map((w, i) => React.createElement(SmallItemCard, {
  key: i,
  title: w.name,
  sub: `${w.class.toUpperCase()} · ${w.rarity.toUpperCase()}`,
  icon: Icon.gun,
  color: "var(--siren)",
  right: w.rarity === "Lendário" ? "★★★" : w.rarity === "Raro" ? "★★" : "★"
})))), React.createElement("div", {
  className: "card",
  style: {
    padding: 18
  }
}, React.createElement(Corners, null), React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}, React.createElement("div", {
  className: "headline",
  style: {
    fontSize: 28,
    color: "var(--bone)"
  }
}, "R\xC1DIO"), React.createElement(Tag, {
  tone: "pink"
}, "EMISSORAS")), React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 11,
    letterSpacing: ".22em",
    color: "var(--grit)",
    marginTop: 6
  }
}, "esta\xE7\xF5es \xB7 cultura sonora"), React.createElement("div", {
  style: {
    marginTop: 14,
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, RADIOS.map((r, i) => React.createElement(SmallItemCard, {
  key: i,
  title: r.name,
  sub: `${r.genre.toUpperCase()} · ${r.host.toUpperCase()}`,
  icon: Icon.radio,
  color: r.color,
  right: React.createElement("span", {
    className: "bars"
  }, React.createElement("span", null), React.createElement("span", null), React.createElement("span", null), React.createElement("span", null), React.createElement("span", null))
})))))));
const Anchor = ({
  id
}) => React.createElement("span", {
  id: id,
  style: {
    display: "block",
    position: "relative",
    top: -80
  }
});
const ClassifiedSection = () => React.createElement("section", {
  id: "classified",
  style: {
    padding: "96px 0",
    background: "linear-gradient(180deg, #0a0a0d, #110707)"
  }
}, React.createElement("div", {
  className: "wrap"
}, React.createElement("div", {
  className: "sec-head"
}, React.createElement("div", null, React.createElement(Eyebrow, {
  color: "var(--classified)"
}, "Cap\xEDtulo 12 \xB7 classified"), React.createElement("h2", null, "Arquivos ", React.createElement("em", null, "Secretos"), " & Curiosidades")), React.createElement("div", {
  className: "right"
}, "recortes \xB7 teorias \xB7 easter eggs")), React.createElement("div", {
  className: "grid g-3"
}, CLASSIFIED.map((d, i) => React.createElement("div", {
  key: d.id,
  className: "dossier",
  style: {
    padding: 22,
    transform: `rotate(${i % 2 === 0 ? -0.4 : 0.4}deg)`
  }
}, React.createElement("div", {
  className: `stamp ${d.stamp === "TEORIA" ? "green" : ""}`
}, d.stamp), React.createElement("div", {
  style: {
    fontSize: 11,
    letterSpacing: ".22em"
  }
}, d.file), React.createElement("h4", null, d.title), React.createElement("div", {
  className: "line"
}), React.createElement("p", {
  style: {
    fontSize: 13,
    lineHeight: 1.5,
    margin: 0
  }
}, d.body.split(" ").map((w, k) => {
  const redact = [4, 7, 12, 18].includes(k);
  return redact ? React.createElement("span", {
    key: k
  }, React.createElement("span", {
    className: "redact"
  }, w), " ") : React.createElement("span", {
    key: k
  }, w, " ");
})), React.createElement("div", {
  className: "line",
  style: {
    marginTop: 12
  }
}), React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
    fontSize: 10,
    letterSpacing: ".22em"
  }
}, React.createElement("span", null, "ARQUIVADO \xB7 24/0X/197X"), React.createElement("span", null, "// ESPA\xC7O PARA CONTE\xDADO"))))), React.createElement("div", {
  className: "grid g-3",
  style: {
    marginTop: 18
  }
}, ["MAFIOSO DESAPARECE EM ILHA", "COMISSARIO ENVOLVIDO EM ESQUEMA", "BANCO É ASSALTADO EM PLENO MEIO-DIA"].map((h, i) => React.createElement("div", {
  key: i,
  className: "card",
  style: {
    padding: 18,
    background: "linear-gradient(180deg,#1a1a1d,#0f0f12)"
  }
}, React.createElement(Corners, null), React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 10,
    letterSpacing: ".22em",
    color: "var(--grit)"
  }
}, "JORNAL \xB7 EDI\xC7\xC3O N\xBA ", 120 + i), React.createElement("div", {
  className: "display",
  style: {
    fontSize: 30,
    lineHeight: .95,
    marginTop: 8,
    color: "var(--bone)"
  }
}, h), React.createElement("div", {
  style: {
    marginTop: 10,
    fontSize: 12,
    color: "var(--bone-2)",
    lineHeight: 1.5,
    fontFamily: "'Times New Roman',serif"
  }
}, "Testemunhas oculares descrevem cena ca\xF3tica. Pol\xEDcia recusou-se a comentar. ", React.createElement("span", {
  className: "hl"
}, "A investiga\xE7\xE3o continua aberta.")))))));
Object.assign(window, {
  GangsSection,
  CitiesSection,
  ArsenalSection,
  ClassifiedSection,
  Anchor
});

/* >>> sections-4.jsx */
;const Dossier = ({
  open,
  onClose
}) => {
  if (!open) return null;
  const title = open.type === "game" ? open.t?.title || open.g?.name : open.type === "character" ? open.c?.name : open.type === "city" ? open.c?.name : open.type === "gang" ? open.g?.name : "DOSSIÊ";
  const sub = open.type === "game" ? open.t?.city || open.g?.city : open.type === "character" ? `${open.c?.nick} · ${open.c?.faction}` : open.type === "city" ? open.c?.sub : open.type === "gang" ? `${open.g?.type} · ${open.g?.city}` : "";
  return React.createElement("div", {
    className: "modal-back",
    onClick: onClose
  }, React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, React.createElement("div", {
    className: "head"
  }, React.createElement("div", null, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      letterSpacing: ".22em",
      color: "var(--grit)"
    }
  }, "DOSSI\xCA COMPLETO \xB7 FILE N\xBA ", Math.floor(Math.random() * 9000 + 1000)), React.createElement("div", {
    className: "display",
    style: {
      fontSize: 34,
      lineHeight: .9,
      marginTop: 4
    }
  }, title), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".22em",
      color: "var(--neon)",
      marginTop: 4
    }
  }, sub?.toString().toUpperCase())), React.createElement("button", {
    className: "x",
    onClick: onClose
  }, "\u2715")), React.createElement("div", {
    className: "body"
  }, React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "280px 1fr",
      gap: 18
    }
  }, React.createElement("div", null, React.createElement(Placeholder, {
    label: open.type === "character" ? "MUGSHOT" : open.type === "city" ? "SKYLINE" : "COVER ART",
    className: "tall"
  }), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      letterSpacing: ".22em",
      color: "var(--grit)",
      marginTop: 8
    }
  }, "// inserir imagem oficial substituta"), React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, React.createElement(Tag, {
    tone: "yellow"
  }, "CONTE\xDADO PENDENTE"), React.createElement(Tag, {
    tone: "pink"
  }, "EM CURADORIA"), React.createElement(Tag, {
    tone: "blue"
  }, "RELACIONAMENTOS A MAPEAR"))), React.createElement("div", null, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      letterSpacing: ".22em",
      color: "var(--evidence)"
    }
  }, "RESUMO"), React.createElement("p", {
    style: {
      color: "var(--bone-2)",
      lineHeight: 1.6,
      marginTop: 6
    }
  }, "Este espa\xE7o ser\xE1 preenchido com o conte\xFAdo bruto da franquia: hist\xF3rico, eventos-chave, conex\xF5es com outros personagens e cidades, miss\xF5es marcantes, easter eggs e refer\xEAncias cruzadas."), React.createElement("hr", {
    className: "rule",
    style: {
      margin: "14px 0"
    }
  }), React.createElement("div", {
    className: "grid",
    style: {
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, [["EVENTOS-CHAVE", "// timeline pessoal"], ["RELACIONAMENTOS", "// gráfico de conexões"], ["MISSÕES MARCANTES", "// lista de operações"], ["CITAÇÕES", "// frases icônicas"], ["CONEXÕES CRUZADAS", "// outros jogos"], ["EASTER EGGS", "// referências"]].map(([k, v], i) => React.createElement("div", {
    key: i,
    style: {
      padding: 14,
      border: "1px dashed var(--line-2)"
    }
  }, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      letterSpacing: ".22em",
      color: "var(--evidence)"
    }
  }, k), React.createElement("div", {
    style: {
      color: "var(--grit)",
      fontFamily: "Space Mono",
      fontSize: 12,
      marginTop: 6
    }
  }, v)))), React.createElement("hr", {
    className: "rule",
    style: {
      margin: "14px 0"
    }
  }), React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      flexWrap: "wrap"
    }
  }, React.createElement("button", {
    className: "btn solid",
    style: {
      padding: "10px 14px",
      fontSize: 13
    }
  }, "Editar Conte\xFAdo"), React.createElement("button", {
    className: "btn",
    style: {
      padding: "10px 14px",
      fontSize: 13
    }
  }, "Exportar Ficha"), React.createElement("button", {
    className: "btn neon",
    style: {
      padding: "10px 14px",
      fontSize: 13
    }
  }, "Adicionar Conex\xE3o")))))));
};
const ORGS = [{
  name: "Tridente Holdings",
  type: "Empresarial Criminosa",
  color: "#a855f7",
  desc: "Conglomerado que lava capital em quatro cidades."
}, {
  name: "DEPT 17 — INTERNA",
  type: "Polícia Corrupta",
  color: "#3b6cff",
  desc: "Divisão sombria, opera fora da lei."
}, {
  name: "Black Anchor PMC",
  type: "Militar Privado",
  color: "#bdbab1",
  desc: "Operações de extração ao redor do mundo."
}, {
  name: "Coral Bank Group",
  type: "Financeiro",
  color: "#4ade80",
  desc: "Fachada para movimentação de fundos."
}, {
  name: "Estúdios Mojo",
  type: "Mídia & Sátira",
  color: "#ff3d8a",
  desc: "Produtora-mãe das emissoras fictícias."
}, {
  name: "Cabal dos Cinco",
  type: "Sociedade Secreta",
  color: "#f5c518",
  desc: "Cinco famílias controlam metade da costa."
}];
const OrgsSection = ({
  onOpenDossier
}) => React.createElement("section", {
  id: "orgs",
  style: {
    padding: "96px 0"
  }
}, React.createElement("div", {
  className: "wrap"
}, React.createElement("div", {
  className: "sec-head"
}, React.createElement("div", null, React.createElement(Eyebrow, {
  color: "var(--neon-2)"
}, "Cap\xEDtulo 07b \xB7 sindicatos"), React.createElement("h2", null, "Organiza\xE7\xF5es ", React.createElement("em", null, "Criminosas"))), React.createElement("div", {
  className: "right"
}, "empresas-fachada \xB7 PMCs \xB7 sociedades secretas")), React.createElement("div", {
  className: "grid g-3"
}, ORGS.map((o, i) => React.createElement("div", {
  key: i,
  className: "card",
  style: {
    padding: 18
  }
}, React.createElement(Corners, null), React.createElement("div", {
  style: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start"
  }
}, React.createElement("div", {
  style: {
    width: 54,
    height: 54,
    border: `1px solid ${o.color}`,
    borderRadius: 2,
    display: "grid",
    placeItems: "center",
    color: o.color,
    background: `radial-gradient(closest-side, ${o.color}22, transparent)`,
    fontFamily: "Big Shoulders Display",
    fontWeight: 900,
    fontSize: 24
  }
}, o.name.split(" ").map(w => w[0]).slice(0, 2).join("")), React.createElement("div", {
  style: {
    flex: 1
  }
}, React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 10,
    letterSpacing: ".22em",
    color: o.color
  }
}, o.type.toUpperCase()), React.createElement("div", {
  className: "headline",
  style: {
    fontSize: 22,
    marginTop: 4,
    color: "var(--bone)"
  }
}, o.name), React.createElement("div", {
  style: {
    color: "var(--bone-2)",
    fontSize: 12,
    marginTop: 8,
    lineHeight: 1.5
  }
}, o.desc))), React.createElement("hr", {
  className: "rule",
  style: {
    margin: "14px 0"
  }
}), React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}, React.createElement("span", {
  className: "mono",
  style: {
    fontSize: 10,
    letterSpacing: ".22em",
    color: "var(--grit)"
  }
}, "CONEX\xD5ES: 12 ENTIDADES"), React.createElement("button", {
  className: "btn",
  style: {
    padding: "6px 10px",
    fontSize: 10
  },
  onClick: () => onOpenDossier({
    type: "org",
    o
  })
}, "Abrir \u2192")))))));
const TriviaSection = () => React.createElement("section", {
  id: "trivia",
  style: {
    padding: "96px 0",
    background: "linear-gradient(180deg, #0a0a0d, #0c0d12)"
  }
}, React.createElement("div", {
  className: "wrap"
}, React.createElement("div", {
  className: "sec-head"
}, React.createElement("div", null, React.createElement(Eyebrow, {
  color: "var(--evidence)"
}, "Cap\xEDtulo 11 \xB7 culture log"), React.createElement("h2", null, "Curiosidades ", React.createElement("em", null, "& Cultura"))), React.createElement("div", {
  className: "right"
}, "trivia \xB7 refer\xEAncias \xB7 easter eggs")), React.createElement("div", {
  className: "grid g-4"
}, [{
  n: "248",
  l: "Empresas fictícias inventadas pelo universo"
}, {
  n: "79",
  l: "Manchetes de jornais escritos à mão"
}, {
  n: "412",
  l: "Faixas musicais únicas em emissoras"
}, {
  n: "~1k",
  l: "Diálogos paralelos de pedestres"
}].map((s, i) => React.createElement("div", {
  key: i,
  className: "card",
  style: {
    padding: 18
  }
}, React.createElement(Corners, null), React.createElement("div", {
  className: "display",
  style: {
    fontSize: 60,
    color: "var(--neon)",
    lineHeight: .9,
    textShadow: "0 0 24px rgba(255,61,138,.45)"
  }
}, s.n), React.createElement("div", {
  style: {
    color: "var(--bone-2)",
    fontSize: 13,
    marginTop: 10
  }
}, s.l)))), React.createElement("div", {
  className: "grid",
  style: {
    gridTemplateColumns: "2fr 1fr",
    gap: 18,
    marginTop: 18
  }
}, React.createElement("div", {
  className: "card",
  style: {
    padding: 22
  }
}, React.createElement(Corners, null), React.createElement("div", {
  className: "eyebrow"
}, "S\xC1TIRA URBANA"), React.createElement("div", {
  className: "display",
  style: {
    fontSize: 46,
    marginTop: 6
  }
}, "\u201CToda cidade tem o crime que merece.\u201D"), React.createElement("div", {
  className: "mono",
  style: {
    color: "var(--grit)",
    marginTop: 14,
    fontSize: 11,
    letterSpacing: ".22em"
  }
}, "// linha-tema editorial \xB7 trocar quando o conte\xFAdo final entrar")), React.createElement("div", {
  className: "card",
  style: {
    padding: 18
  }
}, React.createElement(Corners, null), React.createElement("div", {
  className: "eyebrow"
}, "PR\xD3XIMOS"), React.createElement("ul", {
  style: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    fontFamily: "Space Mono",
    fontSize: 12,
    letterSpacing: ".06em",
    color: "var(--bone-2)"
  }
}, ["histórias completas", "relações cruzadas", "mapa interativo real", "timeline animada", "trilha sonora por cidade"].map((x, i) => React.createElement("li", {
  key: i,
  style: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: "1px dashed var(--line)"
  }
}, React.createElement("span", null, "\xB7 ", x), React.createElement("span", {
  style: {
    color: "var(--evidence)"
  }
}, "PENDENTE"))))))));
const Footer = () => React.createElement("footer", null, React.createElement("div", {
  className: "wrap"
}, React.createElement("div", {
  className: "grid-foot"
}, React.createElement("div", null, React.createElement("div", {
  className: "display",
  style: {
    fontSize: 46,
    lineHeight: .9
  }
}, "URBAN", React.createElement("br", null), React.createElement("span", {
  style: {
    color: "var(--evidence)"
  }
}, "UNIVERSE")), React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 11,
    letterSpacing: ".22em",
    color: "var(--grit)",
    marginTop: 14
  }
}, "ARQUIVO VISUAL FICT\xCDCIO \xB7 INSPIRADO NO G\xCANERO DE MUNDO ABERTO URBANO. ESTE \xC9 UM PROT\xD3TIPO DE F\xC3; NENHUMA MARCA, LOGO OU ARTE OFICIAL \xC9 UTILIZADA.")), React.createElement("div", null, React.createElement("div", {
  className: "eyebrow"
}, "SE\xC7\xD5ES"), React.createElement("ul", {
  style: {
    listStyle: "none",
    margin: "12px 0 0",
    padding: 0,
    fontFamily: "Space Mono",
    fontSize: 12,
    letterSpacing: ".06em"
  }
}, NAV.slice(0, 6).map(n => React.createElement("li", {
  key: n.id
}, React.createElement("a", {
  href: `#${n.id}`,
  style: {
    color: "var(--bone-2)",
    textDecoration: "none",
    padding: "6px 0",
    display: "block"
  }
}, "\xB7 ", n.label))))), React.createElement("div", null, React.createElement("div", {
  className: "eyebrow"
}, "MAIS"), React.createElement("ul", {
  style: {
    listStyle: "none",
    margin: "12px 0 0",
    padding: 0,
    fontFamily: "Space Mono",
    fontSize: 12,
    letterSpacing: ".06em"
  }
}, NAV.slice(6).map(n => React.createElement("li", {
  key: n.id
}, React.createElement("a", {
  href: `#${n.id}`,
  style: {
    color: "var(--bone-2)",
    textDecoration: "none",
    padding: "6px 0",
    display: "block"
  }
}, "\xB7 ", n.label))))), React.createElement("div", null, React.createElement("div", {
  className: "eyebrow"
}, "STATUS"), React.createElement("div", {
  style: {
    marginTop: 12,
    fontFamily: "Space Mono",
    fontSize: 12,
    letterSpacing: ".06em",
    color: "var(--bone-2)",
    lineHeight: 1.8
  }
}, React.createElement("div", null, "BUILD v0.1 \u2014 PROT\xD3TIPO"), React.createElement("div", null, "CONTE\xDADO TEXTUAL: ", React.createElement("span", {
  style: {
    color: "var(--evidence)"
  }
}, "PENDENTE")), React.createElement("div", null, "VISUAL: ", React.createElement("span", {
  style: {
    color: "var(--money)"
  }
}, "OK")), React.createElement("div", null, "HUMOR: ", React.createElement("span", {
  style: {
    color: "var(--neon)"
  }
}, "SAT\xCDRICO"))))), React.createElement("hr", {
  className: "rule",
  style: {
    margin: "30px 0"
  }
}), React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10
  }
}, React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 10,
    letterSpacing: ".22em",
    color: "var(--grit)"
  }
}, "\xA9 ANO XXXX \u2014 TODOS OS DIREITOS N\xC3O RESERVADOS \xB7 FAN-ART"), React.createElement("div", {
  className: "mono",
  style: {
    fontSize: 10,
    letterSpacing: ".22em",
    color: "var(--grit)"
  }
}, "MADE WITH \u25C6 CONCRETE, NEON & A LITTLE BIT OF CRIME"))));
Object.assign(window, {
  Dossier,
  OrgsSection,
  TriviaSection,
  Footer
});

/* >>> sections-expanded.jsx */
;const CharacterDetailModal = ({
  character,
  onClose
}) => {
  if (!character) return null;
  return React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.85)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      backdropFilter: "blur(8px)",
      padding: 20
    },
    onClick: onClose
  }, React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      maxWidth: 800,
      maxHeight: "85vh",
      overflow: "auto",
      position: "relative"
    },
    onClick: e => e.stopPropagation()
  }, React.createElement(Corners, null), React.createElement("div", {
    style: {
      padding: 32,
      position: "sticky",
      top: 0,
      background: "linear-gradient(180deg,rgba(28,28,34,.95),rgba(15,15,19,.85))",
      borderBottom: "1px solid var(--line)"
    }
  }, React.createElement("button", {
    onClick: onClose,
    style: {
      position: "absolute",
      top: 16,
      right: 16,
      background: "transparent",
      border: "1px solid var(--line-2)",
      color: "var(--bone)",
      cursor: "pointer",
      width: 36,
      height: 36,
      fontSize: 18,
      borderRadius: 2
    }
  }, "\xD7"), React.createElement("div", {
    className: "display",
    style: {
      fontSize: 42,
      marginBottom: 8,
      lineHeight: 1
    }
  }, character.name), React.createElement("div", {
    style: {
      color: "var(--neon)",
      fontSize: 13
    }
  }, "\"", character.aliases?.[0] || character.aliases || 'Sem apelido', "\"")), React.createElement("div", {
    style: {
      padding: 32,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32
    }
  }, React.createElement("div", null, React.createElement("h3", {
    className: "headline",
    style: {
      fontSize: 14,
      marginBottom: 12
    }
  }, "Dados Pessoais"), React.createElement("div", {
    style: {
      display: "grid",
      gap: 12,
      fontSize: 12
    }
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, "UNIVERSO"), React.createElement("br", null), React.createElement("strong", null, character.universe)), React.createElement("div", null, React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, "CIDADE"), React.createElement("br", null), React.createElement("strong", null, character.city)), React.createElement("div", null, React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, "PAPEL"), React.createElement("br", null), React.createElement("strong", null, character.role)), React.createElement("div", null, React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, "IMPORT\xC2NCIA"), React.createElement("br", null), React.createElement("strong", null, character.importance)))), React.createElement("div", null, React.createElement("h3", {
    className: "headline",
    style: {
      fontSize: 14,
      marginBottom: 12
    }
  }, "Status & Filia\xE7\xF5es"), React.createElement("div", {
    style: {
      display: "grid",
      gap: 12,
      fontSize: 12
    }
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, "STATUS"), React.createElement("br", null), React.createElement("strong", {
    style: {
      color: character.fate?.includes("Morto") ? "var(--siren)" : "var(--money)"
    }
  }, character.fate?.split(".")[0] || "Desconhecido")), React.createElement("div", null, React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, "FILIA\xC7\xD5ES"), React.createElement("br", null), React.createElement("strong", null, character.affiliations?.[0] || "Independente")), React.createElement("div", null, React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, "INIMIGOS"), React.createElement("br", null), React.createElement("strong", null, character.enemies?.[0] || "Ninguém notável"))))), React.createElement("div", {
    style: {
      padding: 32,
      borderTop: "1px solid var(--line)"
    }
  }, React.createElement("h3", {
    className: "headline",
    style: {
      fontSize: 14,
      marginBottom: 12
    }
  }, "Biografia"), React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 13,
      lineHeight: 1.7
    }
  }, character.biography)), character.storyArc && React.createElement("div", {
    style: {
      padding: 32,
      borderTop: "1px solid var(--line)"
    }
  }, React.createElement("h3", {
    className: "headline",
    style: {
      fontSize: 14,
      marginBottom: 12
    }
  }, "Arco Narrativo"), React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 13,
      lineHeight: 1.7
    }
  }, character.storyArc))));
};
const CharactersExpandedSection = ({
  onOpenDossier
}) => {
  const [filterRole, setFilterRole] = React.useState("all");
  const [filterGame, setFilterGame] = React.useState("all");
  const games = [...new Set(PERSONAGENS_COMPLETOS.map(c => c.games?.[0] || "Unknown"))];
  const filtered = PERSONAGENS_COMPLETOS.filter(c => (filterRole === "all" || c.role === filterRole) && (filterGame === "all" || c.games?.includes(filterGame)));
  return React.createElement("section", {
    id: "characters",
    style: {
      padding: "96px 0",
      background: "linear-gradient(180deg,#0a0a0d, #0e0e14 30%, #0a0a0d)"
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head"
  }, React.createElement("div", null, React.createElement(Eyebrow, {
    color: "var(--neon)"
  }, "Cap\xEDtulo 04 \xB7 dossi\xEA criminal"), React.createElement("h2", null, "Personagens da Saga ", React.createElement("em", null, "Completa"))), React.createElement("div", {
    className: "right"
  }, filtered.length, " personagens")), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14,
      marginBottom: 32
    }
  }, React.createElement("div", null, React.createElement("label", {
    className: "eyebrow",
    style: {
      marginBottom: 8,
      display: "block"
    }
  }, "Papel"), React.createElement("select", {
    value: filterRole,
    onChange: e => setFilterRole(e.target.value),
    style: {
      width: "100%",
      padding: "10px 12px",
      background: "linear-gradient(180deg,#1c1c22,#121217)",
      border: "1px solid var(--line-2)",
      borderRadius: 2,
      color: "var(--bone)",
      fontFamily: "Space Mono",
      fontSize: 12,
      cursor: "pointer"
    }
  }, React.createElement("option", {
    value: "all"
  }, "Todos os pap\xE9is"), React.createElement("option", {
    value: "Protagonista"
  }, "Protagonistas"), React.createElement("option", {
    value: "Antagonista"
  }, "Antagonistas"), React.createElement("option", {
    value: "Aliado"
  }, "Aliados"), React.createElement("option", {
    value: "Secund\xE1rio"
  }, "Secund\xE1rios"))), React.createElement("div", null, React.createElement("label", {
    className: "eyebrow",
    style: {
      marginBottom: 8,
      display: "block"
    }
  }, "Jogo"), React.createElement("select", {
    value: filterGame,
    onChange: e => setFilterGame(e.target.value),
    style: {
      width: "100%",
      padding: "10px 12px",
      background: "linear-gradient(180deg,#1c1c22,#121217)",
      border: "1px solid var(--line-2)",
      borderRadius: 2,
      color: "var(--bone)",
      fontFamily: "Space Mono",
      fontSize: 12,
      cursor: "pointer"
    }
  }, React.createElement("option", {
    value: "all"
  }, "Todos os jogos"), games.map(g => React.createElement("option", {
    key: g,
    value: g
  }, g))))), React.createElement("div", {
    className: "grid g-3"
  }, filtered.map(c => React.createElement("div", {
    key: c.id,
    className: "card",
    style: {
      padding: 0,
      cursor: "pointer"
    },
    onClick: () => onOpenDossier({
      type: "character",
      c
    })
  }, React.createElement(Corners, null), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "100px 1fr",
      gap: 0
    }
  }, React.createElement("div", {
    style: {
      padding: 12,
      borderRight: "1px solid var(--line)",
      background: "rgba(255,61,138,.06)"
    }
  }, React.createElement("div", {
    className: "ph",
    style: {
      aspectRatio: "3/4",
      margin: 0,
      background: "linear-gradient(135deg, rgba(255,61,138,.2), rgba(59,108,255,.1))"
    }
  }, React.createElement(Corners, null)), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 9,
      color: "var(--grit)",
      marginTop: 8,
      textAlign: "center"
    }
  }, c.id)), React.createElement("div", {
    style: {
      padding: 14
    }
  }, React.createElement(Tag, {
    tone: c.role === "Protagonista" ? "yellow" : c.role === "Antagonista" ? "red" : "blue"
  }, c.role), React.createElement("div", {
    className: "headline",
    style: {
      fontSize: 16,
      marginTop: 8,
      lineHeight: 1
    }
  }, c.name), React.createElement("div", {
    style: {
      color: "var(--neon)",
      fontSize: 10,
      marginTop: 4
    }
  }, "\"", c.aliases?.[0] || "", "\""), React.createElement("hr", {
    className: "rule",
    style: {
      margin: "10px 0"
    }
  }), React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--bone-2)",
      lineHeight: 1.5
    }
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, "Cidade:"), " ", c.city), React.createElement("div", null, React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, "Status:"), " ", c.fate?.split(".")[0] || "Vivo")))))))));
};
const CitiesExpandedSection = ({
  onOpenDossier
}) => {
  const [selectedCity, setSelectedCity] = React.useState(null);
  return React.createElement("section", {
    id: "cities",
    style: {
      padding: "96px 0",
      background: "linear-gradient(180deg,#0a0a0d 0%, #1a0a0d 50%, #0a0a0d 100%)"
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head"
  }, React.createElement("div", null, React.createElement(Eyebrow, {
    color: "var(--evidence)"
  }, "Cap\xEDtulo 05 \xB7 mapa criminal"), React.createElement("h2", null, "Cidades & Locais ", React.createElement("em", null, "da Franquia"))), React.createElement("div", {
    className: "right"
  }, CIDADES_COMPLETAS.length, " localiza\xE7\xF5es principais")), React.createElement("div", {
    className: "grid g-3",
    style: {
      marginBottom: 42
    }
  }, CIDADES_COMPLETAS.map(city => React.createElement("div", {
    key: city.id,
    className: "card",
    style: {
      padding: 22,
      cursor: "pointer"
    },
    onClick: () => setSelectedCity(city)
  }, React.createElement(Corners, null), React.createElement("div", {
    className: "headline",
    style: {
      fontSize: 20,
      marginBottom: 8,
      color: "var(--evidence)"
    }
  }, city.name), React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 12,
      marginBottom: 12
    }
  }, "Inspira\xE7\xE3o: ", React.createElement("strong", null, city.realWorldInspiration)), React.createElement("hr", {
    className: "rule",
    style: {
      margin: "12px 0"
    }
  }), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      fontSize: 11,
      color: "var(--bone-2)"
    }
  }, React.createElement("div", null, React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, "Jogos:"), " ", city.games.length), React.createElement("div", null, React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, "Fac\xE7\xF5es:"), " ", city.factions.length), React.createElement("div", null, React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, "Universos:"), " ", city.universeAppearances.length), React.createElement("div", null, React.createElement("span", {
    style: {
      color: "var(--grit)"
    }
  }, "Distritos:"), " ", city.districts.length)), React.createElement("div", {
    style: {
      marginTop: 12,
      padding: 8,
      background: "rgba(245,197,24,.08)",
      borderRadius: 2,
      fontSize: 11,
      color: "var(--evidence)"
    }
  }, "Clique para detalhes \u2192")))), selectedCity && React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.85)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
      backdropFilter: "blur(8px)",
      padding: 20
    },
    onClick: () => setSelectedCity(null)
  }, React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      maxWidth: 900,
      maxHeight: "85vh",
      overflow: "auto",
      position: "relative"
    },
    onClick: e => e.stopPropagation()
  }, React.createElement(Corners, null), React.createElement("div", {
    style: {
      padding: 32,
      position: "sticky",
      top: 0,
      background: "linear-gradient(180deg,rgba(28,28,34,.95),rgba(15,15,19,.85))",
      borderBottom: "1px solid var(--line)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start"
    }
  }, React.createElement("div", null, React.createElement("div", {
    className: "display",
    style: {
      fontSize: 42,
      marginBottom: 8,
      lineHeight: 1,
      color: "var(--evidence)"
    }
  }, selectedCity.name), React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 13
    }
  }, "Baseada em: ", React.createElement("strong", null, selectedCity.realWorldInspiration))), React.createElement("button", {
    onClick: () => setSelectedCity(null),
    style: {
      background: "transparent",
      border: "1px solid var(--line-2)",
      color: "var(--bone)",
      cursor: "pointer",
      width: 36,
      height: 36,
      fontSize: 18,
      borderRadius: 2
    }
  }, "\xD7")), React.createElement("div", {
    style: {
      padding: 32,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32
    }
  }, React.createElement("div", null, React.createElement("h3", {
    className: "headline",
    style: {
      fontSize: 14,
      marginBottom: 12
    }
  }, "Sobre"), React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 12,
      lineHeight: 1.7,
      marginBottom: 20
    }
  }, selectedCity.description), React.createElement("h3", {
    className: "headline",
    style: {
      fontSize: 14,
      marginBottom: 12
    }
  }, "Apari\xE7\xF5es"), React.createElement("div", {
    style: {
      display: "grid",
      gap: 6,
      marginBottom: 20
    }
  }, selectedCity.universeAppearances.map(u => React.createElement(Tag, {
    key: u,
    tone: "blue"
  }, u))), React.createElement("h3", {
    className: "headline",
    style: {
      fontSize: 14,
      marginBottom: 12
    }
  }, "Jogos"), React.createElement("div", {
    style: {
      display: "grid",
      gap: 4,
      fontSize: 11,
      color: "var(--bone-2)"
    }
  }, selectedCity.games.map(g => React.createElement("div", {
    key: g
  }, "\u2022 ", g)))), React.createElement("div", null, React.createElement("h3", {
    className: "headline",
    style: {
      fontSize: 14,
      marginBottom: 12
    }
  }, "Distritos"), React.createElement("div", {
    style: {
      display: "grid",
      gap: 4,
      fontSize: 11,
      color: "var(--bone-2)",
      marginBottom: 20
    }
  }, selectedCity.districts.map(d => React.createElement("div", {
    key: d
  }, "\u25C6 ", d))), React.createElement("h3", {
    className: "headline",
    style: {
      fontSize: 14,
      marginBottom: 12
    }
  }, "Fac\xE7\xF5es Locais"), React.createElement("div", {
    style: {
      display: "grid",
      gap: 4,
      fontSize: 11,
      color: "var(--bone-2)",
      marginBottom: 20
    }
  }, selectedCity.factions.map(f => React.createElement("div", {
    key: f
  }, "\u2694 ", f))), React.createElement("h3", {
    className: "headline",
    style: {
      fontSize: 14,
      marginBottom: 12
    }
  }, "Personagens"), React.createElement("div", {
    style: {
      display: "grid",
      gap: 4,
      fontSize: 11,
      color: "var(--bone-2)"
    }
  }, selectedCity.characters.map(ch => React.createElement("div", {
    key: ch
  }, "\u2192 ", ch))))), React.createElement("div", {
    style: {
      padding: 32,
      borderTop: "1px solid var(--line)"
    }
  }, React.createElement("h3", {
    className: "headline",
    style: {
      fontSize: 14,
      marginBottom: 12
    }
  }, "Estilo Visual & Temas"), React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 12,
      lineHeight: 1.7,
      marginBottom: 12
    }
  }, selectedCity.visualStyle), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(100px,1fr))",
      gap: 8
    }
  }, selectedCity.themes.map(t => React.createElement(Tag, {
    key: t,
    tone: "pink"
  }, t))))))));
};
Object.assign(window, {
  CharacterDetailModal,
  CharactersExpandedSection,
  CitiesExpandedSection
});

/* >>> sections-rockstar.jsx */
;const RockstarSection = () => {
  return React.createElement("section", {
    id: "rockstar",
    style: {
      padding: "96px 0",
      background: "linear-gradient(180deg,#0a0a0d, #0e0e14 30%, #0a0a0d)"
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head"
  }, React.createElement("div", null, React.createElement(Eyebrow, {
    color: "var(--neon)"
  }, "Cap\xEDtulo 13 \xB7 genealogia"), React.createElement("h2", null, "Rockstar Games & ", React.createElement("em", null, "Norte"))), React.createElement("div", {
    className: "right"
  }, "De DMA Design \xE0 Revolu\xE7\xE3o do Mundo Aberto")), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 42,
      marginBottom: 48
    }
  }, React.createElement("div", {
    style: {
      position: "relative",
      paddingTop: 30
    }
  }, [{
    year: "1987",
    title: "DMA Design",
    desc: "David Jones funda em Dundee, Escócia"
  }, {
    year: "1997",
    title: "GTA 1",
    desc: "Lançamento revolucionário top-down"
  }, {
    year: "1998",
    title: "Rockstar Games",
    desc: "Fundação da Rockstar Games por Sam & Dan Houser"
  }, {
    year: "2001",
    title: "GTA III",
    desc: "Revolução 3D que redefiniu a indústria"
  }, {
    year: "2008",
    title: "Era HD",
    desc: "GTA IV marca entrada na era de alta definição"
  }, {
    year: "2013",
    title: "GTA V + Online",
    desc: "Fenômeno cultural e comercial"
  }].map((item, i) => React.createElement("div", {
    key: i,
    style: {
      position: "relative",
      paddingBottom: 32,
      borderLeft: "2px solid var(--line)",
      paddingLeft: 24
    }
  }, React.createElement("div", {
    style: {
      position: "absolute",
      left: "-7px",
      top: 0,
      width: 12,
      height: 12,
      background: "var(--neon)",
      border: "2px solid var(--asphalt)",
      borderRadius: "50%"
    }
  }), React.createElement("div", {
    className: "mono",
    style: {
      color: "var(--evidence)",
      fontSize: 11,
      letterSpacing: ".22em"
    }
  }, item.year), React.createElement("div", {
    className: "headline",
    style: {
      fontSize: 16,
      marginTop: 4
    }
  }, item.title), React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 13,
      marginTop: 8
    }
  }, item.desc)))), React.createElement("div", null, React.createElement("div", {
    className: "card",
    style: {
      padding: 22,
      marginBottom: 14
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Fundadores da Rockstar Games"), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, ["Sam Houser", "Dan Houser", "Terry Donovan", "Jamie King", "Gary Foreman"].map((n, i) => React.createElement("div", {
    key: i,
    style: {
      background: "rgba(255,61,138,.08)",
      border: "1px solid rgba(255,61,138,.2)",
      padding: 10,
      borderRadius: 2,
      fontSize: 12
    }
  }, React.createElement(Corners, null), n)))), React.createElement("div", {
    className: "card",
    style: {
      padding: 22
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Est\xFAdios Principais"), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, [{
    name: "Rockstar North",
    city: "Edinburgh, UK",
    games: "GTA, Principal"
  }, {
    name: "Rockstar Games",
    city: "Nova York, USA",
    games: "Publicação"
  }, {
    name: "Rockstar San Diego",
    city: "San Diego, USA",
    games: "Red Dead"
  }].map((s, i) => React.createElement("div", {
    key: i,
    style: {
      background: "rgba(59,108,255,.08)",
      border: "1px solid rgba(59,108,255,.2)",
      padding: 10,
      borderRadius: 2,
      fontSize: 11
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    className: "headline",
    style: {
      fontSize: 12
    }
  }, s.name), React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      marginTop: 4
    }
  }, s.city))))))), React.createElement("div", {
    className: "grid g-3"
  }, [{
    period: "1987-1997",
    title: "Era pré-GTA",
    content: "DMA Design cria jogos variados. David Jones liderava com Mike Dailly. Foco em gameplay inovador."
  }, {
    period: "1998-2001",
    title: "Transição para 3D",
    content: "Rockstar Games formada. DMA Design torna-se Rockstar North. Desenvolvimento de GTA III redefiniu indústria."
  }, {
    period: "2002-2006",
    title: "Pico da Era 3D",
    content: "Vice City e San Andreas consolidam franquia. Cada lançamento quebra recordes. GTA torna-se fenômeno cultural."
  }, {
    period: "2008-2013",
    title: "Era HD Inicial",
    content: "GTA IV marca entrada em HD. Engine RAGE. Depois, GTA V com 3 protagonistas. GTA Online cria novo modelo de negócio."
  }, {
    period: "2013-2026",
    title: "Plataforma Viva",
    content: "GTA Online domina receita. Atualizações contínuas, novos conteúdos. Bilhões em receita. Preparação para GTA VI."
  }, {
    period: "2026+",
    title: "Próxima Era",
    content: "GTA VI marca nova geração. Leonida, protagonistas duplos, tema digital. Expectativa global estratosférica."
  }].map((h, i) => React.createElement("div", {
    key: i,
    className: "card",
    style: {
      padding: 22
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: "var(--evidence)",
      letterSpacing: ".22em",
      marginBottom: 8
    }
  }, h.period), React.createElement("div", {
    className: "headline",
    style: {
      fontSize: 18,
      marginBottom: 10
    }
  }, h.title), React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 13,
      lineHeight: 1.5
    }
  }, h.content))))));
};
const UniversesSection = () => {
  return React.createElement("section", {
    id: "universes",
    style: {
      padding: "96px 0",
      background: "linear-gradient(180deg,#0a0a0d 0%, #0e0e14 30%)"
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head"
  }, React.createElement("div", null, React.createElement(Eyebrow, {
    color: "var(--copper)"
  }, "Cap\xEDtulo 14 \xB7 cosmologia"), React.createElement("h2", null, "Os Tr\xEAs Universos ", React.createElement("em", null, "Distintos"))), React.createElement("div", {
    className: "right"
  }, "2D \u2022 3D \u2022 HD \u2014 Mundos Paralelos")), React.createElement("div", {
    className: "grid g-3"
  }, UNIVERSOS_GTA.map(uni => React.createElement("div", {
    key: uni.id,
    className: "card",
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    style: {
      padding: 22,
      background: `rgba(${hexToRgb(uni.color)}, .12)`,
      borderBottom: "1px solid var(--line)"
    }
  }, React.createElement("div", {
    className: "headline",
    style: {
      fontSize: 28,
      color: uni.color,
      marginBottom: 8
    }
  }, uni.name), React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 13
    }
  }, uni.description)), React.createElement("div", {
    style: {
      padding: 22
    }
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Jogos"), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 6,
      marginBottom: 18
    }
  }, uni.games.map(g => React.createElement(Tag, {
    key: g,
    tone: uni.id === "2d" ? "neutral" : "blue"
  }, g))), React.createElement("hr", {
    className: "rule",
    style: {
      margin: "12px 0"
    }
  }), React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 12,
      marginTop: 12
    }
  }, "Caracter\xEDsticas"), React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 14,
      fontSize: 12,
      color: "var(--bone-2)",
      lineHeight: 1.7
    }
  }, uni.characteristics.map((c, i) => React.createElement("li", {
    key: i,
    style: {
      marginBottom: 4
    }
  }, c))))))), React.createElement("div", {
    className: "card",
    style: {
      padding: 22,
      marginTop: 32,
      background: "rgba(255,61,138,.06)",
      border: "1px solid rgba(255,61,138,.3)"
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "var(--neon)",
      marginBottom: 12
    }
  }, "Conex\xF5es Entre Universos"), React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 13,
      lineHeight: 1.6
    }
  }, "Cada universo \xE9 ", React.createElement("strong", null, "can\xF4nico separadamente"), ". Personagens e eventos n\xE3o se cruzam entre universos, mas podem ser referenciados. Por exemplo: Um cartaz em GTA V pode referenciar um evento de GTA III, mas n\xE3o h\xE1 crossover narrativo. Cada universo tem suas pr\xF3prias regras, tecnologia e cronologia."))));
};
const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : "255,255,255";
};
const GTAOnlineSection = () => {
  return React.createElement("section", {
    id: "gtaonline",
    style: {
      padding: "96px 0",
      background: "linear-gradient(180deg,#0a0a0d 0%, #1a0a2a 50%, #0a0a0d 100%)"
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head"
  }, React.createElement("div", null, React.createElement(Eyebrow, {
    color: "var(--money)"
  }, "Cap\xEDtulo 15 \xB7 plataforma viva"), React.createElement("h2", null, "GTA Online: A Revolu\xE7\xE3o do ", React.createElement("em", null, "Jogo Vivo"))), React.createElement("div", {
    className: "right"
  }, "Fen\xF4meno: $6+ bilh\xF5es em receita (2013-2024)")), React.createElement("div", {
    className: "grid g-3",
    style: {
      marginBottom: 48
    }
  }, [{
    stat: "$6.4B+",
    label: "Receita total estimada desde 2013"
  }, {
    stat: "150M+",
    label: "Jogadores únicos registrados"
  }, {
    stat: "13+",
    label: "Anos de atualizações contínuas"
  }, {
    stat: "∞",
    label: "Usuários simultâneos em picos"
  }].map((s, i) => React.createElement("div", {
    key: i,
    className: "card",
    style: {
      padding: 22,
      textAlign: "center"
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    className: "display",
    style: {
      fontSize: 42,
      color: "var(--money)",
      marginBottom: 6
    }
  }, s.stat), React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 11,
      color: "var(--bone-2)",
      letterSpacing: ".22em"
    }
  }, s.label)))), React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 24
    }
  }, "Evolu\xE7\xE3o de Conte\xFAdo"), React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, [{
    year: "2013-2014",
    title: "Alpha Phase",
    desc: "Heists começam. Pegasus (veículos). Primeiras propriedades. Jogadores começam com R$100."
  }, {
    year: "2015",
    title: "Imperialism",
    desc: "Propriedades de negócios. CEO Office. Import/Export. Economia complexa."
  }, {
    year: "2016-2017",
    title: "Motor Club",
    desc: "Motoclubes. Propriedades MC. Tráfico. Controle de território."
  }, {
    year: "2017-2019",
    title: "Diamond Age",
    desc: "Diamond Casino. Jogos de azar. Luxo. Yacht Club."
  }, {
    year: "2019-2020",
    title: "Underworld",
    desc: "Bunkers. Laboratórios de drogas. Cunning Stunts. Arenas."
  }, {
    year: "2020-2023",
    title: "Criminal Enterprise",
    desc: "Cayo Perico Heist. The Contract. Nightclub upgrades. Agency Security."
  }, {
    year: "2024-2026",
    title: "Modern Kingpin",
    desc: "Money Fronts. San Andreas Mercenaries. Preparação para GTA VI."
  }].map((e, i) => React.createElement("div", {
    key: i,
    className: "card",
    style: {
      padding: 22,
      display: "grid",
      gridTemplateColumns: "150px 1fr",
      gap: 18
    }
  }, React.createElement(Corners, null), React.createElement("div", null, React.createElement("div", {
    className: "mono",
    style: {
      fontSize: 10,
      color: "var(--evidence)",
      letterSpacing: ".22em",
      marginBottom: 6
    }
  }, e.year), React.createElement("div", {
    className: "headline",
    style: {
      fontSize: 16,
      color: "var(--neon)"
    }
  }, e.title)), React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 13,
      lineHeight: 1.6
    }
  }, e.desc)))), React.createElement("h3", {
    style: {
      fontSize: 20,
      marginTop: 48,
      marginBottom: 24
    }
  }, "Tipos de Neg\xF3cios Criminosos"), React.createElement("div", {
    className: "grid g-3"
  }, [{
    name: "Narcotráfico",
    icon: "🌿",
    desc: "Plantação, processamento, distribuição. Renda lenta, risco médio."
  }, {
    name: "Armamento",
    icon: "🔫",
    desc: "Roubo, processamento, venda. Renda média, risco alto."
  }, {
    name: "Contrabando",
    icon: "📦",
    desc: "Importação, armazém, venda. Renda alta, risco muito alto."
  }, {
    name: "Nightclub",
    icon: "🎵",
    desc: "Lucro passivo de nightclub. Gerenciamento de DJs e segurança."
  }, {
    name: "Casino",
    icon: "💰",
    desc: "Gerenciamento de cassino. Operação de jogos ilegais."
  }, {
    name: "Agency",
    icon: "🛡️",
    desc: "Segurança privada. Contratos VIP. Renda variável."
  }, {
    name: "Auto Shop",
    icon: "🏎️",
    desc: "Customização e roubo de carros. Renda rápida."
  }, {
    name: "Hacking",
    icon: "💻",
    desc: "Roubo de criptografia. Operações digitais. Futuro de GTA Online."
  }].map((b, i) => React.createElement("div", {
    key: i,
    className: "card",
    style: {
      padding: 22
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    style: {
      fontSize: 28,
      marginBottom: 8
    }
  }, b.icon), React.createElement("div", {
    className: "headline",
    style: {
      fontSize: 16,
      marginBottom: 8
    }
  }, b.name), React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 12,
      lineHeight: 1.5
    }
  }, b.desc))))));
};
const GTA6Section = () => {
  return React.createElement("section", {
    id: "gta6",
    style: {
      padding: "96px 0",
      background: "linear-gradient(180deg,#0a0a0d 0%, #2a0a1a 50%, #0a0a0d 100%)"
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head"
  }, React.createElement("div", null, React.createElement(Eyebrow, {
    color: "var(--neon)"
  }, "Cap\xEDtulo 16 \xB7 futuro pr\xF3ximo"), React.createElement("h2", null, "GTA VI: A Pr\xF3xima Era ", React.createElement("em", {
    style: {
      color: "var(--evidence)"
    }
  }, "2026"))), React.createElement("div", {
    className: "right"
  }, "Lan\xE7amento: 19 de Novembro de 2026 (PS5)")), React.createElement("div", {
    className: "card",
    style: {
      padding: 0,
      overflow: "hidden",
      marginBottom: 42
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16/9",
      background: "linear-gradient(135deg, #2a0a2a 0%, #1a0a2a 100%)",
      overflow: "hidden"
    }
  }, React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(circle at 50% 50%, rgba(255,61,138,.25), transparent 70%)"
    }
  }), React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 64,
      opacity: .1
    }
  }, "\uD83C\uDFAE")), React.createElement("div", {
    style: {
      padding: 32
    }
  }, React.createElement("div", {
    className: "display",
    style: {
      fontSize: 48,
      marginBottom: 12,
      color: "var(--neon)"
    }
  }, "Lucia ", React.createElement("span", {
    style: {
      color: "var(--evidence)"
    }
  }, "+"), " Jason"), React.createElement("p", {
    style: {
      color: "var(--bone-2)",
      fontSize: 16,
      lineHeight: 1.6,
      maxWidth: 600,
      marginBottom: 20
    }
  }, "Um casal criminoso em Leonida. Crime moderno, redes sociais, influencers, golpes digitais. S\xE1tira do s\xE9culo XXI."), React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, React.createElement(Tag, {
    tone: "pink"
  }, "Dual Protagonistas"), React.createElement(Tag, {
    tone: "pink"
  }, "Leonida"), React.createElement(Tag, {
    tone: "pink"
  }, "Vice City Moderna"), React.createElement(Tag, {
    tone: "pink"
  }, "Crime Digital")))), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 30,
      marginBottom: 42
    }
  }, React.createElement("div", {
    className: "card",
    style: {
      padding: 22
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "var(--money)",
      marginBottom: 12
    }
  }, "\u2713 Confirmado Oficialmente"), React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, ["Lançamento: 19 de novembro de 2026", "Ps5 exclusive (temporal)", "Ambientação: Leonida (Flórida)", "Vice City é cidade principal", "Protagonistas: Lucia & Jason", "Engine RAGE 2 com ray-tracing", "Trilha sonora original", "Trailer oficial de 2h+ liberado"].map((f, i) => React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "start",
      fontSize: 12,
      color: "var(--bone-2)"
    }
  }, React.createElement("span", {
    style: {
      color: "var(--money)",
      marginTop: 2
    }
  }, "\u2713"), React.createElement("span", null, f))))), React.createElement("div", {
    className: "card",
    style: {
      padding: 22,
      background: "rgba(255,61,138,.06)",
      border: "1px solid rgba(255,61,138,.3)"
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "var(--neon)",
      marginBottom: 12
    }
  }, "? Especula\xE7\xE3o Comunit\xE1ria"), React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, ["Tema: Redes sociais & crime digital", "Influencers como antagonistas potenciais", "Heists em era digital", "Pântanos e natureza de Flórida", "Múltiplos estados em Leonida", "GTA Online integrado desde lançamento", "Melhorias gráficas massivas", "Foco em narrativa contempoânea"].map((s, i) => React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "start",
      fontSize: 12,
      color: "var(--bone-2)"
    }
  }, React.createElement("span", {
    style: {
      color: "var(--neon)",
      marginTop: 2
    }
  }, "?"), React.createElement("span", null, s)))))), React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 18
    }
  }, "Poss\xEDvel Narrativa (Especula\xE7\xE3o Informada)"), React.createElement("div", {
    className: "card",
    style: {
      padding: 22
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 13,
      lineHeight: 1.8
    }
  }, React.createElement("p", null, "Lucia Caminos \xE9 uma mulher criminosa em Leonida. Jason Duval \xE9 homem. Parecem ser um casal criminoso \u2014 possibilmente inspirado no fen\xF4meno de \"crime couples\" dos 2010s e 2020s. A hist\xF3ria provavelmente envolve:"), React.createElement("ul", {
    style: {
      marginLeft: 20,
      marginTop: 12
    }
  }, React.createElement("li", null, "Fuga de entidade criminosa/governo ap\xF3s crime inicial"), React.createElement("li", null, "Constru\xE7\xE3o de imp\xE9rio moderno usando tecnologia e redes sociais"), React.createElement("li", null, "Antagonistas incluindo influencers, cart\xE9is modernos, ag\xEAncias federais"), React.createElement("li", null, "Poss\xEDvel tema de \"Bonnie & Clyde\" contempor\xE2neo"), React.createElement("li", null, "Miss\xF5es envolvendo fraude digital, roubo de dados, manipula\xE7\xE3o de redes"), React.createElement("li", null, "Vice City moderna, p\xE2ntanos de Fl\xF3rida, resort areas")), React.createElement("p", {
    style: {
      marginTop: 12
    }
  }, React.createElement("strong", null, "Nota:"), " Maioria disso \xE9 especula\xE7\xE3o comunit\xE1ria. Rockstar mant\xE9m detalhes em segredo rigoroso.")))));
};
const GlossarySection = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const glossary = [{
    term: "GTA",
    def: "Grand Theft Auto — série de videojogos de crime sandbox urbano."
  }, {
    term: "Sandbox",
    def: "Tipo de jogo que oferece liberdade ao jogador sem objetivos lineares. Você faz o que quiser."
  }, {
    term: "Mundo Aberto",
    def: "Ambiente de jogo explorado livremente, sem restrições de área."
  }, {
    term: "Heist",
    def: "Roubo planejado, geralmente cooperativo. Envolve reconhecimento, planejamento e execução."
  }, {
    term: "FIB",
    def: "Federal Investigation Bureau — agência fictícia baseada no FBI. Antagonista em GTA V."
  }, {
    term: "Cripto/Criptomoedas",
    def: "Moedas digitais em GTA Online. Tráfico de criptomoedas é negócio em GTA Online."
  }, {
    term: "MC",
    def: "Motoclube — organização de motociclistas. The Lost MC é famosa em GTA IV."
  }, {
    term: "CEO",
    def: "Chief Executive Officer. Em GTA Online, jogadores podem ser CEOs de negócios."
  }, {
    term: "Wanted Level",
    def: "Nível de procura por polícia (estrelas). Aumenta com crimes, diminui escondendo-se."
  }, {
    term: "Pontual",
    def: "Missão secundária realizada durante gameplay normal."
  }, {
    term: "Cheats/Codes",
    def: "Códigos que modificam gameplay. Gta série sempre teve suporte a cheats."
  }, {
    term: "Sandbox",
    def: "Engine de jogo que permite interações físicas realistas."
  }, {
    term: "RAGE",
    def: "Engine de jogo utilizada por Rockstar desde GTA IV. Atual: RAGE 2 com ray-tracing."
  }, {
    term: "Neon",
    def: "Estética visual com cores brilhantes, especialmente associada a Vice City."
  }, {
    term: "Dupla Protagonista",
    def: "Dois personagens jogáveis principais. GTA V tem três, GTA VI tem dois."
  }];
  const filtered = glossary.filter(g => g.term.toLowerCase().includes(searchTerm.toLowerCase()) || g.def.toLowerCase().includes(searchTerm.toLowerCase()));
  return React.createElement("section", {
    id: "glossary",
    style: {
      padding: "96px 0",
      background: "linear-gradient(180deg,#0a0a0d, #0e0e14 30%, #0a0a0d)"
    }
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "sec-head"
  }, React.createElement("div", null, React.createElement(Eyebrow, {
    color: "var(--copper)"
  }, "Cap\xEDtulo 17 \xB7 refer\xEAncia"), React.createElement("h2", null, "Gloss\xE1rio GTA ", React.createElement("em", null, "Completo"))), React.createElement("div", {
    className: "right"
  }, "Termos, conceitos e jarg\xE3o da s\xE9rie")), React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, React.createElement("input", {
    type: "text",
    placeholder: "\uD83D\uDD0D Procurar termo...",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    style: {
      width: "100%",
      padding: "12px 16px",
      background: "linear-gradient(180deg,#1c1c22,#121217)",
      border: "1px solid var(--line-2)",
      borderRadius: 2,
      color: "var(--bone)",
      fontFamily: "Space Mono",
      fontSize: 13,
      letterSpacing: ".22em"
    }
  })), React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, filtered.length > 0 ? filtered.map((item, i) => React.createElement("div", {
    key: i,
    className: "card",
    style: {
      padding: 22
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "150px 1fr",
      gap: 20
    }
  }, React.createElement("div", {
    className: "headline",
    style: {
      fontSize: 16,
      color: "var(--neon)"
    }
  }, item.term), React.createElement("div", {
    style: {
      color: "var(--bone-2)",
      fontSize: 13,
      lineHeight: 1.6
    }
  }, item.def)))) : React.createElement("div", {
    className: "card",
    style: {
      padding: 32,
      textAlign: "center"
    }
  }, React.createElement(Corners, null), React.createElement("div", {
    style: {
      color: "var(--grit)"
    }
  }, "Nenhum termo encontrado")))));
};
Object.assign(window, {
  RockstarSection,
  UniversesSection,
  GTAOnlineSection,
  GTA6Section,
  GlossarySection
});

/* >>> sections-dossier.jsx */
;const gtaDossierNamespace = window.Dossier || {};
const dossierNav = () => window.dossierNavData || window.NAV || [{
  id: "overview",
  label: "Visão Geral",
  k: "01"
}, {
  id: "timeline",
  label: "Timeline Cronológica",
  k: "02"
}, {
  id: "games",
  label: "Jogos",
  k: "03"
}, {
  id: "missions",
  label: "Missões",
  k: "04"
}, {
  id: "vehicles",
  label: "Veículos",
  k: "05"
}, {
  id: "weapons",
  label: "Armas",
  k: "06"
}, {
  id: "development",
  label: "Desenvolvimento",
  k: "07"
}, {
  id: "characters",
  label: "Personagens",
  k: "08"
}, {
  id: "cities",
  label: "Cidades",
  k: "09"
}, {
  id: "gangs",
  label: "Gangues e Organizações",
  k: "10"
}, {
  id: "universes",
  label: "Universos GTA",
  k: "11"
}, {
  id: "rockstar",
  label: "Rockstar Games",
  k: "12"
}, {
  id: "gtaonline",
  label: "GTA Online",
  k: "13"
}, {
  id: "gta6",
  label: "GTA VI",
  k: "14"
}, {
  id: "glossary",
  label: "Glossário",
  k: "15"
}];
const asList = value => Array.isArray(value) ? value : value ? [value] : [];
const textOf = value => Array.isArray(value) ? value.join(", ") : value || "—";
const normalizeText = value => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const searchRecord = (record, query) => {
  if (!query) return true;
  return normalizeText(JSON.stringify(record)).includes(normalizeText(query));
};
const tagTone = (value = "") => {
  const v = normalizeText(value);
  if (v.includes("protagon") || v.includes("principal") || v.includes("confirmado")) return "yellow";
  if (v.includes("antagon") || v.includes("traidor") || v.includes("corrupt") || v.includes("morto")) return "red";
  if (v.includes("aliado") || v.includes("online") || v.includes("vivo")) return "green";
  if (v.includes("governo") || v.includes("policia") || v.includes("fib") || v.includes("iaa") || v.includes("hd")) return "blue";
  if (v.includes("vice") || v.includes("gta vi") || v.includes("neon")) return "pink";
  return "neutral";
};
const universeTone = (value = "") => {
  if (String(value).includes("HD")) return "pink";
  if (String(value).includes("3D")) return "blue";
  if (String(value).includes("2D")) return "yellow";
  return "neutral";
};
const DossierIcon = ({
  type = "file"
}) => {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const icons = {
    file: React.createElement("svg", common, React.createElement("path", {
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
    }), React.createElement("path", {
      d: "M14 2v6h6"
    }), React.createElement("path", {
      d: "M8 13h8M8 17h6"
    })),
    map: React.createElement("svg", common, React.createElement("path", {
      d: "m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z"
    }), React.createElement("path", {
      d: "M9 3v15M15 6v15"
    })),
    city: React.createElement("svg", common, React.createElement("path", {
      d: "M3 21h18"
    }), React.createElement("path", {
      d: "M5 21V7l6-4 6 4v14"
    }), React.createElement("path", {
      d: "M9 21v-6h6v6"
    }), React.createElement("path", {
      d: "M8 9h1M12 9h1M16 9h1M8 12h1M16 12h1"
    })),
    police: React.createElement("svg", common, React.createElement("path", {
      d: "M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5z"
    }), React.createElement("path", {
      d: "m9 12 2 2 4-5"
    })),
    car: React.createElement("svg", common, React.createElement("path", {
      d: "M3 16h18"
    }), React.createElement("path", {
      d: "M5 16l2-6h10l2 6"
    }), React.createElement("circle", {
      cx: "7",
      cy: "17",
      r: "2"
    }), React.createElement("circle", {
      cx: "17",
      cy: "17",
      r: "2"
    })),
    weapon: React.createElement("svg", common, React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "8"
    }), React.createElement("path", {
      d: "M12 2v4M12 18v4M2 12h4M18 12h4"
    }), React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2"
    })),
    users: React.createElement("svg", common, React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }), React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), React.createElement("path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87"
    }), React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    star: React.createElement("svg", common, React.createElement("path", {
      d: "m12 2 2.8 6.2 6.7.7-5 4.6 1.4 6.5-5.9-3.3L6.1 20l1.4-6.5-5-4.6 6.7-.7z"
    })),
    database: React.createElement("svg", common, React.createElement("ellipse", {
      cx: "12",
      cy: "5",
      rx: "8",
      ry: "3"
    }), React.createElement("path", {
      d: "M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"
    }), React.createElement("path", {
      d: "M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"
    }))
  };
  return icons[type] || icons.file;
};
const DossierSectionHead = ({
  eyebrow,
  title,
  accent,
  right
}) => React.createElement("div", {
  className: "dossier-section-head"
}, React.createElement("div", null, React.createElement("div", {
  className: "dossier-eyebrow",
  style: {
    color: accent || "var(--evidence)"
  }
}, eyebrow), React.createElement("h2", null, title)), right && React.createElement("div", {
  className: "dossier-head-note"
}, right));
const DossierChips = ({
  items,
  limit = 8
}) => React.createElement("div", {
  className: "dossier-chip-row"
}, asList(items).slice(0, limit).map((item, index) => React.createElement(Tag, {
  key: `${item}-${index}`,
  tone: tagTone(item)
}, item)));
const mediaCaption = media => media?.caption || media?.credit || "Rockstar Games";
const OfficialMedia = ({
  media,
  className = ""
}) => {
  if (!media?.src) return null;
  const caption = mediaCaption(media);
  const imageStyle = {
    objectPosition: media.position || undefined,
    objectFit: media.fit || undefined
  };
  return React.createElement("figure", {
    className: `official-media ${className}`
  }, React.createElement("img", {
    src: media.src,
    alt: media.alt || caption,
    loading: "lazy",
    referrerPolicy: "no-referrer",
    style: imageStyle
  }), React.createElement("figcaption", null, media.source ? React.createElement("a", {
    href: media.source,
    target: "_blank",
    rel: "noreferrer"
  }, caption) : caption));
};
const CityImageCarousel = ({
  city,
  className = ""
}) => {
  const mediaItems = asList(city?.galleryMedia || city?.media);
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => setIndex(0), [city?.id, city?.selectedUniverseId]);
  if (!mediaItems.length) return null;
  const activeIndex = (index % mediaItems.length + mediaItems.length) % mediaItems.length;
  const active = mediaItems[activeIndex];
  const move = delta => setIndex(current => current + delta);
  return React.createElement("div", {
    className: `dossier-city-carousel ${className}`
  }, React.createElement(OfficialMedia, {
    media: active,
    className: "dossier-city-carousel-media"
  }), mediaItems.length > 1 && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "dossier-city-carousel-controls"
  }, React.createElement("button", {
    type: "button",
    onClick: () => move(-1),
    "aria-label": "Imagem anterior"
  }, "<"), React.createElement("span", null, activeIndex + 1, " / ", mediaItems.length), React.createElement("button", {
    type: "button",
    onClick: () => move(1),
    "aria-label": "Proxima imagem"
  }, ">")), React.createElement("div", {
    className: "dossier-city-carousel-thumbs"
  }, mediaItems.map((media, thumbIndex) => React.createElement("button", {
    type: "button",
    key: `${city?.id || "city"}-${media.src}-${thumbIndex}`,
    className: thumbIndex === activeIndex ? "active" : "",
    onClick: () => setIndex(thumbIndex),
    "aria-label": `Abrir imagem ${thumbIndex + 1}`
  }, React.createElement("img", {
    src: media.src,
    alt: media.alt || mediaCaption(media),
    loading: "lazy",
    referrerPolicy: "no-referrer"
  }))))));
};
const MetaGrid = ({
  rows
}) => React.createElement("div", {
  className: "dossier-meta-grid"
}, rows.filter(Boolean).map(([label, value], index) => React.createElement("div", {
  key: `${label}-${index}`
}, React.createElement("span", null, label), React.createElement("strong", null, textOf(value)))));
const BulletList = ({
  items
}) => React.createElement("ul", {
  className: "dossier-list"
}, asList(items).map((item, index) => React.createElement("li", {
  key: `${item}-${index}`
}, item)));
const SourceLinks = ({
  items
}) => {
  const links = asList(items);
  if (!links.length) return null;
  return React.createElement("div", {
    className: "dossier-source-row"
  }, links.map((source, index) => {
    const href = typeof source === "string" ? source : source.url;
    const label = typeof source === "string" ? source : source.label || source.url;
    return React.createElement("a", {
      key: `${href || label}-${index}`,
      href: href,
      target: "_blank",
      rel: "noreferrer"
    }, label);
  }));
};
const titleKey = value => normalizeText(value).replace(/grand theft auto/g, "gta").replace(/[^a-z0-9]+/g, " ").trim();
const initialsOf = value => String(value || "").replace(/["']/g, "").split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase();
const findGameForTimeline = item => {
  const aliases = {
    "gta london 1961": "london-1961",
    "gta london 1969": "london-1969",
    "the lost and damned": "lost-and-damned",
    "the ballad of gay tony": "ballad-gay-tony"
  };
  const key = titleKey(item.title);
  if (aliases[key]) return gamesData.find(game => game.id === aliases[key]);
  const exactMatch = gamesData.find(game => titleKey(game.title) === key);
  if (exactMatch) return exactMatch;
  return gamesData.find(game => {
    const gameKey = titleKey(game.title);
    return gameKey.length > 4 && key.length > 4 && (gameKey.includes(key) || key.includes(gameKey));
  });
};
const DossierHUDNav = ({
  active,
  onJump
}) => {
  const [open, setOpen] = React.useState(false);
  const navItems = dossierNav();
  const jumpToTop = () => {
    onJump && onJump("overview");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return React.createElement(React.Fragment, null, React.createElement("header", {
    className: "dossier-hud dossier-shell"
  }, React.createElement("div", {
    className: "dossier-hud-inner"
  }, React.createElement("a", {
    className: "dossier-brand",
    href: "#overview",
    onClick: () => onJump && onJump("overview")
  }, React.createElement("img", {
    className: "dossier-brand-logo",
    src: "assets/dossier-logo.png",
    alt: "Dossi\xEA Criminal - Arquivo GTA"
  })), React.createElement("nav", {
    className: open ? "open" : ""
  }, navItems.map(n => React.createElement("a", {
    key: n.id,
    href: `#${n.id}`,
    className: active === n.id ? "active" : "",
    onClick: () => {
      setOpen(false);
      onJump && onJump(n.id);
    }
  }, React.createElement("span", null, n.k), n.label))), React.createElement("button", {
    className: "dossier-menu",
    onClick: () => setOpen(v => !v),
    "aria-label": "Abrir menu"
  }, "\u2630"))), React.createElement("nav", {
    className: "dossier-bottom-nav dossier-shell",
    "aria-label": "Menu"
  }, navItems.map(n => React.createElement("a", {
    key: `bottom-${n.id}`,
    href: `#${n.id}`,
    className: active === n.id ? "active" : "",
    onClick: () => {
      setOpen(false);
      onJump && onJump(n.id);
    }
  }, React.createElement("span", null, n.k), n.label))), React.createElement("button", {
    className: "dossier-back-top",
    type: "button",
    onClick: jumpToTop,
    "aria-label": "Voltar ao topo"
  }, React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: "M12 5l-7 7m7-7 7 7M12 5v14"
  }))));
};
const DossierHero = () => {
  const heroMedia = window.officialMediaData?.hero;
  const stats = [["Primeiro jogo", "1997", "Grand Theft Auto"], ["Criadores", "David Jones e Mike Dailly", "DMA Design"], ["Estúdio principal", "Rockstar North", "antiga DMA Design"], ["Principais cidades", "Liberty, Vice, San Andreas, Los Santos, Leonida", "arquivo urbano"], ["Próximo jogo", "GTA VI - 19 de novembro de 2026", "data oficial atual"]];
  const quick = [["Timeline", "timeline", "map"], ["Jogos", "games", "file"], ["Missões", "missions", "database"], ["Veículos", "vehicles", "car"], ["Armas", "weapons", "weapon"], ["Personagens", "characters", "users"], ["Cidades", "cities", "city"], ["Organizações", "gangs", "database"], ["Rockstar", "rockstar", "star"], ["Desenvolvimento", "development", "file"], ["Universos", "universes", "map"]];
  return React.createElement("section", {
    id: "overview",
    className: "dossier-hero dossier-shell"
  }, React.createElement("div", {
    className: "dossier-map-bg"
  }), React.createElement("div", {
    className: "dossier-hero-siren"
  }), React.createElement("div", {
    className: "wrap dossier-hero-grid"
  }, React.createElement("div", {
    className: "dossier-hero-copy"
  }, React.createElement("div", {
    className: "tape"
  }, "CONFIDENCIAL \xB7 ARQUIVO GTA"), React.createElement("h1", null, "Grand Theft Auto: Timeline Completa, Hist\xF3ria, Personagens e Cidades"), React.createElement("p", null, "Um dossi\xEA interativo da saga GTA: da DMA Design \xE0 Rockstar Games, da era 2D \xE0 era HD, de Liberty City a Vice City, San Andreas, Los Santos e Leonida."), React.createElement("div", {
    className: "dossier-quick-tabs"
  }, quick.map(([label, id, icon]) => React.createElement("a", {
    key: id,
    href: `#${id}`
  }, React.createElement(DossierIcon, {
    type: icon
  }), React.createElement("span", null, label))))), React.createElement("aside", {
    className: "dossier-hero-panel"
  }, React.createElement("div", {
    className: "dossier-case-top"
  }, React.createElement("span", null, "CASE FILE"), React.createElement("strong", null, "GTA-SAGA-1997-2026")), React.createElement(OfficialMedia, {
    media: heroMedia,
    className: "dossier-hero-official"
  }), React.createElement("div", {
    className: "dossier-stat-grid"
  }, stats.map(([label, value, note]) => React.createElement("div", {
    className: "dossier-stat",
    key: label
  }, React.createElement("span", null, label), React.createElement("strong", null, value), React.createElement("small", null, note)))), React.createElement("div", {
    className: "dossier-evidence-strip"
  }, React.createElement("span", null, "2D Universe"), React.createElement("span", null, "3D Universe"), React.createElement("span", null, "HD Universe")))));
};
const TimelineDossierSection = ({
  onOpenDossier
}) => {
  const [mode, setMode] = React.useState("chronology");
  const releaseItems = releaseTimelineData.map(release => {
    const game = gamesData.find(g => normalizeText(g.title) === normalizeText(release.title) || normalizeText(g.title).includes(normalizeText(release.title).replace("gta iv", "grand theft auto iv")) || normalizeText(release.title).includes(normalizeText(g.title)));
    return {
      ...release,
      game
    };
  });
  const chronologyItems = timelineChronologicalData.map(item => ({
    ...item,
    game: findGameForTimeline(item)
  }));
  return React.createElement("section", {
    id: "timeline",
    className: "dossier-section dossier-shell"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(DossierSectionHead, {
    eyebrow: "Linha do tempo",
    title: "Cronologia interna e lan\xE7amentos",
    accent: "var(--siren)",
    right: "hist\xF3ria do universo separada da hist\xF3ria de desenvolvimento"
  }), React.createElement("div", {
    className: "dossier-segmented"
  }, React.createElement("button", {
    className: mode === "chronology" ? "active" : "",
    onClick: () => setMode("chronology")
  }, "Hist\xF3ria interna"), React.createElement("button", {
    className: mode === "release" ? "active" : "",
    onClick: () => setMode("release")
  }, "Ordem de lan\xE7amento")), mode === "chronology" ? React.createElement("div", {
    className: "dossier-chronology"
  }, chronologyItems.map(item => React.createElement("article", {
    key: `${item.year}-${item.title}`,
    className: "card dossier-timeline-card"
  }, React.createElement(Corners, null), React.createElement("div", {
    className: "dossier-time-pin"
  }, React.createElement("strong", null, item.year), React.createElement("span", null, item.universe)), React.createElement("div", {
    className: `dossier-timeline-cover ${item.game?.media ? "has-official" : ""}`
  }, item.game?.media && React.createElement(OfficialMedia, {
    media: item.game.media,
    className: "dossier-cover-media"
  }), React.createElement("div", {
    className: "dossier-cover-label"
  }, React.createElement("span", null, item.game?.releaseYear || item.year), React.createElement("strong", null, (item.game?.title || item.title).replace("Grand Theft Auto", "GTA")), React.createElement("small", null, item.game?.city || item.city))), React.createElement("div", {
    className: "dossier-time-body"
  }, React.createElement("div", {
    className: "dossier-card-kicker"
  }, item.city), React.createElement("h3", null, item.title), React.createElement("p", null, item.summary), React.createElement(BulletList, {
    items: item.beats
  }), React.createElement(DossierChips, {
    items: [item.protagonist, item.certainty],
    limit: 4
  }), React.createElement("button", {
    className: "btn",
    onClick: () => onOpenDossier({
      type: "timeline",
      item
    })
  }, "Abrir dossi\xEA"))))) : React.createElement("div", {
    className: "dossier-release-grid"
  }, releaseItems.map(({
    year,
    title,
    game
  }) => React.createElement("article", {
    key: `${year}-${title}`,
    className: "card dossier-release-card"
  }, React.createElement(Corners, null), React.createElement("div", {
    className: `dossier-cover-mini ${game?.media ? "has-official" : ""}`
  }, game?.media && React.createElement(OfficialMedia, {
    media: game.media,
    className: "dossier-cover-media"
  }), React.createElement("div", {
    className: "dossier-cover-label"
  }, React.createElement("span", null, year), React.createElement("strong", null, title.replace("Grand Theft Auto", "GTA")))), React.createElement("div", null, React.createElement("div", {
    className: "dossier-card-kicker"
  }, "Lan\xE7amento \xB7 ", year), React.createElement("h3", null, title), React.createElement(MetaGrid, {
    rows: [["História se passa em", game?.storyYear || "—"], ["Cidade", game?.city || "—"], ["Protagonista", game?.protagonist || "—"]]
  }), React.createElement("p", null, game?.summary || "Coletado na linha oficial de lançamentos da franquia."), game && React.createElement(DossierChips, {
    items: game.tags,
    limit: 5
  }), game && React.createElement("button", {
    className: "btn",
    onClick: () => onOpenDossier({
      type: "game",
      item: game
    })
  }, "Ver jogo")))))));
};
const GameDossierCard = ({
  game,
  onOpen
}) => React.createElement("article", {
  className: "card dossier-game-card"
}, React.createElement(Corners, null), React.createElement("div", {
  className: `dossier-cover-art ${universeTone(game.universe)} ${game.media ? "has-official" : ""}`
}, game.media ? React.createElement(OfficialMedia, {
  media: game.media,
  className: "dossier-cover-media"
}) : React.createElement("div", {
  className: "dossier-cover-map"
}), React.createElement("div", {
  className: "dossier-cover-label"
}, React.createElement("span", null, game.releaseYear), React.createElement("strong", null, game.title), React.createElement("small", null, game.city))), React.createElement("div", {
  className: "dossier-card-body"
}, React.createElement("div", {
  className: "dossier-card-kicker"
}, game.universe, " \xB7 hist\xF3ria em ", game.storyYear), React.createElement("h3", null, game.title), React.createElement("p", null, game.summary), React.createElement(MetaGrid, {
  rows: [["Protagonista", game.protagonist], ["Antagonistas", game.antagonists], ["Cidade", game.city], ["Importância", game.importance]]
}), React.createElement(DossierChips, {
  items: game.tags,
  limit: 6
}), React.createElement("button", {
  className: "btn",
  onClick: () => onOpen({
    type: "game",
    item: game
  })
}, "Abrir jogo")));
const GamesDossierSection = ({
  onOpenDossier
}) => {
  const [query, setQuery] = React.useState("");
  const [universe, setUniverse] = React.useState("all");
  const [city, setCity] = React.useState("all");
  const cities = [...new Set(gamesData.map(g => g.city.split(",")[0]))];
  const filtered = gamesData.filter(game => searchRecord(game, query) && (universe === "all" || game.universe === universe) && (city === "all" || game.city.includes(city)));
  return React.createElement("section", {
    id: "games",
    className: "dossier-section dossier-shell alt"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(DossierSectionHead, {
    eyebrow: "Cat\xE1logo",
    title: "Jogos da saga",
    accent: "var(--evidence)",
    right: `${filtered.length} arquivos filtrados`
  }), React.createElement("div", {
    className: "dossier-filterbar"
  }, React.createElement("label", null, React.createElement("span", null, "Busca"), React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Nome, cidade, protagonista..."
  })), React.createElement("label", null, React.createElement("span", null, "Universo"), React.createElement("select", {
    value: universe,
    onChange: e => setUniverse(e.target.value)
  }, React.createElement("option", {
    value: "all"
  }, "Todos"), universeData.map(u => React.createElement("option", {
    key: u.name,
    value: u.name
  }, u.name)))), React.createElement("label", null, React.createElement("span", null, "Cidade"), React.createElement("select", {
    value: city,
    onChange: e => setCity(e.target.value)
  }, React.createElement("option", {
    value: "all"
  }, "Todas"), cities.map(c => React.createElement("option", {
    key: c,
    value: c
  }, c))))), React.createElement("div", {
    className: "dossier-games-grid"
  }, filtered.map(game => React.createElement(GameDossierCard, {
    key: game.id,
    game: game,
    onOpen: onOpenDossier
  })))));
};
const missionGroupCache = new Map();
const missionDetailCache = new Map();
const cleanMissionMarkup = (value = "") => String(value).replace(/\{\{([^{}]+)\}\}/g, (_, inner) => {
  const parts = inner.split("|").map(part => part.trim()).filter(Boolean);
  return parts.length > 1 ? parts[parts.length - 1] : "";
}).replace(/\[\[:?(File|Image|Category|[a-z]{2}):[^\]]+\]\]/gi, "").replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2").replace(/\[\[([^\]]+)\]\]/g, "$1").replace(/<br\s*\/?\s*>/gi, " ").replace(/<ref[^>]*>.*?<\/ref>/gi, "").replace(/<[^>]+>/g, "").replace(/''+/g, "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
const cleanMissionHeading = (line = "") => {
  let label = String(line).trim().replace(/^=+|=+$/g, "").replace(/^;+/, "");
  label = label.replace(/\[\[:?(File|Image):[^\]]+\]\]/gi, "");
  label = cleanMissionMarkup(label).replace(/^'+|'+$/g, "").trim();
  if (/^(navigation|references|gallery|see also|trivia|video walkthrough|reward|rewards|description|contents)$/i.test(label)) return "";
  return label || "Missões";
};
const missionItemName = item => typeof item === "string" ? item : item?.name || "";
const missionItemPage = item => {
  if (!item) return "";
  if (typeof item === "string") return item;
  return item.page || item.name || "";
};
const extractMissionEntryFromText = (value = "") => {
  const cleaned = String(value).replace(/\[\[(File|Image):[^\]]+\]\]/gi, "");
  const matches = [...cleaned.matchAll(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g)].map(match => {
    const target = cleanMissionMarkup(match[1]);
    const label = cleanMissionMarkup(match[2] || match[1]);
    return {
      target,
      label
    };
  }).filter(entry => entry.label).filter(entry => !/^(money|file:|image:|category:|playstation|pc|xbox|grand theft auto|gta online|rockstar editor|director mode)$/i.test(entry.label));
  const chosen = matches.length ? matches[0] : null;
  const name = chosen && /^(mission \d+|phone \d+)$/i.test(chosen.label) ? chosen.target : chosen?.label || "";
  if (/^(n\/a|none|safehouse|ammu-nation)$/i.test(name)) return "";
  return name ? {
    name,
    page: chosen?.target || name
  } : null;
};
const addMissionGroupItem = (groups, area, context, entry) => {
  const record = typeof entry === "string" ? {
    name: entry,
    page: entry
  } : entry;
  if (!record?.name) return;
  const groupLabel = [area, context].filter(Boolean).join(" / ") || "Missões";
  if (!groups.has(groupLabel)) groups.set(groupLabel, new Map());
  const key = normalizeText(`${record.page || record.name}:${record.name}`);
  groups.get(groupLabel).set(key, record);
};
const parseMissionWikitext = (rawText = "") => {
  const groups = new Map();
  let area = "Geral";
  let context = "Missões";
  let inTable = false;
  let titleCell = "";
  let titleCellOpen = false;
  let cellIndex = -1;
  const flushTitle = () => {
    if (titleCell) addMissionGroupItem(groups, area, context, extractMissionEntryFromText(titleCell));
    titleCell = "";
    titleCellOpen = false;
  };
  rawText.split("\n").forEach(rawLine => {
    const line = rawLine.trim();
    if (!line) return;
    if (!inTable && /^==[^=]/.test(line)) {
      const heading = cleanMissionHeading(line);
      if (heading) {
        area = heading;
        context = "Missões";
      }
      return;
    }
    if (!inTable && /^={3,}/.test(line)) {
      const heading = cleanMissionHeading(line);
      if (heading) context = heading;
      return;
    }
    if (!inTable && /^;/.test(line)) {
      const heading = cleanMissionHeading(line);
      if (heading) context = heading;
      return;
    }
    if (!inTable && /^'''\[\[/.test(line)) {
      const heading = extractMissionEntryFromText(line);
      if (heading?.name) context = heading.name;
      return;
    }
    if (!inTable && /^\*+\s*'''.*'''/.test(line) && !line.includes("[[")) {
      const heading = cleanMissionMarkup(line.replace(/^\*+/, ""));
      if (heading) context = heading;
      return;
    }
    if (/^\{\|/.test(line)) {
      inTable = true;
      titleCell = "";
      titleCellOpen = false;
      cellIndex = -1;
      return;
    }
    if (/^\|\}/.test(line)) {
      flushTitle();
      inTable = false;
      cellIndex = -1;
      return;
    }
    if (inTable && /^\|-/.test(line)) {
      flushTitle();
      cellIndex = -1;
      return;
    }
    if (inTable && /^!/.test(line)) return;
    if (inTable && /^\|/.test(line)) {
      const content = line.replace(/^\|+/, "").trim();
      cellIndex += 1;
      if (cellIndex === 0) {
        titleCell = content;
        titleCellOpen = true;
      } else {
        flushTitle();
      }
      return;
    }
    if (inTable && titleCellOpen) {
      titleCell += ` ${line}`;
      return;
    }
    if (!inTable && /^\*+.*\[\[/.test(line)) {
      addMissionGroupItem(groups, area, context, extractMissionEntryFromText(line));
    }
  });
  return [...groups.entries()].map(([label, names]) => ({
    label,
    items: [...names.values()].sort((a, b) => missionItemName(a).localeCompare(missionItemName(b), "pt-BR"))
  })).filter(group => group.items.length).sort((a, b) => a.label.localeCompare(b.label, "pt-BR"));
};
const loadMissionGroups = async mission => {
  const cacheKey = `${mission.id}:${mission.apiPage || "fallback"}`;
  if (missionGroupCache.has(cacheKey)) return missionGroupCache.get(cacheKey);
  let groups = [];
  if (mission.apiPage) {
    const data = await fetch(vehicleApiUrl({
      action: "parse",
      prop: "wikitext",
      redirects: "1",
      page: mission.apiPage
    })).then(response => response.json());
    groups = parseMissionWikitext(data?.parse?.wikitext?.["*"] || "");
  }
  if (!groups.length && mission.fallbackGroups) groups = mission.fallbackGroups;
  missionGroupCache.set(cacheKey, groups);
  return groups;
};
const missionDetailUrl = page => `https://gta.fandom.com/wiki/${encodeURIComponent(page).replaceAll("%20", "_")}`;
const extractMissionSummaryFromHtml = (html = "") => {
  if (!html || typeof DOMParser === "undefined") return "";
  const doc = new DOMParser().parseFromString(html, "text/html");
  doc.querySelectorAll("aside, table, figure, nav, style, script, sup, .toc, .navbox, .portable-infobox, .reference, .metadata").forEach(node => node.remove());
  const paragraphs = [...doc.querySelectorAll(".mw-parser-output > p, .mw-parser-output > ul, .mw-parser-output > ol")].map(node => cleanMissionMarkup(node.textContent || "")).filter(text => text.length > 45).filter(text => !/^(This article|For other uses|This page|The following is)/i.test(text));
  return paragraphs.slice(0, 2).join("\n\n").slice(0, 720);
};
const extractMissionFactsFromHtml = (html = "") => {
  if (!html || typeof DOMParser === "undefined") return [];
  const doc = new DOMParser().parseFromString(html, "text/html");
  const wanted = ["Type", "Game", "For", "Location", "Target", "Reward", "Unlocks", "Unlocked By", "Unlocked by", "Protagonist"];
  return [...doc.querySelectorAll(".portable-infobox .pi-data")].map(row => {
    const label = cleanMissionMarkup(row.querySelector(".pi-data-label")?.textContent || "");
    const valueNode = row.querySelector(".pi-data-value");
    const listValues = [...(valueNode?.querySelectorAll("li") || [])].map(node => cleanMissionMarkup(node.textContent || "")).filter(Boolean);
    const value = listValues.length ? listValues.join(", ") : cleanMissionMarkup(valueNode?.textContent || "");
    return {
      label,
      value
    };
  }).filter(row => row.label && row.value && wanted.some(label => normalizeText(label) === normalizeText(row.label))).slice(0, 8);
};
const missionFactLabel = (label = "") => ({
  type: "Tipo",
  game: "Jogo",
  for: "Contato",
  location: "Local",
  target: "Alvos",
  reward: "Recompensa",
  unlocks: "Libera",
  "unlocked by": "Liberada por",
  protagonist: "Protagonista"
})[normalizeText(label)] || label;
const loadMissionDetail = async entry => {
  const pageTitle = missionItemPage(entry);
  const label = missionItemName(entry);
  if (!pageTitle) return null;
  const cacheKey = normalizeText(pageTitle);
  if (missionDetailCache.has(cacheKey)) return missionDetailCache.get(cacheKey);
  const fetchDetail = async title => {
    const data = await fetch(vehicleApiUrl({
      action: "parse",
      prop: "text|displaytitle",
      redirects: "1",
      page: title
    })).then(response => response.json());
    const page = data?.parse;
    if (!page || data?.error) return null;
    const html = page.text?.["*"] || "";
    const extract = extractMissionSummaryFromHtml(html);
    const facts = extractMissionFactsFromHtml(html);
    return {
      title: cleanMissionMarkup(page.displaytitle || page.title || label || title),
      extract,
      facts,
      url: missionDetailUrl(page.title || title)
    };
  };
  let detail = await fetchDetail(pageTitle);
  if ((!detail?.extract || normalizeText(detail.title) === normalizeText(label)) && !/\(mission\)$/i.test(pageTitle)) {
    const missionPage = await fetchDetail(`${label} (mission)`);
    if (missionPage?.extract) detail = missionPage;
  }
  const result = detail || {
    title: label || pageTitle,
    extract: "",
    url: missionDetailUrl(pageTitle)
  };
  missionDetailCache.set(cacheKey, result);
  return result;
};
const missionGameFor = mission => gamesData.find(game => game.id === mission.gameId) || null;
const matchesMissionType = (mission, type) => {
  if (type === "all") return true;
  const hay = normalizeText([mission.coverage, mission.tags, mission.highlights, mission.summary, mission.systems].join(" "));
  const tests = {
    story: ["story", "historia", "campanha", "main", "protagonista"],
    side: ["side", "paralela", "atividade", "random", "strangers", "hobbies"],
    phone: ["phone", "telefone", "phonebox", "walkie"],
    heist: ["heist", "assalto", "setups", "roubo"],
    vehicle: ["vehicle", "veiculo", "taxi", "vigilante", "paramedic", "firefighter", "races", "corridas"],
    online: ["online", "dlc", "contatos", "jobs", "arquivo vivo"]
  };
  return (tests[type] || []).some(needle => hay.includes(needle));
};
const MissionDossierCard = ({
  mission,
  onOpen
}) => {
  const game = missionGameFor(mission);
  const media = mission.media || game?.media;
  return React.createElement("article", {
    className: "card dossier-mission-card"
  }, React.createElement(Corners, null), React.createElement("div", {
    className: `dossier-mission-media ${universeTone(mission.universe)} ${media ? "has-official" : ""}`
  }, media ? React.createElement(OfficialMedia, {
    media: media,
    className: "dossier-mission-official"
  }) : React.createElement("div", {
    className: "dossier-cover-map"
  }), React.createElement("div", {
    className: "dossier-mission-badge"
  }, React.createElement(DossierIcon, {
    type: "database"
  }), React.createElement("span", null, mission.totalLabel))), React.createElement("div", {
    className: "dossier-card-body"
  }, React.createElement("div", {
    className: "dossier-card-kicker"
  }, mission.universe, " \xB7 miss\xF5es em ", mission.storyYear), React.createElement("h3", null, mission.title), React.createElement("p", null, mission.summary), React.createElement(MetaGrid, {
    rows: [["Cidade", mission.city], ["Cobertura", asList(mission.coverage).slice(0, 5)], ["Destaques", asList(mission.highlights).slice(0, 5)]]
  }), React.createElement(DossierChips, {
    items: mission.tags,
    limit: 6
  }), React.createElement("button", {
    className: "btn",
    onClick: () => onOpen({
      type: "mission",
      item: {
        ...mission,
        media
      }
    })
  }, "Abrir miss\xF5es")));
};
const MissionsDossierSection = ({
  onOpenDossier
}) => {
  const missions = window.missionDossierData || [];
  const [query, setQuery] = React.useState("");
  const [universe, setUniverse] = React.useState("all");
  const [type, setType] = React.useState("all");
  const typeOptions = [["all", "Todas"], ["story", "História"], ["side", "Paralelas"], ["phone", "Telefone"], ["heist", "Assaltos"], ["vehicle", "Veículos/serviços"], ["online", "Online/DLC"]];
  const filtered = missions.filter(mission => searchRecord(mission, query) && (universe === "all" || mission.universe === universe) && matchesMissionType(mission, type));
  return React.createElement("section", {
    id: "missions",
    className: "dossier-section dossier-shell mission-section"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(DossierSectionHead, {
    eyebrow: "Opera\xE7\xF5es",
    title: "Miss\xF5es por jogo",
    accent: "var(--money)",
    right: `${filtered.length} arquivos de missão`
  }), React.createElement("div", {
    className: "dossier-mission-intro card"
  }, React.createElement(Corners, null), React.createElement("div", null, React.createElement("h3", null, "O caminho jog\xE1vel da saga"), React.createElement("p", null, "Esta se\xE7\xE3o fica entre Jogos e os dossi\xEAs de equipamentos porque as miss\xF5es s\xE3o a espinha dorsal da experi\xEAncia: campanha, telefonemas, assaltos, propriedades, servi\xE7os, atividades paralelas, contatos online e arquivos ainda n\xE3o confirmados.")), React.createElement("div", {
    className: "dossier-mission-scan"
  }, React.createElement("span", null, "mission index"), React.createElement("strong", null, "story + side"), React.createElement("small", null, "listas completas sob demanda"))), React.createElement("div", {
    className: "dossier-filterbar wide"
  }, React.createElement("label", null, React.createElement("span", null, "Busca"), React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "End of the Line, The Big Score, Lamar..."
  })), React.createElement("label", null, React.createElement("span", null, "Universo"), React.createElement("select", {
    value: universe,
    onChange: e => setUniverse(e.target.value)
  }, React.createElement("option", {
    value: "all"
  }, "Todos"), universeData.map(u => React.createElement("option", {
    key: u.name
  }, u.name)))), React.createElement("label", null, React.createElement("span", null, "Tipo"), React.createElement("select", {
    value: type,
    onChange: e => setType(e.target.value)
  }, typeOptions.map(([id, label]) => React.createElement("option", {
    key: id,
    value: id
  }, label))))), React.createElement("div", {
    className: "dossier-mission-grid"
  }, filtered.map(mission => React.createElement(MissionDossierCard, {
    key: mission.id,
    mission: mission,
    onOpen: onOpenDossier
  })))));
};
const vehicleGroupCache = new Map();
const vehicleApiUrl = params => {
  const search = new URLSearchParams({
    format: "json",
    origin: "*",
    ...params
  });
  return `https://gta.fandom.com/api.php?${search.toString()}`;
};
const vehicleWikiPageUrl = (page = "") => `https://gta.fandom.com/wiki/${encodeURIComponent(String(page).replace(/\s+/g, "_"))}`;
const vehicleMediaFromSource = (name, pageTitle, src) => src ? {
  src,
  alt: `Imagem de ${name}`,
  source: vehicleWikiPageUrl(pageTitle || name),
  caption: `GTA Wiki - ${name}`,
  credit: "Imagem via GTA Wiki / Fandom; direitos dos assets pertencem aos respectivos titulares.",
  fit: "contain",
  position: "center"
} : null;
const vehicleItemName = item => typeof item === "string" ? item : item?.name || "";
const vehicleItemPageTitle = item => typeof item === "string" ? item : item?.pageTitle || item?.name || "";
const vehicleItemMedia = item => typeof item === "string" ? null : item?.media || null;
const vehicleItemKey = item => normalizeText(`${vehicleItemPageTitle(item)} ${vehicleItemName(item)}`);
const cleanWikiMarkup = (value = "") => String(value).replace(/\{\{([^{}]+)\}\}/g, (_, inner) => {
  const parts = inner.split("|").map(part => part.trim()).filter(Boolean);
  const name = normalizeText(parts[0] || "");
  if (["dlc", "nd", "un", "eeev", "ee", "ev", "time"].includes(name)) return "";
  return parts.length > 1 ? parts[parts.length - 1] : "";
}).replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2").replace(/\[\[([^\]]+)\]\]/g, "$1").replace(/<ref[^>]*>.*?<\/ref>/gi, "").replace(/<[^>]+>/g, "").replace(/''+/g, "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
const cleanVehicleGroupLabel = (line = "") => {
  let label = String(line).trim().replace(/^=+|=+$/g, "").replace(/^!+/, "");
  if (/^\s*(colspan|rowspan|style|width|scope)/i.test(label)) label = label.split("|").pop();
  label = cleanWikiMarkup(label);
  if (/^(reference|meaning|description|total|available|contents|key|table|vehicles|name|image|notes?|features?|type|class|locations?|rewards?)$/i.test(label)) return "";
  if (/gallery|navigation|references|trivia|see also|imagery table/i.test(label)) return "";
  return label;
};
const extractVehicleNameFromLine = (line = "") => {
  const item = extractVehicleItemFromLine(line);
  return vehicleItemName(item);
};
const extractVehicleImageTitle = (line = "") => {
  const match = String(line).match(/\[\[:?(?:Image|File):([^\]|]+)(?:\|[^\]]*)?\]\]/i);
  return match ? `File:${match[1].trim()}` : "";
};
const extractVehicleItemFromLine = (line = "") => {
  if (!line.includes("[[")) return null;
  const links = [...String(line).matchAll(/\[\[:?([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g)];
  const link = links.find(match => !/^(file|image|category|pl|ru|es|fr|de|pt|zh):/i.test(match[1].trim()));
  if (!link) return null;
  const pageTitle = cleanWikiMarkup(link[1]).trim();
  let name = cleanWikiMarkup(link[2] || link[1]).replace(/\s+can be seen.*$/i, "").replace(/\s+inaccessible.*$/i, "").replace(/\s+featuring.*$/i, "").trim().replace(/\.$/, "");
  if (/^(vehicles in|grand theft auto|yusuf amir|power-ups|rocket launcher|machine gun|shotgun|flamethrower|respect|electrofingers|fast reload|get outta jail|crusher|image:|file:|molotov|oil slick|invulnerability|kill frenzy|double damage|police bribe|electrogun)$/i.test(name)) return "";
  return {
    name,
    pageTitle,
    imageTitle: extractVehicleImageTitle(line)
  };
};
const addVehicleGroupItem = (groups, label, item) => {
  const normalizedItem = typeof item === "string" ? {
    name: item,
    pageTitle: item
  } : item;
  if (!vehicleItemName(normalizedItem)) return;
  const groupLabel = label || "Lista completa";
  if (!groups.has(groupLabel)) groups.set(groupLabel, new Map());
  groups.get(groupLabel).set(vehicleItemKey(normalizedItem), normalizedItem);
};
const nextNonEmptyLine = (lines, start) => {
  for (let index = start; index < lines.length; index += 1) {
    const line = lines[index].trim();
    if (line) return line;
  }
  return "";
};
const parseVehicleWikitext = (rawText = "") => {
  const start = rawText.includes("===Contents===") ? rawText.indexOf("===Contents===") : 0;
  const text = rawText.slice(start);
  const lines = text.split("\n");
  const groups = new Map();
  let headers = [];
  let currentGroup = "Lista completa";
  let columnIndex = 0;
  let inTable = false;
  let newRow = false;
  let readingHeaders = false;
  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();
    if (!line) return;
    if (/^\{\|/.test(line)) {
      inTable = true;
      headers = [];
      columnIndex = 0;
      return;
    }
    if (/^\|\}/.test(line)) {
      inTable = false;
      headers = [];
      columnIndex = 0;
      return;
    }
    if (/^==+/.test(line)) {
      const label = cleanVehicleGroupLabel(line);
      if (label) currentGroup = label;
      return;
    }
    if (inTable && /^\|-/.test(line)) {
      columnIndex = 0;
      newRow = true;
      readingHeaders = false;
      return;
    }
    if (/^!/.test(line)) {
      const label = cleanVehicleGroupLabel(line);
      if (label) {
        if (newRow && !readingHeaders) {
          headers = [];
          readingHeaders = true;
        }
        headers.push(label);
      }
      return;
    }
    if (inTable && /^\|/.test(line)) {
      newRow = false;
      readingHeaders = false;
      if (!line.includes("[[") || /^\|colspan/i.test(line)) {
        if (headers.length) currentGroup = headers[Math.min(columnIndex, headers.length - 1)];
        columnIndex += 1;
      }
      if (/^\|\[\[/.test(line)) {
        const next = nextNonEmptyLine(lines, index + 1);
        const item = extractVehicleItemFromLine(line);
        if (/^\|\[\[(Image|File):/i.test(next)) addVehicleGroupItem(groups, currentGroup, item ? {
          ...item,
          imageTitle: item.imageTitle || extractVehicleImageTitle(next)
        } : item);
      } else {
        addVehicleGroupItem(groups, currentGroup, extractVehicleItemFromLine(line));
      }
      return;
    }
    if (/^\*\[\[/.test(line)) addVehicleGroupItem(groups, currentGroup, extractVehicleItemFromLine(line));
  });
  return [...groups.entries()].map(([label, items]) => ({
    label,
    items: [...items.values()].sort((a, b) => vehicleItemName(a).localeCompare(vehicleItemName(b), "pt-BR"))
  })).filter(group => group.items.length).sort((a, b) => a.label.localeCompare(b.label, "pt-BR"));
};
const normalizeVehicleTitle = (title = "") => title.replace(/\s+\((2D|3D|HD) Universe\)$/i, "").replace(/^Beta Vehicles.*$/i, "").trim();
const chunkVehicleTitles = (items, size = 45) => {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) chunks.push(items.slice(index, index + size));
  return chunks;
};
const loadVehiclePageMediaMap = async titles => {
  const uniqueTitles = [...new Set(titles.filter(Boolean))];
  const mediaByTitle = new Map();
  await Promise.all(chunkVehicleTitles(uniqueTitles).map(async chunk => {
    const data = await fetch(vehicleApiUrl({
      action: "query",
      prop: "pageimages",
      piprop: "thumbnail",
      pithumbsize: "360",
      redirects: "1",
      titles: chunk.join("|")
    })).then(response => response.json());
    const redirectsToPage = new Map();
    asList(data?.query?.redirects).forEach(redirect => {
      const target = normalizeText(redirect.to);
      if (!redirectsToPage.has(target)) redirectsToPage.set(target, []);
      redirectsToPage.get(target).push(redirect.from);
    });
    Object.values(data?.query?.pages || {}).forEach(page => {
      const src = page?.thumbnail?.source;
      if (!src) return;
      const media = vehicleMediaFromSource(page.title, page.title, src);
      mediaByTitle.set(normalizeText(page.title), media);
      asList(redirectsToPage.get(normalizeText(page.title))).forEach(from => {
        mediaByTitle.set(normalizeText(from), media);
      });
    });
  }));
  return mediaByTitle;
};
const loadVehicleFileMediaMap = async fileTitles => {
  const uniqueTitles = [...new Set(fileTitles.filter(Boolean))];
  const mediaByFile = new Map();
  await Promise.all(chunkVehicleTitles(uniqueTitles).map(async chunk => {
    const data = await fetch(vehicleApiUrl({
      action: "query",
      prop: "imageinfo",
      iiprop: "url",
      iiurlwidth: "360",
      titles: chunk.join("|")
    })).then(response => response.json());
    Object.values(data?.query?.pages || {}).forEach(page => {
      const src = page?.imageinfo?.[0]?.thumburl || page?.imageinfo?.[0]?.url;
      if (!src) return;
      mediaByFile.set(normalizeText(page.title), vehicleMediaFromSource(page.title.replace(/^File:/i, ""), page.title, src));
    });
  }));
  return mediaByFile;
};
const vehicleImageNeedlesByGameId = {
  "gta-1": ["GTA1"],
  "london-1969": ["GTAL69", "GTAL"],
  "london-1961": ["GTAL61", "GTAL"],
  "gta-2": ["GTA2"],
  "gta-iii": ["GTA3", "GTAIII"],
  "vice-city": ["GTAVC"],
  "san-andreas": ["GTASA"],
  "gta-advance": ["GTAA"],
  "liberty-city-stories": ["GTALCS"],
  "vice-city-stories": ["GTAVCS"],
  "gta-iv": ["GTAIV", "GTA4"],
  "lost-and-damned": ["TLAD"],
  "ballad-gay-tony": ["TBoGT", "TBOGT"],
  "chinatown-wars": ["GTACW"],
  "gta-v": ["GTAV"],
  "gta-online": ["GTAO", "GTAV"],
  "trilogy-definitive": ["GTAIII", "GTAVC", "GTASA"],
  "gta-vi": ["GTAVI"]
};
const vehiclePageAliasesByName = {
  "bati 801rr": ["Bati 800"],
  "borner hearse": ["Romero Hearse"],
  "breakdown truck": ["Repair Van"],
  "burrito": ["Burrito (HD Universe)", "Burrito (second generation)"],
  "lawn mower": ["Mower"],
  "trailer": ["Trailer (car carrier)"]
};
const vehicleFallbackMediaByGameAndName = {
  "gta-vi": {
    "trafego urbano moderno em vice city": vehicleMediaFromSource("trafego urbano moderno em Vice City", "Vehicles in GTA VI", "https://static.wikia.nocookie.net/gtawiki/images/9/9f/BuffaloSTX-GTAVI-Trailer1.png/revision/latest?cb=20250110080757"),
    "carros e picapes de leonida em trailers screenshots": vehicleMediaFromSource("carros e picapes de Leonida", "Vehicles in GTA VI", "https://static.wikia.nocookie.net/gtawiki/images/9/9d/Bison-GTAVI-OfficialScreenshot-Grassrivers04.png/revision/latest/scale-to-width-down/360?cb=20250507051146"),
    "barcos e veiculos costeiros": vehicleMediaFromSource("barcos e veiculos costeiros", "Vehicles in GTA VI", "https://static.wikia.nocookie.net/gtawiki/images/d/d8/Cruiser-GTAVI-OfficialScreenshot-LeonidaKeys02.png/revision/latest/scale-to-width-down/360?cb=20250527131704"),
    "viaturas e perseguicoes policiais": vehicleMediaFromSource("viaturas e perseguicoes policiais", "Vehicles in GTA VI", "https://static.wikia.nocookie.net/gtawiki/images/b/b1/BuffaloSTXPursuit-GTAVI-Trailer1.png/revision/latest/scale-to-width-down/360?cb=20250306090033"),
    "aeronaves e vida de aeroporto ceu vistas em material promocional": vehicleMediaFromSource("aeronaves em material promocional de GTA VI", "Vehicles in GTA VI", "https://static.wikia.nocookie.net/gtawiki/images/d/df/Dodo-GTAVI-OfficialScreenshot-LeonidaKeys01.png/revision/latest/scale-to-width-down/360?cb=20250508205843")
  }
};
const contextualVehicleMedia = (item, vehicle) => {
  const direct = vehicleFallbackMediaByGameAndName[vehicle?.id]?.[normalizeText(vehicleItemName(item))];
  if (direct) return direct;
  if (!vehicle?.media) return null;
  return {
    ...vehicle.media,
    alt: `Imagem contextual relacionada a ${vehicleItemName(item)}`,
    caption: `${vehicle.media.caption || "GTA"} - contexto visual`
  };
};
const vehicleUniversePageSuffix = vehicle => {
  if (vehicle?.universe?.includes("2D")) return "2D Universe";
  if (vehicle?.universe?.includes("3D")) return "3D Universe";
  if (vehicle?.universe?.includes("HD")) return "HD Universe";
  return "";
};
const vehiclePageCandidatesForItem = (item, vehicle) => {
  const name = vehicleItemName(item);
  const pageTitle = vehicleItemPageTitle(item);
  const suffix = vehicleUniversePageSuffix(vehicle);
  const aliases = vehiclePageAliasesByName[normalizeText(name)] || [];
  return [...new Set([pageTitle, name, suffix ? `${name} (${suffix})` : "", ...aliases].filter(Boolean))];
};
const vehicleFileStemCandidates = (name = "", seen = new Set()) => {
  const ascii = String(name).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const key = normalizeText(ascii);
  if (seen.has(key)) return [];
  seen.add(key);
  const aliases = vehiclePageAliasesByName[key] || [];
  return [...new Set([ascii.replace(/\s+x\s+/gi, "x").replace(/[^a-z0-9-]/gi, ""), ascii.replace(/[^a-z0-9]/gi, ""), ascii.replace(/\s+/g, "").replace(/[^a-z0-9-]/gi, ""), ...aliases.flatMap(alias => vehicleFileStemCandidates(alias, seen))].filter(Boolean))];
};
const vehicleFileCandidatesForItem = (item, vehicle) => {
  const codes = vehicleImageNeedlesByGameId[vehicle?.id] || [];
  const stems = vehicleFileStemCandidates(vehicleItemName(item));
  const suffixes = [".png", ".jpg", "-front.png", "-front.jpg", "-Front.png", "-Front.jpg", "-FrontQuarter.png", "-FrontQuarter.jpg", "-front-Sprunk.png"];
  const candidates = [];
  stems.forEach(stem => {
    codes.forEach(code => {
      suffixes.forEach(suffix => candidates.push(`File:${stem}-${code}${suffix}`));
    });
  });
  return [...new Set(candidates)];
};
const vehicleImageScore = (fileTitle = "", item, vehicle) => {
  const title = normalizeText(fileTitle);
  if (/site logo|invisiblehero|blips|badge|emblem|map|location|poster|advert|livery|dashboard|engine|inside|rear|side|top|underside/.test(title)) return -100;
  let score = 0;
  const needles = vehicleImageNeedlesByGameId[vehicle?.id] || [];
  needles.forEach(needle => {
    if (title.includes(normalizeText(needle))) score += 80;
  });
  const stem = normalizeText(vehicleItemName(item));
  const compactStem = normalizeText(vehicleItemName(item).replace(/[^a-z0-9]/gi, ""));
  if (stem && title.includes(stem)) score += 35;
  if (compactStem && title.includes(compactStem)) score += 35;
  if (/front|frontquarter|ingame|screenshot/.test(title)) score += 12;
  if (/png|jpg|jpeg/.test(title)) score += 3;
  return score;
};
const loadVehicleGalleryMediaByItem = async (items, vehicle) => {
  const titles = [...new Set(items.flatMap(item => vehiclePageCandidatesForItem(item, vehicle)).filter(Boolean))];
  const itemByTitle = new Map();
  items.forEach(item => {
    vehiclePageCandidatesForItem(item, vehicle).forEach(title => itemByTitle.set(normalizeText(title), item));
  });
  const chosenFileByItem = new Map();
  await Promise.all(chunkVehicleTitles(titles).map(async chunk => {
    const data = await fetch(vehicleApiUrl({
      action: "query",
      prop: "images",
      imlimit: "80",
      redirects: "1",
      titles: chunk.join("|")
    })).then(response => response.json());
    const redirectsToPage = new Map();
    asList(data?.query?.redirects).forEach(redirect => {
      const target = normalizeText(redirect.to);
      if (!redirectsToPage.has(target)) redirectsToPage.set(target, []);
      redirectsToPage.get(target).push(redirect.from);
    });
    Object.values(data?.query?.pages || {}).forEach(page => {
      const item = itemByTitle.get(normalizeText(page.title)) || asList(redirectsToPage.get(normalizeText(page.title))).map(from => itemByTitle.get(normalizeText(from))).find(Boolean);
      if (!item) return;
      const images = asList(page.images).map(image => image.title).filter(Boolean);
      const best = images.map(title => ({
        title,
        score: vehicleImageScore(title, item, vehicle)
      })).filter(entry => entry.score > 0).sort((a, b) => b.score - a.score)[0];
      if (best) chosenFileByItem.set(vehicleItemKey(item), best.title);
    });
  }));
  const fileMedia = await loadVehicleFileMediaMap([...chosenFileByItem.values()]);
  const mediaByItem = new Map();
  chosenFileByItem.forEach((fileTitle, itemKey) => {
    if (fileMedia.has(normalizeText(fileTitle))) mediaByItem.set(itemKey, fileMedia.get(normalizeText(fileTitle)));
  });
  return mediaByItem;
};
const loadVehicleHeuristicMediaByItem = async (items, vehicle) => {
  const candidateByItem = new Map();
  const allCandidates = [];
  items.forEach(item => {
    const candidates = vehicleFileCandidatesForItem(item, vehicle);
    candidateByItem.set(vehicleItemKey(item), candidates);
    allCandidates.push(...candidates);
  });
  const fileMedia = await loadVehicleFileMediaMap(allCandidates);
  const mediaByItem = new Map();
  items.forEach(item => {
    const found = asList(candidateByItem.get(vehicleItemKey(item))).find(candidate => fileMedia.has(normalizeText(candidate)));
    if (!found) return;
    const media = fileMedia.get(normalizeText(found));
    mediaByItem.set(vehicleItemKey(item), {
      ...media,
      alt: `Imagem de ${vehicleItemName(item)}`,
      source: vehicleWikiPageUrl(vehicleItemPageTitle(item)),
      caption: `GTA Wiki - ${vehicleItemName(item)}`
    });
  });
  return mediaByItem;
};
const hydrateVehicleGroupMedia = async (groups, vehicle) => {
  const items = groups.flatMap(group => asList(group.items));
  const fileMedia = await loadVehicleFileMediaMap(items.map(item => item?.imageTitle));
  const galleryMedia = await loadVehicleGalleryMediaByItem(items, vehicle);
  const pageMedia = await loadVehiclePageMediaMap(items.flatMap(item => vehiclePageCandidatesForItem(item, vehicle)));
  const missingAfterKnown = items.filter(item => !vehicleItemMedia(item) && !fileMedia.get(normalizeText(item?.imageTitle || "")) && !galleryMedia.get(vehicleItemKey(item)) && !vehiclePageCandidatesForItem(item, vehicle).some(candidate => pageMedia.get(normalizeText(candidate))));
  const heuristicMedia = await loadVehicleHeuristicMediaByItem(missingAfterKnown, vehicle);
  return groups.map(group => ({
    ...group,
    items: asList(group.items).map(item => {
      const normalizedItem = typeof item === "string" ? {
        name: item,
        pageTitle: item
      } : item;
      const media = vehicleItemMedia(normalizedItem) || fileMedia.get(normalizeText(normalizedItem.imageTitle || "")) || galleryMedia.get(vehicleItemKey(normalizedItem)) || heuristicMedia.get(vehicleItemKey(normalizedItem)) || vehiclePageCandidatesForItem(normalizedItem, vehicle).map(candidate => pageMedia.get(normalizeText(candidate))).find(Boolean) || contextualVehicleMedia(normalizedItem, vehicle);
      return {
        ...normalizedItem,
        media
      };
    })
  }));
};
const loadVehicleCategoryGroup = async categoryTitle => {
  const items = new Map();
  let cmcontinue = "";
  do {
    const data = await fetch(vehicleApiUrl({
      action: "query",
      generator: "categorymembers",
      gcmtitle: categoryTitle,
      gcmnamespace: "0",
      gcmlimit: "500",
      prop: "pageimages",
      piprop: "thumbnail",
      pithumbsize: "360",
      ...(cmcontinue ? {
        gcmcontinue: cmcontinue
      } : {})
    })).then(response => response.json());
    Object.values(data?.query?.pages || {}).forEach(page => {
      const title = normalizeVehicleTitle(page.title);
      if (!title || /^Vehicles in/i.test(title)) return;
      const item = {
        name: title,
        pageTitle: page.title,
        media: vehicleMediaFromSource(title, page.title, page.thumbnail?.source)
      };
      items.set(vehicleItemKey(item), item);
    });
    cmcontinue = data?.continue?.gcmcontinue || "";
  } while (cmcontinue);
  return [{
    label: "Lista completa",
    items: [...items.values()].sort((a, b) => vehicleItemName(a).localeCompare(vehicleItemName(b), "pt-BR"))
  }];
};
const loadVehicleGroups = async vehicle => {
  const cacheKey = `${vehicle.id}:${vehicle.apiPage || vehicle.categoryTitle || "fallback"}`;
  if (vehicleGroupCache.has(cacheKey)) return vehicleGroupCache.get(cacheKey);
  let groups = [];
  if (vehicle.categoryTitle) {
    groups = await loadVehicleCategoryGroup(vehicle.categoryTitle);
  } else if (vehicle.apiPage) {
    const data = await fetch(vehicleApiUrl({
      action: "parse",
      prop: "wikitext",
      redirects: "1",
      page: vehicle.apiPage
    })).then(response => response.json());
    groups = parseVehicleWikitext(data?.parse?.wikitext?.["*"] || "");
  }
  if (!groups.length && vehicle.fallbackGroups) groups = vehicle.fallbackGroups;
  groups = await hydrateVehicleGroupMedia(groups, vehicle);
  vehicleGroupCache.set(cacheKey, groups);
  return groups;
};
const vehicleGameFor = vehicle => gamesData.find(game => game.id === vehicle.gameId) || null;
const matchesVehicleType = (vehicle, type) => {
  if (type === "all") return true;
  const hay = normalizeText([vehicle.coverage, vehicle.tags, vehicle.highlights, vehicle.summary].join(" "));
  const tests = {
    land: ["carro", "van", "caminh", "sedan", "suv", "terrestre", "off-road"],
    bikes: ["moto", "biciclet", "bike", "cycles", "bmx"],
    air: ["aviao", "avioes", "aereo", "aereos", "aeronave", "helicoptero", "helicopteros", "hydra", "lazer"],
    water: ["barco", "barcos", "submers", "costa", "naval"],
    service: ["servico", "emergencia", "policia", "taxi", "governo", "viatura"],
    weaponized: ["militar", "armado", "blindado", "apc", "oppressor", "weapon"],
    online: ["online", "dlc", "economia viva"]
  };
  return (tests[type] || []).some(needle => hay.includes(needle));
};
const VehicleDossierCard = ({
  vehicle,
  onOpen
}) => {
  const game = vehicleGameFor(vehicle);
  const media = vehicle.media || game?.media;
  return React.createElement("article", {
    className: "card dossier-vehicle-card"
  }, React.createElement(Corners, null), React.createElement("div", {
    className: `dossier-vehicle-media ${universeTone(vehicle.universe)} ${media ? "has-official" : ""}`
  }, media ? React.createElement(OfficialMedia, {
    media: media,
    className: "dossier-vehicle-official"
  }) : React.createElement("div", {
    className: "dossier-cover-map"
  }), React.createElement("div", {
    className: "dossier-vehicle-badge"
  }, React.createElement(DossierIcon, {
    type: "car"
  }), React.createElement("span", null, vehicle.totalLabel))), React.createElement("div", {
    className: "dossier-card-body"
  }, React.createElement("div", {
    className: "dossier-card-kicker"
  }, vehicle.universe, " \xB7 frota em ", vehicle.storyYear), React.createElement("h3", null, vehicle.title), React.createElement("p", null, vehicle.summary), React.createElement(MetaGrid, {
    rows: [["Cidade", vehicle.city], ["Cobertura", asList(vehicle.coverage).slice(0, 5)], ["Ícones", asList(vehicle.highlights).slice(0, 5)]]
  }), React.createElement(DossierChips, {
    items: vehicle.tags,
    limit: 6
  }), React.createElement("button", {
    className: "btn",
    onClick: () => onOpen({
      type: "vehicle",
      item: {
        ...vehicle,
        media
      }
    })
  }, "Abrir frota")));
};
const VehiclesDossierSection = ({
  onOpenDossier
}) => {
  const vehicles = window.vehicleDossierData || [];
  const [query, setQuery] = React.useState("");
  const [universe, setUniverse] = React.useState("all");
  const [type, setType] = React.useState("all");
  const typeOptions = [["all", "Todos"], ["land", "Terrestres"], ["bikes", "Motos/bikes"], ["air", "Aéreos"], ["water", "Água"], ["service", "Serviço/emergência"], ["weaponized", "Militar/armado"], ["online", "Online/DLC"]];
  const filtered = vehicles.filter(vehicle => searchRecord(vehicle, query) && (universe === "all" || vehicle.universe === universe) && matchesVehicleType(vehicle, type));
  return React.createElement("section", {
    id: "vehicles",
    className: "dossier-section dossier-shell vehicle-section"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(DossierSectionHead, {
    eyebrow: "Garagem criminal",
    title: "Ve\xEDculos por jogo",
    accent: "var(--copper)",
    right: `${filtered.length} arquivos de frota`
  }), React.createElement("div", {
    className: "dossier-vehicle-intro card"
  }, React.createElement(Corners, null), React.createElement("div", null, React.createElement("h3", null, "Do top-down ao Online"), React.createElement("p", null, "Cada arquivo abaixo abre a frota do jogo e carrega a lista detalhada da fonte: carros, motos, bicicletas, avi\xF5es, helic\xF3pteros, barcos, submarinos, trens, viaturas, ve\xEDculos militares, especiais e varia\xE7\xF5es quando a pr\xF3pria fonte separa esses modelos.")), React.createElement("div", {
    className: "dossier-vehicle-scan"
  }, React.createElement("span", null, "live wiki fetch"), React.createElement("strong", null, "lazy loading"), React.createElement("small", null, "listas completas sob demanda"))), React.createElement("div", {
    className: "dossier-filterbar wide"
  }, React.createElement("label", null, React.createElement("span", null, "Busca"), React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Jogo, cidade, avi\xE3o, bicicleta, Rhino..."
  })), React.createElement("label", null, React.createElement("span", null, "Universo"), React.createElement("select", {
    value: universe,
    onChange: e => setUniverse(e.target.value)
  }, React.createElement("option", {
    value: "all"
  }, "Todos"), universeData.map(u => React.createElement("option", {
    key: u.name
  }, u.name)))), React.createElement("label", null, React.createElement("span", null, "Tipo"), React.createElement("select", {
    value: type,
    onChange: e => setType(e.target.value)
  }, typeOptions.map(([id, label]) => React.createElement("option", {
    key: id,
    value: id
  }, label))))), React.createElement("div", {
    className: "dossier-vehicle-grid"
  }, filtered.map(vehicle => React.createElement(VehicleDossierCard, {
    key: vehicle.id,
    vehicle: vehicle,
    onOpen: onOpenDossier
  })))));
};
const weaponGroupCache = new Map();
const weaponWikiPageUrl = (page = "") => `https://gta.fandom.com/wiki/${encodeURIComponent(String(page).replace(/\s+/g, "_"))}`;
const weaponMediaFromSource = (name, pageTitle, src) => src ? {
  src,
  alt: `Imagem de ${name}`,
  source: weaponWikiPageUrl(pageTitle || name),
  caption: `GTA Wiki - ${name}`,
  credit: "Imagem via GTA Wiki / Fandom; direitos dos assets pertencem aos respectivos titulares.",
  fit: "contain",
  position: "center"
} : null;
const weaponItemName = item => typeof item === "string" ? item : item?.name || "";
const weaponItemPageTitle = item => typeof item === "string" ? item : item?.pageTitle || item?.name || "";
const weaponItemMedia = item => typeof item === "string" ? null : item?.media || null;
const weaponItemKey = item => normalizeText(`${weaponItemPageTitle(item)} ${weaponItemName(item)}`);
const weaponContentSlice = (rawText = "") => {
  const starts = ["===Contents===", "==Contents==", "== List of weapons ==", "== Weapons returning", "==Description=="];
  const startCandidates = starts.map(marker => rawText.indexOf(marker)).filter(index => index >= 0);
  const start = startCandidates.length ? Math.min(...startCandidates) : 0;
  const tail = rawText.slice(start);
  const endMarkers = ["\n==Gallery==", "\n==Interactive Map==", "\n==Additional Information==", "\n==Beta Weapons==", "\n== Deleted weapons ==", "\n==References==", "\n==Navigation=="];
  const endCandidates = endMarkers.map(marker => tail.indexOf(marker)).filter(index => index > 0);
  return endCandidates.length ? tail.slice(0, Math.min(...endCandidates)) : tail;
};
const cleanWeaponGroupLabel = (line = "") => {
  let label = String(line).trim().replace(/^=+|=+$/g, "").replace(/^!+/, "");
  if (/^\s*(colspan|rowspan|style|width|scope)/i.test(label)) label = label.split("|").pop();
  label = cleanWikiMarkup(label);
  if (/^(reference|meaning|description|total|available|contents|key|table|weapons|weapon names?|name|image|slot|damage per round|rounds per ammunition unit|features?|type|class|description)$/i.test(label)) return "";
  if (/gallery|navigation|references|trivia|see also|interactive map|additional information/i.test(label)) return "";
  return label;
};
const extractWeaponNameFromLine = (line = "") => {
  const item = extractWeaponItemFromLine(line);
  return weaponItemName(item);
};
const extractWeaponImageTitle = (line = "") => {
  const match = String(line).match(/\[\[:?(?:Image|File):([^\]|]+)(?:\|[^\]]*)?\]\]/i);
  return match ? `File:${match[1].trim()}` : "";
};
const extractWeaponItemFromLine = (line = "") => {
  if (!line.includes("[[")) return null;
  const links = [...String(line).matchAll(/\[\[:?([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g)];
  const link = links.find(match => !/^(file|image|category|pl|ru|es|fr|de|pt|zh):/i.test(match[1].trim()));
  if (!link) return null;
  const pageTitle = cleanWikiMarkup(link[1]).trim();
  let name = cleanWikiMarkup(link[2] || link[1]).replace(/\s+\(Slot\s+\d+\)/i, "").replace(/\s+\(PS2 only\)/i, " (PS2 only)").replace(/\s+\(Standard & Explosive\)/i, " (Standard & Explosive)").trim().replace(/\.$/, "");
  if (/^(weapons in|grand theft auto|file:|image:|weapon wheel|ammu-nation|random pedestrian|mission|user|cutscene weapon|gameplay weapon)$/i.test(name)) return "";
  return {
    name,
    pageTitle,
    imageTitle: extractWeaponImageTitle(line)
  };
};
const addWeaponGroupItem = (groups, label, item) => {
  const normalizedItem = typeof item === "string" ? {
    name: item,
    pageTitle: item
  } : item;
  if (!weaponItemName(normalizedItem)) return;
  const groupLabel = label || "Lista completa";
  if (!groups.has(groupLabel)) groups.set(groupLabel, new Map());
  groups.get(groupLabel).set(weaponItemKey(normalizedItem), normalizedItem);
};
const parseWeaponWikitext = (rawText = "") => {
  const text = weaponContentSlice(rawText);
  const lines = text.split("\n");
  const groups = new Map();
  let headers = [];
  let currentGroup = "Lista completa";
  let columnIndex = 0;
  let inTable = false;
  let newRow = false;
  let readingHeaders = false;
  lines.forEach((rawLine, index) => {
    const line = rawLine.trim();
    if (!line) return;
    if (/^\{\|/.test(line)) {
      inTable = true;
      headers = [];
      columnIndex = 0;
      return;
    }
    if (/^\|\}/.test(line)) {
      inTable = false;
      headers = [];
      columnIndex = 0;
      return;
    }
    if (/^==+/.test(line)) {
      const label = cleanWeaponGroupLabel(line);
      if (label) currentGroup = label;
      return;
    }
    if (inTable && /^\|-/.test(line)) {
      columnIndex = 0;
      newRow = true;
      readingHeaders = false;
      return;
    }
    if (/^!/.test(line)) {
      const label = cleanWeaponGroupLabel(line);
      if (label) {
        if (newRow && !readingHeaders) {
          headers = [];
          readingHeaders = true;
        }
        headers.push(label);
      }
      return;
    }
    if (inTable && /^\|$/.test(line)) {
      newRow = false;
      readingHeaders = false;
      if (headers.length) currentGroup = headers[Math.min(columnIndex, headers.length - 1)];
      columnIndex += 1;
      return;
    }
    if (inTable && /^\|/.test(line)) {
      newRow = false;
      readingHeaders = false;
      const item = extractWeaponItemFromLine(line);
      const next = nextNonEmptyLine(lines, index + 1);
      addWeaponGroupItem(groups, currentGroup, /^\|\[\[(Image|File):/i.test(next) && item ? {
        ...item,
        imageTitle: item.imageTitle || extractWeaponImageTitle(next)
      } : item);
      return;
    }
    if (/^\*\[\[/.test(line)) addWeaponGroupItem(groups, currentGroup, extractWeaponItemFromLine(line));
  });
  return [...groups.entries()].map(([label, items]) => ({
    label,
    items: [...items.values()].sort((a, b) => weaponItemName(a).localeCompare(weaponItemName(b), "pt-BR"))
  })).filter(group => group.items.length).sort((a, b) => a.label.localeCompare(b.label, "pt-BR"));
};
const normalizeWeaponTitle = (title = "") => title.replace(/\s+\((2D|3D|HD) Universe\)$/i, "").replace(/^Beta Weapons.*$/i, "").trim();
const weaponImageNeedlesByGameId = {
  "gta-1": ["GTA1"],
  "london-1969": ["GTAL69", "GTAL"],
  "london-1961": ["GTAL61", "GTAL"],
  "gta-2": ["GTA2"],
  "gta-iii": ["GTA3", "GTAIII"],
  "vice-city": ["GTAVC"],
  "san-andreas": ["GTASA"],
  "gta-advance": ["GTAA"],
  "liberty-city-stories": ["GTALCS"],
  "vice-city-stories": ["GTAVCS"],
  "gta-iv": ["GTAIV", "GTA4"],
  "lost-and-damned": ["TLAD"],
  "ballad-gay-tony": ["TBoGT", "TBOGT"],
  "chinatown-wars": ["GTACW"],
  "gta-v": ["GTAV"],
  "gta-online": ["GTAO", "GTAV"],
  "trilogy-definitive": ["GTAIII", "GTAVC", "GTASA"],
  "gta-vi": ["GTAVI"]
};
const weaponPageAliasesByName = {
  "ak 47": ["AK47"],
  "automatic 9mm": ["Automatic 9mm"],
  "car bomb": ["Car Bomb"],
  "dual pistol": ["Pistol (2D Universe)"],
  "fist": ["Melee Attack", "Fists"],
  "heat seeking rocket launcher": ["Heat-Seeking Rocket Launcher"],
  "micro smg": ["Micro SMG (3D Universe)", "Micro SMG (HD Universe)"],
  "molotov cocktails": ["Molotov Cocktails"],
  "pistol 44": ["Pistol .44"],
  "s uzi machine gun": ["Machine Gun (2D Universe)", "Uzi"],
  "satchel charges": ["Satchel Charges"],
  "sawn off shotgun": ["Sawn-Off Shotgun"],
  "silenced 9mm": ["Silenced 9mm"],
  "sticky bombs": ["Sticky Bombs", "Sticky Bomb"],
  "tec9": ["Tec9"],
  "up n atomizer": ["Up-n-Atomizer"]
};
const contextualWeaponMedia = (item, weapon) => {
  if (!weapon?.media) return null;
  return {
    ...weapon.media,
    alt: `Imagem contextual relacionada a ${weaponItemName(item)}`,
    caption: `${weapon.media.caption || "GTA Wiki"} - contexto visual`
  };
};
const weaponPageCandidatesForItem = (item, weapon) => {
  const name = weaponItemName(item);
  const pageTitle = weaponItemPageTitle(item);
  const suffix = vehicleUniversePageSuffix(weapon);
  const aliases = weaponPageAliasesByName[normalizeText(name)] || [];
  return [...new Set([pageTitle, name, suffix ? `${name} (${suffix})` : "", ...aliases].filter(Boolean))];
};
const weaponFileStemCandidates = (name = "", seen = new Set()) => {
  const ascii = String(name).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const key = normalizeText(ascii);
  if (seen.has(key)) return [];
  seen.add(key);
  const aliases = weaponPageAliasesByName[key] || [];
  return [...new Set([ascii.replace(/\.44/g, "44").replace(/[^a-z0-9-]/gi, ""), ascii.replace(/\.44/g, "44").replace(/[^a-z0-9]/gi, ""), ascii.replace(/\s+/g, "").replace(/[^a-z0-9-]/gi, ""), ...aliases.flatMap(alias => weaponFileStemCandidates(alias, seen))].filter(Boolean))];
};
const weaponFileCandidatesForItem = (item, weapon) => {
  const codes = weaponImageNeedlesByGameId[weapon?.id] || [];
  const stems = weaponFileStemCandidates(weaponItemName(item));
  const suffixes = [".png", ".jpg", "-icon.png", "-Icon.png", "-HUD.png", "-HUDIcon.png", "-HUDicon.png", "-PS2-icon.png", "-PickupIcon.png", "-RSCStats.PNG"];
  const candidates = [];
  stems.forEach(stem => {
    codes.forEach(code => {
      suffixes.forEach(suffix => candidates.push(`File:${stem}-${code}${suffix}`));
    });
  });
  return [...new Set(candidates)];
};
const weaponImageScore = (fileTitle = "", item, weapon) => {
  const title = normalizeText(fileTitle);
  if (/site logo|invisiblehero|blips|location|locationsmap|map|poster|advert|variant|scope|suppressor|grip|mag|dashboard|badge/.test(title)) return -100;
  let score = 0;
  const needles = weaponImageNeedlesByGameId[weapon?.id] || [];
  needles.forEach(needle => {
    if (title.includes(normalizeText(needle))) score += 80;
  });
  const stem = normalizeText(weaponItemName(item));
  const compactStem = normalizeText(weaponItemName(item).replace(/[^a-z0-9]/gi, ""));
  if (stem && title.includes(stem)) score += 35;
  if (compactStem && title.includes(compactStem)) score += 35;
  if (/icon|hud|model|holding|aiming|rgsc|rscstats|ingame|pickup/.test(title)) score += 14;
  if (/png|jpg|jpeg/.test(title)) score += 3;
  return score;
};
const loadWeaponPageMediaMap = async titles => {
  const uniqueTitles = [...new Set(titles.filter(Boolean))];
  const mediaByTitle = new Map();
  await Promise.all(chunkVehicleTitles(uniqueTitles).map(async chunk => {
    const data = await fetch(vehicleApiUrl({
      action: "query",
      prop: "pageimages",
      piprop: "thumbnail",
      pithumbsize: "360",
      redirects: "1",
      titles: chunk.join("|")
    })).then(response => response.json());
    const redirectsToPage = new Map();
    asList(data?.query?.redirects).forEach(redirect => {
      const target = normalizeText(redirect.to);
      if (!redirectsToPage.has(target)) redirectsToPage.set(target, []);
      redirectsToPage.get(target).push(redirect.from);
    });
    Object.values(data?.query?.pages || {}).forEach(page => {
      const src = page?.thumbnail?.source;
      if (!src) return;
      const media = weaponMediaFromSource(page.title, page.title, src);
      mediaByTitle.set(normalizeText(page.title), media);
      asList(redirectsToPage.get(normalizeText(page.title))).forEach(from => {
        mediaByTitle.set(normalizeText(from), media);
      });
    });
  }));
  return mediaByTitle;
};
const loadWeaponFileMediaMap = async fileTitles => {
  const uniqueTitles = [...new Set(fileTitles.filter(Boolean))];
  const mediaByFile = new Map();
  await Promise.all(chunkVehicleTitles(uniqueTitles).map(async chunk => {
    const data = await fetch(vehicleApiUrl({
      action: "query",
      prop: "imageinfo",
      iiprop: "url",
      iiurlwidth: "360",
      titles: chunk.join("|")
    })).then(response => response.json());
    Object.values(data?.query?.pages || {}).forEach(page => {
      const src = page?.imageinfo?.[0]?.thumburl || page?.imageinfo?.[0]?.url;
      if (!src) return;
      mediaByFile.set(normalizeText(page.title), weaponMediaFromSource(page.title.replace(/^File:/i, ""), page.title, src));
    });
  }));
  return mediaByFile;
};
const loadWeaponGalleryMediaByItem = async (items, weapon) => {
  const titles = [...new Set(items.flatMap(item => weaponPageCandidatesForItem(item, weapon)).filter(Boolean))];
  const itemByTitle = new Map();
  items.forEach(item => {
    weaponPageCandidatesForItem(item, weapon).forEach(title => itemByTitle.set(normalizeText(title), item));
  });
  const chosenFileByItem = new Map();
  await Promise.all(chunkVehicleTitles(titles).map(async chunk => {
    const data = await fetch(vehicleApiUrl({
      action: "query",
      prop: "images",
      imlimit: "80",
      redirects: "1",
      titles: chunk.join("|")
    })).then(response => response.json());
    const redirectsToPage = new Map();
    asList(data?.query?.redirects).forEach(redirect => {
      const target = normalizeText(redirect.to);
      if (!redirectsToPage.has(target)) redirectsToPage.set(target, []);
      redirectsToPage.get(target).push(redirect.from);
    });
    Object.values(data?.query?.pages || {}).forEach(page => {
      const item = itemByTitle.get(normalizeText(page.title)) || asList(redirectsToPage.get(normalizeText(page.title))).map(from => itemByTitle.get(normalizeText(from))).find(Boolean);
      if (!item) return;
      const images = asList(page.images).map(image => image.title).filter(Boolean);
      const best = images.map(title => ({
        title,
        score: weaponImageScore(title, item, weapon)
      })).filter(entry => entry.score > 0).sort((a, b) => b.score - a.score)[0];
      if (best) chosenFileByItem.set(weaponItemKey(item), best.title);
    });
  }));
  const fileMedia = await loadWeaponFileMediaMap([...chosenFileByItem.values()]);
  const mediaByItem = new Map();
  chosenFileByItem.forEach((fileTitle, itemKey) => {
    if (fileMedia.has(normalizeText(fileTitle))) mediaByItem.set(itemKey, fileMedia.get(normalizeText(fileTitle)));
  });
  return mediaByItem;
};
const loadWeaponHeuristicMediaByItem = async (items, weapon) => {
  const candidateByItem = new Map();
  const allCandidates = [];
  items.forEach(item => {
    const candidates = weaponFileCandidatesForItem(item, weapon);
    candidateByItem.set(weaponItemKey(item), candidates);
    allCandidates.push(...candidates);
  });
  const fileMedia = await loadWeaponFileMediaMap(allCandidates);
  const mediaByItem = new Map();
  items.forEach(item => {
    const found = asList(candidateByItem.get(weaponItemKey(item))).find(candidate => fileMedia.has(normalizeText(candidate)));
    if (!found) return;
    const media = fileMedia.get(normalizeText(found));
    mediaByItem.set(weaponItemKey(item), {
      ...media,
      alt: `Imagem de ${weaponItemName(item)}`,
      source: weaponWikiPageUrl(weaponItemPageTitle(item)),
      caption: `GTA Wiki - ${weaponItemName(item)}`
    });
  });
  return mediaByItem;
};
const hydrateWeaponGroupMedia = async (groups, weapon) => {
  const items = groups.flatMap(group => asList(group.items));
  const fileMedia = await loadWeaponFileMediaMap(items.map(item => item?.imageTitle));
  const galleryMedia = await loadWeaponGalleryMediaByItem(items, weapon);
  const pageMedia = await loadWeaponPageMediaMap(items.flatMap(item => weaponPageCandidatesForItem(item, weapon)));
  const missingAfterKnown = items.filter(item => !weaponItemMedia(item) && !fileMedia.get(normalizeText(item?.imageTitle || "")) && !galleryMedia.get(weaponItemKey(item)) && !weaponPageCandidatesForItem(item, weapon).some(candidate => pageMedia.get(normalizeText(candidate))));
  const heuristicMedia = await loadWeaponHeuristicMediaByItem(missingAfterKnown, weapon);
  return groups.map(group => ({
    ...group,
    items: asList(group.items).map(item => {
      const normalizedItem = typeof item === "string" ? {
        name: item,
        pageTitle: item
      } : item;
      const media = weaponItemMedia(normalizedItem) || fileMedia.get(normalizeText(normalizedItem.imageTitle || "")) || galleryMedia.get(weaponItemKey(normalizedItem)) || heuristicMedia.get(weaponItemKey(normalizedItem)) || weaponPageCandidatesForItem(normalizedItem, weapon).map(candidate => pageMedia.get(normalizeText(candidate))).find(Boolean) || contextualWeaponMedia(normalizedItem, weapon);
      return {
        ...normalizedItem,
        media
      };
    })
  }));
};
const loadWeaponCategoryGroup = async categoryTitle => {
  const items = new Map();
  let cmcontinue = "";
  do {
    const data = await fetch(vehicleApiUrl({
      action: "query",
      generator: "categorymembers",
      gcmtitle: categoryTitle,
      gcmnamespace: "0",
      gcmlimit: "500",
      prop: "pageimages",
      piprop: "thumbnail",
      pithumbsize: "360",
      ...(cmcontinue ? {
        gcmcontinue: cmcontinue
      } : {})
    })).then(response => response.json());
    Object.values(data?.query?.pages || {}).forEach(page => {
      const title = normalizeWeaponTitle(page.title);
      if (!title || /^Weapons in/i.test(title)) return;
      const item = {
        name: title,
        pageTitle: page.title,
        media: weaponMediaFromSource(title, page.title, page.thumbnail?.source)
      };
      items.set(weaponItemKey(item), item);
    });
    cmcontinue = data?.continue?.gcmcontinue || "";
  } while (cmcontinue);
  return [{
    label: "Lista completa",
    items: [...items.values()].sort((a, b) => weaponItemName(a).localeCompare(weaponItemName(b), "pt-BR"))
  }];
};
const loadWeaponGroups = async weapon => {
  const cacheKey = `${weapon.id}:${weapon.apiPage || weapon.categoryTitle || "fallback"}`;
  if (weaponGroupCache.has(cacheKey)) return weaponGroupCache.get(cacheKey);
  let groups = [];
  if (weapon.categoryTitle) {
    groups = await loadWeaponCategoryGroup(weapon.categoryTitle);
  } else if (weapon.apiPage) {
    const data = await fetch(vehicleApiUrl({
      action: "parse",
      prop: "wikitext",
      redirects: "1",
      page: weapon.apiPage
    })).then(response => response.json());
    groups = parseWeaponWikitext(data?.parse?.wikitext?.["*"] || "");
  }
  if (!groups.length && weapon.fallbackGroups) groups = weapon.fallbackGroups;
  groups = await hydrateWeaponGroupMedia(groups, weapon);
  weaponGroupCache.set(cacheKey, groups);
  return groups;
};
const weaponGameFor = weapon => gamesData.find(game => game.id === weapon.gameId) || null;
const matchesWeaponType = (weapon, type) => {
  if (type === "all") return true;
  const hay = normalizeText([weapon.coverage, weapon.tags, weapon.highlights, weapon.summary].join(" "));
  const tests = {
    melee: ["melee", "corpo", "branca", "motosserra", "katana", "fist", "baseball", "knife"],
    handgun: ["pistola", "pistol", "revolver", "handgun", ".357", ".44"],
    shotgun: ["shotgun", "spaz", "cano serrado", "sawn"],
    automatic: ["smg", "metralhadora", "rifle", "mg", "carbine", "ak", "m4", "tec"],
    sniper: ["sniper", "marksman"],
    heavy: ["pesada", "pesadas", "rpg", "rocket", "minigun", "grenade launcher", "railgun", "lança"],
    thrown: ["arremess", "grenada", "molotov", "sticky", "pipe bomb", "proximity", "tear gas"],
    special: ["especial", "utilitario", "utilit", "gifts", "camera", "spray", "paraquedas", "orbital", "alien", "mk ii", "online"]
  };
  return (tests[type] || []).some(needle => hay.includes(needle));
};
const WeaponDossierCard = ({
  weapon,
  onOpen
}) => {
  const game = weaponGameFor(weapon);
  const media = weapon.media || game?.media;
  return React.createElement("article", {
    className: "card dossier-weapon-card"
  }, React.createElement(Corners, null), React.createElement("div", {
    className: `dossier-weapon-media ${universeTone(weapon.universe)} ${media ? "has-official" : ""}`
  }, media ? React.createElement(OfficialMedia, {
    media: media,
    className: "dossier-weapon-official"
  }) : React.createElement("div", {
    className: "dossier-cover-map"
  }), React.createElement("div", {
    className: "dossier-weapon-badge"
  }, React.createElement(DossierIcon, {
    type: "weapon"
  }), React.createElement("span", null, weapon.totalLabel))), React.createElement("div", {
    className: "dossier-card-body"
  }, React.createElement("div", {
    className: "dossier-card-kicker"
  }, weapon.universe, " \xB7 arsenal em ", weapon.storyYear), React.createElement("h3", null, weapon.title), React.createElement("p", null, weapon.summary), React.createElement(MetaGrid, {
    rows: [["Cidade", weapon.city], ["Cobertura", asList(weapon.coverage).slice(0, 5)], ["Destaques", asList(weapon.highlights).slice(0, 5)]]
  }), React.createElement(DossierChips, {
    items: weapon.tags,
    limit: 6
  }), React.createElement("button", {
    className: "btn",
    onClick: () => onOpen({
      type: "weapon",
      item: {
        ...weapon,
        media
      }
    })
  }, "Abrir arsenal")));
};
const WeaponsDossierSection = ({
  onOpenDossier
}) => {
  const weapons = window.weaponDossierData || [];
  const [query, setQuery] = React.useState("");
  const [universe, setUniverse] = React.useState("all");
  const [type, setType] = React.useState("all");
  const typeOptions = [["all", "Todos"], ["melee", "Corpo a corpo"], ["handgun", "Pistolas"], ["shotgun", "Shotguns"], ["automatic", "SMG/Rifles/MG"], ["sniper", "Snipers"], ["heavy", "Pesadas"], ["thrown", "Arremessáveis"], ["special", "Especiais/Online"]];
  const filtered = weapons.filter(weapon => searchRecord(weapon, query) && (universe === "all" || weapon.universe === universe) && matchesWeaponType(weapon, type));
  return React.createElement("section", {
    id: "weapons",
    className: "dossier-section dossier-shell alt weapon-section"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(DossierSectionHead, {
    eyebrow: "Arsenal criminal",
    title: "Armas por jogo",
    accent: "var(--siren)",
    right: `${filtered.length} arquivos de arsenal`
  }), React.createElement("div", {
    className: "dossier-weapon-intro card"
  }, React.createElement(Corners, null), React.createElement("div", null, React.createElement("h3", null, "Do punho ao Orbital Cannon"), React.createElement("p", null, "Cada ficha abre o arsenal do jogo e busca a lista completa na fonte: melee, pistolas, shotguns, SMGs, rifles, snipers, armas pesadas, explosivos, itens especiais, equipamentos e armas de DLC quando a fonte separa essas classes.")), React.createElement("div", {
    className: "dossier-weapon-scan"
  }, React.createElement("span", null, "full arsenal"), React.createElement("strong", null, "wiki indexed"), React.createElement("small", null, "beta/cut separado por precis\xE3o"))), React.createElement("div", {
    className: "dossier-filterbar wide"
  }, React.createElement("label", null, React.createElement("span", null, "Busca"), React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Minigun, Katana, Mk II, Rocket Launcher..."
  })), React.createElement("label", null, React.createElement("span", null, "Universo"), React.createElement("select", {
    value: universe,
    onChange: e => setUniverse(e.target.value)
  }, React.createElement("option", {
    value: "all"
  }, "Todos"), universeData.map(u => React.createElement("option", {
    key: u.name
  }, u.name)))), React.createElement("label", null, React.createElement("span", null, "Tipo"), React.createElement("select", {
    value: type,
    onChange: e => setType(e.target.value)
  }, typeOptions.map(([id, label]) => React.createElement("option", {
    key: id,
    value: id
  }, label))))), React.createElement("div", {
    className: "dossier-weapon-grid"
  }, filtered.map(weapon => React.createElement(WeaponDossierCard, {
    key: weapon.id,
    weapon: weapon,
    onOpen: onOpenDossier
  })))));
};
const DevelopmentDossierSection = () => React.createElement("section", {
  id: "development",
  className: "dossier-section dossier-shell"
}, React.createElement("div", {
  className: "wrap"
}, React.createElement(DossierSectionHead, {
  eyebrow: "Bastidores",
  title: "Por tr\xE1s do desenvolvimento",
  accent: "var(--money)",
  right: "hist\xF3ria real separada da lore"
}), React.createElement("div", {
  className: "dossier-dev-grid"
}, developmentData.map(item => React.createElement("article", {
  key: item.id,
  className: "card dossier-dev-card"
}, React.createElement(Corners, null), React.createElement("div", {
  className: "dossier-icon-box"
}, React.createElement(DossierIcon, {
  type: "file"
})), React.createElement("div", null, React.createElement("div", {
  className: "dossier-card-kicker"
}, item.period), React.createElement("h3", null, item.title), React.createElement("p", null, item.summary), React.createElement(BulletList, {
  items: item.facts
}), React.createElement("details", {
  className: "dossier-details"
}, React.createElement("summary", null, "Notas de precis\xE3o"), Array.isArray(item.uncertainty) ? React.createElement(BulletList, {
  items: item.uncertainty
}) : React.createElement("p", null, item.uncertainty), React.createElement(SourceLinks, {
  items: item.sources
})))))), React.createElement(ConnectionsImpactSection, {
  compact: true
})));
const characterFilterOptions = ["Todos", "Protagonistas", "Antagonistas", "Aliados", "Gangues", "Governo/Polícia", "Empresários", "Máfia", "GTA Online", "GTA VI"];
const matchesCharacterFilter = (character, filter) => {
  if (filter === "Todos") return true;
  const hay = normalizeText([character.category, character.role, character.tags, character.games, character.affiliations].join(" "));
  if (filter === "GTA Online") return hay.includes("online");
  if (filter === "GTA VI") return hay.includes("gta vi");
  if (filter === "Gangues") return hay.includes("gangue") || hay.includes("families") || hay.includes("ballas");
  if (filter === "Governo/Polícia") return hay.includes("governo") || hay.includes("policia") || hay.includes("fib") || hay.includes("iaa");
  if (filter === "Empresários") return hay.includes("empresario") || hay.includes("empresários");
  if (filter === "Máfia") return hay.includes("mafia") || hay.includes("cartel") || hay.includes("triad");
  return hay.includes(normalizeText(filter.replace(/s$/, "")));
};
const CharactersDossierSection = ({
  onOpenDossier
}) => {
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState("Todos");
  const [universe, setUniverse] = React.useState("all");
  const filtered = charactersData.filter(character => searchRecord(character, query) && matchesCharacterFilter(character, filter) && (universe === "all" || character.universe === universe));
  return React.createElement("section", {
    id: "characters",
    className: "dossier-section dossier-shell alt"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(DossierSectionHead, {
    eyebrow: "Base de dados",
    title: "Dossi\xEA de personagens",
    accent: "var(--neon)",
    right: `${filtered.length} fichas ativas`
  }), React.createElement("div", {
    className: "dossier-filterbar wide"
  }, React.createElement("label", null, React.createElement("span", null, "Busca"), React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Nome, jogo, fac\xE7\xE3o, rela\xE7\xE3o..."
  })), React.createElement("label", null, React.createElement("span", null, "Filtro"), React.createElement("select", {
    value: filter,
    onChange: e => setFilter(e.target.value)
  }, characterFilterOptions.map(option => React.createElement("option", {
    key: option
  }, option)))), React.createElement("label", null, React.createElement("span", null, "Universo"), React.createElement("select", {
    value: universe,
    onChange: e => setUniverse(e.target.value)
  }, React.createElement("option", {
    value: "all"
  }, "Todos"), universeData.map(u => React.createElement("option", {
    key: u.name
  }, u.name))))), React.createElement("div", {
    className: "dossier-character-grid"
  }, filtered.map(character => React.createElement("article", {
    key: character.id,
    className: "card dossier-character-card",
    onClick: () => onOpenDossier({
      type: "character",
      item: character
    })
  }, React.createElement(Corners, null), React.createElement("div", {
    className: `dossier-mugshot ${tagTone(character.role)} ${character.media ? "has-official" : "has-fallback"}`
  }, character.media ? React.createElement(OfficialMedia, {
    media: character.media,
    className: "dossier-mugshot-media"
  }) : React.createElement("div", {
    className: "dossier-mugshot-fallback"
  }, React.createElement(DossierIcon, {
    type: character.tags.includes("governo") || character.tags.includes("polícia corrupta") ? "police" : "users"
  }), React.createElement("strong", null, initialsOf(character.name)), React.createElement("small", null, character.universe)), React.createElement("span", null, character.media?.relatedOnly ? "arquivo relacionado" : character.id)), React.createElement("div", {
    className: "dossier-card-body"
  }, React.createElement(DossierChips, {
    items: [character.role, character.importance],
    limit: 2
  }), React.createElement("h3", null, character.name), React.createElement("p", null, character.biography), React.createElement(MetaGrid, {
    rows: [["Jogos", character.games], ["Cidade", character.city], ["Lealdades", character.affiliations], ["Conflitos", character.enemies]]
  }), React.createElement(DossierChips, {
    items: character.tags,
    limit: 5
  })))))));
};
const cityUniverseLanes = [{
  id: "2d",
  label: "2D Universe",
  note: "top-down / arcade",
  cities: ["liberty-city", "vice-city", "san-andreas", "anywhere-city", "london"]
}, {
  id: "3d",
  label: "3D Universe",
  note: "continuidade classica",
  cities: ["liberty-city", "vice-city", "san-andreas", "los-santos", "san-fierro", "las-venturas"]
}, {
  id: "hd",
  label: "HD Universe",
  note: "continuidade moderna",
  cities: ["liberty-city", "vice-city", "san-andreas", "los-santos", "blaine-county", "north-yankton", "leonida"]
}];
const cityVariantForUniverse = (cityId, universeId) => {
  const base = citiesData.find(city => city.id === cityId);
  if (!base) return null;
  const lane = cityUniverseLanes.find(item => item.id === universeId);
  const galleryMedia = asList(base.universeGalleryMedia?.[universeId]).filter(Boolean);
  const scopedGames = asList(base.universeGameScope?.[universeId]).filter(Boolean);
  return {
    ...base,
    selectedUniverseId: universeId,
    selectedUniverseLabel: lane?.label,
    selectedUniverseNote: lane?.note,
    games: scopedGames.length ? scopedGames : base.games,
    galleryMedia: galleryMedia.length ? galleryMedia : base.galleryMedia,
    media: galleryMedia[0] || base.media
  };
};
const CityMapPanel = ({
  selectedKey,
  onSelect
}) => React.createElement("div", {
  className: "dossier-city-map dossier-city-universe-map"
}, React.createElement("div", {
  className: "dossier-map-gridlines"
}), React.createElement("div", {
  className: "dossier-city-map-lanes"
}, cityUniverseLanes.map(lane => React.createElement("div", {
  key: lane.id,
  className: "dossier-city-map-lane",
  "data-universe": lane.id
}, React.createElement("div", {
  className: "dossier-city-map-lane-head"
}, React.createElement("strong", null, lane.label), React.createElement("span", null, lane.note)), React.createElement("div", {
  className: "dossier-city-map-pins"
}, lane.cities.map(id => {
  const city = cityVariantForUniverse(id, lane.id);
  const key = `${lane.id}-${id}`;
  return React.createElement("button", {
    key: key,
    className: selectedKey === key ? "active" : "",
    onClick: () => onSelect(city),
    title: `${city?.name} em ${lane.label}`,
    disabled: !city
  }, React.createElement("span", {
    className: "dossier-map-dot"
  }), React.createElement("strong", null, city?.name));
}))))));
const CitiesDossierSection = ({
  onOpenDossier
}) => {
  const [selected, setSelected] = React.useState(() => cityVariantForUniverse("vice-city", "hd") || citiesData.find(c => c.id === "vice-city"));
  const [query, setQuery] = React.useState("");
  const cityVariants = citiesData.flatMap(city => Object.keys(city.universeGalleryMedia || {
    base: city.galleryMedia
  }).map(universeId => cityVariantForUniverse(city.id, universeId) || city));
  const filtered = cityVariants.filter(city => searchRecord(city, query));
  const selectedKey = `${selected?.selectedUniverseId || "base"}-${selected?.id}`;
  return React.createElement("section", {
    id: "cities",
    className: "dossier-section dossier-shell"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(DossierSectionHead, {
    eyebrow: "Mapa urbano",
    title: "Cidades e estados",
    accent: "var(--copper)",
    right: "inspira\xE7\xF5es, distritos, fac\xE7\xF5es e eventos"
  }), React.createElement("div", {
    className: "dossier-city-layout"
  }, React.createElement(CityMapPanel, {
    selectedKey: selectedKey,
    onSelect: setSelected
  }), React.createElement("aside", {
    className: "card dossier-city-selected"
  }, React.createElement(Corners, null), React.createElement("div", {
    className: "dossier-card-kicker"
  }, "Hotspot ativo / ", selected?.selectedUniverseLabel || "todos os universos"), React.createElement("h3", null, selected?.name), React.createElement(CityImageCarousel, {
    city: selected,
    className: "compact"
  }), React.createElement("p", null, selected?.description), React.createElement(MetaGrid, {
    rows: [["Inspiração", selected?.realWorldInspiration], ["Universo visual", selected?.selectedUniverseLabel], ["Jogos", selected?.games], ["Facções", selected?.factions?.slice(0, 5)]]
  }), React.createElement(DossierChips, {
    items: selected?.themes
  }), React.createElement("button", {
    className: "btn",
    onClick: () => onOpenDossier({
      type: "city",
      item: selected
    })
  }, "Abrir cidade"))), React.createElement("div", {
    className: "dossier-filterbar single"
  }, React.createElement("label", null, React.createElement("span", null, "Busca em cidades"), React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Cidade, tema, personagem..."
  }))), React.createElement("div", {
    className: "dossier-city-grid"
  }, filtered.map(city => React.createElement("article", {
    key: `${city.selectedUniverseId || "base"}-${city.id}`,
    className: "card dossier-city-card",
    onClick: () => onOpenDossier({
      type: "city",
      item: city
    })
  }, React.createElement(Corners, null), React.createElement("div", {
    className: `dossier-city-skyline ${city.media ? "has-official" : ""}`
  }, city.media ? React.createElement(OfficialMedia, {
    media: city.media,
    className: "dossier-city-media"
  }) : React.createElement(Skyline, {
    palette: {
      sky: "#101018",
      a: "#15151f",
      b: "#1d2230",
      c2: "#11131a",
      win: city.id === "vice-city" || city.id === "leonida" ? "#ff3d8a" : "#f5c518"
    }
  })), React.createElement("div", {
    className: "dossier-card-body"
  }, React.createElement("div", {
    className: "dossier-card-kicker"
  }, city.selectedUniverseLabel || "Todos os universos", " / ", city.realWorldInspiration), React.createElement("h3", null, city.name), React.createElement("p", null, city.description), React.createElement(DossierChips, {
    items: city.themes,
    limit: 5
  })))))));
};
const FactionsDossierSection = ({
  onOpenDossier
}) => {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("all");
  const categories = [...new Set(factionsData.map(f => f.category))];
  const filtered = factionsData.filter(faction => searchRecord(faction, query) && (category === "all" || faction.category === category));
  return React.createElement("section", {
    id: "gangs",
    className: "dossier-section dossier-shell alt"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(DossierSectionHead, {
    eyebrow: "Painel criminal",
    title: "Gangues e organiza\xE7\xF5es",
    accent: "var(--siren)",
    right: `${filtered.length} entidades no banco`
  }), React.createElement("div", {
    className: "dossier-filterbar"
  }, React.createElement("label", null, React.createElement("span", null, "Busca"), React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Leone, FIB, Lost MC, neg\xF3cios..."
  })), React.createElement("label", null, React.createElement("span", null, "Tipo"), React.createElement("select", {
    value: category,
    onChange: e => setCategory(e.target.value)
  }, React.createElement("option", {
    value: "all"
  }, "Todos"), categories.map(c => React.createElement("option", {
    key: c
  }, c))))), React.createElement("div", {
    className: "dossier-faction-grid"
  }, filtered.map(faction => React.createElement("article", {
    key: faction.id,
    className: "card dossier-faction-card"
  }, React.createElement(Corners, null), React.createElement("div", {
    className: `dossier-faction-visual ${faction.media ? "has-official" : ""}`
  }, faction.media && React.createElement(OfficialMedia, {
    media: faction.media,
    className: "dossier-faction-media"
  }), React.createElement("div", {
    className: "dossier-faction-mark"
  }, faction.name.split(/[ /]/).filter(Boolean).slice(0, 2).map(w => w[0]).join(""))), React.createElement("div", {
    className: "dossier-card-kicker"
  }, faction.category, " \xB7 ", faction.city), React.createElement("h3", null, faction.name), React.createElement("p", null, faction.narrativeImportance), React.createElement(MetaGrid, {
    rows: [["Líderes", faction.leaders], ["Aliados", faction.allies], ["Inimigos", faction.enemies], ["Negócios", faction.businesses]]
  }), React.createElement(DossierChips, {
    items: faction.tags,
    limit: 4
  }), React.createElement("button", {
    className: "btn",
    onClick: () => onOpenDossier({
      type: "faction",
      item: faction
    })
  }, "Painel criminal"))))));
};
const UniversesDossierSection = () => React.createElement("section", {
  id: "universes",
  className: "dossier-section dossier-shell"
}, React.createElement("div", {
  className: "wrap"
}, React.createElement(DossierSectionHead, {
  eyebrow: "Canon",
  title: "Universos GTA",
  accent: "var(--neon)",
  right: "2D, 3D e HD n\xE3o s\xE3o a mesma continuidade"
}), React.createElement("div", {
  className: "dossier-universe-grid"
}, universeData.map(universe => React.createElement("article", {
  key: universe.id,
  className: `card dossier-universe-card ${universe.tone}`
}, React.createElement(Corners, null), universe.media && React.createElement(OfficialMedia, {
  media: universe.media,
  className: "dossier-universe-media"
}), React.createElement("div", {
  className: "dossier-universe-top"
}, React.createElement("span", null, universe.period), React.createElement("h3", null, universe.name), React.createElement("p", null, universe.summary)), React.createElement("div", {
  className: "dossier-card-body"
}, React.createElement("p", null, universe.description), React.createElement(DossierChips, {
  items: universe.games,
  limit: 10
}), React.createElement(BulletList, {
  items: universe.notes
}))))), React.createElement("div", {
  className: "card dossier-note-card"
}, React.createElement(Corners, null), React.createElement("strong", null, "Regra de leitura:"), React.createElement("span", null, "Personagens de universos diferentes podem aparecer como refer\xEAncia, piada ou eco cultural, mas isso n\xE3o confirma coexist\xEAncia no mesmo c\xE2none."))));
const RockstarPeopleGrid = () => React.createElement("div", {
  className: "dossier-rockstar-people"
}, React.createElement(DossierSectionHead, {
  eyebrow: "Arquivo de pessoas",
  title: "Criadores, produtores e desenvolvedores",
  accent: "var(--neon)",
  right: `${rockstarPeopleData.length} perfis com fotos reais e fontes`
}), React.createElement("div", {
  className: "dossier-people-grid"
}, rockstarPeopleData.map(person => React.createElement("article", {
  id: `people-${person.id}`,
  key: person.id,
  className: "card dossier-person-card"
}, React.createElement(Corners, null), React.createElement("div", {
  className: `dossier-person-photo ${person.media ? "has-official" : ""}`
}, person.media ? React.createElement(OfficialMedia, {
  media: person.media,
  className: "dossier-person-media"
}) : React.createElement("div", {
  className: "dossier-person-fallback"
}, React.createElement("strong", null, initialsOf(person.name)), React.createElement("small", null, "foto nao confirmada")), React.createElement("span", null, person.era)), React.createElement("div", {
  className: "dossier-card-body"
}, React.createElement("div", {
  className: "dossier-card-kicker"
}, person.role), React.createElement("h3", null, person.name), React.createElement("p", null, person.summary), React.createElement("div", {
  className: "dossier-person-meta"
}, React.createElement("span", null, React.createElement("strong", null, "Base"), person.city), React.createElement("span", null, React.createElement("strong", null, "Jogos"), asList(person.games).slice(0, 4).join(" / "))), React.createElement("details", {
  className: "dossier-details"
}, React.createElement("summary", null, "Contribuicoes no dossie"), React.createElement(BulletList, {
  items: person.contributions
})), React.createElement(DossierChips, {
  items: person.tags,
  limit: 6
}), React.createElement(SourceLinks, {
  items: person.sources
}))))), React.createElement("div", {
  className: "card dossier-note-card dossier-people-note"
}, React.createElement(Corners, null), React.createElement("strong", null, "Nota editorial:"), React.createElement("span", null, "Steve Hammond, Russell Kay, Keith Hamilton e Scott Johnston continuam citados no contexto historico da DMA quando relevantes. Nao forcei cards individuais para eles porque nao encontrei uma foto publica confiavel e diretamente rastreavel para usar como retrato.")));
const RockstarDossierSection = () => React.createElement("section", {
  id: "rockstar",
  className: "dossier-section dossier-shell alt"
}, React.createElement("div", {
  className: "wrap"
}, React.createElement(DossierSectionHead, {
  eyebrow: "Hist\xF3ria real",
  title: "Rockstar Games e Rockstar North",
  accent: "var(--evidence)",
  right: "da DMA Design \xE0 era HD"
}), React.createElement("div", {
  className: "dossier-rockstar-layout"
}, React.createElement("div", {
  className: "dossier-rockstar-timeline"
}, rockstarHistoryData.map(item => React.createElement("article", {
  key: `${item.year}-${item.title}`,
  className: "card dossier-rockstar-row"
}, React.createElement(Corners, null), React.createElement("div", {
  className: "dossier-rockstar-year"
}, item.year), item.media && React.createElement(OfficialMedia, {
  media: item.media,
  className: "dossier-rockstar-media"
}), React.createElement("div", null, React.createElement("div", {
  className: "dossier-card-kicker"
}, item.type), React.createElement("h3", null, item.title), React.createElement("p", null, item.summary), React.createElement("details", {
  className: "dossier-details"
}, React.createElement("summary", null, "Contexto"), asList(item.details).map((paragraph, index) => React.createElement("p", {
  key: `${item.title}-context-${index}`
}, paragraph)), React.createElement(SourceLinks, {
  items: item.sources
})))))), React.createElement("aside", {
  className: "dossier-founder-panel"
}, React.createElement("div", {
  className: "dossier-card-kicker"
}, "Fundadores da Rockstar Games"), React.createElement("h3", null, "Sam Houser, Dan Houser, Terry Donovan, Jamie King e Gary Foreman"), React.createElement(OfficialMedia, {
  media: rockstarHistoryData.find(item => item.title.includes("Rockstar North"))?.media,
  className: "dossier-founder-media"
}), React.createElement("div", {
  className: "dossier-founder-faces"
}, rockstarPeopleData.filter(person => asList(person.tags).includes("fundador")).map(person => React.createElement("a", {
  key: person.id,
  href: `#people-${person.id}`,
  title: person.name
}, React.createElement("img", {
  src: person.media.src,
  alt: person.name,
  loading: "lazy",
  referrerPolicy: "no-referrer"
}), React.createElement("span", null, person.name.split(" ")[0])))), React.createElement("p", null, "A Rockstar nasce em 1998 como selo da Take-Two depois da aquisi\xE7\xE3o de ativos da BMG Interactive. A antiga DMA Design, depois Rockstar North, se torna o principal motor criativo e t\xE9cnico de GTA."), React.createElement("div", {
  className: "dossier-founder-grid"
}, ["Sam Houser", "Dan Houser", "Terry Donovan", "Jamie King", "Gary Foreman", "Rockstar North"].map(name => React.createElement("span", {
  key: name
}, name))), React.createElement("hr", {
  className: "rule"
}), React.createElement("p", null, "A virada de GTA III em 2001, a expans\xE3o da era 3D, o realismo de GTA IV, o fen\xF4meno GTA V/Online e GTA VI em Leonida formam uma linha clara: cada gera\xE7\xE3o redefine escala, tecnologia e s\xE1tira cultural."))), React.createElement(RockstarPeopleGrid, null)));
const GTAOnlineDossierSection = ({
  onOpenDossier
}) => {
  const [query, setQuery] = React.useState("");
  const [year, setYear] = React.useState("Todos");
  const [type, setType] = React.useState("Todos");
  const onlineHero = window.officialMediaData?.gtaOnlineHero || gamesData.find(game => game.id === "gta-online")?.media;
  const years = React.useMemo(() => ["Todos", ...Array.from(new Set(onlineDlcData.map(item => item.year))).sort()], []);
  const types = React.useMemo(() => ["Todos", ...Array.from(new Set(onlineDlcData.map(item => item.type))).sort()], []);
  const filteredDlc = onlineDlcData.filter(item => searchRecord(item, query) && (year === "Todos" || item.year === year) && (type === "Todos" || item.type === type));
  const openDlc = item => onOpenDossier && onOpenDossier({
    type: "onlineDlc",
    item
  });
  return React.createElement("section", {
    id: "gtaonline",
    className: "dossier-section dossier-shell"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(DossierSectionHead, {
    eyebrow: "Plataforma viva",
    title: "GTA Online",
    accent: "var(--money)",
    right: `${onlineDlcData.length} DLCs catalogadas`
  }), React.createElement("div", {
    className: "dossier-online-intro"
  }, React.createElement("div", null, React.createElement("h3", null, "N\xE3o \xE9 apenas multiplayer: \xE9 uma carreira criminal cont\xEDnua."), React.createElement("p", null, "GTA Online transforma o jogador em operador de uma economia criminosa. O progresso atravessa apartamentos, heists, CEOs, motoclubes, bunkers, nightclubs, cassino, Cayo Perico, ag\xEAncias, guerras de drogas, mercen\xE1rios e frentes de lavagem.")), React.createElement("div", {
    className: "dossier-online-side"
  }, React.createElement(OfficialMedia, {
    media: onlineHero,
    className: "dossier-online-hero-media"
  }), React.createElement("div", {
    className: "dossier-online-metrics"
  }, React.createElement("span", null, React.createElement("strong", null, "2013"), " estreia"), React.createElement("span", null, React.createElement("strong", null, "10+ anos"), " atualiza\xE7\xF5es"), React.createElement("span", null, React.createElement("strong", null, "Los Santos"), " plataforma")))), React.createElement("div", {
    className: "dossier-online-catalog-head"
  }, React.createElement("div", null, React.createElement("div", {
    className: "dossier-card-kicker"
  }, "Arquivo de DLCs e updates"), React.createElement("h3", null, "Do Beach Bum ao Safehouse: cada fase clicavel"), React.createElement("p", null, "Use a busca para abrir heists, negocios, eventos sazonais, modos adversarios, carros, agencias e frentes de lavagem com contexto de impacto, sistemas, personagens e fontes.")), React.createElement("span", null, filteredDlc.length, " registros ativos")), React.createElement("div", {
    className: "dossier-filterbar wide"
  }, React.createElement("label", null, React.createElement("span", null, "Busca"), React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Cayo Perico, bunker, Franklin, cassino..."
  })), React.createElement("label", null, React.createElement("span", null, "Ano"), React.createElement("select", {
    value: year,
    onChange: e => setYear(e.target.value)
  }, years.map(item => React.createElement("option", {
    key: item
  }, item)))), React.createElement("label", null, React.createElement("span", null, "Tipo"), React.createElement("select", {
    value: type,
    onChange: e => setType(e.target.value)
  }, types.map(item => React.createElement("option", {
    key: item
  }, item))))), React.createElement("div", {
    className: "dossier-online-dlc-grid"
  }, filteredDlc.length ? filteredDlc.map(item => React.createElement("article", {
    key: item.id,
    className: "card dossier-online-dlc-card",
    role: "button",
    tabIndex: 0,
    onClick: () => openDlc(item),
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDlc(item);
      }
    }
  }, React.createElement(Corners, null), item.media && React.createElement(OfficialMedia, {
    media: item.media,
    className: "dossier-online-update-media"
  }), React.createElement("div", {
    className: "dossier-card-kicker"
  }, item.releaseDate, " / ", item.era), React.createElement("h3", null, item.title), React.createElement("p", null, item.summary), React.createElement(MetaGrid, {
    rows: [["Tipo", item.type], ["Sistemas", asList(item.systems).slice(0, 3)], ["Personagens", asList(item.characters).slice(0, 3)]]
  }), React.createElement("div", {
    className: "dossier-online-dlc-brought"
  }, asList(item.brought).slice(0, 4).map(entry => React.createElement("span", {
    key: entry
  }, entry))), React.createElement(DossierChips, {
    items: item.tags,
    limit: 6
  }), React.createElement("button", {
    className: "btn",
    type: "button",
    onClick: e => {
      e.stopPropagation();
      openDlc(item);
    }
  }, "Abrir dossie"))) : React.createElement("article", {
    className: "card dossier-online-empty"
  }, React.createElement(Corners, null), React.createElement("h3", null, "Nenhuma DLC encontrada"), React.createElement("p", null, "Limpe os filtros ou busque por outro termo do catalogo."))), React.createElement("div", {
    className: "dossier-online-catalog-head compact"
  }, React.createElement("div", null, React.createElement("div", {
    className: "dossier-card-kicker"
  }, "Linha macro"), React.createElement("h3", null, "Fases maiores da carreira online"), React.createElement("p", null, "Um resumo visual das grandes viradas de GTA Online, para entender como os updates mudaram a economia e o ritmo do jogo."))), React.createElement("div", {
    className: "dossier-online-timeline"
  }, onlineTimelineData.map(item => React.createElement("article", {
    key: `${item.year}-${item.title}`,
    className: "card"
  }, React.createElement(Corners, null), item.media && React.createElement(OfficialMedia, {
    media: item.media,
    className: "dossier-online-update-media"
  }), React.createElement("span", null, item.year), React.createElement("h3", null, item.title), React.createElement("p", null, item.theme))))));
};
const GTA6DossierSection = () => {
  const gta6Media = gamesData.find(game => game.id === "gta-vi")?.media || window.officialMediaData?.hero;
  return React.createElement("section", {
    id: "gta6",
    className: "dossier-section dossier-shell gta6"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(DossierSectionHead, {
    eyebrow: "Pr\xF3ximo cap\xEDtulo",
    title: "GTA VI",
    accent: "var(--neon)",
    right: "fatos confirmados separados de leitura comunit\xE1ria"
  }), React.createElement("div", {
    className: "dossier-gta6-hero"
  }, React.createElement("div", null, React.createElement("div", {
    className: "dossier-card-kicker"
  }, "Leonida \xB7 Vice City \xB7 19 de novembro de 2026"), React.createElement("h3", null, "Lucia Caminos + Jason Duval"), React.createElement("p", null, "A p\xE1gina oficial apresenta Lucia e Jason como dupla presa a uma conspira\xE7\xE3o criminosa depois que um servi\xE7o simples d\xE1 errado. O retorno a Vice City acontece dentro do HD Universe, em um estado de Leonida inspirado na Fl\xF3rida."), React.createElement(DossierChips, {
    items: ["confirmado", "Leonida", "Vice City", "HD Universe", "não lançado"]
  })), React.createElement("div", {
    className: `dossier-leonida-map ${gta6Media ? "has-official" : ""}`
  }, React.createElement(OfficialMedia, {
    media: gta6Media,
    className: "dossier-leonida-media"
  }), React.createElement("span", null, "LEONIDA"), React.createElement("i", {
    className: "pin-a"
  }), React.createElement("i", {
    className: "pin-b"
  }), React.createElement("i", {
    className: "pin-c"
  }))), React.createElement("div", {
    className: "dossier-fact-columns"
  }, React.createElement("article", {
    className: "card confirmed"
  }, React.createElement(Corners, null), React.createElement("h3", null, "Confirmado oficialmente"), React.createElement(BulletList, {
    items: gta6FactsData.confirmed
  })), React.createElement("article", {
    className: "card interpretation"
  }, React.createElement(Corners, null), React.createElement("h3", null, "Interpreta\xE7\xE3o"), React.createElement(BulletList, {
    items: gta6FactsData.interpretation
  })), React.createElement("article", {
    className: "card unconfirmed"
  }, React.createElement(Corners, null), React.createElement("h3", null, "N\xE3o confirmado"), React.createElement(BulletList, {
    items: gta6FactsData.notConfirmed
  })))));
};
const GlossaryDossierSection = ({
  onOpenDossier
}) => {
  const [query, setQuery] = React.useState("");
  const filtered = glossaryData.filter(item => searchRecord(item, query));
  return React.createElement("section", {
    id: "glossary",
    className: "dossier-section dossier-shell alt"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement(DossierSectionHead, {
    eyebrow: "Refer\xEAncia",
    title: "Gloss\xE1rio GTA",
    accent: "var(--copper)",
    right: `${filtered.length} termos`
  }), React.createElement("div", {
    className: "dossier-filterbar single"
  }, React.createElement("label", null, React.createElement("span", null, "Busca"), React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    placeholder: "Canon, FIB, heist, Leonida..."
  }))), React.createElement("div", {
    className: "dossier-glossary-grid"
  }, filtered.map(item => React.createElement("article", {
    key: item.term,
    className: "card dossier-glossary-item",
    role: "button",
    tabIndex: 0,
    onClick: () => onOpenDossier?.({
      type: "glossary",
      item
    }),
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onOpenDossier?.({
          type: "glossary",
          item
        });
      }
    }
  }, React.createElement(Corners, null), item.media && React.createElement(OfficialMedia, {
    media: item.media,
    className: "dossier-glossary-media"
  }), React.createElement("div", {
    className: "dossier-card-kicker"
  }, item.category || "Termo do dossie"), React.createElement("h3", null, item.term), React.createElement("p", null, item.definition), React.createElement(DossierChips, {
    items: item.tags || item.relatedTerms,
    limit: 4
  }), React.createElement("button", {
    className: "btn",
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onOpenDossier?.({
        type: "glossary",
        item
      });
    }
  }, "Abrir termo"))))));
};
const ConnectionsImpactSection = ({
  compact = false
}) => React.createElement("div", {
  className: compact ? "dossier-extra-block compact" : "dossier-section dossier-shell dossier-extra-block"
}, React.createElement("div", {
  className: compact ? "" : "wrap"
}, !compact && React.createElement(DossierSectionHead, {
  eyebrow: "Leitura editorial",
  title: "Conex\xF5es, ordem de jogo e impacto",
  accent: "var(--evidence)",
  right: "contexto cultural sem misturar com canon"
}), React.createElement("div", {
  className: "dossier-extra-grid"
}, React.createElement("article", {
  className: "card"
}, React.createElement(Corners, null), React.createElement("div", {
  className: "dossier-card-kicker"
}, "Conex\xF5es e trai\xE7\xF5es"), React.createElement("h3", null, "Linhas vermelhas da saga"), connectionsData.map(item => React.createElement("div", {
  key: item.title,
  className: "dossier-connection-row"
}, React.createElement("strong", null, item.title), React.createElement("span", null, item.type), React.createElement("p", null, item.summary)))), React.createElement("article", {
  className: "card"
}, React.createElement(Corners, null), React.createElement("div", {
  className: "dossier-card-kicker"
}, "Ordem recomendada"), React.createElement("h3", null, "Como jogar para entender melhor"), recommendedOrderData.map(order => React.createElement("details", {
  key: order.label,
  className: "dossier-details",
  open: order.label.includes("moderna")
}, React.createElement("summary", null, order.label), React.createElement("ol", {
  className: "dossier-ordered"
}, order.games.map(game => React.createElement("li", {
  key: game
}, game)))))), React.createElement("article", {
  className: "card"
}, React.createElement(Corners, null), React.createElement("div", {
  className: "dossier-card-kicker"
}, "Impacto cultural e controv\xE9rsias"), React.createElement("h3", null, "Fora do universo dos jogos"), impactData.map(item => React.createElement("div", {
  key: item.title,
  className: "dossier-impact-row"
}, React.createElement("strong", null, item.title), React.createElement("p", null, item.body)))))));
const DossierFooter = () => {
  const media = window.officialMediaData;
  return React.createElement("footer", {
    className: "dossier-footer dossier-shell"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "dossier-footer-grid"
  }, React.createElement("div", null, React.createElement("h2", null, "Grand Theft Auto Dossi\xEA"), React.createElement("p", null, "Arquivo editorial de f\xE3, em portugu\xEAs do Brasil, com imagens promocionais oficiais creditadas e conte\xFAdo separado entre lore, desenvolvimento real e impacto cultural."), media?.notice && React.createElement("p", {
    className: "dossier-media-notice"
  }, media.notice)), React.createElement("div", null, React.createElement("h3", null, "Fontes-base consultadas"), React.createElement("ul", null, dossierSourcesData.map(source => React.createElement("li", {
    key: source.url
  }, React.createElement("a", {
    href: source.url,
    target: "_blank",
    rel: "noreferrer"
  }, source.label), React.createElement("span", null, source.note))), media?.sources?.map(source => React.createElement("li", {
    key: source.url
  }, React.createElement("a", {
    href: source.url,
    target: "_blank",
    rel: "noreferrer"
  }, source.label), React.createElement("span", null, source.note))))))));
};
const ModalField = ({
  label,
  children
}) => React.createElement("div", {
  className: "dossier-modal-field"
}, React.createElement("span", null, label), React.createElement("div", null, children));
const GlossaryTermModalContent = ({
  item
}) => {
  const appearsIn = asList(item.appearsIn || item.games);
  const related = asList(item.relatedTerms);
  const relatedRecords = related.map(term => glossaryData.find(entry => entry.term === term)).filter(Boolean);
  return React.createElement("div", {
    className: "dossier-glossary-modal-content"
  }, React.createElement("div", {
    className: "dossier-glossary-brief"
  }, React.createElement("strong", null, item.definition), React.createElement("span", null, item.category || "Termo do dossie")), React.createElement(MetaGrid, {
    rows: [["Categoria", item.category], ["Aparece em", appearsIn], ["Termos relacionados", related], ["Fontes", `${asList(item.sources).length} referencias`]]
  }), React.createElement(ModalField, {
    label: "Contexto completo"
  }, item.expanded || item.definition), React.createElement("div", {
    className: "dossier-modal-split"
  }, React.createElement(ModalField, {
    label: "Onde aparece"
  }, React.createElement(BulletList, {
    items: appearsIn.length ? appearsIn : ["Aplicavel ao dossie geral da franquia."]
  })), React.createElement(ModalField, {
    label: "Por que importa"
  }, item.whyItMatters || item.importance || "Ajuda a ler a cronologia, o canon e os sistemas da franquia sem misturar interpretacao com fato confirmado.")), React.createElement(ModalField, {
    label: "Exemplos no dossie"
  }, React.createElement(BulletList, {
    items: asList(item.examples).length ? item.examples : ["Termo usado para cruzar jogos, cidades, personagens e sistemas dentro do dossie."]
  })), React.createElement(ModalField, {
    label: "Relacoes com outros termos"
  }, relatedRecords.length ? React.createElement("div", {
    className: "dossier-glossary-relations"
  }, relatedRecords.map(record => React.createElement("div", {
    key: record.term
  }, React.createElement("strong", null, record.term), React.createElement("span", null, record.definition)))) : React.createElement(DossierChips, {
    items: related,
    limit: 12
  })), React.createElement(ModalField, {
    label: "Notas de precisao"
  }, React.createElement(BulletList, {
    items: asList(item.precisionNotes).length ? item.precisionNotes : ["Sem nota adicional; o termo e usado no sentido editorial descrito acima."]
  })), React.createElement(ModalField, {
    label: "Tags"
  }, React.createElement(DossierChips, {
    items: item.tags,
    limit: 12
  })), React.createElement(ModalField, {
    label: "Fontes"
  }, React.createElement(SourceLinks, {
    items: item.sources
  })));
};
const VehicleGroupsPanel = ({
  groups,
  query
}) => {
  const normalizedQuery = normalizeText(query);
  const visibleGroups = groups.map(group => ({
    ...group,
    items: asList(group.items).filter(vehicle => !normalizedQuery || normalizeText(vehicleItemName(vehicle)).includes(normalizedQuery))
  })).filter(group => group.items.length);
  const visibleCount = visibleGroups.reduce((sum, group) => sum + group.items.length, 0);
  if (!visibleGroups.length) {
    return React.createElement("div", {
      className: "dossier-vehicle-empty"
    }, "Nenhum ve\xEDculo encontrado nesse filtro.");
  }
  return React.createElement("div", {
    className: "dossier-vehicle-groups"
  }, React.createElement("div", {
    className: "dossier-vehicle-group-total"
  }, visibleCount, " itens exibidos"), visibleGroups.map((group, index) => React.createElement("details", {
    key: group.label,
    className: "dossier-vehicle-group",
    open: index < 3 || Boolean(query)
  }, React.createElement("summary", null, React.createElement("span", null, group.label), React.createElement("strong", null, group.items.length)), React.createElement("div", {
    className: "dossier-vehicle-name-grid"
  }, group.items.map(vehicle => {
    const name = vehicleItemName(vehicle);
    const media = vehicleItemMedia(vehicle);
    const source = media?.source || vehicleWikiPageUrl(vehicleItemPageTitle(vehicle));
    return React.createElement("a", {
      className: `dossier-vehicle-model-card ${media ? "has-media" : ""}`,
      href: source,
      target: "_blank",
      rel: "noreferrer",
      key: `${group.label}-${vehicleItemKey(vehicle)}`
    }, React.createElement("span", {
      className: "dossier-vehicle-model-thumb"
    }, media?.src ? React.createElement("img", {
      src: media.src,
      alt: media.alt || `Imagem de ${name}`,
      loading: "lazy",
      referrerPolicy: "no-referrer"
    }) : React.createElement("span", {
      className: "dossier-vehicle-model-placeholder"
    }, React.createElement(DossierIcon, {
      type: "car"
    }), " imagem pendente")), React.createElement("strong", null, name));
  })))));
};
const WeaponGroupsPanel = ({
  groups,
  query
}) => {
  const normalizedQuery = normalizeText(query);
  const visibleGroups = groups.map(group => ({
    ...group,
    items: asList(group.items).filter(weapon => !normalizedQuery || normalizeText(weaponItemName(weapon)).includes(normalizedQuery))
  })).filter(group => group.items.length);
  const visibleCount = visibleGroups.reduce((sum, group) => sum + group.items.length, 0);
  if (!visibleGroups.length) {
    return React.createElement("div", {
      className: "dossier-weapon-empty"
    }, "Nenhuma arma encontrada nesse filtro.");
  }
  return React.createElement("div", {
    className: "dossier-weapon-groups"
  }, React.createElement("div", {
    className: "dossier-weapon-group-total"
  }, visibleCount, " itens exibidos"), visibleGroups.map((group, index) => React.createElement("details", {
    key: group.label,
    className: "dossier-weapon-group",
    open: index < 3 || Boolean(query)
  }, React.createElement("summary", null, React.createElement("span", null, group.label), React.createElement("strong", null, group.items.length)), React.createElement("div", {
    className: "dossier-weapon-name-grid"
  }, group.items.map(weapon => {
    const name = weaponItemName(weapon);
    const media = weaponItemMedia(weapon);
    const source = media?.source || weaponWikiPageUrl(weaponItemPageTitle(weapon));
    return React.createElement("a", {
      className: `dossier-weapon-model-card ${media ? "has-media" : ""}`,
      href: source,
      target: "_blank",
      rel: "noreferrer",
      key: `${group.label}-${weaponItemKey(weapon)}`
    }, React.createElement("span", {
      className: "dossier-weapon-model-thumb"
    }, media?.src ? React.createElement("img", {
      src: media.src,
      alt: media.alt || `Imagem de ${name}`,
      loading: "lazy",
      referrerPolicy: "no-referrer"
    }) : React.createElement("span", {
      className: "dossier-weapon-model-placeholder"
    }, React.createElement(DossierIcon, {
      type: "weapon"
    }), " imagem pendente")), React.createElement("strong", null, name));
  })))));
};
const VehicleDossierModalContent = ({
  item
}) => {
  const [groups, setGroups] = React.useState(item.fallbackGroups || []);
  const [query, setQuery] = React.useState("");
  const [status, setStatus] = React.useState(item.apiPage || item.categoryTitle ? "loading" : "static");
  const [error, setError] = React.useState("");
  const totalLoaded = groups.reduce((sum, group) => sum + asList(group.items).length, 0);
  React.useEffect(() => {
    let alive = true;
    setQuery("");
    setGroups(item.fallbackGroups || []);
    setError("");
    if (!item.apiPage && !item.categoryTitle) {
      setStatus("static");
      return () => {
        alive = false;
      };
    }
    setStatus("loading");
    loadVehicleGroups(item).then(loaded => {
      if (!alive) return;
      setGroups(loaded.length ? loaded : item.fallbackGroups || []);
      setStatus(loaded.length ? "ready" : "empty");
    }).catch(err => {
      if (!alive) return;
      setError(err?.message || "Nao foi possivel carregar a lista completa agora.");
      setGroups(item.fallbackGroups || []);
      setStatus("error");
    });
    return () => {
      alive = false;
    };
  }, [item.id]);
  return React.createElement(React.Fragment, null, React.createElement(MetaGrid, {
    rows: [["Lançamento", item.releaseYear], ["Ano da história", item.storyYear], ["Universo", item.universe], ["Cidade", item.city], ["Total / fonte", item.totalLabel], ["Arquivo carregado", item.apiPage || item.categoryTitle || "dossiê estático"]]
  }), React.createElement(ModalField, {
    label: "Resumo"
  }, item.summary), React.createElement(ModalField, {
    label: "Como a frota funciona"
  }, React.createElement(BulletList, {
    items: item.systems
  })), React.createElement("div", {
    className: "dossier-modal-split"
  }, React.createElement(ModalField, {
    label: "Cobertura"
  }, React.createElement(DossierChips, {
    items: item.coverage,
    limit: 20
  })), React.createElement(ModalField, {
    label: "Ve\xEDculos marcantes"
  }, React.createElement(DossierChips, {
    items: item.highlights,
    limit: 20
  }))), React.createElement(ModalField, {
    label: "Lista completa por classe"
  }, React.createElement("div", {
    className: "dossier-vehicle-modal-tools"
  }, React.createElement("input", {
    value: query,
    onChange: event => setQuery(event.target.value),
    placeholder: "Filtrar dentro da frota: Hydra, BMX, Police, barco..."
  }), React.createElement("span", {
    className: `dossier-vehicle-load-state ${status}`
  }, status === "loading" ? "carregando fonte..." : status === "error" ? "fonte indisponível agora" : status === "empty" ? "sem tabela pública completa" : `${totalLoaded} registros carregados`)), error && React.createElement("p", {
    className: "dossier-vehicle-error"
  }, error), React.createElement(VehicleGroupsPanel, {
    groups: groups,
    query: query
  })), item.relatedVehicleFiles && React.createElement(ModalField, {
    label: "Frotas herdadas"
  }, React.createElement(DossierChips, {
    items: item.relatedVehicleFiles,
    limit: 10
  })), React.createElement(ModalField, {
    label: "Notas de precis\xE3o"
  }, React.createElement(BulletList, {
    items: item.precisionNotes
  })), React.createElement(ModalField, {
    label: "Tags"
  }, React.createElement(DossierChips, {
    items: item.tags,
    limit: 12
  })), React.createElement(ModalField, {
    label: "Fonte"
  }, React.createElement(SourceLinks, {
    items: item.source ? [item.source] : []
  })));
};
const MissionGroupsPanel = ({
  groups,
  query,
  selected,
  onSelect
}) => {
  const normalizedQuery = normalizeText(query);
  const visibleGroups = groups.map(group => ({
    ...group,
    items: asList(group.items).filter(item => !normalizedQuery || normalizeText(missionItemName(item)).includes(normalizedQuery))
  })).filter(group => group.items.length);
  const visibleCount = visibleGroups.reduce((sum, group) => sum + group.items.length, 0);
  if (!visibleGroups.length) {
    return React.createElement("div", {
      className: "dossier-vehicle-empty"
    }, "Nenhuma miss\xE3o encontrada nesse filtro.");
  }
  return React.createElement("div", {
    className: "dossier-vehicle-groups dossier-mission-groups"
  }, React.createElement("div", {
    className: "dossier-vehicle-group-total"
  }, visibleCount, " miss\xF5es exibidas"), visibleGroups.map((group, index) => React.createElement("details", {
    key: group.label,
    className: "dossier-vehicle-group dossier-mission-group",
    open: index < 3 || Boolean(query)
  }, React.createElement("summary", null, React.createElement("span", null, group.label), React.createElement("strong", null, group.items.length)), React.createElement("div", {
    className: "dossier-vehicle-name-grid dossier-mission-name-grid"
  }, group.items.map(item => {
    const name = missionItemName(item);
    const page = missionItemPage(item);
    const active = selected && missionItemPage(selected) === page && missionItemName(selected) === name;
    const record = typeof item === "string" ? {
      name,
      page
    } : item;
    return React.createElement("button", {
      key: `${group.label}-${page}-${name}`,
      type: "button",
      className: active ? "active" : "",
      onClick: () => onSelect?.({
        ...record,
        group: group.label
      })
    }, name);
  })))));
};
const MissionDetailPanel = ({
  selected,
  mission
}) => {
  const [detail, setDetail] = React.useState(null);
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState("");
  const name = missionItemName(selected);
  React.useEffect(() => {
    let alive = true;
    setDetail(null);
    setError("");
    if (!selected) {
      setStatus("idle");
      return () => {
        alive = false;
      };
    }
    setStatus("loading");
    loadMissionDetail(selected).then(loaded => {
      if (!alive) return;
      setDetail(loaded);
      setStatus(loaded?.extract ? "ready" : "partial");
    }).catch(err => {
      if (!alive) return;
      setError(err?.message || "Nao foi possivel carregar o arquivo da missao agora.");
      setStatus("error");
    });
    return () => {
      alive = false;
    };
  }, [selected?.name, selected?.page]);
  if (!selected) {
    return React.createElement("aside", {
      className: "dossier-mission-detail empty"
    }, React.createElement("span", null, "Arquivo individual"), React.createElement("h4", null, "Selecione uma miss\xE3o"), React.createElement("p", null, "Clique em qualquer nome da lista para abrir o resumo p\xFAblico, a p\xE1gina de origem e o contexto daquele item dentro do jogo."));
  }
  return React.createElement("aside", {
    className: `dossier-mission-detail ${status}`
  }, React.createElement("span", null, "Arquivo individual"), React.createElement("h4", null, name), React.createElement(MetaGrid, {
    rows: [["Jogo", mission.title], ["Grupo", selected.group], ["Fonte", detail?.title || missionItemPage(selected)]]
  }), detail?.facts?.length ? React.createElement(MetaGrid, {
    rows: detail.facts.map(fact => [missionFactLabel(fact.label), fact.value])
  }) : null, status === "loading" && React.createElement("p", null, "Carregando resumo da miss\xE3o..."), status === "error" && React.createElement("p", null, error), status !== "loading" && status !== "error" && React.createElement("p", null, detail?.extract || "A fonte pública lista esta missão, mas não retornou um resumo introdutório limpo pela API. Mantive o link direto para conferência manual."), React.createElement("div", {
    className: "dossier-mission-detail-actions"
  }, React.createElement("a", {
    className: "btn",
    href: detail?.url || missionDetailUrl(missionItemPage(selected)),
    target: "_blank",
    rel: "noreferrer"
  }, "Abrir fonte")));
};
const MissionDossierModalContent = ({
  item
}) => {
  const [groups, setGroups] = React.useState(item.fallbackGroups || []);
  const [query, setQuery] = React.useState("");
  const [selectedMission, setSelectedMission] = React.useState(null);
  const [status, setStatus] = React.useState(item.apiPage ? "loading" : "static");
  const [error, setError] = React.useState("");
  const totalLoaded = groups.reduce((sum, group) => sum + asList(group.items).length, 0);
  React.useEffect(() => {
    let alive = true;
    setQuery("");
    setGroups(item.fallbackGroups || []);
    setSelectedMission(null);
    setError("");
    if (!item.apiPage) {
      setStatus("static");
      return () => {
        alive = false;
      };
    }
    setStatus("loading");
    loadMissionGroups(item).then(loaded => {
      if (!alive) return;
      const nextGroups = loaded.length ? loaded : item.fallbackGroups || [];
      setGroups(nextGroups);
      const firstMission = nextGroups.flatMap(group => asList(group.items).map(missionItem => {
        const name = missionItemName(missionItem);
        const page = missionItemPage(missionItem);
        const record = typeof missionItem === "string" ? {
          name,
          page
        } : missionItem;
        return {
          ...record,
          group: group.label
        };
      }))[0];
      setSelectedMission(firstMission || null);
      setStatus(loaded.length ? "ready" : "empty");
    }).catch(err => {
      if (!alive) return;
      setError(err?.message || "Nao foi possivel carregar a lista completa agora.");
      setGroups(item.fallbackGroups || []);
      setStatus("error");
    });
    return () => {
      alive = false;
    };
  }, [item.id]);
  return React.createElement(React.Fragment, null, React.createElement(MetaGrid, {
    rows: [["Lançamento", item.releaseYear], ["Ano da história", item.storyYear], ["Universo", item.universe], ["Cidade", item.city], ["Total / fonte", item.totalLabel], ["Arquivo carregado", item.apiPage || "dossiê estático"]]
  }), React.createElement(ModalField, {
    label: "Resumo"
  }, item.summary), React.createElement(ModalField, {
    label: "Como as miss\xF5es funcionam"
  }, React.createElement(BulletList, {
    items: item.systems
  })), React.createElement("div", {
    className: "dossier-modal-split"
  }, React.createElement(ModalField, {
    label: "Cobertura"
  }, React.createElement(DossierChips, {
    items: item.coverage,
    limit: 20
  })), React.createElement(ModalField, {
    label: "Miss\xF5es / blocos marcantes"
  }, React.createElement(DossierChips, {
    items: item.highlights,
    limit: 20
  }))), React.createElement(ModalField, {
    label: "Lista completa por regi\xE3o, contato ou tipo"
  }, React.createElement("div", {
    className: "dossier-mission-modal-tools"
  }, React.createElement("input", {
    value: query,
    onChange: event => setQuery(event.target.value),
    placeholder: "Filtrar: Big Smoke, The Big Score, phone, heist..."
  }), React.createElement("span", {
    className: `dossier-mission-load-state ${status}`
  }, status === "loading" ? "carregando fonte..." : status === "error" ? "fonte indisponível agora" : status === "empty" ? "sem tabela pública completa" : `${totalLoaded} registros carregados`)), error && React.createElement("p", {
    className: "dossier-mission-error"
  }, error), React.createElement("div", {
    className: "dossier-mission-list-layout"
  }, React.createElement(MissionGroupsPanel, {
    groups: groups,
    query: query,
    selected: selectedMission,
    onSelect: setSelectedMission
  }), React.createElement(MissionDetailPanel, {
    selected: selectedMission,
    mission: item
  }))), item.relatedMissionFiles && React.createElement(ModalField, {
    label: "Campanhas herdadas"
  }, React.createElement(DossierChips, {
    items: item.relatedMissionFiles,
    limit: 10
  })), React.createElement(ModalField, {
    label: "Notas de precis\xE3o"
  }, React.createElement(BulletList, {
    items: item.precisionNotes
  })), React.createElement(ModalField, {
    label: "Tags"
  }, React.createElement(DossierChips, {
    items: item.tags,
    limit: 12
  })), React.createElement(ModalField, {
    label: "Fonte"
  }, React.createElement(SourceLinks, {
    items: item.source ? [item.source] : []
  })));
};
const WeaponDossierModalContent = ({
  item
}) => {
  const [groups, setGroups] = React.useState(item.fallbackGroups || []);
  const [query, setQuery] = React.useState("");
  const [status, setStatus] = React.useState(item.apiPage || item.categoryTitle ? "loading" : "static");
  const [error, setError] = React.useState("");
  const totalLoaded = groups.reduce((sum, group) => sum + asList(group.items).length, 0);
  React.useEffect(() => {
    let alive = true;
    setQuery("");
    setGroups(item.fallbackGroups || []);
    setError("");
    if (!item.apiPage && !item.categoryTitle) {
      setStatus("static");
      return () => {
        alive = false;
      };
    }
    setStatus("loading");
    loadWeaponGroups(item).then(loaded => {
      if (!alive) return;
      setGroups(loaded.length ? loaded : item.fallbackGroups || []);
      setStatus(loaded.length ? "ready" : "empty");
    }).catch(err => {
      if (!alive) return;
      setError(err?.message || "Nao foi possivel carregar a lista completa agora.");
      setGroups(item.fallbackGroups || []);
      setStatus("error");
    });
    return () => {
      alive = false;
    };
  }, [item.id]);
  return React.createElement(React.Fragment, null, React.createElement(MetaGrid, {
    rows: [["Lançamento", item.releaseYear], ["Ano da história", item.storyYear], ["Universo", item.universe], ["Cidade", item.city], ["Total / fonte", item.totalLabel], ["Arquivo carregado", item.apiPage || item.categoryTitle || "dossiê estático"]]
  }), React.createElement(ModalField, {
    label: "Resumo"
  }, item.summary), React.createElement(ModalField, {
    label: "Como o arsenal funciona"
  }, React.createElement(BulletList, {
    items: item.systems
  })), React.createElement("div", {
    className: "dossier-modal-split"
  }, React.createElement(ModalField, {
    label: "Cobertura"
  }, React.createElement(DossierChips, {
    items: item.coverage,
    limit: 20
  })), React.createElement(ModalField, {
    label: "Armas marcantes"
  }, React.createElement(DossierChips, {
    items: item.highlights,
    limit: 20
  }))), React.createElement(ModalField, {
    label: "Lista completa por classe"
  }, React.createElement("div", {
    className: "dossier-weapon-modal-tools"
  }, React.createElement("input", {
    value: query,
    onChange: event => setQuery(event.target.value),
    placeholder: "Filtrar dentro do arsenal: Minigun, Katana, Mk II..."
  }), React.createElement("span", {
    className: `dossier-weapon-load-state ${status}`
  }, status === "loading" ? "carregando fonte..." : status === "error" ? "fonte indisponível agora" : status === "empty" ? "sem tabela pública completa" : `${totalLoaded} registros carregados`)), error && React.createElement("p", {
    className: "dossier-weapon-error"
  }, error), React.createElement(WeaponGroupsPanel, {
    groups: groups,
    query: query
  })), item.relatedWeaponFiles && React.createElement(ModalField, {
    label: "Arsenais herdados"
  }, React.createElement(DossierChips, {
    items: item.relatedWeaponFiles,
    limit: 10
  })), React.createElement(ModalField, {
    label: "Notas de precis\xE3o"
  }, React.createElement(BulletList, {
    items: item.precisionNotes
  })), React.createElement(ModalField, {
    label: "Tags"
  }, React.createElement(DossierChips, {
    items: item.tags,
    limit: 12
  })), React.createElement(ModalField, {
    label: "Fonte"
  }, React.createElement(SourceLinks, {
    items: item.source ? [item.source] : []
  })));
};
const DossierRecordModal = ({
  record,
  onClose
}) => {
  if (!record?.item) return null;
  const item = record.item;
  const title = item.title || item.name || item.term;
  const subtitle = record.type === "game" ? `${item.universe} · ${item.city}` : record.type === "character" ? `${item.role} · ${item.city}` : record.type === "city" ? `${item.realWorldInspiration}` : record.type === "faction" ? `${item.category} · ${item.city}` : record.type === "onlineDlc" ? `${item.releaseDate} / ${item.type}` : record.type === "mission" ? `${item.universe} · ${item.totalLabel}` : record.type === "vehicle" ? `${item.universe} · ${item.totalLabel}` : record.type === "weapon" ? `${item.universe} · ${item.totalLabel}` : record.type === "glossary" ? `${item.category || "Glossario"} / termo de referencia` : item.universe || "Arquivo";
  const recordLabel = record.type === "onlineDlc" ? "ONLINE DLC" : record.type === "mission" ? "MISSÕES" : record.type === "vehicle" ? "FROTA" : record.type === "weapon" ? "ARSENAL" : record.type === "glossary" ? "GLOSSARIO" : record.type.toUpperCase();
  return React.createElement("div", {
    className: "dossier-modal-back dossier-shell",
    onClick: onClose
  }, React.createElement("article", {
    className: "dossier-modal",
    onClick: e => e.stopPropagation()
  }, React.createElement("header", null, React.createElement("div", null, React.createElement("span", null, "Dossi\xEA completo"), React.createElement("h2", null, title), React.createElement("p", null, subtitle)), React.createElement("button", {
    onClick: onClose,
    "aria-label": "Fechar"
  }, "\xD7")), React.createElement("div", {
    className: "dossier-modal-grid"
  }, React.createElement("aside", {
    className: "dossier-modal-evidence"
  }, record.type === "city" ? React.createElement(CityImageCarousel, {
    city: item,
    className: "modal"
  }) : React.createElement("div", {
    className: `dossier-cover-art ${universeTone(item.universe || item.category)} ${item.media ? "has-official" : ""}`
  }, item.media ? React.createElement(OfficialMedia, {
    media: item.media,
    className: "dossier-cover-media"
  }) : React.createElement("div", {
    className: "dossier-cover-map"
  }), React.createElement("div", {
    className: "dossier-cover-label"
  }, React.createElement("strong", null, recordLabel), React.createElement("small", null, item.id || item.year || item.term || "arquivo"))), React.createElement(DossierChips, {
    items: item.tags || [item.universe, item.category, item.certainty].filter(Boolean),
    limit: 10
  })), React.createElement("section", {
    className: "dossier-modal-content"
  }, record.type === "game" && React.createElement(React.Fragment, null, React.createElement(MetaGrid, {
    rows: [["Lançamento", item.releaseYear], ["Ano da história", item.storyYear], ["Protagonista", item.protagonist], ["Antagonistas", item.antagonists], ["Personagens secundários", item.supportingCharacters], ["Facções", item.factions]]
  }), React.createElement(ModalField, {
    label: "Resumo"
  }, item.summary), React.createElement(ModalField, {
    label: "Hist\xF3ria completa"
  }, item.fullStory), React.createElement(ModalField, {
    label: "Desenvolvimento"
  }, item.developmentHistory), React.createElement(ModalField, {
    label: "Import\xE2ncia"
  }, item.importance), React.createElement(ModalField, {
    label: "Temas"
  }, React.createElement(DossierChips, {
    items: item.themes,
    limit: 12
  }))), record.type === "mission" && React.createElement(MissionDossierModalContent, {
    item: item
  }), record.type === "vehicle" && React.createElement(VehicleDossierModalContent, {
    item: item
  }), record.type === "weapon" && React.createElement(WeaponDossierModalContent, {
    item: item
  }), record.type === "character" && React.createElement(React.Fragment, null, React.createElement(MetaGrid, {
    rows: [["Jogos", item.games], ["Universo", item.universe], ["Cidade", item.city], ["Papel", item.role], ["Lealdades", item.affiliations], ["Conflitos", item.enemies], ["Destino", item.fate], ["Importância", item.importance]]
  }), React.createElement(ModalField, {
    label: "Biografia"
  }, item.biography), React.createElement(ModalField, {
    label: "Arco narrativo"
  }, item.storyArc), React.createElement(ModalField, {
    label: "Rela\xE7\xF5es importantes"
  }, React.createElement(BulletList, {
    items: item.relationships
  }))), record.type === "city" && React.createElement(React.Fragment, null, React.createElement(MetaGrid, {
    rows: [["Inspiração real", item.realWorldInspiration], ["Universos", item.universeAppearances], ["Universo visual", item.selectedUniverseLabel], ["Jogos", item.games], ["Distritos/áreas", item.districts], ["Gangues dominantes", item.factions], ["Personagens ligados", item.characters]]
  }), React.createElement(ModalField, {
    label: "Descri\xE7\xE3o"
  }, item.description), React.createElement(ModalField, {
    label: "Eventos importantes"
  }, React.createElement(BulletList, {
    items: item.importantEvents
  })), React.createElement(ModalField, {
    label: "Est\xE9tica visual"
  }, item.visualStyle), React.createElement(ModalField, {
    label: "Temas"
  }, React.createElement(DossierChips, {
    items: item.themes,
    limit: 12
  }))), record.type === "faction" && React.createElement(React.Fragment, null, React.createElement(MetaGrid, {
    rows: [["Jogo", item.game], ["Cidade", item.city], ["Líderes", item.leaders], ["Aliados", item.allies], ["Inimigos", item.enemies], ["Negócios criminosos", item.businesses], ["Status/destino", item.status]]
  }), React.createElement(ModalField, {
    label: "Import\xE2ncia narrativa"
  }, item.narrativeImportance)), record.type === "timeline" && React.createElement(React.Fragment, null, React.createElement(MetaGrid, {
    rows: [["Ano", item.year], ["Universo", item.universe], ["Cidade", item.city], ["Protagonista", item.protagonist], ["Precisão", item.certainty]]
  }), React.createElement(ModalField, {
    label: "Resumo"
  }, item.summary), React.createElement(ModalField, {
    label: "Eventos"
  }, React.createElement(BulletList, {
    items: item.beats
  }))), record.type === "onlineDlc" && React.createElement(React.Fragment, null, React.createElement(MetaGrid, {
    rows: [["Lancamento", item.releaseDate], ["Ano", item.year], ["Fase", item.era], ["Tipo", item.type], ["Sistemas", item.systems], ["Modos", item.modes], ["Veiculos", item.vehicles], ["Personagens", item.characters]]
  }), React.createElement(ModalField, {
    label: "Resumo"
  }, item.summary), React.createElement(ModalField, {
    label: "O que trouxe"
  }, React.createElement(BulletList, {
    items: item.brought
  })), React.createElement(ModalField, {
    label: "Sistemas e propriedades"
  }, React.createElement(BulletList, {
    items: asList(item.systems).length ? item.systems : ["sem sistema persistente especifico; foco em conteudo, evento ou ajuste de plataforma"]
  })), React.createElement(ModalField, {
    label: "Veiculos e equipamentos"
  }, React.createElement(BulletList, {
    items: asList(item.vehicles).length ? item.vehicles : ["sem veiculo central; update focado em modo, evento, ferramenta ou atividade"]
  })), React.createElement(ModalField, {
    label: "Modos e atividades"
  }, React.createElement(BulletList, {
    items: asList(item.modes).length ? item.modes : ["sem modo destacado alem das atividades associadas ao update"]
  })), React.createElement(ModalField, {
    label: "Personagens e contatos"
  }, React.createElement(BulletList, {
    items: asList(item.characters).length ? item.characters : ["jogador online e contatos de sessao"]
  })), React.createElement(ModalField, {
    label: "Impacto em GTA Online"
  }, item.impact), React.createElement(ModalField, {
    label: "Leitura de gameplay"
  }, `Esta atualizacao se encaixa na fase "${item.era}" do Online e amplia a carreira criminal do jogador por meio de ${asList(item.systems).join(", ") || "novas atividades"}.`), React.createElement(ModalField, {
    label: "Tags"
  }, React.createElement(DossierChips, {
    items: item.tags,
    limit: 12
  })), React.createElement(ModalField, {
    label: "Fontes"
  }, React.createElement(SourceLinks, {
    items: item.sources
  }))), record.type === "glossary" && React.createElement(GlossaryTermModalContent, {
    item: item
  })))));
};
Object.assign(window, {
  DossierHUDNav,
  DossierHero,
  TimelineDossierSection,
  GamesDossierSection,
  MissionsDossierSection,
  VehiclesDossierSection,
  WeaponsDossierSection,
  DevelopmentDossierSection,
  CharactersDossierSection,
  CitiesDossierSection,
  FactionsDossierSection,
  UniversesDossierSection,
  RockstarDossierSection,
  GTAOnlineDossierSection,
  GTA6DossierSection,
  GlossaryDossierSection,
  ConnectionsImpactSection,
  DossierFooter,
  DossierRecordModal
});

/* >>> app.jsx */
;const M = C => React.memo(C);
const TimelineSec = M(TimelineDossierSection);
const GamesSec = M(GamesDossierSection);
const MissionsSec = M(MissionsDossierSection);
const VehiclesSec = M(VehiclesDossierSection);
const WeaponsSec = M(WeaponsDossierSection);
const DevelopmentSec = M(DevelopmentDossierSection);
const CharactersSec = M(CharactersDossierSection);
const CitiesSec = M(CitiesDossierSection);
const FactionsSec = M(FactionsDossierSection);
const UniversesSec = M(UniversesDossierSection);
const RockstarSec = M(RockstarDossierSection);
const GTAOnlineSec = M(GTAOnlineDossierSection);
const GTA6Sec = M(GTA6DossierSection);
const GlossarySec = M(GlossaryDossierSection);
const ConnectionsSec = M(ConnectionsImpactSection);
const HeroSec = M(DossierHero);
const FooterSec = M(DossierFooter);
function useScrollReveal() {
  React.useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = document.querySelectorAll(".dossier-section .dossier-section-head, .dossier-section .card");
    if (!targets.length) return;
    const STAGGER_CAP = 8;
    const counters = new Map();
    targets.forEach(el => {
      const parent = el.parentElement;
      const n = counters.get(parent) || 0;
      counters.set(parent, n + 1);
      if (n) el.style.setProperty("--ri", Math.min(n, STAGGER_CAP));
      el.classList.add("reveal");
    });
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        e.target.classList.toggle("reveal--in", e.isIntersecting);
      }
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08
    });
    targets.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function App() {
  const [dossier, setDossier] = React.useState(null);
  const [active, setActive] = React.useState("overview");
  useScrollReveal();
  React.useEffect(() => {
    const ids = (window.dossierNavData || NAV).map(n => n.id);
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, {
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0
    });
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  React.useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace("#", ""));
    if (!id) return;
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        block: "start"
      });
    }, 350);
  }, []);
  React.useEffect(() => {
    const k = e => {
      if (e.key === "Escape") setDossier(null);
    };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);
  return React.createElement(React.Fragment, null, React.createElement(DossierHUDNav, {
    active: active,
    onJump: setActive
  }), React.createElement(HeroSec, null), React.createElement(TimelineSec, {
    onOpenDossier: setDossier
  }), React.createElement(GamesSec, {
    onOpenDossier: setDossier
  }), React.createElement(MissionsSec, {
    onOpenDossier: setDossier
  }), React.createElement(VehiclesSec, {
    onOpenDossier: setDossier
  }), React.createElement(WeaponsSec, {
    onOpenDossier: setDossier
  }), React.createElement(DevelopmentSec, null), React.createElement(CharactersSec, {
    onOpenDossier: setDossier
  }), React.createElement(CitiesSec, {
    onOpenDossier: setDossier
  }), React.createElement(FactionsSec, {
    onOpenDossier: setDossier
  }), React.createElement(UniversesSec, null), React.createElement(RockstarSec, null), React.createElement(GTAOnlineSec, {
    onOpenDossier: setDossier
  }), React.createElement(GTA6Sec, null), React.createElement(GlossarySec, {
    onOpenDossier: setDossier
  }), React.createElement(ConnectionsSec, null), React.createElement(FooterSec, null), React.createElement(DossierRecordModal, {
    record: dossier,
    onClose: () => setDossier(null)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App, null));