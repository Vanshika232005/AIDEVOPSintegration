FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY services ./services
COPY data ./data
COPY vector_db ./vector_db
COPY knowledge_base ./knowledge_base

EXPOSE 8000 8001 8002

CMD ["uvicorn", "services.app.main:app", "--host", "0.0.0.0", "--port", "8000"]
