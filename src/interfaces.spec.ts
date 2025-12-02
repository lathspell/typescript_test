import { describe, expect, it } from '@jest/globals'

describe('interfaces', () => {
    interface Foo {
        id: number
        name?: string
    }

    it('optional values', () => {
        // name is defined as `string | undefined`
        const f1 = { id: 42 } as Foo
        expect(f1.name == null).toBe(true)
        expect(f1.name === null).toBe(false)
        expect(f1.name === undefined).toBe(true)

        // null is not assignable, except we do really evil hacks
        const f2 = { id: 42, name: null as unknown } as Foo
        expect(f2.name == null).toBe(true)
        expect(f2.name === null).toBe(true)
        expect(f2.name === undefined).toBe(false)
    })
})
