const { models } = require("../lib/sequelize");

class ParcelasService {
  async create(data) {
    const parcela = await models.Parcelas.create(data);
    return parcela;
  }

  async find() {
    const parcelas = await models.Parcelas.findAll();
    return parcelas;
  }
}

module.exports = ParcelasService;
