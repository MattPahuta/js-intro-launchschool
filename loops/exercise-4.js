// Exercise 4
// Does the code below produce an error? Why/why not?
// - No error. Even though there's no increment/decrement expression, all three components of a for loop are optional
// What is the output?
// - 1, 2, 3, 4, 5, each on thier own line, is the output
// the first run of the loop logs i += 1, resulting in 1 logged to the console
// the i += 1 expression within the console.log also increments i for each pass

for (let i = 0; i < 5;) {
  console.log(i += 1);
}