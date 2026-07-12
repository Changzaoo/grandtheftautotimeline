# Guia do esquema de chaves i18n — Urban Universe · Dossiê GTA

Este documento orienta os **tradutores** (próxima fase) sobre como os catálogos
de idioma funcionam e quais famílias de chaves existem. O runtime está em
`i18n.jsx`; os catálogos ficam nesta pasta (`i18n/<code>.js`).

## 1. Como funciona

- O **idioma-fonte é o pt-BR**: todo texto visível já está escrito em português
  diretamente no código, como *fallback inline* de `window.__t(chave, fallback)`
  e `window.__tt(prefixo, id, campo, fallback)`.
- Por isso **pt-BR não tem catálogo** (`I18N_CATALOGS["pt-BR"] = {}`).
- **Regra de fallback**: se uma chave estiver ausente do catálogo ativo — ou o
  valor for string vazia — o site exibe o texto pt-BR inline. Traduções podem
  ser entregues incompletas sem quebrar nada.
- Os catálogos são carregados sob demanda (`<script src="i18n/<code>.js">`)
  quando o usuário troca de idioma no `<VILanguagePicker/>`. A escolha persiste
  em `localStorage["gta.lang"]`.

## 2. Idiomas suportados (13 oficiais Rockstar/GTA)

| código | nome nativo | arquivo |
| --- | --- | --- |
| `pt-BR` | Português (Brasil) | — (fonte, sem catálogo) |
| `en` | English | `i18n/en.js` |
| `fr` | Français | `i18n/fr.js` |
| `it` | Italiano | `i18n/it.js` |
| `de` | Deutsch | `i18n/de.js` |
| `es` | Español (España) | `i18n/es.js` |
| `es-MX` | Español (México) | `i18n/es-MX.js` |
| `pl` | Polski | `i18n/pl.js` |
| `ru` | Русский | `i18n/ru.js` |
| `ja` | 日本語 | `i18n/ja.js` |
| `ko` | 한국어 | `i18n/ko.js` |
| `zh-CN` | 中文（简体） | `i18n/zh-CN.js` |
| `zh-TW` | 中文（繁體） | `i18n/zh-TW.js` |

## 3. Formato do arquivo de catálogo

Cada idioma é UM arquivo `i18n/<code>.js`, UTF-8, neste formato exato
(IIFE — não usar `import`/`export`):

```js
(function () {
  window.I18N_CATALOGS = window.I18N_CATALOGS || {};
  window.I18N_CATALOGS["fr"] = {
    "nav.timeline": "Chronologie",
    "hero.subtitle": "Les archives complètes de la saga",
    "vi.badge.rumor": "RUMEUR"
    // ...demais chaves
  };
})();
```

Regras dos valores:

- **Texto puro** — sem HTML, sem markdown. Aspas internas devem ser escapadas
  em JS normalmente.
- Preserve nomes próprios (Rockstar, Leonida, Vice City, GTA VI, Vintage Vice
  City Pack), datas, números e siglas de plataforma.
- Chaves são **case-sensitive** e devem ser copiadas literalmente.

## 4. Lista canônica de chaves

A lista canônica e completa de chaves será **extraída de `i18n/en.js`** (a ser
gerado). Os demais idiomas devem traduzir exatamente o conjunto de chaves do
`en.js` — nem mais, nem menos. As seções abaixo descrevem o *esquema* de cada
família de chaves.

## 5. Famílias de chaves (prefixos)

Convenções gerais: chaves em inglês, `kebab-case`/`dot.case`, estáveis.
Ids de itens de dados também são kebab-case estáveis (ex.: `gta-sa-bigfoot`).

### 5.1 `nav.<id>` — navegação (HUD, bottom-nav, quick-tabs)

Rótulo de cada seção no menu. Ids canônicos:

`overview`, `timeline`, `games`, `missions`, `vehicles`, `weapons`,
`development`, `characters`, `cities`, `gangs`, `universes`, `rockstar`,
`gtaonline`, `gta6`, `eastereggs`, `mysteries`, `glossary`.

Além desses, os atalhos do hero VI usam `nav.vi-characters` ("Personagens VI")
e `nav.vi-places` ("Leonida").

### 5.2 `hero.*` — hero clássico do dossiê

Ex.: `hero.title` ("GRAND THEFT AUTO"), `hero.subtitle`
("O Arquivo Completo da Saga").

### 5.3 `section.<id>.title` / `section.<id>.intro`

