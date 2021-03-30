// Loops - Notes and Practice

// While Loops
// let counter = 1;
// while (counter <= 10) {
//   console.log(counter);
//   counter = counter + 1;
// }

let counter = 1;
while (counter <= 10) {
  console.log(counter);
  counter += 1;  // same way to express: counter = counter + 1;
}

// let counter = 1;
// while (counter <= 10) {
//   console.log(counter);
//   counter++; // increment by 1
// }

// Looping over arrays with while loops
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']

// Do/While Loops

let answer;
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');


// for loops

for (initialization; condition; increment) {
  // loop body
}

initialization;
while (condition) {
  // loop body
  increment;
}

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'NAVEED', 'PETE', 'VICTOR']

// The continue keyword 
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] === 'Naveed') {
    continue;
  }

  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames); // => ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']

for (let i = 0; i < someNumber; i += 1) {
  if (someCondition) {
    // some code here
    if (anotherCondition) {
      // some more code here
    }
  }
}

// Below with continue instead of above 
for (let i = 0; i < someNumber; i += 1) {
  if (!someCondition) continue;
  // some code here

  if (!anotherCondition) continue;
  // some more code here
}