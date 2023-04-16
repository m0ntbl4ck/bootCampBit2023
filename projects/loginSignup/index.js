
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/css", express.static("css"));

app.get("/home", function (req, res) {

    res.sendFile(__dirname + "/index.html");
})
app.get("/signUp", function (req, res) {

    res.sendFile(__dirname + "/signUp.html");
})

var totalData = [];

app.post("/newRecord", function (req, res) {
    let userName = req.body.userName;
    let email = req.body.email;
    let pass = req.body.pass;
    let pass2 = req.body.pass2;


    let userData = {
        "name": userName,
        "email": email,
        "password": pass
    }


    //totalData = [...totalData, userData];
    totalData.push(userData);

    console.log("datos recibidos exitosamente");
    /*  console.log(userData); */
    console.log(totalData);
    res.send("información recibida exitosamente")
});

app.post("/consult", function (req, res) {

    let emailExists = req.body.emailExists;
    let passExists = req.body.passExists;

    let userDataExists = {
        "email": emailExists,
        "password": passExists
    }

    let userExists, array1, array2;

    //console.log(totalData);
    for (let i = 0; i <= totalData.length; i++) {
        console.log("array2 " + i + " " + array2);
        array1 = userDataExists.email;
        array2 = totalData[i].email;


        if ((array1) === (array2)) {
            userExists = "existe";
            break;
        }
        else {
            userExists = "no existe"
        }
    }
    res.send(userExists)

})
app.listen(3000, function () {
    console.log("Servidor listo y preparado en el puerto 3000")
});

