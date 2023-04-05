var array = [];
localStorage.setItem("incrementador", 0)
mostrar()

var add = document.getElementById("btn").addEventListener("click", function () {

    var homework = document.getElementById("homework").value;

    array[localStorage.getItem("incrementador")] = homework;


    localStorage.setItem("lista", array);
    localStorage.setItem("incrementador", parseInt(localStorage.getItem("incrementador")) + 1)
    console.log(localStorage.getItem("lista"))

    var row
    var col
    var list = document.getElementById("list");
    row = list.insertRow([0]);
    col = row.insertCell(0);
    col.textContent = array[localStorage.getItem("incrementador")]
    col.className = " fs-5 text col-md- text-center";
    row.appendChild(col)
    list.appendChild(row)
    /*  for (i = 0; i < array.length; i++) {
         row = list.insertRow([0]);
         col = row.insertCell(0);
         col.textContent = array[i]
         col.className = " fs-5 text col-md- text-center";
         row.appendChild(col)
         list.appendChild(row)
     } */
}


    /* localStorage.setItem("hayTareas", 1); */
);

/* 
var tPendiente = document.getElementById("tPendiente").addEventListener("click", function () {

    mostrar()

}) */


function mostrar() {
    localStorage.getItem("incrementador")
    console.log(localStorage.getItem("lista"));
    /*  localStorage.setItem("incrementador", parseInt(localStorage.getItem("incrementador")) + 1) */
    var array1 = localStorage.getItem("lista");
    var col, row;
    var list = document.getElementById("list");
    var i = 0;
    /* var row = document.createElement("tr");
    var col = document.createElement("td")
    var list = document.getElementById("list"); */
    array = array1.split(",");
    console.log(array)
    for (i = 0; i < array.length; i++) {
        /* list1.textContent = array[i];
        list1.className = " fs-5 text col-md- text-center";
        list.appendChild(list1) */
        row = list.insertRow([0])
        col = row.insertCell([0])
        col.textContent = array[i]
        col.className = " fs-5 text col-md- text-center";
        row.appendChild(col)
        list.appendChild(row)

    }
}