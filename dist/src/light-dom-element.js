// ts-nocheck
import { CssChain as $ } from "css-chain";
import ShadowDomElement from "./ShadowDomElement.js";
export default class LightDomElement extends ShadowDomElement {
    applyTemplate(t) { $(this).template(t); return this; }
    // eslint-disable-next-line class-methods-use-this
    attachShadow() { }
    ;
}
window.customElements.define('light-dom-element', LightDomElement);
//# sourceMappingURL=light-dom-element.js.map