const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('conectado');
});

/**Requisições de crianças */

module.exports = routes;
