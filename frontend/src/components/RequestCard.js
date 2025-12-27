import React from "react";

const getStatusBadgeClass = (status) => {
    if (status === "New") return "bg-warning text-dark";
    if (status === "In Progress") return "bg-primary";
    if (status === "Repaired") return "bg-success";
    if (status === "Scrap") return "bg-secondary";
    return "bg-light text-dark";
};

const getPriorityBadgeClass = (priority) => {
    if (priority === "High") return "bg-danger";
    if (priority === "Medium") return "bg-info text-dark";
    return "bg-secondary";
};

const getTypeBadgeClass = (type) => {
    if (type === "Preventive") return "bg-success";
    return "bg-danger"; // Corrective
};

const RequestCard = ({ req }) => {
    if (!req) return null; // safety

    return (
        <div className="card mb-3 shadow-sm border-0">
            <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="small text-muted">{req.id}</span>
                    <span className={`badge ${getPriorityBadgeClass(req.priority)}`}>
                        {req.priority}
                    </span>
                </div>
                <h6
                    className="mb-1"
                    style={{ color: "#0f172a", fontSize: "0.95rem" }}
                >
                    {req.subject}
                </h6>
                <div className="small text-muted mb-2">
                    {req.equipment} • {req.team}
                </div>
                <div className="d-flex flex-wrap gap-1">
                    <span
                        className={`badge ${getStatusBadgeClass(
                            req.status
                        )} text-capitalize`}
                    >
                        {req.status}
                    </span>
                    <span className={`badge ${getTypeBadgeClass(req.type)}`}>
                        {req.type}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RequestCard;
