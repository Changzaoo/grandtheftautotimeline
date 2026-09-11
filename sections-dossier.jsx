/* ============ GTA DOSSIER SECTIONS ============ */

const gtaDossierNamespace = window.Dossier || {};

const dossierNav = () => window.dossierNavData || window.NAV || [
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
  { id: "glossary", label: "Glossário", k: "15" }
];

const asList = (value) => Array.isArray(value) ? value : value ? [value] : [];
const textOf = (value) => Array.isArray(value) ? value.join(", ") : (value || "—");
const normalizeText = (value) => String(value || "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase();

const searchRecord = (record, query) => {
  if (!query) return true;
  return normalizeText(JSON.stringify(record)).includes(normalizeText(query));
};

/* Estas heurísticas classificam por PALAVRA-CHAVE em português. Depois da
 * troca de idioma o texto exibido está traduzido, então normalizamos sempre a
 * partir do original (window.__PT devolve o texto pt-BR de origem). */
const ptText = (v) => (window.__PT ? window.__PT(v) : v);

const tagTone = (value = "") => {
  const v = normalizeText(ptText(value));
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

const DossierIcon = ({ type = "file" }) => {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    file: <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/></svg>,
    map: <svg {...common}><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z"/><path d="M9 3v15M15 6v15"/></svg>,
    city: <svg {...common}><path d="M3 21h18"/><path d="M5 21V7l6-4 6 4v14"/><path d="M9 21v-6h6v6"/><path d="M8 9h1M12 9h1M16 9h1M8 12h1M16 12h1"/></svg>,
    police: <svg {...common}><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5z"/><path d="m9 12 2 2 4-5"/></svg>,
    car: <svg {...common}><path d="M3 16h18"/><path d="M5 16l2-6h10l2 6"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>,
    weapon: <svg {...common}><circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="2"/></svg>,
    users: <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    star: <svg {...common}><path d="m12 2 2.8 6.2 6.7.7-5 4.6 1.4 6.5-5.9-3.3L6.1 20l1.4-6.5-5-4.6 6.7-.7z"/></svg>,
    database: <svg {...common}><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>
  };
  return icons[type] || icons.file;
};

const DossierSectionHead = ({ eyebrow, title, accent, right, tkey }) => {
  const tr = (suffix, fallback) => (tkey && window.__t ? window.__t(tkey + "." + suffix, fallback) : fallback);
  return (
    <div className="dossier-section-head">
      <div>
        <div className="dossier-eyebrow" style={{ color: accent || "var(--evidence)" }}>{tr("eyebrow", eyebrow)}</div>
        <h2>{tr("title", title)}</h2>
      </div>
      {right && <div className="dossier-head-note">{right}</div>}
    </div>
  );
};

const DossierChips = ({ items, limit = 8 }) => (
  <div className="dossier-chip-row">
    {asList(items).slice(0, limit).map((item, index) => (
      <Tag key={`${item}-${index}`} tone={tagTone(item)}>{item}</Tag>
    ))}
  </div>
);

const mediaCaption = (media) => media?.caption || media?.credit || "Rockstar Games";

const dzReducedMotion = () => typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const dzSaveData = () => Boolean(window.navigator && window.navigator.connection && window.navigator.connection.saveData);

/* Miniclipe em loop: só baixa quando entra na tela, pausa ao sair e respeita
 * "reduzir movimento" e economia de dados (aí fica parado no pôster). */
const DzLoop = ({ src, poster, alt, className = "", style }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !src || dzReducedMotion() || dzSaveData() || typeof window.IntersectionObserver !== "function") return undefined;
    const io = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!el.getAttribute("src")) el.setAttribute("src", src);
          const playing = el.play();
          if (playing && playing.catch) playing.catch(() => {});
        } else if (!el.paused) {
          el.pause();
        }
      });
    }, { rootMargin: "160px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [src]);
  return <video ref={ref} className={className} poster={poster} muted loop playsInline preload="none" aria-label={alt} style={style} />;
};

/* ---------------------------------------------------------------------------
 * TELA CHEIA: clicar numa imagem ou miniclipe abre o visualizador aqui mesmo
 * (setas, teclado, legenda e crédito) — nada de mandar o visitante para fora.
 * ------------------------------------------------------------------------- */
const dzFullSrc = (src = "") => {
  const value = String(src);
  if (/static\.wikia\.nocookie\.net/.test(value)) {
    return value.replace(/\/revision\/latest(\/scale-to-width-down\/\d+)?/, "/revision/latest/scale-to-width-down/2560");
  }
  if (/[?&]imwidth=\d+/.test(value)) return value.replace(/imwidth=\d+/, "imwidth=2560");
  return value;
};

const dzMediaEntry = (media) => {
  if (!media || !(media.src || media.video)) return null;
  return {
    src: media.full || dzFullSrc(media.src || media.poster || ""),
    fallback: media.src || media.poster || "",
    video: media.videoHq || media.video || null,
    poster: media.posterHq || media.poster || media.src || "",
    alt: media.alt || media.caption || "",
    caption: media.caption || "",
    credit: media.credit || "",
    fromGame: media.fromGame || ""
  };
};

window.dzOpenLightbox = (items, index = 0) => {
  const list = (Array.isArray(items) ? items : [items]).map(dzMediaEntry).filter(Boolean);
  if (!list.length) return;
  window.dispatchEvent(new CustomEvent("dz:lightbox", { detail: { items: list, index: Math.min(Math.max(0, index), list.length - 1) } }));
};

const DzLightbox = () => {
  const [state, setState] = React.useState(null);
  React.useEffect(() => {
    const onOpen = (event) => setState({ items: event.detail.items, index: event.detail.index || 0 });
    window.addEventListener("dz:lightbox", onOpen);
    return () => window.removeEventListener("dz:lightbox", onOpen);
  }, []);
  React.useEffect(() => {
    if (!state) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") { event.stopImmediatePropagation(); setState(null); }
      if (event.key === "ArrowRight") setState((s) => s && { ...s, index: (s.index + 1) % s.items.length });
      if (event.key === "ArrowLeft") setState((s) => s && { ...s, index: (s.index - 1 + s.items.length) % s.items.length });
    };
    window.addEventListener("keydown", onKey, true);
    document.documentElement.classList.add("dz-lightbox-open");
    return () => {
      window.removeEventListener("keydown", onKey, true);
      document.documentElement.classList.remove("dz-lightbox-open");
    };
  }, [state]);
  if (!state) return null;
  const item = state.items[state.index];
  const many = state.items.length > 1;
  const go = (delta) => (event) => {
    event.stopPropagation();
    setState((s) => ({ ...s, index: (s.index + delta + s.items.length) % s.items.length }));
  };
  return (
    <div className="dz-lightbox" role="dialog" aria-modal="true" aria-label="Mídia em tela cheia" onClick={() => setState(null)}>
      <figure onClick={(event) => event.stopPropagation()}>
        {item.video ? (
          <video key={item.video} src={item.video} poster={item.poster} autoPlay loop muted playsInline controls />
        ) : (
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            referrerPolicy="no-referrer"
            onError={(event) => { if (item.fallback && event.currentTarget.getAttribute("src") !== item.fallback) event.currentTarget.setAttribute("src", item.fallback); }}
          />
        )}
        <figcaption>
          <span>{item.caption}{item.fromGame ? ` · foto de ${item.fromGame}` : ""}</span>
          {many && <b>{state.index + 1} / {state.items.length}</b>}
          {item.credit && <small>{item.credit}</small>}
        </figcaption>
      </figure>
      {many && <button type="button" className="dz-lightbox-nav prev" onClick={go(-1)} aria-label="Mídia anterior">‹</button>}
      {many && <button type="button" className="dz-lightbox-nav next" onClick={go(1)} aria-label="Próxima mídia">›</button>}
      <button type="button" className="dz-lightbox-close" onClick={() => setState(null)} aria-label="Fechar tela cheia">×</button>
    </div>
  );
};

const DzGalleryStrip = ({ items, limit = 24 }) => {
  const list = (Array.isArray(items) ? items : []).filter((m) => m && (m.src || m.video));
  if (list.length < 2) return null;
  return (
    <div className="dz-gallery-strip">
      {list.slice(0, limit).map((media, index) => (
        <button type="button" key={`${media.video || media.src}-${index}`} onClick={() => window.dzOpenLightbox(list, index)} aria-label={`Abrir mídia ${index + 1} de ${list.length}`}>
          <img src={media.poster || media.src} alt="" loading="lazy" referrerPolicy="no-referrer" />
          {media.video && <span className="dz-gallery-play" aria-hidden="true">▶</span>}
        </button>
      ))}
    </div>
  );
};

const OfficialMedia = ({ media, className = "", zoom = false, gallery }) => {
  if (!media?.src && !media?.video) return null;
  const caption = mediaCaption(media);
  const imageStyle = {
    objectPosition: media.position || undefined,
    objectFit: media.fit || undefined
  };
  /* --media-src alimenta o fundo desfocado (ver .dossier-mugshot-media::before):
   * assim a foto aparece inteira, sem corte, e o vazio ao redor vira um borrão
   * da própria imagem em vez de barra preta. */
  const figureStyle = media.src ? { "--media-src": `url("${String(media.src).replace(/"/g, "%22")}")` } : undefined;
  const open = zoom ? (event) => {
    if (event) { event.preventDefault(); event.stopPropagation(); }
    const list = (Array.isArray(gallery) && gallery.length ? gallery : [media]).filter((m) => m && (m.src || m.video));
    const index = list.findIndex((m) => m === media || (m.video && m.video === media.video) || (!m.video && m.src === media.src));
    window.dzOpenLightbox(list, Math.max(0, index));
  } : undefined;
  return (
    <figure
      className={`official-media ${media.video ? "has-video" : ""} ${zoom ? "is-zoomable" : ""} ${className}`}
      style={figureStyle}
      onClick={open}
      role={zoom ? "button" : undefined}
      tabIndex={zoom ? 0 : undefined}
      aria-label={zoom ? `Ampliar em tela cheia: ${media.alt || caption}` : undefined}
      onKeyDown={zoom ? (event) => { if (event.key === "Enter" || event.key === " ") open(event); } : undefined}
    >
      {media.video
        ? <DzLoop src={media.video} poster={media.poster || media.src} alt={media.alt || caption} style={imageStyle} />
        : <img src={media.src} alt={media.alt || caption} loading="lazy" referrerPolicy="no-referrer" style={imageStyle} />}
      <figcaption>{caption}</figcaption>
      {zoom && <span className="official-media-zoom" aria-hidden="true">{media.video ? "▶" : "⤢"}</span>}
    </figure>
  );
};

