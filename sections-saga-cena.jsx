/* ============ A SAGA · CENA DE ABERTURA (SagaCena) ============
 * Antes de cada capítulo: a sala da época, o aparelho em que o jogo rodava,
 * a caixa que entra e abre, a mídia que voa até o aparelho, o LED que acende,
 * a tela que liga com a capa e a câmera que mergulha na tela.
 *
 * Tudo é dirigido pelo scroll (p ∈ [0,1] dentro de .sgc-wrap), só com
 * transform/opacity, em requestAnimationFrame e sem estado React por quadro.
 * Coordenadas da cena: viewBox 1000 × 600 (x/10 % e y/6 % no HTML;
 * 1em dentro de .sgc-cena = 10 unidades da cena).
 * O hardware é foto real recortada (assets/saga); a sala é ilustrada e fica
 * desfocada atrás, os móveis ficam nítidos. A tela de cada foto é um
 * quadrilátero: a imagem ligada é projetada nele (matrix3d) e vira retângulo no zoom.
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
  "cartucho-gba": { tipo: "cart-gba", w: 132, h: 76, caixa: { w: 150, h: 150, d: 26, estilo: "papelao" } },
  "cartucho-ds": { tipo: "cart-ds", w: 76, h: 80, caixa: { w: 122, h: 132, d: 14, estilo: "ds" } }
};

/* ---------- caixa e mídia originais de cada capítulo (assets/saga/midia, fontes em CREDITOS.md) ----------
 * <tema>-caixa.webp   frente da caixa (scan da capa original da plataforma)
 * <tema>-disco.webp   disco / UMD / cartucho recortado com alfa (o nome é o mesmo para todos)
 * <tema>-lombada.webp scan da lombada, quando existe (senão a lombada usa a própria capa)
 * a = largura/altura da frente; caixa = troca de estojo (big box de PC, Xbox 360, PS5).
 * GTA VI ainda não tem disco nem caixa física: a capa oficial (GTAVI-CoverArt) vai num
 * estojo de PS5 com a faixa "PS5" e o disco é um rótulo genérico de PS5 com essa capa.
 */
const SAGA_PC_BOX = { h: 168, d: 30, estilo: "pc" };
const SAGA_MIDIA_REAL = {
  gta1: { a: 427 / 520, lombada: 1, caixa: SAGA_PC_BOX },
  london: { a: 468 / 480 },
  gta2: { a: 411 / 520, caixa: SAGA_PC_BOX },
  gta3: { a: 368 / 520, lombada: 1 },
  vc: { a: 368 / 520, lombada: 1 },
  sa: { a: 368 / 520, lombada: 1 },
  advance: { a: 1 },
  lcs: { a: 324 / 560, lombada: 1 },
  vcs: { a: 324 / 560, lombada: 1 },
  gta4: { a: 454 / 520, lombada: 1 },
  tlad: { a: 333 / 458, lombada: 1, caixa: { estilo: "x360" } },
  cw: { a: 572 / 520, lombada: 1 },
  tbogt: { a: 355 / 520, lombada: 1, caixa: { estilo: "x360" } },
  gta5: { a: 454 / 520, lombada: 1 },
  online: { a: 414 / 520 },
  gta6: { a: 0.82, ps5: 1, caixa: { estilo: "ps5" } }
};
const sagaMidiaSrc = (tema, k) => "assets/saga/midia/" + tema + "-" + k + ".webp";

const SAGA_PLAT_MIDIA = { pc: "PC CD-ROM", ps1: "PlayStation", ps2: "PlayStation 2 · DVD", gba: "Game Boy Advance", psp: "PSP", ps3: "PS3 · Blu-ray", x360: "Xbox 360 · DVD", ds: "Nintendo DS", ps4: "PS4 · Blu-ray", ps5: "PS5 · Blu-ray" };

/* ---------- fotos reais do hardware (assets/saga, créditos em CREDITOS.md) ----------
 * [largura, altura] em px de cada recorte; as peças das cenas guardam só x/y/largura
 * em unidades da cena e todas as medidas internas (tela, fenda, LED) em % da foto,
 * então tudo acompanha a escala.
 */
const SAGA_FOTOS = {
  pc: [1100, 1238], tvcrt: [1400, 992], tvhd: [1400, 1083],
  ps1: [1400, 618], ps2: [1400, 540], ps3: [1400, 560], ps4: [1400, 674], x360: [1400, 633], ps5: [558, 1300],
  gba: [1200, 782], psp: [1300, 707], ds: [1100, 914]
};
const sagaFotoSrc = (f) => "assets/saga/" + f + ".webp";

/* tela de vidro de cada TV/monitor (TL, TR, BR, BL em % da foto) */
const SAGA_Q_CRT = [[15.6, 10.9], [85.6, 10.7], [84.3, 82.1], [17.4, 83.5]];
const SAGA_Q_HD = [[5.6, 7.1], [94.2, 7.0], [94.0, 71.7], [6.2, 72.0]];

/* ---------- aparelhos ----------
 * pecas  fotos na cena (f = foto, x/y/w em unidades da cena; sombra = [cx, cy, rx, ry] em % da peça)
 * tela   quadrilátero da tela na foto (peça, q, r = raio em fração da largura)
 * tela2  segunda tela (DS) · leds / led2: luz do aparelho / da TV (p = ponto, a→b = barra)
 * entrada: como a mídia entra
 *   bandeja  gaveta frontal (PC) · r = face da gaveta na foto, prof = curso
 *   tampa    tampa que abre (PS1) · c = centro, r = raios
 *   fenda    a→b = boca da fenda; u/v = eixos da mídia já deitada no plano do aparelho
 *            (u = largura, v = profundidade, em % da foto); fica = quanto sobra para fora
 *   fendaZ   fenda vista de frente (PS5 em pé): o disco entra de lado e some
 */
