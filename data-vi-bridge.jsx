/* ============================================================================
 * PONTE GTA VI → DOSSIÊ
 * ----------------------------------------------------------------------------
 * GTA VI vivia ilhado nas seções próprias (herói, personagens VI, Leonida,
 * catálogo). O resto do dossiê — cidades, personagens, gangues — parava em GTA V,
 * e no mapa de universos a era HD terminava num único pino "Leonida".
 *
 * Este módulo injeta o conteúdo de GTA VI nas coleções gerais, de duas fontes:
 *   1. window.VI_DATA (data-vi.jsx) — texto curado em pt-BR, oficial da Rockstar:
 *      as seis regiões de Leonida viram fichas de cidade completas;
 *   2. window.VI_BRIDGE (data-vi-bridge-generated.js, extraído do GTA Wiki):
 *      personagens e organizações catalogados, mais a lista de locais.
 *
 * Roda DEPOIS dos data-*.jsx e ANTES de i18n.jsx (ver sources.js), então as
 * entradas novas entram no snapshot de tradução como qualquer outro conteúdo.
 * ========================================================================== */
(function () {
  const VI = window.VI_DATA;
  const BRIDGE = window.VI_BRIDGE;
  if (!VI) return;

  /* O wiki usa marcadores para campo vazio; não devem virar texto de tela. */
  const PLACEHOLDER = /^(not given|n\/?a|unknown|none|desconhecido)$/i;
  const real = (s) => (typeof s === "string" && s.trim() && !PLACEHOLDER.test(s.trim()) ? s.trim() : "");

  const has = (list, id) => Array.isArray(list) && list.some((item) => item && item.id === id);

  /* ---------------------------------------------------------------- cidades */
  /* Cada região de Leonida vira ficha própria, com os locais do catálogo que
   * pertencem a ela como "distritos". É o que faz GTA VI aparecer no mapa de
   * universos e na busca de cidades com o mesmo peso das cidades clássicas. */
  const REGION_META = {
    "vi-vice-city": {
      cityId: "vi-vice-city", inspiration: "Miami, Flórida",
      themes: ["neon", "orla", "redes sociais", "dinheiro rápido", "sátira contemporânea"],
      chars: ["Lucia Caminos", "Jason Duval", "Boobie Ike", "Dre'Quan Priest", "Real Dimez"]
    },
    "vi-leonida-keys": {
      cityId: "vi-leonida-keys", inspiration: "Florida Keys",
      themes: ["arquipélago", "contrabando", "pesca", "vida de praia"],
      chars: ["Jason Duval", "Lucia Caminos", "Brian Heder"]
    },
    "vi-grassrivers": {
      cityId: "vi-grassrivers", inspiration: "Everglades",
      themes: ["pântano", "jacarés", "aerobarcos", "isolamento"],
      chars: []
    },
    "vi-port-gellhorn": {
      cityId: "vi-port-gellhorn", inspiration: "Panhandle da Flórida",
      themes: ["decadência turística", "strip malls", "economia informal"],
      chars: []
    },
    "vi-ambrosia": {
      cityId: "vi-ambrosia", inspiration: "interior industrial da Flórida",
      themes: ["usina de açúcar", "moto clube", "corrida", "lealdade local"],
      chars: ["Final Chapter MC"]
    },
    "vi-mount-kalaga": {
      cityId: "vi-mount-kalaga", inspiration: "florestas do norte da Flórida",
      themes: ["parque nacional", "caça", "off-road", "gente fora do mapa"],
      chars: []
    }
  };

  /* Casa um local do catálogo com a região pelo texto de área/nome. */
  const regionKeywords = {
    "vi-vice-city": ["vice city", "vice beach", "little cuba", "downtown vice"],
    "vi-leonida-keys": ["keys", "key lento", "cayo"],
    "vi-grassrivers": ["grassrivers", "swamp", "everglade"],
    "vi-port-gellhorn": ["gellhorn", "port gellhorn"],
    "vi-ambrosia": ["ambrosia"],
    "vi-mount-kalaga": ["kalaga", "national park"]
  };
  const locationsFor = (regionId) => {
    if (!BRIDGE || !Array.isArray(BRIDGE.locations)) return [];
    const keys = regionKeywords[regionId] || [];
    return BRIDGE.locations
      .filter((loc) => {
        const hay = ((loc.area || "") + " " + (loc.name || "")).toLowerCase();
        return keys.some((k) => hay.indexOf(k) !== -1);
      })
      .map((loc) => loc.name)
      .slice(0, 12);
  };

  if (Array.isArray(window.citiesData) || typeof citiesData !== "undefined") {
    const cities = typeof citiesData !== "undefined" ? citiesData : window.citiesData;
    const places = (VI.places && VI.places.list) || [];
    for (const place of places) {
      const meta = REGION_META[place.id];
      if (!meta || has(cities, meta.cityId)) continue;
      const districts = locationsFor(place.id);
      cities.push({
        id: meta.cityId,
        name: place.name,
        realWorldInspiration: meta.inspiration,
        universeAppearances: ["HD Universe"],
        games: ["GTA VI"],
        description: place.desc,
        districts: districts.length ? districts : ["locais ainda não detalhados pela Rockstar"],
        factions: (BRIDGE && BRIDGE.factions ? BRIDGE.factions : [])
          .filter((f) => (f.city || "").toLowerCase().indexOf(place.name.toLowerCase().split(" ")[0]) !== -1)
          .map((f) => f.name)
          .slice(0, 6),
        importantEvents: ["Conspiração de Lucia e Jason por Leonida (2026)"],
        characters: meta.chars,
        visualStyle: place.vibe || "",
        themes: meta.themes,
        media: null,
        galleryMedia: []
      });
    }
  }

  /* ----------------------------------------------------------- personagens */
  if (BRIDGE && Array.isArray(BRIDGE.characters) && typeof charactersData !== "undefined") {
    for (const character of BRIDGE.characters) {
      if (has(charactersData, character.id)) continue;
      /* Não duplica quem o dossiê já cobre à mão (Lucia, Jason…). */
      const already = charactersData.some((c) => c.name.toLowerCase() === character.name.toLowerCase());
      if (already) continue;
      charactersData.push(Object.assign({}, character, {
        role: real(character.role) || "Elenco de GTA VI",
        fate: real(character.fate) || "Não divulgado",
        city: real(character.city) || "Leonida"
      }));
    }
  }

  /* --------------------------------------------------------------- gangues */
  if (BRIDGE && Array.isArray(BRIDGE.factions) && typeof factionsData !== "undefined") {
    for (const faction of BRIDGE.factions) {
      if (has(factionsData, faction.id)) continue;
      const already = factionsData.some((f) => f.name.toLowerCase() === faction.name.toLowerCase());
      if (already) continue;
      factionsData.push(Object.assign({}, faction, {
        category: real(faction.category) || "Organização",
        city: real(faction.city) || "Leonida"
      }));
    }
  }
})();
