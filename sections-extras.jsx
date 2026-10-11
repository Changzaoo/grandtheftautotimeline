/* ============ CÓDIGOS (id="cheats") e RÁDIOS (id="radios") ============
 * Depende de window.CHEATS_DATA / window.RADIOS_DATA (data-cheats.jsx e
 * data-radios.jsx, ANTES no bundle) e de DossierSectionHead + classes .vi-*.
 * Os textos dos dados já chegam traduzidos (registro de dados do i18n.jsx);
 * o texto literal do JSX é envolvido pelo plugin autotext no build.
 * Nomes top-level prefixados com xt/XT, exceto os componentes exportados.
 */
const xtNormalize = (value) => String(value || "")
  .normalize("NFD").replace(/[̀-ͯ]/g, "")
  .toLowerCase();

const xtCheats = () => window.CHEATS_DATA || { games: [], categories: [], cheats: [], faq: [] };
const xtRadios = () => window.RADIOS_DATA || { games: [], stations: [] };

/* Abas de jogo compartilhadas pelas duas seções. */
const XtGameTabs = ({ games, value, onChange, counts, label }) => (
  <div className="xt-tabs" role="tablist" aria-label={label}>
    <button type="button" role="tab" aria-selected={value === "all"}
      className={value === "all" ? "vi-btn vi-btn--sm" : "vi-btn vi-btn--ghost vi-btn--sm"}
      onClick={() => onChange("all")}>
      Todos
    </button>
    {games.map((game) => (
      <button key={game.id} type="button" role="tab" aria-selected={value === game.id} data-gta={window.gtaTema(game.id)}
        className={value === game.id ? "vi-btn vi-btn--sm" : "vi-btn vi-btn--ghost vi-btn--sm"}
        onClick={() => onChange(game.id)} title={game.name}>
        {game.short} <small style={{ opacity: .7 }}>({counts[game.id] || 0})</small>
      </button>
    ))}
  </div>
);

/* Botão de copiar o código (some sem a API de área de transferência). */
const XtCopy = ({ text }) => {
  const [done, setDone] = React.useState(false);
  if (typeof navigator === "undefined" || !navigator.clipboard) return null;
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setDone(true);
      window.setTimeout(() => setDone(false), 1400);
    }).catch(() => {});
  };
  return (
    <button type="button" className="xt-copy" onClick={copy} aria-label="Copiar código">
      {done ? "Copiado" : "Copiar"}
    </button>
  );
};

