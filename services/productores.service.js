const { models } = require("../lib/sequelize");

class ProductoresService {
  async create(data) {
    const productor = await models.Productor.create(data);
    return productor;
  }

  async find() {
    const productores = await models.Productor.findAll();
    return productores;
  }
}

module.exports = ProductoresService;
