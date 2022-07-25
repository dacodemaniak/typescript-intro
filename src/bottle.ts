export class Bottle {
    contenance: number
    packaging: string
    closingDevice: string
    isOpen: boolean

    open(): void {
        this.isOpen = true
    }
    close(): void {
        this.isOpen = false
    }
}