/* ============ EASTER EGGS SECTION (id="eastereggs") ============
 * Arquivo secreto de easter eggs de toda a saga.
 * Depende de: window.EASTER_EGGS_DATA (data-easter-eggs.jsx, ANTES no bundle),
 * componentes globais Corners / Tag / DossierSectionHead (components.jsx +
 * sections-dossier.jsx) e das classes .vi-* do tema Vice Sunset
 * (vi-badge, vi-btn, vi-sky, vi-veil).
 * Todos os nomes top-level são prefixados com egg/EGG, exceto o componente
 * exportado EasterEggsSection (contrato com app.jsx).
 */

/* Helpers i18n seguros (guardados em window para evitar redeclaração de
 * const no escopo único do bundle). */
window.__T = window.__T || ((k, f) => (window.__t ? window.__t(k, f) : f));
window.__TT = window.__TT || ((p, id, field, fb) => (window.__tt ? window.__tt(p, id, field, fb) : fb));

const eggData = () => window.EASTER_EGGS_DATA || { games: [], categories: [], eggs: [] };

const EGG_PAGE_SIZE = 24;

const eggNormalizeText = (value) => String(value || "")
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .toLowerCase();

const eggGameById = (id) => eggData().games.find((game) => game.id === id) || null;

const eggCategoryLabel = (id) => {
  const category = eggData().categories.find((c) => c.id === id);
  return category ? __TT("egg", category.id, "name", category.name) : id;
};

/* Tom do Tag por categoria (classes .tag.* já existentes no tema) */
const eggCategoryTone = (id) => ({
  referencia: "blue",
  meta: "pink",
  oculto: "yellow",
  absurdo: "green",
  midia: "neutral"
}[id] || "neutral");

const eggMonoStyle = {
  fontFamily: '"Space Mono", ui-monospace, monospace',
  fontSize: 12,
  lineHeight: 1.6,
  display: "grid",
  gap: 6
};

/* ---- Card individual (controla o próprio estado de spoiler) ---- */
const EggCard = ({ egg }) => {
  const [revealed, setRevealed] = React.useState(false);
  const game = eggGameById(egg.gameId);
  const title = __TT("egg", egg.id, "title", egg.title);
  const desc = __TT("egg", egg.id, "desc", egg.desc);
  const where = __TT("egg", egg.id, "where", egg.where);
  const how = __TT("egg", egg.id, "how", egg.how);
  const hidden = !!egg.spoiler && !revealed;

  return (
    <article className="card" style={{ position: "relative", padding: "18px 18px 20px", display: "flex", flexDirection: "column", gap: 10 }}>
      <Corners />
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <span className="vi-badge">
          {game ? __TT("egg", game.id, "short", game.short) : egg.gameId}
          {game && <b>{game.year}</b>}
        </span>
        <Tag tone={eggCategoryTone(egg.category)}>{eggCategoryLabel(egg.category)}</Tag>
        {egg.spoiler && <Tag tone="red">{__T("egg.ui.spoiler-tag", "Spoiler")}</Tag>}
      </div>
      <h3 style={{ margin: 0, lineHeight: 1.25 }}>{title}</h3>
      <div
        aria-hidden={hidden || undefined}
        style={hidden ? { filter: "blur(10px)", userSelect: "none", pointerEvents: "none" } : undefined}
      >
        <p style={{ margin: "0 0 10px" }}>{desc}</p>
        <div style={eggMonoStyle}>
          <div>
            <span style={{ color: "var(--vi-gold, #ffd166)", letterSpacing: ".14em" }}>{__T("egg.ui.where", "ONDE:")}</span>{" "}
            {where}
          </div>
          <div>
            <span style={{ color: "var(--vi-gold, #ffd166)", letterSpacing: ".14em" }}>{__T("egg.ui.how", "COMO:")}</span>{" "}
            {how}
          </div>
        </div>
      </div>
      {hidden && (
        <button
          type="button"
          className="vi-btn vi-btn--ghost vi-btn--sm"
          style={{ alignSelf: "center", marginTop: 2 }}
          onClick={() => setRevealed(true)}
        >
          {__T("egg.ui.reveal", "Revelar spoiler")}
        </button>
      )}
    </article>
  );
};

