// Do not use namespaces but instead modules!

import { describe, expect, it } from '@jest/globals'

// Namespaces can be imported just like CommonJS modules
const { ns1, ns2 } = require('./namespaces.ts')

describe('legacy namespaces', () => {
    it('double', () => {
        expect(ns1.twice(2)).toBe(4)
        expect(ns2.thrice(2)).toBe(6)
    })
})
