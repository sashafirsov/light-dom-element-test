import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/light-dom-element-test.js';
describe('LightDomElementTest', () => {
    it('has a default title "Hey there" and counter 5', async () => {
        const el = await fixture(html `<light-dom-element-test></light-dom-element-test>`);
        expect(el.title).to.equal('Hey there');
        expect(el.counter).to.equal(5);
    });
    it('increases the counter on button click', async () => {
        const el = await fixture(html `<light-dom-element-test></light-dom-element-test>`);
        el.shadowRoot.querySelector('button').click();
        expect(el.counter).to.equal(6);
    });
    it('can override the title via attribute', async () => {
        const el = await fixture(html `<light-dom-element-test
        title="attribute title"
      ></light-dom-element-test>`);
        expect(el.title).to.equal('attribute title');
    });
    it('passes the a11y audit', async () => {
        const el = await fixture(html `<light-dom-element-test></light-dom-element-test>`);
        await expect(el).shadowDom.to.be.accessible();
    });
});
//# sourceMappingURL=light-dom-element-test.test.js.map