// Exercise 10 - How many primitive values are there in the following expression? How many objects?
// primitives : 6
// objects: 4

[ // object (outer array)
  1, // primitive
  2, // primitive
  [ // object (first nested array)
    "a", // primitive
    [ // object (second nested array)
      "b", // primitive
      false // primitive
    ]  
  ],  
  null, // primitive 
  {} // object
]
