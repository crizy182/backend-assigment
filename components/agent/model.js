const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    id: String,
    username: String,
    current_report: String,
});

const model = mongoose.model('Agent', mySchema);
module.exports = model;