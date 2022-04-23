const { DataTypes, Model } = require("sequelize");
const { ESTACIONES_TABLE } = require("./estaciones.model");

const PRECIPITACIONES_TABLE = "precipitaciones";

const PrecipitacionesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  fecha: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  semana: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  dia: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  mes: {
    allowNull: false,
    type: DataTypes.STRING(10),
  },
  anio: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  mm: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  enos: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  notas: {
    allowNull: true,
    type: DataTypes.STRING(255),
  },
  claveEstacion: {
    field: "clave_estacion",
    allowNull: false,
    type: DataTypes.STRING(7),
    references: {
      model: ESTACIONES_TABLE,
      key: "clave_estacion",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Precipitacion extends Model {
  static associate(models) {
    this.hasMany(models.Estaciones, {
      as: "estaciones",
      foreignKey: "clave_estacion",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRECIPITACIONES_TABLE,
      modelName: "Precipitaciones",
      timestamps: false,
    };
  }
}

module.exports = {
  Precipitacion,
  PrecipitacionesSchema,
  PRECIPITACIONES_TABLE,
};
