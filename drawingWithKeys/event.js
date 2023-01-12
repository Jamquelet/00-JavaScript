var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT:39
};

    console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);//keydown apretar la tecla up al soltar la tecla
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
    switch(evento.keyCode) {
        case teclas.UP: 
            console.log("Vamos pa arriba");
        break;
        case teclas.DOWN:
            console.log("Vamos pa abajo");
        break;
        case teclas.LEFT:
            console.log("izq");
        break;
        case teclas.RIGHT:
            console.log("Vamos pa derecha");
        break;
        default:
            console.log("otra tecla");
    }
}