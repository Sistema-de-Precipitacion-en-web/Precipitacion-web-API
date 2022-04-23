const express = require("express");
const cicloAgricolaRouter = require("./ciclo-agricola.router");
const estadosRouter = require("./estado.router");
const localidadRouter = require("./localidad.router");
const municipiosRouter = require("./municipios.router");
const cooperativaRouter = require("./cooperativas.router");
const productoresRouter = require("./productores.router");
const estacionesRouter = require("./estaciones.router");
const parcelasRouter = require("./parelas.router");
const accionesAguaRouter = require("./acciones-agua.router");
const precipitacionesRouter = require("./precipitaciones.router");
const riegoAuxilioRouter = require("./riego-auxilio.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/ciclo-agricola", cicloAgricolaRouter);
  router.use("/estados", estadosRouter);
  router.use("/localidades", localidadRouter);
  router.use("/municipios", municipiosRouter);
  router.use("/cooperativas", cooperativaRouter);
  router.use("/productores", productoresRouter);
  router.use("/estaciones", estacionesRouter);
  router.use("/parcelas", parcelasRouter);
  router.use("/acciones-agua", accionesAguaRouter);
  router.use("/precipitaciones", precipitacionesRouter);
  router.use("/riego-auxilio", riegoAuxilioRouter);
}

module.exports = routerApi;
