FROM python:3.10-slim

WORKDIR /app

# Copy requirements first for better caching
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application files
COPY main.py financial_collector.py .env ./

# Create directory for logs
RUN mkdir -p logs

# Create data directories
RUN mkdir -p financial_data/prices \
    financial_data/historical \
    financial_data/company_news \
    financial_data/articles \
    financial_data/financials

# Expose port
EXPOSE 8000

# Command to run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]