// src/pages/UserDashboard.js
import React, { useState } from "react";
import RequestForm from "../components/RequestForm";
import { useAuth } from "../context/AuthContext";

const UserDashboard = () => {
    const { user } = useAuth();
    const [myRequests, setMyRequests] = useState([]);

    const handleSubmit = (data) => {
        const newReq = {
            id: `REQ-U-${myRequests.length + 1}`,
            subject: data.subject,
            equipment: data.equipmentId,
            status: "New",
        };
        setMyRequests((prev) => [...prev, newReq]);
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#f8fafc",
                padding: "24px",
            }}
        >
            <h1 className="h4 mb-2" style={{ color: "#0f172a" }}>
                My Maintenance Requests
            </h1>
            <p className="text-muted mb-4">
                Logged in as {user?.email}. Create new requests and track only your own tickets.
            </p>

            <div className="row g-4">
                <div className="col-md-5">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h6
                                className="text-uppercase small mb-3"
                                style={{ color: "#64748b" }}
                            >
                                New request
                            </h6>
                            <RequestForm onSubmit={handleSubmit} />
                        </div>
                    </div>
                </div>

                <div className="col-md-7">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <h6
                                className="text-uppercase small mb-3"
                                style={{ color: "#64748b" }}
                            >
                                My recent requests
                            </h6>

                            <div className="table-responsive">
                                <table className="table table-sm align-middle mb-0">
                                    <thead style={{ color: "#64748b", fontSize: "0.8rem" }}>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Subject</th>
                                            <th scope="col">Equipment</th>
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
                                                    <span className="badge bg-warning text-dark">
                                                        {r.status}
                                                    </span>
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
                                Only requests created from this portal are shown here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
