# Grand Theft Auto — O Arquivo Completo (Dossiê GTA)

Site estático em React, **pré-compilado** para carregar rápido (sem Babel no navegador), repaginado com a identidade visual **Vice Sunset** inspirada no site oficial do GTA VI (rockstargames.com/VI): céu em degradê de pôr-do-sol que progride com o scroll, texto chrome rosa→dourado, serifada itálica (Playfair Display), polaroids, grão de filme, palmeiras e countdown para 19/11/2026.

## Estrutura

| Camada | Arquivos |
| --- | --- |
| Dados | `data*.jsx` (saga), `data-vi.jsx` (GTA VI), `data-easter-eggs.jsx` (105 eggs), `data-mysteries.jsx` (37 casos) |
| i18n | `i18n.jsx` (runtime + seletor), `i18n/<code>.js` (catálogo de UI), `i18n/<code>.content.js` (catálogo de conteúdo, gerado), `i18n/translate.js` (tradução automática), `i18n/babel-plugin-autotext.js` (envolve o texto do JSX), `i18n/KEYS.md` (esquema) |
| Seções | `sections-*.jsx`; novas: `sections-vi.jsx` (herói VI, personagens, Leonida, dossiê VI), `sections-easter-eggs.jsx`, `sections-mysteries.jsx` |
| Tema | `styles.css` + `theme-neo.css` + **`theme-vi.css`** (Vice Sunset, carregado por último) |
| App | `app.jsx` (composição, scroll-reveal, remontagem na troca de idioma), `enhance.jsx` (3D, cheat codes de página) |

## Tradução (site inteiro, sem editar texto à mão)

O site tem três origens de texto e as três são traduzidas automaticamente:

| Origem | Como é traduzida |
| --- | --- |
| Texto literal do JSX (`<b>Ordem de lançamento</b>`, `placeholder="..."`) | O plugin `i18n/babel-plugin-autotext.js` roda no build e envolve cada texto em `window.__T("c<hash>", "texto pt-BR")` |
| Estruturas de dados (`data-*.jsx`) | `i18n.jsx` traduz os campos de exibição por mutação in-place, a partir de um snapshot da fonte |
| JSON buscado em runtime (`live/vi-catalog.json`, em inglês) | `window.__i18nLive(json)` aplica a mesma tradução depois do fetch — inclusive para pt-BR |

A chave de tradução é sempre `c` + hash do texto original, então o mesmo texto
em qualquer uma das três origens compartilha uma única tradução.

### Fluxo

```bash
npm run i18n:all      # build -> extrai textos -> traduz o que falta -> rebuild
```

Ou passo a passo:

```bash
npm run build             # gera o bundle com o texto já envolvido em __T
node i18n/extract-content.js   # -> i18n/_content.json (pt) e i18n/_live.json (en)
node i18n/translate.js         # traduz o que falta -> i18n/parts/<code>.mt.json
node i18n/build-content.js     # monta i18n/<code>.content.js
npm run build             # copia os catálogos para public/
```

`translate.js` é **incremental**: o que já está em `i18n/parts/<code>.mt.json`
não é traduzido de novo. Rodar depois de acrescentar texto novo custa só o texto
novo. Traduções feitas à mão em `i18n/parts/<code>.<n>.json` têm prioridade
sobre a máquina e nunca são sobrescritas.

### Provedor de tradução

Sem configuração, usa o endpoint público do Google Translate (sem chave, pode
limitar por IP — o script recua e retoma). Para qualidade melhor, defina uma
variável de ambiente antes de rodar:

| Variável | Provedor |
| --- | --- |
| `DEEPL_API_KEY` | DeepL (free: 500 mil caracteres/mês) |
| `GOOGLE_TRANSLATE_API_KEY` | Google Cloud Translation v2 |
| `LIBRETRANSLATE_URL` (+ `LIBRETRANSLATE_KEY`) | LibreTranslate |

Para retraduzir tudo de um idioma: `node i18n/translate.js fr --force`.

## Como editar

