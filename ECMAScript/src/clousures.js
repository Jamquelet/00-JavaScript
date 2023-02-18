/*closure (o clausura) es una función que tiene acceso a variables en su entorno léxico, incluso después de que la función que las definió haya terminado de ejecutarse. Esto significa que una función puede acceder y recordar los valores de las variables que estaban disponibles en su entorno de creación, incluso si la función se está ejecutando en un entorno diferente. */

function creaSumador(x) {
    return function(y) {
      return x + y;
    };
  }
  
  // Creamos una función que suma 5 a un número
  var sumaCinco = creaSumador(5);
  
  // Utilizamos la función creada anteriormente
  console.log(sumaCinco(2)); // devuelve 7
  console.log(sumaCinco(10)); // devuelve 15
  

//


  function creaContador() {
    let contador = 0;
  
    function incrementaContador() {
      contador++;
      console.log(contador);
    }
  
    return incrementaContador;
  }
  
  // Creamos dos contadores distintos
  const contador1 = creaContador();
  const contador2 = creaContador();
  
  // Utilizamos los contadores
  contador1(); // devuelve 1
  contador1(); // devuelve 2
  contador2(); // devuelve 1
  contador2(); // devuelve 2
  