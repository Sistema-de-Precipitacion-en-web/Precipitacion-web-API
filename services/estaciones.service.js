const { models } = require("../lib/sequelize");

class EstacionesService {
  async create(data) {
    const estacion = await models.Estaciones.create(data);
    return estacion;
  }

  async find() {
    const estaciones = await models.Estaciones.findAll();
    return estaciones;
  }
}

module.exports = EstacionesService;
