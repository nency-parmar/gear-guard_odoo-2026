// src/components/Navbar.js
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav
            className="navbar navbar-dark shadow-sm"
            style={{ backgroundColor: "#1e293b" }}
        >
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    <span
                        style={{
                            display: "inline-block",
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: "#facc15",
                            marginRight: 8,
                        }}
                    />
                    GearGuard
                </span>

                <div className="d-flex gap-3">
                    <Link to="/" className="nav-link text-light">
                        Dashboard
                    </Link>
                    <Link to="/equipment" className="nav-link text-light">
                        Equipment
                    </Link>
                    <Link to="/requests" className="nav-link text-light">
                        Requests
                    </Link>
                    <Link to="/teams" className="nav-link text-light">
                        Teams
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
