const { Model, DataTypes } = require("sequelize");

const ESTADO_TABLE = "estado";

const EstadoSchema = {
  claveEstado: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING(3),
    field: "clave_de_estado",
  },
  nombreEstado: {
    allowNull: false,
    type: DataTypes.STRING(50),
    field: "nombre_estado",
  },
};

class Estado extends Model {
  static associate(models) {
    this.hasMany(models.Municipio, {
      as: "municipios",
      foreignKey: "claveEstado",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ESTADO_TABLE,
      modelName: "Estado",
      timestamps: false,
    };
  }
}

module.exports = {
  ESTADO_TABLE,
  EstadoSchema,
  Estado,
};
