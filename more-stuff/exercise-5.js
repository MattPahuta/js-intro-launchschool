// Exercise 5 - What does the following function do?

function doSomething(string) { // accepts a string as an argument
  return string.split(' ') // converts the string into a an array, splitting multiple words by space (' ') - ['hi', 'world']
                .reverse() // reverses the array order - ['world', 'hi']
                .map((value) => value.length); // map takes elements and runs the function, outputing a new array of string lengths - [5, 2]

console.log(doSomething('hi world')); // [5, 2] 

