// Will this program produce and error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// No error will result. The two const variables exist in different scopes, so there's no conflict