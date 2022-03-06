const { models } = require("../lib/sequelize");

class MunicipiosService {
  async create(data) {
    const municipio = await models.Municipio.create(data);
    return municipio;
  }

  async find() {
    const municipios = await models.Municipio.findAll();
    return municipios;
  }
}

module.exports = MunicipiosService;
