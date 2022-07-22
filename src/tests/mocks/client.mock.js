module.exports = {
  findAll: [{
    id: 1,
    nome: 'John Doe',
    documento: '123.456.789-00',
  },
  {
    id: 2,
    nome: 'Lucas Accurcio',
    documento: '432.109.876-99',
  }],

  findOne: {
    id: 1,
    nome: 'John Doe',
    documento: '123.456.789-00',
  },

  create: {
    nome: 'Lucas Ferreira',
    documento: '000.000.000.99',
  },

  created: {
    id: 3,
    nome: 'Lucas Ferreira',
    documento: '000.000.000.99',
  },

  update: {
    nome: 'Doe John',
    documento: '987.654,321-00',
  },

  updated: {
    id: 1,
    nome: 'Doe John',
    documento: '987.654,321-00',
  },

  error: {
    missingName: {
      documento: '987.654,321-00',
    },
    missingDocument: {
      nome: 'Doe John',
    },
  },
};
