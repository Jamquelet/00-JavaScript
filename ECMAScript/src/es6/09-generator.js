//generator: tipo especial de funcion que retorna una serie de valores segun el algoritmo definido
function* iterate(array) {
    for (let value of array) {
        yield value; //retorna cada uno de esos valores cada que lo necesitemos
    }
}

const it = iterate(["David", "Ana", "Ulises", "jenn"]);
console.log(it.next().value);//next ejecucion metodo
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

//
export async function* getId() {
    let id = 1;
    while (true) {
      yield { value: `michi${id++}` };
    }
  }
  const idGenerator = getId();
  
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);