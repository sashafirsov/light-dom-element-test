import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { CssChain as $ } from 'css-chain';
import '../src/shadow-dom-element.js';

const slotsUrl = new URL('./slots.html', import.meta.url).href;
const templateUrl = new URL('./template.html', import.meta.url).href;

describe('ShadowDomElement test', () => {
    it('passed title attribute', async () => {
        const el = await fixture(
            html`<shadow-dom-element title="Hey there"></shadow-dom-element>`
        );

        expect(el.title).to.equal('Hey there');
    });
    it('can override the title via attribute', async () => {
        const el = await fixture(
            html`<shadow-dom-element
                title="attribute title"
            ></shadow-dom-element>`
        );

        expect(el.title).to.equal('attribute title');
    });
    it('passes the a11y audit', async () => {
        const el = await fixture(
            html` <shadow-dom-element>
                <template>
                    <button>action</button>
                </template>
            </shadow-dom-element>`
        );

        await expect(el).shadowDom.to.be.accessible();
    });
    it('renders template content', async () => {
        const el = await fixture(
            html`<shadow-dom-element>
                <template>
                    <slot><button>FAIL action</button></slot>
                </template>
                <button slot="">action</button>
            </shadow-dom-element>`
        );
        expect($(el).slots('').txt().trim()).to.equal('action');
    });
    it('replaces slots', async () => {
        const el = await fixture(
            html`<shadow-dom-element>
                <template>
                    <slot name="slot1"><h5>heading 5</h5></slot>
                    <slot name="slot2"><button>action</button></slot>
                </template>
                <a slot="slot2" href="#">link</a>
                <h3 slot="slot1" id="heading">heading 3</h3>
            </shadow-dom-element>`
        );
        expect($(el).slots('slot1').txt()).to.equal('heading 3');
        expect($(el).slots('slot2').txt()).to.equal('link');
    });
    it('srcset & for attributes', async () => {
        const container = await fixture(
            html`
                <div>
                    <template id="template1">
                        <slot name="slot1"><h5>heading 5</h5></slot>
                        <slot name="slot2"><button>action</button></slot>
                    </template>
                    <div id="slots-data">
                        <a slot="slot2" href="#">link</a>
                        <h3 slot="slot1" id="heading">heading 3</h3>
                    </div>
                    <div id="el-injection"> otherwise document.GetElementById() does not work</div>
                </div>`
        );
        const injection = $('#el-injection',container);
        injection.innerHTML = `<shadow-dom-element srcset="slots-data" for="template1" ></shadow-dom-element>`;
        const el = $('shadow-dom-element', container )[0];
        await el.promise;

        // template slots are replaced
        expect($(el).slots('slot1').txt()).to.equal('heading 3');
        expect($(el).slots('slot2').txt()).to.equal('link');
    });
    it('src & code attributes', async () => {
        const el = await fixture(
            html`<shadow-dom-element src="${slotsUrl}" code="${templateUrl}"></shadow-dom-element>`
        );
        await el.promise;

        // template slots are replaced
        expect($(el).slots('slot1').txt()).to.equal('heading 3 😌');
        expect($(el).slots('slot2').txt()).to.equal('link 😃');
    });
    it('slot attribute', async () => {
        const el = await fixture(
            html`<shadow-dom-element>
                <template>
                    <a href="coverage.svg"><slot name="abc" attribute="href"/></a>
                </template>
                <link slot="abc" href="link-href"/>
            </shadow-dom-element>`
        );
        expect($('a', el).attr('href')).to.equal('link-href');
    });
    it('slot for & attribute', async () => {
        const el = await fixture(
            html`<shadow-dom-element>
                <template>
                    <img id="image-1"/>
                    <slot name="image-link" for="image-1"  attribute="src"/></slot>
                    <slot name="image-alt"  for="image-1"  attribute="alt"/></slot>
                </template>
                <link   slot="image-link" href="link-href" />
                <i      slot="image-alt"  >alt text</i>
            </shadow-dom-element>`
        );
        expect($('img', el).attr('src')).to.equal('link-href');
        expect($('img', el).attr('alt')).to.equal('alt text');
    });

});
