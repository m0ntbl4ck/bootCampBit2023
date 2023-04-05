// Brandon Orlando Vergara Montenegro Grupo 3 BIT

/*1) Crear un programa donde el usuario ingrese en un prompt la temperatura en grados Celcius
y el programa muestre en una alert la temperatura en grados Fahrenheit.*/

var conti;
var x = true;
while (x === true) {
    alert("Conversor de Grados Celsius a Grados Fahrenheit")
    var gradosCelsius = parseFloat(prompt("Ingrese los grados Celsius que desea convertir a grados Fahrenheit."));
    var gradosFahrenheit;

    gradosFahrenheit = gardosCelsius * (9 / 5) + 32;

    alert(gradosCelsius + "°" + " Celsius, es igual a: " + gradosFahrenheit + "°" + " Fahrenheit.")


    alert("Desea volver a usar el conversor");

    conti = parseInt(prompt("Ingrese 1 para volver a utilizar el conversor. \n\n Ingrese 2 para salir."));
    if (conti === 1 || conti === 2) {
        if (conti === 2) {
            x = false;
        }
    }
    else {
        while (conti > 2 || conti < 1) {
            conti = parseInt(prompt("Ingrese 1 para volver a utilizar el conversor. \n\n Ingrese 2 para salir."));
            if (conti === 1 || conti === 2) {
                if (conti === 2) {
                    x = false;
                }
            }

        }
    }
}







/*2) El usuario ingresa un número, se pide crear la siguiente pirámide (console.log) hasta dicho número ingresado
Ej: numero ingresado = 5*/



alert("Crea una piramide con el tamaño del número que ingreses:");

var x = parseInt(prompt("Ingrese un número y este número va ser el tamaño de la piramide: "));
var triangulo = "";
var i, j;
for (i = 1; i <= x; i++) {

    for (j = 1; j <= i; j++) {
        triangulo = triangulo + "*";
    }
    triangulo = triangulo + "\n";
}
for (i = 1; i <= x - 1; i++) {
    for (j = 1; j <= x - i; j++) {
        triangulo = triangulo + "*";
    }
    triangulo = triangulo + "\n";

}
console.log(triangulo);








// 3) Según un numero ingresado por el usuario, calcular su factorial

alert("Calcular el factorial de un número");
var repetir = true;
var contin;
while (repetir === true) {
    var numero = parseInt(prompt("Ingrese el número al que desea calcularle el factorial: "));
    var i;
    fact = 0;

    if (numero === 1 || numero === 0) {
        fact = 1;
        alert("el factorial de " + numero + " es: " + fact);
        alert("Desea volver a calcular el factorial de un número");

        contin = parseInt(prompt("Ingrese 1 para volver a calcular el factorial de un número. \n\n Ingrese 2 para salir."));
        if (contin === 1 || contin === 2) {
            if (contin === 2) {
                repetir = false;
            }
        }
        else {
            while (contin > 2 || contin < 1) {
                contin = parseInt(prompt("Ingrese 1 para volver a calcular el factorial de un número. \n\n Ingrese 2 para salir."));
                if (contin === 1 || contin === 2) {
                    if (contin === 2) {
                        repetir = false;
                    }
                }

            }
        }

    }
    else {
        fact = (numero * (numero - 1));
        for (i = numero - 2; i >= 1; i--) {
            fact = fact * i;
        }
        alert("el factorial de " + numero + " es: " + fact);

        alert("Desea volver a calcular el factorial de un número");

        contin = parseInt(prompt("Ingrese 1 para volver a calcular el factorial de un número. \n\n Ingrese 2 para salir."));
        if (contin === 1 || contin === 2) {
            if (contin === 2) {
                repetir = false;
            }
        }
        else {
            while (contin > 2 || contin < 1) {
                contin = parseInt(prompt("Ingrese 1 para volver a calcular el factorial de un número. \n\n Ingrese 2 para salir."));
                if (contin === 1 || contin === 2) {
                    if (contin === 2) {
                        repetir = false;
                    }
                }

            }
        }
    }
}







