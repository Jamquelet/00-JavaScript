//Programación de circuitos con C, Arduino y Sketch
//www.arduino.cc/en/Main/Software  id integrade develotmen envirement entorno integrado de desarrollo de arduino 
//Sketch y no c es por que tiene funciones preparadas para programar arduinos 
//prender un led
 int bombillo = 13;
 int espera = 500; //500ms es un seg
 
 void setup() { //inicia cuando arranca el circuito
    pinMode(bombillo, OUTPUT); //salida
 }
 void loop() {
    digitalWrite(bombillo, HIGH);
    delay(espera * 2);
    digitalWrite(bombillo, LOW);//pasele 0voltios al puerto
    delay(espera);
 }