O código-fonte está nos arquivos `.jsx`. Depois de editar **qualquer** `.jsx`, rode o build:

```bash
npm install      # só na primeira vez
npm run build
```

Isso gera `dist/app.bundle.js` (tudo transpilado e concatenado) e copia estáticos para `public/`. Depois é só abrir `index.html`.

> Se editar um `.jsx` e **não** rodar `npm run build`, o site continua mostrando a versão antiga.

### Regras do bundle (importante!)

Todos os `.jsx` são concatenados em **um único escopo de script** (sem módulos ES):

- Nada de `import`/`export`.
- `const`/`function` top-level precisam de **nomes únicos entre todos os arquivos** (duplicata = SyntaxError fatal). Prefixe helpers com o nome do módulo (`eggSlug`, `mystStatusTone`…).
- Helpers compartilhados via `window` com guarda: `window.__T = window.__T || (...)`.
- A ordem em `SOURCES` (build.js) importa para código executado no top-level: dados → i18n → seções → app.

## Internacionalização (13 idiomas)

- Idioma-fonte: **pt-BR** (textos inline como fallback; catálogo pt-BR vazio é correto).
- Idiomas oficiais da franquia: en, fr, it, de, es, es-MX, pl, ru, ja, ko, zh-CN, zh-TW — catálogos em `i18n/<code>.js`, carregados sob demanda pelo seletor (nav e rodapé).
- Toda string nova deve passar por `window.__T("chave", "fallback pt")` (UI) ou `window.__TT(prefixo, id, campo, fallback)` (itens de dados). Esquema de chaves: `i18n/KEYS.md`.
- Validar catálogo: `node i18n/check-catalog.js i18n/fr.js` (compara com `en.js`; precisa "APROVADO").
- Referência canônica de chaves: `i18n/_skeleton.json` (pt) + `i18n/en.js` (en).

## Por que é rápido

- Sem transpilação no navegador; React de produção local (sem CDN).
- `content-visibility:auto` nas seções (não remova sem revisar os véus com `z-index:-1` do theme-vi).
- Seções memoizadas (`React.memo`); catálogos de idioma carregados só quando selecionados.
- Animações só com `opacity`/`transform`; tudo respeita `prefers-reduced-motion`.

## Verificação

Smoke test (renderiza a árvore inteira via ReactDOMServer com DOM stubado — pega erro de escopo, referência quebrada e exceção de render em qualquer seção):

```bash
npm run build && node _smoke.js   # precisa terminar "SMOKE OK"
```

## GTA VI — catálogo automático (set/2026)

`scripts/build-vi-catalog.js` importa as categorias públicas do GTA Wiki sobre GTA VI (veículos, armas, personagens, gangues, locais por condado, marcas, fauna, rádios) para `live/vi-catalog.json`, que alimenta a seção **Catálogo VI** (`#vi-catalog`). Só aceita imagens com `GTAVI` no nome do arquivo. A GitHub Action `.github/workflows/vi-catalog.yml` regenera o JSON a cada 6 h e faz commit se algo mudou; a Vercel publica em seguida.

Comandos: `npm run catalog` (regenera o catálogo), `npm run smoke` (build + smoke test).

A base curada de GTA VI (lançamento, edições, Extended Look, **mecânicas** com separação "mostrado pela Rockstar" × "relatado em prévia", trilha, FAQ) continua em `data-vi.jsx`; a seção `#vi-mechanics` vem de `VI_DATA.mechanics`.

### Imagens por jogo

`sections-dossier.jsx` só aceita, para cada ficha, arquivos do GTA Wiki cujo código de jogo no nome (`-GTAV-`, `-GTAVC-`, `-GTAVI-`, `-TLAD-`…) bata com o jogo da ficha (`imageHasGameCode`, ancorado — `GTAV` não casa `GTAVC`). Miniaturas de página vindas de outro jogo são descartadas (`imageBelongsToOtherGame`) e caem no "contexto visual" da ficha, nunca numa foto de outro título.
