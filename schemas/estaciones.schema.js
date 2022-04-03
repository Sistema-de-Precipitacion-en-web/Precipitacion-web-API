const Joi = require("joi");

const claveEstacion = Joi.string().max(7);
const nombreEstacion = Joi.string().max(70);
const longDec = Joi.number();
const latDec = Joi.number();
const claveLocalidad = Joi.string().max(9);

const createEstacionSchema = Joi.object({
  claveEstacion: claveEstacion.required(),
  nombreEstacion: nombreEstacion.required(),
  longDec: longDec.required(),
  latDec: latDec.required(),
  claveLocalidad: claveLocalidad.required(),
});

module.exports = {
  createEstacionSchema,
};
