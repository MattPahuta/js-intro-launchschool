// Exercise 4 - Create an array from the keys of the object, all keys converted to uppercase. Must not mutate obj. 

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj)
let objKeysUpper = objKeys.map(key => key.toUpperCase());

console.log(objKeysUpper);
console.log(obj);