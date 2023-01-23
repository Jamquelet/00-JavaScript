let ruta = window.location;//location no es una funtion no devuelve el valor de donde esta la dir de la pag web. es una variable interna del objeto window.
console.log(ruta);
document.write("Estas en: " + ruta);//objeto document que tiene una funcion write cuando las funciones son parte de un objeto se llaman metodo, es una funcion que hace parte de un objeto
//cuando una variable es parte de un objeto la variable se le llama atributo o propiedad, cuando una funcion es parte de un objeto la funcion se llama metodo

var h1 = document.querySelector('h1');//se utiliza como si fuera css #id .class
const h2 = document.querySelectorAll('h2');
const p = document.querySelector('p');
const parrafo = document.getElementsByClassName('.parrafo');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);
console.log({h2, p, parrafo, pid, input});

p.innerText = 'this is a paragraph very interesting with js <br>';
h1.innerHTML = 'Window and Document'; 
//console.log(h1.getAttribute('pantalla')); //leer atributos del elemento de una clase
h1.setAttribute('pantalla', 'modificando atributos de clases'); //modificar atributo de clase

h1.classList.add('red') //clases en especifico agregarle un valor o atributo a la clase
/* h1.classList.remove('modificando atributos de clases'); */
/* h1.classList.toggle('/');//eventos js
h1.classList.contains(); *///condicional devuelve true o false
for(let i = 0; i < h2.length; i++) {
h2[0].innerHTML = 'Manipulacion Del <br> DOM';
}
//pid.innerHTML = '<br/>'

input.value = "/"  //podemos modificar cualquier atributo placeholder ...
/* console.log(document.createElement('span')); */

const img = document.createElement('img'); //crear elemento html
img.setAttribute('src', './via.jpg');
img.setAttribute('width', '300px');
console.log(img);

pid.innerHTML = "";//borrar lo que tengamos en ese parrafo
pid.appendChild(img); //pid appendChild: agregan el elemento despues del contenido que ya tiene el parrafo
//  innerHTMl: en este caso reescribe mal el html 
