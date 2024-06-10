import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./pages/Intro.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
