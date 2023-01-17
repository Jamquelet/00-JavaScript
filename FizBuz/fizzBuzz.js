//División, módulo y residuo en JavaScript
//join("") unir los elementos del arreglo en una cadena
/* var vowel;
for(i=1; i<=5; i++) {
    i = [];
    i[0] = "a<br>", i[1] = "e<br>", i[2] = "i<br>", i[3] = "o<br>", i[4] = "u<br>";
    document.write(i);
} */
/* for(i=1; i<=5; i++) {
    i = ["a<br>", "e<br>", "i<br>", "o<br>", "u<br>"];
    document.write(i.join(""));
} */
//modulo para obtener residuos %
/* var numbers = 100;
for(i=1; i<=100; i++) {
    if(i % 3 == 0) {
        document.write("Fizz");
    }else if(i % 5 == 0) {
        document.write("Buzz");
    }
    else {
        document.write(i);
    }    
    document.write("<br/>")
} */
/* var numbers = 100; //primera forma
var divisible = false;

for(var i=1; i<=100; i++) {
    divisible = false;
    if(i % 3 == 0) {
        document.write("Fizz");
        divisible = true;
    }if(i % 5 == 0) {
        document.write(" Buzz");
        divisible = true;
    }
    if(!divisible) {
        document.write(i);
    }    
    document.write("<br/>")
}
 */
/* for (var i = 1; i<=100; i++) {
    if (i % 3 == 0) {
        document.write("Fizz");
    } if (i % 5 == 0) {
        document.write("Buzz");
    } if(i%3 !=0 && i%5 !=0) { //si el # modulo entre 3 es diferente de 0 y el numero que itera modulo 5 es diferente entre 0 ejecute
        document.write(i);
    }
    document.write("<br/>");
} */
for (var i = 1; i<=100; i++) {
    if (esDivisible(i,3)) {
        document.write("Fizz");
    } if (esDivisible(i,5)) {
        document.write("Buzz");
    } if(!esDivisible(i,3) && !esDivisible(i,5)) { //si el # modulo entre 3 es diferente de 0 y el numero que itera modulo 5 es diferente entre 0 ejecute
        document.write(i);
    }
    document.write("<br/>");
}
function esDivisible(num, divisor) { //retorna true si el # es divisible y false si no
    if (num % divisor == 0) {
        return true;
    } else {
        return false;
    }
}