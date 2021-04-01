// Exercise 4 - use map to assign even/odd
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
// Expected output
// [
//   'odd', 'odd', 'even', 'odd',
//   'even', 'even', 'even', 'odd',
//   'odd', 'even', 'even',
// ]

let newArray = [];
for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0){
    newArray.push('even');
  } else {
    newArray.push('odd');
  }
}

console.log(newArray);

let evenOddArray = myArray.map(function(value){
  if (value % 2 === 0) {
    return 'even';
  } else {
    return'odd';
  }
});

console.log(evenOddArray);
