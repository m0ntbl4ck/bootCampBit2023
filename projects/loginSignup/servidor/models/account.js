const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let modelAccount = new Schema({
    user_name: String,
    email: String,
    password: Number,
});

module.exports = mongoose.model('accounts', modelAccount);