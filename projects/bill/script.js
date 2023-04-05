// DOM BILL
var sectionBill = document.getElementById("sectionBill")
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var date = document.getElementById("date");
var mail = document.getElementById("mail1");

var send = document.getElementById("send");
var add = document.getElementById("add");
var tbody = document.getElementById("tbody");

var number = document.getElementsByClassName("cant");
var product = document.getElementsByClassName("product");
var price = document.getElementsByClassName("price");


send.addEventListener("click", function () {
    var table = document.createElement("tbody");
    var array1 = [], array2 = [], array3 = [], i;
    var dataClient = document.createElement("h4");
    var thead = document.createElement("thead")

    dataClient.textContent = " Datos del cliente";
    dataClient.className = "fs-4 text";
    var row0 = document.createElement("tr");
    var row0Col1 = document.createElement("th");
    row0Col1.scope = "col";
    row0Col1.appendChild(dataClient);
    row0.appendChild(row0Col1);
    thead.appendChild(row0);


    var row1 = document.createElement("tr");
    var row1Col1 = document.createElement("td");
    var name = document.createElement("p");
    name.className = "fs-6 text";

    name.textContent = "Nombre Completo: " + firstName.value + " " + lastName.value;
    row1Col1.appendChild(name);
    row1.appendChild(row1Col1);
    table.appendChild(row1);


    var row2 = document.createElement("tr");
    var row2Col1 = document.createElement("td");
    var email = document.createElement("p");
    email.className = "fs-6 text";
    email.textContent = "Dirección de email: " + mail.value;
    row2Col1.appendChild(email);
    row2.appendChild(row2Col1);
    table.appendChild(row2);


    var row3 = document.createElement("tr");
    var row3Col1 = document.createElement("td");
    var dte = document.createElement("p");
    dte.textContent = "Fecha de facturación: " + date.value;
    dte.className = "fs-6 text";
    row3Col1.appendChild(dte);

    row3.appendChild(row3Col1);
    table.appendChild(row3);


    var i, total1 = 0, total3 = 0;
    for (i = 0; i < number.length; i++) {
        array1[i] = number[i].value;
        total1 = parseInt(total1) + parseInt(array1[i]);
    }
    for (i = 0; i < product.length; i++) {
        array2[i] = product[i].value;
    }
    for (i = 0; i < price.length; i++) {
        array3[i] = price[i].value;
        total3 = parseInt(total3) + parseInt(array3[i]);
    }


    var row4 = document.createElement("tr");
    var row4Col1 = document.createElement("th");
    var dataBill = document.createElement("h4");
    dataBill.className = "fs-4 text";
    dataBill.textContent = "Resumen de compra";

    row4Col1.appendChild(dataBill);
    row4.appendChild(row4Col1);
    table.appendChild(row4);
    sectionBill.appendChild(thead);
    sectionBill.appendChild(table);
    var tableResult, tableResult1, cantidad, nombre, precio;
    for (i = 0; i < array1.length; i++) {
        tableResult = table.insertRow(-1);
        cantidad = tableResult.insertCell(0);
        nombre = tableResult.insertCell(1);
        precio = tableResult.insertCell(2);
        cantidad.innerHTML = array1[i];
        nombre.innerHTML = array2[i];
        precio.innerHTML = array3[i];


    }

    tableResult1 = table.insertRow(-1);
    totalColumn1 = tableResult1.insertCell(0);
    totalColumn3 = tableResult1.insertCell(1);
    totalColumn1.innerHTML = "Total de articulos: " + total1;
    totalColumn3.innerHTML = "Valor total a pagar: " + total3;

    var button = document.createElement("button");
    button.textContent = "pagar:";
    button.id = "pay";

    var pay = document.getElementById("pay");

    table.appendChild(button);
    console.log(array1)
    console.log(array2)
    console.log(array3)
});


add.addEventListener("click", function () {
    var row = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");
    var inputNumber = document.createElement("input")
    var inputPrice = document.createElement("input")
    var inputText = document.createElement("input")

    inputNumber.type = "number";
    inputNumber.required = "";
    inputNumber.max = "100";
    inputNumber.min = "1";
    inputNumber.className = "cant form-control mb-3";
    inputNumber.pattern = "[0-9]+";
    inputNumber.arialabel = "Dollar amount (with dot and two decimal places)";
    inputNumber.ariadescribedby = "inputGroup-sizing-sm";


    inputText.type = "text";
    inputText.required = "";
    inputText.className = "product form-control mb-3";
    inputText.ariadescribedby = "inputGroup-sizing-sm";

    inputPrice.type = "Number";
    inputPrice.required = "";
    inputPrice.max = "100000000";
    inputPrice.min = "1";
    inputPrice.pattern = "[0-9]+";
    inputPrice.className = "price form-control mb-3";
    inputPrice.arialabel = "Dollar amount (with dot and two decimal places)";
    inputPrice.ariadescribedby = "inputGroup-sizing-sm";


    col1.appendChild(inputNumber);
    col2.appendChild(inputText);
    col3.appendChild(inputPrice);


    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    tbody.appendChild(row);
})


pay.addEventListener("click", function () {
    alert("Su pago fue exitoso");
})
