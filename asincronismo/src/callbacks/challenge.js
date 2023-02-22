const XMLHttpRequest = require('xmlhttprequest');//API de JavaScript que se utiliza para enviar y recibir datos entre el navegador y un servidor web de manera asíncrona
const API = 'https//api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readtyState === 4) {
            if(xhttp.status ===200){
                callback(null, JSON.parse(xhttp.responseText))
            }
        }else{
            const error = new Error('Error'+ urlApi);
            return callback(error, null);
        }
    }
    xhttp.send();
}