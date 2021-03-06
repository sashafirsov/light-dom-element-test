// src/shadow-dom-element.js
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
    this.postTemplateCallback(s);
    return this;
  }
  postTemplateCallback(s) {
    s.querySelectorAll("slot[attribute]").forEach((a) => {
      let f = attr(a, "for"), s2 = f ? a.getRootNode().querySelector("#" + f) : a.parentElement;
      s2.setAttribute(attr(a, "attribute"), a.assignedElements().map((l) => attr(l, "href") || attr(l, "src") || l.innerText).join(""));
    });
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
export {
  ShadowDomElement as default
};
