/* ============ A SAGA, JOGO A JOGO (window.SAGA) ============
 * A página principal percorre a série em ordem de lançamento. Cada jogo é um
 * capítulo com as próprias seções (vídeos, história, missões, veículos, armas,
 * personagens, easter eggs, mistérios, códigos, rádios) e abre com uma cena:
 * a sala, o aparelho em que ele era jogado e a mídia saindo da caixa.
 *
 * Campos:
 *  tema       chave de data-temas-gta.jsx / theme-vi.css (§T)
 *  jogo       id em gamesData (e nos dossiês de missões, veículos, armas)
 *  missoes    ids em live/missions.json
 *  ovos       gameId em EASTER_EGGS_DATA, ou lista de ids de easter eggs
 *  misterios  gameId em MYSTERIES_DATA
 *  codigos / radios  gameId em CHEATS_DATA / RADIOS_DATA
 *  titulos    nomes usados em charactersData.games
 *  aparelho   a cena de abertura (pc, ps1, ps2, gba, psp, ps3, x360, ds, ps4, ps5)
 *  midia      cd, dvd, bd, umd, cartucho-gba, cartucho-ds
 *  sala       época da sala (90s, 2000s, hd)
 */
window.SAGA = [
  { tema: "gta1", jogo: "gta-1", missoes: ["gta-1"], ovos: "gta1", titulos: ["Grand Theft Auto"],
    aparelho: "pc", midia: "cd", sala: "90s", plataforma: "PC · Windows 95", ano: "1997", cidade: "Liberty City, San Andreas e Vice City" },
  { tema: "london", jogo: "london-1969", extra: ["london-1961"], missoes: ["london-1969", "london-1961"], titulos: [],
    aparelho: "ps1", midia: "cd", sala: "90s", plataforma: "PlayStation", ano: "1999", cidade: "Londres" },
  { tema: "gta2", jogo: "gta-2", missoes: ["gta-2"], ovos: "gta2", titulos: ["Grand Theft Auto 2"],
    aparelho: "pc", midia: "cd", sala: "90s", plataforma: "PC · Windows 98", ano: "1999", cidade: "Anywhere City" },
  { tema: "gta3", jogo: "gta-iii", missoes: ["gta-iii"], ovos: "gta3", misterios: "gta3", codigos: "gta3", radios: "gta3", titulos: ["Grand Theft Auto III"],
    aparelho: "ps2", midia: "dvd", sala: "2000s", plataforma: "PlayStation 2", ano: "2001", cidade: "Liberty City" },
  { tema: "vc", jogo: "vice-city", missoes: ["vice-city"], ovos: "vice-city", misterios: "vice-city", codigos: "vice-city", radios: "vice-city", titulos: ["Grand Theft Auto: Vice City"],
    aparelho: "ps2", midia: "dvd", sala: "2000s", plataforma: "PlayStation 2", ano: "2002", cidade: "Vice City" },
  { tema: "sa", jogo: "san-andreas", missoes: ["san-andreas"], ovos: "san-andreas", misterios: "san-andreas", codigos: "san-andreas", radios: "san-andreas", titulos: ["Grand Theft Auto: San Andreas"],
    aparelho: "ps2", midia: "dvd", sala: "2000s", plataforma: "PlayStation 2", ano: "2004", cidade: "San Andreas" },
  { tema: "advance", jogo: "gta-advance", missoes: ["gta-advance"], ovos: ["port-advance-8ball"], titulos: ["Grand Theft Auto Advance"],
    aparelho: "gba", midia: "cartucho-gba", sala: "2000s", plataforma: "Game Boy Advance", ano: "2004", cidade: "Liberty City" },
  { tema: "lcs", jogo: "liberty-city-stories", missoes: ["liberty-city-stories"], ovos: ["port-lcs-toni-cipriani", "port-lcs-fort-staunton"], titulos: ["Grand Theft Auto: Liberty City Stories"],
    aparelho: "psp", midia: "umd", sala: "2000s", plataforma: "PSP", ano: "2005", cidade: "Liberty City" },
  { tema: "vcs", jogo: "vice-city-stories", missoes: ["vice-city-stories"], ovos: ["port-vcs-victor-vance", "port-vcs-phil-collins", "port-vcs-domestobot", "port-phil-cassidy-braco"], titulos: ["Grand Theft Auto: Vice City Stories"],
    aparelho: "psp", midia: "umd", sala: "2000s", plataforma: "PSP", ano: "2006", cidade: "Vice City" },
  { tema: "gta4", jogo: "gta-iv", missoes: ["gta-iv"], ovos: "gta4", misterios: "gta4", codigos: "gta4", radios: "gta4", titulos: ["Grand Theft Auto IV"],
    aparelho: "ps3", midia: "bd", sala: "hd", plataforma: "PlayStation 3 · Xbox 360", ano: "2008", cidade: "Liberty City" },
  { tema: "tlad", jogo: "lost-and-damned", missoes: ["lost-and-damned"], ovos: ["eflc-memorial-lost", "eflc-diamantes-tres-jogos", "eflc-vice-city-fm-fernando"], titulos: ["Grand Theft Auto IV: The Lost and Damned"],
    aparelho: "x360", midia: "dvd", sala: "hd", plataforma: "Xbox 360", ano: "2009", cidade: "Liberty City" },
  { tema: "cw", jogo: "chinatown-wars", missoes: ["chinatown-wars"], ovos: "chinatown-wars", titulos: ["Grand Theft Auto: Chinatown Wars"],
    aparelho: "ds", midia: "cartucho-ds", sala: "hd", plataforma: "Nintendo DS", ano: "2009", cidade: "Liberty City" },
  { tema: "tbogt", jogo: "ballad-gay-tony", missoes: ["ballad-gay-tony"], ovos: ["eflc-princess-robot-bubblegum", "eflc-ouro-de-yusuf"], titulos: ["Grand Theft Auto IV: The Ballad of Gay Tony"],
    aparelho: "x360", midia: "dvd", sala: "hd", plataforma: "Xbox 360", ano: "2009", cidade: "Liberty City" },
  { tema: "gta5", jogo: "gta-v", missoes: ["gta-v"], ovos: "gta5", misterios: "gta5", codigos: "gta5", radios: "gta5", titulos: ["Grand Theft Auto V"],
    aparelho: "ps3", midia: "bd", sala: "hd", plataforma: "PlayStation 3", ano: "2013", cidade: "Los Santos e Blaine County" },
  { tema: "online", jogo: "gta-online", missoes: ["gta-online"], ovos: "gta-online", misterios: "gta-online", titulos: ["Grand Theft Auto Online", "Grand Theft Auto Online: The Contract"],
    aparelho: "ps4", midia: "bd", sala: "hd", plataforma: "PlayStation 4", ano: "2013 →", cidade: "Los Santos e Cayo Perico" },
  { tema: "gta6", jogo: "gta-vi", missoes: [], ovos: "gta6", misterios: "gta6", titulos: ["Grand Theft Auto VI"],
    aparelho: "ps5", midia: "bd", sala: "hd", plataforma: "PlayStation 5 · Xbox Series", ano: "2026", cidade: "Leonida" }
];
window.sagaNavData = window.SAGA.map((c, i) => ({ id: "jogo-" + c.tema, label: c.ano + " · " + ({
  gta1: "GTA 1", london: "London", gta2: "GTA 2", gta3: "GTA III", vc: "Vice City", sa: "San Andreas", advance: "Advance",
  lcs: "LCS", vcs: "VCS", gta4: "GTA IV", tlad: "Lost and Damned", cw: "Chinatown Wars", tbogt: "Gay Tony",
  gta5: "GTA V", online: "Online", gta6: "GTA VI"
})[c.tema], k: String(i + 1).padStart(2, "0") }));
