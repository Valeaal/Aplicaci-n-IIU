const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../bbdd');
const Alumno = require('./alumno');
const Usuario = require('./usuario');


/*
----------------------------------- RELACIONES ------------------------------------------------
*/
Usuario.hasMany(Alumno);
Alumno.belongsTo(Usuario);


//Crea las tablas con sus relaciones
sequelize.sync();

module.exports = {Usuario, Alumno};





