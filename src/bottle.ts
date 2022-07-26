export class Bottle {
    /**
     * Contenance must be a value in the following :
     * 0.25 | 0.33 | 0.5 | 0.75 | 1 | 1.5 | 2 | 5
     */
    private contenance: number

    private readonly contenances: number[] = [
        0.25, 0.33, 0.5, 0.75, 1, 1.5, 2, 5
    ]

    public packaging: string
    public closingDevice: string
    public isOpen: boolean

    public open(): void {
        this.isOpen = true
    }
    public close(): void {
        this.isOpen = false
    }



    public setContenance(contenance: number): void {
        if( contenance >= 0.25 && contenance <= 5 ) {
            if ( 
                this.contenances.indexOf(contenance) >= 0
            ) {
               this.contenance = contenance 
            }
        }
    }

    public getContenance(): number {
        return this.contenance
    }

    public getContenances(): number[] {
        return this.contenances
    }
}