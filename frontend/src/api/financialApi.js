// // // import axios from "axios";

// // // const API_BASE_URL = "http://localhost:8000";

// // // const financialApi = {
// // //   // Get all available stock symbols
// // //   getSymbols: async () => {
// // //     try {
// // //       const response = await axios.get(`${API_BASE_URL}/symbols`);
// // //       return response.data.symbols;
// // //     } catch (error) {
// // //       console.error("Error fetching symbols:", error);
// // //       return [];
// // //     }
// // //   },

// // //   // Get real-time stock quotes
// // //   getStockQuotes: async (symbols) => {
// // //     try {
// // //       const response = await axios.post(`${API_BASE_URL}/quotes`, {
// // //         symbols: Array.isArray(symbols) ? symbols : [symbols],
// // //         output_format: "csv",
// // //       });
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error("Error fetching stock quotes:", error);
// // //       throw error;
// // //     }
// // //   },

// // //   // Get historical prices for a stock
// // //   getHistoricalPrices: async (symbols) => {
// // //     try {
// // //       const response = await axios.post(`${API_BASE_URL}/historical-prices`, {
// // //         symbols: Array.isArray(symbols) ? symbols : [symbols],
// // //         output_format: "csv",
// // //       });
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error("Error fetching historical prices:", error);
// // //       throw error;
// // //     }
// // //   },

// // //   // Get company news
// // //   getCompanyNews: async (symbols, daysBack = 30) => {
// // //     try {
// // //       const response = await axios.post(`${API_BASE_URL}/company-news`, {
// // //         symbols: Array.isArray(symbols) ? symbols : [symbols],
// // //         days_back: daysBack,
// // //         output_format: "csv",
// // //       });
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error("Error fetching company news:", error);
// // //       throw error;
// // //     }
// // //   },

// // //   // Get basic financials for a company
// // //   getBasicFinancials: async (symbols) => {
// // //     try {
// // //       const response = await axios.post(`${API_BASE_URL}/financials`, {
// // //         symbols: Array.isArray(symbols) ? symbols : [symbols],
// // //         output_format: "csv",
// // //       });
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error("Error fetching basic financials:", error);
// // //       throw error;
// // //     }
// // //   },

// // //   // Get FMP articles
// // //   getFmpArticles: async (limit = 50) => {
// // //     try {
// // //       const response = await axios.post(`${API_BASE_URL}/articles`, {
// // //         limit,
// // //         output_format: "csv",
// // //       });
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error("Error fetching FMP articles:", error);
// // //       throw error;
// // //     }
// // //   },

// // //   // Ask a question to the AI
// // //   askFinancialQuestion: async (query, symbols = null, collectFresh = false) => {
// // //     try {
// // //       const response = await axios.post(`${API_BASE_URL}/ask`, {
// // //         query,
// // //         symbols,
// // //         collect_fresh: collectFresh,
// // //       });
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error("Error asking financial question:", error);
// // //       throw error;
// // //     }
// // //   },

// // //   // Get all available data
// // //   getAvailableData: async () => {
// // //     try {
// // //       const response = await axios.get(`${API_BASE_URL}/available-data`);
// // //       return response.data;
// // //     } catch (error) {
// // //       console.error("Error fetching available data:", error);
// // //       throw error;
// // //     }
// // //   },

// // //   // Collect fresh data for a symbol
// // //   collectFreshData: async (symbols, options = {}) => {
// // //     try {
// // //       const {
// // //         collectNews = true,
// // //         collectFinancials = true,
// // //         collectHistorical = true,
// // //       } = options;

// // //       const response = await axios.post(`${API_BASE_URL}/collect-data`, {
// // //         symbols: Array.isArray(symbols) ? symbols : [symbols],
// // //         collect_news: collectNews,
// // //         collect_financials: collectFinancials,
// // //         collect_historical: collectHistorical,
// // //       });

// // //       return response.data;
// // //     } catch (error) {
// // //       console.error("Error collecting fresh data:", error);
// // //       throw error;
// // //     }
// // //   },
// // // };

// // export default financialApi;

// import axios from "axios";

// const API_BASE_URL = "http://localhost:8000";

// const financialApi = {
//   // Get all available stock symbols
//   getSymbols: async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/symbols`);
//       return response.data.symbols;
//     } catch (error) {
//       console.error("Error fetching symbols:", error);
//       // Return default symbols as fallback
//       return [
//         "AAPL",
//         "MSFT",
//         "GOOGL",
//         "AMZN",
//         "TSLA",
//         "META",
//         "NVDA",
//         "INTC",
//         "IBM",
//       ];
//     }
//   },

