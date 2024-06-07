const express = require("express");
const router = express.Router();
const axios = require("axios");
const Cita = require("../Model/cita.js");
const chalk = require("chalk"); // Para hacer más legible la consola
const { Op } = require("sequelize");


//LLAMADAS CRUD-------------------------------------------------------------------------------

//GET CITA
router.get("/:id", async (req, res) => {
  try {
    const cita = await Cita.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(cita);
  } catch (err) {
    res.send(err);
  }
});

//GET ALL CITA
router.get("/", async (req, res) => {
  try {
    const cita = await Cita.findAll();
    res.json(cita);
  } catch (err) {
    res.send(err);
  }
});

//CREATE CITA
router.post("/", async (req, res) => {
  try {
    const cita = await Cita.create(req.body);
    res.json(cita);
  } catch (err) {
    res.send(err);
  }
});

//DELETE CITA
router.delete("/:id", async (req, res) => {
  try {
    const cita = await Cita.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("Cita eliminada");
  } catch (err) {
    res.send(err);
  }
});

//UPDATE CITA
router.put("/:id", async (req, res) => {
  try {
    const cita = await Cita.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json(cita);
  } catch (err) {
    res.send(err);
  }
});

router.get("/fecha/:id", async (req, res) => {
  try {
    const cita = await Cita.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["fecha"],
    });
    if (cita) {
      res.json(cita.fecha);
    } else {
      res.status(404).send("Cita no encontrada");
    }
  } catch (err) {
    res.send(err);
  }
});

// Método para borrar todas las citas anteriores a la fecha actual
router.delete("/", async (req, res) => {
  try {
    // Obtener la fecha actual del servidor
    const fechaActual = new Date();

    // Elimina las citas que cumplan con la condición
    const resultado = await Cita.destroy({
      where: {
        fecha: {
          [Op.lt]: fechaActual, // Menor que la fecha actual
        },
      },
    });

    // Si se eliminaron citas, retorna un mensaje de éxito
    if (resultado > 0) {
      console.log(
        chalk.blue(
          `Se han eliminado ${resultado} citas anteriores al ${fechaActual.toLocaleDateString()}`
        )
      );
      res.send(
        `Se han eliminado ${resultado} citas anteriores al ${fechaActual.toLocaleDateString()}`
      );
    } else {
      console.log(
        chalk.blue("No se encontraron citas anteriores a la fecha actual")
      );
      res.send("No se encontraron citas anteriores a la fecha actual");
    }
  } catch (err) {
    // Si ocurre un error, devuelve un mensaje de error
    console.log(chalk.red(err.message || "Error al procesar la solicitud"));
    res.status(500).send(err.message || "Error al procesar la solicitud");
  }
});

module.exports = router;
