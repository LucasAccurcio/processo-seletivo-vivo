const express = require('express');
const clientController = require('../controller/client.controller');
const { validateInputData } = require('../middlewares/client.validations');

const clientRouter = express.Router();

clientRouter.get('/', clientController.getAllClient);

clientRouter.post('/', validateInputData, clientController.createClient);

clientRouter.get('/:id', clientController.getClient);

clientRouter.get('/:id/info', clientController.getClientInfo);

clientRouter.put('/:id', clientController.updateClient);

clientRouter.delete('/:id', clientController.deleteClient);

module.exports = clientRouter;
