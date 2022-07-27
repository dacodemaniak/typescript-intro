export class ArrayManipulation {
    private nombres: number[] = []

    public setNumbers(nombres: number[]): void {
        this.nombres = nombres
    }

    public getNbElements(): number {
        let nbElements = 0
        for (const nombre of this.nombres) {
            nbElements = nbElements + 1
        }
        return nbElements
    }

    
    public sum(): number {
        let total = 0

        for (const nombre of this.nombres) {
            total = total + nombre
        }

        return total
    }

    public min(): number {
        let min = this.nombres[0]

        for(let indice = 1; indice < this.nombres.length; indice++) {
            if (this.nombres[indice] < min) {
                min = this.nombres[indice]
            }
        }

        return min
    }

    public minWithForOf(): number {
        let min = this.nombres[0]

        for(const nombre of this.nombres) {
            if (nombre < min) {
                min = nombre
            }
        }

        return min
    }

    public minWithSort(): number {
        return this.nombres.sort()[0]
    }

}