// node_modules/css-chain/ApiChain.js
var OBJ_prototype = Object.getPrototypeOf({});
var setProp = (refObj, k, ApiChainLocal) => {
  if (typeof refObj[k] == "function") {
    ApiChainLocal.prototype[k] = function(...args) {
      if (k.startsWith("get")) {
        if (this.length)
          return this[0][k](...args);
        else
          return;
      }
      this.forEach((el) => el[k](...args));
      return this;
    };
  } else {
    Object.defineProperty(ApiChainLocal.prototype, k, {
      get: function() {
        if (this.length)
          return this[0][k];
      },
      set: function(v) {
        this.forEach((el) => el[k] = v);
        return v;
      }
    });
  }
};

// node_modules/css-chain/CssChain.js
var map = (arr, ...args) => Array.prototype.map.apply(arr, args);
var csv = (arr, ...args) => map(arr, ...args).join(",");
var collectionText = (arr) => map(arr, (e) => getNodeText(e)).join("");
var createEl = (tag) => document.createElement(tag);
function nodeProp(tag, prop, val) {
  const el = createEl(tag);
  el[prop] = val;
  return el;
}
function isNode(n) {
  return !!n?.nodeType;
}
var nop = () => "";
var isArr = (a) => Array.isArray(a) || a && typeof a.forEach === "function";
var isT = (a, t) => typeof a === t;
var isStr = (a) => isT(a, "string");
var isNum = (a) => isT(a, "number");
var isFn = (a) => isT(a, "function");
var inWC = (n) => n.getRootNode().host;
var hasAssigned = (n) => inWC(n) && n.assignedNodes;
var each = (arr, cb) => (arr.forEach(cb), arr);
var clear = (n) => hasAssigned(n) ? n.assignedNodes().forEach((a) => a.remove()) : n.innerHTML = "";
var node2text = {
  1: (n) => n.assignedNodes ? collectionText(n.assignedNodes()) || collectionText(n.childNodes) : [
    "SCRIPT",
    "AUDIO",
    "STYLE",
    "CANVAS",
    "DATALIST",
    "EMBED",
    "OBJECT",
    "PICTURE",
    "IFRAME",
    "METER",
    "NOSCRIPT",
    "SELECT",
    "OPTGROUP",
    "PROGRESS",
    "TEMPLATE",
    "VIDEO"
  ].includes(n.nodeName) ? "" : n.innerText,
  3: (n) => n.nodeValue,
  11: (n) => collectionText(n.childNodes)
};
var getNodeText = (n) => (node2text[n.nodeType] || nop)(n);
var setNodeText = (n, val) => hasAssigned(n) ? n.assignedElements().forEach((e) => e.innerText = val) : n.innerText = val;
var assignParent = (arr, n) => arr.map((e) => n.appendChild(e));
var collectionHtml = (arr) => map(arr, (n) => n.assignedElements ? map(n.assignedElements(), (e) => e.outerHTML).join("") : n.innerHTML).join("");
var html2NodeArr = (html) => {
  let n = createEl("div");
  if (isNode(html))
    n.append(html.cloneNode(true));
  else if (isArr(html))
    each(html, (e) => each(html2NodeArr(e), (i) => n.appendChild(i)));
  else
    n.innerHTML = html;
  const wrapIfText = (e) => {
    if (e.nodeType !== 3)
      return e;
    const n2 = createEl("span");
    n2.append(e);
    return n2;
  };
  return [...n.childNodes].map((e) => (e.remove(), e)).map(wrapIfText);
};
var addNodeHtml = (n, val) => {
  const set = (to, v) => v instanceof Node ? v.remove() || to.append(v) : html2NodeArr(v).forEach((e) => to.append(e)), append = (v) => hasAssigned(n) ? n.assign(...n.assignedNodes(), ...assignParent(each(html2NodeArr(v), (e) => e.slot = n.name), n.getRootNode().host)) : set(n, v);
  val instanceof NodeList || isArr(val) ? [...val].forEach(append) : append(val);
};
var setNodeHtml = (n, val) => {
  clear(n);
  addNodeHtml(n, val);
};
function assignedNodesLight(f) {
  if (f?.flatten) {
    const r = [];
    const flatten = (n) => n.CssChainAssignedNodes ? each(n.CssChainAssignedNodes, flatten) : r.push(n);
    each(this.CssChainAssignedNodes, flatten);
    return r;
  }
  return this.CssChainAssignedNodes;
}
var CssChainT = class extends Array {
  attr(...args) {
    return args.length > 1 ? ((args[2] ? this.$(args[2]) : this).setAttribute(...args), this) : this.getAttribute(...args);
  }
  prop(...args) {
    return args.length > 1 ? ((args[2] ? this.$(args[2]) : this).forEach((el) => el[args[0]] = args[1]), this) : this[0][args[0]];
  }
  forEach(...args) {
    Array.prototype.forEach.apply(this, args);
    return this;
  }
  map(...args) {
    return map(this, ...args);
  }
  push(...args) {
    Array.prototype.push.apply(this, args);
    return this;
  }
  querySelector(css) {
    return new CssChainT().push(this.querySelectorAll(css)[0]);
  }
  querySelectorAll(css) {
    return this.reduce(($, el) => $.push(...(el.shadowRoot || el).querySelectorAll(css)), new CssChainT());
  }
  $(...args) {
    return args.length ? this.querySelectorAll(...args) : this;
  }
  parent(css) {
    const s = /* @__PURE__ */ new Set(), add = (n) => s.has(n) ? 0 : (s.add(n), n), parentLoop = (n) => {
      while (n = n.parentElement)
        if (n.matches(css))
          return add(n);
    };
    return CssChain(this.map(css ? parentLoop : (n) => add(n.parentElement)).filter((n) => n));
  }
  on(...args) {
    return this.addEventListener(...args);
  }
  append(val) {
    return this.forEach((n) => addNodeHtml(n, val));
  }
  remove(...args) {
    if (!args.length) {
      this.forEach((el) => el.remove());
      return new CssChainT();
    }
    return isFn(args[1]) ? this.removeEventListener(...args) : this.map((el) => el.matches(args[0])).filter((el) => el);
  }
  erase() {
    return this.forEach((n) => clear(n));
  }
  slots(...arr) {
    const selector = arr.length ? csv(arr[0].split(","), (n) => ['""', "''"].includes(n) || !n ? `slot:not([name])` : `slot[name="${n}"]`) : "slot";
    const ss = this.filter((el) => el.matches && el.matches(selector));
    const ret = this.filter((n) => !ss.includes(n) && n.querySelector).map((n) => n.shadowRoot || n).$(arr.length ? csv(arr[0].split(","), (n) => ['""', "''"].includes(n) || !n ? `slot:not([name])` : `slot[name="${n}"]`) : "slot");
    if (arr.length === 2) {
      ret.html(arr[1]);
      return this;
    }
    return CssChain([...ss, ...ret]);
  }
  template(n) {
    if (n === void 0) {
      const $s = this.$("[slot]").forEach((n2) => this.$(n2.slot ? `slot[name="${n2.slot}"]` : "slot:not([name])").length || n2.parentNode.insertBefore(nodeProp("slot", "name", n2.slot), n2));
      $s.remove();
      n = createEl("template");
      this.childNodes.forEach((c2) => n.content.append(c2));
      this.append($s);
    } else if (isStr(n)) {
      n = this.$(n);
      n.remove();
    }
    n = n.cloneNode(true);
    const content = n.content ? n.content.childNodes : n;
    const c = CssChain(content);
    c.slots().forEach((s) => {
      const v = this.children.filter((n2) => n2.slot === s.name);
      const p = s.parentNode;
      s.CssChainAssignedNodes = [];
      s.assignedNodes = s.assignedElements = assignedNodesLight;
      const insert = (n2, r) => {
        const k = p.insertBefore(n2, r);
        n2.CssChainAssignedSlot || s.CssChainAssignedNodes.push(n2);
        n2.CssChainAssignedSlot = s;
        return k;
      };
      each(v, (e) => e.cssChainSlot = s);
      const injectInSlot = (e, s2) => {
        if (e.tagName === "SLOT") {
          const q = e.parentNode;
          const r = insert(e, s2);
          each(q.querySelectorAll(`[slot="${e.name}"]`), (n2) => p.insertBefore(n2, r));
        } else
          insert(e, s2);
      };
      each(v, (e) => injectInSlot(e, s));
      if (v.length)
        s.hidden = true;
    });
    this.children.filter((e) => !e.cssChainSlot).remove();
    this.append(CssChain(html2NodeArr("<light-dom></light-dom>")).append(content));
    return this;
  }
  get innerText() {
    return this.txt();
  }
  set innerText(val) {
    return this.txt(val);
  }
  txt(val, css = void 0) {
    const arr = css ? this.$(css) : this;
    if (val === void 0)
      return collectionText(arr);
    arr.forEach(isFn(val) ? (n, i) => setNodeText(n, val(n, i, arr)) : (n) => setNodeText(n, val));
    return this;
  }
  get outerHTML() {
    return this.map((e) => e.outerHTML).join("");
  }
  set outerHTML(val) {
    return this.forEach((n, i, arr) => {
      const p = n.parentNode;
      html2NodeArr(isFn(val) ? val(n, i, arr) : val).forEach((e) => p.insertBefore(arr[i] = e, n));
      n.remove();
    });
  }
  get innerHTML() {
    return this.html();
  }
  set innerHTML(val) {
    return this.html(val);
  }
  html(val, css = void 0) {
    const arr = css ? this.$(css) : this;
    if (val === void 0)
      return collectionHtml(arr);
    arr.forEach(isFn(val) ? (n, i) => setNodeHtml(n, val(n, i, arr)) : (n) => setNodeHtml(n, val));
    return this;
  }
  assignedElements(opts) {
    return CssChain([].concat(...this.map((el) => el.assignedElements ? el.assignedElements(opts) : [])));
  }
  assignedNodes(f) {
    return CssChain([].concat(...this.map((el) => el.assignedNodes ? el.assignedNodes(f) : [])));
  }
  cloneNode(...args) {
    return this.map((el) => el.cloneNode && el.cloneNode(...args));
  }
  clone(count = 1, cb = void 0) {
    let arr = count;
    if (isNum(count))
      arr = Array.from({ length: count }, (v, i) => i);
    if (isArr(arr)) {
      const ret = [];
      this.forEach((n) => arr.forEach((d, i) => {
        const m = n.ownerDocument.importNode(n, true), x = cb && cb(m, d, i, arr);
        isStr(x) ? ret.push(...html2NodeArr(x)) : isArr(x) ? ret.push(...x) : ret.push(isNode(x) ? x : m);
      }));
      return CssChain(ret);
    }
    const doc = count;
    return this.map((el) => doc ? doc.importNode(el, true) : el.cloneNode ? el.cloneNode(true) : Object.assign({}, el));
  }
  get firstElementChild() {
    return CssChain(this.map((n) => n.firstElementChild).filter((n) => n));
  }
  get firstChild() {
    return CssChain(this.map((n) => n.firstChild).filter((n) => n));
  }
  get childNodes() {
    return CssChain([].concat(...map(this, (el) => [...el.childNodes || []])));
  }
  get children() {
    return CssChain([].concat(...map(this, (el) => [...el.children || []])));
  }
};
var appliedTypes = /* @__PURE__ */ new Set();
var OBJ_prototype2 = Object.getPrototypeOf({});
function applyPrototype(nodeOrTag, ApiChain) {
  const node = isStr(nodeOrTag) ? createEl(nodeOrTag) : nodeOrTag;
  if (appliedTypes.has(node.tagName))
    return;
  appliedTypes.add(node.tagName);
  for (let k in node)
    if (!(k in ApiChain.prototype))
      setProp(node, k, ApiChain);
  for (let proto; (proto = Object.getPrototypeOf(node)) !== OBJ_prototype2 && proto != null && !appliedTypes.has(proto); ) {
    appliedTypes.add(proto);
    for (let k of Object.getOwnPropertyNames(proto))
      if (!(k in ApiChain.prototype))
        setProp(node, k, ApiChain);
  }
}
Object.getOwnPropertyNames(window).filter((key) => key.startsWith("HTML") && key.endsWith("Element") && key.length > 11).map((key) => key.substring(4, key.length - 7).toLowerCase()).forEach((tag) => applyPrototype(createEl(tag), CssChainT));
function CssChain(css, el = document, protoArr = []) {
  const arr = typeof css === "string" ? (el.shadowRoot || el).querySelectorAll(css) : isArr(css) ? css : [css ? css.shadowRoot || css : document];
  if (isArr(protoArr)) {
    if (!protoArr.length)
      protoArr = [...arr].slice(0, 256);
  } else
    protoArr = [protoArr];
  protoArr.forEach((el2) => applyPrototype(el2, CssChainT));
  const ret = new CssChainT();
  ret.push(...arr);
  return ret;
}

