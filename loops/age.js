// Exercise 1 - use a for loop to display the future ages

let readlineSync = require('readline-sync');
let age = readlineSync.question('What is your age? ');
age = parseInt(age);

console.log(`You are ${age} years old.`)

// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 20 years, you will be ${age + 20} years old.`);
// console.log(`In 30 years, you will be ${age + 30} years old.`);
// console.log(`In 40 years, you will be ${age + 40} years old.`);

for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}

