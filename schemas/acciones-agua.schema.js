const Joi = require("joi");

const claveObra = Joi.string().max(10);
const tipo = Joi.string().max(70);
const lAlmace = Joi.number();
const mCapta = Joi.number();
const mMicro = Joi.number();
const mCaptt = Joi.number();
const fecha = Joi.date();
const laguaAct = Joi.number();
const longDec = Joi.number();
const latDec = Joi.number();
const claveParcela = Joi.string().max(9);

const createAccionDeAguaSchema = Joi.object({
  claveObra: claveObra.required(),
  tipo: tipo.required(),
  lAlmace: lAlmace.required(),
  mCapta: mCapta.required(),
  mMicro: mMicro.required(),
  mCaptt: mCaptt.required(),
  fecha: fecha.required(),
  laguaAct: laguaAct.required(),
  longDec: longDec.required(),
  latDec: latDec.required(),
  claveParcela: claveParcela.required(),
});

module.exports = {
  createAccionDeAguaSchema,
};
