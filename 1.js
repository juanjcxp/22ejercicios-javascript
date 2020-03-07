// (1) ----------------------------------------------------------------------
// Utilizando función arrow, crear una función que reciba como parámetros
// un nombre, apellido y edad y los retorne en un string concatenado 
// “Hola mi nombre es sebastiányabiku y mi edad 33”
// --------------------------------------------------------------------------

const hi = (name, lastName, age) => `Hola mi nombre es ${name} ${lastName} y tengo ${age} años.`;
console.log(hi('juan', 'jordan', 30));