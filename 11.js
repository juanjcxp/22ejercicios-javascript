// (11) ----------------------------------------------------------------------
// Cree la función que toma una matriz con objetos y devuelve la suma 
// de los presupuestos de las personas.

// getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]) ➞ 65700
// --------------------------------------------------------------------------

const getBudgets = (arr) => {
    let sumTot = 0;
    arr.forEach((e, index) => {
      sumTot += arr[index]['budget'];
    });
    return sumTot;
  }
  
  console.log(getBudgets([
    { name: "juan", age: 21, budget: 23000 },
    { name: "luis",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]));