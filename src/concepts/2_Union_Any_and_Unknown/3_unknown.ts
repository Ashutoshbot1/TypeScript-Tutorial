/*
 *unknown is a type that represents a value whose type is not yet known,
 * but must be checked before use.
 * The Line 'but must be checked before use' is very important.
 */

let marks: unknown;

/*
 * Uncomment and hover over marks to see the error
 * marks.toUpperCase() is not permitted because the type of marks is unknown
 * Because of which we cannot use any methods on marks or perform any operations on it
 * Or perform any operations using it.
 * Reassigning a value to a variable of type unknown is not allowed
 */

// marks.toUpperCase();
// const marks2: string = marks;
console.log(marks);
