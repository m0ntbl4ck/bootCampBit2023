const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modeloTarea = new Schema({
    titulo: String,
    descripcion: String,
    finalizada: {
        type: Boolean,
        default: false,
    },
    categoria: String,
    fecha: String,
});

module.exports = mongoose.model('Tareas', modeloTarea);