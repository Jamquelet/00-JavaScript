function Car(brand, model, year) { 
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.toString = function() {
        return this.brand + " " + this.model + " " + this.year + " ";
    }
}

function createCar() {
    var brand = prompt("Ingrese la marca del coche:");
    var model = prompt("Ingrese el modelo del coche:");
    var year = prompt("Ingrese el año del coche:");
    return new Car(brand, model, year);
}

var cars = [];
for(var i = 0; i < 3; i++) {
    cars.push(createCar());
}

for(var i = 0; i < cars.length; i++){
    console.log(cars[i]);
}
//
