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

const DossierSectionHead = ({ eyebrow, title, accent, right }) => (
  <div className="dossier-section-head">
    <div>
      <div className="dossier-eyebrow" style={{ color: accent || "var(--evidence)" }}>{eyebrow}</div>
      <h2>{title}</h2>
    </div>
    {right && <div className="dossier-head-note">{right}</div>}
  </div>
);

const DossierChips = ({ items, limit = 8 }) => (
  <div className="dossier-chip-row">
    {asList(items).slice(0, limit).map((item, index) => (
      <Tag key={`${item}-${index}`} tone={tagTone(item)}>{item}</Tag>
    ))}
  </div>
);

const mediaCaption = (media) => media?.caption || media?.credit || "Rockstar Games";

const OfficialMedia = ({ media, className = "" }) => {
  if (!media?.src) return null;
  const caption = mediaCaption(media);
  const imageStyle = {
    objectPosition: media.position || undefined,
    objectFit: media.fit || undefined
  };
  return (
    <figure className={`official-media ${className}`}>
      <img src={media.src} alt={media.alt || caption} loading="lazy" referrerPolicy="no-referrer" style={imageStyle} />
      <figcaption>
        {media.source ? <a href={media.source} target="_blank" rel="noreferrer">{caption}</a> : caption}
      </figcaption>
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
      <OfficialMedia media={active} className="dossier-city-carousel-media" />
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

const DossierHUDNav = ({ active, onJump }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="dossier-hud dossier-shell">
      <div className="dossier-hud-inner">
        <a className="dossier-brand" href="#overview" onClick={() => onJump && onJump("overview")}>
          <span className="dossier-brand-badge">GTA</span>
          <span>
            <strong>Dossiê Criminal</strong>
            <small>Arquivo GTA / canon, bastidores e cidades</small>
          </span>
        </a>
        <nav className={open ? "open" : ""}>
          {dossierNav().map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={active === n.id ? "active" : ""}
              onClick={() => {
                setOpen(false);
                onJump && onJump(n.id);
              }}
            >
              <span>{n.k}</span>{n.label}
            </a>
          ))}
        </nav>
        <button className="dossier-menu" onClick={() => setOpen((v) => !v)} aria-label="Abrir menu">☰</button>
      </div>
    </header>
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
          eyebrow="Linha do tempo"
          title="Cronologia interna e lançamentos"
          accent="var(--siren)"
          right="história do universo separada da história de desenvolvimento"
        />
        <div className="dossier-segmented">
          <button className={mode === "chronology" ? "active" : ""} onClick={() => setMode("chronology")}>História interna</button>
          <button className={mode === "release" ? "active" : ""} onClick={() => setMode("release")}>Ordem de lançamento</button>
        </div>

        {mode === "chronology" ? (
          <div className="dossier-chronology">
            {chronologyItems.map((item) => (
              <article key={`${item.year}-${item.title}`} className="card dossier-timeline-card">
                <Corners />
                <div className="dossier-time-pin">
                  <strong>{item.year}</strong>
                  <span>{item.universe}</span>
                </div>
                <div className={`dossier-timeline-cover ${item.game?.media ? "has-official" : ""}`}>
                  {item.game?.media && <OfficialMedia media={item.game.media} className="dossier-cover-media" />}
                  <div className="dossier-cover-label">
                    <span>{item.game?.releaseYear || item.year}</span>
                    <strong>{(item.game?.title || item.title).replace("Grand Theft Auto", "GTA")}</strong>
                    <small>{item.game?.city || item.city}</small>
                  </div>
                </div>
                <div className="dossier-time-body">
                  <div className="dossier-card-kicker">{item.city}</div>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <BulletList items={item.beats} />
                  <DossierChips items={[item.protagonist, item.certainty]} limit={4} />
                  <button className="btn" onClick={() => onOpenDossier({ type: "timeline", item })}>Abrir dossiê</button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="dossier-release-grid">
            {releaseItems.map(({ year, title, game }) => (
              <article key={`${year}-${title}`} className="card dossier-release-card">
                <Corners />
                <div className={`dossier-cover-mini ${game?.media ? "has-official" : ""}`}>
                  {game?.media && <OfficialMedia media={game.media} className="dossier-cover-media" />}
                  <div className="dossier-cover-label">
                    <span>{year}</span>
                    <strong>{title.replace("Grand Theft Auto", "GTA")}</strong>
                  </div>
                </div>
                <div>
                  <div className="dossier-card-kicker">Lançamento · {year}</div>
                  <h3>{title}</h3>
                  <MetaGrid rows={[
                    ["História se passa em", game?.storyYear || "—"],
                    ["Cidade", game?.city || "—"],
                    ["Protagonista", game?.protagonist || "—"]
                  ]} />
                  <p>{game?.summary || "Coletado na linha oficial de lançamentos da franquia."}</p>
                  {game && <DossierChips items={game.tags} limit={5} />}
                  {game && <button className="btn" onClick={() => onOpenDossier({ type: "game", item: game })}>Ver jogo</button>}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const GameDossierCard = ({ game, onOpen }) => (
  <article className="card dossier-game-card">
    <Corners />
    <div className={`dossier-cover-art ${universeTone(game.universe)} ${game.media ? "has-official" : ""}`}>
      {game.media ? <OfficialMedia media={game.media} className="dossier-cover-media" /> : <div className="dossier-cover-map" />}
      <div className="dossier-cover-label">
        <span>{game.releaseYear}</span>
        <strong>{game.title}</strong>
        <small>{game.city}</small>
      </div>
    </div>
    <div className="dossier-card-body">
      <div className="dossier-card-kicker">{game.universe} · história em {game.storyYear}</div>
      <h3>{game.title}</h3>
      <p>{game.summary}</p>
      <MetaGrid rows={[
        ["Protagonista", game.protagonist],
        ["Antagonistas", game.antagonists],
        ["Cidade", game.city],
        ["Importância", game.importance]
      ]} />
      <DossierChips items={game.tags} limit={6} />
      <button className="btn" onClick={() => onOpen({ type: "game", item: game })}>Abrir jogo</button>
    </div>
  </article>
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
        <DossierSectionHead eyebrow="Catálogo" title="Jogos da saga" accent="var(--evidence)" right={`${filtered.length} arquivos filtrados`} />
        <div className="dossier-filterbar">
          <label><span>Busca</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Nome, cidade, protagonista..." /></label>
          <label><span>Universo</span><select value={universe} onChange={(e) => setUniverse(e.target.value)}><option value="all">Todos</option>{universeData.map((u) => <option key={u.name} value={u.name}>{u.name}</option>)}</select></label>
          <label><span>Cidade</span><select value={city} onChange={(e) => setCity(e.target.value)}><option value="all">Todas</option>{cities.map((c) => <option key={c} value={c}>{c}</option>)}</select></label>
        </div>
        <div className="dossier-games-grid">
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
  const hay = normalizeText([mission.coverage, mission.tags, mission.highlights, mission.summary, mission.systems].join(" "));
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
    <article className="card dossier-mission-card">
      <Corners />
      <div className={`dossier-mission-media ${universeTone(mission.universe)} ${media ? "has-official" : ""}`}>
        {media ? <OfficialMedia media={media} className="dossier-mission-official" /> : <div className="dossier-cover-map" />}
        <div className="dossier-mission-badge"><DossierIcon type="database" /><span>{mission.totalLabel}</span></div>
      </div>
      <div className="dossier-card-body">
        <div className="dossier-card-kicker">{mission.universe} · missões em {mission.storyYear}</div>
        <h3>{mission.title}</h3>
        <p>{mission.summary}</p>
        <MetaGrid rows={[
          ["Cidade", mission.city],
          ["Cobertura", asList(mission.coverage).slice(0, 5)],
          ["Destaques", asList(mission.highlights).slice(0, 5)]
        ]} />
        <DossierChips items={mission.tags} limit={6} />
        <button className="btn" onClick={() => onOpen({ type: "mission", item: { ...mission, media } })}>Abrir missões</button>
      </div>
    </article>
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
        <DossierSectionHead eyebrow="Operações" title="Missões por jogo" accent="var(--money)" right={`${filtered.length} arquivos de missão`} />
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
        <div className="dossier-mission-grid">
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
    !vehiclePageCandidatesForItem(item, vehicle).some((candidate) => pageMedia.get(normalizeText(candidate)))
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
        vehiclePageCandidatesForItem(normalizedItem, vehicle).map((candidate) => pageMedia.get(normalizeText(candidate))).find(Boolean) ||
        contextualVehicleMedia(normalizedItem, vehicle);
      return { ...normalizedItem, media };
    })
  }));
};

const loadVehicleCategoryGroup = async (categoryTitle) => {
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
        media: vehicleMediaFromSource(title, page.title, page.thumbnail?.source)
      };
      items.set(vehicleItemKey(item), item);
    });
    cmcontinue = data?.continue?.gcmcontinue || "";
  } while (cmcontinue);
  return [{ label: "Lista completa", items: [...items.values()].sort((a, b) => vehicleItemName(a).localeCompare(vehicleItemName(b), "pt-BR")) }];
};

