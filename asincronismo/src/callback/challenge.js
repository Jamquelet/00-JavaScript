//instalar: npm i xmlhttprequest
//https://www.npmjs.com/package/xmlhttprequest
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;//API de JavaScript que se utiliza para enviar y recibir datos entre el navegador y un servidor web de manera asíncrona - asi llamamos la libreria
const API = 'https://api.escuelajs.co/api/v1';//llamado a la api

function fetchData(urlApi, callback) {// recibir la url y el callback para recibir la solicitud al llamado a esta api
    let xhttp = new XMLHttpRequest();//referencia 

    xhttp.open('GET', urlApi, true);//abrir conexion con la api- obtener true para habilitarla
    xhttp.onreadystatechange = function (event) {//escuchar diferentes estados para saber cuando esta disponible la info
        if (xhttp.readyState === 4) {//validar el tipo de estado en el que se encuentra - garantizar que sea el mismo valor y el mismo tipo de dato: 0 no inicializado, 1 loading send, 2 cuando ya se ejecuto el valor de send, 3 interactuando descargando o trabajando la solicutud, 4 completada la llamada
            if(xhttp.status ===200){ //validarlo sobre valor y tipo, 200 la solicitud correcta- https://developer.mozilla.org/es/docs/Web/HTTP/Status para saber el valor de las solicitudes y estatus que retorna 200, 300, 400 para errore, 500 errores del servidor. puede responder con un error, redireccion, o con un problema de ejecucion
                callback(null, JSON.parse(xhttp.responseText));
            }//para pasarle dos valores, primer elemento se para como valor nulo, y el segundo elemento una trasformacion de la informacion.vamos a recibir lo que entrega este servidor.
            else{//segundo if dejarlo sin un else, creamos una logica para el manejjo de la info cuando tengamos un error
                const error = new Error('Error'+ urlApi);//error particularmente fue en un elemento de la api
                return callback(error, null);//retornar lo que es el callback pero pasandole el valor de error o nulo porque no esoty regresando ningun dato
            }
            }
        }
    
    xhttp.send();//llamado de xhttp para que se ejecute
}

//llamar a la api info de ecomerce para mostrar la informacion pertinente- controlar los estatus 

fetchData(`${API}/products`, function(error1,data1){//pasarle con las template la base de la api pasarle /para decirle que vaya a- luego le pasamos una funcion anonima
    if(error1) return console.error(error1);//validar que si da error detenga la ejecucion

    fetchData(`${API}/products/${data1[0].id}`, function(error2,data2){//llamar a un producto en particular primer elemento del array y que me de el id
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3,data3){//optional chaining emaS6
           if (error3) return console.error(error3);//anidar los niveles que desee 
           console.log(data1[0]);//mostrar la info en consecuencia de cada una de las peticiones 1er console valor de todos los objetos que esta trayendo traer el titulo del elemento de la peticion 2, categoria el nombre de la peticion 2
           console.log(data2.title);
           console.log(data3.name);
        });

    });//dentro de fetchdata vuelva a llamar a fetchdata con otra logica consecuente de obtener la info
});
//para llamarlo desde la consola node src/callback/challenge.js tambien agregamos este script al package json para ejecutarlo con npm run callback desde la terminal