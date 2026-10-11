/* ============ A SAGA, JOGO A JOGO (id="saga") ============
 * A página principal percorre a série em ordem de lançamento (window.SAGA,
 * data-saga.jsx). Cada jogo é um capítulo <article id="jogo-<tema>">:
 *   1. a cena de abertura (SagaCena, outro arquivo — só é chamada se existir);
 *   2. o cabeçalho do capítulo (título na fonte do jogo, ano, plataforma…);
 *   3. as sub-seções do jogo (história, bastidores, missões, veículos, armas,
 *      personagens, easter eggs, mistérios, códigos, rádios), cada uma com a
 *      sua âncora "jogo-<tema>-<slug>" e com os vídeos da série daquele jogo
 *      encaixados onde fazem sentido.
 * As sub-seções só são montadas quando o capítulo chega perto da tela
 * (IntersectionObserver) e live/missions.json + indice.json dos vídeos são
 * baixados uma vez só, quando o primeiro capítulo se aproxima.
 * Ao rolar, o site INTEIRO troca de tema: <html data-gta="<tema>"> e um fundo
 * fixo (.sg-fundos) que faz a transição entre as identidades dos jogos.
 * Nada de window/document fora de efeitos: a App também roda no prerender.
 * Nomes top-level prefixados com sg/Sg, exceto SagaSection (exportado).
 */

/* ---------- dados sob demanda (cache no módulo) ---------- */
const SG_MISSOES_URL = "live/missions.json";
const sgCache = { missoes: null, videos: null };
const sgPromessas = {};
const sgBaixar = (chave, url, tratar) => {
  if (sgPromessas[chave]) return sgPromessas[chave];
  sgPromessas[chave] = fetch(url, { cache: "no-cache" })
    .then((r) => { if (!r || !r.ok) throw new Error("HTTP"); return r.json(); })
    .then((d) => { sgCache[chave] = tratar ? tratar(d) : d; return sgCache[chave]; })
    /* falhou: libera para tentar de novo quando outro capítulo se aproximar */
    .catch(() => { sgPromessas[chave] = null; return null; });
  return sgPromessas[chave];
};
const sgCarregarTudo = () => Promise.all([
  /* descrições das missões vêm do GTA Wiki em inglês: __i18nLive traduz */
  sgBaixar("missoes", SG_MISSOES_URL, (d) => (window.__i18nLive ? window.__i18nLive(d) : d)),
  typeof DV_BASE !== "undefined" ? sgBaixar("videos", DV_BASE + "indice.json") : Promise.resolve(null)
]);

const useSgDados = (ativo) => {
  const [dados, setDados] = React.useState(() => ({ missoes: sgCache.missoes, videos: sgCache.videos }));
  React.useEffect(() => {
    if (!ativo || typeof fetch !== "function") return undefined;
    let vivo = true;
    sgCarregarTudo().then(() => { if (vivo) setDados({ missoes: sgCache.missoes, videos: sgCache.videos }); });
    return () => { vivo = false; };
  }, [ativo]);
  return dados;
};

