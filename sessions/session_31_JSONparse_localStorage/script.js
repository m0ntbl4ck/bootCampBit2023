
var x = 10;
localStorage.setItem("datoejemplo", x)
console.log(x);
console.log(localStorage.getItem("datoejemplo"))

//typeof arroja el tipo de valirable
console.log("el tipo de variable de la variable x es: " + typeof (x));

console.log("el tipo del localstorage es: " + typeof (localStorage.getItem("datoejemplo")));




var array = [1, 2, 3, 4];

localStorage.setItem("array", array);
console.log("el tipo de variable de la variable x es: " + typeof (array));
console.log("el tipo del localstorage es: " + typeof (localStorage.getItem("array")));

//Object Clave-valor

var persona = {
    nombre: "Juan",
    apellido: "Lopez",
    edad: 28,
}
/* cuando guardo un array en un localStorage de está manera localStorage.setItem("array", array);
me esparce todos los caracteres de letras, simbolos, etc,como elementos individuales 
todo un array cuando lo traiga de nuevo como array para corregir esto se debe usar JSON.stringify() 
y JSON.parse()*/

//guardar array con JSON.stringify
localStorage.setItem("array", JSON.stringify(array));

console.log(localStorage.getItem("array", array));

// obtener el valor del arrya con JSON.parse

array = JSON.parse(localStorage.getItem("array"))

console.log(array)

