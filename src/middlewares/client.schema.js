const Joi = require('joi');

const clientSchema = Joi.object().keys({
  nome: Joi.string().required(),
  documento: Joi.string().required().min(6),
});

module.exports = clientSchema;
