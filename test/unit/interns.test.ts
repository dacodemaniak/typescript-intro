import { Intern } from "../../src/intern"
import { InternCollection } from "../../src/intern-collection"

describe(
    `Interns collection test suite`,
    () => {
        const internCollection: InternCollection = new InternCollection()

        test(`Should have 0 element after constructor`, () => {
            expect(internCollection.getInterns().length).toBe(0)
        })

        test(`size attribute should be 0 after constructor`, () => {
            expect(internCollection.size).toBe(0)
        })

        test(`Collection length must be 1 after push an Intern object`, () => {
            const collection: InternCollection = new InternCollection()
            
            const intern: Intern = new Intern()
            intern.id = 1
            intern.setLastname('Aubert')

            collection.addIntern(intern)
            collection.addIntern(intern)

            expect(collection.getInterns().length).toBe(1)
            expect(collection.size).toBe(1)
        })
    }
)