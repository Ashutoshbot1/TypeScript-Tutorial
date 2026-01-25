/**
 * ============================================================================
 * JAVASCRIPT OOP DEEP DIVE: OBJECTS AND CONTEXT
 * ============================================================================
 */

/**
 * CONCEPT 1: Object Literal
 * -------------------------
 * The simplest way to create an object. It represents a single instance.
 * Good for simple data structures but hard to scale for multiple "users" or "items".
 */
const user = {
  username: "ashutosh",
  loginCount: 8,
  signedIn: true,

  // Method: A function belongs to an object
  getUserDetails: function () {
    console.log(`Username: ${this.username}`);
  },
};

/**
 * CONCEPT 2: The 'this' Keyword Context
 * ------------------------------------
 * 'this' refers to the "current context" or the object that "owns" the code.
 *
 * 1. Inside Method: 'this' refers to the object (e.g., 'user').
 * 2. Global Context (Node.js): 'this' refers to module.exports (empty object {}).
 * 3. Global Context (Browser): 'this' refers to the 'window' object.
 * 4. Arrow Functions: Do NOT have their own 'this'. They inherit it lexically.
 */

// Example of lexical 'this' failure in arrow functions:
const arrowExample = {
  name: "Hitesh",
  sayName: () => {
    // console.log(this.name); // returns undefined because 'this' isn't 'arrowExample'
  },
};

/**
 * CONCEPT 3: Constructor Functions
 * --------------------------------
 * A blueprint (template) used to create multiple objects of the same "type".
 * Convention: Use PascalCase for naming.
 * By default function returns 'this' keyword
 */
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
}

console.log(User());

/**
 * CONCEPT 4: The 'new' Keyword Internal Mechanism
 * -----------------------------------------------
 * When you use 'new', 4 things happen behind the scenes:
 *
 * 1. Create: A brand new empty object {} is created.
 * 2. Link: The internal method [[Construct]] is triggered.
 * 3. Bind: The 'this' keyword is pointed to that new empty object.
 * 4. Execute & Return: The function body is executed, and 'this' is returned.
 */
const instanceOne = new User("ashutosh", 12, true);
const instanceTwo = new User("chai", 11, false);

/**
 * CONCEPT 5: Normal Function vs Constructor Function
 * --------------------------------------------------
 * | Feature        | Normal Function       | Constructor Function      |
 * |----------------|-----------------------|---------------------------|
 * | Purpose        | Perform a task        | Create an object instance |
 * | Naming         | camelCase             | PascalCase                |
 * | Call Method    | func()                | new func()                |
 * | 'this' context | Global / Undefined    | Newly created object      |
 */

/**
 * CONCEPT 6: Internal Engine Logic ([[Call]] vs [[Construct]])
 * -----------------------------------------------------------
 * JavaScript engines use hidden internal methods to handle function calls:
 * - [[Call]]: Triggered when you call a function normally: User().
 * - [[Construct]]: Triggered when you use the 'new' keyword: new User().
 *
 * You can verify this using 'new.target':
 */
function TypeCheck() {
  if (!new.target) {
    return "Called as normal function ([[Call]])";
  }
  return "Called as constructor ([[Construct]])";
}

/**
 * CONCEPT 7: The Overwrite Problem (Why 'new' is Mandatory)
 * --------------------------------------------------------
 * If you forget 'new', you are not creating a new object.
 * Instead, you are executing the function in the GLOBAL context.
 */
function OverwriteDemo(name) {
  this.tempName = name;
  return this;
}

// Without 'new', both calls modify the SAME global 'this'
const call1 = OverwriteDemo("Original");
const call2 = OverwriteDemo("Overwritten");

// console.log(call1.tempName); // Expected "Original", but gets "Overwritten"
// This is why 'new' is crucial for Instance Isolation.

/**
 * ============================================================================
 * SUMMARY:
 * Objects are the core of JS OOPS. Constructor functions and 'new' allow us
 * to create isolated, reusable instances without polluting the global scope.
 * ============================================================================
 */
