const database = require("../models");

class Default {
  constructor(model) {
    this.model = model;
  }

  async findAll() {
    try {
      return await database[this.model].findAll();
    } catch (e) {
      return e;
    }
  }

  async findById(id) {
    return await database[this.model].findByPk(id);
  }

  async create(body) {
    return await database[this.model].create(body);
  }

  async update(body, id) {
    return await database[this.model].update(body, { where: { id: id } });
  }

  async delete(id) {
    return await database[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Default;
