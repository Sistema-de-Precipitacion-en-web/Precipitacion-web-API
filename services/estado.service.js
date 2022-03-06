const { models } = require("../lib/sequelize");

class EstadoService {
  async create(data) {
    const newState = await models.Estado.create(data);
    return newState;
  }

  async find() {
    const states = await models.Estado.findAll();
    return states;
  }
}

module.exports = EstadoService;
