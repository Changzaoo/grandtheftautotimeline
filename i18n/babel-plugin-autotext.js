/* Plugin Babel: envolve AUTOMATICAMENTE todo texto visível do JSX em
 * window.__T("c<hash>", "texto pt-BR"), sem precisar editar as seções à mão.
 *
 * Cobre:
 *   - texto literal entre tags:        <b>Ordem de lançamento</b>
 *   - strings em expressões filhas:    {cond ? "Aberto" : "Fechado"}  {"Total"}
 *   - template literals:               {`${n} arquivos filtrados`} -> __TF(key, "{0} arquivos filtrados", [n])
 *   - atributos de texto (allowlist):  title="Jogos da saga"  placeholder="Nome..."  aria-label="..."
 *
 * A chave é "c"+hash(texto) — a MESMA usada para o conteúdo dos dados, então um
 * texto igual no JSX e nos dados compartilha uma única tradução.
 *
 * Opções: { collect: Map } — se fornecido, cada texto encontrado é gravado em
 * collect.set(chave, texto) (usado por extract-content.js para montar o
 * _content.json). Sem `collect`, só transforma (usado por build.js).
 */
"use strict";
const { keyFor, isTranslatable } = require("./hash");

/* Atributos cujo valor string é texto visível/falado (não código). */
const TEXT_ATTRS = new Set([
  "title", "subtitle", "eyebrow", "right", "sub", "label", "placeholder", "aria-label",
  "aria-description", "alt", "hint", "caption", "note", "desc", "description", "kicker",
  "tagline", "text", "heading", "headline", "lead", "body", "summary", "cta", "badge",
  "empty", "emptyText", "tape", "seal", "prefix", "suffix", "tooltip", "message", "quote"
]);

/* Mesma limpeza de whitespace que o JSX faz com texto entre tags. */
function cleanJsxText(raw) {
  const lines = raw.split(/\r\n|\n|\r/);
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    if (i !== 0) line = line.replace(/^[ \t]+/, "");
    if (i !== lines.length - 1) line = line.replace(/[ \t]+$/, "");
    if (line) out.push(line);
  }
  return out.join(" ");
}

module.exports = function autotext(babel, opts) {
  const t = babel.types;
  const collect = opts && opts.collect instanceof Map ? opts.collect : null;
  const MARK = "__i18nAuto";

  const record = (text) => { if (collect) collect.set(keyFor(text), text.trim()); };
  const helper = (name) => t.memberExpression(t.identifier("window"), t.identifier(name));

  function callT(text) {
    record(text);
    const call = t.callExpression(helper("__T"), [t.stringLiteral(keyFor(text)), t.stringLiteral(text)]);
    call[MARK] = true;
    return call;
  }
  function callTF(pattern, exprs) {
    record(pattern);
    const call = t.callExpression(helper("__TF"), [
      t.stringLiteral(keyFor(pattern)), t.stringLiteral(pattern), t.arrayExpression(exprs)
    ]);
    call[MARK] = true;
    return call;
  }
  const isOurCall = (n) => n && n[MARK];
  const isI18nCall = (n) =>
    t.isCallExpression(n) && (
      isOurCall(n) ||
      (t.isMemberExpression(n.callee) && /^__(T|TT|TF|t|tt)$/.test(n.callee.property && n.callee.property.name)) ||
      (t.isIdentifier(n.callee) && /^__(T|TT|TF|t|tt)$/.test(n.callee.name))
    );

  /* Devolve um nó substituto (ou null se nada a traduzir). Muta ramos de
   * condicionais/lógicos no lugar. */
  function wrapExpr(node) {
    if (!node || isI18nCall(node)) return null;
    if (t.isStringLiteral(node)) {
      return isTranslatable(node.value) ? callT(node.value) : null;
    }
    if (t.isTemplateLiteral(node)) {
      const exprs = node.expressions;
      const pattern = node.quasis.map((q, i) => q.value.cooked + (i < exprs.length ? "{" + i + "}" : "")).join("");
      const textOnly = pattern.replace(/\{\d+\}/g, " ");
      if (!isTranslatable(textOnly)) return null;
      /* Só vale a pena se houver ao menos uma palavra fora dos placeholders. */
      if (!/\p{L}{2,}/u.test(textOnly)) return null;
      return callTF(pattern, exprs);
    }
    if (t.isConditionalExpression(node)) {
      const c = wrapExpr(node.consequent), a = wrapExpr(node.alternate);
      if (c) node.consequent = c;
      if (a) node.alternate = a;
      return (c || a) ? node : null;
    }
    if (t.isLogicalExpression(node)) {
      const r = wrapExpr(node.right);
      if (r) node.right = r;
      return r ? node : null;
    }
    if (t.isParenthesizedExpression(node)) {
      const inner = wrapExpr(node.expression);
      if (inner) node.expression = inner;
      return inner ? node : null;
    }
    return null;
  }

  return {
    name: "i18n-autotext",
    visitor: {
      JSXText(path) {
        const raw = path.node.value;
        const cleaned = cleanJsxText(raw);
        const core = cleaned.trim();
        if (!core || !isTranslatable(core)) return;
        const nodes = [];
        if (/^\s/.test(cleaned)) nodes.push(t.jsxText(" "));
        const container = t.jsxExpressionContainer(callT(core));
        container[MARK] = true;
        nodes.push(container);
        if (/\s$/.test(cleaned)) nodes.push(t.jsxText(" "));
        path.replaceWithMultiple(nodes);
      },

      JSXExpressionContainer(path) {
        if (path.node[MARK]) return;
        const parent = path.parent;
        const isChild = t.isJSXElement(parent) || t.isJSXFragment(parent);
        const isTextAttr = t.isJSXAttribute(parent) && t.isJSXIdentifier(parent.name) && TEXT_ATTRS.has(parent.name.name);
        if (!isChild && !isTextAttr) return;
        const replaced = wrapExpr(path.node.expression);
        if (replaced) { path.node.expression = replaced; path.node[MARK] = true; }
      },

      JSXAttribute(path) {
        const name = path.node.name;
        if (!t.isJSXIdentifier(name) || !TEXT_ATTRS.has(name.name)) return;
        const v = path.node.value;
        if (!t.isStringLiteral(v) || !isTranslatable(v.value)) return;
        const container = t.jsxExpressionContainer(callT(v.value));
        container[MARK] = true;
        path.node.value = container;
      }
    }
  };
};

module.exports.TEXT_ATTRS = TEXT_ATTRS;
module.exports.cleanJsxText = cleanJsxText;
