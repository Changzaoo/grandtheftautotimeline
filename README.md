# Urban Universe — Dossiê GTA

Site estático em React, **pré-compilado** para carregar rápido (sem Babel no navegador).

## Como editar

O código-fonte continua nos arquivos `.jsx` (`app.jsx`, `sections-dossier.jsx`, `data-*.jsx`, etc.).
Depois de editar **qualquer** `.jsx`, rode o build para regenerar o bundle:

```bash
npm install      # só na primeira vez
npm run build
```

Isso gera:
- `dist/app.bundle.js` — todo o JSX transpilado e concatenado em um único arquivo.
- `vendor/react*.js` — React/ReactDOM de produção (cópia local, sem CDN).

Depois é só abrir `index.html`.

> Se editar um `.jsx` e **não** rodar `npm run build`, o site continua mostrando a versão antiga (o navegador lê `dist/app.bundle.js`, não os `.jsx`).

## Por que ficou mais rápido

- O navegador não transpila mais ~700 KB de JSX a cada carregamento (era o maior gargalo).
- React de produção (menor e mais rápido que a build de desenvolvimento) e servido localmente.
- `content-visibility:auto` nas seções: o navegador pula a renderização do que está fora da tela.
- Seções memoizadas (`React.memo`): rolar a página ou abrir o modal não re-renderiza a árvore inteira.

## Animação de scroll

Os blocos surgem ao descer e desaparecem ao subir. Um único `IntersectionObserver`
(em `app.jsx`) liga/desliga a classe `.reveal--in`; a animação usa só `opacity`/`transform`
(acelerada por GPU). Respeita `prefers-reduced-motion`.
