/* ============ RÁDIOS (window.RADIOS_DATA) ============
 * As estações de rádio dos jogos principais, com gênero e apresentador(a).
 * `name` e `dj` são nomes próprios (não traduzidos); `genre` e `note` são
 * texto de exibição. Estações acrescentadas depois do lançamento (edições
 * novas ou atualizações de GTA Online) trazem `added`.
 * Este arquivo NÃO renderiza nada. Ordem no bundle: antes de i18n.jsx.
 */
window.RADIOS_DATA = {
  games: [
    {
      id: "gta3", short: "GTA III", name: "Grand Theft Auto III", year: "2001",
      note: "Nove estações e a estreia do formato que virou marca da série: DJs com personalidade, comerciais satíricos e uma rádio só de conversa, a Chatterbox FM, comandada por Lazlow."
    },
    {
      id: "vice-city", short: "Vice City", name: "Grand Theft Auto: Vice City", year: "2002",
      note: "A trilha que redefiniu o uso de música licenciada em jogos: os anos 80 inteiros em nove estações, de Michael Jackson a Iron Maiden, lançados também em uma caixa com sete CDs."
    },
    {
      id: "san-andreas", short: "San Andreas", name: "Grand Theft Auto: San Andreas", year: "2004",
      note: "Onze estações para o começo dos anos 90, com DJs interpretados por Axl Rose, Chuck D e George Clinton, e a rádio de debates WCTR."
    },
    {
      id: "gta4", short: "GTA IV", name: "Grand Theft Auto IV", year: "2008",
      note: "A Liberty City de 2008 tem a seleção mais diversa da série, com estações apresentadas por Iggy Pop, Karl Lagerfeld, Juliette Lewis, DJ Premier e Daddy Yankee."
    },
    {
      id: "gta5", short: "GTA V", name: "Grand Theft Auto V e GTA Online", year: "2013",
      note: "Lançado com 17 estações, o jogo ganhou novas rádios nas edições seguintes e nas atualizações de GTA Online, com curadoria de artistas como Frank Ocean, Rosalía e Flying Lotus."
    }
  ],

  stations: [
    /* ---------------- GTA III ---------------- */
    { id: "iii-head", gameId: "gta3", name: "Head Radio", genre: "Pop e rock", dj: "Michael Hunt" },
    { id: "iii-clef", gameId: "gta3", name: "Double Clef FM", genre: "Ópera e música clássica", dj: "Morgan Merryweather" },
    { id: "iii-kjah", gameId: "gta3", name: "K-JAH", genre: "Reggae e dub", dj: "Horace \"The Pacifist\" Walsh" },
    { id: "iii-rise", gameId: "gta3", name: "Rise FM", genre: "Trance e house", dj: "Andre The Accelerator" },
    { id: "iii-lips", gameId: "gta3", name: "Lips 106", genre: "Pop", dj: "Andee" },
    { id: "iii-game", gameId: "gta3", name: "Game Radio FM", genre: "Hip-hop underground", dj: "Stretch Armstrong e Lord Sear" },
    { id: "iii-msx", gameId: "gta3", name: "MSX FM", genre: "Drum and bass", dj: "MC Codebreaker e DJ Timecode" },
    { id: "iii-flashback", gameId: "gta3", name: "Flashback 95.6", genre: "Pop dos anos 80", dj: "Toni", note: "Toca músicas da trilha do filme Scarface (1983)." },
    { id: "iii-chatterbox", gameId: "gta3", name: "Chatterbox FM", genre: "Rádio de conversa", dj: "Lazlow" },

    /* ---------------- Vice City ---------------- */
    { id: "vc-wildstyle", gameId: "vice-city", name: "Wildstyle", genre: "Hip-hop e electro da velha escola", dj: "Mr. Magic" },
    { id: "vc-flash", gameId: "vice-city", name: "Flash FM", genre: "Pop", dj: "Toni" },
    { id: "vc-kchat", gameId: "vice-city", name: "K-Chat", genre: "Rádio de conversa: entrevistas com celebridades", dj: "Amy Sheckenhausen" },
    { id: "vc-fever", gameId: "vice-city", name: "Fever 105", genre: "Disco, soul e R&B", dj: "Oliver \"Ladykiller\" Biscuit" },
    { id: "vc-vrock", gameId: "vice-city", name: "V-Rock", genre: "Hard rock e heavy metal", dj: "Lazlow" },
    { id: "vc-vcpr", gameId: "vice-city", name: "VCPR (Vice City Public Radio)", genre: "Rádio de conversa: debates", dj: "Maurice Chavez" },
    { id: "vc-espantoso", gameId: "vice-city", name: "Radio Espantoso", genre: "Jazz latino e salsa", dj: "Pepe" },
    { id: "vc-emotion", gameId: "vice-city", name: "Emotion 98.3", genre: "Baladas românticas", dj: "Fernando Martinez" },
    { id: "vc-wave", gameId: "vice-city", name: "Wave 103", genre: "New wave e synth-pop", dj: "Adam First" },

    /* ---------------- San Andreas ---------------- */
    { id: "sa-playback", gameId: "san-andreas", name: "Playback FM", genre: "Hip-hop clássico da Costa Leste", dj: "Forth Right MC (Chuck D)" },
    { id: "sa-krose", gameId: "san-andreas", name: "K-Rose", genre: "Country clássico", dj: "Mary-Beth Maybell" },
    { id: "sa-kdst", gameId: "san-andreas", name: "K-DST", genre: "Rock clássico", dj: "Tommy \"The Nightmare\" Smith (Axl Rose)" },
    { id: "sa-bounce", gameId: "san-andreas", name: "Bounce FM", genre: "Funk", dj: "The Funktipus (George Clinton)" },
    { id: "sa-sfur", gameId: "san-andreas", name: "SF-UR", genre: "House", dj: "Hans Oberlander" },
    { id: "sa-rls", gameId: "san-andreas", name: "Radio Los Santos", genre: "Gangsta rap da Costa Oeste", dj: "Julio G" },
    { id: "sa-radiox", gameId: "san-andreas", name: "Radio X", genre: "Rock alternativo e grunge", dj: "Sage" },
    { id: "sa-csr", gameId: "san-andreas", name: "CSR 103.9", genre: "New jack swing", dj: "Philip \"PM\" Michaels" },
    { id: "sa-kjah", gameId: "san-andreas", name: "K-JAH West", genre: "Reggae e dancehall", dj: "Marshall Peters e Johnny Lawton" },
    { id: "sa-master", gameId: "san-andreas", name: "Master Sounds 98.3", genre: "Funk e soul raros (rare groove)", dj: "Johnny \"The Love Giant\" Parkinson" },
    { id: "sa-wctr", gameId: "san-andreas", name: "WCTR (West Coast Talk Radio)", genre: "Rádio de conversa", dj: "Vários programas", note: "Reúne os programas falados do jogo, incluindo o de Lazlow." },

    /* ---------------- GTA IV ---------------- */
    { id: "iv-vibe", gameId: "gta4", name: "The Vibe 98.8", genre: "Soul e R&B", dj: "Vaughn Harper" },
    { id: "iv-lrr", gameId: "gta4", name: "Liberty Rock Radio 97.8", genre: "Rock clássico", dj: "Iggy Pop" },
    { id: "iv-jnr", gameId: "gta4", name: "Jazz Nation Radio 108.5", genre: "Jazz", dj: "Roy Haynes" },
    { id: "iv-massiveb", gameId: "gta4", name: "Massive B Soundsystem 96.9", genre: "Dancehall", dj: "Bobby Konders" },
    { id: "iv-k109", gameId: "gta4", name: "K109 The Studio", genre: "Disco", dj: "Karl Lagerfeld" },
    { id: "iv-beat", gameId: "gta4", name: "The Beat 102.7", genre: "Hip-hop contemporâneo", dj: "Mister Cee e DJ Green Lantern" },
    { id: "iv-classics", gameId: "gta4", name: "The Classics 104.1", genre: "Hip-hop da velha escola", dj: "DJ Premier" },
    { id: "iv-broker", gameId: "gta4", name: "Radio Broker", genre: "Indie e rock alternativo", dj: "Juliette Lewis" },
    { id: "iv-vladivostok", gameId: "gta4", name: "Vladivostok FM", genre: "Pop e rock do Leste Europeu", dj: "Ruslana" },
    { id: "iv-electrochoc", gameId: "gta4", name: "Electro-Choc", genre: "Electro house", dj: "François K" },
    { id: "iv-sanjuan", gameId: "gta4", name: "San Juan Sounds", genre: "Reggaeton e música latina", dj: "Daddy Yankee" },
    { id: "iv-tuffgong", gameId: "gta4", name: "Tuff Gong Radio", genre: "Reggae (Bob Marley e família)", dj: "Carl Bradshaw" },
    { id: "iv-if99", gameId: "gta4", name: "IF99 (International Funk)", genre: "Afrobeat e funk", dj: "Femi Kuti" },
    { id: "iv-fusion", gameId: "gta4", name: "Fusion FM", genre: "Jazz fusion", dj: "Roy Ayers" },
    { id: "iv-journey", gameId: "gta4", name: "The Journey", genre: "Ambient e eletrônica minimalista", dj: "Voz sintetizada" },
    { id: "iv-lchc", gameId: "gta4", name: "L.C.H.C. (Liberty City Hardcore)", genre: "Hardcore punk", dj: "Jimmy Gestapo" },
    { id: "iv-wktt", gameId: "gta4", name: "WKTT Radio", genre: "Rádio de conversa: sátira conservadora", dj: "Vários programas" },
    { id: "iv-plr", gameId: "gta4", name: "PLR (Public Liberty Radio)", genre: "Rádio de conversa: sátira progressista", dj: "Vários programas" },
    { id: "iv-integrity", gameId: "gta4", name: "Integrity 2.0", genre: "Rádio de conversa", dj: "Lazlow" },

    /* ---------------- GTA V / GTA Online ---------------- */
    { id: "v-lsrr", gameId: "gta5", name: "Los Santos Rock Radio", genre: "Rock clássico", dj: "Kenny Loggins" },
    { id: "v-nonstop", gameId: "gta5", name: "Non-Stop-Pop FM", genre: "Pop", dj: "Cara Delevingne" },
    { id: "v-rls", gameId: "gta5", name: "Radio Los Santos", genre: "Hip-hop contemporâneo", dj: "Big Boy" },
    { id: "v-channelx", gameId: "gta5", name: "Channel X", genre: "Punk rock", dj: "Keith Morris" },
    { id: "v-wcc", gameId: "gta5", name: "West Coast Classics", genre: "Hip-hop clássico da Costa Oeste", dj: "DJ Pooh" },
    { id: "v-rebel", gameId: "gta5", name: "Rebel Radio", genre: "Country", dj: "Jesco White" },
    { id: "v-soulwax", gameId: "gta5", name: "Soulwax FM", genre: "Música eletrônica", dj: "Soulwax" },
    { id: "v-eastlos", gameId: "gta5", name: "East Los FM", genre: "Música mexicana e latina", dj: "DJ Camilo e Don Cheto" },
    { id: "v-blueark", gameId: "gta5", name: "Blue Ark", genre: "Reggae, dub e dancehall", dj: "Lee \"Scratch\" Perry" },
    { id: "v-wwfm", gameId: "gta5", name: "WorldWide FM", genre: "Jazz, soul e eletrônica global", dj: "Gilles Peterson" },
    { id: "v-flylo", gameId: "gta5", name: "FlyLo FM", genre: "Eletrônica experimental e hip-hop", dj: "Flying Lotus" },
    { id: "v-lowdown", gameId: "gta5", name: "The Lowdown 91.1", genre: "Soul clássico", dj: "Pam Grier" },
    { id: "v-mirrorpark", gameId: "gta5", name: "Radio Mirror Park", genre: "Indie pop e chillwave", dj: "Twin Shadow" },
    { id: "v-space", gameId: "gta5", name: "Space 103.2", genre: "Funk", dj: "Bootsy Collins" },
    { id: "v-vinewood", gameId: "gta5", name: "Vinewood Boulevard Radio", genre: "Garage rock", dj: "Nate Williams e Stephen Pope (Wavves)" },
    { id: "v-wctr", gameId: "gta5", name: "West Coast Talk Radio", genre: "Rádio de conversa", dj: "Vários programas" },
    { id: "v-bcr", gameId: "gta5", name: "Blaine County Radio", genre: "Rádio de conversa", dj: "Vários programas" },
    { id: "v-lab", gameId: "gta5", name: "The Lab", genre: "Hip-hop", dj: "The Alchemist e Oh No", added: "2015" },
    { id: "v-blonded", gameId: "gta5", name: "Blonded Los Santos 97.8 FM", genre: "R&B, hip-hop e seleção pessoal", dj: "Frank Ocean", added: "2017" },
    { id: "v-lsur", gameId: "gta5", name: "Los Santos Underground Radio", genre: "House e techno", dj: "Solomun, Tale Of Us, Dixon e The Black Madonna", added: "2018" },
    { id: "v-ifruit", gameId: "gta5", name: "iFruit Radio", genre: "Hip-hop e grime", dj: "Danny Brown e Skepta", added: "2019" },
    { id: "v-kult", gameId: "gta5", name: "Kult FM 99.1", genre: "Pós-punk e new wave", dj: "Julian Casablancas", added: "2020" },
    { id: "v-stillslipping", gameId: "gta5", name: "Still Slipping Los Santos", genre: "Eletrônica britânica", dj: "Joy Orbison", added: "2020" },
    { id: "v-musiclocker", gameId: "gta5", name: "The Music Locker", genre: "House e techno", dj: "Moodymann, Keinemusik e Palms Trax", added: "2020" },
    { id: "v-motomami", gameId: "gta5", name: "MOTOMAMI Los Santos", genre: "Pop latino e experimental", dj: "Rosalía e Arca", added: "2021" }
  ]
};