Título e parágrafo introdutório de cada seção do dossiê (`<id>` = mesmos ids
de navegação da 5.1).

### 5.4 `ui.*` — microtextos de interface compartilhados

Botões, filtros, estados vazios, acessibilidade. Ex.: `ui.lang.picker-aria`
("Escolher idioma do site"), `ui.lang.current` ("idioma atual:").

### 5.5 `footer.*`

`footer.title`, `footer.about`, `footer.sources`.

### 5.6 `vi.*` — experiência GTA VI (sections-vi.jsx + data-vi.jsx)

Duas subfamílias:

**a) UI fixa da experiência VI** (chaves literais em `sections-vi.jsx`):

- `vi.count.*` — contagem regressiva: `days`, `hours`, `min`, `sec`, `done`, `aria`;
- `vi.hero.*` — `eyebrow`, `seal`, `release-note`, `watch-trailer`, `explore`, `quick-aria`;
- `vi.chars.*` — `eyebrow`, `title`, `right`, `quote-note`;
- `vi.places.*` — `eyebrow`, `title`, `right`, `gallery-aria`, `hint`;
- `vi.trailers.*` — `watch`, `watch-aria`, `thumb-alt`, `no-signal`;
- `vi.info.*` — `eyebrow`, `title`, `right`, `badge`, `release-title`,
  `meta-date`, `meta-platforms`, `meta-preorder`, `meta-bonus`,
  `editions-title`, `bonus-badge`, `trailers-title`, `timeline-title`,
  `facts-title`, `confirmed-title`, `rumors-title`, `faq-title` (etc.);
- `vi.badge.*` — carimbos: `official`, `rumor`, `incident`.

**b) Itens de dados** (`__TT("vi", <id>, <campo>, ...)` sobre `window.VI_DATA`
em `data-vi.jsx`) → chave `vi.<id>.<campo>`. Campos por coleção:

- personagens: `role`, `tagline`, `desc`, `quote`, `quoteSource`;
- lugares/regiões de Leonida: `tagline`, `desc`, `vibe`;
- trailers: `title`, `dateLabel`, `desc`, `highlight-1`…`highlight-N` (**1-based**);
- edições: `name`, `priceBR`, `blurb`, `item-1`…`item-N` (**1-based**);
- pacote de pré-venda: `note`, `item-1`…`item-N`;
- adiamentos: `label`, `detail`;
- linha do tempo de anúncios: `dateLabel`, `title`, `desc`;
- fatos oficiais/rumores: `text`;
- FAQ: `q`, `a`.

Consulte `sections-vi.jsx`/`data-vi.jsx` para os ids reais de cada item.

### 5.7 `egg.*` — easter eggs

- `egg.<id>.title`, `egg.<id>.desc`, `egg.<id>.where`, `egg.<id>.how`
  (id do easter egg em kebab-case, ex.: `gta-sa-bigfoot`);
- `egg.ui.*` — UI fixa da seção de easter eggs (filtros, rótulos, vazio etc.).

### 5.8 `myst.*` / `myst-status.*` — mistérios e lendas urbanas

- `myst.<id>.title`, `myst.<id>.desc`, `myst.<id>.resolution`, `myst.<id>.where`;
- listas de evidências: `myst.<id>.clues.<n>` e `myst.<id>.theories.<n>`,
  onde `<n>` é o índice do item **começando em 0** (`clues.0`, `clues.1`, …) —
  atenção: diferente da numeração 1-based dos `item-N`/`highlight-N` do `vi.*`;
- `myst.ui.*` — UI fixa: `eyebrow`, `title`, `right`/`count-suffix`,
  `file-label`, `clues`, `theories`, `clue-prefix`, `theory-prefix`,
  `resolution`, `where`, `open-file`, `close-file`, `filter-status`,
  `filter-game`, `all`, `all-games`, `empty` (etc.);
- `myst-status.<id>.name` e `myst-status.<id>.desc` — nome/descrição de cada
  status de caso (confirmado, lenda, em aberto…);
- `myst.game.<gameId>` — nome de exibição do jogo usado nos filtros.

## 6. Checklist para entregar um idioma

1. Copie `i18n/en.js` (lista canônica) e renomeie para `i18n/<code>.js`.
2. Troque `window.I18N_CATALOGS["en"]` pelo código do idioma alvo.
3. Traduza os valores — nunca as chaves.
4. Pode-se omitir chaves não traduzidas: o site cai no pt-BR inline.
5. Valide que o arquivo é JS válido e roda a IIFE sem erro no console.
