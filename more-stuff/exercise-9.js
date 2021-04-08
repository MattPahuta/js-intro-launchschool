// Exercise 9 - Detect a -0 value without using Object.is

function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

// Alternatively 
function isNegativeZero(value) {
  return (value === 0) && (1 / value === -Infinity);
}

