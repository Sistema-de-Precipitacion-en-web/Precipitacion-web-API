const { DataTypes, Model } = require("sequelize");
const { COOPERATIVA_TABLE } = require("./cooperativa.model");

const PRODUCTORES_TABLE = "productores";

const ProductorSchema = {
  claveProductor: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    field: "clave_productor",
  },
  nombresProductor: {
    allowNull: false,
    type: DataTypes.STRING(70),
    field: "nombres_productor",
  },
  apellidoPaterno: {
    allowNull: false,
    type: DataTypes.STRING(70),
    field: "apellido_paterno",
  },
  apellidoMaterno: {
    allowNull: false,
    type: DataTypes.STRING(70),
    field: "apellido_materno",
  },
  claveCooperativa: {
    field: "clave_cooperativa",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: COOPERATIVA_TABLE,
      key: "clave_cooperativa",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Productor extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTORES_TABLE,
      modelName: "Productor",
      timestamps: false,
    };
  }
}

module.exports = {
  PRODUCTORES_TABLE,
  ProductorSchema,
  Productor,
};
