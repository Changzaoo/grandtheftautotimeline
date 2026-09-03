/* ============ GTA VI EXPERIENCE SECTIONS ============
 * Componentes no estilo do site oficial de GTA VI:
 *   VIHero (id="overview")            -> substitui DossierHero no app.jsx
 *   VICharactersSection (id="vi-characters")
 *   VIPlacesSection (id="vi-places")
 *   VIInfoSection (id="gta6")         -> substitui GTA6DossierSection no app.jsx
 * Depende de: window.VI_DATA (data-vi.jsx, deve vir ANTES no bundle),
 * componentes globais Corners / DossierSectionHead / DossierIcon / MetaGrid /
 * BulletList (components.jsx + sections-dossier.jsx) e das classes .vi-* do
 * tema novo (vi-sky, vi-chrome-text, vi-serif, vi-quote, vi-polaroid,
 * vi-gallery, vi-ticker, vi-btn, vi-countdown, vi-badge, vi-palms, vi-vhs,
 * vi-char-panel, vi-grain).
 */

/* Helpers i18n seguros (guardados em window para evitar redeclaração de
 * const no escopo único do bundle). */
window.__T = window.__T || ((k, f) => (window.__t ? window.__t(k, f) : f));
window.__TT = window.__TT || ((p, id, field, fb) => (window.__tt ? window.__tt(p, id, field, fb) : fb));

const viData = () => window.VI_DATA || {};
const viClockPad = (n) => String(n).padStart(2, "0");

