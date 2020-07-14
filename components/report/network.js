const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res) => {
    const filterReports = req.query.report || null;
    
    
    controller.getReports(filterReports)
        .then((reportList) => {
            response.success(req, res, reportList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});

router.get('/agents', (req, res) => {
    const filterAgent = req.query.agent || null;
    controller.getAgent(filterAgent)
        .then((agentList) => {
            response.success(req, res, agentList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});

router.post('/', (req, res) => { 
    controller.addReport(req.body.agent, req.body.report)
        .then((fullReport) => {
            response.success(req, res, fullReport, 201);    
        })
        .catch(e => {           
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlaor');
        });
});

router.patch('/:id', (req, res) => {
    controller.reportSolved(req.params.id)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});



module.exports = router;