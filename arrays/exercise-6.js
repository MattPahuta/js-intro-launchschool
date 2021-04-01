// Exercise 6 - Use map and filter
// First determine the lengths of all elements in an array of string values
// Then discard the even values (keep the odd)


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// my solution
function getLengths(array) {
  let lengthsArray = array.map(element => element.length) // [1, 4, 5, 3, 2]
  return lengthsArray.filter(function(value) {
    if (value % 2 !== 0) {
      return value;
    }
  })

}

console.log(getLengths(arr));

// solution code
// function oddLengths(strings) {
//   let lengths = arr.map((letters) => letters.length);
//   let oddLengths = lengths.filter((number) => number % 2 === 1);
//   return oddLengths;
// }

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr));