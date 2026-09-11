/* ============ MÍDIA OFICIAL DE GTA VI (miniclipes, galerias e capa) ============
 * - Miniclipes: os loops que a Rockstar usa em rockstargames.com/VI/only-in-leonida
 *   e os "Video Clips" do pacote oficial de downloads (GTAVI_Videos.zip),
 *   convertidos para versões leves em assets/vi/clips (720p, sem som, faststart).
 * - Galerias: screenshots e artes oficiais da Rockstar espelhadas no GTA Wiki.
 * - Capa: arte oficial de capa de GTA VI.
 *
 * Ordem no bundle: depois de data-vi-bridge.jsx (personagens e cidades de GTA
 * VI já estão nas coleções) e antes de i18n.jsx (legendas entram na tradução).
 */

const viMediaDir = "assets/vi/clips/";
const viClipCredit = "Miniclipe oficial © Rockstar Games (rockstargames.com/VI), convertido para exibição leve.";
const viShotCredit = "Imagem oficial © Rockstar Games, via GTA Wiki / Fandom.";
const viWikiBase = "https://static.wikia.nocookie.net/gtawiki/images/";

/* "dir|arquivo|cb" -> mídia com miniatura de 1280px e versão de 2560px para a tela cheia. */
const viWikiMedia = (entry, caption, extra = {}) => {
  const [dir, file, cb] = entry.split("|");
  return {
    src: `${viWikiBase}${dir}/${file}/revision/latest/scale-to-width-down/1280?cb=${cb}`,
    full: `${viWikiBase}${dir}/${file}/revision/latest/scale-to-width-down/2560?cb=${cb}`,
    alt: caption,
    caption,
    credit: viShotCredit,
    source: `https://gta.fandom.com/wiki/File:${file}`,
    ...extra
  };
};

const viLoopMedia = (name, label, hq) => ({
  src: `${viMediaDir}${name}.jpg`,
  poster: `${viMediaDir}${name}.jpg`,
  video: `${viMediaDir}${name}.mp4`,
  videoHq: hq ? `${viMediaDir}${hq}.mp4` : null,
  posterHq: hq ? `${viMediaDir}${hq}.jpg` : null,
  alt: `Miniclipe oficial de ${label} em GTA VI`,
  caption: `Miniclipe oficial — ${label}`,
  credit: viClipCredit,
  source: "https://www.rockstargames.com/VI/only-in-leonida"
});

const viShotSet = (key, rows) => rows.map(([dir, cb], index) => `${dir}|OfficialScreenshots-GTAVI-PromotionalWebsite-${key}-SS${index + 1}.jpg|${cb}`);
const viCoupleArt = [
  "5/54|Artwork-JasonandLucia-GTAVI.jpg|20250508100941",
  "5/56|Artwork-JasonandLuciaMotel-GTAVI.jpg|20250506171605",
  "9/99|Artwork-JasonandLuciaTrailer2-GTAVI.jpg|20250506171603"
];