const viInitialsOf = (value) => String(value || "")
  .replace(/["'’]/g, "")
  .split(/\s+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((part) => part[0])
  .join("")
  .toUpperCase();

/* ---- Countdown ao vivo (dias:horas:min:seg) ----
 * Alvo fixado em meia-noite no fuso da Costa Leste (Leonida), para não
 * depender do fuso do visitante: new Date("2026-11-19T00:00:00-05:00"). */
const useVICountdown = (targetIso) => {
  const target = React.useMemo(
    () => new Date(targetIso || "2026-11-19T00:00:00-05:00").getTime(),
    [targetIso]
  );
  const [left, setLeft] = React.useState(() => Math.max(0, target - Date.now()));
  React.useEffect(() => {
    setLeft(Math.max(0, target - Date.now()));
    const timer = setInterval(() => setLeft(Math.max(0, target - Date.now())), 1000);
    return () => clearInterval(timer);
  }, [target]);
  const total = Math.floor(left / 1000);
  return {
    done: left <= 0,
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60
  };
};

const VICountdown = ({ compact = false }) => {
  const release = viData().release || {};
  const clock = useVICountdown(release.countdownTarget);
  if (clock.done) {
    return (
      <div className={`vi-countdown vi-countdown--done${compact ? " vi-countdown--compact" : ""}`}>
        <strong>{__T("vi.count.done", "GTA VI JÁ ESTÁ ENTRE NÓS")}</strong>
      </div>
    );
  }
  const units = [
    [String(clock.days), __T("vi.count.days", "dias")],
    [viClockPad(clock.hours), __T("vi.count.hours", "horas")],
    [viClockPad(clock.minutes), __T("vi.count.min", "min")],
    [viClockPad(clock.seconds), __T("vi.count.sec", "seg")]
  ];
  return (
    <div
      className={`vi-countdown${compact ? " vi-countdown--compact" : ""}`}
      role="timer"
      aria-label={__T("vi.count.aria", "Contagem regressiva para o lançamento de GTA VI em 19 de novembro de 2026")}
    >
      {units.map(([value, label], index) => (
        <React.Fragment key={label}>
          {index > 0 && <span className="vi-countdown-sep" aria-hidden="true">:</span>}
          <span className="vi-countdown-cell">
            <strong>{value}</strong>
            <small>{label}</small>
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

/* ---- Palmeiras em SVG (arte própria, sem imagens externas) ---- */
const VIPalmSil = ({ x = 0, s = 1, flip = false, opacity = 1 }) => (
  <g transform={`translate(${x} 250) scale(${flip ? -s : s} ${s})`} opacity={opacity}>
    <path d="M-4 0 C 2 -52, 12 -104, 30 -148 L 40 -144 C 20 -100, 12 -50, 12 0 Z" />
    <g transform="translate(36 -148)">
      <path d="M0 0 C -36 -14, -74 -12, -100 6 C -70 -22, -30 -30, 2 -8 Z" />
      <path d="M0 0 C -18 -34, -48 -52, -82 -52 C -44 -64, -12 -44, 4 -10 Z" />
      <path d="M0 0 C 8 -38, 34 -62, 68 -68 C 38 -46, 20 -20, 8 4 Z" />
      <path d="M0 0 C 34 -18, 70 -18, 96 -2 C 64 -30, 28 -32, -2 -10 Z" />
      <path d="M0 0 C 36 6, 64 24, 78 50 C 48 28, 18 16, -4 12 Z" />
      <path d="M0 0 C -32 8, -58 28, -70 54 C -44 30, -16 16, 6 12 Z" />
      <circle cx="2" cy="2" r="7" />
      <circle cx="14" cy="9" r="5" />
      <circle cx="-8" cy="10" r="5" />
    </g>
  </g>
);

const VIPalmsArt = () => (
  <svg
    className="vi-palms"
    viewBox="0 0 1200 250"
    preserveAspectRatio="xMidYMax slice"
    aria-hidden="true"
    focusable="false"
  >
    <g fill="rgba(8, 6, 18, 0.94)">
      <rect x="0" y="242" width="1200" height="8" />
      <VIPalmSil x={92} s={1.05} />
      <VIPalmSil x={210} s={0.66} flip opacity={0.82} />
      <VIPalmSil x={1020} s={1.18} flip />
      <VIPalmSil x={1130} s={0.7} opacity={0.85} />
      <VIPalmSil x={620} s={0.42} opacity={0.55} />
    </g>
  </svg>
);

/* ============ 1. HERÓI (id="overview") ============ */
const VIHero = () => {
  const data = viData();
  const release = data.release || {};
  const showcase = (data.trailers || []).find((t) => t.id === "vi-extended-look");
  const showcaseUrl = (showcase && showcase.url) || "https://www.youtube.com/watch?v=tJbzMqJGH4k";
  const trailer2 = (data.trailers || []).find((t) => t.id === "vi-trailer-2");
  const trailer2Url = (trailer2 && trailer2.url) || "https://www.youtube.com/watch?v=VQRLujxTm3c";

  /* Atalhos preservados do DossierHero original + novas seções VI */
  const quick = [
    [__T("nav.timeline", "Timeline"), "timeline", "map"],
    [__T("nav.games", "Jogos"), "games", "file"],
    [__T("nav.missions", "Missões"), "missions", "database"],
    [__T("nav.vehicles", "Veículos"), "vehicles", "car"],
    [__T("nav.weapons", "Armas"), "weapons", "weapon"],
    [__T("nav.characters", "Personagens"), "characters", "users"],
    [__T("nav.cities", "Cidades"), "cities", "city"],
    [__T("nav.gangs", "Organizações"), "gangs", "database"],
    [__T("nav.rockstar", "Rockstar"), "rockstar", "star"],
    [__T("nav.development", "Desenvolvimento"), "development", "file"],
    [__T("nav.universes", "Universos"), "universes", "map"],
    [__T("nav.vi-characters", "Personagens VI"), "vi-characters", "users"],
    [__T("nav.vi-places", "Leonida"), "vi-places", "map"],
    [__T("nav.gta6", "GTA VI"), "gta6", "star"],
    [__T("nav.vi-mechanics", "Mecânicas VI"), "vi-mechanics", "weapon"],
    [__T("nav.vi-catalog", "Catálogo VI"), "vi-catalog", "database"],
    [__T("nav.eastereggs", "Easter Eggs"), "eastereggs", "star"],
    [__T("nav.mysteries", "Mistérios"), "mysteries", "file"]
  ];

  const tickerCities = [
    "Liberty City", "Vice City", "San Andreas", "Anywhere City",
    "Londres 1969", "Los Santos", "Las Venturas", "San Fierro",
    "Carcer City", "North Yankton", "Leonida"
  ];
  const tickerLoop = [...tickerCities, ...tickerCities];

  return (
    <section id="overview" className="vi-hero dossier-shell">
      <div className="vi-sky vi-sky--dawn" aria-hidden="true">
        <span className="vi-sky-sun" />
        <VIPalmsArt />
        <span className="vi-grain" />
      </div>

      <div className="wrap vi-hero-inner">
        <div className="vi-badge vi-hero-eyebrow">
          {__T("vi.hero.eyebrow", "URBAN UNIVERSE · DOSSIÊ GTA · 1997–2026")}
        </div>

        <h1 className="vi-chrome-text vi-hero-title">
          {__T("hero.title", "GRAND THEFT AUTO")}
        </h1>
        <p className="vi-serif vi-hero-subtitle">
          {__T("hero.subtitle", "O Arquivo Completo da Saga")}
        </p>

        <div className="vi-hero-seal">
          <span className="vi-badge vi-badge--vi">
            {__T("vi.hero.seal", "GTA VI — 19.11.2026")}
          </span>
          <VICountdown />
          <span className="vi-hero-release-note">
            {__T("vi.hero.release-note2", "PlayStation 5 · Xbox Series X|S · pré-venda aberta · pré-load em 12.11.2026")}
          </span>
        </div>

        <div className="vi-hero-actions">
          <a className="vi-btn vi-btn--primary" href={showcaseUrl} target="_blank" rel="noreferrer">
            {__T("vi.hero.watch-extended", "Assistir ao Extended Look (26 min)")}
          </a>
          <a className="vi-btn vi-btn--ghost" href={trailer2Url} target="_blank" rel="noreferrer">
            {__T("vi.hero.watch-trailer", "Assistir Trailer 2")}
          </a>
          <a className="vi-btn vi-btn--ghost" href="#vi-mechanics">
            {__T("vi.hero.mechanics", "Mecânicas confirmadas")}
          </a>
        </div>

        <nav className="vi-hero-quick dossier-quick-tabs" aria-label={__T("vi.hero.quick-aria", "Atalhos do arquivo")}>
          {quick.map(([label, id, icon]) => (
            <a key={id} href={`#${id}`}>
              <DossierIcon type={icon} />
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="vi-ticker" aria-hidden="true">
        <div className="vi-ticker-track">
          {tickerLoop.map((city, index) => (
            <span className="vi-ticker-item" key={`${city}-${index}`}>
              {city}<i className="vi-ticker-sep">✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ 2. PERSONAGENS (id="vi-characters") ============ */
const VICharPanel = ({ character, index }) => {
  const flip = index % 2 === 1;
  const palette = character.palette || { a: "#ff3d8a", b: "#3c1361" };
  return (
    <article
      className={`card vi-char-panel${flip ? " vi-char-panel--flip" : ""}`}
      style={{ "--vi-a": palette.a, "--vi-b": palette.b }}
    >
      <Corners />
      <div
        className="vi-char-art vi-vhs"
        aria-hidden="true"
        style={{
          background: `linear-gradient(160deg, ${palette.a} 0%, ${palette.b} 72%, #0a0712 100%)`
        }}
      >
        <span className="vi-char-art-ghost vi-serif">{character.name.split(" ")[0]}</span>
        <span className="vi-char-initials vi-serif">{viInitialsOf(character.name)}</span>
        <svg className="vi-char-rings" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
          <circle cx="100" cy="100" r="78" fill="none" stroke="rgba(255,255,255,.28)" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="1" />
        </svg>
        <span className="vi-grain" />
      </div>
      <div className="vi-char-body">
        <span className="vi-badge vi-char-role">{__TT("vi", character.id, "role", character.role)}</span>
        <h3 className="vi-serif vi-char-name">{character.name}</h3>
        <p className="vi-quote vi-char-tagline">{__TT("vi", character.id, "tagline", character.tagline)}</p>
        <p className="vi-char-desc">{__TT("vi", character.id, "desc", character.desc)}</p>
        <blockquote className="vi-char-quote">
          <p>“{__TT("vi", character.id, "quote", character.quote)}”</p>
          <cite>
            {__TT("vi", character.id, "quoteSource", character.quoteSource || "Site oficial")}
            {" · "}
            {__T("vi.chars.quote-note", "tradução pt-BR")}
          </cite>
        </blockquote>
      </div>
    </article>
  );
};

const VICharactersSection = () => {
  const characters = viData().characters || [];
  return (
    <section id="vi-characters" className="dossier-section dossier-shell vi-section vi-characters">
      <div className="wrap">
        <DossierSectionHead
          eyebrow={__T("vi.chars.eyebrow", "Somente em Leonida")}
          title={__T("vi.chars.title", "Os rostos de GTA VI")}
          accent="var(--neon, #ff3d8a)"
          right={__T("vi.chars.right", "os oito grupos apresentados no site oficial da Rockstar")}
        />
        <div className="vi-char-list">
          {characters.map((character, index) => (
            <VICharPanel key={character.id} character={character} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ 3. LUGARES (id="vi-places") ============ */
const VIPolaroid = ({ place, index }) => {
  const grad = place.grad || ["#ff9a3d", "#ff3d8a", "#5b2a86"];
  const rotation = `${(index % 2 === 0 ? -1 : 1) * (1 + (index % 3) * 0.6)}deg`;
  return (
    <figure className="vi-polaroid" role="listitem" style={{ "--vi-rot": rotation }}>
      <div
        className="vi-polaroid-photo vi-vhs"
        aria-hidden="true"
        style={{ background: `linear-gradient(168deg, ${grad[0]} 0%, ${grad[1]} 55%, ${grad[2]} 100%)` }}
      >
        <span className="vi-polaroid-horizon" />
        <span className="vi-polaroid-mark vi-chrome-text">{place.name}</span>
        <span className="vi-grain" />
      </div>
      <figcaption className="vi-polaroid-caption">
        <strong className="vi-serif">{place.name}</strong>
        <em className="vi-quote">{__TT("vi", place.id, "tagline", place.tagline)}</em>
        <p>{__TT("vi", place.id, "desc", place.desc)}</p>
        <span className="vi-badge vi-polaroid-vibe">{__TT("vi", place.id, "vibe", place.vibe)}</span>
      </figcaption>
    </figure>
  );
};

const VIPlacesSection = () => {
  const places = viData().places || {};
  const intro = places.intro;
  const list = places.list || [];
  return (
    <section id="vi-places" className="dossier-section dossier-shell vi-section vi-places">
      <div className="wrap">
        <DossierSectionHead
          eyebrow={__T("vi.places.eyebrow", "O estado de Leonida")}
          title={__T("vi.places.title", "Cartões-postais de Leonida")}
          accent="var(--money, #39c6a5)"
          right={__T("vi.places.right", "seis regiões confirmadas pelo site oficial")}
        />
        {intro && (
          <div className="card vi-places-intro">
            <Corners />
            <div>
              <h3 className="vi-serif">{intro.name}</h3>
              <p className="vi-quote">{__TT("vi", intro.id, "tagline", intro.tagline)}</p>
              <p>{__TT("vi", intro.id, "desc", intro.desc)}</p>
            </div>
            <span className="vi-badge">{__TT("vi", intro.id, "vibe", intro.vibe)}</span>
          </div>
        )}
        <div className="vi-gallery" role="list" aria-label={__T("vi.places.gallery-aria", "Galeria de regiões de Leonida")}>
          {list.map((place, index) => (
            <VIPolaroid key={place.id} place={place} index={index} />
          ))}
        </div>
        <p className="vi-gallery-hint" aria-hidden="true">
          {__T("vi.places.hint", "Deslize para o lado para percorrer o estado →")}
        </p>
      </div>
    </section>
  );
};

/* ============ 4. DOSSIÊ GTA VI (id="gta6") ============ */
const VITrailerCard = ({ trailer }) => {
  const title = __TT("vi", trailer.id, "title", trailer.title);
  return (
    <article className={`card vi-trailer${trailer.rumor ? " vi-trailer--rumor" : ""}`}>
      <Corners />
      {trailer.youtubeId ? (
        <a
          className="vi-trailer-thumb"
          href={trailer.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${__T("vi.trailers.watch-aria", "Assistir no YouTube:")} ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${trailer.youtubeId}/hqdefault.jpg`}
            alt={`${__T("vi.trailers.thumb-alt", "Miniatura oficial de")} ${title}`}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <span className="vi-trailer-play" aria-hidden="true">▶</span>
        </a>
      ) : (
        <div className="vi-trailer-thumb vi-trailer-thumb--empty vi-vhs" aria-hidden="true">
          <span>{__T("vi.trailers.no-signal", "SEM SINAL · AGUARDANDO ANÚNCIO")}</span>
          <span className="vi-grain" />
        </div>
      )}
      <div className="vi-trailer-body">
        <div className="vi-trailer-meta">
          <span className="vi-badge">{__TT("vi", trailer.id, "dateLabel", trailer.dateLabel)}</span>
          {trailer.kind === "showcase" && (
            <span className="vi-badge vi-badge--official">{__T("vi.badge.gameplay", "GAMEPLAY OFICIAL")}</span>
          )}
          {trailer.rumor && (
            <span className="vi-badge vi-badge--rumor">{__T("vi.badge.rumor", "RUMOR")}</span>
          )}
        </div>
        <h4>{title}</h4>
        <p>{__TT("vi", trailer.id, "desc", trailer.desc)}</p>
        <BulletList
          items={(trailer.highlights || []).map((item, index) =>
            __TT("vi", trailer.id, `highlight-${index + 1}`, item)
          )}
        />
        {trailer.url && (
          <a className="vi-btn" href={trailer.url} target="_blank" rel="noreferrer">
            {__T("vi.trailers.watch", "Assistir no YouTube")}
          </a>
        )}
      </div>
    </article>
  );
};

const VIInfoSection = () => {
  const data = viData();
  const release = data.release || {};
  const editions = release.editions || [];
  const vintagePack = release.vintagePack;
  const trailers = data.trailers || [];
  const facts = data.facts || {};
  const annTimeline = data.annTimeline || [];
  const faq = data.faq || [];

  return (
    <section id="gta6" className="dossier-section dossier-shell vi-section vi-info">
      <div className="wrap">
        <DossierSectionHead
          eyebrow={__T("vi.info.eyebrow", "Próximo capítulo")}
          title={__T("vi.info.title", "GTA VI — dossiê completo")}
          accent="var(--neon, #ff3d8a)"
          right={__T("vi.info.right", "fatos oficiais sempre separados de rumor")}
        />

        {/* Lançamento + countdown compacto + histórico de adiamentos */}
        <div className="card vi-release-card">
          <Corners />
          <div className="vi-release-grid">
            <div className="vi-release-copy">
              <span className="vi-badge vi-badge--vi">
                {__T("vi.info.badge", "LANÇAMENTO · 19.11.2026")}
              </span>
              <h3 className="vi-serif">{__T("vi.info.release-title", "A contagem regressiva está valendo")}</h3>
              <p>
                {__T(
                  "vi.info.release-desc2",
                  "Depois de dois adiamentos, a Rockstar cravou a data: Jason e Lucia chegam a Leonida em 19 de novembro de 2026. A pré-venda está aberta desde 25 de junho, o Extended Look de 27 de agosto mostrou 26 minutos de gameplay e o pré-load começa em 12 de novembro."
                )}
              </p>
              <MetaGrid rows={[
                [__T("vi.info.meta-date", "Data oficial"), `${release.dateLabel || "19 de novembro de 2026"} (${release.weekday || "quinta-feira"})`],
                [__T("vi.info.meta-platforms", "Plataformas"), (release.platforms || []).join(" · ")],
                [__T("vi.info.meta-preorder", "Pré-venda desde"), release.preorderSinceLabel || "25 de junho de 2026"],
                [__T("vi.info.meta-preload", "Pré-load digital"), (release.preload && release.preload.dateLabel) || "12 de novembro de 2026"],
                [__T("vi.info.meta-bonus", "Bônus de pré-venda"), release.preorderBonus || "Vintage Vice City Pack"]
              ]} />
              {release.preload && <p className="vi-release-preload">{__TT("vi", release.preload.id, "detail", release.preload.detail)} {__TT("vi", release.preload.id, "sizeNote", release.preload.sizeNote)}</p>}
            </div>
            <div className="vi-release-side">
              <VICountdown compact />
              <ol className="vi-delay-list">
                {(release.delays || []).map((delay) => (
                  <li key={delay.id} className={`vi-delay vi-delay--${delay.status || "superada"}`}>
                    <strong>{__TT("vi", delay.id, "label", delay.label)}</strong>
                    <span>{__TT("vi", delay.id, "detail", delay.detail)}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Edições e pré-venda */}
        <h3 className="vi-block-title vi-serif">{__T("vi.info.editions-title", "Edições e pré-venda")}</h3>
        <div className="vi-editions-grid">
          {editions.map((edition) => (
            <article
              key={edition.id}
              className={`card vi-edition${edition.id === "vi-ed-ultimate" ? " vi-edition--ultimate" : ""}`}
            >
              <Corners />
              <div className="vi-edition-head">
                <h4>{__TT("vi", edition.id, "name", edition.name)}</h4>
                <span className="vi-badge vi-badge--price">{edition.price}</span>
              </div>
              <p className="vi-edition-pricebr">{__TT("vi", edition.id, "priceBR", edition.priceBR)}</p>
              <p>{__TT("vi", edition.id, "blurb", edition.blurb)}</p>
              <BulletList
                items={(edition.items || []).map((item, index) =>
                  __TT("vi", edition.id, `item-${index + 1}`, item)
                )}
              />
            </article>
          ))}
          {vintagePack && (
            <article className="card vi-edition vi-edition--bonus">
              <Corners />
              <div className="vi-edition-head">
                <h4>{vintagePack.name}</h4>
                <span className="vi-badge">{__T("vi.info.bonus-badge", "BÔNUS DE PRÉ-VENDA")}</span>
              </div>
              <p>{__TT("vi", vintagePack.id, "note", vintagePack.note)}</p>
              <BulletList
                items={(vintagePack.items || []).map((item, index) =>
                  __TT("vi", vintagePack.id, `item-${index + 1}`, item)
                )}
              />
            </article>
          )}
        </div>

        {/* Trailers */}
        <h3 className="vi-block-title vi-serif">{__T("vi.info.trailers-title", "Trailers e recordes")}</h3>
        <div className="vi-trailers-grid">
          {trailers.map((trailer) => (
            <VITrailerCard key={trailer.id} trailer={trailer} />
          ))}
        </div>

        {/* Hardware oficial */}
        {(data.hardware || []).length > 0 && (
          <div className="vi-hw-grid">
            {(data.hardware || []).map((hw) => (
              <article key={hw.id} className="card vi-hw">
                <Corners />
                <div className="vi-edition-head">
                  <h4>{__TT("vi", hw.id, "name", hw.name)}</h4>
                  <span className="vi-badge vi-badge--official">{__T("vi.badge.official", "OFICIAL")}</span>
                </div>
                <p className="vi-edition-pricebr">{__TT("vi", hw.id, "dateLabel", hw.dateLabel)}</p>
                <p>{__TT("vi", hw.id, "desc", hw.desc)}</p>
              </article>
            ))}
          </div>
        )}

        {/* Trilha sonora */}
        {data.soundtrack && (
          <>
            <h3 className="vi-block-title vi-serif">{__T("vi.info.soundtrack-title", "Trilha sonora confirmada")}</h3>
            <div className="card vi-soundtrack">
              <Corners />
              <p className="vi-soundtrack-intro">{__T("vi.info.soundtrack-intro", data.soundtrack.intro)}</p>
              <div className="vi-soundtrack-cols">
                <div>
                  <h4>{__T("vi.info.soundtrack-extended", "No Extended Look (27/08/2026)")}</h4>
                  <ol className="vi-song-list">
                    {(data.soundtrack.extendedLook || []).map((s) => (
                      <li key={s.id}><span className="vi-song-at">{s.at}</span><strong>{s.title}</strong><em>{s.artist}</em></li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h4>{__T("vi.info.soundtrack-trailers", "Nos trailers e no site oficial")}</h4>
                  <ul className="vi-song-list">
                    {(data.soundtrack.trailers || []).map((s) => (
                      <li key={s.id}><strong>{s.title}</strong><em>{s.artist}</em><span className="vi-song-where">{__TT("vi", s.id, "where", s.where)}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Linha do tempo de anúncios */}
        <h3 className="vi-block-title vi-serif">{__T("vi.info.timeline-title", "Linha do tempo dos anúncios")}</h3>
        <div className="card vi-ann-card">
          <Corners />
          <ol className="vi-ann-timeline">
            {annTimeline.map((event) => (
              <li key={event.id} className={`vi-ann vi-ann--${event.kind}`}>
                <span className="vi-ann-date">{__TT("vi", event.id, "dateLabel", event.dateLabel)}</span>
                <div className="vi-ann-body">
                  <strong>
                    {__TT("vi", event.id, "title", event.title)}
                    {event.kind === "rumor" && (
                      <span className="vi-badge vi-badge--rumor">{__T("vi.badge.rumor", "RUMOR")}</span>
                    )}
                    {event.kind === "incidente" && (
                      <span className="vi-badge vi-badge--incident">{__T("vi.badge.incident", "INCIDENTE")}</span>
                    )}
                  </strong>
                  <p>{__TT("vi", event.id, "desc", event.desc)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Confirmado vs. rumor */}
        <h3 className="vi-block-title vi-serif">{__T("vi.info.facts-title", "O que é oficial — e o que é conversa de esquina")}</h3>
        <div className="vi-facts-columns">
          <article className="card vi-facts vi-facts--official">
            <Corners />
            <div className="vi-facts-head">
              <span className="vi-badge vi-badge--official">{__T("vi.badge.official", "OFICIAL")}</span>
              <h4>{__T("vi.info.confirmed-title", "Confirmado pela Rockstar")}</h4>
            </div>
            <ul className="dossier-list">
              {(facts.confirmed || []).map((fact) => (
                <li key={fact.id}>{__TT("vi", fact.id, "text", fact.text)}</li>
              ))}
            </ul>
          </article>
          <article className="card vi-facts vi-facts--rumor">
            <Corners />
            <div className="vi-facts-head">
              <span className="vi-badge vi-badge--rumor">{__T("vi.badge.rumor", "RUMOR")}</span>
              <h4>{__T("vi.info.rumors-title", "Rumores e vazamentos — não oficial")}</h4>
            </div>
            <ul className="dossier-list">
              {(facts.rumors || []).map((fact) => (
                <li key={fact.id}>{__TT("vi", fact.id, "text", fact.text)}</li>
              ))}
            </ul>
          </article>
        </div>

        {/* FAQ */}
        <h3 className="vi-block-title vi-serif">{__T("vi.info.faq-title", "Perguntas frequentes")}</h3>
        <div className="card vi-faq-card">
          <Corners />
          {faq.map((item) => (
            <details key={item.id} className="dossier-details vi-faq">
              <summary>{__TT("vi", item.id, "q", item.q)}</summary>
              <p>{__TT("vi", item.id, "a", item.a)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ 5. MECÂNICAS (id="vi-mechanics") ============ */
const VIMechCard = ({ mech, index }) => {
  const items = mech.items || [];
  const officialCount = items.filter((i) => i.status === "oficial").length;
  return (
    <article className={`card vi-mech vi-mech--${mech.status || "oficial"}`} style={{ "--vi-i": index }}>
      <Corners />
      <div className="vi-mech-head">
        <span className="vi-mech-icon" aria-hidden="true"><DossierIcon type={mech.icon || "star"} /></span>
        <div>
          <h4 className="vi-serif">{__TT("vi", mech.id, "title", mech.title)}</h4>
          <div className="vi-mech-badges">
            <span className={`vi-badge ${mech.status === "previa" ? "vi-badge--rumor" : "vi-badge--official"}`}>
              {mech.status === "previa" ? __T("vi.mech.previa", "RELATADO EM PRÉVIA") : __T("vi.mech.oficial", "MOSTRADO PELA ROCKSTAR")}
            </span>
            <span className="vi-badge">{officialCount}/{items.length} {__T("vi.mech.official-count", "oficiais")}</span>
          </div>
        </div>
      </div>
      <p className="vi-mech-summary">{__TT("vi", mech.id, "summary", mech.summary)}</p>
      <ul className="vi-mech-list">
        {items.map((item, i) => (
          <li key={i} className={`vi-mech-item vi-mech-item--${item.status || "oficial"}`}>
            <span className="vi-mech-pin" title={item.status === "previa" ? __T("vi.mech.previa-title", "Relatado por imprensa que assistiu à sessão hands-off") : __T("vi.mech.oficial-title", "Mostrado ou dito pela Rockstar")} aria-hidden="true" />
            <span>{__TT("vi", mech.id, `item-${i + 1}`, item.text)}</span>
            {item.status === "previa" && <small className="vi-mech-src">{__T("vi.mech.previa-short", "prévia")}</small>}
          </li>
        ))}
      </ul>
    </article>
  );
};

const VIMechanicsSection = () => {
  const data = viData();
  const mechanics = data.mechanics || [];
  const showcase = (data.trailers || []).find((t) => t.id === "vi-extended-look");
  const total = mechanics.reduce((n, m) => n + (m.items || []).length, 0);
  const official = mechanics.reduce((n, m) => n + (m.items || []).filter((i) => i.status === "oficial").length, 0);
  return (
    <section id="vi-mechanics" className="dossier-section dossier-shell vi-section vi-mechanics">
      <div className="wrap">
        <DossierSectionHead
          eyebrow={__T("vi.mech.eyebrow", "Como GTA VI joga")}
          title={__T("vi.mech.title", "Mecânicas confirmadas")}
          accent="var(--evidence, #ffd166)"
          right={`${official} ${__T("vi.mech.right-a", "fatos mostrados pela Rockstar")} · ${total - official} ${__T("vi.mech.right-b", "relatados em prévias")}`}
        />
        <div className="card vi-mech-intro">
          <Corners />
          <div>
            <span className="vi-badge vi-badge--official">{__T("vi.mech.intro-badge", "FONTE: EXTENDED LOOK · 27.08.2026")}</span>
            <p>
              {__T("vi.mech.intro", "Tudo abaixo vem dos 26 minutos de gameplay que a Rockstar publicou em 27 de agosto de 2026 e das prévias hands-off liberadas no mesmo dia (IGN, The New York Times, Kinda Funny, TGG, Dazed). Pino dourado = a Rockstar mostrou ou disse; pino roxo = a imprensa relatou depois de assistir Rob Nelson jogar no Rockstar North.")}
            </p>
          </div>
          {showcase && showcase.url && (
            <a className="vi-btn vi-btn--primary" href={showcase.url} target="_blank" rel="noreferrer">
              {__T("vi.mech.watch", "Ver o Extended Look")}
            </a>
          )}
        </div>
        <div className="vi-mech-grid">
          {mechanics.map((mech, index) => <VIMechCard key={mech.id} mech={mech} index={index} />)}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, {
  VIHero,
  VICountdown,
  VICharactersSection,
  VIPlacesSection,
  VIInfoSection,
  VIMechanicsSection
});
