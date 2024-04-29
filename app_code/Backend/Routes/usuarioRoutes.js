const express = require("express");
const router = express.Router();
const Usuario = require("../Model/usuario.js");
const chalk = require("chalk") // Para hacer más legible la consola
const jwt = require('jsonwebtoken'); // Importar JWT para generar tokens
const bcrypt = require('bcrypt'); // Importar bcrypt para comparar contraseñas
const { createSecretKey } = require('crypto');


//LLAMADAS CRUD-------------------------------------------------------------------------------

//////////////////////////////////////////////////////////////////////////////////////////////
// LOGIN, LÓGICA DE TOKENS
//////////////////////////////////////////////////////////////////////////////////////////////

//Tu piensa que en la respuesta http se envía el res, que es o bien el token o el código de error.
//Si salta un error, se envía y el frontend maneja si está controlado o no. Indica si es fallo del correo,
//de la contraseña, u otro error no controlado (y muestra un mensaje generérico)

router.post('/process-login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
        // Buscar usuario por email en la base de datos
        const user = await Usuario.findOne({ where: { email: email } });
  
        if (user == null) {
          console.error(chalk.red('Usuario null'))
          return res.status(401).json({ error: 'Correo no encontrado' });
        }
  
        console.log(chalk.blue("Usuario recuperado:", user.nombre))
  
        console.log(chalk.blue("Comprobando contraseña..."))
        // Comparar la contraseña ingresada con la contraseña almacenada en la base de datos
        user_password= await bcrypt.hash(password, 10);
        const isPasswordValid = await bcrypt.compare(password, user_password);      //bcrypt comprueba el hash de la contraseña
  
        if (!isPasswordValid) {
          console.error(chalk.red('Contraseña inválida!'))
          const hashedPassword = await bcrypt.hash(password, 10);
          console.log(chalk.red('Hash de la contraseña ingresada por el usuario: ', hashedPassword));
          return res.status(401).json({ error: 'Contraseña inválida' })
        } else{
          console.log(chalk.green('Contraseña válida!'));
        }

        let url = "";
        switch (user.tipo) {
          case 1:
            url = "/admin";
            console.log(chalk.blue("Url del usuairo:", url))
            break;
          case 2:
            url = "/profesor";
            console.log(chalk.blue("Url del usuairo:", url))
            break;
          case 3:
            url = "/profesor";
            console.log(chalk.blue("Url del usuairo:", url))
            break;
          default:
            url = "/";
            console.log(chalk.blue("Url del usuairo:", url))
            break;
        }

        // Generar token de sesión (aquí se puede personalizar la información en el token)


        // Clave secreta como Uint8Array
        const secretKey = createSecretKey(Buffer.from('IIU', 'utf-8'));

        const token = jwt.sign({ userId: user.id, userType: user.tipo, userUrl: url}, secretKey, { expiresIn: '1h' });
        console.log(chalk.green('Token generao'));
        console.log(chalk.blue(JSON.stringify(token)));
        //Envío del token
        //res.json({ token });
        res.json(token);
  
    } catch (error) {
      console.error(chalk.red('Error al autenticar usuario:', error));
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  });
  



//GET USUARIO ID
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

//GET USUARIO EMAIL
router.get("/:email", async(req, res) => {
    try{
        const usuario = await Usuario.findOne({
            where:{
                email: req.params.id
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


