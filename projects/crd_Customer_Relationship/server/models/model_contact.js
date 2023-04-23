const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let model_contact = new Schema({
  first_name: String,
  state: String,
  type_of_contact: String,
  registration_date: String,
});

module.exports = mongoose.model('contact', model_contact);
