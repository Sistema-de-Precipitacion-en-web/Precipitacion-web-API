const express = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const { createProductorSchema } = require("../schemas/productor.schema");
const ProductoresService = require("../services/productores.service");
const response = require("../utils/response");

const router = express.Router();
const service = new ProductoresService();

router.get("/", async (req, res, next) => {
  try {
    const productores = await service.find();
    response({
      res,
      ok: true,
      message: "Listado de productores",
      data: productores,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(createProductorSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;
      const productor = await service.create(body);

      response({
        res,
        ok: true,
        status: 201,
        message: "Productor creado con éxito",
        data: productor,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
