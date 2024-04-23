const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../bbdd');
const Alumno = require('./alumno');
const Usuario = require('./usuario');
const Comunicado = require('./comunicado');


/*
----------------------------------- RELACIONES ------------------------------------------------
*/

/*relacion padre-alumno, en principio es suficiente, 
los profesores con la edad de los alumnos accederan a su clase, 
cada alumno tiene el id de su padre, da igual qué admin ha creado tu cuenta,
tienen mismos permisos todos*/
Usuario.hasMany(Alumno,{
    foreignKey: 'padreId',
    sourceKey: 'id',
    onDelete: 'CASCADE'
});
Alumno.belongsTo(Usuario, {
    foreignKey: 'padreId',
    targetKey: 'id'
});

/*relacion m:m*/ 
Comunicado.belongsToMany(Usuario, {
    through: "comunicado_usuario"
});
Usuario.belongsToMany(Comunicado, {
    through: "comunicado_usuario"
});

//Crea las tablas con sus relaciones
sequelize.sync();

module.exports = {Usuario, Alumno, Comunicado};





