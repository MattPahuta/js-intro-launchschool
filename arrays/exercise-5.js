// Exercise 5 - Use filter method to return an array containing only integers

// Example
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]

function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  })
}
 
// initial attempt:
// let justIntegers = things.filter(function(value) {
//   if (Number.isInteger(value)) {
//     return value;
//   }
// });

console.log(findIntegers(things));