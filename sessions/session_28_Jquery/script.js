//utilice sentencias e insgtrucciones de JQuery
//Todo lo que pongamos aquí, se ejecuta SOLO cuando el document este ready o listo
//SELECTOR ID
document.getElementById("dato"); //JS
$("#dato"); //JQuery

//SELECTOR CLASS
document.getElementsByClassName("btn"); //JS
$(".btn"); //JQuery

//Value
document.getElementById("dato").value; //JS
$("#dato").val();

$("#dato").val("hola chicos como están?"); //JQuery

//Evento
//var //boton = document.getElementsByClassName("btn");
//boton.//addEventListener(function(){});

$(".btn").click(function () {
    alert("Hola chicos");
});