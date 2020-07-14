const store = require('./store')

const  addReport = ( reportID, reportDescription) => {
  
  return new Promise((resolve, reject) => {
      if (!reportID) {
          console.error('[reportController] There is no Report');
          reject('Data absolutely invalid');
          return false;
      }

      const fullReport = {
          reportID,
          reportDescription
      };
  
      store.add(fullReport);

      resolve(fullReport);
  });
}

const  getReports = () => {
  
  return new Promise((resolve, reject) => {
      resolve(store.reportsList());
  })
}

module.exports = {
  addReport,
  getReports
};