let array = [3, 1, 5, 9, 2, 6, 4, 7]
let indexOfFive = -1; // we use this value when the array doesn't have the desired value

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break; // break out of the loop once the index of 5 has been located 
  }
}

console.log(indexOfFive);

// forEach 

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

names.forEach(function(name) {
  console.log(name);
});

// forEach loops through each element in an array, in sequence, starting with the first element
// For each name, forEach invokes the anonymous function with the name as an argument
// Teh anonymous function can do whatever it need to do with the argument

// Recursion - a simple recursive function example: 
function doubler(number) {
  console.log(number);

  if (number <= 50) {
    doubler(number * 2);
  }
}

doubler(5); // => 5
            // => 10
            // => 20
            // => 40
            // => 80