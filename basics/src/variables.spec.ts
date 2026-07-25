import { describe, it, expect } from '@jest/globals'

describe('variables', () => {
    /** Immutable variables are defined with "const", normal ones with "let". */
    it('scalars', () => {
        const foo = 42
        expect(foo).toBe(42)
        expect(foo).not.toBe('42')

        let bar = 41
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

    it('comparisons with null and undefined', () => {
        expect(null === null).toBe(true)
        expect(null === true).toBe(false)
        expect(null === false).toBe(false)
        expect(null === undefined).toBe(false)

        expect(null == null).toBe(true)
        expect(null == true).toBe(false)
        expect(null == false).toBe(false)
        expect(null == undefined).toBe(true)

        expect(null != null).toBe(false)
        expect(null != true).toBe(true)
        expect(null != false).toBe(true)
        expect(null != undefined).toBe(false)

        expect(undefined === undefined).toBe(true)
        expect(undefined === null).toBe(false)
        expect(undefined === true).toBe(false)
        expect(undefined === false).toBe(false)

        expect(undefined !== undefined).toBe(false)

        expect(undefined == undefined).toBe(true)
        expect(undefined == null).toBe(true) // undefined is kinda null
        expect(undefined == true).toBe(false)
        expect(undefined == false).toBe(false)
    })

    it('functions', () => {
        expect('foo'.length).toBe(3)
        expect('foo'.replace('oo', '00')).toBe('f00')
        expect('foo'.endsWith('oo')).toBe(true)
    })

    it('arrays', () => {
        const nums = [1, 2, 3]
        expect(Array.isArray(nums)).toBe(true)
        expect(nums.length).toBe(3)
        expect(nums[0]).toBe(1)

        nums.push(4)
        expect(nums).toEqual([1, 2, 3, 4])
        const last = nums.pop()
        expect(last).toBe(4)
        expect(nums).toEqual([1, 2, 3])

        const squared = nums.map(n => n * n)
        expect(squared).toEqual([1, 4, 9])

        const even = nums.filter(n => n % 2 === 0)
        expect(even).toEqual([2])

        const extended = [...nums, 4]
        expect(extended).toEqual([1, 2, 3, 4])
        expect(nums).toEqual([1, 2, 3]) // original unchanged by spread

        const [first, ...rest] = nums
        expect(first).toBe(1)
        expect(rest).toEqual([2, 3])

        // reference vs copy
        const alias = nums
        alias.push(4)
        expect(nums).toEqual([1, 2, 3, 4]) // same reference changed

        const copy = [...nums]
        copy.push(5)
        expect(nums).toEqual([1, 2, 3, 4]) // original not affected
        expect(copy).toEqual([1, 2, 3, 4, 5])

        // check if element exists
        const emptyArray: string[] = []
        expect(emptyArray[4]).toBeUndefined() // no "array out of bounds" exception or similar!
        expect(emptyArray[4] ?? 'default').toEqual('default')
    })

    it('anonymous objects', () => {
        const person = { name: 'Alice', age: 30 }
        expect(typeof person).toBe('object')
        expect(Array.isArray(person as any)).toBe(false)
        expect(person.name).toBe('Alice')
        expect(person.age).toBe(30)

        // add and remove properties dynamically
        ;(person as any).email = 'alice@example.com' // <- ";" because supporting function call '()' on a new line surely is a sensible thing to support
        expect('email' in person).toBe(true)
        expect((person as any).email).toBe('alice@example.com')
        delete (person as any).email
        expect((person as any).email).toBeUndefined()

        // computed property names (dynamic keys)
        const key = 'score'
        const obj = { [key]: 123 }
        expect((obj as any).score).toBe(123)

        // deep equality vs reference equality
        const a = { x: { y: 1 } }
        const b = { x: { y: 1 } }
        expect(a).not.toBe(b) // different references
        expect(a === b).toBeFalsy() // reference equality
        expect(a == b).toBeFalsy() // reference equality (would accept `true == 1`)
        expect(a).toEqual(b) // same shape and values

        // shallow copy with spread keeps nested references
        const shallow = { ...a }
        expect(shallow).not.toBe(a)
        shallow.x.y = 2
        expect(a.x.y).toBe(2) // nested object was shared

        // deep copy (can be tricky due to circular references!)
        const deepCopy = structuredClone(a)
        expect(deepCopy.x.y).toEqual(a.x.y)
        deepCopy.x.y = 42
        expect(a.x.y).toBe(2) // nested object was changed

        // deep copy using JSON
        const deepCopyJSON = JSON.parse(JSON.stringify(a))
        expect(deepCopyJSON.x.y).toEqual(a.x.y)
        deepCopyJSON.x.y = 43
        expect(a.x.y).toBe(2) // nested object was changed
    })
})
