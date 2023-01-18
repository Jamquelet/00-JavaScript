40 /*valores primitivos*/
"string o cadena de texto"
true
false
null /*valores vacios empty values valores placeholder valores faltantes espacios reservados*/
undefined 
 /*Valores no primitivos - tipo objetos */
 [1,2,3,4, "array"]
 {nombre: "Jam"}/*Objeto valor tipo objeto*/
 typeof null
 "object"
 /*variables:lugar en memoria reservado*/
 var nombre = "jam";
 // declarar 
var edad;
//inicializar esa variable, asignarle un valor
edad = 28;
var elements = ["computer", "phone", 1];
elements[1]
"phone"
var person = {
    name: "jam",
    age: 28
}
//funciones conjunto de sentencias para utilizar para generar acciones con los valores que ya guardamos antes en las variables, procedimiento o tarea utilizando esos valores
//declarativas se declara acontinuación guarda ciertos valores
function miFuncion() {
    return 3;
}
miFuncion();
//expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima
var myFuncion = function(a,b){ //parametros dentro de () function
    return a + b;
}
myFuncion();
function greetstudent(studend) {
    console.log(studend);
}
function greetstudent(studend) {//funcion declarativa
    console.log(`Hello ${studend}`);
}
greetstudent("jam");
// Hello jam
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}
function sumar(a,b) {
    var resultado = a + b;//para guardar en memoria
    return resultado;
}
sumar(1,2);
function sumar(a,b) {
    return a +b;
}
function solution(valor) {
    var elements = [1, "Dieguillo", true];
    var element = elements[valor];
    return typeof element;
  }
  console.log(solution(0));
  console.log(solution(1));
  console.log(solution(2));
//scope: alcance de las variables. scope global:var function ... scope local:en local puedo llamar global pero global no puede llamar variables declaradas en scope local
// hoisting en emascript <6 llamar variables sin haberlas declarado e inicializarla, separa un espacio en memoria y crea esa variable y luego nosotros creamos otra var
console.log(myname);
var myname = "kent";
//hoisting en funciones la estoy llamando antes de q la inicialice
hey();
function hey() {
    console.log("hello " + myname);
}
//Coerción:forma de cambiar un tipo de valor a otro tipo de valor C implicita cuando el lenguaje ayuda y cambia el tipo de valor. C explicita forma en la que obligamos a q un valor de un tipo cambie a otro tipo de valor
4 + "7"; //47
4 * "7"; //28 regresa un numero C implicita convierte el string 7 a un numero
2 + true; //3
false - 3;//-3
var a = 4 + "7";//implicita concatenacion (+) dos valores diferente los junta en el string
typeof a //"string"
var a = 20;
var b = a + ""; //explicita
console.log(b); //"20" como string
var c = String(a); //C explicit queremos q el numero sea string sin tener q concatenarlo
var d = Number(c);//typeof d number
//Valores: Truthy y Falsy 
Boolean(); //validar si el valor es true or false ej el cero es un valor false, null-undefined-NaN es false,1 "string" array [] function(){}
//Operadores binarios por los dos valores operaciones matematicas y concatenacion + - * /
//! es una negacion !false estamos negando q es falso unity operators un solo operador trabajando con un solo valor
//operaciones de asignacion = ej var a = 1; de comparacion == contenido del valor, === operador que valida que los dos tipos o valores sean extrictamente iguales
//comparacion < menor o mayor > >= <=
//validamos dos valores si ambos valores son iguales o si alguno es verdad && ||ej las dos variables sean verdad si a y b es verdad se cumple la condicion a && b - si a o b es verdad se cumple la condicion ej a || b
var edad = 40;
edad++//para incrementar el valor de la variable por 1 o -- de decremento
edad += 2 //incrementar x2
//condicionales if (verdad){} else if (){} else {}
//if () {} else {console.log("")}
//if () {} else if () {} else {}
var edad = 18;
if(edad === 18) {
    console.log("your first votation");
} else if ( edad > 18) {
    console.log("you can vote again");
} else {
    console.log("you arenot vote");
}
//operador ternario, generar un if else en una sola linea ? y ponemos lo q vamos a validar si es verdad
//condition ? true : false;
var number = 1;
var result = number === 1 ? "soy uno" : "no soy uno";

/*var piedra = piedra > tijera && piedra < papel;
var papel = papel > piedra && papel < tijera;
var tijera = tijera > papel && tijera < piedra;
var player1 = math.random[piedra,papel,tijera];
var player2 = [piedra,papel,tijera];
var play = function (resultado1,resultado2) {
    if (resultado1 > resultado2) {
        console.log("resultado1 win");
    } else if (resultado1<resultado2){console.log("resultado2 win");} else {console.log("empate");}
} */

function playRockScisorPaper(user) {
    var machine = Math.floor(Math.random() *3) + 1;

    if(machine === 1) {
        machine = "rock"; 
    } else if(machine === 2) { 
        machine = "paper";
    } else { machine = "scissors";}

if(user === "rock") {
    if(machine === "rock") {
        return "tie"
    } else if(machine === "paper") {
        return "you lost against paper";
    } else {
        return "you win";
    }
} else if(user === "paper") {
    if(machine === "rock") {
        return "you win";
    } else if(machine === "paper") {
        return "tie";
    } else {
        return "you lose against scissors";
    }
} else {
    if(machine === "rock") {
        return "you lose against rock";
    } else if(machine === "paper") {
        return "you win";
    } else {
        return "tie"
    }
} 
}

//switch.js validacion de casos
var number = 1;
switch (number) {
    case 1:
        console.log("soy 1");
        break;
    case 10:
        console.log("soy ten");
        break;
    case 100:
        console.log("tousand");
        break;
    default:
            console.log("no soy nada");
}

