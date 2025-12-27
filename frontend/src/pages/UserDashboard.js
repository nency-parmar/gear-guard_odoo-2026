import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
    const navigate = useNavigate();

    // mock data: in future filter by logged-in user
    const [myRequests] = useState([
        {
            id: "REQ-1041",
            subject: "Printer not connecting",
            status: "In Progress",
            equipment: "Printer 01",
        },
        {
            id: "REQ-1039",
            subject: "Light flickering in conference room",
            status: "New",
            equipment: "Meeting Room A",
        },
    ]);

    const countByStatus = (status) =>
        myRequests.filter((r) => r.status === status).length;

    return (
        <div>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="h3 mb-1" style={{ color: "#0f172a" }}>
                        My Maintenance Portal
                    </h1>
                    <p className="text-muted mb-0">
                        Create new requests and track the status of issues you reported.
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
                    + New Maintenance Request
                </button>
            </div>

            {/* Small stats */}
            <div className="row g-3 mb-3">
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <div
                                className="text-uppercase small mb-1"
                                style={{ color: "#64748b" }}
                            >
                                Open requests
                            </div>
                            <h3 className="mb-0" style={{ color: "#0f172a" }}>
                                {myRequests.length}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <div
                                className="text-uppercase small mb-1"
                                style={{ color: "#64748b" }}
                            >
                                In progress
                            </div>
                            <h3 className="mb-0" style={{ color: "#0f172a" }}>
                                {countByStatus("In Progress")}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <div
                                className="text-uppercase small mb-1"
                                style={{ color: "#64748b" }}
                            >
                                New
                            </div>
                            <h3 className="mb-0" style={{ color: "#0f172a" }}>
                                {countByStatus("New")}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* My requests table */}
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6
                            className="text-uppercase small mb-0"
                            style={{ color: "#64748b" }}
                        >
                            My recent requests
                        </h6>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-sm align-middle mb-0">
                            <thead style={{ color: "#64748b", fontSize: "0.8rem" }}>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Equipment / Location</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontSize: "0.9rem" }}>
                                {myRequests.map((r) => (
                                    <tr key={r.id}>
                                        <td className="text-muted">{r.id}</td>
                                        <td>{r.subject}</td>
                                        <td>{r.equipment}</td>
                                        <td>
                                            {r.status === "New" && (
                                                <span className="badge bg-warning text-dark">
                                                    {r.status}
                                                </span>
                                            )}
                                            {r.status === "In Progress" && (
                                                <span className="badge bg-primary">{r.status}</span>
                                            )}
                                            {r.status === "Repaired" && (
                                                <span className="badge bg-success">{r.status}</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                                {myRequests.length === 0 && (
                                    <tr>
                                        <td colSpan="4" className="text-center text-muted py-4">
                                            You have not created any maintenance requests yet.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <p className="small text-muted mt-3 mb-0">
                        For detailed status and technician assignments, contact the
                        maintenance team or view the admin dashboard.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
