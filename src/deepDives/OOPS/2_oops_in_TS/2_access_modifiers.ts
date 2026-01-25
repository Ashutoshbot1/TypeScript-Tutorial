/**
 * ============================================================================
 * ACCESS MODIFIERS IN TYPESCRIPT
 * ============================================================================
 *
 * Access modifiers are keywords used to set the accessibility (visibility)
 * of classes, methods, and other members.
 */

class Employee {
  // 1. PUBLIC: Accessible from anywhere (Default behavior)
  public name: string;

  // 2. PRIVATE: Accessible ONLY within this class
  private salary: number;

  // 3. PROTECTED: Accessible within this class and subclasses (inheritance)
  protected department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  public getSalaryInfo(): string {
    // Can access private 'salary' inside the class
    return `${this.name}'s salary is hidden, but I can access it here: ${this.salary}`;
  }
}

/**
 * INHERITANCE DEMONSTRATION
 */
class Manager extends Employee {
  constructor(name: string, salary: number, department: string) {
    super(name, salary, department);
  }

  public getDeptInfo(): void {
    // console.log(this.salary); // ERROR: 'salary' is private and only accessible in 'Employee'
    console.log(`Department: ${this.department}`); // OK: 'department' is protected
  }
}

/**
 * USAGE
 */
const emp = new Employee("John Doe", 50000, "HR");

console.log(emp.name); // OK: public
// console.log(emp.salary); // ERROR: private
// console.log(emp.department); // ERROR: protected

const mgr = new Manager("Jane Smith", 80000, "Engineering");
mgr.getDeptInfo(); // Internal access to protected member works

/**
 * HARD PRIVACY (#) vs TS PRIVATE
 * -------------------------------
 * - 'private' is a TypeScript-only feature for compile-time checks.
 * - '#' is a native JavaScript feature (ECMAScript) that provides runtime privacy.
 */
class SecureRecord {
  #id: number = 101; // Truly private even in runtime JS
  private secret: string = "TS-Private"; // Only private during TS development

  getId() {
    return this.#id;
  }
}
