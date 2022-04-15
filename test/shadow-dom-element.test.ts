import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { ShadowDomElement } from '../src/ShadowDomElement.js';
import '../src/shadow-dom-element.js';

describe('ShadowDomElement test', () => {
    it('has a default title "Hey there" and counter 5', async () => {
        const el = await fixture<ShadowDomElement>(
            html`<shadow-dom-element title="Hey there"></shadow-dom-element>`
        );

        expect(el.title).to.equal('Hey there');
    });

    it('increases the counter on button click', async () => {
        const el = await fixture<ShadowDomElement>(
            html`<shadow-dom-element
                ><template
                    ><button>action</button></template
                ></shadow-dom-element
            >`
        );
        expect(el.shadowRoot!.querySelector('button')!.innerText).to.equal(
            'action'
        );
    });

    it('can override the title via attribute', async () => {
        const el = await fixture<ShadowDomElement>(
            html`<shadow-dom-element
                title="attribute title"
            ></shadow-dom-element>`
        );

        expect(el.title).to.equal('attribute title');
    });

    it('passes the a11y audit', async () => {
        const el = await fixture<ShadowDomElement>(
            html`<shadow-dom-element><template><button>action</button></shadow-dom-element>`
        );

        await expect(el).shadowDom.to.be.accessible();
    });
});
