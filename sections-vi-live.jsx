/* ============ GTA VI — RADAR AO VIVO (id="vi-live") ============
 * Lê /api/vi-live (função serverless, cache de 30 min) e, se não houver API
 * (site aberto do disco, falha na Vercel), cai para o snapshot estático
 * live/vi-live.json gerado pela GitHub Action. Última linha de defesa: busca
 * as páginas de GTA VI editadas recentemente direto na API do GTA Wiki (CORS
 * liberado e domínio permitido na CSP).
 * Nada aqui precisa de novo build: trailer, Newswire, notícia ou edição de
 * wiki nova aparecem sozinhos.
 */
window.__T = window.__T || ((k, f) => (window.__t ? window.__t(k, f) : f));

const viLiveAgo = (iso) => {
  if (!iso) return "";
  const diff = Date.now() - new Date(iso).getTime();
  if (!isFinite(diff) || diff < 0) return "";
  const m = Math.floor(diff / 60000), h = Math.floor(m / 60), d = Math.floor(h / 24);
  if (m < 2) return __T("vi.live.now", "agora");
  if (m < 60) return `${m} ${__T("vi.live.min", "min")}`;
  if (h < 48) return `${h} ${__T("vi.live.h", "h")}`;
  if (d < 60) return `${d} ${__T("vi.live.d", "dias")}`;
  return new Date(iso).toLocaleDateString(window.__lang || "pt-BR", { day: "2-digit", month: "short", year: "numeric" });
};
const viLiveDate = (iso) => (iso ? new Date(iso).toLocaleDateString(window.__lang || "pt-BR", { day: "2-digit", month: "short", year: "numeric" }) : "");

const VI_LIVE_TAG_LABEL = {
  "mecânica": ["vi.live.tag.mech", "MECÂNICA"], "trailer": ["vi.live.tag.trailer", "TRAILER"], "lançamento": ["vi.live.tag.release", "LANÇAMENTO"],
  "pré-venda": ["vi.live.tag.preorder", "PRÉ-VENDA"], "vazamento": ["vi.live.tag.leak", "VAZAMENTO"], "online": ["vi.live.tag.online", "ONLINE"],
  "hardware": ["vi.live.tag.hw", "HARDWARE"], "mapa": ["vi.live.tag.map", "MAPA"], "trilha": ["vi.live.tag.music", "TRILHA"], "pc": ["vi.live.tag.pc", "PC"]
};
const VILiveTags = ({ tags }) => (
  <span className="vi-live-tags">
    {(tags || []).map((t) => {
      const def = VI_LIVE_TAG_LABEL[t];
      return <span key={t} className={`vi-badge vi-live-tag vi-live-tag--${t.replace(/[^a-z]/g, "")}`}>{def ? __T(def[0], def[1]) : t.toUpperCase()}</span>;
    })}
  </span>
);

async function viLiveFetchJson(url, ms) {
  const ctl = typeof AbortController !== "undefined" ? new AbortController() : null;
  const timer = ctl ? setTimeout(() => ctl.abort(), ms || 9000) : null;
  try {
    const res = await fetch(url, { signal: ctl ? ctl.signal : undefined, cache: "no-cache" });
    if (!res || !res.ok) throw new Error("HTTP " + (res && res.status));
    return await res.json();
  } finally { if (timer) clearTimeout(timer); }
}

/* Fallback direto no GTA Wiki (navegador → api.php, CORS via origin=*) */
async function viLiveWikiFallback() {
  const url = "https://gta.fandom.com/api.php?action=query&format=json&origin=*&prop=revisions|pageimages&rvprop=timestamp|comment&piprop=thumbnail&pithumbsize=360&titles="
    + encodeURIComponent(["Grand Theft Auto VI", "Grand Theft Auto VI/Trailers", "Vehicles in GTA VI", "Weapons in GTA VI", "State of Leonida", "Vice City (HD Universe)", "Jason Duval", "Lucia Caminos", "Leonida Keys", "Ambrosia"].join("|"));
  const j = await viLiveFetchJson(url, 8000);
  const pages = Object.values((j.query && j.query.pages) || {}).filter((p) => p.revisions);
  return {
    generatedAt: new Date().toISOString(),
    fallback: "wiki",
    official: [], press: [], otherRockstar: [],
    wiki: pages.map((p) => ({
      kind: "wiki", id: "wiki-" + p.pageid, title: p.title,
      url: "https://gta.fandom.com/wiki/" + encodeURIComponent(p.title.replace(/ /g, "_")),
      publishedAt: p.revisions[0].timestamp, snippet: p.revisions[0].comment || "", thumb: p.thumbnail ? p.thumbnail.source : "", source: "GTA Wiki", tags: []
    })).sort((a, b) => String(b.publishedAt).localeCompare(String(a.publishedAt)))
  };
}

