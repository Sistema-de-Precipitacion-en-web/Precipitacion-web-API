const {
  CicloAgricola,
  CicloAgricolaScheme,
} = require("./ciclo-agricola.model");

const setUpModels = (sequelize) => {
  CicloAgricola.init(CicloAgricolaScheme, CicloAgricola.config(sequelize));
};

module.exports = { setUpModels };
