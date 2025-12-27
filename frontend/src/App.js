// src/App.js
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Equipment from "./pages/Equipment";
import EquipmentDetail from "./pages/EquipmentDetail";
import Requests from "./pages/Requests";
import NewRequest from "./pages/NewRequest";
import RequestDetail from "./pages/RequestDetail";
import Teams from "./pages/Teams";
import TeamDetail from "./pages/TeamDetail";
import TeamForm from "./components/TeamForm";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import { useAuth } from "./context/AuthContext";

const App = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public login */}
      <Route path="/login" element={<Login />} />

      {/* User portal (no navbar, single page) */}
      <Route
        path="/portal"
        element={
          user?.role === "user" ? (
            <UserDashboard />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Admin area, wrapped in MainLayout with Navbar */}
      <Route
        path="/*"
        element={
          user?.role === "admin" ? (
            <MainLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/equipment" element={<Equipment />} />
                <Route path="/equipment/:id" element={<EquipmentDetail />} />
                <Route path="/requests" element={<Requests />} />
                <Route path="/requests/new" element={<NewRequest />} />
                <Route path="/requests/:id" element={<RequestDetail />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/teams/new" element={<TeamForm />} />
                <Route path="/teams/:id" element={<TeamDetail />} />
              </Routes>
            </MainLayout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

export default App;
