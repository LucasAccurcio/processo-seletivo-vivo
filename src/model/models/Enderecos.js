module.exports = (sequelize, DataTypes) => {
  const Enderecos = sequelize.define(
    'Enderecos',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      logradouro: DataTypes.STRING,
      numero: DataTypes.STRING,
      cidade: DataTypes.STRING,
      estado: DataTypes.STRING,
      cep: DataTypes.STRING,
      clienteId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      timestamps: false,
      tableName: 'Enderecos',
    },
  );

  Enderecos.associate = (models) => {
    Enderecos.belongsTo(
      models.Cliente,
      { foreingKey: 'clienteId', as: 'cliente' },
    );
  };

  return Enderecos;
};
