// Exercise 9 - write code to determine if the number 3 appears in the arrays below

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkForNum3 (array) {
  return array.includes(3);
}

console.log(checkForNum3(numbers1)); // true
console.log(checkForNum3(numbers2)); // false
console.log(checkForNum3(numbers3)); // false


