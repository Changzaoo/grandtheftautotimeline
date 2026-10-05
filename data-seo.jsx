/* ============ ROTAS & SEO (window.SEO_ROUTES / window.__ROUTE) ============
 * O dossiê é uma página só, mas cada tema também existe como PÁGINA PRÓPRIA
 * (/games/, /easter-eggs/, /en/gta-6/ …) pré-renderizada no build por
 * scripts/prerender.js — é o que dá a cada assunto um <title>, uma descrição e
 * um endereço indexável. Este arquivo é a fonte única dessas rotas: o build lê
 * daqui para gerar HTML, sitemap e hreflang; o app lê daqui para saber quais
 * seções mostrar e para onde apontam os links do menu.
 *
 * Idioma na URL: pt-BR mora na raiz; os demais em /<código em minúsculas>/.
 * `title`, `heading`, `description` e `label` são traduzidos pelo registro de
 * dados do i18n.jsx (campos de exibição); `id`, `slug` e `sections` não.
 * Ordem no bundle: ANTES de i18n.jsx (o boot do idioma lê window.__ROUTE).
 */
window.SEO_SITE = {
  origin: "https://gta.vnmax.org",
  name: "Dossiê GTA",
  defaultLang: "pt-BR"
};

window.SEO_ROUTES = [
  {
    id: "home", slug: "", sections: null,
    label: "Dossiê completo",
    title: "Grand Theft Auto: O Arquivo Completo — de GTA 1 a GTA VI",
    heading: "Grand Theft Auto: O Arquivo Completo",
    description: "Dossiê interativo da saga Grand Theft Auto: timeline, jogos, personagens, cidades, códigos, rádios, easter eggs, mistérios e tudo sobre GTA VI (19.11.2026)."
  },
  {
    id: "timeline", slug: "timeline", sections: ["timeline"],
    label: "Timeline",
    title: "Linha do tempo de GTA: a ordem cronológica de todos os jogos",
    heading: "Linha do tempo de Grand Theft Auto",
    description: "A cronologia completa de Grand Theft Auto: de Londres 1961 a Leonida, a ordem da história e a ordem de lançamento de todos os jogos da saga."
  },
  {
    id: "games", slug: "games", sections: ["games"],
    label: "Jogos",
    title: "Todos os jogos de GTA: história, protagonistas e legado",
    heading: "Todos os jogos de Grand Theft Auto",
    description: "Ficha de cada jogo da série GTA, de 1997 a GTA VI: ano, cidade, protagonista, enredo, bastidores de desenvolvimento e por que cada um importa."
  },
  {
    id: "missions", slug: "missions", sections: ["missions"],
    label: "Missões",
    title: "Missões de GTA: as mais marcantes de cada jogo, em vídeo",
    heading: "Missões de Grand Theft Auto",
    description: "As missões que definiram Grand Theft Auto, jogo a jogo: contexto, objetivos, curiosidades e vídeo de cada uma, de GTA III a GTA V."
  },
  {
    id: "vehicles", slug: "vehicles", sections: ["vehicles"],
    label: "Veículos",
    title: "Veículos de GTA: carros, motos, aviões e os ícones da série",
    heading: "Veículos de Grand Theft Auto",
    description: "Os veículos mais icônicos de Grand Theft Auto — Banshee, Infernus, Rhino, Hydra e muito mais — com a inspiração real e os jogos em que aparecem."
  },
  {
    id: "weapons", slug: "weapons", sections: ["weapons"],
    label: "Armas",
    title: "Armas de GTA: o arsenal completo da série",
    heading: "Armas de Grand Theft Auto",
    description: "O arsenal de Grand Theft Auto: pistolas, fuzis, explosivos e armas especiais, com a arma real que inspirou cada uma e onde elas aparecem."
  },
  {
    id: "development", slug: "development", sections: ["development"],
    label: "Desenvolvimento",
    title: "Como GTA foi feito: bastidores, engines e a RAGE",
    heading: "Os bastidores do desenvolvimento de GTA",
    description: "Dos tempos da DMA Design à engine RAGE: como cada Grand Theft Auto foi desenvolvido, as decisões técnicas, os cortes e as polêmicas."
  },
  {
    id: "characters", slug: "characters", sections: ["characters"],
    label: "Personagens",
    title: "Personagens de GTA: protagonistas, vilões e aliados",
    heading: "Personagens de Grand Theft Auto",
    description: "Biografia dos personagens de Grand Theft Auto: Tommy Vercetti, CJ, Niko Bellic, Michael, Franklin, Trevor, Lucia, Jason e dezenas de outros."
  },
  {
    id: "cities", slug: "cities", sections: ["cities"],
    label: "Cidades",
    title: "Cidades de GTA: Liberty City, Vice City, San Andreas e Leonida",
    heading: "As cidades de Grand Theft Auto",
    description: "Liberty City, Vice City, Los Santos, San Fierro, Las Venturas e Leonida: os mapas de GTA, os bairros e as cidades reais que inspiraram cada um."
  },
  {
    id: "gangs", slug: "gangs", sections: ["gangs"],
    label: "Gangues",
    title: "Gangues e organizações de GTA: Grove Street, Ballas, máfias",
    heading: "Gangues e organizações de Grand Theft Auto",
    description: "Grove Street Families, Ballas, Vagos, The Lost MC, as famílias da máfia de Liberty City e os cartéis: quem é quem no crime organizado de GTA."
  },
  {
    id: "universes", slug: "universes", sections: ["universes"],
    label: "Universos",
    title: "Universos de GTA: 2D, 3D e HD — como os jogos se conectam",
    heading: "Os universos de Grand Theft Auto",
    description: "Os universos 2D, 3D e HD de Grand Theft Auto explicados: quais jogos compartilham a mesma continuidade e o que conecta uma era à outra."
  },
  {
    id: "rockstar", slug: "rockstar", sections: ["rockstar"],
    label: "Rockstar Games",
    title: "História da Rockstar Games: da DMA Design a GTA VI",
    heading: "A história da Rockstar Games",
    description: "A trajetória da Rockstar Games e das pessoas por trás de GTA: DMA Design, os irmãos Houser, Leslie Benzies, Rockstar North e os estúdios atuais."
  },
  {
    id: "gta-online", slug: "gta-online", sections: ["gtaonline"],
    label: "GTA Online",
    title: "GTA Online: todas as atualizações e DLCs desde 2013",
    heading: "GTA Online: a linha do tempo completa",
    description: "A história de GTA Online atualização por atualização: Heists, Doomsday, Diamond Casino, Cayo Perico, Los Santos Tuners e os lançamentos mais recentes."
  },
  {
    id: "gta-6", slug: "gta-6", sections: ["vi-characters", "vi-places", "gta6", "vi-mechanics"],
    label: "GTA VI",
    title: "GTA 6: data de lançamento, personagens, mapa e tudo o que se sabe",
    heading: "GTA VI: tudo o que se sabe",
    description: "GTA VI chega em 19 de novembro de 2026 para PS5 e Xbox Series X|S. Lucia, Jason, o mapa de Leonida, trailers, mecânicas e perguntas frequentes."
  },
  {
    id: "gta-6-catalog", slug: "gta-6-catalog", sections: ["vi-catalog"],
    label: "Catálogo VI",
    title: "GTA 6: veículos, armas, personagens e locais confirmados",
    heading: "Catálogo de GTA VI",
    description: "Catálogo atualizado de GTA VI: veículos, armas, personagens, gangues, locais de Leonida, marcas, animais e rádios identificados no material oficial."
  },
  {
    id: "cheats", slug: "cheats", sections: ["cheats"],
    label: "Códigos",
    title: "Códigos de GTA: cheats de GTA III, Vice City, San Andreas, IV e V",
    heading: "Códigos e cheats de Grand Theft Auto",
    description: "Todos os códigos clássicos de GTA: armas, vida, colete, dinheiro, carros, clima e nível de procurado em GTA III, Vice City, San Andreas, GTA IV e GTA V."
  },
  {
    id: "radios", slug: "radios", sections: ["radios"],
    label: "Rádios",
    title: "Rádios de GTA: todas as estações, DJs e gêneros de cada jogo",
    heading: "As rádios de Grand Theft Auto",
    description: "Guia das estações de rádio de GTA: Flash FM, V-Rock, K-DST, Radio Los Santos, Non-Stop-Pop FM e todas as outras, com DJ, gênero e jogo."
  },
  {
    id: "easter-eggs", slug: "easter-eggs", sections: ["eastereggs"],
    label: "Easter Eggs",
    title: "Easter eggs de GTA: mais de 100 segredos da saga",
    heading: "Easter eggs de Grand Theft Auto",
    description: "Mais de 100 easter eggs verificados de Grand Theft Auto, com onde encontrar e como ativar: de Gouranga ao coração de Liberty City e aos OVNIs de GTA V."
  },
  {
    id: "mysteries", slug: "mysteries", sections: ["mysteries"],
    label: "Mistérios",
    title: "Mistérios de GTA: Monte Chiliad, Pé-Grande e os mitos da série",
    heading: "Mistérios e mitos de Grand Theft Auto",
    description: "O mistério do Monte Chiliad, o Pé-Grande de San Andreas, Ratman, o jetpack e outros casos: o que foi provado, o que foi desmentido e o que segue aberto."
  },
  {
    id: "glossary", slug: "glossary", sections: ["glossary"],
    label: "Glossário",
    title: "Glossário de GTA: termos, siglas e gírias da série",
    heading: "Glossário de Grand Theft Auto",
    description: "De RAGE a Wanted Level: o glossário de Grand Theft Auto explica os termos, as siglas e os conceitos que aparecem nos jogos e na comunidade."
  }
];

