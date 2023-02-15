//arrays destructuring

let fruits = ['apple', 'banana'];
let [a,b] = fruits;
console.log(a, fruits[1]);

//Object destructuring

let user = {username:'JS', age:29};
let {username, age} = user;
console.log(username, user.age);

//operador de propagacion- spread operator
let person = {name:'JA', age: 18};
let country = 'MX';

let data = {id: 1, ...person, country};//para hacer la destructuracion en este caso con el operador de propagacion  de los elementos
console.log(data); 

//rest 
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1, 1, 2, 3);