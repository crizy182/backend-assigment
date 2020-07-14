const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    id: String,
    solved: Boolean,
    agent: String,
    report: {
        type: String,
        required: true,
    },
});

const model = mongoose.model('Report', mySchema);
module.exports = model;