const { DataTypes, Model } = require("sequelize");
const { ESTADO_TABLE } = require("./estado.model");

const MUNICIPIO_TABLE = "municipios";

const MunicipioSchema = {
  claveMunicipio: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING(3),
    field: "clave_municipio",
  },
  nombreMunicipio: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  claveEstado: {
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

class Municipio extends Model {
  static associate(models) {
    this.hasMany(models.Localidad, {
      as: "localidades",
      foreignKey: "clave_municipio",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: MUNICIPIO_TABLE,
      modelName: "Municipio",
      timestamps: false,
    };
  }
}

module.exports = {
  MUNICIPIO_TABLE,
  MunicipioSchema,
  Municipio,
};
