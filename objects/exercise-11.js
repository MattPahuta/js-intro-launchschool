// Exercise 11 - Write code to replace value 6 with 606:

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;

console.log(obj)
console.log(obj.bar[3].xyz)
