// import React from "react";
// import { Link } from "react-router-dom";
// import SearchBar from "../SearchBar/SearchBar";
// import { useStockContext } from "../../context/StockContext";
// import "./Header.css";

// function Header() {
//   const { toggleDarkMode, darkMode } = useStockContext();

//   return (
//     <header className="header">
//       <div className="header-container">
//         <SearchBar />

//         <div className="header-actions">
//           <button className="header-button notification-button">
//             <span className="notification-icon">🔔</span>
//             <span className="header-button-text">Notifications</span>
//           </button>

//           <Link to="/chatbot" className="header-button chatbot-button">
//             <span className="header-button-text">Open Chatbot</span>
//           </Link>

//           <Link to="/" className="header-button news-button">
//             <span className="news-icon">📰</span>
//             <span className="header-button-text">News</span>
//           </Link>

//           <button
//             className="header-button dark-mode-toggle"
//             onClick={toggleDarkMode}
//           >
//             {darkMode ? (
//               <span className="theme-icon">☀️</span>
//             ) : (
//               <span className="theme-icon">🌙</span>
//             )}
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useStockContext } from "../../context/StockContext";
import "./Header.css";

function Header() {
  const { toggleDarkMode, darkMode, showNews, toggleNewsPanel } =
    useStockContext();

  const handleNewsClick = () => {
    toggleNewsPanel();
  };

  return (
    <header className="header">
      <div className="header-container">
        <SearchBar />

        <div className="header-actions">
          <button className="header-button notification-button">
            <span className="notification-icon">🔔</span>
            <span className="header-button-text">Notifications</span>
          </button>

          <Link to="/chatbot" className="header-button chatbot-button">
            <span className="header-button-text">Open Chatbot</span>
          </Link>

          <button
            className={`header-button news-button ${showNews ? "active" : ""}`}
            onClick={handleNewsClick}
          >
            <span className="news-icon">📰</span>
            <span className="header-button-text">News</span>
          </button>

          <button
            className="header-button dark-mode-toggle"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <span className="theme-icon">☀️</span>
            ) : (
              <span className="theme-icon">🌙</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