const SAGA_APARELHOS = {
  pc: {
    sala: "90s", movel: "mesa90",
    pecas: [{ f: "pc", x: 340, y: 96, w: 300, sombra: [50, 99, 52, 2.4] }],
    tela: { peca: 0, q: [[19, 9.2], [83, 9.2], [83, 50.6], [19, 50.6]], r: 0.03, tipo: "crt" },
    leds: [{ peca: 0, p: [18.2, 85.6], w: 4, h: 3, cor: "verde" }], led2: { peca: 0, p: [69.5, 62.2] },
    caixa: { x: 222, y: 292 }, entrada: "bandeja",
    bandeja: { peca: 0, r: [59.3, 77.9, 86.3, 80.8], prof: 28, cor: "bege" }
  },
  ps1: {
    sala: "90s", movel: "rack90",
    pecas: [{ f: "tvcrt", x: 335, y: 136, w: 330, sombra: [50, 99, 47, 2] }, { f: "ps1", x: 330, y: 428, w: 350, sombra: [56, 95, 44, 7] }],
    tela: { peca: 0, q: SAGA_Q_CRT, r: 0.035, tipo: "crt" },
    leds: [{ peca: 1, p: [33.6, 46.6], w: 3.6, h: 2.6, cor: "verde" }], led2: { peca: 0, p: [41.4, 92.4] },
    caixa: { x: 772, y: 292 }, entrada: "tampa",
    tampa: { peca: 1, c: [64.1, 37.2], r: [19.1, 24.2] }
  },
  ps2: {
    sala: "2000s", movel: "rack00",
    pecas: [{ f: "tvcrt", x: 335, y: 136, w: 330, sombra: [50, 99, 47, 2] }, { f: "ps2", x: 318, y: 438, w: 380, sombra: [58, 92, 42, 8] }],
    tela: { peca: 0, q: SAGA_Q_CRT, r: 0.035, tipo: "crt" },
    leds: [{ peca: 1, p: [83.1, 76.6], w: 3, h: 3, cor: "verde" }], led2: { peca: 0, p: [41.4, 92.4] },
    caixa: { x: 778, y: 292 }, entrada: "fenda",
    fenda: { peca: 1, a: [57, 57.5], b: [82, 67.5], u: [20.6, 8.3], v: [6.8, -14.4] }
  },
  gba: {
    sala: "2000s", movel: "mesa", mesa: true,
    pecas: [{ f: "gba", x: 240, y: 300, w: 420, sombra: [50, 60, 49, 40] }],
    tela: { peca: 0, q: [[37.9, 18.0], [74.0, 35.8], [62.6, 71.2], [25.7, 50.6]], r: 0.01, tipo: "lcd" },
    leds: [{ peca: 0, p: [85.2, 39.3], w: 4, h: 3.4, cor: "verde" }],
    caixa: { x: 780, y: 300 }, entrada: "fenda",
    fenda: { peca: 0, a: [44, 4.8], b: [72, 19.3], u: [28.5, 10.5], v: [-13.6, 33.4], fica: 0.42, borda: 0.6 }
  },
  psp: {
    sala: "2000s", movel: "mesa", mesa: true,
    pecas: [{ f: "psp", x: 225, y: 318, w: 450, sombra: [50, 58, 49, 40] }],
    tela: { peca: 0, q: [[24.4, 7.9], [78.3, 23.6], [70.8, 81.9], [17.3, 64.7]], r: 0.01, tipo: "lcd" },
    leds: [{ peca: 0, p: [91.4, 76.4], w: 3.4, h: 3, cor: "verde" }],
    caixa: { x: 782, y: 300 }, entrada: "fenda",
    fenda: { peca: 0, a: [37, 4.9], b: [63, 12.5], u: [26, 7.6], v: [-3.3, 49.8], borda: 0.9 }
  },
  ps3: {
    sala: "hd", movel: "rackHd",
    pecas: [{ f: "tvhd", x: 215, y: 96, w: 400, sombra: [50, 98, 24, 2.4] }, { f: "ps3", x: 585, y: 296, w: 300, sombra: [62, 93, 38, 9] }],
    tela: { peca: 0, q: SAGA_Q_HD, r: 0.004, tipo: "plana" },
    leds: [{ peca: 1, p: [79.6, 83.4], w: 3, h: 3 }], led2: { peca: 0, p: [92.7, 86.3] },
    caixa: { x: 300, y: 282 }, entrada: "fenda",
    fenda: { peca: 1, a: [58.2, 59.8], b: [81.4, 74.3], u: [21.4, 13.3], v: [8.5, -17] }
  },
  x360: {
    sala: "hd", movel: "rackHd",
    pecas: [{ f: "tvhd", x: 215, y: 96, w: 400, sombra: [50, 98, 24, 2.4] }, { f: "x360", x: 585, y: 282, w: 300, sombra: [60, 92, 40, 10] }],
    tela: { peca: 0, q: SAGA_Q_HD, r: 0.004, tipo: "plana" },
    leds: [{ peca: 1, p: [66.4, 80.5], w: 19, h: 19, forma: "anel" }], led2: { peca: 0, p: [92.7, 86.3] },
    caixa: { x: 300, y: 282 }, entrada: "fenda",
    fenda: { peca: 1, a: [36, 51], b: [59, 63.5], u: [21.8, 11.8], v: [7.4, -17.5] }
  },
  ds: {
    sala: "hd", movel: "mesaHd", mesa: true,
    pecas: [{ f: "ds", x: 252, y: 222, w: 400, sombra: [52, 72, 46, 26] }],
    tela: { peca: 0, q: [[49.0, 11.7], [80.4, 22.6], [69.4, 47.3], [38.6, 35.8]], r: 0.01, tipo: "lcd" },
    tela2: { peca: 0, q: [[31.6, 49.1], [63.9, 60.2], [52.5, 80.5], [20.2, 69.4]] },
    leds: [{ peca: 0, p: [79.6, 57.6], w: 3.4, h: 3, cor: "verde" }],
    caixa: { x: 784, y: 320 }, entrada: "fenda",
    fenda: { peca: 0, a: [56.2, 6.9], b: [73.8, 12.9], u: [17.7, 6.2], v: [-7.6, 18.7], borda: 0.9 }
  },
  ps4: {
    sala: "hd", movel: "rackHd",
    pecas: [{ f: "tvhd", x: 215, y: 96, w: 400, sombra: [50, 98, 24, 2.4] }, { f: "ps4", x: 588, y: 280, w: 292, sombra: [58, 90, 42, 11] }],
    tela: { peca: 0, q: SAGA_Q_HD, r: 0.004, tipo: "plana" },
    leds: [{ peca: 1, a: [33.6, 44.6], b: [72, 23.2], t: 2.2, forma: "barra" }], led2: { peca: 0, p: [92.7, 86.3] },
    caixa: { x: 300, y: 282 }, entrada: "fenda",
    fenda: { peca: 1, a: [33.5, 46.5], b: [53, 85], u: [13.6, 26.8], v: [17.3, -10.6] }
  },
  ps5: {
    sala: "hd", movel: "rackHd",
    pecas: [{ f: "tvhd", x: 190, y: 96, w: 400, sombra: [50, 98, 24, 2.4] }, { f: "ps5", x: 664, y: 92, w: 140, sombra: [50, 98, 40, 2.4] }],
    tela: { peca: 0, q: SAGA_Q_HD, r: 0.004, tipo: "plana" },
    leds: [{ peca: 1, a: [37.4, 8], b: [37.4, 76], t: 1.6, forma: "barra" }, { peca: 1, a: [69, 8], b: [69, 76], t: 1.6, forma: "barra" }],
    led2: { peca: 0, p: [92.7, 86.3] },
    caixa: { x: 290, y: 296 }, entrada: "fendaZ",
    fenda: { peca: 1, a: [69.6, 54], b: [69.6, 80], u: [3, 0], v: [0, 26] }
  }
};

