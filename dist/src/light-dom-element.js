import { CssChain as $ } from "css-chain";
import ShadowDomElement from "shadow-dom-element/shadow-dom-element.js";
export default class LightDomElement extends ShadowDomElement {
    applyTemplate(t) { $(this).template(t); return this; }
    attachShadow() { }
    ;
}
window.customElements.define('light-dom-element', LightDomElement);
//# sourceMappingURL=light-dom-element.js.map