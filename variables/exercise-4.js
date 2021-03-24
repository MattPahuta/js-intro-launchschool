// What happens when the following code is run and why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME); // logs 'Good Morning, Victor'
console.log('Good Afternoon, ' + NAME); // logs 'Good Afternoon, Victor'
console.log('Good Evening, ' + NAME); // logs 'Good Evening, Victor'

NAME = 'Joe'; // assignmen error, variable NAME is already assigned, the rest of the code will not execute
console.log('Good Morning, ' + NAME); 
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

