const express = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const { createParcelaSchema } = require("../schemas/parcela.schema");

const ParcelasService = require("../services/parcelas.service");
const response = require("../utils/response");

const router = express.Router();
const service = new ParcelasService();

router.get("/", async (req, res, next) => {
  const parcelas = await service.find();

  response({
    res,
    ok: true,
    message: "Listado de parcelas",
    data: parcelas,
  });
});

router.post(
  "/",
  validatorHandler(createParcelaSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;
      const parcela = await service.create(body);

      response({
        res,
        ok: true,
        status: 201,
        message: "Parcela creada con éxito",
        data: parcela,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
