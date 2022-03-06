"use strict";

const {
  LOCALIDAD_TABLE,
  LocalidadSchema,
} = require("../models/localidad.model");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(LOCALIDAD_TABLE, LocalidadSchema);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(LOCALIDAD_TABLE);
  },
};
