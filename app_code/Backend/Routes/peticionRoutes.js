const express = require("express");
const router = express.Router();
const axios = require("axios");
const {Peticion, Alumno, Usuario} = require("../Model/associations");

//LLAMADAS CRUD-------------------------------------------------------------------------------

router.post("/accept", async(req, res) => {
    console.log("\n---------------------LLEGA AQUI 1-------------------------\n");
    
    try {
        const peticion = await Peticion.findOne({
            where: {
                id: req.body.id
            }
        });

        if (!peticion) {
            console.log("No se encontró ninguna petición con el ID especificado.");
            return res.status(404).send("No se encontró ninguna petición con el ID especificado.");
        }

        console.log("\n---------------------LLEGA AQUI 2-------------------------\n");

        const fechaActual = new Date();
        const fechaNacimiento = new Date(peticion.fecha_nacHijo);
        const edadMilisegundos = fechaActual - fechaNacimiento;
        const anios = Math.floor(edadMilisegundos / (1000 * 60 * 60 * 24 * 365));

        const usuario = await Usuario.create({
            nombre: peticion.nombrePadre,
            tipo: 3,
            email: peticion.email,
            password: peticion.password,
            curso: anios
        });

        console.log("\n---------------------LLEGA AQUI 3-------------------------\n");

        const alumno = await Alumno.create({
            nombre: peticion.nombreHijo,
            fecha_nac: peticion.fecha_nacHijo,
            definitivo: true
        });

        await alumno.setUsuario(usuario);

        console.log("\n---------------------LLEGA AQUI 4-------------------------\n");
        console.log("\nAlumno creado:", alumno.toJSON(), "\n");

        return res.send("Creado con éxito");

    } catch (err) {
        console.error("Error:", err);
        return res.status(500).send("Error interno del servidor");
    }
});



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

//GET NombreAlumno by PeticionID
router.get("/alumno/:id", async(req, res) => {
    try{
        const peticion = await Peticion.findOne({
            where:{
                id: req.params.id
            }
        });
        if (!peticion) {
            return res.status(404).send("Peticion no encontrada");
        }
        res.json({
            nombreAlumno: peticion.nombreHijo
        });
    }catch(err){
        res.send(err);
    }
});

//GET NombrePadre by PeticionID
router.get("/padre/:id", async(req, res) => {
    try{
        const peticion = await Peticion.findOne({
            where:{
                id: req.params.id
            }
        });
        if (!peticion) {
            return res.status(404).send("Peticion no encontrada");
        }
        res.json({
            nombrePadre: peticion.nombrePadre
        });
    }catch(err){
        res.send(err);
    }
});



module.exports = router