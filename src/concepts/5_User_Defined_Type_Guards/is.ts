/*
 * Before jumping to waht 'is' is and how it works, let's understand the problem it solves.
 * As we know that type typescript is a superset of javascript, it can understand the type of a variable at compile time.
 * It allows or restricts the operations on a variable
 * or re-assignment of the variable based on the type of the variable.
 * But it can do that only if the type of the variable is known at compile time.
 * Which in case of user defined types is not possible.
 * And that's where 'is' comes into play.
 * Without 'is' we can't do type narrowing.
 */

type User = {
  name: string;
  permission: string[];
};
type Admin = {
  name: string;
};

/*
 * Uncomment the below functions and you will get an error
 * It won't allow us to perform operations on the variable
 * as it doesn't know the type of the variable at compile time.
 */

// function addPermission(person: User | Admin) {
//   person.permission.push("read");
// }

// function removePermission(person: unknown) {
//   person.permission.pop();
// }

/*
 * with help of 'is' typescript can understand the type of the variable at compile time.
 * By which it can allow us to perform operations on the variable.
 * 'is' is a type guard.
 * It is a function that returns a boolean.
 * It is used to narrow down the type of a variable.
 */

function isUser(person: User | Admin): person is User {
  return "permission" in person;
}

function addPermission(person: User | Admin) {
  if (isUser(person)) {
    person.permission.push("read");
  }
}

function removePermission(person: User | Admin) {
  if (isUser(person)) {
    person.permission.pop();
  }
}
