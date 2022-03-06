const Joi = require("joi");

const claveDeLaLocalidad = Joi.string().max(9).min(9);
const claveLocalidad = Joi.string().max(4);
const latitud = Joi.number();
const longitud = Joi.number();
const claveMunicipio = Joi.string().max(3);
const nombreLocalidad = Joi.string().max(60);

const createLocalidadSchema = Joi.object({
  claveDeLaLocalidad: claveDeLaLocalidad.required(),
  claveLocalidad: claveLocalidad.required(),
  latitud: latitud.required(),
  longitud: longitud.required(),
  claveMunicipio: claveMunicipio.required(),
  nombreLocalidad: nombreLocalidad.required(),
});

module.exports = {
  createLocalidadSchema,
};
