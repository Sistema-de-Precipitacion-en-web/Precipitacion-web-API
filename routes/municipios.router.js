const express = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const { createMunicipioSchema } = require("../schemas/municipio.schema");
const MunicipiosService = require("../services/municipios.service");
const response = require("../utils/response");

const router = express.Router();
const service = new MunicipiosService();

router.get("/", async (req, res, next) => {
  const municipios = await service.find();
  response({
    res,
    ok: true,
    message: "Listado de municipios",
    data: municipios,
  });
});

router.post(
  "/",
  validatorHandler(createMunicipioSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;
      const municipio = await service.create(body);
      response({
        res,
        ok: true,
        message: "Municipio creado con exito",
        status: 201,
        data: municipio,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