function playRockScisorPaper(user) {
    var machine = Math.floor(Math.random() *3) + 1;

switch (machine,user) {
    case 1:
        (machine === 1 && user === 1) && (machine === 2 && user === 2) && ( machine === 3 && user === 3)
        return "tie";
} }


//


export function solution(article) {
    if (article == "computadora") {
      console.log("Con mi computadora puedo programar usando JavaScript");
    } else if (article == "celular") {
      console.log("Em mi celular puedo aprender usando la app de Platzi");
    } else if (article == "cable") {
      console.log("¡Hay un cable en mi bota!");
    } else {
      console.log("Artículo no encontrado");
    }
  }

  export function solution(article) {
  switch (true) {
    case article == "computadora":
      console.log("Con mi computadora puedo programar usando JavaScript");
      break;
    case article == "celular":
      console.log("Em mi celular puedo aprender usando la app de Platzi");
      break;
    case article == "cable":
      console.log("¡Hay un cable en mi bota!");
      break;
    default:  console.log("Artículo no encontrado");
  }
}

//arrays estructura de datos 
var fruits = ["a","p","c","f"];
console.log(fruits.length); // 4
console.log(fruits[0]);
fruits[2];
//para añadir elementos al este array con el metodo .push
var moreFruits = fruits.push("o","pi");
//metodo para eliminar el ultimo elemento del array .pop
var delet = fruits.pop("pi");
//agregar al inicio del array
var morefr = fruits.unshift("b");
//eliminar elemento que este en el inicio en el indice 0
var delfrut = fruits.shift("b");
//saber la posicion del elemento q ingresemos indexof
var position = fruits.indexOf("p");

//loops:for y for of
var students = ["Mary","Arnold","kent","Albert"];
function greetStudents(student) {
    console.log(`hello, ${student}`);
}
for(var i = 0; i < students.length; i++) {
    greetStudents(students[i]);
}  
// otra forma de desallorar este loop seria :
var students = ["Mary","Arnold","kent","Albert"];
function greetStudents(student) {
    console.log(`hello, ${student}`);
}
for(var student of students) {
    greetStudents(student);
}
//while traduce tiempo
var students = ["Mary","Arnold","kent","Albert"];
function greetStudents(studend) {
    console.log(`hello, ${student}`); //concatenar $ string
}
while(students.length > 0) { //en vez del for utilizamos un loop while mientras lo que este adentro el (parametro) del while sea verdad se genera el loop
    var studend = students.shift();
    greetStudents(studend);
}
//exercise
export function solution(estudiantes, deathCount, nuevo) {
    if (deathCount === 0) {
      estudiantes.push(nuevo);
      return estudiantes;
    } else {
      estudiantes.pop(-deathCount);
      estudiantes.push(nuevo);
      return estudiantes;
     }
  }
//Objects have properties, palabras claves y valor. tambien se puede declarar un metodo de objeto
var myCar = { 
    brand: "Toyota",
    model: "corolla",
    annio: 2020,
    detailCar: function(){
        console.log(`Car ${this.model} ${this.annio}`);//this es una variable q hace ref al objeto
    }
};
myCar.brand //para traer algun valor dentro del objeto
myCar.detailCar();
//para generar mas objetos de forma mas automatica con Objects: Función constructora
function car(brand, model, annio) {
    this.brand = brand;
    this.model = model;
    this.annio = annio;
}
var newCar = new car("Tesla", "Model 3", 2020);
var newCar2 = new car("Tesla","x",2018);
var newCar3 = new car("Toyota","Corrolla",2021);

//poder hacer un loop donde se agregen new Cars a la funcion constructores y se agregen mas auto
function car(brand, model, annio) { 
    this.brand = brand;
    this.model = model;
    this.annio = annio;
    var cars = [];
    for(var i = 0; i <= 30; i++){
        var brand = prompt("ingrese la marca");
        var model = prompt("ingrese model");
        var annio = prompt("ingrese annio");
        cars.push(newCar(brand,model,annio));
    }    for(var i = 0; i < cars.length; i++){
        console.log(cars[i]);
    }
}
//recorrer un array con metodos filter(filtrar y valida si algo es true or false y lo mete en un nuevo array no modifica el original)
var articles = [
    {name: "bike", cost: 3000},
    {name: "tv", cost: 2500},
    {name: "book", cost: 320},
    {name:"phone", cost: 10000},
    {name: "laptop", cost: 20000},
    {name: "keyboard", cost: 500},
    {name: "earphones", cost: 1700},
];
var articlesFilter = articles.filter(function(article){
    return article.cost <= 500
});
//metodo map. crea un nuevo array no modifica el original
var nameArticles = articles.map(function(article){
    return article.name
});
//metodo find encontrar algo dentro del array no modifica array original crea uno nuevo valida true or false
var findArticle = articles.find(function(article) {
    return article.name === "laptop"
});
//metodo foreach no genera nuevo array filtra sobre el array sin modificarlo y regresa algo
articles.forEach(function(article){ 
    console.log(article.name);
});
//metodo some regresa validacion true or false genera nuevo array
var articlesCheap = articles.some(function(article){
    return article.costo <=700;
});
////para añadir elementos al este array con el metodo .push
var moreFruits = fruits.push("o","pi");
//metodo para eliminar el ultimo elemento del array .pop
var delet = fruits.pop("pi");
//agregar al inicio del array
var morefr = fruits.unshift("b");
//eliminar elemento que este en el inicio en el indice 0
var delfrut = fruits.shift("b");
//saber la posicion del elemento q ingresemos indexof
var position = fruits.indexOf("p");
//

export function solution(cars) {
    return cars.filter(function (car) {
      if (car.licensePlate) {
        return true;
      } else {
        return false;
      }
    });
  }