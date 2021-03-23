// Exercise Two - JS basics
let number = 4936;

let ones = number % 10; // 6
// 4936 % 10; // 6

let tens = number % 10; // 3
// (4936 - 6) / 10; // 493
// 493 % 10; // 3

number = (number - tens) / 10; // 49
// (493 - 3) / 10; // 49

let hundreds = number % 10; // 9
// 49 % 10; // 9

let thousands = (number - hundreds) / 10; // 4
// (49 - 9) / 10; // 4



