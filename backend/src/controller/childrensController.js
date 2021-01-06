const connection = require('../database/connection');

module.exports = {
  async create(req, res) {
    const { nome, sobrenome, nomeResponsavel, nascimento, avatar } = req.body;
    const id = await connection('childrens').insert({
      nome,
      sobrenome,
      nomeResponsavel,
      nascimento,
      avatar,
    });
    return res.status(201).send(id);
  },

  async index(req, res) {
    const childrens = await connection('childrens').select('*');
    return res.send(childrens);
  },
};
