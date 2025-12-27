import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Equipment from "./pages/Equipment";
import EquipmentDetail from "./pages/EquipmentDetail";
import Requests from "./pages/Requests";
import TeamDetail from "./pages/TeamDetail";
import Teams from "./pages/Teams";
import TeamDetail from "./pages/TeamDetail";
import TeamForm from "./components/TeamForm";
import EquipmentDetail from "./pages/EquipmentDetail";
import NewRequest from "./pages/NewRequest";
import RequestDetail from "./pages/RequestDetail";
import UserDashboard from "./pages/UserDashboard";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/equipment/:id" element={<EquipmentDetail />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/new" element={<TeamForm />} />
          <Route path="/teams/:id" element={<TeamDetail />} />
          <Route path="/new-request" element={<NewRequest />} />
          <Route path="/requests/:id" element={<RequestDetail />} />
          <Route path="/portal" element={<UserDashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
