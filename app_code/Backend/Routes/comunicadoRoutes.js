const express = require("express");
const router = express.Router();
const {Comunicado, Usuario} = require("../Model/associations");
//LLAMADAS CRUD-------------------------------------------------------------------------------



router.get("/get-receptor", async(req, res) => {
    try{
        const comunicados = await Comunicado.findAll({
            where:{
                receptorId: req.query.id
            },
            order:[
                ['createdAt', 'DESC']
            ]
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
            },
            order:[
                ['createdAt', 'DESC']
            ]
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
        const { mensaje, titulo, emisorId, receptorId } = req.body;
        console.log("\nemisor"+emisorId);
        console.log("\nreceptor: "+receptorId)
        console.log("-------------LLEGA AL BACK----------------");
        const emisor = await Usuario.findOne({
            where:{
                id:  emisorId
            } 
        });
        const receptor = await Usuario.findOne({
            where:{
                id:  receptorId
            } 
        });
        const comunicado = await Comunicado.create({
            mensaje: mensaje,
            titulo: titulo,
        });
        //por algun motivo funciona al reves -_- 
        await comunicado.setEmisor(emisor);
        await comunicado.setReceptor(receptor);
        
        
        res.send("Comunicado creado");
    }catch(err){
        console.log(err);
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