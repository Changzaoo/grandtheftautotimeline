/* Lista canônica de fontes do bundle (ordem importa) — usada por build.js e
 * por i18n/extract-content.js, para os dois enxergarem os mesmos arquivos. */
const SOURCES = [
  "components.jsx",
  "data.jsx",
  "data-gta.jsx",
  "data-dossier.jsx",
  "data-missions.jsx",
  "data-vehicles.jsx",
  "data-weapons.jsx",
  "data-vi.jsx",
  "data-easter-eggs.jsx",
  "data-mysteries.jsx",
  "data-vi-bridge-generated.js",
  "data-vi-bridge.jsx",
  "i18n.jsx",
  "sections-1.jsx",
  "sections-2.jsx",
  "sections-3.jsx",
  "sections-4.jsx",
  "sections-expanded.jsx",
  "sections-rockstar.jsx",
  "sections-dossier.jsx",
  "sections-vi.jsx",
  "sections-vi-catalog.jsx",
  "sections-easter-eggs.jsx",
  "sections-mysteries.jsx",
  "app.jsx",
  "enhance.jsx"
];

/* Arquivos cujo JSX passa pelo plugin i18n/babel-plugin-autotext.js (texto
 * literal envolvido em window.__T automaticamente). Dados ficam de fora (são
 * traduzidos pelo registro de dados em i18n.jsx) e i18n.jsx também. */
const JSX_AUTOTEXT_FILES = SOURCES.filter((f) => !/^data/.test(f) && f !== "i18n.jsx");

module.exports = { SOURCES, JSX_AUTOTEXT_FILES };
