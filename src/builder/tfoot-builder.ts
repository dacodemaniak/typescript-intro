import { HTMLBuilder } from "./html-builder";

export class TFootBuilder extends HTMLBuilder {
    public constructor() {
        super()
        this.element = document.createElement('tfoot')
    }
}