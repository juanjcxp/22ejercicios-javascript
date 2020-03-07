// (17) ----------------------------------------------------------------------
// Cree una función que tome una matriz y devuelva la diferencia entre los 
// números más grandes y más pequeños.

// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
// Smallest number is -50, biggest is 32.
// --------------------------------------------------------------------------

const diffMaxMin = (arr) => {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return `Smallest number is ${min}, biggest is ${max}, the difference is ${max - min}.`;
  }
  console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));