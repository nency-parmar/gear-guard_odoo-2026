// src/pages/Dashboard.js

const Dashboard = () => {
    // Mock data – later you will replace with API data
    const stats = {
        openRequests: 12,
        overdueRequests: 3,
        activeEquipment: 42,
        teams: 4,
        completionRate: 68, // percentage
    };

    const recentRequests = [
        {
            id: "REQ-1042",
            subject: "Leaking oil from CNC",
            equipment: "CNC Machine #3",
            team: "Mechanical",
            status: "In Progress",
        },
        {
            id: "REQ-1041",
            subject: "Printer not connecting",
            equipment: "Printer 01",
            team: "IT Support",
            status: "New",
        },
        {
            id: "REQ-1038",
            subject: "AC making noise",
            equipment: "AC Unit – Office",
            team: "Facilities",
            status: "Repaired",
        },
    ];

    const cardTitleStyle = { color: "#0f172a" }; // dark navy text
    const mutedLabelStyle = { color: "#64748b" }; // gray-blue label

    return (
        <>
            {/* Header */}
            <div className="mb-4 d-flex justify-content-between align-items-center">
                <div>
                    <h1 className="h3 mb-1" style={cardTitleStyle}>
                        GearGuard Dashboard
                    </h1>
                    <p className="text-muted mb-0">
                        Quick overview of maintenance workload, equipment and teams.
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
                >
                    + New Request
                </button>
            </div>

            {/* Top stat cards */}
            <div className="row g-3 mb-4">
                {/* Open Requests */}
                <div className="col-md-3 col-sm-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <h6 className="text-uppercase small mb-1" style={mutedLabelStyle}>
                                Open Requests
                            </h6>
                            <h2 className="card-title mb-0" style={cardTitleStyle}>
                                {stats.openRequests}
                            </h2>
                            <span
                                className="badge mt-2"
                                style={{ backgroundColor: "#1d4ed8", color: "white" }}
                            >
                                Today&apos;s workload
                            </span>
                        </div>
                    </div>
                </div>

                {/* Overdue Requests */}
                <div className="col-md-3 col-sm-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <h6 className="text-uppercase small mb-1" style={mutedLabelStyle}>
                                Overdue Requests
                            </h6>
                            <h2 className="card-title mb-0" style={{ color: "#b91c1c" }}>
                                {stats.overdueRequests}
                            </h2>
                            <span
                                className="badge mt-2"
                                style={{ backgroundColor: "#fee2e2", color: "#b91c1c" }}
                            >
                                Needs attention
                            </span>
                        </div>
                    </div>
                </div>

                {/* Active Equipment */}
                <div className="col-md-3 col-sm-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <h6 className="text-uppercase small mb-1" style={mutedLabelStyle}>
                                Active Equipment
                            </h6>
                            <h2 className="card-title mb-0" style={cardTitleStyle}>
                                {stats.activeEquipment}
                            </h2>
                            <span
                                className="badge mt-2"
                                style={{ backgroundColor: "#facc15", color: "#1e293b" }}
                            >
                                Tracked assets
                            </span>
                        </div>
                    </div>
                </div>

                {/* Maintenance Teams */}
                <div className="col-md-3 col-sm-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <h6 className="text-uppercase small mb-1" style={mutedLabelStyle}>
                                Maintenance Teams
                            </h6>
                            <h2 className="card-title mb-0" style={cardTitleStyle}>
                                {stats.teams}
                            </h2>
                            <span
                                className="badge mt-2"
                                style={{ backgroundColor: "#e0f2fe", color: "#0369a1" }}
                            >
                                Available crews
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle row: completion progress + small summary */}
            <div className="row g-3 mb-4">
                {/* Completion rate card */}
                <div className="col-lg-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <h6 className="text-uppercase small mb-2" style={mutedLabelStyle}>
                                Weekly Completion Rate
                            </h6>
                            <h2 className="card-title mb-3" style={cardTitleStyle}>
                                {stats.completionRate}%
                            </h2>
                            <div className="progress" style={{ height: 12 }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{
                                        width: `${stats.completionRate}%`,
                                        backgroundColor: "#22c55e",
                                    }}
                                    aria-valuenow={stats.completionRate}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                />
                            </div>
                            <p className="text-muted small mt-2 mb-0">
                                Percentage of requests moved to <strong>Repaired</strong> in the
                                last 7 days.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Small KPI text card */}
                <div className="col-lg-6">
                    <div className="card border-0 shadow-sm h-100">
                        <div className="card-body">
                            <h6 className="text-uppercase small mb-2" style={mutedLabelStyle}>
                                Today&apos;s Highlights
                            </h6>
                            <ul className="mb-0 small">
                                <li>
                                    2 new breakdown requests logged from{" "}
                                    <strong>Production</strong>.
                                </li>
                                <li>
                                    Preventive checkup scheduled for{" "}
                                    <strong>Printer 01</strong> at 4:00 PM.
                                </li>
                                <li>
                                    <strong>Mechanical team</strong> has the highest workload
                                    today.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent requests table */}
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6
                            className="text-uppercase small mb-0"
                            style={mutedLabelStyle}
                        >
                            Recent Requests
                        </h6>
                        <a href="/requests" className="small" style={{ color: "#1d4ed8" }}>
                            View all
                        </a>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-sm align-middle mb-0">
                            <thead>
                                <tr style={{ color: "#64748b", fontSize: "0.8rem" }}>
                                    <th scope="col">ID</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Equipment</th>
                                    <th scope="col">Team</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentRequests.map((req) => (
                                    <tr key={req.id} style={{ fontSize: "0.85rem" }}>
                                        <td className="text-muted">{req.id}</td>
                                        <td>{req.subject}</td>
                                        <td>{req.equipment}</td>
                                        <td>{req.team}</td>
                                        <td>
                                            {req.status === "Repaired" && (
                                                <span className="badge bg-success">{req.status}</span>
                                            )}
                                            {req.status === "In Progress" && (
                                                <span className="badge bg-primary">
                                                    {req.status}
                                                </span>
                                            )}
                                            {req.status === "New" && (
                                                <span
                                                    className="badge"
                                                    style={{
                                                        backgroundColor: "#facc15",
                                                        color: "#1e293b",
                                                    }}
                                                >
                                                    {req.status}
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
