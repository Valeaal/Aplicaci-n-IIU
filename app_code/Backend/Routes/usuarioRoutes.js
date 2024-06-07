const express = require("express");
const router = express.Router();
const { Usuario, Peticion, Alumno } = require("../Model/associations");
const chalk = require("chalk") // Para hacer más legible la consola
const jwt = require('jsonwebtoken'); // Importar JWT para generar tokens
const bcrypt = require('bcrypt'); // Importar bcrypt para comparar contraseñas
const { createSecretKey } = require('crypto');
const Op = require('sequelize').Op;


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
        user_password = await bcrypt.hash(password, 10); //mientras no las guardemos cifradas
        //user_password= user.password;
        const isPasswordValid = await bcrypt.compare(password, user.password);      //bcrypt comprueba el hash de la contraseña
        console.log(chalk.blue("Contraseña introducida:", password))
        console.log(chalk.blue("Contraseña introducida (hash):", user_password))
        console.log(chalk.blue("Contraseña de la bdd (hash):", user.password))

        if (!isPasswordValid) {
            console.error(chalk.red('Contraseña inválida!'))
            return res.status(401).json({ error: 'Contraseña inválida' })
        } else {
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

        const token = jwt.sign({ userId: user.id, userType: user.tipo, userUrl: url }, secretKey, { expiresIn: '1h' });
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

router.post("/register-new-user", async (req, res) => {
    try {
        const { parentName, childName, childDOB, email, password } = req.body;
        const user = await Usuario.findOne({ where: { email: email } });
        const peticion = await Peticion.findOne({ where: { email: email } });

        if (user != null) {
            return res.status(401).json({ error: 'Correo ya registrado' });
        } else if (peticion != null) {
            return res.status(401).json({ error: 'Petición ya enviada' });
        }

        encrypted_password = await bcrypt.hash(password, 10);
        Peticion.create({
            nombrePadre: parentName,
            nombreHijo: childName,
            fecha_nacHijo: childDOB,
            email: email,
            password: encrypted_password
        })
        res.send("Peticion enviada");

    } catch (err) {
        res.send(err);
    }
});

router.post("/filtro", async(req, res)=>{
    try{
        const {id, filtroTipo, filtroCurso} = req.body;
        let usuarios = [];
        if(filtroTipo === "-1" && filtroCurso === "-1"){
            usuarios = await Usuario.findAll({
                where: {
                    id: { [Op.ne]: id }
                }
            });

        }else if(filtroTipo === "-1" && filtroCurso!=="-1"){
            usuarios = await Usuario.findAll({
                where: {
                    id: { [Op.ne]: id },
                    curso: {[Op.eq]: filtroCurso}
                }
            }); 
        }else if(filtroCurso === "-1" && filtroTipo !== "-1"){
            usuarios = await Usuario.findAll({
                where: {
                    id: { [Op.ne]: id },
                    tipo: {[Op.eq]: filtroTipo}
                }
            }); 
        }else{
            usuarios = await Usuario.findAll({
                where: {
                    id: { [Op.ne]: id },
                    curso: {[Op.eq]: filtroCurso},
                    tipo: {[Op.eq]: filtroTipo}
                }
            }); 
            
        }
        res.json(usuarios);
    }catch(err){
        res.send(err);
    }
});



router.get("/diff", async (req, res) => {
    try {
        const id = req.query.id;
        const usuario = await Usuario.findOne({
            where: {
                id: id
            }
        });

        if (!usuario) {
            return res.status(404).send("Usuario no encontrado");
        }

        let usuarios = [];
        switch (usuario.tipo) {
            // Eres admin
            case 1:
                usuarios = await Usuario.findAll({
                    where: {
                        id: { [Op.ne]: id }
                    }
                });
                break;

            // Eres profesor
            case 2:
                usuarios = await Usuario.findAll({
                    where: {
                        tipo: { [Op.in]: [1, 3] }
                    },
                    include: [{
                        model: Alumno
                    }]
                });

                usuarios = await Promise.all(usuarios.map(async (usuarioFiltro) => {
                    if (usuarioFiltro.tipo === 1) return usuarioFiltro;

                    const alumnos = await usuarioFiltro.getAlumnos();
                    if (alumnos.some(alumno => alumno.definitivo && calcularEdad(alumno.fecha_nac) === usuario.curso)) {
                        return usuarioFiltro;
                    }
                }));

                usuarios = usuarios.filter(u => u); // Filtra los usuarios no definidos
                break;

            // Eres padre
            case 3:
                usuarios = await Usuario.findAll({
                    where: {
                        tipo: { [Op.in]: [1, 2] }
                    },
                    include: [{
                        model: Alumno
                    }]
                });

                usuarios = await Promise.all(usuarios.map(async (usuarioFiltro) => {
                    if (usuarioFiltro.tipo === 1) return usuarioFiltro;

                    const alumnos = await usuario.getAlumnos();
                    if (alumnos.some(alumno => alumno.definitivo && calcularEdad(alumno.fecha_nac) === usuarioFiltro.curso)) {
                        return usuarioFiltro;
                    }
                }));

                usuarios = usuarios.filter(u => u); // Filtra los usuarios no definidos
                break;

            default:
                break;
        }

        res.json(usuarios);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al procesar la solicitud");
    }
});

function calcularEdad(fecha_nac) {
    const hoy = new Date();
    const fechaNacimiento = new Date(fecha_nac);
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    return edad;
}


//GET USUARIO ID
router.get("/:id", async (req, res) => {
    try {
        const usuario = await Usuario.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(usuario);
    } catch (err) {
        res.send(err);
    }
});

//GET USUARIO EMAIL
router.get("/:email", async (req, res) => {
    try {
        const usuario = await Usuario.findOne({
            where: {
                email: req.params.id
            }
        });
        res.json(usuario);
    } catch (err) {
        res.send(err);
    }
});

//GET ALL USUARIOS
router.get("/", async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (err) {
        res.send(err);
    }
});

