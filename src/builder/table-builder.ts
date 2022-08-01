import { HTMLBuilder } from "./html-builder";

export class TableBuilder extends HTMLBuilder {
    public constructor() {
        super()
        this.element = document.createElement('table')
    }
}