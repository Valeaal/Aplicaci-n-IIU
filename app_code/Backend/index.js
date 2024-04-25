//////////////////////////////////////////////////////////////////////////////////////////////
// IMPORTACIONES
//////////////////////////////////////////////////////////////////////////////////////////////
const express = require("express");
const cors = require('cors')



const sequelize = require('./bbdd');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json()); // Middleware para parsear el cuerpo de la solicitud como JSON
app.use(cors())


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