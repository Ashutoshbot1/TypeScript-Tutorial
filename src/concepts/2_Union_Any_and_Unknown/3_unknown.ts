/*
 * unknown is a type that represents a value whose type is not yet known,
 * but must be checked before use.
 * The Line 'but must be checked before use' is very important.
 */

let marks: unknown;

/*
 * Uncomment and hover over marks to see the error
 * marks.toUpperCase() is not permitted because the type of marks is unknown
 * Because of which we cannot use any methods or perform any operations using it.
 */

// marks.toUpperCase();
// const marks2: unknown = marks + 1;
// const marks2: number = marks + 1;

console.log(marks);
