"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      front: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      back: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      id_card_group: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "CardGroups", key: "id" },
      },
      createdAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Cards");
  },
};
