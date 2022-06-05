import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { CssChain as $ } from 'css-chain';
import '../src/light-dom-element.js';

const slotsUrl = new URL('./slots.html', import.meta.url).href;
const templateUrl = new URL('./template.html', import.meta.url).href;

describe('LightDomElement test', () => {
    it('passed title attribute', async () => {
        const el = await fixture(
            html`<light-dom-element title="Hey there"></light-dom-element>`
        );

        expect(el.title).to.equal('Hey there');
    });
    it('can override the title via attribute', async () => {
        const el = await fixture(
            html`<light-dom-element
                title="attribute title"
            ></light-dom-element>`
        );

        expect(el.title).to.equal('attribute title');
    });
    it('passes the a11y audit', async () => {
        const el = await fixture(
            html` <light-dom-element>
                <template>
                    <button>action</button>
                </template>
            </light-dom-element>`
        );

        await expect(el).shadowDom.to.be.accessible();
    });
    it('renders template content', async () => {
        const el = await fixture(
            html`<light-dom-element>
                <template>
                    <slot><button>FAIL action</button></slot>
                </template>
                <button slot="">action</button>
            </light-dom-element>`
        );
        expect($(el).slots().length).to.equal(1);
        expect($(el).slots()[0].hidden).to.equal(true);
        expect($('button[slot=""]', el).length).to.equal(1);
        expect($('button[slot=""]', el).txt()).to.equal('action');
    });
    it('replaces slots', async () => {
        const el = await fixture(
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

        expect($('[slot="slot1"]', el).tagName).to.equal('H3');
        expect($('[slot="slot2"]', el).tagName).to.equal('A');
        expect($('h5'    , el).parent('slot').hidden).to.equal(true);
        expect($('button', el).parent('slot').hidden).to.equal(true);
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
        injection.innerHTML = `<light-dom-element srcset="slots-data" for="template1" ></light-dom-element>`;
        const el = $('light-dom-element', container )[0];
        await el.promise;

        // template slots are replaced
        expect($('h5'    , el).parent('slot').hidden).to.equal(true);
        expect($('button', el).parent('slot').hidden).to.equal(true);
        // by slots
        expect($('slot[name="slot1"]', el).hidden).to.equal(true);
        expect($('slot[name="slot2"]', el).hidden).to.equal(true);
        expect($('[slot="slot1"]', el).id   ).to.equal('heading');
        expect($('[slot="slot1"]', el).txt()).to.equal('heading 3');
        expect($('[slot="slot2"]', el).txt()).to.equal('link');
    });
    it('src & code attributes', async () => {
        const el = await fixture(
            html`<light-dom-element src="${slotsUrl}" code="${templateUrl}"></light-dom-element>`
        );
        await el.promise;

        // template slots are replaced
        expect($('h5'    , el).parent('slot').hidden).to.equal(true);
        expect($('button', el).parent('slot').hidden).to.equal(true);
        // by slots
        expect($('slot[name="slot1"]', el).hidden).to.equal(true);
        expect($('slot[name="slot2"]', el).hidden).to.equal(true);
        expect($('[slot="slot1"]', el).id   ).to.equal('heading');
        expect($('[slot="slot1"]', el).txt()).to.equal('heading 3 😌');
        expect($('[slot="slot2"]', el).txt()).to.equal('link 😃');
    });
    it('slot attribute', async () => {
        const el = await fixture(
            html`<light-dom-element>
                <template>
                    <a href="coverage.svg"><slot name="abc" attribute="href"/></a>
                </template>
                <link slot="abc" href="link-href"/>
            </light-dom-element>`
        );
        expect($('a', el).attr('href')).to.equal('link-href');
    });
    it('slot for & attribute', async () => {
        const el = await fixture(
            html`<light-dom-element>
                <template>
                    <img id="image-1"/>
                    <slot name="image-link" for="image-1"  attribute="src"/></slot>
                    <slot name="image-alt"  for="image-1"  attribute="alt"/></slot>
                </template>
                <link   slot="image-link" href="link-href" />
                <i      slot="image-alt"  >alt text</i>
            </light-dom-element>`
        );
        expect($('img', el).attr('src')).to.equal('link-href');
        expect($('img', el).attr('alt')).to.equal('alt text');
    });
});
