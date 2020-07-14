const store = require('./store')

const  addReport = (agent, report) => {
  
  return new Promise((resolve, reject) => {
      if (!report) {
          console.error('[reportController] There is no Report');
          reject('Data absolutely invalid');
          return false;
      }

      const fullReport = {
          report: report,
      };
  
      // store.add(fullReport);

      resolve(fullReport);
  });
}

const  getReports = (filterAgent) => {
  return new Promise((resolve, reject) => {
      // resolve(store.list(filterAgent));
  })
}

module.exports = {
  addReport,
  getReports
};