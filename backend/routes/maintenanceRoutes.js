const express = require("express");
const router = express.Router();
const controller = require("../controllers/maintenanceController");
const { protect, allowRoles } = require("../middleware/auth");

router.get(
  "/calendar",
  protect,
  allowRoles("technician", "manager"),
  controller.getCalendar
);

router.get("/kanban", protect, allowRoles("technician", "manager"), controller.getKanban);
router.post("/", protect, controller.createRequest);
router.patch("/:id/status", protect, allowRoles("technician", "manager"), controller.updateStatus);

module.exports = router;
