const { Op } = require('sequelize');
const { Clientes } = require('../model/models');
const schema = require('./client.schema');

const validateInputData = (req, res, next) => {
  const payload = req.body;
  const { error } = schema.validate(payload);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  return next();
};

const checkUserExists = async (client) => {
  const { nome, documento } = client;
  const clientExists = await Clientes.findOne({
    where: {
      [Op.or]: [{ nome }, { documento }],
    },
  });
  return clientExists;
};

module.exports = { validateInputData, checkUserExists };