//   // Get real-time stock quotes
//   getStockQuotes: async (symbols) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/quotes`, {
//         symbols: Array.isArray(symbols) ? symbols : [symbols],
//         output_format: "csv",
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching stock quotes:", error);
//       throw new Error(
//         "Unable to fetch stock quotes: " +
//           (error.response?.data?.detail || error.message)
//       );
//     }
//   },

//   // Get historical prices for a stock
//   getHistoricalPrices: async (symbols) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/historical-prices`, {
//         symbols: Array.isArray(symbols) ? symbols : [symbols],
//         output_format: "csv",
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching historical prices:", error);
//       throw new Error(
//         "Unable to fetch historical prices: " +
//           (error.response?.data?.detail || error.message)
//       );
//     }
//   },

//   // Get company news
//   getCompanyNews: async (symbols, daysBack = 30) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/company-news`, {
//         symbols: Array.isArray(symbols) ? symbols : [symbols],
//         days_back: daysBack,
//         output_format: "csv",
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching company news:", error);
//       throw new Error(
//         "Unable to fetch company news: " +
//           (error.response?.data?.detail || error.message)
//       );
//     }
//   },

//   // Get basic financials for a company
//   getBasicFinancials: async (symbols) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/financials`, {
//         symbols: Array.isArray(symbols) ? symbols : [symbols],
//         output_format: "csv",
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching basic financials:", error);
//       throw new Error(
//         "Unable to fetch financials: " +
//           (error.response?.data?.detail || error.message)
//       );
//     }
//   },

//   // Get FMP articles
//   getFmpArticles: async (limit = 50) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/articles`, {
//         limit,
//         output_format: "csv",
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching FMP articles:", error);
//       throw new Error(
//         "Unable to fetch articles: " +
//           (error.response?.data?.detail || error.message)
//       );
//     }
//   },

//   // Ask a question to the AI
//   askFinancialQuestion: async (query, symbols = null, collectFresh = false) => {
//     try {
//       const response = await axios.post(`${API_BASE_URL}/ask`, {
//         query,
//         symbols,
//         collect_fresh: collectFresh,
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Error asking financial question:", error);
//       throw new Error(
//         "Unable to process question: " +
//           (error.response?.data?.detail || error.message)
//       );
//     }
//   },

//   // Get all available data
//   getAvailableData: async () => {
//     try {
//       const response = await axios.get(`${API_BASE_URL}/available-data`);
//       return response.data;
//     } catch (error) {
//       console.error("Error fetching available data:", error);
//       throw new Error(
//         "Unable to fetch available data: " +
//           (error.response?.data?.detail || error.message)
//       );
//     }
//   },

//   // Collect fresh data for a symbol
//   collectFreshData: async (symbols, options = {}) => {
//     try {
//       const {
//         collectNews = true,
//         collectFinancials = true,
//         collectHistorical = true,
//       } = options;

//       const response = await axios.post(`${API_BASE_URL}/collect-data`, {
//         symbols: Array.isArray(symbols) ? symbols : [symbols],
//         collect_news: collectNews,
//         collect_financials: collectFinancials,
//         collect_historical: collectHistorical,
//       });

//       return response.data;
//     } catch (error) {
//       console.error("Error collecting fresh data:", error);
//       throw new Error(
//         "Unable to collect fresh data: " +
//           (error.response?.data?.detail || error.message)
//       );
//     }
//   },
// };

// export default financialApi;

// // import axios from "axios";

// // const API_BASE_URL = "http://localhost:8000";

// // // Export the base URL for use in other files
// // export { API_BASE_URL };

// // const financialApi = {
// //   // Get all available stock symbols
// //   getSymbols: async () => {
// //     try {
// //       const response = await axios.get(`${API_BASE_URL}/symbols`);
// //       return response.data.symbols;
// //     } catch (error) {
// //       console.error("Error fetching symbols:", error);
// //       if (error.response) {
// //         console.error("Response data:", error.response.data);
// //         console.error("Response status:", error.response.status);
// //       } else if (error.request) {
// //         console.error("No response received:", error.request);
// //       } else {
// //         console.error("Request setup error:", error.message);
// //       }
// //       // Return default symbols as fallback
// //       return ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "META", "NVDA", "IBM"];
// //     }
// //   },

// //   // Get real-time stock quotes
// //   getStockQuotes: async (symbols) => {
// //     try {
// //       const response = await axios.post(`${API_BASE_URL}/quotes`, {
// //         symbols: Array.isArray(symbols) ? symbols : [symbols],
// //         output_format: "csv",
// //       });
// //       return response.data;
// //     } catch (error) {
// //       console.error("Error fetching stock quotes:", error);
// //       logDetailedError(error);
// //       throw new Error(
// //         "Unable to fetch stock quotes: " +
// //           (error.response?.data?.detail || error.message)
// //       );
// //     }
// //   },

