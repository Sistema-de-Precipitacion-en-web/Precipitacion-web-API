const { DataTypes, Model } = require("sequelize");
const { ESTACIONES_TABLE } = require("./estaciones.model");
const { PRODUCTORES_TABLE } = require("./productores.model");

const PARCELAS_TABLE = "parcelas";

const ParcelasSchema = {
  claveParcela: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.STRING(9),
    field: "clave_parcela",
  },
  nombreParcela: {
    allowNull: false,
    type: DataTypes.STRING(250),
    field: "nombre_parcela",
  },
  latDec: {
    allowNull: false,
    type: DataTypes.DOUBLE,
    field: "lat_dec",
  },
  longDec: {
    allowNull: false,
    type: DataTypes.DOUBLE,
    field: "long_dec",
  },
  asnm: {
    allowNull: false,
    type: DataTypes.STRING(5),
  },
  areaHa: {
    allowNull: false,
    type: DataTypes.DOUBLE,
    field: "area_ha",
  },
  planAma: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "plan_ama",
  },
  numGote: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: "num_gote",
  },
  ciclo: {
    allowNull: false,
    type: DataTypes.STRING(4),
  },
  claveProductor: {
    field: "clave_productor",
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: PRODUCTORES_TABLE,
      key: "clave_productor",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
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

class Parcelas extends Model {
  static associate(models) {
    this.hasMany(models.Productor, {
      as: "productores",
      foreignKey: "clave_productor",
    });

    this.hasMany(models.Estaciones, {
      as: "estaciones",
      foreignKey: "clave_estacion",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PARCELAS_TABLE,
      modelName: "Parcelas",
      timestamps: false,
    };
  }
}

module.exports = {
  PARCELAS_TABLE,
  ParcelasSchema,
  Parcelas,
};
