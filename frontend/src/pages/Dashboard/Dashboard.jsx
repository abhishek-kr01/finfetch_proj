// // // import React from "react";
// // // import Header from "../../components/Header/Header";
// // // import StockChart from "../../components/StockChart/StockChart";
// // // import CompanyInfo from "../../components/CompanyInfo/CompanyInfo";
// // // import StockPrice from "../../components/StockPrice/StockPrice";
// // // import NewsPanel from "../../components/NewsPanel/NewsPanel";
// // // import { useStockContext } from "../../context/StockContext";
// // // import "./Dashboard.css";

// // // function Dashboard() {
// // //   const { loading, error } = useStockContext();

// // //   if (loading) {
// // //     return (
// // //       <div className="dashboard">
// // //         <Header />
// // //         <div className="container">
// // //           <div className="loading-state">
// // //             <div className="loading-spinner"></div>
// // //             <p>Loading financial data...</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="dashboard">
// // //         <Header />
// // //         <div className="container">
// // //           <div className="error-state">
// // //             <div className="error-icon">!</div>
// // //             <p>{error}</p>
// // //             <button className="btn btn-primary">Retry</button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="dashboard">
// // //       <Header />
// // //       <div className="container">
// // //         <div className="dashboard-grid">
// // //           <div className="main-chart-area">
// // //             <StockChart />
// // //           </div>

// // //           <div className="sidebar-area">
// // //             <StockPrice />
// // //             <CompanyInfo />
// // //           </div>

// // //           <div className="news-area">
// // //             <NewsPanel />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // export default Dashboard;

// import React from "react";
// import Header from "../../components/Header/Header";
// import StockChart from "../../components/StockChart/StockChart";
// import CompanyInfo from "../../components/CompanyInfo/CompanyInfo";
// import StockPrice from "../../components/StockPrice/StockPrice";
// import NewsPanel from "../../components/NewsPanel/NewsPanel";
// import { useStockContext } from "../../context/StockContext";
// import "./Dashboard.css";

// function Dashboard() {
//   const { loading, error, retryFetchData } = useStockContext();

//   const handleRetry = () => {
//     if (retryFetchData) {
//       retryFetchData();
//     }
//   };

//   if (loading) {
//     return (
//       <div className="dashboard">
//         <Header />
//         <div className="container">
//           <div className="loading-state">
//             <div className="loading-spinner"></div>
//             <p>Loading financial data...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="dashboard">
//         <Header />
//         <div className="container">
//           <div className="error-state">
//             <div className="error-icon">!</div>
//             <p>{error}</p>
//             <button className="btn btn-primary" onClick={handleRetry}>
//               Retry
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="dashboard">
//       <Header />
//       <div className="container">
//         <div className="dashboard-grid">
//           <div className="main-chart-area">
//             <StockChart />
//           </div>

//           <div className="sidebar-area">
//             <StockPrice />
//             <CompanyInfo />
//           </div>

//           <div className="news-area">
//             <NewsPanel />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// // import React from "react";
// // import Header from "../../components/Header/Header";
// // import StockChart from "../../components/StockChart/StockChart";
// // import CompanyInfo from "../../components/CompanyInfo/CompanyInfo";
// // import StockPrice from "../../components/StockPrice/StockPrice";
// // import NewsPanel from "../../components/NewsPanel/NewsPanel";
// // import { useStockContext } from "../../context/StockContext";
// // import "./Dashboard.css";

// // function Dashboard() {
// //   const {
// //     loading,
// //     error,
// //     selectedSymbol,
// //     retryFetchData,
// //     lastUpdated,
// //     autoRefresh,
// //     setAutoRefresh,
// //   } = useStockContext();

// //   const handleRetry = () => {
// //     if (retryFetchData) {
// //       retryFetchData();
// //     }
// //   };

// //   const toggleAutoRefresh = () => {
// //     setAutoRefresh(!autoRefresh);
// //   };

