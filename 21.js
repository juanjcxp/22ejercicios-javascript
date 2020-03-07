// (21) ----------------------------------------------------------------------
// Te dan una cadena de palabras. Debe encontrar la palabra "Nemo" y 
// devolver una cadena como esta: "¡Encontré a Nemo en [el 
// orden de la palabra que encuentra nemo]!".

// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
// --------------------------------------------------------------------------

const findNemo = (sentence) => {
    let splitSentence = sentence.split(" ");
    splitSentence.forEach((e, index) => {
      if (e === 'Nemo') {
        console.log(`I found Nemo at ${index + 1}`);
      }
    });
  }
  findNemo('I am finding Nemo !');