const CheatsSection = () => {
  const data = xtCheats();
  const [gameId, setGameId] = React.useState("all");
  const [cat, setCat] = React.useState("all");
  const [query, setQuery] = React.useState("");

  const counts = React.useMemo(() => {
    const map = {};
    data.cheats.forEach((cheat) => { map[cheat.gameId] = (map[cheat.gameId] || 0) + 1; });
    return map;
  }, []);

  const needle = xtNormalize(query);
  const matches = (cheat) =>
    (cat === "all" || cheat.cat === cat) &&
    (!needle || xtNormalize(cheat.code + " " + cheat.title).includes(needle));
  const games = data.games.filter((game) => gameId === "all" || game.id === gameId);
  const total = data.cheats.filter((cheat) => (gameId === "all" || cheat.gameId === gameId) && matches(cheat)).length;

  return (
    <section id="cheats" data-gta={gameId !== "all" ? window.gtaTema(gameId) : undefined} className="dossier-section dossier-shell alt xt-section gta-secao">
      <div className="wrap">
        <DossierSectionHead
          eyebrow="Arquivo de códigos"
          title="Códigos e cheats"
          accent="var(--vi-gold, var(--evidence))"
          right={<span>{data.cheats.length} códigos · GTA III · Vice City · San Andreas · GTA IV · GTA V</span>}
        />
        <p className="xt-lead">
          Os códigos clássicos de Grand Theft Auto, jogo a jogo: o que digitar no PC, o número para discar em GTA IV e, nos mais usados, a sequência do controle PlayStation. Digite qualquer um deles aqui no site e veja o que acontece.
        </p>

        <XtGameTabs games={data.games} value={gameId} onChange={setGameId} counts={counts} label="Filtrar por jogo" />

        <div className="xt-chips">
          <button type="button" aria-pressed={cat === "all"} className={cat === "all" ? "vi-badge vi-badge--solid" : "vi-badge"} onClick={() => setCat("all")}>
            Todas as categorias
          </button>
          {data.categories.map((item) => (
            <button key={item.id} type="button" aria-pressed={cat === item.id}
              className={cat === item.id ? "vi-badge vi-badge--solid" : "vi-badge"} onClick={() => setCat(item.id)}>
              {item.label}
            </button>
          ))}
        </div>

        <div className="dossier-filterbar">
          <label>
            <span>Busca</span>
            <input type="text" value={query} onChange={(event) => setQuery(event.target.value)}
              placeholder="HESOYAM, jetpack, tanque, procurado..."
              aria-label="Buscar códigos por nome ou efeito" />
          </label>
        </div>

        {games.map((game) => {
          const rows = data.cheats.filter((cheat) => cheat.gameId === game.id && matches(cheat));
          if (!rows.length) return null;
          return (
            <article key={game.id} className="xt-block card" data-gta={window.gtaTema(game.id)} id={"cheats-" + game.id}>
              <header className="xt-block-head">
                <h3>Códigos de {game.name} <small>{game.year}</small></h3>
                <p>{game.note}</p>
              </header>
              <div className="xt-table-wrap">
                <table className="xt-table">
                  <thead>
                    <tr>
                      <th scope="col">Código</th>
                      <th scope="col">Efeito</th>
                      <th scope="col">PlayStation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((cheat) => (
                      <tr key={cheat.id}>
                        <th scope="row"><code>{cheat.code}</code><XtCopy text={cheat.code} /></th>
                        <td>{cheat.title}</td>
                        <td className="xt-pad">{cheat.ps || "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          );
        })}

        {!total && (
          <div className="vi-veil" style={{ marginTop: 18, textAlign: "center" }}>
            <p style={{ margin: 0 }}>Nenhum código encontrado com esses filtros.</p>
          </div>
        )}

        <div className="xt-faq">
          <h3>Perguntas frequentes sobre códigos</h3>
          {(data.faq || []).map((item) => (
            <details key={item.id} className="card">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const RadiosSection = () => {
  const data = xtRadios();
  const [gameId, setGameId] = React.useState("all");
  const [query, setQuery] = React.useState("");

  const counts = React.useMemo(() => {
    const map = {};
    data.stations.forEach((station) => { map[station.gameId] = (map[station.gameId] || 0) + 1; });
    return map;
  }, []);

  const needle = xtNormalize(query);
  const matches = (station) =>
    !needle || xtNormalize([station.name, station.genre, station.dj, station.note].join(" ")).includes(needle);
  const games = data.games.filter((game) => gameId === "all" || game.id === gameId);
  const total = data.stations.filter((station) => (gameId === "all" || station.gameId === gameId) && matches(station)).length;

  return (
    <section id="radios" data-gta={gameId !== "all" ? window.gtaTema(gameId) : undefined} className="dossier-section dossier-shell xt-section gta-secao">
      <div className="wrap">
        <DossierSectionHead
          eyebrow="Sintonize"
          title="Rádios de GTA"
          accent="var(--vi-pink, var(--evidence))"
          right={<span>{data.stations.length} estações · de Head Radio a MOTOMAMI Los Santos</span>}
        />
        <p className="xt-lead">
          Desde GTA III, roubar um carro é também trocar de estação. Aqui estão as rádios de cada jogo principal, com o gênero que tocam e quem apresenta — incluindo as vozes famosas por trás dos DJs.
        </p>

        <XtGameTabs games={data.games} value={gameId} onChange={setGameId} counts={counts} label="Filtrar por jogo" />

        <div className="dossier-filterbar">
          <label>
            <span>Busca</span>
            <input type="text" value={query} onChange={(event) => setQuery(event.target.value)}
              placeholder="Flash FM, reggae, Lazlow, Frank Ocean..."
              aria-label="Buscar rádios por nome, gênero ou apresentador" />
          </label>
        </div>

        {games.map((game) => {
          const rows = data.stations.filter((station) => station.gameId === game.id && matches(station));
          if (!rows.length) return null;
          return (
            <article key={game.id} className="xt-block card" data-gta={window.gtaTema(game.id)} id={"radios-" + game.id}>
              <header className="xt-block-head">
                <h3>Rádios de {game.name} <small>{game.year}</small></h3>
                <p>{game.note}</p>
              </header>
              <ul className="xt-stations">
                {rows.map((station) => (
                  <li key={station.id}>
                    <strong>{station.name}</strong>
                    <span className="xt-genre">{station.genre}</span>
                    <span className="xt-dj">Apresentação: {station.dj}</span>
                    {station.added && <span className="xt-added">Adicionada em {station.added}</span>}
                    {station.note && <span className="xt-note">{station.note}</span>}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}

        {!total && (
          <div className="vi-veil" style={{ marginTop: 18, textAlign: "center" }}>
            <p style={{ margin: 0 }}>Nenhuma rádio encontrada com essa busca.</p>
          </div>
        )}
      </div>
    </section>
  );
};

Object.assign(window, { CheatsSection, RadiosSection });
