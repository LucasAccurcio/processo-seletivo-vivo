module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      documento: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Clientes');
  },
};
