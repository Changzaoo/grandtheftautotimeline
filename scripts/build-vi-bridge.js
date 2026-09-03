/* Gera data-vi-bridge-generated.js a partir de live/vi-catalog.json.
 *
 * O catálogo do GTA Wiki alimenta a seção "Catálogo GTA VI", mas o resto do
 * dossiê (personagens, gangues, cidades) vinha só da saga antiga — GTA VI
 * aparecia em um canto só. Este script recorta do catálogo o que cabe nas
 * coleções do dossiê e grava um módulo enxuto que entra no bundle:
 *
 *   window.VI_BRIDGE = { characters: [...], factions: [...], locations: [...] }
 *
 * data-vi-bridge.jsx consome isso e injeta os itens em charactersData,
 * factionsData e citiesData. Regenerado pela mesma GitHub Action que atualiza
 * o catálogo, então conteúdo novo do jogo aparece no site inteiro sozinho.
 *
 * Uso: node scripts/build-vi-bridge.js
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const CATALOG = path.join(ROOT, "live", "vi-catalog.json");
const OUT = path.join(ROOT, "data-vi-bridge-generated.js");

if (!fs.existsSync(CATALOG)) {
  console.error("live/vi-catalog.json ausente — rode node scripts/build-vi-catalog.js antes.");
  process.exit(2);
}
const catalog = JSON.parse(fs.readFileSync(CATALOG, "utf8"));
const items = Array.isArray(catalog.items) ? catalog.items : [];

const byGroup = (g) => items.filter((it) => it.group === g);
const clean = (s) => (typeof s === "string" ? s.trim() : "");
/* O wiki às vezes deixa frases truncadas ("featured in the of the ."). */
const usableDesc = (s) => {
  const t = clean(s);
  if (!t || t.length < 25) return "";
  if (/\b(of the|in the|the)\s*\.$/.test(t)) return "";
  return t;
};
const listFrom = (s) => clean(s).split(/\s*[,;]\s*|\s+e\s+/).map(clean).filter(Boolean).slice(0, 8);

/* Só entra no dossiê o que o wiki marca como confirmado e sem aviso de leak:
 * material de build vazada não é fato do jogo. */
const solid = (it) => it.status !== "mencionado" && !it.leak;

const mediaOf = (it) => (it.image ? { src: it.image, alt: it.title, credit: "Imagem via GTA Wiki / Fandom", source: it.url } : null);

const characters = byGroup("characters").filter(solid).map((it) => {
  const m = it.meta || {};
  return {
    id: "vi-cat-" + it.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    name: clean(it.title),
    aliases: [],
    games: ["Grand Theft Auto VI"],
    universe: "HD Universe",
    city: clean(m.home) || "Leonida",
    role: clean(m.occupation) || "Personagem de GTA VI",
    category: "GTA VI",
    biography: usableDesc(it.desc) || `Personagem de Grand Theft Auto VI, no estado de Leonida.`,
    storyArc: "Detalhes de trama não divulgados pela Rockstar até o lançamento.",
    relationships: [],
    affiliations: listFrom(m.affiliations),
    enemies: [],
    fate: clean(m.status) || "Desconhecido",
    importance: "Personagem catalogado do elenco de GTA VI.",
    tags: ["GTA VI", "Leonida", "HD Universe"].concat(m.gender ? [clean(m.gender)] : []),
    media: mediaOf(it)
  };
});

const factions = byGroup("gangs").filter(solid).map((it) => {
  const m = it.meta || {};
  return {
    id: "vi-gang-" + it.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    name: clean(it.title),
    category: clean(m.type) || "Organização",
    game: "Grand Theft Auto VI",
    city: clean(m.location) || "Leonida",
    leaders: m.leader ? listFrom(m.leader) : [],
    allies: [],
    enemies: [],
    businesses: listFrom(m.type),
    narrativeImportance: usableDesc(it.desc) || "Organização presente em Grand Theft Auto VI.",
    status: "Ativa em GTA VI",
    tags: ["GTA VI", "Leonida"].concat(m.founded ? ["fundada em " + clean(m.founded)] : []),
    media: mediaOf(it)
  };
});

/* Locais: viram chips dentro das fichas das regiões de Leonida. */
const locations = byGroup("locations").filter(solid).map((it) => ({
  name: clean(it.title),
  kind: clean((it.meta || {}).kind) || "",
  area: clean((it.meta || {}).location || it.sub)
})).filter((l) => l.name);

const counts = {
  vehicles: (catalog.counts && catalog.counts.vehicles) || byGroup("vehicles").length,
  weapons: (catalog.counts && catalog.counts.weapons) || byGroup("weapons").length,
  businesses: byGroup("businesses").length,
  animals: byGroup("animals").length,
  radio: byGroup("radio").length
};

const payload = { generatedAt: catalog.generatedAt, characters, factions, locations, counts };
const body =
  "/* GERADO por scripts/build-vi-bridge.js a partir de live/vi-catalog.json.\n" +
  " * NÃO editar à mão — rode o script depois de atualizar o catálogo. */\n" +
  "window.VI_BRIDGE = " + JSON.stringify(payload) + ";\n";
fs.writeFileSync(OUT, body, "utf8");

console.log("data-vi-bridge-generated.js:",
  characters.length, "personagens ·", factions.length, "gangues ·", locations.length, "locais ·",
  counts.vehicles, "veículos /", counts.weapons, "armas no catálogo");
