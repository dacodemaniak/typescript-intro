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

    public getNiemeNumber(indice: number): number {
        if (indice < this.nombres.length) {
           return this.nombres[indice] 
        }

        throw new Error(`L'indice est en dehors des limites : ${this.nombres.length - 1}`)
            
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
        const myNumbers: number[] = [...this.nombres]

        let min = myNumbers[0]

        for(const nombre of myNumbers) {
            if (nombre < min) {
                min = nombre
            }
        }

        return min
    }

    public minWithSort(): number {
        return this.nombres.sort()[0]
    }

    public max(): number {
        let max = this.nombres[0]

        for(let indice = 1; indice < this.nombres.length; indice++) {
            if (this.nombres[indice] > max) {
                max = this.nombres[indice]
            }
        }

        return max
    }
}