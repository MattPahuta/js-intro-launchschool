// Run this code in your browser with an HTML file

let a = prompt('Enter a number');

if (a === '3') {
  console.log("a is 3");
} else if (a === '4') {
  console.log("a is 4");
} else {
  console.log("a is neither 3, nor 4");
}

// Truthiness 

a = 5 // JavaScript coerces the value of 5 to true
if (a) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

b = 0 // value of 0 coerced to false
if (b) {
  console.log("how can this be true?");
} else {
  console.log("it is not true");
}

// && and || operators with truty/falsy values:
// > 3 && 'foo'  // last evaluated operand is 'foo'
// = 'foo'

// > 'foo' && 3  // last evaluated operand is 3
// = 3

// > 0 && 'foo'  // last evaluated operand is 0
// = 0

// > 'foo' && 0  // last evaluated operand is 0
// = 0


// > 3 || 'foo'  // last evaluated operand is 3
// = 3

// > 'foo' || 3  // last evaluated operand is 'foo'
// = 'foo'

// > 0 || 'foo'  // last evaluated operand is 'foo'
// = 'foo'

// > 'foo' || 0  // last evaluated operand is 'foo'
// = 'foo'

// > '' || 0     // last evaluated operand is 0
// = 0

// The Ternary Operator
// > 1 == 1 ? 'this is true' : 'this is not true'
// = 'this is true'

// > 1 == 0 ? "this is true" : "this is not true"
// = 'this is not true'
 
// > let message = true ? 'this is true' : 'this is not true'
// = undefined

// > message
// = 'this is true'

// > console.log(false ? 'this is true' : 'this is not true')
// this is not true
// = undefined