//CREATE USUARIO
//aquí indicamos el metodo de la petición: post, también la url, en el app.js está definido que las peticiones a 
//usuario empiezan por localhost:3001/usuario/, entonces solo le añadimos "/" para que quede igual localhost:3001/usuario/ 
router.post("/", async (req, res) => {
    try {
        //recogemos las credentials enviadas que se envian el la peticion o request.
        //es importante que lo que le enviemos en credentials coincidan con estos nombres
        const { nombre, email, tipo, password, curso } = req.body;
        //la ciframos
        const encrypted_password = await bcrypt.hash(password, 10);
        //se crea el usuario
        const usuario = await Usuario.create({
            nombre: nombre,
            email: email,
            tipo: tipo,
            password: encrypted_password,
            curso: curso
        });
        //devuelve el usuario en formato json
        res.json(usuario);
    } catch (err) {
        res.send(err);
    }
});

//DELETE USUARIO
router.delete("/delete/:id", async (req, res) => {
    try {
        const usuario = await Usuario.destroy({
            where: {
                id: req.params.id
            }
        });
        res.send("Usuario eliminado");
    } catch (err) {
        res.send(err);
    }
});

// Actualizar usuario por ID
router.put("/:id", async (req, res) => {
    try {
        const { nombre, email, tipo, curso, password } = req.body;
        const updatedData = { nombre, email, tipo, curso };

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updatedData.password = hashedPassword;
        }

        const usuario = await Usuario.update(updatedData, {
            where: { id: req.params.id }
        });
        res.json(usuario);
    } catch (err) {
        res.status(500).send(err);
    }
});

// GET Tipo by UsuarioID
router.get("/tipo/:id", async (req, res) => {
    try {
        const tipo = await Tipo.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(tipo);
    } catch (err) {
        res.send(err);
    }
})

//GET Curso by UsuarioID
router.get("/curso/:id", async (req, res) => {
    try {
        const curso = await Cursos.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(curso);
    } catch (err) {
        res.send(err);
    }
})

//GET Nombre by UsuarioID
router.get("/nombre/:id", async (req, res) => {
    try{
        const nombre = await Nombre.findOne({
            where: {}
        });
        res.json(nombre);   

    }catch(err){
        res.send(err);
    }
})

module.exports = router;


