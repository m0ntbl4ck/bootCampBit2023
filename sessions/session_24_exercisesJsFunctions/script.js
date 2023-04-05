
//Calculadora con funciones


var opt, a, b, c, y, x = true;

function suma(num1, num2) {
    c = num1 + num2;
    return c;
}
function resta(num1, num2) {
    c = num1 - num2;
    return c;
}
function multiplicacion(num1, num2) {
    c = num1 * num2;
    return c;
}
function division(num1, num2) {
    c = num1 / num2;
    return c;
}
function modulo(num1, num2) {
    c = num1 % num2;
    return c;
}
function pedirNumero() {
    a = parseFloat(prompt("Ingrese el primer número numero."));
    b = parseFloat(prompt("Ingrese el segundo número numero."));
    return a, b;
}
while (x === true) {
    opt = parseFloat(prompt("1) Suma.\n\n 2) Resta.\n\n 3) Multiplicación.\n\n 4) División. \n\n 5) Módulo.\n\n 6) Salir. \n\nIngrese una opción para realizar una operación."));
    switch (opt) {
        case 1:
            pedirNumero();
            alert(suma(a, b));
            break;
        case 2:
            pedirNumero();
            alert(resta(a, b));
            break;
        case 3:
            pedirNumero();
            alert(multiplicacion(a, b));
            break;
        case 4:
            pedirNumero();
            y = true;
            while (y === true) {
                if (b != 0) {
                    alert(division(a, b));
                    y = false;
                }
                else {
                    alert("No se puede realizar la división por 0. \n\n Ingrese un número diferente.");
                    b = parseFloat(prompt("Ingrese el segundo número."));
                }
            }
            break;
        case 5:
            pedirNumero();
            alert(modulo(a, b));

            break;
        case 6:
            x = false;
            break;
        default:
            alert("Ingrese una opción valida entre 1 y 6.");
            break;
    }
}


/* EJERCICIO: Según un texto ingresado por el usuario, van a crear 3 funciones:

- mayusculas (que reciba un parametro y devuelva eso mismo en mayúsculas)
- minusculas (que reciba un paramentro y devuelva eso mismo en minúsculas)
- mostrar (que reciba un parametro y muestre por consola eso mismo)

Darle a elegir al usuario, como desea transformar el texto (a may o min) y luego se muestra */

function upperCase(t) {
    return t = t.toUpperCase();
}
function lowerCase(t) {
    return t = t.toLowerCase();
}
function textoIngresado() {
    var texto = prompt("Ingrese el texto que desea convertir:");
    return texto;
}
var opt, x = true, textoo;
textoo = textoIngresado();
while (x === true) {
    opt = parseFloat(prompt("Que desea realizar:\n\n 1) Convertir texto a Minúscula. \n 2) Convertir texto a Mayúscula.\n 3) Mostrar texto original.\n 4) Modificar texto. \n 5) salir."));
    switch (opt) {
        case 1:
            alert(lowerCase(textoo));
            break;
        case 2:
            alert(upperCase(textoo));
            break;
        case 3:
            alert(textoo);
            break;
        case 4:
            textoo = textoIngresado();
            break;
        case 5:
            x = false;
            break;
        default:
            alert("Ingrese una opción valida entre 1 y 5.");
            break;
    }
}


/* Ejercicio Palíndromo Crear una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo,
  es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
  
  Ejemplo: 
  - Anana 
  - La ruta nos aporto otro paso natural */


function ingresar() {
    var palindroIngresado = prompt("Ingrese un texto para determinar si es un palíndromo");
    return palindroIngresado;
}
function check(palindromo) {
    var i, pArray2 = [], pArray = [...palindromo];
    for (i = 0; i < pArray.length; i++) {

        if (pArray[i] === ' ') {
            pArray.splice(i, 1);
        }
    }
    var j = 0;
    for (i = pArray.length - 1; i >= 0; i--) {
        pArray2[j] = pArray[i];
        j++;
    }
    for (i = 0; i < pArray.length; i++) {

        if (pArray[i] != pArray2[i]) {
            return false;
        }
    }
    return true;
}
var text, chck, opt, x = true;
alert("Bienvenido este programada le ayudará a identificar si el texto ingresado es un Palíndromo es decir, si se lee de la misma forma desde la izquierda y desde la derecha");
while (x === true) {

    opt = parseFloat(prompt("Que desea hacer: \n\n 1) Ingresar un palíndromo.\n 2) Salir."));

    switch (opt) {
        case (1):
            text = ingresar();
            chck = check(text);
            if (chck === true) {
                alert("El texto ingresado es  un palindromo");
            }
            else {
                alert("El texto ingresado no es  un palindromo");
            }
            break;
        case (2):
            x = false;
            break;
        default:
            alert("Ingrese una opción valida entre 1 y 2.");
            break;
    }


}