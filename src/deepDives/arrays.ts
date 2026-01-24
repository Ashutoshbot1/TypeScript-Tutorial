/* 
    1. Annotating Arrays
*/
const numbers: number[] = [1, 2, 3];
const strings: string[] = ["a", "b", "c"];

/* 
    2. Another way of annotating arrays
*/
const numbers2: Array<number> = [1, 2, 3];
const strings2: Array<string> = ["a", "b", "c"];

/* 
    3. Seperating complex types
*/
type Point = {
  x: number;
  y: number;
};

const points: Point[] = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
];

/* 
    4. readonly arrays
    * Cannot mutate readonly arrays
*/
const readonlyNumbers: readonly number[] = [1, 2, 3];
const readonlyNumbers2: ReadonlyArray<number> = [1, 2, 3];

// readonlyNumbers.push(4);    // Error
// readonlyNumbers2.push(4);    // Error

/* 
    5. Two dimentional arrays
*/
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
