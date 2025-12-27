// src/layout/MainLayout.js
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
            <Navbar />
            <main className="container py-4">{children}</main>
        </div>
    );
};

export default MainLayout;
