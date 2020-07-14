const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;

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

const reportSolved = async (id) => {
    const foundReport = await Model.findOne({
        _id: id
    });

    foundReport.solved = true;

    const statusReport = await foundReport.save();
    return statusReport;
}

module.exports = {
    add: addReport,
    list: getReports,
    reportSolved,
    remove: removeReport,
}