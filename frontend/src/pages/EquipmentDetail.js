// src/pages/EquipmentDetail.js
import { useParams, useNavigate } from "react-router-dom";

// Temporary mock data – later replace with API call
const MOCK_EQUIPMENT = [
    {
        id: "EQ-001",
        name: "CNC Machine #3",
        category: "CNC Machine",
        department: "Production",
        location: "Plant Floor A",
        serialNumber: "CNC-3-2020-9843",
        purchaseDate: "2020-04-15",
        warrantyUntil: "2025-04-15",
        status: "Active",
        maintenanceTeam: "Mechanical",
        openRequests: 2,
    },
    {
        id: "EQ-002",
        name: "Printer 01",
        category: "Printer",
        department: "Administration",
        location: "Office Block 1",
        serialNumber: "PR-01-2019-5532",
        purchaseDate: "2019-02-10",
        warrantyUntil: "2022-02-10",
        status: "Active",
        maintenanceTeam: "IT Support",
        openRequests: 1,
    },
];

const EquipmentDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const equipment =
        MOCK_EQUIPMENT.find((item) => item.id === id) || MOCK_EQUIPMENT[0];

    const getStatusBadge = (status) => {
        if (status === "Active") {
            return <span className="badge bg-success">{status}</span>;
        }
        if (status === "Under Maintenance") {
            return (
                <span className="badge bg-warning text-dark">{status}</span>
            );
        }
        if (status === "Scrapped") {
            return <span className="badge bg-secondary">{status}</span>;
        }
        return <span className="badge bg-light text-dark">{status}</span>;
    };

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
                        {equipment.name}
                    </h1>
                    <small className="text-muted">{equipment.id}</small>
                </div>
            </div>

            <div className="row g-3">
                {/* Left: main info card */}
                <div className="col-lg-8">
                    <div className="card border-0 shadow-sm mb-3">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                                <div>
                                    <h6
                                        className="text-uppercase small mb-1"
                                        style={{ color: "#64748b" }}
                                    >
                                        Equipment details
                                    </h6>
                                    {getStatusBadge(equipment.status)}
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-primary"
                                >
                                    Edit Equipment
                                </button>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-6 mb-3">
                                    <div className="text-muted small">Category</div>
                                    <div>{equipment.category}</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="text-muted small">Maintenance Team</div>
                                    <div>{equipment.maintenanceTeam}</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="text-muted small">Department</div>
                                    <div>{equipment.department}</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="text-muted small">Location</div>
                                    <div>{equipment.location}</div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <div className="text-muted small">Serial Number</div>
                                    <div>{equipment.serialNumber}</div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <div className="text-muted small">Purchase Date</div>
                                    <div>{equipment.purchaseDate}</div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <div className="text-muted small">Warranty Until</div>
                                    <div>{equipment.warrantyUntil}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related requests preview */}
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h6
                                    className="text-uppercase small mb-0"
                                    style={{ color: "#64748b" }}
                                >
                                    Recent maintenance requests
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
                                            <th scope="col">Type</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Scheduled</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ fontSize: "0.85rem" }}>
                                        <tr>
                                            <td className="text-muted">REQ-1042</td>
                                            <td>Leaking oil from head</td>
                                            <td>
                                                <span className="badge bg-danger">Corrective</span>
                                            </td>
                                            <td>
                                                <span className="badge bg-primary">In Progress</span>
                                            </td>
                                            <td>Today, 3:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">REQ-1033</td>
                                            <td>Quarterly alignment check</td>
                                            <td>
                                                <span className="badge bg-info text-dark">
                                                    Preventive
                                                </span>
                                            </td>
                                            <td>
                                                <span className="badge bg-success">Repaired</span>
                                            </td>
                                            <td>Last week</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: summary / smart buttons */}
                <div className="col-lg-4">
                    <div className="card border-0 shadow-sm mb-3">
                        <div className="card-body">
                            <h6
                                className="text-uppercase small mb-2"
                                style={{ color: "#64748b" }}
                            >
                                Maintenance summary
                            </h6>
                            <p className="mb-1 small text-muted">
                                Open requests for this equipment:
                            </p>
                            <h3 className="mb-3" style={{ color: "#0f172a" }}>
                                {equipment.openRequests}
                            </h3>
                            <button
                                type="button"
                                className="btn w-100 mb-2"
                                style={{
                                    backgroundColor: "#1d4ed8",
                                    color: "white",
                                    borderColor: "#1d4ed8",
                                }}
                                onClick={() => navigate("/requests")}
                            >
                                View all maintenance
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
                                + New request for this equipment
                            </button>
                        </div>
                    </div>

                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h6
                                className="text-uppercase small mb-2"
                                style={{ color: "#64748b" }}
                            >
                                Metadata
                            </h6>
                            <ul className="small mb-0">
                                <li>Created in system: 2020-04-20</li>
                                <li>Last maintenance: 2025-01-10</li>
                                <li>Average downtime per repair: 3.2 hours</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EquipmentDetail;
