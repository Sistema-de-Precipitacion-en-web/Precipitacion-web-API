const Joi = require("joi");

const fecha = Joi.date();
const mm = Joi.number();
const enos = Joi.number();
const notas = Joi.string().max(255);
const claveEstacion = Joi.string().max(7);

const createPrecipitacionSchema = Joi.object({
  fecha: fecha.required(),
  mm,
  enos,
  notas,
  claveEstacion: claveEstacion.required(),
});

module.exports = {
  createPrecipitacionSchema,
};
