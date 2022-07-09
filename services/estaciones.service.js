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

  async findPrecipitaciones(clave_estacion) {
    const precipitaciones = await models.Precipitaciones.findAll({
      where: {
        clave_estacion,
      },
    });
    return precipitaciones;
  }
}

module.exports = EstacionesService;