/* 4) 4) ATM (cajero automático)

Crear un programa que tenga un dinero inicial.
El programa también deberá contar con un menú con las siguientes opciones:
  - EXTRAER: debe pedir al usuario cuánto desea extraer y si el dinero a extraer es menor o igual al saldo actual, restar el dinero extraído al saldo
  - DEPOSITAR: debe pedir al usuario la cantidad a ingresar y sumarla al saldo actual
  - CONSULTAR SALDO: debe mostrar el saldo actual
  - VER ÚLTIMOS MOVIMIENTOS: debe mostrar una lista de los últimos moviemientos realizados
  - SALIR: debe terminar la ejecución del programa

El programa debe mostrar el menú de opciones, y permitir ingresar una opción.
Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú.
Si se elige SALIR, debe terminar el programa.
Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada,
volver al menú de opciones.
Las acciones de EXTRAER y DEPOSITAR y CONSULTAR SALDO deben registrarse cada vez que se realicen para poder
consultarse luego, por ejemplo:

ULTIMOS MOVIMIENTOS
 - Extraido: $50
 - Depositado: $550
 - Extraido: $1000
 - Consultado saldo: $3400
 - Depositado: $100
 - otra operacion
 - otra operacion
 */

var retirar = 0, depositar = 0, consultar = 0, retirado = [], depositado = [], consultado = [];
var i = 0, j = 0, k = 0;
var saldo = 5000;
continuar = true;

while (continuar === true) {
    alert("Bienvenido a su cajeto automatico ATM.");
    alert("¿Que desea hacer? \n\n 1): Retirar Saldo. \n\n 2): Depositar saldo. \n\n 3): Consultar saldo. \n\n 4): Ver últimos movimientos. \n\n 5): salir.");

    var opt = parseInt(prompt("Ingrese la opción que desea realizar"))
    switch (opt) {
        case 1:
            retirar = parseInt(prompt("Cuanto dinero desea retirar:"));
            if (retirar <= saldo && retirar > 0) {
                saldo = saldo - retirar;
                alert("Su saldo ha sido retirado exitosamente");
                retirado[i] = retirar + " Pesos ";
                i++;

            }
            else {
                if (retirar <= 0) {
                    alert("No ha ingresado un monto valido, Su transacción ha finalizado");
                }
                else {
                    alert("No puede retirar saldo mayor al actual. Su transacción ha finalizado");
                }
            }
            break;
        case 2:
            depositar = parseInt(prompt("Cuanto dinero desea depositar:"));
            if (depositar <= 0) {
                alert("No ha ingresado un monto valido, Su transacción ha finalizado");
            }
            else {
                saldo = saldo + depositar;
                alert("Su saldo ha sido depositado exitosamente");
                depositado[j] = depositar + " Pesos ";
                j++;
            }
            break;
        case 3:
            alert("Su saldo actual es: " + saldo);
            consultado[k] = saldo + " Pesos ";
            k++;
            break;
        case 4:
            alert("Ultimos movimientos: \n\n ");

            alert("Saldos retirados: " + retirado + "\n\n Saldos Depositados: " + depositado + "\n\n Saldos Consultados: " + consultado);
            break;
        case 5:

            alert("Muchas gracias por utilizar nuestros servicios. Si tiene alguna inquietud comuniquese con el banco. \n\n ");
            continuar = false;
            break;
        default:
            alert("Por favor ingrese una opción valida");

    }


}







/*5) Fibonacci Según un número ingresado por el usuario, mostrar la secuencia de Fibonacci hasta esa cantidad de veces.
Ej: el usuario ingresa el 8, mostrar:
0 1 1 2 3 5 8 13 21 34*/


// Primera forma de realziar la serie Fibonacci 
alert("Mostrar la serie Fibonacci");

var totalFibo = parseInt(prompt("Ingrese el número que de terminos que quiere mostrar de la serie Fibonacci "));
var i, num1, num2;
var fibo = 0;
num1 = 1;
num2 = 0;
document.write(num2 + "," + num1 + ",")
console.log(num2);
console.log(num1);
for (i = 1; i <= totalFibo; i++) {

    fibo = num1 + num2;
    num2 = num1;
    num1 = fibo;
    document.write(fibo + ",");
    console.log(fibo);

}

// Segunda forma de realziar la serie Fibonacci pero ahora con arrays que es mucho mejor

fibo = [0, 1];
for (i = 2; i <= totalFibo + 1; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);
alert(fibo);