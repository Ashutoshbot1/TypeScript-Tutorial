/*
 * A type alias gives a name to any valid TypeScript type expression.
 */

type UserId = number;

// Object type alias
type User = {
  id: number;
  name: string;
};

// Union type alias
type Status = "idle" | "loading" | "success" | "error";

// Function type alias
type GreetFunction = (name: string) => string;

function greet(name: string): string {
  return `Hello ${name}`;
}

const greeting: GreetFunction = greet;