const loadVehicleGroups = async (vehicle) => {
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
    })).then((response) => response.json());
    groups = parseVehicleWikitext(data?.parse?.wikitext?.["*"] || "");
  }
  if (!groups.length && vehicle.fallbackGroups) groups = vehicle.fallbackGroups;
  groups = await hydrateVehicleGroupMedia(groups, vehicle);
  vehicleGroupCache.set(cacheKey, groups);
  return groups;
};

const vehicleGameFor = (vehicle) => gamesData.find((game) => game.id === vehicle.gameId) || null;

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
  return (tests[type] || []).some((needle) => hay.includes(needle));
};

const VehicleDossierCard = ({ vehicle, onOpen }) => {
  const game = vehicleGameFor(vehicle);
  const media = vehicle.media || game?.media;
  return (
    <article className="card dossier-vehicle-card">
      <Corners />
      <div className={`dossier-vehicle-media ${universeTone(vehicle.universe)} ${media ? "has-official" : ""}`}>
        {media ? <OfficialMedia media={media} className="dossier-vehicle-official" /> : <div className="dossier-cover-map" />}
        <div className="dossier-vehicle-badge"><DossierIcon type="car" /><span>{vehicle.totalLabel}</span></div>
      </div>
      <div className="dossier-card-body">
        <div className="dossier-card-kicker">{vehicle.universe} · frota em {vehicle.storyYear}</div>
        <h3>{vehicle.title}</h3>
        <p>{vehicle.summary}</p>
        <MetaGrid rows={[
          ["Cidade", vehicle.city],
          ["Cobertura", asList(vehicle.coverage).slice(0, 5)],
          ["Ícones", asList(vehicle.highlights).slice(0, 5)]
        ]} />
        <DossierChips items={vehicle.tags} limit={6} />
        <button className="btn" onClick={() => onOpen({ type: "vehicle", item: { ...vehicle, media } })}>Abrir frota</button>
      </div>
    </article>
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
        <DossierSectionHead eyebrow="Garagem criminal" title="Veículos por jogo" accent="var(--copper)" right={`${filtered.length} arquivos de frota`} />
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
        <div className="dossier-vehicle-grid">
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
    !weaponPageCandidatesForItem(item, weapon).some((candidate) => pageMedia.get(normalizeText(candidate)))
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
        weaponPageCandidatesForItem(normalizedItem, weapon).map((candidate) => pageMedia.get(normalizeText(candidate))).find(Boolean) ||
        contextualWeaponMedia(normalizedItem, weapon);
      return { ...normalizedItem, media };
    })
  }));
};

