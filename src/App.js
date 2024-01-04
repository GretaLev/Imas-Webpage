import { Routes, Route } from "react-router-dom";

import ClientsPage from "./components/ClientsPage/ClientsPage";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
