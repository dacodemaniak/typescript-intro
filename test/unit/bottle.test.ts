import { Bottle } from './../../src/bottle'

describe(`Bottle class`, () => {
    const contenance = 1.5
    const myBottle = new Bottle()
    myBottle.contenance = contenance

    test(
        `Bottle should be instanciated`, () => {
            expect(myBottle).toBeInstanceOf(Bottle)
        }
    )

    test(`Bottle contenance should be 1.5`, () => {
        expect(myBottle.contenance).toBe(1.5)
    })
})

