const express = require('express');
const childrensController = require('./controller/childrensController');
const godfathersController = require('./controller/godfathersController');

const routes = express.Router();

routes.post('/childrens', childrensController.create);
routes.get('/childrens', childrensController.index);
routes.post('/godfathers', godfathersController.create);
routes.get('/godfathers', godfathersController.index);
routes.get('/', childrensController.pesquisa);

module.exports = routes;
