import { Routes, Route } from "react-router-dom";

import ContactsPage from "./Pages/ContactsPage/ContactsPage";
import ClientsPage from "./Pages/ClientsPage/ClientsPage";
import HomePage from "./Pages/HomePage/HomePage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
