const { Usuario } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const UserController = {
  index: async (req, res) => {
    let { page = 1 } = req.query;
    let { count: total, rows: users } = await Usuario.findAndCountAll({
      limit: 5,
      offset: (page - 1) * 5,
    });
    let totalPagina = Math.round(total / 5);
    console.log(total);
    return res.render('usuarios', { users, totalPagina });
  },
  findById: async (req, res) => {
    let { id } = req.params;

    let user = await Usuario.findOne({
      where: {
        id_usuario: id,
      },
    });

    return res.render('viewUsuario', { user });
  },
  search: async (req, res) => {
    let { key } = req.query;

    let users = await Usuario.findAll({
      where: {
        nome: {
          [Op.like]: `%${key}%`,
        },
      },
      order: [['id_usuario', 'ASC']],
    });

    return res.render('usuarios', { users });
  },
  agregadoras: async (req, res) => {
    // let total = await Usuario.count();
    // let menorItem = await Usuario.min('id_usuario');
    // let maiorItem = await Usuario.max('id_usuario');
    let somaItem = await Usuario.sum('id_usuario');

    res.send('A soma é: ' + somaItem);
  },
};

module.exports = UserController;
