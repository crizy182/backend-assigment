const store = require('./store')

const  addReport = (agent, report) => {
  
  return new Promise((resolve, reject) => {
      if (!agent || !report) {
          console.error('[reportController] There is no Agent or Report');
          reject('Data absolutely invalid');
          return false;
      }

      const fullReport = {
          agent: agent,
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