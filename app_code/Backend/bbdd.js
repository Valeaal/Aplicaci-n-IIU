const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('interfaces_bbdd', 'IIU', 'IIU_bdd', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports = sequelize;


  