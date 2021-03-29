// Exercise 3 - add validation

function evenOrOdd(num) {
  if (!Number.isInteger(num)) {
    console.log('Error. Enter a valid integer.');
    return;
  }

  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}