const viMediaSubjects = {
  jason: {
    label: "Jason Duval",
    loops: [["jason-intro", "jason-clip"], ["jason-quote"]],
    art: viCoupleArt,
    shots: viShotSet("JasonDuval", [["c/c4", "20250506161804"], ["d/df", "20250506161806"], ["7/73", "20250506161807"], ["3/37", "20250506161809"], ["c/c9", "20250506161810"], ["5/55", "20250506161811"]])
  },
  lucia: {
    label: "Lucia Caminos",
    loops: [["lucia-intro", "lucia-clip"], ["lucia-quote"]],
    art: viCoupleArt,
    shots: viShotSet("LuciaCaminos", [["f/f3", "20250506161813"], ["4/43", "20250506161814"], ["9/9c", "20250506161815"], ["2/23", "20250506161816"], ["4/4f", "20250506162231"], ["9/9d", "20250506161818"]])
  },
  cal: {
    label: "Cal Hampton",
    loops: [["cal", "cal-clip"]],
    art: ["d/d3|Artwork-CalHampton-GTAVI.jpg|20250506171606"],
    shots: viShotSet("CalHampton", [["6/67", "20250506161754"], ["9/99", "20250506161756"], ["0/07", "20250506162230"], ["9/9a", "20250506161757"]])
  },
  boobie: {
    label: "Boobie Ike",
    loops: [["boobie", "boobie-clip"]],
    art: ["1/19|Artwork-BoobieIke-GTAVI.jpg|20250506171608"],
    shots: viShotSet("BoobieIke", [["a/ae", "20250506161744"], ["6/67", "20250506161745"], ["e/e6", "20250506161747"], ["f/f4", "20250506161748"]])
  },
  drequan: {
    label: "Dre'Quan Priest",
    loops: [["drequan", "drequan-clip"]],
    art: ["b/bf|Artwork-DreQuanPriest-GTAVI.jpg|20250506171609"],
    shots: viShotSet("DreQuanPriest", [["2/2c", "20250506161759"], ["b/b9", "20250506161800"], ["7/78", "20250506161801"], ["7/7e", "20250506161803"]])
  },
  dimez: {
    label: "Real Dimez",
    loops: [["dimez", "dimez-clip"]],
    art: ["4/4a|Artwork-RealDimez-GTAVI.jpg|20250506171611"],
    shots: viShotSet("RealDimez", [["5/59", "20250506161824"], ["1/12", "20250506161825"], ["8/82", "20250506161827"], ["a/a4", "20250506161828"]])
  },
  raul: {
    label: "Raul Bautista",
    loops: [["raul", "raul-clip"]],
    art: ["a/a2|Artwork-RaulBautista-GTAVI.jpg|20250506171612"],
    shots: viShotSet("RaulBautista", [["b/bf", "20250506161819"], ["0/01", "20250506161820"], ["3/39", "20250506161821"], ["5/5e", "20250506161822"]])
  },
  brian: {
    label: "Brian Heder",
    loops: [["brian", "brian-clip"]],
    art: ["3/35|Artwork-BrianHeder-GTAVI.jpg|20250506171614"],
    shots: viShotSet("BrianHeder", [["b/b1", "20250506161750"], ["e/eb", "20250506161751"], ["9/9d", "20250506161752"], ["3/36", "20250506161753"]])
  },
  "vice-city": {
    label: "Vice City",
    loops: [["vice-city"]],
    art: ["e/e4|Artwork-ViceCity-BG-GTAVI.jpg|20250507072707"],
    shots: viShotSet("ViceCity", [["c/ce", "20250506164253"], ["c/cf", "20250506164254"], ["e/e6", "20250506164255"], ["f/f3", "20250506164256"], ["7/77", "20250506164257"], ["a/a9", "20250506164259"], ["0/04", "20250506164300"], ["f/fa", "20250506164301"], ["b/be", "20250506164302"]])
  },
  "leonida-keys": {
    label: "Leonida Keys",
    loops: [["leonida-keys"]],
    art: ["5/54|Artwork-LeonidaKeys-BG-GTAVI.jpg|20250507072703"],
    shots: viShotSet("LeonidaKeys", [["9/9a", "20250506164232"], ["8/8a", "20250506164233"], ["0/0c", "20250506164234"], ["9/99", "20250506164235"], ["a/ab", "20250506164237"]])
  },
  grassrivers: {
    label: "Grassrivers",
    loops: [["grassrivers"]],
    art: ["5/5e|Artwork-Grassrivers-BG-GTAVI.jpg|20250507072702"],
    shots: viShotSet("Grassrivers", [["4/48", "20250506164227"], ["2/2c", "20250506164228"], ["0/02", "20250506164230"], ["6/61", "20250506164231"]])
  },
  "port-gellhorn": {
    label: "Port Gellhorn",
    loops: [["port-gellhorn"]],
    art: ["b/bf|Artwork-PortGellhorn-BG-GTAVI.jpg|20250507072706"],
    shots: viShotSet("PortGellhorn", [["0/0d", "20250506164248"], ["e/eb", "20250506164249"], ["d/d6", "20250506164250"], ["3/3c", "20250506164251"], ["1/17", "20250506164252"]])
  },
  ambrosia: {
    label: "Ambrosia",
    loops: [["ambrosia"]],
    art: ["f/fa|Artwork-Ambrosia-BG-GTAVI.jpg|20250507072701"],
    shots: viShotSet("Ambrosia", [["4/40", "20250506164219"], ["6/67", "20250506164220"], ["f/f1", "20250506164221"], ["2/2e", "20250506164223"], ["7/7a", "20250506164224"]])
  },
  kalaga: {
    label: "Mount Kalaga",
    loops: [["kalaga"]],
    art: ["6/6c|Artwork-MountKalaga-BG-GTAVI.jpg|20250507072705"],
    shots: viShotSet("MountKalaga", [["a/a7", "20250506164238"], ["1/1c", "20250506164239"], ["a/a7", "20250506164241"], ["e/e0", "20250506164242"], ["7/70", "20250506164243"], ["e/e2", "20250506164245"]])
  }
};

const viSubjectAliases = {
  "jason duval": "jason", "lucia caminos": "lucia", "cal hampton": "cal", "boobie ike": "boobie",
  "dre quan priest": "drequan", "drequan priest": "drequan", "real dimez": "dimez", "raul bautista": "raul",
  "brian heder": "brian", "vice city": "vice-city", "leonida keys": "leonida-keys", "grassrivers": "grassrivers",
  "port gellhorn": "port-gellhorn", "ambrosia": "ambrosia", "mount kalaga": "kalaga", "mount kalaga national park": "kalaga"
};
const viSubjectKey = (value) => {
  const key = String(value || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/^vi-(cat-)?/, "").replace(/[^a-z0-9]+/g, " ").trim();
  return viSubjectAliases[key] || null;
};

