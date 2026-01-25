/**
 * ============================================================================
 * ABSTRACT CLASSES IN TYPESCRIPT
 * ============================================================================
 */

/**
 * 1. What is an Abstract Class?
 * ----------------------------
 * An abstract class is a "base" class that cannot be instantiated directly.
 * Think of it as a partial blueprint or a set of rules for other classes to follow.
 *
 * - Use the 'abstract' keyword to define it.
 * - Used strictly for inheritance (to be extended by other classes).
 */

abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
  ) {}

  /**
   * Abstract Method:
   * - Does NOT have a body.
   * - MUST be implemented by any class that extends this abstract class.
   */
  abstract getSepia(): void;

  // Regular Method: Abstract classes can also have normal methods with implementation
  getReelTime(): number {
    // Some complex logic to calculate Reel time
    return 8;
  }
}

/**
 * 2. Why use it?
 * --------------
 * You cannot do this:
 * const myPhoto = new TakePhoto("test", "test"); // ERROR: Cannot create an instance of an abstract class.
 *
 * Instead, you must create a subclass that "implements" the abstract parts.
 */

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
  ) {
    super(cameraMode, filter);
  }

  // Implementing the required abstract method
  getSepia(): void {
    console.log("Sepia filter applied!");
  }
}

/**
 * 3. USAGE
 */
const myInsta = new Instagram("Portait", "NoFilter", 3);

myInsta.getSepia(); // Implementation provided by Instagram class
console.log(`Reel Time: ${myInsta.getReelTime()}`); // Uses implementation from base TakePhoto class

/**
 * SUMMARY:
 * - Abstract classes provide a contract for child classes while also allowing shared implementation.
 * - They are the foundation of many Design Patterns in Software Engineering.
 */
