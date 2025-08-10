/**
 * TypeScript supports ECMAScript modules (ESM).
 * They are the default way to use modules and preferred over CommonJS.
 */

import { describe, it, expect } from '@jest/globals';

import { EsmGreeter } from './modules/EsmGreeter.ts';

describe('esm imports', () => {
  it('call imported method', () => {
    expect(new EsmGreeter().greet('Tim')).toBe('Hello, Tim!');
  });
});
