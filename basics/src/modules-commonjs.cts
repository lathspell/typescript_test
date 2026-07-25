/**
 * CommonJS modules were the default way to use modules in Node.js.
 * They are still supported but deprecated in favor of ECMAScript modules (ESM).
 */

class ModulesCommonjs {
    greet(name: string): string {
        return `Hello, ${name}!`
    }
}

// This actually exports the class
module.exports = { ModulesCommonjs }
