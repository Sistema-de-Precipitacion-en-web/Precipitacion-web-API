"use strict";

const {
  RIEGO_AUXILIO_TABLE,
  RiegoAuxilioSchema,
} = require("../models/riego-auxilio.model");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(RIEGO_AUXILIO_TABLE, RiegoAuxilioSchema);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(RIEGO_AUXILIO_TABLE);
  },
};
