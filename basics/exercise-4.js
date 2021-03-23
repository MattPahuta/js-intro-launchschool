// Explain why below code logs '510' instead of 15 
console.log('5' + 10); 

// this is due to implicit type coercion - since one of the operands is a string, JavaScript coerces the number to a string.
// the two strings are then concatenated to become the string '510'