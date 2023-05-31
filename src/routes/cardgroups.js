const express = require("express");
const router = express.Router();
const cardGroupsController = require("../controller/CardGroupsController");
const cardsController = require("../controller/CardsController");

router.get("/:id/cards", cardsController.findAllCards);
router.get("/:id/cards/time", cardsController.findCardsByTime);

module.exports = router;
