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

  /**Lista de crianças por nome */
  async pesquisa(req, res) {
    const data = await connection('childrens').select('*');
    const childrensArray = Array.from(data);

    const childrens = childrensArray.map((children) => {
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
    const childrensSex = childrensArray.filter((children) => {
      return children.sexo !== 'masculino';
    });

    res.send(childrens);
    console.log(childrens);
  },
};
