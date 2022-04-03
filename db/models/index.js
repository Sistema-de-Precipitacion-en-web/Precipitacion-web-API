const {
  CicloAgricola,
  CicloAgricolaSchema,
} = require("./ciclo-agricola.model");

const { Localidad, LocalidadSchema } = require("./localidad.model");

const { Estado, EstadoSchema } = require("./estado.model");
const { Municipio, MunicipioSchema } = require("./municipios.model");
const { Cooperativa, CooperativaSchema } = require("./cooperativa.model");
const { Productor, ProductorSchema } = require("./productores.model");

const setUpModels = (sequelize) => {
  CicloAgricola.init(CicloAgricolaSchema, CicloAgricola.config(sequelize));
  Localidad.init(LocalidadSchema, Localidad.config(sequelize));
  Estado.init(EstadoSchema, Estado.config(sequelize));
  Municipio.init(MunicipioSchema, Municipio.config(sequelize));
  Cooperativa.init(CooperativaSchema, Cooperativa.config(sequelize));
  Productor.init(ProductorSchema, Productor.config(sequelize));

  Estado.associate(sequelize.models);
  Municipio.associate(sequelize.models);
  Localidad.associate(sequelize.models);
  Cooperativa.associate(sequelize.models);
};

module.exports = { setUpModels };
