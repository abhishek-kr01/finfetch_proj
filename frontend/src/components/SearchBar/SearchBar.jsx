import React, { useState, useEffect, useRef } from "react";
import { useStockContext } from "../../context/StockContext";
import "./SearchBar.css";

function SearchBar() {
  const { availableSymbols, changeStock } = useStockContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredSymbols, setFilteredSymbols] = useState([]);
  const searchRef = useRef(null);

  // Filter symbols when search term changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredSymbols([]);
      return;
    }

    const filtered = availableSymbols.filter((symbol) =>
      symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredSymbols(filtered.slice(0, 10)); // Limit to 10 results
  }, [searchTerm, availableSymbols]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true);
  };

  const handleSelectSymbol = (symbol) => {
    changeStock(symbol);
    setSearchTerm("");
    setShowDropdown(false);
  };

  return (
    <div className="search-bar" ref={searchRef}>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search Stock..."
          value={searchTerm}
          onChange={handleSearch}
          onFocus={() => setShowDropdown(true)}
          className="search-input"
        />
        <button className="search-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
      </div>

      {showDropdown && filteredSymbols.length > 0 && (
        <div className="search-dropdown">
          {filteredSymbols.map((symbol) => (
            <div
              key={symbol}
              className="search-dropdown-item"
              onClick={() => handleSelectSymbol(symbol)}
            >
              {symbol}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
