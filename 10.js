// (10) ----------------------------------------------------------------------
// Escriba una función que convierta un objeto en una matriz, 
// donde cada elemento representa un par clave-valor.
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// --------------------------------------------------------------------------

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5 
  }
  
  console.log(Object.entries(obj));
  