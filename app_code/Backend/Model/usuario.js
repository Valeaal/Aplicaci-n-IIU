
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
    fecha_nac: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tipo: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
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
  