const express = require('express');

const clientRouter = require('./src/routes/cliente.routes');
// const errorHandler = require('../app/middlewares/error');
// require('express-async-errors');

const app = express();

app.use(express.json());

// routes
app.use('/cliente', clientRouter);
// app.use('/endereco', loginRouter);
// app.use('/linha', productRouter);

// response middlewares
// app.use(errorHandler);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