// //   if (loading) {
// //     return (
// //       <div className="dashboard">
// //         <Header />
// //         <div className="container">
// //           <div className="loading-state">
// //             <div className="loading-spinner"></div>
// //             <p>Loading financial data...</p>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="dashboard">
// //         <Header />
// //         <div className="container">
// //           <div className="error-state">
// //             <div className="error-icon">!</div>
// //             <p>{error}</p>
// //             <button className="btn btn-primary" onClick={handleRetry}>
// //               Retry
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="dashboard">
// //       <Header />
// //       <div className="container">
// //         <div className="dashboard-header">
// //           <h1>{selectedSymbol} Dashboard</h1>
// //           <div className="refresh-info">
// //             <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
// //             <label className="auto-refresh-toggle">
// //               <input
// //                 type="checkbox"
// //                 checked={autoRefresh}
// //                 onChange={toggleAutoRefresh}
// //               />
// //               <span>Auto-refresh</span>
// //             </label>
// //             <button className="refresh-button" onClick={handleRetry}>
// //               Refresh Now
// //             </button>
// //           </div>
// //         </div>

// //         <div className="dashboard-grid">
// //           <div className="main-chart-area">
// //             <StockChart />
// //           </div>

// //           <div className="sidebar-area">
// //             <StockPrice />
// //             <CompanyInfo />
// //           </div>

// //           <div className="news-area">
// //             <NewsPanel />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Dashboard;

import React from "react";
import Header from "../../components/Header/Header";
import StockChart from "../../components/StockChart/StockChart";
import CompanyInfo from "../../components/CompanyInfo/CompanyInfo";
import StockPrice from "../../components/StockPrice/StockPrice";
import NewsPanel from "../../components/NewsPanel/NewsPanel";
import { useStockContext } from "../../context/StockContext";
import "./Dashboard.css";

function Dashboard() {
  const {
    loading,
    error,
    selectedSymbol,
    retryFetchData,
    lastUpdated,
    autoRefresh,
    setAutoRefresh,
    showNews,
  } = useStockContext();

  const handleRetry = () => {
    if (retryFetchData) {
      retryFetchData();
    }
  };

  const toggleAutoRefresh = () => {
    setAutoRefresh(!autoRefresh);
  };

  if (loading) {
    return (
      <div className="dashboard">
        <Header />
        <div className="container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading financial data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard">
        <Header />
        <div className="container">
          <div className="error-state">
            <div className="error-icon">!</div>
            <p>{error}</p>
            <button className="btn btn-primary" onClick={handleRetry}>
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  // For debugging - set to true when troubleshooting
  const showDebugInfo = false;

  return (
    <div className="dashboard">
      <Header />
      <div className="container">
        <div className="dashboard-header">
          <h1>{selectedSymbol} Dashboard</h1>
          <div className="refresh-info">
            <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
            <label className="auto-refresh-toggle">
              <input
                type="checkbox"
                checked={autoRefresh}
                onChange={toggleAutoRefresh}
              />
              <span>Auto-refresh</span>
            </label>
            <button className="refresh-button" onClick={handleRetry}>
              Refresh Now
            </button>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="main-chart-area">
            <StockChart />
          </div>

          <div className="sidebar-area">
            <StockPrice />
            <CompanyInfo />
          </div>

          {showNews && (
            <div className="news-area">
              <NewsPanel />
            </div>
          )}
        </div>

        {showDebugInfo && (
          <div className="debug-panel">
            <h3>Debug Information</h3>
            <p>Selected Symbol: {selectedSymbol}</p>
            <p>Last Updated: {lastUpdated.toLocaleTimeString()}</p>
            <p>Auto-refresh: {autoRefresh ? "On" : "Off"}</p>
            <p>News Visible: {showNews ? "Yes" : "No"}</p>
            <button
              onClick={() =>
                console.log({
                  selectedSymbol,
                  lastUpdated,
                  autoRefresh,
                  showNews,
                })
              }
            >
              Log Basic State to Console
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
