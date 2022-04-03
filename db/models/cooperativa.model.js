const { DataTypes, Model } = require("sequelize");
const { LOCALIDAD_TABLE } = require("./localidad.model");

const COOPERATIVA_TABLE = "cooperativa";

const CooperativaSchema = {
  claveCooperativa: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: "clave_cooperativa",
  },
  nombreCooperativa: {
    allowNull: false,
    type: DataTypes.STRING(100),
    field: "nombre_cooperativa",
  },
  claveLocalidad: {
    field: "clave_localidad",
    allowNull: false,
    type: DataTypes.STRING(9),
    references: {
      model: LOCALIDAD_TABLE,
      key: "clave_de_la_localidad",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Cooperativa extends Model {
  static associate(models) {
    this.hasMany(models.Productor, {
      as: "productores",
      foreignKey: "clave_cooperativa",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COOPERATIVA_TABLE,
      modelName: "Cooperativa",
      timestamps: false,
    };
  }
}

module.exports = {
  COOPERATIVA_TABLE,
  CooperativaSchema,
  Cooperativa,
};
