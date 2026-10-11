/* ============ VÍDEOS DO DOSSIÊ (id="videos") ============
 * As séries em vídeo feitas para o site e para as redes: uma série por jogo
 * (história, bastidores, mistérios, easter eggs, garagem, arsenal, rádios,
 * códigos, elenco…), cada jogo com a sua identidade — e, quando existe, o
 * episódio completo em 16:9 feito para o YouTube.
 * Os arquivos ficam no GitHub Pages (repositório gta-videos); a lista vem de
 * indice.json, baixada só quando a seção se aproxima da tela.
 */
const DV_BASE = (typeof window !== "undefined" && window.__DV_BASE) || "https://changzaoo.github.io/gta-videos/";
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

/* ---------- DvPlayer: o player do site ----------
 * Controles próprios (no tema do jogo), vídeo em HLS criptografado (pedaços
 * de 4 s com chave AES-128) tocado pelo hls.js — carregado só quando um vídeo
 * é aberto. Sem barra nativa, sem botão de baixar, sem menu do clique direito
 * e sem picture-in-picture: o arquivo não fica a um clique de distância. */
let dvHlsPromessa = null;
const dvCarregarHls = () => {
  if (window.Hls) return Promise.resolve(window.Hls);
  if (!dvHlsPromessa) {
    dvHlsPromessa = new Promise((ok, falha) => {
      const sc = document.createElement("script");
      sc.src = "vendor/hls.min.js";
      sc.async = true;
      sc.onload = () => (window.Hls ? ok(window.Hls) : falha(new Error("hls")));
      sc.onerror = () => { dvHlsPromessa = null; falha(new Error("hls")); };
      document.head.appendChild(sc);
    });
  }
  return dvHlsPromessa;
};
const DV_VELOCIDADES = [1, 1.25, 1.5];
const DvIcone = ({ n }) => {
  const p = {
    play: <path d="M8 5v14l11-7z" />,
    pausa: <path d="M7 5h4v14H7zM13 5h4v14h-4z" />,
    som: <path d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z" />,
    mudo: <path d="M4 9v6h4l5 4V5L8 9H4zm15.6 3 2.2-2.2-1.4-1.4-2.2 2.2-2.2-2.2-1.4 1.4 2.2 2.2-2.2 2.2 1.4 1.4 2.2-2.2 2.2 2.2 1.4-1.4z" />,
    cheia: <path d="M4 4h6v2H6v4H4zm10 0h6v6h-2V6h-4zM4 14h2v4h4v2H4zm14 0h2v6h-6v-2h4z" />,
    sair: <path d="M8 4h2v6H4V8h4zm6 0h2v4h4v2h-6zM4 14h6v6H8v-4H4zm10 0h6v2h-4v4h-2z" />,
    voltar: <path d="M12 5V2L7 6l5 4V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z" />,
    avancar: <path d="M12 5V2l5 4-5 4V7a5 5 0 1 0 5 5h2a7 7 0 1 1-7-7z" />
  }[n];
  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">{p}</svg>;
};

