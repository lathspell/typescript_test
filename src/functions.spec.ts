import { describe, expect, it } from '@jest/globals'

describe('functions', () => {
    it('function type as parameter', () => {
        // this describes a function that takes two numbers and returns one number
        type CalculatorCallback = (a: number, b: number) => number

        // this "implements" the CalculatorCallback just because it looks like it
        function add(a: number, b: number): number {
            return a + b
        }

        // this, too, "implements" the CalculatorCallback just because it looks like it
        function subtract(a: number, b: number): number {
            return a - b
        }

        // here we accept a CalculatorCallback look-alike function and call it with two numbers
        function oneTwo(callback: CalculatorCallback): number {
            return callback(1, 2)
        }

        expect(oneTwo(add)).toBe(3)
        expect(oneTwo(subtract)).toBe(-1)
    })
})
