const express = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const { createEstacionSchema } = require("../schemas/estaciones.schema");
const EstacionesService = require("../services/estaciones.service");
const response = require("../utils/response");

const service = new EstacionesService();

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const estaciones = await service.find();
    response({
      res,
      ok: true,
      message: "Listado de estaciones",
      data: estaciones,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createEstacionSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;
      const estacion = await service.create(body);

      response({
        res,
        ok: true,
        message: "Estacion creada con exito",
        data: estacion,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get("/:claveEstacion/precipitaciones", async (req, res) => {
  const { claveEstacion } = req.params;

  try {
    const precipitaciones = await service.findPrecipitaciones(claveEstacion);

    response({
      res,
      ok: true,
      message: "Listado de precipitaciones",
      data: precipitaciones,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
