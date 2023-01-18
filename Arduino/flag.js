//programa en js con expresss con un servidor web con nodejs con arduino y con la libreria johnny-five
//servo es un peq motor que tiene movimientos precisos ogr a 180gr
var j = require("johnny-five");
var circuito = new j.Board();//board funcion que trae la conexion entre js y el arduino
var led, motor, fotoCelda; //los sensores requieren una config
var turno = 0;

circuito.on("ready", prender); //cuando el circuito esta listo dispare la funcion prender

function prender() {
    var configuracion = {pin:"A0", freq: 50}//= a un obj json dos variables pin donde se recibe la info de la celda y la frecuencia en la que funcionaa el sensor(de movimiento de temperatura de luz)frec luz es 50
    fotoCelda = new j.Sensor(configuracion);

    led = new j.Led(13);
    led.on();

    motor = new j.Servo(9);
    motor.to(0); //para mover el servo 0 90 180
    ondear();
}
function ondear() { //10000ms es un seg. cada seg deberiamos ver la cant de luz
    console.log("Luz:" + celda.value);//valor de la cantidad de luz que esta recibiendo la celda
    var luz = fotoCelda.value;
    if(luz > 800){
        /* motor.to(90); */
        if(turno == 1) {
            turno = 0;
            motor.to(70);
        }else {
            turno = 1;
            motor.to(110);
        }
    } else{
            motor.to(150);}//30gr
    setTimeout(ondear, 1000); //se ejecute multiples veces cada seg.sTO es un timmer invocar una function incluso si misma multiples veces con una cantidad de tiempo
}