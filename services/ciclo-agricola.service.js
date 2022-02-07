const { models } = require("../lib/sequelize");

class CicloAgricola {
  constructor() {}

  async find() {
    console.log("Esta es la data: ");
    const data = await models.CicloAgricola.findAll();
    return data;
  }
}

module.exports = CicloAgricola;
