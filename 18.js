// (18) ----------------------------------------------------------------------
// Cree una función que filtre las cadenas de una matriz y 
// devuelva una nueva matriz que solo contenga enteros.

// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
// --------------------------------------------------------------------------

const filterList = (arr) => {
    let newArr = [];
    arr.forEach(e => {
      if (typeof e === 'number') {
        newArr.push(e);
      } 
    });
    return newArr;
  }
  console.log(filterList([1, 2, 3, "x", "y", 10]));
  