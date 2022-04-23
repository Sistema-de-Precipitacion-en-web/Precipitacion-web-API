const { DataTypes, Model } = require("sequelize");
const { ACCIONES_AGUA_TABLE } = require("./acciones-agua.model");
const { PARCELAS_TABLE } = require("./parcelas.model");

const RIEGO_AUXILIO_TABLE = "precipitaciones";

const RiegoAuxilioSchema = {
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
  afomlmin: {
    allowNull: false,
    type: DataTypes.DOUBLE,
  },
  minutos: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  claveParcela: {
    field: "clave_parcela",
    allowNull: false,
    type: DataTypes.STRING(9),
    references: {
      model: PARCELAS_TABLE,
      key: "clave_parcela",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
  claveObra: {
    field: "clave_obra",
    allowNull: false,
    type: DataTypes.STRING(10),
    references: {
      model: ACCIONES_AGUA_TABLE,
      key: "clave_obra",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class RiegoAuxilio extends Model {
  static associate(models) {
    this.hasMany(models.AccionesAgua, {
      as: "accionesAgua",
      foreignKey: "clave_obra",
    });
    this.hasMany(models.Parcelas, {
      as: "parcelas",
      foreignKey: "clave_parcela",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RIEGO_AUXILIO_TABLE,
      modelName: "RiegoAuxilio",
      timestamps: false,
    };
  }
}

module.exports = {
  RiegoAuxilio,
  RiegoAuxilioSchema,
  RIEGO_AUXILIO_TABLE,
};
