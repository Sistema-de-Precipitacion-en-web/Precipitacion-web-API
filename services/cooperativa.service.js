const { models } = require("../lib/sequelize");

class CooperativaService {
  async create(data) {
    const cooperativa = await models.Cooperativa.create(data);
    return cooperativa;
  }
  async find() {
    const cooperativas = await models.Cooperativa.findAll();
    return cooperativas;
  }
}

module.exports = CooperativaService;
