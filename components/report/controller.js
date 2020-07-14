const store = require('./store')

const  addReport = ( reportID) => {
  
  return new Promise((resolve, reject) => {
      if (!reportID) {
          console.error('[reportController] There is no Report');
          reject('Data absolutely invalid');
          return false;
      }

      const fullReport = {
          reportID,
      };
  
      store.add(fullReport);

      resolve(fullReport);
  });
}

const  getReports = (filterAgent) => {
  return new Promise((resolve, reject) => {
      resolve(store.list(filterAgent));
  })
}

module.exports = {
  addReport,
  getReports
};