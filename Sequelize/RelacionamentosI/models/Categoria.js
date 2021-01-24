module.exports = (sequelize, DataType) => {
  const Categoria = sequelize.define(
    'Categoria',
    {
      id_categoria: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo: DataType.STRING,
    },
    {
      tableName: 'categoria',
      timestamps: false,
    }
  );

  Categoria.associate = (listaDeModelos) => {
    Categoria.hasMany(listaDeModelos.Produto, {
      foreignKey: 'fk_categoria',
      as: 'produtos',
    });
  };

  return Categoria;
};
