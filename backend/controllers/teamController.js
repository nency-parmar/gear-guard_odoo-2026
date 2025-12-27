const MaintenanceTeam = require("../models/MaintenanceTeam");
const User = require("../models/User");

exports.createTeam = async (req, res) => {
  const team = await MaintenanceTeam.create(req.body);
  res.status(201).json(team);
};

exports.addMember = async (req, res) => {
  const { teamId, userId } = req.body;

  const team = await MaintenanceTeam.findById(teamId);
  const user = await User.findById(userId);

  if (!team || !user) {
    return res.status(404).json({ message: "Team or User not found" });
  }

  team.members.push(userId);
  user.teamId = teamId;

  await team.save();
  await user.save();

  res.json({ message: "Member added successfully" });
};