const DvPlayer = ({ item, vertical = false, autoPlay = false, onEnded, capitulos, apiRef, titulo }) => {
  const caixa = React.useRef(null);
  const video = React.useRef(null);
  const barra = React.useRef(null);
  const ocultar = React.useRef(0);
  const toques = React.useRef({ t: 0, x: 0 });
  const fimRef = React.useRef(onEnded);
  fimRef.current = onEnded;
  const [st, setSt] = React.useState({ tocando: false, t: 0, dur: Number(item && item.dur) || 0, buf: 0, carregando: false, mudo: false, vol: 1, vel: 1, cheia: false, ui: true, erro: false, iniciou: false, salto: 0 });
  const set = React.useCallback((o) => setSt((a) => ({ ...a, ...o })), []);
  const fonte = item ? (item.hls || item.src || "") : "";

  /* liga a fonte: HLS nativo (Safari/iOS) ou hls.js; MP4 só como reserva */
  React.useEffect(() => {
    const v = video.current;
    if (!v || !item) return undefined;
    let hls = null, vivo = true;
    set({ t: 0, buf: 0, erro: false, iniciou: false, dur: Number(item.dur) || 0 });
    const tocar = () => { if (!autoPlay) return; const p = v.play(); if (p && p.catch) p.catch(() => {}); };
    if (item.hls) {
      const url = DV_BASE + item.hls;
      if (v.canPlayType("application/vnd.apple.mpegurl")) { v.src = url; tocar(); }
      else {
        set({ carregando: true });
        dvCarregarHls().then((Hls) => {
          if (!vivo) return;
          if (!Hls.isSupported()) { set({ erro: true, carregando: false }); return; }
          hls = new Hls({ enableWorker: false, maxBufferLength: 20, capLevelToPlayerSize: true });
          hls.loadSource(url);
          hls.attachMedia(v);
          hls.on(Hls.Events.MANIFEST_PARSED, () => { set({ carregando: false }); tocar(); });
          hls.on(Hls.Events.ERROR, (_e, d) => {
            if (!d || !d.fatal) return;
            if (d.type === Hls.ErrorTypes.NETWORK_ERROR) hls.startLoad();
            else if (d.type === Hls.ErrorTypes.MEDIA_ERROR) hls.recoverMediaError();
            else set({ erro: true });
          });
        }).catch(() => vivo && set({ erro: true, carregando: false }));
      }
    } else if (item.src) { v.src = DV_BASE + item.src; tocar(); }
    return () => {
      vivo = false;
      if (hls) hls.destroy();
      try { v.pause(); v.removeAttribute("src"); v.load(); } catch (e) { /* já descartado */ }
    };
  }, [fonte]);

  /* eventos do vídeo → estado da interface */
  React.useEffect(() => {
    const v = video.current;
    if (!v) return undefined;
    const ev = {
      play: () => set({ tocando: true, iniciou: true }),
      pause: () => set({ tocando: false, ui: true }),
      timeupdate: () => set({ t: v.currentTime }),
      durationchange: () => { if (isFinite(v.duration) && v.duration > 0) set({ dur: v.duration }); },
      progress: () => { try { const b = v.buffered; set({ buf: b.length ? b.end(b.length - 1) : 0 }); } catch (e) { /* sem buffer */ } },
      waiting: () => set({ carregando: true }),
      playing: () => set({ carregando: false }),
      canplay: () => set({ carregando: false }),
      volumechange: () => set({ mudo: v.muted, vol: v.volume }),
      ratechange: () => set({ vel: v.playbackRate }),
      ended: () => { set({ tocando: false, ui: true }); if (fimRef.current) fimRef.current(); }
    };
    Object.keys(ev).forEach((k) => v.addEventListener(k, ev[k]));
    return () => Object.keys(ev).forEach((k) => v.removeEventListener(k, ev[k]));
  }, []);

  /* tela cheia acompanha o sistema (Esc, gesto do celular) */
  React.useEffect(() => {
    const f = () => set({ cheia: document.fullscreenElement === caixa.current || document.webkitFullscreenElement === caixa.current });
    document.addEventListener("fullscreenchange", f);
    document.addEventListener("webkitfullscreenchange", f);
    return () => { document.removeEventListener("fullscreenchange", f); document.removeEventListener("webkitfullscreenchange", f); };
  }, []);

  const mostrar = React.useCallback(() => {
    set({ ui: true });
    window.clearTimeout(ocultar.current);
    ocultar.current = window.setTimeout(() => { const v = video.current; if (v && !v.paused) set({ ui: false }); }, 2600);
  }, [set]);
  React.useEffect(() => () => window.clearTimeout(ocultar.current), []);

  const alternar = () => { const v = video.current; if (!v) return; if (v.paused) { const p = v.play(); if (p && p.catch) p.catch(() => {}); } else v.pause(); mostrar(); };
  const irPara = (t) => { const v = video.current; if (!v) return; const d = st.dur || v.duration || 0; v.currentTime = Math.max(0, d ? Math.min(d - 0.2, t) : t); set({ t: v.currentTime }); mostrar(); };
  const pular = (s) => { irPara((video.current ? video.current.currentTime : 0) + s); set({ salto: s }); window.setTimeout(() => set({ salto: 0 }), 500); };
  const mudo = () => { const v = video.current; if (v) v.muted = !v.muted; mostrar(); };
  const volume = (x) => { const v = video.current; if (!v) return; v.volume = x; v.muted = x === 0; };
  const velocidade = () => { const v = video.current; if (!v) return; const i = DV_VELOCIDADES.indexOf(v.playbackRate); v.playbackRate = DV_VELOCIDADES[(i + 1) % DV_VELOCIDADES.length]; mostrar(); };
  const telaCheia = () => {
    const c = caixa.current, v = video.current;
    if (document.fullscreenElement || document.webkitFullscreenElement) { (document.exitFullscreen || document.webkitExitFullscreen).call(document); return; }
    if (c && c.requestFullscreen) c.requestFullscreen().catch(() => {});
    else if (c && c.webkitRequestFullscreen) c.webkitRequestFullscreen();
    else if (v && v.webkitEnterFullscreen) v.webkitEnterFullscreen();
  };
  if (apiRef) apiRef.current = { irPara: (t) => { irPara(t); const v = video.current; if (v && v.paused) { const p = v.play(); if (p && p.catch) p.catch(() => {}); } } };

  /* barra de progresso: clique, arrasto e teclado */
  const razao = (e) => { const r = barra.current.getBoundingClientRect(); return Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)); };
  const arrastar = (e) => {
    if (!st.dur) return;
    e.preventDefault();
    const alvo = e.currentTarget;
    try { alvo.setPointerCapture(e.pointerId); } catch (x) { /* sem captura */ }
    irPara(razao(e) * st.dur);
    const mover = (ev) => irPara(razao(ev) * st.dur);
    const soltar = () => { alvo.removeEventListener("pointermove", mover); alvo.removeEventListener("pointerup", soltar); alvo.removeEventListener("pointercancel", soltar); };
    alvo.addEventListener("pointermove", mover);
    alvo.addEventListener("pointerup", soltar);
    alvo.addEventListener("pointercancel", soltar);
  };
  const teclas = (e) => {
    const k = e.key.toLowerCase();
    if (k === " " || k === "k") { e.preventDefault(); alternar(); }
    else if (k === "arrowright" || k === "l") { e.preventDefault(); pular(k === "l" ? 10 : 5); }
    else if (k === "arrowleft" || k === "j") { e.preventDefault(); pular(k === "j" ? -10 : -5); }
    else if (k === "m") mudo();
    else if (k === "f") telaCheia();
  };
  /* toque: um toque mostra/esconde e toca/pausa; dois toques nas laterais pulam 10 s */
  const tocou = (e) => {
    if (e.target.closest && e.target.closest(".dvp-barra-baixo, .dvp-centro")) return;
    const agora = Date.now();
    const r = caixa.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    if (e.pointerType === "touch") {
      if (agora - toques.current.t < 300 && Math.abs(x - toques.current.x) < 0.25 && (x < 0.35 || x > 0.65)) { pular(x < 0.5 ? -10 : 10); toques.current.t = 0; return; }
      toques.current = { t: agora, x };
      if (!st.ui) { mostrar(); return; }
    }
    alternar();
  };

  const pct = st.dur ? (st.t / st.dur) * 100 : 0;
  const bufPct = st.dur ? Math.min(100, (st.buf / st.dur) * 100) : 0;
  const ui = st.ui || !st.tocando;
  return (
    <div ref={caixa} className={`dvp ${vertical ? "dvp--v" : "dvp--h"} ${ui ? "dvp--ui" : ""} ${st.cheia ? "dvp--cheia" : ""} ${st.iniciou ? "dvp--iniciou" : ""}`}
      tabIndex={0} role="region" aria-label={titulo ? `Player: ${titulo}` : "Player de vídeo"}
      onKeyDown={teclas} onPointerMove={mostrar} onPointerUp={tocou}
      onContextMenu={(e) => e.preventDefault()}>
      <video ref={video} className="dvp-video" poster={item && item.capa ? DV_BASE + item.capa : undefined} playsInline preload="metadata"
        controlsList="nodownload noremoteplayback noplaybackrate" disablePictureInPicture disableRemotePlayback
        draggable={false} onContextMenu={(e) => e.preventDefault()} />
      <div className="dvp-veu" aria-hidden="true" />
      {st.carregando && <span className="dvp-spinner" aria-label="Carregando" />}
      {st.salto !== 0 && <span className={`dvp-salto ${st.salto < 0 ? "esq" : "dir"}`} aria-hidden="true">{st.salto > 0 ? "+" : "−"}{Math.abs(st.salto)}s</span>}
      {st.erro && <p className="dvp-erro">Não foi possível carregar o vídeo agora.</p>}
      <button type="button" className={`dvp-centro ${st.tocando ? "tocando" : ""}`} onClick={alternar} aria-label={st.tocando ? "Pausar" : "Assistir"}>
        <DvIcone n={st.tocando ? "pausa" : "play"} />
      </button>
      <div className="dvp-barra-baixo" onPointerUp={(e) => e.stopPropagation()}>
        <div className="dvp-trilho" ref={barra} role="slider" tabIndex={0} aria-label="Posição do vídeo"
          aria-valuemin={0} aria-valuemax={Math.round(st.dur)} aria-valuenow={Math.round(st.t)} aria-valuetext={`${dvTempo(st.t)} de ${dvTempo(st.dur)}`}
          onPointerDown={arrastar} onKeyDown={teclas}>
          <span className="dvp-buf" style={{ width: bufPct + "%" }} />
          <span className="dvp-feito" style={{ width: pct + "%" }} />
          {st.dur > 0 && (capitulos || []).filter((c) => c.t > 0).map((c) => (
            <i key={c.t} className="dvp-marca" style={{ left: (c.t / st.dur) * 100 + "%" }} title={c.nome} />
          ))}
          <span className="dvp-pino" style={{ left: pct + "%" }} />
        </div>
        <div className="dvp-botoes">
          <button type="button" onClick={alternar} aria-label={st.tocando ? "Pausar" : "Tocar"}><DvIcone n={st.tocando ? "pausa" : "play"} /></button>
          <button type="button" className="dvp-so-pc" onClick={() => pular(-10)} aria-label="Voltar 10 segundos"><DvIcone n="voltar" /></button>
          <button type="button" className="dvp-so-pc" onClick={() => pular(10)} aria-label="Avançar 10 segundos"><DvIcone n="avancar" /></button>
          <span className="dvp-tempo">{dvTempo(st.t)} <i>/</i> {dvTempo(st.dur)}</span>
          <span className="dvp-espaco" />
          <button type="button" onClick={mudo} aria-label={st.mudo ? "Ativar som" : "Silenciar"}><DvIcone n={st.mudo || st.vol === 0 ? "mudo" : "som"} /></button>
          <input className="dvp-vol dvp-so-pc" type="range" min="0" max="1" step="0.05" value={st.mudo ? 0 : st.vol}
            onChange={(e) => volume(Number(e.target.value))} aria-label="Volume" />
          <button type="button" className="dvp-vel" onClick={velocidade} aria-label="Velocidade">{st.vel}×</button>
          <button type="button" onClick={telaCheia} aria-label={st.cheia ? "Sair da tela cheia" : "Tela cheia"}><DvIcone n={st.cheia ? "sair" : "cheia"} /></button>
        </div>
      </div>
    </div>
  );
};

