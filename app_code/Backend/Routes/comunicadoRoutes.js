const express = require("express");
const router = express.Router();
const axios = require("axios");
const Comunicado = require("../Model/comunicado.js");

//LLAMADAS CRUD-------------------------------------------------------------------------------

//GET COMUNICADO
router.get("/:id", async(req, res) => {
    try{
        const comunicado = await Comunicado.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(comunicado);
    }catch(err){
        res.send(err);
    }
});

//GET ALL COMUNICADO
router.get("/", async(req, res) => {
    try{
        const comunicado = await Comunicado.findAll();
        res.json(comunicado);
    }catch(err){
        res.send(err);
    }
});

//CREATE COMUNICADO
router.post("/", async(req, res) => {
    try{
        const comunicado = await Comunicado.create(req.body);
        res.json(comunicado);
    }catch(err){
        res.send(err);
    }
});

//DELETE COMUNICADO
router.delete("/:id", async(req, res) => {
    try{
        const comunicado = await Comunicado.destroy({
            where:{
                id: req.params.id
            }
        });
        res.send("Comunicado eliminado");
    }catch(err){
        res.send(err);
    }
});

//UPDATE COMUNICADO
router.put("/:id", async(req, res) => {
    try{
        const comunicado = await Comunicado.update(
            req.body,
            {
                where:{
                    id: req.params.id
                }
            }
        );
        res.json(comunicado);
    }catch(err){
        res.send(err);
    }
});

module.exports = router;