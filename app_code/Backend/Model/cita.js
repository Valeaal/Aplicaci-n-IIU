const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../bbdd');

const Cita = sequelize.define('Cita', {
    id:{
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
    mensaje:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fecha:{
        type: DataTypes.DATE,
        allowNull:false
    }
    
    
});

module.exports = Cita;