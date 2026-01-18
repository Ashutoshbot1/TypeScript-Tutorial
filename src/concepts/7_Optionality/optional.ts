/*
 * The '?' symbol in TypeScript is used to mark something as optional.
 * It primarily appears in three contexts:
 * 1. Optional Properties (in types/interfaces)
 * 2. Optional Parameters (in functions)
 * 3. Optional Chaining (safe navigation)
 */

/*
 * 1. Optional Properties
 * Adding '?' after a property name means that property may be missing.
 */
type User = {
  id: number;
  name: string;
  email?: string; // This property is OPTIONAL
};

const user1: User = { id: 1, name: "Ashutosh" }; // Valid
const user2: User = { id: 2, name: "John", email: "john@example.com" }; // Also valid

/*
 * 2. Optional Parameters
 * In functions, '?' marks a parameter that the caller can omit.
 * Optional parameters must always come AFTER required parameters.
 */
function greet(name: string, greeting?: string) {
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

console.log(greet("Ashutosh")); // Hello, Ashutosh!
console.log(greet("Ashutosh", "Welcome")); // Welcome, Ashutosh!

/*
 * 3. Optional Chaining (?.)
 * This allows you to safely access properties of an object that might be null or undefined.
 * It stops the evaluation and returns 'undefined' if the part before ?. is nullish.
 */

type Profile = {
  bio?: {
    social?: {
      twitter?: string;
    };
  };
};

const profile: Profile = {};

// Without optional chaining:
// console.log(profile.bio.social.twitter); // This would CRASH if profile.bio is undefined

// With optional chaining:
const twitterHandle = profile.bio?.social?.twitter;
console.log(twitterHandle); // undefined (No crash!)

/*
 * ? vs | undefined
 * 'prop?: string' is almost the same as 'prop: string | undefined'.
 * The difference:
 * - 'prop?: string' means the KEY can be missing entirely.
 * - 'prop: string | undefined' means the KEY must exist, but its value can be undefined.
 */

type A = { x?: number };
type B = { x: number | undefined };

const objA: A = {}; // Valid
// const objB: B = {}; // Error: Property 'x' is missing.
const objBValid: B = { x: undefined }; // Valid
