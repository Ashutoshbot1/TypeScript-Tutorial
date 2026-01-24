/*
 * Lets us deep dive into objects.
 */

//
const chai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

/* Javascipt infers the type of chai as */
// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }

/*
    2.Declaring objects with `explicit types` and initializing them later.
    * While declaring an object with explicit types , keys are seperated by semi-colon
 */

let explictilyTypedChai: {
  name: string;
  price: number;
  isHot: boolean;
};

explictilyTypedChai = {
  name: "Masala Chai",
  price: 20,
  isHot: true,
};

/* 
    3. Duck Typing (BARE MINIMUM REQUIREMENTS SHOULD BE SATISFIED)
    * If it looks like a duck and quacks like a duck, then it is a duck.
    * Below example shows that if an object satisfies the bare minimum requirements of a type,
    *  it is considered to be of that type.
    * It does not care about the extra properties.
    * And it do not throw error for extra properties.
    * But it will throw error if the object is missing any of the required properties.
    
*/

type Cup = {
  size: string;
};

let smallCup: Cup = {
  size: "small",
};

const detailedCup = {
  size: "large",
  material: "ceramic",
};

smallCup = detailedCup;

/*
    4. Seperation
    * This one of the good practice to follow.
    * Instead of writing the whole object type in one line, we can seperate it into different types.
    * This makes the code more readable and maintainable.
*/

type Item = { name: string; quantity: number };

type Address = { street: string; city: string; pincode: number };

type User = {
  id: string;
  address: Address;
  items: Item[];
};

/* 
    5. Partial (Utility Type)
    * Partial is a utility type that makes all properties of a type optional.
    * Below you can see example of partial type.
 */

type UserInfo = {
  name: string;
  age: number;
  email: string;
};

function getUserEmail(user: Partial<UserInfo>): string | undefined {
  return user.email;
}

getUserEmail({ email: "John" });
getUserEmail({ name: "John" });

/*
 * Here we are passing an empty object.
 * And it is valid because all properties are optional.
 */
getUserEmail({});

/*
    6. Required (Utility Type)
    * Required is a utility type that makes all properties of a type required.
    * Below you can see example of required type.
 */

type NewUserInfo = {
  name?: string;
  age?: number;
  email?: string;
};

function getNewUserEmail(user: Required<NewUserInfo>): string | undefined {
  return user.email;
}

/*
 * Uncommenting the below lines will throw an error because all properties are required.
 * Even if the type NewUserInfo is having optional properties,
 * Required<NewUserInfo> will make all properties required.
 */

// getNewUserEmail({ email: "John" });
// getNewUserEmail({ name: "John" });
// getNewUserEmail({});

getNewUserEmail({ name: "John", age: 25, email: "John" });

/*
    7. Pick (Utility Type)
    * Pick is a utility type that picks a set of properties from a type.
    * Below you can see example of pick type.
    * Where just defining name and price is enough to satisfy the typescript check.
    * It is similar to partial type, but instead of making all properties optional,
    * Pick makes only the selected properties optional.
 */

type Coffee = {
  name: string;
  price: number;
  isHot: boolean;
  type: string;
  size: string;
};

type PickedCoffee = Pick<Coffee, "name" | "price">;

const myCoffee: PickedCoffee = {
  name: "Masala Chai",
  price: 20,
};

/*
    8. Omit (Utility Type)
    * Omit is a utility type that omits a set of properties from a type.
 */

type OmittedCoffee = Omit<Coffee, "name" | "price">;

const myOmittedCoffee: OmittedCoffee = {
  isHot: true,
  type: "Masala",
  size: "Large",
};

/*
 * Uncommenting the below lines will throw an error because name cannot be read.
 * Omit<Coffee, "name" | "price"> will not allow name to be read.
 */

// const myOmittedCoffee2: OmittedCoffee = {
//   isHot: true,
//   type: "Masala",
//   size: "Large",
//   name: "Masala Chai",
// };

/*
 * Uncommenting the below lines will throw an error
 * because properties other than name and price are required.
 */

// const myOmittedCoffee3: OmittedCoffee = {
//   isHot: true,
//   type: "Masala",
// };
