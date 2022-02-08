const express = require("express");
const CicloAgricolaService = require("../services/ciclo-agricola.service");
const validatorHandler = require("../middlewares/validator.handler");
const DateUtility = require("../utils/date.util");
const router = express.Router();
const response = require("../utils/response");

const {
  createCicloAgricolaSchema,
} = require("../schemas/ciclo-agricola.schema");

const service = new CicloAgricolaService();

router.get("/", async (req, res, next) => {
  try {
    const data = await service.find();
    response({
      res,
      ok: true,
      message: "Listado de registros de ciclo agricola",
      data,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createCicloAgricolaSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;

      const date = new DateUtility(body.fecha);

      const cicloAgricola = {
        semana: date.weekNumber,
        dia: date.day,
        mes: date.month,
        anio: date.year,
        ...body,
      };

      const newRecord = await service.create(cicloAgricola);

      response({
        res,
        ok: true,
        status: 201,
        message: "Ciclo agricola creado con exito",
        data: newRecord,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
