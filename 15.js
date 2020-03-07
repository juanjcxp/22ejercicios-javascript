// (15) ----------------------------------------------------------------------
// Cree una función para multiplicar todos los valores en una matriz por 
// la cantidad de valores en la matriz dada

// multiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
// --------------------------------------------------------------------------

const multiplyByLength = (arr) => {
    let newArr = [];
    arr.forEach(e => {
      newArr.push(e * arr.length);
    });
    return newArr;
  }
  console.log(multiplyByLength([2, 3, 1, 0]));
  