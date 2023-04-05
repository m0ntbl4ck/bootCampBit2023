/* //crear una función que pida el nombre del usuario y lo muestre en un mensaje de bienvenida

function mensajeBienvenida() {

    var namew = prompt("Ingrese su nombre");
    alert("Bienvenido " + namew);
}

mensajeBienvenida();

var num = parseInt(prompt("Ingrese un número"));

if (num < 10) {
    mensajeBienvenida();
}


function suma(num1, num2) {
    var total = num1 + num2;
    alert(total);
}

suma(10, 20);

suma(-111111, 0);

suma(23, 33);

var a = parseInt(prompt("Ingrese un numero"));
var b = parseInt(prompt("Ingrese un numero"));

suma(a, b); */

// crear un for, repetir 2 veces prompt donde le pidamos al suario dos numeros
// llamar la función y sumar valores

function pedirNumeros() {
    var a = [];
    for (var i = 0; i <= 1; i++) {
        a[i] = parseInt(prompt("Ingrese un numero"));
        alert(a[i]);

    }

}
pedirNumeros();

// crear una calculadora con un menu, con funcuiones y con los paremetros que se requieran