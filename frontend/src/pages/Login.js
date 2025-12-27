// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const { email, password } = form;

        // super simple demo logic
        if (email === "admin@gearguard.com" && password === "admin123") {
            // admin login -> main dashboard
            navigate("/");
            return;
        }

        // any other non-empty email/password -> treat as normal user for now
        if (email && password) {
            navigate("/portal"); // user dashboard
            return;
        }

        setError("Please enter email and password.");
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}
        >
            <div className="card shadow-sm border-0" style={{ width: "360px" }}>
                <div
                    className="card-header text-center"
                    style={{ backgroundColor: "#1e293b", color: "white" }}
                >
                    <h5 className="mb-0">GearGuard Login</h5>
                </div>
                <div className="card-body">
                    <h6 className="mb-3" style={{ color: "#0f172a" }}>
                        Sign in to continue
                    </h6>

                    {error && (
                        <div className="alert alert-danger py-2">{error}</div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="you@example.com"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="••••••••"
                                value={form.password}
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn w-100"
                            style={{
                                backgroundColor: "#facc15",
                                color: "#1e293b",
                                borderColor: "#eab308",
                            }}
                        >
                            Sign in
                        </button>

                        <p className="text-muted small mt-3 mb-0">
                            Admin demo: <strong>admin@gearguard.com</strong> /{" "}
                            <strong>admin123</strong>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
