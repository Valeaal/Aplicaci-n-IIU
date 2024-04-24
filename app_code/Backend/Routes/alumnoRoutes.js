const express = require("express");
const router = express.Router();
const axios = require("axios");
const Alumno = require("../Model/alumno.js");

//LLAMADAS CRUD-------------------------------------------------------------------------------

//GET ALUMNO
router.get("/:id", async(req, res) => {
    try{
        const alumno = await Alumno.findOne({
            where:{
                id: req.params.id
            }
        });
        res.json(alumno);
    }catch(err){
        res.send(err);
    }
});

//GET ALL ALUMNOS
router.get("/", async(req, res) => {
    try{
        const alumno = await Alumno.findAll();
        res.json(alumno);
    }catch(err){
        res.send(err);
    }
});

//CREATE ALUMNO
router.post("/", async(req, res) => {
    try{
        const alumno = await Alumno.create(req.body);
        res.json(alumno);
    }catch(err){
        res.send(err);
    }
});

//DELETE ALUMNO
router.delete("/:id", async(req, res) => {
    try{
        const alumno = await Alumno.destroy({
            where:{
                id: req.params.id
            }
        });
        res.send("Alumno eliminado");
    }catch(err){
        res.send(err);
    }
});

//UPDATE ALUMNO
router.put("/:id", async(req, res) => {
    try{
        const alumno = await Alumno.update(
            req.body,
            {where: {id: req.params.id}}
        );
        res.json(alumno);
    }catch(err){
        res.send(err);
    }
});

module.exports = router