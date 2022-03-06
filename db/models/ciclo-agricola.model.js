const { Model, DataTypes } = require("sequelize");

const CICLO_AGRICOLA_TABLE = "ciclo_agricola";

const CicloAgricolaSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  cicloAgricola: {
    allowNull: false,
    type: DataTypes.STRING(4),
    field: "ciclo_agricola",
    defaultValue: "",
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
  fase: {
    allowNull: false,
    type: DataTypes.STRING(24),
  },
};

class CicloAgricola extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: CICLO_AGRICOLA_TABLE,
      modelName: "CicloAgricola",
      timestamps: false,
    };
  }
}

module.exports = {
  CICLO_AGRICOLA_TABLE,
  CicloAgricolaSchema,
  CicloAgricola,
};