const useVILive = () => {
  const [state, setState] = React.useState({ status: "loading", data: null, via: "" });
  React.useEffect(() => {
    let alive = true;
    (async () => {
      const attempts = [
        ["api", () => viLiveFetchJson("/api/vi-live", 12000)],
        ["snapshot", () => viLiveFetchJson("live/vi-live.json", 8000)],
        ["wiki", viLiveWikiFallback]
      ];
      for (const [via, fn] of attempts) {
        try {
          const data = await fn();
          if (!data || typeof data !== "object") throw new Error("vazio");
          if (alive) setState({ status: "ok", data, via });
          return;
        } catch (e) { /* tenta a próxima */ }
      }
      if (alive) setState({ status: "error", data: null, via: "" });
    })();
    return () => { alive = false; };
  }, []);
  return state;
};

const VILiveOfficialCard = ({ item }) => {
  const thumb = item.thumb || item.image;
  return (
    <a className="card vi-live-card vi-live-card--official" href={item.url} target="_blank" rel="noreferrer">
      <Corners />
      <div className="vi-live-thumb vi-vhs">
        {thumb ? <img src={thumb} alt="" loading="lazy" referrerPolicy="no-referrer" /> : <span className="vi-live-thumb-empty">R★</span>}
        {item.kind === "video" && <span className="vi-trailer-play" aria-hidden="true">▶</span>}
        <span className="vi-grain" />
      </div>
      <div className="vi-live-body">
        <div className="vi-live-meta">
          <span className="vi-badge vi-badge--official">{item.kind === "video" ? __T("vi.live.kind.video", "VÍDEO OFICIAL") : __T("vi.live.kind.newswire", "NEWSWIRE")}</span>
          <span className="vi-live-time">{viLiveDate(item.publishedAt)}</span>
        </div>
        <h4>{item.title}</h4>
        {item.desc && <p>{item.desc}</p>}
        <VILiveTags tags={item.tags} />
      </div>
    </a>
  );
};

