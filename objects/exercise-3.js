// Exercise 3 - Object literal syntax to create an object that behaves as an array in a for statement.

let myArray = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

