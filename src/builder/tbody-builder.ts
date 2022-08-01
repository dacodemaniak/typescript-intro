import { HTMLBuilder } from "./html-builder";

export class TBodyBuilder extends HTMLBuilder {
    public constructor() {
        super()
        this.element = document.createElement('tbody')
    }
}