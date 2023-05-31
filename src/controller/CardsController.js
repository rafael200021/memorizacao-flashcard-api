const CardsService = require("../services/CardsService");
const cardsService = new CardsService();

class CardsController {
  static async findAllCards(req, res) {
    const { id } = req.params;
    const result = await cardsService.findByGroup(id);

    res.status(200).json(result);
  }

  static async findCardsByTime(req, res) {
    const { id } = req.params;
    const result = await cardsService.findByTime(id);

    res.status(200).json(result);
  }

  static async createCard(req, res) {
    const card = req.body;

    let result = await cardsService.create(card);

    res.status(201).json(result);
  }

  static async updateCard(req, res) {
    const { id } = req.params;
    const data = req.body;

    let result = await cardsService.update(data, id);

    res.status(201).json(result);
  }
}

module.exports = CardsController;
