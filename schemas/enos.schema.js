const Joi = require("joi");

const fase = Joi.string().max(255);

const CreateEnosSchema = Joi.object({
  fase: fase.required(),
});

module.exports = {
  CreateEnosSchema,
};
