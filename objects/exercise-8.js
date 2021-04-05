// Exercise 8 - create a function that creates and returns a copy of an object.

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(srcObj, keysArr) {
  let newObj = {}; 

  if (keysArr) {
    keysArr.forEach(function(key) {
      newObj[key] = srcObj[key];
    });
    return newObj;
  } else {
    return Object.assign(newObj, srcObj);
  }
}


let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

