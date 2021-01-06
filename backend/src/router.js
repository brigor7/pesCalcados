const express = require('express');
const childrensController = require('./controller/childrensController');

const routes = express.Router();

routes.post('/childrens', childrensController.create);
routes.get('/childrens', childrensController.index);

module.exports = routes;
