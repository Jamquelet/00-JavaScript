var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("drawings");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {
    var lines = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var color1 = "green";
    var espacio = ancho / lines;

while(l < lines) { 
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("#AAF", 0, yi, xf, 300);
    console.log("linea " + l);
    yi = 300 - (espacio * l);
    xf = 300 - (espacio * (l + 1));
    dibujarLinea("#AAF", 300, yi, xf, 0);
    l++; 
    
}

dibujarLinea(color1,1,1,1,300);
dibujarLinea(color1,1,299,299,299);

dibujarLinea(color1,299,299,299,0);
dibujarLinea(color1,1,1,299,1);
}
