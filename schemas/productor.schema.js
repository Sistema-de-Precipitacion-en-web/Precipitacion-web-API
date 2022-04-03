const Joi = require("joi");

const claveProductor = Joi.number().positive();
const nombresProductor = Joi.string().max(70);
const apellidoPaterno = Joi.string().max(70);
const apellidoMaterno = Joi.string().max(70);
const claveCooperativa = Joi.number().positive();

const createProductorSchema = Joi.object({
  claveProductor: claveProductor.required(),
  nombresProductor: nombresProductor.required(),
  apellidoPaterno: apellidoPaterno.required(),
  apellidoMaterno: apellidoMaterno.required(),
  claveCooperativa: claveCooperativa.required(),
});

module.exports = {
  createProductorSchema,
};
