import { Intern } from "../../src/intern"
import { InternCollection } from "../../src/intern-collection"

describe(
    `Removing item from a collection`, () => {

        test(`Cannot remove Intern from an InternCollection`, () => {
            const intern: Intern = new Intern()
            const collection: InternCollection = new InternCollection()

            collection.add(intern)

            collection.remove(intern)

            expect(collection.size).toBe(1)
        })

        test(`But i can still kill the intern`, () => {
            const intern: Intern = new Intern()
            const collection: InternCollection = new InternCollection()

            collection.add(intern)

            collection.remove(intern)

            expect(collection.size).toBe(1)
        })
    }
)