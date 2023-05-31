"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cards.belongsTo(models.CardGroups, {
        foreignKey: "id_card_group",
      });
    }
  }
  Cards.init(
    {
      front: DataTypes.STRING,
      back: DataTypes.STRING,
      id_card_group: DataTypes.INTEGER,
      time: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Cards",
    }
  );
  return Cards;
};
