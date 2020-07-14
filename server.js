const express= require('express');
const bodyParser = require('body-parser')
const router = require('./network/routes');
const { port } = require('./config')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.listen(port);
console.log(`La aplicación está escuchando en http://localhost:${port}`);