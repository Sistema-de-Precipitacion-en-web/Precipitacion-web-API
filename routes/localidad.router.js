const express = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const { createLocalidadSchema } = require("../schemas/localidad.schema");
const LocalidadSerivce = require("../services/localidad.service");
const response = require("../utils/response");
const router = express.Router();

const service = new LocalidadSerivce();

router.get("/", async (req, res, next) => {
  try {
    const data = await service.find();
    response({
      res,
      ok: true,
      message: "Listado de localidades",
      data,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createLocalidadSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;
      const localidad = await service.create(body);

      response({
        res,
        ok: true,
        message: "Localidad creada con exito",
        data: localidad,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
