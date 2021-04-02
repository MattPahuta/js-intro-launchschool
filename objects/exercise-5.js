// Exercise 5 - Create a new object named myObj that used myProtoObj as its prototype 
let myProtoObj = {
  foo: 1,
  bar: 2,
};
console.log(myProtoObj);

let myObj = Object.create(myProtoObj);
myObj.new = 'new property!'
console.log(myObj);
console.log(myObj.foo);