/* Player vertical em tela cheia, estilo reels: anterior/próximo, avança sozinho. */
const DvReels = ({ game, index, onClose, onIndex }) => {
  const v = game.videos[index];
  const ir = (d) => { const n = index + d; if (n >= 0 && n < game.videos.length) onIndex(n); };
  React.useEffect(() => {
    const k = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowDown" || e.key === "PageDown") ir(1);
      else if (e.key === "ArrowUp" || e.key === "PageUp") ir(-1);
    };
    window.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = prev; };
  });
  const toque = React.useRef(null);
  return (
    <div className="dv-reels" data-gta={game.id} role="dialog" aria-modal="true" aria-label={`${game.curto} · ${v.serie}`}
      style={{ "--dv-ac": game.cor, "--dv-ac2": game.cor2 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      onTouchStart={(e) => { toque.current = e.touches[0].clientY; }}
      onTouchEnd={(e) => { if (toque.current == null) return; const d = e.changedTouches[0].clientY - toque.current; toque.current = null; if (Math.abs(d) > 90) ir(d < 0 ? 1 : -1); }}>
      <div className="dv-reels-frame">
        <DvPlayer key={v.id} item={v} vertical autoPlay onEnded={() => ir(1)} titulo={`${game.curto} · ${v.serie}`} />
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
  const api = React.useRef(null);
  const ep = game.episodio;
  if (!ep) return null;
  const pular = (t) => { if (api.current) api.current.irPara(t); };
  return (
    <div className="card dv-episodio">
      <Corners />
      <div className="dv-ep-player">
        <DvPlayer item={ep} capitulos={ep.capitulos} apiRef={api} titulo={`${game.jogo} — episódio completo`} />
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

Object.assign(window, { VideosSection, DvPlayer });
