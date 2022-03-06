"use strict";
const {
  CICLO_AGRICOLA_TABLE,
  CicloAgricolaSchema,
} = require("../models/ciclo-agricola.model");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(CICLO_AGRICOLA_TABLE, CicloAgricolaSchema);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable(CICLO_AGRICOLA_TABLE);
  },
};
