/*var d = document.getElementById("drawings"); // getElementById(metodo, del documento que trae un elemento atravez de su id y le pasamos un parametro entre comillas porque es un textoforma en como obtenemos en js llegamos a un objeto a una de las ramas del html en la var d tenemos la et canvas
var lienzo = d.getContext("2d"); //getContext(metodo del canvas que esta ilustrado por la variable b y traemos el contexto 2d.funcion del objeto canvas que le permite obtener el area donde voy a dibujar si queremos 2d o 3d que requiere motores especiales del canvas vamos a obtener el lienzo

lienzo.beginPath();//arrancamos a dibujar un camino. el lienzo es el contexto 2d del canvas que traemos del html
lienzo.strokeStyle = "red"; //variable.atributo.propiedad.solo le asigno algo. lienzo tiene funciones y atributos
lienzo.moveTo(100, 100);//nos movemos al punto del canvas.funcion o metodo del canvas para mover el lapiz a donde va arrancar la linea
lienzo.lineTo(200, 200);//creamos linea diagonal hasta el punto. dibujar la linea exactamente funcion de trazar una linea, puedo trazar puntos arcos lineas
lienzo.stroke()//cerramos la linea. dibujar con el estilo, dibuja la linea
lienzo.closePath();//terminamos de dibujar. cerrar el camino levantar el lapiz

lienzo.beginPath();
lienzo.strokeStyle = "blue";
lienzo.moveTo(50, 10);
lienzo.lineTo(250, 2);
lienzo.stroke();
lienzo.closePath(); */

//con una funcion puedo hacer varias lineas en una sola linea de codigo
//Funcion herramienta que permite escribir codigo que tenemos que reusar varias veces, solo cambian variables
/* var d = document.getElementById("drawings");
var lienzo = d.getContext("2d");

dibujarLinea("pink", 10, 300, 220, 10);
dibujarLinea("yellow", 300, 10, 10, 220);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
} */
//eventos
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);


//loops while and for in JavaScript
var d = document.getElementById("drawings");
var lienzo = d.getContext("2d");
var lines = 30;
var l = 0;
var yi, xf;
var color1 = "green";
//tambien podemos cambiar el while() por el for(l=0; l < lines; l++)
while(l < lines) { //mientras algo sea verdad va a ocurrir un codigo por dentro
    yi = 10 * l;//10 por que la linea va a ocurrir cada 10px
    xf = 10 * (l + 1);
    dibujarLinea("#AAF", 0, yi, xf, 300);
    console.log("linea " + l);// asi sabemos si la variable l se esta moviendo
    yi = 300 - (10 * l);
    xf = 300 - (10 * (l + 1));
    dibujarLinea("#AAF", 300, yi, xf, 0);
    console.log()
    l++; // l = l + 1; 
    
}

dibujarLinea(color1,1,1,1,300);
dibujarLinea(color1,1,299,299,299);

dibujarLinea(color1,299,299,299,0);
dibujarLinea(color1,1,1,299,1);

/* while(l < lines){
    yi = 300 - (10 * l);
    xf = 300 - (10 * (l + 1));
    dibujarLinea("#AAF", 300, yi, xf, 0);
    console.log("Linea" + l);
    l++;
}
 */
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {
    var x = parseInt(texto.value);
    //console.log(texto);
    //alert("nooooo " + texto.value);
}
