/**
 * TypeScript supports ECMAScript modules (ESM).
 * They are the default way to use modules and preferred over CommonJS.
 */

import { describe, it, expect } from '@jest/globals'

import { ModulesEsm } from './modules-esm.mts'

describe('esm imports', () => {
    it('call imported method', () => {
        expect(new ModulesEsm().greet('Tim')).toBe('Hello, Tim!')
    })
})
