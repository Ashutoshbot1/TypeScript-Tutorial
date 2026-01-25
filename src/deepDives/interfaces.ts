/*
 * Interface are used to define the shape of an object.
 * In 90% cases interface and type are interchangable.
 * Interface just defines the shape of an object, can't be used to define a variable.
 */

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string; // Optional property
  // startTrail: () => string; // Method that returns string
  startTrail(): string; // Another way to define methods
  getCoupon(couponname: string, value: number): number;
}

// 1. Implementation of the Interface
const hitesh: User = {
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  githubToken: "db_token",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hitesh10", off: 10) => {
    return 10;
  },
};

hitesh.email = "h@hc.com";
// hitesh.dbId = 33; // ERROR: Read-only property

// 2. Re-opening of Interface (Adding more properties later)
interface User {
  githubToken: string;
}

const ashutosh: User = {
  dbId: 10,
  email: "a@a.com",
  userId: 1,
  githubToken: "git_123",
  startTrail: () => "started",
  getCoupon: (n, v) => v,
};

// 3. Inheritance (Extending an Interface)
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const adminUser: Admin = {
  dbId: 1,
  email: "admin@a.com",
  userId: 99,
  role: "admin",
  githubToken: "git_admin",
  startTrail: () => "admin started",
  getCoupon: (n, v) => v,
};

/*
 * 4. Methods and Functions in Interfaces
 * There are two main ways to define methods within an interface:
 */

interface Employee {
  readonly id: number;
  email: string;
  // Way 1: Method style
  getSalary(base: number, bonus: number): number;
  // Way 2: Property style (arrow function syntax)
  login: () => boolean;
}

const developer: Employee = {
  id: 101,
  email: "dev@work.com",

  // NOTE: Parameter names do NOT need to match the interface definition.
  // The interface uses (base, bonus), but we can use (b, s) as long as types match.
  getSalary: (b: number, s: number) => {
    return b + s;
  },

  login: () => {
    return true;
  },
};

console.log(developer.getSalary(5000, 1000));

/*
 * 5. Index Signatures
 * Sometimes you don't know all the names of a type's properties ahead of time,
 * but you do know the shape of the values.
 * In those cases you can use an index signature to describe the types of possible values.
 */

interface Inventory {
  // Index signature: [key: type]: valueType
  [item: string]: number | string;

  // You can still have named properties
  storeName: string;

  // NOTE: All named properties must match the index signature's return type.
  // Since our index signature says values are 'number | string',
  // 'storeName' being 'string' is fine.
}

const myStore: Inventory = {
  storeName: "Tech Hub",
  apples: 50,
  oranges: "Out of stock",
  // We can add any number of string keys with number/string values
  laptops: 10,
  keyboards: 5,
};

/*
 * Practical use case: Dictionary or Map objects
 */
interface Dictionary {
  [key: string]: string;
}

const translations: Dictionary = {
  hello: "bonjour",
  goodbye: "au revoir",
};

/*
 * 6. Interface Merging (Declaration Merging)
 * Unlike Types, Interfaces can be defined multiple times.
 * TypeScript will automatically merge them into a single definition.
 *
 * This is useful when:
 * - Adding properties to third-party library interfaces.
 * - Modularizing large interface definitions.
 */

interface Car {
  brand: string;
}

interface Car {
  model: string;
}

// Now Car HAS to have both brand and model
const myCar: Car = {
  brand: "Tesla",
  model: "Model 3",
};

/*
 * NOTE: If properties with the same name are merged,
 * they MUST have the exact same type, otherwise TS will throw an error.
 */

// Example of Error:
// interface Car { brand: number; } // Error: Subsequent property declarations must have the same type.

/*
 * 7. Interface Inheritance (Extending an Interface)
 * Interfaces can extend one or multiple other interfaces using the 'extends' keyword.
 * This allows you to copy members from one interface into another.
 */

interface Human {
  name: string;
}

interface Sportsman {
  sport: string;
}

// Single Inheritance
interface Player extends Human {
  team: string;
}

// Multiple Inheritance (Interfaces and be extended by multiple interfaces)
interface ProPlayer extends Human, Sportsman {
  contractValue: number;
}

const dhoni: ProPlayer = {
  name: "MS Dhoni",
  sport: "Cricket",
  contractValue: 50000000,
};

console.log(`${dhoni.name} plays ${dhoni.sport}`);
