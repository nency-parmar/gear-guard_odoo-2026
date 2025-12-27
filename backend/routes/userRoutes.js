const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.post("/", controller.createUser);
router.get("/", controller.getAllUsers);

module.exports = router;
