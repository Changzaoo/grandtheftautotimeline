# Grand Theft Auto — O Arquivo Completo (Dossiê GTA)

Site estático em React, **pré-compilado** para carregar rápido (sem Babel no navegador), repaginado com a identidade visual **Vice Sunset** inspirada no site oficial do GTA VI (rockstargames.com/VI): céu em degradê de pôr-do-sol que progride com o scroll, texto chrome rosa→dourado, serifada itálica (Playfair Display), polaroids, grão de filme, palmeiras e countdown para 19/11/2026.

## Estrutura

| Camada | Arquivos |
| --- | --- |
| Dados | `data*.jsx` (saga), `data-vi.jsx` (GTA VI), `data-easter-eggs.jsx` (105 eggs), `data-mysteries.jsx` (37 casos) |
| i18n | `i18n.jsx` (runtime + seletor de idiomas), `i18n/<code>.js` (catálogos), `i18n/KEYS.md` (esquema), `i18n/check-catalog.js` (validador) |
| Seções | `sections-*.jsx`; novas: `sections-vi.jsx` (herói VI, personagens, Leonida, dossiê VI), `sections-easter-eggs.jsx`, `sections-mysteries.jsx` |
| Tema | `styles.css` + `theme-neo.css` + **`theme-vi.css`** (Vice Sunset, carregado por último) |
| App | `app.jsx` (composição, scroll-reveal, remontagem na troca de idioma), `enhance.jsx` (3D, cheat codes de página) |

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
