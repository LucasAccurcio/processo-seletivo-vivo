const clientService = require('../service/client.service');

const clientController = {
  getAllClient: async (_req, res) => {
    const clients = await clientService.getAllClient();
    return res.status(200).json(clients);
  },

  getClient: async (req, res) => {
    const { id } = req.params;
    const client = await clientService.getClient(id);
    if (!client) return res.status(401).json({ error: 'Client not found' });
    return res.status(200).json(client);
  },

  createClient: async (req, res) => {
    const { body } = req;
    const client = await clientService.createClient(body);
    if (!client) {
      return res.status(409).json({ error: 'Client already exists' });
    }
    return res.status(201).json(client);
  },

  updateClient: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const client = await clientService.updateClient(id, body);
    return res.status(201).json(client);
  },

  deleteClient: async (req, res) => {
    const { id } = req.params;
    await clientService.deleteClient(id);
    return res.status(204).end();
  },

  getClientInfo: async (req, res) => {
    const { id } = req.params;
    const client = await clientService.getClientInfo(id);
    if (!client) return res.status(401).json({ error: 'Client not found' });
    return res.status(200).json(client);
  },
};

module.exports = clientController;
