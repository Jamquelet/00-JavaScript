//entorno de desarrollo arduino 
/* Arduino y Rasperry Pi: Son básicamente ordenadores muy pequeños que podemos programar 
desde 0. En Arduino se programa con C.

Lenguaje C
Es un lenguaje de bajo nivel(cuyas interpretaciones están más cerca al lenguaje máquina). 
De este lenguaje se derivan Java, Javascript, C#, unity 3D, entre otros. */

//codigo que inicia el sistema operativo y un codigo que todo el tiempo esta funcionando
int amarillo = 13;//puerto 13 del arduino
int rojo = 7;
int milisegundos = 300;// 500 cada medio seg. si le damos 100 titila 10 veces por segundo

//declarando que van a retornar la funcion como no retorna nada utilizamos void
void setup() {
    pinMode(amarillo, OUTPUT);//output emite electricidad. RECIBA electricidad o q la envie
    pinMode(rojo, OUTPUT);//output de salida el puerto 7 digital
}
void loop() {
    digitalWrite(amarillo, HIGH);//recibe 2 parametros puerto y cuanto voltaje le queremos mandar
    digitalWrite(rojo, LOW);
    delay(milisegundos);//esperar 
    digitalWrite(amarillo, LOW);
    digitalWrite(rojo, HIGH);
    delay(milisegundos * 2);//uno rapido y uno lento cada 300 milisegundos
}