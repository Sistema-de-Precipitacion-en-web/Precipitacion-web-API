const express = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const { createAccionDeAguaSchema } = require("../schemas/acciones-agua.schema");
const AccionesAguaService = require("../services/acciones-agua.service");
const response = require("../utils/response");

const router = express.Router();
const service = new AccionesAguaService();

router.get("/", async (req, res, next) => {
  try {
    const accionesAgua = await service.find();
    response({
      res,
      ok: true,
      message: "Listado de acciones de agua",
      data: accionesAgua,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createAccionDeAguaSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;
      const accionAgua = await service.create(body);

      response({
        res,
        ok: true,
        status: 201,
        message: "Accion de agua creada con exito",
        data: accionAgua,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
