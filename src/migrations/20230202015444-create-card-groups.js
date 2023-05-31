"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CardGroups", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      created_by: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users", key: "id" },
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      img_url: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("CardGroups");
  },
};
