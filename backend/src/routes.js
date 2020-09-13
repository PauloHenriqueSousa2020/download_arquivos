const express = require('express');
const downloadController = require('./controllers/downloadController');

const routes = express.Router();

//---------------------------downloadController-------------------------------/
routes.get('/listagem', downloadController.listagem);
routes.get('/download', downloadController.download);
//---------------------------downloadController-------------------------------/

module.exports = routes;