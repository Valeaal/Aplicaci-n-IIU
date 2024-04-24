const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../bbdd');
const Alumno = require('./alumno');
const Usuario = require('./usuario');
const Comunicado = require('./comunicado');
const Noticia = require('./noticia');
const Peticion = require('./peticion');
const Cita = require('./cita');
const DiasCerrados = require('./diasCerrados');

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

/*relacion m:m receptores comunicado*/ 
Comunicado.belongsToMany(Usuario, {
    through: "comunicado_usuario",
    onDelete: 'CASCADE' //si se borra el comunicado se borran todas las relaciones
});
Usuario.belongsToMany(Comunicado, {
    through: "comunicado_usuario"
});

/*relacion 1:m emisor comunicado*/
Usuario.hasMany(Comunicado, {
    foreignKey: 'emisorId',
    sourceKey: 'id',
    onDelete: 'CASCADE'
});
Comunicado.belongsTo(Usuario, {
    foreignKey: 'emisorId',
    targetKey: 'id'
});

/*relacion 1:m emisor noticia*/
Usuario.hasMany(Noticia, {
    foreignKey: 'emisorId',
    sourceKey: 'id',
    onDelete: 'CASCADE'
});
Noticia.belongsTo(Usuario, {
    foreignKey: 'emisorId',
    targetKey: 'id'
});

/*relacion 1:1 usuario-cita*/
Usuario.hasOne(Cita, {
    foreignKey:'idPadre',
    targetKey: 'id',
    onDelete: 'CASCADE'
});
Cita.belongsTo(Usuario,{
    foreignKey:'idPadre',
    targetKey: 'id'
});





//Crea las tablas con sus relaciones
sequelize.sync();

module.exports = {Usuario, Alumno, Comunicado, Noticia, Peticion, Cita, DiasCerrados};





