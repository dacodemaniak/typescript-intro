import { Bottle } from './../../src/bottle'

describe(`Bottle class`, () => {

    const testBottle: Bottle = new Bottle()



    test(
        `Bottle should be instanciated`, () => {
            const myBottle = new Bottle()
            expect(myBottle).toBeInstanceOf(Bottle)
        }
    )

    test(`Bottle contenance should be 1.5`, () => {
        const myBottle: Bottle = new Bottle()
        myBottle.setContenance(1.5)
        expect(myBottle.getContenance()).toBe(1.5)
    })

    test(`contenance attribute must be undefined if value of param passed to setContenance() is not between 0.25 and 5`, () => {
        const myBottle: Bottle = new Bottle()
        myBottle.setContenance(0.15)
        expect(myBottle.getContenance()).toBeUndefined()

        myBottle.setContenance(5.1)
        expect(myBottle.getContenance()).toBeUndefined()
    })

    test(`Contenances values in the scope are valid`, () => {
        for (const contenanceValue of testBottle.getContenances()) {
            testBottle.setContenance(contenanceValue)
            expect(testBottle.getContenance()).toBe(contenanceValue)
        }
    })
})