// node_modules/shadow-dom-element/shadow-dom-element.js
var attr = (el, name) => el.getAttribute(name);
var ShadowDomElement = class extends HTMLElement {
  promise;
  constructor() {
    super();
    this.promise = this.slotsInit();
  }
  async fetch(url) {
    return (await fetch(url)).text();
  }
  applyTemplate(t) {
    const s = this.shadowRoot;
    s.appendChild(t.content.cloneNode(true));
    s.querySelectorAll("slot[attribute]").forEach((a) => {
      let f = attr(a, "for"), s2 = f ? a.getRootNode().querySelector("#" + f) : a.parentElement;
      s2.setAttribute(attr(a, "attribute"), a.assignedElements().map((l) => attr(l, "href") || attr(l, "src") || l.innerText).join(""));
    });
    return this;
  }
  async slotsInit() {
    const getText = async (url) => this.fetch(url);
    const onAttr = async (att, cb) => {
      await (async (a) => a ? cb(a) : 0)(attr(this, att));
    };
    const embeddedTemplates = [...this.getElementsByTagName("template")];
    await onAttr("srcset", (id) => this.innerHTML = `${document.getElementById(id)?.innerHTML}`);
    await onAttr("src", async (url) => this.innerHTML = await getText(url));
    this.attachShadow({ mode: "open" });
    const applyTemplate = (t) => this.applyTemplate(t);
    embeddedTemplates.forEach(applyTemplate);
    await onAttr("for", (id) => applyTemplate(document.getElementById(id)));
    await onAttr("code", async (url) => {
      const d = document.createElement("div");
      d.innerHTML = await getText(url);
      const t = document.createElement("template");
      d.childNodes.forEach((n) => t.content.append(n));
      applyTemplate(t);
    });
    return this;
  }
};
window.customElements.define("shadow-dom-element", ShadowDomElement);

// src/light-dom-element.js
var attr2 = (el, name) => el.getAttribute(name);
var LightDomElement = class extends ShadowDomElement {
  applyTemplate(t) {
    CssChain(this).template(t);
    const s = this;
    s.querySelectorAll("slot[attribute]").forEach((a) => {
      let f = attr2(a, "for"), s2 = f ? a.getRootNode().querySelector("#" + f) : a.parentElement;
      s2.setAttribute(attr2(a, "attribute"), a.assignedElements().map((l) => attr2(l, "href") || attr2(l, "src") || l.innerText).join(""));
    });
    return this;
  }
  attachShadow() {
  }
};
window.customElements.define("light-dom-element", LightDomElement);
export {
  LightDomElement as default
};
