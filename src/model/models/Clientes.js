module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define(
    'Clientes',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nome: DataTypes.STRING,
      documento: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Clientes',
    },
  );

  Clientes.associate = (models) => {
    Clientes.hasMany(
      models.LinhaTelefonicas,
      { foreignKey: 'id', as: 'linhaTelefonica' },
    );
  };

  Clientes.associate = (models) => {
    Clientes.hasOne(
      models.Enderecos,
      { foreignKey: 'id', as: 'linhaTelefonica' },
    );
  };

  return Clientes;
};
