/* Type annotation is when you explicitly declare a type. */

let score: number;
score = 95;

// Uncommenting the line below will cause a type error
// score = "95";

// ----- Example — Function Annotation
function add(a: number, b: number): number {
  return a + b;
}

add(1, 2);

// Uncommenting the line below will cause a type error
// add("1", "2");

/* 
    Uncomment the line below will cause a type error
    Here i have only declared the return type of the function as a String 
    But the function can return either a string or a number
    Which throws a type error
*/

// function getRandomValue (): string {
//   return Math.random() > 0.5 ? "A" : 1;
// }
