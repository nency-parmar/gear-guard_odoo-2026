import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{ padding: "10px", background: "#1e293b" }}>
            <Link to="/" style={{ color: "white", marginRight: "15px" }}>Dashboard</Link>
            <Link to="/equipment" style={{ color: "white", marginRight: "15px" }}>Equipment</Link>
            <Link to="/requests" style={{ color: "white", marginRight: "15px" }}>Requests</Link>
            <Link to="/teams" style={{ color: "white" }}>Teams</Link>
        </nav>
    );
};

export default Navbar;
