const express = require("express");
const router = express.Router();
const axios = require("axios");
const Peticion = require("../Model/peticion.js");

//LLAMADAS CRUD-------------------------------------------------------------------------------

//GET Peticion
router.get("/:id", async(req, res) => {
    try{
        const peticion = await Peticion.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(peticion);
    }catch(err){
        res.send(err);
    }
});

//GET ALL Peticion
router.get("/", async(req, res) => {
    try{
        const peticion = await Peticion.findAll();
        res.json(peticion);
    }catch(err){
        res.send(err);
    }
});

//CREATE Peticion
router.post("/", async(req, res) => {
    try{
        const peticion = await Peticion.create(req.body);
        res.json(peticion);
    }catch(err){
        res.send(err);
    }
});

//DELETE Peticion
router.delete("/:id", async(req, res) => {
    try{
        const peticion = await Peticion.destroy({
            where:{
                id: req.params.id
            }
        });
        res.send("Peticion eliminada");
    }catch(err){
        res.send(err);
    }
});

//UPDATE Peticion
router.put("/:id", async(req, res) => {
    try{
        const peticion = await Peticion.update(
            req.body,
            {
                where:{
                    id: req.params.id
                }
            }
        );
        res.json(peticion);
    }catch(err){
        res.send(err);
    }
});

module.exports = router