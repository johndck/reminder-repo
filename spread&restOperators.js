// The spread operator (makes copy)
// The spread opertor is use in multiple different situations

// This the key - spread is used in multiple different situations

// Spread is all about spreading data from one source to the new source.

// The spread method allows an iterable to be expanded in places.
// It can be used in 3 contexts:

//spread array into function arguments
//spread arrays into actual arrays
//spread objects into other objects

// EXPANDING is the key - opening it up

// How it works dopends on where we are spreading the iterable into...

// *** Spreading an array into a Function call as separate arguments

// so if we had an array of numbers and we wanted to find out the max

const numberArray = [1, 6, 8, 50, 60];

// to find out the maximum number we would have to spread the number array into the math.max method
console.log(...numberArray);
console.log(Math.max(...numberArray));

const mainAddress = "51 High Street";

console.log(...mainAddress);

// **** Spread an iterable into an array

// Allows us to create a new array from another array

// Here are some examples:

const names = ["john", "stephen", "katy"];
const lastnames = ["dick", "hampton", "smith"];

// We can create a new array

const combined = [...names, ...lastnames];
console.log(combined);
console.log(combined.reverse());

// Its is a quick way to create a copy

// We can take a string and spread it into an array

const str = "hello";
const newArray = [...str];
console.log(newArray);
console.log(newArray.reverse());
console.log(newArray.join(""));

// Spread into new objects

// allows us to copy, combine, tweak with the ... spread operator .. very useful

// Here is how you can quickly copy an object and also then modify it .. remember the password form example

const personRecord = {
  name: "John",
  postcode: "g775nz",
  age: 50,
};

const updatedPersonRecord = { ...personRecord };
const newUpdatePersonRecord = {
  ...updatedPersonRecord,
  address: "19 Glamis Ave",
};

console.log(updatedPersonRecord);
console.log(newUpdatePersonRecord);

// order does matter with the spread operator on objects

/// Rest operator

// meaning collect the rest of the array...

// rest helps us contain all the arguments passed to a function

const realArray = [1, 34, 45, 5, 2, 36, 90, 101];
console.log(realArray[0], ...realArray);
