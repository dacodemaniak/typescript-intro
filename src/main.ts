export class Main {
    public constructor() {
        const dock: HTMLElement | null = document.querySelector('body')

        if (dock) {
            dock.innerHTML = this.sayHello()
        }

    }

    public sayHello(): string {
        return "Hello Typescript"
    }
}

document.addEventListener(
    'DOMContentLoaded',
    () => {
        const main = new Main()
    }
)

