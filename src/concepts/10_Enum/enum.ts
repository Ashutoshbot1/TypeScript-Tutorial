/*
 * Enums (short for Enumerations) allow us to define a set of named constants.
 * They make it easier to document intent and create a set of distinct cases.
 */

/*
 * 1. Basic Numeric Enum & Incremental Values
 * By default, enums are numeric and start at 0.
 * They auto-increment if a value is not predefined.
 */
enum Status {
  PENDING, // 0
  ACTIVE, // 1
  FAILED, // 2
}

/*
 * 2. Predefined & Incremental Values
 * If you set a starting value, the others will increment from there.
 */
enum StatusCode {
  SUCCESS = 200,
  CREATED, // 201
  ACCEPTED, // 202
}

/*
 * 3. Standard Practice: Naming Conventions
 * - Use PascalCase for the Enum name (e.g., UserRole).
 * - Use ALL_CAPS for members to signify they are constants (e.g., ADMIN).
 */
enum LOG_LEVEL {
  INFO,
  WARN,
  ERROR,
}

/*
 * 4. Why Enums can be DANGEROUS (Numeric Enums)
 * Numeric enums have historically been less type-safe.
 * Modern TypeScript catches out-of-bounds assignments, but they still
 * allow any 'number' if the type is not strictly checked or in older versions.
 */
let currentStatus: Status = Status.ACTIVE;
// currentStatus = 50; // Error TS2322 in modern TSC: Type '50' is not assignable to type 'Status'.

/*
 * 5. String Enums (Safer & Better for Debugging)
 * String enums do not have auto-incrementing behavior, but they are more
 * descriptive during debugging and offer better type safety.
 */
enum OrderStatus {
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

/*
 * 6. Use in Functions & Nominal Typing Gotcha
 * Even if a value is the SAME as the initialized value in an enum,
 * passing the raw value directly will throw an error if the function
 * expects the Enum Type.
 */

function updateOrderStatus(status: OrderStatus) {
  console.log(`Order status updated to: ${status}`);
}

// updateOrderStatus("SHIPPED");
// Error: Argument of type '"SHIPPED"' is not assignable to parameter of type 'OrderStatus'.

/*
 * WHY DOES THIS THROW AN ERROR?
 * TypeScript treats Enums as "Nominal" types in this context.
 * Even though the raw value is "SHIPPED", TypeScript wants to ensure
 * you use the explicit Enum member (OrderStatus.SHIPPED).
 *
 * This prevents "magic strings" and ensures that if the Enum value changes
 * in the future (e.g., from "SHIPPED" to "IN_TRANSIT"), your code
 * using 'OrderStatus.SHIPPED' will still work or be caught by the compiler.
 */

updateOrderStatus(OrderStatus.SHIPPED); // Valid

console.log({
  pending: Status.PENDING,
  success: StatusCode.SUCCESS,
  created: StatusCode.CREATED,
  shipped: OrderStatus.SHIPPED,
});