const loadWeaponCategoryGroup = async (categoryTitle) => {
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
        media: weaponMediaFromSource(title, page.title, page.thumbnail?.source)
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
    groups = await loadWeaponCategoryGroup(weapon.categoryTitle);
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
  groups = await hydrateWeaponGroupMedia(groups, weapon);
  weaponGroupCache.set(cacheKey, groups);
  return groups;
};

const weaponGameFor = (weapon) => gamesData.find((game) => game.id === weapon.gameId) || null;

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
  return (tests[type] || []).some((needle) => hay.includes(needle));
};

const WeaponDossierCard = ({ weapon, onOpen }) => {
  const game = weaponGameFor(weapon);
  const media = weapon.media || game?.media;
  return (
    <article className="card dossier-weapon-card">
      <Corners />
      <div className={`dossier-weapon-media ${universeTone(weapon.universe)} ${media ? "has-official" : ""}`}>
        {media ? <OfficialMedia media={media} className="dossier-weapon-official" /> : <div className="dossier-cover-map" />}
        <div className="dossier-weapon-badge"><DossierIcon type="weapon" /><span>{weapon.totalLabel}</span></div>
      </div>
      <div className="dossier-card-body">
        <div className="dossier-card-kicker">{weapon.universe} · arsenal em {weapon.storyYear}</div>
        <h3>{weapon.title}</h3>
        <p>{weapon.summary}</p>
        <MetaGrid rows={[
          ["Cidade", weapon.city],
          ["Cobertura", asList(weapon.coverage).slice(0, 5)],
          ["Destaques", asList(weapon.highlights).slice(0, 5)]
        ]} />
        <DossierChips items={weapon.tags} limit={6} />
        <button className="btn" onClick={() => onOpen({ type: "weapon", item: { ...weapon, media } })}>Abrir arsenal</button>
      </div>
    </article>
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
        <DossierSectionHead eyebrow="Arsenal criminal" title="Armas por jogo" accent="var(--siren)" right={`${filtered.length} arquivos de arsenal`} />
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
        <div className="dossier-weapon-grid">
          {filtered.map((weapon) => <WeaponDossierCard key={weapon.id} weapon={weapon} onOpen={onOpenDossier} />)}
        </div>
      </div>
    </section>
  );
};

