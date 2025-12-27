const mongoose = require("mongoose");

const maintenanceRequestSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true },
    type: { type: String, enum: ["Corrective", "Preventive"], required: true },
    equipmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Equipment",
      required: true
    },
    teamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MaintenanceTeam"
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    scheduledDate: { type: Date },
    duration: { type: Number },
    status: {
      type: String,
      enum: ["New", "In Progress", "Repaired", "Scrap"],
      default: "New"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("MaintenanceRequest", maintenanceRequestSchema);
