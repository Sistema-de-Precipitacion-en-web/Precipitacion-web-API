const { Model, DataTypes } = require("sequelize");

const ENOS_TABLE = "enos";

const EnosSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  fase: {
    allowNull: false,
    type: DataTypes.STRING(255),
  },
};

class Enos extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: ENOS_TABLE,
      modelName: "Enos",
      timestamps: false,
    };
  }
}

module.exports = {
  ENOS_TABLE,
  EnosSchema,
  Enos,
};
