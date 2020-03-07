
// (22) ----------------------------------------------------------------------
// Cree una función que capitalice la última letra de cada palabra.

// capLast("hello") ➞ "hellO"
// --------------------------------------------------------------------------

const capLast = (sentence) => {
    return sentence.substring(0, sentence.length - 1) + sentence[sentence.length - 1].toUpperCase();
  }
  console.log(capLast('hello'));