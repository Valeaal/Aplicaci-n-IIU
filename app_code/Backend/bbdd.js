const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('interfaces_bbdd', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports = sequelize;


  