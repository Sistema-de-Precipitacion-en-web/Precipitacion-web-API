const { DataTypes, Model } = require("sequelize");
const { LOCALIDAD_TABLE } = require("./localidad.model");

const ESTACIONES_TABLE = "estaciones";

const EstacionesSchema = {
  claveEstacion: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING(7),
    field: "clave_estacion",
  },
  nombreEstacion: {
    allowNull: false,
    type: DataTypes.STRING(70),
    field: "nombre_estacion",
  },
  longDec: {
    allowNull: false,
    type: DataTypes.DOUBLE,
    field: "long_dec",
  },
  latDec: {
    allowNull: false,
    type: DataTypes.DOUBLE,
    field: "lat_dec",
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

class Estaciones extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: ESTACIONES_TABLE,
      modelName: "Estaciones",
      timestamps: false,
    };
  }
}

module.exports = {
  ESTACIONES_TABLE,
  EstacionesSchema,
  Estaciones,
};
