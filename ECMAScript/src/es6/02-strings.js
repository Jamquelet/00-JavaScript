let hello = 'hello';
let world = 'world';
let epicPhrase = hello + '' + world + '!';
console.log(epicPhrase);

//template literals: concatenar strings, comilla francesa
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

//Multi-line strings

let lorem = 'string salto de linea\n' + ' otra linea';

let lorem2 = `multilinea con enter
continuacion de la frase`;