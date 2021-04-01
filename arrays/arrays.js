// Arrays Notes 

// Change elements in an array
// > let array = [1, 2, 3]
// > array[1] = 4
// = 4

// > array
// = [ 1, 4, 3 ]

// Add elements to an array
// > array[array.length] = 10
// = 10

// > array
// = [ 1, 4, 3, 10 ]

// To freeze elements in an array, use the Object.freeze method *** only works one level deep ***
// > const MyArray = Object.freeze([1, 2, 3])
// > MyArray[1] = 5
// > MyArray
// = [1, 2, 3]

// *** Iterating Arrays ***

// forEach
let array = [1, 2, 3];
array.forEach(function(num) {
  console.log(num); // on first iteration  => 1
                    // on second iteration => 2
                    // on third iteration  => 3
}); // returns `undefined`

// Also, as an arrow function
let array = [1, 2, 3];
array.forEach(num => console.log(num + 2)); // on first iteration  => 3
                                            // on second iteration => 4
                                            // on third iteration  => 5


// *** Array Equality *** //

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));    // => true
console.log(arraysEqual([1, 2, 3], [4, 5, 6]));    // => false
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4])); // => false

// Works best when all array elements are primitive values, otherwise the return result might not be what's expected:
arraysEqual([1, 2, [3, 4], 5], [1, 2, [3, 4], 5]) // => false

