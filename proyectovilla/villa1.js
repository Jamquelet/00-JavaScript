/* var z;
for(var i = 0; i<10; i ++) {
    z = aleatorio(-5, 5);
    document.write(z + ", ");
    console.log(z);
}
 */
//img object 80x80
var vila1 = document.getElementById("villa1");
var paper = vila1.getContext("2d");

var fondo = {
    url: "./assets/tile.png",
    cargaOK: false
};
var vaca = {
    url: "./assets/vaca.png",
    cargaOK: false
};
var cerdo = {
    url: "./assets/cerdo.jpg",
    cargaOK: false
};
var pollo = {
    url: "./assets/pollo.jpg",
    cargaOK: false
};
var cerdo2 = {
    url: "./cerdo1.jpg",
    cargaOK: false
};
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT:39
};
var movimiento = 40;
var x = 420;
var y = 420;



fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.object = new Image();
vaca.object.src = vaca.url;
vaca.object.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo2.imagen = new Image();
cerdo2.imagen.src = cerdo2.url;
cerdo2.imagen.addEventListener("load", cargarCerdo2);
cerdo2.imagen.addEventListener("keyup", moverCerdo2);

function cargarFondo() {
   fondo.cargaOK = true;
   dibujar();
}
function cargarVacas() {
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdos() {
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPollos() {
    pollo.cargaOK = true;
    dibujar();
}
function cargarCerdo2() {
    cerdo2.cargaOK = true;
    dibujar();
}
/* function moverCerdo2(event){
    switch(event.keyCode){
        case teclas.UP: ,
    }
} */

/* var cerdo = new Image();
cerdo.src = "./assets/cerdo.jpg";
cerdo.addEventListener("load", cargarCerdos);

var pollo = new Image();
pollo.src = "./assets/pollo.jpg";
pollo.addEventListener("load", cargarPollos); */

function dibujar() {
    
    if(fondo.cargaOK) {
        paper.drawImage(fondo.imagen, 0, 0);

    } if(vaca.cargaOK) {
        var cantidad = aleatorio(1, 15);
        for(var v=0; v<cantidad; v++) {
            var x = aleatorio(0, 7);//img mide 80px
            var y = aleatorio(0, 7);//var ancho=500px ancho/80 = 6.25 este es el operador 6*80=480
            var x = x * 60;
            var y = y * 60;
            paper.drawImage(vaca.object, x, y);
            console.log("vacas " + cantidad);
        } 
    } if(cerdo.cargaOK) {
        var cantidad = aleatorio(1, 15);
        for(var c=0; c<cantidad; c++){
            var x = aleatorio(0,420);
            var y = aleatorio(0,420);
            paper.drawImage(cerdo.imagen, x, y);
            console.log("cerdos " + cantidad);
        }
    } if(pollo.cargaOK) {
        var cantidad = aleatorio(1, 15);
        for(var p=0; p<cantidad; p++) {
            var x = aleatorio(0,420);
            var y = aleatorio(0,420);
            paper.drawImage(pollo.imagen, x, y);
            console.log("pollos " + cantidad);
        }
    } if(cerdo2.cargaOK) {
        var x = aleatorio(0,420);
        var y = aleatorio(0,420);
        paper.drawImage(cerdo2.imagen, x, y)
    }
}
/*function dibujarVacas() {
    paper.drawImage(vaca, 10, 10);
}
function dibujarCerdos() {
    paper.drawImage(cerdo, 10, 300);
}
function dibujarPollos() {
    paper.drawImage(pollo, 300, 150);
} */

function aleatorio(min, maxi) {
    var result;
    result = /* Math.round(Math.random() * (maxi - min) + min); numero entero aleatorio. 
    Math.ceil: redondear para arriba*/
    Math.floor(Math.random() * (maxi - min + 1)) + min;
    return result;
}