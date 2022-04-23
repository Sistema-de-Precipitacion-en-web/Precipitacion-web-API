const Joi = require("joi");

const fecha = Joi.date();
const kilos = Joi.number();
const claveParcela = Joi.string().max(9);

const createProduccionSchema = Joi.object({
  fecha: fecha.required(),
  kilos: kilos.required(),
  claveParcela: claveParcela.required(),
});

module.exports = {
  createProduccionSchema,
};
