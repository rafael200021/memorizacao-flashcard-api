"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CardGroups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CardGroups.hasMany(models.Cards, {
        foreignKey: "id_card_group",
        scope: {},
        as: "id_card_group",
      });
      CardGroups.belongsTo(models.Users, {
        foreignKey: "created_by",
      });
    }
  }
  CardGroups.init(
    {
      name: DataTypes.STRING,
      created_by: DataTypes.INTEGER,
      description: DataTypes.STRING,
      img_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "CardGroups",
    }
  );
  return CardGroups;
};
