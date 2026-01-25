/**
 * ============================================================================
 * OBJECT ORIENTED PROGRAMMING IN TYPESCRIPT (OOPS)
 * ============================================================================
 */

/**
 * 1. Simple Class Declaration
 * ---------------------------
 * In TypeScript, classes are blueprints for creating objects.
 * Unlike JavaScript, you MUST declare properties (member variables)
 * outside the constructor.
 */

class User {
  // Member Properties (Explicitly declared)
  name: string;
  email: string;
  city: string = "Delhi"; // Default value

  /**
   * Constructor: A special method to initialize properties.
   * It runs automatically when you create a new instance with 'new'.
   */
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  // Method: Functionality associated with the class
  displayInfo(): void {
    console.log(`User: ${this.name}, Email: ${this.email}, City: ${this.city}`);
  }
}

/**
 * 2. Creating an Instance (Object)
 * --------------------------------
 * We use the 'new' keyword to create an object from the class blueprint.
 */
const user1 = new User("Ashutosh Singh", "ashutosh@google.com");

user1.displayInfo(); // Output: User: Ashutosh Singh, Email: ashutosh@google.com, City: Delhi

/**
 * NEXT STEPS:
 * For a detailed breakdown of Public, Private, and Protected modifiers,
 * see: 2_access_modifiers.ts
 */
