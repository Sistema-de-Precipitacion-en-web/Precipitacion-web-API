const Joi = require("joi");

const fecha = Joi.date();
const afomlmin = Joi.number();
const minutos = Joi.number();
const claveParcela = Joi.string().max(9);
const claveObra = Joi.string().max(10);

const createRiegoAuxilioSchema = Joi.object({
  fecha: fecha.required(),
  afomlmin: afomlmin.required(),
  minutos: minutos.required(),
  claveParcela: claveParcela.required(),
  claveObra: claveObra.required(),
});

module.exports = {
  createRiegoAuxilioSchema,
};
