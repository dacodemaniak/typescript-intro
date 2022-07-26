import { Intern } from './../../src/intern'

describe(`Intern class`, () => {
    const intern: Intern = new Intern()
    intern.setLastname('aubert')

    test(`new Intern must create an Intern instance`, () => {
        expect(intern).toBeInstanceOf(Intern)
    })

    test(`Intern lastname 'aubert' must be uppercase`, () => {
        expect(intern.getLastname()).toBe('aubert'.toUpperCase())
    })
})