// (14) ----------------------------------------------------------------------
// Cree una función donde, dado el número n, devuelva la suma de todos 
// los números cuadrados  incluyendo n.

// squaresSum(3) ➞ 14
// 1² + 2² + 3² =
// 1 + 4 + 9 =
// 14
// --------------------------------------------------------------------------

const squaresSum = (n) => {
    let sumTot = 0;
    for (var i = 1; i <= n; i++) {
      sumTot += i**2
    }
    return sumTot;
  }
  console.log(squaresSum(3));