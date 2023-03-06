//uso de fetch
import fetch from 'node-fetch';
//nuestra api
const API='https://api.escuelajs.co/api/v1';

//function que se encarga de utilizar fetch y trasformarlo al llamado del metodo post con las config minimas, al final lo retorna
function postData (urlApi, data) {
    const response = fetch(urlApi,{//le pasamos la url y recive un objecto que lleva la conf metodo, modo, credenciales si son necesarias por algun tipo de autenticacion que vaya con user y passw, headers como vamos a enviar el tipo de informacion que estamos enviando a esa api
        method: 'POST',//metodos: get para obtener, post para enviar, put para actualizar, delete para eliminar en may
        mode: 'cors',//permisos que va a tener por defecto esta en cors
        credentials: 'same-origin',//autenticacion
        headers: {//cabeceras que vamos a enviar en la solicitud,para que nos reconoca que tipo  de valor estamos enviando
            'Content-Type': 'application/json' //para decirle que el valor es de aplication/json, si fuera un block de datos archivos cambiamos ese valor https://platzi.com/cursos/api/ consumo de api rest con js
    },
    body: JSON.stringify(data)});//info que le voy a trasmitir a esa api. la voy a recivir como objeto y la envio como texto
    return response;
 }

 const data = {
    "title": "New Product J",
    "price": 10.99,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }
  //uso de la funcion postData como una promesa para utilizar then para treasformar la respuesta en un objeto json y despues poder mostrarlo en la consola 

  postData(`${API}/products`, data) //data es el objeto que queremos trasmitir a  esa api
  .then(response =>response.json())//que me va a responder el servidor cuando sucede manera correcta almacenar esta información
  .then(data=>console.log(data));//la data que ya ha sido trasformada mostramos la data