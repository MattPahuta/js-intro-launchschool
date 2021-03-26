// What does this code log to the console? 
let bar = 1;
function foo() {
  let bar = 2;
}

foo(); // executing the foo function does not affect the output since the bar variable within it is locally scoped, seperate from the global bar variable
console.log(bar); // logs '1' to the console