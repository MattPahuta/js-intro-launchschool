// Exercise 3 
// Why does the code below cause an infinite loop?

let counter = 0;

// while (counter = 1) { // counter assigned value of 1 and reassigned to 1 every loop iteration, a continuous truthy value
//   console.log(counter); // counter logged to console
//   counter += 1; // counter incremented by one, counter is 2

//   if (counter > 2) { // counter is always 2, so the condition to break (counter > 2) is never reached, resulting in an infinite loop
//     break;
//   }
// }