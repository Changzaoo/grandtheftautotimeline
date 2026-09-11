/* ============ MISSÕES UMA A UMA — gameplay sem comentários (id="mission-videos") ============
 * Todas as missões de cada jogo, separadas por jogo e na ordem da campanha, cada
 * uma com o passo a passo em vídeo SEM COMENTÁRIOS tocando no próprio site
 * (player do YouTube incorporado via youtube-nocookie — a pessoa não sai daqui).
 * A lista é gerada por scripts/build-missions.js (GTA Wiki + playlists do GTA
 * Series Videos e canais equivalentes) em live/missions.json e só é baixada
 * quando a seção se aproxima da tela ou alguém pede pelo modal de missões
 * (evento "mv:open" com { gameId }).
 */
const MV_PART_ORDER = ["story", "contact", "heist", "side"];
const mvNorm = (value) => String(value || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const mvKey = (mission) => (mission ? `${mission.part}-${mission.n}` : "");
const mvDuration = (secs) => {
  const total = Math.max(0, Math.round(Number(secs) || 0));
  if (!total) return "";
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = String(total % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${s}` : `${m}:${s}`;
};
const mvThumb = (mission) => (mission && mission.video ? `https://i.ytimg.com/vi/${mission.video.id}/mqdefault.jpg` : (mission && mission.image) || "");
const mvMeta = (mission) => [mission.who, mission.area, mission.label].filter(Boolean).join(" · ");
const mvCoverOf = (gameId) => {
  const game = typeof gamesData !== "undefined" ? gamesData.find((entry) => entry.id === gameId) : null;
  return (game && game.media && game.media.src) || "";
};

const MvPartLabel = ({ part }) => {
  if (part === "story") return <>História</>;
  if (part === "contact") return <>Contatos</>;
  if (part === "heist") return <>Assaltos e golpes</>;
  if (part === "side") return <>Paralelas</>;
  return <>Todas</>;
};

const useMissionVideoCatalog = (ref) => {
  const [state, setState] = React.useState({ status: "idle", data: null });
  const started = React.useRef(false);
  const load = React.useCallback(() => {
    if (started.current) return;
    started.current = true;
    setState({ status: "loading", data: null });
    fetch("live/missions.json", { cache: "no-cache" })
      .then((response) => { if (!response || !response.ok) throw new Error("HTTP"); return response.json(); })
      /* Descrições vêm do GTA Wiki em inglês: __i18nLive traduz para o idioma ativo. */
      .then((data) => setState({ status: "ok", data: window.__i18nLive ? window.__i18nLive(data) : data }))
      .catch(() => { started.current = false; setState({ status: "error", data: null }); });
  }, []);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof window.IntersectionObserver !== "function") { load(); return undefined; }
    const io = new window.IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) { io.disconnect(); load(); }
    }, { rootMargin: "1400px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [load]);
  return [state, load];
};

const MissionVideoPlayer = ({ game, mission, playing, onPlay, onPrev, onNext, position, count }) => {
  if (!mission) {
    return (
      <div className="card mv-player mv-player--empty">
        <Corners />
        <p>Escolha uma missão na lista.</p>
      </div>
    );
  }
  const video = mission.video;
  const poster = video ? `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg` : mission.image;
  const meta = mvMeta(mission);
  return (
    <article className="card mv-player">
      <Corners />
      <div className="mv-screen">
        {video ? (
          /* Player do YouTube direto na página — capa, botão vermelho e controles
           * nativos, sem clique extra. Escolher uma missão na lista já dá play. */
          <iframe
            key={`${video.id}-${playing ? "play" : "idle"}`}
            src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&playsinline=1${playing ? "&autoplay=1" : ""}`}
            title={`${mission.name} · ${game.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            frameBorder="0"
          />
        ) : (
          <div className="mv-poster">
            {poster ? <img src={poster} alt="" referrerPolicy="strict-origin-when-cross-origin" /> : null}
            <span className="mv-novideo">Esta missão ainda não tem um passo a passo sem comentários que possa tocar aqui.</span>
          </div>
        )}
      </div>
      <div className="mv-info">
        <div className="mv-kicker">{game.name} · <MvPartLabel part={mission.part} /> · #{mission.n}</div>
        <h3>{mission.name}</h3>
        {meta && <div className="mv-meta">{meta}</div>}
        {mission.description && <p className="mv-desc">{mission.description}</p>}
        <div className="mv-controls">
          <button type="button" className="vi-btn" onClick={onPrev} disabled={position <= 1}>‹ Anterior</button>
          <span className="mv-pos">{position} / {count}</span>
          <button type="button" className="vi-btn" onClick={onNext} disabled={position >= count}>Próxima ›</button>
        </div>
        {video && (
          <small className="mv-credit">
            Vídeo sem comentários de {video.ch || "YouTube"}{video.secs ? ` · ${mvDuration(video.secs)}` : ""}
          </small>
        )}
      </div>
    </article>
  );
};

const MissionVideosSection = () => {
  const sectionRef = React.useRef(null);
  const stageRef = React.useRef(null);
  const listRef = React.useRef(null);
  const [{ status, data }, load] = useMissionVideoCatalog(sectionRef);
  const [gameId, setGameId] = React.useState("san-andreas");
  const [part, setPart] = React.useState("all");
  const [query, setQuery] = React.useState("");
  const [selKey, setSelKey] = React.useState("");
  const [playing, setPlaying] = React.useState(false);

  const games = data && Array.isArray(data.games) ? data.games.filter((g) => g && Array.isArray(g.missions) && g.missions.length) : [];
  const game = games.find((g) => g.id === gameId) || games[0] || null;
  const missions = game ? game.missions : [];

  const pickGame = React.useCallback((id) => {
    setGameId(id);
    setPart("all");
    setQuery("");
    setSelKey("");
    setPlaying(false);
  }, []);

  React.useEffect(() => {
    const onOpen = (event) => {
      const id = event && event.detail && event.detail.gameId;
      load();
      if (id) pickGame(id);
      window.setTimeout(() => {
        const el = document.getElementById("mission-videos");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 90);
    };
    window.addEventListener("mv:open", onOpen);
    return () => window.removeEventListener("mv:open", onOpen);
  }, [load, pickGame]);

  const q = mvNorm(query.trim());
  const parts = MV_PART_ORDER.filter((p) => missions.some((m) => m.part === p));
  const list = missions.filter((m) =>
    (part === "all" || m.part === part) &&
    (!q || mvNorm([m.name, m.who, m.area, m.label, m.description].filter(Boolean).join(" ")).includes(q))
  );
  const found = list.findIndex((m) => mvKey(m) === selKey);
  const index = found >= 0 ? found : 0;
  const selected = list.length ? list[index] : null;

  /* Mantém a missão ativa visível dentro da lista rolável (desktop). */
  React.useEffect(() => {
    const box = listRef.current;
    if (!box || box.scrollHeight <= box.clientHeight + 2) return;
    const row = box.querySelector(".mv-row.on");
    const item = row && row.parentElement;
    if (!item) return;
    const top = item.offsetTop;
    const bottom = top + item.offsetHeight;
    if (top < box.scrollTop) box.scrollTop = top - 8;
    else if (bottom > box.scrollTop + box.clientHeight) box.scrollTop = bottom - box.clientHeight + 8;
  }, [selKey, gameId, part]);

  const choose = (mission, { autoplay = true, scroll = true } = {}) => {
    if (!mission) return;
    setSelKey(mvKey(mission));
    setPlaying(Boolean(autoplay && mission.video));
    if (scroll && window.innerWidth < 941 && stageRef.current) stageRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const step = (delta) => {
    if (!list.length) return;
    const next = list[Math.min(list.length - 1, Math.max(0, index + delta))];
    choose(next, { autoplay: playing, scroll: false });
  };

  const total = games.reduce((sum, g) => sum + (g.total || 0), 0);
  const withVideo = games.reduce((sum, g) => sum + (g.withVideo || 0), 0);

  return (
    <section id="mission-videos" ref={sectionRef} className="dossier-section dossier-shell mv-section">
      <div className="wrap">
        <DossierSectionHead
          eyebrow="Gameplay sem comentários"
          title="Todas as missões, uma por uma"
          accent="var(--money)"
          right={data ? `${total} missões · ${withVideo} vídeos · ${games.length} jogos` : "Passo a passo em vídeo, jogo por jogo"}
        />

        <div className="card mv-intro">
          <Corners />
          <p>
            Escolha o jogo e assista a cada missão na ordem da campanha, com o vídeo tocando aqui mesmo. São gravações de passo a passo sem narração, principalmente do canal GTA Series Videos, com a descrição de cada missão ao lado. Missões paralelas, contatos e assaltos ficam em abas próprias. GTA VI entra aqui quando o jogo for lançado.
          </p>
        </div>

        {status !== "ok" && (
          <div className="mv-state">
            {status === "error" ? (
              <>
                A lista de missões não carregou agora.
                <button type="button" className="vi-btn" onClick={load}>Tentar de novo</button>
              </>
            ) : (
              <>Carregando as missões…</>
            )}
          </div>
        )}

        {status === "ok" && game && (
          <>
            <div className="mv-games" role="tablist" aria-label="Escolha o jogo">
              {games.map((g) => {
                const cover = mvCoverOf(g.id);
                const on = g.id === game.id;
                return (
                  <button key={g.id} type="button" role="tab" aria-selected={on} className={`mv-game ${on ? "on" : ""}`} onClick={() => pickGame(g.id)}>
                    <span className="mv-game-cover">{cover ? <img src={cover} alt="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /> : null}</span>
                    <span className="mv-game-text">
                      <strong>{g.name}</strong>
                      <small>{g.total} missões</small>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mv-layout">
              <div className="mv-stage" ref={stageRef}>
                <MissionVideoPlayer
                  game={game}
                  mission={selected}
                  playing={playing}
                  onPlay={() => setPlaying(true)}
                  onPrev={() => step(-1)}
                  onNext={() => step(1)}
                  position={list.length ? index + 1 : 0}
                  count={list.length}
                />
              </div>

              <div className="mv-browser">
                <div className="mv-toolbar">
                  {parts.length > 1 && (
                    <div className="mv-parts" role="tablist" aria-label="Tipo de missão">
                      <button type="button" role="tab" aria-selected={part === "all"} className={part === "all" ? "on" : ""} onClick={() => { setPart("all"); setSelKey(""); }}>
                        Todas <b>{missions.length}</b>
                      </button>
                      {parts.map((p) => (
                        <button key={p} type="button" role="tab" aria-selected={part === p} className={part === p ? "on" : ""} onClick={() => { setPart(p); setSelKey(""); }}>
                          <MvPartLabel part={p} /> <b>{missions.filter((m) => m.part === p).length}</b>
                        </button>
                      ))}
                    </div>
                  )}
                  <label className="mv-search">
                    <span className="sr-only">Buscar missão</span>
                    <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filtrar por missão, contato ou lugar…" />
                  </label>
                </div>

                {list.length ? (
                  <ol className="mv-list" ref={listRef}>
                    {list.map((m) => {
                      const on = selected && mvKey(m) === mvKey(selected);
                      const thumb = mvThumb(m);
                      const meta = mvMeta(m);
                      return (
                        <li key={mvKey(m)}>
                          <button type="button" className={`mv-row ${on ? "on" : ""} ${m.video ? "" : "no-video"}`} onClick={() => choose(m)} aria-current={on ? "true" : undefined}>
                            <span className="mv-row-thumb">
                              {thumb ? <img src={thumb} alt="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /> : <span className="mv-row-icon" aria-hidden="true">▶</span>}
                              {m.video && m.video.secs ? <em>{mvDuration(m.video.secs)}</em> : null}
                            </span>
                            <span className="mv-row-text">
                              <span className="mv-row-n">
                                {part === "all" && m.part !== "story" ? <><MvPartLabel part={m.part} /> · </> : null}#{m.n}
                              </span>
                              <strong>{m.name}</strong>
                              {meta && <small>{meta}</small>}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                ) : (
                  <p className="mv-empty">Nenhuma missão com esse filtro.</p>
                )}
              </div>
            </div>

            <p className="mv-note">
              {data.note}{" "}
              {game.wiki && <a href={game.wiki} target="_blank" rel="noreferrer">Lista completa no GTA Wiki</a>}
            </p>
          </>
        )}
      </div>
    </section>
  );
};

Object.assign(window, { MissionVideosSection });
