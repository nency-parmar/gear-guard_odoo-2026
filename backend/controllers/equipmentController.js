const Equipment = require("../models/Equipment");

exports.createEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.create(req.body);
    res.status(201).json(equipment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllEquipment = async (req, res) => {
  const equipment = await Equipment.find();
  res.json(equipment);
};

exports.getEquipmentById = async (req, res) => {
  const equipment = await Equipment.findById(req.params.id);
  if (!equipment) return res.status(404).json({ message: "Not found" });
  res.json(equipment);
};

exports.assignTeamAndTechnician = async (req, res) => {
  try {
    const  equipmentId  = req.params.id;
    const { assignedTeamId, defaultTechnicianId } = req.body;

    const equipment = await Equipment.findById(equipmentId);
    console.log(req.params.id);
    if (!equipment) {
      return res.status(404).json({ message: "Equipment not found" });
    }

    equipment.assignedTeamId = assignedTeamId;
    equipment.defaultTechnicianId = defaultTechnicianId;

    await equipment.save();

    res.json({
      message: "Team and technician assigned successfully",
      equipment
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
