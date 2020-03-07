// (20) ----------------------------------------------------------------------
// Escriba una función, .vreplace () que extienda el prototipo de cadena 
// reemplazando todas las vocales en una cadena con una vocal especificada.

// "apples and bananas".vreplace("u") ➞ "upplus und bununus"
// --------------------------------------------------------------------------

function isVowel(char) {
    return 'aeiou'.includes(char);
  }
  
  String.prototype.vreplace = function (char) {
    let newString = '';
    for (var i = 0; i < this.length; i++) {
      if (isVowel(this[i])) {
        newString += char;
      } else {
        newString += this[i];
      }
    }
    return newString;
  };
  console.log("apples and bananas".vreplace("u"));