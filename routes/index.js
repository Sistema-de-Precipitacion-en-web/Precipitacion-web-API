const express = require("express");
const cicloAgricolaRouter = require("./ciclo-agricola.router");
const estadosRouter = require("./estado.router");
const localidadRouter = require("./localidad.router");
const municipiosRouter = require("./municipios.router");
const cooperativaRouter = require("./cooperativas.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/ciclo-agricola", cicloAgricolaRouter);
  router.use("/estados", estadosRouter);
  router.use("/localidades", localidadRouter);
  router.use("/municipios", municipiosRouter);
  router.use("/cooperativas", cooperativaRouter);
}

module.exports = routerApi;