(function () {
  /* diretório na URL (minúsculas) -> código de idioma canônico */
  var LANG_DIRS = {
    "en": "en", "fr": "fr", "it": "it", "de": "de", "es": "es", "es-mx": "es-MX",
    "pl": "pl", "ru": "ru", "ja": "ja", "ko": "ko", "zh-cn": "zh-CN", "zh-tw": "zh-TW"
  };
  var routes = window.SEO_ROUTES;
  var home = routes[0];

  /* "/en/easter-eggs/" -> { lang: "en", route: <easter-eggs> } */
  window.__seoParse = function (pathname) {
    var parts = String(pathname || "/").split("/").filter(Boolean);
    var lang = null;
    if (parts.length && LANG_DIRS[parts[0].toLowerCase()]) lang = LANG_DIRS[parts.shift().toLowerCase()];
    var slug = (parts[0] || "").toLowerCase();
    var route = home;
    for (var i = 1; i < routes.length; i++) if (routes[i].slug === slug) route = routes[i];
    return { lang: lang, route: route };
  };

  window.__seoPath = function (lang, slug, hash) {
    var p = "/";
    if (lang && lang !== window.SEO_SITE.defaultLang) p += String(lang).toLowerCase() + "/";
    if (slug) p += slug + "/";
    return p + (hash ? "#" + hash : "");
  };

  window.__seoRouteForSection = function (id) {
    for (var i = 1; i < routes.length; i++) {
      if (routes[i].sections.indexOf(id) !== -1) return routes[i];
    }
    return null;
  };

  /* Aberto direto do disco (file://) não há raiz de site: só âncoras. */
  var isFile = function () { return !window.location || window.location.protocol === "file:"; };

  /* Endereço de uma seção: a página do tema, se houver; senão, a âncora no
   * dossiê completo. É o href dos links de menu — rastreável pelos buscadores. */
  window.__seoHref = function (id) {
    if (isFile()) return "#" + id;
    var route = window.__seoRouteForSection(id);
    return route ? window.__seoPath(window.__lang, route.slug) : window.__seoPath(window.__lang, "", id === "overview" ? "" : id);
  };
  window.__seoHomeHref = function () { return isFile() ? "#overview" : window.__seoPath(window.__lang, ""); };

  /* Troca de idioma pelo seletor: o endereço acompanha, sem recarregar. */
  window.__seoSyncUrl = function (lang) {
    if (isFile() || !window.history || !window.history.replaceState) return;
    try {
      var slug = window.__ROUTE && window.__ROUTE.route ? window.__ROUTE.route.slug : "";
      window.history.replaceState(null, "", window.__seoPath(lang, slug) + (window.location.hash || ""));
    } catch (e) { /* sem history: segue na mesma URL */ }
  };

  window.__ROUTE = window.__ROUTE || window.__seoParse(window.location ? window.location.pathname : "/");
})();
