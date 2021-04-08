// Exercise 6 - Write a function that searches an array of strings for every element that matches the regular expression given by its argument. Function should return all matching elements in an array.
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(wordsArray, matchPattern) {
  let matches = [];
  for (let i=0; i < wordsArray.length; i += 1) {
    if (matchPattern.test(wordsArray[i])) {
      matches.push(wordsArray[i]);
    }
  }

  return matches;
}


// alternative solution
function allMatches2(words, pattern) {
  return words.filter((word) => pattern.test(word))
}


console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
console.log(allMatches2(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']

