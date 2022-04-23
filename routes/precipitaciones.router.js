const express = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createPrecipitacionSchema,
} = require("../schemas/precipitaciones.schema");
const PrecipitacionesService = require("../services/precipitaciones.service");
const DateUtility = require("../utils/date.util");
const response = require("../utils/response");

const service = new PrecipitacionesService();

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const precipitaciones = service.find();

    response({
      res,
      ok: true,
      message: "Listado de precipitaciones",
      data: precipitaciones,
      status: 200,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createPrecipitacionSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;
      const date = new DateUtility(body.fecha);

      const precipitacion = {
        semana: date.weekNumber,
        dia: date.day,
        mes: date.month,
        anio: date.year,
        ...body,
      };

      const newPrecipitacion = await service.create(precipitacion);
      response({
        res,
        ok: true,
        status: 201,
        message: "Precipitacion creada con exito",
        data: newPrecipitacion,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
