
// What does the following code log to the console? 
// Nothing. When the function is called and a word is passed in, the word is concatenated with exclamation points but then the return statement is hit and the function stops running before reaching the console.log
function scream(words) {
  words = words + '!!!!';
  return; // the return statement exits the function
  console.log(words);
}

scream('Yipeee');

