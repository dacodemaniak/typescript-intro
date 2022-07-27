import { POE } from "../../src/poe/poe"
import { POECollection } from "../../src/poe/poe-collection"

describe(


    `POE Collection test suite`, () => {

        const poe: POE = new POE()
        poe.id = 1
        poe.title = 'Fullstack',
        poe.beginDate = new Date(2022, 6, 18)
        poe.endDate = new Date(2022, 9, 15)

        const POEArray: POE[] = [
            poe, poe
        ]

        test(`POECollection have to be instanciated`, () => {
            expect(new POECollection()).toBeTruthy()
        })

        test(`collection attribute must be empty at instanciation`, () => {
            const collection: POECollection = new POECollection()
            expect(collection.getCollection().length).toBe(0)
        })

        test(`setCollection method with an array of same objects should return 1 element`, () => {
            const collection: POECollection = new POECollection()
            collection.setCollection(POEArray)

            expect(collection.getCollection().length).toBe(1)
        })
    }
)