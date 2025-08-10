// Do not use namespaces but instead modules!

import {describe, expect, it} from "@jest/globals";

// Namespaces can be imported just like CommonJS modules
const myNamespace = require('./myNamespace.js');

describe('legacy namespaces', () => {

    it('double', () => {
        expect(myNamespace.twice(2)).toBe(4)
    })

})