/* ---- Seção principal ---- */
const EasterEggsSection = () => {
  const data = eggData();
  const [query, setQuery] = React.useState("");
  const [gameId, setGameId] = React.useState("all");
  const [category, setCategory] = React.useState("all");
  const [visible, setVisible] = React.useState(EGG_PAGE_SIZE);

  const filtered = React.useMemo(() => {
    const needle = eggNormalizeText(query);
    return data.eggs.filter((egg) => {
      if (gameId !== "all" && egg.gameId !== gameId) return false;
      if (category !== "all" && egg.category !== category) return false;
      if (!needle) return true;
      const haystack = eggNormalizeText([
        __TT("egg", egg.id, "title", egg.title),
        __TT("egg", egg.id, "desc", egg.desc),
        __TT("egg", egg.id, "where", egg.where)
      ].join(" "));
      return haystack.includes(needle);
    });
  }, [query, gameId, category]);

  /* Filtros mudaram -> volta para a primeira "página" */
  React.useEffect(() => { setVisible(EGG_PAGE_SIZE); }, [query, gameId, category]);

  const shown = filtered.slice(0, visible);
  const remaining = filtered.length - shown.length;
  const countPerGame = React.useMemo(() => {
    const counts = {};
    data.eggs.forEach((egg) => { counts[egg.gameId] = (counts[egg.gameId] || 0) + 1; });
    return counts;
  }, []);

  return (
    <section id="eastereggs" className="dossier-section dossier-shell vi-sky vi-sky--dusk">
      <div className="wrap">
        <div className="tape">{__T("egg.ui.tape", "ARQUIVO SECRETO · NÃO DIVULGAR")}</div>
        <DossierSectionHead
          eyebrow={__T("egg.ui.eyebrow", "ARQUIVO SECRETO")}
          title={__T("egg.ui.title", "Easter eggs de toda a saga")}
          accent="var(--vi-gold, #ffd166)"
          right={`${filtered.length} ${__T("egg.ui.count-suffix", "segredos catalogados")}`}
        />
        <p style={{ maxWidth: 860, opacity: .85, margin: "0 0 18px" }}>
          {__T(
            "egg.ui.intro",
            "De 1997 a 2026: cada segredo aqui é verificável no jogo (ou em material oficial da Rockstar). Mitos e lendas sem confirmação — Pé-Grande fantasma, Ratman, as portas do Chiliad — moram na seção de Mistérios; quando um mito aparece nesta lista é porque a Rockstar o transformou em conteúdo real."
          )}
        </p>

        {/* Abas por jogo */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "0 0 12px" }} role="tablist" aria-label={__T("egg.ui.games-aria", "Filtrar por jogo")}>
          <button
            type="button"
            role="tab"
            aria-selected={gameId === "all"}
            className={gameId === "all" ? "vi-btn vi-btn--sm" : "vi-btn vi-btn--ghost vi-btn--sm"}
            onClick={() => setGameId("all")}
          >
            {__T("egg.ui.all-games", "Todos")}
          </button>
          {data.games.map((game) => (
            <button
              key={game.id}
              type="button"
              role="tab"
              aria-selected={gameId === game.id}
              className={gameId === game.id ? "vi-btn vi-btn--sm" : "vi-btn vi-btn--ghost vi-btn--sm"}
              onClick={() => setGameId(game.id)}
              title={__TT("egg", game.id, "name", game.name)}
            >
              {__TT("egg", game.id, "short", game.short)}
              <small style={{ opacity: .7 }}>({countPerGame[game.id] || 0})</small>
            </button>
          ))}
        </div>

        {/* Chips por categoria */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "0 0 14px" }} aria-label={__T("egg.ui.cats-aria", "Filtrar por categoria")}>
          <button
            type="button"
            className={category === "all" ? "vi-badge vi-badge--solid" : "vi-badge"}
            style={{ cursor: "pointer" }}
            aria-pressed={category === "all"}
            onClick={() => setCategory("all")}
          >
            {__T("egg.ui.all-cats", "Todas as categorias")}
          </button>
          {data.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={category === cat.id ? "vi-badge vi-badge--solid" : "vi-badge"}
              style={{ cursor: "pointer" }}
              aria-pressed={category === cat.id}
              onClick={() => setCategory(cat.id)}
            >
              {__TT("egg", cat.id, "name", cat.name)}
            </button>
          ))}
        </div>

        {/* Busca */}
        <div className="dossier-filterbar">
          <label>
            <span>{__T("egg.ui.search", "Busca")}</span>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={__T("egg.ui.search-ph", "Gouranga, Estátua da Felicidade, OVNI, Scarface...")}
              aria-label={__T("egg.ui.search-aria", "Buscar easter eggs por título, descrição ou local")}
            />
          </label>
        </div>

        {/* Grid de cards */}
        {shown.length ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))", gap: 18, marginTop: 18 }}>
            {shown.map((egg) => <EggCard key={egg.id} egg={egg} />)}
          </div>
        ) : (
          <div className="vi-veil" style={{ marginTop: 18, textAlign: "center" }}>
            <p style={{ margin: 0 }}>
              {__T("egg.ui.empty", "Nenhum segredo encontrado com esses filtros. Nem a placa da Gant Bridge te ajuda agora — tente outra busca.")}
            </p>
          </div>
        )}

        {/* Paginação */}
        <div style={{ textAlign: "center", marginTop: 24, display: "grid", gap: 10, justifyItems: "center" }}>
          <span style={{ ...eggMonoStyle, display: "block", opacity: .7 }}>
            {__T("egg.ui.showing", "exibindo")} {shown.length} / {filtered.length}
          </span>
          {remaining > 0 && (
            <button
              type="button"
              className="vi-btn vi-btn--sm"
              onClick={() => setVisible((current) => current + EGG_PAGE_SIZE)}
            >
              {__T("egg.ui.load-more", "Carregar mais")} (+{Math.min(EGG_PAGE_SIZE, remaining)})
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
