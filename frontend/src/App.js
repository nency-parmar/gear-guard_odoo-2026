import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Equipment from "./pages/Equipment";
import Requests from "./pages/Requests";
import Teams from "./pages/Teams";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
