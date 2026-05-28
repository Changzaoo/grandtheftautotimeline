/* ============ GTA DOSSIER SECTIONS ============ */

const gtaDossierNamespace = window.Dossier || {};

const dossierNav = () => window.dossierNavData || window.NAV || [
  { id: "overview", label: "Visão Geral", k: "01" },
  { id: "timeline", label: "Timeline Cronológica", k: "02" },
  { id: "games", label: "Jogos", k: "03" },
  { id: "development", label: "Desenvolvimento", k: "04" },
  { id: "characters", label: "Personagens", k: "05" },
  { id: "cities", label: "Cidades", k: "06" },
  { id: "gangs", label: "Gangues e Organizações", k: "07" },
  { id: "universes", label: "Universos GTA", k: "08" },
  { id: "rockstar", label: "Rockstar Games", k: "09" },
  { id: "gtaonline", label: "GTA Online", k: "10" },
  { id: "gta6", label: "GTA VI", k: "11" },
  { id: "glossary", label: "Glossário", k: "12" }
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
  const [time, setTime] = React.useState("");
  React.useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

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
        <div className="dossier-live"><i />AO VIVO {time}</div>
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

const DossierRecordModal = ({ record, onClose }) => {
  if (!record?.item) return null;
  const item = record.item;
  const title = item.title || item.name || item.term;
  const subtitle = record.type === "game" ? `${item.universe} · ${item.city}` :
    record.type === "character" ? `${item.role} · ${item.city}` :
    record.type === "city" ? `${item.realWorldInspiration}` :
    record.type === "faction" ? `${item.category} · ${item.city}` :
    record.type === "onlineDlc" ? `${item.releaseDate} / ${item.type}` :
    record.type === "glossary" ? `${item.category || "Glossario"} / termo de referencia` :
    item.universe || "Arquivo";
  const recordLabel = record.type === "onlineDlc" ? "ONLINE DLC" :
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
