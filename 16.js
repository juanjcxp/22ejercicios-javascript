// (16) ----------------------------------------------------------------------
// Cree una función que tome un número como argumento y devuelva una matriz 
// de números contando desde este número a cero.

// countdown(5) ➞ [5, 4, 3, 2, 1, 0]
// --------------------------------------------------------------------------

const countdown = (n) => {
    let arr = [];
    for (var i = 0; i <= n; i++) {
      arr.unshift(i);
    }
    return arr;
  }
  console.log(countdown(5));
  