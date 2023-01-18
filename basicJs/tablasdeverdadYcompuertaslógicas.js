
false = 0
true = 1
//>1 = true, <1=true x !=0 == true

electricidad = [
(0+0)= 0 //cambiar el + por ||"false"- &&false - ^false
(1+0)=1  //||true - && false - ^true
(1+1)=1 ];//||true - &&true - ^false
transistores 
and //solamente deja pasar cuando las dos estan prendidas 
or //deja pasar electricidad cuando una esta prendida
xor //1 o el otro solamente deja pasar electricidad cuando 1 esta prendido pero el otro no
not //negacion si esta prendido lo manda apagado si esta apagado lo manda prendido.inversores
nand //es como and pero negativo lo vuelve alreves

x=0, y=0, z="?";
//z=x or y z=0; o or + || solo es false cuando es 0 || 0 es como una suma
//el y and * && solo funciona si los dos son verdaderos. es una multiplicacion
//no not ! negacion es una inversion si es uno vale 0 si es cero vale 1
//o xor ^  o exclusivo
x, y, w=1;
z = x && y || w // z= (x * y) + w   z = 0 * 0 + 1 esto es true
//


x = true;
y = false;
if(x == true) {
    alert("x is true");
} if(!y==true) {
    alert("y is false");
}
estudiante = true;
profesor = false;
visitante = false;
if(estudiante || profesor){
    permitir_entrada()
}else if(visitante){
    dar_tour_guiado()
}else { 
    preguntar()
}
// 
gasolina = 10
temperatura = 10
min_gasolina = 5
max_temperatura = 45

if(gasolina>min_gasolina&&temperatura<max_temperatura) {
    automovil.movimiento = true
} else {
    automovil.movimiento = false
}
//
helado = true
dulce = false
if(helado ^dulce){
    dar_recompensa(helado, dulce)
} else{
    dar_recompensa(false,false)
}
//
lluvia = true
sombrilla=true
bajoTecho=true
if(lluvia){
if(sombrilla^bajoTecho){
    alert("correct")
}else{
    alert("te equivocaste")
} 
}else {
    alert("do you not need umbrella")
}

