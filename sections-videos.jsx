/* ============ VÍDEOS DO DOSSIÊ (id="videos") ============
 * As séries em vídeo feitas para o site e para as redes: uma série por jogo
 * (história, bastidores, mistérios, easter eggs, garagem, arsenal, rádios,
 * códigos, elenco…), cada jogo com a sua identidade — e, quando existe, o
 * episódio completo em 16:9 feito para o YouTube.
 * Os arquivos ficam no GitHub Pages (repositório gta-videos); a lista vem de
 * indice.json, baixada só quando a seção se aproxima da tela.
 */
const DV_BASE = "https://changzaoo.github.io/gta-videos/";
const dvTempo = (s) => {
  const t = Math.max(0, Math.round(Number(s) || 0));
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
};

const useDossierVideos = (ref) => {
  const [state, setState] = React.useState({ status: "idle", data: null });
  const started = React.useRef(false);
  const load = React.useCallback(() => {
    if (started.current) return;
    started.current = true;
    setState({ status: "loading", data: null });
    fetch(DV_BASE + "indice.json", { cache: "no-cache" })
      .then((r) => { if (!r || !r.ok) throw new Error("HTTP"); return r.json(); })
      .then((data) => setState({ status: "ok", data }))
      .catch(() => { started.current = false; setState({ status: "error", data: null }); });
  }, []);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof window.IntersectionObserver !== "function") { load(); return undefined; }
    const io = new window.IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { io.disconnect(); load(); }
    }, { rootMargin: "1200px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [load]);
  return [state, load];
};

