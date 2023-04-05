/* var totalFibo = parseInt(prompt("Ingrese el número que de terminos que quiere mostrar 
-de la serie Fibonacci "));
var i;
var fibo = [0, 1];
for (i = 2; i <= totalFibo + 1; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);
alert(fibo);
 */

//ordenar numeros de menor a mayor

/* var num = parseInt(prompt("Cuantos numero desea ordenar de menor a mayor?"));
var i, j, array = [];
var temp;

for (i = 0; i <= num - 1; i++) {
    array[i] = parseInt(prompt("Ingrese un numero"));
}

var x = array.length;
for (i = 0; i < x; i++) {
    for (j = 0; j < x - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}
console.log(array);
alert(array); */


/* Ejercicio 2
Crear un programa que permite ingresar distintos valores, y luego preguntar qué valor se desea averiguar 
si existe. 
El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales
 o no.
Ej: 
- se ingresa los valores: 5 7 99 34 54 2 12
 - valor a buscar: 54
 - RESULTADO: El valor 54 se encuentra entre los valores originales*/


var lengtharray = parseInt(prompt("Ingrese el tamaño de su array"));
var array = [];
var i;
for (i = 0; i < lengtharray; i++) {
    array[i] = parseInt(prompt("Ingrese el numero de su array de la posición " + i));

}
var numsearch = parseInt(prompt("Ingrese el número que desea buscar en el array"));
for (i = 0; i < lengtharray; i++) {
    if (numsearch == array[i]) {
        alert("Su valor " + array[i] + " se encontro en la posición " + i)
    }
}
/*Ejercicio 3
Crear un programa que p¨¨ida ingresar las siguientes frutas: Manzana, Naranja o Pera.
Y devuelva un mensaje con la cantidad que hay de cada fruta.

Aclaración: puede utilizar un menú, y cuando selecciones "Salir", finaliza el programa*/


