/* ============ SEÇÃO: MISTÉRIOS E LENDAS URBANAS (id="mysteries") ============
 * MysteriesSection — estética "arquivo X do dossiê".
 * Depende de: window.MYSTERIES_DATA (data-mysteries.jsx, deve vir ANTES no
 * bundle), componentes globais Corners / DossierSectionHead (components.jsx +
 * sections-dossier.jsx) e das classes .vi-* do tema Vice Sunset
 * (vi-badge, vi-btn, vi-grain). Todos os helpers locais usam o prefixo myst.
 */

/* Helpers i18n seguros (guardados em window para evitar redeclaração de
 * const no escopo único do bundle). */
window.__T = window.__T || ((k, f) => (window.__t ? window.__t(k, f) : f));
window.__TT = window.__TT || ((p, id, field, fb) => (window.__tt ? window.__tt(p, id, field, fb) : fb));

const mystData = () => window.MYSTERIES_DATA || { statuses: [], cases: [] };

/* Nomes de exibição dos jogos (gameIds vindos de data-mysteries.jsx). */
const mystGameNames = {
  "gta3": "GTA III",
  "vice-city": "GTA Vice City",
  "san-andreas": "GTA San Andreas",
  "gta4": "GTA IV",
  "gta5": "GTA V",
  "gta-online": "GTA Online",
  "gta6": "GTA VI",
  "saga": "Toda a saga"
};
const mystGameLabel = (gameId) =>
  window.__T("myst.game." + gameId, mystGameNames[gameId] || gameId);

/* Variante visual do carimbo por status do caso. */
const mystStampClass = {
  resolvido: "vi-badge vi-badge--solid myst-stamp myst-stamp--resolvido",
  aberto: "vi-badge myst-stamp myst-stamp--aberto",
  lenda: "vi-badge myst-stamp myst-stamp--lenda"
};

const mystStatusName = (statuses, statusId) => {
  const status = statuses.find((s) => s.id === statusId);
  return window.__TT("myst-status", statusId, "name", status ? status.name : statusId);
};

