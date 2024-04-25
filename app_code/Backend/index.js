//////////////////////////////////////////////////////////////////////////////////////////////
// IMPORTACIONES
//////////////////////////////////////////////////////////////////////////////////////////////
const chalk = require("chalk") // Para hacer más legible la consola
const express = require("express");
const cors = require('cors')
const jwt = require('jsonwebtoken'); // Importar JWT para generar tokens
const bcrypt = require('bcrypt'); // Importar bcrypt para comparar contraseñas


//Para hacer querys
const sequelize = require('./bbdd');
const {Usuario, Alumno}  = require('./Model/associations');


const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json()); // Middleware para parsear el cuerpo de la solicitud como JSON
app.use(cors())

//////////////////////////////////////////////////////////////////////////////////////////////
// LOGIN, LÓGICA DE TOKENS
//////////////////////////////////////////////////////////////////////////////////////////////

//Tu piensa que en la respuesta http se envía el res, que es o bien el token o el código de error.
//Si salta un error, se envía y el frontend maneja si está controlado o no. Indica si es fallo del correo,
//de la contraseña, u otro error no controlado (y muestra un mensaje generérico)

app.post('/login', async (req, res) => {
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
      const isPasswordValid = await bcrypt.compare(password, user.password);      //bcrypt comprueba el hash de la contraseña

      if (!isPasswordValid) {
        console.error(chalk.red('Contraseña inválida!'))
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(chalk.red('Hash de la contraseña ingresada por el usuario: ', hashedPassword));
        return res.status(401).json({ error: 'Contraseña inválida' })
      } else{
        console.log(chalk.green('Contraseña válida!'));
      }

      // Generar token de sesión (aquí se puede personalizar la información en el token)
      const token = jwt.sign({ userId: user.id, userType: user.tipo }, 'secret_key', { expiresIn: '1h' });
      console.log(chalk.green('Token generao'));

      //Envío del token
      res.json({ token });

  } catch (error) {
    console.error(chalk.red('Error al autenticar usuario:', error));
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

//////////////////////////////////////////////////////////////////////////////////////////////
// RUTAS
//////////////////////////////////////////////////////////////////////////////////////////////

//ALUMNO
const alumnoRouter = require("./Routes/alumnoRoutes.js")
app.use('/alumno', alumnoRouter);

//CITA
const citaRouter = require("./Routes/citaRoutes.js")
app.use('/cita', citaRouter);

//COMUNICADO
const comunicadoRouter = require("./Routes/comunicadoRoutes.js")
app.use('/comunicado', comunicadoRouter);

//DIAS CERRADOS
const diaCerradoRouter = require("./Routes/diasCerradosRoutes.js")
app.use('/diasCerrados', diaCerradoRouter);

//NOTICIA
const noticiaRouter = require("./Routes/noticiaRoutes.js")
app.use('/noticia', noticiaRouter);

//PETICION
const peticionRouter = require("./Routes/peticionRoutes.js")
app.use('/peticion', peticionRouter);

//USUARIO
const usuarioRouter = require("./Routes/usuarioRoutes.js")
app.use('/usuario', usuarioRouter);

sequelize.sync()
  .then(() => {
    console.log('Modelos sincronizados con la base de datos');
  })
  .catch((error) => {
    console.error('Error al sincronizar los modelos:', error);
  });

  app.get("/", (req, res) => {
    res.send("Esta es la API");
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});