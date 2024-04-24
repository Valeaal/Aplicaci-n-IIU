const express = require("express");
const router = express.Router();
const axios = require("axios");
const DiasCerrados = require("../Model/diasCerrados.js");

//LLAMADAS CRUD-------------------------------------------------------------------------------

//GET DIAS CERRADOS
router.get("/:id", async(req, res) => {
    try{
        const diasCerrados = await DiasCerrados.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(diasCerrados);
    }catch(err){
        res.send(err);
    }
});

//GET ALL DIAS CERRADOS
router.get("/", async(req, res) => {
    try{
        const diasCerrados = await DiasCerrados.findAll();
        res.json(diasCerrados);
    }catch(err){
        res.send(err);
    }
});

//CREATE DIAS CERRADOS
router.post("/", async(req, res) => {
    try{
        const diasCerrados = await DiasCerrados.create(req.body);
        res.json(diasCerrados);
    }catch(err){
        res.send(err);
    }
});

//DELETE DIAS CERRADOS
router.delete("/:id", async(req, res) => {
    try{
        const diasCerrados = await DiasCerrados.destroy({
            where:{
                id: req.params.id
            }
        });
        res.send("Dias cerrados eliminados");
    }catch(err){
        res.send(err);
    }
});

//UPDATE DIAS CERRADOS
router.put("/:id", async(req, res) => {
    try{
        const diasCerrados = await DiasCerrados.update(
            req.body,
            {
                where:{
                    id: req.params.id
                }
            }
        );
        res.json(diasCerrados);
    }catch(err){
        res.send(err);
    }
});


module.exports = router;
