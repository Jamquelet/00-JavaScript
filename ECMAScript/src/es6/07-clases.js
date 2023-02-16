//clases en Emc6 agrega mejora sintaxis sobre la herencia, basada en prototipos

//declarando
class User {};
//instancia de una clase
//const newUser = new User();

class user {
    //metodos
    greeting(){
        return 'Hello';
    }
};

const gndx = new user ();//instancia de la clase
console.log(gndx.greeting());//uso del metodo

const developer = new user();
console.log(developer.greeting());

//constructor

class user {
    
    constructor() {
        console.log('new user');
    }
    greeting(){return 'Hello there';}}

    const david = new user();

//this: elemento padre que lo contiene
class user {
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'Hello friend';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const anna = new user('Anna');
console.log(anna.greeting());


//setters getters

class user {
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    //metodos
    speak(){
        return 'HELLO';
    }
    greeting(){
        return `${this.speak()} ${this.name} ${this.age}`;
    }
    //obtener
    get uAge(){
        return this.age;
    }
    //
    set uAge(n){
        this.age = n;
    }
}

const developer1 = new user ('david', 16);
console.log(developer1.uAge);
console.log(developer1.uAge = 20);