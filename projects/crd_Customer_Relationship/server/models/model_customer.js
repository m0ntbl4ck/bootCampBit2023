const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let model_customer = new Schema({
  first_name: String,
  last_name: String,
  country: String,
  phone_number: Number,
  email: String,
  registration_date: String,
});

module.exports = mongoose.model('customer', model_customer);
