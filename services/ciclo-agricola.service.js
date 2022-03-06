const { models } = require("../lib/sequelize");

class CicloAgricolaService {
  constructor() {}

  async create(data) {
    const newRecord = await models.CicloAgricola.create(data);
    return newRecord;
  }

  async find() {
    const data = await models.CicloAgricola.findAll();
    return data;
  }
}

module.exports = CicloAgricolaService;
