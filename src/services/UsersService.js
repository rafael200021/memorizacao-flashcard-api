const { EmptyResultError } = require("sequelize");
const Default = require("./Default");
const database = require("../models");

class UsersService extends Default {
  constructor() {
    super("Users");
  }

  async login(email, password) {
    try {
      const user = await database["Users"].findOne({ where: { email: email } });
      if (user !== null && user.password === password) {
        return user;
      } else {
        return null;
      }
    } catch (e) {
      return e;
    }
  }
}

module.exports = UsersService;
