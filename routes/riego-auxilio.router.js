const express = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const { createRiegoAuxilioSchema } = require("../schemas/riego-auxilio.schema");

const RiegoAuxilioService = require("../services/riego-auxilio.service");

const DateUtility = require("../utils/date.util");
const response = require("../utils/response");

const service = new RiegoAuxilioService();

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const riegos = await service.find();

    response({
      res,
      ok: true,
      message: "Listado de riegos de auxilio",
      data: riegos,
      status: 200,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createRiegoAuxilioSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;
      const date = new DateUtility(body.fecha);

      const riego = {
        semana: date.weekNumber,
        dia: date.day,
        mes: date.month,
        anio: date.year,
        ...body,
      };

      const newPrecipitacion = await service.create(riego);
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
