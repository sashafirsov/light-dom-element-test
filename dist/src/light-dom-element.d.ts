/// <reference lib="dom" />
import ShadowDomElement from "shadow-dom-element/shadow-dom-element";

/**
 * Web Component to populate html slots into template using Light DOM.
 * Slots content and template could be local in the page or pointed via URL.
 */
export default class LightDomElement extends ShadowDomElement {
    /**
     * resolved when template and slots payload is rendered
     */
    promise: Promise<LightDomElement>;

    /**
     * Overrides HTMLElement {attachShadow} method to prevent shadow creation.
     * called from constructor before `slotsInit()`
     * @param  init Information about ShadowRoot.
     * @returns ShadowRoot
     */
    attachShadow(init: ShadowRootInit): ShadowRoot; // eslint-disable-line no-undef

    /**
     * applies template content and renders slots, called from `slotsInit()`
     * @param templateElement
     * @returns this
     */
    applyTemplate(templateElement: HTMLTemplateElement): this;

    /**
     * override to load and process URL before returning a HTML string with data within slots.
     * @param url: string
     * @returns Promise<string>
     */
    fetch( url:string ): Promise<string>;

    /**
     * reads payload and template from body or by attributes, apply template and renders slots
     * , called from constructor
     */
    slotsInit(): Promise<LightDomElement>;
}
interface HTMLElementTagNameMap {
    'light-dom-element': LightDomElement;
}