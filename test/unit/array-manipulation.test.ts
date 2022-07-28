import { ArrayManipulation } from "../../src/array-manipulations/array-manipulation"

describe(
    `Array Manipulation test suite`, () => {

        const arrayManipulation = new ArrayManipulation()
        arrayManipulation.setNumbers([15, 10, 23, 58, 1, 3, 9])
        
        test(`numbers attribute should have 7 elements`, () => {
            
            /// Your logic here
            
            expect(arrayManipulation.getNbElements()).toBe(7)
        })

        test(`Sum of numbers value in attribute must be 119`, () => {
            
            /// Your logic here
            
            expect(arrayManipulation.sum()).toBe(119)
        })

        test(`Min of numbers must be 1`, () => {
            
            /// Your logic here
            
            expect(arrayManipulation.min()).toBe(1)
        })

        test(`Max of numbers must be 58`, () => {
            
            /// Your logic here
            
            expect(arrayManipulation.max()).toBe(58)
        })
    }
)