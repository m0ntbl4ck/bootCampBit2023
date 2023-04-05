/* //Calcular cuantos pares y mostrarlos en X cantidad de numeros
let num = parseInt(prompt("ingrese un numero"));
if (num > 0) {
    let cont = 0;
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            cont++;
            console.log(i);
        }
    }
    console.log("El total de pares es:" + " " + cont);
}


// muestra la tabla de multiplicar de x numero;
let tm = parseInt(prompt("Ingrese un numero para ver su tabla de multiplicar"));
console.log("Tabla de multiplicar del" + " " + tm + ":");
for (let i = 1; i <= 10; i++) {
    console.log(tm + "x" + i + "=" + (tm * i));
}
 */


/* for (var i = 10; i >= 0; i--) {
    document.write("<h2>" + i + "</h2>");

}

document.write("<h2>¡Despegueeee! &#128640;<h2>");
document.write("<h2>&#128640;&#127761;<h2>"); */



let num = parseInt(prompt("ingrese un numero"));


let opt = parseInt(prompt("Desea ver que numeros son pares?:"));



let i = 1;
if (num > 0) {

    while (i <= num) {
        if (i % 2 === 0) {
            if (opt === 1) {


                document.write("<h2>" + i + "</h2>");
            }
            else {
                break;
            }
        }
        i++;
    }
    document.write("<h1>El total de pares es:" + " " + i + "</h1>");
}

