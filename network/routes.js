const report = require('../components/report/network');

const routes = (server) => {
    server.use('/report', report);
}

module.exports = routes;