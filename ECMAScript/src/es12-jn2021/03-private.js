class user {
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    //metodos
    #speak(){
        return 'HELLO';
    }
    greeting(){
        return `${this.speak()} ${this.name} ${this.age}`;
    }
    //obtener
    get #uAge(){
        return this.age;
    }
    //
    set #uAge(n){ //se vuelve privado y solo puede ser accedido dentro de la clase
        this.age = n;
    }
}

const developer1 = new user ('david', 16);
console.log(developer1.uAge);
console.log(developer1.uAge = 20);