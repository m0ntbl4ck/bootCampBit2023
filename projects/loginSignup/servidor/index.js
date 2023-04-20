
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require('path');
mongoose
    .connect(
        'mongodb+srv://montblack123:M0ngoBd123117@cluster0.dnkngga.mongodb.net/login_Signup?retryWrites=true&w=majority'
    )
    .then(function (db) {
        console.log('conectado a la base de datos')
    })
    .catch(function (err) {
        console.log(err);
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/css", express.static(path.resolve("../cliente/css")));
app.use('/', express.static(path.resolve('../cliente/')));

app.get("/", function (req, res) {
    res.sendFile(path.resolve("../cliente/index.html"));
})
app.get("/signUp", function (req, res) {

    res.sendFile(path.resolve("../cliente/signUp.html"));
})

const Account = require('./models/account');

app.post("/new-record", async function (req, res) {
    let new_account = new Account(req.body);
    await new_account.save();

    console.log("datos recibidos exitosamente");
    console.log(new_account);

    res.send("información recibida exitosamente");
});

app.post("/consult", async function (req, res) {
    let login_email = req.body.email;
    let login_pass = req.body.password;
    //{ $and: [{ email: login_account.email }, { password: login_account.password }] }

    let exists_account = await Account.findOne({ $and: [{ email: login_email }, { password: login_pass }] });
    console.log('documento de la base de datos ' + exists_account)

    console.log('documento ingresado por el usuario ' + login_pass, login_email)


    if (exists_account != null) {
        res.send('Bienvenido de nuevo');
        console.log('claves ' + exists_account.email, exists_account.password)
    }
    else {
        res.send('Usuario no encontrado');
    };









    /* let account_exists = await Account.findById(login_account); //vonsultamos base de datos
    (account_exists != undefined) ? res.send('Hola Bienvenido de Nuevo') : res.send('Usuario no encontrado intentelo de nuevo') */

    /*   let emailExists = req.body.emailExists;
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
    res.send(userExists)*/
})

app.listen(3000, function () {
    console.log("Servidor listo y preparado en el puerto 3000")
});

