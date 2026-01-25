/**
 * GENERICS in TypeScript
 * Generics allow you to create reusable components that can work with a variety of types
 * rather than a single one.
 * This allows users to consume these components and use their own types.
 */

// 1. A function without generics (Too restrictive)
function identityOne(val: number): number {
  return val;
}

// 2. A function with 'any' (Too loose - we lose type information)
function identityTwo(val: any): any {
  return val;
}
// Problem with 'any': If we pass a string, it returns 'any', not 'string'.
// We lose the ability to use string-specific methods later.

/**
 * 3. A SIMPLE GENERIC FUNCTION
 * Use <Type> (or any shortcut like <T>) to lock the type.
 * Whatever type is passed in, the SAME type will be returned.
 */

function identityThree<Type>(val: Type): Type {
  return val;
}

// Shortcut: T is most commonly used for 'Type'
function identityFour<T>(val: T): T {
  return val;
}

// Usage Example:
let stringVal = identityFour("hitesh"); // type is inferred as 'string'
let numberVal = identityFour(10); // type is inferred as 'number'

/**
 * Benefit:
 * If you pass a string, identityFour knows the return is a string.
 * This holds the type, unlike 'any'.
 */

interface Bottle {
  brand: string;
  type: number;
}

function identityFive<T>(val: T): T {
  // We can even use our own types/interfaces
  return val;
}

identityFive<Bottle>({ brand: "Nike", type: 1 });

/**
 * 4. PAIR GENERICS (Multiple Type Parameters)
 * You are not limited to just one generic type.
 * You can pass multiple types separated by commas.
 * Conventionally, we use T, U, V, etc.
 */

function anotherFunction<T, U>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// Usage:
anotherFunction(3, "4");
// Here, T is inferred as 'number' and U is inferred as 'string'.

/**
 * You can also be specific about return types using these generics.
 */
function getSearchProducts<T>(products: T[]): T[] {
  // do some database operations
  return products;
}

// Arrow function syntax with generics:
const getMoreSearchProducts = <T>(products: T[]): T[] => {
  return products;
};

/**
 * 5. GENERIC INTERFACES
 * Just like functions, interfaces can also be generic.
 * This is extremely useful when the shape of the data is consistent
 * but the actual data type changes.
 */

interface Database<T> {
  connection: string;
  data: T;
}

// Example 1: Database storing a string
const myDB: Database<string> = {
  connection: "localhost:5432",
  data: "Users Table Data",
};

// Example 2: Database storing an object
interface UserProfile {
  name: string;
  role: string;
}

const userDB: Database<UserProfile> = {
  connection: "atlas-mongodb",
  data: {
    name: "Ashutosh",
    role: "Admin",
  },
};
