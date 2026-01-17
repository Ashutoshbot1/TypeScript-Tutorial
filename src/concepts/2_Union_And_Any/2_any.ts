/*
 * Any Type is a type that allows you to assign any value to a variable
 * It is the most flexible type in TypeScript
 */

let score: any;
score = 95;
score = "95";
score = true;

/*
 * But any type is unsafe
 * Lets take an example
 * I will declare a varibale without assigning it.
 * via a loop i will assign that variable a value.
 */

//Hover over marks to see the type
//TS inferes marks as any
let marks;
const array = ["22", "41", "94"];

for (let mark of array) {
  if (mark === "22") {
    marks = "Fail";
  }
}

// Hover over marks to see the type
console.log(marks);

/*
 * You Can see when marks when not assigned any value it is of type any
 * But when it is assigned a value it is of type string | undefined
 * Rather than using any we can use union type to make it more type safe
 * Below is the correct way to do it
 */

let marks2: string | undefined;
const array2 = ["22", "41", "94"];

for (let mark of array2) {
  if (mark === "22") {
    marks2 = "Fail";
  }
}

// Hover over marks to see the type
console.log(marks);
