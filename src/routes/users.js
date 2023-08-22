const express = require("express");
const router = express.Router();
const usersController = require("../controller/UsersController");
const cardGroupsController = require("../controller/CardGroupsController");

router.get("/", usersController.findAllUsers);
router.post("/", usersController.createUser);
router.put("/:id", usersController.updateUser);
router.get("/:id", usersController.findOneUser);
router.get("/:id/groups", cardGroupsController.findAllGroups);
router.post("/:id/groups", cardGroupsController.createGroup);
router.get("/:idUser/groups/:idGroup", cardGroupsController.findOneGroup);

module.exports = router;
