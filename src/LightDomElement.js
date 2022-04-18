// ts-nocheck
import { CssChain as $ } from "css-chain";
import ShadowDomElement from "./ShadowDomElement.js";

export default class LightDomElement extends ShadowDomElement
{
    applyTemplate( t ){ $( this ).template( t ); return this; }
    attachShadow(){};
}
