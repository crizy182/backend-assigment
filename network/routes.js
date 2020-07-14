const report = require('../components/report/network');

const routes = (server) => {
    server.use('/', report);
}

module.exports = routes;