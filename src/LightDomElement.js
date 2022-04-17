import {CssChain as $} from "css-chain";

export default class LightDomElement extends HTMLElement {
    promise;

    constructor() {
        super();
        this.promise = this.slotsInit(); // tbd event on resolving
    }

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

    async slotsInit() {
        const getText = async url => (await fetch(url)).text();
        const onAttr = async (attr, cb) => {
            await (async a => (a ? cb(a) : 0))(this.getAttribute(attr));
        };

        await onAttr(
            'srcset',
            id => (this.innerHTML = `${document.getElementById(id)?.innerHTML}`)
        );
        await onAttr('src', async url => (this.innerHTML = await getText(url)));

        const applyTemplate = t => this.applyTemplate(t);

        $('template', this ).forEach(applyTemplate);

        await onAttr('for', id => applyTemplate(document.getElementById(id)));
        await onAttr('code', async url => {
            const d = document.createElement('div');
            d.innerHTML = await getText(url);
            const t = document.createElement('template');
            d.childNodes.forEach(n => t.content.append(n));
            applyTemplate( t );
        });
        return this;
    }
}
