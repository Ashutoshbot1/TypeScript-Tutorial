/* 
    1. Annotated Function Types
*/

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

/* 
    2. Annotated Return Type
*/

type Subtract = (a: number, b: number) => number;

const subtract: Subtract = (a, b) => a - b;

/* 
    3. Annotated Arrow functions types on the fly
*/

const multiply: (a: number, b: number) => number = (a, b) => a * b;

/* 
    4. Annotated Classic Function Types On the fly
*/

function divide(a: number, b: number): number {
  return a / b;
}

/* 
    5. Optional Parameters
    ** Optional parameters should be after required parameters
*/

function OptionalParameters(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

/*
 * Uncommenting the below lines will throw an error
 * because optional parameters should be after required parameters
 */

// function OptionalParameters2(a?: number, b: number): number {
//     return a + b;
// }

/* 
    6. Void Type
    * Void type is used when a function does not return anything.
*/

function log(message: string): void {
  console.log(message);
}
