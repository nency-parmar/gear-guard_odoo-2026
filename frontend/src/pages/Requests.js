// src/pages/Requests.js
import React from "react";
import { useNavigate } from "react-router-dom";
import RequestCard from "../components/RequestCard";

const Requests = () => {
    const navigate = useNavigate();

    const requests = [
        {
            id: "REQ-1042",
            subject: "Leaking oil from CNC",
            equipment: "CNC Machine #3",
            team: "Mechanical",
            status: "New",
            type: "Corrective",
            priority: "High",
        },
        {
            id: "REQ-1041",
            subject: "Printer not connecting",
            equipment: "Printer 01",
            team: "IT Support",
            status: "In Progress",
            type: "Corrective",
            priority: "Medium",
        },
        {
            id: "REQ-1038",
            subject: "AC making noise",
            equipment: "AC Unit – Office",
            team: "Facilities",
            status: "In Progress",
            type: "Corrective",
            priority: "Low",
        },
        {
            id: "REQ-1033",
            subject: "Quarterly alignment check",
            equipment: "CNC Machine #3",
            team: "Mechanical",
            status: "Repaired",
            type: "Preventive",
            priority: "Medium",
        },
        {
            id: "REQ-1027",
            subject: "Old laptop disposal",
            equipment: "Old Laptop",
            team: "IT Support",
            status: "Scrap",
            type: "Corrective",
            priority: "Low",
        },
    ];

    const columns = ["New", "In Progress", "Repaired", "Scrap"];

    return (
        <>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="h3 mb-1" style={{ color: "#0f172a" }}>
                        Maintenance Requests
                    </h1>
                    <p className="text-muted mb-0">
                        Drag-and-drop Kanban will live here. For now, view all requests by
                        stage.
                    </p>
                </div>
                <button
                    type="button"
                    className="btn"
                    style={{
                        backgroundColor: "#facc15",
                        color: "#1e293b",
                        borderColor: "#eab308",
                    }}
                    onClick={() => navigate("/requests/new")}
                >
                    + New Request
                </button>
            </div>

            {/* Kanban columns */}
            <div className="row g-3">
                {columns.map((col) => {
                    const items = requests.filter((r) => r.status === col);

                    return (
                        <div key={col} className="col-md-3">
                            <div className="card border-0 shadow-sm h-100">
                                <div
                                    className="card-header py-2 d-flex justify-content-between align-items-center"
                                    style={{ backgroundColor: "#0f172a", color: "white" }}
                                >
                                    <span className="small text-uppercase">{col}</span>
                                    <span className="badge bg-light text-dark">
                                        {items.length}
                                    </span>
                                </div>
                                <div
                                    className="card-body p-2"
                                    style={{ backgroundColor: "#f9fafb" }}
                                >
                                    {items.map((r) => (
                                        <div
                                            key={r.id}
                                            onClick={() => navigate(`/requests/${r.id}`)}
                                            style={{ cursor: "pointer" }}
                                        >
                                            <RequestCard req={r} />
                                        </div>
                                    ))}

                                    {items.length === 0 && (
                                        <div className="text-muted small text-center py-3">
                                            No requests in this stage.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Requests;
