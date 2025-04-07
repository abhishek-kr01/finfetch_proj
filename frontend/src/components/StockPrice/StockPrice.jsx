import React from "react";
import { useStockContext } from "../../context/StockContext";
import "./StockPrice.css";

function StockPrice() {
  const { stockData } = useStockContext();

  if (!stockData) {
    return (
      <div className="stock-price-container">
        <div className="price-loading">Loading price data...</div>
      </div>
    );
  }

  const { price, changePercent } = stockData;
  const isNegative = changePercent < 0;

  return (
    <div className="stock-price-container">
      <div className="current-price-large">${price.toFixed(2)}</div>

      <div className={`price-change ${isNegative ? "negative" : "positive"}`}>
        {isNegative ? "" : "+"}
        {changePercent.toFixed(0)}%
      </div>
    </div>
  );
}

export default StockPrice;
