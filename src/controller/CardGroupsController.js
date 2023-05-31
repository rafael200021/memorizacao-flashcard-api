const { EmptyResultError } = require("sequelize");
const { CardGroupsService } = require("../services/index");
const cardGroupsSerivce = new CardGroupsService();

class CardGroupsController {
  static async findAllGroups(req, res) {
    try {
      const { id } = req.params;
      const groups = await cardGroupsSerivce.findByUser(id);
      res.status(200).json(groups);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async findOneGroup(req, res) {
    try {
      const { idUser, idGroup } = req.params;
      const group = await cardGroupsSerivce.findByUserAndId(idUser, idGroup);
      res.status(200).json(group);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async createUser(req, res) {
    try {
      console.log(req.body);
      const group = await cardGroupsSerivce.create(req.body);
      res.status(200).json(group);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = CardGroupsController;
