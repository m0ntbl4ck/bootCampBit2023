
/* var num1 = document.getElementById("num1");


num1 = addEventListener("click", function(){
 
}) */




var tabla = document.getElementById("tabla");
var btn = document.getElementById("add");

//agregar nuevas tablas forma 1
btn.addEventListener("click", function(){
var fila =document.createElement("tr")
var column=document.createElement("td")
var date= document.createTextNode("esto es un dato de prueba")

column.appendChild(date);
fila.appendChild(column);

tabla.appendChild(fila); 
//forma 2
var miTabla=" ";
miTabla=miTabla +"<tr><td>Hola chicos como estas</td></tr>";
tabla.innerHTML = miTabla;
})



/* EJERCICIO

Se le solicita al usuario que ingrse:
- Nombre, Apellido, Email y Telefono
- Fecha
- Productos (cantidad, nombre del producto y precio)

Cuando haga click en un botón "Generar factura": 
- mostrar todos los datos (ordenados), calculando el total a pagar


FACTURA

nombre apellido
email
telefono

fecha

CANT.  PRODUCTOS    PRECIO
1      Zapatilla    $100
3      Caramelos    $67

Total a pagar= $167 */