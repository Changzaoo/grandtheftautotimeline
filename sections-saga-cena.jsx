/* ============ A SAGA · CENA DE ABERTURA (SagaCena) ============
 * Antes de cada capítulo: a sala da época, o aparelho em que o jogo rodava,
 * a caixa que entra e abre, a mídia que voa até o aparelho, o LED que acende,
 * a tela que liga com a capa e a câmera que mergulha na tela.
 *
 * Tudo é dirigido pelo scroll (p ∈ [0,1] dentro de .sgc-wrap), só com
 * transform/opacity, em requestAnimationFrame e sem estado React por quadro.
 * Coordenadas da cena: viewBox 1000 × 600 (x/10 % e y/6 % no HTML;
 * 1em dentro de .sgc-cena = 10 unidades da cena).
 */

const sagaClamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
const sagaSeg = (p, a, b) => sagaClamp((p - a) / (b - a));
const sagaLerp = (a, b, t) => a + (b - a) * t;
const sagaEase = {
  inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  out: (t) => 1 - Math.pow(1 - t, 3),
  in: (t) => t * t * t,
  outQuart: (t) => 1 - Math.pow(1 - t, 4),
  inQuad: (t) => t * t,
  outBack: (t) => { const c1 = 1.4, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); }
};

/* ---------- mídias e caixas (unidades da cena) ---------- */
const SAGA_MIDIAS = {
  cd: { tipo: "disco", w: 100, h: 100, caixa: { w: 130, h: 115, d: 10, estilo: "jewel" } },
  dvd: { tipo: "disco", w: 100, h: 100, caixa: { w: 118, h: 166, d: 14, estilo: "dvd" } },
  bd: { tipo: "disco", w: 100, h: 100, caixa: { w: 120, h: 152, d: 12, estilo: "bd" } },
  umd: { tipo: "umd", w: 96, h: 100, caixa: { w: 116, h: 186, d: 14, estilo: "umd" } },
  "cartucho-gba": { tipo: "cart-gba", w: 132, h: 80, caixa: { w: 150, h: 150, d: 26, estilo: "papelao" } },
  "cartucho-ds": { tipo: "cart-ds", w: 80, h: 74, caixa: { w: 122, h: 132, d: 14, estilo: "ds" } }
};

const SAGA_PLAT_MIDIA = { pc: "PC CD-ROM", ps1: "PlayStation", ps2: "PlayStation 2 · DVD", gba: "Game Boy Advance", psp: "PSP", ps3: "PS3 · Blu-ray", x360: "Xbox 360 · DVD", ds: "Nintendo DS", ps4: "PS4 · Blu-ray", ps5: "PS5 · Blu-ray" };

/* ---------- aparelhos: geometria das peças animadas ----------
 * tela: retângulo exato da tela no SVG · leds: luzes do aparelho · led2: luz da TV
 * caixa: centro onde a caixa pousa · entrada: como a mídia entra
 * alvo: ponto de chegada (s = escala, sy = achatamento ao deitar)
 */
const SAGA_TV_HD = { x: 220, y: 64, w: 480, h: 270, r: 2, tipo: "plana" };
const SAGA_APARELHOS = {
  pc: {
    sala: "90s", tela: { x: 378, y: 146, w: 204, h: 153, r: 12, tipo: "crt" },
    leds: [{ x: 668, y: 330, w: 7, h: 7 }], led2: { x: 572, y: 338 },
    caixa: { x: 268, y: 296 }, entrada: "bandeja",
    bandeja: { x: 647, y: 214, w: 100, prof: 46, placa: 10, cor: "bege" },
    alvo: { x: 697, y: 237, s: 0.84, sy: 0.3 }
  },
  ps1: {
    sala: "90s", tela: { x: 352, y: 116, w: 296, h: 222, r: 16, tipo: "crt" },
    leds: [{ x: 427, y: 505, w: 5.5, h: 5 }], led2: { x: 362, y: 361 },
    caixa: { x: 732, y: 296 }, entrada: "tampa",
    tampa: { x: 548, y: 516, w: 128, h: 40 },
    alvo: { x: 548, y: 517, s: 1.12, sy: 0.3 }
  },
  ps2: {
    sala: "2000s", tela: { x: 344, y: 108, w: 312, h: 234, r: 10, tipo: "crt" },
    leds: [{ x: 590, y: 447, w: 5, h: 5 }], led2: { x: 642, y: 361 },
    caixa: { x: 740, y: 296 }, entrada: "bandeja",
    bandeja: { x: 372, y: 440, w: 196, prof: 54, placa: 22, cor: "preto" },
    alvo: { x: 470, y: 467, s: 1.22, sy: 0.3 }
  },
  gba: {
    sala: "2000s", mesa: true, tela: { x: 377, y: 362, w: 146, h: 98, r: 2, tipo: "lcd" },
    leds: [{ x: 366, y: 467, w: 5, h: 5 }],
    caixa: { x: 726, y: 316 }, entrada: "encaixe",
    alvo: { x: 450, y: 236, fy: 332, corte: 324, some: false, s: 1 }
  },
  psp: {
    sala: "2000s", mesa: true, tela: { x: 341, y: 358, w: 218, h: 124, r: 2, tipo: "lcd" },
    leds: [{ x: 286, y: 478, w: 5, h: 4 }],
    caixa: { x: 738, y: 298 }, entrada: "encaixe",
    alvo: { x: 450, y: 252, fy: 404, corte: 340, some: true, s: 1 }
  },
  ps3: {
    sala: "hd", tela: SAGA_TV_HD, leds: [{ x: 772, y: 376, w: 4.5, h: 4.5 }], led2: { x: 460, y: 340 },
    caixa: { x: 300, y: 282 }, entrada: "fenda",
    alvo: { x: 660, y: 379.8, s: 0.84 }
  },
  x360: {
    sala: "hd", tela: SAGA_TV_HD, leds: [{ x: 764, y: 364, w: 21, h: 21, forma: "anel" }], led2: { x: 460, y: 340 },
    caixa: { x: 300, y: 282 }, entrada: "bandeja",
    bandeja: { x: 606, y: 359, w: 124, prof: 38, placa: 11, cor: "branco" },
    alvo: { x: 668, y: 378, s: 0.98, sy: 0.28 }
  },
  ds: {
    sala: "hd", mesa: true, tela: { x: 375, y: 183, w: 150, h: 112, r: 2, tipo: "lcd" },
    leds: [{ x: 577, y: 335, w: 5, h: 5 }],
    caixa: { x: 734, y: 330 }, entrada: "encaixe",
    alvo: { x: 450, y: 96, fy: 206, corte: 151, some: true, s: 1 }
  },
  ps4: {
    sala: "hd", tela: SAGA_TV_HD, leds: [{ x: 648, y: 355, w: 2.4, h: 26, forma: "barra", rot: 9 }], led2: { x: 460, y: 340 },
    caixa: { x: 300, y: 282 }, entrada: "fenda",
    alvo: { x: 662, y: 384.2, s: 0.8 }
  },
  ps5: {
    sala: "hd", tela: { x: 196, y: 92, w: 456, h: 256, r: 2, tipo: "plana" },
    leds: [{ x: 722.3, y: 276, w: 2.6, h: 200, forma: "barra" }, { x: 749.8, y: 276, w: 2.6, h: 200, forma: "barra" }],
    led2: { x: 424, y: 354 },
    caixa: { x: 290, y: 296 }, entrada: "fendaV",
    alvo: { x: 770.5, y: 346, s: 0.8 }
  }
};

/* ---------- prédios das janelas (determinístico, igual no SSR) ---------- */
function sagaPredios(x0, x1, base, seed, hMin, hMax) {
  let s = seed;
  const rnd = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  const out = [];
  let x = x0;
  while (x < x1) {
    const w = 12 + rnd() * 22;
    const h = hMin + rnd() * (hMax - hMin);
    const b = { x, y: base - h, w, h, j: [] };
    for (let yy = base - h + 6; yy < base - 5; yy += 8)
      for (let xx = x + 3; xx < x + w - 4; xx += 6) if (rnd() < 0.3) b.j.push([xx, yy]);
    out.push(b);
    x += w + 1.5;
  }
  return out;
}
const SAGA_PREDIOS_90 = sagaPredios(56, 226, 290, 7, 30, 150);
const SAGA_PREDIOS_00 = sagaPredios(56, 226, 300, 19, 40, 170);
const SAGA_PREDIOS_HD = sagaPredios(20, 172, 470, 31, 120, 400);

function SagaPredios({ lista, cor, luz }) {
  return (
    <g>
      {lista.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} fill={cor} />
          {b.j.map((j, k) => <rect key={k} x={j[0]} y={j[1]} width="3" height="4" fill={luz} opacity={0.55 + ((i + k) % 3) * 0.15} />)}
        </g>
      ))}
    </g>
  );
}

