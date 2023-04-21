const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require('path');
mongoose
    .connect(
        'mongodb+srv://montblack123:M0ngoBd123117@cluster0.dnkngga.mongodb.net/crd?retryWrites=true&w=majority'
    )
    .then(function (db) {
        console.log('conectado a la base de datos')
    })
    .catch(function (err) {
        console.log(err);
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.resolve('../cliente/')));

app.get("/", function (req, res) {
    res.sendFile(path.resolve("../cliente/index.html"));
})
