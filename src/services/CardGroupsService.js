const { EmptyResultError } = require("sequelize");
const Default = require("./Default");
const database = require("../models");

class CardGroupsService extends Default {
  constructor() {
    super("CardGroups");
  }

  async findByUser(id) {
    const groups = await database[this.model].findAll({
      where: {
        created_by: id,
      },
    });

    return groups;
  }

  async findByUserAndId(idUser, idGroup) {
    const groups = await database[this.model].findOne({
      where: {
        created_by: idUser,
        id: idGroup,
      },
    });

    return groups;
  }
}

module.exports = CardGroupsService;
