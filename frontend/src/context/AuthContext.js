import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // user = { email, role: "admin" | "user" }

    const loginAsAdmin = (email) => {
        setUser({ email, role: "admin" });
    };

    const loginAsUser = (email) => {
        setUser({ email, role: "user" });
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, loginAsAdmin, loginAsUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
