import { HTMLBuilder } from "./html-builder";

export class TDBuilder extends HTMLBuilder {
    public constructor() {
        super()
        this.element = document.createElement('td')
    }
}