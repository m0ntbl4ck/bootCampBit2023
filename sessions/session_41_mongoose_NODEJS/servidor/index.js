const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require("body-parser");



mongoose
    .connect(
        'mongodb+srv://montblack123:M0ngoBd123117@cluster0.dnkngga.mongodb.net/Todo_list?retryWrites=true&w=majority'
    )
    .then(function (db) {
        console.log('conectado a la base de datos')
    })
    .catch(function (err) {
        console.log(err);
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.resolve('../cliente/')));

const Tarea = require('./models/tareas');

app.get('/', function (req, res) {

    res.sendFile(path.resolve("../cliente/index.html"))
});

// Buscar documentos en la base de datos
app.get("/prueba", async function (req, res) {

    let documentos = await Tarea.find();

    console.log(documentos);

    res.send(documentos);
});

//Insertar una nueva tarea en la base de datos
app.post('/nuevaTarea', async function (req, res) {
    let task = new Tarea(req.body);
    await task.save();
    res.send('la tarea se registro correctamente')
});

app.get('/tarea/:id/:titulo', function (req, res) {
    let id_tarea = req.params.id;
    let nom_tarea = req.params.titulo;
    res.sendFile(path.resolve("../cliente/editar.html"))
})

app.post('/tarea/:id/:titulo', async function (req, res) {

    let id_tarea = req.params.id;
    let nom_tarea = req.params.titulo;
    let documento = await Tarea.findById(id_tarea); //vonsultamos base de datos
    res.send(documento);
})

app.put('/tarea/:id/:titulo', async function (req, res) {
    let id_tarea = req.params.id;
    let datos_recibidos = req.body;
    await Tarea.updateOne({ _id: id_tarea }, datos_recibidos);
    console.log(datos_recibidos);
    res.send(datos_recibidos)
})


app.get('/eliminar/:id', async function (req, res) {
    let id_tarea = req.params.id;

    await Tarea.findByIdAndRemove(id_tarea);
    res.redirect()
})
//Actualiza la tarea especifica

/* app.get('/editar/:id', async function (req, res) {
    let id_enviado = req.params.id;


    //actuaizar datos forma 1

    /* let task = await Tarea.findById(id_enviado);
    task.titulo = 'Tarea modificada';
    await task.save();
    res.send('estamos por editar la tarea por ID =' + id_enviado);


Actualziar ddatos forma 2
let task = await Tarea.updateOne({ _id: id_enviado }, { titulo: 'Tarea AAA' });
res.send('estamos por editar la tarea por ID =' + id_enviado);
}); */

//puerto del servidor
app.listen(3000, function () {
    console.log("Servidor listo y preparado en el puerto 3000")
});
