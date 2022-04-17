import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { CssChain as $ } from 'css-chain';
import LightDomElement from '../src/LightDomElement.js';
import '../src/light-dom-element.js';

describe('LightDomElement test', () => {
    it('passed title attribute', async () => {
        const el = await fixture<LightDomElement>(
            html`<light-dom-element title="Hey there"></light-dom-element>`
        );

        expect(el.title).to.equal('Hey there');
    });
    it('can override the title via attribute', async () => {
        const el = await fixture<LightDomElement>(
            html`<light-dom-element
                title="attribute title"
            ></light-dom-element>`
        );

        expect(el.title).to.equal('attribute title');
    });
    it('passes the a11y audit', async () => {
        const el = await fixture<LightDomElement>(
            html` <light-dom-element>
                <template>
                    <button>action</button>
                </template>
            </light-dom-element>`
        );

        await expect(el).shadowDom.to.be.accessible();
    });
    it('renders template content', async () => {
        const el = await fixture<LightDomElement>(
            html`<light-dom-element>
                <template>
                    <slot name="slot1"><button>action</button></slot>
                </template>
                <button slot="slot1">action</button>
            </light-dom-element>`
        );
        expect($(el).$('button').txt()).to.equal('action');
        expect($('button', el).txt()).to.equal('action');
    });
    it('replaces slots', async () => {
        const el = await fixture<LightDomElement>(
            html`<light-dom-element>
                <template>
                    <slot name="slot1"><h5>heading 5</h5></slot>
                    <slot name="slot2"><button>action</button></slot>
                </template>
                <a slot="slot2" href="#">link</a>
                <h3 slot="slot1" id="heading">heading 3</h3>
            </light-dom-element>`
        );
        // template slots are replaced
        expect($('h5', el).txt()).to.equal('');
        expect($('button', el).length).to.equal(0);
        // by slots
        expect($('a', el).txt()).to.equal('link');
        expect($('h3', el).id).to.equal('heading');
    });
});
