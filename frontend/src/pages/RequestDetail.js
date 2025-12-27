import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import RequestCard from "../components/RequestCard";

// temporary mock data – same structure as in Requests.js
const MOCK_REQUESTS = [
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

const RequestDetail = () => {
    const { id } = useParams(); // from /requests/:id
    const navigate = useNavigate();

    const req =
        MOCK_REQUESTS.find((r) => r.id === id) || MOCK_REQUESTS[0];

    return (
        <div>
            <button
                type="button"
                className="btn btn-sm btn-outline-secondary mb-3"
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

            <h1 className="h4 mb-3" style={{ color: "#0f172a" }}>
                Request Details
            </h1>

            {/* Main card */}
            <RequestCard req={req} />

            {/* Extra info: timeline / metadata */}
            <div className="card border-0 shadow-sm mt-3">
                <div className="card-body">
                    <h6
                        className="text-uppercase small mb-2"
                        style={{ color: "#64748b" }}
                    >
                        Timeline
                    </h6>
                    <ul className="small mb-3">
                        <li>Created: Today, 09:30 AM (demo)</li>
                        <li>Assigned: Technician name will come from backend later</li>
                        <li>Last updated: Today, 10:15 AM</li>
                    </ul>

                    <h6
                        className="text-uppercase small mb-2"
                        style={{ color: "#64748b" }}
                    >
                        Notes
                    </h6>
                    <p className="small text-muted mb-0">
                        Here you can later show activity log or comments related to this
                        maintenance request.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RequestDetail;
