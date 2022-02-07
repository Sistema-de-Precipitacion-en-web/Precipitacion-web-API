const express = require("express");
const CicloAgricolaService = require("../services/ciclo-agricola.service");
const validatorHandler = require("../middlewares/validator.handler");
const router = express.Router();

const {
  createCicloAgricolaSchema,
} = require("../schemas/ciclo-agricola.schema");

const service = new CicloAgricolaService();

router.get("/", async (req, res, next) => {
  try {
    const data = await service.find();
    res.json({
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
      res.json({ data: "Endpoint is working" });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
