import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TeamForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        id: "",
        specialty: "",
        color: "#1d4ed8",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.id) {
            alert("Team Name and ID are required.");
            return;
        }

        console.log("New team (send to API later):", form);
        // TODO: call backend POST /api/teams, then reload list
        navigate("/teams");
    };

    return (
        <div>
            <h1 className="h3 mb-3" style={{ color: "#0f172a" }}>
                Create Maintenance Team
            </h1>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Team Name *</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Mechanical"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Team ID *</label>
                    <input
                        type="text"
                        className="form-control"
                        name="id"
                        placeholder="TEAM-05"
                        value={form.id}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Specialty</label>
                    <input
                        type="text"
                        className="form-control"
                        name="specialty"
                        placeholder="CNC machines, forklifts, pumps"
                        value={form.specialty}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Badge Color (hex)</label>
                    <input
                        type="color"
                        className="form-control form-control-color"
                        name="color"
                        value={form.color}
                        onChange={handleChange}
                        title="Choose color"
                    />
                </div>

                <div className="d-flex justify-content-end gap-2 mt-3">
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => navigate("/teams")}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="btn"
                        style={{
                            backgroundColor: "#1d4ed8",
                            color: "white",
                            borderColor: "#1d4ed8",
                        }}
                    >
                        Save Team
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TeamForm;