const VILiveSection = () => {
  const { status, data, via } = useVILive();
  const official = (data && data.official) || [];
  const press = (data && data.press) || [];
  const wiki = (data && data.wiki) || [];
  const other = (data && data.otherRockstar) || [];
  const [pressLang, setPressLang] = React.useState("all");
  const pressList = press.filter((n) => pressLang === "all" || n.lang === pressLang);

  return (
    <section id="vi-live" className="dossier-section dossier-shell vi-section vi-live">
      <div className="wrap">
        <DossierSectionHead
          eyebrow={__T("vi.live.eyebrow", "Radar automático")}
          title={__T("vi.live.title", "GTA VI ao vivo")}
          accent="var(--money, #39c6a5)"
          right={__T("vi.live.right", "canal oficial da Rockstar, Newswire, imprensa e GTA Wiki — sem edição manual")}
        />

        <div className="vi-live-status">
          <span className={`vi-live-dot vi-live-dot--${status}`} aria-hidden="true" />
          {status === "loading" && <span>{__T("vi.live.loading", "Sintonizando as fontes oficiais…")}</span>}
          {status === "ok" && (
            <span>
              {__T("vi.live.updated", "Atualizado")} {viLiveAgo(data.generatedAt)}
              {via === "api" && <em> · {__T("vi.live.via.api", "leitura direta das fontes (cache de 30 min)")}</em>}
              {via === "snapshot" && <em> · {__T("vi.live.via.snapshot", "snapshot automático (GitHub Action, a cada 6 h)")}</em>}
              {via === "wiki" && <em> · {__T("vi.live.via.wiki", "modo mínimo: só GTA Wiki")}</em>}
            </span>
          )}
          {status === "error" && <span>{__T("vi.live.error", "Sem sinal no momento. As fontes voltam sozinhas — tente recarregar em alguns minutos.")}</span>}
        </div>

        {status === "loading" && (
          <div className="vi-live-grid" aria-hidden="true">
            {[0, 1, 2].map((i) => <div key={i} className="card vi-live-card vi-live-skeleton"><Corners /><div className="vi-live-thumb" /><div className="vi-live-body"><span /><span /></div></div>)}
          </div>
        )}

        {status === "ok" && (
          <>
            <h3 className="vi-block-title vi-serif">{__T("vi.live.official-title", "Direto da Rockstar")}</h3>
            {official.length ? (
              <div className="vi-live-grid">
                {official.map((item) => <VILiveOfficialCard key={item.id} item={item} />)}
              </div>
            ) : (
              <p className="vi-live-empty">{__T("vi.live.official-empty", "Nenhum vídeo ou post oficial recente sobre GTA VI nas fontes lidas.")}</p>
            )}
            {other.length > 0 && (
              <p className="vi-live-other">
                <strong>{__T("vi.live.other", "Também no canal da Rockstar:")}</strong>{" "}
                {other.map((v, i) => (
                  <React.Fragment key={v.id}>{i > 0 && " · "}<a href={v.url} target="_blank" rel="noreferrer">{v.title}</a></React.Fragment>
                ))}
              </p>
            )}

            <div className="vi-live-columns">
              <article className="card vi-live-press">
                <Corners />
                <div className="vi-facts-head">
                  <span className="vi-badge">{__T("vi.live.press-badge", "IMPRENSA")}</span>
                  <h4>{__T("vi.live.press-title", "O que saiu nos últimos dias")}</h4>
                  <span className="vi-live-filter" role="group" aria-label={__T("vi.live.press-filter", "Filtrar idioma")}>
                    {[["all", __T("vi.live.lang.all", "Tudo")], ["pt", "PT"], ["en", "EN"]].map(([k, l]) => (
                      <button key={k} type="button" className={pressLang === k ? "on" : ""} onClick={() => setPressLang(k)}>{l}</button>
                    ))}
                  </span>
                </div>
                {pressList.length ? (
                  <ul className="vi-live-list">
                    {pressList.map((n) => (
                      <li key={n.id}>
                        <a href={n.url} target="_blank" rel="noreferrer">{n.title}</a>
                        <span className="vi-live-src">{n.source} · {viLiveAgo(n.publishedAt)}</span>
                        <VILiveTags tags={n.tags} />
                      </li>
                    ))}
                  </ul>
                ) : <p className="vi-live-empty">{__T("vi.live.press-empty", "Nada por aqui neste momento.")}</p>}
                <p className="vi-live-disclaimer">{__T("vi.live.press-note", "Manchetes agregadas automaticamente. Notícia não é confirmação: o que a Rockstar realmente disse está no dossiê e na lista 'Oficial vs. rumor'.")}</p>
              </article>

              <article className="card vi-live-wiki">
                <Corners />
                <div className="vi-facts-head">
                  <span className="vi-badge">{__T("vi.live.wiki-badge", "GTA WIKI")}</span>
                  <h4>{__T("vi.live.wiki-title", "Páginas de GTA VI editadas recentemente")}</h4>
                </div>
                {wiki.length ? (
                  <ul className="vi-live-list vi-live-list--wiki">
                    {wiki.map((w) => (
                      <li key={w.id}>
                        {w.thumb ? <img src={w.thumb} alt="" loading="lazy" referrerPolicy="no-referrer" /> : <span className="vi-live-wiki-ph" aria-hidden="true">W</span>}
                        <div>
                          <a href={w.url} target="_blank" rel="noreferrer">{w.title}</a>
                          <span className="vi-live-src">{__T("vi.live.edited", "editada")} {viLiveAgo(w.publishedAt)}{w.words ? ` · ${w.words} ${__T("vi.live.words", "palavras")}` : ""}</span>
                          {w.snippet && <small>{w.snippet}</small>}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : <p className="vi-live-empty">{__T("vi.live.wiki-empty", "Sem edições recentes detectadas.")}</p>}
              </article>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

Object.assign(window, { VILiveSection });
