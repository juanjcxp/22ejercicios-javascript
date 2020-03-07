// (8) ----------------------------------------------------------------------
// Cree una función que tome una matriz de matrices con números. 
// Devuelve una nueva matriz (única) con el mayor número de cada uno.
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
// --------------------------------------------------------------------------

const findLargestNums = (arr) => {
    let max = [];
    for (var i = 0; i < arr.length; i++) {
      max.push(Math.max(...arr[i]));
    }
    return max;
  }
  console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));