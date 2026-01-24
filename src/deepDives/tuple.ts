/*
 ** We do not have 'tuple' data type in javascript.
 ** Tuple is a feature of typescript.
 ** Tuple have different syntax fot annotating types as compare to arrays
 */

type Point = [number, number];
type Data = [number, string];
const point: Point = [1, 2];
const data: Data = [1, "a"];

/*
 ** Note, order of types is important, order of values should be same as order of types
 * Uncomment below line to see error
 */

//  const newData: Data = ["a", 1];

/*
 * Tuple with optional values
 */

type ModernData = [number, string?];
const newData: ModernData = [1];

/*
    9. Named Tuples (Labeled Tuples)
    * Named tuples allow us to provide labels for each element in the tuple.
    * This makes the tuple more readable and provides better IDE support.
*/

type GraphPoint = [x: number, y: number];
const myPoint: GraphPoint = [10, 20];

/*
    WHY DO WE NEED NAMED TUPLES?
    
    1. READABILITY:
       Without labels, a tuple like [number, number] is ambiguous. 
       Does the first number represent 'latitude' or 'longitude'? 
       Named tuples like [lat: number, lng: number] eliminate this confusion.

    2. IDE SUPPORT (INTELLISENSE):
       When you hover over the variable or use it in a function, 
       the IDE shows the labels (e.g., 'x' and 'y'). 
       This helps developers understand the purpose of each index instantly.

    3. SELF-DOCUMENTING CODE:
       You don't need to add comments like "// 0: name, 1: age" 
       because the type definition itself explains the data structure.

    4. DESTRUCTURING CLARITY:
       When destructuring, the labels serve as a reminder of what data you are pulling out.
*/

type UserProfile = [name: string, age: number, isActive: boolean];

function processUser(user: UserProfile) {
  const [name, age, isActive] = user;
  console.log(`User ${name} is ${age} years old.`);
}

console.log({ point, data, newData, myPoint });
processUser(["Ashutosh", 25, true]);
