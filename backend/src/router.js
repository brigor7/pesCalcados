const express = require('express');
const childrensController = require('./controller/childrensController');

const routes = express.Router();

routes.post('/childrens', childrensController.create);
routes.get('/childrens', childrensController.index);
routes.get('/', childrensController.pesquisa);

module.exports = routes;
