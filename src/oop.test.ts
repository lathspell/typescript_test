import {describe, it, expect} from '@jest/globals'

/**
 * OOP in JavaScript/TypeScript is prototype-based.
 * ES6 / ES2015 introduced classes are syntax sugar over prototypes.
 * The current version is ES2025 (would be ES16).
 */
describe('oop', () => {

    it('prototypes with function constructors', () => {
        // Function constructor
        function Person(this: any, name: string) {
            this.name = name
        }

        // Methods live on the prototype and are shared across instances.
        // Similar to Kotlin's `fun Any.greet() = "Hi, I'm $name"`'` although in JavaScript, we just pretend that
        // we know that there is a "name" attribute on the instance.
        ;(Person as any).prototype.greet = function (this: any) {
            return `Hi, I'm ${this.name}`
        }

        const alice = new (Person as any)('Alice')
        const bob = new (Person as any)('Bob')

        expect(alice.greet()).toBe("Hi, I'm Alice")
        expect(bob.greet()).toBe("Hi, I'm Bob")

        // Prototype chain
        expect(Object.getPrototypeOf(alice)).toBe((Person as any).prototype)
        expect(alice instanceof (Person as any)).toBe(true)

        // Methods on prototype are not own properties
        expect(alice.hasOwnProperty('greet')).toBe(false)
        expect((Person as any).prototype.hasOwnProperty('greet')).toBe(true)

        // Adding methods later affects all instances (shared prototype)
        ;(Person as any).prototype.upperName = function (this: any) {
            return this.name.toUpperCase()
        }
        expect(alice.upperName()).toBe('ALICE')
        expect(bob.upperName()).toBe('BOB')
    })

    it('Object.create and prototype lookup', () => {
        const proto = {
            kind: 'proto',
            getKind(this: any) {
                return this.kind
            },
        }

        const obj = Object.create(proto)

        // Reading finds own property first
        obj.kind = 'obj'
        expect(obj.getKind()).toBe('obj')

        // After deleting own property, lookup falls back to prototype. Yikes!
        delete obj.kind
        expect(obj.getKind()).toBe('proto')

        // Prototype link
        expect(Object.getPrototypeOf(obj)).toBe(proto)
    })

    it('classes and inheritance', () => {
        class Animal {
            name: string

            constructor(name: string) {
                this.name = name
            }

            speak() {
                return `${this.name} makes a noise`
            }

            // static members live on the constructor function itself
            static species() {
                return 'Animal'
            }
        }

        class Dog extends Animal {
            constructor(name: string) {
                super(name)
            }

            override speak(): string {
                // override + super
                const base = super.speak()
                expect(base).toBe(`${this.name} makes a noise`) // demonstrate super works
                return `${this.name} barks`
            }

            static override species() {
                return 'Dog'
            }
        }

        const rex = new Dog('Rex')
        const ann = new Animal('Ann')

        expect(rex.speak()).toBe('Rex barks')
        expect(ann.speak()).toBe('Ann makes a noise')

        // instanceof and prototype relationships
        expect(rex instanceof Dog).toBe(true)
        expect(rex instanceof Animal).toBe(true)
        expect(Object.getPrototypeOf(Dog.prototype)).toBe(Animal.prototype)

        // Methods are on the prototype, not own properties
        expect(Object.prototype.hasOwnProperty.call(rex, 'speak')).toBe(false)

        // Static methods are on the constructor (class) itself
        expect(Animal.species()).toBe('Animal')
        expect(Dog.species()).toBe('Dog')
        expect((rex as any).species).toBeUndefined()
    })
})
