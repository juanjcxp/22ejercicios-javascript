// (19) ----------------------------------------------------------------------
// Cree una función que tome dos argumentos (elemento, tiempos). 
// El primer argumento (elemento) es el elemento que necesita repetirse,
// mientras que el segundo argumento (veces) es la cantidad de veces que
// se debe repetir el elemento. Devuelve el resultado en una matriz.

// repeat(13, 5) ➞ [13, 13, 13, 13, 13]
// --------------------------------------------------------------------------

const repeat = (e, times) => {
    let newArr = [];
    for (var i = 0; i < times; i++) {
      newArr.push(e);
    }
    return newArr;
  }
  console.log(repeat(13, 5));