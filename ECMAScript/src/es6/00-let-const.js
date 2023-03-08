//npm init con el flag -y da una conf por defecto npm init -y 

var lastName = 'JA';
lastName = 'MM' //reasignar

let fruit = 'a';
fruit = 'kiwi';

const animal = 'dog'; // no puedo reasignar un valor con const 


const fruits = () => {
    if(true){
        var f1 = 'a';//FUNCTION SCOPE
        let f2 = 'kiwi'//BLOCK SCOPE
        const f3 = 'b';//BLOCK SCOPE
    }
    console.log(f1,f2,f3);
}
fruits();// no se imprime block scope