const { models } = require("../lib/sequelize");

class CicloAgricola {
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

module.exports = CicloAgricola;
