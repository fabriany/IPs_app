const Joi = require('joi');
Joi.objectID = require('joi-objectid')(Joi);

const id = Joi.objectID();
const date = Joi.string();
const ip = Joi.string().ip({ version: ['ipv4', 'ipv6']});
const url = Joi.string();

const createIPSchema = Joi.object({

});

const updatePatchIPSchema = Joi.object({
  date: date,
  ip: ip,
  url: url
});

const updatePutIPSchema = Joi.object({
  date: date.required(),
  ip: ip.required(),
  url: url.required()
});

const getIPSchema = Joi.object({
  id: id.required()
});

module.exports = { updatePutIPSchema, updatePatchIPSchema, getIPSchema }
