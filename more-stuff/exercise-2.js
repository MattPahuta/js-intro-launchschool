// Exercise 2 - What do the following error message and stack trace tell you?
$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^       // pointing to where JS thinks the error in the code is

ReferenceError: greeting is not defined // greeting variable is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15) // error detected on line 4 at char 15
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1) // called exercise2 anonymous function on line 13
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)
