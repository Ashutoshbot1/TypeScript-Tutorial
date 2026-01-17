/*
 * A union type allows a variable, parameter, or return value to be one of several possible types.
 */

let marks: string | number;

/*
 * I can assign a string or a number to the variable without any type error
 */
marks = "Fail";
marks = 95;

/*
 * I can use custom modes as well
 * I can only assign one of the values to the variable
 * If i try to assign a value that is not in the union type it will throw a type error
 * BEST thing is that i gets suggestions of the values in the union type while assigning or re-assigning
 */

let status: "loading" | "success" | "error" = "error";
status = "error";

// Uncomment the line below to see the type error
// status="any"
