/**
 * ============================================================================
 * READONLY AND STATIC IN TYPESCRIPT
 * ============================================================================
 */

/**
 * 1. READONLY MODIFIER
 * --------------------
 * The 'readonly' keyword makes a property immutable.
 * - It can only be assigned a value at the time of declaration or within the constructor.
 * - It cannot be modified once the object is created.
 */

class Config {
  public readonly dbName: string;
  public readonly apiKey: string = "DEFAULT_KEY_123"; // Declaration initialization

  constructor(name: string) {
    this.dbName = name; // Initialization in constructor
  }

  /*
    updateConfig() {
        this.dbName = "NewDB"; // ERROR: Cannot assign to 'dbName' because it is a read-only property.
    }
    */
}

const myConfig = new Config("Production_DB");
console.log(myConfig.dbName); // OK: Read access
// myConfig.apiKey = "New_Key"; // ERROR: Read-only

/**
 * 2. STATIC KEYWORD
 * -----------------
 * The 'static' keyword defines properties or methods that belong to the
 * CLASS ITSELF, rather than to instances (objects).
 *
 * - You access them using the Class name (e.g., User.count).
 * - They are shared across all instances.
 */

class AppUser {
  public name: string;
  // Static property: Tracks the total number of users created across the whole app
  public static userCount: number = 0;

  constructor(name: string) {
    this.name = name;
    AppUser.userCount++; // Accessing static member using Class name
  }

  // Static Method: A helper function that doesn't need instance data
  public static getAppVersion(): string {
    return "v1.0.5";
  }
}

const u1 = new AppUser("Alice");
const u2 = new AppUser("Bob");

console.log(u1.name); // Instance property access
console.log(AppUser.userCount); // Static property access: Output: 2
console.log(AppUser.getAppVersion()); // Static method call

/**
 * 3. COMBINING READONLY AND STATIC
 * --------------------------------
 * Often used for "Constants" within a class that shouldn't change.
 */

class AppConstants {
  // A constant that belongs to the class and cannot be modified
  public static readonly PLATFORM_NAME = "MyEnterpriseApp";
}

console.log(AppConstants.PLATFORM_NAME);
// AppConstants.PLATFORM_NAME = "NewName"; // ERROR: Cannot assign to 'PLATFORM_NAME' because it is a read-only property.