// //   // Get historical prices for a stock
// //   getHistoricalPrices: async (symbols) => {
// //     try {
// //       const response = await axios.post(`${API_BASE_URL}/historical-prices`, {
// //         symbols: Array.isArray(symbols) ? symbols : [symbols],
// //         output_format: "csv",
// //       });
// //       return response.data;
// //     } catch (error) {
// //       console.error("Error fetching historical prices:", error);
// //       logDetailedError(error);
// //       throw new Error(
// //         "Unable to fetch historical prices: " +
// //           (error.response?.data?.detail || error.message)
// //       );
// //     }
// //   },

// //   // Get company news
// //   getCompanyNews: async (symbols, daysBack = 30) => {
// //     try {
// //       const response = await axios.post(`${API_BASE_URL}/company-news`, {
// //         symbols: Array.isArray(symbols) ? symbols : [symbols],
// //         days_back: daysBack,
// //         output_format: "csv",
// //       });
// //       return response.data;
// //     } catch (error) {
// //       console.error("Error fetching company news:", error);
// //       logDetailedError(error);
// //       throw new Error(
// //         "Unable to fetch company news: " +
// //           (error.response?.data?.detail || error.message)
// //       );
// //     }
// //   },

// //   // Get basic financials for a company
// //   getBasicFinancials: async (symbols) => {
// //     try {
// //       const response = await axios.post(`${API_BASE_URL}/financials`, {
// //         symbols: Array.isArray(symbols) ? symbols : [symbols],
// //         output_format: "csv",
// //       });
// //       return response.data;
// //     } catch (error) {
// //       console.error("Error fetching basic financials:", error);
// //       logDetailedError(error);
// //       throw new Error(
// //         "Unable to fetch financials: " +
// //           (error.response?.data?.detail || error.message)
// //       );
// //     }
// //   },

// //   // Get FMP articles
// //   getFmpArticles: async (limit = 50) => {
// //     try {
// //       const response = await axios.post(`${API_BASE_URL}/articles`, {
// //         limit,
// //         output_format: "csv",
// //       });
// //       return response.data;
// //     } catch (error) {
// //       console.error("Error fetching FMP articles:", error);
// //       logDetailedError(error);
// //       throw new Error(
// //         "Unable to fetch articles: " +
// //           (error.response?.data?.detail || error.message)
// //       );
// //     }
// //   },

// //   // Ask a question to the AI
// //   askFinancialQuestion: async (query, symbols = null, collectFresh = false) => {
// //     try {
// //       const response = await axios.post(`${API_BASE_URL}/ask`, {
// //         query,
// //         symbols,
// //         collect_fresh: collectFresh,
// //       });
// //       return response.data;
// //     } catch (error) {
// //       console.error("Error asking financial question:", error);
// //       logDetailedError(error);
// //       throw new Error(
// //         "Unable to process question: " +
// //           (error.response?.data?.detail || error.message)
// //       );
// //     }
// //   },

// //   // Get all available data
// //   getAvailableData: async () => {
// //     try {
// //       const response = await axios.get(`${API_BASE_URL}/available-data`);
// //       return response.data;
// //     } catch (error) {
// //       console.error("Error fetching available data:", error);
// //       logDetailedError(error);
// //       throw new Error(
// //         "Unable to fetch available data: " +
// //           (error.response?.data?.detail || error.message)
// //       );
// //     }
// //   },

// //   // Collect fresh data for a symbol
// //   collectFreshData: async (symbols, options = {}) => {
// //     try {
// //       const {
// //         collectNews = true,
// //         collectFinancials = true,
// //         collectHistorical = true,
// //       } = options;

// //       const response = await axios.post(`${API_BASE_URL}/collect-data`, {
// //         symbols: Array.isArray(symbols) ? symbols : [symbols],
// //         collect_news: collectNews,
// //         collect_financials: collectFinancials,
// //         collect_historical: collectHistorical,
// //       });

// //       return response.data;
// //     } catch (error) {
// //       console.error("Error collecting fresh data:", error);
// //       logDetailedError(error);
// //       throw new Error(
// //         "Unable to collect fresh data: " +
// //           (error.response?.data?.detail || error.message)
// //       );
// //     }
// //   },
// // };

