class billete {
    constructor(v, c) {
        this.valor = v;
        this.amount = c;//cantidad
    }
}

function entregarDinero() {

    var texto = document.getElementById("dinero");
    dineroEnCaja = parseInt(texto.value);
    for(var bi of caja) {
        /* console.log(bi); */
        if(dineroEnCaja > 0){
            division = Math.floor(dineroEnCaja / bi.valor); //function para redondear hacia abajo cualquier numero con valores decimales
            /* console.log(division); */
            if(division > bi.amount) {
                papeles = bi.amount;
            } else {
                papeles = division;
        } 
        $entregado.push(new billete(bi.valor, papeles));
        dineroEnCaja -= (bi.valor * papeles);
        }
    }
    if(dineroEnCaja > 0) {
        /* console.log("El cajero no tiene suficiente dinero"); */
        resultado.innerHTML = "El cajero no tiene suficiente dinero";//innerHtml atributo o propiedad es una variable 
    }else {
        for(var e of $entregado) {
            if(e.amount > 0)
            {
                /* resultado.innerHTML = resultado.innerHTML + e.amount + " Billetes de $" + e.valor + "<br/>"; */ //en este caso inner es el atributo del objeto resultado
                resultado.innerHTML +=  e.amount + " Billetes de $" + e.valor + "<br/>";
            }
        }
    console.log($entregado); 
    }
}

var caja = [];
var $entregado = [];//billetes q entrego al user
caja.push(new billete(100, 5));
caja.push(new billete(50, 10));
caja.push(new billete(20, 5));
caja.push(new billete(10, 10));
caja.push(new billete(5, 5));

var dineroEnCaja; 
var division = 0;  //resultado de la division cada vez q iteramos
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

//clibart imagenes para cada billete