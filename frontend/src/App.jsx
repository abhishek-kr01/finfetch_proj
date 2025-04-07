import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StockProvider } from "./context/StockContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import ChatbotPage from "./pages/ChatbotPage/ChatbotPage";
import "./App.css";

function App() {
  return (
    <StockProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
          </Routes>
        </div>
      </Router>
    </StockProvider>
  );
}

export default App;
