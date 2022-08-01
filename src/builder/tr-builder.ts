import { HTMLBuilder } from "./html-builder";

export class TRBuilder extends HTMLBuilder {
    public constructor() {
        super()
        this.element = document.createElement('tr')
    }
}