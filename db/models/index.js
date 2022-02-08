const {
  CicloAgricola,
  CicloAgricolaScheme,
} = require("./ciclo-agricola.model");

const { Localidad, LocalidadScheme } = require("./localidad.model");

const setUpModels = (sequelize) => {
  CicloAgricola.init(CicloAgricolaScheme, CicloAgricola.config(sequelize));
  Localidad.init(LocalidadScheme, Localidad.config(sequelize));
};

module.exports = { setUpModels };