/* ---------- geometria derivada (unidades da cena) ---------- */
const sagaAdd = (a, b, s = 1) => [a[0] + b[0] * s, a[1] + b[1] * s];
const sagaMix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const sagaLen = (v) => Math.hypot(v[0], v[1]) || 1;

function sagaGeo(ap, midia) {
  const pecas = ap.pecas.map((pc) => { const d = SAGA_FOTOS[pc.f]; return Object.assign({}, pc, { h: pc.w * d[1] / d[0] }); });
  const pt = (i, f) => [pecas[i].x + f[0] / 100 * pecas[i].w, pecas[i].y + f[1] / 100 * pecas[i].h];
  const vec = (i, f) => [f[0] / 100 * pecas[i].w, f[1] / 100 * pecas[i].h];
  const q = ap.tela.q.map((f) => pt(ap.tela.peca, f));
  const xs = q.map((p) => p[0]), ys = q.map((p) => p[1]);
  const x0 = Math.min.apply(null, xs), y0 = Math.min.apply(null, ys);
  const t = { x: x0, y: y0, w: Math.max.apply(null, xs) - x0, h: Math.max.apply(null, ys) - y0, r: ap.tela.r || 0, tipo: ap.tela.tipo };
  const caixaB = [[t.x, t.y], [t.x + t.w, t.y], [t.x + t.w, t.y + t.h], [t.x, t.y + t.h]];
  const q2 = ap.tela2 ? ap.tela2.q.map((f) => pt(ap.tela2.peca, f)) : null;
  const leds = (ap.leds || []).map((l) => {
    if (l.a) {
      const a = pt(l.peca, l.a), b = pt(l.peca, l.b);
      return { x: (a[0] + b[0]) / 2, y: (a[1] + b[1]) / 2, w: sagaLen([b[0] - a[0], b[1] - a[1]]), h: l.t || 2, rot: Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI, forma: l.forma || "barra", cor: l.cor };
    }
    const p = pt(l.peca, l.p);
    return { x: p[0], y: p[1], w: l.w || 4, h: l.h || 4, rot: 0, forma: l.forma || "ponto", cor: l.cor };
  });
  const led2 = ap.led2 ? pt(ap.led2.peca, ap.led2.p) : null;
  const mw = midia.w, mh = midia.h;
  const I = { tipo: ap.entrada, clip: "", fim: 0.7, some: true };

  if (ap.entrada === "bandeja") {
    const b = ap.bandeja, r0 = pt(b.peca, [b.r[0], b.r[1]]), r1 = pt(b.peca, [b.r[2], b.r[3]]);
    const bw = r1[0] - r0[0], placa = r1[1] - r0[1];
    const s = 0.86 * bw / 100, sy = 0.34;
    I.bandeja = { x: r0[0], y: r0[1], w: bw, prof: b.prof, placa, cor: b.cor, s, sy, foto: b.peca };
    I.c1 = [r0[0] + bw / 2, r0[1] + b.prof / 2];
    I.c0 = [I.c1[0], I.c1[1] - 46];
    I.M = [s * 100 / mw, 0, 0, s * sy * 100 / mh];
    I.fim = 0.66;
    I.pulso = { x: I.c1[0], y: r0[1] + 4, sx: 1, sy: 0.3, rot: 0 };
  } else if (ap.entrada === "tampa") {
    const tp = ap.tampa, c = pt(tp.peca, tp.c), R = vec(tp.peca, tp.r);
    I.tampa = { x: c[0] - R[0], y: c[1] - R[1], w: R[0] * 2, h: R[1] * 2, foto: tp.peca };
    I.c1 = [c[0], c[1] + 1.5];
    I.c0 = [c[0], c[1] - 44];
    I.M = [R[0] * 2 * 0.88 / mw, 0, 0, R[1] * 2 * 0.88 / mh];
    I.fim = 0.67;
    I.pulso = { x: c[0], y: c[1], sx: 1, sy: R[1] / R[0], rot: 0 };
  } else {
    const fd = ap.fenda, a = pt(fd.peca, fd.a), b = pt(fd.peca, fd.b), U = vec(fd.peca, fd.u), V = vec(fd.peca, fd.v);
    const m = sagaMix(a, b, 0.5);
    I.M = [U[0] / mw, U[1] / mw, V[0] / mh, V[1] / mh];
    const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
    I.pulso = { x: m[0], y: m[1], sx: 1, sy: 0.2, rot: ang * 180 / Math.PI };
    if (ap.entrada === "fendaZ") {
      I.c0 = m; I.c1 = m;
      I.pulso = { x: m[0], y: m[1], sx: 0.14, sy: 1, rot: 0 };
    } else {
      const fica = fd.fica || 0;
      I.c0 = sagaAdd(m, V, -0.58);
      I.c1 = sagaAdd(m, V, fica ? 0.5 - fica : 0.62);
      I.some = !fica;
      const ab = [b[0] - a[0], b[1] - a[1]], L = sagaLen(ab), u = [ab[0] / L, ab[1] / L], n = [V[0] / sagaLen(V), V[1] / sagaLen(V)];
      const e = L * (fd.borda || 0.14);
      const A = sagaAdd(a, u, -e), B = sagaAdd(b, u, e);
      const poli = [A, B, sagaAdd(B, n, -1400), sagaAdd(A, n, -1400)];
      I.clip = "polygon(" + poli.map((p) => (p[0] / 10).toFixed(3) + "% " + (p[1] / 6).toFixed(3) + "%").join(",") + ")";
    }
  }
  return { pecas, q, q2, t, caixaB, leds, led2, I };
}

