import { describe, it, expect } from '@jest/globals'

describe('math', () => {
    it('power', () => {
        expect(2 ** 3).toBe(8)
        expect(Math.pow(2, 3)).toBe(8)
    })

    it('divide to fraction', () => {
        expect(2 / 3).toBe(0.6666666666666666) // strange rounding?
    })

    it('modulus', () => {
        expect(24 % 6).toBe(0)
        expect(24 % 7).toBe(3)
    })
})
