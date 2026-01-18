/*
 * Intersection types allow you to combine multiple types into one.
 * The resulting type will have all the properties of all the combined types.
 * It is designated by the '&' operator.
 */

type Person = {
  name: string;
};

type Email = {
  email: string;
};

type Phone = {
  phone: number;
};

/*
 * ContactDetails is an Intersection type.
 * A variable of type ContactDetails MUST have name, email, AND phone.
 */
type ContactDetails = Person & Email & Phone;

const myContact: ContactDetails = {
  name: "Ashutosh",
  email: "ashutosh@example.com",
  phone: 1234567890,
};

/*
 * Use Case: Extending existing types
 * This is similar to interface inheritance but works with type aliases too.
 */

type Admin = Person & {
  role: "admin" | "superadmin";
};

const adminUser: Admin = {
  name: "System Admin",
  role: "superadmin",
};

/*
 * Intersection vs Union:
 * - Union (|): "Either A OR B" (requires at least one)
 * - Intersection (&): "Both A AND B" (requires all properties from both)
 */

type A = { a: number };
type B = { b: number };

// Union: can be {a}, {b}, or {a, b}
let unionVar: A | B = { a: 1 };

// Intersection: MUST be {a, b}
let intersectionVar: A & B = { a: 1, b: 2 };

/*
 * Conflict Handling:
 * If two types have the same property name but different types,
 * the intersection of those properties will be 'never' if they are incompatible primitives.
 */

type StringProp = { x: string };
type NumberProp = { x: number };

type Conflicting = StringProp & NumberProp;
// const conflict: Conflicting = { x: "hi" }; // Error: Type 'string' is not assignable to type 'never'.
// Because 'x' must be both string AND number, which is impossible.

console.log(myContact);
console.log(adminUser);