const CityImageCarousel = ({ city, className = "" }) => {
  const mediaItems = asList(city?.galleryMedia || city?.media);
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => setIndex(0), [city?.id, city?.selectedUniverseId]);

  if (!mediaItems.length) return null;

  const activeIndex = ((index % mediaItems.length) + mediaItems.length) % mediaItems.length;
  const active = mediaItems[activeIndex];
  const move = (delta) => setIndex((current) => current + delta);

  return (
    <div className={`dossier-city-carousel ${className}`}>
      <OfficialMedia media={active} className="dossier-city-carousel-media" zoom gallery={mediaItems} />
      {mediaItems.length > 1 && (
        <>
          <div className="dossier-city-carousel-controls">
            <button type="button" onClick={() => move(-1)} aria-label="Imagem anterior">&lt;</button>
            <span>{activeIndex + 1} / {mediaItems.length}</span>
            <button type="button" onClick={() => move(1)} aria-label="Proxima imagem">&gt;</button>
          </div>
          <div className="dossier-city-carousel-thumbs">
            {mediaItems.map((media, thumbIndex) => (
              <button
                type="button"
                key={`${city?.id || "city"}-${media.src}-${thumbIndex}`}
                className={thumbIndex === activeIndex ? "active" : ""}
                onClick={() => setIndex(thumbIndex)}
                aria-label={`Abrir imagem ${thumbIndex + 1}`}
              >
                <img src={media.src} alt={media.alt || mediaCaption(media)} loading="lazy" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const MetaGrid = ({ rows }) => (
  <div className="dossier-meta-grid">
    {rows.filter(Boolean).map(([label, value], index) => (
      <div key={`${label}-${index}`}>
        <span>{label}</span>
        <strong>{textOf(value)}</strong>
      </div>
    ))}
  </div>
);

const BulletList = ({ items }) => (
  <ul className="dossier-list">
    {asList(items).map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}
  </ul>
);

const SourceLinks = ({ items }) => {
  const links = asList(items);
  if (!links.length) return null;
  return (
    <div className="dossier-source-row">
      {links.map((source, index) => {
        const href = typeof source === "string" ? source : source.url;
        const label = typeof source === "string" ? source : (source.label || source.url);
        return (
          <a key={`${href || label}-${index}`} href={href} target="_blank" rel="noreferrer">
            {label}
          </a>
        );
      })}
    </div>
  );
};

const titleKey = (value) => normalizeText(value)
  .replace(/grand theft auto/g, "gta")
  .replace(/[^a-z0-9]+/g, " ")
  .trim();

const initialsOf = (value) => String(value || "")
  .replace(/["']/g, "")
  .split(/\s+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((part) => part[0])
  .join("")
  .toUpperCase();

/* ---------------------------------------------------------------------------
 * CARDS COMPACTOS (dz-*) + CRUZAMENTO DE FICHAS
 * O card mostra só o essencial — capa curta, resumo de 2–3 linhas, fatos numa
 * linha e chips — e o card INTEIRO abre o dossiê. O aprofundamento mora no
 * modal, que cruza jogos, personagens, cidades, facções e tecnologia.
 * ------------------------------------------------------------------------- */
const dzOpenKeys = (fn) => (event) => {
  if (event.key === "Enter" || event.key === " ") { event.preventDefault(); fn(); }
};

const dzHasValue = (value) => Array.isArray(value) ? value.filter(Boolean).length > 0 : Boolean(value);

const DzFallback = ({ label, icon }) => (
  <div className="dz-fallback">
    {icon && <DossierIcon type={icon} />}
    <strong>{initialsOf(label)}</strong>
  </div>
);

const DzCard = ({ media, fallback, badge, kicker, title, summary, facts = [], chips = [], onOpen, variant = "stack", thumb = "", className = "", cta, id }) => {
  const rows = facts.filter((row) => row && dzHasValue(row[1]));
  const chipList = asList(chips).filter(Boolean).slice(0, 2);
  const hasMedia = Boolean(media?.src);
  return (
    <article
      id={id}
      className={`card dz-card dz-card--${variant} ${className}`}
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      onClick={onOpen}
      onKeyDown={onOpen ? dzOpenKeys(onOpen) : undefined}
    >
      <Corners />
      {(hasMedia || fallback) && (
        <div className={`dz-thumb ${hasMedia ? "has-official" : ""} ${thumb ? `dz-thumb--${thumb}` : ""}`}>
          {hasMedia ? <OfficialMedia media={media} className="dz-media" /> : fallback}
          {badge && <span className="dz-badge">{badge}</span>}
        </div>
      )}
      <div className="dz-body">
        {kicker && <div className="dz-kicker">{kicker}</div>}
        <h3>{title}</h3>
        {summary && <p className="dz-sum">{summary}</p>}
        {rows.length > 0 && (
          <dl className="dz-facts">
            {rows.map(([label, value]) => (
              <div key={label}><dt>{label}</dt><dd>{textOf(asList(value).filter(Boolean).slice(0, 4))}</dd></div>
            ))}
          </dl>
        )}
        <div className="dz-foot">
          <div className="dz-chips">
            {chipList.map((chip, index) => <span key={`${chip}-${index}`} className={`dz-chip ${tagTone(chip)}`}>{chip}</span>)}
          </div>
          {onOpen && <span className="dz-open">{cta || "Dossiê"} ›</span>}
        </div>
      </div>
    </article>
  );
};

/* Chaves de comparação. Os campos já podem estar traduzidos: comparamos
 * sempre pelo texto de origem (ptText). */
const dzGameKey = (value) => {
  let key = titleKey(ptText(value));
  key = key.replace(/^gta iv (the )?(lost and damned|ballad of gay tony)/, "$2");
  key = key.replace(/^the /, "").replace(/^gta /, "");
  if (key === "1" || key === "1997") return "gta";
  return key;
};
const dzSameGame = (a, b) => {
  const ka = dzGameKey(a);
  return Boolean(ka) && ka === dzGameKey(b);
};
const dzNameKey = (value) => normalizeText(ptText(value)).replace(/['"]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
const dzUnique = (items) => {
  const seen = new Set();
  return items.filter((item) => item && !seen.has(item.id) && seen.add(item.id));
};

const dzFindCharacter = (name) => {
  const key = dzNameKey(String(ptText(name) || "").split(":")[0]);
  if (!key) return null;
  const namesOf = (character) => [...String(ptText(character.name)).split("/"), ...asList(ptText(character.aliases))].map(dzNameKey).filter(Boolean);
  const exact = charactersData.find((character) => namesOf(character).includes(key));
  if (exact || key.includes(" ")) return exact || null;
  const loose = charactersData.filter((character) => namesOf(character).some((n) => {
    const parts = n.split(" ");
    return parts.length > 1 && (parts[0] === key || parts[parts.length - 1] === key);
  }));
  return loose.length === 1 ? loose[0] : null;
};
const dzFactionByName = (name) => {
  const key = dzNameKey(name);
  if (!key) return null;
  return factionsData.find((faction) => dzNameKey(faction.name) === key) ||
    (key.length > 3 ? factionsData.find((faction) => {
      const fk = dzNameKey(faction.name);
      return fk.length > 3 && (fk.endsWith(" " + key) || key.endsWith(" " + fk));
    }) : null) || null;
};
const dzCityByName = (name) => {
  const key = dzNameKey(name);
  return key ? citiesData.find((city) => dzNameKey(city.name) === key) || null : null;
};
const dzSplit = (value, pattern = /\s*[,/]\s*/) => String(ptText(value) || "").split(pattern).map((part) => part.trim()).filter(Boolean);

const dzGamesByNames = (names) => dzUnique(asList(names).flatMap((name) => dzSplit(name, /\s*,\s*/)).map((name) => gamesData.find((game) => dzSameGame(game.title, name))));
const dzCharactersForGame = (game) => charactersData.filter((character) => asList(character.games).some((name) => dzSameGame(name, game.title)));
const dzFactionsForGame = (game) => factionsData.filter((faction) => dzSplit(faction.game, /\s*,\s*/).some((name) => dzSameGame(name, game.title)));
const dzCitiesForGame = (game) => citiesData.filter((city) => asList(city.games).some((name) => dzSameGame(name, game.title)));
const dzFactionsForCharacter = (character) => dzUnique(asList(character.affiliations).map(dzFactionByName));
const dzCitiesForCharacter = (character) => dzUnique(dzSplit(character.city).map(dzCityByName));
const dzRelatedCharacters = (character) => dzUnique(asList(character.relationships).map(dzFindCharacter)).filter((other) => other.id !== character.id);
const dzCharactersForFaction = (faction) => dzUnique([
  ...asList(faction.leaders).map(dzFindCharacter),
  ...charactersData.filter((character) => asList(character.affiliations).some((name) => dzFactionByName(name)?.id === faction.id))
]);
const dzCitiesForFaction = (faction) => dzUnique(dzSplit(faction.city).map(dzCityByName));
const dzCharactersForCity = (city) => dzUnique([
  ...asList(city.characters).map(dzFindCharacter),
  ...charactersData.filter((character) => dzSplit(character.city).some((name) => dzNameKey(name) === dzNameKey(city.name)))
]);
const dzFactionsForCity = (city) => dzUnique([
  ...asList(city.factions).map(dzFactionByName),
  ...factionsData.filter((faction) => dzSplit(faction.city).some((name) => dzNameKey(name) === dzNameKey(city.name)))
]);
const dzDossiersForGame = (list, game) => asList(list).filter((entry) => entry.gameId === game.id);
const dzDeep = (key) => (key && typeof deepDossierData !== "undefined" ? deepDossierData[key] : null) || null;
const dzGameById = (id) => gamesData.find((game) => game.id === id) || null;

/* Fábricas de atalho (mini-cards clicáveis dentro do modal). */
const dzLink = {
  game: (game) => game && { key: `game-${game.id}`, title: game.title, sub: `${game.releaseYear} · ${game.universe}`, media: game.media, record: { type: "game", item: game } },
  character: (character) => character && { key: `character-${character.id}`, title: character.name, sub: character.role, media: character.media, record: { type: "character", item: character } },
  city: (city) => city && { key: `city-${city.id}`, title: city.name, sub: city.realWorldInspiration, media: city.media, record: { type: "city", item: city } },
  faction: (faction) => faction && { key: `faction-${faction.id}`, title: faction.name, sub: faction.category, media: faction.media, record: { type: "faction", item: faction } },
  development: (dev) => dev && { key: `dev-${dev.id}`, title: dev.title, sub: dev.period, media: dzGameById(dev.gameId)?.media, record: { type: "development", item: dev } },
  universe: (universe) => universe && { key: `universe-${universe.id}`, title: universe.name, sub: universe.period, media: universe.media, record: { type: "universe", item: universe } },
  deep: (deep) => deep && { key: `deep-${deep.id}`, title: deep.title, sub: deep.era, media: deep.media, record: { type: "deep", item: deep } },
  mission: (entry) => entry && { key: `mission-${entry.id}`, title: entry.title, sub: entry.totalLabel, media: entry.media || dzGameById(entry.gameId)?.media, record: { type: "mission", item: { ...entry, media: entry.media || dzGameById(entry.gameId)?.media } } },
  vehicle: (entry) => entry && { key: `vehicle-${entry.id}`, title: entry.title, sub: entry.totalLabel, media: entry.media || dzGameById(entry.gameId)?.media, record: { type: "vehicle", item: { ...entry, media: entry.media || dzGameById(entry.gameId)?.media } } },
  weapon: (entry) => entry && { key: `weapon-${entry.id}`, title: entry.title, sub: entry.totalLabel, media: entry.media || dzGameById(entry.gameId)?.media, record: { type: "weapon", item: { ...entry, media: entry.media || dzGameById(entry.gameId)?.media } } }
};

const DzMiniGrid = ({ items, onOpen }) => (
  <div className="dz-minis">
    {items.map((entry) => (
      <button type="button" key={entry.key} className="dz-mini" onClick={() => onOpen(entry.record)}>
        <span className="dz-mini-thumb">
          {entry.media?.src ? <img src={entry.media.src} alt="" loading="lazy" referrerPolicy="no-referrer" /> : <b>{initialsOf(entry.title)}</b>}
        </span>
        <span className="dz-mini-text">
          <strong>{entry.title}</strong>
          {entry.sub && <small>{textOf(entry.sub)}</small>}
        </span>
      </button>
    ))}
  </div>
);

const DzRelated = ({ label, items, onOpen }) => {
  const list = asList(items).filter(Boolean);
  if (!list.length || !onOpen) return null;
  return (
    <ModalField label={`${label} · ${list.length}`}>
      <DzMiniGrid items={list} onOpen={onOpen} />
    </ModalField>
  );
};

/* Blocos do dossiê aprofundado (data-deep.jsx). */
const DeepDossierBlocks = ({ deep, skipLead = false }) => {
  if (!deep) return null;
  return (
    <>
      {!skipLead && deep.lead && <div className="dz-lead">{deep.lead}</div>}
      {asList(deep.stats).length > 0 && (
        <div className="dz-stats">
          {deep.stats.map((stat, index) => <div key={index}><strong>{stat.detail}</strong><span>{stat.label}</span></div>)}
        </div>
      )}
      {asList(deep.sheet).length > 0 && (
        <ModalField label="Ficha técnica">
          <dl className="dz-sheet">
            {deep.sheet.map((row, index) => <div key={index}><dt>{row.label}</dt><dd>{row.detail}</dd></div>)}
          </dl>
        </ModalField>
      )}
      {asList(deep.sections).map((section, index) => (
        <ModalField key={index} label={section.title}>
          {asList(section.details).map((paragraph, pIndex) => <p key={pIndex} className="dz-par">{paragraph}</p>)}
        </ModalField>
      ))}
      {asList(deep.components).length > 0 && (
        <ModalField label="Componentes e middleware">
          <div className="dz-components">
            {deep.components.map((part, index) => <div key={index}><strong>{part.name}</strong><span>{part.detail}</span></div>)}
          </div>
        </ModalField>
      )}
      {asList(deep.cast).length > 0 && (
        <ModalField label="Elenco de voz e atuação">
          <div className="dz-cast">
            {deep.cast.map((member, index) => <div key={index}><span>{member.name}</span><strong>{member.actor}</strong></div>)}
          </div>
        </ModalField>
      )}
      {asList(deep.timeline).length > 0 && (
        <ModalField label="Linha do tempo">
          <ol className="dz-timeline">
            {deep.timeline.map((step, index) => <li key={index}><b>{step.year}</b><div><strong>{step.title}</strong><span>{step.detail}</span></div></li>)}
          </ol>
        </ModalField>
      )}
      {asList(deep.titles).length > 0 && (
        <ModalField label="Jogos nesta tecnologia">
          <ol className="dz-timeline">
            {deep.titles.map((entry, index) => <li key={index}><b>{entry.year}</b><div><strong>{entry.name}</strong><span>{entry.detail}</span></div></li>)}
          </ol>
        </ModalField>
      )}
      {asList(deep.trivia).length > 0 && <ModalField label="Curiosidades"><BulletList items={deep.trivia} /></ModalField>}
      {asList(deep.uncertainty).length > 0 && <ModalField label="Oficial × não confirmado"><BulletList items={deep.uncertainty} /></ModalField>}
      {asList(deep.sources).length > 0 && <ModalField label="Fontes verificadas"><SourceLinks items={deep.sources} /></ModalField>}
    </>
  );
};

/* Índice do modal: lista os rótulos dos campos renderizados e rola até eles.
 * Relê depois de um instante porque listas da wiki chegam de forma assíncrona. */
const DzModalToc = ({ rootRef, watch }) => {
  const [entries, setEntries] = React.useState([]);
  const fieldLabels = () => (rootRef.current ? [...rootRef.current.querySelectorAll(".dossier-modal-content .dossier-modal-field > span")] : []);
  React.useEffect(() => {
    const collect = () => setEntries(fieldLabels().map((node) => node.textContent.trim()).filter(Boolean));
    collect();
    const timer = window.setTimeout(collect, 500);
    return () => window.clearTimeout(timer);
  }, [watch]);
  if (entries.length < 4) return null;
  /* No celular o índice começa fechado: aberto, empurrava o conteúdo para baixo. */
  const wide = typeof window.matchMedia === "function" && window.matchMedia("(min-width: 941px)").matches;
  const jump = (index) => fieldLabels()[index]?.parentElement?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <details className="dz-toc" open={wide}>
      <summary>Índice · {entries.length}</summary>
      <nav aria-label="Índice do dossiê">
        {entries.map((label, index) => <button type="button" key={`${label}-${index}`} onClick={() => jump(index)}>{label}</button>)}
      </nav>
    </details>
  );
};

const findGameForTimeline = (item) => {
  const aliases = {
    "gta london 1961": "london-1961",
    "gta london 1969": "london-1969",
    "the lost and damned": "lost-and-damned",
    "the ballad of gay tony": "ballad-gay-tony"
  };
  const key = titleKey(item.title);
  if (aliases[key]) return gamesData.find((game) => game.id === aliases[key]);
  const exactMatch = gamesData.find((game) => titleKey(game.title) === key);
  if (exactMatch) return exactMatch;
  return gamesData.find((game) => {
    const gameKey = titleKey(game.title);
    return gameKey.length > 4 && key.length > 4 && (gameKey.includes(key) || key.includes(gameKey));
  });
};

/* ---------------------------------------------------------------------------
 * Barras de navegação horizontais: elas seguem o scroll da PÁGINA (centralizam
 * a seção ativa) e aceitam o gesto do USUÁRIO (deslizar de lado para ver os
 * outros itens). As duas coisas disputam a mesma propriedade `scrollLeft`, por
 * isso o gesto tem prioridade: enquanto o usuário mexe — e por um tempo depois
 * — a centralização automática fica suspensa, senão a barra "puxaria de volta"
 * no meio do movimento.
 * ------------------------------------------------------------------------- */
const NAV_USER_HOLD_MS = 2600; /* quanto tempo o gesto do usuário tem prioridade */

/* Arrastar com o mouse/caneta (o toque já rola nativamente) + roda do mouse
 * convertida em rolagem lateral. Devolve um marcador de "usuário mexeu agora".
 * Também marca o gesto de toque, para o auto-centralizar não brigar com ele. */
const DRAG_THRESHOLD = 6; /* px antes de virar arrasto, e não clique */

const useNavGestures = (ref, markInteraction, dragEndRef) => {
  React.useEffect(() => {
    const nav = ref.current;
    if (!nav) return undefined;

    let pressed = false;
    let dragging = false;
    let startX = 0;
    let startScroll = 0;

    const onPointerDown = (event) => {
      /* Só arrasto com mouse/caneta: no toque o navegador já faz rolagem
       * nativa, com inércia — sequestrar isso deixaria o gesto pior. */
      if (event.pointerType === "touch") { markInteraction(); return; }
      if (event.button !== 0) return;
      pressed = true;
      dragging = false;
      startX = event.clientX;
      startScroll = nav.scrollLeft;
      /* NÃO marcar "is-dragging" aqui: essa classe desliga os links
       * (pointer-events:none) e um clique simples deixaria de navegar. Ela só
       * entra quando o ponteiro realmente andou. */
    };
    const onPointerMove = (event) => {
      if (!pressed) return;
      const delta = event.clientX - startX;
      if (!dragging && Math.abs(delta) <= DRAG_THRESHOLD) return;
      if (!dragging) {
        dragging = true;
        nav.classList.add("is-dragging");
      }
      markInteraction();
      nav.scrollLeft = startScroll - delta;
      event.preventDefault(); /* não selecionar texto durante o arrasto */
    };
    const endDrag = () => {
      if (!pressed) return;
      pressed = false;
      if (!dragging) return;
      dragging = false;
      nav.classList.remove("is-dragging");
      /* Marca o instante: o clique que vem logo depois de um arrasto de
       * verdade é ignorado pelo próprio link (ver onNavClick), sem depender de
       * um listener de captura correndo contra o disparo do clique. */
      if (dragEndRef) dragEndRef.current = Date.now();
    };
    /* Roda vertical sobre a barra = andar de lado, como no macOS. */
    const onWheel = (event) => {
      if (nav.scrollWidth <= nav.clientWidth) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      nav.scrollLeft += event.deltaY;
      markInteraction();
      event.preventDefault();
    };
    const onTouch = () => markInteraction();

    nav.addEventListener("pointerdown", onPointerDown);
    nav.addEventListener("pointermove", onPointerMove);
    nav.addEventListener("pointerup", endDrag);
    nav.addEventListener("pointercancel", endDrag);
    nav.addEventListener("pointerleave", endDrag);
    nav.addEventListener("wheel", onWheel, { passive: false });
    nav.addEventListener("touchstart", onTouch, { passive: true });
    nav.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      nav.removeEventListener("pointerdown", onPointerDown);
      nav.removeEventListener("pointermove", onPointerMove);
      nav.removeEventListener("pointerup", endDrag);
      nav.removeEventListener("pointercancel", endDrag);
      nav.removeEventListener("pointerleave", endDrag);
      nav.removeEventListener("wheel", onWheel);
      nav.removeEventListener("touchstart", onTouch);
      nav.removeEventListener("touchmove", onTouch);
    };
  }, [ref, markInteraction]);
};

/* Sombra nas pontas: com a scrollbar invisível, é o que avisa que há mais
 * itens para o lado. Atualiza no scroll (inclusive no deslize do dedo) e ao
 * redimensionar. */
const useNavEdgeHints = (ref) => {
  React.useEffect(() => {
    const nav = ref.current;
    if (!nav) return undefined;
    let raf = 0;
    const apply = () => {
      raf = 0;
      const max = nav.scrollWidth - nav.clientWidth;
      nav.classList.toggle("has-more-start", nav.scrollLeft > 4);
      nav.classList.toggle("has-more-end", max > 4 && nav.scrollLeft < max - 4);
    };
    const schedule = () => { if (!raf) raf = window.requestAnimationFrame(apply); };
    apply();
    nav.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      nav.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [ref]);
};

const DossierHUDNav = ({ active, onJump }) => {
  const [open, setOpen] = React.useState(false);
  const navItems = dossierNav();
  const navRef = React.useRef(null);
  const bottomNavRef = React.useRef(null);

  /* Momento do último gesto do usuário nas barras (ref, não state: mudar isso
   * não precisa re-renderizar nada). */
  const lastTouchRef = React.useRef(0);
  const markInteraction = React.useCallback(() => { lastTouchRef.current = Date.now(); }, []);

  /* Instante em que um arrasto terminou: o clique disparado logo depois não
   * deve navegar (o usuário estava rolando a barra, não escolhendo a seção). */
  const dragEndRef = React.useRef(0);
  useNavGestures(navRef, markInteraction, dragEndRef);
  useNavGestures(bottomNavRef, markInteraction, dragEndRef);

  /* Navegação explícita, em vez de depender do salto do href="#id": assim dá
   * para descontar a altura da barra fixa (senão o título da seção fica
   * escondido atrás dela) e para ignorar o clique que vem de um arrasto. */
  const onNavClick = React.useCallback((event, id) => {
    if (Date.now() - dragEndRef.current < 250) { event.preventDefault(); return; }
    const target = document.getElementById(id);
    if (!target) return; /* sem o alvo, deixa o href fazer o trabalho */
    event.preventDefault();
    setOpen(false);
    onJump && onJump(id);
    const hud = document.querySelector(".dossier-hud");
    const offset = hud && window.getComputedStyle(hud).display !== "none" ? hud.getBoundingClientRect().height + 12 : 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    try { window.scrollTo({ top: Math.max(0, top), behavior: reduce ? "auto" : "smooth" }); }
    catch (e) { window.scrollTo(0, Math.max(0, top)); }
    /* Mantém o endereço compartilhável sem provocar um segundo salto. */
    try { window.history.replaceState(null, "", "#" + id); } catch (e) { /* file:// */ }
  }, [onJump]);
  useNavEdgeHints(navRef);
  useNavEdgeHints(bottomNavRef);

  /* Centraliza o item ativo nas DUAS barras: a do topo (desktop) e a de baixo
   * (mobile). Ambas rolam na horizontal e a de baixo fica visível o tempo todo
   * no celular — sem isto, a seção atual sai de vista ao rolar a página. */
  React.useEffect(() => {
    if (!active) return;
    if (Date.now() - lastTouchRef.current < NAV_USER_HOLD_MS) return; /* o dedo manda */
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    for (const nav of [navRef.current, bottomNavRef.current]) {
      if (!nav) continue;
      const el = nav.querySelector("a.active");
      if (!el || nav.scrollWidth <= nav.clientWidth) continue;
      const left = el.offsetLeft - (nav.clientWidth - el.offsetWidth) / 2;
      const target = Math.max(0, Math.min(left, nav.scrollWidth - nav.clientWidth));
      if (Math.abs(nav.scrollLeft - target) < 8) continue; /* já está no lugar */
      try { nav.scrollTo({ left: target, behavior: reduce ? "auto" : "smooth" }); }
      catch (e) { nav.scrollLeft = target; }
    }
  }, [active]);
  const jumpToTop = () => {
    onJump && onJump("overview");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="dossier-hud dossier-shell">
        <div className="dossier-hud-inner">
          <a className="dossier-brand" href="#overview" onClick={() => onJump && onJump("overview")}>
            <img className="dossier-brand-logo" src="assets/dossier-logo.png" alt="Dossiê Criminal - Arquivo GTA" />
          </a>
          <nav ref={navRef} className={open ? "open" : ""} aria-label="Seções do arquivo">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={active === n.id ? "active" : ""}
                aria-current={active === n.id ? "location" : undefined}
                onClick={(event) => onNavClick(event, n.id)}
              >
                <span>{n.k}</span>{window.__t ? window.__t("nav." + n.id, n.label) : n.label}
              </a>
            ))}
          </nav>
          {typeof VILanguagePicker !== "undefined" && <VILanguagePicker compact />}
          <button className="dossier-menu" onClick={() => setOpen((v) => !v)} aria-label="Abrir menu">☰</button>
        </div>
      </header>
      <nav ref={bottomNavRef} className="dossier-bottom-nav dossier-shell" aria-label="Menu">
        {navItems.map((n) => (
          <a
            key={`bottom-${n.id}`}
            href={`#${n.id}`}
            className={active === n.id ? "active" : ""}
            onClick={(event) => onNavClick(event, n.id)}
          >
            <span>{n.k}</span>{window.__t ? window.__t("nav." + n.id, n.label) : n.label}
          </a>
        ))}
      </nav>
      <button className="dossier-back-top" type="button" onClick={jumpToTop} aria-label="Voltar ao topo">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5l-7 7m7-7 7 7M12 5v14" />
        </svg>
      </button>
    </>
  );
};
const DossierHero = () => {
  const heroMedia = window.officialMediaData?.hero;
  const stats = [
    ["Primeiro jogo", "1997", "Grand Theft Auto"],
    ["Criadores", "David Jones e Mike Dailly", "DMA Design"],
    ["Estúdio principal", "Rockstar North", "antiga DMA Design"],
    ["Principais cidades", "Liberty, Vice, San Andreas, Los Santos, Leonida", "arquivo urbano"],
    ["Próximo jogo", "GTA VI - 19 de novembro de 2026", "data oficial atual"]
  ];
  const quick = [
    ["Timeline", "timeline", "map"],
    ["Jogos", "games", "file"],
    ["Missões", "missions", "database"],
    ["Veículos", "vehicles", "car"],
    ["Armas", "weapons", "weapon"],
    ["Personagens", "characters", "users"],
    ["Cidades", "cities", "city"],
    ["Organizações", "gangs", "database"],
    ["Rockstar", "rockstar", "star"],
    ["Desenvolvimento", "development", "file"],
    ["Universos", "universes", "map"]
  ];

  return (
    <section id="overview" className="dossier-hero dossier-shell">
      <div className="dossier-map-bg" />
      <div className="dossier-hero-siren" />
      <div className="wrap dossier-hero-grid">
        <div className="dossier-hero-copy">
          <div className="tape">CONFIDENCIAL · ARQUIVO GTA</div>
          <h1>Grand Theft Auto: Timeline Completa, História, Personagens e Cidades</h1>
          <p>
            Um dossiê interativo da saga GTA: da DMA Design à Rockstar Games, da era 2D à era HD, de Liberty City a Vice City, San Andreas, Los Santos e Leonida.
          </p>
          <div className="dossier-quick-tabs">
            {quick.map(([label, id, icon]) => (
              <a key={id} href={`#${id}`}>
                <DossierIcon type={icon} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
        <aside className="dossier-hero-panel">
          <div className="dossier-case-top">
            <span>CASE FILE</span>
            <strong>GTA-SAGA-1997-2026</strong>
          </div>
          <OfficialMedia media={heroMedia} className="dossier-hero-official" />
          <div className="dossier-stat-grid">
            {stats.map(([label, value, note]) => (
              <div className="dossier-stat" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
                <small>{note}</small>
              </div>
            ))}
          </div>
          <div className="dossier-evidence-strip">
            <span>2D Universe</span>
            <span>3D Universe</span>
            <span>HD Universe</span>
          </div>
        </aside>
      </div>
    </section>
  );
};

const TimelineDossierSection = ({ onOpenDossier }) => {
  const [mode, setMode] = React.useState("chronology");
  const releaseItems = releaseTimelineData.map((release) => {
    const game = gamesData.find((g) =>
      normalizeText(g.title) === normalizeText(release.title) ||
      normalizeText(g.title).includes(normalizeText(release.title).replace("gta iv", "grand theft auto iv")) ||
      normalizeText(release.title).includes(normalizeText(g.title))
    );
    return { ...release, game };
  });
  const chronologyItems = timelineChronologicalData.map((item) => ({
    ...item,
    game: findGameForTimeline(item)
  }));

  return (
    <section id="timeline" className="dossier-section dossier-shell">
      <div className="wrap">
        <DossierSectionHead
          tkey="section.timeline" eyebrow="Linha do tempo"
          title="Cronologia interna e lançamentos"
          accent="var(--siren)"
          right="história do universo separada da história de desenvolvimento"
        />
        <div className="dossier-segmented">
          <button className={mode === "chronology" ? "active" : ""} onClick={() => setMode("chronology")}>História interna</button>
          <button className={mode === "release" ? "active" : ""} onClick={() => setMode("release")}>Ordem de lançamento</button>
        </div>

        {mode === "chronology" ? (
          <div className="dz-grid dz-grid--timeline">
            {chronologyItems.map((item) => (
              <DzCard
                key={`${item.year}-${item.title}`}
                variant="row"
                media={item.game?.media}
                fallback={<DzFallback label={item.title} />}
                badge={item.year}
                kicker={`${item.universe} · ${item.city}`}
                title={item.title}
                summary={item.summary}
                facts={[["Protagonista", item.protagonist], ["Precisão", item.certainty]]}
                onOpen={() => onOpenDossier({ type: "timeline", item })}
              />
            ))}
          </div>
        ) : (
          <div className="dz-grid">
            {releaseItems.map(({ year, title, game }) => (
              <DzCard
                key={`${year}-${title}`}
                media={game?.media}
                fallback={<DzFallback label={title} />}
                badge={year}
                kicker={game ? `${game.universe} · ${game.city}` : "Lançamento"}
                title={title}
                summary={game?.summary || "Coletado na linha oficial de lançamentos da franquia."}
                facts={[["História", game?.storyYear], ["Protagonista", game?.protagonist]]}
                chips={game?.tags}
                onOpen={game ? () => onOpenDossier({ type: "game", item: game }) : undefined}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const GameDossierCard = ({ game, onOpen }) => (
  <DzCard
    media={game.media}
    fallback={<DzFallback label={game.title} icon="file" />}
    badge={game.releaseYear}
    kicker={`${game.universe} · ${game.storyYear}`}
    title={game.title}
    summary={game.summary}
    facts={[["Protagonista", game.protagonist], ["Cidade", game.city], ["Rivais", game.antagonists]]}
    chips={game.tags}
    onOpen={() => onOpen({ type: "game", item: game })}
  />
);

const GamesDossierSection = ({ onOpenDossier }) => {
  const [query, setQuery] = React.useState("");
  const [universe, setUniverse] = React.useState("all");
  const [city, setCity] = React.useState("all");
  const cities = [...new Set(gamesData.map((g) => g.city.split(",")[0]))];
  const filtered = gamesData.filter((game) =>
    searchRecord(game, query) &&
    (universe === "all" || game.universe === universe) &&
    (city === "all" || game.city.includes(city))
  );

  return (
    <section id="games" className="dossier-section dossier-shell alt">
      <div className="wrap">
        <DossierSectionHead tkey="section.games" eyebrow="Catálogo" title="Jogos da saga" accent="var(--evidence)" right={`${filtered.length} arquivos filtrados`} />
        <div className="dossier-filterbar">
          <label><span>Busca</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Nome, cidade, protagonista..." /></label>
          <label><span>Universo</span><select value={universe} onChange={(e) => setUniverse(e.target.value)}><option value="all">Todos</option>{universeData.map((u) => <option key={u.name} value={u.name}>{u.name}</option>)}</select></label>
          <label><span>Cidade</span><select value={city} onChange={(e) => setCity(e.target.value)}><option value="all">Todas</option>{cities.map((c) => <option key={c} value={c}>{c}</option>)}</select></label>
        </div>
        <div className="dz-grid">
          {filtered.map((game) => <GameDossierCard key={game.id} game={game} onOpen={onOpenDossier} />)}
        </div>
      </div>
    </section>
  );
};

const missionGroupCache = new Map();
const missionDetailCache = new Map();

const cleanMissionMarkup = (value = "") => String(value)
  .replace(/\{\{([^{}]+)\}\}/g, (_, inner) => {
    const parts = inner.split("|").map((part) => part.trim()).filter(Boolean);
    return parts.length > 1 ? parts[parts.length - 1] : "";
  })
  .replace(/\[\[:?(File|Image|Category|[a-z]{2}):[^\]]+\]\]/gi, "")
  .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
  .replace(/\[\[([^\]]+)\]\]/g, "$1")
  .replace(/<br\s*\/?\s*>/gi, " ")
  .replace(/<ref[^>]*>.*?<\/ref>/gi, "")
  .replace(/<[^>]+>/g, "")
  .replace(/''+/g, "")
  .replace(/&amp;/g, "&")
  .replace(/&nbsp;/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const cleanMissionHeading = (line = "") => {
  let label = String(line).trim().replace(/^=+|=+$/g, "").replace(/^;+/, "");
  label = label.replace(/\[\[:?(File|Image):[^\]]+\]\]/gi, "");
  label = cleanMissionMarkup(label).replace(/^'+|'+$/g, "").trim();
  if (/^(navigation|references|gallery|see also|trivia|video walkthrough|reward|rewards|description|contents)$/i.test(label)) return "";
  return label || "Missões";
};

const missionItemName = (item) => typeof item === "string" ? item : item?.name || "";

const missionItemPage = (item) => {
  if (!item) return "";
  if (typeof item === "string") return item;
  return item.page || item.name || "";
};

const extractMissionEntryFromText = (value = "") => {
  const cleaned = String(value).replace(/\[\[(File|Image):[^\]]+\]\]/gi, "");
  const matches = [...cleaned.matchAll(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g)]
    .map((match) => {
      const target = cleanMissionMarkup(match[1]);
      const label = cleanMissionMarkup(match[2] || match[1]);
      return { target, label };
    })
    .filter((entry) => entry.label)
    .filter((entry) => !/^(money|file:|image:|category:|playstation|pc|xbox|grand theft auto|gta online|rockstar editor|director mode)$/i.test(entry.label));
  const chosen = matches.length ? matches[0] : null;
  const name = chosen && /^(mission \d+|phone \d+)$/i.test(chosen.label) ? chosen.target : (chosen?.label || "");
  if (/^(n\/a|none|safehouse|ammu-nation)$/i.test(name)) return "";
  return name ? { name, page: chosen?.target || name } : null;
};

const addMissionGroupItem = (groups, area, context, entry) => {
  const record = typeof entry === "string" ? { name: entry, page: entry } : entry;
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

  rawText.split("\n").forEach((rawLine) => {
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

  return [...groups.entries()]
    .map(([label, names]) => ({ label, items: [...names.values()].sort((a, b) => missionItemName(a).localeCompare(missionItemName(b), "pt-BR")) }))
    .filter((group) => group.items.length)
    .sort((a, b) => a.label.localeCompare(b.label, "pt-BR"));
};

const loadMissionGroups = async (mission) => {
  const cacheKey = `${mission.id}:${mission.apiPage || "fallback"}`;
  if (missionGroupCache.has(cacheKey)) return missionGroupCache.get(cacheKey);
  let groups = [];
  if (mission.apiPage) {
    const data = await fetch(vehicleApiUrl({
      action: "parse",
      prop: "wikitext",
      redirects: "1",
      page: mission.apiPage
    })).then((response) => response.json());
    groups = parseMissionWikitext(data?.parse?.wikitext?.["*"] || "");
  }
  if (!groups.length && mission.fallbackGroups) groups = mission.fallbackGroups;
  missionGroupCache.set(cacheKey, groups);
  return groups;
};

const missionDetailUrl = (page) => `https://gta.fandom.com/wiki/${encodeURIComponent(page).replaceAll("%20", "_")}`;

const extractMissionSummaryFromHtml = (html = "") => {
  if (!html || typeof DOMParser === "undefined") return "";
  const doc = new DOMParser().parseFromString(html, "text/html");
  doc.querySelectorAll("aside, table, figure, nav, style, script, sup, .toc, .navbox, .portable-infobox, .reference, .metadata").forEach((node) => node.remove());
  const paragraphs = [...doc.querySelectorAll(".mw-parser-output > p, .mw-parser-output > ul, .mw-parser-output > ol")]
    .map((node) => cleanMissionMarkup(node.textContent || ""))
    .filter((text) => text.length > 45)
    .filter((text) => !/^(This article|For other uses|This page|The following is)/i.test(text));
  return paragraphs.slice(0, 2).join("\n\n").slice(0, 720);
};

const extractMissionFactsFromHtml = (html = "") => {
  if (!html || typeof DOMParser === "undefined") return [];
  const doc = new DOMParser().parseFromString(html, "text/html");
  const wanted = ["Type", "Game", "For", "Location", "Target", "Reward", "Unlocks", "Unlocked By", "Unlocked by", "Protagonist"];
  return [...doc.querySelectorAll(".portable-infobox .pi-data")]
    .map((row) => {
      const label = cleanMissionMarkup(row.querySelector(".pi-data-label")?.textContent || "");
      const valueNode = row.querySelector(".pi-data-value");
      const listValues = [...(valueNode?.querySelectorAll("li") || [])].map((node) => cleanMissionMarkup(node.textContent || "")).filter(Boolean);
      const value = listValues.length ? listValues.join(", ") : cleanMissionMarkup(valueNode?.textContent || "");
      return { label, value };
    })
    .filter((row) => row.label && row.value && wanted.some((label) => normalizeText(label) === normalizeText(row.label)))
    .slice(0, 8);
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
}[normalizeText(label)] || label);

const loadMissionDetail = async (entry) => {
  const pageTitle = missionItemPage(entry);
  const label = missionItemName(entry);
  if (!pageTitle) return null;
  const cacheKey = normalizeText(pageTitle);
  if (missionDetailCache.has(cacheKey)) return missionDetailCache.get(cacheKey);

  const fetchDetail = async (title) => {
    const data = await fetch(vehicleApiUrl({
      action: "parse",
      prop: "text|displaytitle",
      redirects: "1",
      page: title
    })).then((response) => response.json());
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

const missionGameFor = (mission) => gamesData.find((game) => game.id === mission.gameId) || null;

const matchesMissionType = (mission, type) => {
  if (type === "all") return true;
  const hay = normalizeText(ptText([mission.coverage, mission.tags, mission.highlights, mission.summary, mission.systems]).join(" "));
  const tests = {
    story: ["story", "historia", "campanha", "main", "protagonista"],
    side: ["side", "paralela", "atividade", "random", "strangers", "hobbies"],
    phone: ["phone", "telefone", "phonebox", "walkie"],
    heist: ["heist", "assalto", "setups", "roubo"],
    vehicle: ["vehicle", "veiculo", "taxi", "vigilante", "paramedic", "firefighter", "races", "corridas"],
    online: ["online", "dlc", "contatos", "jobs", "arquivo vivo"]
  };
  return (tests[type] || []).some((needle) => hay.includes(needle));
};

const MissionDossierCard = ({ mission, onOpen }) => {
  const game = missionGameFor(mission);
  const media = mission.media || game?.media;
  return (
    <DzCard
      media={media}
      fallback={<DzFallback label={mission.title} icon="database" />}
      badge={mission.totalLabel}
      kicker={`${mission.universe} · ${mission.storyYear}`}
      title={mission.title}
      summary={mission.summary}
      facts={[["Cidade", mission.city], ["Cobertura", mission.coverage], ["Destaques", mission.highlights]]}
      chips={mission.tags}
      cta="Missões"
      onOpen={() => onOpen({ type: "mission", item: { ...mission, media } })}
    />
  );
};

const MissionsDossierSection = ({ onOpenDossier }) => {
  const missions = window.missionDossierData || [];
  const [query, setQuery] = React.useState("");
  const [universe, setUniverse] = React.useState("all");
  const [type, setType] = React.useState("all");
  const typeOptions = [
    ["all", "Todas"],
    ["story", "História"],
    ["side", "Paralelas"],
    ["phone", "Telefone"],
    ["heist", "Assaltos"],
    ["vehicle", "Veículos/serviços"],
    ["online", "Online/DLC"]
  ];
  const filtered = missions.filter((mission) =>
    searchRecord(mission, query) &&
    (universe === "all" || mission.universe === universe) &&
    matchesMissionType(mission, type)
  );

  return (
    <section id="missions" className="dossier-section dossier-shell mission-section">
      <div className="wrap">
        <DossierSectionHead tkey="section.missions" eyebrow="Operações" title="Missões por jogo" accent="var(--money)" right={`${filtered.length} arquivos de missão`} />
        <div className="dossier-mission-intro card">
          <Corners />
          <div>
            <h3>O caminho jogável da saga</h3>
            <p>
              Esta seção fica entre Jogos e os dossiês de equipamentos porque as missões são a espinha dorsal da experiência: campanha, telefonemas, assaltos, propriedades, serviços, atividades paralelas, contatos online e arquivos ainda não confirmados.
            </p>
          </div>
          <div className="dossier-mission-scan">
            <span>mission index</span>
            <strong>story + side</strong>
            <small>listas completas sob demanda</small>
          </div>
        </div>
        <div className="dossier-filterbar wide">
          <label><span>Busca</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="End of the Line, The Big Score, Lamar..." /></label>
          <label><span>Universo</span><select value={universe} onChange={(e) => setUniverse(e.target.value)}><option value="all">Todos</option>{universeData.map((u) => <option key={u.name}>{u.name}</option>)}</select></label>
          <label><span>Tipo</span><select value={type} onChange={(e) => setType(e.target.value)}>{typeOptions.map(([id, label]) => <option key={id} value={id}>{label}</option>)}</select></label>
        </div>
        <div className="dz-grid">
          {filtered.map((mission) => <MissionDossierCard key={mission.id} mission={mission} onOpen={onOpenDossier} />)}
        </div>
      </div>
    </section>
  );
};

const vehicleGroupCache = new Map();

const vehicleApiUrl = (params) => {
  const search = new URLSearchParams({ format: "json", origin: "*", ...params });
  return `https://gta.fandom.com/api.php?${search.toString()}`;
};

const vehicleWikiPageUrl = (page = "") => `https://gta.fandom.com/wiki/${encodeURIComponent(String(page).replace(/\s+/g, "_"))}`;

const vehicleMediaFromSource = (name, pageTitle, src) => src ? ({
  src,
  alt: `Imagem de ${name}`,
  source: vehicleWikiPageUrl(pageTitle || name),
  caption: `GTA Wiki - ${name}`,
  credit: "Imagem via GTA Wiki / Fandom; direitos dos assets pertencem aos respectivos titulares.",
  fit: "contain",
  position: "center"
}) : null;

const vehicleItemName = (item) => typeof item === "string" ? item : item?.name || "";
const vehicleItemPageTitle = (item) => typeof item === "string" ? item : item?.pageTitle || item?.name || "";
const vehicleItemMedia = (item) => typeof item === "string" ? null : item?.media || null;
const vehicleItemKey = (item) => normalizeText(`${vehicleItemPageTitle(item)} ${vehicleItemName(item)}`);

const cleanWikiMarkup = (value = "") => String(value)
  .replace(/\{\{([^{}]+)\}\}/g, (_, inner) => {
    const parts = inner.split("|").map((part) => part.trim()).filter(Boolean);
    const name = normalizeText(parts[0] || "");
    if (["dlc", "nd", "un", "eeev", "ee", "ev", "time"].includes(name)) return "";
    return parts.length > 1 ? parts[parts.length - 1] : "";
  })
  .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
  .replace(/\[\[([^\]]+)\]\]/g, "$1")
  .replace(/<ref[^>]*>.*?<\/ref>/gi, "")
  .replace(/<[^>]+>/g, "")
  .replace(/''+/g, "")
  .replace(/&amp;/g, "&")
  .replace(/&nbsp;/g, " ")
  .replace(/\s+/g, " ")
  .trim();

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
  const link = links.find((match) => !/^(file|image|category|pl|ru|es|fr|de|pt|zh):/i.test(match[1].trim()));
  if (!link) return null;
  const pageTitle = cleanWikiMarkup(link[1]).trim();
  let name = cleanWikiMarkup(link[2] || link[1])
    .replace(/\s+can be seen.*$/i, "")
    .replace(/\s+inaccessible.*$/i, "")
    .replace(/\s+featuring.*$/i, "")
    .trim()
    .replace(/\.$/, "");
  if (/^(vehicles in|grand theft auto|yusuf amir|power-ups|rocket launcher|machine gun|shotgun|flamethrower|respect|electrofingers|fast reload|get outta jail|crusher|image:|file:|molotov|oil slick|invulnerability|kill frenzy|double damage|police bribe|electrogun)$/i.test(name)) return "";
  return { name, pageTitle, imageTitle: extractVehicleImageTitle(line) };
};

const addVehicleGroupItem = (groups, label, item) => {
  const normalizedItem = typeof item === "string" ? { name: item, pageTitle: item } : item;
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
        if (/^\|\[\[(Image|File):/i.test(next)) addVehicleGroupItem(groups, currentGroup, item ? { ...item, imageTitle: item.imageTitle || extractVehicleImageTitle(next) } : item);
      } else {
        addVehicleGroupItem(groups, currentGroup, extractVehicleItemFromLine(line));
      }
      return;
    }
    if (/^\*\[\[/.test(line)) addVehicleGroupItem(groups, currentGroup, extractVehicleItemFromLine(line));
  });

  return [...groups.entries()]
    .map(([label, items]) => ({ label, items: [...items.values()].sort((a, b) => vehicleItemName(a).localeCompare(vehicleItemName(b), "pt-BR")) }))
    .filter((group) => group.items.length)
    .sort((a, b) => a.label.localeCompare(b.label, "pt-BR"));
};

const normalizeVehicleTitle = (title = "") => title
  .replace(/\s+\((2D|3D|HD) Universe\)$/i, "")
  .replace(/^Beta Vehicles.*$/i, "")
  .trim();

const chunkVehicleTitles = (items, size = 45) => {
  const chunks = [];
  for (let index = 0; index < items.length; index += size) chunks.push(items.slice(index, index + size));
  return chunks;
};

const loadVehiclePageMediaMap = async (titles) => {
  const uniqueTitles = [...new Set(titles.filter(Boolean))];
  const mediaByTitle = new Map();
  await Promise.all(chunkVehicleTitles(uniqueTitles).map(async (chunk) => {
    const data = await fetch(vehicleApiUrl({
      action: "query",
      prop: "pageimages",
      piprop: "thumbnail",
      pithumbsize: "360",
      redirects: "1",
      titles: chunk.join("|")
    })).then((response) => response.json());
    const redirectsToPage = new Map();
    asList(data?.query?.redirects).forEach((redirect) => {
      const target = normalizeText(redirect.to);
      if (!redirectsToPage.has(target)) redirectsToPage.set(target, []);
      redirectsToPage.get(target).push(redirect.from);
    });
    Object.values(data?.query?.pages || {}).forEach((page) => {
      const src = page?.thumbnail?.source;
      if (!src) return;
      const media = vehicleMediaFromSource(page.title, page.title, src);
      mediaByTitle.set(normalizeText(page.title), media);
      asList(redirectsToPage.get(normalizeText(page.title))).forEach((from) => {
        mediaByTitle.set(normalizeText(from), media);
      });
    });
  }));
  return mediaByTitle;
};

const loadVehicleFileMediaMap = async (fileTitles) => {
  const uniqueTitles = [...new Set(fileTitles.filter(Boolean))];
  const mediaByFile = new Map();
  await Promise.all(chunkVehicleTitles(uniqueTitles).map(async (chunk) => {
    const data = await fetch(vehicleApiUrl({
      action: "query",
      prop: "imageinfo",
      iiprop: "url",
      iiurlwidth: "360",
      titles: chunk.join("|")
    })).then((response) => response.json());
    Object.values(data?.query?.pages || {}).forEach((page) => {
      const src = page?.imageinfo?.[0]?.thumburl || page?.imageinfo?.[0]?.url;
      if (!src) return;
      mediaByFile.set(normalizeText(page.title), vehicleMediaFromSource(page.title.replace(/^File:/i, ""), page.title, src));
    });
  }));
  return mediaByFile;
};

/* Código de jogo no nome do arquivo (ex.: "Adder-GTAV-front.png"), ancorado:
 * "GTAV" casa "-GTAV-", "-GTAVe-", "-GTAVpc." mas NÃO "-GTAVC-" nem "-GTAVI-".
 * Sem isso, imagens de Vice City / GTA VI apareciam nas fichas de GTA V, e
 * Liberty City Stories nas de London — o motivo das fotos "trocadas". */
const imageHasGameCode = (fileTitle = "", code = "") =>
  new RegExp("(^|[^A-Za-z0-9])" + code.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?:[a-z]{1,3})?(?=[^A-Za-z0-9]|$)").test(String(fileTitle));
const imageFileNameOf = (src = "") => {
  try { return decodeURIComponent(String(src).split("/revision/")[0].split("/").pop() || ""); } catch (e) { return String(src); }
};
/* true se o arquivo carrega o código DESTE jogo. Usado para exigir que a
 * imagem de um item seja daquele jogo, e não a arte genérica da página do wiki
 * (que costuma ser a versão mais recente da arma/veículo). */
const imageMatchesGame = (src, allowedCodes = []) => {
  const file = imageFileNameOf(src);
  return !!file && allowedCodes.some((c) => imageHasGameCode(file, c));
};
/* true se o arquivo carrega o código de OUTRO jogo (e nenhum dos códigos aceitos). */
const imageBelongsToOtherGame = (src, allowedCodes = []) => {
  const file = imageFileNameOf(src);
  if (!file) return false;
  const all = window.__ALL_IMAGE_GAME_CODES || [];
  if (allowedCodes.some((c) => imageHasGameCode(file, c))) return false;
  return all.some((c) => imageHasGameCode(file, c));
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
  /* Os episódios rodam na mesma Liberty City e usam a frota de GTA IV. */
  "lost-and-damned": ["TLAD", "EFLC", "GTAIV", "GTA4"],
  "ballad-gay-tony": ["TBoGT", "TBOGT", "EFLC", "GTAIV", "GTA4"],
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

/* Imagens escolhidas à mão para os itens genéricos do dossiê de GTA VI
 * ("viaturas e perseguições policiais" etc.). São imagens DAQUELE item, não a
 * arte do jogo repetida — por isso continuam valendo. */
/* Comparação tolerante: o nome do item traz "/" e acento ("trailers/screenshots",
 * "aeroporto/céu") que a chave curada não tem. */
const dzLooseKey = (value) => normalizeText(value).replace(/[^a-z0-9]+/g, " ").trim();
const curatedVehicleMedia = (item, vehicle) => {
  const table = vehicleFallbackMediaByGameAndName[vehicle?.id] || {};
  const key = dzLooseKey(vehicleItemName(item));
  const hit = Object.keys(table).find((candidate) => dzLooseKey(candidate) === key);
  return hit ? table[hit] : null;
};

const vehicleUniversePageSuffix = (vehicle) => {
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
  return [...new Set([
    pageTitle,
    name,
    suffix ? `${name} (${suffix})` : "",
    ...aliases
  ].filter(Boolean))];
};

const vehicleFileStemCandidates = (name = "", seen = new Set()) => {
  const ascii = String(name).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const key = normalizeText(ascii);
  if (seen.has(key)) return [];
  seen.add(key);
  const aliases = vehiclePageAliasesByName[key] || [];
  return [...new Set([
    ascii.replace(/\s+x\s+/gi, "x").replace(/[^a-z0-9-]/gi, ""),
    ascii.replace(/[^a-z0-9]/gi, ""),
    ascii.replace(/\s+/g, "").replace(/[^a-z0-9-]/gi, ""),
    ...aliases.flatMap((alias) => vehicleFileStemCandidates(alias, seen))
  ].filter(Boolean))];
};

const vehicleFileCandidatesForItem = (item, vehicle) => {
  const codes = vehicleImageNeedlesByGameId[vehicle?.id] || [];
  const stems = vehicleFileStemCandidates(vehicleItemName(item));
  const suffixes = [".png", ".jpg", "-front.png", "-front.jpg", "-Front.png", "-Front.jpg", "-FrontQuarter.png", "-FrontQuarter.jpg", "-front-Sprunk.png"];
  const candidates = [];
  stems.forEach((stem) => {
    codes.forEach((code) => {
      suffixes.forEach((suffix) => candidates.push(`File:${stem}-${code}${suffix}`));
    });
  });
  return [...new Set(candidates)];
};

const vehicleImageScore = (fileTitle = "", item, vehicle) => {
  const title = normalizeText(fileTitle);
  if (/site logo|invisiblehero|blips|badge|emblem|map|location|poster|advert|livery|dashboard|engine|inside|rear|side|top|underside/.test(title)) return -100;
  let score = 0;
  const needles = vehicleImageNeedlesByGameId[vehicle?.id] || [];
  needles.forEach((needle) => {
    if (imageHasGameCode(fileTitle, needle)) score += 80;
  });
  if (!needles.some((needle) => imageHasGameCode(fileTitle, needle)) && imageBelongsToOtherGame(fileTitle, needles)) return -100;
  const stem = normalizeText(vehicleItemName(item));
  const compactStem = normalizeText(vehicleItemName(item).replace(/[^a-z0-9]/gi, ""));
  if (stem && title.includes(stem)) score += 35;
  if (compactStem && title.includes(compactStem)) score += 35;
  /* Preferir o veículo como ele é no jogo: render frontal/traseiro-quartal ou
   * captura in-game. Arte promocional e ilustração ficam atrás. */
  if (/front|frontquarter|ingame|screenshot/.test(title)) score += 24;
  else if (/artwork|concept|promo|render/.test(title)) score += 6;
  /* Sem código de jogo no nome, provavelmente é imagem genérica da série. */
  if (!needles.some((needle) => imageHasGameCode(fileTitle, needle))) score -= 30;
  if (/png|jpg|jpeg/.test(title)) score += 3;
  return score;
};

const loadVehicleGalleryMediaByItem = async (items, vehicle) => {
  const titles = [...new Set(items.flatMap((item) => vehiclePageCandidatesForItem(item, vehicle)).filter(Boolean))];
  const itemByTitle = new Map();
  items.forEach((item) => {
    vehiclePageCandidatesForItem(item, vehicle).forEach((title) => itemByTitle.set(normalizeText(title), item));
  });
  const chosenFileByItem = new Map();
  await Promise.all(chunkVehicleTitles(titles).map(async (chunk) => {
    const data = await fetch(vehicleApiUrl({
      action: "query",
      prop: "images",
      imlimit: "80",
      redirects: "1",
      titles: chunk.join("|")
    })).then((response) => response.json());
    const redirectsToPage = new Map();
    asList(data?.query?.redirects).forEach((redirect) => {
      const target = normalizeText(redirect.to);
      if (!redirectsToPage.has(target)) redirectsToPage.set(target, []);
      redirectsToPage.get(target).push(redirect.from);
    });
    Object.values(data?.query?.pages || {}).forEach((page) => {
      const item =
        itemByTitle.get(normalizeText(page.title)) ||
        asList(redirectsToPage.get(normalizeText(page.title))).map((from) => itemByTitle.get(normalizeText(from))).find(Boolean);
      if (!item) return;
      const images = asList(page.images).map((image) => image.title).filter(Boolean);
      const best = images
        .map((title) => ({ title, score: vehicleImageScore(title, item, vehicle) }))
        .filter((entry) => entry.score > 0)
        .sort((a, b) => b.score - a.score)[0];
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
  items.forEach((item) => {
    const candidates = vehicleFileCandidatesForItem(item, vehicle);
    candidateByItem.set(vehicleItemKey(item), candidates);
    allCandidates.push(...candidates);
  });
  const fileMedia = await loadVehicleFileMediaMap(allCandidates);
  const mediaByItem = new Map();
  items.forEach((item) => {
    const found = asList(candidateByItem.get(vehicleItemKey(item))).find((candidate) => fileMedia.has(normalizeText(candidate)));
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
  const items = groups.flatMap((group) => asList(group.items));
  const fileMedia = await loadVehicleFileMediaMap(items.map((item) => item?.imageTitle));
  const galleryMedia = await loadVehicleGalleryMediaByItem(items, vehicle);
  const pageMedia = await loadVehiclePageMediaMap(items.flatMap((item) => vehiclePageCandidatesForItem(item, vehicle)));
  const missingAfterKnown = items.filter((item) =>
    !vehicleItemMedia(item) &&
    !fileMedia.get(normalizeText(item?.imageTitle || "")) &&
    !galleryMedia.get(vehicleItemKey(item)) &&
    !vehiclePageCandidatesForItem(item, vehicle).some((candidate) => {
      const m = pageMedia.get(normalizeText(candidate));
      return m && imageMatchesGame(m.src, vehicleImageNeedlesByGameId[vehicle?.id] || []);
    })
  );
  const heuristicMedia = await loadVehicleHeuristicMediaByItem(missingAfterKnown, vehicle);
  return groups.map((group) => ({
    ...group,
    items: asList(group.items).map((item) => {
      const normalizedItem = typeof item === "string" ? { name: item, pageTitle: item } : item;
      const media =
        vehicleItemMedia(normalizedItem) ||
        fileMedia.get(normalizeText(normalizedItem.imageTitle || "")) ||
        galleryMedia.get(vehicleItemKey(normalizedItem)) ||
        heuristicMedia.get(vehicleItemKey(normalizedItem)) ||
        vehiclePageCandidatesForItem(normalizedItem, vehicle).map((candidate) => pageMedia.get(normalizeText(candidate)))
          .find((m) => m && imageMatchesGame(m.src, vehicleImageNeedlesByGameId[vehicle?.id] || [])) ||
        curatedVehicleMedia(normalizedItem, vehicle) ||
        /* Mesma regra das armas: sem foto daquele jogo, marcador "imagem
         * pendente" em vez da arte do jogo repetida em todos os cards. */
        null;
      return { ...normalizedItem, media };
    })
  }));
};

const loadVehicleCategoryGroup = async (categoryTitle, vehicle) => {
  const allowed = vehicleImageNeedlesByGameId[vehicle?.id] || [];
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
      ...(cmcontinue ? { gcmcontinue: cmcontinue } : {})
    })).then((response) => response.json());
    Object.values(data?.query?.pages || {}).forEach((page) => {
      const title = normalizeVehicleTitle(page.title);
      if (!title || /^Vehicles in/i.test(title)) return;
      const item = {
        name: title,
        pageTitle: page.title,
        media: page.thumbnail?.source && !imageBelongsToOtherGame(page.thumbnail.source, allowed)
          ? vehicleMediaFromSource(title, page.title, page.thumbnail.source)
          : null
      };
      items.set(vehicleItemKey(item), item);
    });
    cmcontinue = data?.continue?.gcmcontinue || "";
  } while (cmcontinue);
  return [{ label: "Lista completa", items: [...items.values()].sort((a, b) => vehicleItemName(a).localeCompare(vehicleItemName(b), "pt-BR")) }];
};

/* ---------------------------------------------------------------------------
 * COMPLETAR FOTOS DE FROTA E ARSENAL
 * Depois das buscas por página/galeria/arquivo, o que ainda ficou sem foto
 * passa por uma busca no espaço de arquivos do wiki. Primeiro valem os
 * códigos do próprio jogo; se não houver, o jogo mais próximo da mesma era —
 * e o card mostra "foto de GTA V", nunca finge que a imagem é do jogo aberto.
 * ------------------------------------------------------------------------- */
const dzNeighborCodes = {
  "gta-1": ["GTA2", "GTAL"],
  "london-1969": ["GTAL61", "GTAL", "GTA1"],
  "london-1961": ["GTAL69", "GTAL", "GTA1"],
  "gta-2": ["GTA1"],
  "gta-iii": ["GTALCS", "GTAA", "GTAVC", "GTASA"],
  "vice-city": ["GTAVCS", "GTAIII", "GTA3", "GTASA"],
  "san-andreas": ["GTAVC", "GTAIII", "GTA3", "GTALCS"],
  "gta-advance": ["GTAIII", "GTA3", "GTALCS"],
  "liberty-city-stories": ["GTAIII", "GTA3", "GTAVCS", "GTASA"],
  "vice-city-stories": ["GTAVC", "GTALCS", "GTASA"],
  "gta-iv": ["TLAD", "TBoGT", "EFLC", "GTAV"],
  "lost-and-damned": ["TBoGT", "GTAV"],
  "ballad-gay-tony": ["TLAD", "GTAV"],
  "chinatown-wars": ["GTAIV", "GTA4"],
  "gta-v": ["GTAO", "GTAIV"],
  "gta-online": ["GTAIV"],
  "trilogy-definitive": ["GTALCS", "GTAVCS"],
  "gta-vi": ["GTAV", "GTAO"]
};
const dzGameLabelByCode = {
  GTA1: "GTA 1", GTA2: "GTA 2", GTAL: "GTA London", GTAL61: "London 1961", GTAL69: "London 1969",
  GTA3: "GTA III", GTAIII: "GTA III", GTAVC: "Vice City", GTASA: "San Andreas", GTAA: "GTA Advance",
  GTALCS: "Liberty City Stories", GTAVCS: "Vice City Stories", GTAIV: "GTA IV", GTA4: "GTA IV",
  TLAD: "The Lost and Damned", TBoGT: "The Ballad of Gay Tony", TBOGT: "The Ballad of Gay Tony",
  EFLC: "Episodes from Liberty City", GTACW: "Chinatown Wars", GTAV: "GTA V", GTAO: "GTA Online"
};
/* Linhas de tabela que não são item (títulos de lista, estatísticas, ataques). */
const dzJunkItemName = (name = "") => /^(vehicles? in |vehicle stats|weapons? in |melee attack$|fire$|crates$)/i.test(String(name).trim());
const dzDropJunkItems = (groups, nameOf) => asList(groups)
  .map((group) => ({ ...group, items: asList(group.items).filter((item) => !dzJunkItemName(nameOf(item))) }))
  .filter((group) => group.items.length);

/* Mesmo objeto, nome diferente entre jogos ("Micro Submachine Gun" em GTA VI é
 * a "Micro SMG" de GTA V). Só equivalências diretas do mesmo tipo de item. */
const dzItemAliases = {
  "micro submachine gun": ["Micro SMG"],
  "compact submachine gun": ["Mini SMG"],
  "molotov cocktails": ["Molotov Cocktail", "Molotov"],
  "molotovs": ["Molotov Cocktail", "Molotov"],
  "fire bottle": ["Molotov Cocktail", "Molotov"],
  "smoke grenades": ["Smoke Grenade", "Tear Gas"],
  "flashbangs": ["Flashbang", "Stun Grenade"],
  "golf driver": ["Golf Club"],
  "golf iron": ["Golf Club"],
  "golf putter": ["Golf Club"],
  "golf wedge": ["Golf Club"],
  "golf balls": ["Golf Ball"],
  "heavy machine gun": ["Combat MG"],
  "hunter sniper": ["Heavy Sniper"],
  "speargun": ["Harpoon Gun"],
  "laser sighted sniper rifle": ["Laser Scope Sniper Rifle", "Sniper Rifle"],
  "spaz 12": ["SPAS 12", "S.P.A.S. 12"],
  "lad rover": ["Landroamer"],
  "pißwasser dominator": ["Pisswasser Dominator", "Dominator"]
};
const dzSearchTerms = (rawName) => {
  const base = String(rawName || "").replace(/\s*\(.*?\)\s*/g, " ").trim();
  const terms = [];
  base.split(/\s*\/\s*/).filter(Boolean).forEach((part) => {
    terms.push(part);
    if (/[a-z]s$/i.test(part) && !/ss$/i.test(part)) terms.push(part.replace(/s$/i, ""));
    (dzItemAliases[normalizeText(part)] || []).forEach((alias) => terms.push(alias));
  });
  (dzItemAliases[normalizeText(base)] || []).forEach((alias) => terms.push(alias));
  return [...new Set(terms)].filter((term) => normalizeText(term).replace(/[^a-z0-9]/g, "").length >= 2);
};

/* GTA VI: o catálogo automático (live/vi-catalog.json) já resolveu foto para
 * quase toda arma e veículo — inclusive a foto anterior etiquetada. O dossiê
 * reaproveita a mesma escolha, para as duas seções nunca discordarem. */
const dzCatalogMediaForGame = async (groups, dossier, nameOf) => {
  if (dossier?.id !== "gta-vi") return groups;
  let catalog = null;
  try { catalog = await fetch("live/vi-catalog.json", { cache: "no-cache" }).then((response) => (response.ok ? response.json() : null)); } catch (error) { return groups; }
  if (!catalog || !Array.isArray(catalog.items)) return groups;
  const byTitle = new Map(catalog.items.filter((entry) => entry.image).map((entry) => [dzLooseKey(entry.title), entry]));
  return groups.map((group) => ({
    ...group,
    items: asList(group.items).map((item) => {
      if (!item || (item.media && item.media.src)) return item;
      const entry = byTitle.get(dzLooseKey(nameOf(item)));
      if (!entry) return item;
      return {
        ...item,
        media: {
          src: entry.image,
          alt: `Imagem de ${nameOf(item)}`,
          caption: `GTA Wiki - ${entry.title}`,
          credit: "Imagem via GTA Wiki / Fandom; direitos dos assets pertencem aos respectivos titulares.",
          fit: "contain",
          fromGame: entry.imageGame || ""
        }
      };
    })
  }));
};

/* Último recurso só para GTA VI (jogo ainda não lançado): item sem nenhuma foto
 * pública recebe a arte oficial de paisagem de uma região de Leonida, marcada
 * "imagem ilustrativa" — o mesmo critério do Catálogo VI. */
const dzIllustrativeForGame = (groups, dossier, nameOf) => {
  const store = window.VI_MEDIA;
  if (dossier?.id !== "gta-vi" || !store || !store.galleries) return groups;
  const pool = Object.values(store.galleries).flat().filter((media) => media && media.artwork && /-BG-GTAVI/.test(media.src || ""));
  if (!pool.length) return groups;
  const pick = (name) => {
    let hash = 0;
    for (const ch of String(name)) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
    return pool[hash % pool.length];
  };
  return groups.map((group) => ({
    ...group,
    items: asList(group.items).map((item) => {
      if (!item || (item.media && item.media.src)) return item;
      const art = pick(nameOf(item));
      return { ...item, media: { ...art, alt: `Imagem ilustrativa para ${nameOf(item)}`, caption: `${nameOf(item)} — ${art.caption}`, illustrative: true } };
    })
  }));
};

const dzFillMissingMedia = async (groupsIn, dossier, { nameOf, loadFileMap, primaryCodes = [] }) => {
  const groups = await dzCatalogMediaForGame(groupsIn, dossier, nameOf);
  const missing = groups.flatMap((group) => asList(group.items)).filter((item) => item && !(item.media && item.media.src));
  if (!missing.length) return groups;
  const codeOrder = [...primaryCodes, ...(dzNeighborCodes[dossier?.id] || [])];
  if (!codeOrder.length) return groups;
  const picks = new Map();
  const searchOne = async (term) => {
    const stem = normalizeText(term).replace(/[^a-z0-9]/g, "");
    const data = await fetch(vehicleApiUrl({ action: "query", list: "search", srnamespace: "6", srlimit: "40", srsearch: term })).then((response) => response.json());
    let best = null;
    asList(data?.query?.search).forEach((hit) => {
      const title = hit.title || "";
      const flat = normalizeText(title).replace(/[^a-z0-9]/g, "");
      if (!flat.includes(stem)) return;
      if (/logo|icon|blip|radar|map|badge|emblem|interior|inside|dashboard|rear|side|top|hud|stats|livery|advert|poster/.test(normalizeText(title))) return;
      const rank = codeOrder.findIndex((code) => imageHasGameCode(title, code));
      if (rank < 0) return;
      const score = rank * 10 + (/front|frontquarter|ingame|render/i.test(title) ? 0 : 3);
      if (!best || score < best.score) best = { title, score, code: codeOrder[rank], neighbor: rank >= primaryCodes.length };
    });
    return best;
  };
  for (let start = 0; start < missing.length; start += 6) {
    await Promise.all(missing.slice(start, start + 6).map(async (item) => {
      for (const term of dzSearchTerms(nameOf(item))) {
        try {
          const best = await searchOne(term);
          if (best) { picks.set(item, best); return; }
        } catch (error) { return; /* busca opcional: sem rede, o card fica com o ícone */ }
      }
    }));
  }
  if (!picks.size) return groups;
  const fileMap = await loadFileMap([...picks.values()].map((pick) => pick.title));
  return groups.map((group) => ({
    ...group,
    items: asList(group.items).map((item) => {
      const pick = picks.get(item);
      const media = pick && fileMap.get(normalizeText(pick.title));
      if (!media) return item;
      return { ...item, media: { ...media, alt: `Imagem de ${nameOf(item)}`, fromGame: pick.neighbor ? (dzGameLabelByCode[pick.code] || pick.code) : "" } };
    })
  }));
};

const loadVehicleGroups = async (vehicle) => {
  const cacheKey = `${vehicle.id}:${vehicle.apiPage || vehicle.categoryTitle || "fallback"}`;
  if (vehicleGroupCache.has(cacheKey)) return vehicleGroupCache.get(cacheKey);
  let groups = [];
  if (vehicle.categoryTitle) {
    groups = await loadVehicleCategoryGroup(vehicle.categoryTitle, vehicle);
  } else if (vehicle.apiPage) {
    const data = await fetch(vehicleApiUrl({
      action: "parse",
      prop: "wikitext",
      redirects: "1",
      page: vehicle.apiPage
    })).then((response) => response.json());
    groups = parseVehicleWikitext(data?.parse?.wikitext?.["*"] || "");
  }
  if (!groups.length && vehicle.fallbackGroups) groups = vehicle.fallbackGroups;
  groups = await hydrateVehicleGroupMedia(dzDropJunkItems(groups, vehicleItemName), vehicle);
  groups = await dzFillMissingMedia(groups, vehicle, { nameOf: vehicleItemName, loadFileMap: loadVehicleFileMediaMap, primaryCodes: vehicleImageNeedlesByGameId[vehicle?.id] || [] });
  groups = dzIllustrativeForGame(groups, vehicle, vehicleItemName);
  vehicleGroupCache.set(cacheKey, groups);
  return groups;
};

const vehicleGameFor = (vehicle) => gamesData.find((game) => game.id === vehicle.gameId) || null;

const matchesVehicleType = (vehicle, type) => {
  if (type === "all") return true;
  const hay = normalizeText(ptText([vehicle.coverage, vehicle.tags, vehicle.highlights, vehicle.summary]).join(" "));
  const tests = {
    land: ["carro", "van", "caminh", "sedan", "suv", "terrestre", "off-road"],
    bikes: ["moto", "biciclet", "bike", "cycles", "bmx"],
    air: ["aviao", "avioes", "aereo", "aereos", "aeronave", "helicoptero", "helicopteros", "hydra", "lazer"],
    water: ["barco", "barcos", "submers", "costa", "naval"],
    service: ["servico", "emergencia", "policia", "taxi", "governo", "viatura"],
    weaponized: ["militar", "armado", "blindado", "apc", "oppressor", "weapon"],
    online: ["online", "dlc", "economia viva"]
  };
  return (tests[type] || []).some((needle) => hay.includes(needle));
};

const VehicleDossierCard = ({ vehicle, onOpen }) => {
  const game = vehicleGameFor(vehicle);
  const media = vehicle.media || game?.media;
  return (
    <DzCard
      media={media}
      fallback={<DzFallback label={vehicle.title} icon="car" />}
      badge={vehicle.totalLabel}
      kicker={`${vehicle.universe} · ${vehicle.storyYear}`}
      title={vehicle.title}
      summary={vehicle.summary}
      facts={[["Cidade", vehicle.city], ["Cobertura", vehicle.coverage], ["Ícones", vehicle.highlights]]}
      chips={vehicle.tags}
      cta="Frota"
      onOpen={() => onOpen({ type: "vehicle", item: { ...vehicle, media } })}
    />
  );
};

const VehiclesDossierSection = ({ onOpenDossier }) => {
  const vehicles = window.vehicleDossierData || [];
  const [query, setQuery] = React.useState("");
  const [universe, setUniverse] = React.useState("all");
  const [type, setType] = React.useState("all");
  const typeOptions = [
    ["all", "Todos"],
    ["land", "Terrestres"],
    ["bikes", "Motos/bikes"],
    ["air", "Aéreos"],
    ["water", "Água"],
    ["service", "Serviço/emergência"],
    ["weaponized", "Militar/armado"],
    ["online", "Online/DLC"]
  ];
  const filtered = vehicles.filter((vehicle) =>
    searchRecord(vehicle, query) &&
    (universe === "all" || vehicle.universe === universe) &&
    matchesVehicleType(vehicle, type)
  );

  return (
    <section id="vehicles" className="dossier-section dossier-shell vehicle-section">
      <div className="wrap">
        <DossierSectionHead tkey="section.vehicles" eyebrow="Garagem criminal" title="Veículos por jogo" accent="var(--copper)" right={`${filtered.length} arquivos de frota`} />
        <div className="dossier-vehicle-intro card">
          <Corners />
          <div>
            <h3>Do top-down ao Online</h3>
            <p>
              Cada arquivo abaixo abre a frota do jogo e carrega a lista detalhada da fonte: carros, motos, bicicletas, aviões, helicópteros, barcos, submarinos, trens, viaturas, veículos militares, especiais e variações quando a própria fonte separa esses modelos.
            </p>
          </div>
          <div className="dossier-vehicle-scan">
            <span>live wiki fetch</span>
            <strong>lazy loading</strong>
            <small>listas completas sob demanda</small>
          </div>
        </div>
        <div className="dossier-filterbar wide">
          <label><span>Busca</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Jogo, cidade, avião, bicicleta, Rhino..." /></label>
          <label><span>Universo</span><select value={universe} onChange={(e) => setUniverse(e.target.value)}><option value="all">Todos</option>{universeData.map((u) => <option key={u.name}>{u.name}</option>)}</select></label>
          <label><span>Tipo</span><select value={type} onChange={(e) => setType(e.target.value)}>{typeOptions.map(([id, label]) => <option key={id} value={id}>{label}</option>)}</select></label>
        </div>
        <div className="dz-grid">
          {filtered.map((vehicle) => <VehicleDossierCard key={vehicle.id} vehicle={vehicle} onOpen={onOpenDossier} />)}
        </div>
      </div>
    </section>
  );
};

const weaponGroupCache = new Map();

const weaponWikiPageUrl = (page = "") => `https://gta.fandom.com/wiki/${encodeURIComponent(String(page).replace(/\s+/g, "_"))}`;

const weaponMediaFromSource = (name, pageTitle, src) => src ? ({
  src,
  alt: `Imagem de ${name}`,
  source: weaponWikiPageUrl(pageTitle || name),
  caption: `GTA Wiki - ${name}`,
  credit: "Imagem via GTA Wiki / Fandom; direitos dos assets pertencem aos respectivos titulares.",
  fit: "contain",
  position: "center"
}) : null;

const weaponItemName = (item) => typeof item === "string" ? item : item?.name || "";
const weaponItemPageTitle = (item) => typeof item === "string" ? item : item?.pageTitle || item?.name || "";
const weaponItemMedia = (item) => typeof item === "string" ? null : item?.media || null;
const weaponItemKey = (item) => normalizeText(`${weaponItemPageTitle(item)} ${weaponItemName(item)}`);

const weaponContentSlice = (rawText = "") => {
  const starts = ["===Contents===", "==Contents==", "== List of weapons ==", "== Weapons returning", "==Description=="];
  const startCandidates = starts
    .map((marker) => rawText.indexOf(marker))
    .filter((index) => index >= 0);
  const start = startCandidates.length ? Math.min(...startCandidates) : 0;
  const tail = rawText.slice(start);
  const endMarkers = [
    "\n==Gallery==",
    "\n==Interactive Map==",
    "\n==Additional Information==",
    "\n==Beta Weapons==",
    "\n== Deleted weapons ==",
    "\n==References==",
    "\n==Navigation=="
  ];
  const endCandidates = endMarkers
    .map((marker) => tail.indexOf(marker))
    .filter((index) => index > 0);
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
  const link = links.find((match) => !/^(file|image|category|pl|ru|es|fr|de|pt|zh):/i.test(match[1].trim()));
  if (!link) return null;
  const pageTitle = cleanWikiMarkup(link[1]).trim();
  let name = cleanWikiMarkup(link[2] || link[1])
    .replace(/\s+\(Slot\s+\d+\)/i, "")
    .replace(/\s+\(PS2 only\)/i, " (PS2 only)")
    .replace(/\s+\(Standard & Explosive\)/i, " (Standard & Explosive)")
    .trim()
    .replace(/\.$/, "");
  if (/^(weapons in|grand theft auto|file:|image:|weapon wheel|ammu-nation|random pedestrian|mission|user|cutscene weapon|gameplay weapon)$/i.test(name)) return "";
  return { name, pageTitle, imageTitle: extractWeaponImageTitle(line) };
};

const addWeaponGroupItem = (groups, label, item) => {
  const normalizedItem = typeof item === "string" ? { name: item, pageTitle: item } : item;
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
      addWeaponGroupItem(groups, currentGroup, /^\|\[\[(Image|File):/i.test(next) && item ? { ...item, imageTitle: item.imageTitle || extractWeaponImageTitle(next) } : item);
      return;
    }
    if (/^\*\[\[/.test(line)) addWeaponGroupItem(groups, currentGroup, extractWeaponItemFromLine(line));
  });

  return [...groups.entries()]
    .map(([label, items]) => ({ label, items: [...items.values()].sort((a, b) => weaponItemName(a).localeCompare(weaponItemName(b), "pt-BR")) }))
    .filter((group) => group.items.length)
    .sort((a, b) => a.label.localeCompare(b.label, "pt-BR"));
};

const normalizeWeaponTitle = (title = "") => title
  .replace(/\s+\((2D|3D|HD) Universe\)$/i, "")
  .replace(/^Beta Weapons.*$/i, "")
  .trim();

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
  /* TLAD e TBoGT herdam o arsenal de GTA IV (com acréscimos próprios). */
  "lost-and-damned": ["TLAD", "EFLC", "GTAIV", "GTA4"],
  "ballad-gay-tony": ["TBoGT", "TBOGT", "EFLC", "GTAIV", "GTA4"],
  "chinatown-wars": ["GTACW"],
  "gta-v": ["GTAV"],
  "gta-online": ["GTAO", "GTAV"],
  "trilogy-definitive": ["GTAIII", "GTAVC", "GTASA"],
  "gta-vi": ["GTAVI"]
};

/* União de todos os códigos de jogo conhecidos (para detectar "outro jogo"). */
window.__ALL_IMAGE_GAME_CODES = [...new Set([
  ...Object.values(vehicleImageNeedlesByGameId).flat(),
  ...Object.values(weaponImageNeedlesByGameId).flat()
])].sort((a, b) => b.length - a.length);

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

/* Sprites das eras 2D/3D são pequenos; ampliados com suavização viram borrão.
 * Marcamos no load, quando dá para saber o tamanho real do arquivo. */
const markSpriteOnLoad = (event) => {
  const img = event.target;
  if (img && img.naturalWidth && img.naturalWidth < 140) img.classList.add("is-sprite");
};

const weaponPageCandidatesForItem = (item, weapon) => {
  const name = weaponItemName(item);
  const pageTitle = weaponItemPageTitle(item);
  const suffix = vehicleUniversePageSuffix(weapon);
  const aliases = weaponPageAliasesByName[normalizeText(name)] || [];
  return [...new Set([
    pageTitle,
    name,
    suffix ? `${name} (${suffix})` : "",
    ...aliases
  ].filter(Boolean))];
};

const weaponFileStemCandidates = (name = "", seen = new Set()) => {
  const ascii = String(name).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const key = normalizeText(ascii);
  if (seen.has(key)) return [];
  seen.add(key);
  const aliases = weaponPageAliasesByName[key] || [];
  return [...new Set([
    ascii.replace(/\.44/g, "44").replace(/[^a-z0-9-]/gi, ""),
    ascii.replace(/\.44/g, "44").replace(/[^a-z0-9]/gi, ""),
    ascii.replace(/\s+/g, "").replace(/[^a-z0-9-]/gi, ""),
    ...aliases.flatMap((alias) => weaponFileStemCandidates(alias, seen))
  ].filter(Boolean))];
};

const weaponFileCandidatesForItem = (item, weapon) => {
  const codes = weaponImageNeedlesByGameId[weapon?.id] || [];
  const stems = weaponFileStemCandidates(weaponItemName(item));
  const suffixes = [".png", ".jpg", "-icon.png", "-Icon.png", "-HUD.png", "-HUDIcon.png", "-HUDicon.png", "-PS2-icon.png", "-PickupIcon.png", "-RSCStats.PNG"];
  const candidates = [];
  stems.forEach((stem) => {
    codes.forEach((code) => {
      suffixes.forEach((suffix) => candidates.push(`File:${stem}-${code}${suffix}`));
    });
  });
  return [...new Set(candidates)];
};

const weaponImageScore = (fileTitle = "", item, weapon) => {
  const title = normalizeText(fileTitle);
  if (/site logo|invisiblehero|blips|location|locationsmap|map|poster|advert|variant|scope|suppressor|grip|mag|dashboard|badge/.test(title)) return -100;
  let score = 0;
  const needles = weaponImageNeedlesByGameId[weapon?.id] || [];
  needles.forEach((needle) => {
    if (imageHasGameCode(fileTitle, needle)) score += 80;
  });
  if (!needles.some((needle) => imageHasGameCode(fileTitle, needle)) && imageBelongsToOtherGame(fileTitle, needles)) return -100;
  const stem = normalizeText(weaponItemName(item));
  const compactStem = normalizeText(weaponItemName(item).replace(/[^a-z0-9]/gi, ""));
  if (stem && title.includes(stem)) score += 35;
  if (compactStem && title.includes(compactStem)) score += 35;
  /* O que se quer é a ARMA como ela aparece no jogo. Antes, ícone de HUD e
   * render do modelo valiam o mesmo, então um quadradinho de interface (ou o
   * ícone de pickup) ganhava de um render — daí a sensação de imagem "que não
   * representa o modelo do jogo". Agora o modelo pesa bem mais. */
  if (/model|render|ingame|holding|aiming|rgsc/.test(title)) score += 30;
  else if (/icon|hud|pickup|rscstats/.test(title)) score += 6;
  /* Arquivo sem NENHUM código de jogo costuma ser arte genérica da série (a
   * mesma imagem em todas as fichas). Serve como último recurso, não como
   * primeira escolha. */
  if (!needles.some((needle) => imageHasGameCode(fileTitle, needle))) score -= 30;
  if (/png|jpg|jpeg/.test(title)) score += 3;
  return score;
};

const loadWeaponPageMediaMap = async (titles) => {
  const uniqueTitles = [...new Set(titles.filter(Boolean))];
  const mediaByTitle = new Map();
  await Promise.all(chunkVehicleTitles(uniqueTitles).map(async (chunk) => {
    const data = await fetch(vehicleApiUrl({
      action: "query",
      prop: "pageimages",
      piprop: "thumbnail",
      pithumbsize: "360",
      redirects: "1",
      titles: chunk.join("|")
    })).then((response) => response.json());
    const redirectsToPage = new Map();
    asList(data?.query?.redirects).forEach((redirect) => {
      const target = normalizeText(redirect.to);
      if (!redirectsToPage.has(target)) redirectsToPage.set(target, []);
      redirectsToPage.get(target).push(redirect.from);
    });
    Object.values(data?.query?.pages || {}).forEach((page) => {
      const src = page?.thumbnail?.source;
      if (!src) return;
      const media = weaponMediaFromSource(page.title, page.title, src);
      mediaByTitle.set(normalizeText(page.title), media);
      asList(redirectsToPage.get(normalizeText(page.title))).forEach((from) => {
        mediaByTitle.set(normalizeText(from), media);
      });
    });
  }));
  return mediaByTitle;
};

const loadWeaponFileMediaMap = async (fileTitles) => {
  const uniqueTitles = [...new Set(fileTitles.filter(Boolean))];
  const mediaByFile = new Map();
  await Promise.all(chunkVehicleTitles(uniqueTitles).map(async (chunk) => {
    const data = await fetch(vehicleApiUrl({
      action: "query",
      prop: "imageinfo",
      iiprop: "url",
      iiurlwidth: "360",
      titles: chunk.join("|")
    })).then((response) => response.json());
    Object.values(data?.query?.pages || {}).forEach((page) => {
      const src = page?.imageinfo?.[0]?.thumburl || page?.imageinfo?.[0]?.url;
      if (!src) return;
      mediaByFile.set(normalizeText(page.title), weaponMediaFromSource(page.title.replace(/^File:/i, ""), page.title, src));
    });
  }));
  return mediaByFile;
};

const loadWeaponGalleryMediaByItem = async (items, weapon) => {
  const titles = [...new Set(items.flatMap((item) => weaponPageCandidatesForItem(item, weapon)).filter(Boolean))];
  const itemByTitle = new Map();
  items.forEach((item) => {
    weaponPageCandidatesForItem(item, weapon).forEach((title) => itemByTitle.set(normalizeText(title), item));
  });
  const chosenFileByItem = new Map();
  await Promise.all(chunkVehicleTitles(titles).map(async (chunk) => {
    const data = await fetch(vehicleApiUrl({
      action: "query",
      prop: "images",
      imlimit: "80",
      redirects: "1",
      titles: chunk.join("|")
    })).then((response) => response.json());
    const redirectsToPage = new Map();
    asList(data?.query?.redirects).forEach((redirect) => {
      const target = normalizeText(redirect.to);
      if (!redirectsToPage.has(target)) redirectsToPage.set(target, []);
      redirectsToPage.get(target).push(redirect.from);
    });
    Object.values(data?.query?.pages || {}).forEach((page) => {
      const item =
        itemByTitle.get(normalizeText(page.title)) ||
        asList(redirectsToPage.get(normalizeText(page.title))).map((from) => itemByTitle.get(normalizeText(from))).find(Boolean);
      if (!item) return;
      const images = asList(page.images).map((image) => image.title).filter(Boolean);
      const best = images
        .map((title) => ({ title, score: weaponImageScore(title, item, weapon) }))
        .filter((entry) => entry.score > 0)
        .sort((a, b) => b.score - a.score)[0];
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
  items.forEach((item) => {
    const candidates = weaponFileCandidatesForItem(item, weapon);
    candidateByItem.set(weaponItemKey(item), candidates);
    allCandidates.push(...candidates);
  });
  const fileMedia = await loadWeaponFileMediaMap(allCandidates);
  const mediaByItem = new Map();
  items.forEach((item) => {
    const found = asList(candidateByItem.get(weaponItemKey(item))).find((candidate) => fileMedia.has(normalizeText(candidate)));
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
  const items = groups.flatMap((group) => asList(group.items));
  const fileMedia = await loadWeaponFileMediaMap(items.map((item) => item?.imageTitle));
  const galleryMedia = await loadWeaponGalleryMediaByItem(items, weapon);
  const pageMedia = await loadWeaponPageMediaMap(items.flatMap((item) => weaponPageCandidatesForItem(item, weapon)));
  const missingAfterKnown = items.filter((item) =>
    !weaponItemMedia(item) &&
    !fileMedia.get(normalizeText(item?.imageTitle || "")) &&
    !galleryMedia.get(weaponItemKey(item)) &&
    !weaponPageCandidatesForItem(item, weapon).some((candidate) => {
      const m = pageMedia.get(normalizeText(candidate));
      return m && imageMatchesGame(m.src, weaponImageNeedlesByGameId[weapon?.id] || []);
    })
  );
  const heuristicMedia = await loadWeaponHeuristicMediaByItem(missingAfterKnown, weapon);
  return groups.map((group) => ({
    ...group,
    items: asList(group.items).map((item) => {
      const normalizedItem = typeof item === "string" ? { name: item, pageTitle: item } : item;
      const media =
        weaponItemMedia(normalizedItem) ||
        fileMedia.get(normalizeText(normalizedItem.imageTitle || "")) ||
        galleryMedia.get(weaponItemKey(normalizedItem)) ||
        heuristicMedia.get(weaponItemKey(normalizedItem)) ||
        weaponPageCandidatesForItem(normalizedItem, weapon).map((candidate) => pageMedia.get(normalizeText(candidate)))
          .find((m) => m && imageMatchesGame(m.src, weaponImageNeedlesByGameId[weapon?.id] || [])) ||
        /* Sem imagem daquele jogo, o card mostra o marcador "imagem pendente".
         * Antes caía na arte do JOGO como "contexto visual" — o mesmo quadro
         * repetido em dezenas de armas, que era justamente o que não
         * representava o modelo. Placeholder honesto é melhor. */
        null;
      return { ...normalizedItem, media };
    })
  }));
};

const loadWeaponCategoryGroup = async (categoryTitle, weapon) => {
  const allowed = weaponImageNeedlesByGameId[weapon?.id] || [];
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
      ...(cmcontinue ? { gcmcontinue: cmcontinue } : {})
    })).then((response) => response.json());
    Object.values(data?.query?.pages || {}).forEach((page) => {
      const title = normalizeWeaponTitle(page.title);
      if (!title || /^Weapons in/i.test(title)) return;
      const item = {
        name: title,
        pageTitle: page.title,
        media: page.thumbnail?.source && !imageBelongsToOtherGame(page.thumbnail.source, allowed)
          ? weaponMediaFromSource(title, page.title, page.thumbnail.source)
          : null
      };
      items.set(weaponItemKey(item), item);
    });
    cmcontinue = data?.continue?.gcmcontinue || "";
  } while (cmcontinue);
  return [{ label: "Lista completa", items: [...items.values()].sort((a, b) => weaponItemName(a).localeCompare(weaponItemName(b), "pt-BR")) }];
};

const loadWeaponGroups = async (weapon) => {
  const cacheKey = `${weapon.id}:${weapon.apiPage || weapon.categoryTitle || "fallback"}`;
  if (weaponGroupCache.has(cacheKey)) return weaponGroupCache.get(cacheKey);
  let groups = [];
  if (weapon.categoryTitle) {
    groups = await loadWeaponCategoryGroup(weapon.categoryTitle, weapon);
  } else if (weapon.apiPage) {
    const data = await fetch(vehicleApiUrl({
      action: "parse",
      prop: "wikitext",
      redirects: "1",
      page: weapon.apiPage
    })).then((response) => response.json());
    groups = parseWeaponWikitext(data?.parse?.wikitext?.["*"] || "");
  }
  if (!groups.length && weapon.fallbackGroups) groups = weapon.fallbackGroups;
  groups = await hydrateWeaponGroupMedia(dzDropJunkItems(groups, weaponItemName), weapon);
  groups = await dzFillMissingMedia(groups, weapon, { nameOf: weaponItemName, loadFileMap: loadWeaponFileMediaMap, primaryCodes: weaponImageNeedlesByGameId[weapon?.id] || [] });
  groups = dzIllustrativeForGame(groups, weapon, weaponItemName);
  weaponGroupCache.set(cacheKey, groups);
  return groups;
};

const weaponGameFor = (weapon) => gamesData.find((game) => game.id === weapon.gameId) || null;

const matchesWeaponType = (weapon, type) => {
  if (type === "all") return true;
  const hay = normalizeText(ptText([weapon.coverage, weapon.tags, weapon.highlights, weapon.summary]).join(" "));
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
  return (tests[type] || []).some((needle) => hay.includes(needle));
};

const WeaponDossierCard = ({ weapon, onOpen }) => {
  const game = weaponGameFor(weapon);
  const media = weapon.media || game?.media;
  return (
    <DzCard
      media={media}
      fallback={<DzFallback label={weapon.title} icon="weapon" />}
      badge={weapon.totalLabel}
      kicker={`${weapon.universe} · ${weapon.storyYear}`}
      title={weapon.title}
      summary={weapon.summary}
      facts={[["Cidade", weapon.city], ["Cobertura", weapon.coverage], ["Destaques", weapon.highlights]]}
      chips={weapon.tags}
      cta="Arsenal"
      onOpen={() => onOpen({ type: "weapon", item: { ...weapon, media } })}
    />
  );
};

const WeaponsDossierSection = ({ onOpenDossier }) => {
  const weapons = window.weaponDossierData || [];
  const [query, setQuery] = React.useState("");
  const [universe, setUniverse] = React.useState("all");
  const [type, setType] = React.useState("all");
  const typeOptions = [
    ["all", "Todos"],
    ["melee", "Corpo a corpo"],
    ["handgun", "Pistolas"],
    ["shotgun", "Shotguns"],
    ["automatic", "SMG/Rifles/MG"],
    ["sniper", "Snipers"],
    ["heavy", "Pesadas"],
    ["thrown", "Arremessáveis"],
    ["special", "Especiais/Online"]
  ];
  const filtered = weapons.filter((weapon) =>
    searchRecord(weapon, query) &&
    (universe === "all" || weapon.universe === universe) &&
    matchesWeaponType(weapon, type)
  );

  return (
    <section id="weapons" className="dossier-section dossier-shell alt weapon-section">
      <div className="wrap">
        <DossierSectionHead tkey="section.weapons" eyebrow="Arsenal criminal" title="Armas por jogo" accent="var(--siren)" right={`${filtered.length} arquivos de arsenal`} />
        <div className="dossier-weapon-intro card">
          <Corners />
          <div>
            <h3>Do punho ao Orbital Cannon</h3>
            <p>
              Cada ficha abre o arsenal do jogo e busca a lista completa na fonte: melee, pistolas, shotguns, SMGs, rifles, snipers, armas pesadas, explosivos, itens especiais, equipamentos e armas de DLC quando a fonte separa essas classes.
            </p>
          </div>
          <div className="dossier-weapon-scan">
            <span>full arsenal</span>
            <strong>wiki indexed</strong>
            <small>beta/cut separado por precisão</small>
          </div>
        </div>
        <div className="dossier-filterbar wide">
          <label><span>Busca</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Minigun, Katana, Mk II, Rocket Launcher..." /></label>
          <label><span>Universo</span><select value={universe} onChange={(e) => setUniverse(e.target.value)}><option value="all">Todos</option>{universeData.map((u) => <option key={u.name}>{u.name}</option>)}</select></label>
          <label><span>Tipo</span><select value={type} onChange={(e) => setType(e.target.value)}>{typeOptions.map(([id, label]) => <option key={id} value={id}>{label}</option>)}</select></label>
        </div>
        <div className="dz-grid">
          {filtered.map((weapon) => <WeaponDossierCard key={weapon.id} weapon={weapon} onOpen={onOpenDossier} />)}
        </div>
      </div>
    </section>
  );
};

const DevelopmentDossierSection = ({ onOpenDossier }) => {
  const engines = (typeof deepEngineKeys !== "undefined" ? deepEngineKeys : []).map(dzDeep).filter(Boolean);
  return (
    <section id="development" className="dossier-section dossier-shell">
      <div className="wrap">
        <DossierSectionHead tkey="section.development" eyebrow="Bastidores" title="Por trás do desenvolvimento" accent="var(--money)" right="história real separada da lore" />
        {engines.length > 0 && (
          <>
            <div className="dz-subhead"><h3>Tecnologia da saga</h3><span>do motor da DMA à RAGE</span></div>
            <div className="dz-grid dz-grid--wide">
              {engines.map((engine) => (
                <DzCard
                  key={engine.id}
                  media={engine.media}
                  fallback={<DzFallback label={engine.title} icon="database" />}
                  badge={engine.era}
                  kicker={engine.subtitle}
                  title={engine.title}
                  summary={engine.lead}
                  facts={asList(engine.stats).slice(0, 2).map((stat) => [stat.detail, stat.label])}
                  cta="Dossiê técnico"
                  onOpen={() => onOpenDossier?.({ type: "deep", item: engine })}
                />
              ))}
            </div>
          </>
        )}
        <div className="dz-subhead"><h3>Produção jogo a jogo</h3><span>equipe, orçamento, elenco, vendas e controvérsias</span></div>
        <div className="dz-grid dz-grid--wide">
          {developmentData.map((item) => {
            const game = dzGameById(item.gameId);
            const lead = dzDeep(item.gameId)?.stats?.[0];
            return (
              <DzCard
                key={item.id}
                media={game?.media}
                fallback={<DzFallback label={item.title} icon="file" />}
                badge={item.period}
                kicker={lead ? `${lead.detail} · ${lead.label}` : item.period}
                title={item.title}
                summary={item.summary}
                facts={[["Marcos", item.facts]]}
                chips={game?.tags}
                cta="Produção completa"
                onOpen={() => onOpenDossier?.({ type: "development", item })}
              />
            );
          })}
        </div>
        <ConnectionsImpactSection compact />
      </div>
    </section>
  );
};

const characterFilterOptions = ["Todos", "Protagonistas", "Antagonistas", "Aliados", "Gangues", "Governo/Polícia", "Empresários", "Máfia", "GTA Online", "GTA VI"];

const matchesCharacterFilter = (character, filter) => {
  if (filter === "Todos") return true;
  const hay = normalizeText(ptText([character.category, character.role, character.tags, character.games, character.affiliations]).join(" "));
  if (filter === "GTA Online") return hay.includes("online");
  if (filter === "GTA VI") return hay.includes("gta vi");
  if (filter === "Gangues") return hay.includes("gangue") || hay.includes("families") || hay.includes("ballas");
  if (filter === "Governo/Polícia") return hay.includes("governo") || hay.includes("policia") || hay.includes("fib") || hay.includes("iaa");
  if (filter === "Empresários") return hay.includes("empresario") || hay.includes("empresários");
  if (filter === "Máfia") return hay.includes("mafia") || hay.includes("cartel") || hay.includes("triad");
  return hay.includes(normalizeText(filter.replace(/s$/, "")));
};

const CharactersDossierSection = ({ onOpenDossier }) => {
  const [query, setQuery] = React.useState("");
  const [filter, setFilter] = React.useState("Todos");
  const [universe, setUniverse] = React.useState("all");
  const filtered = charactersData.filter((character) =>
    searchRecord(character, query) &&
    matchesCharacterFilter(character, filter) &&
    (universe === "all" || character.universe === universe)
  );

  return (
    <section id="characters" className="dossier-section dossier-shell alt">
      <div className="wrap">
        <DossierSectionHead tkey="section.characters" eyebrow="Base de dados" title="Dossiê de personagens" accent="var(--neon)" right={`${filtered.length} fichas ativas`} />
        <div className="dossier-filterbar wide">
          <label><span>Busca</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Nome, jogo, facção, relação..." /></label>
          <label><span>Filtro</span><select value={filter} onChange={(e) => setFilter(e.target.value)}>{characterFilterOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
          <label><span>Universo</span><select value={universe} onChange={(e) => setUniverse(e.target.value)}><option value="all">Todos</option>{universeData.map((u) => <option key={u.name}>{u.name}</option>)}</select></label>
        </div>
        <div className="dz-grid dz-grid--rows">
          {filtered.map((character) => (
            <DzCard
              key={character.id}
              variant="row"
              thumb="portrait"
              media={character.media}
              fallback={<DzFallback label={character.name} icon={asList(character.tags).includes("governo") ? "police" : "users"} />}
              kicker={`${character.role} · ${character.universe}`}
              title={character.name}
              summary={character.biography}
              facts={[["Jogos", character.games], ["Lealdades", character.affiliations]]}
              chips={[character.importance, ...asList(character.tags)]}
              onOpen={() => onOpenDossier({ type: "character", item: character })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const cityUniverseLanes = [
  {
    id: "2d",
    label: "2D Universe",
    note: "top-down / arcade",
    cities: ["liberty-city", "vice-city", "san-andreas", "anywhere-city", "london"]
  },
  {
    id: "3d",
    label: "3D Universe",
    note: "continuidade classica",
    cities: ["liberty-city", "vice-city", "san-andreas", "los-santos", "san-fierro", "las-venturas"]
  },
  {
    id: "hd",
    label: "HD Universe",
    note: "continuidade moderna",
    /* Era HD termina em GTA VI: além de Leonida (o estado), cada região
     * confirmada pela Rockstar tem pino próprio. */
    cities: ["liberty-city", "vice-city", "san-andreas", "los-santos", "blaine-county", "north-yankton",
      "leonida", "vi-vice-city", "vi-leonida-keys", "vi-grassrivers", "vi-port-gellhorn", "vi-ambrosia", "vi-mount-kalaga"]
  }
];

const cityVariantForUniverse = (cityId, universeId) => {
  const base = citiesData.find((city) => city.id === cityId);
  if (!base) return null;
  const lane = cityUniverseLanes.find((item) => item.id === universeId);
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

const CityMapPanel = ({ selectedKey, onSelect }) => (
  <div className="dossier-city-map dossier-city-universe-map">
    <div className="dossier-map-gridlines" />
    <div className="dossier-city-map-lanes">
      {cityUniverseLanes.map((lane) => (
        <div key={lane.id} className="dossier-city-map-lane" data-universe={lane.id}>
          <div className="dossier-city-map-lane-head">
            <strong>{lane.label}</strong>
            <span>{lane.note}</span>
          </div>
          <div className="dossier-city-map-pins">
            {lane.cities.map((id) => {
              const city = cityVariantForUniverse(id, lane.id);
              const key = `${lane.id}-${id}`;
              return (
                <button
                  key={key}
                  className={selectedKey === key ? "active" : ""}
                  onClick={() => onSelect(city)}
                  title={`${city?.name} em ${lane.label}`}
                  disabled={!city}
                >
                  <span className="dossier-map-dot" />
                  <strong>{city?.name}</strong>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CitiesDossierSection = ({ onOpenDossier }) => {
  const [selected, setSelected] = React.useState(() => cityVariantForUniverse("vice-city", "hd") || citiesData.find((c) => c.id === "vice-city"));
  const [query, setQuery] = React.useState("");
  const cityVariants = citiesData.flatMap((city) =>
    Object.keys(city.universeGalleryMedia || { base: city.galleryMedia })
      .map((universeId) => cityVariantForUniverse(city.id, universeId) || city)
  );
  const filtered = cityVariants.filter((city) => searchRecord(city, query));
  const selectedKey = `${selected?.selectedUniverseId || "base"}-${selected?.id}`;

  return (
    <section id="cities" className="dossier-section dossier-shell">
      <div className="wrap">
        <DossierSectionHead tkey="section.cities" eyebrow="Mapa urbano" title="Cidades e estados" accent="var(--copper)" right="inspirações, distritos, facções e eventos" />
        <div className="dossier-city-layout">
          <CityMapPanel selectedKey={selectedKey} onSelect={setSelected} />
          <aside className="card dossier-city-selected">
            <Corners />
            <div className="dossier-card-kicker">Hotspot ativo / {selected?.selectedUniverseLabel || "todos os universos"}</div>
            <h3>{selected?.name}</h3>
            <CityImageCarousel city={selected} className="compact" />
            <p>{selected?.description}</p>
            <MetaGrid rows={[
              ["Inspiração", selected?.realWorldInspiration],
              ["Universo visual", selected?.selectedUniverseLabel],
              ["Jogos", selected?.games],
              ["Facções", selected?.factions?.slice(0, 5)]
            ]} />
            <DossierChips items={selected?.themes} />
            <button className="btn" onClick={() => onOpenDossier({ type: "city", item: selected })}>Abrir cidade</button>
          </aside>
        </div>
        <div className="dossier-filterbar single">
          <label><span>Busca em cidades</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cidade, tema, personagem..." /></label>
        </div>
        <div className="dz-grid">
          {filtered.map((city) => (
            <DzCard
              key={`${city.selectedUniverseId || "base"}-${city.id}`}
              media={city.media}
              fallback={<DzFallback label={city.name} icon="city" />}
              badge={city.selectedUniverseLabel}
              kicker={city.realWorldInspiration}
              title={city.name}
              summary={city.description}
              facts={[["Jogos", city.games], ["Facções", city.factions]]}
              chips={city.themes}
              onOpen={() => onOpenDossier({ type: "city", item: city })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FactionsDossierSection = ({ onOpenDossier }) => {
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("all");
  const categories = [...new Set(factionsData.map((f) => f.category))];
  const filtered = factionsData.filter((faction) =>
    searchRecord(faction, query) &&
    (category === "all" || faction.category === category)
  );

  return (
    <section id="gangs" className="dossier-section dossier-shell alt">
      <div className="wrap">
        <DossierSectionHead tkey="section.gangs" eyebrow="Painel criminal" title="Gangues e organizações" accent="var(--siren)" right={`${filtered.length} entidades no banco`} />
        <div className="dossier-filterbar">
          <label><span>Busca</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Leone, FIB, Lost MC, negócios..." /></label>
          <label><span>Tipo</span><select value={category} onChange={(e) => setCategory(e.target.value)}><option value="all">Todos</option>{categories.map((c) => <option key={c}>{c}</option>)}</select></label>
        </div>
        <div className="dz-grid">
          {filtered.map((faction) => (
            <DzCard
              key={faction.id}
              media={faction.media}
              fallback={<DzFallback label={faction.name} icon="users" />}
              badge={faction.category}
              kicker={faction.city}
              title={faction.name}
              summary={faction.narrativeImportance}
              facts={[["Líderes", faction.leaders], ["Negócios", faction.businesses]]}
              chips={faction.tags}
              onOpen={() => onOpenDossier({ type: "faction", item: faction })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const UniversesDossierSection = ({ onOpenDossier }) => (
  <section id="universes" className="dossier-section dossier-shell">
    <div className="wrap">
      <DossierSectionHead tkey="section.universes" eyebrow="Canon" title="Universos GTA" accent="var(--neon)" right="2D, 3D e HD não são a mesma continuidade" />
      <div className="dz-grid dz-grid--wide">
        {universeData.map((universe) => (
          <DzCard
            key={universe.id}
            media={universe.media}
            fallback={<DzFallback label={universe.name} icon="map" />}
            badge={universe.period}
            kicker={`${asList(universe.games).length} jogos na continuidade`}
            title={universe.name}
            summary={universe.summary}
            facts={[["Jogos", universe.games], ["Regra", universe.notes]]}
            cta="Continuidade"
            onOpen={() => onOpenDossier?.({ type: "universe", item: universe })}
          />
        ))}
      </div>
      <div className="card dossier-note-card">
        <Corners />
        <strong>Regra de leitura:</strong>
        <span>Personagens de universos diferentes podem aparecer como referência, piada ou eco cultural, mas isso não confirma coexistência no mesmo cânone.</span>
      </div>
    </div>
  </section>
);

const RockstarPeopleGrid = ({ onOpenDossier }) => (
  <div className="dossier-rockstar-people">
    <DossierSectionHead
      tkey="section.rockstar-people" eyebrow="Arquivo de pessoas"
      title="Criadores, produtores e desenvolvedores"
      accent="var(--neon)"
      right={`${rockstarPeopleData.length} perfis com fotos reais e fontes`}
    />
    <div className="dz-grid dz-grid--rows">
      {rockstarPeopleData.map((person) => (
        <DzCard
          key={person.id}
          id={`people-${person.id}`}
          variant="row"
          thumb="person"
          media={person.media}
          fallback={<DzFallback label={person.name} icon="users" />}
          kicker={person.role}
          title={person.name}
          summary={person.summary}
          facts={[["Era", person.era], ["Jogos", person.games]]}
          chips={person.tags}
          cta="Perfil"
          onOpen={() => onOpenDossier?.({ type: "person", item: person })}
        />
      ))}
    </div>
    <div className="card dossier-note-card dossier-people-note">
      <Corners />
      <strong>Nota editorial:</strong>
      <span>
        Steve Hammond, Russell Kay, Keith Hamilton e Scott Johnston continuam citados no contexto historico da DMA quando relevantes. Nao forcei cards individuais para eles porque nao encontrei uma foto publica confiavel e diretamente rastreavel para usar como retrato.
      </span>
    </div>
  </div>
);

const RockstarDossierSection = ({ onOpenDossier }) => (
  <section id="rockstar" className="dossier-section dossier-shell alt">
    <div className="wrap">
      <DossierSectionHead tkey="section.rockstar" eyebrow="História real" title="Rockstar Games e Rockstar North" accent="var(--evidence)" right="da DMA Design à era HD" />
      <div className="dossier-rockstar-layout">
        <div className="dossier-rockstar-timeline">
          {rockstarHistoryData.map((item) => (
            <DzCard
              key={`${item.year}-${item.title}`}
              variant="row"
              media={item.media}
              fallback={<DzFallback label={item.title} icon="star" />}
              badge={item.year}
              kicker={item.type}
              title={item.title}
              summary={item.summary}
              cta="Contexto"
              onOpen={() => onOpenDossier?.({ type: "rockstar", item })}
            />
          ))}
        </div>
        <aside className="dossier-founder-panel">
          <div className="dossier-card-kicker">Fundadores da Rockstar Games</div>
          <h3>Sam Houser, Dan Houser, Terry Donovan, Jamie King e Gary Foreman</h3>
          <OfficialMedia media={rockstarHistoryData.find((item) => item.title.includes("Rockstar North"))?.media} className="dossier-founder-media" zoom />
          <div className="dossier-founder-faces">
            {rockstarPeopleData
              .filter((person) => asList(person.tags).includes("fundador"))
              .map((person) => (
                <a key={person.id} href={`#people-${person.id}`} title={person.name}>
                  <img src={person.media.src} alt={person.name} loading="lazy" referrerPolicy="no-referrer" />
                  <span>{person.name.split(" ")[0]}</span>
                </a>
              ))}
          </div>
          <p>
            A Rockstar nasce em 1998 como selo da Take-Two depois da aquisição de ativos da BMG Interactive. A antiga DMA Design, depois Rockstar North, se torna o principal motor criativo e técnico de GTA.
          </p>
          <div className="dossier-founder-grid">
            {["Sam Houser", "Dan Houser", "Terry Donovan", "Jamie King", "Gary Foreman", "Rockstar North"].map((name) => <span key={name}>{name}</span>)}
          </div>
          <hr className="rule" />
          <p>
            A virada de GTA III em 2001, a expansão da era 3D, o realismo de GTA IV, o fenômeno GTA V/Online e GTA VI em Leonida formam uma linha clara: cada geração redefine escala, tecnologia e sátira cultural.
          </p>
        </aside>
      </div>
      <RockstarPeopleGrid onOpenDossier={onOpenDossier} />
    </div>
  </section>
);

const GTAOnlineDossierSection = ({ onOpenDossier }) => {
  const [query, setQuery] = React.useState("");
  const [year, setYear] = React.useState("Todos");
  const [type, setType] = React.useState("Todos");
  const onlineHero = window.officialMediaData?.gtaOnlineHero || gamesData.find((game) => game.id === "gta-online")?.media;
  const years = React.useMemo(() => ["Todos", ...Array.from(new Set(onlineDlcData.map((item) => item.year))).sort()], []);
  const types = React.useMemo(() => ["Todos", ...Array.from(new Set(onlineDlcData.map((item) => item.type))).sort()], []);
  const filteredDlc = onlineDlcData.filter((item) => (
    searchRecord(item, query) &&
    (year === "Todos" || item.year === year) &&
    (type === "Todos" || item.type === type)
  ));
  const openDlc = (item) => onOpenDossier && onOpenDossier({ type: "onlineDlc", item });
  return (
    <section id="gtaonline" className="dossier-section dossier-shell">
      <div className="wrap">
        <DossierSectionHead tkey="section.gtaonline" eyebrow="Plataforma viva" title="GTA Online" accent="var(--money)" right={`${onlineDlcData.length} DLCs catalogadas`} />
        <div className="dossier-online-intro">
          <div>
            <h3>Não é apenas multiplayer: é uma carreira criminal contínua.</h3>
            <p>
              GTA Online transforma o jogador em operador de uma economia criminosa. O progresso atravessa apartamentos, heists, CEOs, motoclubes, bunkers, nightclubs, cassino, Cayo Perico, agências, guerras de drogas, mercenários e frentes de lavagem.
            </p>
          </div>
          <div className="dossier-online-side">
            <OfficialMedia media={onlineHero} className="dossier-online-hero-media" zoom />
            <div className="dossier-online-metrics">
              <span><strong>2013</strong> estreia</span>
              <span><strong>10+ anos</strong> atualizações</span>
              <span><strong>Los Santos</strong> plataforma</span>
            </div>
          </div>
        </div>
        <div className="dossier-online-catalog-head">
          <div>
            <div className="dossier-card-kicker">Arquivo de DLCs e updates</div>
            <h3>Do Beach Bum ao Safehouse: cada fase clicavel</h3>
            <p>Use a busca para abrir heists, negocios, eventos sazonais, modos adversarios, carros, agencias e frentes de lavagem com contexto de impacto, sistemas, personagens e fontes.</p>
          </div>
          <span>{filteredDlc.length} registros ativos</span>
        </div>
        <div className="dossier-filterbar wide">
          <label><span>Busca</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cayo Perico, bunker, Franklin, cassino..." /></label>
          <label><span>Ano</span><select value={year} onChange={(e) => setYear(e.target.value)}>{years.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label><span>Tipo</span><select value={type} onChange={(e) => setType(e.target.value)}>{types.map((item) => <option key={item}>{item}</option>)}</select></label>
        </div>
        <div className="dz-grid">
          {filteredDlc.length ? filteredDlc.map((item) => (
            <DzCard
              key={item.id}
              media={item.media}
              fallback={<DzFallback label={item.title} icon="star" />}
              badge={item.releaseDate}
              kicker={`${item.type} · ${item.era}`}
              title={item.title}
              summary={item.summary}
              facts={[["Trouxe", item.brought]]}
              chips={item.tags}
              onOpen={() => openDlc(item)}
            />
          )) : (
            <article className="card dossier-online-empty">
              <Corners />
              <h3>Nenhuma DLC encontrada</h3>
              <p>Limpe os filtros ou busque por outro termo do catalogo.</p>
            </article>
          )}
        </div>
        <div className="dossier-online-catalog-head compact">
          <div>
            <div className="dossier-card-kicker">Linha macro</div>
            <h3>Fases maiores da carreira online</h3>
            <p>Um resumo visual das grandes viradas de GTA Online, para entender como os updates mudaram a economia e o ritmo do jogo.</p>
          </div>
        </div>
        <div className="dz-grid">
          {onlineTimelineData.map((item) => (
            <DzCard
              key={`${item.year}-${item.title}`}
              media={item.media}
              fallback={<DzFallback label={item.title} icon="star" />}
              badge={item.year}
              title={item.title}
              summary={item.theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const GTA6DossierSection = () => {
  const gta6Media = gamesData.find((game) => game.id === "gta-vi")?.media || window.officialMediaData?.hero;
  return (
  <section id="gta6" className="dossier-section dossier-shell gta6">
    <div className="wrap">
      <DossierSectionHead eyebrow="Próximo capítulo" title="GTA VI" accent="var(--neon)" right="fatos confirmados separados de leitura comunitária" />
      <div className="dossier-gta6-hero">
        <div>
          <div className="dossier-card-kicker">Leonida · Vice City · 19 de novembro de 2026</div>
          <h3>Lucia Caminos + Jason Duval</h3>
          <p>
            A página oficial apresenta Lucia e Jason como dupla presa a uma conspiração criminosa depois que um serviço simples dá errado. O retorno a Vice City acontece dentro do HD Universe, em um estado de Leonida inspirado na Flórida.
          </p>
          <DossierChips items={["confirmado", "Leonida", "Vice City", "HD Universe", "não lançado"]} />
        </div>
        <div className={`dossier-leonida-map ${gta6Media ? "has-official" : ""}`}>
          <OfficialMedia media={gta6Media} className="dossier-leonida-media" />
          <span>LEONIDA</span>
          <i className="pin-a" />
          <i className="pin-b" />
          <i className="pin-c" />
        </div>
      </div>
      <div className="dossier-fact-columns">
        <article className="card confirmed"><Corners /><h3>Confirmado oficialmente</h3><BulletList items={gta6FactsData.confirmed} /></article>
        <article className="card interpretation"><Corners /><h3>Interpretação</h3><BulletList items={gta6FactsData.interpretation} /></article>
        <article className="card unconfirmed"><Corners /><h3>Não confirmado</h3><BulletList items={gta6FactsData.notConfirmed} /></article>
      </div>
    </div>
  </section>
  );
};

const GlossaryDossierSection = ({ onOpenDossier }) => {
  const [query, setQuery] = React.useState("");
  const filtered = glossaryData.filter((item) => searchRecord(item, query));
  return (
    <section id="glossary" className="dossier-section dossier-shell alt">
      <div className="wrap">
        <DossierSectionHead tkey="section.glossary" eyebrow="Referência" title="Glossário GTA" accent="var(--copper)" right={`${filtered.length} termos`} />
        <div className="dossier-filterbar single">
          <label><span>Busca</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Canon, FIB, heist, Leonida..." /></label>
        </div>
        <div className="dz-grid dz-grid--tiles">
          {filtered.map((item) => (
            <DzCard
              key={item.term}
              variant="tile"
              kicker={item.category || "Termo do dossiê"}
              title={item.term}
              summary={item.definition}
              chips={item.tags || item.relatedTerms}
              cta={item.deepKey ? "Dossiê técnico" : "Termo"}
              onOpen={() => onOpenDossier?.({ type: "glossary", item })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ConnectionsImpactSection = ({ compact = false }) => (
  <div className={compact ? "dossier-extra-block compact" : "dossier-section dossier-shell dossier-extra-block"}>
    <div className={compact ? "" : "wrap"}>
      {!compact && <DossierSectionHead tkey="section.connections" eyebrow="Leitura editorial" title="Conexões, ordem de jogo e impacto" accent="var(--evidence)" right="contexto cultural sem misturar com canon" />}
      <div className="dossier-extra-grid">
        <article className="card">
          <Corners />
          <div className="dossier-card-kicker">Conexões e traições</div>
          <h3>Linhas vermelhas da saga</h3>
          {connectionsData.map((item) => (
            <div key={item.title} className="dossier-connection-row">
              <strong>{item.title}</strong>
              <span>{item.type}</span>
              <p>{item.summary}</p>
            </div>
          ))}
        </article>
        <article className="card">
          <Corners />
          <div className="dossier-card-kicker">Ordem recomendada</div>
          <h3>Como jogar para entender melhor</h3>
          {recommendedOrderData.map((order) => (
            <details key={order.label} className="dossier-details" open={order.label.includes("moderna")}>
              <summary>{order.label}</summary>
              <ol className="dossier-ordered">
                {order.games.map((game) => <li key={game}>{game}</li>)}
              </ol>
            </details>
          ))}
        </article>
        <article className="card">
          <Corners />
          <div className="dossier-card-kicker">Impacto cultural e controvérsias</div>
          <h3>Fora do universo dos jogos</h3>
          {impactData.map((item) => (
            <div key={item.title} className="dossier-impact-row">
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </div>
          ))}
        </article>
      </div>
    </div>
  </div>
);

const DossierFooter = () => {
  const media = window.officialMediaData;
  return (
  <footer className="dossier-footer dossier-shell">
    <div className="wrap">
      <div className="dossier-footer-grid">
        <div>
          <h2>{window.__t ? window.__t("footer.title", "Grand Theft Auto Dossiê") : "Grand Theft Auto Dossiê"}</h2>
          <p>{window.__t ? window.__t("footer.about", "Arquivo editorial de fã, com imagens promocionais oficiais creditadas e conteúdo separado entre lore, desenvolvimento real e impacto cultural.") : "Arquivo editorial de fã, com imagens promocionais oficiais creditadas e conteúdo separado entre lore, desenvolvimento real e impacto cultural."}</p>
          {media?.notice && <p className="dossier-media-notice">{media.notice}</p>}
          {typeof VILanguagePicker !== "undefined" && (
            <div className="dossier-footer-lang">
              <VILanguagePicker />
            </div>
          )}
        </div>
        <div>
          <h3>{window.__t ? window.__t("footer.sources", "Fontes-base consultadas") : "Fontes-base consultadas"}</h3>
          <ul>
            {dossierSourcesData.map((source) => (
              <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a><span>{source.note}</span></li>
            ))}
            {media?.sources?.map((source) => (
              <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a><span>{source.note}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
};

const ModalField = ({ label, children }) => (
  <div className="dossier-modal-field">
    <span>{label}</span>
    <div>{children}</div>
  </div>
);

const GlossaryTermModalContent = ({ item }) => {
  const appearsIn = asList(item.appearsIn || item.games);
  const related = asList(item.relatedTerms);
  const relatedRecords = related
    .map((term) => glossaryData.find((entry) => entry.term === term))
    .filter(Boolean);

  return (
    <div className="dossier-glossary-modal-content">
      <div className="dossier-glossary-brief">
        <strong>{item.definition}</strong>
        <span>{item.category || "Termo do dossie"}</span>
      </div>
      <MetaGrid rows={[
        ["Categoria", item.category],
        ["Aparece em", appearsIn],
        ["Termos relacionados", related],
        ["Fontes", `${asList(item.sources).length} referencias`]
      ]} />
      <ModalField label="Contexto completo">{item.expanded || item.definition}</ModalField>
      <div className="dossier-modal-split">
        <ModalField label="Onde aparece">
          <BulletList items={appearsIn.length ? appearsIn : ["Aplicavel ao dossie geral da franquia."]} />
        </ModalField>
        <ModalField label="Por que importa">
          {item.whyItMatters || item.importance || "Ajuda a ler a cronologia, o canon e os sistemas da franquia sem misturar interpretacao com fato confirmado."}
        </ModalField>
      </div>
      <ModalField label="Exemplos no dossie">
        <BulletList items={asList(item.examples).length ? item.examples : ["Termo usado para cruzar jogos, cidades, personagens e sistemas dentro do dossie."]} />
      </ModalField>
      <ModalField label="Relacoes com outros termos">
        {relatedRecords.length ? (
          <div className="dossier-glossary-relations">
            {relatedRecords.map((record) => (
              <div key={record.term}>
                <strong>{record.term}</strong>
                <span>{record.definition}</span>
              </div>
            ))}
          </div>
        ) : (
          <DossierChips items={related} limit={12} />
        )}
      </ModalField>
      <ModalField label="Notas de precisao">
        <BulletList items={asList(item.precisionNotes).length ? item.precisionNotes : ["Sem nota adicional; o termo e usado no sentido editorial descrito acima."]} />
      </ModalField>
      <ModalField label="Tags"><DossierChips items={item.tags} limit={12} /></ModalField>
      <ModalField label="Fontes"><SourceLinks items={item.sources} /></ModalField>
    </div>
  );
};

/* Grade de modelos (frota/arsenal): o card é um botão que abre a foto em tela
 * cheia, navegando pelo grupo inteiro — antes era link para o wiki. */
const DzModelGrid = ({ items, nameOf, keyOf, icon, groupLabel, prefix }) => {
  const withMedia = items.filter((entry) => entry && entry.media && entry.media.src);
  return (
    <div className={`${prefix}-name-grid`}>
      {items.map((entry) => {
        const name = nameOf(entry);
        const media = entry && entry.media && entry.media.src ? entry.media : null;
        const open = () => {
          if (!media) return;
          const gallery = withMedia.map((it) => ({ ...it.media, caption: `${nameOf(it)} — ${groupLabel}` }));
          window.dzOpenLightbox(gallery, withMedia.indexOf(entry));
        };
        return (
          <button
            type="button"
            className={`${prefix}-model-card ${media ? "has-media" : "no-media"}`}
            key={`${groupLabel}-${keyOf(entry)}`}
            onClick={open}
            disabled={!media}
            aria-label={media ? `Ampliar ${name}` : name}
          >
            <span className={`${prefix}-model-thumb`}>
              {media ? (
                <img src={media.src} alt={media.alt || `Imagem de ${name}`} loading="lazy" referrerPolicy="no-referrer" onLoad={markSpriteOnLoad} />
              ) : (
                <span className={`${prefix}-model-placeholder`}><DossierIcon type={icon} /></span>
              )}
            </span>
            <strong>{name}</strong>
            {media && media.illustrative && <em className="dz-from-game">imagem ilustrativa</em>}
            {media && !media.illustrative && media.fromGame && <em className="dz-from-game">foto de {media.fromGame}</em>}
          </button>
        );
      })}
    </div>
  );
};

const VehicleGroupsPanel = ({ groups, query }) => {
  const normalizedQuery = normalizeText(query);
  const visibleGroups = groups
    .map((group) => ({
      ...group,
      items: asList(group.items).filter((vehicle) => !normalizedQuery || normalizeText(vehicleItemName(vehicle)).includes(normalizedQuery))
    }))
    .filter((group) => group.items.length);
  const visibleCount = visibleGroups.reduce((sum, group) => sum + group.items.length, 0);

  if (!visibleGroups.length) {
    return <div className="dossier-vehicle-empty">Nenhum veículo encontrado nesse filtro.</div>;
  }

  return (
    <div className="dossier-vehicle-groups">
      <div className="dossier-vehicle-group-total">{visibleCount} itens exibidos</div>
      {visibleGroups.map((group, index) => (
        <details key={group.label} className="dossier-vehicle-group" open={index < 3 || Boolean(query)}>
          <summary><span>{group.label}</span><strong>{group.items.length}</strong></summary>
          <DzModelGrid items={group.items} nameOf={vehicleItemName} keyOf={vehicleItemKey} icon="car" groupLabel={group.label} prefix="dossier-vehicle" />
        </details>
      ))}
    </div>
  );
};

const WeaponGroupsPanel = ({ groups, query }) => {
  const normalizedQuery = normalizeText(query);
  const visibleGroups = groups
    .map((group) => ({
      ...group,
      items: asList(group.items).filter((weapon) => !normalizedQuery || normalizeText(weaponItemName(weapon)).includes(normalizedQuery))
    }))
    .filter((group) => group.items.length);
  const visibleCount = visibleGroups.reduce((sum, group) => sum + group.items.length, 0);

  if (!visibleGroups.length) {
    return <div className="dossier-weapon-empty">Nenhuma arma encontrada nesse filtro.</div>;
  }

  return (
    <div className="dossier-weapon-groups">
      <div className="dossier-weapon-group-total">{visibleCount} itens exibidos</div>
      {visibleGroups.map((group, index) => (
        <details key={group.label} className="dossier-weapon-group" open={index < 3 || Boolean(query)}>
          <summary><span>{group.label}</span><strong>{group.items.length}</strong></summary>
          <DzModelGrid items={group.items} nameOf={weaponItemName} keyOf={weaponItemKey} icon="weapon" groupLabel={group.label} prefix="dossier-weapon" />
        </details>
      ))}
    </div>
  );
};

const VehicleDossierModalContent = ({ item }) => {
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
      return () => { alive = false; };
    }
    setStatus("loading");
    loadVehicleGroups(item)
      .then((loaded) => {
        if (!alive) return;
        setGroups(loaded.length ? loaded : (item.fallbackGroups || []));
        setStatus(loaded.length ? "ready" : "empty");
      })
      .catch((err) => {
        if (!alive) return;
        setError(err?.message || "Nao foi possivel carregar a lista completa agora.");
        setGroups(item.fallbackGroups || []);
        setStatus("error");
      });
    return () => { alive = false; };
  }, [item.id]);

  return (
    <>
      <MetaGrid rows={[
        ["Lançamento", item.releaseYear],
        ["Ano da história", item.storyYear],
        ["Universo", item.universe],
        ["Cidade", item.city],
        ["Total / fonte", item.totalLabel],
        ["Arquivo carregado", item.apiPage || item.categoryTitle || "dossiê estático"]
      ]} />
      <ModalField label="Resumo">{item.summary}</ModalField>
      <ModalField label="Como a frota funciona"><BulletList items={item.systems} /></ModalField>
      <div className="dossier-modal-split">
        <ModalField label="Cobertura"><DossierChips items={item.coverage} limit={20} /></ModalField>
        <ModalField label="Veículos marcantes"><DossierChips items={item.highlights} limit={20} /></ModalField>
      </div>
      <ModalField label="Lista completa por classe">
        <div className="dossier-vehicle-modal-tools">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filtrar dentro da frota: Hydra, BMX, Police, barco..." />
          <span className={`dossier-vehicle-load-state ${status}`}>
            {status === "loading" ? "carregando fonte..." :
              status === "error" ? "fonte indisponível agora" :
              status === "empty" ? "sem tabela pública completa" :
              `${totalLoaded} registros carregados`}
          </span>
        </div>
        {error && <p className="dossier-vehicle-error">{error}</p>}
        <VehicleGroupsPanel groups={groups} query={query} />
      </ModalField>
      {item.relatedVehicleFiles && (
        <ModalField label="Frotas herdadas"><DossierChips items={item.relatedVehicleFiles} limit={10} /></ModalField>
      )}
      <ModalField label="Notas de precisão"><BulletList items={item.precisionNotes} /></ModalField>
      <ModalField label="Tags"><DossierChips items={item.tags} limit={12} /></ModalField>
      <ModalField label="Fonte"><SourceLinks items={item.source ? [item.source] : []} /></ModalField>
    </>
  );
};

const MissionGroupsPanel = ({ groups, query, selected, onSelect }) => {
  const normalizedQuery = normalizeText(query);
  const visibleGroups = groups
    .map((group) => ({
      ...group,
      items: asList(group.items).filter((item) => !normalizedQuery || normalizeText(missionItemName(item)).includes(normalizedQuery))
    }))
    .filter((group) => group.items.length);
  const visibleCount = visibleGroups.reduce((sum, group) => sum + group.items.length, 0);

  if (!visibleGroups.length) {
    return <div className="dossier-vehicle-empty">Nenhuma missão encontrada nesse filtro.</div>;
  }

  return (
    <div className="dossier-vehicle-groups dossier-mission-groups">
      <div className="dossier-vehicle-group-total">{visibleCount} missões exibidas</div>
      {visibleGroups.map((group, index) => (
        <details key={group.label} className="dossier-vehicle-group dossier-mission-group" open={index < 3 || Boolean(query)}>
          <summary><span>{group.label}</span><strong>{group.items.length}</strong></summary>
          <div className="dossier-vehicle-name-grid dossier-mission-name-grid">
            {group.items.map((item) => {
              const name = missionItemName(item);
              const page = missionItemPage(item);
              const active = selected && missionItemPage(selected) === page && missionItemName(selected) === name;
              const record = typeof item === "string" ? { name, page } : item;
              return (
                <button
                  key={`${group.label}-${page}-${name}`}
                  type="button"
                  className={active ? "active" : ""}
                  onClick={() => onSelect?.({ ...record, group: group.label })}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </details>
      ))}
    </div>
  );
};

const MissionDetailPanel = ({ selected, mission }) => {
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
      return () => { alive = false; };
    }
    setStatus("loading");
    loadMissionDetail(selected)
      .then((loaded) => {
        if (!alive) return;
        setDetail(loaded);
        setStatus(loaded?.extract ? "ready" : "partial");
      })
      .catch((err) => {
        if (!alive) return;
        setError(err?.message || "Nao foi possivel carregar o arquivo da missao agora.");
        setStatus("error");
      });
    return () => { alive = false; };
  }, [selected?.name, selected?.page]);

  if (!selected) {
    return (
      <aside className="dossier-mission-detail empty">
        <span>Arquivo individual</span>
        <h4>Selecione uma missão</h4>
        <p>Clique em qualquer nome da lista para abrir o resumo público, a página de origem e o contexto daquele item dentro do jogo.</p>
      </aside>
    );
  }

  return (
    <aside className={`dossier-mission-detail ${status}`}>
      <span>Arquivo individual</span>
      <h4>{name}</h4>
      <MetaGrid rows={[
        ["Jogo", mission.title],
        ["Grupo", selected.group],
        ["Fonte", detail?.title || missionItemPage(selected)]
      ]} />
      {detail?.facts?.length ? (
        <MetaGrid rows={detail.facts.map((fact) => [missionFactLabel(fact.label), fact.value])} />
      ) : null}
      {status === "loading" && <p>Carregando resumo da missão...</p>}
      {status === "error" && <p>{error}</p>}
      {status !== "loading" && status !== "error" && (
        <p>{detail?.extract || "A fonte pública lista esta missão, mas não retornou um resumo introdutório limpo pela API. Mantive o link direto para conferência manual."}</p>
      )}
      <div className="dossier-mission-detail-actions">
        <a className="btn" href={detail?.url || missionDetailUrl(missionItemPage(selected))} target="_blank" rel="noreferrer">Abrir fonte</a>
      </div>
    </aside>
  );
};

const MissionDossierModalContent = ({ item }) => {
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
      return () => { alive = false; };
    }
    setStatus("loading");
    loadMissionGroups(item)
      .then((loaded) => {
        if (!alive) return;
        const nextGroups = loaded.length ? loaded : (item.fallbackGroups || []);
        setGroups(nextGroups);
        const firstMission = nextGroups.flatMap((group) => asList(group.items).map((missionItem) => {
          const name = missionItemName(missionItem);
          const page = missionItemPage(missionItem);
          const record = typeof missionItem === "string" ? { name, page } : missionItem;
          return { ...record, group: group.label };
        }))[0];
        setSelectedMission(firstMission || null);
        setStatus(loaded.length ? "ready" : "empty");
      })
      .catch((err) => {
        if (!alive) return;
        setError(err?.message || "Nao foi possivel carregar a lista completa agora.");
        setGroups(item.fallbackGroups || []);
        setStatus("error");
      });
    return () => { alive = false; };
  }, [item.id]);

  return (
    <>
      <MetaGrid rows={[
        ["Lançamento", item.releaseYear],
        ["Ano da história", item.storyYear],
        ["Universo", item.universe],
        ["Cidade", item.city],
        ["Total / fonte", item.totalLabel],
        ["Arquivo carregado", item.apiPage || "dossiê estático"]
      ]} />
      <ModalField label="Resumo">{item.summary}</ModalField>
      <ModalField label="Como as missões funcionam"><BulletList items={item.systems} /></ModalField>
      <div className="dossier-modal-split">
        <ModalField label="Cobertura"><DossierChips items={item.coverage} limit={20} /></ModalField>
        <ModalField label="Missões / blocos marcantes"><DossierChips items={item.highlights} limit={20} /></ModalField>
      </div>
      <ModalField label="Lista completa por região, contato ou tipo">
        <div className="dossier-mission-modal-tools">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filtrar: Big Smoke, The Big Score, phone, heist..." />
          <span className={`dossier-mission-load-state ${status}`}>
            {status === "loading" ? "carregando fonte..." :
              status === "error" ? "fonte indisponível agora" :
              status === "empty" ? "sem tabela pública completa" :
              `${totalLoaded} registros carregados`}
          </span>
        </div>
        {error && <p className="dossier-mission-error">{error}</p>}
        <div className="dossier-mission-list-layout">
          <MissionGroupsPanel groups={groups} query={query} selected={selectedMission} onSelect={setSelectedMission} />
          <MissionDetailPanel selected={selectedMission} mission={item} />
        </div>
      </ModalField>
      {item.relatedMissionFiles && (
        <ModalField label="Campanhas herdadas"><DossierChips items={item.relatedMissionFiles} limit={10} /></ModalField>
      )}
      <ModalField label="Notas de precisão"><BulletList items={item.precisionNotes} /></ModalField>
      <ModalField label="Tags"><DossierChips items={item.tags} limit={12} /></ModalField>
      <ModalField label="Fonte"><SourceLinks items={item.source ? [item.source] : []} /></ModalField>
    </>
  );
};

const WeaponDossierModalContent = ({ item }) => {
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
      return () => { alive = false; };
    }
    setStatus("loading");
    loadWeaponGroups(item)
      .then((loaded) => {
        if (!alive) return;
        setGroups(loaded.length ? loaded : (item.fallbackGroups || []));
        setStatus(loaded.length ? "ready" : "empty");
      })
      .catch((err) => {
        if (!alive) return;
        setError(err?.message || "Nao foi possivel carregar a lista completa agora.");
        setGroups(item.fallbackGroups || []);
        setStatus("error");
      });
    return () => { alive = false; };
  }, [item.id]);

  return (
    <>
      <MetaGrid rows={[
        ["Lançamento", item.releaseYear],
        ["Ano da história", item.storyYear],
        ["Universo", item.universe],
        ["Cidade", item.city],
        ["Total / fonte", item.totalLabel],
        ["Arquivo carregado", item.apiPage || item.categoryTitle || "dossiê estático"]
      ]} />
      <ModalField label="Resumo">{item.summary}</ModalField>
      <ModalField label="Como o arsenal funciona"><BulletList items={item.systems} /></ModalField>
      <div className="dossier-modal-split">
        <ModalField label="Cobertura"><DossierChips items={item.coverage} limit={20} /></ModalField>
        <ModalField label="Armas marcantes"><DossierChips items={item.highlights} limit={20} /></ModalField>
      </div>
      <ModalField label="Lista completa por classe">
        <div className="dossier-weapon-modal-tools">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filtrar dentro do arsenal: Minigun, Katana, Mk II..." />
          <span className={`dossier-weapon-load-state ${status}`}>
            {status === "loading" ? "carregando fonte..." :
              status === "error" ? "fonte indisponível agora" :
              status === "empty" ? "sem tabela pública completa" :
              `${totalLoaded} registros carregados`}
          </span>
        </div>
        {error && <p className="dossier-weapon-error">{error}</p>}
        <WeaponGroupsPanel groups={groups} query={query} />
      </ModalField>
      {item.relatedWeaponFiles && (
        <ModalField label="Arsenais herdados"><DossierChips items={item.relatedWeaponFiles} limit={10} /></ModalField>
      )}
      <ModalField label="Notas de precisão"><BulletList items={item.precisionNotes} /></ModalField>
      <ModalField label="Tags"><DossierChips items={item.tags} limit={12} /></ModalField>
      <ModalField label="Fonte"><SourceLinks items={item.source ? [item.source] : []} /></ModalField>
    </>
  );
};

/* Engine de cada jogo (para ligar fichas de jogo ao dossiê técnico). */
const dzEngineForGame = {
  "gta-1": "race-n-chase-engine", "london-1969": "race-n-chase-engine", "london-1961": "race-n-chase-engine", "gta-2": "race-n-chase-engine",
  "gta-iii": "renderware", "vice-city": "renderware", "san-andreas": "renderware",
  "gta-iv": "rage", "lost-and-damned": "rage", "ballad-gay-tony": "rage", "gta-v": "rage", "gta-online": "rage", "gta-vi": "rage"
};
const dzEuphoriaGames = ["gta-iv", "lost-and-damned", "ballad-gay-tony", "gta-v", "gta-online"];
const dzGamesForEngine = (engineId) => (engineId === "euphoria"
  ? dzEuphoriaGames
  : Object.keys(dzEngineForGame).filter((gameId) => dzEngineForGame[gameId] === engineId)
).map(dzGameById).filter(Boolean);
const dzEnginesForGame = (gameId) => [dzEngineForGame[gameId], dzEuphoriaGames.includes(gameId) ? "euphoria" : null].map(dzDeep).filter(Boolean);

/* Menções em texto livre (história da Rockstar, perfis). */
const dzGamesMentioned = (texts) => {
  const hay = ` ${titleKey(ptText(asList(texts).join(" ")))} `;
  return gamesData.filter((game) => {
    const key = dzGameKey(game.title);
    return [`gta ${key}`, key.length >= 8 ? key : null].filter(Boolean).some((probe) => hay.includes(` ${probe} `));
  });
};
const dzPeopleMentioned = (texts) => {
  const hay = ` ${dzNameKey(asList(texts).join(" "))} `;
  return rockstarPeopleData.filter((person) => hay.includes(` ${dzNameKey(person.name)} `));
};
const dzPersonLink = (person) => person && { key: `person-${person.id}`, title: person.name, sub: person.role, media: person.media, record: { type: "person", item: person } };
const dzRockstarLink = (entry) => entry && { key: `rockstar-${entry.year}-${entry.title}`, title: entry.title, sub: entry.year, media: entry.media, record: { type: "rockstar", item: entry } };
const dzSplitPeople = (value) => String(ptText(value) || "").split(/\s*(?:,|\/|\+| e | and )\s*/).filter(Boolean);

const DossierRecordModal = ({ record, onClose, onOpen }) => {
  const shellRef = React.useRef(null);
  const item = record?.item || null;
  React.useEffect(() => {
    if (shellRef.current) shellRef.current.scrollTop = 0;
  }, [item]);
  if (!item) return null;

  const type = record.type;
  const open = onOpen || null;
  const labels = {
    game: { label: "Jogo" },
    character: { label: "Personagem" },
    city: { label: "Cidade" },
    faction: { label: "Facção" },
    timeline: { label: "Cronologia" },
    onlineDlc: { label: "Online DLC" },
    mission: { label: "Missões" },
    vehicle: { label: "Frota" },
    weapon: { label: "Arsenal" },
    glossary: { label: "Glossário" },
    development: { label: "Produção" },
    deep: { label: "Tecnologia" },
    rockstar: { label: "Rockstar" },
    person: { label: "Pessoa" },
    universe: { label: "Universo" }
  };
  const devGame = type === "development" ? dzGameById(item.gameId) : null;
  const timelineGame = type === "timeline" ? (item.game || findGameForTimeline(item)) : null;
  const media = item.media || devGame?.media || timelineGame?.media || null;
  const title = item.title || item.name || item.term;
  const subtitle =
    type === "game" ? `${item.universe} · ${item.city}` :
    type === "character" ? `${item.role} · ${item.city}` :
    type === "city" ? `${item.realWorldInspiration}` :
    type === "faction" ? `${item.category} · ${item.city}` :
    type === "onlineDlc" ? `${item.releaseDate} / ${item.type}` :
    (type === "mission" || type === "vehicle" || type === "weapon") ? `${item.universe} · ${item.totalLabel}` :
    type === "glossary" ? `${item.category || "Glossario"}` :
    type === "development" ? `${item.period}` :
    type === "deep" ? `${item.subtitle}` :
    type === "rockstar" ? `${item.year} · ${item.type}` :
    type === "person" ? `${item.role}` :
    type === "universe" ? `${item.period}` :
    type === "timeline" ? `${item.year} · ${item.universe} · ${item.city}` :
    item.universe || "Arquivo";
  const sideNote = item.releaseYear || item.year || item.period || item.era || item.category || "";

  return (
    <div className="dossier-modal-back dossier-shell" onClick={onClose}>
      <article className="dossier-modal" ref={shellRef} onClick={(e) => e.stopPropagation()}>
        <header>
          <div>
            <span>Dossiê completo</span>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <button onClick={onClose} aria-label="Fechar">×</button>
        </header>
        <div className="dossier-modal-grid">
          <aside className="dossier-modal-evidence">
            {type === "city" ? (
              <CityImageCarousel city={item} className="modal" />
            ) : (
              <div className={`dossier-cover-art ${universeTone(item.universe || item.category)} ${media ? "has-official" : ""}`}>
                {media ? <OfficialMedia media={media} className={`dossier-cover-media ${type === "character" || type === "person" ? "dossier-mugshot-media" : ""}`} zoom gallery={asList(item.galleryMedia).length ? item.galleryMedia : [media]} /> : <div className="dossier-cover-map" />}
                <div className="dossier-cover-label">
                  <strong>{labels[type]?.label || type}</strong>
                  {sideNote && <small>{textOf(sideNote)}</small>}
                </div>
              </div>
            )}
            {type !== "city" && <DzGalleryStrip items={item.galleryMedia} />}
            <DossierChips items={item.tags || [item.universe, item.category, item.certainty].filter(Boolean)} limit={8} />
            <DzModalToc rootRef={shellRef} watch={item} />
          </aside>

          <section className="dossier-modal-content">
            {type === "game" && (
              <>
                <MetaGrid rows={[
                  ["Lançamento", item.releaseYear],
                  ["Ano da história", item.storyYear],
                  ["Universo", item.universe],
                  ["Cidade", item.city],
                  ["Protagonista", item.protagonist],
                  ["Antagonistas", item.antagonists],
                  ["Personagens secundários", item.supportingCharacters],
                  ["Facções", item.factions]
                ]} />
                <ModalField label="Resumo">{item.summary}</ModalField>
                <ModalField label="História completa">{item.fullStory}</ModalField>
                <ModalField label="Desenvolvimento">{item.developmentHistory}</ModalField>
                <ModalField label="Importância">{item.importance}</ModalField>
                <DeepDossierBlocks deep={dzDeep(item.id)} />
                <DzRelated label="Personagens" items={dzCharactersForGame(item).map(dzLink.character)} onOpen={open} />
                <DzRelated label="Facções e gangues" items={dzFactionsForGame(item).map(dzLink.faction)} onOpen={open} />
                <DzRelated label="Cidades" items={dzCitiesForGame(item).map(dzLink.city)} onOpen={open} />
                <DzRelated
                  label="Missões, frota e arsenal"
                  items={[
                    ...dzDossiersForGame(window.missionDossierData, item).map(dzLink.mission),
                    ...dzDossiersForGame(window.vehicleDossierData, item).map(dzLink.vehicle),
                    ...dzDossiersForGame(window.weaponDossierData, item).map(dzLink.weapon)
                  ]}
                  onOpen={open}
                />
                <DzRelated
                  label="Bastidores, tecnologia e jogos ligados"
                  items={[
                    dzLink.development(developmentData.find((dev) => dev.gameId === item.id)),
                    ...dzEnginesForGame(item.id).map(dzLink.deep),
                    dzLink.universe(universeData.find((universe) => universe.name === item.universe)),
                    ...dzGamesByNames(item.relatedGames).map(dzLink.game)
                  ]}
                  onOpen={open}
                />
                <ModalField label="Temas"><DossierChips items={item.themes} limit={12} /></ModalField>
              </>
            )}
            {type === "development" && (
              <>
                <MetaGrid rows={[
                  ["Período", item.period],
                  ["Jogo", devGame?.title],
                  ["Universo", devGame?.universe],
                  ["Cidade", devGame?.city]
                ]} />
                <ModalField label="Resumo">{item.summary}</ModalField>
                <ModalField label="Marcos"><BulletList items={item.facts} /></ModalField>
                <DeepDossierBlocks deep={dzDeep(item.gameId)} />
                <ModalField label="Notas de precisão">
                  {Array.isArray(item.uncertainty) ? <BulletList items={item.uncertainty} /> : item.uncertainty}
                </ModalField>
                <DzRelated
                  label="Abrir também"
                  items={[dzLink.game(devGame), ...dzEnginesForGame(item.gameId).map(dzLink.deep)]}
                  onOpen={open}
                />
                <ModalField label="Fontes do resumo"><SourceLinks items={item.sources} /></ModalField>
              </>
            )}
            {type === "deep" && (
              <>
                <DeepDossierBlocks deep={item} />
                <DzRelated label="Jogos do dossiê nesta tecnologia" items={dzGamesForEngine(item.id).map(dzLink.game)} onOpen={open} />
                <DzRelated
                  label="Outras tecnologias da saga"
                  items={(typeof deepEngineKeys !== "undefined" ? deepEngineKeys : []).filter((key) => key !== item.id).map(dzDeep).map(dzLink.deep)}
                  onOpen={open}
                />
              </>
            )}
            {type === "mission" && (
              <>
                <MissionDossierModalContent item={item} />
                <DzRelated label="Jogo" items={[dzLink.game(dzGameById(item.gameId))]} onOpen={open} />
              </>
            )}
            {type === "vehicle" && (
              <>
                <VehicleDossierModalContent item={item} />
                <DzRelated label="Jogo" items={[dzLink.game(dzGameById(item.gameId))]} onOpen={open} />
              </>
            )}
            {type === "weapon" && (
              <>
                <WeaponDossierModalContent item={item} />
                <DzRelated label="Jogo" items={[dzLink.game(dzGameById(item.gameId))]} onOpen={open} />
              </>
            )}
            {type === "character" && (
              <>
                <MetaGrid rows={[
                  ["Jogos", item.games],
                  ["Universo", item.universe],
                  ["Cidade", item.city],
                  ["Papel", item.role],
                  ["Apelidos", item.aliases],
                  ["Lealdades", item.affiliations],
                  ["Conflitos", item.enemies],
                  ["Importância", item.importance]
                ]} />
                {item.actor && <div className="dz-actor"><span>Voz / atuação</span><strong>{item.actor}</strong></div>}
                <ModalField label="Biografia">{item.biography}</ModalField>
                <ModalField label="Arco narrativo">{item.storyArc}</ModalField>
                {item.fate && <ModalField label="Destino">{item.fate}</ModalField>}
                {asList(item.relationships).length > 0 && <ModalField label="Relações importantes"><BulletList items={item.relationships} /></ModalField>}
                <DzRelated label="Personagens ligados" items={dzRelatedCharacters(item).map(dzLink.character)} onOpen={open} />
                <DzRelated label="Jogos" items={dzGamesByNames(item.games).map(dzLink.game)} onOpen={open} />
                <DzRelated label="Facções" items={dzFactionsForCharacter(item).map(dzLink.faction)} onOpen={open} />
                <DzRelated label="Cidades" items={dzCitiesForCharacter(item).map(dzLink.city)} onOpen={open} />
                {asList(item.tags).length > 0 && <ModalField label="Tags"><DossierChips items={item.tags} limit={12} /></ModalField>}
              </>
            )}
            {type === "city" && (
              <>
                <MetaGrid rows={[
                  ["Inspiração real", item.realWorldInspiration],
                  ["Universos", item.universeAppearances],
                  ["Universo visual", item.selectedUniverseLabel],
                  ["Jogos", item.games],
                  ["Distritos/áreas", item.districts],
                  ["Gangues dominantes", item.factions],
                  ["Personagens ligados", item.characters]
                ]} />
                <ModalField label="Descrição">{item.description}</ModalField>
                <ModalField label="Eventos importantes"><BulletList items={item.importantEvents} /></ModalField>
                <ModalField label="Estética visual">{item.visualStyle}</ModalField>
                <ModalField label="Distritos e áreas"><DossierChips items={item.districts} limit={30} /></ModalField>
                <DzRelated label="Personagens" items={dzCharactersForCity(item).map(dzLink.character)} onOpen={open} />
                <DzRelated label="Facções" items={dzFactionsForCity(item).map(dzLink.faction)} onOpen={open} />
                <DzRelated label="Jogos" items={dzGamesByNames(item.games).map(dzLink.game)} onOpen={open} />
                <DzRelated
                  label="Universos"
                  items={universeData.filter((universe) => asList(ptText(item.universeAppearances)).includes(universe.name)).map(dzLink.universe)}
                  onOpen={open}
                />
                <ModalField label="Temas"><DossierChips items={item.themes} limit={12} /></ModalField>
              </>
            )}
            {type === "faction" && (
              <>
                <MetaGrid rows={[
                  ["Jogo", item.game],
                  ["Cidade", item.city],
                  ["Tipo", item.category],
                  ["Líderes", item.leaders],
                  ["Aliados", item.allies],
                  ["Inimigos", item.enemies],
                  ["Negócios criminosos", item.businesses],
                  ["Status/destino", item.status]
                ]} />
                <ModalField label="Importância narrativa">{item.narrativeImportance}</ModalField>
                {item.status && <ModalField label="Situação">{item.status}</ModalField>}
                <ModalField label="Negócios"><BulletList items={item.businesses} /></ModalField>
                <DzRelated label="Membros e líderes no dossiê" items={dzCharactersForFaction(item).map(dzLink.character)} onOpen={open} />
                <DzRelated
                  label="Aliados e rivais no banco"
                  items={dzUnique([...asList(item.allies), ...asList(item.enemies)].map(dzFactionByName)).filter((other) => other.id !== item.id).map(dzLink.faction)}
                  onOpen={open}
                />
                <DzRelated label="Jogos" items={dzGamesByNames(item.game).map(dzLink.game)} onOpen={open} />
                <DzRelated label="Cidades" items={dzCitiesForFaction(item).map(dzLink.city)} onOpen={open} />
                {asList(item.tags).length > 0 && <ModalField label="Tags"><DossierChips items={item.tags} limit={12} /></ModalField>}
              </>
            )}
            {type === "timeline" && (
              <>
                <MetaGrid rows={[
                  ["Ano", item.year],
                  ["Universo", item.universe],
                  ["Cidade", item.city],
                  ["Protagonista", item.protagonist],
                  ["Precisão", item.certainty]
                ]} />
                <ModalField label="Resumo">{item.summary}</ModalField>
                <ModalField label="Eventos"><BulletList items={item.beats} /></ModalField>
                {timelineGame?.fullStory && <ModalField label="História do jogo">{timelineGame.fullStory}</ModalField>}
                {timelineGame?.importance && <ModalField label="Por que importa na saga">{timelineGame.importance}</ModalField>}
                <DzRelated label="Jogo" items={[dzLink.game(timelineGame)]} onOpen={open} />
                <DzRelated label="Protagonistas" items={dzUnique(dzSplitPeople(item.protagonist).map(dzFindCharacter)).map(dzLink.character)} onOpen={open} />
                <DzRelated label="Cidade" items={dzUnique(dzSplit(item.city).map(dzCityByName)).map(dzLink.city)} onOpen={open} />
              </>
            )}
            {type === "rockstar" && (
              <>
                <MetaGrid rows={[["Ano", item.year], ["Tipo", item.type]]} />
                <ModalField label="Resumo">{item.summary}</ModalField>
                <ModalField label="Contexto completo">
                  {asList(item.details).map((paragraph, index) => <p key={index} className="dz-par">{paragraph}</p>)}
                </ModalField>
                <DzRelated label="Pessoas citadas" items={dzPeopleMentioned([item.title, item.summary, ...asList(item.details)]).map(dzPersonLink)} onOpen={open} />
                <DzRelated label="Jogos citados" items={dzGamesMentioned([item.title, item.summary, ...asList(item.details)]).map(dzLink.game)} onOpen={open} />
                <ModalField label="Fontes"><SourceLinks items={item.sources} /></ModalField>
              </>
            )}
            {type === "person" && (
              <>
                <MetaGrid rows={[["Função", item.role], ["Era", item.era], ["Base", item.city], ["Jogos", item.games]]} />
                <ModalField label="Perfil">{item.summary}</ModalField>
                <ModalField label="Contribuições"><BulletList items={item.contributions} /></ModalField>
                <DzRelated label="Jogos da saga" items={dzUnique([...dzGamesByNames(item.games), ...dzGamesMentioned([item.summary, ...asList(item.contributions)])]).map(dzLink.game)} onOpen={open} />
                <DzRelated
                  label="Momentos da Rockstar"
                  items={rockstarHistoryData.filter((entry) => dzPeopleMentioned([entry.summary, ...asList(entry.details)]).some((person) => person.id === item.id)).map(dzRockstarLink)}
                  onOpen={open}
                />
                <ModalField label="Tags"><DossierChips items={item.tags} limit={12} /></ModalField>
                <ModalField label="Fontes"><SourceLinks items={item.sources} /></ModalField>
              </>
            )}
            {type === "universe" && (
              <>
                <MetaGrid rows={[["Período", item.period], ["Jogos", item.games]]} />
                <ModalField label="Resumo">{item.summary}</ModalField>
                <ModalField label="Descrição">{item.description}</ModalField>
                <ModalField label="Regras de leitura"><BulletList items={item.notes} /></ModalField>
                {(() => {
                  const term = glossaryData.find((entry) => entry.term === item.name);
                  return term ? (
                    <>
                      {term.expanded && <ModalField label="Contexto do glossário">{term.expanded}</ModalField>}
                      {asList(term.precisionNotes).length > 0 && <ModalField label="Notas de precisão"><BulletList items={term.precisionNotes} /></ModalField>}
                    </>
                  ) : null;
                })()}
                <DzRelated label="Jogos" items={gamesData.filter((game) => game.universe === item.name).map(dzLink.game)} onOpen={open} />
                <DzRelated label="Personagens" items={charactersData.filter((character) => character.universe === item.name).map(dzLink.character)} onOpen={open} />
                <DzRelated label="Cidades" items={citiesData.filter((city) => asList(ptText(city.universeAppearances)).includes(item.name)).map(dzLink.city)} onOpen={open} />
              </>
            )}
            {type === "onlineDlc" && (
              <>
                <MetaGrid rows={[
                  ["Lancamento", item.releaseDate],
                  ["Ano", item.year],
                  ["Fase", item.era],
                  ["Tipo", item.type],
                  ["Sistemas", item.systems],
                  ["Modos", item.modes],
                  ["Veiculos", item.vehicles],
                  ["Personagens", item.characters]
                ]} />
                <ModalField label="Resumo">{item.summary}</ModalField>
                <ModalField label="O que trouxe"><BulletList items={item.brought} /></ModalField>
                <ModalField label="Sistemas e propriedades"><BulletList items={asList(item.systems).length ? item.systems : ["sem sistema persistente especifico; foco em conteudo, evento ou ajuste de plataforma"]} /></ModalField>
                <ModalField label="Veiculos e equipamentos"><BulletList items={asList(item.vehicles).length ? item.vehicles : ["sem veiculo central; update focado em modo, evento, ferramenta ou atividade"]} /></ModalField>
                <ModalField label="Modos e atividades"><BulletList items={asList(item.modes).length ? item.modes : ["sem modo destacado alem das atividades associadas ao update"]} /></ModalField>
                <ModalField label="Personagens e contatos"><BulletList items={asList(item.characters).length ? item.characters : ["jogador online e contatos de sessao"]} /></ModalField>
                <ModalField label="Impacto em GTA Online">{item.impact}</ModalField>
                <ModalField label="Leitura de gameplay">
                  {`Esta atualizacao se encaixa na fase "${item.era}" do Online e amplia a carreira criminal do jogador por meio de ${asList(item.systems).join(", ") || "novas atividades"}.`}
                </ModalField>
                <DzRelated
                  label="Personagens no dossiê"
                  items={dzUnique(asList(item.characters).map(dzFindCharacter)).map(dzLink.character)}
                  onOpen={open}
                />
                <DzRelated label="Jogo base e tecnologia" items={[dzLink.game(dzGameById("gta-online")), dzLink.deep(dzDeep("rage"))]} onOpen={open} />
                <ModalField label="Tags"><DossierChips items={item.tags} limit={12} /></ModalField>
                <ModalField label="Fontes"><SourceLinks items={item.sources} /></ModalField>
              </>
            )}
            {type === "glossary" && (
              <>
                {item.deepKey && <DeepDossierBlocks deep={dzDeep(item.deepKey)} />}
                <GlossaryTermModalContent item={item} />
                <DzRelated label="Jogos citados" items={dzGamesByNames(asList(item.appearsIn || item.games)).map(dzLink.game)} onOpen={open} />
                {item.deepKey && <DzRelated label="Jogos nesta tecnologia" items={dzGamesForEngine(item.deepKey).map(dzLink.game)} onOpen={open} />}
              </>
            )}
          </section>
        </div>
      </article>
    </div>
  );
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
  DossierRecordModal,
  DzLightbox,
  DzLoop,
  OfficialMedia
});
