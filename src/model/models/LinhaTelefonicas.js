module.exports = (sequelize, DataTypes) => {
  const LinhaTelefonicas = sequelize.define(
    'LinhaTelefonicas',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      numeroLinha: DataTypes.STRING,
      clienteId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      timestamps: false,
      tableName: 'LinhaTelefonicas',
    },
  );

  LinhaTelefonicas.associate = (models) => {
    LinhaTelefonicas.belongsTo(
      models.Cliente,
      { foreignKey: 'clienteId', as: 'cliente' },
    );
  };

  return LinhaTelefonicas;
};
