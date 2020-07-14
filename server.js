const express= require('express');
const response = require('./network/response');
const app = express();

app.use('/', (req,res)=>{
  res.send('hello');
});

app.listen(3000);
console.log(`it's listening`);
