const {
  CicloAgricola,
  CicloAgricolaScheme,
} = require("./ciclo-agricola.model");

const setUpModels = (sequelize) => {
  CicloAgricola.init(
    CicloAgricolaScheme,
    CicloAgricolaScheme.config(sequelize)
  );
};

module.exports = setUpModels;
