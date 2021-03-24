// The below code will result in an error
{
  let foo = 'bar';
}

console.log(foo);

/*
- The variable (foo) that the console.log is attempting to access is not in score. 
- The variable foo is block scoped and inaccessble to console.log()
- Outside the block, the variable foo does not exist
*/