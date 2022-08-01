import { HTMLBuilder } from "./builder/html-builder"
import { ToTable } from "./interns/to-table"

export class Main {
    private dock: HTMLElement

    public constructor() {
        this.dock = document.querySelector('[appDock]')!

        this.tableBuilder()
    }

    private tableBuilder(): void {
        const table: ToTable =  new ToTable()
        this.dock.appendChild(table.build())
    }
}

document.addEventListener(
    'DOMContentLoaded',
    () => {
        const main = new Main()
    }
)

