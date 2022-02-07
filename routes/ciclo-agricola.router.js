const express = require("express");
const CicloAgricolaService = require("../services/ciclo-agricola.service");
const router = express.Router();

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

module.exports = router;
