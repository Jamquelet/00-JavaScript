/*var ages = [33, 15, 27, 40, 22];
programa en Dart que las ordene e imprima la edad mayor, la edad menor y la edad promedio con sus respectivos mensajes: “La edad mayor es: ” , “La edad menor es: ”, “La edad promedio es: ” */
void main(){
    var ages = [33,15,27,40,22];

//ordenar las edades de menor a mayor 
ages.sort();

//obtener la edad mayor y menor
var edadMenor = ages.first;
var edadMayor = ages.last;

//obtener la edad promedio
var sumaEdades = ages.reduce((value,element) => value + element);
var edadPromedio = sumaEdades / ages.length;

//imprimir los resultados
print('La edad mayor es: $edadMayor');
print('La edad menor es: $edadMenor');
print('La edad promedio es:$edadPromedio');
}
