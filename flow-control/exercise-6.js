// Exercise 6 - What does this code output to the console? 

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]); // This logs 'Not Empty' to the console. The if statement is only checking if the argument passed in to the function is an aray, not whether or not there is anything inside the array. It's an array and that resolves to truthy.

