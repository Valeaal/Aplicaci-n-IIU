const express = require("express");
const router = express.Router();
const axios = require("axios");
const Cita = require("../Model/cita.js");

//LLAMADAS CRUD-------------------------------------------------------------------------------

//GET CITA
router.get("/:id", async(req, res) => {
    try{
        const cita = await Cita.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(cita);
    }catch(err){
        res.send(err);
    }
});

//GET ALL CITA
router.get("/", async(req, res) => {
    try{
        const cita = await Cita.findAll();
        res.json(cita);
    }catch(err){
        res.send(err);
    }
});

//CREATE CITA
router.post("/", async(req, res) => {
    try{
        const cita = await Cita.create(req.body);
        res.json(cita);
    }catch(err){
        res.send(err);
    }
});

//DELETE CITA
router.delete("/:id", async(req, res) => {
    try{
        const cita = await Cita.destroy({
            where:{
                id: req.params.id
            }
        });
        res.send("Cita eliminada");
    }catch(err){
        res.send(err);
    }
});

//UPDATE CITA
router.put("/:id", async(req, res) => {
    try{
        const cita = await Cita.update(
            req.body,
            {
                where:{
                    id: req.params.id
                }
            }
        );
        res.json(cita);
    }catch(err){
        res.send(err);
    }
});

router.get("/fecha/:id", async (req, res) => {
    try {
        const cita = await Cita.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['fecha']
        });
        if (cita) {
            res.json(cita.fecha);
        } else {
            res.status(404).send('Cita no encontrada');
        }
    } catch (err) {
        res.send(err);
    }
});

module.exports = router