/* Estilos locais da seção (prefixo .myst- para evitar colisões). */
const MystStyles = () => (
  <style>{`
    #mysteries{position:relative;overflow:hidden}
    #mysteries .wrap{position:relative;z-index:3}
    .myst-filterbar{display:flex;flex-wrap:wrap;gap:20px 28px;align-items:flex-end;margin-bottom:14px}
    .myst-filter-group{display:flex;flex-direction:column;gap:9px;min-width:0}
    .myst-filter-label{font-family:"Space Mono",ui-monospace,monospace;font-size:10px;letter-spacing:.24em;text-transform:uppercase;color:#d3a8c2}
    .myst-chip-row{display:flex;flex-wrap:wrap;gap:8px}
    .myst-chip{
      display:inline-flex;align-items:center;gap:8px;cursor:pointer;
      padding:9px 15px;border-radius:999px;
      font-family:"Space Mono",ui-monospace,monospace;font-size:11px;
      letter-spacing:.14em;text-transform:uppercase;color:#f4e3d7;
      background:rgba(20,7,44,.72);border:1px solid rgba(255,45,124,.3);
      transition:transform .15s ease,box-shadow .2s ease,border-color .2s ease;
    }
    .myst-chip:hover{transform:translateY(-1px);border-color:rgba(255,45,124,.65);box-shadow:0 0 20px rgba(255,45,124,.25)}
    .myst-chip.active{
      background:var(--vi-grad-sunset,linear-gradient(90deg,#ff2d7c,#ff8a3d 52%,#ffd166));
      color:var(--vi-ink,#33051c);border-color:transparent;font-weight:700;
      box-shadow:0 8px 22px -8px rgba(255,45,124,.65);
    }
    .myst-chip .myst-dot{width:8px;height:8px;border-radius:99px;flex:0 0 auto}
    .myst-chip.active .myst-dot{outline:1px solid rgba(51,5,28,.4)}
    .myst-dot--resolvido{background:linear-gradient(135deg,var(--vi-gold,#ffd166),#7ee08c)}
    .myst-dot--aberto{background:var(--vi-pink,#ff2d7c);box-shadow:0 0 10px rgba(255,45,124,.8)}
    .myst-dot--lenda{background:var(--vi-purple,#7b2ff7);box-shadow:0 0 10px rgba(123,47,247,.8)}
    .myst-dot--all{background:#f4e3d7}
    .myst-chip small{
      font-size:10px;padding:2px 7px;border-radius:99px;letter-spacing:.08em;
      background:rgba(11,13,42,.55);color:inherit;border:1px solid rgba(255,255,255,.18);
    }
    .myst-chip.active small{background:rgba(51,5,28,.22);border-color:rgba(51,5,28,.3)}
    .myst-select{
      appearance:none;-webkit-appearance:none;cursor:pointer;min-width:220px;
      padding:10px 38px 10px 14px;border-radius:10px;
      font-family:"Space Mono",ui-monospace,monospace;font-size:12px;letter-spacing:.06em;
      color:#fff5ec;background:rgba(20,7,44,.72);border:1px solid rgba(255,45,124,.3);
      background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' fill='none' stroke='%23ff2d7c' stroke-width='2' stroke-linecap='round'/></svg>");
      background-repeat:no-repeat;background-position:right 14px center;
    }
    .myst-select:focus{outline:none;border-color:rgba(255,45,124,.7);box-shadow:0 0 18px rgba(255,45,124,.3)}
    .myst-select option{background:#0b0d2a;color:#fff5ec}
    .myst-status-desc{
      margin:0 0 18px;max-width:760px;color:#d9c3d2;font-size:14px;line-height:1.6;
      border-left:3px solid rgba(255,45,124,.55);padding-left:14px;
    }
    .myst-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(330px,1fr));gap:18px;align-items:start}
    .myst-card{display:flex;flex-direction:column;gap:0;padding:22px 22px 18px}
    .myst-card-top{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:14px}
    .myst-file-no{font-family:"Space Mono",ui-monospace,monospace;font-size:10px;letter-spacing:.22em;color:#b98ca9;text-transform:uppercase}
    .myst-stamp{transform:rotate(-2deg);font-size:10px;letter-spacing:.2em;padding:6px 13px}
    .myst-stamp--resolvido{
      background:linear-gradient(90deg,var(--vi-gold,#ffd166),#7ee08c);
      color:var(--vi-ink,#33051c);box-shadow:0 8px 22px -8px rgba(255,209,102,.7),0 0 20px rgba(126,224,140,.25);
    }
    .myst-stamp--aberto{color:var(--vi-pink,#ff2d7c);box-shadow:0 0 22px rgba(255,45,124,.4)}
    .myst-stamp--lenda{
      color:#cfa9ff;box-shadow:0 0 22px rgba(123,47,247,.45);
      background:
        linear-gradient(rgba(26,9,54,.9),rgba(26,9,54,.9)) padding-box,
        linear-gradient(90deg,var(--vi-purple,#7b2ff7),var(--vi-pink-2,#f152ff)) border-box;
    }
    .myst-game-chip{
      display:inline-flex;align-items:center;gap:6px;margin-bottom:10px;
      font-family:"Space Mono",ui-monospace,monospace;font-size:10px;
      letter-spacing:.18em;text-transform:uppercase;color:var(--vi-gold,#ffd166);
    }
    .myst-game-chip::before{content:"";width:14px;height:1px;background:var(--vi-gold,#ffd166);opacity:.7}
    .myst-card h3{margin:0 0 10px;font-size:20px;line-height:1.25;color:#fff5ec}
    .myst-desc{margin:0;color:#d9c8d4;font-size:14px;line-height:1.62}
    .myst-toggle{margin-top:16px;align-self:flex-start}
    .myst-body{margin-top:16px;padding-top:16px;border-top:1px dashed rgba(255,45,124,.35)}
    .myst-evidence-label{
      display:flex;align-items:center;gap:8px;margin:16px 0 4px;
      font-family:"Space Mono",ui-monospace,monospace;font-size:10px;
      letter-spacing:.26em;text-transform:uppercase;color:#ff9ec4;
    }
    .myst-evidence-label:first-child{margin-top:0}
    .myst-evidence-label::after{content:"";flex:1;height:1px;background:rgba(255,45,124,.25)}
    .myst-list{list-style:none;margin:8px 0 0;padding:0}
    .myst-list li{display:flex;gap:10px;align-items:baseline;margin-bottom:8px;color:#e6d6dd;font-size:13.5px;line-height:1.6}
    .myst-idx{
      flex:0 0 auto;font-family:"Space Mono",ui-monospace,monospace;font-size:10px;
      letter-spacing:.08em;color:var(--vi-gold,#ffd166);opacity:.85;min-width:30px;
    }
    .myst-resolution{
      margin-top:18px;padding:14px 16px;border-radius:10px;
      border:1px dashed rgba(255,209,102,.6);background:rgba(255,209,102,.07);
    }
    .myst-resolution .myst-evidence-label{color:var(--vi-gold,#ffd166);margin-top:0}
    .myst-resolution .myst-evidence-label::after{background:rgba(255,209,102,.35)}
    .myst-resolution p{margin:8px 0 0;color:#ffe9bd;font-size:13.5px;line-height:1.62}
    .myst-where{
      display:flex;gap:10px;align-items:baseline;margin-top:16px;
      font-family:"Space Mono",ui-monospace,monospace;font-size:12px;
      color:#cdb4c6;line-height:1.55;
    }
    .myst-where svg{flex:0 0 auto;width:14px;height:14px;transform:translateY(2px);color:var(--vi-pink,#ff2d7c)}
    .myst-empty{
      padding:34px 26px;text-align:center;color:#d3a8c2;
      font-family:"Space Mono",ui-monospace,monospace;font-size:13px;letter-spacing:.08em;
    }
    @media (max-width:760px){
      .myst-filterbar{flex-direction:column;align-items:stretch}
      .myst-select{width:100%}
      .myst-grid{grid-template-columns:1fr}
      .myst-card{padding:18px 16px 16px}
    }
    @media (prefers-reduced-motion:reduce){
      .myst-chip,.myst-chip:hover{transform:none;transition:none}
    }
  `}</style>
);

