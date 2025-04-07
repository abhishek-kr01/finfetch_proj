// // import React, { createContext, useState, useEffect, useContext } from "react";
// // import financialApi from "../api/financialApi";

// // // Create the context
// // const StockContext = createContext();

// // // Custom hook to use the stock context
// // export const useStockContext = () => useContext(StockContext);

// // // Provider component
// // export const StockProvider = ({ children }) => {
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [availableSymbols, setAvailableSymbols] = useState([]);
// //   const [selectedSymbol, setSelectedSymbol] = useState("AAPL"); // Default to Apple
// //   const [stockData, setStockData] = useState(null);
// //   const [historicalData, setHistoricalData] = useState([]);
// //   const [companyInfo, setCompanyInfo] = useState({});
// //   const [newsData, setNewsData] = useState([]);
// //   const [darkMode, setDarkMode] = useState(false);

// //   // Fetch available symbols on mount
// //   useEffect(() => {
// //     const fetchSymbols = async () => {
// //       try {
// //         const symbols = await financialApi.getSymbols();
// //         setAvailableSymbols(symbols);
// //       } catch (err) {
// //         setError("Failed to fetch symbols");
// //         console.error(err);
// //       }
// //     };

// //     fetchSymbols();
// //   }, []);

// //   // Fetch stock data when selected symbol changes
// //   useEffect(() => {
// //     if (!selectedSymbol) return;

// //     const fetchStockData = async () => {
// //       setLoading(true);
// //       setError(null);

// //       try {
// //         // Fetch all data in parallel for better performance
// //         const [quotesData, historicalData, newsData, financialsData] =
// //           await Promise.all([
// //             financialApi.getStockQuotes([selectedSymbol]),
// //             financialApi.getHistoricalPrices([selectedSymbol]),
// //             financialApi.getCompanyNews([selectedSymbol], 30),
// //             financialApi.getBasicFinancials([selectedSymbol]),
// //           ]);

// //         // Process stock quotes
// //         if (quotesData.status === "success") {
// //           console.log("Quotes data:", quotesData);
// //           // In a real app, you might need to fetch the actual CSV data
// //           // For now, we'll still use placeholder data but acknowledge the response
// //           setStockData({
// //             symbol: selectedSymbol,
// //             price: 212.69,
// //             change: -10,
// //             changePercent: -10,
// //             lastUpdate: new Date().toLocaleTimeString(),
// //           });
// //         }

// //         // Process historical data
// //         if (historicalData.status === "success") {
// //           console.log("Historical data:", historicalData);
// //           // In a real app, you would parse the CSV file mentioned in the response
// //           const sampleHistoricalData =
// //             generateSampleHistoricalData(selectedSymbol);
// //           setHistoricalData(sampleHistoricalData);
// //         }

// //         // Process company news
// //         if (newsData.status === "success") {
// //           console.log("News data:", newsData);
// //           // Placeholder news data for now
// //           setNewsData([
// //             {
// //               id: 1,
// //               headline: "Latest news about " + getCompanyName(selectedSymbol),
// //               source: "Financial Times",
// //               date: new Date().toLocaleDateString(),
// //             },
// //             {
// //               id: 2,
// //               headline: "Quarterly earnings report",
// //               source: "Wall Street Journal",
// //               date: new Date().toLocaleDateString(),
// //             },
// //           ]);
// //         }

// //         // Process financials data
// //         if (financialsData.status === "success") {
// //           console.log("Financials data:", financialsData);
// //           // Set company info using the financials data
// //           setCompanyInfo({
// //             name: getCompanyName(selectedSymbol),
// //             country: "USA",
// //             currency: "USD",
// //             exchange: "NASDAQ",
// //             ipoDate: "1980-12-12",
// //             marketCap: "$NaN", // Would be populated with real data
// //           });
// //         }

// //         setLoading(false);
// //       } catch (err) {
// //         setError("Failed to fetch stock data");
// //         console.error(err);
// //         setLoading(false);
// //       }
// //     };

// //     fetchStockData();
// //   }, [selectedSymbol]);

// //   // Helper function to generate sample historical data for the chart
// //   const generateSampleHistoricalData = (symbol) => {
// //     const data = [];
// //     const today = new Date();
// //     const basePrice = symbol === "AAPL" ? 210 : symbol === "MSFT" ? 320 : 150;

