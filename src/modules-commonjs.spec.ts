/**
 * TypeScript supports ECMAScript modules (ESM).
 * They are the default way to use modules and preferred over CommonJS.
 */

import { describe, it, expect } from '@jest/globals'

// This imports the class (just like "import" in modern ESM
const { ModulesCommonjs } = require('./modules-commonjs.cts')

describe('esm imports', () => {
    it('call imported method', () => {
        expect(new ModulesCommonjs().greet('Tim')).toBe('Hello, Tim!')
    })
})