/* ---------- gradientes (ids únicos por instância) ---------- */
function SagaDefs({ P }) {
  const ac = { stopColor: "var(--gt-ac, #f5c400)" };
  const ac2 = { stopColor: "var(--gt-ac2, #ff3fa4)" };
  return (
    <defs>
      <linearGradient id={P + "parede90"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3b2216" /><stop offset=".55" stopColor="#5a3423" /><stop offset="1" stopColor="#4a2a1b" /></linearGradient>
      <linearGradient id={P + "parede00"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#101830" /><stop offset=".6" stopColor="#1b2846" /><stop offset="1" stopColor="#162038" /></linearGradient>
      <linearGradient id={P + "paredeHd"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#07080b" /><stop offset="1" stopColor="#12141a" /></linearGradient>
      <pattern id={P + "listras"} width="44" height="20" patternUnits="userSpaceOnUse"><rect width="22" height="20" fill="#ffd9a8" opacity=".05" /><rect x="30" width="3" height="20" fill="#ffd9a8" opacity=".05" /></pattern>
      <pattern id={P + "ripas"} width="18" height="20" patternUnits="userSpaceOnUse"><rect width="12" height="20" fill="#2a1f17" /><rect x="12" width="6" height="20" fill="#0d0a08" /><rect width="2" height="20" fill="#3a2b20" /></pattern>
      <linearGradient id={P + "chao90"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2c1a0f" /><stop offset="1" stopColor="#4a2d19" /></linearGradient>
      <linearGradient id={P + "chao00"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#151b28" /><stop offset="1" stopColor="#262f42" /></linearGradient>
      <linearGradient id={P + "chaoHd"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0a0b0e" /><stop offset="1" stopColor="#17191f" /></linearGradient>
      <linearGradient id={P + "ceu90"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0a0d26" /><stop offset=".7" stopColor="#2b1c46" /><stop offset="1" stopColor="#5b2c3e" /></linearGradient>
      <linearGradient id={P + "ceu00"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#050a1c" /><stop offset="1" stopColor="#173158" /></linearGradient>
      <linearGradient id={P + "ceuHd"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#03040a" /><stop offset=".75" stopColor="#0e1630" /><stop offset="1" stopColor="#1f1d38" /></linearGradient>
      <linearGradient id={P + "madeira"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#9a6a40" /><stop offset="1" stopColor="#6b4426" /></linearGradient>
      <linearGradient id={P + "madeiraEsc"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6a4225" /><stop offset="1" stopColor="#3d2414" /></linearGradient>
      <linearGradient id={P + "mesa00"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5a3c27" /><stop offset=".25" stopColor="#7a5338" /><stop offset="1" stopColor="#3a2518" /></linearGradient>
      <linearGradient id={P + "mesaHd"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1d1510" /><stop offset=".3" stopColor="#2f2219" /><stop offset="1" stopColor="#120c08" /></linearGradient>
      <linearGradient id={P + "armario00"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#262a33" /><stop offset="1" stopColor="#14161b" /></linearGradient>
      <linearGradient id={P + "rackHd"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1c1612" /><stop offset="1" stopColor="#0c0907" /></linearGradient>
      <linearGradient id={P + "bege"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ece5cf" /><stop offset="1" stopColor="#cdc3a3" /></linearGradient>
      <linearGradient id={P + "cinzaPs1"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d9d6d0" /><stop offset="1" stopColor="#b9b5ae" /></linearGradient>
      <linearGradient id={P + "preto"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2e3138" /><stop offset="1" stopColor="#0c0d10" /></linearGradient>
      <linearGradient id={P + "pretoBrilho"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3b3f48" /><stop offset=".45" stopColor="#15171b" /><stop offset="1" stopColor="#08090b" /></linearGradient>
      <linearGradient id={P + "tvCrt"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3b3c42" /><stop offset="1" stopColor="#1a1b1f" /></linearGradient>
      <linearGradient id={P + "branco"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#d3d7de" /></linearGradient>
      <linearGradient id={P + "prata"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dfe3e8" /><stop offset=".5" stopColor="#b5bbc4" /><stop offset="1" stopColor="#8c929b" /></linearGradient>
      <linearGradient id={P + "roxo"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7b6cc4" /><stop offset="1" stopColor="#4a3c92" /></linearGradient>
      <radialGradient id={P + "vidroCrt"} cx=".42" cy=".38" r=".8"><stop offset="0" stopColor="#2c3633" /><stop offset=".7" stopColor="#141a19" /><stop offset="1" stopColor="#070909" /></radialGradient>
      <linearGradient id={P + "vidroPlano"} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1a1d24" /><stop offset=".5" stopColor="#0a0b0e" /><stop offset="1" stopColor="#040405" /></linearGradient>
      <radialGradient id={P + "luzAc"}><stop offset="0" style={ac} stopOpacity=".5" /><stop offset=".45" style={ac} stopOpacity=".16" /><stop offset="1" style={ac} stopOpacity="0" /></radialGradient>
      <radialGradient id={P + "luzAc2"}><stop offset="0" style={ac2} stopOpacity=".35" /><stop offset="1" style={ac2} stopOpacity="0" /></radialGradient>
      <radialGradient id={P + "luzQuente"}><stop offset="0" stopColor="#ffd9a0" stopOpacity=".55" /><stop offset=".5" stopColor="#ffb870" stopOpacity=".14" /><stop offset="1" stopColor="#ffb870" stopOpacity="0" /></radialGradient>
      <radialGradient id={P + "sombra"}><stop offset="0" stopColor="#000" stopOpacity=".6" /><stop offset="1" stopColor="#000" stopOpacity="0" /></radialGradient>
      <linearGradient id={P + "facho"} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#cfe0ff" stopOpacity=".13" /><stop offset="1" stopColor="#cfe0ff" stopOpacity="0" /></linearGradient>
      <linearGradient id={P + "fita"} x1="0" y1="0" x2="1" y2="0"><stop offset="0" style={ac} stopOpacity="0" /><stop offset=".15" style={ac} stopOpacity="1" /><stop offset=".85" style={ac} stopOpacity="1" /><stop offset="1" style={ac} stopOpacity="0" /></linearGradient>
      <linearGradient id={P + "reflexo"} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".09" /><stop offset=".5" stopColor="#fff" stopOpacity=".02" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
      <linearGradient id={P + "cortina"} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5a1f17" /><stop offset=".3" stopColor="#7e3424" /><stop offset=".55" stopColor="#4c1a12" /><stop offset=".8" stopColor="#74301f" /><stop offset="1" stopColor="#4a1810" /></linearGradient>
      <clipPath id={P + "jan90"}><rect x="62" y="82" width="156" height="200" /></clipPath>
      <clipPath id={P + "jan00"}><rect x="62" y="86" width="156" height="210" /></clipPath>
      <clipPath id={P + "janHd"}><rect x="22" y="40" width="148" height="430" /></clipPath>
    </defs>
  );
}

/* ---------- salas ---------- */
function SagaPlanta({ x, y, esc = 1, cor = "#2f6b3a" }) {
  const folhas = [[-26, -40, -35], [22, -46, 30], [-8, -62, -8], [30, -24, 60], [-34, -18, -70], [8, -38, 12], [-18, -52, -28]];
  return (
    <g transform={`translate(${x} ${y}) scale(${esc})`}>
      <ellipse cx="0" cy="2" rx="34" ry="6" fill="#000" opacity=".35" />
      {folhas.map((f, i) => (
        <ellipse key={i} cx={f[0]} cy={f[1]} rx="9" ry="26" transform={`rotate(${f[2]} ${f[0]} ${f[1]})`} fill={cor} opacity={0.75 + (i % 3) * 0.1} />
      ))}
      <path d="M-22 -14 L22 -14 L16 2 L-16 2 Z" fill="#8a4b2c" />
      <rect x="-24" y="-18" width="48" height="6" rx="2" fill="#a35d38" />
    </g>
  );
}

function SagaSala90({ P }) {
  const u = (n) => `url(#${P}${n})`;
  return (
    <g>
      <rect width="1000" height="520" fill={u("parede90")} />
      <rect width="1000" height="338" fill={u("listras")} />
      <rect y="336" width="1000" height="12" fill="#2b170c" />
      <rect y="337" width="1000" height="2" fill="#8a5a38" opacity=".55" />
      <rect y="348" width="1000" height="160" fill="#3a2114" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <g key={i}><rect x={i * 128 + 10} y="362" width="108" height="132" rx="3" fill="#43271a" stroke="#22120a" strokeWidth="2" /><rect x={i * 128 + 12} y="364" width="104" height="2" fill="#6e4630" opacity=".6" /></g>
      ))}
      <rect y="506" width="1000" height="14" fill="#22130a" />
      <rect y="520" width="1000" height="80" fill={u("chao90")} />
      {[0, 1, 2, 3, 4].map((i) => <line key={i} x1="0" y1={530 + i * 16} x2="1000" y2={530 + i * 16} stroke="#1c0f07" strokeWidth="1.5" opacity=".7" />)}
      {[80, 260, 470, 690, 880, 160, 380, 600, 820].map((x, i) => <line key={i} x1={x} y1={530 + (i % 5) * 16} x2={x} y2={546 + (i % 5) * 16} stroke="#1c0f07" strokeWidth="1.5" opacity=".6" />)}
      {/* janela com a cidade à noite */}
      <rect x="50" y="70" width="180" height="224" fill="#2a170c" />
      <g clipPath={u("jan90")}>
        <rect x="62" y="82" width="156" height="200" fill={u("ceu90")} />
        <circle cx="186" cy="112" r="11" fill="#f4e7c4" opacity=".9" />
        <SagaPredios lista={SAGA_PREDIOS_90} cor="#120c1c" luz="#ffcf6b" />
      </g>
      <rect x="137" y="82" width="6" height="200" fill="#2a170c" />
      <rect x="62" y="178" width="156" height="6" fill="#2a170c" />
      <rect x="44" y="290" width="192" height="10" rx="2" fill="#3d2414" />
      <path d="M36 60 L80 60 Q72 180 88 312 L36 312 Z" fill={u("cortina")} />
      <path d="M244 60 L200 60 Q208 180 192 312 L244 312 Z" fill={u("cortina")} />
      <rect x="28" y="54" width="226" height="8" rx="4" fill="#1f120a" />
      <polygon points="80,90 220,90 470,520 160,520" fill={u("facho")} />
      {[[190, 300], [230, 360], [260, 420], [210, 450], [300, 470], [250, 260], [320, 400]].map((d, i) => <circle key={i} cx={d[0]} cy={d[1]} r={1 + (i % 2)} fill="#fff" opacity=".22" />)}
      {/* quadro */}
      <rect x="772" y="112" width="96" height="74" fill="#2a170c" />
      <rect x="779" y="119" width="82" height="60" fill="#1f2a3a" />
      <path d="M779 165 L805 142 L822 158 L838 136 L861 165 L861 179 L779 179 Z" fill="#3a5a4a" />
      <circle cx="845" cy="132" r="6" fill="#e9c97a" opacity=".8" />
      {/* abajur de pé */}
      <ellipse cx="910" cy="220" rx="190" ry="210" fill={u("luzQuente")} />
      <ellipse cx="910" cy="220" rx="150" ry="170" fill={u("luzAc")} opacity=".7" />
      <rect x="907" y="226" width="5" height="290" fill="#2a1a10" />
      <ellipse cx="910" cy="516" rx="26" ry="5" fill="#1a0f08" />
      <path d="M872 168 L948 168 L962 228 L858 228 Z" fill="#e8c88f" />
      <path d="M872 168 L948 168 L962 228 L858 228 Z" fill="#fff3d6" opacity=".35" />
      <ellipse cx="910" cy="228" rx="52" ry="5" fill="#fff1c9" opacity=".8" />
      <SagaPlanta x={130} y={516} esc={1.15} cor="#3a6b34" />
    </g>
  );
}

function SagaSala00({ P }) {
  const u = (n) => `url(#${P}${n})`;
  return (
    <g>
      <rect width="1000" height="520" fill={u("parede00")} />
      <ellipse cx="500" cy="0" rx="520" ry="300" fill={u("luzAc")} opacity=".5" />
      <rect y="506" width="1000" height="14" fill="#0b1020" />
      <rect y="520" width="1000" height="80" fill={u("chao00")} />
      {[0, 1, 2, 3, 4, 5].map((i) => <line key={i} x1="0" y1={526 + i * 13} x2="1000" y2={526 + i * 13} stroke="#0c111d" strokeWidth="1" opacity=".5" />)}
      {/* janela com persiana */}
      <rect x="50" y="74" width="180" height="234" rx="3" fill="#cfd6e2" />
      <g clipPath={u("jan00")}>
        <rect x="62" y="86" width="156" height="210" fill={u("ceu00")} />
        <SagaPredios lista={SAGA_PREDIOS_00} cor="#070b18" luz="#9fd3ff" />
        {Array.from({ length: 12 }).map((_, i) => <rect key={i} x="62" y={88 + i * 8} width="156" height="5" fill="#dfe5ee" opacity=".92" />)}
      </g>
      <rect x="138" y="86" width="4" height="210" fill="#cfd6e2" />
      <polygon points="64,186 216,186 520,520 120,520" fill={u("facho")} />
      {/* pôsteres genéricos */}
      <g transform="rotate(-2 815 170)">
        <rect x="764" y="84" width="104" height="150" fill="#f1ece0" />
        <rect x="770" y="90" width="92" height="138" fill="#22122e" />
        <circle cx="816" cy="168" r="34" style={{ fill: "var(--gt-ac2, #ff3fa4)" }} opacity=".85" />
        {[0, 1, 2, 3].map((i) => <rect key={i} x="770" y={170 + i * 9} width="92" height="3" fill="#22122e" />)}
        <path d="M774 214 L790 200 L846 200 L860 214 Z" fill="#0a0a12" />
        <circle cx="792" cy="216" r="6" fill="#0a0a12" /><circle cx="842" cy="216" r="6" fill="#0a0a12" />
        <rect x="778" y="98" width="60" height="8" style={{ fill: "var(--gt-ac, #f5c400)" }} />
      </g>
      <g transform="rotate(3 920 170)">
        <rect x="880" y="104" width="84" height="118" fill="#e9e4d6" />
        <rect x="886" y="110" width="72" height="106" fill="#0f2a3a" />
        <path d="M922 120 L930 146 L957 146 L935 162 L943 188 L922 172 L901 188 L909 162 L887 146 L914 146 Z" style={{ fill: "var(--gt-ac, #f5c400)" }} opacity=".9" />
        <rect x="892" y="196" width="60" height="5" fill="#e9e4d6" opacity=".6" />
      </g>
      {/* prateleira de CDs */}
      <rect x="250" y="64" width="0" height="0" />
      <rect x="836" y="300" width="130" height="8" fill="#0a0e1a" />
      {Array.from({ length: 14 }).map((_, i) => <rect key={i} x={840 + i * 8.6} y={256 + (i % 4)} width="7" height={44 - (i % 4)} fill={["#c94a4a", "#3c6fd1", "#e2c14a", "#2e9e7a", "#9a4ad1", "#d9d9d9", "#e07a2e"][i % 7]} opacity=".85" />)}
      {/* pufe */}
      <ellipse cx="900" cy="560" rx="80" ry="10" fill="#000" opacity=".35" />
      <path d="M826 556 Q820 470 900 460 Q980 470 974 556 Q900 572 826 556 Z" fill="#20305a" />
      <path d="M846 500 Q900 476 954 500" stroke="#2c4278" strokeWidth="6" fill="none" opacity=".7" />
      <SagaPlanta x={92} y={520} esc={0.95} cor="#2f7a4a" />
    </g>
  );
}

function SagaSalaHd({ P, tv }) {
  const u = (n) => `url(#${P}${n})`;
  return (
    <g>
      <rect width="1000" height="520" fill={u("paredeHd")} />
      <rect x="196" y="0" width="608" height="520" fill={u("ripas")} opacity=".9" />
      <rect x="196" y="0" width="608" height="520" fill="#000" opacity=".25" />
      {tv && <ellipse cx={tv.x + tv.w / 2} cy={tv.y + tv.h / 2} rx={tv.w * 0.78} ry={tv.h * 0.9} fill={u("luzAc")} />}
      {tv && <rect x={tv.x + 8} y={tv.y + tv.h * 0.5 - 2} width={tv.w - 16} height="4" fill={u("fita")} opacity=".5" />}
      <rect y="514" width="1000" height="6" fill="#050607" />
      <rect y="520" width="1000" height="80" fill={u("chaoHd")} />
      <rect y="520" width="1000" height="3" fill="#fff" opacity=".04" />
      {/* janela alta */}
      <rect x="14" y="32" width="164" height="446" fill="#050608" />
      <g clipPath={u("janHd")}>
        <rect x="22" y="40" width="148" height="430" fill={u("ceuHd")} />
        <SagaPredios lista={SAGA_PREDIOS_HD} cor="#05070e" luz="#ffd28a" />
        <rect x="22" y="40" width="148" height="430" fill={u("reflexo")} />
      </g>
      <rect x="94" y="40" width="3" height="430" fill="#050608" />
      {/* luminária de arco */}
      <path d="M940 516 L940 140 Q940 70 860 70" stroke="#2a2c31" strokeWidth="5" fill="none" />
      <ellipse cx="940" cy="516" rx="22" ry="5" fill="#1b1c20" />
      <path d="M836 66 Q860 52 884 66 L880 78 L840 78 Z" fill="#30333a" />
      <ellipse cx="860" cy="100" rx="120" ry="120" fill={u("luzQuente")} opacity=".7" />
      <SagaPlanta x={890} y={520} esc={1.5} cor="#2c5e3a" />
    </g>
  );
}

/* ---------- móveis ---------- */
function SagaMovel({ P, ap }) {
  const u = (n) => `url(#${P}${n})`;
  if (ap === "pc") return (
    <g>
      <ellipse cx="500" cy="528" rx="420" ry="16" fill={u("sombra")} />
      <path d="M130 376 L870 376 L892 398 L108 398 Z" fill={u("madeira")} />
      <path d="M130 376 L870 376" stroke="#c08c5c" strokeWidth="1.5" opacity=".7" />
      <rect x="108" y="398" width="784" height="13" fill="#4a2c17" />
      <rect x="130" y="411" width="24" height="111" fill="#55331c" />
      <rect x="690" y="411" width="182" height="111" fill={u("madeiraEsc")} />
      {[0, 1, 2].map((i) => (
        <g key={i}><rect x="700" y={418 + i * 34} width="162" height="28" rx="2" fill="#5e3a20" stroke="#2c180b" /><rect x="770" y={430 + i * 34} width="22" height="4" rx="2" fill="#c9a26a" /></g>
      ))}
    </g>
  );
  if (ap === "ps1") return (
    <g>
      <ellipse cx="500" cy="522" rx="260" ry="12" fill={u("sombra")} />
      <path d="M282 368 L718 368 L732 384 L268 384 Z" fill={u("madeira")} />
      <rect x="268" y="384" width="464" height="10" fill="#4a2c17" />
      <rect x="278" y="394" width="444" height="122" fill={u("madeiraEsc")} />
      <rect x="290" y="404" width="204" height="102" rx="3" fill="#5a3820" stroke="#2c180b" strokeWidth="2" />
      <rect x="506" y="404" width="204" height="102" rx="3" fill="#5a3820" stroke="#2c180b" strokeWidth="2" />
      <rect x="304" y="416" width="176" height="78" rx="2" fill="none" stroke="#7a5030" opacity=".5" />
      <rect x="520" y="416" width="176" height="78" rx="2" fill="none" stroke="#7a5030" opacity=".5" />
      <circle cx="482" cy="455" r="4" fill="#d6b27a" /><circle cx="518" cy="455" r="4" fill="#d6b27a" />
      <rect x="288" y="516" width="14" height="7" fill="#2c180b" /><rect x="698" y="516" width="14" height="7" fill="#2c180b" />
    </g>
  );
  if (ap === "ps2") return (
    <g>
      <ellipse cx="500" cy="524" rx="280" ry="12" fill={u("sombra")} />
      <path d="M262 368 L738 368 L752 386 L248 386 Z" fill="#30343d" />
      <path d="M262 368 L738 368" stroke="#5a606c" strokeWidth="1.5" />
      <rect x="248" y="386" width="504" height="134" fill={u("armario00")} />
      <rect x="270" y="400" width="460" height="108" rx="3" fill="#07080a" />
      <rect x="270" y="400" width="460" height="18" fill="#000" opacity=".5" />
      {Array.from({ length: 8 }).map((_, i) => <rect key={i} x={280 + i * 9} y={446 + (i % 3) * 2} width="7.5" height={58 - (i % 3) * 2} fill={["#1d2a6b", "#0d0d10", "#1d2a6b", "#2b2e35", "#14306a", "#0d0d10", "#3a3d45", "#1d2a6b"][i]} stroke="#000" strokeWidth=".5" />)}
      <rect x="258" y="520" width="18" height="6" fill="#9aa0a8" /><rect x="724" y="520" width="18" height="6" fill="#9aa0a8" />
      <rect x="664" y="458" width="40" height="46" rx="2" fill="#121419" />
      <circle cx="684" cy="482" r="12" fill="#1c1f26" stroke="#2b2f38" />
    </g>
  );
  if (ap === "gba" || ap === "psp") return (
    <g>
      <rect y="322" width="1000" height="278" fill={u("mesa00")} />
      <rect y="322" width="1000" height="4" fill="#a87a52" opacity=".7" />
      {[0, 1, 2, 3].map((i) => <path key={i} d={`M0 ${380 + i * 52} Q300 ${360 + i * 52} 520 ${392 + i * 52} T1000 ${376 + i * 52}`} stroke="#2a1a10" strokeWidth="2" fill="none" opacity=".25" />)}
      <ellipse cx="450" cy="440" rx="380" ry="150" fill={u("luzQuente")} opacity=".7" />
      {/* lata de refrigerante e caderno */}
      <ellipse cx="205" cy="362" rx="22" ry="6" fill="#000" opacity=".35" />
      <rect x="186" y="296" width="38" height="64" rx="5" style={{ fill: "var(--gt-ac2, #c33)" }} />
      <rect x="186" y="296" width="38" height="64" rx="5" fill="#000" opacity=".25" />
      <rect x="190" y="300" width="8" height="56" fill="#fff" opacity=".18" />
      <ellipse cx="205" cy="297" rx="19" ry="5" fill="#c9ced6" />
      <g transform="rotate(-12 170 480)">
        <rect x="96" y="420" width="150" height="112" rx="3" fill="#e9e3d2" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => <line key={i} x1="104" y1={436 + i * 13} x2="238" y2={436 + i * 13} stroke="#8fa7c7" strokeWidth="1" />)}
        <rect x="96" y="420" width="10" height="112" fill="#c94a4a" opacity=".7" />
        <rect x="150" y="396" width="8" height="96" rx="2" fill="#e9b93a" transform="rotate(64 154 444)" />
      </g>
    </g>
  );
  if (ap === "ds") return (
    <g>
      <rect y="300" width="1000" height="300" fill={u("mesaHd")} />
      <rect y="300" width="1000" height="3" fill="#6a4c36" opacity=".8" />
      <ellipse cx="450" cy="420" rx="420" ry="140" fill={u("luzAc")} opacity=".35" />
      <rect y="306" width="1000" height="40" fill="#fff" opacity=".025" />
      {/* caneca e stylus */}
      <ellipse cx="190" cy="372" rx="44" ry="10" fill="#000" opacity=".4" />
      <ellipse cx="190" cy="366" rx="40" ry="9" fill="#3a2a20" />
      <rect x="164" y="300" width="52" height="64" rx="6" fill="#e6e1d8" />
      <ellipse cx="190" cy="301" rx="26" ry="6" fill="#3b2216" />
      <path d="M216 316 Q240 318 238 336 Q236 352 216 350" stroke="#e6e1d8" strokeWidth="7" fill="none" />
      <rect x="640" y="470" width="110" height="4" rx="2" fill="#cfd3da" transform="rotate(-18 695 472)" />
    </g>
  );
  /* ps3, x360, ps4, ps5: rack baixo com fita de LED */
  return (
    <g>
      <ellipse cx="500" cy="552" rx="420" ry="30" fill={u("luzAc")} opacity=".8" />
      <path d="M170 402 L830 402 L846 416 L154 416 Z" fill="#3b2b20" />
      <path d="M170 402 L830 402" stroke="#6a4f3c" strokeWidth="1.5" />
      <rect x="154" y="416" width="692" height="100" fill={u("rackHd")} />
      <rect x="166" y="426" width="204" height="82" rx="2" fill="#1d1611" />
      <rect x="630" y="426" width="204" height="82" rx="2" fill="#1d1611" />
      {Array.from({ length: 16 }).map((_, i) => <rect key={i} x={172 + i * 12.4} y="430" width="2" height="74" fill="#000" opacity=".35" />)}
      {Array.from({ length: 16 }).map((_, i) => <rect key={"b" + i} x={636 + i * 12.4} y="430" width="2" height="74" fill="#000" opacity=".35" />)}
      <rect x="380" y="426" width="240" height="82" rx="2" fill="#050506" />
      <rect x="380" y="426" width="240" height="14" fill="#000" opacity=".6" />
      <rect x="396" y="476" width="128" height="30" rx="2" fill="#16171a" stroke="#26282d" />
      <rect x="404" y="484" width="44" height="10" rx="1.5" fill="#05080a" />
      <text x="426" y="492" textAnchor="middle" fontFamily="monospace" fontSize="7" style={{ fill: "var(--gt-ac, #2ec5ff)" }} opacity=".8">HDMI 1</text>
      <circle cx="500" cy="490" r="9" fill="#202227" stroke="#33363d" /><circle cx="500" cy="490" r="5" fill="#2a2d33" />
      {Array.from({ length: 7 }).map((_, i) => <rect key={i} x={544 + i * 9} y={452 + (i % 2) * 3} width="7.5" height={54 - (i % 2) * 3} fill={["#1f4fa8", "#0f3a8a", "#1f4fa8", "#7a1e1e", "#0f3a8a", "#2a5fc0", "#1f4fa8"][i]} stroke="#000" strokeWidth=".5" />)}
      <rect x="168" y="516" width="664" height="4" fill={u("fita")} />
      <rect x="176" y="520" width="6" height="18" fill="#3a3c42" /><rect x="818" y="520" width="6" height="18" fill="#3a3c42" />
    </g>
  );
}

/* ---------- controles ---------- */
function SagaControle({ tipo, x, y }) {
  const corpo = { ps1: "#c4c1bb", ps2: "#18191d", ps3: "#16171b", ps4: "#1b1d22", x360: "#eef0f3", ps5: "#f4f5f7" }[tipo] || "#1b1d22";
  const det = { ps1: "#8e8a83", ps2: "#2c2e35", ps3: "#2c2e35", ps4: "#30333b", x360: "#c3c7cd", ps5: "#202227" }[tipo] || "#2c2e35";
  const analog = tipo !== "ps1";
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="0" cy="24" rx="68" ry="8" fill="#000" opacity=".4" />
      <path d="M-52 -10 Q-40 -20 0 -18 Q40 -20 52 -10 Q70 18 58 28 Q46 34 38 20 L-38 20 Q-46 34 -58 28 Q-70 18 -52 -10 Z" fill={corpo} />
      {tipo === "ps5" && <path d="M-20 -18 L20 -18 L16 14 L-16 14 Z" fill="#202227" />}
      {tipo === "ps4" && <rect x="-18" y="-17" width="36" height="16" rx="3" fill="#25282f" stroke="#3a3e47" />}
      {tipo === "ps4" && <rect x="-14" y="-20" width="28" height="2.5" rx="1" style={{ fill: "var(--gt-ac, #2ec5ff)" }} opacity=".9" />}
      <rect x="-42" y="-6" width="16" height="5" rx="1" fill={det} /><rect x="-36.5" y="-11.5" width="5" height="16" rx="1" fill={det} />
      {tipo === "x360" ? (
        <g><circle cx="36" cy="-10" r="3.2" fill="#e8b92b" /><circle cx="43" cy="-4" r="3.2" fill="#d6463c" /><circle cx="29" cy="-4" r="3.2" fill="#3c76d6" /><circle cx="36" cy="2" r="3.2" fill="#4caf50" /><circle cx="0" cy="-8" r="4.5" fill="#9fb69a" /></g>
      ) : (
        <g><circle cx="36" cy="-11" r="3" fill={det} /><circle cx="43" cy="-5" r="3" fill={det} /><circle cx="29" cy="-5" r="3" fill={det} /><circle cx="36" cy="1" r="3" fill={det} /></g>
      )}
      {analog && <g><circle cx="-14" cy="8" r="7" fill={det} /><circle cx="14" cy="8" r="7" fill={det} /><circle cx="-14" cy="8" r="4" fill="#000" opacity=".3" /><circle cx="14" cy="8" r="4" fill="#000" opacity=".3" /></g>}
      {!analog && <g><rect x="-10" y="-6" width="7" height="3" rx="1.5" fill={det} /><rect x="3" y="-6" width="7" height="3" rx="1.5" fill={det} /></g>}
    </g>
  );
}

function SagaTvPlana({ P, t, base }) {
  const u = (n) => `url(#${P}${n})`;
  const cx = t.x + t.w / 2, fundo = t.y + t.h + 12;
  return (
    <g>
      <rect x={cx - 18} y={fundo} width="36" height={base - fundo - 6} fill="#16181c" />
      <path d={`M${cx - 86} ${base} L${cx + 86} ${base} L${cx + 74} ${base - 7} L${cx - 74} ${base - 7} Z`} fill="#24272d" />
      <rect x={t.x - 10} y={t.y - 10} width={t.w + 20} height={t.h + 22} rx="6" fill="#0b0c0f" stroke="#2a2d33" strokeWidth="1.5" />
      <rect x={t.x} y={t.y} width={t.w} height={t.h} fill={u("vidroPlano")} />
      <path d={`M${t.x} ${t.y} L${t.x + t.w * 0.55} ${t.y} L${t.x + t.w * 0.18} ${t.y + t.h} L${t.x} ${t.y + t.h} Z`} fill={u("reflexo")} />
      <rect x={cx - 14} y={t.y + t.h + 3} width="28" height="3" rx="1.5" fill="#2a2d33" />
      <circle cx={cx} cy={t.y + t.h + 6} r="1.8" fill="#b3261e" />
    </g>
  );
}

/* ---------- aparelhos ---------- */
function SagaArte({ P, ap }) {
  const u = (n) => `url(#${P}${n})`;
  if (ap === "pc") {
    const teclas = [];
    for (let r = 0; r < 4; r++) for (let c = 0; c < 17; c++) teclas.push(<rect key={r + "-" + c} x={338 - r * 3 + c * 16.2 + r * 0.4} y={405 + r * 8.2} width={c === 16 && r === 1 ? 10 : 13} height="6" rx="1.2" fill="#dcd3b8" stroke="#a89e7e" strokeWidth=".6" />);
    return (
      <g>
        {/* caixas de som */}
        <ellipse cx="314" cy="380" rx="34" ry="5" fill={u("sombra")} />
        <rect x="292" y="292" width="44" height="88" rx="6" fill={u("bege")} stroke="#a89e7e" />
        <circle cx="314" cy="302" r="5" fill="#6d6550" />
        <circle cx="314" cy="338" r="15" fill="#7d7458" /><circle cx="314" cy="338" r="9" fill="#5a5340" /><circle cx="314" cy="338" r="3" fill="#3a3528" />
        {/* monitor CRT bege */}
        <ellipse cx="480" cy="384" rx="160" ry="9" fill={u("sombra")} />
        <path d="M372 114 L588 114 L566 84 Q480 72 394 84 Z" fill="#b8ae8f" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => <line key={i} x1={420 + i * 20} y1="89" x2={417 + i * 20} y2="106" stroke="#958b6b" strokeWidth="3" strokeLinecap="round" />)}
        <path d="M440 360 L520 360 L532 380 L428 380 Z" fill="#c4ba9a" />
        <ellipse cx="480" cy="380" rx="64" ry="6" fill="#b5ab8b" />
        <rect x="345" y="112" width="270" height="252" rx="16" fill={u("bege")} />
        <rect x="346" y="113" width="268" height="250" rx="15" fill="none" stroke="#fffbea" strokeOpacity=".55" strokeWidth="2" />
        <rect x="364" y="132" width="232" height="181" rx="18" fill="#a2977a" />
        <rect x="368" y="136" width="224" height="173" rx="16" fill="#1a1d1b" />
        <rect x="378" y="146" width="204" height="153" rx="12" fill={u("vidroCrt")} />
        <path d="M388 156 Q440 148 492 151 Q430 168 392 214 Z" fill="#fff" opacity=".06" />
        <rect x="452" y="324" width="56" height="10" rx="2" fill="#8d8466" />
        <rect x="372" y="330" width="44" height="7" rx="3.5" fill="#b5ab8b" />
        <circle cx="530" cy="338" r="4" fill="#b5ab8b" /><circle cx="546" cy="338" r="4" fill="#b5ab8b" />
        <rect x="584" y="331" width="18" height="13" rx="3" fill="#cfc5a5" stroke="#9c9272" />
        <circle cx="572" cy="338" r="2.6" fill="#ff7a2a" />
        {/* gabinete torre */}
        <ellipse cx="695" cy="386" rx="86" ry="7" fill={u("sombra")} />
        <path d="M630 172 L760 172 L750 160 L640 160 Z" fill="#d8cfb3" />
        <rect x="630" y="170" width="130" height="214" rx="5" fill={u("bege")} stroke="#a89e7e" strokeWidth="1" />
        <rect x="643" y="196" width="104" height="32" rx="2" fill="#d2c9ab" stroke="#a89e7e" />
        <rect x="647" y="214" width="100" height="10" fill="#1d1a14" />
        <rect x="726" y="201" width="14" height="6" rx="1.5" fill="#b4aa8a" stroke="#958b6b" strokeWidth=".6" />
        <circle cx="715" cy="204" r="1.8" fill="#6b5f3f" />
        <circle cx="654" cy="204" r="2.4" fill="#5d5640" /><circle cx="664" cy="204" r="2.4" fill="#8a8160" />
        <rect x="643" y="234" width="104" height="24" rx="2" fill="#d8cfb2" stroke="#b0a686" />
        <rect x="660" y="268" width="72" height="20" rx="2" fill="#d0c7a9" stroke="#a89e7e" />
        <rect x="668" y="277" width="48" height="3.5" rx="1" fill="#3a352a" />
        <rect x="720" y="281" width="8" height="4" fill="#b3a989" />
        <rect x="648" y="300" width="38" height="20" rx="2" fill="#151310" />
        <text x="667" y="315.5" textAnchor="middle" fontFamily="monospace" fontSize="14" fontWeight="700" fill="#ff3b2f" opacity=".9">66</text>
        <circle cx="668" cy="330" r="3" fill="#3d4a33" /><circle cx="680" cy="330" r="3" fill="#4a3d26" />
        <rect x="700" y="300" width="46" height="26" rx="4" fill="#cdc3a2" stroke="#9c9272" />
        <rect x="712" y="334" width="22" height="8" rx="2" fill="#c0b696" stroke="#9c9272" strokeWidth=".6" />
        <circle cx="738" cy="356" r="5" fill="#b4aa8a" stroke="#8d8466" />
        {[0, 1, 2, 3, 4].map((i) => <rect key={i} x="646" y={350 + i * 6} width="60" height="2.5" rx="1" fill="#a99f7f" />)}
        {/* teclado e mouse */}
        <path d="M470 402 Q480 392 520 386" stroke="#6d6550" strokeWidth="2" fill="none" />
        <path d="M332 400 L606 400 L622 440 L316 440 Z" fill={u("bege")} stroke="#a89e7e" />
        {teclas}
        <path d="M672 404 C672 392 690 394 700 384" stroke="#6d6550" strokeWidth="2" fill="none" />
        <ellipse cx="672" cy="424" rx="14" ry="19" fill={u("bege")} stroke="#a89e7e" />
        <line x1="672" y1="406" x2="672" y2="418" stroke="#a89e7e" />
        {/* caneca */}
        <rect x="792" y="350" width="28" height="30" rx="3" fill="#c94a3a" />
        <path d="M820 356 Q832 358 830 366 Q828 374 820 372" stroke="#c94a3a" strokeWidth="4" fill="none" />
        <rect x="798" y="336" width="3" height="18" fill="#e9b93a" transform="rotate(-10 799 345)" /><rect x="808" y="332" width="3" height="20" fill="#3c76d6" transform="rotate(8 809 342)" />
      </g>
    );
  }
  if (ap === "ps1") return (
    <g>
      {/* TV CRT com antena */}
      <ellipse cx="500" cy="372" rx="200" ry="8" fill={u("sombra")} />
      <path d="M480 68 L412 10" stroke="#9aa0a8" strokeWidth="3" /><path d="M520 68 L598 16" stroke="#9aa0a8" strokeWidth="3" />
      <circle cx="412" cy="10" r="4" fill="#c9ced6" /><circle cx="598" cy="16" r="4" fill="#c9ced6" />
      <ellipse cx="500" cy="70" rx="34" ry="9" fill="#18191c" />
      <path d="M335 94 L665 94 L640 72 Q500 62 360 72 Z" fill="#1d1e22" />
      <rect x="320" y="92" width="360" height="280" rx="18" fill={u("tvCrt")} />
      <rect x="321" y="93" width="358" height="278" rx="17" fill="none" stroke="#5a5c63" strokeOpacity=".6" />
      <rect x="340" y="106" width="320" height="244" rx="22" fill="#111215" />
      <rect x="352" y="116" width="296" height="222" rx="16" fill={u("vidroCrt")} />
      <path d="M362 126 Q430 118 500 121 Q420 140 366 196 Z" fill="#fff" opacity=".06" />
      {Array.from({ length: 9 }).map((_, i) => <rect key={i} x={566 + i * 10} y="355" width="5" height="12" rx="2" fill="#0c0c0e" />)}
      <rect x="380" y="356" width="18" height="8" rx="2" fill="#2c2d33" /><rect x="404" y="356" width="18" height="8" rx="2" fill="#2c2d33" /><rect x="428" y="356" width="18" height="8" rx="2" fill="#2c2d33" />
      <circle cx="362" cy="361" r="2.6" fill="#c92a20" />
      {/* PlayStation no chão */}
      <path d="M700 560 C660 560 640 572 628 562" stroke="#7d7a74" strokeWidth="3" fill="none" />
      <ellipse cx="500" cy="574" rx="156" ry="10" fill={u("sombra")} />
      <path d="M386 490 L614 490 Q622 490 624 498 L634 544 L366 544 L376 498 Q378 490 386 490 Z" fill={u("cinzaPs1")} />
      <path d="M386 490 L614 490" stroke="#f1f0ec" strokeWidth="1.6" />
      <path d="M370 540 L630 540" stroke="#000" strokeOpacity=".08" strokeWidth="3" />
      <path d="M366 544 L634 544 L634 565 Q634 571 628 571 L372 571 Q366 571 366 565 Z" fill="#a4a19b" />
      <path d="M366 544 L634 544" stroke="#c9c6c0" strokeWidth="1" />
      <rect x="384" y="550" width="36" height="3" rx="1" fill="#55524d" /><rect x="430" y="550" width="36" height="3" rx="1" fill="#55524d" />
      <rect x="386" y="556" width="32" height="10" rx="3" fill="#6d6a64" /><rect x="432" y="556" width="32" height="10" rx="3" fill="#6d6a64" />
      {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={530 + i * 11} y1="552" x2={530 + i * 11} y2="565" stroke="#8d8a84" strokeWidth="3" strokeLinecap="round" />)}
      <ellipse cx="548" cy="516" rx="70" ry="23" fill="#c4c0b9" stroke="#a9a59e" />
      <ellipse cx="548" cy="516" rx="64" ry="20" fill="#2a2927" />
      <ellipse cx="548" cy="518" rx="58" ry="16" fill="#1a1918" />
      <ellipse cx="548" cy="516" rx="9" ry="3" fill="#8a8781" />
      <ellipse cx="410" cy="500" rx="11" ry="3.8" fill="#a7a39d" stroke="#8e8a84" strokeWidth=".7" />
      <ellipse cx="444" cy="500" rx="11" ry="3.8" fill="#a7a39d" stroke="#8e8a84" strokeWidth=".7" />
      <ellipse cx="426" cy="522" rx="17" ry="6.5" fill="#b9b5af" stroke="#8e8a84" />
      <ellipse cx="426" cy="521" rx="11" ry="3.5" fill="#cfccc6" />
      <circle cx="427" cy="505" r="2.2" fill="#3c4a3a" />
      <text x="398" y="538" fontFamily="Arial, sans-serif" fontSize="8.5" fontStyle="italic" fill="#8a867f">PlayStation</text>
      <SagaControle tipo="ps1" x={712} y={566} />
    </g>
  );
  if (ap === "ps2") return (
    <g>
      {/* TV CRT prata, tela plana */}
      <ellipse cx="500" cy="372" rx="210" ry="8" fill={u("sombra")} />
      <path d="M326 92 L674 92 L652 70 Q500 58 348 70 Z" fill="#3c3f45" />
      <rect x="310" y="90" width="380" height="282" rx="12" fill={u("prata")} />
      <rect x="311" y="91" width="378" height="280" rx="11" fill="none" stroke="#fff" strokeOpacity=".4" />
      <rect x="330" y="100" width="340" height="250" rx="8" fill="#141519" />
      <rect x="344" y="108" width="312" height="234" rx="10" fill={u("vidroCrt")} />
      <path d="M354 118 Q430 110 504 113 Q420 132 358 190 Z" fill="#fff" opacity=".06" />
      {Array.from({ length: 7 }).map((_, i) => <rect key={i} x="328" y={354 + i * 2.4} width="56" height="1.2" fill="#6c727b" />)}
      {Array.from({ length: 7 }).map((_, i) => <rect key={"d" + i} x="572" y={354 + i * 2.4} width="56" height="1.2" fill="#6c727b" />)}
      <rect x="476" y="356" width="48" height="8" rx="2" fill="#8c929b" />
      <circle cx="642" cy="361" r="2.6" fill="#c92a20" />
      {/* PlayStation 2 na estante */}
      <path d="M368 414 L632 414 L640 432 L360 432 Z" fill="#1c1e23" />
      {Array.from({ length: 6 }).map((_, i) => <path key={i} d={`M${368 - i * 1.4} ${416 + i * 2.8} L${632 + i * 1.4} ${416 + i * 2.8}`} stroke="#2c2f36" strokeWidth="1" />)}
      <path d="M368 414 L632 414" stroke="#3a3d45" strokeWidth="1.2" />
      <rect x="360" y="432" width="280" height="72" rx="3" fill={u("preto")} />
      <rect x="360" y="432" width="280" height="1.4" fill="#3d4049" />
      <rect x="370" y="438" width="200" height="26" rx="2" fill="#101115" />
      <rect x="372" y="440" width="196" height="22" fill="#030304" />
      <rect x="360" y="467" width="280" height="2.6" fill="#050506" />
      {Array.from({ length: 4 }).map((_, i) => <rect key={i} x="360" y={472 + i * 7.5} width="280" height="1.1" fill="#26292f" />)}
      <rect x="578" y="440" width="54" height="24" fill="#17181c" />
      <rect x="582" y="442" width="46" height="9" rx="2" fill="#2a2c33" />
      <rect x="582" y="454" width="46" height="8" rx="2" fill="#2a2c33" />
      <path d="M612 455.5 L616 459.5 L608 459.5 Z" fill="#4a4d55" />
      <circle cx="590" cy="458" r="1.8" fill="#2b5cff" opacity=".9" />
      <rect x="374" y="474" width="40" height="14" rx="4" fill="#0a0a0c" stroke="#2b2d33" /><rect x="422" y="474" width="40" height="14" rx="4" fill="#0a0a0c" stroke="#2b2d33" />
      <rect x="378" y="492" width="32" height="5" rx="1" fill="#050506" stroke="#25272d" strokeWidth=".6" /><rect x="426" y="492" width="32" height="5" rx="1" fill="#050506" stroke="#25272d" strokeWidth=".6" />
      {Array.from({ length: 9 }).map((_, i) => <line key={i} x1={566 + i * 7.5} y1="472" x2={566 + i * 7.5} y2="500" stroke="#2f323a" strokeWidth="1.4" />)}
      <text x="500" y="496" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="7.5" fontStyle="italic" fontWeight="700" fill="#3d63c9">PlayStation 2</text>
      <path d="M394 484 C420 520 520 540 590 548" stroke="#121317" strokeWidth="3" fill="none" />
      <SagaControle tipo="ps2" x={636} y={562} />
    </g>
  );
  if (ap === "gba") return (
    <g>
      <ellipse cx="452" cy="514" rx="186" ry="16" fill={u("sombra")} />
      <rect x="280" y="322" width="340" height="192" rx="86" ry="96" fill={u("roxo")} />
      <path d="M306 380 Q312 336 380 326 L520 326 Q588 336 594 380" stroke="#a69ae0" strokeWidth="3" fill="none" opacity=".6" />
      <path d="M300 354 Q306 328 354 322 L364 330 Q318 334 310 358 Z" fill="#a49bd2" />
      <path d="M600 354 Q594 328 546 322 L536 330 Q582 334 590 358 Z" fill="#a49bd2" />
      <rect x="384" y="318" width="132" height="6" rx="2" fill="#2a2240" />
      <rect x="356" y="344" width="188" height="130" rx="10" fill="#34313f" />
      <rect x="377" y="362" width="146" height="98" fill="#10150f" />
      <rect x="377" y="362" width="146" height="98" fill={u("reflexo")} />
      <circle cx="366" cy="467" r="2.6" fill="#2f3a2a" />
      <rect x="312" y="394" width="20" height="50" rx="3" fill="#2a2733" /><rect x="297" y="409" width="50" height="20" rx="3" fill="#2a2733" />
      <circle cx="322" cy="419" r="4" fill="#3a3646" />
      <circle cx="588" cy="404" r="14" fill="#2a2733" /><circle cx="558" cy="428" r="14" fill="#2a2733" />
      <circle cx="584" cy="400" r="6" fill="#fff" opacity=".08" /><circle cx="554" cy="424" r="6" fill="#fff" opacity=".08" />
      <circle cx="330" cy="472" r="5" fill="#2a2733" /><circle cx="330" cy="490" r="5" fill="#2a2733" />
      {Array.from({ length: 18 }).map((_, i) => <circle key={i} cx={568 + (i % 6) * 6} cy={462 + Math.floor(i / 6) * 7} r="1.7" fill="#2a2240" />)}
      <path d="M296 470 Q330 512 450 514 Q570 512 604 470" stroke="#2c2363" strokeWidth="4" fill="none" opacity=".5" />
    </g>
  );
  if (ap === "psp") return (
    <g>
      <ellipse cx="452" cy="506" rx="206" ry="14" fill={u("sombra")} />
      <rect x="260" y="336" width="380" height="168" rx="84" fill={u("pretoBrilho")} />
      <rect x="260.5" y="336.5" width="379" height="167" rx="83.5" fill="none" stroke="#7a808a" strokeOpacity=".55" />
      <path d="M300 352 Q306 338 340 336 L346 341 Q312 344 304 358 Z" fill="#4a4f58" />
      <path d="M600 352 Q594 338 560 336 L554 341 Q588 344 596 358 Z" fill="#4a4f58" />
      <rect x="334" y="350" width="232" height="140" rx="4" fill="#040506" />
      <rect x="341" y="358" width="218" height="124" fill="#090b0e" />
      <rect x="341" y="358" width="218" height="124" fill={u("reflexo")} />
      <rect x="295" y="376" width="14" height="16" rx="3" fill="#3a3e46" /><rect x="295" y="405" width="14" height="16" rx="3" fill="#3a3e46" />
      <rect x="279" y="391" width="16" height="14" rx="3" fill="#3a3e46" /><rect x="309" y="391" width="16" height="14" rx="3" fill="#3a3e46" />
      <circle cx="298" cy="450" r="13" fill="#25282e" stroke="#4a4f58" /><circle cx="298" cy="450" r="8" fill="#3d4149" />
      <circle cx="600" cy="382" r="10" fill="#30333a" /><circle cx="620" cy="402" r="10" fill="#30333a" /><circle cx="600" cy="422" r="10" fill="#30333a" /><circle cx="580" cy="402" r="10" fill="#30333a" />
      <path d="M600 377 L605 386 L595 386 Z" fill="none" stroke="#77c3a0" strokeWidth="1.4" />
      <circle cx="620" cy="402" r="4" fill="none" stroke="#e28a8a" strokeWidth="1.4" />
      <path d="M596 418 L604 426 M604 418 L596 426" stroke="#8fb0e8" strokeWidth="1.4" />
      <rect x="576" y="398" width="8" height="8" fill="none" stroke="#d99ad0" strokeWidth="1.4" />
      {[360, 384, 408, 470, 494, 522, 548].map((x, i) => <rect key={i} x={x} y="494" width="18" height="5" rx="2.5" fill="#3a3e46" />)}
      <circle cx="286" cy="478" r="2.2" fill="#263326" /><circle cx="286" cy="488" r="2.2" fill="#2a2a2a" />
    </g>
  );
  if (ap === "ds") return (
    <g>
      <ellipse cx="452" cy="470" rx="210" ry="14" fill={u("sombra")} />
      <rect x="290" y="150" width="320" height="178" rx="16" fill={u("branco")} stroke="#c5cad2" />
      <rect x="298" y="158" width="304" height="162" rx="11" fill="none" stroke="#000" strokeOpacity=".06" />
      <rect x="369" y="177" width="162" height="124" rx="3" fill="#1b1d22" />
      <rect x="375" y="183" width="150" height="112" fill="#0b0d10" />
      <rect x="375" y="183" width="150" height="112" fill={u("reflexo")} />
      {Array.from({ length: 6 }).map((_, i) => <circle key={i} cx={326 + (i % 2) * 8} cy={226 + Math.floor(i / 2) * 9} r="1.8" fill="#b4b9c1" />)}
      {Array.from({ length: 6 }).map((_, i) => <circle key={"d" + i} cx={566 + (i % 2) * 8} cy={226 + Math.floor(i / 2) * 9} r="1.8" fill="#b4b9c1" />)}
      <rect x="300" y="326" width="300" height="18" rx="9" fill={u("prata")} />
      <rect x="330" y="327" width="240" height="16" rx="3" fill="#e6e9ee" />
      <circle cx="577" cy="335" r="2.4" fill="#2f3a2a" />
      <path d="M296 344 L604 344 Q612 344 614 352 L632 452 Q634 462 624 462 L276 462 Q266 462 268 452 L286 352 Q288 344 296 344 Z" fill={u("branco")} />
      <path d="M268 456 L632 456 L630 470 Q628 474 620 474 L280 474 Q272 474 270 470 Z" fill="#c8ccd3" />
      <path d="M383 356 L517 356 L522 432 L378 432 Z" fill="#1b1d22" />
      <path d="M388 360 L512 360 L516 428 L384 428 Z" fill="#0b0d10" />
      <rect x="323" y="374" width="15" height="38" rx="2" fill="#3b3f47" /><rect x="311" y="386" width="39" height="14" rx="2" fill="#3b3f47" />
      <ellipse cx="572" cy="374" rx="9" ry="7" fill="#3b3f47" /><ellipse cx="590" cy="390" rx="9" ry="7" fill="#3b3f47" />
      <ellipse cx="572" cy="406" rx="9" ry="7" fill="#3b3f47" /><ellipse cx="554" cy="390" rx="9" ry="7" fill="#3b3f47" />
      <ellipse cx="566" cy="432" rx="5" ry="3.5" fill="#9aa0a8" /><ellipse cx="566" cy="444" rx="5" ry="3.5" fill="#9aa0a8" />
    </g>
  );
  const tv = ap === "ps5" ? SAGA_APARELHOS.ps5.tela : SAGA_TV_HD;
  return (
    <g>
      <SagaTvPlana P={P} t={tv} base={402} />
      {ap === "ps3" && (
        <g>
          <ellipse cx="690" cy="404" rx="118" ry="7" fill={u("sombra")} />
          <path d="M590 368 C612 330 768 330 790 368 Z" fill={u("pretoBrilho")} />
          <path d="M606 360 C640 338 740 338 774 360" stroke="#fff" strokeOpacity=".28" strokeWidth="1.6" fill="none" />
          <path d="M630 350 C660 342 720 342 750 350" stroke="#fff" strokeOpacity=".12" strokeWidth="5" fill="none" />
          <text x="690" y="362" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6.5" letterSpacing="1.6" fill="#a7adb6" opacity=".8">PLAYSTATION 3</text>
          <rect x="590" y="366" width="200" height="36" rx="3" fill={u("pretoBrilho")} />
          <rect x="590" y="366" width="200" height="1.8" fill="#cfd4db" />
          <rect x="590" y="400" width="200" height="2" fill="#000" />
          <rect x="604" y="378" width="112" height="3.6" rx="1.8" fill="#000" />
          <rect x="604" y="376.4" width="112" height=".8" fill="#6a6f78" />
          <rect x="740" y="375" width="16" height="1.6" fill="#6a6f78" /><rect x="740" y="388" width="16" height="1.6" fill="#6a6f78" />
          <path d="M745 372 L748 369 L751 372" stroke="#6a6f78" strokeWidth=".8" fill="none" />
          <circle cx="772" cy="376" r="2" fill="#3a2a22" />
          {[0, 1, 2, 3].map((i) => <rect key={i} x={604 + i * 9} y="391" width="6" height="2.6" fill="#050505" stroke="#2b2e34" strokeWidth=".4" />)}
          <line x1="600" y1="388" x2="730" y2="388" stroke="#2a2c31" />
          <SagaControle tipo="ps3" x={360} y={562} />
        </g>
      )}
      {ap === "x360" && (
        <g>
          <ellipse cx="690" cy="404" rx="110" ry="7" fill={u("sombra")} />
          <path d="M604 338 L776 338 L784 352 L596 352 Z" fill="#e9ebee" />
          {Array.from({ length: 10 }).map((_, i) => <line key={i} x1={640 + i * 10} y1="341" x2={638 + i * 10} y2="349" stroke="#c3c7cd" strokeWidth="1.2" />)}
          <rect x="596" y="352" width="188" height="50" rx="5" fill={u("branco")} />
          <path d="M596 367 Q690 381 784 367 L784 374 Q690 388 596 374 Z" fill="#000" opacity=".06" />
          <rect x="604" y="357" width="128" height="15" rx="2" fill="#e6e8ec" stroke="#c9ccd2" />
          <rect x="606" y="359" width="124" height="11" fill="#25272b" />
          <rect x="737" y="360" width="9" height="7" rx="2" fill="#d8dbe0" stroke="#bfc3c9" />
          <circle cx="764" cy="364" r="10.5" fill="#e3e6ea" stroke="#bcc0c6" />
          <circle cx="764" cy="364" r="5.5" fill="#f5f6f8" stroke="#cdd0d5" />
          <rect x="612" y="380" width="46" height="9" rx="2" fill="#d5d8de" stroke="#b8bcc3" /><rect x="666" y="380" width="46" height="9" rx="2" fill="#d5d8de" stroke="#b8bcc3" />
          <rect x="722" y="381" width="14" height="6" rx="1.5" fill="#d0d3d9" stroke="#b8bcc3" />
          <rect x="596" y="394" width="188" height="8" rx="3" fill="#c9ccd2" />
          <text x="690" y="400" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5" letterSpacing="1.2" fill="#8d939b">XBOX 360</text>
          <SagaControle tipo="x360" x={360} y={562} />
        </g>
      )}
      {ap === "ps4" && (
        <g>
          <ellipse cx="690" cy="404" rx="108" ry="7" fill={u("sombra")} />
          <path d="M606 342 L774 342 L782 368 L598 368 Z" fill="#17191d" />
          <path d="M606 342 L652 342 L648 368 L598 368 Z" fill="#30343c" />
          <path d="M610 344 L650 344 L647 352 L606 352 Z" fill="#fff" opacity=".08" />
          <path d="M598 368 L782 368 L778 382 L602 382 Z" fill={u("preto")} />
          <rect x="602" y="382" width="176" height="4.5" fill="#030304" />
          <path d="M602 386.5 L778 386.5 L784 402 L596 402 Z" fill="#141619" />
          <rect x="612" y="383" width="100" height="2.4" fill="#000" />
          <rect x="612" y="382.3" width="100" height=".6" fill="#4a4d55" />
          <rect x="738" y="383" width="9" height="2" fill="#3a3d45" /><rect x="752" y="383" width="9" height="2" fill="#3a3d45" />
          <line x1="650" y1="342" x2="646" y2="368" stroke="#0a0b0d" strokeWidth="2.6" />
          <SagaControle tipo="ps4" x={360} y={562} />
        </g>
      )}
      {ap === "ps5" && (
        <g>
          <ellipse cx="736" cy="404" rx="52" ry="6" fill={u("sombra")} />
          <ellipse cx="736" cy="401" rx="30" ry="4" fill="#0e0f12" />
          <rect x="722" y="168" width="28" height="234" fill="#121317" />
          <path d="M722 160 C698 164 690 200 692 250 L696 386 C697 398 708 402 722 402 Z" fill={u("branco")} />
          <path d="M750 160 C776 164 786 204 784 252 L786 388 C785 398 772 402 750 402 Z" fill={u("branco")} />
          <path d="M700 230 C702 196 708 176 718 168" stroke="#fff" strokeWidth="2" fill="none" opacity=".9" />
          <path d="M762 290 Q782 296 782 344 Q782 388 762 394" stroke="#c4c9d1" strokeWidth="1.5" fill="none" />
          <rect x="769" y="306" width="3" height="80" rx="1.5" fill="#22252a" />
          <circle cx="736" cy="182" r="3" fill="#2a2d33" /><circle cx="736" cy="194" r="2" fill="#2a2d33" />
          <rect x="730" y="374" width="5" height="8" rx="1" fill="#2a2d33" /><rect x="738" y="374" width="5" height="8" rx="1" fill="#2a2d33" />
          {Array.from({ length: 14 }).map((_, i) => <circle key={i} cx={736} cy={220 + i * 10} r=".9" fill="#2a2d33" />)}
          <rect x="721" y="176" width="2.6" height="200" fill="#1c1e22" /><rect x="748.5" y="176" width="2.6" height="200" fill="#1c1e22" />
          <g transform="translate(380 560)">
            <ellipse cx="0" cy="24" rx="68" ry="8" fill="#000" opacity=".45" />
            <path d="M-52 -10 Q-40 -20 0 -18 Q40 -20 52 -10 Q70 18 58 28 Q46 34 38 20 L-38 20 Q-46 34 -58 28 Q-70 18 -52 -10 Z" fill="#eef0f3" />
            <path d="M-22 -18 L22 -18 L18 12 L-18 12 Z" fill="#1d1f24" />
            <rect x="-19" y="-16" width="38" height="14" rx="2" fill="#f7f8fa" />
            <circle cx="-14" cy="8" r="7" fill="#1d1f24" /><circle cx="14" cy="8" r="7" fill="#1d1f24" />
            <path d="M-40 -6 h14 M-33 -13 v14" stroke="#9aa0a8" strokeWidth="4" />
            {[[36, -11], [43, -5], [29, -5], [36, 1]].map((b, i) => <circle key={i} cx={b[0]} cy={b[1]} r="2.8" fill="#c3c7cd" />)}
          </g>
        </g>
      )}
    </g>
  );
}

/* ---------- mídia (disco, UMD, cartuchos) ---------- */
function SagaMidiaArte({ midia, base, img, titulo, plat, uid }) {
  const m = SAGA_MIDIAS[midia] || SAGA_MIDIAS.dvd;
  const arte = img ? <img src={img} alt="" decoding="async" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /> : null;
  if (m.tipo === "disco") return (
    <div className="sgc-disco" data-base={base}>
      <div className="sgc-disco-rotor" data-sgc-rotor="">
        <div className="sgc-disco-rotulo">{arte}<span className="sgc-disco-faixa"><b>{titulo}</b><small>{plat}</small></span></div>
        <svg className="sgc-disco-anel" viewBox="0 0 100 100">
          <defs><path id={uid} d="M50 50 m-38.5 0 a38.5 38.5 0 1 1 77 0 a38.5 38.5 0 1 1 -77 0" /></defs>
          <text><textPath href={"#" + uid}>{plat} · {titulo} · Rockstar Games · Disco 1 ·</textPath></text>
        </svg>
      </div>
      <div className="sgc-disco-cubo" />
      <div className="sgc-disco-brilho" />
    </div>
  );
  if (m.tipo === "umd") return (
    <div className="sgc-umd">
      <div className="sgc-umd-janela"><div className="sgc-umd-disco" /></div>
      <div className="sgc-umd-rotulo">{arte}<span>{titulo}</span></div>
      <span className="sgc-umd-marca">UMD · {plat}</span>
      <div className="sgc-umd-brilho" />
    </div>
  );
  if (m.tipo === "cart-gba") return (
    <div className="sgc-cart sgc-cart-gba">
      <div className="sgc-cart-rotulo">{arte}<span className="sgc-cart-faixa">{titulo}</span></div>
      <span className="sgc-cart-marca">{plat}</span>
    </div>
  );
  return (
    <div className="sgc-cart sgc-cart-ds">
      <div className="sgc-cart-rotulo">{arte}<span className="sgc-cart-faixa">{titulo}</span></div>
      <span className="sgc-cart-marca">{plat}</span>
      <div className="sgc-cart-contatos" />
    </div>
  );
}

function sagaTitulo(t) {
  const s = String(t || "Grand Theft Auto");
  const m = s.match(/^Grand Theft Auto(?:\s*[:\-–—]\s*|\s+)(.+)$/i);
  if (m) return { k: "Grand Theft Auto", m: m[1] };
  return { k: /grand theft auto/i.test(s) ? "" : "Grand Theft Auto", m: s };
}

/* ============ componente ============ */
function SagaCena({ cap, game, index = 0, total = 16 }) {
  cap = cap || {};
  const apKey = SAGA_APARELHOS[cap.aparelho] ? cap.aparelho : "ps2";
  const ap = SAGA_APARELHOS[apKey];
  const midiaKey = SAGA_MIDIAS[cap.midia] ? cap.midia : (apKey === "gba" ? "cartucho-gba" : apKey === "ds" ? "cartucho-ds" : apKey === "psp" ? "umd" : "dvd");
  const midia = SAGA_MIDIAS[midiaKey];
  const sala = cap.sala || ap.sala;
  const P = "sgc" + index + apKey + "-";
  const titulo = (game && game.title) || (cap.titulos && cap.titulos[0]) || "Grand Theft Auto";
  const img = game && game.media && game.media.src;
  const tt = sagaTitulo(titulo);
  const base = apKey === "ps1" ? "ps1" : apKey === "ps2" ? "ps2" : midiaKey === "bd" ? "bd" : "cd";
  const platMidia = SAGA_PLAT_MIDIA[apKey] || cap.plataforma || "";
  const nn = (n) => String(n).padStart(2, "0");
  const t = ap.tela;
  const caixa = midia.caixa;

  const els = React.useRef({});
  const r = (k) => (el) => { els.current[k] = el; };

  React.useEffect(() => {
    const E = els.current;
    const wrap = E.wrap, palco = E.palco, cena = E.cena;
    if (!wrap || !palco || !cena || typeof window === "undefined") return;
    const dir = ap.caixa.x > 500 ? 1 : -1;
    const ent = ap.entrada;
    const discoTipo = midia.tipo === "disco" || midia.tipo === "umd";
    const rotor = E.midia && E.midia.querySelector("[data-sgc-rotor]");
    let G = null;
    let ultimo = "";

    const medir = () => {
      const sw = palco.clientWidth, sh = palco.clientHeight;
      const W = cena.offsetWidth || 1;
      const k = W / 1000;
      const ox = cena.offsetLeft, oy = cena.offsetTop;
      const tw = t.w * k, th = t.h * k;
      const Z = Math.min(Math.max(sw / tw, sh / th) * 1.04, Math.min(sw / tw, sh / th) * 1.18);
      G = { sw, sh, k, ox, oy, Z, Lx: (t.x + t.w / 2) * k, Ly: (t.y + t.h / 2) * k, tw, th };
      if (E.tela) {
        const s = E.tela.style;
        s.width = tw * Z + "px"; s.height = th * Z + "px";
        s.fontSize = (tw * Z) / 28 + "px";
        s.borderRadius = t.r * k * Z + "px";
      }
      ultimo = "";
    };

    const aplicar = (p, entrada) => {
      if (!G) medir();
      const chave = p.toFixed(4) + "|" + entrada.toFixed(3);
      if (chave === ultimo) return;
      ultimo = chave;
      const { k } = G;
      const px = (v) => (v * k).toFixed(2) + "px";

      /* entrada da sala e do aparelho */
      const eEnt = sagaEase.out(entrada);
      if (E.escuro) E.escuro.style.opacity = (1 - eEnt) * 0.92;
      const d = sagaEase.out(sagaSeg(p, 0, 0.1));
      const sobeAp = `translate3d(0,${px((1 - d) * 46)},0)`;
      if (E.aparelho) { E.aparelho.style.transform = sobeAp; E.aparelho.style.opacity = d; }

      /* caixa */
      const ci = sagaEase.out(sagaSeg(p, 0.08, 0.22));
      const co = sagaEase.in(sagaSeg(p, 0.64, 0.76));
      let bx = ap.caixa.x + dir * (1 - ci) * 560 + dir * co * 600;
      let by = ap.caixa.y + (1 - ci) * 70 - Math.sin(ci * Math.PI) * 30 - Math.sin(co * Math.PI) * 20;
      if (E.caixa) {
        E.caixa.style.transform = `translate3d(${px(bx)},${px(by)},0) translate(-50%,-50%)`;
        E.caixa.style.opacity = sagaSeg(p, 0.08, 0.12) * (1 - co);
        E.caixa.style.visibility = p < 0.08 || co >= 1 ? "hidden" : "visible";
      }
      if (E.caixaCorpo) {
        const ry = dir * ((1 - ci) * -62 + 14 * (1 - sagaSeg(p, 0.22, 0.3))) - dir * co * 40;
        const rz = dir * (1 - ci) * 16;
        const rx = (1 - ci) * 12 + 6;
        E.caixaCorpo.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) rotateZ(${rz.toFixed(2)}deg)`;
      }
      if (E.capa) {
        const a = sagaEase.inOut(sagaSeg(p, 0.22, 0.34));
        E.capa.style.transform = `translateZ(${caixa.d / 20}em) rotateY(${(-a * 158).toFixed(2)}deg)`;
      }

      /* bandeja / tampa */
      const abre = sagaEase.inOut(sagaSeg(p, 0.3, 0.4));
      const fechaB = sagaEase.inOut(sagaSeg(p, 0.66, 0.72));
      const fechaT = sagaEase.inOut(sagaSeg(p, 0.67, 0.72));
      if (E.bandeja && ap.bandeja) {
        const out = abre * (1 - fechaB);
        E.bandeja.style.transform = `translate3d(0,${px((out - 1) * ap.bandeja.prof)},0)`;
      }
      if (E.bandejaDisco) E.bandejaDisco.style.opacity = p >= 0.66 ? 1 : 0;
      if (E.tampa && ap.tampa) {
        const out = abre * (1 - fechaT);
        const sy = sagaLerp(1, -2.7, out);
        E.tampa.style.transform = `${sobeAp} scale(1,${sy.toFixed(3)})`;
        E.tampa.style.opacity = d;
        E.tampa.setAttribute("data-aberta", sy < 0 ? "1" : "0");
      }

      /* mídia */
      const M = E.midia;
      if (M) {
        const bx0 = ap.caixa.x, by0 = ap.caixa.y;
        let x = bx0, y = by0, s = 1, sx = 1, sy = 1, rot = 0, spin = 0, op = 1, clip = "";
        const A = ap.alvo;
        let ax = A.x, ay = A.y;
        if (ent === "bandeja" || ent === "tampa") ay = A.y - 56;
        if (ent === "encaixe") ay = A.y;
        const sA = ent === "encaixe" ? 1 : A.s;
        const ri = sagaEase.out(sagaSeg(p, 0.34, 0.44));
        const f = sagaEase.inOut(sagaSeg(p, 0.44, 0.62));
        const y0 = by0 - 84;
        if (p < 0.44) {
          y = sagaLerp(by0, y0, ri); s = 1 + 0.12 * ri; spin = ri * 120;
          rot = midia.tipo.indexOf("cart") === 0 ? -dir * 10 * ri : 0;
        } else {
          const cxp = (bx0 + ax) / 2, cyp = Math.min(y0, ay) - 150;
          const u1 = 1 - f;
          x = u1 * u1 * bx0 + 2 * u1 * f * cxp + f * f * ax;
          y = u1 * u1 * y0 + 2 * u1 * f * cyp + f * f * ay;
          s = sagaLerp(1.12, sA, f) * (1 + 0.16 * Math.sin(f * Math.PI));
          spin = 120 + f * 900;
          rot = midia.tipo.indexOf("cart") === 0 ? -dir * 10 * (1 - f) + dir * Math.sin(f * Math.PI) * 24 : 0;
          if ((ent === "bandeja" || ent === "tampa") && A.sy) sy = sagaLerp(1, A.sy, sagaEase.inOut(sagaSeg(f, 0.45, 1)));
          if (ent === "fenda" || ent === "fendaV") {
            const a2 = sagaEase.inOut(sagaSeg(p, 0.62, 0.66));
            if (ent === "fenda") sy = sagaLerp(1, 0.045, a2); else sx = sagaLerp(1, 0.045, a2);
            const n2 = sagaEase.in(sagaSeg(p, 0.66, 0.7));
            s *= 1 - 0.18 * n2; op = 1 - n2;
            if (ent === "fenda") y -= 3 * n2;
            spin += sagaEase.out(sagaSeg(p, 0.62, 0.66)) * 180;
          }
          if (ent === "bandeja" || ent === "tampa") {
            const fimL = ent === "tampa" ? 0.67 : 0.66;
            const l = sagaEase.outQuart(sagaSeg(p, 0.62, fimL));
            y = sagaLerp(y, A.y, l);
            spin += sagaEase.out(sagaSeg(p, 0.62, fimL)) * 160;
            if (ent === "bandeja" && p >= 0.66) op = 0;
            if (ent === "tampa" && p >= 0.72) op = 0;
          }
          if (ent === "encaixe") {
            const n = sagaEase.inOut(sagaSeg(p, 0.62, 0.7));
            y = sagaLerp(y, A.fy, n);
            const h = midia.h * s;
            const corte = sagaClamp((y + h / 2 - A.corte) / h) * 100;
            if (p >= 0.6) clip = `inset(0 0 ${corte.toFixed(2)}% 0)`;
            if (A.some && p >= 0.7) op = 0;
          }
        }
        const visivel = p >= 0.34 && op > 0.001;
        M.style.opacity = visivel ? op : 0;
        M.style.visibility = visivel ? "visible" : "hidden";
        if (visivel) {
          M.style.transform = `translate3d(${px(x)},${px(y)},0) translate(-50%,-50%) rotate(${rot.toFixed(2)}deg) scale(${(s * sx).toFixed(4)},${(s * sy).toFixed(4)})`;
          M.style.clipPath = clip;
          if (rotor) rotor.style.transform = `rotate(${spin.toFixed(1)}deg)`;
        }
        if (E.replica) E.replica.style.opacity = p < 0.34 ? 1 : 0;
        M.setAttribute("data-voando", p > 0.34 && p < 0.66 ? "1" : "0");
      }

      /* pulso de encaixe */
      if (E.pulso) {
        const q = sagaSeg(p, ent === "bandeja" ? 0.69 : 0.64, ent === "bandeja" ? 0.79 : 0.76);
        const vis = q > 0 && q < 1;
        E.pulso.style.opacity = vis ? Math.sin(q * Math.PI) * 0.9 : 0;
        if (vis) E.pulso.style.transform = `translate(-50%,-50%) scale(${(0.35 + q * 1.1).toFixed(3)})`;
      }

      /* LEDs */
      const led = sagaSeg(p, 0.7, 0.712);
      if (E.leds) E.leds.style.opacity = led;
      if (E.led2) E.led2.style.opacity = sagaSeg(p, 0.72, 0.73);

      /* tela */
      const tp = sagaSeg(p, 0.72, 0.82);
      const ligada = tp > 0;
      const z = sagaEase.inOut(sagaSeg(p, 0.84, 1));
      const esc = Math.pow(G.Z, z);
      const Sx = sagaLerp(G.ox + G.Lx, G.sw / 2, z), Sy = sagaLerp(G.oy + G.Ly, G.sh / 2, z);
      cena.style.transform = z > 0 ? `translate3d(${(Sx - G.ox - esc * G.Lx).toFixed(2)}px,${(Sy - G.oy - esc * G.Ly).toFixed(2)}px,0) scale(${esc.toFixed(4)})` : "";
      if (E.tela) {
        E.tela.style.opacity = ligada ? 1 : 0;
        E.tela.style.visibility = ligada ? "visible" : "hidden";
        if (ligada) {
          const W = G.tw * G.Z, H = G.th * G.Z;
          E.tela.style.transform = `translate3d(${(Sx - W / 2).toFixed(2)}px,${(Sy - H / 2).toFixed(2)}px,0) scale(${(esc / G.Z).toFixed(5)})`;
          let csx = 1, csy = 1, flash = 0, cop = 1, cs = 1;
          if (t.tipo === "crt") {
            const a = sagaEase.out(sagaSeg(tp, 0, 0.16));
            const b = sagaEase.outQuart(sagaSeg(tp, 0.16, 0.5));
            csx = Math.max(0.002, a); csy = sagaLerp(0.007, 1, b);
            flash = 1 - sagaEase.out(sagaSeg(tp, 0.2, 0.62));
          } else {
            flash = 0.35 * (1 - sagaSeg(tp, 0, 0.2));
            cop = sagaEase.out(sagaSeg(tp, 0.12, 0.55));
            cs = sagaLerp(1.06, 1, sagaEase.out(sagaSeg(tp, 0.12, 0.7)));
          }
          if (E.telaConteudo) {
            E.telaConteudo.style.transform = `scale(${(csx * cs).toFixed(4)},${(csy * cs).toFixed(4)})`;
            E.telaConteudo.style.opacity = cop;
          }
          if (E.telaFlash) E.telaFlash.style.opacity = flash;
          const ti = sagaEase.out(sagaSeg(tp, 0.5, 0.95));
          if (E.telaInfo) { E.telaInfo.style.opacity = ti; E.telaInfo.style.transform = `translate3d(${((1 - ti) * 1.2).toFixed(3)}em,0,0)`; }
        }
      }
      if (E.brilho) E.brilho.style.opacity = 0.75 * sagaEase.out(sagaSeg(p, 0.74, 0.84));

      /* textos e final */
      const tOp = sagaEase.out(sagaSeg(entrada, 0.35, 1)) * (1 - sagaSeg(p, 0.8, 0.88)) * (dir < 0 ? 1 - 0.8 * sagaSeg(p, 0.12, 0.24) * (1 - sagaSeg(p, 0.66, 0.74)) : 1);
      if (E.texto) { E.texto.style.opacity = tOp; E.texto.style.transform = `translate3d(0,${((1 - sagaEase.out(sagaSeg(entrada, 0.35, 1))) * 24 - sagaSeg(p, 0.8, 0.88) * 20).toFixed(1)}px,0)`; }
      if (E.dica) E.dica.style.opacity = Math.min(eEnt, 1 - sagaSeg(p, 0.01, 0.07));
      if (E.fim) E.fim.style.opacity = sagaEase.inOut(sagaSeg(p, 0.9, 0.99));
    };

    let raf = 0, ouvindo = false;
    const quadro = () => {
      raf = 0;
      const rc = wrap.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const tot = rc.height - vh;
      const p = tot > 0 ? sagaClamp(-rc.top / tot) : 0;
      aplicar(p, sagaClamp(1 - rc.top / vh));
    };
    const agenda = () => { if (!raf) raf = requestAnimationFrame(quadro); };
    const reduzido = typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const aoRedimensionar = () => { medir(); if (reduzido) { ultimo = ""; aplicar(0.83, 1); } else agenda(); };

    medir();
    window.addEventListener("resize", aoRedimensionar);
    if (reduzido) {
      wrap.setAttribute("data-sgc-reduzido", "1");
      medir();
      aplicar(0.83, 1);
      return () => window.removeEventListener("resize", aoRedimensionar);
    }

    const liga = () => { if (!ouvindo) { ouvindo = true; window.addEventListener("scroll", agenda, { passive: true }); agenda(); } };
    const desliga = () => { if (ouvindo) { ouvindo = false; window.removeEventListener("scroll", agenda); } };
    let io = null;
    if (typeof window.IntersectionObserver === "function") {
      io = new IntersectionObserver((ents) => { ents.forEach((en) => (en.isIntersecting ? liga() : desliga())); }, { rootMargin: "100% 0px 100% 0px" });
      io.observe(wrap);
    } else liga();
    quadro();
    return () => {
      desliga();
      if (io) io.disconnect();
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("resize", aoRedimensionar);
    };
  }, [apKey, midiaKey]);

  /* ---- posições em % da cena ---- */
  const pos = (x, y, w, h) => ({ left: x / 10 + "%", top: y / 6 + "%", width: w / 10 + "%", height: h / 6 + "%" });
  const tvBrilho = pos(t.x + t.w / 2 - t.w * 1.6, t.y + t.h / 2 - t.h * 1.9, t.w * 3.2, t.h * 3.8);
  const tvParaSala = sala === "hd" && !ap.mesa ? t : null;
  const bnd = ap.bandeja;
  const pulsoPos = ap.entrada === "bandeja" ? { x: bnd.x + bnd.w / 2, y: bnd.y + 6, sy: 0.3 }
    : ap.entrada === "tampa" ? { x: ap.tampa.x, y: ap.tampa.y, sy: 0.28 }
    : ap.entrada === "fenda" ? { x: ap.alvo.x, y: ap.alvo.y, sy: 0.16 }
    : ap.entrada === "fendaV" ? { x: ap.alvo.x, y: ap.alvo.y, sx: 0.16 }
    : { x: ap.alvo.x, y: ap.alvo.corte, sy: 0.26 };
  const arteImg = (cls) => img ? <img className={cls} src={img} alt="" decoding="async" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /> : null;

  return (
    <div className="sgc-wrap" data-sgc-aparelho={apKey} data-sgc-sala={sala} ref={r("wrap")}>
      <h2 className="sgc-sr">{titulo} — {cap.plataforma}, {cap.ano}</h2>
      <div className="sgc-palco" ref={r("palco")} aria-hidden="true">
        <div className="sgc-cena" ref={r("cena")}>
          <svg className="sgc-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" focusable="false">
            <SagaDefs P={P} />
            {sala === "90s" ? <SagaSala90 P={P} /> : sala === "hd" ? <SagaSalaHd P={P} tv={tvParaSala} /> : <SagaSala00 P={P} />}
            <SagaMovel P={P} ap={apKey} />
          </svg>
          <div className="sgc-aparelho" ref={r("aparelho")}>
            <svg className="sgc-svg" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" focusable="false">
              <SagaArte P={P} ap={apKey} />
            </svg>
            {bnd && (
              <div className="sgc-bandeja-clip" style={pos(bnd.x, bnd.y, bnd.w, bnd.prof + bnd.placa)}>
                <div className="sgc-bandeja" data-cor={bnd.cor} ref={r("bandeja")} style={{ "--sgc-prof": bnd.prof / (bnd.prof + bnd.placa) * 100 + "%", "--rx": (ap.alvo.s * 50 / bnd.w * 100 * 1.08).toFixed(1) + "%", "--ry": (ap.alvo.s * ap.alvo.sy * 50 / bnd.prof * 100 * 1.15).toFixed(1) + "%" }}>
                  <div className="sgc-bandeja-topo" />
                  <div className="sgc-bandeja-placa" data-marca={{ pc: "CD-ROM  52×", ps2: "", x360: "" }[apKey] || ""} />
                  <div className="sgc-bandeja-disco" ref={r("bandejaDisco")} style={{ transform: `translate(-50%,-50%) scale(${ap.alvo.s},${(ap.alvo.s * ap.alvo.sy).toFixed(3)})` }}>
                    <SagaMidiaArte midia={midiaKey} base={base} img={img} titulo={tt.m} plat={platMidia} uid={P + "anel1"} />
                  </div>
                </div>
              </div>
            )}
            <div className="sgc-leds" ref={r("leds")}>
              {ap.leds.map((l, i) => (
                <span key={i} className="sgc-led" data-forma={l.forma || "ponto"} style={{ left: l.x / 10 + "%", top: l.y / 6 + "%", width: l.w / 10 + "em", height: l.h / 10 + "em", transform: `translate(-50%,-50%) rotate(${l.rot || 0}deg)` }} />
              ))}
            </div>
            {ap.led2 && <span className="sgc-led sgc-led2" ref={r("led2")} style={{ left: ap.led2.x / 10 + "%", top: ap.led2.y / 6 + "%" }} />}
          </div>

          <div className="sgc-caixa" ref={r("caixa")} data-estilo={caixa.estilo} style={{ "--w": caixa.w / 10 + "em", "--h": caixa.h / 10 + "em", "--d": caixa.d / 10 + "em" }}>
            <div className="sgc-caixa-corpo" ref={r("caixaCorpo")}>
              <div className="sgc-caixa-fundo">
                <div className="sgc-caixa-midia" ref={r("replica")}>
                  <SagaMidiaArte midia={midiaKey} base={base} img={img} titulo={tt.m} plat={platMidia} uid={P + "anel2"} />
                </div>
              </div>
              <div className="sgc-caixa-lado sgc-caixa-lombada"><em>{platMidia.split(" · ")[0]}</em><span>{titulo}</span><b>R</b></div>
              <div className="sgc-caixa-lado sgc-caixa-dir" />
              <div className="sgc-caixa-topo" />
              <div className="sgc-caixa-base" />
              <div className="sgc-caixa-capa" ref={r("capa")}>
                <div className="sgc-capa-frente">{arteImg("")}<span className="sgc-capa-selo">{cap.plataforma}</span></div>
                <div className="sgc-capa-verso"><b>{tt.m}</b><i /><i /><i /><i /><i /></div>
              </div>
            </div>
          </div>

          <div className="sgc-midia" ref={r("midia")} data-tipo={midia.tipo} style={{ width: midia.w / 10 + "em", height: midia.h / 10 + "em" }}>
            <SagaMidiaArte midia={midiaKey} base={base} img={img} titulo={tt.m} plat={platMidia} uid={P + "anel3"} />
          </div>

          {ap.tampa && (
            <div className="sgc-tampa" ref={r("tampa")} style={pos(ap.tampa.x - ap.tampa.w / 2, ap.tampa.y - ap.tampa.h / 2, ap.tampa.w, ap.tampa.h)}>
              <div className="sgc-tampa-cima" /><div className="sgc-tampa-baixo" />
            </div>
          )}
          <span className="sgc-pulso" ref={r("pulso")} style={{ left: pulsoPos.x / 10 + "%", top: pulsoPos.y / 6 + "%", "--sx": pulsoPos.sx || 1, "--sy": pulsoPos.sy || 1 }} />
          <div className="sgc-brilho" ref={r("brilho")} data-tipo={t.tipo} style={tvBrilho} />
        </div>

        <div className="sgc-tela" ref={r("tela")} data-tipo={t.tipo}>
          <div className="sgc-tela-conteudo" ref={r("telaConteudo")}>
            <div className="sgc-tela-fundo">{arteImg("")}</div>
            <div className="sgc-tela-grade">
              <div className="sgc-tela-capa">{arteImg("")}</div>
              <div className="sgc-tela-info" ref={r("telaInfo")}>
                {tt.k && <span className="sgc-tela-k">{tt.k}</span>}
                <strong className="sgc-tela-titulo" data-longo={tt.m.length > 20 ? "2" : tt.m.length > 11 ? "1" : "0"}>{tt.m}</strong>
                <span className="sgc-tela-sub">{cap.ano} · {cap.cidade}</span>
                <span className="sgc-tela-start">Pressione Start</span>
              </div>
            </div>
          </div>
          <div className="sgc-tela-scan" />
          <div className="sgc-tela-flash" ref={r("telaFlash")} />
          <div className="sgc-tela-vidro" />
        </div>

        <div className="sgc-escuro" ref={r("escuro")} />
        <div className="sgc-texto" ref={r("texto")}>
          <span className="sgc-kicker">Capítulo {nn(index + 1)} de {nn(total)}</span>
          <span className="sgc-ano">{cap.ano}</span>
          <span className="sgc-plataforma">{cap.plataforma}</span>
          {cap.cidade && <span className="sgc-cidade">{cap.cidade}</span>}
        </div>
        <div className="sgc-dica" ref={r("dica")}><span>role para ligar</span><i /></div>
        <div className="sgc-fim" ref={r("fim")} />
      </div>
    </div>
  );
}

Object.assign(window, { SagaCena });
