"use strict";

const {
  ACCIONES_AGUA_TABLE,
  AccionesAguaSchema,
} = require("../models/acciones-agua.model");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(ACCIONES_AGUA_TABLE, AccionesAguaSchema);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(ACCIONES_AGUA_TABLE);
  },
};
