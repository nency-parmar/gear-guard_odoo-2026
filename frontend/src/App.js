import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Equipment from "./pages/Equipment";
import Requests from "./pages/Requests";
import Teams from "./pages/Teams";
import EquipmentDetail from "./pages/EquipmentDetail";
import TeamDetail from "./pages/TeamDetail";
import NewRequest from "./pages/NewRequest";


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
          <Route path="/teams/:id" element={<TeamDetail />} />
          <Route path="/new-request" element={<NewRequest />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
