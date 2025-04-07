import React, { useState, useRef, useEffect } from "react";
import financialApi from "../../api/financialApi";
import "./ChatBot.css";

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm your financial assistant. Ask me anything about stocks, market data, or financial analysis.",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedSymbols, setSelectedSymbols] = useState([]);
  const [availableSymbols, setAvailableSymbols] = useState([]);
  const [collectFresh, setCollectFresh] = useState(false);

  const messagesEndRef = useRef(null);

  // Fetch available symbols when component mounts
  useEffect(() => {
    const fetchSymbols = async () => {
      try {
        const symbols = await financialApi.getSymbols();
        setAvailableSymbols(symbols);
      } catch (error) {
        console.error("Error fetching symbols:", error);
      }
    };

    fetchSymbols();
  }, []);

  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSymbolSelect = (symbol) => {
    if (selectedSymbols.includes(symbol)) {
      setSelectedSymbols(selectedSymbols.filter((s) => s !== symbol));
    } else {
      setSelectedSymbols([...selectedSymbols, symbol]);
    }
  };

  const handleToggleCollectFresh = () => {
    setCollectFresh(!collectFresh);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setLoading(true);

    try {
      // Send request to the financial AI agent
      const response = await financialApi.askFinancialQuestion(
        inputValue,
        selectedSymbols.length > 0 ? selectedSymbols : null,
        collectFresh
      );

      // Add bot response
      const botMessage = {
        id: Date.now() + 1,
        text: response.answer,
        isBot: true,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error getting answer:", error);

      // Add error message
      const errorMessage = {
        id: Date.now() + 1,
        text: "I'm sorry, I encountered an error while processing your question. Please try again later.",
        isBot: true,
        isError: true,
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-sidebar">
        <div className="sidebar-section">
          <h3 className="sidebar-title">Select Stocks</h3>
          <div className="symbols-list">
            {availableSymbols.map((symbol) => (
              <div
                key={symbol}
                className={`symbol-item ${
                  selectedSymbols.includes(symbol) ? "selected" : ""
                }`}
                onClick={() => handleSymbolSelect(symbol)}
              >
                {symbol}
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-section">
          <h3 className="sidebar-title">Options</h3>
          <div className="option-item">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={collectFresh}
                onChange={handleToggleCollectFresh}
              />
              <span className="checkmark"></span>
              Collect fresh data
            </label>
          </div>
        </div>
      </div>

      <div className="chatbot-main">
        <div className="chat-header">
          <h2>Financial Assistant</h2>
        </div>

        <div className="chat-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.isBot ? "bot" : "user"} ${
                message.isError ? "error" : ""
              }`}
            >
              {message.text}
            </div>
          ))}

          {loading && (
            <div className="message bot loading">
              <div className="loading-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="chat-input"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Ask a question about finance or stocks..."
            disabled={loading}
          />
          <button
            type="submit"
            className="send-button"
            disabled={loading || !inputValue.trim()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatBot;
