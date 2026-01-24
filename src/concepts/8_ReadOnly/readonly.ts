/*
 * The 'readonly' modifier is used to make properties immutable.
 * Once a readonly property is assigned a value, it cannot be changed.
 * This is a compile-time check by TypeScript.
 */

/*
 * 1. Readonly Properties in Objects
 */
type User = {
  readonly id: number; // Cannot be changed after creation
  name: string;
};

const user: User = {
  id: 123,
  name: "Ashutosh",
};

user.name = "Ashutosh Singh"; // Valid
// user.id = 456; // Error: Cannot assign to 'id' because it is a read-only property.

/*
 * 2. Readonly Arrays
 * Prevents adding, removing, or replacing elements in an array.
 */
let numbers: readonly number[] = [1, 2, 3];
// numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
// numbers[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading.

// Alternative syntax:
let sharedData: ReadonlyArray<string> = ["A", "B"];

/*
 * 3. Readonly in Classes
 * Properties can be marked readonly and assigned in the constructor.
 */
class Config {
  readonly apiKey: string;

  constructor(key: string) {
    this.apiKey = key; // Valid assignment in constructor
  }

  updateKey() {
    // this.apiKey = "new-key"; // Error: Cannot assign to 'apiKey' because it is a read-only property.
  }
}

/*
 * readonly vs const
 * - 'const' is for variables (the binding cannot change).
 * - 'readonly' is for properties of objects or class members.
 */

const pi = 3.14; // Variable cannot be reassigned
// pi = 3.15; // Error

type Point = { readonly x: number; y: number };
const p: Point = { x: 1, y: 2 };
p.y = 10; // Valid (variable p is const, but property y is mutable)
// p.x = 5; // Error (property x is readonly)

console.log({ user, numbers, sharedData });
