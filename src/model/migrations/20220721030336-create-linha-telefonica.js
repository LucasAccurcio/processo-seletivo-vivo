module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LinhaTelefonicas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      numeroLinha: {
        type: Sequelize.STRING,
      },
      clienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clientes',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('LinhaTelefonicas');
  },
};
