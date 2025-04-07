import React from "react";
import { useStockContext } from "../../context/StockContext";
import "./CompanyInfo.css";

function CompanyInfo() {
  const { companyInfo } = useStockContext();

  return (
    <div className="company-info-container">
      <div className="info-row">
        <div className="info-label">Name</div>
        <div className="info-value">{companyInfo.name || "-"}</div>
      </div>

      <div className="info-row">
        <div className="info-label">Country</div>
        <div className="info-value">{companyInfo.country || "-"}</div>
      </div>

      <div className="info-row">
        <div className="info-label">Currency</div>
        <div className="info-value">{companyInfo.currency || "-"}</div>
      </div>

      <div className="info-row">
        <div className="info-label">Exchange</div>
        <div className="info-value">{companyInfo.exchange || "-"}</div>
      </div>

      <div className="info-row">
        <div className="info-label">IPO Date</div>
        <div className="info-value">{companyInfo.ipoDate || "-"}</div>
      </div>

      <div className="info-row">
        <div className="info-label">Market Capitalization</div>
        <div className="info-value">{companyInfo.marketCap || "-"}</div>
      </div>
    </div>
  );
}

export default CompanyInfo;
