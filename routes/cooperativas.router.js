const express = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const { createCooperativaSchema } = require("../schemas/coooperativas.schema");
const CooperativasService = require("../services/cooperativa.service");
const response = require("../utils/response");

const router = express.Router();
const service = new CooperativasService();

router.get("/", async (req, res, next) => {
  try {
    const cooperativas = await service.find();

    response({
      res,
      ok: true,
      message: "Listado de cooperativas",
      data: cooperativas,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createCooperativaSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;
      const cooperativa = await service.create(body);
      response({
        res,
        ok: true,
        status: 201,
        message: "Cooperativa creada con exito",
        data: cooperativa,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
