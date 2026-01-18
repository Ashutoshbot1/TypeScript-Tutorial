/*
 * 'instanceof' is a type guard used to check if an object is an instance of a specific class.
 * It is particularly useful for narrowing down types when working with classes or constructor functions.
 */

class User {
  constructor(public name: string) {}
}

class Admin {
  constructor(
    public name: string,
    public role: string,
  ) {}
}

function greet(person: User | Admin) {
  /*
   * Problem:
   * We cannot access 'role' directly because 'person' might be a 'User'.
   * console.log(person.role); // Error: Property 'role' does not exist on type 'User | Admin'.
   */

  if (person instanceof Admin) {
    // Inside this block, 'person' is narrowed to 'Admin'
    console.log(`Hello Admin ${person.name}, Role: ${person.role}`);
  } else {
    // Here, 'person' is narrowed to 'User'
    console.log(`Hello User ${person.name}`);
  }
}

/*
 * 'instanceof' also works with built-in JavaScript classes like Date, Error, etc.
 */

function formatValue(value: Date | string) {
  if (value instanceof Date) {
    // 'value' is narrowed to Date
    return value.toUTCString();
  }
  // 'value' is narrowed to string
  return value.toUpperCase();
}

/*
 * Difference between 'typeof' and 'instanceof':
 * - 'typeof' is used for primitive types (string, number, boolean, symbol, etc.)
 * - 'instanceof' is used for object types created with classes or constructor functions.
 */

const user = new User("Ashutosh");
const admin = new Admin("System", "Superuser");

greet(user);
greet(admin);

console.log(formatValue(new Date()));
console.log(formatValue("hello world"));
