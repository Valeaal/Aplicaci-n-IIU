const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../bbdd');

const DiasCerrados = sequelize.define('DiasCerrados', {
    id:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    fecha:{
        type: DataTypes.DATE,
        allowNull: false,
        unique: true
    }

});

module.exports = DiasCerrados;