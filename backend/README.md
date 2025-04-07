# Financial Data API

A FastAPI backend service for collecting and analyzing financial data using the Financial Modeling Prep API, Finnhub API, and Google's Gemini AI.

## Features

- Real-time stock quotes
- Historical price data
- Financial news articles
- Company-specific news
- Basic financial metrics
- AI-powered financial analysis

## Prerequisites

- Python 3.8+
- API keys for:
  - [Financial Modeling Prep](https://financialmodelingprep.com/developer/docs/)
  - [Finnhub](https://finnhub.io/docs/api)
  - [Google Generative AI (Gemini)](https://ai.google.dev/)
- Docker (optional, for containerized deployment)

## Setup

### Environment Variables

Create a `.env` file in the project root directory with the following:

```
FMP_API_KEY=your_financial_modeling_prep_api_key
FINNHUB_API_KEY=your_finnhub_api_key
GEMINI_API_KEY=your_google_gemini_api_key
```

### Local Installation

1. Clone the repository
2. Create a virtual environment: `python -m venv venv`
3. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - Linux/Mac: `source venv/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Run the application: `uvicorn main:app --reload`

### Docker Installation

1. Make sure Docker and Docker Compose are installed
2. Build and start the container: `docker-compose up -d`

## API Endpoints

The API documentation is available at `/docs` or `/redoc` when the application is running.

### Main Endpoints

- `GET /`: Welcome message and information
- `GET /symbols`: List of common stock symbols
- `GET /available-data`: List of available data files

### Data Collection Endpoints

- `POST /quotes`: Get real-time stock quotes
- `POST /historical-prices`: Get historical price data
- `POST /articles`: Get financial news articles
- `POST /company-news`: Get company-specific news
- `POST /financials`: Get basic financial metrics
- `POST /collect-data`: Collect fresh data for specified symbols

### AI Analysis Endpoint

- `POST /ask`: Ask a financial question to be answered by the AI

## Example Usage

### Get Stock Quotes

```python
import requests
import json

response = requests.post(
    "http://localhost:8000/quotes",
    json={
        "symbols": ["AAPL", "MSFT", "GOOGL"],
        "output_format": "csv"
    }
)
print(json.dumps(response.json(), indent=2))
```

### Ask Financial Questions

```python
import requests
import json

response = requests.post(
    "http://localhost:8000/ask",
    json={
        "query": "What is the current price of Apple stock and how has it been trending?",
        "symbols": ["AAPL"],
        "collect_fresh": True
    }
)
print(json.dumps(response.json(), indent=2))
```

## File Structure

- `main.py`: FastAPI application and routes
- `financial_collector.py`: Core functionality for collecting and analyzing financial data
- `Dockerfile` & `docker-compose.yml`: Docker configuration
- `requirements.txt`: Python dependencies
- `.env`: Environment variables (not included in repository)

## Data Storage

All collected data is stored in the `financial_data` directory:

- `prices`: Real-time stock quotes
- `historical`: Historical price data
- `company_news`: Company-specific news
- `articles`: General financial news
- `financials`: Basic financial metrics

## Logs

Logs are stored in:

- `financial_data_collector.log`: Logs from the data collector
- `financial_ai_agent.log`: Logs from the AI agent
