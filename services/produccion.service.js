const { models } = require("../lib/sequelize");

class ProduccionService {
  async create(data) {
    const produccion = await models.Produccion.create(data);
    return produccion;
  }

  async find() {
    const producciones = await models.Produccion.findAll();
    return producciones;
  }
}

module.exports = ProduccionService;
