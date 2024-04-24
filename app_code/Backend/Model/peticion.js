const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../bbdd');

const Peticion = sequelize.define('Peticion', {
    id:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      nombrePadre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nombreHijo:{
        type: DataTypes.STRING,
        allowNull: false
      },
      fecha_nacHijo: {
        type: DataTypes.DATE,
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
      
    

});

module.exports = Peticion;