/* Ícone de alfinete de mapa (arte SVG inline, sem imagens externas). */
const MystPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/* Lista numerada de evidências (pistas/teorias) com tradução item a item. */
const MystEvidenceList = ({ caseId, field, items, prefix }) => (
  <ul className="myst-list">
    {(items || []).map((text, i) => (
      <li key={`${field}-${i}`}>
        <span className="myst-idx" aria-hidden="true">
          {prefix}-{String(i + 1).padStart(2, "0")}
        </span>
        <span>{window.__TT("myst", caseId, field + "." + i, text)}</span>
      </li>
    ))}
  </ul>
);

/* Card expansível de um caso do arquivo. */
const MystCaseCard = ({ mystCase, fileNo, statuses }) => {
  const [open, setOpen] = React.useState(false);
  const panelId = `myst-file-${mystCase.id}`;
  const title = window.__TT("myst", mystCase.id, "title", mystCase.title);
  const resolution = mystCase.resolution
    ? window.__TT("myst", mystCase.id, "resolution", mystCase.resolution)
    : "";

  return (
    <article className={`card myst-card${open ? " open" : ""}`}>
      <Corners />
      <div className="myst-card-top">
        <span className="myst-file-no">
          {window.__T("myst.ui.file-label", "Arquivo")} #{fileNo}
        </span>
        <span className={mystStampClass[mystCase.status] || "vi-badge myst-stamp"}>
          {mystStatusName(statuses, mystCase.status)}
        </span>
      </div>
      <span className="myst-game-chip">{mystGameLabel(mystCase.gameId)}</span>
      <h3>{title}</h3>
      <p className="myst-desc">{window.__TT("myst", mystCase.id, "desc", mystCase.desc)}</p>

      {open && (
        <div className="myst-body" id={panelId}>
          <div className="myst-evidence-label">{window.__T("myst.ui.clues", "Pistas")}</div>
          <MystEvidenceList
            caseId={mystCase.id}
            field="clues"
            items={mystCase.clues}
            prefix={window.__T("myst.ui.clue-prefix", "P")}
          />

          <div className="myst-evidence-label">{window.__T("myst.ui.theories", "Teorias")}</div>
          <MystEvidenceList
            caseId={mystCase.id}
            field="theories"
            items={mystCase.theories}
            prefix={window.__T("myst.ui.theory-prefix", "T")}
          />

          {resolution && (
            <div className="myst-resolution">
              <div className="myst-evidence-label">
                {window.__T("myst.ui.resolution", "Resolução")}
              </div>
              <p>{resolution}</p>
            </div>
          )}

          {mystCase.where && (
            <p className="myst-where">
              <MystPinIcon />
              <span>
                <strong>{window.__T("myst.ui.where", "Onde procurar")}: </strong>
                {window.__TT("myst", mystCase.id, "where", mystCase.where)}
              </span>
            </p>
          )}
        </div>
      )}

      <button
        type="button"
        className="vi-btn vi-btn--ghost vi-btn--sm myst-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open
          ? window.__T("myst.ui.close-file", "Fechar arquivo")
          : window.__T("myst.ui.open-file", "Abrir arquivo")}
      </button>
    </article>
  );
};

