const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../bbdd');

const Alumno = sequelize.define('Alumno', {
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
  definitivo:{
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  curso:{
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Alumno;