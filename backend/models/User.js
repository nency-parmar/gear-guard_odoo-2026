const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
  type: String,
  required: true
},
    role: {
      type: String,
      enum: ["admin", "manager", "technician", "user"],
      default: "user"
    },
    teamId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MaintenanceTeam",
      default: null
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
