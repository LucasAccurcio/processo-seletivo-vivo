module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      logradouro: {
        type: Sequelize.STRING,
      },
      numero: {
        type: Sequelize.STRING,
      },
      cidade: {
        type: Sequelize.STRING,
      },
      estado: {
        type: Sequelize.STRING,
      },
      cep: {
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
    await queryInterface.dropTable('Enderecos');
  },
};
