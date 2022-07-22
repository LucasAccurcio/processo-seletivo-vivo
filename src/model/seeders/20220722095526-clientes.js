module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Clientes', [{
      id: 1,
      nome: 'John Doe',
      documento: '123.456.789-00',
    },
    {
      id: 2,
      nome: 'Lucas Accurcio',
      documento: '432.109.876-99',
    },
    ], { timestamps: false });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});
  },
};
