var imagenes = [];
imagenes["Cauchin"] = "./assets/vaca.png";
imagenes["Pokacho"] = "./assets/pollo.jpg";
imagenes["Tocinauro"] = "./assets/cerdo.jpg";

/* class pakiman {
    constructor(name, life, attack) {
        this.imagen = new Image();
        this.nombre = name;
        this.vida = life;
        this.ataque = attack;
        this.tipo = "tierra";

        this.imagen.src = imagenes[this.nombre];
    }
    hablar() {
        alert(this.nombre);
    }
    mostrar(){
        document.body.appendChild(this.imagen);//add hijo al arbol
        document.write("<p>");
        document.write("<strong>"+ this.nombre +"</strong><hr/>");
        document.write("Vida: "+ this.vida +"<br/>");
        document.write("Ataque: "+ this.ataque +"<hr/>");
        document.write("</p>");
    }
} */

/* var cauchin = new pakiman("Cauchin", 100, 30);
var pokacho = new pakiman("Pokacho", 80, 50);
var tocinauro = new pakiman("Tocinauro", 120, 40);

console.log(cauchin, pokacho, tocinauro); */

var coleccion = [];
coleccion.push(new pakiman("Cauchin", 100, 30));
coleccion.push(new pakiman("Pokacho", 80, 50));
coleccion.push(new pakiman("Tocinauro", 120, 40));

console.log(coleccion);

for(var pakin of coleccion) {
    console.log(pakin); 
    pakin.mostrar();
}
/* for(var x in coleccion[0]){
    console.log(x);
} */