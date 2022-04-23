const { models } = require("../lib/sequelize");

class EnosService {
  async create(data) {
    const enos = await models.Enos.create(data);
    return enos;
  }
  async find() {
    const enos = await models.Enos.findAll();
    return enos;
  }
}

module.exports = EnosService;