const DevelopmentDossierSection = () => (
  <section id="development" className="dossier-section dossier-shell">
    <div className="wrap">
      <DossierSectionHead eyebrow="Bastidores" title="Por trás do desenvolvimento" accent="var(--money)" right="história real separada da lore" />
      <div className="dossier-dev-grid">
        {developmentData.map((item) => (
          <article key={item.id} className="card dossier-dev-card">
            <Corners />
            <div className="dossier-icon-box"><DossierIcon type="file" /></div>
            <div>
              <div className="dossier-card-kicker">{item.period}</div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <BulletList items={item.facts} />
              <details className="dossier-details">
                <summary>Notas de precisão</summary>
                {Array.isArray(item.uncertainty) ? <BulletList items={item.uncertainty} /> : <p>{item.uncertainty}</p>}
                <SourceLinks items={item.sources} />
              </details>
            </div>
          </article>
        ))}
      </div>
      <ConnectionsImpactSection compact />
    </div>
  </section>
);

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
        <DossierSectionHead eyebrow="Base de dados" title="Dossiê de personagens" accent="var(--neon)" right={`${filtered.length} fichas ativas`} />
        <div className="dossier-filterbar wide">
          <label><span>Busca</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Nome, jogo, facção, relação..." /></label>
          <label><span>Filtro</span><select value={filter} onChange={(e) => setFilter(e.target.value)}>{characterFilterOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
          <label><span>Universo</span><select value={universe} onChange={(e) => setUniverse(e.target.value)}><option value="all">Todos</option>{universeData.map((u) => <option key={u.name}>{u.name}</option>)}</select></label>
        </div>
        <div className="dossier-character-grid">
          {filtered.map((character) => (
            <article key={character.id} className="card dossier-character-card" onClick={() => onOpenDossier({ type: "character", item: character })}>
              <Corners />
              <div className={`dossier-mugshot ${tagTone(character.role)} ${character.media ? "has-official" : "has-fallback"}`}>
                {character.media ? (
                  <OfficialMedia media={character.media} className="dossier-mugshot-media" />
                ) : (
                  <div className="dossier-mugshot-fallback">
                    <DossierIcon type={character.tags.includes("governo") || character.tags.includes("polícia corrupta") ? "police" : "users"} />
                    <strong>{initialsOf(character.name)}</strong>
                    <small>{character.universe}</small>
                  </div>
                )}
                <span>{character.media?.relatedOnly ? "arquivo relacionado" : character.id}</span>
              </div>
              <div className="dossier-card-body">
                <DossierChips items={[character.role, character.importance]} limit={2} />
                <h3>{character.name}</h3>
                <p>{character.biography}</p>
                <MetaGrid rows={[
                  ["Jogos", character.games],
                  ["Cidade", character.city],
                  ["Lealdades", character.affiliations],
                  ["Conflitos", character.enemies]
                ]} />
                <DossierChips items={character.tags} limit={5} />
              </div>
            </article>
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
    cities: ["liberty-city", "vice-city", "san-andreas", "los-santos", "blaine-county", "north-yankton", "leonida"]
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
        <DossierSectionHead eyebrow="Mapa urbano" title="Cidades e estados" accent="var(--copper)" right="inspirações, distritos, facções e eventos" />
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
        <div className="dossier-city-grid">
          {filtered.map((city) => (
            <article key={`${city.selectedUniverseId || "base"}-${city.id}`} className="card dossier-city-card" onClick={() => onOpenDossier({ type: "city", item: city })}>
              <Corners />
              <div className={`dossier-city-skyline ${city.media ? "has-official" : ""}`}>
                {city.media ? (
                  <OfficialMedia media={city.media} className="dossier-city-media" />
                ) : (
                  <Skyline palette={{ sky: "#101018", a: "#15151f", b: "#1d2230", c2: "#11131a", win: city.id === "vice-city" || city.id === "leonida" ? "#ff3d8a" : "#f5c518" }} />
                )}
              </div>
              <div className="dossier-card-body">
                <div className="dossier-card-kicker">{city.selectedUniverseLabel || "Todos os universos"} / {city.realWorldInspiration}</div>
                <h3>{city.name}</h3>
                <p>{city.description}</p>
                <DossierChips items={city.themes} limit={5} />
              </div>
            </article>
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
        <DossierSectionHead eyebrow="Painel criminal" title="Gangues e organizações" accent="var(--siren)" right={`${filtered.length} entidades no banco`} />
        <div className="dossier-filterbar">
          <label><span>Busca</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Leone, FIB, Lost MC, negócios..." /></label>
          <label><span>Tipo</span><select value={category} onChange={(e) => setCategory(e.target.value)}><option value="all">Todos</option>{categories.map((c) => <option key={c}>{c}</option>)}</select></label>
        </div>
        <div className="dossier-faction-grid">
          {filtered.map((faction) => (
            <article key={faction.id} className="card dossier-faction-card">
              <Corners />
              <div className={`dossier-faction-visual ${faction.media ? "has-official" : ""}`}>
                {faction.media && <OfficialMedia media={faction.media} className="dossier-faction-media" />}
                <div className="dossier-faction-mark">{faction.name.split(/[ /]/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("")}</div>
              </div>
              <div className="dossier-card-kicker">{faction.category} · {faction.city}</div>
              <h3>{faction.name}</h3>
              <p>{faction.narrativeImportance}</p>
              <MetaGrid rows={[
                ["Líderes", faction.leaders],
                ["Aliados", faction.allies],
                ["Inimigos", faction.enemies],
                ["Negócios", faction.businesses]
              ]} />
              <DossierChips items={faction.tags} limit={4} />
              <button className="btn" onClick={() => onOpenDossier({ type: "faction", item: faction })}>Painel criminal</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const UniversesDossierSection = () => (
  <section id="universes" className="dossier-section dossier-shell">
    <div className="wrap">
      <DossierSectionHead eyebrow="Canon" title="Universos GTA" accent="var(--neon)" right="2D, 3D e HD não são a mesma continuidade" />
      <div className="dossier-universe-grid">
        {universeData.map((universe) => (
          <article key={universe.id} className={`card dossier-universe-card ${universe.tone}`}>
            <Corners />
            {universe.media && <OfficialMedia media={universe.media} className="dossier-universe-media" />}
            <div className="dossier-universe-top">
              <span>{universe.period}</span>
              <h3>{universe.name}</h3>
              <p>{universe.summary}</p>
            </div>
            <div className="dossier-card-body">
              <p>{universe.description}</p>
              <DossierChips items={universe.games} limit={10} />
              <BulletList items={universe.notes} />
            </div>
          </article>
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

const RockstarPeopleGrid = () => (
  <div className="dossier-rockstar-people">
    <DossierSectionHead
      eyebrow="Arquivo de pessoas"
      title="Criadores, produtores e desenvolvedores"
      accent="var(--neon)"
      right={`${rockstarPeopleData.length} perfis com fotos reais e fontes`}
    />
    <div className="dossier-people-grid">
      {rockstarPeopleData.map((person) => (
        <article id={`people-${person.id}`} key={person.id} className="card dossier-person-card">
          <Corners />
          <div className={`dossier-person-photo ${person.media ? "has-official" : ""}`}>
            {person.media ? (
              <OfficialMedia media={person.media} className="dossier-person-media" />
            ) : (
              <div className="dossier-person-fallback">
                <strong>{initialsOf(person.name)}</strong>
                <small>foto nao confirmada</small>
              </div>
            )}
            <span>{person.era}</span>
          </div>
          <div className="dossier-card-body">
            <div className="dossier-card-kicker">{person.role}</div>
            <h3>{person.name}</h3>
            <p>{person.summary}</p>
            <div className="dossier-person-meta">
              <span><strong>Base</strong>{person.city}</span>
              <span><strong>Jogos</strong>{asList(person.games).slice(0, 4).join(" / ")}</span>
            </div>
            <details className="dossier-details">
              <summary>Contribuicoes no dossie</summary>
              <BulletList items={person.contributions} />
            </details>
            <DossierChips items={person.tags} limit={6} />
            <SourceLinks items={person.sources} />
          </div>
        </article>
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

const RockstarDossierSection = () => (
  <section id="rockstar" className="dossier-section dossier-shell alt">
    <div className="wrap">
      <DossierSectionHead eyebrow="História real" title="Rockstar Games e Rockstar North" accent="var(--evidence)" right="da DMA Design à era HD" />
      <div className="dossier-rockstar-layout">
        <div className="dossier-rockstar-timeline">
          {rockstarHistoryData.map((item) => (
            <article key={`${item.year}-${item.title}`} className="card dossier-rockstar-row">
              <Corners />
              <div className="dossier-rockstar-year">{item.year}</div>
              {item.media && <OfficialMedia media={item.media} className="dossier-rockstar-media" />}
              <div>
                <div className="dossier-card-kicker">{item.type}</div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <details className="dossier-details">
                  <summary>Contexto</summary>
                  {asList(item.details).map((paragraph, index) => <p key={`${item.title}-context-${index}`}>{paragraph}</p>)}
                  <SourceLinks items={item.sources} />
                </details>
              </div>
            </article>
          ))}
        </div>
        <aside className="dossier-founder-panel">
          <div className="dossier-card-kicker">Fundadores da Rockstar Games</div>
          <h3>Sam Houser, Dan Houser, Terry Donovan, Jamie King e Gary Foreman</h3>
          <OfficialMedia media={rockstarHistoryData.find((item) => item.title.includes("Rockstar North"))?.media} className="dossier-founder-media" />
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
      <RockstarPeopleGrid />
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
        <DossierSectionHead eyebrow="Plataforma viva" title="GTA Online" accent="var(--money)" right={`${onlineDlcData.length} DLCs catalogadas`} />
        <div className="dossier-online-intro">
          <div>
            <h3>Não é apenas multiplayer: é uma carreira criminal contínua.</h3>
            <p>
              GTA Online transforma o jogador em operador de uma economia criminosa. O progresso atravessa apartamentos, heists, CEOs, motoclubes, bunkers, nightclubs, cassino, Cayo Perico, agências, guerras de drogas, mercenários e frentes de lavagem.
            </p>
          </div>
          <div className="dossier-online-side">
            <OfficialMedia media={onlineHero} className="dossier-online-hero-media" />
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
        <div className="dossier-online-dlc-grid">
          {filteredDlc.length ? filteredDlc.map((item) => (
            <article
              key={item.id}
              className="card dossier-online-dlc-card"
              role="button"
              tabIndex={0}
              onClick={() => openDlc(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openDlc(item);
                }
              }}
            >
              <Corners />
              {item.media && <OfficialMedia media={item.media} className="dossier-online-update-media" />}
              <div className="dossier-card-kicker">{item.releaseDate} / {item.era}</div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <MetaGrid rows={[
                ["Tipo", item.type],
                ["Sistemas", asList(item.systems).slice(0, 3)],
                ["Personagens", asList(item.characters).slice(0, 3)]
              ]} />
              <div className="dossier-online-dlc-brought">
                {asList(item.brought).slice(0, 4).map((entry) => <span key={entry}>{entry}</span>)}
              </div>
              <DossierChips items={item.tags} limit={6} />
              <button
                className="btn"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  openDlc(item);
                }}
              >
                Abrir dossie
              </button>
            </article>
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
        <div className="dossier-online-timeline">
          {onlineTimelineData.map((item) => (
            <article key={`${item.year}-${item.title}`} className="card">
              <Corners />
              {item.media && <OfficialMedia media={item.media} className="dossier-online-update-media" />}
              <span>{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.theme}</p>
            </article>
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
        <DossierSectionHead eyebrow="Referência" title="Glossário GTA" accent="var(--copper)" right={`${filtered.length} termos`} />
        <div className="dossier-filterbar single">
          <label><span>Busca</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Canon, FIB, heist, Leonida..." /></label>
        </div>
        <div className="dossier-glossary-grid">
          {filtered.map((item) => (
            <article
              key={item.term}
              className="card dossier-glossary-item"
              role="button"
              tabIndex={0}
              onClick={() => onOpenDossier?.({ type: "glossary", item })}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpenDossier?.({ type: "glossary", item });
                }
              }}
            >
              <Corners />
              {item.media && <OfficialMedia media={item.media} className="dossier-glossary-media" />}
              <div className="dossier-card-kicker">{item.category || "Termo do dossie"}</div>
              <h3>{item.term}</h3>
              <p>{item.definition}</p>
              <DossierChips items={item.tags || item.relatedTerms} limit={4} />
              <button className="btn" type="button" onClick={(e) => { e.stopPropagation(); onOpenDossier?.({ type: "glossary", item }); }}>Abrir termo</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConnectionsImpactSection = ({ compact = false }) => (
  <div className={compact ? "dossier-extra-block compact" : "dossier-section dossier-shell dossier-extra-block"}>
    <div className={compact ? "" : "wrap"}>
      {!compact && <DossierSectionHead eyebrow="Leitura editorial" title="Conexões, ordem de jogo e impacto" accent="var(--evidence)" right="contexto cultural sem misturar com canon" />}
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
          <h2>Grand Theft Auto Dossiê</h2>
          <p>Arquivo editorial de fã, em português do Brasil, com imagens promocionais oficiais creditadas e conteúdo separado entre lore, desenvolvimento real e impacto cultural.</p>
          {media?.notice && <p className="dossier-media-notice">{media.notice}</p>}
        </div>
        <div>
          <h3>Fontes-base consultadas</h3>
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
          <div className="dossier-vehicle-name-grid">
            {group.items.map((vehicle) => {
              const name = vehicleItemName(vehicle);
              const media = vehicleItemMedia(vehicle);
              const source = media?.source || vehicleWikiPageUrl(vehicleItemPageTitle(vehicle));
              return (
                <a className={`dossier-vehicle-model-card ${media ? "has-media" : ""}`} href={source} target="_blank" rel="noreferrer" key={`${group.label}-${vehicleItemKey(vehicle)}`}>
                  <span className="dossier-vehicle-model-thumb">
                    {media?.src ? (
                      <img src={media.src} alt={media.alt || `Imagem de ${name}`} loading="lazy" referrerPolicy="no-referrer" />
                    ) : (
                      <span className="dossier-vehicle-model-placeholder"><DossierIcon type="car" /> imagem pendente</span>
                    )}
                  </span>
                  <strong>{name}</strong>
                </a>
              );
            })}
          </div>
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
          <div className="dossier-weapon-name-grid">
            {group.items.map((weapon) => {
              const name = weaponItemName(weapon);
              const media = weaponItemMedia(weapon);
              const source = media?.source || weaponWikiPageUrl(weaponItemPageTitle(weapon));
              return (
                <a className={`dossier-weapon-model-card ${media ? "has-media" : ""}`} href={source} target="_blank" rel="noreferrer" key={`${group.label}-${weaponItemKey(weapon)}`}>
                  <span className="dossier-weapon-model-thumb">
                    {media?.src ? (
                      <img src={media.src} alt={media.alt || `Imagem de ${name}`} loading="lazy" referrerPolicy="no-referrer" />
                    ) : (
                      <span className="dossier-weapon-model-placeholder"><DossierIcon type="weapon" /> imagem pendente</span>
                    )}
                  </span>
                  <strong>{name}</strong>
                </a>
              );
            })}
          </div>
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

const DossierRecordModal = ({ record, onClose }) => {
  if (!record?.item) return null;
  const item = record.item;
  const title = item.title || item.name || item.term;
  const subtitle = record.type === "game" ? `${item.universe} · ${item.city}` :
    record.type === "character" ? `${item.role} · ${item.city}` :
    record.type === "city" ? `${item.realWorldInspiration}` :
    record.type === "faction" ? `${item.category} · ${item.city}` :
    record.type === "onlineDlc" ? `${item.releaseDate} / ${item.type}` :
    record.type === "mission" ? `${item.universe} · ${item.totalLabel}` :
    record.type === "vehicle" ? `${item.universe} · ${item.totalLabel}` :
    record.type === "weapon" ? `${item.universe} · ${item.totalLabel}` :
    record.type === "glossary" ? `${item.category || "Glossario"} / termo de referencia` :
    item.universe || "Arquivo";
  const recordLabel = record.type === "onlineDlc" ? "ONLINE DLC" :
    record.type === "mission" ? "MISSÕES" :
    record.type === "vehicle" ? "FROTA" :
    record.type === "weapon" ? "ARSENAL" :
    record.type === "glossary" ? "GLOSSARIO" :
    record.type.toUpperCase();

  return (
    <div className="dossier-modal-back dossier-shell" onClick={onClose}>
      <article className="dossier-modal" onClick={(e) => e.stopPropagation()}>
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
            {record.type === "city" ? (
              <CityImageCarousel city={item} className="modal" />
            ) : (
              <div className={`dossier-cover-art ${universeTone(item.universe || item.category)} ${item.media ? "has-official" : ""}`}>
                {item.media ? <OfficialMedia media={item.media} className="dossier-cover-media" /> : <div className="dossier-cover-map" />}
                <div className="dossier-cover-label">
                  <strong>{recordLabel}</strong>
                  <small>{item.id || item.year || item.term || "arquivo"}</small>
                </div>
              </div>
            )}
            <DossierChips items={item.tags || [item.universe, item.category, item.certainty].filter(Boolean)} limit={10} />
          </aside>

          <section className="dossier-modal-content">
            {record.type === "game" && (
              <>
                <MetaGrid rows={[
                  ["Lançamento", item.releaseYear],
                  ["Ano da história", item.storyYear],
                  ["Protagonista", item.protagonist],
                  ["Antagonistas", item.antagonists],
                  ["Personagens secundários", item.supportingCharacters],
                  ["Facções", item.factions]
                ]} />
                <ModalField label="Resumo">{item.summary}</ModalField>
                <ModalField label="História completa">{item.fullStory}</ModalField>
                <ModalField label="Desenvolvimento">{item.developmentHistory}</ModalField>
                <ModalField label="Importância">{item.importance}</ModalField>
                <ModalField label="Temas"><DossierChips items={item.themes} limit={12} /></ModalField>
              </>
            )}
            {record.type === "mission" && (
              <MissionDossierModalContent item={item} />
            )}
            {record.type === "vehicle" && (
              <VehicleDossierModalContent item={item} />
            )}
            {record.type === "weapon" && (
              <WeaponDossierModalContent item={item} />
            )}
            {record.type === "character" && (
              <>
                <MetaGrid rows={[
                  ["Jogos", item.games],
                  ["Universo", item.universe],
                  ["Cidade", item.city],
                  ["Papel", item.role],
                  ["Lealdades", item.affiliations],
                  ["Conflitos", item.enemies],
                  ["Destino", item.fate],
                  ["Importância", item.importance]
                ]} />
                <ModalField label="Biografia">{item.biography}</ModalField>
                <ModalField label="Arco narrativo">{item.storyArc}</ModalField>
                <ModalField label="Relações importantes"><BulletList items={item.relationships} /></ModalField>
              </>
            )}
            {record.type === "city" && (
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
                <ModalField label="Temas"><DossierChips items={item.themes} limit={12} /></ModalField>
              </>
            )}
            {record.type === "faction" && (
              <>
                <MetaGrid rows={[
                  ["Jogo", item.game],
                  ["Cidade", item.city],
                  ["Líderes", item.leaders],
                  ["Aliados", item.allies],
                  ["Inimigos", item.enemies],
                  ["Negócios criminosos", item.businesses],
                  ["Status/destino", item.status]
                ]} />
                <ModalField label="Importância narrativa">{item.narrativeImportance}</ModalField>
              </>
            )}
            {record.type === "timeline" && (
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
              </>
            )}
            {record.type === "onlineDlc" && (
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
                <ModalField label="Tags"><DossierChips items={item.tags} limit={12} /></ModalField>
                <ModalField label="Fontes"><SourceLinks items={item.sources} /></ModalField>
              </>
            )}
            {record.type === "glossary" && (
              <GlossaryTermModalContent item={item} />
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
  DossierRecordModal
});
