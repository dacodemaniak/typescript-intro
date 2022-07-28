import { Collection } from './collection/collection'
import { IModel } from './inerfaces/i-model'
import { Intern } from './intern'

export class InternCollection extends Collection<Intern> {
   
    public add(intern: Intern): void {
        const internNotExists: boolean = this.collection.findIndex(
            (inIntern: Intern) => {
                return inIntern.id === intern.id
            }
        ) === -1

        if (internNotExists) {
            super.add(intern)
        }
    }

}