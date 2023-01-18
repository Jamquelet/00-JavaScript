//npm install johnny-five
//forma en la que se inicializa un circuito libreria johnny-five
/* var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function(){
    var led = new five.Led(13);
    led.blink(500);
}) */
var jf = require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready, prender");

function prender() {
    var led = new jf.Led(13);
    var rojo = new jf.Led(9);//puerto
    led.blink(200);//instancia del objeto led
    rojo.blink(700);//parpadea a 700 ms mas lento
    console.log("make hardware");
}
