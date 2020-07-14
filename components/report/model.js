const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    report: {
        type: String
    },
    solved: {
        type: Boolean,
        default: false
    },
    agent: String,
});

const model = mongoose.model('Report', mySchema);
module.exports = model;