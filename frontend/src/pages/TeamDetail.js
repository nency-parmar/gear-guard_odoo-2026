// src/pages/TeamDetail.js
import { useNavigate, useParams } from "react-router-dom";

const MOCK_TEAMS = [
    {
        id: "TEAM-01",
        name: "Mechanical",
        color: "#1d4ed8",
        members: [
            { name: "Ankit", role: "Lead Technician" },
            { name: "Ravi", role: "Technician" },
            { name: "Pooja", role: "Technician" },
        ],
        openRequests: 5,
        inProgress: 3,
        repairedThisWeek: 4,
        description: "Handles all mechanical breakdowns and preventive jobs.",
    },
    {
        id: "TEAM-03",
        name: "IT Support",
        color: "#0369a1",
        members: [
            { name: "Jay", role: "Lead Technician" },
            { name: "Neha", role: "Technician" },
        ],
        openRequests: 3,
        inProgress: 1,
        repairedThisWeek: 2,
        description: "Responsible for printers, laptops, network and systems.",
    },
];

const TeamDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const team = MOCK_TEAMS.find((t) => t.id === id) || MOCK_TEAMS[0];

    return (
        <>
            {/* Back + title */}
            <div className="d-flex align-items-center mb-3">
                <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() => navigate(-1)}
                >
                    ← Back
                </button>
                <div>
                    <h1 className="h4 mb-0" style={{ color: "#0f172a" }}>
                        {team.name}
                    </h1>
                    <small className="text-muted">{team.id}</small>
                </div>
            </div>

            <div className="row g-3">
                {/* Left: team info + members */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm mb-3">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <div>
                                    <h6
                                        className="text-uppercase small mb-1"
                                        style={{ color: "#64748b" }}
                                    >
                                        Team details
                                    </h6>
                                    <p className="small text-muted mb-0">{team.description}</p>
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-primary"
                                >
                                    Edit Team
                                </button>
                            </div>

                            {/* Members list */}
                            <h6
                                className="mt-3 mb-2 small text-uppercase"
                                style={{ color: "#64748b" }}
                            >
                                Members
                            </h6>
                            <ul className="list-group list-group-flush">
                                {team.members.map((m) => (
                                    <li
                                        key={m.name}
                                        className="list-group-item d-flex justify-content-between align-items-center px-0"
                                    >
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="rounded-circle d-flex align-items-center justify-content-center me-2"
                                                style={{
                                                    width: 32,
                                                    height: 32,
                                                    backgroundColor: "#e5e7eb",
                                                    color: "#1f2933",
                                                    fontSize: 13,
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {m.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div>{m.name}</div>
                                                <small className="text-muted">{m.role}</small>
                                            </div>
                                        </div>
                                        <span className="badge bg-light text-muted">Technician</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Recent requests for this team */}
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h6
                                    className="text-uppercase small mb-0"
                                    style={{ color: "#64748b" }}
                                >
                                    Recent requests handled by {team.name}
                                </h6>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-primary"
                                    onClick={() => navigate("/requests")}
                                >
                                    View all requests
                                </button>
                            </div>

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
                                    <tbody style={{ fontSize: "0.85rem" }}>
                                        <tr>
                                            <td className="text-muted">REQ-1042</td>
                                            <td>Leaking oil from CNC</td>
                                            <td>CNC Machine #3</td>
                                            <td>
                                                <span className="badge bg-primary">In Progress</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">REQ-1033</td>
                                            <td>Quarterly alignment check</td>
                                            <td>CNC Machine #3</td>
                                            <td>
                                                <span className="badge bg-success">Repaired</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">REQ-1029</td>
                                            <td>Noise from pump</td>
                                            <td>Coolant Pump</td>
                                            <td>
                                                <span className="badge bg-warning text-dark">
                                                    New
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: workload summary */}
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm mb-3">
                        <div className="card-body">
                            <h6
                                className="text-uppercase small mb-2"
                                style={{ color: "#64748b" }}
                            >
                                Workload summary
                            </h6>
                            <p className="small text-muted mb-1">
                                Open requests assigned to this team:
                            </p>
                            <h3 className="mb-3" style={{ color: "#0f172a" }}>
                                {team.openRequests}
                            </h3>

                            <p className="small text-muted mb-1">
                                Currently in progress:
                            </p>
                            <h5 className="mb-3" style={{ color: "#0f172a" }}>
                                {team.inProgress}
                            </h5>

                            <p className="small text-muted mb-2">
                                Repaired in the last 7 days:
                            </p>
                            <h5 className="mb-3" style={{ color: "#0f172a" }}>
                                {team.repairedThisWeek}
                            </h5>

                            <button
                                type="button"
                                className="btn w-100 mb-2"
                                style={{
                                    backgroundColor: team.color,
                                    color: "white",
                                    borderColor: team.color,
                                }}
                                onClick={() =>
                                    navigate("/requests") // later: filter by team
                                }
                            >
                                View team requests
                            </button>
                            <button
                                type="button"
                                className="btn w-100"
                                style={{
                                    backgroundColor: "#facc15",
                                    color: "#1e293b",
                                    borderColor: "#eab308",
                                }}
                            >
                                Assign new request
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetail;
