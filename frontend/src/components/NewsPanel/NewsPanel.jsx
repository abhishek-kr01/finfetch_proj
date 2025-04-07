import React from "react";
import { useStockContext } from "../../context/StockContext";
import "./NewsPanel.css";

function NewsPanel() {
  const { newsData, selectedSymbol } = useStockContext();

  if (!newsData || newsData.length === 0) {
    return (
      <div className="news-panel">
        <h3 className="news-title">Recent News</h3>
        <div className="no-news">No recent news available</div>
      </div>
    );
  }

  return (
    <div className="news-panel">
      <h3 className="news-title">Recent News for {selectedSymbol}</h3>

      <div className="news-list">
        {newsData.map((item) => (
          <div key={item.id} className="news-item">
            <div className="news-meta">
              <span className="news-source">{item.source}</span>
              <span className="news-date">{item.date}</span>
            </div>
            <h4 className="news-headline">{item.headline}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsPanel;
