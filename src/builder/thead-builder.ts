import { HTMLBuilder } from "./html-builder";

export class THeadBuilder extends HTMLBuilder {
    public constructor() {
        super()
        this.element = document.createElement('thead')
    }
}