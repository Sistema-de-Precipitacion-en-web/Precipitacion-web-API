const Joi = require("joi");

const cicloAgricola = Joi.string().max(4).min(1);
const fecha = Joi.date();
const fase = Joi.string().max(24);

const createCicloAgricolaSchema = Joi.object({
  cicloAgricola: cicloAgricola.required(),
  fecha: fecha.required(),
  fase: fase.required(),
});

module.exports = {
  createCicloAgricolaSchema,
};
