/**
 * light DOM element implementation with API compatible with shadow-dom-element
 */
export class LightDomElement extends HTMLElement
{
    constructor()
    {
        super();
        this.promise = this.slotsInit(); // tbd event on resolving
    }

    /**
     * fetches dependent resources defined by attributes and generates content from template
     * @returns {Promise<LightDomElement>} resolved when fetch and content is complete
     */
    async slotsInit()
    {
        const getText = async url => ( await ( await fetch( url ) ).text() );
        const onAttr = async( attr, cb ) => { await ( async a => a ? await cb( a ) : 0 )( this.getAttribute( attr ) ) };

        await onAttr( 'srcset', id => this.innerHTML = document.getElementById( id ) );
        await onAttr( 'src', async url => this.innerHTML = await getText( url ) );

        const shadowRoot = this.attachShadow( { mode: 'open' } );
        const applyTemplate = t => shadowRoot.appendChild( t.content.cloneNode( true ) );
        [ ...this.getElementsByTagName( 'template' ) ].forEach( applyTemplate );

        await onAttr( 'for', id => applyTemplate( document.getElementById( id ) ) );
        await onAttr( 'code', async url =>
        {
            const d = document.createElement( 'div' );
            d.innerHTML = await getText( url );
            const t = document.createElement( 'template' );
            d.childNodes.forEach( n => t.content.append( n ) );
            shadowRoot.appendChild( t.content );
        } );
        return this;
    }
}
