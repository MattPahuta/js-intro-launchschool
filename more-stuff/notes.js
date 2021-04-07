// *** Method Chaining *** //

let str = 'Pete Hanson';
let names = str.toUpperCase().split(' ').reverse().join(', ');
console.log(names); // => HANSON, PETE

// Some syntactic variations of above:
// let str = 'Pete Hanson';
// let names = str.toUpperCase()
//                .split(' ')
//                .reverse()
//                .join(', ');
// console.log(names);

// let str = 'Pete Hanson';
// let names = str.toUpperCase()
//   .split(' ')
//   .reverse()
//   .join(', ');
// console.log(names);

// *** Regex *** //

/o/.test('bobcat') // true

/l/.test('bobcat') // false

if (/b/.test('bobcat')) {
  // this branch executes since 'b' is in 'bobcat'
  console.log("Yes, it contains the letter 'b'");
} else {
  // this branch does not execute since 'bobcat' contains 'b'
  console.log("No, it doesn't contain the letter 'b'");
}

// ** match method takes a regex as teh argument and returns an array that describes the match
"bobcat".match(/x/)         // No match
// null

"bobcat".match(/[bct]/g)    // Global match
// [ 'b', 'b', 'c', 't' ]

"bobcat".match(/b((o)b)/)   // Singular match with groups
// [ 'bob', 'ob', 'o', index: 0, input: 'bobcat', groups: undefined ]

function has_a_or_e(string) {
  let results = string.match(/[ae]/g);
  if (results) {
    // a non-null return value from match is truthy
    console.log(`We have a match! ${results}`);
  } else {
    // a null return value from match is falsy
    console.log('No match here.');
  }
}

has_a_or_e("basketball"); // => We have a match! a,e,a
has_a_or_e("football");   // => We have a match! a
has_a_or_e("hockey");     // => We have a match! e
has_a_or_e("golf");       // => No match here.

// *** Dates ****

function getDayOfWeek(date) {
  let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return daysOfWeek[date.getDay()];
}

let date = new Date('December 25, 2012');
console.log(getDayOfWeek(date)); // => Tuesday


// Exception Handling 

let names = ['bob', 'joe', 'steve', undefined, 'frank'];
names.forEach(name => {
  console.log(`${name}'s name has ${name.length} letters in it.`);
}); // => bob's name has 3 letters in it.
    //    joe's name has 3 letters in it.
    //    steve's name has 5 letters in it.
    //    TypeError: Cannot read property 'length' of undefined
    //        at names.forEach (repl:2:42)
    //        at Array.forEach (<anonymous>)

let names = ['bob', 'joe', 'steve', undefined, 'frank'];

names.forEach(name => {
  try {
    console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch (exception) {
    console.log('Something went wrong');
  }
}); // => bob's name has 3 letters in it.
    //    joe's name has 3 letters in it.
    //    steve's name has 5 letters in it.
    //    Something went wrong
    //    frank's name has 5 letters in it.