// //     for (let i = 30; i >= 0; i--) {
// //       const date = new Date(today);
// //       date.setDate(date.getDate() - i);

// //       data.push({
// //         date: date.toISOString().split("T")[0],
// //         price: basePrice + Math.random() * 20 - 10,
// //       });
// //     }

// //     return data;
// //   };

// //   // Helper function to get company name from symbol
// //   const getCompanyName = (symbol) => {
// //     const companies = {
// //       AAPL: "Apple Inc.",
// //       MSFT: "Microsoft Corporation",
// //       GOOGL: "Alphabet Inc.",
// //       AMZN: "Amazon.com, Inc.",
// //       TSLA: "Tesla, Inc.",
// //       META: "Meta Platforms, Inc.",
// //       NVDA: "NVIDIA Corporation",
// //     };

// //     return companies[symbol] || symbol;
// //   };

// //   // Toggle dark mode
// //   const toggleDarkMode = () => {
// //     setDarkMode(!darkMode);
// //     if (!darkMode) {
// //       document.body.classList.add("dark-mode");
// //     } else {
// //       document.body.classList.remove("dark-mode");
// //     }
// //   };

// //   // Change the selected stock
// //   const changeStock = (symbol) => {
// //     if (symbol && availableSymbols.includes(symbol)) {
// //       setSelectedSymbol(symbol);
// //     }
// //   };

// //   // Value object to be provided
// //   const value = {
// //     loading,
// //     error,
// //     availableSymbols,
// //     selectedSymbol,
// //     stockData,
// //     historicalData,
// //     companyInfo,
// //     newsData,
// //     darkMode,
// //     toggleDarkMode,
// //     changeStock,
// //   };

// //   return (
// //     <StockContext.Provider value={value}>{children}</StockContext.Provider>
// //   );
// // };

// // export default StockContext;

// import React, { createContext, useState, useEffect, useContext } from "react";
// import financialApi from "../api/financialApi";

// // Create the context
// const StockContext = createContext();

// // Custom hook to use the stock context
// export const useStockContext = () => useContext(StockContext);

// // Provider component
// export const StockProvider = ({ children }) => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [availableSymbols, setAvailableSymbols] = useState([
//     "AAPL",
//     "MSFT",
//     "GOOGL",
//     "AMZN",
//     "TSLA",
//     "META",
//     "NVDA",
//   ]);
//   const [selectedSymbol, setSelectedSymbol] = useState("AAPL"); // Default to Apple
//   const [stockData, setStockData] = useState(null);
//   const [historicalData, setHistoricalData] = useState([]);
//   const [companyInfo, setCompanyInfo] = useState({});
//   const [newsData, setNewsData] = useState([]);
//   const [darkMode, setDarkMode] = useState(false);

//   // Fetch available symbols on mount
//   useEffect(() => {
//     const fetchSymbols = async () => {
//       try {
//         const symbols = await financialApi.getSymbols();
//         if (symbols && symbols.length > 0) {
//           setAvailableSymbols(symbols);
//         }
//       } catch (err) {
//         console.error("Error fetching symbols:", err);
//         // Keep using the default symbols array
//       }
//     };

//     fetchSymbols();
//   }, []);

//   // Function to fetch stock data - can be called for retry
//   const fetchStockData = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       // Skip actual API calls for now
//       /*
//       const [quotesData, historicalData, newsData, financialsData] = await Promise.all([
//         financialApi.getStockQuotes([selectedSymbol]),
//         financialApi.getHistoricalPrices([selectedSymbol]),
//         financialApi.getCompanyNews([selectedSymbol], 30),
//         financialApi.getBasicFinancials([selectedSymbol])
//       ]);
//       */

//       // Use sample data directly
//       setStockData({
//         symbol: selectedSymbol,
//         price: 212.69,
//         change: -10,
//         changePercent: -10,
//         lastUpdate: new Date().toLocaleTimeString(),
//       });

//       // Generate sample historical data
//       const data = [];
//       const today = new Date();
//       const basePrice =
//         selectedSymbol === "AAPL"
//           ? 210
//           : selectedSymbol === "MSFT"
//           ? 320
//           : selectedSymbol === "GOOGL"
//           ? 180
//           : selectedSymbol === "AMZN"
//           ? 145
//           : selectedSymbol === "TSLA"
//           ? 220
//           : 150;

//       for (let i = 30; i >= 0; i--) {
//         const date = new Date(today);
//         date.setDate(date.getDate() - i);

