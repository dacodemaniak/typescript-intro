import { Collection } from "../../src/collection/collection"
import { Intern } from "../../src/intern"
import { InternCollection } from "../../src/intern-collection"


describe(
    `Collection test suite`,
    () => {

        test(`Collection should only accept Intern object`, () => {
            const collection: InternCollection = new InternCollection()

            
            collection.add(new Intern())


            expect(collection.size).toBe(1)
        })

        test(`L'élément à l'indice 0 dans tableau dans la collection doit être une instance de la classe Intern`, () => {
            const collection: InternCollection = new InternCollection()

            const intern: Intern = new Intern()
            intern.id = 1
            intern.setLastname('Aubert')

            collection.add(intern)

            const internsArray = collection.getCollection()
            const internInArray = internsArray[0]

            expect(collection.getCollection()[0]).toBeInstanceOf(Intern)


        })
    }
)