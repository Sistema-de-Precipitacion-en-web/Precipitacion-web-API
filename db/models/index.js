const {
  CicloAgricola,
  CicloAgricolaSchema,
} = require("./ciclo-agricola.model");

const { Localidad, LocalidadSchema } = require("./localidad.model");

const { Estado, EstadoSchema } = require("./estado.model");
const { Municipio, MunicipioSchema } = require("./municipios.model");
const { Cooperativa, CooperativaSchema } = require("./cooperativa.model");
const { Productor, ProductorSchema } = require("./productores.model");
const { Estaciones, EstacionesSchema } = require("./estaciones.model");
const { Parcelas, ParcelasSchema } = require("./parcelas.model");
const { AccionesAgua, AccionesAguaSchema } = require("./acciones-agua.model");
const {
  Precipitacion,
  PrecipitacionesSchema,
} = require("./precipitacion.model");
const { RiegoAuxilio, RiegoAuxilioSchema } = require("./riego-auxilio.model");
const { Produccion, ProduccionSchema } = require("./produccion.model");

const setUpModels = (sequelize) => {
  CicloAgricola.init(CicloAgricolaSchema, CicloAgricola.config(sequelize));
  Localidad.init(LocalidadSchema, Localidad.config(sequelize));
  Estado.init(EstadoSchema, Estado.config(sequelize));
  Municipio.init(MunicipioSchema, Municipio.config(sequelize));
  Cooperativa.init(CooperativaSchema, Cooperativa.config(sequelize));
  Productor.init(ProductorSchema, Productor.config(sequelize));
  Estaciones.init(EstacionesSchema, Estaciones.config(sequelize));
  Parcelas.init(ParcelasSchema, Parcelas.config(sequelize));
  AccionesAgua.init(AccionesAguaSchema, AccionesAgua.config(sequelize));
  Precipitacion.init(PrecipitacionesSchema, Precipitacion.config(sequelize));
  RiegoAuxilio.init(RiegoAuxilioSchema, RiegoAuxilio.config(sequelize));
  Produccion.init(ProduccionSchema, Produccion.config(sequelize));

  Estado.associate(sequelize.models);
  Municipio.associate(sequelize.models);
  Localidad.associate(sequelize.models);
  Cooperativa.associate(sequelize.models);
  Parcelas.associate(sequelize.models);
  AccionesAgua.associate(sequelize.models);
  Precipitacion.associate(sequelize.models);
  RiegoAuxilio.associate(sequelize.models);
  Produccion.associate(sequelize.models);
};

module.exports = { setUpModels };
