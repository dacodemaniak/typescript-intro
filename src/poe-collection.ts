import { POE } from "./poe";

export class POECollection {
    private poes: POE[]

    private _size: number

    public constructor() {
        this.poes = []
        this._size = 0
    }

    public get size(): number {
        return this._size
    }

    public addPOE(poe: POE): void {
        const alreadyExists: boolean = this.poes.filter(
            (inArrayPoe: POE) => inArrayPoe.id === poe.id
        ).length !== 0

        if (!alreadyExists) {
            this.poes.push(poe)
            this._size = this.poes.length
        }
    }
}