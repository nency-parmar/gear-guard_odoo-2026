const express = require("express");
const router = express.Router();
const controller = require("../controllers/equipmentController");
const { protect, allowRoles } = require("../middleware/auth");


router.post("/", protect, allowRoles("admin", "manager"), controller.createEquipment);
router.get("/", controller.getAllEquipment);
router.get("/:id", controller.getEquipmentById);
router.patch("/:id/assign", protect, allowRoles("admin", "manager"), controller.assignTeamAndTechnician);


module.exports = router;
