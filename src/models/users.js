"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.CardGroups, {
        foreignKey: "created_by",
        scope: {},
        as: "created_by",
      });
    }
  }
  Users.init(
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
        },
      },
      is_active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
