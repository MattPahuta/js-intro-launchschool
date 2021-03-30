function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;
// tries += 1;

// while (result <= 2) {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// }

// Initial attempt with for loop - works, but not ideal:
// for (let result = 0; result <= 2; ) {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// }

// Solution with do...while loop
do  {
  result = randomNumberBetween(1, 6);
  console.log(result); // for testing
  tries += 1; 
} while (result <= 2);


console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

/*
The code uses a randomNumberBetween function to generate a number between its first and second arguments. It uses a while loop to try to generate a number greater than 2. Refactor the code so that you don't need to call randomNumberBetween from two different locations, lines 6 and 10. Do not change the arguments you pass to randomNumberBetween.
*/