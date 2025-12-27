// src/pages/Teams.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Teams = () => {
    const navigate = useNavigate();

    const teams = [
        {
            id: "TEAM-01",
            name: "Mechanical",
            members: ["Ankit", "Ravi", "Pooja"],
            openRequests: 5,
            specialty: "CNC machines, forklifts, pumps",
            color: "#1d4ed8",
        },
        {
            id: "TEAM-02",
            name: "Electrical",
            members: ["Rohan", "Meera"],
            openRequests: 2,
            specialty: "Panels, motors, power backup",
            color: "#0f766e",
        },
        {
            id: "TEAM-03",
            name: "IT Support",
            members: ["Jay", "Neha"],
            openRequests: 3,
            specialty: "Printers, laptops, network",
            color: "#0369a1",
        },
        {
            id: "TEAM-04",
            name: "Facilities",
            members: ["Vikas"],
            openRequests: 1,
            specialty: "HVAC, lighting, building issues",
            color: "#7c2d12",
        },
    ];

    const totalMembers = teams.reduce(
        (sum, t) => sum + t.members.length,
        0
    );

    return (
        <>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="h3 mb-1" style={{ color: "#0f172a" }}>
                        Maintenance Teams
                    </h1>
                    <p className="text-muted mb-0">
                        Who is responsible for which equipment and requests.
                    </p>
                </div>
                <button
                    type="button"
                    className="btn"
                    style={{
                        backgroundColor: "#1d4ed8",
                        color: "white",
                        borderColor: "#1d4ed8",
                    }}
                    onClick={() => navigate("/teams/new")}
                >
                    + Create Team
                </button>
            </div>

            {/* Small summary row */}
            <div className="row g-3 mb-3">
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <div
                                className="text-uppercase small mb-1"
                                style={{ color: "#64748b" }}
                            >
                                Total teams
                            </div>
                            <h3 className="mb-0" style={{ color: "#0f172a" }}>
                                {teams.length}
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
                                Total technicians
                            </div>
                            <h3 className="mb-0" style={{ color: "#0f172a" }}>
                                {totalMembers}
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
                                Average open requests / team
                            </div>
                            <h3 className="mb-0" style={{ color: "#0f172a" }}>
                                {(
                                    teams.reduce((s, t) => s + t.openRequests, 0) /
                                    teams.length
                                ).toFixed(1)}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team cards */}
            <div className="row g-3">
                {teams.map((team) => (
                    <div className="col-md-6" key={team.id}>
                        <div
                            className="card border-0 shadow-sm h-100"
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate(`/teams/${team.id}`)}
                        >
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-start mb-2">
                                    <div>
                                        <h5 className="card-title mb-1" style={{ color: "#0f172a" }}>
                                            {team.name}
                                        </h5>
                                        <small className="text-muted">{team.id}</small>
                                    </div>
                                    <span
                                        className="badge rounded-pill"
                                        style={{
                                            backgroundColor: team.color,
                                            color: "white",
                                        }}
                                    >
                                        {team.openRequests} open
                                    </span>
                                </div>

                                <p className="small text-muted mb-2">{team.specialty}</p>

                                {/* Members list */}
                                <ul className="list-group list-group-flush small mb-3">
                                    {team.members.map((m) => (
                                        <li
                                            key={m}
                                            className="list-group-item d-flex justify-content-between align-items-center px-0"
                                        >
                                            <div className="d-flex align-items-center">
                                                <div
                                                    className="rounded-circle d-flex align-items-center justify-content-center me-2"
                                                    style={{
                                                        width: 28,
                                                        height: 28,
                                                        backgroundColor: "#e5e7eb",
                                                        color: "#1f2933",
                                                        fontSize: 12,
                                                        fontWeight: 600,
                                                    }}
                                                >
                                                    {m.charAt(0)}
                                                </div>
                                                <span>{m}</span>
                                            </div>
                                            <span className="badge bg-light text-muted">
                                                Technician
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="d-flex justify-content-end gap-2">
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-primary"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/teams/${team.id}`);
                                        }}
                                    >
                                        View team load
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigate(`/teams/${team.id}`); // later: /teams/:id/edit
                                        }}
                                    >
                                        Edit team
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Teams;
