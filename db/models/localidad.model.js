const { Model, DataTypes } = require("sequelize");
const { MUNICIPIO_TABLE } = require("./municipios.model");
const LOCALIDAD_TABLE = "localidad";

const LocalidadSchema = {
  claveDeLaLocalidad: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING(9),
    field: "clave_de_la_localidad",
  },

  claveLocalidad: {
    allowNull: false,
    type: DataTypes.STRING(4),
    field: "clave_localidad",
  },

  nombreLocalidad: {
    allowNull: false,
    type: DataTypes.STRING(60),
    field: "nombre_localidad",
  },
  latitud: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: "latitud",
  },
  longitud: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: "longitud",
  },

  claveMunicipio: {
    field: "clave_municipio",
    allowNull: false,
    type: DataTypes.STRING(3),
    references: {
      model: MUNICIPIO_TABLE,
      key: "clave_municipio",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Localidad extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: LOCALIDAD_TABLE,
      modelName: "Localidad",
      timestamps: false,
    };
  }
}

module.exports = {
  LOCALIDAD_TABLE,
  LocalidadSchema,
  Localidad,
};
