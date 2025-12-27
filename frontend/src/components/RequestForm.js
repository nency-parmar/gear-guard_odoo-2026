import React, { useState } from "react";

const RequestForm = ({ onSubmit, onCancel }) => {
  const [form, setForm] = useState({
    subject: "",
    description: "",
    equipmentId: "",
    type: "Corrective",
    priority: "Medium",
    teamId: "",
    scheduledDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.subject || !form.equipmentId) {
      alert("Subject and Equipment are required.");
      return;
    }
    if (onSubmit) onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Subject */}
      <div className="mb-3">
        <label className="form-label">Subject *</label>
        <input
          type="text"
          className="form-control"
          name="subject"
          placeholder="What is wrong? e.g., Leaking oil from CNC"
          value={form.subject}
          onChange={handleChange}
        />
      </div>

      {/* Description */}
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          rows="3"
          name="description"
          placeholder="Additional details for the technician..."
          value={form.description}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        {/* Equipment */}
        <div className="mb-3 col-md-6">
          <label className="form-label">Equipment *</label>
          <select
            className="form-select"
            name="equipmentId"
            value={form.equipmentId}
            onChange={handleChange}
          >
            <option value="">Select equipment</option>
            {/* later: map from API */}
            <option value="EQ-001">CNC Machine #3</option>
            <option value="EQ-002">Printer 01</option>
            <option value="EQ-003">AC Unit – Office</option>
          </select>
        </div>

        {/* Team */}
        <div className="mb-3 col-md-6">
          <label className="form-label">Maintenance Team</label>
          <select
            className="form-select"
            name="teamId"
            value={form.teamId}
            onChange={handleChange}
          >
            <option value="">Auto from equipment</option>
            <option value="TEAM-01">Mechanical</option>
            <option value="TEAM-02">Electrical</option>
            <option value="TEAM-03">IT Support</option>
          </select>
          <small className="text-muted">
            In final logic, team will auto-fill from selected equipment.
          </small>
        </div>
      </div>

      <div className="row">
        {/* Type */}
        <div className="mb-3 col-md-4">
          <label className="form-label">Request Type</label>
          <select
            className="form-select"
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            <option value="Corrective">Corrective (Breakdown)</option>
            <option value="Preventive">Preventive (Routine)</option>
          </select>
        </div>

        {/* Priority */}
        <div className="mb-3 col-md-4">
          <label className="form-label">Priority</label>
          <select
            className="form-select"
            name="priority"
            value={form.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        {/* Scheduled Date */}
        <div className="mb-3 col-md-4">
          <label className="form-label">Scheduled Date</label>
          <input
            type="date"
            className="form-control"
            name="scheduledDate"
            value={form.scheduledDate}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="d-flex justify-content-end gap-2 mt-3">
        {onCancel && (
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="btn"
          style={{
            backgroundColor: "#1d4ed8",
            color: "white",
            borderColor: "#1d4ed8",
          }}
        >
          Save Request
        </button>
      </div>
    </form>
  );
};

export default RequestForm;
