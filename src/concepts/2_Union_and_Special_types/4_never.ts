/*
 * The 'never' type represents values that NEVER occur.
 * It is used in situations where a value will never be observed.
 */

/*
 * 1. Functions that never return (e.g., throwing an error)
 */
function throwError(message: string): never {
  throw new Error(message);
}

/*
 * 2. Functions that have an infinite loop
 */
function infiniteLoop(): never {
  while (true) {
    // something happens
  }
}

/*
 * 3. Exhaustiveness checking (Advanced Narrowing)
 * 'never' is very useful to ensure that we've handled all possible cases in a union.
 */

type Shape = "circle" | "square" | "rectangle";

function getArea(shape: Shape) {
  switch (shape) {
    case "circle":
      return Math.PI * 2;
    case "square":
      return 4;
    case "rectangle":
      return 8;
    default:
      /*
       * If we've handled all cases, 'shape' here will be of type 'never'.
       * If we add a new shape to the 'Shape' type but forget to add it to the switch,
       * TypeScript will throw an error here because the new shape cannot be assigned to 'never'.
       */
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

/*
 * Difference between 'void' and 'never':
 * - 'void' means the function returns nothing (it returns undefined implicitly).
 * - 'never' means the function never reaches its end (it crashes or loops forever).
 */

let x: never;

/*
 * IMPORTANT:
 * You cannot assign anything to 'never' (except another 'never').
 * Even 'any' cannot be assigned to 'never'.
 */

// x = 10; // Error: Type 'number' is not assignable to type 'never'.

console.log("This will run");
// throwError("This crashed everything after it!");
// console.log("This will never run");