/* Player vertical em tela cheia, estilo reels: anterior/próximo, avança sozinho. */
const DvReels = ({ game, index, onClose, onIndex }) => {
  const videoRef = React.useRef(null);
  const v = game.videos[index];
  const ir = (d) => { const n = index + d; if (n >= 0 && n < game.videos.length) onIndex(n); };
  React.useEffect(() => {
    const k = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" || e.key === "ArrowDown") ir(1);
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") ir(-1);
    };
    window.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = prev; };
  });
  React.useEffect(() => {
    const el = videoRef.current;
    if (el) { el.currentTime = 0; const p = el.play(); if (p && p.catch) p.catch(() => {}); }
  }, [index]);
  const toque = React.useRef(null);
  return (
    <div className="dv-reels" data-gta={game.id} role="dialog" aria-modal="true" aria-label={`${game.curto} · ${v.serie}`}
      style={{ "--dv-ac": game.cor, "--dv-ac2": game.cor2 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      onTouchStart={(e) => { toque.current = e.touches[0].clientY; }}
      onTouchEnd={(e) => { if (toque.current == null) return; const d = e.changedTouches[0].clientY - toque.current; toque.current = null; if (Math.abs(d) > 70) ir(d < 0 ? 1 : -1); }}>
      <div className="dv-reels-frame">
        <video ref={videoRef} key={v.src} src={DV_BASE + v.src} poster={DV_BASE + v.capa} controls playsInline autoPlay
          onEnded={() => ir(1)} />
        <div className="dv-reels-meta">
          <small>{game.curto} · parte {v.n} de {game.total}</small>
          <strong>{v.serie}</strong>
          <span>{v.titulo}</span>
        </div>
      </div>
      <button type="button" className="dv-reels-x" onClick={onClose} aria-label="Fechar">×</button>
      <button type="button" className="dv-reels-nav dv-reels-prev" disabled={index === 0} onClick={() => ir(-1)} aria-label="Vídeo anterior">‹</button>
      <button type="button" className="dv-reels-nav dv-reels-next" disabled={index === game.videos.length - 1} onClick={() => ir(1)} aria-label="Próximo vídeo">›</button>
    </div>
  );
};

const DvEpisodio = ({ game }) => {
  const ref = React.useRef(null);
  const ep = game.episodio;
  if (!ep) return null;
  const pular = (t) => { const el = ref.current; if (!el) return; el.currentTime = t; const p = el.play(); if (p && p.catch) p.catch(() => {}); };
  return (
    <div className="card dv-episodio">
      <Corners />
      <div className="dv-ep-player">
        <video ref={ref} src={DV_BASE + ep.src} poster={DV_BASE + ep.capa} controls playsInline preload="none" />
      </div>
      <div className="dv-ep-info">
        <small>Episódio completo · 16:9 · {dvTempo(ep.dur)}</small>
        <h3>{game.jogo} — O Arquivo Completo</h3>
        {ep.capitulos && ep.capitulos.length > 0 && (
          <ol className="dv-ep-caps">
            {ep.capitulos.map((c) => (
              <li key={c.t}><button type="button" onClick={() => pular(c.t)}><b>{dvTempo(c.t)}</b> {c.nome}</button></li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

const VideosSection = () => {
  const sectionRef = React.useRef(null);
  const [{ status, data }, load] = useDossierVideos(sectionRef);
  const [gameId, setGameId] = React.useState("");
  const [aberto, setAberto] = React.useState(null);
  const jogos = data && Array.isArray(data.jogos) ? data.jogos.filter((j) => (j.videos && j.videos.length) || j.episodio) : [];
  const game = jogos.find((j) => j.id === gameId) || jogos.find((j) => j.id === "gta6") || jogos[0] || null;
  const total = jogos.reduce((s, j) => s + (j.videos ? j.videos.length : 0), 0);
  const eps = jogos.filter((j) => j.episodio).length;

  return (
    <section id="videos" ref={sectionRef} data-gta={(game && game.id) || undefined} className="dossier-section dossier-shell dv-section gta-secao">
      <div className="wrap">
        <DossierSectionHead
          eyebrow="Séries originais · vertical e 16:9"
          title="Vídeos"
          accent="var(--vi-gold)"
          right={data ? `${total} vídeos · ${jogos.length} jogos${eps ? ` · ${eps} episódios` : ""}` : "Uma série para cada GTA"}
        />
        <div className="card dv-intro">
          <Corners />
          <p>
            Cada jogo ganhou a sua série — a mesma estrutura de história em sete capítulos, do contexto ao legado, e episódios sobre bastidores, mistérios, easter eggs, veículos, armas, rádios, códigos e personagens. Cada GTA tem a sua trilha, as suas cores e o seu jeito de contar. Toque num vídeo para assistir em tela cheia; deslize para o próximo.
          </p>
        </div>

        {status !== "ok" && (
          <div className="mv-state">
            {status === "error" ? (<>Os vídeos não carregaram agora.<button type="button" className="vi-btn" onClick={load}>Tentar de novo</button></>) : (<>Carregando os vídeos…</>)}
          </div>
        )}

        {status === "ok" && game && (
          <>
            <div className="mv-games dv-games" role="tablist" aria-label="Escolha o jogo">
              {jogos.map((j) => {
                const on = j.id === game.id;
                return (
                  <button key={j.id} type="button" role="tab" aria-selected={on} data-gta={j.id} className={`mv-game dv-game ${on ? "on" : ""}`}
                    style={{ "--dv-ac": j.cor }} onClick={() => setGameId(j.id)}>
                    <span className="mv-game-cover">{j.videos && j.videos[0] ? <img src={DV_BASE + j.videos[0].capa} alt="" loading="lazy" /> : null}</span>
                    <span className="mv-game-text">
                      <strong>{j.curto}</strong>
                      <small>{j.videos.length} vídeos{j.episodio ? " · 16:9" : ""}</small>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="gta-area" data-gta={game.id}>
            <DvEpisodio game={game} />

            <div className="dv-grid" style={{ "--dv-ac": game.cor, "--dv-ac2": game.cor2 }}>
              {game.videos.map((v, i) => (
                <button key={v.id} type="button" className="dv-card" onClick={() => setAberto(i)}>
                  <span className="dv-card-img"><img src={DV_BASE + v.capa} alt="" loading="lazy" /><i aria-hidden="true">▶</i><em>{dvTempo(v.dur)}</em></span>
                  <span className="dv-card-txt">
                    <small>{String(v.n).padStart(2, "0")} · {v.serie}</small>
                    <strong>{v.titulo}</strong>
                  </span>
                </button>
              ))}
            </div>
            </div>
          </>
        )}
      </div>
      {game && aberto != null && game.videos[aberto] && (
        <DvReels game={game} index={aberto} onIndex={setAberto} onClose={() => setAberto(null)} />
      )}
    </section>
  );
};

Object.assign(window, { VideosSection });
