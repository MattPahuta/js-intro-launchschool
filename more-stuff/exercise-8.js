// Exercise 8
// Function that returns true if the value passed to it as an argument is NaN, false if it is not
// Don't use Number.isNaN(value) or Object.is(value, NaN) 

function isNotANumber(value) {
  return value !== value; // NaN is the only JS value that is not === to itself
}