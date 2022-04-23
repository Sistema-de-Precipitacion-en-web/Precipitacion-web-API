const express = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const { createProduccionSchema } = require("../schemas/produccion.schema");

const ProduccionService = require("../services/produccion.service");

const DateUtility = require("../utils/date.util");
const response = require("../utils/response");

const service = new ProduccionService();

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const producciones = await service.find();

    response({
      res,
      ok: true,
      message: "Listado de producciones",
      data: producciones,
      status: 200,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createProduccionSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;
      const date = new DateUtility(body.fecha);

      const produccion = {
        semana: date.weekNumber,
        dia: date.day,
        mes: date.month,
        anio: date.year,
        ...body,
      };

      const newProduccion = await service.create(produccion);
      response({
        res,
        ok: true,
        status: 201,
        message: "Produccion creada con exito",
        data: newProduccion,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
