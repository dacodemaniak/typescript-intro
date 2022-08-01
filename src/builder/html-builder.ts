export abstract class HTMLBuilder {
    protected element: HTMLElement
    protected children: HTMLBuilder[] = []

    public add(child: HTMLBuilder): HTMLBuilder {
        this.children.push(child)
        return this
    }

    public setContent(content: string): void {
        this.element.innerHTML = content
    }

    public hasChildren(): boolean {
        return this.children.length !== 0
    }

    public build(): HTMLElement {
        if (this.hasChildren()) {
            for(const children of this.children) { 
                this.element.appendChild(children.build())
            }
        }

       return this.element
    }
}