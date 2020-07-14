const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;
// db.connect('mongodb://user',{
//     useNewUrlParser: true
// })
const addReport= (report) => {
    const myReport = new Model(report);
    myReport.save();
}

const getReports = async (filterAgent) => {
    let filter = {};
    if (filterAgent !== null) {
        filter = { agent: filterAgent };
    }
    const reports = await Model.find(filter);
    return reports;
}

const removeReport= (id) => {
    return Model.deleteOne({
        _id: id
    });
}

const updateText = async (id, report) => {
    const foundReport = await Model.findOne({
        _id: id
    });

    foundReport.report = report;

    const newReport = await foundReport.save();
    return newReport;
}

module.exports = {
    add: addReport,
    list: getReports,
    updateText: updateText,
    remove: removeReport,
}