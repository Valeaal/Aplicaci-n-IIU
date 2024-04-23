// server/index.js

const express = require("express");
const cors = require('cors')
//para hacer querys
const sequelize = require('./bbdd');
const {Usuario, Alumno}  = require('./Model/associations');


const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())

// Token de sesión
app.use('/login', (req, res) => {
  res.send({
      token: 'test123'
  })
})


app.get('/administrador/crear', async (req, res) =>{
 
 try{
  const { nombre, fecha_nac, tipo, email, password, curso } = req.query;
  const usuario = await Usuario.create({
      nombre: nombre,
      fecha_nac: fecha_nac,
      tipo: tipo,
      email: email,
      password: password,
      curso: curso,
      
  });
  res.redirect('http://localhost:3000/administrador');

}catch(error){
  console.error('Error al crear el usuario:', error);
  res.status(500).json({ error: 'Error interno del servidor' });
}

});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});