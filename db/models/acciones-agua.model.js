const { Model, DataTypes } = require("sequelize");
const { PARCELAS_TABLE } = require("./parcelas.model");

const ACCIONES_AGUA_TABLE = "acciones_agua";

const AccionesAguaSchema = {
  claveObra: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING(10),
    field: "clave_obra",
  },
  tipo: {
    allowNull: false,
    type: DataTypes.STRING(70),
  },
  lAlmace: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "l_almace",
  },
  mCapta: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "m_capta",
  },
  mMicro: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "m_micro",
  },
  mCaptt: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "m_captt",
  },
  fecha: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  laguaAct: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "lagua_act",
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

class AccionesAgua extends Model {
  static associate(models) {
    this.hasMany(models.Parcelas, {
      as: "parcelas",
      foreignKey: "clave_parcela",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ACCIONES_AGUA_TABLE,
      modelName: "AccionesAgua",
      timestamps: false,
    };
  }
}

module.exports = {
  ACCIONES_AGUA_TABLE,
  AccionesAguaSchema,
  AccionesAgua,
};
