import { POE } from "../../src/poe/poe"
import { POECollection } from "../../src/poe/poe-collection"

describe(


    `POE Collection test suite`, () => {

        const poe: POE = new POE()
        poe.id = 1
        poe.title = 'Fullstack',
        poe.beginDate = new Date(2022, 6, 18)
        poe.endDate = new Date(2022, 9, 15)

        const poe1: POE = new POE()
        poe1.id = 2
        poe1.title = 'DevOps',
        poe1.beginDate = new Date(2022, 6, 18)
        poe1.endDate = new Date(2022, 9, 15)

        const poe3: POE = new POE()
        poe3.id = 3
        poe3.title = 'Helpdesk',
        poe3.beginDate = new Date(2022, 6, 18)
        poe3.endDate = new Date(2022, 9, 15)

        const POEArray: POE[] = [
            poe, poe
        ]

        const poes: POE[] = [
            poe1, poe3
        ]



        test(`POECollection have to be instanciated`, () => {
            expect(new POECollection()).toBeTruthy()
        })

        test(`collection attribute must be empty at instanciation`, () => {
            const collection: POECollection = new POECollection()
            expect(collection.getCollection().length).toBe(0)
        })

        test(`Add POE should add poes`, () => {
            const collection : POECollection = new POECollection()
            collection.add(poe)
            collection.add(poe)
            collection.add(poe1)
            collection.add(poe3)
            
            expect(collection.getCollection().length).toBe(3)
        })
    }
)