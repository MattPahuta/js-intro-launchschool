// Exercise 8
// Write a function to determine the lengths of all elements in an array of string values, then keep only the odd values
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
// console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  return arr.reduce((accumulatorArr, currentValue) => {
    let length = currentValue.length;
    if (length % 2 === 1) {
      accumulatorArr.push(length);
    }

    return accumulatorArr;
  }, []);
}

console.log(oddLengths(arr));