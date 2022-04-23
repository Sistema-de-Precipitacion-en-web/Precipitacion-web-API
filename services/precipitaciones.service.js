const { models } = require("../lib/sequelize");

class PrecipitacionesService {
  async create(data) {
    const precipitacion = await models.Precipitaciones.create(data);
    return precipitacion;
  }

  async find() {
    const precipitacion = await models.Precipitaciones.findAll();
    return precipitacion;
  }
}

module.exports = PrecipitacionesService;
