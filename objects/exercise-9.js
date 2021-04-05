// Exercise 9 - What does the following program log to the console and why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi'; // updates foo.a value to 'hi'
  argument2 = 'hi'; // reassigns arg2 variable but can't mutate the string 'hello' of qux variable
}

bar(foo, qux); // foo arg updates foo.a = 'hi', qux arg updates 

console.log(foo.a); // orig: 'hello', post-func: 'hi', 
console.log(qux); // orig: 'hello', post-func: 'hello', string primitive not mutable 
