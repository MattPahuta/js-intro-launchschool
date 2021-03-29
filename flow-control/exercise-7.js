// Exercise 7 

function longWordsUppercased (str) {
  // if string.length > 10 - return str uppercase 
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
  // else, return orginal str
}

console.log(longWordsUppercased('Hello world'));
console.log(longWordsUppercased('goodbye'));
console.log(longWordsUppercased('hi'));
console.log(longWordsUppercased('hi there, this is fun!'));


// Alt solution using ternary: 

// function capsLong(string) {
//   return ((string.length > 10) ? string.toUpperCase() : string);
// }
