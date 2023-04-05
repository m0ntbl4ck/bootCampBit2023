

//calculadora con switch
alert("Bienvenido a la calculadora, ¿Que desea realizar?:\n\n Ingrese 1 para realizar una suma.\n\n Ingrese 2 para realizar una resta.\n\n Ingrese 3 para realizar una multiplicación.\n\n Ingrese 4 para realizar una división.\n\n Ingrese 5 para salir.");
let opt = parseInt(prompt("Ingrese el número de la operación desea realizar"));
let x = true;
while (x === true) {
    if ((opt >= 1) && (opt <= 5)) {
        if (opt === 5) {
            break;
        }
        else {
            let a = parseInt(prompt("Ingrese un numero:", 0));
            let b = parseInt(prompt("Ingrese el segundo numero:", 0));
            let resultado = 0;

            switch (opt) {
                case 1:
                    alert("La suma de los numeros es: " + " " + (resultado = a + b));
                    break;
                case 2:
                    alert("La resta de los numeros es: " + " " + (resultado = a - b));
                    break;
                case 3:
                    alert("La multiplicación de los numeros es: " + " " + (resultado = a * b));
                    break;
                case 4:
                    if (b === 0) {
                        alert("Para que la división pueda efectuarse el segundo número ingresado debe ser diferente de 0")
                        let b = parseInt(prompt("Ingrese el segundo numero:", 0));
                        alert("La división de los numeros es: " + " " + (resultado = a / b));
                    }
                    else {
                        alert("La división de los numeros es: " + " " + (resultado = a / b));
                    }
                    break;
            }
            x = false;
        }
    }
    else {
        alert("Ingrese una opción entre 1 y 5 para elegir una opción: ");
        alert("Ingrese 1 para realizar una suma.\n\n Ingrese 2 para realizar una resta.\n\n Ingrese 3 para realizar una multiplicación.\n\n Ingrese 4 para realizar una división.\n\n Ingrese 5 para salir.");
        opt = parseInt(prompt("Ingrese el número de la operación desea realizar"));
    }
}



