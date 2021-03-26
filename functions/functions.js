// Mutating the Caller 
let oddNumbers = [1, 3, 5, 7, 9];
oddNumbers.pop();
console.log(oddNumbers); // => [1, 3, 5, 7]


// Function that mutates the argument passed in
function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive);
console.log(oneToFive); // => [9, 2, 3, 4, 5]

// Non-destructive function
function addToArray(array) {
  return array.concat(10); // concat creates a copy of the array, then mutates that copy
}

let oneToFive = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive)); // => [1, 2, 3, 4, 5, 10]
console.log(oneToFive);             // => [1, 2, 3, 4, 5]


// Function Composition 

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let sum = add(20, 45);
console.log(sum); // => 65

let difference = subtract(80, 10);
console.log(difference); // => 70

// Pass function call results to a function that does something more complicated:
function times(num1, num2) {
  return num1 * num2;
}

console.log(times(add(20, 45), subtract(80, 10))); // => 4550
// 4550 == ((20 + 45) * (80 - 10))

// the above code accomplishes the same results as the following verbose code:
let sum = add(20, 45);
let difference = subtract(80, 10);
let result = times(sum, difference);
console.log(result);

// A more complicated example:
add(subtract(80, 10), times(subtract(20, 6), add(30, 5))); // => 560
/* 
  1. pass two arguments to add: subtract(80, 10) and times (subtract(20, 6), add(30, 5)).
  2. first argument (subtract function call) returns 70.
  3. second argument (times function call, has two arguments: subtract(20,6) and add(30,5) ).
    - subtract returns 14
    - add returns 35
    - entire function call becomes times(14,35)
    - overall value of times call is 490
  4. Using the return values from steps 2 and 3, we get add(70, 490) which returns 560
*/

// *** Three Ways to Define a Function *** // 

// 1. Function Declaration - You don't have to declare function before calling it in your program
function functionName(zeroOrMoreArguments...) {
  // function body
}

// 2. Function Expression - You cannot invoke a function expression before it appears in your program
let greetPeople = function () {
  console.log("Good Morning!");
};

greetPeople();

// If a function doesn't begin with the word function, it's a function expression
// Even this is a function expression:
(function greetPeople() { // This is a function expression, not a declaration
  console.log("Good Morning!");
});

// Function expressions occur in higher-order functions, as well.
function makeGreeter(name) { // makeGreeter is a function declaration
  return function greeter() { // greeter is a function expression
    console.log(`Hello ${name}`);
  };
}

// 3. Arrow Functions 
let greetPeopleV2 = () => console.log("Good Morning!");

let add = (a, b) => a + b; // no return statement or curly braces needed, meets implicit return requirements (single expression)
let getNumber = (text) => { // with a sinle parameter, the parentheses are optional and often omitted
  let input = prompt(text);
  return Number(input);
};

let number1 = getNumber("Enter a number: ");
let number2 = getNumber("Enter another number: ");
console.log(add(number1, number2));



