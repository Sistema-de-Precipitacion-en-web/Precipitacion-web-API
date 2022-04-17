const Joi = require("joi");

const claveParcela = Joi.string().max(9);
const nombreParcela = Joi.string().max(250);
const latDec = Joi.number();
const longDec = Joi.number();
const asnm = Joi.string().max(5);
const areaHa = Joi.number();
const planAma = Joi.number();
const numGote = Joi.number();
const ciclo = Joi.string().max(4);
const claveProductor = Joi.number();
const claveEstacion = Joi.string().max(7);

const createParcelaSchema = Joi.object({
  claveParcela: claveParcela.required(),
  nombreParcela: nombreParcela.required(),
  latDec: latDec.required(),
  longDec: longDec.required(),
  asnm: asnm.required(),
  areaHa: areaHa.required(),
  planAma: planAma.required(),
  numGote: numGote.required(),
  ciclo: ciclo.required(),
  claveProductor: claveProductor.required(),
  claveEstacion: claveEstacion.required(),
});

module.exports = {
  createParcelaSchema,
};
