# main.py
import os
import uvicorn
from typing import List, Optional
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from datetime import datetime, timedelta

# Import the classes from your existing file
from financial_collector import FinancialDataCollector, FinancialAIAgent

# Initialize FastAPI app
app = FastAPI(
    title="Financial Data API",
    description="API for collecting and analyzing financial data",
    version="1.0.0"
)

def strip_markdown(text):
    # Remove bold
    text = text.replace('**', '')
    # Remove italic
    text = text.replace('*', '')
    # Remove headers
    text = text.replace('# ', '').replace('## ', '').replace('### ', '')
    return text

# Add CORS middleware to allow cross-origin requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8001"],  # Frontend origin
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Create an instance of the FinancialDataCollector and FinancialAIAgent
collector = FinancialDataCollector()
ai_agent = FinancialAIAgent()

# Define Pydantic models for request/response bodies
class StockQuoteRequest(BaseModel):
    symbols: List[str]
    output_format: str = "csv"

class CompanyNewsRequest(BaseModel):
    symbols: List[str]  # Changed from symbol to symbols
    days_back: int = 30
    output_format: str = "csv"

class HistoricalPricesRequest(BaseModel):
    symbols: List[str]  # Changed from symbol to symbols
    output_format: str = "csv"

class FMPArticlesRequest(BaseModel):
    limit: int = 50
    output_format: str = "csv"

class BasicFinancialsRequest(BaseModel):
    symbols: List[str]  # Changed from symbol to symbols
    output_format: str = "csv"

class CollectDataRequest(BaseModel):
    symbols: List[str]
    collect_news: bool = True
    collect_financials: bool = True
    collect_historical: bool = True

class AIQuestionRequest(BaseModel):
    query: str
    symbols: Optional[List[str]] = None
    collect_fresh: bool = False

# API routes
@app.get("/")
async def root():
    return {"message": "Welcome to the Financial Data API. Visit /docs for API documentation."}

@app.post("/quotes")
async def get_stock_quotes(request: StockQuoteRequest):
    try:
        file_path = collector.get_stock_quotes(request.symbols, request.output_format)
        if file_path:
            return {"status": "success", "file_path": file_path}
        else:
            raise HTTPException(status_code=500, detail="Failed to fetch quotes")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/historical-prices")
async def get_historical_prices(request: HistoricalPricesRequest):
    try:
        results = []
        for symbol in request.symbols:
            file_path = collector.get_historical_prices(symbol, request.output_format)
            if file_path:
                results.append({"symbol": symbol, "file_path": file_path})
            else:
                results.append({"symbol": symbol, "error": f"Failed to fetch historical prices for {symbol}"})
        
        return {"status": "success", "results": results}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/articles")
async def get_fmp_articles(request: FMPArticlesRequest):
    try:
        file_path = collector.get_fmp_articles(request.limit, request.output_format)
        if file_path:
            return {"status": "success", "file_path": file_path}
        else:
            raise HTTPException(status_code=500, detail="Failed to fetch FMP articles")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/company-news")
async def get_company_news(request: CompanyNewsRequest):
    try:
        # Calculate from_date and to_date based on days_back
        to_date = datetime.now().strftime('%Y-%m-%d')
        from_date = (datetime.now() - timedelta(days=request.days_back)).strftime('%Y-%m-%d')
        
        results = []
        for symbol in request.symbols:
            file_path = collector.get_company_news(symbol, from_date, to_date, request.output_format)
            if file_path:
                results.append({"symbol": symbol, "file_path": file_path})
            else:
                results.append({"symbol": symbol, "error": f"Failed to fetch news for {symbol}"})
        
        return {"status": "success", "results": results}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/financials")
async def get_basic_financials(request: BasicFinancialsRequest):
    try:
        results = []
        for symbol in request.symbols:
            file_path = collector.get_basic_financials(symbol, request.output_format)
            if file_path:
                results.append({"symbol": symbol, "file_path": file_path})
            else:
                results.append({"symbol": symbol, "error": f"Failed to fetch financials for {symbol}"})
        
        return {"status": "success", "results": results}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/collect-data")
async def collect_fresh_data(request: CollectDataRequest):
    try:
        ai_agent.collect_fresh_data(
            request.symbols,
            collect_news=request.collect_news,
            collect_financials=request.collect_financials,
            collect_historical=request.collect_historical
        )
        return {"status": "success", "message": f"Successfully collected data for {', '.join(request.symbols)}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/ask")
async def answer_financial_question(request: AIQuestionRequest):
    try:
        answer = ai_agent.answer_financial_question(
            query=request.query,
            symbols=request.symbols,
            collect_fresh=request.collect_fresh
        )
        # Strip markdown formatting
        cleaned_answer = strip_markdown(answer)
        return {"status": "success", "question": request.query, "answer": cleaned_answer}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/symbols")
async def get_all_symbols():
    # This is a simple endpoint to get a list of common stock symbols
    # You might want to replace this with a more comprehensive list or 
    # fetch from a database
    symbols = [
        "AAPL","MSFT","GOOGL","AMZN","TSLA","META","NVDA","INTC","IBM","WMT","TGT","COST","NKE","PEP","KO","AMD","JPM","BAC","V","MA","GS","GE","CAT","BA","F","GM"
    ]
    return {"symbols": symbols}

@app.get("/available-data")
async def get_available_data():
    """
    Get a list of all available data files collected by the API
    """
    try:
        data_dir = "financial_data"
        result = {}
        
        # Check if data directory exists
        if not os.path.exists(data_dir):
            return {"status": "success", "data": "No data available"}
        
        # Traverse all subdirectories
        for subdir in ["prices", "historical", "company_news", "articles", "financials"]:
            full_path = os.path.join(data_dir, subdir)
            if os.path.exists(full_path):
                files = [f for f in os.listdir(full_path) if os.path.isfile(os.path.join(full_path, f))]
                result[subdir] = files
        
        return {"status": "success", "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Run the FastAPI application
if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)