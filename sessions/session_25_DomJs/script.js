//DOM Document Object Model

//Accceso a nodos

//Mediante el nombre etiquta ---> document.getElementsByTagName()
var parrafos = document.getElementsByTagName("p");

for (var i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i].innerText)//obtengo el texto de cada etiqueta  
}

console.log("_____________________________");

for (var i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i]);//obtengo el texto de cada etiqueta  
}

//Mediante la propiedad name ---> document.getElementsByName()
var a = document.getElementsByName("parrafo1");

for (var i = 0; i < a.length; i++) {
    console.log(a[i].innerText);
}
//Mediante el ID ---> document.getElementsById()
var b = document.getElementById("boton");
console.log(b.innerText);

//Mediate la clase ---> document.getElementsByClassName()
var c = document.getElementsByClassName("saludo");
for (var i = 0; i < c.length; i++) {
    console.log(c[i].innerText);
}

/* Cuando alguien haga click en el botón, mostrar en un alert, un saludo con el nombre del usuario, 
que previemente ingreso en el input.
AYUDA: la propiedad value de un input, me devuelve el texto ingresado por el usuario */

function mostrar_mensaje() {
    var c = document.getElementById("boton").value;
    alert("Hola como estás:" + c);
    console.log("Hola como estás: " + c);
}

var enlace = document.getElementById("link");
console.log(enlace.href);
console.log(enlace.style.color);
console.log(enlace.className);
console.log(enlace.getAttribute("style"));


/* Crear una etiqueta (cualquiera, colocarle un ID)
//En base a ese ID, desde Javascript agregarle Crear una etiqueta (cualquiera), 
colocarle un ID, en base a ese ID, desde Javascript agregarle los siguientes atributos:

  - class = miClase
  - color de ltra = verde
  - texto interno = Hola, estamos hackeando la matrix!*/



var parrafo = document.getElementById("miClase");
parrafo.className = "esta clase la agregue con js";
parrafo.style.color = "green";
parrafo.innerText = "Hola esto es matrix y te estamos hackeando";


function cambiarBackgroudColor() {
    var back = document.getElementById("background");
    back.style.backgroundColor = "black";
}


function capturasDatos() {
    var nom = document.getElementById("nombre").value;
    var ape = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    console.log("Nombre: " + nom + " Apellido: " + ape + " edad: " + edad)
}
