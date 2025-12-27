// src/pages/Equipment.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Equipment = () => {
    const navigate = useNavigate();

    // Mock equipment data – replace with API data later
    const [search, setSearch] = useState("");
    const equipmentList = [
        {
            id: "EQ-001",
            name: "CNC Machine #3",
            department: "Production",
            location: "Plant Floor A",
            status: "Active",
        },
        {
            id: "EQ-002",
            name: "Printer 01",
            department: "Administration",
            location: "Office Block 1",
            status: "Active",
        },
        {
            id: "EQ-003",
            name: "Forklift",
            department: "Warehouse",
            location: "Loading Bay",
            status: "Under Maintenance",
        },
        {
            id: "EQ-004",
            name: "Old Laptop",
            department: "IT",
            location: "Storage Room",
            status: "Scrapped",
        },
    ];

    const filtered = equipmentList.filter((eq) => {
        const term = search.toLowerCase();
        return (
            eq.id.toLowerCase().includes(term) ||
            eq.name.toLowerCase().includes(term) ||
            eq.department.toLowerCase().includes(term) ||
            eq.location.toLowerCase().includes(term)
        );
    });

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

    const handleRowClick = (id) => {
        navigate(`/equipment/${id}`);
    };

    return (
        <>
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="h3 mb-1" style={{ color: "#0f172a" }}>
                        Equipment
                    </h1>
                    <p className="text-muted mb-0">
                        Central list of all tracked assets.
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
                >
                    + Add Equipment
                </button>
            </div>

            {/* Search + small info */}
            <div className="row g-3 mb-3">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name, ID, department, or location..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="col-md-6 text-md-end text-muted small d-flex justify-content-md-end align-items-center">
                    <span>
                        Showing <strong>{filtered.length}</strong> of{" "}
                        <strong>{equipmentList.length}</strong> equipment items
                    </span>
                </div>
            </div>

            {/* Equipment table */}
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead style={{ color: "#64748b", fontSize: "0.8rem" }}>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Equipment</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Status</th>
                                    <th scope="col" className="text-end">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody style={{ fontSize: "0.88rem" }}>
                                {filtered.map((eq) => (
                                    <tr
                                        key={eq.id}
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handleRowClick(eq.id)}
                                    >
                                        <td className="text-muted">{eq.id}</td>
                                        <td>{eq.name}</td>
                                        <td>{eq.department}</td>
                                        <td>{eq.location}</td>
                                        <td>{getStatusBadge(eq.status)}</td>
                                        <td
                                            className="text-end"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-primary me-2"
                                                onClick={() => handleRowClick(eq.id)}
                                            >
                                                View
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-secondary"
                                            >
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {filtered.length === 0 && (
                                    <tr>
                                        <td colSpan="6" className="text-center text-muted py-4">
                                            No equipment found for this search.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Equipment;
