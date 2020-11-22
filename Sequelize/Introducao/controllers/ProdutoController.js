const Sequelize = require('sequelize');
const config = require('../config/database');

const ProdutoController = {
  index: async (req, res) => {
    const db = new Sequelize(config);
    let nomeFilme = 'Harry Potter e a Pedra Filosofal';
    const result = await db.query(
      'select * from produto where produto.nome = :nomeFilme',
      {
        replacements: {
          nomeFilme,
        },
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    console.log(result);
  },
};

module.exports = ProdutoController;
