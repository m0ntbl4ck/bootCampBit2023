/* localStorage.setItem("edad",30);// permite almacenar variables en un archivo mas local

localStorage.getItem("edad");// obtener un dato almacenado en un local storage

localStorage.removeItem("edad"); // permite eliminar una variable en el archivo local */


//guardar

/* var num1 = 8;

localStorage.setItem("num1",8) */

/* console.log(num);

console.log(localStorage.getItem("num2")) */


/* Solicitar al usuario que ingrese:
- Nombre
- Apellido
- Dirección
- Telefono
- Serie favoria (utilizar un select)

Y cuando haga click en "guardar", que se guarde en local storage
Y cuando haga click en "recuperar", que se muestre en un h4: 
  - Nombre: ******
  - APellido: *****
  - Dirección: *****
  - Telefono: ******
  - Serie favorita: ******* */





var save = document.getElementById("save");

var recover = document.getElementById("recover");


save.addEventListener("click", function () {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var addres = document.getElementById("addres").value;
    var phone = document.getElementById("phone").value;
    var serieee = document.getElementById("serieNetflix").value;
    console.log(serieee);



    localStorage.setItem("saveFirstName", firstName)
    localStorage.setItem("saveLastName", lastName)
    localStorage.setItem("saveAddres", addres)
    localStorage.setItem("savePhone", phone)
    localStorage.setItem("saveSerie", serieee)
}
)


recover.addEventListener("click", function () {

    console.log(localStorage.getItem("saveFirstName"))
    console.log(localStorage.getItem("saveLastName"))
    console.log(localStorage.getItem("saveAddres"))
    console.log(localStorage.getItem("savePhone"))
    console.log(localStorage.getItem("saveSerie"))

    var nombre = document.getElementById("resultado1");
    var apellido = document.getElementById("resultado2");
    var direccion = document.getElementById("resultado3");
    var telefono = document.getElementById("resultado4");
    var series = document.getElementById("resultado5");

    nombre.innerText = "Nombre: " + localStorage.getItem("saveFirstName");
    apellido.innerText = "Apellido: " + localStorage.getItem("saveLastName");
    direccion.innerText = "Dirección: " + localStorage.getItem("saveAddres");
    telefono.innerText = "Telefono: " + localStorage.getItem("savePhone");
    series.innerText = "Su serie favorita es: " + localStorage.getItem("saveSerie");
})

//Lista de tareas boton que agregue la tarea 