import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useStockContext } from "../../context/StockContext";
import "./StockChart.css";

function StockChart() {
  const { historicalData, selectedSymbol, stockData } = useStockContext();
  const [timeFrame, setTimeFrame] = useState("1D"); // 1D, 5D, 1M, 6M, 1Y, ALL

  // Format data for chart display
  const formatChartData = () => {
    // In a real app, you would filter by timeFrame
    return historicalData.map((item) => ({
      date: item.date,
      price: parseFloat(item.price),
    }));
  };

  const chartData = formatChartData();

  // Calculate min and max for Y axis with some padding
  const prices = chartData.map((item) => item.price);
  const minPrice = Math.min(...prices) * 0.99;
  const maxPrice = Math.max(...prices) * 1.01;

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="chart-tooltip">
          <p className="tooltip-date">{label}</p>
          <p className="tooltip-price">Price: ${payload[0].value.toFixed(2)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="stock-chart-container">
      <div className="chart-header">
        <h2 className="chart-title">{selectedSymbol} Stock Performance</h2>
        <div className="chart-time-controls">
          <button
            className={`time-button ${timeFrame === "1D" ? "active" : ""}`}
            onClick={() => setTimeFrame("1D")}
          >
            1D
          </button>
          <button
            className={`time-button ${timeFrame === "5D" ? "active" : ""}`}
            onClick={() => setTimeFrame("5D")}
          >
            5D
          </button>
          <button
            className={`time-button ${timeFrame === "1M" ? "active" : ""}`}
            onClick={() => setTimeFrame("1M")}
          >
            1M
          </button>
          <button
            className={`time-button ${timeFrame === "6M" ? "active" : ""}`}
            onClick={() => setTimeFrame("6M")}
          >
            6M
          </button>
          <button
            className={`time-button ${timeFrame === "1Y" ? "active" : ""}`}
            onClick={() => setTimeFrame("1Y")}
          >
            1Y
          </button>
          <button
            className={`time-button ${timeFrame === "ALL" ? "active" : ""}`}
            onClick={() => setTimeFrame("ALL")}
          >
            ALL
          </button>
        </div>
      </div>

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={chartData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
            <XAxis
              dataKey="date"
              tick={{ fill: "var(--text-muted)" }}
              tickLine={{ stroke: "var(--border-color)" }}
              axisLine={{ stroke: "var(--border-color)" }}
            />
            <YAxis
              domain={[minPrice, maxPrice]}
              tick={{ fill: "var(--text-muted)" }}
              tickLine={{ stroke: "var(--border-color)" }}
              axisLine={{ stroke: "var(--border-color)" }}
              tickFormatter={(value) => `$${value.toFixed(2)}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="price"
              stroke="var(--primary-color)"
              dot={false}
              strokeWidth={2}
              activeDot={{
                r: 6,
                fill: "var(--primary-color)",
                stroke: "white",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-footer">
        <div className="current-price">
          <span className="price-label">Price:</span>
          <span className="price-value">${stockData?.price.toFixed(2)}</span>
        </div>
        <div className="time-stamp">
          <span>
            Time:{" "}
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}{" "}
            AM
          </span>
        </div>
      </div>
    </div>
  );
}

export default StockChart;
