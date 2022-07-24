import { Main } from './../../src/main'

describe(`Main testing`, () => {
    test('Return value of sayHello must be "Hello Typescript"', () => {
        const main: Main = new Main()
        expect(main.sayHello()).toBe('Hello Typescript')
    })
})