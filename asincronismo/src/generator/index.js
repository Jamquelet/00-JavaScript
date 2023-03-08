//permite crear una function que usamos para controlar ese iterador -estructura que permite utilizar un iterador con el cual podemos pausar y retomar segun sea el caso y la necesidad de la logica- podemos implementar funciones que pueden hacer un llamado iterar por esos elementos y si se necesita obtenerlos en el flujo de la app

function* gen(){
    // crear una funcion que podemos usar para controlar ese iterador lo que va permitir pausar o retomar lo que nosotros queremos en cualquier momento 

    //permite tener estos steck que vamos a tener
    yield 1;
    yield 2;
    yield 3;
}
const g = gen();
console.log(g.next().value);//next permite ir iterando por cada elemento
console.log(g.next().value);
console.log(g.next().value);

//


function* iterate(arr){
    for(let value of arr){
        yield value;
    }
}
const it = iterate(['a', 'b', 'c', 'd', 'e', 'f']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);