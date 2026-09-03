/* ============ GTA VI — CATÁLOGO COMPLETO (id="vi-catalog") ============
 * Tudo que GTA VI já apresentou, lido do GTA Wiki por scripts/build-vi-catalog.js
 * (live/vi-catalog.json, regenerado automaticamente pela GitHub Action):
 * veículos, armas, personagens, gangues, cidades/locais (inclusive fora de
 * Leonida, como o estado de Gloriana), marcas, fauna e rádios.
 * Só mostra imagens com "GTAVI" no nome do arquivo — nada de foto de outro jogo.
 */
window.__T = window.__T || ((k, f) => (window.__t ? window.__t(k, f) : f));

const VI_CAT_LABELS = {
  vehicles: ["vi.cat.vehicles", "Veículos"], weapons: ["vi.cat.weapons", "Armas"], characters: ["vi.cat.characters", "Personagens"],
  gangs: ["vi.cat.gangs", "Gangues"], locations: ["vi.cat.locations", "Cidades e locais"], businesses: ["vi.cat.businesses", "Marcas e negócios"],
  animals: ["vi.cat.animals", "Fauna"], radio: ["vi.cat.radio", "Rádios"]
};
const viCatLabel = (key) => (VI_CAT_LABELS[key] ? __T(VI_CAT_LABELS[key][0], VI_CAT_LABELS[key][1]) : key);
const viCatNorm = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const useVICatalog = () => {
  const [state, setState] = React.useState({ status: "loading", data: null });
  React.useEffect(() => {
    let alive = true;
    fetch("live/vi-catalog.json", { cache: "no-cache" })
      .then((r) => { if (!r || !r.ok) throw new Error("HTTP"); return r.json(); })
      /* O catálogo vem do GTA Wiki em inglês: __i18nLive traduz os campos de
       * exibição para o idioma ativo (inclusive pt-BR) antes de renderizar. */
      .then((data) => { if (alive) setState({ status: "ok", data: window.__i18nLive ? window.__i18nLive(data) : data }); })
      .catch(() => { if (alive) setState({ status: "error", data: null }); });
    return () => { alive = false; };
  }, []);
  return state;
};

const viCatMetaLine = (item) => {
  const m = item.meta || {};
  const parts = [];
  switch (item.group) {
    case "vehicles": parts.push(m.manufacturer, m.class, m.body, m.capacity && `${m.capacity}`); break;
    case "weapons": parts.push(m.type, m.class, m.manufacturer); break;
    case "characters": parts.push(m.occupation, m.affiliations, m.home, m.status); break;
    case "gangs": parts.push(m.type, m.location, m.leader && `${__T("vi.cat.leader", "líder")}: ${m.leader}`, m.founded && `${__T("vi.cat.founded", "fundada em")} ${m.founded}`); break;
    case "locations": parts.push(m.kind, m.location || item.sub); break;
    case "businesses": parts.push(m.type, m.location, m.tagline && `“${m.tagline}”`); break;
    case "animals": parts.push(m.species, m.type, m.location); break;
    case "radio": parts.push(m.genre, m.host && `${__T("vi.cat.host", "apresentação")}: ${m.host}`, m.tracks && `${m.tracks} ${__T("vi.cat.tracks", "faixas")}`); break;
    default: break;
  }
  return parts.filter(Boolean).join(" · ");
};

const VICatalogCard = ({ item }) => (
  <article className={`card vi-cat-card vi-cat-card--${item.group}${item.image ? "" : " vi-cat-card--noimg"}`}>
    <Corners />
    <a
      className="vi-cat-media vi-vhs"
      href={item.url} target="_blank" rel="noreferrer" aria-label={item.title}
      /* --media-src vira o fundo desfocado das fichas que mostram a imagem
       * inteira (retratos, logos, fauna): nada de rosto cortado. */
      style={item.image ? { "--media-src": `url("${item.image.replace(/"/g, "%22")}")` } : undefined}
    >
      {item.image
        ? <img src={item.image} alt={item.title} loading="lazy" referrerPolicy="no-referrer" />
        : <span className="vi-cat-initials vi-serif" aria-hidden="true">{item.title.slice(0, 2).toUpperCase()}</span>}
      <span className="vi-grain" />
    </a>
    <div className="vi-cat-body">
      <div className="vi-cat-badges">
        <span className="vi-badge">{viCatLabel(item.group)}</span>
        {item.status === "mencionado" && <span className="vi-badge vi-badge--rumor">{__T("vi.cat.mentioned", "SÓ MENÇÃO")}</span>}
        {item.leak && <span className="vi-badge vi-badge--incident" title={__T("vi.cat.leak-title", "A página cita material vazado; detalhes podem mudar até o lançamento.")}>{__T("vi.cat.leak", "CITA VAZAMENTO")}</span>}
      </div>
      <h4><a href={item.url} target="_blank" rel="noreferrer">{item.title}</a></h4>
      {viCatMetaLine(item) && <p className="vi-cat-meta">{viCatMetaLine(item)}</p>}
      {item.desc && <p className="vi-cat-desc" lang="en">{item.desc}</p>}
    </div>
  </article>
);

