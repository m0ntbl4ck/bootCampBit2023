/*1) El usuario escribe un número y el script imprimirá (console.log) todos los números menores que al dividirlos por 3 
den como resto 2.*/

/* var num3 = parseInt(prompt("Ingrese un numero"));

for (let i = 1; i < num3; i++) {
    if (i % 3 === 2) {
        console.log(i);
    }
} */

/* El usuario deberá teclear una letra y un número, y el programa mostrará una cadena formada por la letra repetida 
el número que haya tecleado.
Ej: Si el usuario teclea x y 5 el script mostrará xxxxx. O sea una cadena de 5 letras x */


/* var rn = parseInt(prompt("Ingrese un numero"));
var letr = prompt("Ingrese una letra");
var concatenar = "";


for (let i = 1; i <= rn; i++) {

    concatenar += letr;
}

console.log(concatenar); */
/*3) Se le solicita al usuario que teclee 4 números (uno cada vez). Con esos números el programa deberá calcular 
la media aritmética. O sea la suma de los 4 números dividida entre 4*/

/* var media = 0;
for (let i = 1; i <= 4; i++) {
    media += parseInt(prompt("Ingrese un numero"));

}


media /= 4;

console.log(media); */


/*4) Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero, el programa escribirá 
con asteriscos tantas lineas como diga ese número. Cada linea estará formada por una serie de astericos tan larga 
como diga el número de línea en el que está.

Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.
Ej: si ingresamos el valor 5, el resultado será:

*
**
***
****
*****
*/

var x = parseInt(prompt("Ingrese un numero"));
var triangulo = "";
var i, j;
for (i = 1; i <= x; i++) {
    for (j = 1; j <= x - i; j++) {
        triangulo = triangulo + " ";
    }
    for (j = 1; j <= i; j++) {
        triangulo = triangulo + "*";
    }
    triangulo = triangulo + "\n";
}
console.log(triangulo);


/* 5) Se quiere tener un contador de dos dígitos en base 5. El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. El contador debe deternerse cuando alcancemos el valor 1:4

Aclaración: Usamos un console.log para ir mostrando los valores de los dígitos, deberá quedar algo así:

0:0
0:1
0:2
...
...
1:4 será el final del conteo*/

/* var i, j;

for (i = 0; i <= 1; i++) {
    for (j = 0; j <= 4; j++) {
        console.log(i + ":" + j);
    }
} */



/*6) Crear un script para controlar las vueltas de una deportista. 
Debe pedir al usuario la cantidad de vueltas que va a realizar e ir preguntando el tiempo (en segundos) de cada vuelta. 
Al final, se debe mostrar un mensaje listando los tiempos de cada vuelta y el promedio del tiempo de las vueltas 
(suma de las vueltas / cantidad de vueltas).
Ejemplo: 
Cantidad de vueltas: 3
Vuelta 1: 133s
Vuelta 2: 145s
Vuelta 3: 166s
⏱ Promedio: 144.45s*/

/* var cvuelta = parseInt(prompt("Ingrese cuantas vueltas realizó"));
var tvuelta;
var tiempototal = 0;
var media = 0;
for (let i = 1; i <= cvuelta; i++) {
    tvuelta = parseInt(prompt("Ingrese el tiempo en segundos sin comas ni puntos de la " + i + " vuelta:"));
    media += tvuelta;
    tiempototal += tvuelta;
    console.log("Vuelta " + i + ": " + tvuelta + " s");

}
media /= cvuelta;
tiempototal /= 60;

console.log("El Promedio de vuelta fue: " + media + " s");
console.log("El tiempo total fue: " + tiempototal + " min");
 */

