const express = require('express');

const app = express();
app.use(express.json());

app.listen(3333);

app.get('/', (req, res) => {
  res.send('conectado');
});
