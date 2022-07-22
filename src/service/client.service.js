const { Clientes, Enderecos, LinhaTelefonicas } = require('../model/models');
const { checkUserExists } = require('../middlewares/client.validations');

const clientService = {
  getAllClient: async () => {
    const clients = await Clientes.findAll({});
    return clients;
  },

  getClient: async (id) => {
    const client = await Clientes.findOne({
      where: { id },
    });
    return client;
  },

  createClient: async (client) => {
    const userExists = await checkUserExists(client);
    if (!userExists) {
      const { nome, documento } = client;
      const createdUser = await Clientes.create({ nome, documento });
      return createdUser;
    }
    return null;
  },

  updateClient: async (id, client) => {
    const { nome, documento } = client;
    const updatedClient = await Clientes.update(
      { nome, documento },
      {
        where: { id },
      },
    );
    return updatedClient;
  },

  deleteClient: async (id) => {
    await Clientes.destroy({ where: { id } });
  },

  getClientInfo: async (id) => {
    const clientInfo = Clientes.findOne({
      where: { id },
      include: [{
        model: Enderecos,
        as: 'endereco',
        attributes: ['logradouro', 'numero', 'cidade', 'estado', 'cep'],
      }],
    });
    return clientInfo;
  },
};

module.exports = clientService;