//         data.push({
//           date: date.toISOString().split("T")[0],
//           price: basePrice + Math.random() * 20 - 10,
//         });
//       }

//       setHistoricalData(data);

//       // Sample company info
//       setCompanyInfo({
//         name: getCompanyName(selectedSymbol),
//         country: "USA",
//         currency: "USD",
//         exchange: "NASDAQ",
//         ipoDate: "1980-12-12",
//         marketCap: "$NaN", // Would be populated with real data
//       });

//       // Sample news data
//       setNewsData([
//         {
//           id: 1,
//           headline: "Latest news about " + getCompanyName(selectedSymbol),
//           source: "Financial Times",
//           date: new Date().toLocaleDateString(),
//         },
//         {
//           id: 2,
//           headline: "Quarterly earnings report for " + selectedSymbol,
//           source: "Wall Street Journal",
//           date: new Date().toLocaleDateString(),
//         },
//         {
//           id: 3,
//           headline: "Industry analysis: tech sector outlook",
//           source: "Bloomberg",
//           date: new Date().toLocaleDateString(),
//         },
//       ]);

//       setLoading(false);
//     } catch (err) {
//       setError(
//         "Failed to fetch stock data: " + (err.message || "Unknown error")
//       );
//       console.error("Stock data fetch error:", err);
//       setLoading(false);
//     }
//   };

//   // Retry function for the "Retry" button
//   const retryFetchData = () => {
//     fetchStockData();
//   };

//   // Fetch stock data when selected symbol changes
//   useEffect(() => {
//     if (!selectedSymbol) return;
//     fetchStockData();
//   }, [selectedSymbol]);

//   // Helper function to get company name from symbol
//   const getCompanyName = (symbol) => {
//     const companies = {
//       AAPL: "Apple Inc.",
//       MSFT: "Microsoft Corporation",
//       GOOGL: "Alphabet Inc.",
//       AMZN: "Amazon.com, Inc.",
//       TSLA: "Tesla, Inc.",
//       META: "Meta Platforms, Inc.",
//       NVDA: "NVIDIA Corporation",
//     };

//     return companies[symbol] || symbol;
//   };

//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     if (!darkMode) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   };

//   // Change the selected stock
//   const changeStock = (symbol) => {
//     if (symbol && availableSymbols.includes(symbol)) {
//       setSelectedSymbol(symbol);
//     }
//   };

//   // Value object to be provided
//   const value = {
//     loading,
//     error,
//     availableSymbols,
//     selectedSymbol,
//     stockData,
//     historicalData,
//     companyInfo,
//     newsData,
//     darkMode,
//     toggleDarkMode,
//     changeStock,
//     retryFetchData,
//   };

//   return (
//     <StockContext.Provider value={value}>{children}</StockContext.Provider>
//   );
// };

// /* eslint-disable react-refresh/only-export-components */
// export default StockContext;

import React, { createContext, useState, useEffect, useContext } from "react";
import financialApi, { API_BASE_URL } from "../api/financialApi";

// Create the context
const StockContext = createContext();

// Custom hook to use the stock context
export const useStockContext = () => useContext(StockContext);

