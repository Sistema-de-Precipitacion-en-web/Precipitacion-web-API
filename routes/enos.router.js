const express = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const { CreateEnosSchema } = require("../schemas/enos.schema");

const EnosService = require("../services/enos.service");
const response = require("../utils/response");

const router = express.Router();
const service = new EnosService();

router.get("/", async (req, res, next) => {
  try {
    const enos = await service.find();

    response({
      res,
      ok: true,
      message: "Listado de enos",
      data: enos,
    });
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  validatorHandler(CreateEnosSchema, "body"),
  async (req, res, next) => {
    try {
      const { body } = req;
      const eno = await service.create(body);
      response({
        res,
        ok: true,
        status: 201,
        message: "Cooperativa creada con exito",
        data: eno,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
