const db = require('mongoose');
const Model = require('./model');
const Agent = require('../agent/model')
const { config: { dbUser, dbPassword, dbHost, dbName} } = require('../../config');

const URI = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}`

console.log(URI);

db.Promise = global.Promise;
db.connect(URI,
 {useNewUrlParser: true, useUnifiedTopology: true}
 );

db.Promise = global.Promise;

const agentsList = () => Agent.find();

const reportsList = () => Model.find();

const addReport = (report) => {
    const myReport = new Model(report);
    myReport.save();
}

const getAFreeAgent = async (reportID) => {
    const freeAgent = await Agent.updateOne({current_report: null}, {$set: {current_report:reportID}} );

    return freeAgent
}


const reportSolved = async (reportID) => {
    const report = await Model.updateOne({id: reportID}, {$set: {solved: true}})
    const agentAssigned = await Agent.updateOne({current_report: reportID}, {$set: {current_report:null}})

    return { report, agentAssigned}
}

module.exports = {
    agentsList,
    reportsList,
    add: addReport,
    getAFreeAgent,
    reportSolved,
}