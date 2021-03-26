// Exercise 2 

function getUserName(prompt) {
  let readlineSync = require('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getUserName('What is your first name? ');
let lastName = getUserName('What is your last name? ');
console.log(`Hello, ${firstName} ${lastName}!`);


// convolutd browser version that works but probably is terrible:
// let firstName = prompt('What is your first name?');
// let lastName = prompt('What is your last name?');

// let getUserName = function (firstName, lastName) {
//   firstName = firstName;
//   lastName = lastName;
//   return `Hello, ${firstName} ${lastName}!`
// }

// console.log(getUserName(firstName, lastName));

