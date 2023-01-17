//http://localhost:8989/
var express = require("express");
/*require opcion que no existe por defecto en los navegadores enel js que se corre enel frontend
pero que si existe en el js que se corre en el backend con nodejs, requiere es una funcion
 especial que busca los framewords o librerias instaladas en el pc o instaladas en el proyecto
 usando npm install y se las trae y las guarda en una variable la variable express ahi es donde
 guardamos lo que sifnifica express, traerlo.
*/
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado) {
    resultado.send("This is <strong>the housefarm</strong>");
}
function cursos(peticion, resultado) {
    resultado.send("Here is el home thas all really like");
}

aplicacion.listen(8989);







/* const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000) */