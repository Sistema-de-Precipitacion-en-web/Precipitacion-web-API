const { Model, DataTypes } = require("sequelize");
const { ESTADO_TABLE } = require("./estado.model");

const LOCALIDAD_TABLE = "localidad";

const LocalidadSchema = {
  claveDeLaLocalidad: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING(9),
    field: "clave_de_la_localidad",
  },
  // claveEstado: {
  //   allowNull: false,
  //   type: DataTypes.STRING(2),
  //   field: "clave_estado",
  // },
  claveMunicipio: {
    allowNull: false,
    type: DataTypes.STRING(3),
    field: "clave_municipio",
  },
  claveLocalidad: {
    allowNull: false,
    type: DataTypes.STRING(4),
    field: "clave_localidad",
  },
  // nombreEstado: {
  //   allowNull: false,
  //   type: DataTypes.STRING(8),
  //   field: "nombre_estado",
  // },
  nombreMunicipio: {
    allowNull: false,
    type: DataTypes.STRING(45),
    field: "nombre_municipio",
  },
  nombreLocalidad: {
    allowNull: false,
    type: DataTypes.STRING(60),
    field: "nombre_localidad",
  },
  latitud: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "latitud",
  },
  longitud: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "longitud",
  },
  estado: {
    field: "clave_estado",
    allowNull: false,
    type: DataTypes.STRING(3),
    references: {
      model: ESTADO_TABLE,
      key: "clave_de_estado",
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