// Provider component
export const StockProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [availableSymbols, setAvailableSymbols] = useState([
    "AAPL",
    "MSFT",
    "GOOGL",
    "GOOG",
    "AMZN",
    "TSLA",
    "META",
    "NVDA",
    "IBM",
  ]);
  const [selectedSymbol, setSelectedSymbol] = useState("IBM"); // Default to IBM
  const [stockData, setStockData] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const [companyInfo, setCompanyInfo] = useState({});
  const [newsData, setNewsData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [showNews, setShowNews] = useState(true);

  // Helper function to fetch and parse CSV data
  const fetchCsvData = async (filePath) => {
    try {
      // Clean up the file path
      let cleanPath = filePath;
      if (cleanPath.startsWith("/")) {
        cleanPath = cleanPath.substring(1);
      }

      // Log the path we're trying to fetch
      console.log("Fetching CSV from:", `${API_BASE_URL}/${cleanPath}`);

      // Fetch the CSV file
      const response = await fetch(`${API_BASE_URL}/${cleanPath}`);

      if (!response.ok) {
        console.error(`Failed to fetch CSV file: ${response.status}`);

        // Try an alternative path
        console.log("Trying direct path:", filePath);
        const directResponse = await fetch(filePath);

        if (!directResponse.ok) {
          throw new Error(`Failed to fetch CSV file: ${response.status}`);
        }

        const csvText = await directResponse.text();
        return parseCSV(csvText);
      }

      const csvText = await response.text();
      return parseCSV(csvText);
    } catch (error) {
      console.error("Error fetching or parsing CSV:", error);
      throw error;
    }
  };

  // Add this helper function for parsing CSV
  const parseCSV = (csvText) => {
    // Basic CSV parsing
    const lines = csvText.split("\n");
    if (lines.length < 2) return [];

    const headers = lines[0].split(",").map((h) => h.trim());
    const results = [];

    for (let i = 1; i < lines.length; i++) {
      if (!lines[i].trim()) continue;

      // Handle quoted values properly
      let values = [];
      let inQuote = false;
      let currentValue = "";
      let line = lines[i];

      for (let j = 0; j < line.length; j++) {
        const char = line[j];

        if (char === '"' && (j === 0 || line[j - 1] !== "\\")) {
          inQuote = !inQuote;
        } else if (char === "," && !inQuote) {
          values.push(currentValue);
          currentValue = "";
        } else {
          currentValue += char;
        }
      }

      values.push(currentValue); // Add the last value

      // Create object from headers and values
      const item = {};
      for (let j = 0; j < headers.length; j++) {
        if (j < values.length) {
          // Clean up quoted values
          let value = values[j];
          if (value.startsWith('"') && value.endsWith('"')) {
            value = value.substring(1, value.length - 1);
          }
          item[headers[j]] = value;
        }
      }

      results.push(item);
    }

    return results;
  };

  // Fetch available symbols on mount
  useEffect(() => {
    const fetchSymbols = async () => {
      try {
        const symbols = await financialApi.getSymbols();
        if (symbols && symbols.length > 0) {
          setAvailableSymbols(symbols);
        }
      } catch (err) {
        console.error("Error fetching symbols:", err);
        // Keep using the default symbols array
      }
    };

    fetchSymbols();
  }, []);

  // Sample data generation functions
  const generateSampleStockData = (symbol) => {
    const priceMap = {
      AAPL: 178.72,
      MSFT: 417.88,
      GOOGL: 147.6,
      GOOG: 148.22,
      AMZN: 178.15,
      TSLA: 172.63,
      META: 487.52,
      NVDA: 926.69,
      IBM: 173.93,
    };

    const price = priceMap[symbol] || 212.69;

    // Generate a random change between -5% and +5%
    const changePercent = Math.round((Math.random() * 10 - 5) * 10) / 10;
    const change = Math.round(((price * changePercent) / 100) * 100) / 100;

    return {
      symbol,
      price,
      change,
      changePercent,
      lastUpdate: new Date().toLocaleTimeString(),
    };
  };

  const generateSampleMarketCap = (symbol) => {
    const marketCapMap = {
      AAPL: "$2.85T",
      MSFT: "$3.11T",
      GOOGL: "$1.87T",
      GOOG: "$1.87T",
      AMZN: "$1.84T",
      TSLA: "$546.40B",
      META: "$1.25T",
      NVDA: "$2.28T",
      IBM: "$157.84B",
    };

    return marketCapMap[symbol] || "$NaN";
  };

  // Function to fetch stock data - can be called for retry
  const fetchStockData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Fetch all data in parallel for better performance
      const [quotesData, historicalData, newsData, financialsData] =
        await Promise.all([
          financialApi.getStockQuotes([selectedSymbol]),
          financialApi.getHistoricalPrices([selectedSymbol]),
          financialApi.getCompanyNews([selectedSymbol], 30),
          financialApi.getBasicFinancials([selectedSymbol]),
        ]);

      console.log("API Responses:", {
        quotes: quotesData,
        historical: historicalData,
        news: newsData,
        financials: financialsData,
      });

      // Process quotes data
      if (quotesData.status === "success" && quotesData.file_path) {
        try {
          const csvData = await fetchCsvData(quotesData.file_path);
          if (csvData && csvData.length > 0) {
            const stockInfo = csvData.find(
              (item) => item.symbol === selectedSymbol
            );
            if (stockInfo) {
              setStockData({
                symbol: selectedSymbol,
                price: parseFloat(stockInfo.price || 0),
                change: parseFloat(stockInfo.change || 0),
                changePercent: parseFloat(stockInfo.changePercent || 0),
                lastUpdate: new Date().toLocaleTimeString(),
              });
            } else {
              setStockData(generateSampleStockData(selectedSymbol));
            }
          } else {
            setStockData(generateSampleStockData(selectedSymbol));
          }
        } catch (csvError) {
          console.error("Error processing quotes CSV:", csvError);
          // Fallback to sample data
          setStockData(generateSampleStockData(selectedSymbol));
        }
      } else {
        // Fallback to sample data
        setStockData(generateSampleStockData(selectedSymbol));
      }

      // Process historical data
      if (historicalData.status === "success" && historicalData.results) {
        const result = historicalData.results.find(
          (item) => item.symbol === selectedSymbol
        );
        if (result && result.file_path) {
          try {
            const histData = await fetchCsvData(result.file_path);
            if (histData && histData.length > 0) {
              // Format data for the chart
              const formattedData = histData
                .map((item) => ({
                  date: item.date,
                  price: parseFloat(item.close || item.price || 0),
                }))
                .sort((a, b) => new Date(a.date) - new Date(b.date));

              setHistoricalData(formattedData);
            } else {
              setHistoricalData(generateSampleHistoricalData(selectedSymbol));
            }
          } catch (csvError) {
            console.error("Error processing historical CSV:", csvError);
            // Fallback to sample data
            setHistoricalData(generateSampleHistoricalData(selectedSymbol));
          }
        } else {
          setHistoricalData(generateSampleHistoricalData(selectedSymbol));
        }
      } else {
        // Fallback to sample data
        setHistoricalData(generateSampleHistoricalData(selectedSymbol));
      }

      // Process news data
      if (newsData.status === "success" && newsData.results) {
        const result = newsData.results.find(
          (item) => item.symbol === selectedSymbol
        );
        if (result && result.file_path) {
          try {
            const newsItems = await fetchCsvData(result.file_path);
            if (newsItems && newsItems.length > 0) {
              // Format news data
              const formattedNews = newsItems.map((item, index) => ({
                id: index + 1,
                headline:
                  item.headline ||
                  item.summary ||
                  `News about ${getCompanyName(selectedSymbol)}`,
                source: item.source || "Financial Press",
                date: item.datetime || new Date().toLocaleDateString(),
                url: item.url || "#",
              }));

              setNewsData(formattedNews);
            } else {
              setNewsData(generateSampleNews(selectedSymbol));
            }
          } catch (csvError) {
            console.error("Error processing news CSV:", csvError);
            // Fallback to sample news
            setNewsData(generateSampleNews(selectedSymbol));
          }
        } else {
          setNewsData(generateSampleNews(selectedSymbol));
        }
      } else {
        // Fallback to sample news
        setNewsData(generateSampleNews(selectedSymbol));
      }

      // Process financials data
      if (financialsData.status === "success" && financialsData.results) {
        const result = financialsData.results.find(
          (item) => item.symbol === selectedSymbol
        );
        if (result && result.file_path) {
          try {
            const finData = await fetchCsvData(result.file_path);
            if (finData && finData.length > 0) {
              setCompanyInfo({
                name: getCompanyName(selectedSymbol),
                country: finData[0].country || "USA",
                currency: finData[0].currency || "USD",
                exchange: finData[0].exchange || "NASDAQ",
                ipoDate: finData[0].ipoDate || "1980-12-12",
                marketCap: finData[0].marketCapitalization
                  ? `$${(finData[0].marketCapitalization / 1000000000).toFixed(
                      2
                    )}B`
                  : generateSampleMarketCap(selectedSymbol),
              });
            } else {
              setCompanyInfo({
                name: getCompanyName(selectedSymbol),
                country: "USA",
                currency: "USD",
                exchange: "NASDAQ",
                ipoDate: "1980-12-12",
                marketCap: generateSampleMarketCap(selectedSymbol),
              });
            }
          } catch (csvError) {
            console.error("Error processing financials CSV:", csvError);
            setCompanyInfo({
              name: getCompanyName(selectedSymbol),
              country: "USA",
              currency: "USD",
              exchange: "NASDAQ",
              ipoDate: "1980-12-12",
              marketCap: generateSampleMarketCap(selectedSymbol),
            });
          }
        } else {
          setCompanyInfo({
            name: getCompanyName(selectedSymbol),
            country: "USA",
            currency: "USD",
            exchange: "NASDAQ",
            ipoDate: "1980-12-12",
            marketCap: generateSampleMarketCap(selectedSymbol),
          });
        }
      } else {
        // Fallback to sample data
        setCompanyInfo({
          name: getCompanyName(selectedSymbol),
          country: "USA",
          currency: "USD",
          exchange: "NASDAQ",
          ipoDate: "1980-12-12",
          marketCap: generateSampleMarketCap(selectedSymbol),
        });
      }

      setLastUpdated(new Date());
      setLoading(false);
    } catch (err) {
      setError(
        "Failed to fetch stock data: " + (err.message || "Unknown error")
      );
      console.error("Stock data fetch error:", err);
      setLoading(false);
    }
  };

  // Toggle news panel visibility
  const toggleNewsPanel = () => {
    setShowNews(!showNews);
  };

  // Retry function for the "Retry" button
  const retryFetchData = () => {
    fetchStockData();
  };

  // Fetch stock data when selected symbol changes
  useEffect(() => {
    if (!selectedSymbol) return;
    fetchStockData();
  }, [selectedSymbol]);

  // Set up polling interval for real-time updates
  useEffect(() => {
    let intervalId;

    if (autoRefresh && selectedSymbol) {
      // Update data every minute (60000 ms)
      intervalId = setInterval(() => {
        console.log("Auto-refreshing data...");
        fetchStockData();
      }, 60000);
    }

    // Clean up interval on unmount or when dependencies change
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoRefresh, selectedSymbol]);

  // Helper function to generate sample historical data for the chart
  const generateSampleHistoricalData = (symbol) => {
    const data = [];
    const today = new Date();
    const basePrice =
      symbol === "AAPL"
        ? 170
        : symbol === "MSFT"
        ? 410
        : symbol === "GOOGL"
        ? 140
        : symbol === "GOOG"
        ? 141
        : symbol === "AMZN"
        ? 170
        : symbol === "TSLA"
        ? 165
        : symbol === "META"
        ? 480
        : symbol === "NVDA"
        ? 900
        : symbol === "IBM"
        ? 170
        : 150;

    for (let i = 30; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);

      // Create some realistic volatility
      const volatility = Math.sin(i / 5) * 10 + (Math.random() * 5 - 2.5);

      data.push({
        date: date.toISOString().split("T")[0],
        price: basePrice + volatility,
      });
    }

    return data;
  };

  // Generate sample news
  const generateSampleNews = (symbol) => {
    const companyName = getCompanyName(symbol);
    return [
      {
        id: 1,
        headline: `Latest news about ${companyName}`,
        source: "Financial Times",
        date: new Date().toLocaleDateString(),
      },
      {
        id: 2,
        headline: `Quarterly earnings report for ${symbol}`,
        source: "Wall Street Journal",
        date: new Date().toLocaleDateString(),
      },
      {
        id: 3,
        headline: "Industry analysis: tech sector outlook",
        source: "Bloomberg",
        date: new Date().toLocaleDateString(),
      },
      {
        id: 4,
        headline: `${companyName} announces new product line`,
        source: "Reuters",
        date: new Date().toLocaleDateString(),
      },
    ];
  };

  // Helper function to get company name from symbol
  const getCompanyName = (symbol) => {
    const companies = {
      AAPL: "Apple Inc.",
      MSFT: "Microsoft Corporation",
      GOOGL: "Alphabet Inc.",
      GOOG: "Alphabet Inc.", // Add this alias
      AMZN: "Amazon.com, Inc.",
      TSLA: "Tesla, Inc.",
      META: "Meta Platforms, Inc.",
      NVDA: "NVIDIA Corporation",
      IBM: "International Business Machines Corporation",
    };

    return companies[symbol] || symbol;
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  // Change the selected stock
  const changeStock = (symbol) => {
    if (symbol && availableSymbols.includes(symbol)) {
      setSelectedSymbol(symbol);
    }
  };

  // Value object to be provided
  const value = {
    loading,
    error,
    availableSymbols,
    selectedSymbol,
    stockData,
    historicalData,
    companyInfo,
    newsData,
    darkMode,
    lastUpdated,
    autoRefresh,
    setAutoRefresh,
    showNews,
    toggleNewsPanel,
    toggleDarkMode,
    changeStock,
    retryFetchData,
  };

  return (
    <StockContext.Provider value={value}>{children}</StockContext.Provider>
  );
};

/* eslint-disable react-refresh/only-export-components */
export default StockContext;
