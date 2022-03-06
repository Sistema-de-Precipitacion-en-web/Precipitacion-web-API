const Joi = require("joi");

const claveMunicipio = Joi.string().max(3).min(3);
const nombreMunicipio = Joi.string().max(100);
const claveEstado = Joi.string().max(3);

const createMunicipioSchema = Joi.object({
  claveMunicipio: claveMunicipio.required(),
  nombreMunicipio: nombreMunicipio.required(),
  claveEstado: claveEstado.required(),
});

module.exports = {
  createMunicipioSchema,
};
