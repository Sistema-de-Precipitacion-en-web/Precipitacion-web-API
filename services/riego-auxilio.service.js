const { models } = require("../lib/sequelize");

class RiegoAuxilioService {
  async create(data) {
    const productor = await models.RiegoAuxilio.create(data);
    return productor;
  }

  async find() {
    const productores = await models.RiegoAuxilio.findAll();
    return productores;
  }
}

module.exports = RiegoAuxilioService;