const viMediaClips = {};
const viMediaGalleries = {};
Object.keys(viMediaSubjects).forEach((key) => {
  const subject = viMediaSubjects[key];
  const loops = subject.loops.map(([name, hq]) => viLoopMedia(name, subject.label, hq));
  /* artwork: arte de fundo/pôster (sem código de screenshot). As das regiões são
   * paisagens sem pessoas — as únicas usadas como imagem ilustrativa no catálogo. */
  const art = (subject.art || []).map((entry) => viWikiMedia(entry, `Arte oficial — ${subject.label}`, { artwork: true }));
  const shots = subject.shots.map((entry, index) => viWikiMedia(entry, `Screenshot oficial ${index + 1} — ${subject.label}`));
  viMediaClips[key] = loops[0];
  viMediaGalleries[key] = [...loops, ...art, ...shots];
});

const viMediaCover = viWikiMedia("2/25|GTAVI-CoverArt.jpg|20260618132434", "Capa oficial de Grand Theft Auto VI", {
  fit: "contain",
  src: "https://static.wikia.nocookie.net/gtawiki/images/2/25/GTAVI-CoverArt.jpg/revision/latest/scale-to-width-down/972?cb=20260618132434"
});
const viMediaGameArt = [
  ...viCoupleArt.map((entry) => viWikiMedia(entry, "Arte oficial — Jason e Lucia")),
  viWikiMedia("3/33|Artwork-JasonandLuciaLogos-GTAVI.jpg|20250508100940", "Arte oficial com logotipo de GTA VI"),
  viWikiMedia("f/f8|Artwork-Trailer2Thumbnail-GTAVI.jpg|20250506171017", "Arte oficial do Trailer 2"),
  viWikiMedia("0/0c|Artwork-Trailer1Thumbnail-woDate-GTAVI.jpg|20250507062719", "Arte oficial do Trailer 1")
];

window.VI_MEDIA = {
  clips: viMediaClips,
  galleries: viMediaGalleries,
  cover: viMediaCover,
  gameArt: viMediaGameArt,
  editions: {
    standard: viLoopMedia("back-of-box", "capa animada de GTA VI"),
    ultimate: viLoopMedia("ultimate-edition", "Ultimate Edition"),
    outro: viLoopMedia("outro", "Leonida")
  },
  subjectKey: viSubjectKey
};

/* Aplica a mídia nas coleções do dossiê. */
(function viAttachMedia() {
  const M = window.VI_MEDIA;
  const list = (value) => (Array.isArray(value) ? value : value ? [value] : []);
  const sameMedia = (a, b) => (a.video || a.src) === (b.video || b.src);
  const unique = (items) => items.filter((m, i, all) => m && (m.src || m.video) && all.findIndex((x) => x && sameMedia(x, m)) === i);

  if (typeof charactersData !== "undefined") {
    for (let i = charactersData.length - 1; i >= 0; i--) {
      const character = charactersData[i];
      const isVI = /^vi-/.test(character.id) || /gta vi\b/i.test(String(character.games)) || /grand theft auto vi\b/i.test(String(character.games));
      const key = isVI ? (viSubjectKey(character.name) || viSubjectKey(character.id)) : null;
      if (key && M.clips[key] && !/^(vice-city|leonida-keys|grassrivers|port-gellhorn|ambrosia|kalaga)$/.test(key)) {
        const previous = character.media && character.media.src && !character.media.relatedOnly ? character.media : null;
        character.media = M.clips[key];
        character.galleryMedia = unique([M.clips[key], previous, ...M.galleries[key].slice(1)]);
      }
      /* Fichas do catálogo sem nenhuma imagem pública (menção de texto no wiki,
       * NPC sem nome) saem da grade em vez de virar monograma. */
      if (/^vi-cat-/.test(character.id) && !(character.media && character.media.src)) charactersData.splice(i, 1);
    }
  }

  if (typeof citiesData !== "undefined") {
    citiesData.forEach((city) => {
      if (!/^vi-/.test(city.id)) return;
      const key = viSubjectKey(city.id);
      if (!key || !M.clips[key]) return;
      city.media = M.clips[key];
      city.galleryMedia = unique([...M.galleries[key], ...list(city.galleryMedia)]).slice(0, 24);
    });
  }

  if (typeof gamesData !== "undefined") {
    const game = gamesData.find((entry) => entry.id === "gta-vi");
    if (game) {
      const previous = game.media;
      game.media = M.cover;
      game.galleryMedia = unique([M.cover, M.editions.standard, ...M.gameArt, previous]);
    }
  }

  if (typeof deepDossierData !== "undefined" && typeof officialMediaByGameId !== "undefined") {
    const dma = deepDossierData["race-n-chase-engine"];
    if (dma && !dma.media && officialMediaByGameId["gta-1"]) {
      dma.media = { ...officialMediaByGameId["gta-1"], caption: "Grand Theft Auto (1997), feito no motor da DMA Design" };
    }
    const rw = deepDossierData.renderware;
    if (rw && !rw.media && officialMediaByGameId["gta-iii"]) {
      rw.media = { ...officialMediaByGameId["gta-iii"], caption: "Grand Theft Auto III, construído sobre a RenderWare" };
    }
  }
})();
