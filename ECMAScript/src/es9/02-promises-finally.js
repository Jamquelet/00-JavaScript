const anotherFunction = ()=>{//arrowfunction
    return new Promise((resolve,reject) =>{//funcion anonima o arrow function, 
        if(false){//logica necesaria para saber si tengo un resolve o un reject, true para asegurar que el primer bloque q estememos ejecutando es el q va a suceder
            resolve('Hey!!');//objeto arreglo o lo q va a suceder
        } else {
            reject('whoooops!')//retorna string como  no funciono 
        }
    })
}
//promesa algo que va a suceder, cuando hoy mañana o nunca

anotherFunction()
//entonces then
    .then(response => console.log(response))//retorna un response return directo , que va a regresar cuando entre en el resolve
//catch, si no llega a resolverse de forma exitosa esta promesa
  
    .catch(err => console.log(err))
    .finally(()=>console.log('Finnaly'));
    