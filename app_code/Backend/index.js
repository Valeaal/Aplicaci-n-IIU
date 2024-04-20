// server/index.js

const express = require("express");
const cors = require('cors')


const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())

// Token de sesión
app.use('/login', (req, res) => {
  res.send({
      token: 'test123'
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});