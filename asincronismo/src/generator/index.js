//permite crear una function que usamos para controlar ese iterador 
function* gen(){
    //permite tener estos steck que vamos a tener
    yield 1;
    yield 2;
    yield 3;
}
const g = gen();
console.log(g.next().value);
console.log(g.next().value);