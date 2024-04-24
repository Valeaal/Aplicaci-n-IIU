const express = require("express");
const router = express.Router();
const axios = require("axios");
const Noticia = require("../Model/noticia.js");

//LLAMADAS CRUD-------------------------------------------------------------------------------

//GET NOTICIA
router.get("/:id", async(req, res) => {
    try{
        const noticia = await Noticia.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(noticia);
    }catch(err){
        res.send(err);
    }
});

//GET ALL NOTICIA
router.get("/", async(req, res) => {
    try{
        const noticia = await Noticia.findAll();
        res.json(noticia);
    }catch(err){
        res.send(err);
    }
});

//CREATE NOTICIA
router.post("/", async(req, res) => {
    try{
        const noticia = await Noticia.create(req.body);
        res.json(noticia);
    }catch(err){
        res.send(err);
    }
});

//DELETE NOTICIA
router.delete("/:id", async(req, res) => {
    try{
        const noticia = await Noticia.destroy({
            where:{
                id: req.params.id
            }
        });
        res.send("Noticia eliminada");
    }catch(err){
        res.send(err);
    }
});

//UPDATE NOTICIA
router.put("/:id", async(req, res) => {
    try{
        const noticia = await Noticia.update(
            req.body,
            {
                where:{
                    id: req.params.id
                }
            }
        );
        res.json(noticia);
    }catch(err){
        res.send(err);
    }
});

module.exports = router;
