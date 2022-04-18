const { models } = require("../lib/sequelize");

class AccionesAguaService {
  constructor() {}

  async create(data) {
    const accionDeAgua = await models.AccionesAgua.create(data);
    return accionDeAgua;
  }

  async find() {
    const accionesDeAgua = await models.AccionesAgua.findAll();
    return accionesDeAgua;
  }
}

module.exports = AccionesAguaService;
