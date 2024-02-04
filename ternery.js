// The Ternary operator

// Solves the problem of an if/else statement not returning a value

// requires 3 things - a condition, true value and false value

// Useful example

const age = 50;

const old = age >= 50 ? "middle-aged!" : "youngster";

console.log(old);

// Short circuiting with some logical operators - && and || operator

// The && operator short-circuits when the first operand/value is false & immediately return that value
// it only works when the first value is **FALSE** it short circuits

console.log(false && "some string");

// works for truthy and falsy values

// || operator - short circuting works in the opposite way

// if 1st value is true, it will short circuit and return true.

console.log(true || "second value");

//
// but this does not always work for falsy values
// this is where the nullish coalescing operator provides a solution

// it will return the right hand side

// **** will need to revisit this as it explained really poorly along with optional chaining
