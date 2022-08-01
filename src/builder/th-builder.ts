import { HTMLBuilder } from "./html-builder";

export class THBuilder extends HTMLBuilder {
    public constructor() {
        super()
        this.element = document.createElement('th')
    }
}