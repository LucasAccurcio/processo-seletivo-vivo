module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Enderecos', [{
      id: 1,
      logradouro: 'Av. Morumbi',
      numero: '1000',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      cep: '12345-125',
      clienteId: 1,
    },
    {
      id: 2,
      logradouro: 'Av. Sargento Geraldo Santana',
      numero: '200',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      cep: '04666-666',
      clienteId: 2,
    },
    ], { timestamps: false });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Enderecos', null, {});
  },
};
