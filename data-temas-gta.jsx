/* ============ TEMA POR JOGO (window.gtaTema) ============
 * Onde o site apresenta UM GTA específico (cartão de jogo, aba selecionada,
 * bloco de códigos/rádios, easter egg, mistério, modal do dossiê, vídeos…),
 * aquela área recebe data-gta="<chave>" e o CSS (theme-vi.css §T) redefine ali
 * as variáveis do site — cores, fonte dos títulos, textura de fundo — com a
 * identidade daquele jogo. É a mesma identidade das séries em vídeo.
 *
 * gtaTema(x) aceita os vários formatos de id e título usados no site
 * ("gta-iii", "gta3", "vice-city", "Grand Theft Auto: San Andreas"…).
 */
window.GTA_TEMA_ALIAS = {
  gta1: ["gta-1", "gta1", "grand theft auto", "gta 1", "grand theft auto (1997)"],
  london: ["london-1969", "london-1961", "london", "gta: london 1969", "gta: london 1961", "grand theft auto: london 1969", "grand theft auto: london 1961"],
  gta2: ["gta-2", "gta2", "grand theft auto 2", "gta 2"],
  gta3: ["gta-iii", "gta3", "grand theft auto iii", "gta iii", "trilogy-definitive"],
  vc: ["vice-city", "vc", "grand theft auto: vice city", "gta: vice city", "vice city"],
  sa: ["san-andreas", "sa", "grand theft auto: san andreas", "gta: san andreas", "san andreas"],
  advance: ["gta-advance", "advance", "grand theft auto advance", "gta advance"],
  lcs: ["liberty-city-stories", "lcs", "portateis", "grand theft auto: liberty city stories", "gta: liberty city stories", "liberty city stories"],
  vcs: ["vice-city-stories", "vcs", "grand theft auto: vice city stories", "gta: vice city stories", "vice city stories"],
  gta4: ["gta-iv", "gta4", "grand theft auto iv", "gta iv", "eflc"],
  tlad: ["lost-and-damned", "tlad", "grand theft auto iv: the lost and damned", "gta iv: the lost and damned", "the lost and damned"],
  cw: ["chinatown-wars", "cw", "grand theft auto: chinatown wars", "gta: chinatown wars", "chinatown wars"],
  tbogt: ["ballad-gay-tony", "tbogt", "grand theft auto iv: the ballad of gay tony", "gta iv: the ballad of gay tony", "the ballad of gay tony"],
  gta5: ["gta-v", "gta5", "grand theft auto v", "gta v"],
  online: ["gta-online", "online", "grand theft auto online", "gta online"],
  gta6: ["gta-vi", "gta6", "grand theft auto vi", "gta vi"]
};
(function () {
  const map = {};
  Object.keys(window.GTA_TEMA_ALIAS).forEach((k) => window.GTA_TEMA_ALIAS[k].forEach((a) => { map[a] = k; }));
  window.gtaTema = (x) => {
    if (!x) return undefined;
    const v = String(x).trim().toLowerCase();
    if (map[v]) return map[v];
    return undefined;
  };
})();
