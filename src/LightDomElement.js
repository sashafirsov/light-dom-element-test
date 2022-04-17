import {CssChain as $} from "css-chain";

export default class LightDomElement extends HTMLElement {
    promise;

    constructor() {
        super();
        this.promise = this.slotsInit(); // tbd event on resolving
    }

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

        const shadowRoot = this.attachShadow({ mode: 'open' });
        const applyTemplate = t => $(this).template(t);

        $('template', this ).forEach(applyTemplate);

        await onAttr('for', id => applyTemplate(document.getElementById(id)));
        await onAttr('code', async url => {
            const d = document.createElement('div');
            d.innerHTML = await getText(url);
            const t = document.createElement('template');
            d.childNodes.forEach(n => t.content.append(n));
            shadowRoot.appendChild(t.content);
        });
    }
}
