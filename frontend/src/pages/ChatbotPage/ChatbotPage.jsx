import React from "react";
import { Link } from "react-router-dom";
import ChatBot from "../../components/ChatBot/ChatBot";
import { useStockContext } from "../../context/StockContext";
import "./ChatbotPage.css";

function ChatbotPage() {
  const { toggleDarkMode, darkMode } = useStockContext();

  return (
    <div className="chatbot-page">
      <div className="chatbot-header">
        <Link to="/" className="back-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
          </svg>
          <span>Back to Dashboard</span>
        </Link>

        <div className="chatbot-title">Financial Assistant</div>

        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? (
            <span className="theme-icon">☀️</span>
          ) : (
            <span className="theme-icon">🌙</span>
          )}
        </button>
      </div>

      <ChatBot />
    </div>
  );
}

export default ChatbotPage;
