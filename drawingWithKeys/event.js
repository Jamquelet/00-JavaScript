var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT:39
};

    console.log(teclas);

//document.addEventListener("keyup", dibujarTeclado);//keydown apretar la tecla es mas rapido por lo q se le asigna menos px up al soltar la tecla
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;//centro
var y = 150;
//var x = 100;
//var y = 100;
//dibujarLinea("red", 149, 149, 151, 151, papel); //papel lugar donde voy a dibujar 
dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;//grosor de la linea
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) {
    /* console.log("tecla oprimida");
    console.log(evento.keyCode); */
    /* if(evento.keyCode == teclas.UP) {
        console.log("Vamos pa arriba");
    }
    if(evento.keyCode == teclas.DOWN) {
        console.log("abajo");   
    }
    if(evento.keyCode == teclas.LEFT) {
        console.log("izq");
    }
    if(evento.keyCode == teclas.RIGHT) {
        console.log("der");
    } */
    var colorcito = "green";
    var movimiento = 1;//cantidad de pixeles
    switch(evento.keyCode) {
        case teclas.UP: 
            //console.log("Vamos pa arriba");
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            //console.log("Vamos pa abajo");
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            //console.log("izq");
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            //console.log("Vamos pa derecha");
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        default:
            console.log("otra tecla");
    }
}