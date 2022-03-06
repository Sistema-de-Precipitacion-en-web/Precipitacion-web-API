const Joi = require("joi");

const claveCooperativa = Joi.number().positive();
const nombreCooperativa = Joi.string().max(100);
const claveLocalidad = Joi.string().max(9).min(9);

const createCooperativaSchema = Joi.object({
  claveCooperativa: claveCooperativa.required(),
  nombreCooperativa: nombreCooperativa.required(),
  claveLocalidad: claveLocalidad.required(),
});

module.exports = {
  createCooperativaSchema,
};
