const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../bbdd');

const Noticia = sequelize.define('Noticia', {
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
    esPublica:{
        type:DataTypes.BOOLEAN,
        allowNull: false, 
    }
    
    //la fecha de creacion se crea automáticamente

});

module.exports = Noticia;