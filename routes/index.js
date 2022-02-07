const express = require("express");
const cicloAgricolaRouter = require("./ciclo-agricola.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/ciclo-agricola", cicloAgricolaRouter);
}

module.exports = routerApi;
