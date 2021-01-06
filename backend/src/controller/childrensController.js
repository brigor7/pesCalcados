const connection = require('../database/connection');
const calcular = require('../helpers/calcular');

module.exports = {
  async create(req, res) {
    const {
      nome,
      sobrenome,
      sexo,
      nascimento,
      avatar,
      nomeResponsavel,
    } = req.body;
    const id = await connection('childrens').insert({
      nome,
      sobrenome,
      sexo,
      nascimento,
      avatar,
      nomeResponsavel,
    });
    return res.status(201).send(id);
  },

  async index(req, res) {
    const childrens = await connection('childrens').select('*');
    return res.send(childrens);
  },
};
