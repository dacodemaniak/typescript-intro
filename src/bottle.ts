export class Bottle {
    public contenance: number
    public packaging: string
    public closingDevice: string
    public isOpen: boolean

    public open(): void {
        this.isOpen = true
    }
    public close(): void {
        this.isOpen = false
    }
}