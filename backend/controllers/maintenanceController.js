const MaintenanceRequest = require("../models/MaintenanceRequest");
const Equipment = require("../models/Equipment");

exports.createRequest = async (req, res) => {
  try {
    const { equipmentId, subject, type, scheduledDate } = req.body;

    const equipment = await Equipment.findById(equipmentId);
    if (!equipment) return res.status(404).json({ message: "Equipment not found" });

    if (equipment.isScrapped)
      return res.status(400).json({ message: "Equipment is scrapped" });

    const request = await MaintenanceRequest.create({
      subject,
      type,
      equipmentId,
      teamId: equipment.assignedTeamId,
      assignedTo: equipment.defaultTechnicianId,
      scheduledDate,
      status: "New"
    });

    res.status(201).json(request);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  const { status, duration } = req.body;

  const request = await MaintenanceRequest.findById(req.params.id);
  if (!request) return res.status(404).json({ message: "Request not found" });

  request.status = status;
  if (duration) request.duration = duration;

  if (status === "Scrap") {
    await Equipment.findByIdAndUpdate(request.equipmentId, { isScrapped: true });
  }

  await request.save();
  res.json(request);
};

exports.getKanban = async (req, res) => {
  const requests = await MaintenanceRequest.find()
    .populate("equipmentId")
    .populate("assignedTo");

  const today = new Date();

  const enriched = requests.map(r => ({
    ...r._doc,
    isOverdue:
      r.scheduledDate &&
      r.scheduledDate < today &&
      r.status !== "Repaired"
  }));

  res.json(enriched);
};

exports.getCalendar = async (req, res) => {
  try {
    const { date } = req.query;

    if (!date) {
      return res.status(400).json({ message: "Date query is required" });
    }

    // Normalize date range (UTC-safe)
    const start = new Date(`${date}T00:00:00.000Z`);
    const end = new Date(`${date}T23:59:59.999Z`);

    const jobs = await MaintenanceRequest.find({
      type: "Preventive",
      scheduledDate: {
        $gte: start,
        $lte: end
      }
    })
      .populate("equipmentId")
      .populate("assignedTo");

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
