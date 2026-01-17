/*
 * Before Learning Type Narrowing, Lets Understand the need for it.
 * Lest Take an Example
 */

/* function permofnOpetarion(value: string | number) {
    value.toUpperCase();
    value.toFixed();
} */

/*
 * Uncomment the above function and you will get an error
 * Error: Object is of type 'string | number'.
 * Property 'toUpperCase' does not exist on type 'number'.
 * Property 'toFixed' does not exist on type 'string'.
 * To fix this error, we need to use type narrowing.
 */

function permofnOpetarion(value: string | number) {
  if (typeof value === "string") {
    value.toUpperCase();
  } else {
    value.toFixed();
  }
}

permofnOpetarion("Hello");
permofnOpetarion(123);
