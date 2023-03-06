//pendiente cuando se esta ejecutando, cumplido, rechazado
const promise = new Promise((resolve, reject) => {
    resolve("hey!!") 
});

const cows = 9;

const countCows = new Promise((resolve, reject) => {
    if (cows>10){
        resolve(`We have ${cows} cows on the farm`);
    }else {
        reject('There is no cows on the farm');
    }
});

countCows.then(response => {
    console.log(response);
}).catch((error)=>{
    console.log(error);
}).finally(() =>console.log('Finally'));

//Crea una función de delay que soporte asincronismo
export function delay(time, message) {
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve(message);
      }, time);
    }
    );
  }
    