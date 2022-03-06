const Joi = require("joi");

const clave = Joi.string().max(3).min(1);
const nombre = Joi.string().max(50).min(5);

const createEstadoSchema = Joi.object({
  clave: clave.required(),
  nombre: nombre.required(),
});

module.exports = {
  createEstadoSchema,
};
