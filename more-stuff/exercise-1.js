// Exercise 1 - What does this code log to the console and why? 

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2); // logs [1, 4, 3] because both variables are pointers to the same memory location 