/* O capítulo está a ~1500px da tela? (uma vez perto, fica montado) */
const useSgPerto = (ref, forcar) => {
  const [perto, setPerto] = React.useState(false);
  React.useEffect(() => {
    if (perto) return undefined;
    if (forcar) { setPerto(true); return undefined; }
    if (window.__PRERENDER) return undefined; /* prerender: só o cabeçalho */
    const el = ref.current;
    if (!el || typeof window.IntersectionObserver !== "function") { setPerto(true); return undefined; }
    const io = new window.IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { io.disconnect(); setPerto(true); }
    }, { rootMargin: "1500px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [perto, forcar]);
  return perto;
};

/* ---------- utilidades ---------- */
const sgLista = (nome) => (typeof window !== "undefined" && Array.isArray(window[nome]) ? window[nome] : []);
const sgArr = (v) => (Array.isArray(v) ? v : v ? [v] : []);
const sgTempo = (s) => {
  const t = Math.max(0, Math.round(Number(s) || 0));
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const ss = String(t % 60).padStart(2, "0");
  return h ? `${h}:${String(m).padStart(2, "0")}:${ss}` : `${m}:${ss}`;
};
const sgMesmoJogo = (a, b) => (typeof dzSameGame === "function" ? dzSameGame(a, b) : String(a).toLowerCase() === String(b).toLowerCase());
const sgPortal = (no) => (typeof ReactDOM !== "undefined" && ReactDOM.createPortal && typeof document !== "undefined" ? ReactDOM.createPortal(no, document.body) : no);

/* Onde cada vídeo da série entra no capítulo (id do vídeo → sub-seção). */
const SG_VIDEO_LUGAR = {
  historia: "historia", atualizacoes: "historia", "linha-do-tempo": "historia", leonida: "historia", mecanicas: "historia",
  bastidores: "bastidores", curiosidades: "bastidores",
  misterios: "misterios",
  "easter-eggs": "ovos", segredos: "ovos", conexoes: "ovos", crossovers: "ovos",
  garagem: "veiculos", "garagem-arsenal": "veiculos",
  arsenal: "armas",
  radios: "radios",
  codigos: "codigos",
  elenco: "personagens", personagens: "personagens"
};
const sgVideosPorLugar = (serie, temPersonagens) => {
  const out = {};
  if (!serie || !Array.isArray(serie.videos)) return out;
  const por = (k, v, i) => { (out[k] = out[k] || []).push({ v, i }); };
  serie.videos.forEach((v, i) => {
    let k = SG_VIDEO_LUGAR[v.id] || "historia";
    /* "personagens" sem fichas de personagens no site vai para a história */
    if (v.id === "personagens" && !temPersonagens) k = "historia";
    por(k, v, i);
    if (v.id === "garagem-arsenal") por("armas", v, i);
  });
  return out;
};

/* ---------- peças pequenas ---------- */
const SgChips = ({ itens, limite = 12 }) => {
  const lista = sgArr(itens).filter(Boolean).slice(0, limite);
  if (!lista.length) return null;
  return <div className="sg-chips">{lista.map((c, k) => <span key={`${c}-${k}`} className="sg-chip">{c}</span>)}</div>;
};

/* Pôster 9:16 de um vídeo da série: abre o player vertical naquele vídeo. */
const SgVideoCard = ({ item, onPlay, destaque }) => {
  const v = item.v;
  return (
    <button type="button" className={`sg-vcard${destaque ? " sg-vcard--destaque" : ""}`} onClick={() => onPlay(item.i)}>
      <span className="sg-vcard-img">
        <img src={DV_BASE + v.capa} alt="" loading="lazy" decoding="async" />
        <b className="sg-vcard-play"><i aria-hidden="true">▶</i> Assistir · {sgTempo(v.dur)}</b>
      </span>
      <span className="sg-vcard-txt">
        <small>{v.serie}</small>
        <strong>{v.titulo}</strong>
      </span>
    </button>
  );
};

const SgVideos = ({ itens, onPlay }) => {
  if (!itens || !itens.length) return null;
  return (
    <div className="sg-vfila" role="list">
      {itens.map((item) => <div role="listitem" key={item.v.id + "-" + item.i}><SgVideoCard item={item} onPlay={onPlay} /></div>)}
    </div>
  );
};

/* Sub-seção do capítulo, com a própria âncora. */
const SgBloco = ({ id, kicker, titulo, extra, children, className = "" }) => (
  <section id={id} className={`sg-bloco ${className}`}>
    <header className="sg-bloco-head">
      <div>
        {kicker && <span className="sg-bloco-kicker">{kicker}</span>}
        <h3 className="sg-bloco-titulo">{titulo}</h3>
      </div>
      {extra && <div className="sg-bloco-extra">{extra}</div>}
    </header>
    {children}
  </section>
);

/* "Ver mais": mostra os primeiros N e abre o resto. */
const SgMais = ({ total, limite, aberto, onToggle, rotulo = "itens" }) => {
  if (total <= limite) return null;
  return (
    <div className="sg-mais">
      <button type="button" className="vi-btn vi-btn--ghost vi-btn--sm" onClick={onToggle} aria-expanded={aberto}>
        {aberto ? <>Mostrar menos</> : <>Ver mais {total - limite} {rotulo}</>}
      </button>
    </div>
  );
};

/* ---------- player das missões (YouTube sem comentários) ---------- */
const SgPlayerMissao = ({ lista, index, onIndex, onClose }) => {
  const m = lista[index];
  const ir = (d) => { const n = index + d; if (n >= 0 && n < lista.length) onIndex(n); };
  React.useEffect(() => {
    const k = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") ir(1);
      else if (e.key === "ArrowLeft") ir(-1);
    };
    window.addEventListener("keydown", k);
    const antes = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = antes; };
  });
  if (!m || !m.video) return null;
  return sgPortal(
    <div className="sg-player" data-gta={m.tema} role="dialog" aria-modal="true" aria-label={m.name}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="sg-player-box">
        <div className="sg-player-tela">
          <iframe key={m.chave} src={`https://www.youtube-nocookie.com/embed/${m.video.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={m.video.vt || m.name} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
        </div>
        <div className="sg-player-info">
          <small>{m.jogo} · missão {m.n}{m.who ? ` · ${m.who}` : ""}</small>
          <strong>{m.name}</strong>
          {m.description && <p>{m.description}</p>}
          <span className="sg-player-cred">Gameplay sem comentários · {m.video.ch || "YouTube"}</span>
        </div>
        <div className="sg-player-nav">
          <button type="button" className="vi-btn vi-btn--ghost vi-btn--sm" disabled={index === 0} onClick={() => ir(-1)}>‹ Anterior</button>
          <span>{index + 1} / {lista.length}</span>
          <button type="button" className="vi-btn vi-btn--ghost vi-btn--sm" disabled={index === lista.length - 1} onClick={() => ir(1)}>Próxima ›</button>
        </div>
      </div>
      <button type="button" className="sg-player-x" onClick={onClose} aria-label="Fechar">×</button>
    </div>
  );
};

/* Fila de missões do live/missions.json */
const SG_MISSOES_LIMITE = 24;
const SgMissoes = ({ missoes, carregando }) => {
  const [todas, setTodas] = React.useState(false);
  const [tocando, setTocando] = React.useState(null);
  const comVideo = React.useMemo(() => missoes.filter((m) => m.video && m.video.id), [missoes]);
  if (!missoes.length) {
    return carregando ? <div className="sg-vazio">Carregando a lista de missões…</div> : null;
  }
  const visiveis = todas ? missoes : missoes.slice(0, SG_MISSOES_LIMITE);
  const varios = new Set(missoes.map((m) => m.jogo)).size > 1;
  return (
    <>
      <div className={`sg-mfila${todas ? " sg-mfila--grade" : ""}`}>
        {visiveis.map((m) => {
          const temVideo = m.video && m.video.id;
          const meta = [varios ? m.jogo : "", m.who, m.label].filter(Boolean).join(" · ");
          return (
            <button key={m.chave} type="button" className="sg-mis" disabled={!temVideo}
              onClick={() => temVideo && setTocando(comVideo.indexOf(m))}>
              <span className="sg-mis-img">
                {temVideo ? <img src={`https://i.ytimg.com/vi/${m.video.id}/mqdefault.jpg`} alt="" loading="lazy" decoding="async" /> : <em>sem vídeo</em>}
                {temVideo && m.video.secs ? <b>{sgTempo(m.video.secs)}</b> : null}
                {temVideo && <i aria-hidden="true">▶</i>}
              </span>
              <span className="sg-mis-txt">
                <small>{String(m.n).padStart(2, "0")}</small>
                <strong>{m.name}</strong>
                {meta && <span>{meta}</span>}
              </span>
            </button>
          );
        })}
      </div>
      <SgMais total={missoes.length} limite={SG_MISSOES_LIMITE} aberto={todas} onToggle={() => setTodas((v) => !v)} rotulo="missões" />
      {tocando != null && tocando >= 0 && comVideo[tocando] && (
        <SgPlayerMissao lista={comVideo} index={tocando} onIndex={setTocando} onClose={() => setTocando(null)} />
      )}
    </>
  );
};

