import { POE } from '../../src/poe/poe'

describe(`POE class test suite`, () => {
    test(`POE object must be created`, () => {
        expect(new POE()).toBeTruthy()
    })

    test(`POE id must be '1'`, () => {
        const poe: POE = new POE()
        poe.id = 1
        expect(poe.id).toBe(1)
    })

    test(`id of a POE Object could not be updated`, () => {
        const poe: POE = new POE()
        poe.id = 1
        poe.id = 2

        expect(poe.id).toBe(1)
    })

    test(`id of a POE Object could not be updated even if setter`, () => {
        const poe: POE = new POE()
        poe.setId(1)
        poe.setId(2)

        expect(poe.getId()).toBe(1)
    })
})