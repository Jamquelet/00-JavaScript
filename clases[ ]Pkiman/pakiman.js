class pakiman {
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
}