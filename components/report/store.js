const db = require('mongoose');
const Model = require('./model');
const Agent = require('../agent/model')
const { dbUser, dbPassword, dbHost, dbName } = require('../../config');

const URI = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}`

db.Promise = global.Promise;
db.connect(URI,
 {useNewUrlParser: true, useUnifiedTopology: true}
 );

db.Promise = global.Promise;

const agentsList = () => {

    const res = Agent.find()

    
}

const reportsList = () => {

    const res = Model.find()
    console.log(res);
    
}

const addReport = (report) => {
    const myReport = new Model(report);
    myReport.save();
}

const getAFreeAgent = async (reportID) => {
    const filter = {current_report: null}
    const update =  {current_report:reportID}
    const freeAgent = await Agent.updateOne(filter, {$set: update} );

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