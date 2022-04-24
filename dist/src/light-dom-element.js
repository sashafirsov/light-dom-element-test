import { CssChain as $ } from "css-chain";
import ShadowDomElement from "shadow-dom-element/shadow-dom-element.js";
export default class LightDomElement extends ShadowDomElement {
    applyTemplate(t) { $(this).template(t); return this; }
    attachShadow() { }
    ;
}
((ce, tag) => ce.get(tag) || ce.define(tag, LightDomElement))(window.customElements, 'light-dom-element');
window.customElements.get('light-dom-element') || window.customElements.define('light-dom-element', LightDomElement);
//# sourceMappingURL=light-dom-element.js.map