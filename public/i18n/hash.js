/* Hash de texto -> chave de tradução ("c" + hash). Implementação IDÊNTICA à
 * i18nHash() de i18n.jsx (runtime). Node e navegador precisam gerar a mesma
 * chave para o mesmo texto pt-BR — nunca altere um sem o outro.
 * Compartilhado por: babel-plugin-autotext.js, extract-content.js, translate.js. */
"use strict";

function hash(str) {
  var h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (var i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507); h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507); h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

/* Chave de catálogo para um texto pt-BR (sempre sobre o texto trim()ado). */
function keyFor(text) { return "c" + hash(text.trim()); }

/* Texto "traduzível"? Filtra ids, URLs, cores, números, tokens técnicos —
 * tudo que não deve virar chave nem ser mandado ao tradutor. Mesma regra no
 * plugin Babel (JSX) e no extrator de dados, para os dois ficarem em sincronia. */
function isTranslatable(s) {
  if (typeof s !== "string") return false;
  const t = s.trim();
  if (t.length < 2) return false;
  if (!/\p{L}/u.test(t)) return false;                       // precisa ter letra
  if (/^https?:\/\//i.test(t) || /^(mailto|tel):/i.test(t)) return false;
  if (/\.(png|jpe?g|webp|svg|gif|mp4|webm|json|js|css)$/i.test(t)) return false;
  if (/^#[0-9a-f]{3,8}$/i.test(t)) return false;              // cor
  if (/^var\(--/.test(t) || /^--[\w-]+$/.test(t)) return false; // CSS var
  /* Identificador técnico (all, gta-sa, story_mode) — MAS uma palavra única só
   * de letras com 4+ caracteres é texto de verdade ("gangues", "veículos"). */
  if (/^[a-z0-9_.:/#-]+$/.test(t) && !/^[a-zà-ÿ]{4,}$/u.test(t)) return false;
  if (/^[A-Z0-9]{1,5}$/.test(t)) return false;                // sigla curta (HD, PS5, DLC)
  if (/^[\d.,:/\-\s%+]+$/.test(t)) return false;              // número/data
  return true;
}

module.exports = { hash, keyFor, isTranslatable };
