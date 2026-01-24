/*
 * Interfaces in TypeScript are used to define the structure of an object.
 * They are a powerful way to define contracts within your code.
 */

/*
 * 1. Basic Interface
 * Defines the structure that an object must follow.
 */
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Ashutosh",
  age: 25,
};

/*
 * 2. Optional and Readonly Properties
 * - '?' makes a property optional.
 * - 'readonly' makes a property immutable after initialization.
 */
interface Car {
  readonly brand: string;
  model: string;
  year?: number; // Optional property
}

const myCar: Car = {
  brand: "Tesla",
  model: "Model 3",
};

// myCar.brand = "BMW"; // Error: Cannot assign to 'brand' because it is a read-only property.
myCar.model = "Model S"; // Valid

/*
 * 3. Function Types in Interfaces
 * Interfaces can also describe function shapes.
 */
interface MathOp {
  (x: number, y: number): number;
}

const add: MathOp = (a, b) => a + b;
const multiply: MathOp = (a, b) => a * b;

/*
 * 4. Extending Interfaces (Inheritance)
 * An interface can extend one or more existing interfaces.
 */
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};

/*
 * 5. Interface vs Type Alias
 *
 * Major Differences:
 * 1. Declaration Merging: Interfaces can be defined multiple times and will merge.
 *    Types cannot be redefined.
 * 2. Primitives: Types can represent primitives (string, number), unions, and tuples.
 *    Interfaces only describe objects/functions.
 * 3. Syntax: Interfaces use 'extends', Types use '&' (intersection).
 */

// A. Declaration Merging (Interfaces only)
interface MyWindow {
  title: string;
}
interface MyWindow {
  isMaximized: boolean;
}

const myWindow: MyWindow = {
  title: "VS Code",
  isMaximized: true,
};

// B. Types for Unions/Primitives
type ID = string | number; // Not possible with interface
type Point = [number, number]; // Tuple - Not possible with interface

/*
 * Why use Interface if we have Type Alias?
 * 1. Extensibility: Libraries often use interfaces so users can extend them via merging.
 * 2. Better Error Messages: TypeScript often provides clearer error messages for
 *    interfaces compared to complex type intersections.
 * 3. Performance: In very large codebases, interfaces can be slightly faster for
 *    TypeScript to check than type aliases.
 * 4. Intent: Using 'interface' signals you are defining the structure of an object/class.
 */

/*
 * 6. Class Implementation: Interface vs Type Alias
 *
 * A class can only 'implements' a structure that defines an object shape.
 */

// Valid: Implementing an interface
interface Flyable {
  fly(): void;
}
class Bird implements Flyable {
  fly() {
    console.log("Flying...");
  }
}

// Valid: Implementing an object-like type alias
type Walkable = {
  walk(): void;
};
class DogClass implements Walkable {
  walk() {
    console.log("Walking...");
  }
}

/*
 * CRITICAL DIFFERENCE:
 * A class CANNOT implement a type alias that represents a union of primitives.
 * This is because a class must have a fixed structure (properties/methods),
 * but a union type (like string | number) doesn't guarantee any specific member.
 */

type Status = string | number;

// Error: A class can only implement an object type or intersection of object types with statically known members.
// class StatusTracker implements Status {}

/*
 * Conclusion:
 * Interfaces are specifically designed to be "contracts" for classes.
 * While types can describe "what something is" (a union, a primitive, a tuple),
 * interfaces describe "what something does/has" (a set of members),
 * which is exactly what a class needs.
 */

/*
 * HOW INTERFACE SOLVES THIS:
 * Interface solves this by "wrapping" the union data into an object structure.
 * This satisfies the compiler's requirement for a fixed class structure
 * while still allowing the flexible data (the union) inside it.
 */

interface StatusContract {
  currentStatus: Status; // Now the class has a clear member to implement
}

class StatusManager implements StatusContract {
  currentStatus: Status = "Success"; // Guaranteed by the interface contract
}

/*
 * Final Conclusion:
 * 1. Interface = Defining an OBJECT CONTRACT. (Use for classes and API shapes)
 * 2. Type Alias = Defining WHAT DATA IS. (Use for unions, primitives, and complex logic)
 */

console.log({
  user,
  myCar,
  sum: add(5, 10),
  myDog,
  myWindow,
  status: new StatusManager().currentStatus,
});
