//What does the following program log to the console and why?

let foo = 'bar';
{
  let foo = 'qux'; // this is a different version of foo, scoped to the block
}

console.log(foo); // 'bar' is logged to the console since that is the versio of foo console.log is aware of
