// (2) ----------------------------------------------------------------------
// Cree una función que tome números y devuelva la suma de sus cubos.
// sumOfCubes(1, 5, 9) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// --------------------------------------------------------------------------

const sumdeCubos = (a, b, c) => {
    return a**3 + b**3 + c**3; 
  };
  console.log('Suma de cubos: ' + sumdeCubos(1, 5, 9));
  