/* homografia: retângulo W×H → quadrilátero d (TL, TR, BR, BL), como matrix3d */
function sagaHomog(W, H, d) {
  const x0 = d[0][0], y0 = d[0][1], x1 = d[1][0], y1 = d[1][1], x2 = d[2][0], y2 = d[2][1], x3 = d[3][0], y3 = d[3][1];
  const dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3, dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
  let g = 0, h = 0;
  const det = dx1 * dy2 - dx2 * dy1;
  if (Math.abs(det) > 1e-9 && (Math.abs(dx3) > 1e-6 || Math.abs(dy3) > 1e-6)) {
    g = (dx3 * dy2 - dx2 * dy3) / det;
    h = (dx1 * dy3 - dx3 * dy1) / det;
  }
  const a = x1 - x0 + g * x1, b = x3 - x0 + h * x3, e = y1 - y0 + g * y1, f = y3 - y0 + h * y3;
  const n = (v) => (Math.abs(v) < 1e-12 ? "0" : v.toFixed(9));
  return `matrix3d(${n(a / W)},${n(e / W)},0,${n(g / W)},${n(b / H)},${n(f / H)},0,${n(h / H)},0,0,1,0,${x0.toFixed(2)},${y0.toFixed(2)},0,1)`;
}

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
      <linearGradient id={P + "madeiraEsc"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6a4225" /><stop offset="1" stopColor="#3d2414" /></linearGradient>
      <linearGradient id={P + "mesa00"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5a3c27" /><stop offset=".25" stopColor="#7a5338" /><stop offset="1" stopColor="#3a2518" /></linearGradient>
      <linearGradient id={P + "mesaHd"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1d1510" /><stop offset=".3" stopColor="#2f2219" /><stop offset="1" stopColor="#120c08" /></linearGradient>
      <linearGradient id={P + "rackHd"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1c1612" /><stop offset="1" stopColor="#0c0907" /></linearGradient>
      <radialGradient id={P + "luzAc"}><stop offset="0" style={ac} stopOpacity=".5" /><stop offset=".45" style={ac} stopOpacity=".16" /><stop offset="1" style={ac} stopOpacity="0" /></radialGradient>
      <radialGradient id={P + "luzQuente"}><stop offset="0" stopColor="#ffd9a0" stopOpacity=".55" /><stop offset=".5" stopColor="#ffb870" stopOpacity=".14" /><stop offset="1" stopColor="#ffb870" stopOpacity="0" /></radialGradient>
      <radialGradient id={P + "sombra"}><stop offset="0" stopColor="#000" stopOpacity=".6" /><stop offset="1" stopColor="#000" stopOpacity="0" /></radialGradient>
      <linearGradient id={P + "facho"} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#cfe0ff" stopOpacity=".13" /><stop offset="1" stopColor="#cfe0ff" stopOpacity="0" /></linearGradient>
      <linearGradient id={P + "fita"} x1="0" y1="0" x2="1" y2="0"><stop offset="0" style={ac} stopOpacity="0" /><stop offset=".15" style={ac} stopOpacity="1" /><stop offset=".85" style={ac} stopOpacity="1" /><stop offset="1" style={ac} stopOpacity="0" /></linearGradient>
      <linearGradient id={P + "reflexo"} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff" stopOpacity=".09" /><stop offset=".5" stopColor="#fff" stopOpacity=".02" /><stop offset="1" stopColor="#fff" stopOpacity="0" /></linearGradient>
      <linearGradient id={P + "cortina"} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#5a1f17" /><stop offset=".3" stopColor="#7e3424" /><stop offset=".55" stopColor="#4c1a12" /><stop offset=".8" stopColor="#74301f" /><stop offset="1" stopColor="#4a1810" /></linearGradient>
      <linearGradient id={P + "tampo90"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5e3a22" /><stop offset=".55" stopColor="#8a5a36" /><stop offset="1" stopColor="#a8744a" /></linearGradient>
      <linearGradient id={P + "borda90"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7a4c2b" /><stop offset=".25" stopColor="#5a361d" /><stop offset="1" stopColor="#2e1a0d" /></linearGradient>
      <radialGradient id={P + "luzTampo"} cx=".5" cy=".1" r=".75"><stop offset="0" stopColor="#ffe2b8" stopOpacity=".28" /><stop offset=".6" stopColor="#ffd6a0" stopOpacity=".06" /><stop offset="1" stopColor="#000" stopOpacity=".25" /></radialGradient>
      <linearGradient id={P + "ladoEsc"} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#000" stopOpacity=".4" /><stop offset="1" stopColor="#000" stopOpacity="0" /></linearGradient>
      <linearGradient id={P + "ladoLuz"} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#000" stopOpacity=".45" /><stop offset=".35" stopColor="#fff" stopOpacity=".04" /><stop offset=".65" stopColor="#fff" stopOpacity=".02" /><stop offset="1" stopColor="#000" stopOpacity=".5" /></linearGradient>
      <linearGradient id={P + "tampo00"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1a1d24" /><stop offset=".6" stopColor="#2d323c" /><stop offset="1" stopColor="#3c424e" /></linearGradient>
      <linearGradient id={P + "nicho"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#000" stopOpacity=".9" /><stop offset="1" stopColor="#000" stopOpacity="0" /></linearGradient>
      <linearGradient id={P + "vidroFume"} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#9fb2d6" stopOpacity=".1" /><stop offset=".4" stopColor="#9fb2d6" stopOpacity=".02" /><stop offset="1" stopColor="#000" stopOpacity=".3" /></linearGradient>
      <linearGradient id={P + "tampoHd"} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#24190f" /><stop offset="1" stopColor="#4a3524" /></linearGradient>
      <radialGradient id={P + "vinhetaMesa"} cx=".46" cy=".25" r=".85"><stop offset=".45" stopColor="#000" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".6" /></radialGradient>
      <linearGradient id={P + "canecaLuz"} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#000" stopOpacity=".35" /><stop offset=".3" stopColor="#fff" stopOpacity=".25" /><stop offset=".55" stopColor="#fff" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".45" /></linearGradient>
      <linearGradient id={P + "lataLuz"} x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#000" stopOpacity=".45" /><stop offset=".22" stopColor="#fff" stopOpacity=".35" /><stop offset=".4" stopColor="#fff" stopOpacity="0" /><stop offset="1" stopColor="#000" stopOpacity=".55" /></linearGradient>
      <radialGradient id={P + "tapeteLuz"} cx=".5" cy=".2" r=".8"><stop offset="0" stopColor="#fff" stopOpacity=".08" /><stop offset="1" stopColor="#000" stopOpacity=".55" /></radialGradient>
      <clipPath id={P + "clipTampo90"}><path d="M124 384 L876 384 L912 452 L88 452 Z" /></clipPath>
      <clipPath id={P + "clipTampoRack"}><path d="M292 360 L708 360 L726 382 L274 382 Z" /></clipPath>
      <clipPath id={P + "clipTampoHd"}><path d="M160 398 L840 398 L858 414 L142 414 Z" /></clipPath>
      <clipPath id={P + "clipMesa"}><rect y="292" width="1000" height="308" /></clipPath>
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

/* ---------- móveis (nítidos, com luz suave; a sala atrás fica desfocada) ---------- */
function SagaVeios({ x0, x1, y0, y1, n = 7, cor = "#000", op = 0.12, seed = 3 }) {
  let s = seed;
  const rnd = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  const out = [];
  for (let i = 0; i < n; i++) {
    const y = y0 + (y1 - y0) * (i + 0.3 + rnd() * 0.4) / n;
    const a = (rnd() - 0.5) * (y1 - y0) / n * 0.8;
    out.push(<path key={i} d={`M${x0} ${y.toFixed(1)} C${x0 + (x1 - x0) * 0.3} ${(y + a).toFixed(1)} ${x0 + (x1 - x0) * 0.65} ${(y - a).toFixed(1)} ${x1} ${(y + a * 0.5).toFixed(1)}`} stroke={cor} strokeWidth={0.8 + rnd() * 1.2} fill="none" opacity={op * (0.5 + rnd())} />);
  }
  return <g>{out}</g>;
}

function SagaTapete({ P, cor }) {
  const u = (n) => `url(#${P}${n})`;
  return (
    <g>
      <path d="M232 534 L768 534 L860 600 L140 600 Z" fill={cor} />
      <path d="M232 534 L768 534 L860 600 L140 600 Z" fill={u("tapeteLuz")} />
      <path d="M252 540 L748 540 L828 596 L172 596 Z" fill="none" stroke="#fff" strokeOpacity=".08" strokeWidth="2" />
    </g>
  );
}

function SagaMovel({ P, movel }) {
  const u = (n) => `url(#${P}${n})`;
  if (movel === "mesa90") return (
    <g>
      <ellipse cx="500" cy="530" rx="440" ry="16" fill={u("sombra")} />
      {/* pés e gaveteiro */}
      <rect x="108" y="466" width="22" height="58" fill="#3a2213" />
      <rect x="108" y="466" width="22" height="58" fill={u("ladoEsc")} />
      <rect x="690" y="466" width="210" height="58" fill={u("madeiraEsc")} />
      {[0, 1].map((i) => (
        <g key={i}>
          <rect x="702" y={472 + i * 25} width="186" height="20" rx="1.5" fill="#5a381f" />
          <rect x="702" y={472 + i * 25} width="186" height="1.2" fill="#a77a4e" opacity=".5" />
          <rect x="784" y={480 + i * 25} width="22" height="3.5" rx="1.7" fill="#c9a979" />
        </g>
      ))}
      {/* tampo em perspectiva */}
      <path d="M124 384 L876 384 L912 452 L88 452 Z" fill={u("tampo90")} />
      <g clipPath={u("clipTampo90")}><SagaVeios x0={88} x1={912} y0={386} y1={452} n={9} cor="#2a160a" op={0.16} seed={11} /></g>
      <path d="M124 384 L876 384 L912 452 L88 452 Z" fill={u("luzTampo")} />
      <path d="M88 452 L912 452" stroke="#e2b98a" strokeOpacity=".55" strokeWidth="1.4" />
      <rect x="88" y="452" width="824" height="15" fill={u("borda90")} />
      <rect x="88" y="467" width="824" height="3" fill="#000" opacity=".35" />
    </g>
  );
  if (movel === "rack90") return (
    <g>
      <SagaTapete P={P} cor="#5b2a20" />
      <ellipse cx="500" cy="524" rx="250" ry="10" fill={u("sombra")} />
      <path d="M292 360 L708 360 L726 382 L274 382 Z" fill={u("tampo90")} />
      <g clipPath={u("clipTampoRack")}><SagaVeios x0={274} x1={726} y0={360} y1={382} n={4} cor="#2a160a" op={0.18} seed={5} /></g>
      <path d="M274 382 L726 382" stroke="#e2b98a" strokeOpacity=".5" strokeWidth="1.2" />
      <rect x="274" y="382" width="452" height="10" fill={u("borda90")} />
      <rect x="282" y="392" width="436" height="128" fill={u("madeiraEsc")} />
      <rect x="282" y="392" width="436" height="6" fill="#000" opacity=".35" />
      {[0, 1].map((i) => (
        <g key={i}>
          <rect x={292 + i * 214} y="402" width="202" height="108" rx="2" fill="#4c2e19" />
          <rect x={300 + i * 214} y="410" width="186" height="92" rx="2" fill="none" stroke="#2a170b" strokeWidth="2" />
          <rect x={300 + i * 214} y="410" width="186" height="1.4" fill="#9c6e44" opacity=".45" />
        </g>
      ))}
      <circle cx="486" cy="456" r="3.6" fill="#caa36d" /><circle cx="514" cy="456" r="3.6" fill="#caa36d" />
      <rect x="282" y="392" width="436" height="128" fill={u("ladoLuz")} />
    </g>
  );
  if (movel === "rack00") return (
    <g>
      <SagaTapete P={P} cor="#262c3c" />
      <ellipse cx="500" cy="524" rx="260" ry="10" fill={u("sombra")} />
      <path d="M288 360 L712 360 L732 382 L268 382 Z" fill={u("tampo00")} />
      <path d="M268 382 L732 382" stroke="#9aa3b5" strokeOpacity=".45" strokeWidth="1.2" />
      <rect x="268" y="382" width="464" height="9" fill="#14171d" />
      {/* nicho aberto com vidro fumê */}
      <rect x="276" y="391" width="448" height="112" fill="#06070a" />
      <rect x="276" y="391" width="448" height="40" fill={u("nicho")} />
      {Array.from({ length: 9 }).map((_, i) => <rect key={i} x={292 + i * 9.5} y={452 + (i % 3) * 2} width="8" height={46 - (i % 3) * 2} fill={["#1d2a6b", "#0d0d10", "#26315e", "#2b2e35", "#14306a", "#0d0d10", "#3a3d45", "#1d2a6b", "#202533"][i]} />)}
      <rect x="590" y="472" width="120" height="26" rx="2" fill="#111318" stroke="#23262e" />
      <rect x="600" y="482" width="44" height="3" rx="1" fill="#05060a" />
      <rect x="268" y="503" width="464" height="11" fill="#14171d" />
      <rect x="276" y="391" width="448" height="112" fill={u("vidroFume")} />
      <rect x="284" y="514" width="10" height="10" fill="#8a919c" /><rect x="706" y="514" width="10" height="10" fill="#8a919c" />
    </g>
  );
  if (movel === "rackHd") return (
    <g transform="translate(512 0) scale(1.06 1) translate(-500 0)">
      <ellipse cx="500" cy="552" rx="430" ry="26" fill={u("luzAc")} opacity=".55" />
      <ellipse cx="500" cy="522" rx="380" ry="10" fill={u("sombra")} />
      <path d="M160 398 L840 398 L858 414 L142 414 Z" fill={u("tampoHd")} />
      <g clipPath={u("clipTampoHd")}><SagaVeios x0={142} x1={858} y0={398} y1={414} n={3} cor="#000" op={0.25} seed={21} /></g>
      <path d="M142 414 L858 414" stroke="#8a6d55" strokeOpacity=".5" strokeWidth="1.1" />
      <rect x="142" y="414" width="716" height="98" fill={u("rackHd")} />
      <rect x="142" y="414" width="716" height="5" fill="#000" opacity=".4" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={154 + i * 236} y="424" width="220" height="80" rx="1.5" fill="#1a130e" />
          {Array.from({ length: 17 }).map((_, j) => <rect key={j} x={160 + i * 236 + j * 12.6} y="428" width="2" height="72" fill="#000" opacity=".32" />)}
        </g>
      ))}
      <rect x="142" y="414" width="716" height="98" fill={u("ladoLuz")} />
      <rect x="150" y="512" width="700" height="3" fill={u("fita")} />
      <rect x="160" y="515" width="6" height="12" fill="#2a2c31" /><rect x="834" y="515" width="6" height="12" fill="#2a2c31" />
    </g>
  );
  /* mesa (portáteis) */
  const hd = movel === "mesaHd";
  return (
    <g>
      <rect y="286" width="1000" height="314" fill={u(hd ? "mesaHd" : "mesa00")} />
      {Array.from({ length: 9 }).map((_, i) => {
        const x = -60 + i * 140;
        return <path key={i} d={`M${500 + (x - 500) * 0.55} 286 L${x} 600`} stroke="#000" strokeOpacity={hd ? 0.35 : 0.22} strokeWidth="1.6" />;
      })}
      <g clipPath={u("clipMesa")}><SagaVeios x0={0} x1={1000} y0={292} y1={600} n={14} cor={hd ? "#000" : "#2a1a10"} op={hd ? 0.2 : 0.14} seed={hd ? 41 : 17} /></g>
      <rect y="286" width="1000" height="2.5" fill={hd ? "#7a5a42" : "#c39368"} opacity=".7" />
      <rect y="288.5" width="1000" height="10" fill="#000" opacity=".18" />
      <ellipse cx="450" cy="450" rx="430" ry="170" fill={u(hd ? "luzAc" : "luzQuente")} opacity={hd ? 0.32 : 0.55} />
      <rect y="286" width="1000" height="314" fill={u("vinhetaMesa")} />
      {hd ? (
        <g opacity=".9">
          <ellipse cx="170" cy="380" rx="48" ry="11" fill="#000" opacity=".45" />
          <path d="M126 308 L126 368 Q126 382 170 382 Q214 382 214 368 L214 308 Z" fill="#dcd7cd" />
          <path d="M126 308 L126 368 Q126 382 170 382 Q214 382 214 368 L214 308 Z" fill={u("canecaLuz")} />
          <ellipse cx="170" cy="308" rx="44" ry="10" fill="#efebe3" /><ellipse cx="170" cy="309" rx="38" ry="7.5" fill="#2a170d" />
          <path d="M214 322 Q244 324 242 344 Q240 362 214 360" stroke="#d2ccc1" strokeWidth="8" fill="none" />
        </g>
      ) : (
        <g opacity=".92">
          <ellipse cx="168" cy="376" rx="34" ry="9" fill="#000" opacity=".45" />
          <rect x="140" y="292" width="56" height="82" rx="7" style={{ fill: "var(--gt-ac2, #c33)" }} />
          <rect x="140" y="292" width="56" height="82" rx="7" fill={u("lataLuz")} />
          <ellipse cx="168" cy="293" rx="28" ry="7" fill="#cfd4dc" /><ellipse cx="168" cy="293" rx="22" ry="5" fill="#9aa1ab" />
        </g>
      )}
    </g>
  );
}

/* ---------- aparelho: fotos reais compostas ---------- */
function SagaFotos({ geo }) {
  return geo.pecas.map((pc, i) => {
    const s = pc.sombra || [50, 97, 46, 4];
    const sx = pc.x + (s[0] - s[2]) / 100 * pc.w, sy = pc.y + (s[1] - s[3]) / 100 * pc.h;
    return (
      <React.Fragment key={i}>
        <span className="sgc-sombra" style={{ left: sx / 10 + "%", top: sy / 6 + "%", width: (s[2] * 2 / 100 * pc.w) / 10 + "%", height: (s[3] * 2 / 100 * pc.h) / 6 + "%" }} />
        <img className="sgc-foto" data-foto={pc.f} src={sagaFotoSrc(pc.f)} alt="" decoding="async" loading="lazy" draggable="false"
          style={{ left: pc.x / 10 + "%", top: pc.y / 6 + "%", width: pc.w / 10 + "%", height: pc.h / 6 + "%" }} />
      </React.Fragment>
    );
  });
}

/* recorte da foto como fundo de um elemento (gaveta, tampa) */
function sagaRecorte(pc, x, y) {
  return {
    backgroundImage: `url(${sagaFotoSrc(pc.f)})`,
    backgroundSize: `${pc.w / 10}em ${pc.h / 10}em`,
    backgroundPosition: `${-(x - pc.x) / 10}em ${-(y - pc.y) / 10}em`
  };
}

/* ---------- mídia (disco, UMD, cartuchos) ---------- */
function SagaMidiaArte({ midia, base, img, titulo, plat, uid, real }) {
  const m = SAGA_MIDIAS[midia] || SAGA_MIDIAS.dvd;
  if (real) {
    /* scan original recortado: o disco gira inteiro (rotor), UMD e cartuchos não */
    const foto = <img className="sgc-real-img" src={real} alt="" decoding="async" loading="lazy" draggable="false" />;
    const tam = { width: m.w / 10 + "em", height: m.h / 10 + "em" };
    if (m.tipo === "disco") return (
      <div className="sgc-disco sgc-disco-real" style={tam}>
        <div className="sgc-disco-rotor" data-sgc-rotor="">{foto}</div>
        <div className="sgc-disco-brilho" />
      </div>
    );
    return <div className="sgc-real" data-tipo={m.tipo} style={tam}>{foto}</div>;
  }
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
  const geo = React.useMemo(() => sagaGeo(ap, midia), [apKey, midiaKey]);
  const t = geo.t;
  const I = geo.I;
  const real = SAGA_MIDIA_REAL[cap.tema] || null;
  const realMidia = real ? sagaMidiaSrc(cap.tema, "disco") : null;
  const realCaixa = real ? sagaMidiaSrc(cap.tema, "caixa") : null;
  const caixa = real ? (() => {
    const c = Object.assign({}, midia.caixa, real.caixa || {});
    c.w = Math.round(c.h * real.a);
    return c;
  })() : midia.caixa;

  const els = React.useRef({});
  const r = (k) => (el) => { els.current[k] = el; };

  React.useEffect(() => {
    const E = els.current;
    const wrap = E.wrap, palco = E.palco, cena = E.cena;
    if (!wrap || !palco || !cena || typeof window === "undefined") return;
    const dir = ap.caixa.x > 500 ? 1 : -1;
    const ent = I.tipo;
    const rotor = E.midia && E.midia.querySelector("[data-sgc-rotor]");
    const ehCart = midia.tipo.indexOf("cart") === 0;
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
        s.borderRadius = t.r * tw * Z + "px";
      }
      if (E.tela2 && geo.q2) E.tela2.style.transform = sagaHomog(100, 100, geo.q2.map((p) => [p[0] * k, p[1] * k]));
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
      const bx = ap.caixa.x + dir * (1 - ci) * 560 + dir * co * 600;
      const by = ap.caixa.y + (1 - ci) * 70 - Math.sin(ci * Math.PI) * 30 - Math.sin(co * Math.PI) * 20;
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

      /* gaveta / tampa */
      const abre = sagaEase.inOut(sagaSeg(p, 0.3, 0.4));
      const fechaB = sagaEase.inOut(sagaSeg(p, 0.66, 0.72));
      const fechaT = sagaEase.inOut(sagaSeg(p, 0.67, 0.72));
      if (E.bandeja && I.bandeja) {
        const out = abre * (1 - fechaB);
        E.bandeja.style.transform = `translate3d(0,${px((out - 1) * I.bandeja.prof)},0)`;
      }
      if (E.bandejaDisco) E.bandejaDisco.style.opacity = p >= 0.66 ? 1 : 0;
      if (E.tampa && I.tampa) {
        const out = abre * (1 - fechaT);
        const sy = sagaLerp(1, -1.75, out);
        E.tampa.style.transform = `${sobeAp} scale(1,${sy.toFixed(3)})`;
        E.tampa.style.opacity = d;
        E.tampa.setAttribute("data-aberta", sy < 0 ? "1" : "0");
        if (E.poco) E.poco.style.opacity = sagaSeg(out, 0, 0.35);
      }

      /* mídia */
      const M = E.midia;
      if (M) {
        const bx0 = ap.caixa.x, by0 = ap.caixa.y;
        let x = bx0, y = by0, s = 1, rot = 0, spin = 0, op = 1;
        let mat = null;
        const ri = sagaEase.out(sagaSeg(p, 0.34, 0.44));
        const y0 = by0 - 84;
        if (p < 0.44) {
          y = sagaLerp(by0, y0, ri); s = 1 + 0.12 * ri; spin = ri * 120;
          rot = ehCart ? -dir * 10 * ri : 0;
        } else {
          const f = sagaEase.inOut(sagaSeg(p, 0.44, 0.62));
          const c0 = I.c0;
          const cxp = (bx0 + c0[0]) / 2, cyp = Math.min(y0, c0[1]) - 150;
          const u1 = 1 - f;
          x = u1 * u1 * bx0 + 2 * u1 * f * cxp + f * f * c0[0];
          y = u1 * u1 * y0 + 2 * u1 * f * cyp + f * f * c0[1];
          s = sagaLerp(1.12, 1, f) * (1 + 0.16 * Math.sin(f * Math.PI));
          spin = 120 + f * 900;
          rot = ehCart ? -dir * 10 * (1 - f) + dir * Math.sin(f * Math.PI) * 24 : 0;
          const cs = Math.cos(rot * Math.PI / 180) * s, sn = Math.sin(rot * Math.PI / 180) * s;
          const M0 = [cs, sn, -sn, cs];
          const mm = ent === "fendaZ" ? sagaEase.inOut(sagaSeg(p, 0.6, 0.665)) : sagaEase.inOut(sagaSeg(f, 0.5, 1));
          mat = M0.map((v, i) => sagaLerp(v, I.M[i], mm));
          /* encaixe */
          const n = sagaEase.inOut(sagaSeg(p, 0.62, I.fim));
          if (p > 0.62) {
            x = sagaLerp(I.c0[0], I.c1[0], n); y = sagaLerp(I.c0[1], I.c1[1], n);
            spin += sagaEase.out(sagaSeg(p, 0.62, I.fim)) * 160;
          }
          if (ent === "fendaZ") {
            const n2 = sagaEase.inQuad(sagaSeg(p, 0.655, 0.7));
            mat = mat.map((v) => v * (1 - 0.14 * n2));
            op = 1 - n2;
          }
          if (ent === "bandeja" && p >= 0.66) op = 0;
          if (ent === "tampa" && p >= 0.72) op = 0;
          if (ent === "fenda" && I.some && p >= 0.7) op = 0;
        }
        const visivel = p >= 0.34 && op > 0.001;
        M.style.opacity = visivel ? op : 0;
        M.style.visibility = visivel ? "visible" : "hidden";
        if (visivel) {
          const m = mat || [Math.cos(rot * Math.PI / 180) * s, Math.sin(rot * Math.PI / 180) * s, -Math.sin(rot * Math.PI / 180) * s, Math.cos(rot * Math.PI / 180) * s];
          M.style.transform = `translate3d(${px(x)},${px(y)},0) translate(-50%,-50%) matrix(${m.map((v) => v.toFixed(5)).join(",")},0,0)`;
          if (rotor) rotor.style.transform = `rotate(${spin.toFixed(1)}deg)`;
        }
        if (E.midiaClip) E.midiaClip.style.clipPath = I.clip && p >= 0.6 ? I.clip : "";
        if (E.replica) E.replica.style.opacity = p < 0.34 ? 1 : 0;
        M.setAttribute("data-voando", p > 0.34 && p < 0.6 ? "1" : "0");
      }

      /* pulso de encaixe */
      if (E.pulso) {
        const q = sagaSeg(p, ent === "bandeja" ? 0.69 : 0.64, ent === "bandeja" ? 0.79 : 0.76);
        const vis = q > 0 && q < 1;
        E.pulso.style.opacity = vis ? Math.sin(q * Math.PI) * 0.9 : 0;
        if (vis) E.pulso.style.transform = `translate(-50%,-50%) rotate(${I.pulso.rot.toFixed(2)}deg) scale(${(0.35 + q * 1.1).toFixed(3)})`;
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
      let cop = 1;
      if (E.tela) {
        E.tela.style.opacity = ligada ? 1 : 0;
        E.tela.style.visibility = ligada ? "visible" : "hidden";
        if (ligada) {
          /* o quadrilátero da foto vira o retângulo da tela cheia durante o zoom */
          const zq = sagaEase.inOut(sagaSeg(z, 0, 0.7));
          const D = geo.q.map((qp, i) => {
            const m = sagaMix(qp, geo.caixaB[i], zq);
            return [Sx + esc * (m[0] * k - G.Lx), Sy + esc * (m[1] * k - G.Ly)];
          });
          E.tela.style.transform = sagaHomog(G.tw * G.Z, G.th * G.Z, D);
          let csx = 1, csy = 1, flash = 0, cs = 1;
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
      if (E.tela2) E.tela2.style.opacity = ligada ? cop * sagaSeg(tp, 0.1, 0.6) : 0;
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
  }, [apKey, midiaKey, cap.tema]);

  /* ---- posições em % da cena ---- */
  const pos = (x, y, w, h) => ({ left: x / 10 + "%", top: y / 6 + "%", width: w / 10 + "%", height: h / 6 + "%" });
  const tvBrilho = pos(t.x + t.w / 2 - t.w * 1.6, t.y + t.h / 2 - t.h * 1.9, t.w * 3.2, t.h * 3.8);
  const tvParaSala = sala === "hd" && !ap.mesa ? t : null;
  const bnd = I.bandeja, tmp = I.tampa;
  const arteImg = (cls) => img ? <img className={cls} src={img} alt="" decoding="async" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /> : null;

  return (
    <div className="sgc-wrap" data-sgc-aparelho={apKey} data-sgc-sala={sala} ref={r("wrap")}>
      <h2 className="sgc-sr">{titulo} — {cap.plataforma}, {cap.ano}</h2>
      <div className="sgc-palco" ref={r("palco")} aria-hidden="true">
        <div className="sgc-cena" ref={r("cena")}>
          <svg className="sgc-svg sgc-fundo" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" focusable="false">
            <SagaDefs P={P} />
            {sala === "90s" ? <SagaSala90 P={P} /> : sala === "hd" ? <SagaSalaHd P={P} tv={tvParaSala} /> : <SagaSala00 P={P} />}
          </svg>
          <svg className="sgc-svg sgc-moveis" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" focusable="false">
            <SagaMovel P={P} movel={ap.movel} />
          </svg>
          <div className="sgc-aparelho" ref={r("aparelho")}>
            <SagaFotos geo={geo} />
            {tmp && <span className="sgc-poco" ref={r("poco")} style={pos(tmp.x, tmp.y, tmp.w, tmp.h)} />}
            {bnd && (
              <div className="sgc-bandeja-clip" style={pos(bnd.x, bnd.y, bnd.w, bnd.prof + bnd.placa)}>
                <div className="sgc-bandeja" data-cor={bnd.cor} ref={r("bandeja")} style={{ "--sgc-prof": bnd.prof / (bnd.prof + bnd.placa) * 100 + "%", "--rx": (bnd.s * 50 / bnd.w * 100 * 1.1).toFixed(1) + "%", "--ry": (bnd.s * bnd.sy * 50 / bnd.prof * 100 * 1.18).toFixed(1) + "%" }}>
                  <div className="sgc-bandeja-topo" />
                  <div className="sgc-bandeja-placa" style={sagaRecorte(geo.pecas[bnd.foto], bnd.x, bnd.y)} />
                  <div className="sgc-bandeja-disco" ref={r("bandejaDisco")} style={{ transform: `translate(-50%,-50%) scale(${bnd.s.toFixed(3)},${(bnd.s * bnd.sy).toFixed(3)})` }}>
                    <SagaMidiaArte midia={midiaKey} base={base} img={img} titulo={tt.m} plat={platMidia} uid={P + "anel1"} real={realMidia} />
                  </div>
                </div>
              </div>
            )}
            {geo.q2 && (
              <div className="sgc-tela2" ref={r("tela2")}>
                {arteImg("")}
                <span className="sgc-tela2-faixa">{tt.m}</span>
              </div>
            )}
            <div className="sgc-leds" ref={r("leds")}>
              {geo.leds.map((l, i) => (
                <span key={i} className="sgc-led" data-forma={l.forma} data-cor={l.cor || ""} style={{ left: l.x / 10 + "%", top: l.y / 6 + "%", width: l.w / 10 + "em", height: l.h / 10 + "em", transform: `translate(-50%,-50%) rotate(${l.rot.toFixed(2)}deg)` }} />
              ))}
            </div>
            {geo.led2 && <span className="sgc-led sgc-led2" ref={r("led2")} style={{ left: geo.led2[0] / 10 + "%", top: geo.led2[1] / 6 + "%" }} />}
          </div>
          <div className="sgc-luz" />

          <div className="sgc-caixa" ref={r("caixa")} data-estilo={caixa.estilo} data-real={real ? "1" : undefined} style={{ "--w": caixa.w / 10 + "em", "--h": caixa.h / 10 + "em", "--d": caixa.d / 10 + "em" }}>
            <div className="sgc-caixa-corpo" ref={r("caixaCorpo")}>
              <div className="sgc-caixa-fundo">
                <div className="sgc-caixa-midia" ref={r("replica")}>
                  <SagaMidiaArte midia={midiaKey} base={base} img={img} titulo={tt.m} plat={platMidia} uid={P + "anel2"} real={realMidia} />
                </div>
              </div>
              {real ? (
                /* lombada: scan original; sem scan, a borda da própria capa impressa */
                <div className="sgc-caixa-lado sgc-caixa-lombada" data-scan={real.lombada ? "1" : "0"}
                  style={{ backgroundImage: `url(${real.lombada ? sagaMidiaSrc(cap.tema, "lombada") : realCaixa})` }} />
              ) : (
                <div className="sgc-caixa-lado sgc-caixa-lombada"><em>{platMidia.split(" · ")[0]}</em><span>{titulo}</span><b>R</b></div>
              )}
              <div className="sgc-caixa-lado sgc-caixa-dir" />
              <div className="sgc-caixa-topo" />
              <div className="sgc-caixa-base" />
              <div className="sgc-caixa-capa" ref={r("capa")}>
                {real ? (
                  <div className="sgc-capa-frente" data-real="1">
                    {real.ps5 && <span className="sgc-capa-ps5">PS5</span>}
                    <img className="sgc-capa-scan" src={realCaixa} alt="" decoding="async" loading="lazy" draggable="false" />
                  </div>
                ) : (
                  <div className="sgc-capa-frente">{arteImg("")}<span className="sgc-capa-selo">{cap.plataforma}</span></div>
                )}
                {real ? <div className="sgc-capa-verso" data-real="1" /> : <div className="sgc-capa-verso"><b>{tt.m}</b><i /><i /><i /><i /><i /></div>}
              </div>
            </div>
          </div>

          <div className="sgc-midia-clip" ref={r("midiaClip")}>
            <div className="sgc-midia" ref={r("midia")} data-tipo={midia.tipo} style={{ width: midia.w / 10 + "em", height: midia.h / 10 + "em" }}>
              <SagaMidiaArte midia={midiaKey} base={base} img={img} titulo={tt.m} plat={platMidia} uid={P + "anel3"} real={realMidia} />
            </div>
          </div>

          {tmp && (
            <div className="sgc-tampa" ref={r("tampa")} style={pos(tmp.x, tmp.y, tmp.w, tmp.h)}>
              <div className="sgc-tampa-cima" style={sagaRecorte(geo.pecas[tmp.foto], tmp.x, tmp.y)} /><div className="sgc-tampa-baixo" />
            </div>
          )}
          <span className="sgc-pulso" ref={r("pulso")} style={{ left: I.pulso.x / 10 + "%", top: I.pulso.y / 6 + "%", "--sx": I.pulso.sx, "--sy": I.pulso.sy }} />
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