// // // Helper function to log detailed error information
// // const logDetailedError = (error) => {
// //   if (error.response) {
// //     // The request was made and the server responded with a status code
// //     // that falls out of the range of 2xx
// //     console.error("Response data:", error.response.data);
// //     console.error("Response status:", error.response.status);
// //     console.error("Response headers:", error.response.headers);
// //   } else if (error.request) {
// //     // The request was made but no response was received
// //     console.error("No response received:", error.request);
// //   } else {
// //     // Something happened in setting up the request that triggered an Error
// //     console.error("Request setup error:", error.message);
// //   }
// //   console.error("Error config:", error.config);
// // };

// // export default financialApi;

import axios from "axios";

const API_BASE_URL = "http://localhost:8000";

// Export the base URL for use in other files
export { API_BASE_URL };

const financialApi = {
  // Get all available stock symbols
  getSymbols: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/symbols`);
      return response.data.symbols;
    } catch (error) {
      console.error("Error fetching symbols:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Request setup error:", error.message);
      }
      // Return default symbols as fallback
      return [
        "AAPL",
        "MSFT",
        "GOOGL",
        "GOOG",
        "AMZN",
        "TSLA",
        "META",
        "NVDA",
        "IBM",
      ];
    }
  },

  // Get real-time stock quotes
  getStockQuotes: async (symbols) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/quotes`, {
        symbols: Array.isArray(symbols) ? symbols : [symbols],
        output_format: "csv",
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching stock quotes:", error);
      logDetailedError(error);
      throw new Error(
        "Unable to fetch stock quotes: " +
          (error.response?.data?.detail || error.message)
      );
    }
  },

  // Get historical prices for a stock
  getHistoricalPrices: async (symbols) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/historical-prices`, {
        symbols: Array.isArray(symbols) ? symbols : [symbols],
        output_format: "csv",
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching historical prices:", error);
      logDetailedError(error);
      throw new Error(
        "Unable to fetch historical prices: " +
          (error.response?.data?.detail || error.message)
      );
    }
  },

  // Get company news
  getCompanyNews: async (symbols, daysBack = 30) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/company-news`, {
        symbols: Array.isArray(symbols) ? symbols : [symbols],
        days_back: daysBack,
        output_format: "csv",
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching company news:", error);
      logDetailedError(error);
      throw new Error(
        "Unable to fetch company news: " +
          (error.response?.data?.detail || error.message)
      );
    }
  },

  // Get basic financials for a company
  getBasicFinancials: async (symbols) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/financials`, {
        symbols: Array.isArray(symbols) ? symbols : [symbols],
        output_format: "csv",
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching basic financials:", error);
      logDetailedError(error);
      throw new Error(
        "Unable to fetch financials: " +
          (error.response?.data?.detail || error.message)
      );
    }
  },

  // Get FMP articles
  getFmpArticles: async (limit = 50) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/articles`, {
        limit,
        output_format: "csv",
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching FMP articles:", error);
      logDetailedError(error);
      throw new Error(
        "Unable to fetch articles: " +
          (error.response?.data?.detail || error.message)
      );
    }
  },

  // Ask a question to the AI
  askFinancialQuestion: async (query, symbols = null, collectFresh = false) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/ask`, {
        query,
        symbols,
        collect_fresh: collectFresh,
      });
      return response.data;
    } catch (error) {
      console.error("Error asking financial question:", error);
      logDetailedError(error);
      throw new Error(
        "Unable to process question: " +
          (error.response?.data?.detail || error.message)
      );
    }
  },

  // Get all available data
  getAvailableData: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/available-data`);
      return response.data;
    } catch (error) {
      console.error("Error fetching available data:", error);
      logDetailedError(error);
      throw new Error(
        "Unable to fetch available data: " +
          (error.response?.data?.detail || error.message)
      );
    }
  },

  // Collect fresh data for a symbol
  collectFreshData: async (symbols, options = {}) => {
    try {
      const {
        collectNews = true,
        collectFinancials = true,
        collectHistorical = true,
      } = options;

      const response = await axios.post(`${API_BASE_URL}/collect-data`, {
        symbols: Array.isArray(symbols) ? symbols : [symbols],
        collect_news: collectNews,
        collect_financials: collectFinancials,
        collect_historical: collectHistorical,
      });

      return response.data;
    } catch (error) {
      console.error("Error collecting fresh data:", error);
      logDetailedError(error);
      throw new Error(
        "Unable to collect fresh data: " +
          (error.response?.data?.detail || error.message)
      );
    }
  },
};

// Helper function to log detailed error information
const logDetailedError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error("Response data:", error.response.data);
    console.error("Response status:", error.response.status);
    console.error("Response headers:", error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    console.error("No response received:", error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error("Request setup error:", error.message);
  }
  console.error("Error config:", error.config);
};

export default financialApi;
