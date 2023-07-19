//Paquetes y modulos
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

//conexión base de datos
mongoose
  .connect(
    'mongodb+srv://montblack123:M0ngoBd123117@cluster0.dnkngga.mongodb.net/crd?retryWrites=true&w=majority',
  )
  .then(function (db) {
    console.log('conectado a la base de datos');
  })
  .catch(function (err) {
    console.log(err);
  });

//configuraciones
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/js', express.static(path.resolve('../client/js')));

// modelo de datos
const customer = require('./models/model_customer');
const contact_customer = require('./models/model_contact');

// Rutas

//Ruta principal
app.get('/', function (req, res) {
  res.sendFile(path.resolve('../client/html/index.html'));
});

//Ruta listado de clientes
app.get('/customerlist', function (req, res) {
  res.sendFile(path.resolve('../client/html/customerlist.html'));
});

//Ruta pedir clientes de base de datos
app.get('/request_database_customer', async function (req, res) {
  let customerdocuments = await customer.find();
  console.log(customerdocuments);
  res.send(customerdocuments);
});

//Ruta listado de contactos
app.get('/contactlist', function (req, res) {
  res.sendFile(path.resolve('../client/html/contactlist.html'));
  /*  let customer_documents = await customer.find(); */
  /* console.log(customer_documents);
    res.send(customer_documents); */
});

//Ruta pedir contactos con clientes de base de datos
app.get('/request_database_contact', async function (req, res) {
  let contactdocuments = await contact_customer.find();
  console.log(contactdocuments);
  res.send(contactdocuments);
});

//Ruta formulario nuevo cliente
app.get('/form_new_customer', function (req, res) {
  res.sendFile(path.resolve('../client/html/form_new_customer.html'));
});

//ruta guardar nuevo cliente
app.post('/new_customer', async function (req, res) {
  let new_customer = new customer(req.body);
  await new_customer.save();
  res.send('Contacto agregado exitosamente');
});

//Ruta formulario nuevo contacto
app.get('/form_new_contact', function (req, res) {
  res.sendFile(path.resolve('../client/html/form_new_contact.html'));
});

//ruta guardar nuevo contacto
app.post('/new_contact', async function (req, res) {
  let new_contact = new contact_customer(req.body);
  console.log('datos de contacto' + new_contact);
  await new_contact.save();
  res.send('Contacto agregado exitosamente');
});

// Ruta bsucar en la base de datos el cliente para crear contacto
app.get('/request_database_search', async function (req, res) {
  let name = req.body.exists;
  console.log(name);
  let data = await customer.findOne({
    $or: [{ first_name: name }, { last_name: name }],
  });
  console.log({ data });
  if (data != null) {
    res.send(data);
  } else {
    data = false;
    res.status(404).send('Usuario no encontrado');
  }
});

app.delete('/delete/:id', async function (req, res) {
  let contactid = req.params.id;

  await contact_customer.findByIdAndRemove(contactid);
  res.send('Borrado exitoso');
});

app.delete('/customer_delete/:id', async function (req, res) {
  let customerid = req.params.id;

  await customer.findByIdAndRemove(customerid);
  res.send('Borrado exitoso');
});

app.listen(3000, function () {
  console.log('Servidor listo en el puerto 3100');
});
