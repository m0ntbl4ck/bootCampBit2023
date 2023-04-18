const express = require("express");

const app = express();
const bodyParser = require("body-parser");
var turnos = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/js", express.static("js"));

app.get("/home", function (req, res) {

    console.log("El cliente ingreso por GET a http://localhost:3000/home")

    res.sendFile(__dirname + "/index.html");
});

app.post('/turnos', function (req, res) {

    let { name, lastName, email, professional, date } = req.body;
    let datos = {
        'name': name,
        'lastName': lastName,
        'email': email,
        'professional': professional,
        'date': date
    }



    turnos.push(datos);

    console.log(turnos);

    res.send({ mensaje: 'Su turno fue agendado con exito' });

});

app.listen(3000, function () {
    console.log("Servidor listo y preparado en el puerto 3000")
});
