// Exercise 7 - Use reduce to compute the sum of the squaresof all of the numbers in an array
let array = [3, 5, 7];

function sumOfSquares(arr) {
  return arr.reduce((accumulator, num) => {
    return accumulator + num * num;
  }, 0);

}

// let arraySummed = array.reduce((accumulator, element) => accumulator + element, 0)

console.log(sumOfSquares(array));