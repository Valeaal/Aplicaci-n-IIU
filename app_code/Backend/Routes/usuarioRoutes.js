const express = require("express");
const router = express.Router();
const axios = require("axios");
const Usuario = require("../Model/usuario.js");

//LLAMADAS CRUD-------------------------------------------------------------------------------

//GET USUARIO
router.get("/:id", async(req, res) => {
    try{
        const usuario = await Usuario.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(usuario);
    }catch(err){
        res.send(err);
    }
});

//GET ALL USUARIOS
router.get("/", async(req, res) => {
    try{
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    }catch(err){
        res.send(err);
    }
});

//CREATE USUARIO
router.post("/", async(req, res) => {
    try{
        const usuario = await Usuario.create(req.body);
        res.json(usuario);
    }catch(err){
        res.send(err);
    }
});

//DELETE USUARIO
router.delete("/:id", async(req, res) => {
    try{
        const usuario = await Usuario.destroy({
            where:{
                id: req.params.id
            }
        });
        res.send("Usuario eliminado");
    }catch(err){
        res.send(err);
    }
});

//UPDATE USUARIO
router.put("/:id", async(req, res) => {
    try{
        const usuario = await Usuario.update(
            req.body,
            {
                where:{
                    id: req.params.id
                }
            }
        );
        res.json(usuario);
    }catch(err){
        res.send(err);
    }
});


module.exports = router;


