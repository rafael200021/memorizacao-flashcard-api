"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Cards", "time", Sequelize.DATE);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Cards", "time");
  },
};
