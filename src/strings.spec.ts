import {describe, it, expect} from '@jest/globals'

describe('strings', () => {

    /**
     * In Typescript there is no difference between single and double quotes, except, that you can use one for
     * strings which contain the other.
     * You cannot use templating in double-quoted strings, in contrast to Kotlin.
     *
     * To use templates, you have to use backticks and put the variable name in curly brackets.
     * Those are not optional in contrast to Kotlin.
     */
    it('quotes', () => {
        const foo = 42
        expect(`I am ${foo}`).toBe('I am 42')
        expect(`I'm ${foo}`).toBe('I\'m 42')
        expect(`I'm ${foo}`).toBe("I'm 42")
    })

    it('functions', () => {
        expect('foo'.length).toBe(3)
        expect('foo'.replace('oo', '00')).toBe('f00')
        expect('foo'.endsWith('oo')).toBe(true)
    })

})