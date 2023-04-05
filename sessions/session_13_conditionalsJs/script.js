/* let a = parseInt(prompt("Ingrese un numero:", 0));
let b = parseInt(prompt("Ingrese el segundo numero:", 0)var
let suma = 0;
alert(suma = a + b);
 */

/* let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let signo = prompt("Ingrese su signo zodiacal:");
let long = nombre + apellido + signo;
long = long.length;

alert("Su nombre completo es:" + " " + nombre.toUpperCase() + " " + apellido.toUpperCase() + " " + "Su signo zodiacal es:" + " " + signo.toUpperCase() + " " + " y la longitud del texto es:" + " " + long);
 */

let a = parseFloat(prompt("Ingrese un numero:", 0));
let b = parseFloat(prompt("Ingrese el segundo numero:", 0));
let resultado = 0;

if (b === 0) {
    alert("Para que la división pueda efectuarse el segundo número ingresado debe ser difenrente de 0")
    let b = parseFloat(prompt("Ingrese el segundo numero:", 0));
    alert("La suma de los numeros es: " + " " + (resultado = a + b));
    alert("La resta de los numeros es: " + " " + (resultado = a - b));
    alert("La multiplicación de los numeros es: " + " " + (resultado = a * b));
    alert("La división de los numeros es: " + " " + (resultado = a / b));

}

else {
    alert("La suma de los numeros es: " + " " + (resultado = a + b));
    alert("La resta de los numeros es: " + " " + (resultado = a - b));
    alert("La multiplicación de los numeros es: " + " " + (resultado = a * b));
    alert("La división de los numeros es: " + " " + (resultado = a / b));
}


let num = parseInt(prompt("Ingrese un numero:", 0));
let num2 = parseInt(prompt("Ingrese el segundo numero:", 0));

if (num > 0) {
    alert("El numero es posotivo:" + " " + num);
}
else if (num === 0) {
    alert("El numero es el cero absoluto:" + " " + num);
}
else {
    alert("El numero es negativo: " + " " + num);
}


if (num2 > 0) {

    alert("El numero es positivo:" + " " + num2);
}
else if (num2 === 0) {
    alert("El numero es el cero absoluto:" + " " + num2);
}

else {
    alert("El numero es negativo: " + " " + num2);
}


if (num > num2) {
    alert("El numero" + " " + num + " " + "es mayor que el numero" + " " + num2);
}

else if (num === num2) {
    alert("El numero" + " " + num + " " + "y el numero" + " " + num2 + " " + "son iguales");
}
else {
    alert("El numero" + " " + num2 + " " + "es mayor que el numero" + " " + num);
}



if ((num % 2) == 0) {
    alert("El numero es par:" + " " + num);
}

else {
    alert("El numero es inpar: " + " " + num);
}

if ((num2 % 2) == 0) {

    alert("El numero es par:" + " " + num2);
}

else {
    alert("El numero es inpar: " + " " + num2);
}