const MysteriesSection = () => {
  const data = mystData();
  const statuses = data.statuses || [];
  const cases = data.cases || [];
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [gameFilter, setGameFilter] = React.useState("all");

  /* Jogos únicos na ordem em que aparecem no arquivo. */
  const gameIds = React.useMemo(
    () => [...new Set(cases.map((c) => c.gameId))],
    [cases]
  );
  /* Numeração estável dos arquivos (independe dos filtros). */
  const fileNumbers = React.useMemo(() => {
    const map = {};
    cases.forEach((c, i) => { map[c.id] = String(i + 1).padStart(3, "0"); });
    return map;
  }, [cases]);

  const byGame = gameFilter === "all"
    ? cases
    : cases.filter((c) => c.gameId === gameFilter);
  const filtered = statusFilter === "all"
    ? byGame
    : byGame.filter((c) => c.status === statusFilter);
  const countFor = (statusId) => byGame.filter((c) => c.status === statusId).length;
  const activeStatus = statuses.find((s) => s.id === statusFilter);

  return (
    <section id="mysteries" className="dossier-section dossier-shell">
      <MystStyles />
      <div className="vi-grain" aria-hidden="true" />
      <div className="wrap">
        <DossierSectionHead
          eyebrow={window.__T("myst.ui.eyebrow", "CASOS NÃO ARQUIVADOS")}
          title={window.__T("myst.ui.title", "Mistérios, mitos e lendas urbanas")}
          accent="var(--vi-pink-2, #f152ff)"
          right={`${filtered.length} ${window.__T("myst.ui.count-suffix", "casos no arquivo")}`}
        />

        <div className="myst-filterbar">
          <div className="myst-filter-group">
            <span className="myst-filter-label" id="myst-status-label">
              {window.__T("myst.ui.filter-status", "Status do caso")}
            </span>
            <div className="myst-chip-row" role="group" aria-labelledby="myst-status-label">
              <button
                type="button"
                className={`myst-chip${statusFilter === "all" ? " active" : ""}`}
                aria-pressed={statusFilter === "all"}
                onClick={() => setStatusFilter("all")}
              >
                <span className="myst-dot myst-dot--all" aria-hidden="true" />
                {window.__T("myst.ui.all", "Todos")}
                <small>{byGame.length}</small>
              </button>
              {statuses.map((status) => (
                <button
                  key={status.id}
                  type="button"
                  className={`myst-chip${statusFilter === status.id ? " active" : ""}`}
                  aria-pressed={statusFilter === status.id}
                  onClick={() => setStatusFilter(status.id)}
                >
                  <span className={`myst-dot myst-dot--${status.id}`} aria-hidden="true" />
                  {window.__TT("myst-status", status.id, "name", status.name)}
                  <small>{countFor(status.id)}</small>
                </button>
              ))}
            </div>
          </div>

          <label className="myst-filter-group">
            <span className="myst-filter-label">
              {window.__T("myst.ui.filter-game", "Jogo")}
            </span>
            <select
              className="myst-select"
              value={gameFilter}
              onChange={(e) => setGameFilter(e.target.value)}
            >
              <option value="all">{window.__T("myst.ui.all-games", "Todos os jogos")}</option>
              {gameIds.map((id) => (
                <option key={id} value={id}>{mystGameLabel(id)}</option>
              ))}
            </select>
          </label>
        </div>

        {activeStatus && (
          <p className="myst-status-desc">
            {window.__TT("myst-status", activeStatus.id, "desc", activeStatus.desc)}
          </p>
        )}

        {filtered.length ? (
          <div className="myst-grid">
            {filtered.map((mystCase) => (
              <MystCaseCard
                key={mystCase.id}
                mystCase={mystCase}
                fileNo={fileNumbers[mystCase.id]}
                statuses={statuses}
              />
            ))}
          </div>
        ) : (
          <div className="card myst-empty">
            <Corners />
            {window.__T("myst.ui.empty", "Nenhum caso corresponde aos filtros. O arquivo continua aberto.")}
          </div>
        )}
      </div>
    </section>
  );
};
