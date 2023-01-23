/* function test (){ 
    let sum = 4;
    let user = prompt("cuanto es 2 + 2");
if(user == 4) {
    alert("felicitaciones");
}else{
    alert("bad");
}
return
}
test(); */

// 
/* let num = 10;
let num2 = 10;
const result = num + num2;
let questions = {
  q1: `Cuanto es ${num} + ${num2}`
}
function Quizzer() {
  let userInput = prompt(questions.q1);
  if (userInput == result) {
    alert("Felicitaciones, respondiste correctamente el desafio 😎");
  } else {
    alert("lamentablemente, tu respuesta es incorrecta, sigue practicando ❌!");
  }
}
Quizzer(); */

//

while (true) {
  var answer = prompt("¿Cuánto es 2 + 2?");
  if (answer == 4) {
    alert("¡Felicidades, la respuesta es correcta!");
    break;
  } else {
    alert("Lo siento, la respuesta es incorrecta. Inténtalo de nuevo.");
  }
}

//

/* let respuesta;
while(respuesta!='4'){
  let pregunta = prompt('¿cuanto es 2 + 2?')
  respuesta = pregunta;
} */