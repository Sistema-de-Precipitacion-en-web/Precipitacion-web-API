const { Model, DataTypes } = require("sequelize");
const { PARCELAS_TABLE } = require("./parcelas.model");

const PRODUCCION_TABLE = "produccion";

const ProduccionSchema = {
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
  kilos: {
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
};

class Produccion extends Model {
  static associate(models) {
    this.hasMany(models.Parcelas, {
      as: "parcelas",
      foreignKey: "clave_parcela",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCCION_TABLE,
      modelName: "Produccion",
      timestamps: false,
    };
  }
}

module.exports = {
  PRODUCCION_TABLE,
  ProduccionSchema,
  Produccion,
};
