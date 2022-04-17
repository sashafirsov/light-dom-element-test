import {CssChain as $} from "css-chain";
import ShadowDomElement from "./ShadowDomElement.js";

export default class LightDomElement extends ShadowDomElement {

    applyTemplate( t )
    {
        // @ts-ignore
        $(this).template(t);
    }

    /**
     *  @typedef ShadowRootInit
     *  @property {Boolean} [delegatesFocus=false]
     *  @property {String} [mode="open"]
     *  @property {String} [slotAssignment="named"]
     */
    /**
     * interface ShadowRootInit {
     *     delegatesFocus?: boolean;
     *     mode: ShadowRootMode;
     *     slotAssignment?: SlotAssignmentMode;
     * }
     * @param {ShadowRootInit} init Information about ShadowRoot.
     * @return {ShadowRoot}
     */
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    attachShadow( init){ return this.shadowRoot; };

}
