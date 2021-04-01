// Reimplement factorial function from exercise 2 to use recursion

// function factorial(num) {
//   let result = 1;
//   for (let counter = num; counter > 0; counter -= 1) {
//     result *= counter;
//   }

//   return result;
// }

function factorial(num) {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
}


console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320
