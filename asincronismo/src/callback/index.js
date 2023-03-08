//el proyecto se inicializa desde la terminal primero con git, ahora el proyecto se inicializa con los comandos: npm init  la licencia es MIT

function sum(num1,num2) {
    return num1 + num2;
}

function calc (num1,num2,callback){
    return callback(num1,num2)
}

console.log(calc(2, 2, sum));
//
setTimeout(function () {
    console.log('hi js');
}, 5000)

function gretting(name) {
    console.log(`hello ${name}`);
}
setTimeout(gretting, 2000, 'Jam');
//exercice chatGpt
function execCallback(callback) {
    setTimeout(function() {
      window[callback.name] = callback; // Agregamos la función al namespace window
      callback(); // Llamamos a la función callback
    }, 2000); // Demora de 2 segundos
  }

//exercise ejecucion de pruebas
function execCallback(callback) {
    window.setTimeout(() => {
      callback();
    }, 2000);
  }

  function execCallback(callback) {
    setTimeout(() => {
      callback();
    }, 2000);
  }
  
  function showMessage() {
    console.log("Han pasado 2 segundos");
  }
  
  execCallback(showMessage);
