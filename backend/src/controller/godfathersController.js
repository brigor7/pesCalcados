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
      telefone,
      email,
      password,
    } = req.body;
    const id = await connection('godfathers').insert({
      nome,
      sobrenome,
      sexo,
      nascimento,
      avatar,
      telefone,
      email,
      password,
    });
    return res.status(201).send(id);
  },

  async index(req, res) {
    const godfathers = await connection('godfathers').select('*');
    return res.send(godfathers);
  },

  /**Lista de crianças por nome */
  async pesquisa(req, res) {
    const data = await connection('godfathers').select('*');
    const godfathersArray = Array.from(data);

    const godfathers = godfathersArray.map((children) => {
      const { nome, sexo } = children;
      const idade = calcular.calculaIdade(children.nascimento);
      if (idade < 10) {
        return {
          nome,
          sexo,
          idade,
        };
      }
    });

    /**Pesquisar crianças por sexo */
    const godfathersSex = godfathersArray.filter((children) => {
      return children.sexo !== 'masculino';
    });

    res.send(godfathers);
    console.log(godfathers);
  },
};
