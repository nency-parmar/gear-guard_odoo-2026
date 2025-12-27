import React, { createContext, useContext, useState } from "react";

const TeamsContext = createContext();

const initialTeams = [
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

export const TeamsProvider = ({ children }) => {
    const [teams, setTeams] = useState(initialTeams);

    const addTeam = (team) => {
        setTeams((prev) => [...prev, team]);
    };

    const updateTeam = (id, data) => {
        setTeams((prev) =>
            prev.map((t) => (t.id === id ? { ...t, ...data } : t))
        );
    };

    const value = { teams, addTeam, updateTeam };

    return <TeamsContext.Provider value={value}>{children}</TeamsContext.Provider>;
};

export const useTeams = () => useContext(TeamsContext);
