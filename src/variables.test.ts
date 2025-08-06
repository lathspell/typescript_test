import {describe, it, expect} from '@jest/globals'

describe('variables', () => {

    /** Immutable variables are defined with "const", normal ones with "let". */
    it('scalars', () => {
        const foo = 42
        expect(foo).toBe(42)
        expect(foo).not.toBe('42')

        let bar = 41;
        bar += 1
        if (true) {
            let bar = -1 // "let" is block scoped as expected
        }
        expect(bar).toBe(42)

        // Do not use "var", it is deprecated as it has historically strange rules e.g. for scoping
        var baz = 1
        if (true) {
            var baz = 2
        }
        expect(baz).toBe(2) // wtf?
    })

    it('functions', () => {
        expect('foo'.length).toBe(3)
        expect('foo'.replace('oo', '00')).toBe('f00')
        expect('foo'.endsWith('oo')).toBe(true)
    })

})