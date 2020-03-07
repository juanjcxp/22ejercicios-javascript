// (7) ----------------------------------------------------------------------
// Escriba una función que tome una matriz de 10 enteros (entre 0 y 9)
// y devuelva una cadena en forma de un número de teléfono.
// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
// --------------------------------------------------------------------------

const formatPhoneNumber = (arr) => {
    let nums = [];
    nums = arr.filter((value) => value >= 0 && value <= 9);
    return `(${nums[0]}${nums[1]}${nums[2]}) ${nums[3]}${nums[4]}${nums[5]}-${nums[6]}${nums[7]}${nums[8]}${nums[9]}`;
  }
  console.log(formatPhoneNumber([1,2,3,4,5,6,7,8,9,0, 100, 150]));