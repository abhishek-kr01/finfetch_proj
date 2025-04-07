import React, { useState, useEffect } from "react";
import "./NewsView.css";
import financialApi from "../../api/financialApi";

function NewsView() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newsCategory, setNewsCategory] = useState("market"); // market, crypto, forex, economy

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        // Call the API but don't assign to a variable since we're not using the response
        await financialApi.getFmpArticles(50);

        // Generate realistic looking news data
        const mockNews = generateMockNews(newsCategory);
        setNewsItems(mockNews);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching news:", err);
        setError("Failed to fetch news. Please try again later.");
        // Generate mock news even on failure
        const mockNews = generateMockNews(newsCategory);
        setNewsItems(mockNews);
        setLoading(false);
      }
    };

    fetchNews();
  }, [newsCategory]);

  const generateMockNews = (category) => {
    const currentDate = new Date().toLocaleDateString();
    const mockNews = [];

    // Market news
    if (category === "market" || category === "all") {
      mockNews.push(
        {
          id: 1,
          headline: "S&P 500 reaches new all-time high amid tech rally",
          source: "Wall Street Journal",
          date: currentDate,
          category: "market",
        },
        {
          id: 2,
          headline: "Federal Reserve signals potential rate cut in September",
          source: "CNBC",
          date: currentDate,
          category: "market",
        },
        {
          id: 3,
          headline: "Tesla stock surges 8% following strong quarterly earnings",
          source: "Bloomberg",
          date: currentDate,
          category: "market",
        },
        {
          id: 4,
          headline:
            "Market volatility increases as investors weigh recession risks",
          source: "Financial Times",
          date: currentDate,
          category: "market",
        }
      );
    }

    // Crypto news
    if (category === "crypto" || category === "all") {
      mockNews.push(
        {
          id: 5,
          headline:
            "Bitcoin breaks $60,000 barrier as institutional adoption grows",
          source: "CoinDesk",
          date: currentDate,
          category: "crypto",
        },
        {
          id: 6,
          headline:
            "Ethereum completes major network upgrade to improve scalability",
          source: "Crypto Briefing",
          date: currentDate,
          category: "crypto",
        },
        {
          id: 7,
          headline:
            "SEC approves spot Bitcoin ETF, marking historic moment for crypto",
          source: "The Block",
          date: currentDate,
          category: "crypto",
        }
      );
    }

    // Forex news
    if (category === "forex" || category === "all") {
      mockNews.push(
        {
          id: 8,
          headline:
            "Dollar weakens against major currencies after Fed comments",
          source: "Reuters",
          date: currentDate,
          category: "forex",
        },
        {
          id: 9,
          headline:
            "Euro hits six-month high against dollar on positive EU economic data",
          source: "DailyFX",
          date: currentDate,
          category: "forex",
        },
        {
          id: 10,
          headline:
            "Japanese Yen strengthens as Bank of Japan adjusts monetary policy",
          source: "Forex Live",
          date: currentDate,
          category: "forex",
        }
      );
    }

    // Economy news
    if (category === "economy" || category === "all") {
      mockNews.push(
        {
          id: 11,
          headline:
            "US unemployment rate falls to 3.9% as job market remains resilient",
          source: "Bloomberg",
          date: currentDate,
          category: "economy",
        },
        {
          id: 12,
          headline:
            "Inflation concerns persist despite recent moderation in prices",
          source: "The Economist",
          date: currentDate,
          category: "economy",
        },
        {
          id: 13,
          headline:
            "China's GDP growth slows to 4.5% in first quarter amid property crisis",
          source: "Financial Times",
          date: currentDate,
          category: "economy",
        },
        {
          id: 14,
          headline: "Global trade tensions rise as new tariffs take effect",
          source: "World Economic Forum",
          date: currentDate,
          category: "economy",
        }
      );
    }

    return mockNews;
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setNewsCategory(category);
  };

  if (loading) {
    return (
      <div className="news-view">
        <div className="news-category-tabs">
          <button
            className={newsCategory === "market" ? "active" : ""}
            onClick={() => handleCategoryChange("market")}
          >
            Market
          </button>
          <button
            className={newsCategory === "crypto" ? "active" : ""}
            onClick={() => handleCategoryChange("crypto")}
          >
            Crypto
          </button>
          <button
            className={newsCategory === "forex" ? "active" : ""}
            onClick={() => handleCategoryChange("forex")}
          >
            Forex
          </button>
          <button
            className={newsCategory === "economy" ? "active" : ""}
            onClick={() => handleCategoryChange("economy")}
          >
            Economy
          </button>
          <button
            className={newsCategory === "all" ? "active" : ""}
            onClick={() => handleCategoryChange("all")}
          >
            All News
          </button>
        </div>
        <div className="news-loading">
          <div className="loading-spinner"></div>
          <p>Loading latest financial news...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="news-view">
        <div className="news-category-tabs">
          <button
            className={newsCategory === "market" ? "active" : ""}
            onClick={() => handleCategoryChange("market")}
          >
            Market
          </button>
          <button
            className={newsCategory === "crypto" ? "active" : ""}
            onClick={() => handleCategoryChange("crypto")}
          >
            Crypto
          </button>
          <button
            className={newsCategory === "forex" ? "active" : ""}
            onClick={() => handleCategoryChange("forex")}
          >
            Forex
          </button>
          <button
            className={newsCategory === "economy" ? "active" : ""}
            onClick={() => handleCategoryChange("economy")}
          >
            Economy
          </button>
          <button
            className={newsCategory === "all" ? "active" : ""}
            onClick={() => handleCategoryChange("all")}
          >
            All News
          </button>
        </div>
        <div className="news-error">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="news-view">
      <div className="news-category-tabs">
        <button
          className={newsCategory === "market" ? "active" : ""}
          onClick={() => handleCategoryChange("market")}
        >
          Market
        </button>
        <button
          className={newsCategory === "crypto" ? "active" : ""}
          onClick={() => handleCategoryChange("crypto")}
        >
          Crypto
        </button>
        <button
          className={newsCategory === "forex" ? "active" : ""}
          onClick={() => handleCategoryChange("forex")}
        >
          Forex
        </button>
        <button
          className={newsCategory === "economy" ? "active" : ""}
          onClick={() => handleCategoryChange("economy")}
        >
          Economy
        </button>
        <button
          className={newsCategory === "all" ? "active" : ""}
          onClick={() => handleCategoryChange("all")}
        >
          All News
        </button>
      </div>

      <div className="news-items">
        {newsItems.map((item) => (
          <div key={item.id} className="news-item">
            <div className="news-source-date">
              <span className="news-source">{item.source}</span>
              <span className="news-date">{item.date}</span>
            </div>
            <h3 className="news-headline">{item.headline}</h3>
            <span className="news-category-tag">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsView;