/* Grade com "ver mais" (easter eggs, códigos…) */
const useSgMais = () => {
  const [aberto, setAberto] = React.useState(false);
  return [aberto, () => setAberto((v) => !v)];
};

const SgOvos = ({ ovos }) => {
  const [aberto, toggle] = useSgMais();
  if (!ovos.length || typeof EggCard === "undefined") return null;
  const lista = aberto ? ovos : ovos.slice(0, 6);
  return (
    <>
      <div className="sg-grade sg-grade--3">{lista.map((egg) => <EggCard key={egg.id} egg={egg} />)}</div>
      <SgMais total={ovos.length} limite={6} aberto={aberto} onToggle={toggle} rotulo="easter eggs" />
    </>
  );
};

const SgCodigos = ({ codigos }) => {
  const [aberto, toggle] = useSgMais();
  if (!codigos.length) return null;
  const lista = aberto ? codigos : codigos.slice(0, 12);
  return (
    <>
      <div className="sg-tabela-wrap">
        <table className="sg-tabela">
          <thead><tr><th scope="col">Código</th><th scope="col">Efeito</th><th scope="col">PlayStation</th></tr></thead>
          <tbody>
            {lista.map((c) => (
              <tr key={c.id}>
                <th scope="row" data-rotulo="Código"><code>{c.code}</code></th>
                <td data-rotulo="Efeito">{c.title}</td>
                <td data-rotulo="PlayStation" className="sg-pad">{c.ps || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SgMais total={codigos.length} limite={12} aberto={aberto} onToggle={toggle} rotulo="códigos" />
    </>
  );
};

const SgRadios = ({ radios }) => {
  if (!radios.length) return null;
  return (
    <ul className="sg-radios">
      {radios.map((r) => (
        <li key={r.id}>
          <strong>{r.name}</strong>
          {r.genre && <span className="sg-radio-gen">{r.genre}</span>}
          {r.dj && <span className="sg-radio-dj">Apresentação: {r.dj}</span>}
        </li>
      ))}
    </ul>
  );
};

/* ---------- cabeçalho do capítulo ---------- */
const SgCabecalho = ({ cap, game, index, total, onOpenDossier, indice }) => (
  <header className="sg-head">
    <div className="sg-head-txt">
      <div className="sg-head-num">
        <span>Capítulo {String(index + 1).padStart(2, "0")}</span>
        <i aria-hidden="true" />
        <span>{String(total).padStart(2, "0")}</span>
      </div>
      <h2 className="sg-head-titulo">{game ? game.title : cap.tema}</h2>
      <dl className="sg-head-fatos">
        <div><dt>Ano</dt><dd>{cap.ano}</dd></div>
        <div><dt>Plataforma</dt><dd>{cap.plataforma}</dd></div>
        {cap.cidade && <div><dt>Cidade</dt><dd>{cap.cidade}</dd></div>}
        {game && game.protagonist && <div><dt>Protagonista</dt><dd>{game.protagonist}</dd></div>}
      </dl>
      {game && game.summary && <p className="sg-head-sum">{game.summary}</p>}
      <div className="sg-head-acoes">
        {game && <button type="button" className="vi-btn" onClick={() => onOpenDossier({ type: "game", item: game })}>Abrir dossiê completo ›</button>}
      </div>
      {indice && indice.length > 1 && (
        <nav className="sg-indice" aria-label="Nesta ficha">
          {indice.map((b) => <a key={b.slug} href={`#jogo-${cap.tema}-${b.slug}`}>{b.rotulo}</a>)}
        </nav>
      )}
    </div>
    <div className="sg-head-capa">
      {game && game.media && game.media.src && typeof OfficialMedia !== "undefined"
        ? <OfficialMedia media={game.media} className="sg-capa-media" zoom />
        : (typeof DzFallback !== "undefined" ? <DzFallback label={game ? game.title : cap.tema} icon="file" /> : null)}
      <span className="sg-head-ano" aria-hidden="true">{cap.ano}</span>
    </div>
  </header>
);

/* ---------- um capítulo (um jogo) ---------- */
const SgCapitulo = React.memo(({ cap, index, total, onOpenDossier, forcar }) => {
  const ref = React.useRef(null);
  const perto = useSgPerto(ref, forcar);
  const dados = useSgDados(perto);
  const [reels, setReels] = React.useState(null);

  const games = typeof gamesData !== "undefined" ? gamesData : [];
  const game = games.find((g) => g.id === cap.jogo) || null;
  const ids = [cap.jogo].concat(sgArr(cap.extra));
  const extras = ids.slice(1).map((id) => games.find((g) => g.id === id)).filter(Boolean);
  const tema = cap.tema;
  const SagaCenaC = typeof SagaCena !== "undefined" ? SagaCena : null;

  /* Tudo o que o capítulo mostra (só calculado quando ele está perto). */
  const c = React.useMemo(() => {
    if (!perto) return null;
    const deep = game && typeof deepDossierData !== "undefined" ? deepDossierData[game.id] || null : null;
    const porJogo = (lista) => lista.filter((e) => ids.indexOf(e.gameId) !== -1);
    const missaoDz = porJogo(sgLista("missionDossierData"));
    const veiculos = porJogo(sgLista("vehicleDossierData"));
    const armas = porJogo(sgLista("weaponDossierData"));
    const chars = typeof charactersData !== "undefined" && cap.titulos && cap.titulos.length
      ? charactersData.filter((ch) => sgArr(ch.games).some((n) => cap.titulos.some((t) => sgMesmoJogo(n, t))))
      : [];
    const eggsAll = (window.EASTER_EGGS_DATA && window.EASTER_EGGS_DATA.eggs) || [];
    const ovos = !cap.ovos ? [] : Array.isArray(cap.ovos)
      ? cap.ovos.map((id) => eggsAll.find((e) => e.id === id)).filter(Boolean)
      : eggsAll.filter((e) => e.gameId === cap.ovos);
    const myst = window.MYSTERIES_DATA || { statuses: [], cases: [] };
    const casos = cap.misterios ? (myst.cases || []).filter((m) => m.gameId === cap.misterios) : [];
    const codigos = cap.codigos ? ((window.CHEATS_DATA && window.CHEATS_DATA.cheats) || []).filter((x) => x.gameId === cap.codigos) : [];
    const radios = cap.radios ? ((window.RADIOS_DATA && window.RADIOS_DATA.stations) || []).filter((x) => x.gameId === cap.radios) : [];
    return { deep, missaoDz, veiculos, armas, chars, ovos, myst, casos, codigos, radios };
  }, [perto]);

  /* Missões do live/missions.json, na ordem de cap.missoes */
  const missoes = React.useMemo(() => {
    const jogos = dados.missoes && Array.isArray(dados.missoes.games) ? dados.missoes.games : [];
    const out = [];
    sgArr(cap.missoes).forEach((id) => {
      const g = jogos.find((x) => x.id === id);
      if (!g) return;
      sgArr(g.missions).forEach((m) => out.push({ ...m, jogo: g.name, tema, chave: `${g.id}-${m.part}-${m.n}` }));
    });
    return out;
  }, [dados.missoes]);

  /* Série em vídeo do jogo (indice.json) e onde cada vídeo entra */
  const serie = dados.videos && Array.isArray(dados.videos.jogos) ? dados.videos.jogos.find((j) => j.id === tema) || null : null;
  const vids = React.useMemo(() => (c ? sgVideosPorLugar(serie, c.chars.length > 0) : {}), [serie, c]);
  const temVideos = typeof DV_BASE !== "undefined";
  const play = (i) => setReels(i);
  const V = (k) => (temVideos ? vids[k] || [] : []);

  /* Sub-seções presentes, na ordem do capítulo */
  const blocos = [];
  if (c) {
    const hist = V("historia");
    const destaque = hist.find((x) => x.v.id === "historia") || null;
    const outrosHist = hist.filter((x) => x !== destaque);

    if (serie && serie.episodio && typeof DvEpisodio !== "undefined") {
      blocos.push({ slug: "episodio", rotulo: "Episódio", no: (
        <SgBloco id={`jogo-${tema}-episodio`} kicker="16:9 · do começo ao fim" titulo="Episódio completo" className="sg-bloco--episodio">
          <DvEpisodio game={serie} />
        </SgBloco>
      ) });
    }

    if (tema === "gta6") {
      const vi = [
        typeof VICharactersSection !== "undefined" ? VICharactersSection : null,
        typeof VIPlacesSection !== "undefined" ? VIPlacesSection : null,
        typeof VIInfoSection !== "undefined" ? VIInfoSection : null,
        typeof VIMechanicsSection !== "undefined" ? VIMechanicsSection : null,
        typeof VICatalogSection !== "undefined" ? VICatalogSection : null
      ].filter(Boolean);
      if (vi.length) {
        blocos.push({ slug: "leonida", rotulo: "Leonida", no: (
          <div id={`jogo-${tema}-leonida`} className="sg-vi">{vi.map((S, k) => <S key={k} />)}</div>
        ) });
      }
    }

    if (game && (game.fullStory || hist.length)) {
      blocos.push({ slug: "historia", rotulo: "História", no: (
        <SgBloco id={`jogo-${tema}-historia`} kicker={game.storyYear ? `Ambientado em ${game.storyYear}` : "Enredo"} titulo="História">
          <div className={`sg-hist${destaque ? " sg-hist--video" : ""}`}>
            {destaque && <div className="sg-hist-video"><SgVideoCard item={destaque} onPlay={play} destaque /></div>}
            <div className="sg-hist-txt">
              {game.fullStory && <p className="sg-par sg-par--lead">{game.fullStory}</p>}
              {game.importance && <p className="sg-par"><b>Por que importa · </b>{game.importance}</p>}
              <dl className="sg-listas">
                {sgArr(game.themes).length > 0 && <div><dt>Temas</dt><dd><SgChips itens={game.themes} /></dd></div>}
                {sgArr(game.factions).length > 0 && <div><dt>Facções</dt><dd><SgChips itens={game.factions} /></dd></div>}
                {sgArr(game.antagonists).length > 0 && <div><dt>Rivais</dt><dd><SgChips itens={game.antagonists} /></dd></div>}
                {sgArr(game.supportingCharacters).length > 0 && <div><dt>Coadjuvantes</dt><dd><SgChips itens={game.supportingCharacters} limite={16} /></dd></div>}
              </dl>
            </div>
          </div>
          <SgVideos itens={outrosHist} onPlay={play} />
          {extras.length > 0 && typeof GameDossierCard !== "undefined" && (
            <div className="sg-extra">
              <span className="sg-bloco-kicker">Também neste capítulo</span>
              <div className="sg-grade sg-grade--2">{extras.map((g) => <GameDossierCard key={g.id} game={g} onOpen={onOpenDossier} />)}</div>
            </div>
          )}
        </SgBloco>
      ) });
    }

    const vBast = V("bastidores");
    if (c.deep || (game && game.developmentHistory) || vBast.length) {
      blocos.push({ slug: "bastidores", rotulo: "Bastidores", no: (
        <SgBloco id={`jogo-${tema}-bastidores`} kicker="Como foi feito" titulo="Bastidores"
          extra={c.deep ? <button type="button" className="vi-btn vi-btn--sm" onClick={() => onOpenDossier({ type: "deep", item: c.deep })}>Bastidores completos ›</button> : null}>
          <div className="sg-bast">
            {c.deep && c.deep.lead ? <p className="sg-par sg-par--lead">{c.deep.lead}</p> : (game && game.developmentHistory ? <p className="sg-par sg-par--lead">{game.developmentHistory}</p> : null)}
            {c.deep && c.deep.lead && game && game.developmentHistory && <p className="sg-par">{game.developmentHistory}</p>}
            {c.deep && sgArr(c.deep.stats).length > 0 && (
              <div className="sg-stats">
                {c.deep.stats.map((s, k) => <div key={k}><strong>{s.detail}</strong><span>{s.label}</span></div>)}
              </div>
            )}
          </div>
          <SgVideos itens={vBast} onPlay={play} />
        </SgBloco>
      ) });
    }

    if (c.missaoDz.length || sgArr(cap.missoes).length) {
      blocos.push({ slug: "missoes", rotulo: "Missões", no: (
        <SgBloco id={`jogo-${tema}-missoes`} kicker="Campanha · gameplay sem comentários" titulo="Missões"
          extra={missoes.length ? <span className="sg-conta">{missoes.length} missões</span> : null}>
          {c.missaoDz.length > 0 && typeof MissionDossierCard !== "undefined" && (
            <div className="sg-grade sg-grade--2">{c.missaoDz.map((m) => <MissionDossierCard key={m.id} mission={m} onOpen={onOpenDossier} />)}</div>
          )}
          <SgMissoes missoes={missoes} carregando={!dados.missoes && sgArr(cap.missoes).length > 0} />
        </SgBloco>
      ) });
    }

    const vVei = V("veiculos");
    if (c.veiculos.length || vVei.length) {
      blocos.push({ slug: "veiculos", rotulo: "Veículos", no: (
        <SgBloco id={`jogo-${tema}-veiculos`} kicker="Garagem" titulo="Veículos">
          <div className="sg-duo">
            {typeof VehicleDossierCard !== "undefined" && c.veiculos.map((v) => <VehicleDossierCard key={v.id} vehicle={v} onOpen={onOpenDossier} />)}
            {c.veiculos.map((v) => (
              <div key={v.id + "-chips"} className="sg-destaques">
                <span className="sg-bloco-kicker">Ícones da frota</span>
                <SgChips itens={v.highlights} limite={14} />
                {sgArr(v.coverage).length > 0 && <><span className="sg-bloco-kicker">Cobertura</span><SgChips itens={v.coverage} /></>}
              </div>
            ))}
          </div>
          <SgVideos itens={vVei} onPlay={play} />
        </SgBloco>
      ) });
    }

    const vArm = V("armas");
    if (c.armas.length || vArm.length) {
      blocos.push({ slug: "armas", rotulo: "Armas", no: (
        <SgBloco id={`jogo-${tema}-armas`} kicker="Arsenal" titulo="Armas">
          <div className="sg-duo">
            {typeof WeaponDossierCard !== "undefined" && c.armas.map((w) => <WeaponDossierCard key={w.id} weapon={w} onOpen={onOpenDossier} />)}
            {c.armas.map((w) => (
              <div key={w.id + "-chips"} className="sg-destaques">
                <span className="sg-bloco-kicker">Destaques do arsenal</span>
                <SgChips itens={w.highlights} limite={14} />
                {sgArr(w.coverage).length > 0 && <><span className="sg-bloco-kicker">Cobertura</span><SgChips itens={w.coverage} /></>}
              </div>
            ))}
          </div>
          <SgVideos itens={vArm} onPlay={play} />
        </SgBloco>
      ) });
    }

    const vPer = V("personagens");
    if (c.chars.length || vPer.length) {
      blocos.push({ slug: "personagens", rotulo: "Personagens", no: (
        <SgBloco id={`jogo-${tema}-personagens`} kicker="Elenco" titulo="Personagens"
          extra={c.chars.length ? <span className="sg-conta">{c.chars.length} fichas</span> : null}>
          <SgVideos itens={vPer} onPlay={play} />
          {c.chars.length > 0 && typeof DzCard !== "undefined" && (
            <div className="sg-cfila" role="list">
              {c.chars.map((ch) => (
                <div role="listitem" key={ch.id} className="sg-cfila-item">
                  <DzCard
                    tema={sgArr(ch.games)[0]}
                    variant="row"
                    thumb="portrait"
                    media={ch.media}
                    fallback={typeof DzFallback !== "undefined" ? <DzFallback label={ch.name} icon={sgArr(ch.tags).includes("governo") ? "police" : "users"} /> : null}
                    kicker={[ch.role, ch.universe].filter(Boolean).join(" · ")}
                    title={ch.name}
                    summary={ch.biography}
                    facts={[["Lealdades", ch.affiliations]]}
                    chips={[ch.importance].concat(sgArr(ch.tags))}
                    onOpen={() => onOpenDossier({ type: "character", item: ch })}
                  />
                </div>
              ))}
            </div>
          )}
        </SgBloco>
      ) });
    }

    const vOvo = V("ovos");
    if (c.ovos.length || vOvo.length) {
      blocos.push({ slug: "easter-eggs", rotulo: "Easter eggs", no: (
        <SgBloco id={`jogo-${tema}-easter-eggs`} kicker="Segredos e referências" titulo="Easter eggs"
          extra={c.ovos.length ? <span className="sg-conta">{c.ovos.length}</span> : null}>
          <SgVideos itens={vOvo} onPlay={play} />
          <SgOvos ovos={c.ovos} />
        </SgBloco>
      ) });
    }

    const vMys = V("misterios");
    if (c.casos.length || vMys.length) {
      const casosTodos = c.myst.cases || [];
      blocos.push({ slug: "misterios", rotulo: "Mistérios", no: (
        <SgBloco id={`jogo-${tema}-misterios`} kicker="Casos não arquivados" titulo="Mistérios">
          <SgVideos itens={vMys} onPlay={play} />
          {c.casos.length > 0 && typeof MystCaseCard !== "undefined" && (
            <div className="sg-grade sg-grade--2">
              {c.casos.map((m) => (
                <MystCaseCard key={m.id} mystCase={m} statuses={c.myst.statuses || []}
                  fileNo={String(casosTodos.indexOf(m) + 1).padStart(3, "0")} />
              ))}
            </div>
          )}
        </SgBloco>
      ) });
    }

    const vCod = V("codigos");
    if (c.codigos.length || vCod.length) {
      blocos.push({ slug: "codigos", rotulo: "Códigos", no: (
        <SgBloco id={`jogo-${tema}-codigos`} kicker="Cheats" titulo="Códigos"
          extra={c.codigos.length ? <span className="sg-conta">{c.codigos.length} códigos</span> : null}>
          <SgVideos itens={vCod} onPlay={play} />
          <SgCodigos codigos={c.codigos} />
        </SgBloco>
      ) });
    }

    const vRad = V("radios");
    if (c.radios.length || vRad.length) {
      blocos.push({ slug: "radios", rotulo: "Rádios", no: (
        <SgBloco id={`jogo-${tema}-radios`} kicker="Sintonize" titulo="Rádios"
          extra={c.radios.length ? <span className="sg-conta">{c.radios.length} estações</span> : null}>
          <SgVideos itens={vRad} onPlay={play} />
          <SgRadios radios={c.radios} />
        </SgBloco>
      ) });
    }
  }

  return (
    <article id={"jogo-" + tema} ref={ref} className="sg-cap" data-saga-cap={tema} data-gta={tema}>
      {SagaCenaC && <SagaCenaC cap={cap} game={game} index={index} total={total} />}
      <div className="wrap sg-cap-wrap">
        <SgCabecalho cap={cap} game={game} index={index} total={total} onOpenDossier={onOpenDossier}
          indice={blocos.map((b) => ({ slug: b.slug, rotulo: b.rotulo }))} />
        {c ? (
          <div className="sg-blocos">
            {blocos.map((b) => <React.Fragment key={b.slug}>{b.no}</React.Fragment>)}
          </div>
        ) : (
          <div className="sg-espera" aria-hidden="true" />
        )}
      </div>
      {serie && reels != null && serie.videos && serie.videos[reels] && typeof DvReels !== "undefined" &&
        sgPortal(<DvReels game={serie} index={reels} onIndex={setReels} onClose={() => setReels(null)} />)}
    </article>
  );
});

/* ---------- fundo fixo + tema do site inteiro ----------
 * O capítulo atual é o último cujo topo passou de 40% da tela. Se a cena de
 * abertura dele ainda não chegou a 60% (a tela "liga" ali), vale o anterior. */
const SgFundos = ({ temas }) => {
  const [ativo, setAtivo] = React.useState("");
  React.useEffect(() => {
    const raiz = document.documentElement;
    let raf = 0;
    let atual = null;
    const calcular = () => {
      raf = 0;
      const sec = document.getElementById("saga");
      const caps = sec ? sec.querySelectorAll(".sg-cap") : [];
      const vh = window.innerHeight || 1;
      const linha = vh * 0.4;
      let idx = -1;
      for (let k = 0; k < caps.length; k++) {
        if (caps[k].getBoundingClientRect().top <= linha) idx = k; else break;
      }
      if (idx >= 0) {
        const cena = caps[idx].querySelector(".sgc-wrap");
        if (cena) {
          const r = cena.getBoundingClientRect();
          const curso = r.height - vh;
          const p = curso > 0 ? Math.min(1, Math.max(0, -r.top / curso)) : (r.top <= 0 ? 1 : 0);
          if (p < 0.6) idx -= 1;
        }
      }
      /* passou do fim da saga: o site volta ao tema normal */
      if (sec && sec.getBoundingClientRect().bottom < linha) idx = -1;
      const tema = idx >= 0 ? caps[idx].getAttribute("data-saga-cap") || "" : "";
      if (tema === atual) return;
      atual = tema;
      if (tema) raiz.dataset.gta = tema; else delete raiz.dataset.gta;
      setAtivo(tema);
    };
    const agendar = () => { if (!raf) raf = window.requestAnimationFrame(calcular); };
    calcular();
    window.addEventListener("scroll", agendar, { passive: true });
    window.addEventListener("resize", agendar);
    return () => {
      window.removeEventListener("scroll", agendar);
      window.removeEventListener("resize", agendar);
      if (raf) window.cancelAnimationFrame(raf);
      delete raiz.dataset.gta;
    };
  }, []);
  return (
    <div className="sg-fundos" aria-hidden="true">
      {temas.map((t) => <div key={t} className={`sg-fundo${ativo === t ? " on" : ""}`} data-gta={t} />)}
    </div>
  );
};

/* ---------- raiz ---------- */
const SagaSection = ({ onOpenDossier }) => {
  const saga = (typeof window !== "undefined" && window.SAGA) || [];
  const abrir = onOpenDossier || (() => {});
  /* link direto (#jogo-gta5-missoes): monta já aquele capítulo */
  const [alvo, setAlvo] = React.useState("");
  React.useEffect(() => {
    let h = "";
    try { h = decodeURIComponent(window.location.hash.replace("#", "")); } catch (e) { /* hash malformado */ }
    if (!h || h.indexOf("jogo-") !== 0) return;
    const cap = saga.find((x) => h === "jogo-" + x.tema || h.indexOf("jogo-" + x.tema + "-") === 0);
    if (cap) setAlvo(cap.tema);
  }, []);
  const temMyst = typeof MystStyles !== "undefined" && saga.some((x) => x.misterios);
  return (
    <section id="saga" className="sg-saga">
      {temMyst && <MystStyles />}
      <SgFundos temas={saga.map((x) => x.tema)} />
      {saga.map((cap, i) => (
        <SgCapitulo key={cap.tema} cap={cap} index={i} total={saga.length} onOpenDossier={abrir} forcar={alvo === cap.tema} />
      ))}
      <p className="sg-creditos">
        Fotos dos aparelhos via Wikimedia Commons: Evan-Amos e CHG (domínio público); MBlairMartin (PC Gateway 2000), Morn (TV Loewe Planus) e Osh33m/Soberian (PlayStation 5), sob licença CC BY-SA 4.0. Capas e imagens dos jogos: Rockstar Games, via GTA Wiki.
      </p>
    </section>
  );
};

Object.assign(window, { SagaSection });
