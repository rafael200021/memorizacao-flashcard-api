const express = require("express");
const router = express.Router();
const cardsController = require("../controller/CardsController");

router.post("", cardsController.createCard);
router.put("/:id", cardsController.updateCard);

module.exports = router;
