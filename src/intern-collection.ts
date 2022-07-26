import { Intern } from './intern'

export class InternCollection {
    private interns: Array<Intern>
    public size: number

    public constructor() {
        this.interns = new Array<Intern>()
        this.size = 0
    }

    public addIntern(intern: Intern): void {
        this.interns.push(intern)
        this.size = this.size + 1
    }

    public removeIntern(intern: Intern): void {
        this.size = this.size - 1
    }

    public updateIntern(intern: Intern): void {}

    public getInterns(): Intern[] {
        return this.interns
    }
}

/**
 * Challenge :
 *  Ajouter un attribut public "size" de type number
 *  Dans la classe InternCollection
 *  Cet attribut stockera le nombre d'éléments de l'attribut "interns"
 *  de cette classe.
 *  /!\ Pensez à incrémenter l'attribut size au bon moment !
 *  /!\ Pensez à initialiser l'attribut size au bon moment !
 */