"use strict";

const {
  PRECIPITACIONES_TABLE,
  PrecipitacionesSchema,
} = require("../models/precipitacion.model");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(
      PRECIPITACIONES_TABLE,
      PrecipitacionesSchema
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(PRECIPITACIONES_TABLE);
  },
};
