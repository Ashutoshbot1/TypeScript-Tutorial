/* Type inference means TypeScript automatically determines the type of a variable,
function return, or expression based on how it is used. */

// ----- Example — Variable Inference
let count = 10; // TypeScript infers ==> let count: number;

// Uncommenting the line below will cause a type error
// count = "10";

// ----- Example — Function Return Type Inference
function add(a: number, b: number) {
  return a + b;
}

/* TypeScript infers ==> function add(a: number, b: number): number */

/* 
  Hover over getRandomValue() to see the inferred type
  You Can see the type is (string | number)
  Beacuse the function can return either a string or a number
*/
function getRandomValue() {
  return Math.random() > 0.5 ? "A" : 1;
}

getRandomValue();

// ----- Example — Object Inference
const user = {
  id: 1,
  name: "Alice",
  isAdmin: false,
};

/* TypeScript infers ==> 
const user: {
  id: number;
  name: string;
  isAdmin: boolean;
} */
