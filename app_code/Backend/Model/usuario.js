
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../bbdd');

const Usuario = sequelize.define('Usuario', {
    id:{
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
    curso:{
      type: DataTypes.TINYINT,
      allowNull: true
    }
  });

  module.exports = Usuario;
  