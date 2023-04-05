// Event listener
/*
elemento.addEventListener("evento");
click
mouseover
blur
abort
*/

var btn = document.getElementById("boton");

btn.addEventListener("click", function () {
    alert("Hola mundo");
}
)

/* var acc = document.getElementById("btn");
acc.addEventListener("click", function btn() {
    var num = document.getElementById("num").value;
    console.log(num);
    if (num % 2 === 0) {
        alert("El número: " + num + " es par");
    }
    else {
        alert("El número: " + num + " es inpar");
    }
})
 */
var acc = document.getElementById("btn");
var result = document.getElementById("result");
acc.addEventListener("click", function btn() {
    var num = document.getElementById("num").value;
    if (num === null) {
        result.innerText = ("Ingrese un número valido");
    }
    if (num % 2 === 0) {

        result.innerText = ("El número: " + num + " es par");
        result.style.color = "blue";
    }
    else {
        result.innerText = "El número: " + num + " es inpar";
        result.style.color = "red";
    }
})

var reset = document.getElementById("reset");

reset.addEventListener("click", function () {
    var num = document.getElementById("num").value;
    result.innerText = " ";
    num.value = " ";
})


var text = document.getElementById("texto");

text.addEventListener("keyup", function () {
    var h31 = document.getElementById("respuesta1");
    var h32 = document.getElementById("respuesta2");
    var h33 = document.getElementById("respuesta3");
    var h34 = document.getElementById("respuesta4");
    var h35 = document.getElementById("respuesta5");
    h31.innerText = text.value;
    h32.innerText = text.value.toLowerCase();
    h33.innerText = text.value.toUpperCase();
    h34.innerText = text.value;
    h34.style.fontStyle = "italic";
    function invertir(text) {
        var array = [...text];
        var j = 0, array2 = [];
        for (var i = array.length - 1; i >= 0; i--) {
            array2[j] = array[i];
            j++;
        }
        array2 = array2.join("");
        return array2;
    }
    h35.innerText = invertir(text.value)
});