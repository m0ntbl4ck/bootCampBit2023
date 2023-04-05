// sintaxis de if
/* let v = true;
if (v === true) {
    alert("true");
}
else {
    alert("false");
} */


//operador ternario if

/* (v === true) ? alert("true") : alert("false"); */

/* let num = 9;

(num > 10) ? alert("es mayor que 10") : alert("es menor que 10");

// se puede simplificar mucho mas de esta forma
alert((num > 10) ? "Es mayor" : "Es menor");

let text = (num > 10) ? "Es mayor" : "Es menor";

alert(text);

//operador ternario SIn else
(num > 10) ? alert("Es mayor") : ''; */


//Según un número ingresado por prompt analizar con un operador ternarios, si es par o inpar

/*
let parInpar = parseInt(prompt("ingrese un número"));

alert((parInpar % 2 === 0) ? `El número ${parInpar} es par` : `El número ${parInpar} es impar`);
 */


// Mediante el operador ternario hacer lo siguiente
// Ingresa 1 ---> "hola 
// Ingresa 2 ---> "como está"
// Ingresa 3 ---> 'chau'

/* let a = parseInt(prompt("ingrese un número"));

alert((a === 1) ? 'Hola' : ((a === 2) ? 'Como estás' : ((a === 3) ? 'Chau' : '')));
 */

//alcance Scope / ambito de una variable



// Global 

var num = 'Brandon';


//local/function que se ejecuta dentro de un ambito cerrado ej dentro de function
/* function saludar() {
    var saludo = 'Hola como estas';



} */
// no se ejecuta el console.log (saludo), genera error;
//console.log(saludo);
/* console.log(num);
 */




// var permite modificar una variable a nivel global en cualquier ambito;

/* num = 10;

num = 20;
 */


//hoisting permite ejecutar procesos con variables y luego crear estas variables

// var permite hoisting


/* console.log(sumar());

console.log(texto);
var texto = "hola mundo"; */

/* function sumar() {

    var total = 2 + 2;
} */

/* var msj = "hola mundo";
var num = 10;


if (num > 9) {
    var msj = "hola como estas?";
    console.log(msj)
}
console.log(msj)


 */


//let y Const
//Variable != Constante



// let 

//el ambito de let es en bloque y lo define los corchetes o llaves {}

let msj = "hola mundo";
let numero = 10;


if (numero > 9) {
    let msj = "hola como estas?";
    console.log("dentro del if dunciona como una segunda variable" + msj) // se genera error
}

console.log('fuera del if funciona como una variable' + msj)

// let puede modificarse pero no volver a declararse

let mensaje = 'hola';
//let mensaje = 'como estas'; // genera error 


// Const tiene ambito de bloque

// no permite modificarse ni volver a declararse
const saludo = "hola como estas"
// saludo = "hola mundo"; // genera error 


