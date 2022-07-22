module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('LinhaTelefonicas', [{
      id: 1,
      numeroLinha: '11932167896',
      clienteId: 1,
    },
    {
      id: 2,
      numeroLinha: '11998763216',
      clienteId: 2,
    },
    ], { timestamps: false });
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('LinhaTelefonicas', null, {});
  },
};
