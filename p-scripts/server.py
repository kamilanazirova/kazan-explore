import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from OpenAiWrapper import ask_gpt_for_a_response

# Настройка логирования
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Разрешаем доступ с любых доменов
    allow_credentials=True,
    allow_methods=["*"],  # Разрешаем все HTTP-методы, включая OPTIONS
    allow_headers=["*"],  # Разрешаем все заголовки
)

class QueryModel(BaseModel):
    query: str

@app.post("/run-script")
def run_script(data: QueryModel):
    logger.info(f"Получен запрос: {data.query}")
    result = ask_gpt_for_a_response(data.query, "gpt-4o-mini")
    logger.info(f"Ответ от OpenAI: {result}")
    return result

@app.get("/")
def read_root():
    return {"message": "API is running!"}
