const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../bbdd');

const Comunicado = sequelize.define('Comunicado', {
    id:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    mensaje:{
        type: DataTypes.STRING,
        allowNull: false
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false
    },

    //la fecha de creacion se crea automáticamente

});

module.exports = Comunicado;