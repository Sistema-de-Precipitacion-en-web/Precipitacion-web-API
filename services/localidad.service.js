const { models } = require("../lib/sequelize");

class LocalidadesService {
  async create(data) {
    const newLocalidad = await models.Localidad.create(data);
    return newLocalidad;
  }

  async find() {
    const data = await models.Localidad.findAll();
    return data;
  }
}

module.exports = LocalidadesService;
