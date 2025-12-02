import { describe, expect, it } from '@jest/globals'

describe('lambda', () => {
    it('with type and expression', () => {
        const lambda = (a: number) => a * a
        expect(lambda(2)).toBe(4)
    })

    it('without type and with expression', () => {
        // @ts-ignore - has any type to show that braces are not necessarily needed
        const lambda = a => a * a
        expect(lambda(2)).toBe(4)
    })

    it('with type and block which needs a return', () => {
        const lambda = (a: number) => {
            return a * a
        }
        expect(lambda(2)).toBe(4)
    })
})
