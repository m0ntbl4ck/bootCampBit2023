const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require("body-parser");


// Conexión a la base de datos
mongoose
    .connect(
        'mongodb+srv://montblack123:M0ngoBd123117@cluster0.dnkngga.mongodb.net/bill?retryWrites=true&w=majority'
    )
    .then(function (db) {
        console.log('conectado a la base de datos')
    })
    .catch(function (err) {
        console.log(err);
    });

// configuración
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.resolve('../cliente/')));


const Gasto = require('./models/gasto')
// Ruta -----> INICIO
app.get('/', function (req, res) {
    res.sendFile(path.resolve('../cliente/index.html'));
});

app.get('/agregar', function (req, res) {
    res.sendFile(path.resolve('../cliente/nuevo_gasto.html'))

});

app.post('/nuevo', async function (req, res) {
    let datos_enviados = req.body;
    let nuevo_gasto = new Gasto(datos_enviados);
    await nuevo_gasto.save();
    res.send('El gasto se creo exitosamente');
});

app.get('/listado', function (req, res) {
    res.sendFile(path.resolve('../cliente/listado_gastos.html'))
})

app.get('/obtener_gastos', async function (req, res) {
    let docs = await Gasto.find();
    res.sendFile(docs);
})

app.delete('/eliminar/id', async function (req, res) {

    let id_enviar = erq.params.id;
    await Gasto.findByIdAndRemove(id_enviado);
    res.send("GASTO eliminado correctamente");
})

// Puerto del servidor
app.listen(4000, function () {
    console.log("Servidor listo y preparado en el puerto 3000")
});
