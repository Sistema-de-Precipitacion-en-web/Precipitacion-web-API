const express = require("express");
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

router.post("/", (req, res, next) => {});

module.exports = router;
