/* let age = parseInt(prompt("Ingrese su edad", 0));


if (age >= 18) {

    alert("Eres mayor de edad");
}
else {
    alert("Aún eres menor de edad");
} */




let color = prompt("Ingrese su color favorito");

color = color.toLowerCase();
if ((color === 'amarillo') || (color === 'azul') || (color === 'rojo')) {

    alert("Tu color favorito es un color primaro:" + " " + color);
}
else {
    alert("Tu color favorito no es un color primaro:" + " " + color);
}


/* let color2 = prompt("Ingrese su color favorito");

if ((color2 === 'amarillo') || (color2 === 'azul') || (color2 === 'rojo')) {

    let primario = 1;
}

else {
    let primario = 2;
}

if (primario === 1) {
    alert("Tu color favorito es un color primaro:" + " " + color);
}
else {
    alert("Tu color favorito no es un color primaro:" + " " + color);
} */



let divi = parseInt(prompt("Ingrese un numero"));

if ((divi % 11 === 0)) {
    alert("El numero:" + " " + divi + " " + "ingresado es divisible por 11")
}
else if (divi % 5 === 0) {

    alert("El numero:" + " " + divi + " " + "ingresado es divisible por 5")
}

if ((divi % 11 === 0) && (divi % 5 === 0)) {
    alert("El numero:" + " " + divi + " " + "ingresado es divisible por 11 y por 5 a la vez")
}
else {
    alert("El numero:" + " " + divi + " " + "ingresado no es divisible por 11 y por 5 a la vez")
}




let par = parseInt(prompt("Ingrese un numero"));

if (par === 0) {

    alert("Ingresaste el cero absoluto")
}
else if ((par % 2 === 0)) {
    alert("El numero:" + " " + par + " " + "es par")
}
else {
    alert("El numero:" + " " + par + " " + "No es par")
}

