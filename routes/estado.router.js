const express = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const { createEstadoSchema } = require("../schemas/estado.schema");
const estadosService = require("../services/estado.service");
const response = require("../utils/response");

const router = express.Router();
const service = new estadosService();

router.get("/", async (req, res, next) => {
  try {
    const data = await service.find();

    response({
      res,
      ok: true,
      message: "Listado de estados",
      data,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createEstadoSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;

      const newState = await service.create({
        claveEstado: body.clave,
        nombreEstado: body.nombre,
      });

      response({
        res,
        ok: true,
        status: 201,
        message: "Estado creado con exito",
        data: newState,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
