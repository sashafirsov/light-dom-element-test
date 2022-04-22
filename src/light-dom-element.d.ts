/// <reference lib="dom" />
import ShadowDomElement from './shadow-dom-element.js';

export default class LightDomElement extends ShadowDomElement {
    /**
     * Applies template content and renders slots
     * @param templateElement
     * @returns this
     */
    applyTemplate(templateElement: HTMLTemplateElement): this;

    /**
     * Overrides HTMLElement {attachShadow} method to prevent shadow creation.
     * called from constructor before `slotsInit()`
     * @param  init Information about ShadowRoot.
     * @returns ShadowRoot
     */
    attachShadow(init: ShadowRootInit): ShadowRoot; // eslint-disable-line no-undef
}
