const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema(
  {
    equipmentName: { type: String, required: true },
    serialNumber: { type: String, unique: true, required: true },
    department: { type: String },
    location: { type: String },
    purchaseDate: { type: Date },
    warrantyExpiry: { type: Date },
    assignedTeamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MaintenanceTeam",
      default: null
    },
    defaultTechnicianId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },
    isScrapped: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Equipment", equipmentSchema);
