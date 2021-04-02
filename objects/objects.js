// *** Objects 101 *** //

// Object literal syntax 
let person = {
  name:    'Jane',
  age:     37,
  hobbies: ['photography', 'genealogy'],
};

person.height = '5 ft'

person['gender'] = 'female' // 'female'

// { name: 'Jane', age: 37, hobbies: ['photography', 'genealogy'], height: '5 ft', gender: 'female' }

// *** Delete keyword to remove from object *** //

delete person.age // true
delete person['gender'] // true
delete person['hobbies'] // true

person // { name: 'Jane', height: '5 ft' }

// *** Prototypes *** 

// Object.create to create a new object that inherits from an existing object.

let bob = { name: 'Bob', age: 22 };
let studentBob = Object.create(bob);
studentBob.year = 'Senior';

console.log(studentBob.name); // => 'Bob'

// *** Iteration

// for/in loop
let person = {
  name: 'Bob',
  age: 30,
  height: '6 ft'
};

for (let prop in person) {
  console.log(person[prop]);
}                             // => Bob
                              //    30
                              //    6 ft

// Use hasOwnProperty method to access only properties defined on the object, not inherited from a parent
let obj1 = { a: 1, b: 2 }
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(obj2[prop]);
  }
} // => 3
  //    4