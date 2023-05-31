const Default = require("./Default");
const database = require("../models/index");
const { Op } = require("sequelize");

class CardsService extends Default {
  constructor() {
    super("Cards");
  }

  async findByGroup(id) {
    const result = await database[this.model].findAll({
      where: {
        id_card_group: id,
      },
    });
    return result;
  }

  async findByTime(id) {
    const now = new Date();
    const result = await database[this.model].findAll({
      where: {
        time: {
          [Op.lt]: now,          
        },
        id_card_group: id,
      },
    });
    return result;
  }
  

}

module.exports = CardsService;
