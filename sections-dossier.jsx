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
  return (
    <figure className={`official-media ${className}`}>
      <img src={media.src} alt={media.alt || caption} loading="lazy" referrerPolicy="no-referrer" />
      <figcaption>
        {media.source ? <a href={media.source} target="_blank" rel="noreferrer">{caption}</a> : caption}
      </figcaption>
    </figure>
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

const titleKey = (value) => normalizeText(value)
  .replace(/grand theft auto/g, "gta")
  .replace(/[^a-z0-9]+/g, " ")
  .trim();

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
                <p>{item.uncertainty}</p>
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
              <div className={`dossier-mugshot ${tagTone(character.role)} ${character.media ? "has-official" : ""}`}>
                {character.media ? (
                  <OfficialMedia media={character.media} className="dossier-mugshot-media" />
                ) : (
                  <DossierIcon type={character.tags.includes("governo") || character.tags.includes("polícia corrupta") ? "police" : "users"} />
                )}
                <span>{character.id}</span>
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

const cityHotspots = [
  ["liberty-city", 19, 24],
  ["vice-city", 68, 62],
  ["san-andreas", 14, 66],
  ["los-santos", 28, 72],
  ["san-fierro", 10, 51],
  ["las-venturas", 35, 48],
  ["blaine-county", 33, 36],
  ["north-yankton", 47, 15],
  ["anywhere-city", 78, 28],
  ["london", 86, 13],
  ["leonida", 72, 75]
];

const CityMapPanel = ({ selectedId, onSelect }) => (
  <div className="dossier-city-map">
    <div className="dossier-map-gridlines" />
    {cityHotspots.map(([id, x, y]) => {
      const city = citiesData.find((c) => c.id === id);
      return (
        <button
          key={id}
          className={selectedId === id ? "active" : ""}
          style={{ left: `${x}%`, top: `${y}%` }}
          onClick={() => onSelect(city)}
          title={city?.name}
        >
          <span />
          <strong>{city?.name}</strong>
        </button>
      );
    })}
  </div>
);

const CitiesDossierSection = ({ onOpenDossier }) => {
  const [selected, setSelected] = React.useState(citiesData.find((c) => c.id === "vice-city"));
  const [query, setQuery] = React.useState("");
  const filtered = citiesData.filter((city) => searchRecord(city, query));

  return (
    <section id="cities" className="dossier-section dossier-shell">
      <div className="wrap">
        <DossierSectionHead eyebrow="Mapa urbano" title="Cidades e estados" accent="var(--copper)" right="inspirações, distritos, facções e eventos" />
        <div className="dossier-city-layout">
          <CityMapPanel selectedId={selected?.id} onSelect={setSelected} />
          <aside className="card dossier-city-selected">
            <Corners />
            <div className="dossier-card-kicker">Hotspot ativo</div>
            <h3>{selected?.name}</h3>
            <OfficialMedia media={selected?.media} className="dossier-city-official" />
            <p>{selected?.description}</p>
            <MetaGrid rows={[
              ["Inspiração", selected?.realWorldInspiration],
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
            <article key={city.id} className="card dossier-city-card" onClick={() => onOpenDossier({ type: "city", item: city })}>
              <Corners />
              <div className={`dossier-city-skyline ${city.media ? "has-official" : ""}`}>
                {city.media ? (
                  <OfficialMedia media={city.media} className="dossier-city-media" />
                ) : (
                  <Skyline palette={{ sky: "#101018", a: "#15151f", b: "#1d2230", c2: "#11131a", win: city.id === "vice-city" || city.id === "leonida" ? "#ff3d8a" : "#f5c518" }} />
                )}
              </div>
              <div className="dossier-card-body">
                <div className="dossier-card-kicker">{city.realWorldInspiration}</div>
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
              <div className="dossier-faction-mark">{faction.name.split(/[ /]/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("")}</div>
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
              <div>
                <div className="dossier-card-kicker">{item.type}</div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <details className="dossier-details">
                  <summary>Contexto</summary>
                  <p>{item.details}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
        <aside className="dossier-founder-panel">
          <div className="dossier-card-kicker">Fundadores da Rockstar Games</div>
          <h3>Sam Houser, Dan Houser, Terry Donovan, Jamie King e Gary Foreman</h3>
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
    </div>
  </section>
);

const GTAOnlineDossierSection = () => (
  <section id="gtaonline" className="dossier-section dossier-shell">
    <div className="wrap">
      <DossierSectionHead eyebrow="Plataforma viva" title="GTA Online" accent="var(--money)" right="Los Santos depois de 2013" />
      <div className="dossier-online-intro">
        <div>
          <h3>Não é apenas multiplayer: é uma carreira criminal contínua.</h3>
          <p>
            GTA Online transforma o jogador em operador de uma economia criminosa. O progresso atravessa apartamentos, heists, CEOs, motoclubes, bunkers, nightclubs, cassino, Cayo Perico, agências, guerras de drogas, mercenários e frentes de lavagem.
          </p>
        </div>
        <div className="dossier-online-metrics">
          <span><strong>2013</strong> estreia</span>
          <span><strong>10+ anos</strong> atualizações</span>
          <span><strong>Los Santos</strong> plataforma</span>
        </div>
      </div>
      <div className="dossier-online-timeline">
        {onlineTimelineData.map((item) => (
          <article key={`${item.year}-${item.title}`} className="card">
            <Corners />
            <span>{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.theme}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

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

const GlossaryDossierSection = () => {
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
            <article key={item.term} className="card dossier-glossary-item">
              <Corners />
              <h3>{item.term}</h3>
              <p>{item.definition}</p>
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

const DossierRecordModal = ({ record, onClose }) => {
  if (!record?.item) return null;
  const item = record.item;
  const title = item.title || item.name;
  const subtitle = record.type === "game" ? `${item.universe} · ${item.city}` :
    record.type === "character" ? `${item.role} · ${item.city}` :
    record.type === "city" ? `${item.realWorldInspiration}` :
    record.type === "faction" ? `${item.category} · ${item.city}` :
    item.universe || "Arquivo";

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
            <div className={`dossier-cover-art ${universeTone(item.universe || item.category)} ${item.media ? "has-official" : ""}`}>
              {item.media ? <OfficialMedia media={item.media} className="dossier-cover-media" /> : <div className="dossier-cover-map" />}
              <div className="dossier-cover-label">
                <strong>{record.type.toUpperCase()}</strong>
                <small>{item.id || item.year || "arquivo"}</small>
              </div>
            </div>
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
