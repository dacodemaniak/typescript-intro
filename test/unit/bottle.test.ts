import { Bottle } from './../../src/bottle'

describe(`Bottle class`, () => {



    test(
        `Bottle should be instanciated`, () => {
            const myBottle = new Bottle()
            expect(myBottle).toBeInstanceOf(Bottle)
        }
    )

    test(`Bottle contenance should be 1.5`, () => {
        const myBottle = new Bottle()
        myBottle.contenance = 1000
        expect(myBottle.contenance).toBe(1000)
    })
})