const VICatalogSection = () => {
  const { status, data } = useVICatalog();
  const [group, setGroup] = React.useState("vehicles");
  const [query, setQuery] = React.useState("");
  const [facet, setFacet] = React.useState("");
  const [limit, setLimit] = React.useState(48);
  const items = (data && data.items) || [];
  const groups = (data && data.groups) || [];
  const counts = (data && data.counts) || {};

  React.useEffect(() => { setFacet(""); setLimit(48); }, [group, query]);

  /* Facetas: classe/fabricante (veículos), tipo (armas), condado/tipo (locais)… */
  const facetKey = { vehicles: "class", weapons: "type", locations: "kind", businesses: "type", characters: "affiliations", gangs: "type", animals: "type", radio: "genre" }[group];
  const facets = React.useMemo(() => {
    const m = new Map();
    items.filter((i) => i.group === group).forEach((i) => {
      const v = facetKey === "kind" ? (i.meta && i.meta.kind) : (i.meta && i.meta[facetKey]);
      if (!v) return;
      String(v).split(",").map((x) => x.trim()).filter(Boolean).slice(0, 1).forEach((x) => m.set(x, (m.get(x) || 0) + 1));
    });
    return [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, 14);
  }, [items, group, facetKey]);

  const q = viCatNorm(query);
  const visible = items.filter((i) => {
    if (q) return viCatNorm(`${i.title} ${i.desc} ${Object.values(i.meta || {}).join(" ")} ${viCatLabel(i.group)}`).includes(q);
    if (i.group !== group) return false;
    if (facet) { const v = i.meta && (facetKey === "kind" ? i.meta.kind : i.meta[facetKey]); return String(v || "").split(",")[0].trim() === facet; }
    return true;
  });
  const shown = visible.slice(0, limit);

  return (
    <section id="vi-catalog" className="dossier-section dossier-shell vi-section vi-catalog">
      <div className="wrap">
        <DossierSectionHead
          eyebrow={__T("vi.cat.eyebrow", "Enciclopédia de Leonida")}
          title={__T("vi.cat.title", "Tudo que GTA VI já mostrou")}
          accent="var(--neon, #ff3d8a)"
          right={data ? `${items.length} ${__T("vi.cat.entries", "verbetes")} · ${__T("vi.cat.auto", "atualizado automaticamente do GTA Wiki")}` : __T("vi.cat.auto", "atualizado automaticamente do GTA Wiki")}
        />

        <div className="card vi-cat-intro">
          <Corners />
          <p>
            {__T("vi.cat.intro", "Personagens, gangues, carros, armas, marcas, animais, rádios e cada cidade, condado e bairro já revelado — de Vice City aos Leonida Keys e até o vizinho estado de Gloriana. Os verbetes vêm das categorias públicas do GTA Wiki e são reimportados pelo robô do site; só entram fotos rotuladas como GTA VI.")}
          </p>
          {data && data.generatedAt && <span className="vi-badge">{__T("vi.cat.generated", "Importado em")} {new Date(data.generatedAt).toLocaleDateString(window.__lang || "pt-BR", { day: "2-digit", month: "short", year: "numeric" })}</span>}
        </div>

        {status === "loading" && <p className="vi-cat-empty">{__T("vi.cat.loading", "Abrindo o arquivo de Leonida…")}</p>}
        {status === "error" && <p className="vi-cat-empty">{__T("vi.cat.error", "O catálogo não carregou. Ele é gerado por live/vi-catalog.json — rode `npm run catalog` ou aguarde a próxima atualização automática.")}</p>}

        {status === "ok" && (
          <>
            <div className="vi-cat-toolbar">
              <div className="vi-cat-tabs" role="tablist" aria-label={__T("vi.cat.tabs-aria", "Categorias do catálogo")}>
                {groups.map((g) => (
                  <button
                    key={g.key} type="button" role="tab" aria-selected={!q && group === g.key}
                    className={!q && group === g.key ? "on" : ""}
                    onClick={() => { setQuery(""); setGroup(g.key); }}
                  >
                    {viCatLabel(g.key)} <b>{counts[g.key] || 0}</b>
                  </button>
                ))}
              </div>
              <label className="vi-cat-search">
                <span className="sr-only">{__T("vi.cat.search-aria", "Buscar no catálogo")}</span>
                <input
                  type="search" value={query} onChange={(e) => setQuery(e.target.value)}
                  placeholder={__T("vi.cat.search", "Buscar carro, arma, personagem, bairro…")}
                />
              </label>
            </div>

            {!q && facets.length > 1 && (
              <div className="vi-cat-facets">
                <button type="button" className={facet ? "" : "on"} onClick={() => setFacet("")}>{__T("vi.cat.all", "Todos")}</button>
                {facets.map(([f, n]) => (
                  <button key={f} type="button" className={facet === f ? "on" : ""} onClick={() => setFacet(facet === f ? "" : f)}>{f} <b>{n}</b></button>
                ))}
              </div>
            )}

            {visible.length ? (
              <>
                <div className="vi-cat-grid">
                  {shown.map((item) => <VICatalogCard key={item.pageTitle} item={item} />)}
                </div>
                {visible.length > shown.length && (
                  <div className="vi-cat-more">
                    <button type="button" className="vi-btn" onClick={() => setLimit((l) => l + 48)}>
                      {__T("vi.cat.more", "Mostrar mais")} ({visible.length - shown.length})
                    </button>
                  </div>
                )}
              </>
            ) : <p className="vi-cat-empty">{__T("vi.cat.empty", "Nada encontrado com esse filtro.")}</p>}

            <p className="vi-cat-note">{data.note}</p>
          </>
        )}
      </div>
    </section>
  );
};

Object.assign(window, { VICatalogSection });
