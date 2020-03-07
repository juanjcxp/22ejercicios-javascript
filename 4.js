// (4) ----------------------------------------------------------------------
// Crear una función que reciba n cantidad de argumentos 
// y los sume ( utilizar parametros rest)
// --------------------------------------------------------------------------

const sumTot = (...rest) => rest.reduce((a, b) => a + b);
console.log(sumTot(5,5,5,50,10));
