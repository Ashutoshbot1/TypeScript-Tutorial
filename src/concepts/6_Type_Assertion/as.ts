/*
 * Type Assertion is a way to tell the TypeScript compiler:
 * "Trust me, I know what I'm doing. This variable is definitely of this type."
 *
 * It doesn't perform any special data restructuring or validation at runtime.
 * It's purely for the compiler to stop complaining about potential type issues.
 */

let someValue: unknown = "this is a string";

/*
 * Problem:
 * since someValue is 'unknown', we cannot access string methods directly.
 * // someValue.length; // Error: Object is of type 'unknown'.
 */

/*
 * Solution: Type Assertion using 'as'
 * We tell TypeScript that we are sure someValue is a string.
 */
let strLength: number = (someValue as string).length;

/*
 * Alternative Syntax: Angle-bracket syntax
 * This is equivalent to 'as', but cannot be used in .tsx files (React).
 * So 'as' is generally preferred for consistency.
 */
let strLength2: number = (<string>someValue).length;

/*
 * Why do we need it?
 * 1. When dealing with 'unknown' or 'any' types from external APIs.
 * 2. When you have more specific information about a type than TypeScript can't infer.
 * 3. Working with DOM elements (e.g., document.getElementById returns HTMLElement | null).
 */

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

/*
 * IMPORTANT:
 * Type assertion is NOT Type Casting.
 * It doesn't change the underlying value; it only changes what TypeScript thinks it is.
 * If you assert something is a string but it's actually a number at runtime,
 * your code might crash when you call string methods.
 */

// Example of a dangerous assertion:
let x: any = 10;
// let y = (x as string).toUpperCase(); // This will crash at runtime!

console.log({ strLength, strLength2 });
