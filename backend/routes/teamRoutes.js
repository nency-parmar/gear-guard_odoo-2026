const express = require("express");
const router = express.Router();
const controller = require("../controllers/teamController");

router.post("/", controller.createTeam);
router.post("/add-member", controller.addMember);

module.exports = router;
