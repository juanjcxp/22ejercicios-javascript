// (5) ----------------------------------------------------------------------
// Crear una función que reciba una matriz de valores y filtre los 
// valores que no son string
// --------------------------------------------------------------------------

const isNotString = (element) => typeof element !== 'string' ? true: false;

const noString = (arr) =>  arr.filter(isNotString);
console.log(noString(['juan', 666 , 'front', 'eduardo']));