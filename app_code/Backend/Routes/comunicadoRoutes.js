const express = require("express");
const router = express.Router();
const {Comunicado} = require("../Model/associations");
//LLAMADAS CRUD-------------------------------------------------------------------------------



router.get("/get-receptor", async(req, res) => {
    try{
        const comunicados = await Comunicado.findAll({
            where:{
                receptorId: req.query.id
            }
        })
        res.json(comunicados);    
    }catch(err){
        res.send(err);
    }
});

router.get("/get-emisor", async(req, res) =>{
    try{
        const comunicados = await Comunicado.findAll({
            where:{
                emisorId : req.query.id
            }
        });
        res.json(comunicados);
    }catch(err){
        res.send(err);
    }
});


//GET COMUNICADO
router.get("/:id", async(req, res) => {
    try{
        const comunicado = await Comunicado.findOne({
            where:{
                id: req.params.id
            }
        });
        console.log(JSON.parse(comunicado))
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