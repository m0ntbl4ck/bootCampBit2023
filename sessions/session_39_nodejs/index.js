//servidor creado con NodeJS puro

/* const http = require('http');
const fs = require('fs');

// creamos un servidor HTTP que maneje las peticiones (request) del cliente 
// y devuelva una respuesta ( response)
http.createServer(function (req, res) {

    res.writeHead(200, {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*",
    });

    // acceder al archivo que quiero enviarle al cliente

    let leerArchivo = fs.createReadStream(__dirname + "/index.html");

    leerArchivo.pipe(res);

}).listen(3000, function () {
    console.log("servidor escuchando en el puerto 3000");
}); */


// Servidor creado con EXPRESS
const express = require("express");

const app = express();
const bodyParser = require("body-parser");

// configuración para manejar ordenadamente los datos enviados por el cliente con un bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
// creamos la URL + METODO = Petición del cliente

// configuración para manejar archivos estaticos o recursos como js, css, imagenes etc
app.use("/css", express.static("css"))
// inicio index.html
app.get("/home", function (req, res) { //app.get("/ejemplo", function (req, res)

    console.log("El cliente ingreso por GET a http://localhost:3000/home")

    //respuesta del servidor
    //res.send("Gracias por comunicarse con nosotros")

    res.sendFile(__dirname + "/index.html")
});
// Ruta para GET registro
app.get("/registro", function (req, res) {

    res.sendFile(__dirname + "/registro.html");

})
// Ruta para GET login

app.get("/login", function (req, res) {

    res.sendFile(__dirname + "/login.html");

})
app.post("/formulario", function (req, res) {
    // caputramos datos de formulario y hacemos algo con ellos
    console.log("Recibimos la información");
    console.log(req.body)
    console.log("email: " + req.body.email)
    console.log("contraseña: " + req.body.password)

})
app.get("/calculadora", function (req, res) {

    res.sendFile(__dirname + "/calculadora.html")
})

app.post("/funcionamiento", function (req, res) {
    console.log(req.body)
    let num1 = parseInt(req.body.num1);
    let num2 = parseInt(req.body.num2);
    let operation = req.body.operation;
    let result = 0;

    (operation === "suma") ? result = num1 + num2 : "";
    (operation === "resta") ? result = num1 - num2 : "";
    (operation === "multiplicacion") ? result = num1 * num2 : "";
    (operation === "division") ? ((num2 != 0) ? result = num1 / num2 : console.log("No se puede dividir entre 0")) : "";

    console.log(result)
})
app.listen(3000, function () {
    console.log("Servidor listo y preparado en el puerto 3000")
});
