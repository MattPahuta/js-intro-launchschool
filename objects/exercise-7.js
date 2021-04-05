// Exercise 7 - Add a qux property with value 3 to myObj object

let myProtoObj = {
  foo: 1,
  bar: 2,
};
console.log(myProtoObj);

let myObj = Object.create(myProtoObj);
myObj.new = 'new property!'

mbObj.qux = 3;


let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key); // this will iterate only keys 'new' and 'qux' since Object.keys method does not include keys from prototype
});

for (let key in myObj) {
  console.log(key); // this will iterate over all keys, including those from the prototype ('foo' 'bar')
}