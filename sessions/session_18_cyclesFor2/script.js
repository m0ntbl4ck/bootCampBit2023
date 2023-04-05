/* 
//for
let num = parseInt(prompt("ingrese un numero"));

let sum = 1;
for (let i = 2; i <= num; i++) {
    sum = sum + i;

}
console.log(sum)

// while
num = parseInt(prompt("ingrese un numero"));

i = 2;
sum = 1;
while (i <= num) {

    sum = sum + i;
    i++;
}
console.log(sum);

//do while
num = parseInt(prompt("ingrese un numero"));
i = 2;
sum = 1;

do {
    sum = sum + i;
    i++;
}
while (i <= num);

console.log(sum); */




/* var texto = "hola este es un texto muy cool"

palabra = texto.slice();// recorre un string desde x pposicion hasta y posiión
console.log(palabra);

palabra = texto.slice(5); // devuleve la subcadena empezando por la posición 5

palabra = texto.slice(5, 9); //devuelve la subcadena comenzando desde la pos. 5 hasta la posicion 9
console.log(palabra);

palabra = texto.slice(-5); //devuelve la subcadena comenzando desde el final, contando 5 posiciones

console.log(palabra); */



/* // primer ejercicio contar letras A primera forma:

var textoUsuario = prompt("Ingrese una frase o palabra");
var palabra = textoUsuario.toLowerCase();

var cont = 0;

for (let i = 0; i < textoUsuario.length; i++) {
    if (palabra.slice(i, i + 1) == 'a') {
        cont = cont + 1;
    
    }}
    console.log(cont);

    // segunda forma

var frase = prompt("Ingrese una frase o palabra");
var conteo = 0;

for (var i = 0; i < frase.length; i++) {
    if (frase.charAt(i).toLowerCase() == "a") {
        conteo++;
    }
}
alert(conteo);
console.log(conteo);

alert(frase);
console.log(frase);

//tercera forma

var text = prompt("Ingrese una frase o palabra");
var palabra = text.toLowerCase();
palabra = palabra.split('');
palabra = palabra.filter(palabra => palabra != ' ');


console.log(palabra);
var totala = 0;

for (i = 0; i < palabra.length; i++) {

    if (palabra[i] == 'a') {
        totala++;
    }

}
alert(totala);
console.log(totala);

alert(text);
console.log(text);
 */



//ejercicio de mostrar un texto al reves 



var textoUsuario = prompt("Ingrese una frase o palabra");
var palabra = textoUsuario.toLowerCase();


var cont = 0;

for (let i = 0; i < textoUsuario.length; i++) {
    if (palabra.slice(i, i + 1) == 'a') {
        cont = cont + 1;

    }
}
console.log(cont);

/* if (palabra[i] === 'a') {
    palabra[i] = 4;
}
else if (palabra[i] === 'e') {
    palabra[i] = 3;
}
else if (palabra[i] === 'i') {
    palabra[i] = 1;
}
else if (palabra[i] === 'o') {

    palabra[i] = 0;
}
else {
    break;
} */

/*  switch (palabra[i]) {
     case 'a':
         palabra[i] = 4;
         break;
     case 'e':
         palabra[i] = 3;
         break;
     case 'i':
         palabra[i] = 1;
         break;
     case 'o':
         palabra[i] = 0;
         break;
 }
  console.log(palabra);*/



